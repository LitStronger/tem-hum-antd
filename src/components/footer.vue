<template>
    <div class="">
      <!-- <span class="" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
        <span class="">
          <i class=""></i>
        </span>
       <span>首页</span>
      </span> -->
     <span class="" :class="{on: '/device'===$route.path}" @click="goTo('/device')">
     <br>
     <router-link :to="{ name: 'device'}">User</router-link>
     <br>
     <router-link :to="{ name: 'index'}">index</router-link>

       <span class="">
         <i class=""></i>
       </span>
       <span>设备详情</span>
     </span>
   </div>
</template>

<script>
   export default {
    methods: {
       goTo(path) {
         this.$router.replace(path)
       }
     }
   }
</script>