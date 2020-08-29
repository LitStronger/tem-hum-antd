<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
          <a-card :style="{ background: 'fff' }" title="">
              <span style="display:inline">更新时间: {{date}}</span>
          </a-card>
          <a-row type="flex" style="margin-top: 15px">
            <a-col :span="5">
              <a-card :style="{ background: 'fff', minHeight: '30vh' }" title="设备概况">
                  <img
                    slot="cover"
                    :src="deviceSrc"
                  />
                  <span style="display: ">设备编号: {{this.userInfo.name}}</span>
              </a-card>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="18">
              <a-card :style="{ background: 'fff' }" style="height: 375px" title="设备数据">
                <a-row type="flex" justify="space-around" >
                  <a-col :span="7" style="text-align:center">
                      <!-- <div id="gauge" class="guage" style="height: 200px"></div> -->
                      <gauge></gauge>
                      <a-icon type="environment" /><span> 第五餐厅</span>
                  </a-col>
                  <a-col :span="7" >
                    <realTimeWin :RTData='RTData'></realTimeWin>
                  </a-col>                  
                  <a-col :span="7" >
                    <!-- <div style="width:100%; height: 17.5vw; background: pink"></div> -->
                    <a-card style="width:80%; text-align:center; border: none">
                        <img  v-image-preview
                          slot="cover"
                          class="picGauge"
                          :src="gaugeSrc"
                        />
                        <span style="display:block; margin-top:-13px">点击可查看原图</span>
                    </a-card>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <a-col :span="24" style="margin-top: 15px">
                  <historyChart :RTData="RTData" :tempData="tempData"></historyChart>
            </a-col>
          </a-row>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script src="/js/echarts.min.js"></script>

<script>
import realTimeWin from './components/real-time-win'
import gauge from './components/gauge'
import historyChart from './components/history-chart'
export default {
  props: ['userInfo'],
  data () {
    return{
      date: new Date(),
      tempData: [],
      RTData: {     //real-time data
        temperature: 0,
        humidity: 0
      },
      deviceSrc: require('./assets/device2.png'),
      gaugeSrc: "images/pic-gauge/test1.bmp",
      value: 3
    }
  },
  components: {
    realTimeWin,
    gauge,
    historyChart
  },
  methods: {

    getDeviveData(){
        var tempData = [];        // 温度
        var humiData = [];
        var RTData = {}
        var oneDay = 24 * 3600 * 1000;
        var now = new Date() - 1*oneDay;

        var oneMin = 60 *1000
        var oneHour = 3600*1000
        // var value = Math.random()*1+30;
        var value = 27
        
        // 更新时间/real-time-win/仪表盘图片轮播 的处理
        // setInterval(()=>{
        //   this.RTData.temperature = (parseFloat(this.RTData.temperature) + Math.random()*0.2 - 0.1).toFixed(1) 
        //   this.RTData.humidity = (parseFloat(this.RTData.humidity) + Math.random()*0.2 - 0.1).toFixed(1)
        // }, 60000);
        var picIndex = 0;
        setInterval(() => {
          picIndex = picIndex + 1
          if(picIndex > 8) picIndex = 1
          this.gaugeSrc = `images/pic-gauge/test${picIndex}.bmp`
          this.date = new Date()
        }, 60000);

        let token = this.$userMsg.token
        let deviceId = this.userInfo.id

        tempData = this.tempData
        RTData = this.RTData

        if(!deviceId){
          alert("暂无设备！")
        //history-chart 随机数生成 
          console.log("random data")
          for (var i = 0; i < 2; i++) {
            tempData.push(randomData());
          }
          this.tempData = tempData  
        }
        else{
            $.ajax({
                type: 'POST',
                headers: {
                  "fbtoken" : `${token}`,
                },
                url: "http://api.huozhiniao.cn/api/sensor/records",
                data: {
                  deviceId: `${deviceId}`
                },
                success: function(res){
                  console.log(res.data.count)
                  if(res.data.count == 0){
                    //alert("暂无数据！")
                    //history-chart 随机数生成 
                    console.log("random data")
                    for (var i = 0; i < 2; i++) {
                      tempData.push(randomData());
                    }
                    this.tempData = tempData  
                  }
                  else{
                    for(var i=0; i < res.data.count; i++){
                      let listItem = {}
                      listItem = res.data.list[i];
                      humiData.push(listItem.humidity)
                      tempData.push(formatData(listItem))
                    }
                    RTData.temperature = tempData[0].value[1]
                    RTData.humidity = humiData[0]
                  }
                },
                error: function(){
                  /* 断网时生成随机数据代替 */
                  //alert('net error')
                  for (var i = 0; i < 200; i++) {
                    tempData.push(randomData());
                  }
                  this.tempData = tempData  
                  RTData.temperature = tempData[0].value[1].toFixed(1)
                  RTData.humidity = 78.5
                }
            });
        }
        /* websocket */        
        function init() {
            const url = 'ws://ws.huozhiniao.cn'; 
            let ws = new WebSocket(url);
            let client = Stomp.over(ws);
            client.debug = false;
            console.log('ws://ws.huozhiniao.cn')
            let on_connect = function () {
                client.subscribe("/exchange/exchange.web.topic/rk-web"+deviceId, function (data) {
                    var msg = JSON.parse(data.body);
                    console.log(msg);
                    // TempUpdate = msg.temp
                    // humiUpdate = msg.humidity
                    RTData.temperature = msg.temp
                    RTData.humidity = msg.humidity
                });
            console.log('connect is success');
            };
            let on_error = function () {
                console.log('error');
            };
            //参数依次为：用户名，密码，连接后，出错，虚拟主机名
            client.connect('xingke', 'xingke', on_connect, on_error, '/');
        } 
        init();

        function formatData(listItem){
            let temp
            let timestamp
            let itemDate

            temp = listItem.temp;
            timestamp = listItem.lastDataTime;
            itemDate = new Date(timestamp);

            var h=itemDate.getHours();
            var mm=itemDate.getMinutes();
            h=h>9?h:"0"+h;
            mm=mm>9?mm:"0"+mm;
            return {
                name: itemDate.toString(),
                value: [
                    [itemDate.getFullYear(), itemDate.getMonth() + 1, itemDate.getDate(),].join('/')+ ' '+h + ':'+ mm,
                    temp
                ]
            };
        }
        function randomData() {
            now = new Date(+now + oneMin);
            var h=now.getHours();
            var mm=now.getMinutes();
            h=h>9?h:"0"+h;
            mm=mm>9?mm:"0"+mm;
            value = value + Math.random() * 1-0.5;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate(),].join('/')+ ' '+h + ':'+ mm,
                    value
                ]
            };
        }
    },
  },
  mounted(){
      this.getDeviveData();
  },
  watch: {
    userInfo(newVal,oldVal){
      this.userInfo = newVal;  //newVal即是chartData
      console.log(newVal)
      console.log("watch-userInfo")
      this.tempData = []
      this.getDeviveData();
      }
  },

};

</script>

<style scoped>
#components-layout-demo-responsive .avatar {
  margin: 20px 52px 10px 52px;
}
#components-layout-demo-responsive .avatar-text {
  display: block;  
  color: rgba(255,255,255, 0.7);
  margin-bottom: 10px;
}
.picGauge {
  border-radius: 30px;
 height: 200px;
}

</style>
