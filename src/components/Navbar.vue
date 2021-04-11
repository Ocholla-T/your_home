.<template>
  <header class="relative">
    <nav class="py-5 px-16 bg-secondary font-serif text-lg">
      <ul class="flex justify-between">
        <li>Your Home</li>
        <img @click="toggleMenu" class="relative z-10" src="../assets/user.png" alt="user icon" />
      </ul>
    </nav>

    <aside
      v-if="isHidden"
      class="z-0 absolute right-8 top-2 w-auto pt-12 pb-8 px-8  text-right bg-teal-400 rounded"
    >
      <ul class="grid grid-rows-2 gap-2 mt-4">
        <li>Account Settings</li>
        <li @click="logout">Log out</li>
      </ul>
    </aside>
  </header>
</template>

<script>
import { auth } from '@/firebase';

export default {
  name: 'Navbar',
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    toggleMenu: function() {
      return (this.isHidden = !this.isHidden);
    },
    logout: function() {
      auth
        .signOut()
        .then(() => {
          this.$router.push('/login');
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
img,
ul {
  cursor: pointer;
}
</style>
