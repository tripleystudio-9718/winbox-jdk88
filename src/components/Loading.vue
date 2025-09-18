<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-container">
      <div class="spinner-container">
        <img :src="spinnerCircle" alt="Spinner" class="spinner-circle" />
        <div class="center-content">
          <div class="loading-circle">
            <img :src="loadingGif" alt="Loading" class="loading-gif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spinnerCircle from '@/assets/spinner-circle.png';

export default {
  name: 'LoadingComponent',
  data() {
    return {
      isLoading: false,
      spinnerCircle: spinnerCircle,
      loadingGif: new URL('@/assets/loading_icon.gif', import.meta.url).href
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.showLoading();
      next();
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.hideLoading();
      }, 500);
    });
  },
  methods: {
    showLoading() {
      this.isLoading = true;
    },
    hideLoading() {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 8, 8, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
}

.spinner-circle {
  position: absolute;
  width: 110px;
  height: 110px;
  animation: spin 2s linear infinite;
  transform-origin: center center;
  z-index: 1;
}

.center-content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  z-index: 2;
}

.loading-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  padding: -10px;
  z-index: 3;
}

.loading-gif {
  max-width: 80px;
  height: auto;
  z-index: 3;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
