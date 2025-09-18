<template>
  <div class="promotion-container">
    <div class="promotion-title">
      FREE SPIN  <span class="blink-text">[ LEPAS MAIN ]</span><br><span style="color: green;">Ke-Seawah (RM10 x1) to Claim</span> 
    </div>

    <div class="promotion-cards">
      <div
        class="card"
        v-for="(item, index) in cards"
        :key="index"
        :class="{ 
          'no-background': noBgIndices.includes(index),
          'break-line': index === 6 
        }"
        @click="handleClick(index)"
      >
        <img :src="promotionImage" alt="Promotion" />
        <div class="card-text">
          <div>{{ item.title }}</div>
          <div class="amount">{{ item.amount }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- === POPUP OUTSIDE CONTAINER === -->
  <div v-if="selectedCard !== null" class="popup-overlay" @click="closePopup">
    <div class="popup" :class="{ 'fade-out': isFadingOut }" @click.stop>
      <h3>{{ cards[selectedCard].title }}</h3>
      <div class="border-bottom"></div>
      <div class="section">
        <h4>Keperluan</h4>
        <ul>
          <li v-for="(item, i) in cards[selectedCard].keperluan || defaultKeperluanRules.keperluan" :key="i" v-html="item"></li>
        </ul>
        <h4 class="rules"><strong>Rules</strong></h4>
        <ul>
          <li v-for="(rule, i) in cards[selectedCard].rules || defaultKeperluanRules.rules" :key="i" v-html="rule"></li>
        </ul>

        <h4 class="accepts"><strong>We Accept</strong></h4>
        <img :src="payment_accept" alt="We Accept" class="accept-image" />
      </div>
      <div class="popup-buttons">
        <button class="close-btn" @click="closePopup">Tutup</button>
        <button class="claim-btn" @click="navigateToRegister">Claim Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import promotionImage from '@/assets/promotion-img.gif';
import payment_accept from '@/assets/payment-accept.png';

const cards = [
  { 
    title: 'RM10 x1 Kali', 
    amount: 'RM5',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 1 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x2 Kali', 
    amount: 'RM5',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 2 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x3 Kali', 
    amount: 'RM10',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 3 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x4 Kali', 
    amount: 'RM10',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 4 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x5 Kali', 
    amount: 'RM15',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 5 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x6 Kali', 
    amount: 'RM15',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 6 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x7 Kali', 
    amount: 'RM20',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 7 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
    { 
    title: 'RM10 x8 Kali', 
    amount: 'RM20',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 8 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x9 Kali', 
    amount: 'RM25',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 9 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x10 Kali', 
    amount: 'RM25',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 10 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x11 Kali', 
    amount: 'RM30',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 11 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { 
    title: 'RM10 x12 Kali', 
    amount: 'RM30',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 10 Kali </span> X 12 Kali ',
      '<span style="color:rgb(255, 255, 0)">No Limit Cuci</span> 10%',
      'MIN CUCI 100',
      'Reset lepas 12AM'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
];

// Default rules in case some cards don't have them
const defaultKeperluanRules = {
  keperluan: ["Deposit minimal <strong>RM10</strong>", "Mainkan sesuai persyaratan"],
  rules: ["Free Spin akan otomatis ditambahkan ke akun anda setelah memenuhi syarat", "Promosi ini berlaku untuk semua permainan"]
};

const noBgIndices = [13];
const selectedCard = ref(null);
const isFadingOut = ref(false);

function handleClick(index) {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    router.push('/register');
  } else {
    selectedCard.value = index;
    isFadingOut.value = false;
  }
}

function closePopup() {
  isFadingOut.value = true;
  setTimeout(() => {
    selectedCard.value = null;
    isFadingOut.value = false;
  }, 300);
}

const router = useRouter();

const navigateToRegister = () => {
  router.push('/register');
};

</script>

<style scoped>
.promotion-container {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 5px 0 5px 0;
    border-radius: 10px;
    background: transparent;
    position: relative;
    border: 2px solid #4B0076;
    box-shadow: 0 0 10px #4B0076;
    backdrop-filter: blur(6px);
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .promotion-title {
  position: absolute;
  top: 0;
  left: 0;
  background: #4B0076;
  color: white;
  font-weight: bold;
  padding: 6px 20px;
  font-size: 14px;
  z-index: 1;
}

.promotion-title .blink-text {
  color: cyan;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
  
  .promotion-title::after {
    content: "";
    position: absolute;
    top: 0;
    right: -20px;
    width: 0;
    height: 0;
    border-top: 30px solid #4B0076;
    border-right: 20px solid transparent;
  }


.promotion-cards {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 35px;
  margin-bottom: -5px;
}

.card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.card::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.card img {
  height: 120px;
  object-fit: contain;
  display: block;
  width: 100%;
  position: relative;
}

.card-text {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  color: white;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 1px 3px black;
}

.card-text div:first-child {
  font-size: 13px;
  margin-bottom: 5px;
  line-height: 1.2;
  word-wrap: break-word;
}

.card-text .amount {
  font-size: 18px;
}

/* === POPUP === */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup {
  background: black;
  color: white;
  max-width: 800px;
  width: 95%;
  animation: fadeIn 0.3s ease;
  border: 2px solid #ffd700;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
}

.popup.fade-out {
  animation: fadeOut 0.3s ease forwards;
}

.popup h3 {
  font-size: 16px;
  color: gold;
  padding: 12px 0;
  margin: 0;
  text-align: left;
}

.border-bottom {
  border-bottom: 1px solid gold;
  width: 100%;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
  padding: 12px;
}

.section h4 {
  color: white;
  font-size: 16px;
}

.section .rules, .section .accepts{
  color: rgb(255, 153, 0) !important;
  font-size: 1.2em !important;
}

.section ul {
  list-style: disc;
  padding-left: 20px;
  color: white;
  font-weight: bold;
  font-size: 15px;
}

.accept-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  gap: 5px;
}

.popup-buttons button {
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
}

.popup-buttons .close-btn {
  background-image: linear-gradient(to bottom, #F44336, #B71C1C);
  color: white;
  width: 20%;
}

.popup-buttons .claim-btn {
  background-image: linear-gradient(to bottom, #7800b0, #7800b0);
  color: white;
  width: 80%;
}

.terms-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
}

.table-row {
  background-color: #25383c;
}

.table-row:not(.last-row) {
  border-bottom: 1.5px solid black;
}

.icon-cell {
  width: 50px;
  text-align: center;
  vertical-align: middle;
  border-right: 1.5px solid black;
}

.text-cell {
  padding: 8px 10px;
  font-size: 12px;
  vertical-align: middle;
}

.success .icon-cell {
  color: lime;
}

.error .icon-cell {
  color: red;
}

.warning .icon-cell {
  color: yellow;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .promotion-container {
    max-width: 95%;
    margin-top: 25px;
  }
  
  .promotion-cards {
    justify-content: left;
    gap: 8px;
    padding: 35px 5px 0;
  }
  
  .card {
    width: calc(33.333% - 8px);
    max-width: 150px;
  }
  
  .promotion-title {
    padding: 6px 20px;
    font-size: 13px;
  }

  .promotion-title::after {
    border-top: 45px solid #4B0076;
    border-right: 22px solid transparent;
  }

  .card-text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

/* Mobile layout */
@media screen and (max-width: 480px) {
  .promotion-container {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .promotion-title {
    font-size: 12px;
    padding: 5px 15px;
  }
  
  .promotion-title::after {
    right: -15px;
    border-top: 45px solid #4B0076;
    border-right: 15px solid transparent;
  }
  
  .promotion-cards {
    padding-top: 55px;
    gap: 6px;
    padding-left: 6px;
    padding-right: 6px;
  }
  
  .card {
    width: calc(30% - 6px);
    max-width: none;
  }
  
  .card-text div:first-child {
    font-size: 11px;
    margin-bottom: 3px;
  }
  
  .card-text .amount {
    font-size: 16px;
  }
  
  .popup {
    width: 95%;
    padding: 8px;
  }
  
  .popup h3 {
    font-size: 14px;
    padding: 10px 0;
  }
  
  .section {
    padding: 10px 0;
  }
  
  .section h4 {
    font-size: 13px;
  }
  
  .section ul li {
    font-size: 11px;
  }
  
  .popup-buttons button {
    padding: 8px 12px;
    font-size: 12px;
  }
  
  /* Switch to 2 columns on very small screens */
  @media screen and (max-width: 360px) {
    .card {
      width: calc(30% - 6px);
    }
  }
}
</style>