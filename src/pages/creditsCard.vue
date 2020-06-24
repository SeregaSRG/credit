<template>
    <div class="credits-card">
        <div class="row-element" @click.prevent="openDetails">
            <div class="image">
                <img :src="credit.screen">
            </div>
            <div class="more">
                Подробнее
            </div>
        </div>
        <div class="row-element">
            <div class="icons__wrapper">
            </div>
        </div>
        <div class="row-element">
            <div class="card__description">
                <p>{{ credit.percentPrefix }} {{ credit.percent }} {{ credit.percentPostfix }} </p>
                <p>{{ credit.summ }}</p>
                <p>{{ credit.term }}</p>
            </div>
            <div class="button button--mini"
                 @click="openOffer(credit.order)"
            >ОФОРМИТЬ</div>
        </div>
    </div>
</template>

<script>
import PageList from './workspace/pageList';
export default {
  name: 'creditsCard',
  components: { PageList },
  props: {
    credit: {
      type: Object,
      required: true
    }
  },
  methods: {
    openDetails () {
      this.$f7router.navigate('/card-details', {
        props: {
          card: this.credit
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .credits-card {
        height: 128px;
        width: 100%;
        // background-color: #5F6AF9;
        padding: 12px 22px;
        max-width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        &:nth-child(even) {
            background: rgba(226, 223, 223, 0.45);
        }
    }

    .row-element {
        height: 100%;
        display: flex;
        flex-direction: column;

        &:nth-child(1) {
            flex-shrink: 0;
        }

        &:nth-child(2) {
            width: 75px;
            flex-shrink: 0;
        }

        &:nth-child(3) {
            width: 100%;
            justify-content: space-between;
        }
    }

    .image {
        width: 125px;
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
