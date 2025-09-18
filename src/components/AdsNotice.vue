<template>
  <!-- Sticky Bar with Close Button -->
  <div v-if="isVisible" class="sticky-bar">
    <button class="close-btn" @click="closeStickyBar">X</button>
    <div @click="navigateToRegister">
      <img src="@/assets/ads_notice.gif" alt="Advertisement" />
    </div>
  </div>
</template>

<script setup>
// Logic for showing and hiding the sticky bar
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import router

const router = useRouter() // Initialize router
const isVisible = ref(true)

// Function to close the sticky bar when the close button is clicked
const closeStickyBar = () => {
  isVisible.value = false
}

// Function to navigate to Register.vue using router
const navigateToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
/* Sticky Bar Styles */
.sticky-bar {
  position: fixed;
  bottom: 55px;
  z-index: 1001;
  padding-top: 50px;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 17px;
  right: 0px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

/* Styling for the image */
.sticky-bar img {
  max-width: 500px;
  width: 100%;
  cursor: pointer;
  display: block;
  border: 0;
}
</style>