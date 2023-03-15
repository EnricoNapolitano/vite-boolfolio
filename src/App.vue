<script >
import { createDOMCompilerError } from '@vue/compiler-dom';
import axios from 'axios';
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
  name: 'App',
  components: { AppHeader, AppMain },
  data() {
    return {
      projects: [],
    }
  },
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
};
</script>

<template>
  <AppHeader></AppHeader>

  <div class="test">
    <ul v-if="projects.length">
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
    <h3 v-else class="text-center my-5">Non ci sono progetti.</h3>
  </div>
</template>

<style></style>
