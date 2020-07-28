<template>
  <div>
    <router-view />
  </div>
</template>
<script>

import Vue from "vue"
 

export default {
  created() {
    if (sessionStorage.getItem("store") ) {
      console.log('msg', sessionStorage.getItem("store"))
      Vue.prototype.$userMsg = JSON.parse(sessionStorage.getItem("store"))
      console.log('reload', this.$userMsg)
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$userMsg))
    })
  }
}
</script>