<template>  
  <div class="hello">

<md-layout>
  <md-layout md-gutter  md-flex="20"  v-for="(user, index) in users" :key="index">
    <md-card>
  <router-link :to="{ name: 'profile', params: { login: user.login }}">
      <md-card-media>
        <img :src="user.avatar_url" />
      </md-card-media>
    </router-link>

      <md-card-header>
        <div class="md-title">{{user.login}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions>
          <md-button v-on:click="followers(user)">Followers</md-button>
          <md-button v-on:click="following(user)">Followings</md-button>
          <md-button v-on:click="repos(user)">Repos</md-button>
        </md-card-actions>
      </md-card-expand>
    </md-card>
  </md-layout>
</md-layout>


  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'All users',
      error: null,
      users: []
    }
  },

  created () {
    var vm = this
    vm.$http.get('https://api.github.com/users')
    .then(response => {
      vm.users = response.body
    }, error => {
      console.log(error)
    })
  }
}
</script>

