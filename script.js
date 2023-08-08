// import { createApp, computed } from 'vue';

const app = {
  data() {
    return {
        width: 10,
        height: 9,
    };
  },
  computed: {
    computedArea() {
      return this.width * this.height;
    },
  },
  methods: {
    calculateArea() {
      return this.width * this.height;
    },
  },
  
};

Vue.createApp(app).mount('#app');
