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
  <app-header></app-header>
  <app-main :projects="projects"></app-main>
</template>

<style></style>
