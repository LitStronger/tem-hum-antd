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
                  <span style="display: ">设备编号: </span>
              </a-card>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="18">
              <a-card :style="{ background: 'fff' }" style="height: 378px" title="设备数据">
                <a-row type="flex" justify="space-around" align="middle">
                  <a-col :span="7" >
                      <!-- <div id="gauge" class="guage" style="height: 200px"></div> -->
                      <gauge></gauge>
                  </a-col>
                  <a-col :span="7" type="flex" justify="space-around">
                    <realTimeWin :RTData='RTData'></realTimeWin>
                  </a-col>                  
                  <a-col :span="7" >
                    <!-- <div style="width:100%; height: 17.5vw; background: pink"></div> -->
                    <a-card style="width:80%; height: 200px">
                        <img
                          slot="cover"
                          :src="gaugeSrc"
                        />
                    </a-card>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>

            <a-col :span="24" style="margin-top: 15px">
              <!-- <a-card :style="{ background: 'fff' }" title="历史数据">
                <div id="main" style=" height: 250px; width: 80vw; margin-top:-30px"></div>
              </a-card> -->
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
  data () {
    return{
      date: new Date(),
      tempData: [],
      RTData: {     //real-time data
        temperature: 30.1,
        humidity: 80.1
      },
      deviceSrc: require('./assets/device2.png'),
      gaugeSrc: require('./assets/gauge.png'),
      value: 3
    }
  },
  components: {
    realTimeWin,
    gauge,
    historyChart
  },
  methods: {
    myChart(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var tempData = [];        // 温度
        var TempUpdate = [];
        var humiData = [];        // 湿度
        var humiUpdate = [];
        var oneDay = 24 * 3600 * 1000;
        var now = new Date() - 1*oneDay;

        var oneMin = 60 *1000
        var oneHour = 3600*1000
        var value = Math.random()*1+25;
        let test = this.RTData


/*        $.ajax({
            type: 'POST',
            url: "http://api.huozhiniao.cn/api/user/v2/login",
            data: {
                mobile: 'test',
                password: '123456'
            },
            success: function(res){
                console.log(res);
                let token = res.data.token;
                console.log("token:"+token);
                    $.ajax({
                        type: 'POST',
                        headers: {
                            "fbtoken" : `${token}`,
                        },
                        url: "http://api.huozhiniao.cn/api/sensor/records",
                        data: {
                            deviceId: '89860412129'
                        },
                        success: function(res){
                            console.log(res.data.count)*/

                            for (var i = 0; i < 1200; i++) {
                                tempData.push(randomData());
                            }
                            this.tempData = tempData
                            //console.log(tempData)
                            // for(var i=0; i < 100; i++){
                            //     let listItem = {}
                            //     listItem = res.data.list[i];
                            //     console.log(listItem)
                            //     humiData.push(listItem.humidity)

                            //     tempData.push(formatData(listItem))
                            // }
                            // TempUpdate = tempData[0].value[1];
                            // console.log(tempData[0])
                            // humiUpdate = humiData[0];
                            // myChart.setOption(option);
             /*           },
                    });
            },
        });*/
        function formatData(listItem){
            let temp
            let timestamp
            let itemDate

            temp = listItem.temp;
            timestamp = listItem.lastDataTime;
            itemDate = new Date(timestamp);
            console.log(itemDate)

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
    RTDataUpdate(){
      this.RTData.humidity = this.RTData.humidity + 1
      
    }
    

  },
  mounted(){
      this.myChart();
     // this.myGauge();
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
.right {
    height: 200px;
    background: #ffffff;
    border-radius: 55px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
</style>
