<template lang="pug">
.w-full.flex-grow.overflow-y-none.h-full
  template(v-if="news.length > 0")
    .flex.justify-start.content-center.flex-col.p-4(v-for="news in news", class="first:pt-8 last:pb-8")
      news.shadow-lg.rounded-lg.overflow-hidden(:news="news")
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
