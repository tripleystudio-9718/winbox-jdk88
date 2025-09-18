<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import live1 from '@/assets/live_part/live1.png';
import live2 from '@/assets/live_part/live2.png';
import live3 from '@/assets/live_part/live3.png';
import live4 from '@/assets/live_part/live4.png';
import live5 from '@/assets/live_part/live5.png';
import live6 from '@/assets/live_part/live6.png';
import live7 from '@/assets/live_part/live7.png';
import live8 from '@/assets/live_part/live8.png';
import live9 from '@/assets/live_part/live9.png';
  
// Get router instance
const router = useRouter();

// Live casino games array
const slotGames = [
  { id: 'live1', image: live1, name: 'DREAM GAMING' },
  { id: 'live2', image: live2, name: 'CT855 LIVE' },
  { id: 'live3', image: live3, name: 'ALLBET LIVE' },
  { id: 'live4', image: live4, name: 'BIG GAMING' },
  { id: 'live5', image: live5, name: 'SEXY BACCARAT' },
  { id: 'live6', image: live6, name: 'PRAGMATIC PLAY' },
  { id: 'live7', image: live7, name: 'GAMEPLAY' },
  { id: 'live8', image: live8, name: 'BBIN LIVE' },
  { id: 'live9', image: live9, name: 'WM CASINO' },
];
  
// Modified function to navigate to Register.vue instead of opening an external URL
const navigateToRegister = () => {
  router.push('/Register'); // This will navigate to Register.vue without the .vue extension
};

// Read more button also navigates to login
const readMore = () => {
  router.push('/login');
};
</script>
  
<template>
  <div class="slot-line"></div>

  <div class="slot-tab">
    <div class="game-grid">
      <div v-for="game in slotGames" 
           :key="game.id" 
           class="game-card">
        <div class="game-image auto-zoom">
          <img :src="game.image" :alt="game.id" @click="navigateToRegister">
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.slot-line{
  border-bottom: 1px solid #FFFF;
  width:100%;
}

.slot-tab {
  color: white;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  padding: 26px;
}

.game-card {
  border-radius: 8px;
  overflow: visible;
  cursor: pointer;
  position: relative;
}

.game-image {
  overflow: visible;
  border-radius: 8px;
  position: relative;
}

.game-image img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: block;
}

/* Auto zoom pulse animation - synchronized for all images */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.auto-zoom img {
  animation: pulse 1.9s infinite;
}

.slot-section {
  width: 100%;
  color: white;
  font-family: Arial, sans-serif;
}

@media screen and (max-width: 768px) {
.game-grid {
  grid-template-columns: repeat(3, 1fr); /* Change to 3 columns */
  gap: 30px; /* Reduce gap */
  padding: 0 20px 30px 20px; /* Reduce padding */
}

.auto-zoom img {
  animation-duration: 2.2s; /* Slightly slower animation */
}
}

/* Mobile screens */
@media screen and (max-width: 480px) {
.game-grid {
  grid-template-columns: repeat(3, 1fr); /* Keep 3 columns */
  gap: 25px; /* Further reduce gap */
  padding: 0 20px 30px 20px; /* Further reduce padding */
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); } /* Smaller animation for mobile */
  100% { transform: scale(1); }
}

.slot-line{
  display:none;
}

.auto-zoom img {
  animation-duration: 2.5s; /* Even slower animation to save resources */
}
}
</style>