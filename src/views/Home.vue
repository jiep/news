<template lang="pug">
  .w-full.m-0.flex.flex-col.overflow-y-auto
    .bg-indigo-600.text-white.w-full.p-4.text-center.flex-grow-0.select-none
      .flex.justify-between.items-center
        .flex.content-center
          p.font-light.text-xl Top headlines from
          span.flag-icon.ml-1(:class="this.countryFlag")
        button.bg-currrent.border-white.border.p-1.text-sm.rounded(class="hover:bg-indigo-700 focus:outline-none", @click="refresh")
          .flex.items-center.justify-center
            .flex
              svg.w-4.mr-1.text-white(role='img', xmlns='http://www.w3.org/2000/svg', viewBox='0 0 512 512')
                path(fill='currentColor', d='M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z')
            .flex
              p Refresh
    notification(:msg="msg", :type="type", v-if="msg || (isError && msg)")

    .h-full.overflow-y-auto(:class="{spinner: isActive, 'opacity-50': isActive}")
      .container.mx-auto.flex-grow.flex.flex-col(:class="{'h-full': isLoading}")
        news-list.px-4(:news="news")
        Footer(author="jiep", github="https://github.com/jiep")
</template>

<script>
import axios from "axios";

import Notification from "@/components/Notification.vue";
import NewsList from "@/components/NewsList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Notification,
    NewsList,
    Footer
  },
  data() {
    return {
      news: [],
      isActive: false,
      msg: "",
      isError: false,
      type: "success",
      isLoading: true
    };
  },
  computed: {
    countryFlag() {
      const { country } = this.$store.getters;
      return `flag-icon-${country}`;
    }
  },
  methods: {
    async refresh() {
      const { country } = this.$store.getters;
      this.isError = false;
      try {
        this.isActive = true;
        const { data } = await axios.post(".netlify/functions/news", {
          country
        });
        this.news = data;
      } catch (e) {
        this.isError = true;
        this.msg = String(e);
        this.type = "danger";
      } finally {
        this.isActive = false;
        this.isLoading = false;
      }
    }
  },
  async mounted() {
    const { country } = this.$store.getters;
    try {
      this.isActive = true;
      const { data } = await axios.post(".netlify/functions/news", {
        country
      });
      this.news = data;
    } catch (e) {
      this.isError = true;
      this.msg = String(e);
      this.type = "danger";
    } finally {
      this.isActive = false;
      this.isLoading = false;
    }
  }
};
</script>
