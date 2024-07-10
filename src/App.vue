<script setup>
import { RouterView } from 'vue-router';
import HomePage from './components/HomePage.vue'
import Introduction from './components/Introduction.vue';
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="crt"> 
    <RouterView/>
  </div>
</template>

<style scoped>
  .crt::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 5px 100%;
    pointer-events: none;
  }

  .crt {
  }
</style>
