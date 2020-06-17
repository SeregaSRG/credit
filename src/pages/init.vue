<template>
    <f7-page name="init" class="init">
        <div class="header-title">
            ПОЛЬЗОВАТЕЛЬСКОЕ<br>СОГЛАШЕНИЕ
        </div>
        <div class="text__wrapper">
            Приложение создано для подбора
            онлайн кредитов, займов и карт.
            Используя приложение "Займы и Кредиты" вы подтверждаете, что принимаете и ознакомлены с
            <br>
            <span class="link" @click="toPolicy">Политикой конфиденциальности</span>
        </div>
        <div class="buttons__wrapper">
            <div class="checkbox__wrapper">
                <div class="checkbox__button"></div>
                <div class="checkbox__label">Я принимаю пользовательское соглашение</div>
            </div>
            <div class="button"
                @click="accept"
            >
                ПРИНЯТЬ
            </div>
        </div>
    </f7-page>
</template>

<script>
export default {
  name: 'init',
  methods: {
    accept () {
      this.$f7router.navigate('/login', {
        clearPreviousHistory: true
      })
    },
    toPolicy () {
      this.$f7router.navigate('/policy', )
    }
  }
}
</script>

<style scoped lang="scss">

    .init {
        background-image: url("../assets/bg.png");
        background-position: center center;
        background-size: cover;
    }

    .text__wrapper {
        height: 60%;
        width: 100%;
        padding: 0 25px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;


        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #FCFCFC;

        .link {
            color: #11CDEF;
            text-decoration: underline;
            overflow: hidden;
        }
    }

    .buttons__wrapper {
        height: 40%;
        width: 100%;
        padding: 25px;
    }

    .checkbox__wrapper {
        width: 276px;
        height: 88px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;

        .checkbox__button {
            width: 26px;
            height: 26px;
            background-color: #5663FE;
            flex-shrink: 0;
            border-radius: 4px;
        }

        .checkbox__label {
            margin-left: 7px;

            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;

            color: #FFFFFF;
        }
    }
</style>
