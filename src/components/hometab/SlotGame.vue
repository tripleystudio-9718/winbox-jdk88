<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import slot1 from '@/assets/slot_part/slot1.png';
import slot2 from '@/assets/slot_part/slot2.png';
import slot3 from '@/assets/slot_part/slot3.png';
import slot4 from '@/assets/slot_part/slot4.png';
import slot5 from '@/assets/slot_part/slot5.png';
import slot6 from '@/assets/slot_part/slot6.png';
import slot7 from '@/assets/slot_part/slot7.png';
import slot8 from '@/assets/slot_part/slot8.png';
import slot9 from '@/assets/slot_part/slot9.png';
import slot10 from '@/assets/slot_part/slot10.png';
import slot11 from '@/assets/slot_part/slot11.png';
import slot12 from '@/assets/slot_part/slot12.png';
import slot13 from '@/assets/slot_part/slot13.png';
import slot14 from '@/assets/slot_part/slot14.png';
import slot15 from '@/assets/slot_part/slot15.png';
import slot16 from '@/assets/slot_part/slot16.png';
import slot17 from '@/assets/slot_part/slot17.png';
import slot18 from '@/assets/slot_part/slot18.png';
import slot19 from '@/assets/slot_part/slot19.png';
import slot20 from '@/assets/slot_part/slot20.png';
import slot21 from '@/assets/slot_part/slot21.png';
import slot22 from '@/assets/slot_part/slot22.png';
import slot23 from '@/assets/slot_part/slot23.png';
import slot24 from '@/assets/slot_part/slot24.png';
import slot25 from '@/assets/slot_part/slot25.png';
import slot26 from '@/assets/slot_part/slot26.png';
import slot27 from '@/assets/slot_part/slot27.png';
import slot28 from '@/assets/slot_part/slot28.png';
import slot29 from '@/assets/slot_part/slot29.png';
import slot30 from '@/assets/slot_part/slot30.png';
import slot31 from '@/assets/slot_part/slot31.png';
import slot32 from '@/assets/slot_part/slot32.png';
import slot33 from '@/assets/slot_part/slot33.png';
import slot34 from '@/assets/slot_part/slot34.png';
import slot35 from '@/assets/slot_part/slot35.png';
import slot36 from '@/assets/slot_part/slot36.png';
import slot37 from '@/assets/slot_part/slot37.png';
import slot38 from '@/assets/slot_part/slot38.png';
import slot39 from '@/assets/slot_part/slot39.png';
import slot40 from '@/assets/slot_part/slot40.png';
import slot41 from '@/assets/slot_part/slot41.png';
import slot42 from '@/assets/slot_part/slot42.png';

// Get router instance
const router = useRouter();
  
const slotGames = [
  { id: 'megah5', image: slot1 },
  { id: 'megah5', image: slot2 },
  { id: 'login', image: slot3 },
  { id: 'login', image: slot4 },
  { id: 'login', image: slot5 },
  { id: 'playtech', image: slot6 },
  { id: '918kiss', image: slot7 },
  { id: 'login', image: slot8 },
  { id: 'joker', image: slot9 },
  { id: 'rich88', image: slot10 },
  { id: 'login', image: slot11 },
  { id: 'richgaming', image: slot12 },
  { id: 'vpower', image: slot13 },
  { id: 'kagaming', image: slot14 },
  { id: 'creativegaming', image: slot15 },
  { id: 'habanero', image: slot16 },
  { id: 'login', image: slot17 },
  { id: 'login', image: slot18 },
  { id: 'login', image: slot19 },
  { id: 'dragonsoft', image: slot20 },
  { id: 'mario', image: slot21 },
  { id: 'cq9slot', image: slot22 },
  { id: 'login', image: slot23 },
  { id: 'microgaming', image: slot24 },
  { id: 'login', image: slot25 },
  { id: 'login', image: slot26 },
  { id: 'login', image: slot27 },
  { id: 'lionkingslot', image: slot28 },
  { id: 'pragmaticplay', image: slot29 },
  { id: 'login', image: slot30 },
  { id: 'login', image: slot31 },
  { id: 'ace333', image: slot32 },
  { id: 'bbinslot', image: slot33 },
  { id: 'advantplay', image: slot34 },
  { id: 'playstarslot', image: slot35 },
  { id: 'uuslots', image: slot36 },
  { id: 'btgaming', image: slot37 },
  { id: 'evo888h5', image: slot38 },
  { id: '5ggamingslot', image: slot39 },
  { id: 'login', image: slot40 },
  { id: 'login', image: slot41 },
  { id: 'nextspin', image: slot42 }
];
  
// Modified to use Vue Router for login/Register navigation instead of external URL
const navigateToGame = (gameId) => {
  if (gameId === 'login') {
    router.push('/Register');
  } else {
    router.push(`/${gameId}`);
  }
};
  
// No need for hover state tracking for automatic animation
</script>
  
<template>
  <div class="slot-line"></div>

  <div class="slot-tab">
    <div class="game-grid">
      <div v-for="game in slotGames" 
           :key="game.id" 
           class="game-card">
        <div class="game-image auto-zoom">
          <img :src="game.image" :alt="game.id" @click="navigateToGame(game.id)">
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

  .slot-line{
    display:none;
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
}
</style>