<template>
  <Navbar />
  <main class="bg-primary grid place-items-center ">
    <form action="" class="relative w-1/4 m-32" @submit.prevent="signup">
      <h1 class="mb-8 text-2xl font-medium">Create your Account</h1>
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
        Create Account
      </button>
    </form>
  </main>
</template>

<script>
import Navbar from '@/components/Navbar';
import { auth } from '@/firebase';

export default {
  name: 'Signup',
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
    signup: function() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert(`Welcome to Your Home, Your account has been created. Please Login `);
          this.$router.push('/login');
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style></style>
