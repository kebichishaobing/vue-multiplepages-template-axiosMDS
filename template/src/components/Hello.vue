<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <br>
    <br>
    <b>Axios:</b><span>{{ remoteMessage}}</span>
    <br>
    <b>MDS</b>(morningstar-design-system):
    <svg class="mds-icon mds-doc-icon-swatch__icon mds-icon-search" aria-labelledby="title">
        <title>search-padless</title>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="mdsIcon('search-padless')"></use>
    </svg>
  </div>
</template>

<script>
import {getAxiosPicture} from '../api/hello'

export default {
  name: 'hello',
  props: ['msg'],
  data () {
    return {
      message: this.msg || 'Welcome to Your Vue.js App',
      remoteMessage: ''
    }
  },
  created () {
    getAxiosPicture().then(dataObj => {
      this.remoteMessage = dataObj.text
      console.log(this.remoteMessage)
    })
  }
}
</script>

<style lang="sass">
@import '../style/common.scss';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
