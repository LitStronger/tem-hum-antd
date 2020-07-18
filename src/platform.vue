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
        <a-menu-item key="16">
        <a-icon type="home" />
          <span class="nav-text"> 概况 </span>
        </a-menu-item>
        <!-- <a-menu-item key="2">
          <a-icon type="user" />
          <span class="nav-text"> 我的设备 </span>
          <a-icon  type="right" />
        </a-menu-item> -->
        <a-sub-menu key="17">
          <span slot="title"><a-icon type="user" /><span> 我的设备 </span></span>
          <a-menu-item key="1" v-on:click="select(1)">
            <router-link to="/device">deviece {{device[0].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="2" v-on:click="select(2)">
            <router-link to="/device/2">deviece {{device[1].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="3" v-on:click="select(3)">
            <router-link to="/device/3">deviece {{device[2].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="4" v-on:click="select(4)">
            <router-link to="/device/4">deviece {{device[3].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="5" v-on:click="select(5)">
            <router-link to="/device/5">deviece {{device[4].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="6" v-on:click="select(6)">
            <router-link to="/device/6">deviece {{device[5].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="7" v-on:click="select(7)">
            <router-link to="/device/7">deviece {{device[6].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="8" v-on:click="select(8)">
            <router-link to="/device/8">deviece {{device[7].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="9" v-on:click="select(9)">
            <router-link to="/device/9">deviece {{device[8].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="10" v-on:click="select(10)">
            <router-link to="/device/10">deviece {{device[9].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="11" v-on:click="select(11)">
            <router-link to="/device/11">deviece {{device[10].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="12" v-on:click="select(12)">
            <router-link to="/device/12">deviece {{device[11].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="13" v-on:click="select(13)">
            <router-link to="/device/13">deviece {{device[12].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="14" v-on:click="select(14)">
            <router-link to="/device/14">deviece {{device[13].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="15" v-on:click="select(15)">
            <router-link to="/device/15">deviece {{device[14].id}}</router-link> 
          </a-menu-item> 

        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-avatar
          :src="logoSrc"
          shape="square"
          :size="64"
        >
        </a-avatar>
        <span style="font-size: 18px">鸱吻云平台</span>
      </a-layout-header>
      <router-view></router-view>
      <a-layout-footer style="textAlign: center">
        鸱吻云科技 联系电话：xxxxx
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

// import cardItem from './components/card-item'

export default {
  data () {
    return{
      user:{
        name: "用户0001"
      },
      device:[
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
      ],
      logoSrc: require('./assets/logo.png')
    }
  },
  methods: {
    select(deviceId){
      console.log(deviceId);

    },
    onCollapse(collapsed, type) {   //面板收缩
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {    //暂时不知道有啥用
      console.log(broken);
    },
  },
  components: {
    // cardItem
  }
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
