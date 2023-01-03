<script lang="ts">
import { RouterView } from 'vue-router';
import HeaderComp from "./components/header/Header.vue";
import Home from './components/home/Home.vue';

export default {
  name: 'App',
  components: { HeaderComp, Home }
}
</script>


<template>
  <div>

    <HeaderComp />
  </div>

  <div class="layout">

    <RouterView />
  </div>
</template>

