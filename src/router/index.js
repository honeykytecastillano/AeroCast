import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import DashboardView from '@/views/system/DashboardView.vue'; // Layout with sidebar
import HomeContent from '@/components/dashboard/HomeContent.vue';
import MapContent from '@/components/dashboard/MapContent.vue';
import LocationContent from '@/components/dashboard/LocationContent.vue';
import CalendarContent from '@/components/dashboard/CalendarContent.vue';
import SettingContent from '@/components/dashboard/SettingContent.vue';
// import { isAuthenticated } from '@/utils/supabase';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView, 
      children: [
        {
          path: 'home', 
          name: 'home',
          component: HomeContent,
        },
        {
          path: 'map',  
          name: 'map',
          component: MapContent,
        },
        {
          path: 'location',  
          name: 'location',
          component: LocationContent,
        },
        {
          path: 'calendar',  
          name: 'calendar',
          component: CalendarContent,
        },
        {
          path: 'settings',  
          name: 'settings',
          component: SettingContent,
        },
        {
          path: '',  
          redirect: '/dashboard/home',
        },
      ],
    },
  ],
});

// router.beforeEach( async (to) => {
//   const isLoggedin = await isAuthenticated()
  
//   // Redirect to appropriate page if accessing home route
//   if (to.name === 'home') {
//     return isLoggedIn ? { name: 'dashboard' } : { name: 'login' }
//   }

//   // Check if the user is logged in
//   if (isLoggedIn && (to.name === 'login' || to.name === 'register')) {
//     // redirect the user to the dashboard page
//     return { name: 'dashboard' }
//   }

//   // If not logged in and going to system pages
//   if (!isLoggedIn && to.path.startsWith('/system')) {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }

//   // Redirect to 404 Not Found if the route does not exist
//   // if(router.resolve(to).matched.length === 0){
//   //   return { name: '404' }
//   // }

// })

export default router;
