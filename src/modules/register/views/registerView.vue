<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import schema from '../schemas/validationSchema';
import { useRegisterStore } from '../stores/registerStore';
import { ref } from 'vue';
const registerStore = useRegisterStore();
const name = ref('');
const email = ref('');

const onSubmit = () => {
    registerStore.saveRegister(name.value, email.value);
    console.log('success');
}
</script>

<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit()">
            <div class="form-group">
                <label for="name">Nombre</label>
                <Field type="text" placeholder="Nombre..." name="name" v-model="name" />
                <ErrorMessage name="name"></ErrorMessage>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <Field type="email" placeholder="Email..." name="email" v-model="email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <button type="submit">Register</button>
        </Form>
    </div>
</template>

<style scoped>
.form-group {
    margin-bottom: 15px;
}
</style>