<template>
  <div class="promotion-container">
    <div class="promotion-title">❌NO TURNOVER BONUS❌</div>

    <div class="promotion-cards">
      <div
        class="card"
        v-for="(item, index) in cards"
        :key="index"
        @click="handleCardClick(index)"
      >
        <img :src="promotionImage" alt="Promotion" />
        <div class="card-text">
          <div>{{ item.title }}</div>
          <div class="amount">{{ item.amount }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pop-up -->
  <div v-if="selectedCard !== null" class="popup-overlay" @click="closePopup">
    <div class="popup" :class="{ 'fade-out': isFadingOut }" @click.stop>
      <h3>{{ cards[selectedCard].title }}</h3>
      <div class="border-bottom"></div>
      <div class="popup-content">
        <div class="keperluan-title">Keperluan</div>
        <table class="terms-table">
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
              <td class="text-cell">{{ detail.text }}</td>
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

const cards = [
  {
    title: '20% NO TURNOVER',
    amount: '20%',
    details: [
      { text: 'Deposit RM 5 untuk unlock Bonus', type: 'success' },
      { text: 'Withdraw 80%', type: 'success' },
      { text: 'Only For Slot Game', type: 'success' },
      { text: 'Unlimited Claim', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Untuk Reload Pin Sahaja : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
  },
  {
    title: '30% NO TURNOVER',
    amount: '30%',
    details: [
      { text: 'Deposit RM 10 untuk unlock Bonus', type: 'success' },
      { text: 'Withdraw 70%', type: 'success' },
      { text: 'Only For Slot Game', type: 'success' },
      { text: 'Unlimited Claim', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Untuk Reload Pin Sahaja : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
  },
  {
    title: '40% NO TURNOVER',
    amount: '40%',
    details: [
      { text: 'Deposit RM 30 untuk unlock Bonus', type: 'success' },
      { text: 'Withdraw 60%', type: 'success' },
      { text: 'Only For Slot Game', type: 'success' },
      { text: 'Unlimited Claim', type: 'success' },
      { text: 'Tidak Boleh Beli Free Game / Simpan Free Game ', type: 'error' },
      { text: 'Tidak Boleh Campur / Rebate / Commision dan Lain Bonus ', type: 'error' },
      { text: 'Bonus Ini Tidak Terima Untuk Reload Pin Sahaja : Digi | Maxis| Umobile | Celcom | TNG Pin', type: 'warning' }
    ]
  }
]

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

.promotion-title::after {
  content: "";
  position: absolute;
  top: 0;
  right: -19px;
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
  
  /* Switch to 2 columns on very small screens */
  @media screen and (max-width: 360px) {
    .card {
      width: calc(30% - 6px);
    }
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

</style>
