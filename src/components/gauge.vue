<template>
    <div id="gauge" class="guage" style="height: 200px">
</div>
</template>

<script src="/js/echarts.min.js"></script>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    myGauge(){
        /* 仪表盘 */
        var gauge = echarts.init(document.getElementById('gauge'));
        let gaugeOption = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    min: 10,
                    max: 90,
                    radius: '100%',
                    axisLine: {
                        lineStyle: {
                            width: 15 // 修改宽度
                        }
                    },
                    axisLabel: {
                        distance: -10 // 刻度值与表盘的距离
                    },
                    detail: {formatter: '{value}%'},
                    data: [{value: 5, name: '低压'}]
                }
            ]
        };

        gauge.setOption(gaugeOption);
      }
  },
  mounted(){
    this.myGauge()
  }
}
</script>

<style scoped>
</style>