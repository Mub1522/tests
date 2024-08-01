<script setup>
import { ref } from "vue";
const counter = ref(0);
const sum = () => {
  counter.value++;
}
const subtract = () => {
  counter.value--;
}
</script>

<template>
  <h1>Hola</h1>
  {{ counter }}
  <br>
  <button @click="sum">Sumar</button>
  <button @click="subtract">Restar</button>
</template>

<style scoped></style>
