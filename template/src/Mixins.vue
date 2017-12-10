<script>
export default {
  methods: {
    namespaceClass (cls) {
      let classes = []
      let nsClasses = []
      if (typeof cls === 'string') {
        classes.push(cls)
      } else if (cls.length > 0) {
        classes = classes.concat(cls)
      }
      classes.forEach(function (c) {
        nsClasses.push('morningstar-components-' + c)
      })
      return nsClasses.join(' ')
    },
    mdsIcon (icon) {
      var path = '/static/mds/icons/mds_icons.svg#' + icon
      if (process.env.NODE_ENV === 'production') {
        path = '/vueMultiplePages' + path
      }
      return path
    }
  }
}
</script>
