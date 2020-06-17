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
  }
}
</script>

<style scoped lang="scss">

</style>
