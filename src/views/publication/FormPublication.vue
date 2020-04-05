<template>
  <form>
    <v-text-field v-model="password" id="password" type="password" label="Contrasenia"></v-text-field>
    <v-text-field v-model="confirmPassword" id="confirmPassword" type="confirmPassword" label="Confirmar contrasen"></v-text-field>
    <p v-if= "!$v.confirmPassword.sameAs">Distintas</p>
    <v-text-field v-model="email" id="email" type="email" label="E-mail" :class="{invalid: $v.email.$error}"></v-text-field>
  </form>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

  export default {
    data: () => ({
      email: '',
      password: '',
      confirmPassword: ''
    }),

    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      },
    }
  }
</script>