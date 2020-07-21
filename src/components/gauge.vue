<template>
        <div id="gauge" class="guage" style="height: 200px; width: 17.5vw">
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
                    min: 0,
                    max: 100,
                    radius: '100%',
                    axisLine: {
                        lineStyle: {
                            width: 15, // 修改宽度
                            // 0-40 red  40-60 green 60-100 yellow
                        }
                    },
                    axisLabel: {
                        distance: -10 // 刻度值与表盘的距离
                    },
                    detail: {formatter: '{value}%'},
                    data: [{value: 55, name: '正常'}]
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