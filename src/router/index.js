import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import Login from '@/components/Login.vue'; // Example for another page
import slot1 from '@/components/slottab/slot1.vue';
import slot6 from '@/components/slottab/slot6.vue';
import Settings from '@/components/Settings.vue';
import Slot6 from '@/components/slottab/slot6.vue';
import Slot7 from '@/components/slottab/slot7.vue';
import Slot9 from '@/components/slottab/slot9.vue';
import Slot10 from '@/components/slottab/slot10.vue';
import Slot12 from '@/components/slottab/slot12.vue';
import Slot13 from '@/components/slottab/slot13.vue';
import Slot14 from '@/components/slottab/slot14.vue';
import Slot15 from '@/components/slottab/slot15.vue';
import Slot16 from '@/components/slottab/slot16.vue';
import Slot20 from '@/components/slottab/slot20.vue';
import Slot21 from '@/components/slottab/slot21.vue';
import Slot22 from '@/components/slottab/slot22.vue';
import Slot24 from '@/components/slottab/slot24.vue';
import Slot28 from '@/components/slottab/slot28.vue';
import LiveChat from '@/components/LiveChat.vue';
import Promotion from '@/components/Promotion.vue';
import Slot29 from '@/components/slottab/slot29.vue';
import Slot32 from '@/components/slottab/slot32.vue';
import Slot33 from '@/components/slottab/slot33.vue';
import Slot34 from '@/components/slottab/slot34.vue';
import Slot35 from '@/components/slottab/slot35.vue';
import Slot36 from '@/components/slottab/slot36.vue';
import Slot37 from '@/components/slottab/slot37.vue';
import Slot38 from '@/components/slottab/slot38.vue';
import Slot39 from '@/components/slottab/slot39.vue';
import Slot42 from '@/components/slottab/slot42.vue';
import gameTips from '@/components/gameTips.vue';
import Register from '@/components/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/megah5',
    name: 'slot1',
    component: slot1,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/game-tips',
    name: 'game-tips',
    component: gameTips,
  },
  {
    path: '/playtech',
    name: 'slot6',
    component: Slot6,
  },
  {
    path: '/918kiss',
    name: 'slot7',
    component: Slot7,
  },
  {
    path: '/joker',
    name: 'slot9',
    component: Slot9,
  },
  {
    path: '/rich88',
    name: 'slot10',
    component: Slot10,
  },
  {
    path: '/richgaming',
    name: 'slot12',
    component: Slot12,
  },
  {
    path: '/vpower',
    name: 'slot13',
    component: Slot13,
  },
  {
    path: '/kagaming',
    name: 'slot14',
    component: Slot14,
  },
  {
    path: '/creativegaming',
    name: 'slot15',
    component: Slot15,
  },
  {
    path: '/habanero',
    name: 'slot16',
    component: Slot16,
  },
  {
    path: '/dragonsoft',
    name: 'slot20',
    component: Slot20,
  },
  {
    path: '/mario',
    name: 'slot21',
    component: Slot21,
  },
  {
    path: '/cq9slot',
    name: 'slot22',
    component: Slot22,
  },
  {
    path: '/microgaming',
    name: 'slot24',
    component: Slot24,
  },
  {
    path: '/lionkingslot',
    name: 'slot28',
    component: Slot28,
  },
  {
    path: '/livechat',
    name: 'livechat',
    component: LiveChat,
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: Promotion,
  },
  {
    path: '/pragmaticplay',
    name: 'slot29',
    component: Slot29,
  },
  {
    path: '/ace333',
    name: 'slot32',
    component: Slot32,
  },
  {
    path: '/bbinslot',
    name: 'slot33',
    component: Slot33,
  },
  {
    path: '/advantplay',
    name: 'slot34',
    component: Slot34,
  },
  {
    path: '/playstarslot',
    name: 'slot35',
    component: Slot35,
  },
  {
    path: '/uuslots',
    name: 'slot36',
    component: Slot36,
  },
  {
    path: '/btgaming',
    name: 'slot37',
    component: Slot37,
  },
  {
    path: '/evo888h5',
    name: 'slot38',
    component: Slot38,
  },
  {
    path: '/5ggamingslot',
    name: 'slot39',
    component: Slot39,
  },
  {
    path: '/nextspin',
    name: 'slot42',
    component: Slot42,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;