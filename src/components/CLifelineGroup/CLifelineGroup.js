export default {
  name: 'CLifelineGroup',
  components: {
    CIcon: () => import('@/components/CIcon/CIcon.vue'),
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
