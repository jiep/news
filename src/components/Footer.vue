<template lang="pug">
footer.bg-indigo-900.text-white.w-full.py-4.text-center.flex-grow-0.h-24
  p.font-light Made with
    |
    span.text-red-600.mx-2.text-xl ♥
    |  by 
    a.font-hairline.text-white(:href="github", target="_blank", class="hover:underline") {{author}}
</template>

<script>
export default {
  name: "footer",
  props: ["author", "github"]
};
</script>
