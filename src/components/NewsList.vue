<template lang="pug">
.bg-gray-200.w-full.flex-grow.overflow-y-auto
  template(v-if="news.length > 0")
    .flex.justify-start.content-center.flex-col.p-4(v-for="news in news")
      news.shadow-lg.rounded-lg.overflow-hidden(:news="news", class='hover:bg-gray-300')
  template(v-else)
    .flex.items-center.justify-center.h-full
      p.text.text-gray-700 No news found!
</template>

<script>
import news from "@/components/News.vue";

export default {
  name: "news-list",
  components: {
    news
  },
  props: ["news"]
};
</script>
