<template>
    <div class="loan">
        <div class="loan__header">
            <div class="loan__header-title">Займы</div>
        </div>
        <div class="loan__scroll-area">
            <loan-card
                v-for="loan in loans"
                :key="loan.itemId"
                :loan="loan"
            ></loan-card>
        </div>
    </div>
</template>

<script>
import loanCard from './loanCard'
export default {
  name: 'loan',
  components: {
    loanCard: loanCard
  },
  computed: {
    loans () {
      return this.$store.state.server.data.loans.filter((e) => e.isActive === '1')
    }
  }
}
</script>

<style scoped lang="scss">
    .loan {
        height: 100%;
        width: 100%;
        background-color: #F4F2F2;
        position: relative;

        &__header {
            width: 100%;
            height: 115px;
            background-image: url("../assets/header-wave.svg");
            background-repeat: repeat-x;
            background-size: contain;
            background-position: top center;
            position: absolute;
            top: 0;
            left: 0;

            &-title {
                position: absolute;
                top: 34px;
                left: 20px;

                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 30px;
                line-height: 19px;
                /* identical to box height, or 63% */

                text-align: center;
                letter-spacing: 0.31px;

                color: #5663FF;
            }
        }

        &__scroll-area {
            height: 100%;
            width: 100%;
            padding: 160px 20px 20px;
            overflow: scroll;
        }
    }
</style>
