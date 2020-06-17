<template>
    <div class="tab-bar">
        <div class="buttons__wrapper">
            <div class="tab-bar__button loan-button" @click="index=0">
            </div>
            <div class="tab-bar__button card-button" @click="index=1">
            </div>
            <div class="tab-bar__button credit-button" @click="index=2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tabBar',
  props: {
    currentPage: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      index: null
    }
  },
  mounted () {
    this.index = this.currentPage
  },
  watch: {
    index (n) {
      this.$emit('update:currentPage', n)
    }
  }
}
</script>

<style scoped lang="scss">
    .tab-bar {
        width: 100%;
        height: 78px;
        background-color: #5663FF;
        position: relative;

        &:after {
            content: '';
            width: 100%;
            height: 13px;
            position: absolute;
            top: -12px;
            left: 0;
            border-radius: 12px 12px 0 0;
            background-color: #5663FF;
        }
    }

    .buttons__wrapper {
        width: 240px;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding-bottom: 10px;

        .tab-bar__button {
            width: 48px;
            height: 48px;

            background-position: center center;
            background-size: contain;
            background-repeat: no-repeat;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .loan-button {
            background-image: url("../../assets/loan-button.svg");
        }

        .card-button {
            background-image: url("../../assets/card-button.svg");
        }

        .credit-button {
            background-image: url("../../assets/credit-button.svg");
        }
    }
</style>
