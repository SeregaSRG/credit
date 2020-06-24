// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.scss';

// Import App Component
import App from '../components/app.vue';

import store from '../store'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,

  // Register App Component
  components: {
    app: App
  },
});

Vue.mixin({
  methods: {
    toInfo () {
      this.$f7router.navigate('/information', )
    },
    openOffer (link) {
      cordova.InAppBrowser.open(link + '?aff_sub1=848175e3-58be-4661-b8b2-7c804c5f841c&aff_sub2=Cj0KCQjw1Iv0BRDaARIsAGTWD1vUgKkFgJZzGaPOW6zsStPNo16Tj7ICKisCfF_2K1TwghuXCTEsMY0aAtmXEALw_wcB&aff_sub3=””&aff_sub4=82ccfa09eb74ba9d&aff_sub5=bf8612c5-c358-4c67-bcd6-fe872ed7d70b', '_system', 'location=yes');
    }
  }
})
