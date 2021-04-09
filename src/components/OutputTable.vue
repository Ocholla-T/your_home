.<template>
  <section class="flex justify-center p-8">
    <table>
      <thead>
        <tr>
          <th
            class="px-10 py-3 border-b-2 border-secondary text-left leading-4 text-blue-500 tracking-wider"
          >
            Device
          </th>
          <th
            class="px-10 py-3 border-b-2 border-secondary text-left leading-4 text-blue-500 tracking-wider"
          >
            Price
          </th>
          <th
            class="px-10 py-3 border-b-2 border-secondary text-left leading-4 text-blue-500 tracking-wider"
          >
            Lifespan
          </th>
          <th
            class="px-10 py-3 border-b-2 border-secondary text-left leading-4 text-blue-500 tracking-wider"
          >
            Years Used
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="device in myDevicesInformation" :key="device.id">
          <td class="px-10 py-4 whitespace-no-wrap border-b-2 border-teal-500">
            <div class="text-sm leading-5 ">{{ device.device }}</div>
          </td>
          <td class="px-10 py-4 whitespace-no-wrap border-b-2 border-teal-500">
            <div class="text-sm leading-5 ">
              {{ device.buyingPrice }}
            </div>
          </td>
          <td class="px-10 py-4 whitespace-no-wrap border-b-2 border-teal-500">
            <div class="text-sm leading-5 ">{{ device.lifespan }}</div>
          </td>
          <td class="px-10 py-4 whitespace-no-wrap border-b-2 border-teal-500">
            <div class="text-sm leading-5 ">{{ device.yearsUsed }}</div>
          </td>
        </tr>
        <tr>
          <th
            class="px-10 py-3 border-b-2 border-secondary text-left leading-5 text-blue-500 tracking-wider"
          >
            Total
          </th>
          <td class="px-10 py-4 whitespace-no-wrap border-b-2 border-teal-500">
            <div class="text-sm leading-5 ">{{ totalValueOfDevices }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { devicesCollection } from '@/firebase';

export default {
  name: 'OutputTable',
  data() {
    return {
      myDevicesInformation: [],
    };
  },
  computed: {
    totalValueOfDevices: function() {
      var total = 0;
      this.myDevicesInformation.forEach((element) => {
        total += Number(element.buyingPrice);
      });
      return total;
    },
  },
  created() {
    devicesCollection.onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === 'added') {
          this.myDevicesInformation.push({
            device: change.doc.data().device,
            buyingPrice: change.doc.data().buyingPrice,
            lifespan: change.doc.data().averageLifespan,
            yearsUsed: change.doc.data().yearsInUse,
            id: change.doc.id,
          });

          console.log(this.myDevicesInformation);
        }
      });
    });
  },
};
</script>

<style></style>
