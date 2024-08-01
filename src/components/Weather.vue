<script setup>
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore.js';
const weatherStore = useWeatherStore();
console.log(weatherStore.weather)

onMounted(() => {
    useWeather();
})   
</script>

<template>
    <h3>{{ weatherStore.weather }}</h3>
</template>

<style scoped></style>