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
  },
}
