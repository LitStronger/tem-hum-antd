<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="{ height: '150vh' }"
    >
      <div style="text-align:center">
          <a-avatar
            class="avatar"
            :size="96"
            shape="circle" 
            style="backgroundColor:gray"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
          />
        <span class="avatar-text">{{user.name}}</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['16']">
        <a-menu-item key="16" v-on:click="select(16)">
        <a-icon type="home" />
          <span class="nav-text"> 概况 </span>
        </a-menu-item>
        <a-sub-menu key="17">
          <span slot="title"><a-icon type="user" /><span> 我的设备 </span></span>
          <a-menu-item key="1" v-on:click="select(0)">
            <span class="nav-text"> {{device[0].name}} </span>
            <!-- <router-link to="/device"> {{device[0].name}}</router-link>  -->
          </a-menu-item>
          <a-menu-item key="2" v-on:click="select(1)">
            <span class="nav-text"> {{device[1].name}} </span>
          </a-menu-item>
          <a-menu-item key="3" v-on:click="select(2)">
            <span class="nav-text"> {{device[2].name}} </span>
          </a-menu-item>
          <a-menu-item key="4" v-on:click="select(3)">
            <span class="nav-text"> {{device[3].name}} </span>
          </a-menu-item>
          <a-menu-item key="5" v-on:click="select(4)">
            <span class="nav-text"> {{device[4].name}} </span>
          </a-menu-item>
          <a-menu-item key="6" v-on:click="select(5)">
            <span class="nav-text"> {{device[5].name}} </span>
          </a-menu-item>
          <a-menu-item key="7" v-on:click="select(6)">
            <span class="nav-text"> {{device[6].name}} </span>
          </a-menu-item>
          <a-menu-item key="8" v-on:click="select(7)">
            <span class="nav-text"> {{device[7].name}} </span>
          </a-menu-item>
          <a-menu-item key="9" v-on:click="select(8)">
            <span class="nav-text"> {{device[8].name}} </span>
          </a-menu-item>
          <a-menu-item key="10" v-on:click="select(9)">
            <span class="nav-text"> {{device[9].name}} </span>
          </a-menu-item>
          <a-menu-item key="11" v-on:click="select(10)">
            <span class="nav-text"> {{device[10].name}} </span>
          </a-menu-item>
          <a-menu-item key="12" v-on:click="select(11)">
            <span class="nav-text"> {{device[11].name}} </span>
          </a-menu-item>
          <a-menu-item key="13" v-on:click="select(12)">
            <span class="nav-text"> {{device[12].name}} </span>
          </a-menu-item>
          <a-menu-item key="14" v-on:click="select(13)">
            <span class="nav-text"> {{device[13].name}} </span>
          </a-menu-item>
          <a-menu-item key="15" v-on:click="select(14)">
            <span class="nav-text"> {{device[14].name}} </span>
          </a-menu-item> 
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-avatar
          :src="logoSrc"
          shape="square"
          :size="48"
        >
        </a-avatar>
        <span style="font-size: 18px"> 鸱吻云平台</span>
      </a-layout-header>
      <router-view :device="device"></router-view>
      <a-layout-footer style="textAlign: center">
        鸱吻云科技 联系电话：xxxxx
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

export default {
  props:['token'],
  data () {
    return{
      user:{
        name: "未登陆"
      },
      device:[
        // { name: "测试-01" },
        // { name: "测试-02" },
        // { name: "测试-03" },
        // { name: "测试-04" },
        // { name: "测试-05" },
        // { name: "测试-06" },
        // { name: "测试-07" },
        // { name: "测试-08" },
        // { name: "测试-09" },
        // { name: "测试-10" },
        // { name: "测试-11" },
        // { name: "测试-12" },
        // { name: "测试-13" },
        // { name: "测试-14" },
        // { name: "测试-15" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
        { name: "暂无设备" },
      ],
      logoSrc: require('./assets/logo.png')
    }
  },

  methods: {
    select(index){
      let param;
      if(index>=0 && index<=14){
        param = {
          name: this.device[index].name,
          id: this.$userMsg.deviceIds[index],
          token: this.$userMsg.token
        }
        console.log("id=",param.id)
        if(!param.id){
          alert("暂无设备！")
        }
        else{
          this.$router.push({path:"/device", query:param}) 
        }
      }
      else{
        this.$router.push({path:"/index"})
      }
    },
    onCollapse(collapsed, type) {   //面板收缩
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {    //暂时不知道有啥用
      console.log(broken);
    },
    updateName(){
      for(let i=0; i<this.device.length; i++){
        // console.log("dev list", this.$userMsg.deviceList[i])
        if(this.$userMsg.deviceList[i]){
          this.device[i].name = this.$userMsg.deviceList[i].name
        }
      }
      this.user.name = this.$userMsg.username
    }
  },
  mounted() {
    this.updateName()
  },
};
</script>

<style>
#components-layout-demo-responsive .avatar {
  margin: 20px 52px 10px 52px;
}
#components-layout-demo-responsive .avatar-text {
  display: block;  
  color: rgba(255,255,255, 0.7);
  margin-bottom: 10px;
}
</style>
