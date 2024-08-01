import axios from 'axios';
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=3.4372&longitude=-76.5225&hourly=temperature_2m&timezone=auto';

export const getWeather = async () => {
    try {
        const response = await axios.get(API_URL);
        const weather = response.data.hourly.temperature_2m[0];
        return weather;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
