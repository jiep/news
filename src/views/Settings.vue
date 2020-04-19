<template lang="pug">
.w-full.m-0.flex.flex-col.overflow-y-auto
  .bg-blue-600.text-white.w-full.p-4.text-center.flex-grow-0.select-none
    .flex.justify-between.items-center
      .flex-1
        .flex
          router-link.text-xl.font-bold(:to="{ name: 'home' }")
            svg.w-4.text-white(role='img', xmlns='http://www.w3.org/2000/svg', viewBox='0 0 448 512')
              path(fill='currentColor', d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z')
      .flex
        p.text-xl.font-bold Settings
      .flex-1
  notification(:msg='msg', type='success', v-if='msg')
  .bg-gray-200.w-full.flex-grow.overflow-y-auto
    .flex.justify-start.content-center.flex-col
      .py-4.px-4.border-b.border-gray-300
        .flex-grow.flex.justify-between.content-center
          .flex.flex-col.flex-grow
            .flex.items-center.justify-between
              .shrink-0.flex
                p.text-lg.text-gray-900.font-sans.select-all Country
              .shrink-0.flex.ml-2
                select.form-select.bg-red-blue-700(v-model='country', @change='onChange')
                  option(value='us')
                    | United States
                  option(value='gb') United Kingdom
  .flex.grow-0.bg-gray-200.justify-center
    .text-xs.text-gray-500.select-none.p-2 Version {{version}}
</template>

<script>
import Notification from "@/components/Notification.vue";

export default {
  components: {
    Notification
  },
  data() {
    return {
      msg: null,
      country: this.$store.getters.country
    };
  },
  methods: {
    onChange() {
      this.msg = null;
      this.$store.commit("setCountry", event.target.value);
      this.msg = "Saved changes";
    }
  },
  computed: {
    version() {
      /*global APPLICATION_VERSION */
      /*eslint no-undef: "error"*/
      // Defined on vue.config.js
      return APPLICATION_VERSION;
    }
  }
};
</script>
