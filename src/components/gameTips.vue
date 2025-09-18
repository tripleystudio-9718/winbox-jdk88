<template>
    <div class="leaderboard">
      <h1 class="leaderboard__title">SENARAI KEDUDUKAN</h1>
      
      <div class="leaderboard__tabs">
        <button 
          class="leaderboard__tab" 
          :class="{ 'leaderboard__tab--active': activeTab === 'today' }"
          @click="setActiveTab('today')">
          Today
        </button>
        <button 
          class="leaderboard__tab" 
          :class="{ 'leaderboard__tab--active': activeTab === 'yesterday' }"
          @click="setActiveTab('yesterday')">
          Yesterday
        </button>
      </div>
      
      <div class="leaderboard__filter">
        <button class="leaderboard__filter-btn leaderboard__filter-btn--active">Semua Permainan</button>
      </div>
      
      <p class="leaderboard__update-info">*Bet records may take upto 1 hour to be updated.</p>
      
      <div class="leaderboard__table-container">
        <table class="leaderboard__table">
          <thead>
            <tr>
              <th class="rank-col">Rank</th>
              <th class="player-col">Player</th>
              <th class="game-col">Game</th>
              <th class="bet-col">Bet</th>
              <th class="menang-col">Menang</th>
              <th class="ratio-col">Payout Ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in displayedData" :key="index">
              <td class="rank-col">{{ player.rank }}</td>
              <td class="player-col">{{ player.player }}</td>
              <td class="game-col">{{ player.game }}</td>
              <td class="bet-col">{{ player.bet }}</td>
              <td class="menang-col">{{ player.menang }}</td>
              <td class="ratio-col">{{ player.payoutRatio }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  // Set active tab (today or yesterday)
  const activeTab = ref('today');
  
  // Today's leaderboard data
  const todayData = ref([
    { rank: 1, player: '60*******079', game: 'JOKER', bet: 'RM0.05', menang: 'RM50.00', payoutRatio: '1000.00' },
    { rank: 2, player: '60*******724', game: 'MARIO', bet: 'RM0.05', menang: 'RM35.70', payoutRatio: '714.00' },
    { rank: 3, player: '60*******744', game: 'JILI', bet: 'RM0.02', menang: 'RM14.16', payoutRatio: '708.00' },
    { rank: 4, player: '60*******401', game: 'MEGA888', bet: 'RM0.50', menang: 'RM250.00', payoutRatio: '500.00' },
    { rank: 5, player: '60*******410', game: 'MEGA888', bet: 'RM0.50', menang: 'RM163.00', payoutRatio: '326.00' },
    { rank: 6, player: '60*******092', game: 'JILI', bet: 'RM0.10', menang: 'RM25.91', payoutRatio: '259.10' },
    { rank: 7, player: '60*******560', game: 'MEGA888H5', bet: 'RM0.50', menang: 'RM125.00', payoutRatio: '250.00' },
    { rank: 8, player: '60*******069', game: 'JILI', bet: 'RM0.01', menang: 'RM2.50', payoutRatio: '250.00' },
    { rank: 9, player: '60*******246', game: 'JILI', bet: 'RM0.30', menang: 'RM75.00', payoutRatio: '250.00' },
    { rank: 10, player: '60*******811', game: 'JILI', bet: 'RM0.10', menang: 'RM21.84', payoutRatio: '218.40' },
    { rank: 11, player: '60*******116', game: 'MEGA888H52', bet: 'RM0.50', menang: 'RM100.20', payoutRatio: '200.40' },
    { rank: 12, player: '60*******137', game: 'MEGA888', bet: 'RM0.50', menang: 'RM100.00', payoutRatio: '200.00' },
    { rank: 13, player: '60*******404', game: 'MEGA888H52', bet: 'RM0.75', menang: 'RM115.05', payoutRatio: '153.40' },
    { rank: 14, player: '60*******511', game: 'JILI', bet: 'RM0.20', menang: 'RM30.32', payoutRatio: '151.60' },
    { rank: 15, player: '60*******264', game: 'PT3', bet: 'RM0.25', menang: 'RM37.10', payoutRatio: '148.40' },
    { rank: 16, player: '60*******736', game: 'MEGA888H52', bet: 'RM1.00', menang: 'RM146.90', payoutRatio: '146.90' },
    { rank: 17, player: '60*******655', game: 'MEGA888H52', bet: 'RM1.00', menang: 'RM146.24', payoutRatio: '146.24' },
    { rank: 18, player: '60*******120', game: 'MEGA888H52', bet: 'RM0.18', menang: 'RM26.00', payoutRatio: '144.44' },
    { rank: 19, player: '60*******763', game: 'JILI', bet: 'RM0.30', menang: 'RM43.20', payoutRatio: '144.00' },
    { rank: 20, player: '60*******092', game: 'MEGA888H52', bet: 'RM0.50', menang: 'RM70.20', payoutRatio: '140.40' },
    { rank: 21, player: '60*******900', game: 'JILI', bet: 'RM0.30', menang: 'RM40.06', payoutRatio: '133.53' },
    { rank: 22, player: '60*******983', game: 'MEGA888H52', bet: 'RM0.50', menang: 'RM64.40', payoutRatio: '128.80' },
    { rank: 23, player: '60*******435', game: 'JILI', bet: 'RM0.20', menang: 'RM24.88', payoutRatio: '124.40' },
    { rank: 24, player: '60*******930', game: 'MEGA888H52', bet: 'RM0.30', menang: 'RM36.96', payoutRatio: '123.20' },
    { rank: 25, player: '60*******544', game: 'MARIO', bet: 'RM0.20', menang: 'RM22.00', payoutRatio: '110.00' },
    { rank: 26, player: '60*******032', game: 'MEGA888', bet: 'RM1.00', menang: 'RM106.00', payoutRatio: '106.00' },
    { rank: 27, player: '60*******462', game: 'MEGA888H52', bet: 'RM1.00', menang: 'RM104.34', payoutRatio: '104.34' },
    { rank: 28, player: '60*******535', game: 'JILI', bet: 'RM0.05', menang: 'RM5.15', payoutRatio: '103.00' },
    { rank: 29, player: '60*******005', game: 'PUSSY', bet: 'RM0.45', menang: 'RM46.00', payoutRatio: '102.22' },
    { rank: 30, player: '60*******829', game: 'MEGA888', bet: 'RM0.50', menang: 'RM50.70', payoutRatio: '101.40' },
    { rank: 31, player: '60*******911', game: 'JILI', bet: 'RM0.50', menang: 'RM50.20', payoutRatio: '100.40' },
    { rank: 32, player: '60*******570', game: 'MEGA888', bet: 'RM0.30', menang: 'RM30.08', payoutRatio: '100.27' },
    { rank: 33, player: '60*******969', game: 'KISS918', bet: 'RM0.09', menang: 'RM9.00', payoutRatio: '100.00' },
    { rank: 34, player: '60*******480', game: 'JILI', bet: 'RM0.50', menang: 'RM48.77', payoutRatio: '97.54' },
    { rank: 35, player: '60*******401', game: 'MEGA888', bet: 'RM0.30', menang: 'RM27.60', payoutRatio: '92.00' },
    { rank: 36, player: '60*******996', game: 'KISS918', bet: 'RM0.05', menang: 'RM4.53', payoutRatio: '90.60' },
    { rank: 37, player: '60*******410', game: 'JOKER', bet: 'RM0.10', menang: 'RM9.01', payoutRatio: '90.10' },
    { rank: 38, player: '60*******101', game: 'PUSSY', bet: 'RM0.25', menang: 'RM22.10', payoutRatio: '88.40' },
    { rank: 39, player: '60*******923', game: 'KISS918', bet: 'RM0.50', menang: 'RM43.60', payoutRatio: '87.20' },
    { rank: 40, player: '60*******087', game: 'JILI', bet: 'RM0.20', menang: 'RM16.38', payoutRatio: '81.90' },
    { rank: 41, player: '60*******123', game: 'MEGA888H52', bet: 'RM0.40', menang: 'RM30.64', payoutRatio: '76.60' },
    { rank: 42, player: '60*******255', game: 'MEGA888H52', bet: 'RM1.00', menang: 'RM74.40', payoutRatio: '74.40' },
    { rank: 43, player: '60*******091', game: 'JILI', bet: 'RM0.20', menang: 'RM14.58', payoutRatio: '72.90' },
    { rank: 44, player: '60*******708', game: 'JILI', bet: 'RM0.20', menang: 'RM13.88', payoutRatio: '69.40' },
    { rank: 45, player: '60*******815', game: 'JILI', bet: 'RM0.12', menang: 'RM8.00', payoutRatio: '66.67' },
    { rank: 46, player: '60*******036', game: 'JILI', bet: 'RM0.30', menang: 'RM19.95', payoutRatio: '66.50' },
    { rank: 47, player: '60*******609', game: 'JILI', bet: 'RM0.30', menang: 'RM18.60', payoutRatio: '62.00' },
    { rank: 48, player: '60*******949', game: 'MEGA888H52', bet: 'RM0.50', menang: 'RM30.30', payoutRatio: '60.60' },
    { rank: 49, player: '60*******404', game: 'JILI', bet: 'RM0.30', menang: 'RM18.00', payoutRatio: '60.00' },
    { rank: 50, player: '60*******208', game: 'MEGA888', bet: 'RM0.50', menang: 'RM28.80', payoutRatio: '57.60' }
  ]);
  
  // Yesterday's leaderboard data (randomized when tab is clicked)
  const yesterdayData = ref([]);
  
  // Generate random data for yesterday's tab
  const generateYesterdayData = () => {
    const games = ['JOKER', 'MARIO', 'JILI', 'MEGA888', 'MEGA888H5', 'MEGA888H52', 'PT3', 'KISS918', 'PUSSY'];
    const newData = [];
    
    for(let i = 1; i <= 50; i++) {
      // Generate random values
      const playerNum = Math.floor(Math.random() * 999).toString().padStart(3, '0');
      const gameIndex = Math.floor(Math.random() * games.length);
      const betAmount = (Math.random() * 2).toFixed(2);
      const payoutRatio = (Math.random() * 900 + 100).toFixed(2);
      const winAmount = (parseFloat(betAmount) * parseFloat(payoutRatio) / 100).toFixed(2);
      
      newData.push({
        rank: i,
        player: `60*******${playerNum}`,
        game: games[gameIndex],
        bet: `RM${betAmount}`,
        menang: `RM${winAmount}`,
        payoutRatio: payoutRatio
      });
    }
    
    // Sort by payout ratio (descending)
    newData.sort((a, b) => parseFloat(b.payoutRatio) - parseFloat(a.payoutRatio));
    
    // Update ranks after sorting
    newData.forEach((item, index) => {
      item.rank = index + 1;
    });
    
    yesterdayData.value = newData;
  };
  
  // Determine which data set to display based on active tab
  const displayedData = computed(() => {
    return activeTab.value === 'today' ? todayData.value : yesterdayData.value;
  });
  
  // Tab switching function with random data generation for yesterday
  const setActiveTab = (tab) => {
    if (tab === 'yesterday' && (yesterdayData.value.length === 0 || activeTab.value !== 'yesterday')) {
      generateYesterdayData();
    }
    activeTab.value = tab;
  };
  
  // Generate initial data for yesterday on component mount
  onMounted(() => {
    generateYesterdayData();
  });
  </script>
  
  <style scoped>
  .leaderboard {
    max-width: 100%;
    font-family: Arial, sans-serif;
    color: white;
    position: relative;
    overflow: hidden;
    padding: 10px;
  }
  
  .leaderboard__title {
    color: #ffd700;
    margin: 0;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid #ffd700;
    position: relative;
    z-index: 1;
  }
  
  .leaderboard__tabs {
    display: flex;
    padding: 10px 10px 0 10px;
  }
  
  .leaderboard__tab {
    padding: 8px 15px;
    margin-right: 5px;
    background-color: #224f4f;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .leaderboard__tab--active {
    background-color: #546E7A;
  }
  
  .leaderboard__filter {
    margin: 15px 10px;
  }
  
  .leaderboard__filter-btn {
    background-color: #224f4f;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .leaderboard__filter-btn--active {
    background-color: #546E7A;
  }
  
  .leaderboard__update-info {
    color: #aaa;
    font-size: 12px;
    margin: 10px;
    font-style: italic;
  }
  
  .leaderboard__table-container {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }
  
  .leaderboard__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    table-layout: fixed; /* This ensures the columns respect their widths */
  }
  
  .leaderboard__table th {
    background-color: #1d2531;
    color: white;
    text-align: left;
    padding: 8px 5px;
    border: 1px solid white;
    font-weight: normal;
    white-space: nowrap; /* Prevent header text from wrapping */
    overflow: hidden;
    text-overflow: ellipsis; /* Add ellipsis for overflowing text */
  }
  
  .leaderboard__table td {
    padding: 8px 5px;
    border: 1px solid white;
    white-space: nowrap; /* Prevent cell text from wrapping */
    overflow: hidden;
    text-overflow: ellipsis; /* Add ellipsis for overflowing text */
  }
  
  /* Column widths */
  .rank-col {
    width: 40px;
  }
  
  .player-col {
    width: 100px;
  }
  
  .game-col {
    width: 90px;
  }
  
  .bet-col {
    width: 60px;
  }
  
  .menang-col {
    width: 80px;
  }
  
  .ratio-col {
    width: 90px;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .leaderboard__table {
      min-width: 100%; /* Ensures table fills the container */
    }
    
    .rank-col {
      width: 30px;
    }
  
    .player-col {
      width: 80px;
    }
  
    .game-col {
      width: 70px;
    }
  
    .bet-col {
      width: 50px;
    }
  
    .menang-col {
      width: 60px;
    }
  
    .ratio-col {
      width: 70px;
    }
    
    .leaderboard__table th,
    .leaderboard__table td {
      font-size: 11px;
      padding: 6px 3px;
    }
    
    .leaderboard__title {
      font-size: 16px;
    }
    
    .leaderboard__tab,
    .leaderboard__filter-btn {
      font-size: 12px;
      padding: 6px 10px;
    }
  }
  
  /* For very small screens */
  @media (max-width: 480px) {
    .rank-col {
      width: 25px;
    }
  
    .player-col {
      width: 70px;
    }
  
    .game-col {
      width: 65px;
    }
  
    .bet-col {
      width: 45px;
    }
  
    .menang-col {
      width: 55px;
    }
  
    .ratio-col {
      width: 65px;
    }
    
    .leaderboard__table th,
    .leaderboard__table td {
      font-size: 10px;
      padding: 5px 2px;
    }
  }
  </style>