export default {
  name: 'CScorePanel',
  props: {
    price: {
      type: Number,
      default: null,
    },
  },
  computed: {
    formatPrice() {
      return (value) => String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    },
  },
}
