import CButton from '@/components/CButton/CButton.vue'

export default {
  name: 'CChoices',
  components: {
    CButton,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    activeIndex: {
      type: Number,
      default: null,
    },
    disabledIndex: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    alphabet() {
      return ['A', 'B', 'C', 'D']
    },
  },
}
