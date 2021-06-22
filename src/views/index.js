import CChoices from '@/components/CChoices/CChoices.vue'
import CLogo from '@/components/CLogo/CLogo.vue'
import CQuestion from '@/components/CQuestion/CQuestion.vue'

export default {
  name: 'Index',
  components: {
    CChoices,
    CLogo,
    CQuestion,
  },
  data() {
    return {
      count: 0,
      items: [],
    }
  },
  created() {
    this.getApiData()
  },
  methods: {
    async getApiData() {
      const REQUEST_URL = '/json/quiz.json'
      const response = await this.axios(REQUEST_URL)
      this.items = response.data.quiz[0].items
    },
  },
}
