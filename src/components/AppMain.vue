<script>
import ProjectsList from './projects/ProjectsList.vue';
export default {
    name: 'AppMain',
    props: { projects: Array },
    components: { ProjectsList }
}
</script>

<template>
    <projects-list :projects="projects"></projects-list>
</template>