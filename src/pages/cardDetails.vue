<template>
    <f7-page name="cardDetails" class="loanDetails">
        <div class="header-background">
        </div>
        <div class="content__wrapper">
            <div class="content__substrate">
                <div class="banner">
                    <img :src="card.screen" alt="">
                </div>
                <div class="content__substrate-line"></div>
                <div v-html="card.description"></div>
                <div class="icons__wrapper">
                    <div class="icon icon-mc"
                        v-if="card.mastercard === '1'"
                    >
                    </div>
                    <div class="icon icon-visa"
                         v-if="card.visa === '1'"
                    >
                    </div>
                    <div class="icon icon-mir"
                         v-if="card.mir === '1'"
                    >
                    </div>
                    <div class="icon icon-qiwi"
                         v-if="card.qiwi === '1'"
                    >
                    </div>
                    <div class="icon icon-yandex"
                         v-if="card.yandex === '1'"
                    >
                    </div>
                    <div class="icon icon-cash"
                         v-if="card.cash === '1'"
                    >
                    </div>
                </div>
                <div class="button"
                     @click="openOffer(card.order, card)"
                >
                    {{ card.orderButtonText ? card.orderButtonText : 'Оформить' }}
                </div>
            </div>
        </div>
        <div class="header-title">
            <div class="header-title__icon--right" @click.prevent="toInfo">
                <i class="icon f7-icons">info_circle</i>
            </div>
        </div>
    </f7-page>
</template>

<script>
export default {
  name: 'cardDetails',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
    .header-title {
        background: rgba(20, 18, 100, 0.4);
    }
    .header-background {
        background-image: url("../assets/loan_bg.png");
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 258px;
    }
    .content__wrapper {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: scroll;
    }

    .content__substrate {
        position: relative;
        background-color: white;
        border-radius: 12px 12px 0 0;
        width: 100%;
        max-width: 370px;
        margin: 160px auto 0 auto;
        height: auto;
        padding: 130px 35px 45px 35px;

        &-line {
            width: 300px;
            height: 1px;
            background-color: #CECECE;
            margin-bottom: 50px;
        }
    }

    .banner {
        width: 320px;
        height: 140px;
        position: absolute;
        left: calc(50% - 160px);
        top: -64px;
        display: flex;
        overflow: hidden;

        img {
            position: absolute;
            top: -30px;
            width: 100%;
            object-fit: contain;
        }
    }

    .icons__wrapper {
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }
    .icon {
        width: 55px;
        height: 34px;
    }

    .icon-mc {
        background-image: url("../assets/platforms/mc.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-visa {
        width: 50px;
        background-image: url("../assets/platforms/visa.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-mir {
        width: 50px;
        background-image: url("../assets/platforms/mir.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-qiwi {
        background-image: url("../assets/platforms/qiwi.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-yandex {
        width: 50px;
        background-image: url("../assets/platforms/yandex.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-cash {
        background-image: url("../assets/platforms/cash.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>
