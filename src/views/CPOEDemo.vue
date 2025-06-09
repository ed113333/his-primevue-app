<script setup lang="ts">
  import type { TabItem, TabsProps } from '../components/Tabs.vue'

  import Tabs from '../components/Tabs.vue'
  import TabPanel from '../pages/Tabs/TabPane1.vue'
  import { ref, shallowRef } from 'vue'

  const variant = ref<TabsProps['variant']>('his')
  const closable = ref<TabsProps['closable']>(true)
  const scrollable = ref<TabsProps['scrollable']>(true)

  const tabItems = shallowRef<TabItem[]>([

    { id: 'REGSFN01', name: '病患清單', panel: TabPanel ,disabled: true},
    { id: 'REGSFN02', name: '門診醫囑', panel: TabPanel },
  ])

  const activeTab = ref<string>(tabItems.value[0].id)

  const handleClose = (tabId: string) => {
    const newTabItems = tabItems.value.filter((tab) => tab.id !== tabId)
    tabItems.value = newTabItems
  }

  const handleChange = (tabId: string) => {
    console.log('Parent received change:', tabId)
    activeTab.value = tabId
    }
</script>

<template>
  <Tabs
    :active-id="activeTab"
    :variant="variant"
    :items="tabItems"
    :scrollable="scrollable"
    :closable="closable"
    @change="handleChange"
    @close="handleClose"
  />
  
<!-- Removed redundant Tabs component causing type mismatch -->
</template>