<template>
  <div class="promotion-container">
    <div class="promotion-title">
      365 ANGPAO / FREE SHARE <span class="blink-text">[ NO MAX CUCI ]</span>
    </div>

    <div class="promotion-cards">
      <template v-for="(item, index) in cards" :key="index">
        <div
          class="card"
          :class="{ 'no-background': noBgIndices.includes(index) }"
          @click="handleCardClick(index)"
        >
          <img :src="promotionImage" alt="Promotion" />
          <div class="card-text">
            <div>{{ item.title }}</div>
            <div class="amount">{{ item.amount }}</div>
          </div>
        </div>
        
      </template>
    </div>
  </div>

  <!-- POPUP -->
  <div v-if="selectedCard !== null" class="popup-overlay" @click="closePopup">
    <div class="popup" :class="{ 'fade-out': isFadingOut }" @click.stop>
      <h3>{{ cards[selectedCard].title }}</h3>
      <div class="border-bottom"></div>
      <div class="popup-content">
        <div class="keperluan-title">Keperluan</div>

        <!-- Special case for card index 4 and 5 -->
        <div
          v-if="selectedCard === 4 || selectedCard === 5"
          class="text-cell"
          style="padding: 10px; font-size: 13px; color: white;"
        >
          <ul style="padding-left: 1.2em; margin: 0;">
            <li v-if="selectedCard === 4"><span style="color: rgb(102, 163, 224); font-weight: bold;">NO DEPOSIT</span></li>
            <li v-if="selectedCard === 4"><span style="color: rgb(255, 255, 0); font-weight: bold;">NO LIMIT CLAIM</span></li>
            <li v-if="selectedCard === 4"><span style="color: rgb(255, 153, 0); font-weight: bold;">⚠️ Rekomen 1 Kawan Free RM3</span></li>
            <li v-if="selectedCard === 4"><span style="color: rgb(255, 153, 0); font-weight: bold;">⚠️ Rekomen 10 Kawan Free RM30</span></li>
            <li v-if="selectedCard === 4"><span style="color: rgb(255, 153, 0); font-weight: bold;">⚠️ Rekomen 50 Kawan Free RM150</span></li>
            <li v-if="selectedCard === 4"><span style="color: rgb(255, 255, 0); font-weight: bold;">Rollover X1</span></li>
            <li v-if="selectedCard === 4">Cuci 10%</li>
            <li v-if="selectedCard === 4">Minimum Cuci RM100 / No Max Cuci</li>

            <li v-if="selectedCard === 5"><span style="color: rgb(102, 163, 224); font-weight: bold;">Min Deposit RM 10 Utk Unlock</span></li>
            <li v-if="selectedCard === 5"><span style="color: rgb(255, 255, 0); font-weight: bold;">NO LIMIT CLAIM</span></li>
            <li v-if="selectedCard === 5"><span style="color: rgb(255, 153, 0); font-weight: bold;">⚠️ Rekomen 1 Kawan Free RM10</span></li>
            <li v-if="selectedCard === 5"><span style="color: rgb(255, 153, 0); font-weight: bold;">⚠️ Rekomen 10 Kawan Free RM100</span></li>
            <li v-if="selectedCard === 5"><span style="color: rgb(255, 153, 0); font-weight: bold;">⚠️ Rekomen 50 Kawan Free RM500</span></li>
            <li v-if="selectedCard === 5"><span style="color: rgb(255, 255, 0); font-weight: bold;">Rollover X1</span></li>
            <li v-if="selectedCard === 5">Cuci 5%</li>
            <li v-if="selectedCard === 5">No Limit Cuci / No Max Cuci</li>
            <li v-if="selectedCard === 5">✅ MEGA888 H5</li>
          </ul>
        </div>

        <table v-if="cards[selectedCard].details" class="terms-table">
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
import promotionImage from '@/assets/promotion-img.gif'
import { useRouter } from 'vue-router' // Import router

const selectedCard = ref(null)
const isFadingOut = ref(false)

const noBgIndices = [0, 1, 2, 3, 8, 9]

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



const cards = [
  {
    title: 'NEW REGISTER',
    amount: 'RM15',
    details: [
      { text: 'Deposit RM 5 untuk unlock game', type: 'success' },
      { text: 'Minimum Withdraw RM 500', type: 'success'},
      { text: 'Max Payout RM 150', type: 'success' },
      { text: 'Only For Slot Game ', type: 'success' },
      { text: '1 Hari Claim 1 Kali Sahaja', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
  },
  {
    title: '365 FREE CREDIT',
    amount: 'RM30',
    details: [
      { text: 'Deposit RM 10 untuk unlock game', type: 'success' },
      { text: 'Minimum Withdraw RM 1000', type: 'success'},
      { text: 'Max Payout RM 300', type: 'success' },
      { text: 'Only For Slot Game ', type: 'success' },
      { text: '1 Hari Claim 1 Kali Sahaja', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
  },
  { title: 'FACEBOOK FREE', 
    amount: 'RM5',
    details: [
    { text: 'Deposit RM 10 untuk unlock game', type: 'success' },
  {
    text: '1. Like Facebook Page <a href="/register" style="color: rgb(102, 163, 224); text-decoration:none; font-weight: bold;">&lt;TEKAN SINI&gt;</a>',
    type: 'success'
  },
  {
    text: '2. Like & Share Post Ini Ke 3 Casino Facebook Group <a href="/register" style="color: rgb(102, 163, 224); text-decoration:none; font-weight: bold;">&lt;TEKAN SINI&gt;</a>',
    type: 'success'
  },
      { text: 'Lepas share mesti screenshot bukti share & send ke livechat utk claim FREE 5', type: 'success' },
      { text: 'Facebook Name Mesti Sama Dengan Bank Nama', type: 'success' },
      { text: 'Min Withdraw 500 Cuci RM 5', type: 'success' },
      { text: 'MEGA888 H5', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: '1 Member Claim 1 Kali Sahaja', type: 'warning' }
    ]
   },
  { title: 'TELEGRAM FREE', 
    amount: 'RM5',
    details: [
      { text: 'Join JDK88 Telegram Channel FREE RM 5', type: 'success' },
      {
        text: '1. Join Telegram Channel <a href="/register" target="_blank" style="color: rgb(250, 204, 204); text-decoration:none; font-weight: bold;">&lt;LINK&gt;</a>',
        type: 'success'
      },
      {
        text: '2. Forward Post Ke 3 Kasino Telegram Group <a href="/register" target="_blank" style="color: rgb(250, 204, 204); text-decoration:none; font-weight: bold;">&lt;LINK&gt;</a>',
        type: 'success'
      },
      { text: 'Sila Screenshot Bukti Send Ke LiveChat Utk Claim', type: 'success' },
      { text: 'Min Withdraw 500 Cuci RM 5 ', type: 'success' },
      { text: 'MEGA888 H5', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: '1 Member Claim 1 Kali Sahaja', type: 'warning' }
    ]
  },
  { title: 'FREE SHARE BONUS', amount: 'RM3' },
  { title: 'FREE SHARE V2', amount: 'RM10' },
  { title: 'DAILY REBATE', 
    amount: '5%',
    details: [
      { text: 'Deposit Untuk Dapat Rebate 5% Kalau Kalah', type: 'success' },
      { text: 'Minimum Withdraw RM 50', type: 'success'},
      { text: 'Rollover X3', type: 'success' },
      { text: 'Only For Slot Game ', type: 'success' },
      { text: '1 Hari Claim 1 Kali Sahaja', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
  },
  { title: 'WEEKLY COMMISSION', 
    amount: '5%',
    details: [
      { text: 'Setiap Minggu Commission 5%', type: 'success' },
      { text: 'Minimum Withdraw RM 50', type: 'success'},
      { text: 'Rollover X1', type: 'success' },
      { text: 'Only For Slot Game ', type: 'success' },
      { text: 'Setiap Isnin Claim 1 Kali Sahaja', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
   },
  { title: 'LUCKY DRAW', 
    amount: 'MYR ?',
    details: [
      { text: 'Setiap Topup RM10 Akan Dpt 1 Nombor', type: 'success' },
      { text: '4D Result = Grand Lotto', type: 'success'},
      { text: 'No Max Cuci 5%', type: 'success' },
      { text: 'Only For Slot Game ', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Reload Pin : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
   },
  { title: 'LEPAS CUCI FREE CREDIT', 
    amount: 'RM5',
    details: [
      { text: '1. Lepas Setiap Kali Cuci, Sila Screenshot Resit Cuci / Cuci Bukti / Cuci History', type: 'success' },
      { text: '2. Share Bukti Cuci Ini Ke 3 Casino Facebook Group / Telegram Casino Group', type: 'success'},
      { text: 'Lepas share mesti screenshot bukti share & send ke livechat utk claim FREE 5', type: 'success' },
      { text: 'Min Withdraw 500 Cuci RM 5', type: 'success' },
      { text: 'MEGA888 H5', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: '1 Member Claim 1 Kali Sahaja', type: 'warning' }
    ]
   },
]

const router = useRouter() // Initialize router
// Updated to use router instead of external link
const navigateToRegister = () => {
  router.push('/register');
};

</script>

<style scoped>
/* Existing card styles remain unchanged from your code */
.promotion-container {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px 0;
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
  color: yellow;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% { opacity: 0; }
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

.card.no-background::before {
  background: none;
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

.break-line {
  flex-basis: 100%;
  height: 0;
}

/* Popup styles (same as previous sections) */
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
  animation: fadeIn 0.3s ease;
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
}

.popup-content {
  padding: 12px 0;
}

.keperluan-title {
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
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

/* Custom styling for <ul><li> popup content (card index 4 & 5) */
  .text-cell ul {
  list-style-type: disc;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

.text-cell ul li {
  color: white;
  font-size: 15px;
  margin-bottom: 6px;
  line-height: 1.5;
  position: relative;
}

.text-cell ul li::marker {
  color: white;
}


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
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
    border-right: 21px solid transparent;
  }

  .card-text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

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

  .popup-content {
    padding: 10px 0;
  }

  .keperluan-title {
    font-size: 13px;
  }

  .text-cell {
    padding: 6px 8px;
    font-size: 11px;
  }

  .popup-buttons button {
    padding: 8px 12px;
    font-size: 12px;
  }
}

/* Switch to 2 columns on very small screens */
@media screen and (max-width: 360px) {
  .card {
    width: calc(30% - 6px);
  }
}
</style>
