<!-- <template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

axios.get('http://localhost:8000/api/projects')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->


<template>
  <div>
    <h1>Projects</h1>
    <div class="project-list">
      <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },
  created() {
    axios.get('http://localhost:8000/api/projects')
      .then(response => {
        this.projects = response.data
        console.log(this.projects)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
