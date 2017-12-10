import _Vue from 'vue'
import mixins from '../Mixins'
_Vue.config.productionTip = false
_Vue.mixin(mixins)

export const Vue = _Vue
