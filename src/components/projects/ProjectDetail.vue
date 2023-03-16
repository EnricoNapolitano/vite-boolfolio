<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'ProjectDetail',
    components: { ProjectCard },
    data() {
        return {
            project: null,
        }
    },
    methods: {
        getProject() {
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            });
        },
    },
    created() {
        this.getProject();
    }
};
</script>
<template>
    <project-card :project="project" :isDetail="true"></project-card>
</template>