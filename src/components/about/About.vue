<script lang="ts" setup>

import { useCounterStore } from "../../store/counter";
import { storeToRefs } from "pinia";
import { onMounted } from 'vue';

const store = useCounterStore();

const { data }:any = storeToRefs(store);


const { fetchData } = store;

onMounted(() => {
  fetchData();
})



</script>

<template>
  <main>
    <h1>

      SOU About
    </h1>
    <h2>

      {{ store.count }}
    </h2>

    <button @click="store.increment">me faça somar + 1 </button>

    <hr>



    <h2>mostra uns nome ae bicho</h2>
    <hr>


    <ul>
      <li v-for="user in data" key="user.id">
        {{ user.name }}
      </li>
      <hr>
    </ul>
  </main>
</template>
