<template>
    <a-card :style="{ background: 'fff' }" title="历史数据">
        <div id="main" style=" height: 250px; width: 80vw; margin-top:-30px"></div>
    </a-card>
</template>

<script src="/js/echarts.min.js"></script>

<script>
export default {
  props:{
      RTData: Object,
      tempData: Array
  },
  data () {
    return {
    }
  },
  methods:{
    historyChart(){
        console.log("history ")
        console.log("end")
        var myChart = echarts.init(document.getElementById('main'));

        var defaultData=[]
        var oneDay = 24 * 3600 * 1000;
        var now = new Date() - 1*oneDay;
        var oneMin = 60 *1000
        var oneHour = 3600*1000
        var value = 0;
        for(let i=0; i < 1200; i++){
            defaultData.push(randomData())
        }
        function randomData() {
            now = new Date(+now + oneMin);
            var h=now.getHours();
            var mm=now.getMinutes();
            h=h>9?h:"0"+h;
            mm=mm>9?mm:"0"+mm;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate(),].join('/')+ ' '+h + ':'+ mm,
                    value

                ]
            };
        } 
        // 指定图表的配置项和数据
        var option = {
            // title: {
            //     text: ''
            // },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },            
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: true
                }
            },            
            series: [{
                type: 'line',
                showSymbol:false,
                // smooth: true,
                //data: defaultData,
                data: this.tempData,
                color:  '#66ccff'
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  },
  watch: {
            tempData(newVal,oldVal){
                this.tempData = newVal;  //newVal即是chartData
                console.log("watch")
                this.historyChart()
            }
  },
  mounted(){
      this.historyChart()
  }
}
</script>

<style scoped>
</style>