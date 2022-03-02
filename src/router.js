import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/HomePage'
import AuthorPage from '@/views/AuthorPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/users/:username',
            name: 'AuthorPage',
            component: AuthorPage,
        },
    ],
})
