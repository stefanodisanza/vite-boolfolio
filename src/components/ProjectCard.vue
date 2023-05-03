<template>
    <div class="project-card">
        <h2>{{ project.titolo }}</h2>
        <p>{{ project.descrizione }}</p>
        <p><strong>Tecnologie:</strong> {{ project.tecnologie }}</p>
        <a :href="project.url" target="_blank">mostra progetto</a>
    </div>
</template>
  
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
  