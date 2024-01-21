<template>
  <div class="text-4vw font-bold leading-none">Work Experience</div>
  <div v-for="experience in workExperienceData" :key="experience.id">
    <ExperienceElement :experience="experience" />
  </div>
</template>

<script setup lang="ts">
import { work_experience_data as workExperienceData } from "../content/workExperience";
</script>

<style scoped></style>
