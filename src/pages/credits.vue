<template>
    <div class="credits">
        <div class="credits__header">
            <span>Кредиты наличными</span>
            <div class="credits__header__icon--right" @click="toInfo">
                <i class="icon f7-icons">info_circle</i>
            </div>
        </div>
        <div class="header-background"></div>
        <div class="content__wrapper">
            <div class="content__substrate">
                <credits-card
                    v-for="credit in credits"
                    :key="credit.itemId"
                    :credit="credit"
                ></credits-card>
            </div>
        </div>
    </div>
</template>

<script>
import creditsCard from './creditsCard';
export default {
  name: 'credits',
  components: {
    creditsCard
  },
  computed: {
    credits () {
      return this.$store.state.server.data.credits.filter((e) => e.isActive === '1' && e.id !== '100')
    }
  }
}
</script>

<style scoped lang="scss">
    .credits {
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

    .credits__header {
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
        pointer-events: none;
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
        margin-top: 160px;
        width: 100%;
        height: auto;
        padding: 0 0 100px 0;
        pointer-events: none;
    }

    .credits__header__icon--right {
        @media screen and (max-width: 350px) {
            display: none;
        }
    }
</style>
