<template>
  <a-card hoverable :style="{ minHeight: 0 }">
    <img
      slot="cover"
      alt="example"
      src="../assets/device.png"
    />
    <!-- <a-card-meta v-bind:title="'deviceId'+deviceId">
    </a-card-meta> -->
    <span>设备{{deviceId}}</span>
  </a-card>
</template>
<script>
export default {
  data () {
    return {
      deviceId: '0011'
    }
  }
}
</script>
<style scoped>
</style>