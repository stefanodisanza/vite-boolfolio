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
    axios.get('/api/projects')
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
