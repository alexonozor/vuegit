<template>
  <div class="profile">
    <md-layout md-align="center" md-gutter="16">
        <md-layout md-flex="15">
          <div>
            <img :src="user.avatar_url" />
            <span class="md-display-1">{{ user.name }}</span>
            <p class="md-title"><md-icon class="md-primary">accessibility</md-icon> {{user.login}}</p>
            <span v-if="user.bio" class="md-title"><md-icon class="md-primary">info</md-icon> {{user.bio}}</span>
            <p  v-if="user.company" class="md-title"><md-icon class="md-primary">shop</md-icon>  {{user.company}}</p>
            <p  v-if="user.location" class="md-title"><md-icon class="md-primary">map</md-icon> {{user.location}}</p>
            <p  v-if="user.email" class="md-title">{{user.email}}</p>
            <p v-if="user.blog" class="md-title"><md-icon class="md-primary">link</md-icon> {{user.blog}}</p>
          </div>
          
        </md-layout>

        <md-layout md-flex="55">
          <md-tabs md-fixed @change="onChange($event)">
            <md-tab id="followers" md-label="Followers">
                <router-view></router-view>
            </md-tab>

            <md-tab id="following" md-label="Following">
               <router-view></router-view>
            </md-tab>

            <md-tab id="repositories" md-label="Repositories">
                <router-view></router-view>
            </md-tab>
          </md-tabs>
            
        </md-layout>
    </md-layout>
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      error: null,
      user: {}
    }
  },

  created () {
    var vm = this
    let login = vm.$route.params.login
    vm.$http.get(`https://api.github.com/users/${login}`)
    .then(response => {
      vm.user = response.body
    }, error => {
      console.log(error)
    })
  },

  methods: {
    onChange: function (index) {
      let path
      switch (index) {
        case 0:
          path = '/followers'
          break
        case 1:
          path = '/following'
          break
        case 2:
          path = '/repository'
          break
        default:
          path = ''
      }
      let vm = this
      vm.$router.push({path: '/profile/' + vm.$route.params.login + path})
    }
  }
}
</script>

<style scoped>
.profile {
  margin-top: 20px;
}

.md-spinner {
    /* display: inline-block; */
    /* position: relative; */
    pointer-events: none;
    will-change: transform, opacity;
    margin: 0px auto;
    width: 100px;
}
</style>
