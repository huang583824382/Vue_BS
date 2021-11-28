import Vue from 'vue'
import Router from 'vue-router'
import UndoTask from "@/components/NavTask/UndoTask";
import IndexTask from '@/components/NavTask/IndexTask'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AddTask from "@/components/AddTask";
import ReviewingTask from "@/components/NavTask/ReviewingTask";
import DoneTask from "@/components/NavTask/DoneTask";
import UserPage from "@/components/UserPage";
//组件模块

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            redirect: '/index',
            // redirect:'/addtask',
            children: [
                {
                    path: '/index',
                    name: 'Index',
                    components: {
                        // TaskCard:TaskCard,
                        IndexTask: IndexTask
                    },
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/undo',
                    name: 'Undo',
                    components: {
                        // TaskCard:TaskCard,
                        UndoTask: UndoTask
                    },
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/reviewing',
                    name: 'Reviewing',
                    components: {
                        // TaskCard:TaskCard,
                        ReviewingTask: ReviewingTask
                    },
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/done',
                    name: 'Done',
                    components: {
                        // TaskCard:TaskCard,
                        DoneTask: DoneTask
                    },
                    meta: {
                        requireAuth: true
                    }
                },
            ]
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/addtask',
            name: 'AddTask',
            component: AddTask
        },
        {
            path:'/userpage',
            name:'UserPage',
            component:UserPage
        }
    ]
})