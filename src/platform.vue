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
        <a-sub-menu key="17">
          <span slot="title"><a-icon type="user" /><span> 我的设备 </span></span>
          <a-menu-item key="1" v-on:click="select(0)">
            <router-link to="device"> {{device[0].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="2" v-on:click="select(1)">
            <router-link to="/device"> {{device[1].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="3" v-on:click="select(2)">
            <router-link to="/device"> {{device[2].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="4" v-on:click="select(3)">
            <router-link to="/device"> {{device[3].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="5" v-on:click="select(4)">
            <router-link to="/device"> {{device[4].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="6" v-on:click="select(5)">
            <router-link to="/device"> {{device[5].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="7" v-on:click="select(6)">
            <router-link to="/device"> {{device[6].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="8" v-on:click="select(7)">
            <router-link to="/device"> {{device[7].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="9" v-on:click="select(8)">
            <router-link to="/device"> {{device[8].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="10" v-on:click="select(9)">
            <router-link to="/device"> {{device[9].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="11" v-on:click="select(10)">
            <router-link to="/device"> {{device[10].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="12" v-on:click="select(11)">
            <router-link to="/device"> {{device[11].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="13" v-on:click="select(12)">
            <router-link to="/device"> {{device[12].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="14" v-on:click="select(13)">
            <router-link to="/device"> {{device[13].id}}</router-link> 
          </a-menu-item>
          <a-menu-item key="15" v-on:click="select(14)">
            <router-link to="/device"> {{device[14].id}}</router-link> 
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
  data () {
    return{
      user:{
        name: "用户0001"
      },
      device:[
        { id: "测试-01" },
        { id: "测试-02" },
        { id: "测试-03" },
        { id: "测试-04" },
        { id: "测试-05" },
        { id: "测试-06" },
        { id: "测试-07" },
        { id: "测试-08" },
        { id: "测试-09" },
        { id: "测试-10" },
        { id: "测试-11" },
        { id: "测试-12" },
        { id: "测试-13" },
        { id: "测试-14" },
        { id: "测试-15" },
      ],
      logoSrc: require('./assets/logo.png')
    }
  },
  methods: {
    select(index){
      let param = { id: this.device[index].id }
      this.$router.push({path:"/device", query:param}) 
      console.log("param.Id: "+ param.id);
    },
    onCollapse(collapsed, type) {   //面板收缩
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {    //暂时不知道有啥用
      console.log(broken);
    },
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
