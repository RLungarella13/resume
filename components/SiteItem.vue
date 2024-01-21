<template>
  <div v-if="site" class="flex flex-row">
    <img :src="site.url" alt="" class="mr-4 w-5"/>
    <a :href="site.link" class="text-2vw font-bold underline">{{
      site.name
    }}</a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  site: {
    type: Object,
  },
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
