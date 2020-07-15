<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0', minHeight: '80vh' }">
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
      </a-layout-content>
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
