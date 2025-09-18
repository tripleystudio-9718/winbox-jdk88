<script setup>
  import { ref, onMounted, onUnmounted, onUpdated, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import Snowflakes from '@/components/Snowflakes.vue';
  import Floating from '@/components/Floating.vue';
  import AdsNotice from '@/components/AdsNotice.vue';
  import PopUp from '@/components/PopUp.vue';
  import Loading from '@/components/Loading.vue';
  
  
  // State for sidebar menu visibility
  const isSidebarOpen = ref(false);
  
  // State for follow us dropdown
  const isFollowDropdownOpen = ref(false);
  
  // Toggle sidebar menu
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  
  // Toggle follow us dropdown
  const toggleFollowDropdown = () => {
    isFollowDropdownOpen.value = !isFollowDropdownOpen.value;
  };
  
  // Close sidebar when clicking outside
  const closeSidebar = (event) => {
    if (isSidebarOpen.value && event.target.classList.contains('sidebar-overlay')) {
      isSidebarOpen.value = false;
    }
  };
  
// Social media links
const socialMediaLinks = [
  {
    name: 'Telegram',
    img: new URL('@/assets/telegram-logo.png', import.meta.url).href,
    url: 'https://t.me/wbvvipangpau'
  },
  {
    name: 'Facebook',
    img: new URL('@/assets/facebook-logo.png', import.meta.url).href,
    router: '/Register'
  }
];

// Function to handle social media link clicks
const handleSocialClick = (link) => {
  if (link.router) {
    router.push(link.router);
  } else if (link.url) {
    window.open(link.url, '_blank');
  }
};
  
  const router = useRouter();
  const route = useRoute();
  
  // Function to navigate to Register.vue
  const navigateToRegister = () => {
    router.push('/register');
  };

  const goToRegister = () => {
  router.push('/register')
}

  watch(
    () => route.path,
    () => {
      // Get the main content element
      const mainContent = document.querySelector('main');
      
      // Reset scroll position to top
      if (mainContent) {
        mainContent.scrollTo({
          top: 0,
          behavior: 'instant' // Use 'smooth' for animated scrolling
        });
      }
    }
  );

  // Active menu item
  const activeItem = ref('home');
  
  // Menu items with their GIF URLs and navigation details
  const menuItems = [
    {
      icon: 'https://jdk88b.com/media/93f153df15d763ea0911a.gif',
      route: '/',
      id: 'home'
    },
    {
      icon: 'https://jdk88b.com/media/1ea6a9ed15d76c38eee38.gif',
      route: '/register',
      id: 'login',
    },
    {
      icon: 'https://jdk88b.com/media/1b35399a15d76c235779b.gif',
      route: '/promotion',
      id: 'promotion',
      badge: 1
    },
    {
      icon: 'https://jdk88b.com/media/126ac8bc15d76c57773ea.gif',
      route: '/livechat',
      id: 'livechat',
      badge: 1
    },
    {
      icon: 'https://jdk88b.com/media/031deee025d7644b7bf10.gif',
      route: '/register',
      id: 'settings'
    }
  ];
  
  // Function to handle menu item click
  const handleMenuItemClick = (item) => {
    activeItem.value = item.id;

    // If custom click handler exists, use it
    if (item.click && typeof item.click === 'function') {
      item.click();
      return;
    }

    // Else, handle internal or external route
    if (item.route?.startsWith('http')) {
      window.open(item.route, '_blank');
    } else if (item.route) {
      router.push(item.route);
    }
  };
  
  // Function to set active menu item
  const setActive = (item) => {
    activeItem.value = item;
  };
  
  // Function to calculate and set dynamic offsets for header and footer
  const setDynamicOffsets = () => {
    // Get actual rendered heights
    const headerEl = document.querySelector('header');
    const footerEl = document.querySelector('footer');
    
    if (headerEl && footerEl) {
      const headerHeight = headerEl.offsetHeight;
      const footerHeight = footerEl.offsetHeight;
      
      // Set CSS variables
      document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`);
      document.documentElement.style.setProperty('--footer-offset', `${footerHeight}px`);
    }
  };
  
  // Set offsets when component mounts
  onMounted(() => {
    // Allow time for rendering
    setTimeout(setDynamicOffsets, 100);
    
    // Update on window resize
    window.addEventListener('resize', setDynamicOffsets);
  });
  
  // Clean up event listener when component unmounts
  onUnmounted(() => {
    window.removeEventListener('resize', setDynamicOffsets);
  });
  
  // Update when component updates
  onUpdated(() => {
    setDynamicOffsets();
  });
</script>
    
  <template>
    <Loading />
    <div class="app-container">
      <snowflakes />
      <floating />
      <PopUp />
      <AdsNotice />
      <!-- Fixed Header -->
      <header>
        <!-- Main header with logo, menu button and translate button -->
        <div class="main-header">
          <!-- Hamburger menu button -->
          <button class="menu-button" @click="toggleSidebar">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <!-- Logo can be added here if needed -->
          
          <!-- Translate button -->
          <button class="translate-button" @click="goToRegister">
            <img src="@/assets/google_translate_icon.png" alt="JDK88 Logo" class="sidebar-logo" />
          </button>
        </div>
        
        <!-- Scrolling announcement bar -->
        <div class="announcement-bar">
          <div class="scrolling-text">
            <span>Selamat Datang Ke JDK88 Online Casino !! Biggest Company Di Malaysia !!!</span>
          </div>
        </div>
        
      <!-- Sidebar menu (hidden by default) -->
      <div 
          class="sidebar-overlay" 
          :class="{ 'active': isSidebarOpen }"
          @click="closeSidebar"
        >
          <div class="sidebar" :class="{ 'open': isSidebarOpen }">
            <div class="sidebar-header">
              <router-link to="/" class="menu-item">
              <img src="@/assets/sidebar-logo.png" alt="JDK88 Logo" class="sidebar-logo">
            </router-link>
            </div>
            <nav class="sidebar-nav">
              <div class="sidebar-content">
                <ul>
                  <li>
                    <router-link to="/game-tips" class="menu-item">
                      <img src="@/assets/gametips-logo.png" alt="Game Tips" class="menu-icon">
                      <span>Game Tips</span>
                    </router-link>
                  </li>
                  <li>
                    <!-- Changed to look like <a> but routes to Register.vue -->
                    <a @click="navigateToRegister" class="menu-link">
                      <img src="@/assets/luckydraw-logo.png" alt="Lucky Draw" class="menu-icon">
                      <span>Lucky Draw</span>
                    </a>
                  </li>
                  <li>
                    <!-- Changed to look like <a> but routes to Register.vue -->
                      <router-link to="/register" class="menu-item">
                      <img src="@/assets/download-logo.png" alt="Download Apps" class="menu-icon">
                      <span>Muat Turun APPS</span>
                    </router-link>
                  </li>
                  <li>
                      <router-link to="/register" class="menu-item">
                      <img src="@/assets/translate-logo.png" alt="Change Language" class="menu-icon">
                      <span>Tukar Bahasa</span>
                    </router-link>
                  </li>
                  <li class="follow-us-item">
                    <!-- Follow Us dropdown item -->
                    <div class="follow-us-header" @click.stop="toggleFollowDropdown">
                      <img src="@/assets/followus-logo.png" alt="Follow Us" class="menu-icon">
                      <div class="follow-us-text">Ikut Kami</div>
                      <div class="dropdown-arrow" :class="{ 'open': isFollowDropdownOpen }">
                        <svg class="dropdown-icon" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    
                    <!-- Social media dropdown menu -->
                    <div class="social-dropdown" :class="{ 'open': isFollowDropdownOpen }">
                      <a 
                        v-for="link in socialMediaLinks" 
                        :key="link.name" 
                        @click="handleSocialClick(link)" 
                        class="social-link"
                        :class="{ 'menu-link': link.isRegister }">
                        <div class="social-icon">
                          <img :src="link.img" :alt="link.name">
                        </div>
                        <div class="social-name">{{ link.name }}</div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    
      <!-- Main Content with Router View -->
      <main>
        <router-view /> <!-- This is where different views will be rendered -->
      </main>
    
      <!-- Fixed Footer Menu - No Text Labels -->
      <footer>
        <nav class="bottom-menu">
          <div 
            v-for="item in menuItems" 
            :key="item.id"
            class="menu-item" 
            :class="{ active: activeItem === item.id }" 
          >
            <div 
              class="icon-container" 
              @click="handleMenuItemClick(item)"
            >
              <img 
                :src="item.icon" 
                :alt="item.id" 
                class="icon-gif"
              >
              <div 
                v-if="item.badge && activeItem !== item.id" 
                class="notification-badge"
              >
                {{ item.badge }}
              </div>
            </div>
            <!-- No text labels here -->
          </div>
        </nav>
      </footer>
    </div>
  </template>
      
  <style>
  /* Reset CSS and Global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    /* Default values that will be overridden by JS */
    --header-offset: 85px;
    --footer-offset: 60px;
  }
  
  html, body {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #120017;
    color: white;
    font-family: Arial, sans-serif;
    overflow: hidden !important; /* Prevent body scrolling */
  }
  
  /* Hide scrollbar for all elements */
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  #app {
    height: 100%;
  }
  
  /* App container structure */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%; 
    position: relative;
    background-image: url("@/assets/main-background.webp");
    background-size: cover;
    background-position: center;
    background-color: #120017;
    overflow: hidden;
  }
  
  /* Fixed header */
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
  }
  
  /* Main content area with dynamic padding and scrolling */
  main {
    padding-top: var(--header-offset);
    padding-bottom: var(--footer-offset); 
    top: 70px;
    bottom: 70px;
    left: 0;
    right: 0;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    scroll-behavior: smooth;
  }
  
  /* Fixed footer */
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
  }
  
  /* Header components */
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-image: url("@/assets/banner-home.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
  }
  
  .menu-button {
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background-color: #DFD3E3;
    border-radius: 50%;
    z-index: 1003; /* Higher than main-header and sidebar */
  }
  
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 22px;
    height: 18px;
  }
  
  .hamburger span {
    display: block;
    height: 2px;
    width: 80%;
    background-color: #940000;
    border-radius: 3px;
  }
  
  .translate-button {
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .translate-button img {
    width: 40px;
    height: auto;
  }
  
  .announcement-bar {
    background-color: black;
    color: white;
    padding: 1px 0;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    border-top: 2px solid #ff04f4;
    border-bottom: 2px solid #ff04f4;
    font-size: 13px;
  }
  
  .scrolling-text {
    display: inline-block;
    padding-left: 100%;
    animation: scroll-left 30s linear infinite;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* Sidebar styling */
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.3s;
  }
  
  .sidebar-overlay.active {
    visibility: visible;
    opacity: 1;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: -280px;
    width: 250px;
    height: 100%;
    background-image: url("@/assets/sidebar-background.jpg");
    background-position: center;
    background-size: 100% 100%;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    transition: left 0.3s ease;
    z-index: 1001;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  
  .sidebar.open {
    left: 0;
  }
  
  .sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px 0px 0px;
  }
  
  .sidebar-logo {
    height: auto;
    width: 58%;
  }
  
  .sidebar-nav {
    flex: 1;
    display: flex;
    padding: 20px 0;
  }
  
  .sidebar-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  
  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  
  .sidebar-nav li {
    width: 70%;
    text-align: left;
  }
  
  .sidebar-nav a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px;
    color: white;
    text-decoration: none;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    position: relative;
    transition: all 0.3s ease;
    border-radius: 10px;
  }
  
  .sidebar-nav a::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0);
    width: 70%; /* Slightly narrower than full width */
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  .sidebar-nav a:hover::before {
    transform: translate(-50%, -50%) scaleX(1);
    opacity: 1;
  }
  
  .sidebar-nav a:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .sidebar-nav a span {
    transition: transform 0.3s ease;
  }
  
  .menu-icon {
    width: 25px;
    height: 25px;
    margin-right: 15px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  .sidebar-nav a:hover .menu-icon,
  .sidebar-nav a:hover span {
    transform: translateX(5px);
  }
  
  /* Follow Us dropdown styling */
  .follow-us-item {
    position: relative;
    width: 70%;
  }
  
  .follow-us-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px;
    color: white;
    text-decoration: none;
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    position: relative;
    transition: all 0.3s ease;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .follow-us-header::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0);
    width: 70%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  .follow-us-header:hover::before {
    transform: translate(-50%, -50%) scaleX(1);
    opacity: 1;
  }
  
  .follow-us-header:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .follow-us-text {
    transition: transform 0.3s ease;
    font-weight: 700;
  }
  
  .dropdown-arrow {
    margin-left: auto;
    transition: transform 0.3s ease;
  }
  
  .follow-us-header:hover .follow-us-text {
    transform: translateX(5px);
  }
  
  .dropdown-arrow.open {
    transform: rotate(180deg);
  }
  
  .social-dropdown {
    max-height: 0;
    overflow: hidden;
    width: 100%;
    border-radius: 10px;
    transform-origin: top;
    transition: max-height 0.3s ease;
  }
  
  .social-dropdown.open {
    max-height: 140px; /* Adjust based on content */
    padding: 0 0 0 30px;
    animation: slideDown 0.3s ease forwards;
  }
  
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 15px 12px 40px;
    text-decoration: none;
    color: white;
    width: 100%;
    position: relative;
    transition: all 0.3s ease;
    border-radius: 10px;
  }
  
  .social-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0);
    width: 70%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  .social-link:hover::before {
    transform: translate(-50%, -50%) scaleX(1);
    opacity: 1;
  }
  
  .social-link:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .social-icon {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
  
  .social-name {
    transition: transform 0.3s ease;
  }
  
  .social-link:hover .social-icon,
  .social-link:hover .social-name {
    transform: translateX(5px);
  }
  
  .social-icon img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: contain;
  }
  
  /* Bottom menu styling - without text labels */
  .bottom-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1b1b1b;
    height: 60px;
    width: 100%;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    opacity: 0.8;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
  }
  
  .menu-item.active {
    opacity: 1;
  }
  
  .icon-container {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .icon-gif {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .notification-badge {
    position: absolute;
    top: 8px;
    right: -5px;
    background-color: #f38120;
    color: white;
    font-size: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    animation: pulse 1.5s infinite ease-in-out;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Media queries for responsiveness */
  @media (max-width: 768px) {

    main {
      padding-top: 80px;
      padding-bottom: 150px;
    }
    .icon-container {
      width: 50px;
      height: 50px;
    }
  }
  </style>