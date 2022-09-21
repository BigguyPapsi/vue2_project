<script>
  import { ref ,onMounted} from 'vue';
  import axios from 'axios'
  import HelloWorld from './HelloWorld.vue';
  // import { onMounted } from '@vue/runtime-core';
  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
    setup(){
      
      
      const users =  ref([])
      const rooms =  ref([])
      
      onMounted(async() =>{
        console.log('this is on Moutwesdff')
        // await axios.get('https://jsonplaceholder.typicode.com/users')
        await axios.get('https://1bd3-183-182-110-237.ap.ngrok.io/api/alluser', {
          headers: {
            "ngrok-skip-browser-warning": true,
          }
        })
          .then(respone=>{
            // console.log(respone)
            users.value = respone.data
          }).catch(err=>{
            console.log(err)
          })


//------------------------------------------------------------------------------------------


          await axios.get('https://1bd3-183-182-110-237.ap.ngrok.io/api/rooms', {
          headers: {
            "ngrok-skip-browser-warning": true,
          }
        })
          .then(respone=>{
            // console.log(respone)
            rooms.value = respone.data
          }).catch(err=>{
            console.log(err)
          })

      })
      return{
        users,rooms
        
      }
    }
    
  }; 
  </script>








<template>
  <div class="container" style="padding-left: 3%; padding-right: 3%;">
    <h1>Dashboard</h1>

    <div class="container text-center">
  <div class="row">
    <div class="col">



      <div class="alert alert-success" role="alert" style="width: 256px;">
  <h4 class="alert-heading">{{users.length}}</h4>
  <hr>
  <p class="mb-0" style="font-size:17pt ;">All User</p>
</div>



    </div>
    <div class="col order-1">




<div class="alert alert-success" role="alert" style="width: 256px;">
  <h4 class="alert-heading">{{users.length}}</h4>
  <hr>
  <p class="mb-0" style="font-size:17pt ;">All user</p>
</div>

    </div>
    <div class="col order-5">

      <div class="alert alert-success" role="alert" style="width: 256px;">
  <h4 class="alert-heading">{{rooms.length}}</h4>
  <hr>
  <p class="mb-0" style="font-size:17pt ;">All Rooms</p>
</div>





    </div>
  </div>
</div>






</div>

</template> 



