<template>
    <div class="page-list">
        <transition name="fade" mode="out-in">
            <loan v-if="currentPage === 0" key="0"></loan>
            <cards v-if="currentPage === 1" key="1"></cards>
            <credits v-if="currentPage === 2" key="2"></credits>
        </transition>
    </div>
</template>

<script>
import loan from '../loan'
import cards from '../cards'
import credits from '../credits'

export default {
  name: 'pageList',
  components: {
    loan: loan,
    cards: cards,
    credits: credits
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
        position: relative;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
        position: absolute;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>
