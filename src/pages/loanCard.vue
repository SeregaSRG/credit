<template>
    <div class="loan-card"
        @click.prevent="openDetails"
    >
        <div class="loan-card__details">
            <span>Подробнее</span>
        </div>
        <div class="loan-card__image">
            <img :src="loan.screen">
        </div>
        <div class="loan-card__text">
            {{ loan.percentPrefix }} {{ loan.percent }} {{ loan.percentPostfix }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'loanCard',
  props: {
    loan: {
      type: Object,
      required: true
    }
  },
  methods: {
    openDetails () {
      this.$f7router.navigate('/loan-details', {
        props: {
          loan: this.loan
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .loan-card {
        width: 100%;
        max-width: 340px;
        height: 92px;
        margin: 27px auto 0 auto;
        border-radius: 8px;
        background: linear-gradient(89.75deg, #5663FF 18.21%, #4753E3 85.73%);
        padding: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;

        &:first-child {
            margin: 0 auto;
        }

        &:nth-child(even) {
            background: #ACA9C4;

            .loan-card__details {
                background-image: url("../assets/loan-grey.svg");
            }
        }

        &__image {
            width: 100px;
            height: 100%;
            margin-right: 14px;

            img {
                object-fit: contain;
                width: 100%;
                height: 100%;
            }
        }

        &__text {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            z-index: 1;
            /* or 171% */


            color: #FFFFFF;
        }

        &__details {
            width: 97px;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background-image: url("../assets/loan-blue.svg");
            z-index: 0;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            span {
                padding-left: 10px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 24px;
                /* or 200% */

                color: #FFFFFF;
                margin: auto;

                @media screen and (max-width: 380px) {
                    display: none;
                }
            }
        }
    }
</style>
