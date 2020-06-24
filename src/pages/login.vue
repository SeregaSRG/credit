<template>
    <f7-page name="login" class="login">
        <div class="header-title">
            ВХОД
        </div>
        <div class="inputs__wrapper">
            <input type="text" class="input" placeholder="Номер телефона">
            <input type="text" class="input" placeholder="Код подтверждения">
        </div>
        <div class="buttons__wrapper">
            <div class="button--light">ПОЛУЧИТЬ КОД</div>
            <div class="button"
                 @click="send"
            >
                ОТПРАВИТЬ
            </div>
            <div class="customer">
                <div class="customer__text">Стать клиентом</div>
                <div class="customer__arrow"></div>
            </div>
        </div>
    </f7-page>
</template>

<script>
export default {
  name: 'login',
  methods: {
    send () {
      console.log('send')
      this.$f7router.navigate('/workspace', {
        clearPreviousHistory: true
      })
    }
  },
  created () {
  },
  beforeCreate () {
    const hide_order_offer = this.$store.state.server.data.hasOwnProperty('app_config') ? this.$store.state.server.data.app_config.hide_order_offer : null
    if (hide_order_offer === '1') {
      this.$f7router.navigate('/workspace', {
        clearPreviousHistory: true
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .login {
        background-image: url("../assets/login-bg.png");
        background-position: center center;
        background-size: cover;

        * {
            flex-shrink: 0;
        }
    }

    .inputs__wrapper {
        height: 45%;
        min-height: 220px;
        width: 100%;
        padding-top: 100px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        .input {
            width: 300px;
            height: 43px;

            background: rgba(196, 196, 196, 0.53);

            margin-top: 46px;
            padding-left: 16px;

            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.31px;
            color: white;

            // TODO глобально очистить стили инпута

            &::placeholder {
                color: white;
            }
        }
    }

    .buttons__wrapper {
        height: 55%;
        width: 100%;

        min-height: 300px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .button--light {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 19px;

            color: white;

            text-align: center;
            letter-spacing: 0.31px;

            margin: 40px auto;
        }
    }

    .customer {
        width: 100%;
        height: 45px;
        border-top: 1px solid white;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        &__text {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            /* identical to box height, or 136% */

            text-align: center;
            letter-spacing: 0.31px;

            color: #FFFFFF;

            margin: 0 10px;
        }

        &__arrow {
            width: 84px;
            height: 100%;
            background-image: url("../assets/arrow.png");
            background-position: center center;
            background-size: contain;
            background-repeat: no-repeat;
            margin: 0 10px;
        }
    }
</style>
