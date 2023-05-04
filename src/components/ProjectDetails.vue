<template>
    <div class="project-details">
        <template v-if="project">
            <h1>{{ project.titolo }}</h1>
            <p>{{ project.descrizione }}</p>
        </template>
        <template v-else>
            <p>Caricamento in corso...</p>
        </template>
    </div>
</template>

  
<script>
import axios from 'axios';

export default {
    name: 'ProjectDetails',
    data() {
        return {
            project: null
        }
    },
    mounted() {
        const projectId = this.$route.params.id;
        axios.get(`http://localhost:8000/api/projects/${projectId}`)
            .then(response => {
                this.project = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>
  