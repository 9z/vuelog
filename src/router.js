import { createWebHistory, createRouter } from "vue-router";
import PostList from './components/PostList.vue';
import HomeContent from './components/HomeContent.vue';
import PostDetail from './components/PostDetail.vue';

const routes = [
    {
        path: "/",
        component: HomeContent,
    },
    {
        path: "/list",
        component: PostList,
    },
    {
        path: "/detail/:id(\\d+)",
        component: PostDetail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 