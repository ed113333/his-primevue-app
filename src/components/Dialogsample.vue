
<template>
    <Toast />
    <ConfirmDialog :closeButtonProps="{ label: 'NO' }">
    </ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1()" label="Save" outlined></Button>
        <Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
    </div>


    <Button label="Show" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Edit Profile" :closeButtonProps="{ label: 'NO' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

import { ref } from "vue";

const visible = ref(false);
// const dialoPt = {
//   table: { style: 'min-width: 50rem' },
//   column: {
//     bodycell: ({ state }) => ({
//       class: [{ '!py-0': state['d_editing'] },]
//     })
//   }
//};


const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        closeButtonProps: {
            label: 'NO'
        },
        rejectProps: {
            label: 'close',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'test'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>

<style>
.custom-close-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
}
</style>