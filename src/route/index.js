import Vue from 'vue'
import VueRouter from 'vue-router'


 Vue.use(VueRouter);


import Create from './components/Create';
import Note from './components/Note';
import Notes from "./components/Notes";


 const routes = [
    //{ path: '', component: Home },
    { path: '/', component: Notes },
    { path: '/notes', component: Notes },
    { path: '/note/:id', component: Note },
    { path: '/create', component: Create }
 ];