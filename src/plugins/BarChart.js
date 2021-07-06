import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: () => {},
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  watch: {
    chartOptions() {
      this.renderChart(this.chartData, this.chartOptions)
    },
  },
}
