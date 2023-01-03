import { defineStore } from 'pinia';
import axios from 'axios';


export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, data: [] }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    async fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.data = res.data;

        console.log("users", this.data);

      } catch (error) {

        console.log(error);

      }
    }
  },
});
// export const useCounterStore: StoreDefinition = defineStore("counter", {
//   state() { return { count: 0 } },
//   actions: {
//     increment() {
//       this.count++;
//     }
//   },
//   getters: {
//     showCount(): String {
//       return `O valor da contagem é ${this.count}`;
//     }
//   }

// })