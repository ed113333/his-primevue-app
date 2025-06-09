<template>
  <div class="card flex justify-start">
      <Drawer v-model:visible="visible"   :dt="amberColor">
          <template #container="{ closeCallback }">
              <div class="flex flex-col h-full">
                  <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                      <span>
                          <Button type="button" @click="closeCallback" icon="pi pi-times" size="small" rounded></Button>
                      </span>
                  </div>
                  <div class="overflow-y-auto p-4">
                    <Tree
                      :trees="[FREQUENCIES_TREE, MENU_TREE]"
                      variant="his"
                      v-model:selectionKeys="selection"
                      @nodeSelect="handleNodeSelect"
                      :expandedKeys="expandedKeys"
                      @update:expandedKeys="onToggle"
                    />
                  </div>

              </div>
          </template>
      </Drawer>
      <Button icon="pi pi-bars" @click="visible = true" size="small"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TreeType } from '../components/Tree.vue';
import Tree from '../components/Tree.vue';

  const visible = ref(false)
  const selection = ref('')

  const expandedKeys = ref<Record<string, boolean>>({
    'frequencies-1': true
  })

  function onToggle(newExpandedKeys: Record<string, boolean>) {
    expandedKeys.value = newExpandedKeys
  }

  const FREQUENCIES_TREE: TreeType = {
    key: 'frequencies',
    label: '第一棵樹',
    items: [
      {
        key: 'frequencies-1',
        label: '測試用',
        children: [
          {
            key: '2-1-1',
            label: '掛號系統',
            route: '/',
            leaf: true 
          },
          {
            key: '2-1-2',
            label: '月班維護',
            route: '/CPOEDemo',
            leaf: true 
          },
          {
            key: '2-1-3',
            label: '追蹤修訂(taptip)',
            route: '/Textcheck',
            leaf: true 
          },
          {
            key: '2-1-4',
            label: 'Datatable',
            route: '/Datatable',
            leaf: true 
          }
        ]
      }
    ]
  }

  const MENU_TREE: TreeType = {
    key: 'menu',
    label: '第二棵樹',
    items: [
      {
        key: '1',
        label: '危急值',
        children: [
          { key: '1-1', label: '危急值通報紀錄', route: '/datatable', leaf: true },
          { key: '1-2', label: '感染管制通報紀錄', route: '/datatable', leaf: true },
          { key: '1-3', label: '待回覆提示', route: '/datatable', leaf: true }
        ]
      },
      {
        key: '2',
        label: '掛號系統',
        children: [
          { key: '2-1', label: '掛號作業', route: '/datatable', leaf: true },
          { key: '2-2', label: '停代診聯絡作業', route: '/datatable', leaf: true },
          {
            key: '2-3',
            label: '維護作業',
            children: [
              { key: '2-3-1', label: '給號方式維護', route: '/datatable', leaf: true },
              { key: '2-3-2', label: '行事曆維護', route: '/datatable', leaf: true }
            ]
          }
        ]
      }
    ]
  }


  const amberColor = ref({
    colorScheme: {
        light: {
            root: {
                Background: '{indigo.900}',
                Color: '{indigo.950}'
            },

        }
    }
});


import { useRouter } from 'vue-router'

const router = useRouter()

const getNodeDepth = (
  nodeId: string,
  nodes: TreeType['items'],
  currentDepth = 1): number | null => {
  for (const node of nodes) {
    console.log('Checking node:', node.key, 'at depth:', currentDepth) // 除錯用
    if (node.key === nodeId) {
      console.log('Found nodeId:', nodeId, 'at depth:', currentDepth)
      return currentDepth
    }
    if (node.children) {
      const depth = getNodeDepth(nodeId, node.children, currentDepth + 1)
      if (depth !== null) return depth
    }
  }
  return null
}

const handleNodeSelect = (nodeId: string) => {
  let foundNode: any = null

  const findNode = (nodes: TreeType['items']): any => {
    for (const node of nodes) {
      if (node.key === nodeId) return node
      if (node.children) {
        const found = findNode(node.children)
        if (found) return found
      }
    }
    return null
  }

  for (const tree of [FREQUENCIES_TREE, MENU_TREE]) {
    foundNode = findNode(tree.items)
    if (foundNode) break
  }

  if (!foundNode) return

  // 更新選取節點
  selection.value = nodeId

  // 如果是父節點（有 children），只處理展開收合，不導航
  if (foundNode.children) {
    const newKeys = { ...expandedKeys.value }

    if (newKeys[nodeId]) {
      delete newKeys[nodeId]
    } else {
      newKeys[nodeId] = true
    }

    onToggle(newKeys) // ✅ 手動觸發與同步 @update:expandedKeys
    return
  }

  // 如果是葉節點（沒有 children），才導頁
  if (foundNode.route) {
    const routeTo = Array.isArray(foundNode.route) ? foundNode.route[0] : foundNode.route
    router.push(routeTo)
    visible.value = false
  }
}




</script>
