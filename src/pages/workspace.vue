<template>
    <f7-page name="workspace" class="workspace">
        <page-list
                :current-page="page"
        ></page-list>
        <tab-bar
                :current-page.sync="page"
        ></tab-bar>
    </f7-page>
</template>

<script>
import pageList from './workspace/pageList'
import tabBar from './workspace/tabBar'

export default {
  name: 'workspace',
  components: {
    pageList: pageList,
    tabBar: tabBar
  },
  data () {
    return {
      page: 0
    }
  },
  computed: {
    config () {
      return this.$store.getters['server/data'].app_config
    }
  },
  created () {
    if (this.config.loans_item === '1') {
      this.page = 0
    } else
    if (this.config.cards_credit_item === '1') {
      this.page = 1
    } else
    if (this.config.credits_item === '1') {
      this.page = 2
    }
  }
}
</script>

<style scoped lang="scss">

</style>
