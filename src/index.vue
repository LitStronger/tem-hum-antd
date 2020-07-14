<template>
  <a-layout id="components-layout-demo-responsive">
    <!-- <a-layout-sider
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
        <span class="avatar-text">用户0001</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['16']">
        <a-menu-item key="16">
        <a-icon type="home" />
          <span class="nav-text"> 概况 </span>
        </a-menu-item>
        <a-sub-menu key="17">
          <span slot="title"><a-icon type="user" /><span> 我的设备 </span></span>
          <a-menu-item key="1">
            deviece
          </a-menu-item>
          <a-menu-item key="2">
            deviece
          </a-menu-item>
          <a-menu-item key="3">
            deviece
          </a-menu-item>
          <a-menu-item key="4">
            deviece
          </a-menu-item>
          <a-menu-item key="5">
            deviece
          </a-menu-item>
          <a-menu-item key="6">
            deviece
          </a-menu-item>
          <a-menu-item key="7">
            deviece
          </a-menu-item>
          <a-menu-item key="8">
            deviece
          </a-menu-item>
          <a-menu-item key="9">
            deviece
          </a-menu-item>
          <a-menu-item key="10">
            deviece
          </a-menu-item>
          <a-menu-item key="11">
            deviece
          </a-menu-item>
          <a-menu-item key="12">
            deviece
          </a-menu-item>
          <a-menu-item key="13">
            deviece
          </a-menu-item>
          <a-menu-item key="14">
            deviece
          </a-menu-item>
          <a-menu-item key="15">
            deviece
          </a-menu-item>

        </a-sub-menu>
      </a-menu>
    </a-layout-sider> -->
    <a-layout>
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-avatar
          :src="logoSrc"
          shape="square"
          :size="64"
        >
        </a-avatar>
        <span style="font-size: 18px">鸱吻云平台</span>
      </a-layout-header> -->
      <a-layout-content :style="{ margin: '24px 16px 0', minHeight: '80vh' }">
        <!-- <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }"> -->
            <a-card :style="{ background: 'fff' }" title="设备总览">

               <a-row type="flex" justify="space-around">
                <a-col :span="1"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="1"></a-col>
                 <a-col :span="1"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4">
                  <cardItem style=""></cardItem>
                </a-col>
                <a-col :span="1"></a-col>
              </a-row>
          </a-card>
        <!-- </div> -->
      </a-layout-content>
      <!-- <a-layout-footer style="textAlign: center">
        鸱吻云科技 联系电话：xxxxx
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script>

import cardItem from './components/card-item'

export default {
  data () {
    return{
      logoSrc: require('./assets/logo.png')
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
  components: {
    cardItem
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
