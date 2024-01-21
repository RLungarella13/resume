<template>
  <div class="w-full mb-4">
    <div class="text-2vw font-bold uppercase mb-5">Languages</div>
    <div v-for="skill in skillsData" :key="skill.id">
      <SkillItem :skillName="skill.name" :skillLevel="skill.level" />
    </div>
    <div class="bg-secondary text-primary py-3 px-4 rounded-lg mt-4">
      <div class="text-[11px] font-semibold">Head Up</div>
      <div
        class="text-[10px] "
      >
        These are the language/frameworks I am currently studying in my github
        page there are listed all the languages I worked with.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills_data as skillsData } from "../content/skills";
</script>

<style scoped></style>
