<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import play_button from '@/assets/play_button.png';

// Get router instance
const router = useRouter();

// Function to handle image loading errors
const handleImageError = (event) => {
  // Use a fallback image when the original fails to load
  event.target.src = play_button;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Updated image loading function for the slot6_part images
const getSlotImageUrl = (number) => {
  try {
    // Updated to use the slot6_part folder
    return new URL(`/src/assets/slot6_part/slot6_${number}.jpg`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading slot image ${number}:`, error);
    return play_button;
  }
};

// Tab configuration
const tabs = [
  { id: 'SLOT', name: 'SLOT' },
  { id: 'SLOT PROGRESIF', name: 'SLOT PROGRESIF' },
  { id: 'KAD', name: 'KAD' },
  { id: 'VIDEO', name: 'VIDEO' },
  { id: 'ARCADE', name: 'ARCADE' },
  { id: 'HOT', name: 'HOT' }
];

// Active tab state
const activeTab = ref('SLOT');

// Tab switching function
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

// Game collections for each category
const slotGames = ref([]);
const slotProgresifGames = ref([]);
const kadGames = ref([]);
const videoGames = ref([]);
const arcadeGames = ref([]);
const hotGames = ref([]);

// Initialize all game collections with your 6 available images
onMounted(() => {
  // Initialize SLOT games (adjust range to match your actual number of images)
  const slotCollection = [];
  // Change this range to match your actual images (e.g., 1-20 if you have slot6_1.jpg to slot6_20.jpg)
  for (let i = 1; i <= 414; i++) {
    slotCollection.push({
      img: getSlotImageUrl(i),
      alt: `SLOT Game ${i}`
    });
  }
  slotGames.value = slotCollection;

  // Initialize SLOT PROGRESIF games
  const spCollection = [];
  for (let i = 500; i <= 537; i++) {
    spCollection.push({
      img: getSlotImageUrl(i),
      alt: `SLOT PROGRESIF ${i}`
    });
  }
  slotProgresifGames.value = spCollection;

  // Initialize other tabs with appropriate images
  // For example, use different ranges for each category
  const kadCollection = [];
  for (let i = 600; i <= 645; i++) {
    kadCollection.push({
      img: getSlotImageUrl(i),
      alt: `KAD Game ${i}`
    });
  }
  kadGames.value = kadCollection;

  const videoCollection = [];
  for (let i = 700; i <= 705; i++) {
    videoCollection.push({
      img: getSlotImageUrl(i),
      alt: `VIDEO Game ${i}`
    });
  }
  videoGames.value = videoCollection;

  const arcadeCollection = [];
  for (let i = 800; i <= 806; i++) {
    arcadeCollection.push({
      img: getSlotImageUrl(i),
      alt: `ARCADE Game ${i}`
    });
  }
  arcadeGames.value = arcadeCollection;

  const hotCollection = [];
  for (let i = 900; i <= 929; i++) {
    hotCollection.push({
      img: getSlotImageUrl(i),
      alt: `HOT Game ${i}`
    });
  }
  hotGames.value = hotCollection;
});

// Modified function to use Vue Router instead of opening external URL
const navigateToRegister = () => {
  router.push('/Register');
};
</script>

<template>
  <div>
    <!-- Game Grid Container -->
    <div class="game-container">
      <!-- Game Category Tabs -->
      <div class="game-tabs">
        <div 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tab-item" 
          :class="{ active: activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          <span>{{ tab.name }}</span>
        </div>
      </div>
      
      <!-- Game Grid - SLOT -->
      <div v-if="activeTab === 'SLOT'" class="games-grid">
        <div v-for="(game, index) in slotGames" :key="'slot-'+index" class="game-card">
          <div class="game-image">
            <img 
              :src="game.img" 
              :alt="game.alt"
              @click="navigateToRegister"
              @error="handleImageError"
            >
            <div class="game-brand"></div>
          </div>
          <div class="game-button">
            <button class="play-button" @click="navigateToRegister">PLAY</button>
          </div>
        </div>
      </div>
      
      <!-- Game Grid - SLOT PROGRESIF -->
      <div v-if="activeTab === 'SLOT PROGRESIF'" class="games-grid">
        <div v-for="(game, index) in slotProgresifGames" :key="'progresif-'+index" class="game-card">
          <div class="game-image">
            <img 
              :src="game.img" 
              :alt="game.alt"
              @error="handleImageError"
              @click="navigateToRegister"
            >
            <div class="game-brand"></div>
          </div>
          <div class="game-button">
            <button class="play-button" @click="navigateToRegister">PLAY</button>
          </div>
        </div>
      </div>
      
      <!-- Game Grid - KAD -->
      <div v-if="activeTab === 'KAD'" class="games-grid">
        <div v-for="(game, index) in kadGames" :key="'kad-'+index" class="game-card">
          <div class="game-image">
            <img 
              :src="game.img" 
              :alt="game.alt"
              @error="handleImageError"
              @click="navigateToRegister"
            >
            <div class="game-brand"></div>
          </div>
          <div class="game-button">
            <button class="play-button" @click="navigateToRegister">PLAY</button>
          </div>
        </div>
      </div>
      
      <!-- Game Grid - VIDEO -->
      <div v-if="activeTab === 'VIDEO'" class="games-grid">
        <div v-for="(game, index) in videoGames" :key="'video-'+index" class="game-card">
          <div class="game-image">
            <img 
              :src="game.img" 
              :alt="game.alt"
              @error="handleImageError"
              @click="navigateToRegister"
            >
            <div class="game-brand"></div>
          </div>
          <div class="game-button">
            <button class="play-button" @click="navigateToRegister">PLAY</button>
          </div>
        </div>
      </div>
      
      <!-- Game Grid - ARCADE -->
      <div v-if="activeTab === 'ARCADE'" class="games-grid">
        <div v-for="(game, index) in arcadeGames" :key="'arcade-'+index" class="game-card">
          <div class="game-image">
            <img 
              :src="game.img" 
              :alt="game.alt"
              @error="handleImageError"
              @click="navigateToRegister"
            >
            <div class="game-brand"></div>
          </div>
          <div class="game-button">
            <button class="play-button" @click="navigateToRegister">PLAY</button>
          </div>
        </div>
      </div>
      
      <!-- Game Grid - HOT -->
      <div v-if="activeTab === 'HOT'" class="games-grid">
        <div v-for="(game, index) in hotGames" :key="'hot-'+index" class="game-card">
          <div class="game-image">
            <img 
              :src="game.img" 
              :alt="game.alt"
              @error="handleImageError"
              @click="navigateToRegister"
            >
            <div class="game-brand"></div>
          </div>
          <div class="game-button">
            <button class="play-button" @click="navigateToRegister">PLAY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-selection-container {
  background-color: #120017;
  color: white;
}

.game-tabs {
  display: flex;
  justify-content: center;
  background-color: #333;
  margin-bottom: 6px;
  overflow-x: auto; /* Handle overflow on small screens */
  padding:4px 10px;
  gap:6px;
  color: white;
  width:100%;
}


.tab-item {
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
  white-space: nowrap; /* Prevent text wrapping */
  width:100%;
  display:flex;
  justify-content:center;
  background-color:black;
  color: white;
  font-size:13px;
  border-radius:4px;
}

.tab-item:last-child {
  border-right: none;
}

.tab-item.active {
  background-color: #FF9800;
  color: white;
  opacity: 1;
}

/* Game Grid */
.games-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 10px;
}

@media (min-width: 576px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 992px) {
  .games-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1200px) {
  .games-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.game-card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}


.game-image {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
}

.game-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s;

}

.game-button {
  width: 100%;
  padding: 5px;
}

.play-button {
  background-image: url("@/assets/slot_button.png");
  background-color: transparent;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 26px;
  color: #FFFF;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;

}

/* Media query for tablets (max-width: 768px) */
@media screen and (max-width: 768px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
  }
  
  .game-name {
    font-size: 12px;
  }
  
  .game-provider {
    font-size: 9px;
  }
  
  .play-button {
    font-size: 13px;
    padding: 6px 0;
  }
  
  .game-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 2px;
    background-color:#333;
    padding: 2px;
    width: 100%;
  }
  
  /* First row tabs (SLOT, PROGRESSIVE, TABLE/CARD) */
  .tab-item:nth-child(1),
  .tab-item:nth-child(2),
  .tab-item:nth-child(3) {
    grid-row: 1;
  }
  
  /* Second row tabs (VIDEO, ARCADE, HOT) */
  .tab-item:nth-child(4),
  .tab-item:nth-child(5),
  .tab-item:nth-child(6) {
    grid-row: 2;
  }
  
  /* Assign correct columns */
  .tab-item:nth-child(1),
  .tab-item:nth-child(4) {
    grid-column: 1;
  }
  
  .tab-item:nth-child(2),
  .tab-item:nth-child(5) {
    grid-column: 2;
  }
  
  .tab-item:nth-child(3),
  .tab-item:nth-child(6) {
    grid-column: 3;
  }
  
  .tab-item {
    font-size: 12px;
    padding: 8px 4px;
    background-color: #000;
    border: 1px solid #333;
  }
  
  .tab-item.active {
    background-color: #FF9800;
    color: black;
    font-weight: 700;
  }
  
  /* Make SLOT tab orange, others purple when active */
  .tab-item:first-child.active {
    background-color: #FF9800;
    color: black;
    font-weight: 900;
  }
  
  .tab-item:not(:first-child).active {
    background-color: #FF9800;
    color: white;
    font-weight: 900;
  }
}

/* Media query for mobile phones (max-width: 480px) */
@media screen and (max-width: 480px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 6px;
  }
  
  .game-card {
    margin-bottom: 8px;
  }
  
  .game-name-container {
    padding: 8px 3px 3px 3px;
  }
  
  .game-name {
    font-size: 10px;
    line-height: 1.2;
  }
  
  .game-provider {
    font-size: 8px;
  }
  
  .play-button {
    font-size: 11px;
    padding: 5px 0;
    border-radius: 15px;
    margin-top: 2px;
  }
  
  .game-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 3px;
    padding: 4px;
  }
  
  .tab-item {
    font-size: 12px;
    font-weight: 100;
    padding: 8px 2px;
  }

  .tab-item:active {
    font-weight: 700;
  }
}

</style>