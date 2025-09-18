<template>
    <div class="snowflakes-container" aria-hidden="true">
      <div v-for="index in 12" :key="index" class="snowflake" :style="getSnowflakeStyle(index)"></div>
      <div v-for="index in 12" :key="index" class="snowflake2" :style="getSnowflakeStyle(index)"></div>
    </div>
  </template>
  
  <script setup>
  const getSnowflakeStyle = (index) => {
    const positions = [
      { left: '1%', delay: 0 },
      { left: '10%', delay: 1 },
      { left: '20%', delay: 0.5 },
      { left: '30%', delay: 2 },
      { left: '40%', delay: 2 },
      { left: '50%', delay: 3 },
      { left: '60%', delay: 2 },
      { left: '70%', delay: 1 },
      { left: '80%', delay: 0 },
      { left: '90%', delay: 1.5 },
      { left: '25%', delay: 0 },
      { left: '65%', delay: 2.5 },
    ]
  
    return {
      '--left': positions[index - 1].left,
      '--delay': `${positions[index - 1].delay}s`,
      '--shake-distance': `${Math.random() * 90 + 20}px`,
      '--fall-duration': `${Math.random() *10 + 8}s`,
      '--start-top': `${Math.random() * -100 - 50}px`,
      '--end-opacity': '0.5',
    }
  }
  </script>
  
  <style scoped>
  .snowflakes-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }
  
  .snowflake {
    width: 30px;
    height: 30px;
    background-image: url('/src/assets/raya_icon.png');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: var(--start-top);
    left: var(--left);
    will-change: transform;
    animation: snowflakes-animation var(--fall-duration) linear infinite;
    animation-delay: var(--delay);
  }

  .snowflake2 {
    width: 30px;
    height: 30px;
    background-image: url('/src/assets/raya2_icon.png');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: var(--start-top);
    left: var(--left);
    will-change: transform;
    animation: snowflakes-animation var(--fall-duration) linear infinite;
    animation-delay: var(--delay);
  }
  
  @keyframes snowflakes-animation {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
    25% {
      transform: translateY(25vh) translateX(var(--shake-distance));
    }
    50% {
      transform: translateY(50vh) translateX(0);
    }
    75% {
      transform: translateY(75vh) translateX(calc(-1 * var(--shake-distance)));
    }
    100% {
      transform: translateY(110vh) translateX(0);
      opacity: var(--end-opacity);
    }
  }
  </style>
  