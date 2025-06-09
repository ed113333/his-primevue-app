<template>
  <PrimeTabs :value="props.activeId" :scrollable="scrollable" @update:value="onTabChange">
      <PrimeTabList class="gap-1 border-none! bg-blue-500">
          <PrimeTab v-for="tab in props.items" :key="tab.id"  :value="tab.id"
          :pt="{
              headerAction: {
                class: [
                  variantClass,
                  activeId === tab.id ? 'font-bold bg-blue-500' : '',
                  'flex items-center justify-between'
                ]
              }
            }">
            
            {{ tab.name }}
            <Button
                v-if="closable "
                icon="pi pi-times"
                severity="danger"
                text
                size="small"
                class="absolute top-0 right-0"
                @click="closeTab(tab.id)"
              />
          </PrimeTab>
          
      </PrimeTabList>
      <PrimeTabPanels>
      <PrimeTabPanel
        v-for="(tab, idx) in props.items"
        :key="tab.id"
        :header="tab.name"
        :disabled="tab.disabled"
        :value="tab.id"
      >
        <component v-if="activeIndex === idx && tab.panel" :is="tab.panel" />
        <slot v-else :name="tab.id" />
      </PrimeTabPanel>
    </PrimeTabPanels>
  </PrimeTabs>


</template>

<script setup lang="ts">
import { computed } from 'vue'
import PrimeTabs from 'primevue/tabs';
import PrimeTabList from 'primevue/tablist';
import PrimeTab from 'primevue/tab';
import PrimeTabPanels from 'primevue/tabpanels';
import PrimeTabPanel from 'primevue/tabpanel';



export interface TabItem {
  id: string
  name: string
  panel?: any // optional panel component
  disabled?: boolean
}

export interface TabsProps {
  variant?: 'his' | 'fn' | 'card-1' | 'card-2'
  scrollable?: boolean
  closable?: boolean
  items: TabItem[]
  activeId: string
}


const props = defineProps<{
  items: TabItem[]
  activeId: string
  variant?: TabsProps['variant']
  scrollable?: boolean
  closable?: boolean
}>()

const emit = defineEmits<{
  (e: 'change', id: string): void
  (e: 'close', id: string): void
}>()

const activeIndex = computed(() =>
  Array.isArray(props.items) ? props.items.findIndex((t) => t.id === props.activeId) : -1
)


const variantClass = computed(() => {
  switch (props.variant) {
    case 'his':
      return 'bg-blue-100 text-blue-700'
    case 'fn':
      return 'bg-green-100 text-green-700'
    case 'card-1':
      return 'bg-purple-100 text-purple-700'
    case 'card-2':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return ''
  }
})



function onTabChange(tabId: string | number) {
  console.log('使用者切換到：', tabId)
  emit('change', String(tabId))
}

const closeTab = (tabId: string) => {
  emit('close', tabId)
}
</script>

<style scoped>
.custom-tabs ::v-deep(.p-tabview-nav) {
  padding: 0.25rem;
  gap: 0.5rem;
}
</style>
