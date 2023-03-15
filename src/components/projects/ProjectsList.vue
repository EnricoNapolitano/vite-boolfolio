<script>
import ProjectCard from './ProjctCard.vue';
export default {
    name: 'ProjectsList',
    props: { projects: Array },
    components: { ProjectCard }
}
</script>

<template>
    <div v-for="project in projects" :key="project.id" class="container">
        <project-card :project="project"></project-card>
    </div>
</template>