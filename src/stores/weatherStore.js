import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
    const weather = ref(0);

    const saveWeather = (newWeather) => {
        weather.value = newWeather;
    };

    return { weather, saveWeather };
});