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
                            color: [[0.4, 'red'], [0.6, '#0AC267'], [1, '#FECB02']], // 0-40 red  40-60 green 60-100 yellow
                            opacity: 0.8
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        color: 'black',
                        distance: -10, // 刻度值与表盘的距离
                    },
                    axisTick: {
                        length: 5
                    },
                    detail: {formatter: '{value}%'},
                    data: [{value: 55, name: '正 常'}],
                    pointer: {
                        width: 5
                    },
                    title: {
                        // fontWeight: 'bold',
                        fontSize: '20'
                    },
                    
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