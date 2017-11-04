<template>
  <div class="follow">
    <md-spinner md-indeterminate v-if="followers.length == 0"></md-spinner>
    <div class="phone-viewport">
      <md-list class="custom-list md-triple-line">
        <md-list-item v-for="(user, index) in followers" :key="index">
          <md-avatar>
            <img :src="user.avatar_url">
          </md-avatar>

          <div class="md-list-text-container">
            <span>{{user.login? user.login : user.name}}</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">arrow forward</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Follower',
  data () {
    return {
      error: null,
      followers: []
    }
  },

  created () {
    var vm = this
    let login = vm.$route.params.login
    vm.$http.get(`https://api.github.com/users/${login}/followers`)
    .then(response => {
      vm.followers = response.body
    }, error => {
      console.log(error)
    })
  }
}
</script>

<style>
.md-spinner {
    /* display: inline-block; */
    /* position: relative; */
    pointer-events: none;
    will-change: transform, opacity;
    margin: 0px auto;
    width: 100px;
}
</style>
