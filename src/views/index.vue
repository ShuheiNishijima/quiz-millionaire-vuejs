<template>
  <div class="index-main">
    <ul class="choices-list">
      <li v-for="(item, index) in items[0].choices" :key="index" class="choices-list__item">
        <c-button>{{ item }}</c-button>
      </li>
    </ul>
  </div>
</template>

<script>
import CButton from '@/components/CButton/CButton.vue'

export default {
  name: 'Index',
  components: {
    CButton,
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
</script>
