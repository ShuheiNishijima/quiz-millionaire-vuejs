import CButton from '@/components/CButton/CButton.vue'
import CChart from '@/components/CChart/CChart.vue'
import CChoices from '@/components/CChoices/CChoices.vue'
import CCutin from '@/components/CCutin/CCutin.vue'
import CDialog from '@/components/CDialog/CDialog.vue'
import CLifelineGroup from '@/components/CLifelineGroup/CLifelineGroup.vue'
import CLogo from '@/components/CLogo/CLogo.vue'
import CQuestion from '@/components/CQuestion/CQuestion.vue'
import CScorePanel from '@/components/CScorePanel/CScorePanel.vue'
import CStartButton from '@/components/CStartButton/CStartButton.vue'

export default {
  name: 'Index',
  components: {
    CButton,
    CChart,
    CChoices,
    CCutin,
    CDialog,
    CLifelineGroup,
    CLogo,
    CQuestion,
    CScorePanel,
    CStartButton,
  },
  data() {
    return {
      items: [],
      playing: false,
      count: 0,
      correct_count: 0,
      selected: null,
      disabled_choices: [],
      cutin: false,
      check_dialog: false,
      correct_dialog: false,
      miss_dialog: false,
      finish_dialog: false,
      result_dialog: false,
      fiftyfifty_dialog: false,
      audience_dialog: false,
      chart_dialog: false,
      lifeline: {
        fiftyfifty: true,
        audience: true,
        telephone: false,
      },
      price: [
        0, 10_000, 20_000, 30_000, 50_000, 100_000, 150_000, 250_000, 500_000, 750_000, 1_000_000,
        1_500_000, 2_500_000, 5_000_000, 7_500_000, 10_000_000,
      ],
    }
  },
  computed: {
    formatPrice() {
      return (value) => String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    },
    chartData() {
      const item = this.items[this.count].lifeline.audience
      return {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
          {
            barPercentage: 0.5,
            backgroundColor: '#D500F9',
            data: [item[0], item[1], item[2], item[3]],
          },
        ],
      }
    },
  },
  methods: {
    async startGame() {
      const REQUEST_URL = '/json/quiz.json'
      const response = await this.axios(REQUEST_URL)
      this.items = response.data.quiz[0].items
      this.playing = true
    },
    selectChoice(index) {
      this.selected = index
      this.check_dialog = true
    },
    rejectChoice() {
      this.selected = null
      this.check_dialog = false
    },
    checkAnswer() {
      if (this.selected === this.items[this.count].answer) this.correct()
      else this.miss()
    },
    correct() {
      this.check_dialog = false
      this.cutin = true
      this.correct_count++
      setTimeout(() => {
        this.cutin = false
        if (this.items.length === this.correct_count) this.finish_dialog = true
        else this.correct_dialog = true
      }, 3000)
    },
    miss() {
      this.check_dialog = false
      this.cutin = true
      setTimeout(() => {
        this.cutin = false
        this.miss_dialog = true
      }, 3000)
    },
    nextQuestion() {
      this.correct_dialog = false
      this.selected = null
      this.disabled_choices = []
      setTimeout(() => {
        this.count++
      }, 300)
    },
    result() {
      this.correct_dialog = false
      this.miss_dialog = false
      this.finish_dialog = false
      this.result_dialog = true
    },
    reset() {
      this.items = []
      this.playing = false
      this.count = 0
      this.correct_count = 0
      this.selected = null
      this.disabled_choices = []
      this.miss_dialog = false
      this.finish_dialog = false
      this.result_dialog = false
      this.lifeline.fiftyfifty = true
      this.lifeline.audience = true
    },
    fiftyfifty() {
      this.fiftyfifty_dialog = false
      this.lifeline.fiftyfifty = false
      this.disabled_choices = this.items[this.count].lifeline.fiftyfifty
    },
    audience() {
      this.audience_dialog = false
      this.lifeline.audience = false
      this.chart_dialog = true
    },
  },
}
