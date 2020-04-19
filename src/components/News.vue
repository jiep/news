<template lang="pug">
.flex.flex-col.border-b.border-gray-300
  .relative
    .flex.h-64
      img.object-cover.w-full.darker(:src="news.urlToImage")
      .p-8.w-full.absolute.top-0
        .flex-grow.flex.justify-between.content-center
          .flex.flex-col.justify-start
            p.text-lg.text-white.font-sans.mb-4 {{news.title}}
            p.text-gray-300(v-if="news.author") {{news.author}}


    .flex.p-8.justify-between.items-center

      p.text-gray-700.break-all {{news.description}}

      .flex.flex-shrink-0.items-center.m-4
        a(:href="news.url", target="_blank", rel="noopener noreferer")
          .flex.items-center
          svg.w-8.text-indigo-700(class="hover:text-indigo-800", role='img', xmlns='http://www.w3.org/2000/svg', viewBox='0 0 320 512')
            path(fill='currentColor', d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z')


</template>

<script>
export default {
  name: "news",
  props: ["news"]
};
</script>
