<template>
  <Navbar />
  <main class="bg-primary grid place-items-center">
    <form action="" @submit.prevent="onSubmit" class=" min-w-1/4 mt-10">
      <label for="name">Device</label>
      <div class="relative mb-3">
        <input
          class="relative py-2 pl-4 my-1.5  border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="text"
          name="device"
          placeholder="Enter your device"
          v-model="devices.device"
          required
        />
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-4"
        >
          <img src="../assets/microwave.png" />
        </span>
      </div>

      <label for="name">Buying Price</label>
      <div class="relative mb-3">
        <input
          class=" relative py-2 pl-4 my-1.5 border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="number"
          min="0"
          name="buying__price"
          placeholder="Number required"
          v-model="devices.buyingPrice"
          required
        />
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-4"
        >
          <img src="../assets/money-bag.png" />
        </span>
      </div>

      <label for="name">Average Lifespan</label>
      <div class="relative mb-3">
        <input
          class=" relative py-2 pl-4 my-1.5 border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="number"
          min="0"
          name="average__lifespan"
          placeholder="Number required"
          v-model="devices.averageLifespan"
          required
        />
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-4"
        >
          <img src="../assets/stopwatch.png" />
        </span>
      </div>

      <label for="name">Years in Use</label>
      <div class="relative mb-3">
        <input
          class="py-2 pl-4 my-1.5 border-solid border-2 border-gray-300 sm:text-sm w-full focus:ring-2 focus:ring-green-300 focus:border-indigo-500 rounded-md"
          type="number"
          min="0"
          name="years__in__use"
          placeholder="Number required"
          v-model="devices.yearsInUse"
          required
        />
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-4"
        >
          <img src="../assets/stopwatch.png" />
        </span>
      </div>

      <button
        class="my-3 bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Submit
      </button>
    </form>
    <ArrowDownIcon class="mt-10 mb-5 h-8 w-8 text-teal-800 animate-bounce" />
  </main>

  <OutputTable />
</template>

<script>
import { ArrowDownIcon } from "@heroicons/vue/outline";
import { devicesCollection } from "@/firebase";
import Navbar from "@/components/Navbar";
import OutputTable from "@/components/OutputTable";

export default {
  name: "Home",
  components: {
    Navbar,
    OutputTable,
    ArrowDownIcon,
  },
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
      devicesCollection
        .add(devices)
        .then(() => {
          console.log("added to database!");
        })
        .catch((error) => {
          console.log(error.message);
        });

      //takes from back to initial state
      this.devices = [];
    },
  },
};
</script>

<style lang="postcss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
