import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import { auth } from '@/firebase';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Navigation guard
router.beforeEach((to, from, next) => {
  //check for requiresAuth guard
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check NOT logged in
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
    // proceed to route
    next();
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // check NOT logged in
    if (auth.currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      });
    }
    // proceed to route
    next();
  }
});

export default router;
