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
        responsive: true,
        legend: {
          display: false,
        },
        // tooltips: {
        //   enabled: false,
        // },
        scaleStartValue: 0,
        scales: {
          yAxes: [
            {
              grid: {
                color: ['#ffffff'],
                gridColor: ['#ffffff'],
                borderColor: ['#ffffff'],
              },
              ticks: {
                color: '#f87979',
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
