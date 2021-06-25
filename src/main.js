import Vue from 'vue'
// import routes from './routes'
import VueRouter from 'vue-router'
 import App from './App.vue'

 Vue.use(VueRouter);
 import 'bootstrap'
 import 'bootstrap/dist/css/bootstrap.min.css'


import Create from './components/Create';
import Note from './components/Note';
import Notes from "./components/Notes";
import Edit from "./components/Edit";

 const routes = [
    //{ path: '', component: Home },
    { path: '/',  name: 'Index', component: Notes },
    { path: '/notes',  name: 'Index',component: Notes },
    { path: '/note/:id', name: 'Note', component: Note },
    { path: '/create', name: 'AddNote', component: Create },
    { path: '/edit/:id', name: 'EditNote', component: Edit }
 ];


 const router = new VueRouter({
    routes: routes
  });
  
  new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
  })
  
