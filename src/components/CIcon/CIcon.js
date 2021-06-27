import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

export default {
  name: 'CIcon',
  props: {
    className: {
      type: String,
      default: '',
      required: true,
    },
  },
}
