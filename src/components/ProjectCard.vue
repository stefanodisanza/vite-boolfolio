<template>
    <div class="project-card">
        <h2>{{ project.titolo }}</h2>
        <h4>{{ project.cliente }}</h4>
        <p>{{ project.descrizione }}</p>
        <p>{{ project.url }}</p>
    </div>
</template>
<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>