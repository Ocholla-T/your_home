<template @onload="changePlaceholder">
  <div class="flex justify-center">
    <form action="" @submit.prevent="onSubmit" class="max-w-md">
      <div>
        <label for="name">Device</label>
        <input
          class="py-2 pl-4 my-1.5  border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="text"
          name="device"
          placeholder="Device"
          v-model="devices.device"
          required
        />

        <label for="name">Buying Price</label>
        <input
          class="py-2 pl-4 my-1.5 border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="text"
          name="buying__price"
          placeholder="Buying Price"
          v-model="devices.buyingPrice"
          required
        />

        <label for="name">Average Lifespan</label>
        <input
          class="py-2 pl-4 my-1.5 border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="text"
          name="average__lifespan"
          placeholder="Average lifespan"
          v-model="devices.averageLifespan"
          required
        />

        <label for="name">Years in Use</label>
        <input
          class="py-2 pl-4 my-1.5 border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="text"
          name="years__in__use"
          placeholder="Years in Use"
          v-model="devices.yearsInUse"
          required
        />
      </div>

      <button
        class="my-3 bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { devicesCollection } from "@/firebase";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      devices: [
        {
          device: "",
          buyingPrice: Number,
          averageLifespan: Number,
          yearsInUse: Number,
        },
      ],
    };
  },
  methods: {
    onSubmit: function() {
      //object that maps input data to their respective fields
      const devices = {
        device: this.devices.device,
        buyingPrice: this.devices.buyingPrice,
        averageLifespan: this.devices.averageLifespan,
        yearsInUse: this.devices.yearsInUse,
      };

      //firebase accepts data as objects
      devicesCollection.add(devices).then(() => {
        console.log("added to database!");
      });

      //takes from back to initial state
      this.$store.state.inputValue = [];
    },
  },
};
</script>
