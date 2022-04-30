import { createWebHistory, createRouter } from "vue-router";
import PostList from './components/PostList.vue';
import HomeContent from './components/HomeContent.vue';
import PostDetail from './components/PostDetail.vue';
import AuthorDetail from './components/AuthorDetail.vue';
import CommentDetail from './components/CommentDetail.vue';

const routes = [
    {
        path: "/",
        component: HomeContent,
    },
    {
        path: "/list",
        component: PostList
    },
    {
        path: "/detail/:id(\\d+)",
        component: PostDetail,
        children: [
            {
                path: "author",
                component: AuthorDetail,
            },
            {
                path: "comment",
                component: CommentDetail,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 