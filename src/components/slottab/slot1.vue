<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import play_button from '@/assets/slot_button.png'; 

// Get router instance
const router = useRouter();

// Function to handle image loading errors
const handleImageError = (event) => {
  // Use a fallback image when the original fails to load
  event.target.src = play_button;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Approach using import.meta.url for Vue 3 (Vite compatible)
const getSlotImageUrl = (number) => {
  try {
    // This approach works with Vite
    return new URL(`/src/assets/slot_part/slot1_${number}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading slot image ${number}:`, error);
    return play_button; // Fallback to button image
  }
};

console.log("Button image loaded:", play_button); // Verify the button is loading

const activeTab = ref('SLOT');
const slotGames = ref([]);

// Initialize slot games with dynamic loading
onMounted(() => {
  const games = [];
  
  // Game names for the first few slots
  const specialNames = [
    'ALADDIN',
    'DISCOVERY',
    'WEALTHY SNAKE',
    'DOLPHIN REEF',
    'GOLDEN TOUR',
    'ICELAND'
  ];
  
  // Create all 135 slot games
  for (let i = 1; i <= 135; i++) {
    // Use special names for first 6 games, generic names for others
    const gameName = i <= specialNames.length ? specialNames[i-1] : `SLOT GAME ${i}`;
    
    games.push({
      img: getSlotImageUrl(i),
      alt: gameName,
      buttonText: 'MAIN'
    });
  }
  
  slotGames.value = games;
});

const navigateToGame = (index) => {
  console.log('Navigate to game', index);
};

// Modified to use Vue Router instead of external URL
const navigateToRegister = () => {
  router.push('/Register');
};
</script>

<template>
  <div>
    <!-- Game Grid Container -->
    <div class="game-container">
      <div v-if="activeTab === 'SLOT'" class="games-grid">
        <!-- Simplified layout - images and buttons in a grid -->
        <div class="game-grid-layout">
          <div v-for="(game, index) in slotGames" 
               :key="'slot-'+index" 
               class="game-card">
            <!-- Game image -->
            <!--@click="navigateToGame(index)"  for spare purpose-->
            <div class="game-image">
              <img 
                :src="game.img" 
                :alt="game.alt" 
                @click="navigateToRegister"
                @error="handleImageError"
              >
            </div>
            
            <!-- Game button - directly below each image -->
            <div class="game-button-container">
              <button class="slot1-button" @click="navigateToRegister">PLAY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Game Grid */
.games-grid {
  padding: 20px 10px;
  background-image: url("@/assets/main-background.webp");
}

/* Simplified grid layout */
.game-grid-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.game-card {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
}

.game-image {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: visible;
  cursor: pointer;
  margin-bottom: 10px; /* Space between image and button */
  height: 250px;
}

.game-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

/* Button styling */
.game-button-container {
  width: 100%;
  height: 26px; /* Explicit height */
  text-align: center;
  display: inline-block;
  grid-template-columns: repeat(1, 1fr);
  align-items: center; /* Ensures vertical centering */
}

.game-button-container button {
  cursor: pointer;
}

.slot1-button {
  background-image: url("@/assets/slot_button.png");
  background-color: transparent;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  color: #FFFF;
}

/* Responsive styles for tablets */
@media screen and (max-width: 768px) {
  .game-grid-layout {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  .game-name {
    font-size: 12px;
  }
  
  .play-button {
    font-size: 14px;
    padding: 6px 0;
  }

  .slot1-button{
    font-size: 11px;
  }

  .game-image {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: visible;
    cursor: pointer;
    margin-bottom: 10px; /* Space between image and button */
    height: 98px;
  }
}

/* Responsive styles for mobile phones */
@media screen and (max-width: 480px) {
  .game-grid-layout {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  
  .game-image {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: visible;
    cursor: pointer;
    margin-bottom: 10px; /* Space between image and button */
    height: 96px;
  }
  
  .game-name {
    font-size: 10px;
    padding: 5px 2px;
  }
  
  .play-button {
    font-size: 12px;
    padding: 5px 0;
  }
  
  .game-button-container {
    margin-bottom: 10px;
  }
}
</style>