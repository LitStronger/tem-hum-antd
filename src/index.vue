<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0', minHeight: '80vh' }">
            <a-card :style="{ background: 'fff' }" title="设备总览">
               <a-row type="flex" justify="space-around" :gutter="[0,32]">
                <a-col :span="1"></a-col>
                <a-col :span="4" @click="select(0)">
                  <router-link to="/device"><cardItem :deviceId="device[0].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(1)">
                  <router-link to="/device"><cardItem :deviceId="device[1].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(2)">
                  <router-link to="/device"><cardItem :deviceId="device[2].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(3)">
                  <router-link to="/device"><cardItem :deviceId="device[3].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="1"></a-col>
              </a-row>

               <a-row type="flex" justify="space-around" :gutter="[0,32]">
                 <a-col :span="1"></a-col>
                <a-col :span="4" @click="select(4)">
                  <router-link to="/device"><cardItem :deviceId="device[4].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(5)">
                  <router-link to="/device"><cardItem :deviceId="device[5].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(6)">
                  <router-link to="/device"><cardItem :deviceId="device[6].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(7)">
                  <router-link to="/device"><cardItem :deviceId="device[7].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="1"></a-col>
              </a-row>

               <a-row type="flex" justify="space-around" :gutter="[0,32]">
                <a-col :span="1"></a-col>
                <a-col :span="4" @click="select(8)">
                  <router-link to="/device"><cardItem :deviceId="device[8].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(9)">
                  <router-link to="/device"><cardItem :deviceId="device[9].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(10)">
                  <router-link to="/device"><cardItem :deviceId="device[10].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(11)">
                  <router-link to="/device"><cardItem :deviceId="device[11].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="1"></a-col>
              </a-row>

              <a-row type="flex" justify="start" :gutter="[0,32]">
                <a-col :span="1"></a-col>
                <a-col :span="4" @click="select(12)">
                  <router-link to="/device"><cardItem :deviceId="device[12].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(13)">
                  <router-link to="/device"><cardItem :deviceId="device[13].id" style=""></cardItem></router-link>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="4" @click="select(14)">
                  <router-link to="/device"><cardItem :deviceId="device[14].id" style=""></cardItem></router-link>
                </a-col>
              </a-row>
          </a-card>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

import cardItem from './components/card-item'

export default {
  props: ['device'],
  data () {
    return{
      logoSrc: require('./assets/logo.png')
    }
  },
  methods: {
    select(index){
      let param = { id: this.device[index].id }
      this.$router.push( {path:"/device", query:param} )
      console.log("pic: "+index);
      
    },
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
