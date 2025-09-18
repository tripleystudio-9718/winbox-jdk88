<template>
  <div class="register-overall">
  <div class="register-iframe-container">
      <iframe
        :src="iframeUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <div class="register-part1">
      <div class="register-qr-part1">
        <img
              :src="require('@/assets/register-qr.png')"
              alt="Instagram Icon"
              class="icon"
            />

        <button>Save Image</button>
      </div>

      <div class="register-qr-part2">

        <div class="register-qr-part2-1">
        <h1>Scan This QR Code</h1>
        <p>If it is manual, please enter the following code</p>
        <h2>Referrer: Wi888ox</h2>
</div>
<div class="register-details">
      <div class="register-details1">
        <img
              :src="require('@/assets/register-1.png')"
              alt="Instagram Icon"
              class="icon"
            />
        <p>Click here to sign up Winbox Account.</p></div>
      
        <div class="register-details2">
        <img
              :src="require('@/assets/register-2.png')"
              alt="Instagram Icon"
              class="icon"
            />
        <p>Click here for more assistance.</p></div>
      
        <div class="register-details3">
        <img
              :src="require('@/assets/register-3.png')"
              alt="Instagram Icon"
              class="icon"
            />
    
        <p>Click here if you already have a Winbox Account.</p></div>
      </div>

      </div>

   
  </div>
  </div>
    </template>
    
    <script>
    import { ref } from 'vue';
    
    export default {
      setup() {
        const iframeUrl = ref('https://www.winbox.cloud/wb-login.html');
        return {
          iframeUrl, 
        };
      },
    };
    </script>
  
  <style scoped>
  
  .register-overall{
      display: flex;
      justify-content: left;
      align-items: start;
      width:86%;
      margin:0 auto;
      flex-direction: column;
      gap:50px;
      padding:22px;
    }
  
  .register-iframe-container {
    width: 100%;
    height: 100vh; 
  }
  
  iframe {
    width: 100%;
    height: 100vh;
    border-radius: 48px;
  }
  
  .register-part1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap:80px;
    width:100%;
  }

  .register-qr-part1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:15px;
    width:30%;
  }

  .register-qr-part1 button{
    background-color:#1B243A;
    width:70%;
    height:45px;
    border-radius: 8px;
    font-family: Rubik, sans-serif;
    color: #FFFF ;
    font-size: 20px;
    font-weight:400;
  }

  .register-qr-part2{
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    gap:40px;
    width:70%;
  }

  .register-qr-part2 h1{
    font-family: Rubik, sans-serif;
    color: #949598 ;
    font-size: 30px;
    font-weight:500;
  }

  .register-qr-part2 p{
    font-family: Rubik, sans-serif;
    color: #FFFF ;
    font-size: 18px;
    font-weight:100;
  }

  .register-qr-part2 h2{
    font-family: Rubik, sans-serif;
    color: #FFFF ;
    font-size: 16px;
    font-weight:700;
    letter-spacing: 1px;
  }

  .register-details1{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    gap:10px;
  }

  .register-details1 img{
    width:28%;
  }
  

  .register-details2{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    gap:10px;
  }

  .register-details2 img{
    width:28%;
  }

  .register-details3{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    gap:10px;
  }

  .register-details3 img{
    width:28%;
  }


  .register-qr-part2-1{
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    gap:20px;
  }

  .register-details{
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    gap:20px;
  }

/*----------------------------------------------------------------------------*/

  @media screen and (max-width: 768px) {
  .register-overall {
    width: 94%;
    padding: 15px;
    gap: 30px;
  }
  
  .register-iframe-container {
    height: 110vh;
  }
  
  iframe {
    height: 110vh;
    border-radius: 24px;
  }
  
  .register-part1 {
    gap: 40px;
  }
  
  .register-qr-part2 h1 {
    font-size: 24px;
  }
  
  .register-qr-part2 p {
    font-size: 16px;
  }
  
  .register-qr-part1 button {
    font-size: 16px;
    height: 40px;
  }

  .register-details1,
  .register-details2,
  .register-details3 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

/* Mobile Phone Responsive Styles */
@media screen and (max-width: 480px) {
  .register-overall {
    width: 100%;
    padding: 10px;
    gap: 25px;
  }
  
  .register-iframe-container {
    height: 120vh;
  }
  
  iframe {
    height: 120vh;
    border-radius: 16px;
  }
  
  .register-part1 {
    flex-direction: column;
    gap: 30px;
  }
  
  .register-qr-part1 {
    width: 100%;
  }
  
  .register-qr-part1 img {
    width: 50%;
  }
  
  .register-qr-part1 button {
    width: 50%;
    font-size: 16px;
  }
  
  .register-qr-part2 {
    width: 100%;
    gap: 25px;
    align-items: left;
  }
  
  .register-qr-part2-1 {
    align-items: center;
    text-align: left;
    gap:8px;
  }
  
  .register-qr-part2 h1 {
    font-size: 18px;
    text-align: left;
  }
  
  .register-qr-part2 p {
    font-size: 14px;
    text-align: left;
  }
  
  .register-qr-part2 h2 {
    font-size: 14px;
  }
  
  .register-details {
    width: 100%;
  }
  
  .register-details1 img,
  .register-details2 img,
  .register-details3 img {
    width:40%;
  }
  
  .register-details1,
  .register-details2,
  .register-details3 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

  </style>
    