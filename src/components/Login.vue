<template>
  <div ref="iframeWrapper" class="iframe-wrapper">
    <iframe
      ref="iframe"
      src="https://www.winbox.cloud/wb-login.html"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const iframeWrapper = ref(null);

const resizeIframe = () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const headerHeight = header?.offsetHeight || 0;
  const footerHeight = footer?.offsetHeight || 0;
  const windowHeight = window.visualViewport?.height || window.innerHeight;

  const availableHeight = windowHeight - headerHeight - footerHeight;

  if (iframeWrapper.value) {
    iframeWrapper.value.style.height = availableHeight + "px";
  }
};

onMounted(() => {
  resizeIframe();
  window.addEventListener("resize", resizeIframe);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeIframe);
});
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.iframe-wrapper {
  width: 100%;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

@media (max-width: 480px) {

  .iframe-wrapper {
    height: 125% !important;
  }

  iframe {
    transform: scale(0.80);
    transform-origin: top left;
    width: 125%;
    height: 125%;
  }
}

</style>