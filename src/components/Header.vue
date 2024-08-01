<script setup>
import Weather from './Weather.vue';
</script>

<template>
    <div class="header">
        <h1>
            La temperatura actual es:
            <Weather></Weather>
        </h1>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: #fff;
}

h1 {
    margin: 0;
}
</style>