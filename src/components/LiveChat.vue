<template>
    <div class="login-overall">
      <div class="iframe-container">
        <iframe
          :src="iframeUrl"
          frameborder="0"
          allowfullscreen
          referrerpolicy="no-referrer"
          sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // Reactive iframe URL
  const iframeUrl = ref('https://direct.lc.chat/17425320/4')
  
  // Optional: Add error handling and logging
  const handleIframeError = (error) => {
    console.error('Iframe loading error:', error)
    // Optionally, show a user-friendly error message
  }
  
  // Optional: Message handling between parent and iframe
  const handleMessage = (event) => {
    // Add security checks before processing messages
    if (event.origin !== window.location.origin) {
      console.warn('Received message from unauthorized origin')
      return
    }
    
    // Process iframe messages if needed
    console.log('Received message:', event.data)
  }
  
  // Add event listeners on mount
  onMounted(() => {
    window.addEventListener('message', handleMessage)
  })
  
  // Clean up event listeners on unmount
  onUnmounted(() => {
    window.removeEventListener('message', handleMessage)
  })
  </script>
  
  <style scoped>
  .login-overall {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    gap: 50px;
    background-color: #120017; /* Matching app background */
  }
  
  .iframe-container {
    width: 100%;
    height: calc(100vh - 120px); /* Accounting for header and footer */
    overflow: hidden;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    background-color: white;
  }
  
  </style>