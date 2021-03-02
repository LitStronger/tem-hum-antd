<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0', minHeight: '80vh' }">
        <a-card :style="{ background: 'fff' }" title="设备总览">
          <a-row type="flex" justify="space-around" :gutter="[0, 32]">
            <a-col :span="1"></a-col>
            <a-col :span="4" @click="select(0)">
              <cardItem :deviceName="device[0].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(1)">
              <cardItem :deviceName="device[1].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(2)">
              <cardItem :deviceName="device[2].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(3)">
              <cardItem :deviceName="device[3].name" style=""></cardItem>
            </a-col>
            <a-col :span="1"></a-col>
          </a-row>

          <a-row type="flex" justify="space-around" :gutter="[0, 32]">
            <a-col :span="1"></a-col>
            <a-col :span="4" @click="select(4)">
              <cardItem :deviceName="device[4].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(5)">
              <cardItem :deviceName="device[5].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(6)">
              <cardItem :deviceName="device[6].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(7)">
              <cardItem :deviceName="device[7].name" style=""></cardItem>
            </a-col>
            <a-col :span="1"></a-col>
          </a-row>

          <a-row type="flex" justify="space-around" :gutter="[0, 32]">
            <a-col :span="1"></a-col>
            <a-col :span="4" @click="select(8)">
              <cardItem :deviceName="device[8].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(9)">
              <cardItem :deviceName="device[9].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(10)">
              <cardItem :deviceName="device[10].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(11)">
              <cardItem :deviceName="device[11].name" style=""></cardItem>
            </a-col>
            <a-col :span="1"></a-col>
          </a-row>

          <a-row type="flex" justify="start" :gutter="[0, 32]">
            <a-col :span="1"></a-col>
            <a-col :span="4" @click="select(12)">
              <cardItem :deviceName="device[12].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(13)">
              <cardItem :deviceName="device[13].name" style=""></cardItem>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="4" @click="select(14)">
              <cardItem :deviceName="device[14].name" style=""></cardItem>
            </a-col>
          </a-row>
        </a-card>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import cardItem from "./components/card-item";

export default {
  props: ["device", "userInfo"],
  data() {
    return {
      logoSrc: require("./assets/logo.png"),
    };
  },
  methods: {
    select(index) {
      let param = {
        id: this.$userMsg.deviceIds[index],
        name: this.device[index].name,
      };
      if (!param.id) {
        alert("暂无设备！");
      } else {
        this.$router.push({ path: "device", query: param });
      }
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
  components: {
    cardItem,
  },
};
</script>

<style>
#components-layout-demo-responsive .avatar {
  margin: 20px 52px 10px 52px;
}
#components-layout-demo-responsive .avatar-text {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
}
</style>
