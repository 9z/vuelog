import { createRouter, createWebHashHistory } from "vue-router";
import AuthorDetail from './components/AuthorDetail.vue';
import CommentDetail from './components/CommentDetail.vue';
import HomeContent from './components/HomeContent.vue';
import PostDetail from './components/PostDetail.vue';
import PostList from './components/PostList.vue';

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
    history: createWebHashHistory(),
    routes,
});

export default router; 