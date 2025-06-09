
<template>
  <div class="card">
    <Tabs value="0" >
    <TabList>
        <Tab value="0" >乳房外科特別門診(早)</Tab>
        <Tab value="1" >一般外科(午)</Tab>
        <Tab value="2" >一般外科(晚)</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0">
          <DataTable v-model:selection="selectedProduct" dataKey="id" :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete" 
            size="small"
            resizableColumns 
            columnResizeMode="fit" 
            showGridlines 
            paginator 
            :rows="10"
          >
              <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" class="truncate" size="small">
                <template #body="{ data, field }">
                  <span v-if="field === 'status' && !data[field]">未報到</span>
                  <span v-else-if="field === 'check' && data[field] === '0'">
                    <i class="pi pi-search"></i>
                  </span>
                  
                  <span v-else>{{ data[field] }}</span>
                </template> 
                  <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus fluid  size="small" />
                  </template>
                
              </Column>
          </DataTable>
        </TabPanel>
        <TabPanel value="1">
          <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id" @row-edit-save="onRowEditSave"
            size="small"
            resizableColumns 
            columnResizeMode="fit" 
            showGridlines 
            paginator 
            roweditoriniticon
            :rows="10"
              :pt="{
                  // table: { style: 'min-width: 50rem' },
                  // column: {
                  //     bodycell: ({ state }) => ({
                  //         style:  state['d_editing']&&'padding-top: 0.75rem; padding-bottom: 0.75rem'
                  //     })
                  // }
                  
              }"
              >
              <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" class="truncate" size="small">
                <template #body="{ data, field }">
                  <!-- 報到欄位：check -->
                  <div v-if="field === 'check'">
                    <span v-if="data[field] === '1'"><i class="pi pi-check"></i></span>
                    <span v-else><i class="pi pi-times"></i></span>
                  </div>

                  <div v-else-if="field === 'status'">
                    <span v-if="data[field] === 'A'"><i class="pi pi-times text-red-500"></i>暫存</span>
                    <span v-else-if="data[field] === 'C'"><i class="pi pi-check text-green-500"></i>已完成</span>
                    <span v-else>待看診</span>
                  </div>

                  <!-- 其他欄位 -->
                  <div v-else>
                    <span>{{ data[field] }}</span>
                  </div>
                </template>
                <template #editor="{ data, field }">
                  <InputText v-model="data[field]" autofocus fluid size="small" />
                </template>
              </Column>
              <Column
                frozen
                align-frozen="right"
                header="操作"
                size="small"
              >
                <template #body="{ editorInitCallback }">
                  <Button
                    size="small"
                    label="編輯"                    
                    icon="pi pi-pencil"
                    severity="secondary"
                    class="p-link"
                    text
                    rounded
                    @click="editorInitCallback"
                  />
                  <Button
                    size="small"
                    label="刪除"    
                    icon="pi pi-trash"
                    severity="secondary"
                    text
                    rounded
                  />
                </template>
                <template #editor="{ editorSaveCallback, editorCancelCallback, index }">
                  <Button
                    size="small"
                    label="儲存"
                    icon="pi pi-save"
                    text
                    rounded
                    @click="editorSaveCallback"
                  />
                  <Button
                    size="small"
                    label="取消"
                    icon="pi pi-times"
                    severity="danger"
                    text
                    rounded
                    @click="editorCancelCallback"
                  />
                </template>
              </Column>
          </DataTable>
        </TabPanel>
        <TabPanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </TabPanel>
    </TabPanels>
    </Tabs>
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { ProductService } from '../service/ProductService';

const products = ref();
const selectedProducts = ref();
const editingRows = ref([]);
const columns = ref([
  { field: 'id', header: '診號' },
  { field: 'check', header: '報到' },
  { field: 'status', header: '狀態' },
  { field: 'feeno', header: '病歷號' },
  { field: 'name', header: '姓名' },
  { field: 'sex', header: '性別' },
  { field: 'birthday', header: '生日' },
  { field: 'tag', header: '註記' },
  { field: 'din', header: '身分' },
  { field: '', header: '報告' }
]);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        check: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        status: { value: null, matchMode: FilterMatchMode.IN },
        feeno: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        sex: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        birthday: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        tag: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        din: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        page: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    };
};

initFilters();

const clearFilter = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };
};

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));
});

const onCellEditComplete = (event) => {
  const { data, newValue, field } = event;

  if (newValue != null && String(newValue).trim().length > 0) {
    data[field] = newValue;
  } else {
    event.preventDefault(); // 防止儲存空值
  }
};

const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};

</script>
