<template>
    <div class="cards-card">
        <div class="row-element"
             @click.prevent="openDetails"
        >
            <div class="image">
                <img :src="card.screen">
            </div>
            <div class="more">
                Подробнее
            </div>
        </div>
        <div class="row-element">
            <div class="icons__wrapper">
                <div class="icon icon-mc"
                     v-if="card.mastercard === '1'"
                >
                </div>
                <div class="icon icon-mir"
                     v-if="card.mir === '1'"
                >
                </div>
                <div class="icon icon-visa"
                     v-if="card.visa === '1'"
                >
                </div>
            </div>
        </div>
        <div class="row-element">
            <div class="card__description">
                <p>{{ card.percentPrefix }} {{ card.percent }} {{ card.percentPostfix }} </p>
                <p>{{ card.summ }}</p>
                <p>{{ card.term }}</p>
            </div>
            <div class="button button--mini"
                @click="openOffer(card.order)"
            >ОФОРМИТЬ</div>
        </div>
    </div>
</template>

<script>
import PageList from './workspace/pageList';
export default {
  name: 'cardsCard',
  components: { PageList },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    openDetails () {
      this.$f7router.navigate('/card-details', {
        props: {
          card: this.card
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .cards-card {
        height: 128px;
        width: 100%;
        // background-color: #5F6AF9;
        padding: 12px;
        max-width: 320px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EDEDED;
        margin: 0 auto;
    }

    .row-element {
        height: 100%;
        display: flex;
        flex-direction: column;

        &:nth-child(1) {
            flex-shrink: 0;
        }

        &:nth-child(2) {
            width: 65px;
            flex-shrink: 0;
        }

        &:nth-child(3) {
            width: 100%;
            justify-content: space-between;
        }
    }

    .image {
        width: 115px;
        height: 70px;
        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .more {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        /* identical to box height, or 231% */

        text-decoration-line: underline;
        text-transform: capitalize;

        color: #4A56E7;

        margin-top: 10px;
    }


    .icons__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .icon {
        width: 32px;
        height: 22px;
    }

    .icon-mc {
        width: 40px;
        background-image: url("../assets/platforms/mc.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-visa {
        width: 32px;
        background-image: url("../assets/platforms/visa.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .icon-mir {
        width: 40px;
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
        width: 32px;
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

    .card__description {
        p {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            /* identical to box height, or 214% */
            color: #606060;
            margin: 0;
        }
    }
</style>
