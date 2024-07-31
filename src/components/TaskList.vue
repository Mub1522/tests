<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const newTask = ref('');
const addTask = () => {
    tasks.value.push(newTask.value);
    newTask.value = '';
}
const removeTask = (index) => {
    tasks.value.splice(index, 1);
}
</script>

<template>
    <div>
        <h2>List tasks</h2>
        <input type="text" v-model="newTask" @keyup.enter="addTask">
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                {{ task }}
                <button @click="removeTask(index)">Remove task</button>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>