<template>
  <div class="mb-8">
    <div class="text-4vw font-bold leading-none">Education</div>
    <div>
      <div class="flex flex-row justify-between items-center">
        <div class="text-3vw font-semibold leading-none">
          {{ educationData.school_name }}
        </div>
        <div class="text-right font-mono">
          {{ educationData.start_date }}<br />/&nbsp;{{
            educationData.end_date
          }}
        </div>
      </div>
      <div class="text-2vw leading-none mb-4">{{ educationData.degree }}</div>
    </div>
    <p><span class="font-bold">Thesis - </span>{{ educationData.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { education_data as educationData } from "../content/education";
</script>

<style scoped></style>
