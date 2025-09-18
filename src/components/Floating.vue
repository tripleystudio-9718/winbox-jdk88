<template>

<div class="floating-tips">
    <a href="https://t.me/wbvvipangpau" target="_blank">
      <img src="@/assets/floating-logo.gif" />
    </a>
  </div>
</template>

<style>
.floating-tips {
  width: 40px;
  position: fixed;
  bottom: 358px;
  right: 0px;
  z-index: 1000;
  animation: movemove 20s infinite;
}

@keyframes movemove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
  100% {
    transform: translateY(180);
  }
}

.floating-tips img {
  width: 44px;
}
</style>