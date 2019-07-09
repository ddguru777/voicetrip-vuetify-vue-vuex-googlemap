<template>
  <div id="app">
    <router-view/>

    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="blue"
        flat
        value="explore"
      >
        <span>Explore</span>
        <v-icon class="material-icons-outlined">room</v-icon>
      </v-btn>

      <v-btn
        color="blue"
        flat
        value="commute"
      >
        <span>Commute</span>
        <v-icon class="material-icons-outlined">commute</v-icon>
      </v-btn>

      <v-btn
        color="blue"
        flat
        value="for_you"
      >
        <span>For you</span>
        <v-icon class="material-icons-outlined">inbox</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      bottomNav: 'explore'
    }
  },
  mounted () {
    this.$router.push(`/explore`)
  },
  watch: {
    bottomNav: function (val) {
      this.$router.push(`/${val}`)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
