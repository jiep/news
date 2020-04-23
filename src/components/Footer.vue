<template lang="pug">
footer.px-8
  .w-full.py-4.text-center.flex-grow-0.h-24.border-t.border-gray-400
    p.font-medium.text-gray-600 Made with
      |
      span.text-red-600.mx-2.text-xl ♥
      |  by 
      a.font-bold.text-gray-600(:href="github", target="_blank", class="hover:underline") {{author}}
</template>

<script>
export default {
  name: "footer",
  props: ["author", "github"]
};
</script>
