<template lang="pug">
.text-white.w-full.px-4.py-2.text-center.flex-grow-0(:class="color")
  p.text-xl.font-light {{msg}}
</template>

<script>
export default {
  name: "notification",
  props: ["msg", "type"],
  data() {
    return {
      color: "bg-green-600",
      colors: [
        { type: "success", class: "bg-green-600" },
        { type: "warning", class: "bg-indigo-600" },
        { type: "danger", class: "bg-red-600" }
      ]
    };
  },
  mounted() {
    this.color = this.colors.find(x => x.type === this.type).class;
  }
};
</script>
