<template>


<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 





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
      })
      return{
        users,
        // getPost
      }
    }
    
  };
  
  
</script>

<style>

</style>