<template>
  <Navbar />
  <main class="bg-primary grid place-items-center ">
    <form action="" class="relative w-1/4 m-32" @submit.prevent="login">
      <h1 class="mb-8 text-2xl font-medium">Sign in to your Account</h1>
      <label for="email">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        class="input_common mb-4"
        v-model="email"
      />

      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        class="input_common"
        v-model="password"
      />

      <button type="submit" class="button_teal mt-6">
        Sign in
      </button>
    </form>
  </main>
</template>

<script>
import Navbar from '@/components/Navbar';
import { auth } from '@/firebase';

export default {
  name: 'Login',
  components: {
    Navbar,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: function() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert(`Welcome to Your Home`);
          this.$router.push('/');
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style></style>
