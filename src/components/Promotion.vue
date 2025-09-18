<template>
    <div class="promo-container">
        <promotion_1 />
        <promotion_2 />
        <promotion_3 />
        <promotion_4 />
        <promotion_5 />
        <promotion_6 />
        <promotion_7 />
        <promotion_8 />
        <promotion_9 />
        <promotion_10 />
    </div>
  </template>
  
  <script setup>
    import promotion_1 from '@/components/promo/promotion-1.vue';
    import promotion_2 from '@/components/promo/promotion-2.vue';
    import promotion_3 from '@/components/promo/promotion-3.vue';
    import promotion_4 from '@/components/promo/promotion-4.vue';
    import promotion_5 from '@/components/promo/promotion-5.vue';
    import promotion_6 from '@/components/promo/promotion-6.vue';
    import promotion_7 from '@/components/promo/promotion-7.vue';
    import promotion_8 from '@/components/promo/promotion-8.vue';
    import promotion_9 from '@/components/promo/promotion-9.vue';
    import promotion_10 from '@/components/promo/promotion-10.vue';
  </script>
  
  <style scoped>
  .promo-container {
    max-width: 900px; /* Reduced from 900px */
    margin: 0 auto;
    margin-top: 15px; /* Reduced from 20px */
    min-height: 100vh; /* Reduced from 170vh */
    padding: 0 10px; /* Added padding */
  }
  
  /* Tablet - Medium screens */
  @media screen and (max-width: 768px) {
    .promo-container {
      max-width: 80%;
      margin-top: 12px;
      min-height: auto;
      padding: 0 8px;
    }
  }
  
  /* Mobile - Small screens */
  @media screen and (max-width: 480px) {
    .promo-container {
      max-width: 95%;
      margin-top: 20px;
      padding: 0 5px;
    }
  }
  </style>
  