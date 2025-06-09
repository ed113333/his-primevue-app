<template>
  <div>
    <ul v-for="tree in trees" :key="tree.key">
      <div class="flex gap-2">
        <div class="bg-primary h-[25px] w-2"></div>
        <p class="text-primary text-lg">{{ tree.label }}</p>
      </div>
      <Tree
        :value="tree.items"
        selectionMode="single"
        @nodeSelect="onNodeSelect"
        :dt="amberColor"
        :expandedKeys="expandedKeys"
        @update:expandedKeys="onToggle"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PrimeTree from 'primevue/tree' 

const Tree = PrimeTree

export interface TreeNode {
  key: string
  label?: string
  data?: any
  icon?: string
  children?: TreeNode[]
  leaf?: boolean
  selectable?: boolean
  expanded?: boolean
  type?: string
  style?: any
  class?: string
  [key: string]: any
}


export interface TreeType {
  key: string
  label: string
  items: TreeNode[]

}

// ---------- Props & Emits ---------- //
const props = defineProps<{
  trees: TreeType[]
  expandedKeys: Record<string, boolean> // <--- 加上這行
  variant?: string
}>()


function onToggle(newKeys: Record<string, boolean>) {
  emit('update:expandedKeys', newKeys)
}

const emit = defineEmits(['nodeSelect', 'update:expandedKeys','nodeClick', 'toggle'])

// ---------- Event: 點擊節點 ---------- //
function onNodeSelect(node: TreeNode) {
  emit('nodeSelect', node.key)
}



const amberColor = ref({
    handle: {
        borderRadius: '4px'
    },
    colorScheme: {
        light: {
            root: {
                Color: '{zinc.50}',
                Background: '{indigo.900}',
                NodeColor: '{zinc.50}',
                NodeToggleButtonColor: '{zinc.50}',
            },

        }
    }
});




</script>
