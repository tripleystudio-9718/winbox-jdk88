<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import play_button from '@/assets/play_button.png';

// Initialize router for navigation
const router = useRouter();

// Mobile detection
const isMobile = ref(false);

// Check if viewport is mobile on mount and on resize
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Modified function to navigate to Register.vue instead of opening an external URL
const navigateToRegister = () => {
  router.push('/Register'); // This will navigate to Register.vue without the .vue extension
};


// Function to handle image loading errors
const handleImageError = (event) => {
  // Use a fallback image when the original fails to load
  event.target.src = play_button;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Dynamic image loading functions for different game categories
const getJiliImageUrl = (number) => {
  try {
    return new URL(`/src/assets/jili_part/game${number}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading jili image ${number}:`, error);
    return play_button;
  }
};

// Tab configuration
const tabs = [
  { id: 'SLOT', name: 'SLOT' },
  { id: 'CASINO', name: 'CASINO' },
  { id: 'TEMBAK_IKAN', name: 'TEMBAK IKAN' },
  { id: 'CARD', name: 'CARD' }
];

// Active tab state
const activeTab = ref('SLOT');

// Tab switching function
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

// Game collections for each category
const slotGames = ref([]);
const casinoGames = ref([]);
const tembakIkanGames = ref([]);
const cardGames = ref([]);

// Initialize all game collections
onMounted(() => {
  // Setup mobile detection
  checkMobile();
  window.addEventListener('resize', checkMobile);

  // Initialize SLOT games (1-110)
  const slotCollection = [];
  for (let i = 1; i <= 110; i++) {
    slotCollection.push({
      img: getJiliImageUrl(i),
      alt: `SLOT Game ${i}`
    });
  }
  slotGames.value = slotCollection;
  
  // Initialize CASINO games (201-254)
  const casinoCollection = [];
  for (let i = 201; i <= 254; i++) {
    casinoCollection.push({
      img: getJiliImageUrl(i),
      alt: `CASINO Game ${i}`
    });
  }
  casinoGames.value = casinoCollection;
  
  // Initialize TEMBAK IKAN games (301-312)
  const fishingCollection = [];
  for (let i = 301; i <= 312; i++) {
    fishingCollection.push({
      img: getJiliImageUrl(i),
      alt: `FISHING Game ${i}`
    });
  }
  tembakIkanGames.value = fishingCollection;
  
  // Initialize CARD games (401-420)
  const cardCollection = [];
  for (let i = 401; i <= 420; i++) {
    cardCollection.push({
      img: getJiliImageUrl(i),
      alt: `CARD Game ${i}`
    });
  }
  cardGames.value = cardCollection;
});

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>
  
  <template>
    <div>
      <!-- Game Grid Container -->
      <div class="game-container">
        <!-- Game Category Tabs for Desktop -->
        <div v-if="!isMobile" class="game-tabs">
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
  
        <!-- Game Category Tabs for Mobile -->
        <div v-if="isMobile" class="game-tabs mobile-tabs">
          <!-- Top row wrapper for SLOT, CASINO, TEMBAK IKAN -->
          <div class="mobile-top-row">
            <div 
              v-for="tab in tabs.filter(t => t.id !== 'CARD')" 
              :key="tab.id"
              class="tab-item" 
              :class="{ active: activeTab === tab.id }"
              @click="setActiveTab(tab.id)"
            >
              <span>{{ tab.name }}</span>
            </div>
          </div>
          <!-- CARD button positioned under SLOT only on mobile -->
          <div class="mobile-card-tab">
            <div 
              class="tab-item" 
              :class="{ active: activeTab === 'CARD' }"
              @click="setActiveTab('CARD')"
            >
              <span>CARD</span>
            </div>
          </div>
        </div>
        
        <!-- Game Grid - SLOT -->
        <div v-if="activeTab === 'SLOT'" class="games-grid">
          <div v-for="(game, index) in slotGames" :key="'slot-'+index" class="game-card">
            <div class="game-image" @click="navigateToRegister">
              <img 
                :src="game.img" 
                :alt="game.alt"
                @error="handleImageError"
              >
              <div class="game-brand"></div>
            </div>
            <div class="game-button">
              <button class="play-button" @click="navigateToRegister">MAIN</button>
            </div>
          </div>
        </div>
        
        <!-- Game Grid - CASINO -->
        <div v-if="activeTab === 'CASINO'" class="games-grid">
          <div v-for="(game, index) in casinoGames" :key="'casino-'+index" class="game-card">
            <div class="game-image" @click="navigateToRegister">
              <img 
                :src="game.img" 
                :alt="game.alt"
                @error="handleImageError"
              >
              <div class="game-brand"></div>
            </div>
            <div class="game-button">
              <button class="play-button" @click="navigateToRegister">MAIN</button>
            </div>
          </div>
        </div>
        
        <!-- Game Grid - TEMBAK IKAN -->
        <div v-if="activeTab === 'TEMBAK_IKAN'" class="games-grid">
          <div v-for="(game, index) in tembakIkanGames" :key="'fish-'+index" class="game-card">
            <div class="game-image" @click="navigateToRegister">
              <img 
                :src="game.img" 
                :alt="game.alt"
                @error="handleImageError"
              >
              <div class="game-brand"></div>
            </div>
            <div class="game-button">
              <button class="play-button" @click="navigateToRegister">MAIN</button>
            </div>
          </div>
        </div>
        
        <!-- Game Grid - CARD -->
        <div v-if="activeTab === 'CARD'" class="games-grid">
          <div v-for="(game, index) in cardGames" :key="'card-'+index" class="game-card">
            <div class="game-image" @click="navigateToRegister">
              <img 
                :src="game.img" 
                :alt="game.alt"
                @error="handleImageError"
              >
              <div class="game-brand"></div>
            </div>
            <div class="game-button">
              <button class="play-button" @click="navigateToRegister">MAIN</button>
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
    background-color: #be46e6;
    color: white;
    opacity: 1;
  }
  
  /* Game Grid */
  .games-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    padding: 15px 0px;
  }
  
  .game-card {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }
  
  .game-image {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 1.4/1;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
  }
  
  .game-image img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
  

.game-selection-container {
  background-color: #120017;
  color: white;
}

.game-tabs {
  display: flex;
  justify-content: center;
  background-color: #333;
  overflow-x: auto; /* Handle overflow on small screens */
  padding: 4px 10px;
  gap: 6px;
  color: white;
  width: 100%;
}

.tab-item {
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
  white-space: nowrap; /* Prevent text wrapping */
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 13px;
  border-radius: 4px;
}

.tab-item:last-child {
  border-right: none;
}

.tab-item.active {
  background-color: #be46e6;
  color: white;
  opacity: 1;
}

/* Game Grid */
.games-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 15px 0px;
}

.game-card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.game-image {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1.4/1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.game-image img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.play-button {
    background-image: url("@/assets/play_button.png");
    background-color: transparent;
    border: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 35px;
    color: #FFFF;
    font-size: 11px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

.promotional-section {
  width: 100%;
  color: white;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  gap: 24px;
  flex-direction: column;
}

.promo-text {
  line-height: 1.3;
}

.promo-heading h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.heading-underline {
  height: 3px;
  background-color: #ffcc00; /* Yellow line */
  width: 100%;
}

.promo-details {
  line-height: 1.5;
}

.promo-details p {
  font-size: 15px;
  font-family: Poppins, sans-serif;
}

.read-more-container {
  display: flex;
  justify-content: center;
}

.read-more-btn {
  background-color: #ffcc00;
  color: #000;
  border: none;
  padding: 12px 12px;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;
  font-family: Poppins, sans-serif;
}

.read-more-btn:hover {
  background-color: #FFC107;
}

.promo-text p {
  font-size: 15px;
  font-family: Poppins, sans-serif;
}

.mobile-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.mobile-top-row {
  display: flex;
  width: 100%;
  gap: 10px;
}

.mobile-top-row .tab-item {
  flex: 1;
  text-align: center;
  padding: 8px 5px;
  background-color: black;
  color: white;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 100;
}


.mobile-top-row .tab-item:first-child {
  border: none;
}

.mobile-card-tab {
  width: 31.5%;
  font-weight: 100;
}

.mobile-card-tab .tab-item {
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  background-color: black;
  color: white;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
}

.mobile-top-row .tab-item.active,
.mobile-card-tab .tab-item.active {
  background-color: #FF9800;
  border: none;
  font-size: 900;
}

@media screen and (max-width: 768px) {
  /* Game tabs adjustments */

  .game-tabs {
    padding: 4px 5px;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .tab-item {
    padding: 8px 12px;
    font-size: 12px;
    flex: 0 0 auto;
    /* Adjust width to make first 3 tabs fit in one row */
    width: 30%;
  }
  
  /* Make the CARD tab wrap to next row */
  .tab-item:nth-child(4) {
    margin-top: 5px;
    width: 50%;
  }
  
  /* Game grid adjustments */
  .games-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  .mobile-top-row .tab-item,
  .mobile-card-tab .tab-item {
    padding: 8px 5px;
    font-size: 12px;
    width:100%;
  }
  
  .game-image img {
    height: auto;
  }
  
  .play-button {
    padding: 6px 0px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Promotional section adjustments */
  .promotional-section {
    gap: 15px;
    padding: 0 10px;
  }
  
  .promo-heading h2 {
    font-size: 1.5rem;
  }
  
  .promo-text p, 
  .promo-details p {
    font-size: 13px;
  }
  
  .read-more-btn {
    padding: 10px 10px;
    font-size: 13px;
  }


}

/* Media Query for small mobile devices (max-width: 480px) */
@media screen and (max-width: 480px) {
  /* Game tabs adjustments */
  .game-tabs {
    padding: 3px 4px;
    gap: 3px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .tab-item {
    padding: 6px 8px;
    font-size: 10px;
    /* Slightly adjust width for smaller screens */
    width: 31%;
  }
  
  /* Make the CARD tab wrap to next row and adjust width */
  .tab-item:nth-child(4) {
    margin-top: 4px;
    width: 31%;
  }
  
  /* Game grid adjustments - 3 columns for consistency with tablet view */
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  
  .game-image {
    aspect-ratio: 1.4/1;
  }
  
  /* Make images slightly smaller to fit 3 columns better */
  .game-card {
    transform: scale(0.95);
  }
  
  .game-image img {
    height: auto;
  }
  
  .play-button {
    height: 40px;
    width:100%;
    font-size: 12px;
    background-size: 100% 100%;
  }
  
  /* Promotional section adjustments */
  .promotional-section {
    gap: 12px;
  }
  
  .promo-heading h2 {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  .heading-underline {
    height: 2px;
  }
  
  .promo-text p, 
  .promo-details p {
    font-size: 10px;
    line-height: 1.3;
  }
  
  .read-more-btn {
    padding: 8px 10px;
    font-size: 10px;
  }
}
  </style>