<template>
  <div class="promotion-container">
    <div class="promotion-title">
      JDK88 KUMPUL RESIT PROMOSI <span class="blink-text">[ MINGGUAN ] </span>
    </div>

    <div class="promotion-cards">
      <div class="card" v-for="(item, index) in cards" :key="index" @click="handleCardClick(index)">
        <img :src="promotionImage" alt="Promotion" />
        <div class="card-text">
          <div>{{ item.title }}</div>
          <div class="amount">{{ item.amount }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- POPUP -->
  <div v-if="selectedCard !== null" class="popup-overlay" @click="closePopup">
    <div class="popup" :class="{ 'fade-out': isFadingOut }" @click.stop>
      <h3>{{ cards[selectedCard].title }}</h3>
      <div class="border-bottom"></div>
      <div class="section" v-if="selectedCard !== 3 && selectedCard !== 4">
        <h4>Keperluan</h4>
        <ul>
          <li v-for="(item, i) in cards[selectedCard].keperluan" :key="i" v-html="item"></li>
        </ul>
        <h4 class="rules"><strong>Rules</strong></h4>
        <ul>
          <li v-for="(rule, i) in cards[selectedCard].rules" :key="i" v-html="rule"></li>
        </ul>
        <div>
          <h4 class="accepts"><strong>We Accept</strong></h4>
          <img :src="payment_accept" alt="We Accept" class="accept-image" />
        </div>
      </div>
      <table v-if="selectedCard === 3 || selectedCard === 4" class="terms-table">
        <tbody>
          <tr
            v-for="(detail, i) in cards[selectedCard].details"
            :key="i"
            :class="['table-row', detail.type, { 'last-row': i === cards[selectedCard].details.length - 1 }]"
          >
            <td class="icon-cell">
              <span v-if="detail.type === 'success'">✓</span>
              <span v-else-if="detail.type === 'warning'">⚠</span>
              <span v-else>✗</span>
            </td>
            <td class="text-cell" v-html="detail.text"></td>
          </tr>
        </tbody>
      </table>
      <div class="popup-buttons">
        <button class="close-btn" @click="closePopup">Tutup</button>
        <button class="claim-btn" @click="navigateToRegister">Claim Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import promotionImage from '@/assets/promotion-img.gif'
import payment_accept from '@/assets/payment-accept.png'
import { useRouter } from 'vue-router' // Import router

const selectedCard = ref(null)
const isFadingOut = ref(false)

function openPopup(index) {
  selectedCard.value = index
  isFadingOut.value = false
}

function closePopup() {
  isFadingOut.value = true
  setTimeout(() => {
    selectedCard.value = null
    isFadingOut.value = false
  }, 300)
}

// Updated to use router for mobile
function handleCardClick(index) {
  if (window.innerWidth <= 768) {
    router.push('/register');
  } else {
    openPopup(index)
  }
}

// Promotion cards data
const cards = [
{ title: 'In 30 Kali MYR10 FREE', 
  amount: '30%',
  keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 30 Kali </span> Claim Dengan Deposit/Topup ',
      'Topup <span style="color:rgb(255, 255, 0)">RM10</span> Untuk Unlock Game',
      'Turnover <span style="color:rgb(255, 255, 0)">X3</span>',
      '<span style="color:rgb(255, 255, 0)">Cuci Full 100%</span>',
      'Minimum Cuci RM50 / Max Cuci RM100,000'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { title: 'In 50 Kali MYR10 FREE', 
    amount: '40%',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 50 Kali </span> Claim Dengan Deposit/Topup ',
      'Topup <span style="color:rgb(255, 255, 0)">RM10</span> Untuk Unlock Game',
      'Turnover <span style="color:rgb(255, 255, 0)">X3</span>',
      '<span style="color:rgb(255, 255, 0)">Cuci Full 100%</span>',
      'Minimum Cuci RM50 / Max Cuci RM100,000'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { title: 'In 70 Kali MYR10 FREE', 
    amount: '50%',
    keperluan: [
      '<span style="color:rgb(255, 255, 0)">Topup 70 Kali </span> Claim Dengan Deposit/Topup ',
      'Topup <span style="color:rgb(255, 255, 0)">RM10</span> Untuk Unlock Game',
      'Turnover <span style="color:rgb(255, 255, 0)">X3</span>',
      '<span style="color:rgb(255, 255, 0)">Cuci Full 100%</span>',
      'Minimum Cuci RM50 / Max Cuci RM100,000'
    ],
    rules: [
      'Tidak Boleh Campur Dengan <span style="color:rgb(255, 255, 0)">Bonus Lain </span>',
      'Tidak Boleh Simpan <span style="color:rgb(255, 255, 0)">Free Game/Wild Game </span>',
      'Bonus Untuk Main <span style="color:rgb(255, 255, 0)">Slot Game </span>Sahaja'
    ]  },
  { title: 'In 250 CashBack', 
    amount: 'RM250',
    details: [
      { text: 'Total Deposit RM 250 & 0 Withdraw, DAPAT CashBack FREE RM 250', type: 'success' },
      { text: 'Turnover X10', type: 'success'},
      { text: 'Max Withdraw RM 250', type: 'success' },
      { text: 'JILI, JOKER, MARIO, RICH88, XE88 ', type: 'success' },
      { text: 'Buy Game Card, Buy Free Game, Live Game', type: 'success' },
      { text: '1 Week Claim 1 Kali Sahaja', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
   },
  { title: 'In 500 CashBack', 
    amount: 'RM500',
    details: [
      { text: 'Total Deposit RM 500 & 0 Withdraw, DAPAT CashBack FREE RM 500', type: 'success' },
      { text: 'Turnover X10', type: 'success'},
      { text: 'Max Withdraw RM 500', type: 'success' },
      { text: 'JILI, JOKER, MARIO, RICH88, XE88 ', type: 'success' },
      { text: 'Buy Game Card, Buy Free Game, Live Game', type: 'success' },
      { text: '1 Week Claim 1 Kali Sahaja', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ] },
]

const router = useRouter() // Initialize router
// Updated to use router instead of external link
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
    padding: 6px 10px;
    font-size: 13px;
  }

  .promotion-title::after {
    border-top: 28px solid #4B0076;
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
    border-top: 25px solid #4B0076;
    border-right: 15px solid transparent;
  }
  
  .promotion-cards {
    padding-top: 30px;
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
  
  .terms-table {
    padding: 0 5px;
  }
  
  .text-cell {
    padding: 6px 8px;
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
