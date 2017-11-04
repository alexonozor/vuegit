<template>
  <div class="following">
   <md-spinner md-indeterminate v-if="following.length == 0"></md-spinner>
  <div class="phone-viewport">
    <md-list class="custom-list md-triple-line">
      <md-list-item v-for="(user, index) in following" :key="index" v-on:click="openProfile(user.login)">
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
  name: 'Following',
  data () {
    return {
      error: null,
      following: []
    }
  },

  created () {
    var vm = this
    let login = vm.$route.params.login
    vm.$http.get(`https://api.github.com/users/${login}/following`)
    .then(response => {
      vm.following = response.body
    }, error => {
      console.log(error)
    })
  },

  methods: {
    openProfile: function (user) {
      var vm = this
      vm.$router.push({path: '/profile/' + user})
    }
  }
}
</script>