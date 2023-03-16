// impoting 2 vue-router's functions
import { createRouter, createWebHistory } from 'vue-router';

// importing pages I'm going to use
import HomePage from '../pages/HomePage.vue';
import NotFound from '../pages/NotFound.vue';

// router creation and definition of routes adresses
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
});

export { router };

