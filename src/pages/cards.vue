<template>
    <div class="cards">
        <div class="cards__header">
            <span>Кредитные карты</span>
            <div class="cards__header__icon--right" @click="toInfo">
                <i class="icon f7-icons">info_circle</i>
            </div>
        </div>
        <div class="header-background"></div>
        <div class="content__wrapper">
            <div class="content__substrate">
                <cards-card
                    v-for="card in cards"
                    :key="card.id"
                    :card="card"
                ></cards-card>
            </div>
        </div>
    </div>
</template>

<script>
import cardsCard from './cardsCard';
export default {
  name: 'cards',
  components: {
    cardsCard
  },
  computed: {
    cards () {
      return this.$store.state.server.data.cards_credit.filter((e) => e.isActive === '1')
    }
  }
}
</script>

<style scoped lang="scss">
    .cards {
        height: 100%;
        width: 100%;
        background-color: white;
        position: relative;
    }

    .header-background {
        width: 100%;
        height: 258px;
        background: linear-gradient(268.55deg, #4753E2 26.21%, #5663FF 114.1%);
    }

    .cards__header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        // background: rgba(4, 40, 98, 0.2);
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 19px;
        /* identical to box height, or 79% */
        letter-spacing: 0.31px;

        color: #FFFFFF;

        padding-left: 24px;

        &__icon {
            &--right {
                position: absolute;
                right: calc(18px);
                top: calc(30px - 14px);
            }
        }
    }

    .content__wrapper {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: scroll;
        pointer-events: none;
    }

    .content__substrate {
        position: relative;
        background-color: white;
        border-radius: 12px 12px 0 0;
        margin-top: 160px;
        width: 100%;
        height: auto;
        padding: 0 12px 100px 12px;
        pointer-events: none;
    }
</style>
