<script>
import axios from 'axios';
const apiBaseUrl = 'http://localhost:8000/api/';
import ProjectsList from '../components/projects/ProjectsList.vue';
export default {
    name: "HomePage",
    components: { ProjectsList },
    data() { return { projects: [], } },
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>
<template>
    <projects-list :projects="projects"></projects-list>
</template>
<style></style>