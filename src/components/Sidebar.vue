<script setup></script>

<template>
    <div class="sidebar">
        <h2>Vue - Test</h2>
        <ul>
            <li><router-link to="/Counter">Counter</router-link></li>
            <li><router-link to="/TaskList">Task List</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>