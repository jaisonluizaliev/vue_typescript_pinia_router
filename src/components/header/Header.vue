<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router'

import { useCounterStore } from "../../store/counter";

const store = useCounterStore();

const { doubleCount } = storeToRefs(store);
const { increment } = store;



</script>

<template>
  <header class="header">
    <h3>mi number is {{ store.count }} {{ doubleCount }}</h3> &nbsp;|&nbsp;
    <nav>
      <RouterLink to="/">Home</RouterLink> &nbsp;|&nbsp;
      <RouterLink to="/about">about</RouterLink > &nbsp;|&nbsp;
      <RouterLink to="/about/hi">Oi</RouterLink> &nbsp;|&nbsp;
    </nav>

    <button @click="store.increment">Make me double</button>
  </header>
</template>