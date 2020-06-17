<template>
    <f7-page name="policy" class="policy">
        <div class="header-title">
            <div class="header-title__icon--right">
                <i class="icon f7-icons">info_circle</i>
            </div>
        </div>
        <div class="hands"></div>
        <div class="text">
            Персональные данные

            Персональные данные при посещении сайта передаются пользователем добровольно, к ним могут относиться: имя, фамилия, отчество, номера телефонов, адреса электронной почты, адреса для доставки товаров или оказания услуг, реквизиты компании, которую представляет пользователь, должность в компании, которую представляет пользователь, аккаунты в социальных сетях, а также — прочие, заполняемые поля форм.

            Эти данные собираются в целях оказания услуг или продажи товаров, возможности связи с пользователем или иной активности пользователя на сайте, а также, чтобы отправлять пользователю информацию, которую он согласился получать.

            Мы не проверяем достоверность оставляемых данных и не гарантируем качественного исполнения заказов, оказания услуг или обратной связи с нами при предоставлении некорректных сведений.

            Мы не проверяем достоверность оставляемых данных и не гарантируем качественного исполнения заказов, оказания услуг или ...
        </div>
        <div class="button"
             @click="accept"
        >
            ПРИНЯТЬ
        </div>
    </f7-page>
</template>

<script>
export default {
  name: 'policy',
  methods: {
    accept () {
      this.$f7router.navigate('/login', {
        clearPreviousHistory: true
      })
    },
  }
}
</script>

<style scoped lang="scss">
    .header-title {
        background: linear-gradient(90.27deg, #5663FF 17.33%, #4652E2 44.64%, #4652E2 74.6%);
    }

    .header-title {
        position: relative;
    }

    .hands {
        width: 102px;
        height: 70px;
        background-image: url("../assets/hands.png");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 24px auto 0 auto;
    }

    .text {
        width: calc(100% - 30px);
        margin: 0 auto 24px auto;
    }
</style>
