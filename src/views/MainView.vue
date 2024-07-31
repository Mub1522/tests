<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <div class="container">
        <Sidebar></Sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>