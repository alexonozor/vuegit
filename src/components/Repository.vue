<template>
  <div class="repo">
    <md-spinner md-indeterminate v-if="repos.length == 0"></md-spinner>
     <div class="phone-viewport">
        <md-list class="custom-list md-triple-line">
         
          <md-list-item v-for="(repo, index) in repos" :key="index">
            <md-avatar>
              <img :src="repo.owner.avatar_url">
            </md-avatar>

            <div class="md-list-text-container">
              <span class="header1">{{repo.name}}</span>
              <span>{{repo.language}}</span>
              <p>{{repo.description}}</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <p>{{repo.stargazers_count}} </p>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>
        </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  data () {
    return {
      error: null,
      repos: []
    }
  },

  created () {
    var vm = this
    let login = vm.$route.params.login
    vm.$http.get(`https://api.github.com/users/${login}/repos`)
    .then(response => {
      vm.repos = response.body
    }, error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.header {
  font-size: 20px;
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
