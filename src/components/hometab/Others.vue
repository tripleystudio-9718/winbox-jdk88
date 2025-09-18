<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import o1 from '@/assets/other_part/o1.png';
import o2 from '@/assets/other_part/o2.png';
import o3 from '@/assets/other_part/o3.png';
import o4 from '@/assets/other_part/o4.png';
import o5 from '@/assets/other_part/o5.png';
import o6 from '@/assets/other_part/o6.png';
import o7 from '@/assets/other_part/o7.png';
import o8 from '@/assets/other_part/o8.png';
  
// Get router instance
const router = useRouter();

// Other games array with names from the screenshot
const slotGames = [
  { id: 'o1', image: o1, name: 'JDB SLOT' },
  { id: 'o2', image: o2, name: 'XIAO AI ESPORTS' },
  { id: 'o3', image: o3, name: 'YL FISHING' },
  { id: 'o4', image: o4, name: 'LE GAMING' },
  { id: 'o5', image: o5, name: 'KS FISHING' },
  { id: 'o6', image: o6, name: 'KS GAMING' },
  { id: 'o7', image: o7, name: 'SV388 COCK FIGHT' },
  { id: 'o8', image: o8, name: '4D LOTTERY' },
];
  
// Modified to navigate to Register.vue instead of external URL
const navigateToLogin = () => {
  router.push('/Register');
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
          <img :src="game.image" :alt="game.id" @click="navigateToLogin">
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