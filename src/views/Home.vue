<template>
    <div class="card flex m-2">
        <InputGroup size="small">
            <InputGroupAddon size="small">
                <i class="pi pi-user" size="small"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Username" size="small"/>
        </InputGroup>

    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
const text1 = ref(null);


</script>