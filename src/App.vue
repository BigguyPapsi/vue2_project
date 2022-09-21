<template>

<body>

<div class="sidenav" style="filter: drop-shadow(2px 0px 0px #828282);">
  <div>
  <img src="https://cdn.discordapp.com/attachments/826834529435648000/1021448725232615515/logo-dark.png" alt="Icon" style="width: 64px;display: block;  margin-left:auto; margin-right:auto;"><p style="text-align: center; font-size: 25pt;">Admin</p>  </img></div>
  
  <router-link to="/" active-class="active" exact="" style="margin-top: 25px;">Dashboard</router-link>
  <router-link to="/Alluser" active-class="active">Alluser</router-link>
  <router-link to="/Room" active-class="active">Room</router-link>
  <router-link to="/RoomType" active-class="active">RoomType</router-link>
</div>

<div class="main" style="margin-top: 3%;">

<router-view></router-view>

<v-main>
</v-main>


</div>
   
</body>

</template> 

<style>
  body {
    font-family: "Lato", sans-serif;
  }
  
  .sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(225, 226, 233);
    overflow-x: hidden;
    padding-top: 20px;
  }
  
  .sidenav a {
    padding: 6px 6px 6px 32px;
    text-decoration: none;
    font-size: 25px;
    display: block;
    color: #575757;
  }
  
  .sidenav a:hover {
    color: #1c1c1c;
    border: ;
    font-weight: bolder;
  }
  
  .main {
    margin-left: 200px; /* Same as the width of the sidenav */
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }

  .active{
    background-color: #b0b0ba;
  }

  </style>

<script>
</script>