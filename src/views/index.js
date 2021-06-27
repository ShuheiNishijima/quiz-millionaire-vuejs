import CButton from '@/components/CButton/CButton.vue'
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
      selected: null,
      cutin: false,
      check_dialog: false,
      correct_dialog: false,
      miss_dialog: false,
      result_dialog: false,
      price: [
        10_000, 20_000, 30_000, 50_000, 100_000, 150_000, 250_000, 500_000, 750_000, 1_000_000,
        1_500_000, 2_500_000, 5_000_000, 7_500_000, 10_000_000,
      ],
    }
  },
  computed: {
    formatPrice() {
      return (value) => (value >= 0 ? String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') : 0)
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
      setTimeout(() => {
        this.cutin = false
        this.correct_dialog = true
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
      setTimeout(() => {
        this.count++
      }, 300)
    },
    result() {
      this.correct_dialog = false
      this.miss_dialog = false
      this.result_dialog = true
    },
    reset() {
      this.items = []
      this.playing = false
      this.count = 0
      this.selected = null
      this.correct_dialog = false
      this.miss_dialog = false
      this.result_dialog = false
    },
  },
}
