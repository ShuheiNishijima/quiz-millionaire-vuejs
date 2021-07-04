import BarChart from '@/plugins/BarChart.js'

export default {
  name: 'CChart',
  components: {
    BarChart,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    options() {
      return {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          xAxes: [
            {
              barPercentage: 0.5,
              gridLines: {
                color: '#FFF',
              },
              ticks: {
                fontSize: 16,
                fontColor: '#FFF',
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: '#FFF',
              },
              ticks: {
                padding: 10,
                autoSkip: false,
                fontSize: 16,
                fontColor: '#FFF',
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 10,
              },
            },
          ],
        },
      }
    },
  },
}
