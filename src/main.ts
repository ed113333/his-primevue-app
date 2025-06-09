import { createApp } from 'vue';
import './style.css';
import 'primeicons/primeicons.css';
// import 'tailwindcss/utilities.css';
// import 'tailwindcss/theme.css';
// import 'tailwindcss/index.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/Aura';
//import Material from '@primeuix/themes/material';
import { definePreset } from '@primeuix/themes';
import Button from 'primevue/button';
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Drawer from 'primevue/drawer';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import Tree from 'primevue/tree';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';
import MyPreset1 from './assets/primeVue Theme.json';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice'; 
import router from './router';


const app = createApp(App);

const MyPreset = definePreset(Aura, MyPreset1);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
});


app.use(ToastService);
app.use(ConfirmationService);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Badge', Badge);
app.component('Drawer', Drawer );
app.component('Toast', Toast );
app.component('ConfirmDialog', ConfirmDialog);
app.component('Tree', Tree);
app.component('Select', Select);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('InputIcon', InputIcon);
app.component('TabList', TabList );
app.component('Tabs', Tabs );
app.component('Tab', Tab );
app.component('TabPanels', TabPanels );
app.component('TabPanel', TabPanel );
app.component('Tag', Tag );
app.use(router);
app.mount('#app');