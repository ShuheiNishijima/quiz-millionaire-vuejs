import CIcon from '@/components/CIcon/CIcon.vue'

export default {
  name: 'CLifelineGroup',
  components: {
    CIcon,
  },
  props: {
    fiftyfifty: {
      type: Boolean,
      default: true,
    },
    audience: {
      type: Boolean,
      default: true,
    },
    telephone: {
      type: Boolean,
      default: true,
    },
  },
}
