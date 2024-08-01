<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <div class="container">
        <Header></Header>
        <div class="content">
            <Sidebar></Sidebar>
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
    margin-top: 180px;
    flex: 1;
    padding: 20px;
}
</style>