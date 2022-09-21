<template>
  
  <div class="container-xxl" style="padding-left: 10%; padding-right: 10%;">
    <h1>Alluser</h1>
  <table class="table table-bordered"><i class="fa-thin fa-user"></i>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Room_NO</th>
      <th scope="col">Roomtpye_ID</th>
      <th scope="col">Email</th>
      <th scope="col">Manage</th>
      <th scope="col"></th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="(user , index) in users.slice(0,5)" :key="index">
      <th scope="row">{{user.id}}</th>
      <td>{{user.name}}</td>
      <td>{{user.room_type_id}}</td>
      <td>{{user.email}}</td>
      <td><button type="button" class="btn btn-warning">Edit</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>

  </tbody>
</table>


</div>

</template> 
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
      
      onMounted(async() =>{
        console.log('this is on Moutwesdff')
        // await axios.get('https://jsonplaceholder.typicode.com/users')
        await axios.get('https://1bd3-183-182-110-237.ap.ngrok.io/api/rooms', {
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
      })
      return{
        users,
        // getPost
      }
    }
    
  };
  
  
  </script>
