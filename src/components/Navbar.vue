.<template>
  <header class="relative">
    <nav class="py-5 px-16 bg-secondary font-serif text-lg">
      <ul class="flex justify-between">
        <li>Your Home</li>
        <img @click="toggle__menu" class="relative z-10" src="../assets/user.png" alt="user icon" />
      </ul>
    </nav>

    <aside
      v-if="isHidden"
      class="z-0 absolute right-8 top-2 w-auto pt-12 pb-8 px-8  text-right bg-teal-400 rounded"
    >
      <ul class="grid grid-rows-2 gap-2 mt-4">
        <li>Account Settings</li>
        <li>Log out</li>
      </ul>
    </aside>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    toggle__menu: function() {
      return (this.isHidden = !this.isHidden);
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
