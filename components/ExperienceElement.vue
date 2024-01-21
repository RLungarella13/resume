<template>
    <div>
      <div class="flex flex-row justify-between items-center">
        <div class="text-3vw font-semibold leading-none">
          {{ experience.project}} - {{ experience.role }}
        </div>
        <div class="text-right font-mono">
          {{ experience.start_date }}<br />/&nbsp;{{
            experience.end_date
          }}
        </div>
      </div>
      <div class="text-2vw leading-none mb-4">{{ experience.company }}</div>
    </div>
    <p>{{ experience.description }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
