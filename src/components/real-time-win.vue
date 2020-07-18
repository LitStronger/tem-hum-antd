<template>
                    <a-row type="flex" justify="space-around" class="right" style="width:80%">
                    <!-- <div style="width:100%; height: 17.5vw; background: gray;"> -->
                          <a-col :span="20" style=" margin-top: 2vw">
                              <div style="border-radius: 5px;box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);width: 40px;  text-align: center;">温度</div>
                              <div id="humidity" style="text-align: center; font-size: 30px; color: #0AC267;">{{this.RTData.temperature}}°C</div>
                          </a-col>
                          <a-col :span="20" style="">
                              <div style="border-radius: 5px;box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);width: 65px; margin: 0px 0px 10px; text-align: center;">相对湿度</div>
                              <div id="relative-humidity" style="text-align: center; font-size: 30px; color: #66ccff;">{{this.RTData.humidity}}%</div>
                          </a-col>
                    </a-row> 
</template>

<script>
export default {
  props:{
    RTData: Object
  },
  data () {
    return {

    }
  },
  methods:{
    test(){
      console.log("rtw"+this.RTData)
    }
  },
  mounted(){
    this.test()
  }
}
</script>

<style scoped>
</style>