<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import sb1 from '@/assets/sb_part/sb1.png';
import sb2 from '@/assets/sb_part/sb2.png';
import sb3 from '@/assets/sb_part/sb3.png';
import sb4 from '@/assets/sb_part/sb4.png';
  
// Get router instance
const router = useRouter();

// Sports betting games array
const slotGames = [
  { id: 'sb1', image: sb1, name: 'HORSEBOOK' },
  { id: 'sb2', image: sb2, name: 'IBCBET' },
  { id: 'sb3', image: sb3, name: 'E1SPORT' },
  { id: 'sb4', image: sb4, name: 'M8BET SPORT' },
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
  
  .auto-zoom img {
    animation-duration: 2.5s; /* Even slower animation to save resources */
  }

  .slot-line{
    display:none;
  }
}
</style>