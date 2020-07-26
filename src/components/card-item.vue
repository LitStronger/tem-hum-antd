<template>
  <a-card hoverable :style="{ minHeight: 0 }">
    <img
      slot="cover"
      alt="example"
      src="../assets/device.png"
    />

    <span>{{deviceName}}</span>
  </a-card>
</template>
<script>
export default {
  props: ['deviceName'],
  data () {
    return {
      //deviceId: '0011'
    }
  }
}
</script>
<style scoped>
</style>