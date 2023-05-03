<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
const Home = defineAsyncComponent(() => import('./views/Home.vue'));
const About = defineAsyncComponent(() => import('./views/About.vue'));
const Portfolio = defineAsyncComponent(() => import('./views/Portfolio.vue'));

axios.get('http://localhost:8000/api/projects')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin-right: 1em;
}

nav a {
  text-decoration: none;
  color: black;
}

nav a:hover {
  color: #646cff;
}
</style>
