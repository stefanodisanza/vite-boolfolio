<template>
    <div class="portfolio">
        <h1>Portfolio</h1>
        <div class="projects">
            <router-link v-for="project in projects" :key="project.id"
                :to="{ name: 'ProjectDetails', params: { id: project.id } }">
                <project-card :project="project" />
            </router-link>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'Portfolio',
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
        };
    },
    mounted() {
        axios
            .get('http://localhost:8000/api/projects')
            .then((response) => {
                this.projects = response.data;
                console.log(this.projects);
            })
            .catch((error) => {
                console.log(error);
            });
    }

};
</script>
