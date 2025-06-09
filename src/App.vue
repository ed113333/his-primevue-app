<script setup lang="ts">
import Headless from './components/Headless.vue';
import { ref } from 'vue'

const amberColor = ref({
    handle: {
        borderRadius: '4px'
    },
    colorScheme: {
        light: {
            root: {
                Color: '{zinc.50}',
                Background: '{indigo.600}',
            },

        }
    }
});

</script>



<template>
      <Menubar  :dt="amberColor" >
        <template #start>
          <Headless />
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a v-ripple class="flex items-center" v-bind="props.action">
                <span>{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
            </a>
        </template>
        <template #end>
            <div class="flex items-center gap-2">
                <Button label="重要" icon="pi pi-bell" size="small" aria-label="Filter"/>
              </div>
        </template>
    </Menubar>
    <div class="p-1">
      <router-view />
    </div>

</template>

