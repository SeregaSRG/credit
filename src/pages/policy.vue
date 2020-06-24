<template>
    <f7-page name="policy" class="policy">
        <div class="header-title">
            <div class="header-title__icon--right" @click="toInfo">
                <i class="icon f7-icons">info_circle</i>
            </div>
        </div>
        <div class="hands"></div>
        <div class="text"
            v-html="policy"
        >
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
      this.$store.commit('server/ACCEPT_POLICY')
      this.$f7router.navigate('/login', {
        clearPreviousHistory: true
      })
    }
  },
  computed: {
    policy () {
      return this.$store.state.server.data.init_license_term
    }
  }
}
</script>

<style scoped lang="scss">
    .button {
        margin-bottom: 20px;
    }

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
