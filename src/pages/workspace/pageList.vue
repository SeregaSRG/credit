<template>
    <div class="page-list">
        <loan></loan>
    </div>
</template>

<script>
import loan from '../loan'

export default {
  name: 'pageList',
  components: {
    loan: loan
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
    .page-list {
        height: calc(100% - 78px);
    }
</style>
