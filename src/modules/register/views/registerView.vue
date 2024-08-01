<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import schema from '../schemas/validationSchema';

const onSubmit = () => {
    console.log('success');
}

</script>

<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form-group">
                <label for="name">Nombre</label>
                <Field type="text" placeholder="Nombre..." name="name" />
                <ErrorMessage name="name"></ErrorMessage>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <Field type="email" placeholder="Email..." name="email" />
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