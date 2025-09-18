<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router'; // Add this import
import JiliGame from '@/components/hometab/JiliGame.vue';
import read_more from '@/components/read-more.vue';

import section1_1 from '@/assets/section1_1.gif';
import share from '@/assets/share.gif';
import downline from '@/assets/downline.gif';
import copy from '@/assets/copy.gif';
import deposit_lucky_number from '@/assets/deposit_lucky_number.gif';
import deposit from '@/assets/deposit.gif';
import withdraw from '@/assets/withdraw.gif';
import refresh from '@/assets/refresh.gif';
import realtime from '@/assets/realtime.gif';
import login from '@/assets/login.png';
import register from '@/assets/register.png';
import slide_pic1 from '@/assets/slide_pic1.webp';
import slide_pic2 from '@/assets/slide_pic2.webp';
import slide_pic3 from '@/assets/slide_pic3.webp';
import slide_pic4 from '@/assets/slide_pic4.webp';
import slide_pic5 from '@/assets/slide_pic5.webp';
import jili from '@/assets/jili.png'
import slotgame from '@/assets/slotgame.gif';
import livegame from '@/assets/livegame.gif';
import sportbook from '@/assets/sportbook.gif';
import others from '@/assets/others.gif';
import footer from '@/assets/footer.png';
import PopUp from './PopUp.vue';


// ---------------------------------------SLIDER------------------------------------------------------//
const slides = ref([
    { img: slide_pic1, alt: "Partnership Image" },
    { img: slide_pic2, alt: "Partnership Image" },
    { img: slide_pic3, alt: "Partnership Image" },
    { img: slide_pic4, alt: "Partnership Image" },
    { img: slide_pic5, alt: "Partnership Image" }
]);

const currentSlide = ref(0);
const progressPercent = ref(0);
const autoplayInterval = ref(null);
const progressInterval = ref(null);
const autoplayDuration = 5000; // 5 seconds per slide
const progressUpdateInterval = 50; // Update progress every 50ms

// Compute the progress increment per interval
const progressIncrement = computed(() => {
  return (100 / (autoplayDuration / progressUpdateInterval));
});

// Start the autoplay function
const startAutoplay = () => {
  // Clear any existing intervals
  stopAutoplay();
  
  // Reset progress
  progressPercent.value = 0;
  
  // Start progress bar animation
  progressInterval.value = setInterval(() => {
    progressPercent.value += progressIncrement.value;
    
    // Cap at 100%
    if (progressPercent.value >= 100) {
      progressPercent.value = 100;
    }
  }, progressUpdateInterval);
  
  // Set up slide transition
  autoplayInterval.value = setTimeout(() => {
    nextSlide();
  }, autoplayDuration);
};

// Stop the autoplay
const stopAutoplay = () => {
  clearTimeout(autoplayInterval.value);
  clearInterval(progressInterval.value);
};

// Go to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  startAutoplay();
};

// Go to specific slide
const goToSlide = (index) => {
  currentSlide.value = index;
  startAutoplay();
};

// ---------------------------------------TABLE------------------------------------------------------//
// Array of possible providers
const providers = ['PRAGMATIC', 'VP', 'JILI', 'MEGA888', 'PUSSY888', 'JOKER', 'SPADEGAMING'];

// Initial transaction data
const transactions = ref([
  {
    topUpId: '60******25',
    topUpAmount: 'RM10.00',
    withdrawId: '60******84',
    withdrawAmount: 'RM108.00',
    provider: 'PRAGMATIC'
  },
  {
    topUpId: '60******25',
    topUpAmount: 'RM10.00',
    withdrawId: '60******14',
    withdrawAmount: 'RM110.00',
    provider: 'VP'
  },
  {
    topUpId: '60******21',
    topUpAmount: 'RM5.00',
    withdrawId: '60******27',
    withdrawAmount: 'RM45.00',
    provider: 'JILI'
  },
  {
    topUpId: '60******61',
    topUpAmount: 'RM30.00',
    withdrawId: '60******36',
    withdrawAmount: 'RM45.00',
    provider: 'MEGA888'
  },
  {
    topUpId: '60******08',
    topUpAmount: 'RM5.00',
    withdrawId: '60******97',
    withdrawAmount: 'RM150.00',
    provider: 'JILI'
  }
]);

// Track highlighted rows
const highlightedCells = ref({});

// Function to generate a random transaction ID
const generateTransactionId = () => {
  return '60******' + Math.floor(Math.random() * 100).toString().padStart(2, '0');
};

// Function to generate a random amount
const generateAmount = () => {
  // Generate random amount between 5 and 200
  const amount = Math.floor(Math.random() * 196) + 5;
  // 30% chance of having decimal points
  if (Math.random() < 0.3) {
    return 'RM' + amount + '.' + Math.floor(Math.random() * 100).toString().padStart(2, '0');
  }
  return 'RM' + amount + '.00';
};

// Function to get a random provider
const getRandomProvider = () => {
  return providers[Math.floor(Math.random() * providers.length)];
};

// Function to update the transaction table with new random data
const updateTransactionTable = () => {
  // Randomly select 1-2 rows to update
  const numRowsToUpdate = Math.floor(Math.random() * 2) + 1;
  const rowIndices = new Set();
  
  while (rowIndices.size < numRowsToUpdate) {
    rowIndices.add(Math.floor(Math.random() * transactions.value.length));
  }
  
  // Update the selected rows
  rowIndices.forEach(rowIndex => {
    // Randomly decide whether to update left side (TOP UP) or right side (WITHDRAW) or both
    const updateSide = Math.floor(Math.random() * 3); // 0: left, 1: right, 2: both
    
    if (updateSide === 0 || updateSide === 2) {
      // Update TOP UP side
      transactions.value[rowIndex].topUpId = generateTransactionId();
      transactions.value[rowIndex].topUpAmount = generateAmount();
      
      // Add highlight effect
      highlightedCells.value[`topUp-${rowIndex}`] = true;
      
      // Remove highlight effect after animation completes
      setTimeout(() => {
        highlightedCells.value[`topUp-${rowIndex}`] = false;
      }, 1000);
    }
    
    if (updateSide === 1 || updateSide === 2) {
      // Update WITHDRAW side
      transactions.value[rowIndex].withdrawId = generateTransactionId();
      transactions.value[rowIndex].withdrawAmount = generateAmount();
      transactions.value[rowIndex].provider = getRandomProvider();
      
      // Add highlight effect
      highlightedCells.value[`withdraw-${rowIndex}`] = true;
      
      // Remove highlight effect after animation completes
      setTimeout(() => {
        highlightedCells.value[`withdraw-${rowIndex}`] = false;
      }, 1000);
    }
  });
  
  // Ensure reactivity by creating a new array
  transactions.value = [...transactions.value];
};

// Timer reference for transaction updates
let updateTimer = null;

// ===== COMBINED LIFECYCLE HOOKS =====
onMounted(() => {
  // Start slider autoplay
  startAutoplay();
  
  // Update the transaction table every 5 seconds
  updateTimer = setInterval(updateTransactionTable, 5000);
});

onBeforeUnmount(() => {
  // Stop slider autoplay
  stopAutoplay();
  
  // Clear transaction timer
  clearInterval(updateTimer);
});

const tabs = [
  { id: 'JILI', name: 'JILI', gameicon: jili , component: defineAsyncComponent(() => import('@/components/hometab/JiliGame.vue')) },
  { id: 'SLOTGAME', name: 'SLOT GAME' , gameicon: slotgame, component: defineAsyncComponent(() => import('@/components/hometab/SlotGame.vue'))  },
  { id: 'LIVEGAME', name: 'LIVE GAME' , gameicon: livegame, component: defineAsyncComponent(() => import('@/components/hometab/LiveCasino.vue'))  },
  { id: 'SPORTBOOK', name: 'SPORTBOOK', gameicon: sportbook, component: defineAsyncComponent(() => import('@/components/hometab/SportBook.vue'))  },
  { id: 'OTHERS', name: 'OTHERS', gameicon: others, component: defineAsyncComponent(() => import('@/components/hometab/Others.vue'))  },
];

// Active tab state
const activeTab = ref('JILI');

// Tab switching function
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

const gameTabComponent = computed(() => {
  const tab = tabs.find(t => t.id === activeTab.value);
  return tab ? tab.component : null;
});

// For mobile detection
const isMobile = ref(false);

// Check if viewport is mobile on mount and on resize
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});


// Get router instance (add this after your other variable declarations)
const router = useRouter();
const navigateToRegister = () => {
  router.push('/Register');  // Note: typically we don't include .vue in the route path
};

const navigateToLogin = () => {
  router.push('/Login');  // Note: typically we don't include .vue in the route path
};

</script>

<template>
  <!-- <PopUp/> -->
<div class="home-overall">
  
  <!------------------------------------------SECTION1-------------------------------------------------->
<div class=" section-1">
  
<div class="s1-slider">
  <div class="slider-container">
    <div class="slider-content">
      <div class="slides-wrapper">
        <transition-group name="fade" tag="div" class="slides">
          <div 
            v-for="(slide, index) in slides" 
            :key="slide.img"
            v-show="currentSlide === index"
            class="slide"
          >
            <img :src="slide.img" :alt="slide.alt" class="slide-image" @click="navigateToRegister" >
          </div>
        </transition-group>
      </div>
      
      <div class="slider-dots">
        <span 
          v-for="(slide, index) in slides" 
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
    
    <div class="slider-progress">
      <div class="progress-bar" :style="{ width: `${progressPercent}%` }"></div>
    </div>
  </div>
</div>
  
<div class="s1-table">
  <div class="table-container">
    <div class="tr-container">
      <div class="header-text">LIVE TRANSACTION</div>
      <div class="live-indicator">
        <div class="live-text">LIVE</div>
        <div class="recording-status"></div>
      </div>
    </div>
    
    <table class="transaction-table">
      <colgroup>
        <col class=“top-up”, style="width: 20%;" /> 
        <col class=“amount-section”, style="width: 16%;" /> 
        <col class=“top-up”, style="width: 20%;" /> 
        <col class=“amount-section”, style="width: 16%;" /> 
        <col class=“provider-section”, style="width: 26%;" /> 
      </colgroup>
      <tr>
        <td colspan="2" class="section-header topup-header">TOP UP</td>
        <td colspan="3" class="section-header withdraw-header">WITHDRAW</td>
      </tr>
      <tbody>
        <tr v-for="(transaction, index) in transactions" 
            :key="index" 
            class="transaction-row dark-row">
          <!-- Top Up side -->
          <td class="transaction-id" :class="{ highlight: highlightedCells[`topUp-${index}`] }">
            {{ transaction.topUpId }}
          </td>
          <td class="amount" :class="{ highlight: highlightedCells[`topUp-${index}`] }">
            {{ transaction.topUpAmount }}
          </td>
          
          <!-- Withdraw side -->
          <td class="transaction-id" :class="{ highlight: highlightedCells[`withdraw-${index}`] }">
            {{ transaction.withdrawId }}
          </td>
          <td class="amount" :class="{ highlight: highlightedCells[`withdraw-${index}`] }">
            {{ transaction.withdrawAmount }}
          </td>
          <td class="provider" :class="{ highlight: highlightedCells[`withdraw-${index}`] }">
            {{ transaction.provider }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Mobile section-3 content - will only show when v-ismobile is true -->
<div v-if="isMobile" class="mobile-section-3">
  <div class="s3-buttons">
    <img :src="login" alt="Partnership Image" @click="navigateToLogin" />
    <img :src="register" alt="Partnership Image" @click="navigateToRegister" />
  </div>

  <div class="s3-details">
    <div class="s3-left">
      <h3>Baki:</h3>
      <h2>RM0.00</h2>
      <h3>Deposit Minimum: RM5.00</h3>
      <h3>Withdrawal Minimum: RM50.00</h3>
    </div>
    <div class="s3-right">
      <img :src="deposit" alt="Partnership Image" @click="navigateToRegister" />
      <img :src="withdraw" alt="Partnership Image" @click="navigateToRegister" />
      <img :src="refresh" alt="Partnership Image" @click="navigateToRegister" />
    </div>
  </div>

  <div class="s3-details2">
    <img :src="realtime" alt="Partnership Image" @click="navigateToRegister" />
  </div>
</div>

<!----------------------------------------------------------------------------------------->

<div class="s1-details1">
<img :src="section1_1" alt="Partnership Image" @click="navigateToRegister" />

<div class="buttons-1">
  <img :src="share" alt="Partnership Image" @click="navigateToRegister" />

  <img :src="downline" alt="Partnership Image" @click="navigateToRegister" />
</div>

<div class="buttons-2">
  <img :src="copy" alt="Partnership Image" @click="navigateToRegister" />
</div>
</div>

<div class="image-button">
  <img :src="deposit_lucky_number" alt="Partnership Image" @click="navigateToRegister" />
</div>


  </div>

    <!------------------------------------------SECTION2-------------------------------------------------->
  <div class="section-2">


    <div class="game-container">
  <!-- Game Category Tabs -->
  <div class="game-section">
    <div 
      v-for="tab in tabs" 
      :key="tab.id"
      class="tab-item" 
      :class="{ active: activeTab === tab.id }"
      @click="setActiveTab(tab.id)"
    >
      <img 
        :src="tab.gameicon" 
        :alt="tab.name" 
        :class="{ 'jili-shake': tab.id === 'JILI' }"
      />
    </div>
  </div>

  <br>

  <div class="game-tab-content">
    <component :is="gameTabComponent" />
  </div>
</div>


<read_more />

<br><br>
<div class="footer">
<div class="footer-details1">
<h2>LESEN PERMAINAN</h2>
<p>JUDIKU88 is a registered trademark and brand owned by Moon Technologie. It is licensed and regulated by the Government of Curacao, operating under the Master License of Gaming Services Provider, N.V. #1168/JAZ.</p>
</div>


<div class="footer-details2">
<h2>CARA BAYARAN</h2>
</div>

<div class="footer-details3">
<h2>CERTIFICATE & SECURITY</h2>
<div class="footer-details3-pic">
  <img 
  :src="footer"
  alt="Footer" 
  class="Footer"
  />
</div>
<br><br><br><br>
<div class="footer-details4">
  <p>2025 JUDIKU88. ALL RIGHTS RESERVED.</p>
</div>
</div>
</div>
</div>
    <!------------------------------------------SECTION3-------------------------------------------------->
  <div class=" section-3" v-if="!isMobile"> 
<div class="s3-buttons">
  <img :src="login" alt="Partnership Image" @click="navigateToLogin" />
  <img :src="register" alt="Partnership Image" @click="navigateToRegister" />
</div>

<div class="s3-details">
  <div class="s3-left">
    <h3>Baki:</h3>
    <h2>RM0.00</h2>
    <h3>Deposit Minimum: RM5.00</h3>
    <h3>Withdrawal Minimum: RM50.00</h3>
  </div>
  <div class="s3-right">
    <img :src="deposit" alt="Partnership Image" @click="navigateToRegister" />
    <img :src="withdraw" alt="Partnership Image" @click="navigateToRegister" />
    <img :src="refresh" alt="Partnership Image" @click="navigateToRegister" />
  </div>
</div>



  <div class="s3-details2">
  <img :src="realtime" alt="Partnership Image" @click="navigateToRegister" />
</div>
</div>

  </div>
</template>



<style scoped>

.home-overall{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row !important;
  min-height:100vh;
  /* align-items: stretch; */
  padding:0;
}

.section-1{
  width:400px;
  padding:10px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin:0 auto;
  min-height: 100vh;
}

.section-2{
  display: flex;
  justify-content: left;
  align-items: start;
  flex-direction: column;
  padding:20px;
  width:1150px;
  border-left:1px solid rgba(255, 255, 255, .5);
  border-right:1px solid rgba(255, 255, 255, .5);
}

.section-3{
  width:400px;
  /* display:flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; */
  padding:20px;
}

.slide-image, .s3-buttons, .s3-right, .s3-details2, .s1-details1, .buttons-1, .buttons-2, .image-button{
  cursor: pointer;
}

/*----------------------------------------------SECTION1---------------------------------------------*/
.slider-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-color: #140c21;
  font-family: Arial, sans-serif;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.slider-content {
  position: relative;
  width: 100%;
  aspect-ratio: 2.3/1;
}

.slides-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background: linear-gradient(to right, rgba(20, 12, 33, 0.8), rgba(20, 12, 33, 0.4), transparent);
  color: white;
}

.platform-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.android-icon {
  width: 40px;
  height: 40px;
  margin-top: 0.5rem;
}

/* Dots styling */
.slider-dots {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: white;
}

.slider-progress {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
}

.progress-bar {
  height: 100%;
  background-color: #ffc107;
  transition: width 0.05s linear;
}


.s1-table {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.table-container {
  width: 100%;
  height: auto;
  border-top: 1px solid #9d00a8;
  border-left: 1px solid #9d00a8;
  border-right: 1px solid #9d00a8;
}

.tr-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9d00a8;
  padding: 3px 5px;
  background-color: black;
}

.header-text {
  color: #fff;
  font-weight: 300;
  font-size: 11px;
  font-family: Poppin, sans-serif;
  font-weight: 900;
}

.live-indicator {
  display: flex;
  align-items: center;
  background-color: #ff0000;
  animation: blink 1.2s infinite;
  border-radius: 3px;
  padding: 1px 4px;
}

.live-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 11px;
  margin-right: 5px;
}

.recording-status {
  width: 7px;
  height: 7px;
  background-color: #ffffff;
  border-radius: 40%;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.transaction-table {
  border-collapse: collapse;
  font-size: 11px;
  font-family: Poppin, sans-serif;
  padding: 3px 5px;
  width: 100%;
  table-layout: fixed;
}

.section-header {
  padding: 3px 5px;
  border: 1px solid #9d00a8;
  text-align: left;
  word-wrap: break-word;
}

.topup-header,
.withdraw-header {
  background-image: linear-gradient(to top, #9d00a8, #f180f9);
  color: #fff;
}

.transaction-row td {
  border: 1px solid #9d00a8;
  text-align: left;
  word-wrap: none;
  padding: 3px 5px;
}

.transaction-id {
  color: #FFFF;
  text-align: left !important;
}

.amount {
  color: #fff700;
  text-align: right !important;
}

.provider {
  color: #FFFF;
  text-align: left !important;
}

.transaction-row {
  background-color: black;
  height: 22px;
  width: 100%;
}

.highlight {
  animation: highlight 1s ease-out;
}


.s1-details1 img{
  width:95%;
  border-radius: 10px;
}

.s1-details1{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:10px;
}

.buttons-1{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:94%;
  gap:6px;
}

.buttons-1 img{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:50%;
  border-radius: 30px;
}

.buttons-2 img{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:50%;
  border-radius: 30px;
}

.buttons-2{
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  width:94%;
  gap:6px;
  padding-right:10px;
}

.s1-details2{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:6px;
}

.s1-details2 img{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:95%;
  gap:10px;
  border-radius: 10px;

}

.image-button {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-button img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.image-button .draw-number-button {
  top: 200px;
  left: 190px;
  position: absolute;
  width: 45% !important;
  cursor: pointer;
}

/* .section-line{
  border-right: 1px solid rgba(255, 255, 255, .5);
  height:500vh;
} */

.section2-line{
  border-top: 1px solid white;
  width:100%;
}

@keyframes shake-up-down {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-2px); }
  50% { transform: translateY(2px); }
  75% { transform: translateY(-1px); }
}

.jili-shake {
  animation: shake-up-down 0.6s infinite ease-in-out;
}


/*-----------------------------------------------SECTION3---------------------------------------------------*/

.s3-buttons{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:100%;
  gap:8px;
  padding:10px;
}

.s3-buttons img{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:46%;
  height:36px;
}


.s3-details{
  display:flex;
  justify-content: left;
  align-items: start;
  flex-direction: row;
  width:100%;
  padding:10px 0px 0px 8px;
}

.s3-left{
  display:flex;
  justify-content: left;
  align-items: start;
  flex-direction: column;
  width:60%;
  gap:6px;
}

.s3-left h3{
  font-family: Poppin, sans-serif;
  font-weight: 400;
  color: #FFFF;
  font-size: 13.5px;
}

.s3-left h2{
  font-family: Poppin, sans-serif;
  font-weight: 700;
  color: gold;
  font-size: 20px;;
}

.s3-right img{
  width:100%;
  height:38px;
}

.s3-right{
  width:38%;
  height: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: column;
  gap: 4px;
}

.s3-details2 img{
  width:100%;
  border-radius: 10px;
}

.s3-details2 {
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}


.game-section{
  display: flex;
  justify-content: left;
  align-items: start;
  flex-direction: row;
  gap:50px;
}

.game-section img{
  width:68px;
  height: auto;
  cursor:pointer;
}


.tab-content {
  width: 100%;
}

/*-----------------------------------FOOTER------------------------------*/
.footer{
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  gap:20px;
}

.footer-details1 h2{
    font-size: 15px;
    font-weight: 100;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

.footer-details2 h2{
    font-size: 15px;
    font-weight: 100;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

.footer-details3 h2{
    font-size: 15px;
    font-weight: 100;
    margin-bottom: 10px;
    text-transform: uppercase;
  }


.footer-details1 p{
    font-size: 15px;
    font-family: Poppins, sans-serif;
  }

.footer-details3-pic img{
  width:30%;
}

.footer-details4{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}

/*---------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  .home-overall {
    flex-direction: column !important;
    width: 100%;
    padding: 0;
    overflow-x: hidden;
  }
  
  .section-line {
    display: none;
  }
  
  .home-overall {
    display: flex;
    flex-direction: column;
  }
  
  .section-1, .section-2, .section-3 {
    width: 100%;
    padding: 8px;
    margin: 0;
  }
  
  .section-1 {
    padding: 0 !important;
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  /* Set explicit order for section-1 children */
  .s1-slider {
    order: 1;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .s1-table {
    order: 2;
    padding: 0px 10px 0px 10px;
    border-radius: 0px;
    margin-bottom: 5px;
  }
  
  /* Mobile section-3 positioning and styling */
  .mobile-section-3 {
    order: 3;
    width: 100%;
    padding: 0px 12px;
    margin: 0 10px 15px 10px;
    border-radius: 8px;
  }
  
  .mobile-section-3 .s3-buttons {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 5px 8px;
    gap: 10px;
    margin:0 auto;
  }
  
  .mobile-section-3 .s3-buttons img {
    width: 48%;
    height: auto;
    max-height: 36px;
  }
  
  .mobile-section-3 .s3-details {
    margin-top: 5px;
    border-radius: 8px;
    padding: 8px;
  }
  
  .mobile-section-3 .s3-details2 {
    margin-top: 10px;
    width: 100%;
  }
  
  .mobile-section-3 .s3-details2 img {
    width: 100%;
    border-radius: 8px;
    margin-top: 15px;
  }
  
  .s1-details1 {
    order: 4;
    margin-top: 8px;
  }

  .image-button {
    order: 5;
    margin-top: 10px;
    margin-bottom: 15px;
    width: 92%;
    margin: 0 auto;
  }
  
  .section-2 {
    order: 6;
    margin-top: 15px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
    
  .slider-container {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    border-radius: 0;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .slider-content {
    width: 100vw;
    aspect-ratio: 2.3 / 1;
    position: relative;
    height: auto;
  }

  .slides-wrapper {
    width: 100vw;
    aspect-ratio: 2.15 / 1;
    position: relative;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    
  .topup-header{
    font-size: 10px;
    font-weight: 700;
  }
  
  .section-3 {
    display: none; /* Hide desktop section-3 */
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .s3-buttons {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 8px;
    gap: 10px;
  }
  
  .s3-buttons img {
    width: 48%;
    height: auto;
    max-height: 36px;
  }
  
  .s3-details {
    margin-top: 5px;
    border-radius: 8px;
    padding: 8px;
  }
  
  .s3-left h3 {
    font-size: 11px;
    margin: 2px 0;
  }
  
  .s3-left h2 {
    font-size: 20px;
  }
  
  .s3-right {
    display: flex;
    gap: 5px;
    width: 38%;
  }
  
  .s3-right img {
    width: 100%;
    height: auto;
    max-height: 34px;
  }
  
  .s3-details2 {
    margin-top: 10px;
    width: 100%;
  }
  
  .s3-details2 img {
    width: 100%;
    border-radius: 8px;
  }
  
  .dot {
    width: 6px;
    height: 6px;
  }
  
  .table-container {
    overflow: hidden;
    border: 1px solid #9d00a8;
  }
  
  .transaction-table {
    font-size: 10px;
  }
  
  .transaction-row td {
    padding: 2px 4px;
  }
  
  .tr-container {
    padding: 4px 6px;
  }
  
  .s1-details1 img {
    width: 92%;
    border-radius: 8px;
  }
  
  .buttons-1, .buttons-2 {
    width: 100%;
    justify-content: space-between;
    padding: 0;
  }
  
  .buttons-1 img, .buttons-2 img {
    width: 48%;
    margin: 0;
    border-radius: 20px;
  }
  
  .image-button img {
    border-radius: 8px;
  }
  
  .image-button .draw-number-button {
    position: absolute;
    bottom: 15%;
    left: 70%;
    transform: translateX(-50%);
    width: 45% !important;
  }
  
  .game-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 15px;
    padding: 5px 0;
  }
  
  .game-section::-webkit-scrollbar {
    display: none;
  }
  
  .game-section img {
    width: 60px;
    min-width: 60px;
  }
  
  .tab-item {
    flex: 0 0 auto;
    text-align: center;
  }
  
  .game-tab-content {
    margin-top: 10px;
  }
  
  .footer {
    margin-top: 20px;
    padding: 10px;
    gap: 15px;
  }
  
  .footer-details1 h2, .footer-details2 h2, .footer-details3 h2 {
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .footer-details1 p {
    font-size: 12px;
    line-height: 1.4;
  }
  
  .footer-details3-pic img {
    width: 50%;
  }
  
  .footer-details4 {
    font-size: 11px;
    padding: 10px 0;
    text-align: center;
  }

  .section-2{
  border-left:none;
  border-right:none;
}
}

@media screen and (max-width: 480px) {
  .section-1, .section-2, .section-3 {
    padding: 5px;
  }
  
  .section-1 {
    padding: 0 !important;
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .s1-slider {
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .slider-container {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    border-radius: 0;
    overflow: hidden;
  }

  .slider-content,
  .slides-wrapper,
  .slides,
  .slide {
    width: 100vw;
    max-width: 100vw;
    height: auto;
  }

  .slide-image {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    display: block;
    object-fit: cover;
  }
    
  /* Mobile section-3 adjustments for smaller screens */
  .mobile-section-3 {
    margin: 0 auto;
  }
    
  .mobile-section-3 .s3-buttons {
    padding: 3px;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:5px;
  }
    
  .mobile-section-3 .s3-buttons img {
    height: 32px;
  }
    
  .mobile-section-3 .s3-details {
    padding: 5px;
  }
    
  .mobile-section-3 .s3-left {
    width: 60%;
    padding: 0 0 0 20px;
    letter-spacing: 0.1px;
  }
    
  .mobile-section-3 .s3-left h3 {
    font-size: 11px;
  }
    
  .mobile-section-3 .s3-left h2 {
    font-size: 14px;
  }
    
  .mobile-section-3 .s3-right {
    width: 40%;
    padding: 0 20px 0 10px;
  }
    
  .mobile-section-3 .s3-right img {
    max-height: 28px;
  }
  
  .mobile-section-3 .s3-details2 {
    margin-top: 8px;
  }
  
  .game-section {
    gap: 8px;
  }
  
  .game-section img {
    width: 65px;
    min-width: 5px;
  }
  
  .transaction-table {
    font-size: 9px;
  }
  
  .transaction-row td {
    padding: 2px 6px;
  }
  
  .header-text, .live-text {
    font-size: 10px;
  }
  
  .recording-status {
    width: 5px;
    height: 5px;
  }
  
  .s3-buttons {
    padding: 3px;
  }
  
  .s3-buttons img {
    height: 32px;
  }
  
  .s3-details {
    padding: 5px;
  }
  
  .s3-left {
    width: 65%;
  }
  
  .s3-left h3 {
    font-size: 9px;
    margin: 1px 0;
  }
  
  .s3-left h2 {
    font-size: 14px;
  }
  
  .s3-right {
    width: 35%;
  }
  
  .s3-right img {
    max-height: 30px;
  }
  
  .buttons-1, .buttons-2 {
    gap: 4px;
    width: 92%;
  }
  
  .footer {
    gap: 10px;
  }
  
  .footer-details1 h2, .footer-details2 h2, .footer-details3 h2 {
    font-size: 12px;
    margin-bottom: 5px;
  }
  
  .footer-details1 p {
    font-size: 10px;
  }
  
  .footer-details4 {
    font-size: 9px;
  }

  .s1-details1 {
    margin-top: 5px;
  }

  .image-button {
    margin-top: 8px;
    width: 92%;
  }
}
</style>
