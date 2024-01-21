<template>
  <div class="w-full mb-4">
    <div class="text-2vw font-bold uppercase mb-5">Skills</div>
    <div v-for="skill in skillsData" :key="skill.id">
      <SkillItem :skillName="skill.name" :skillLevel="skill.level" />
    </div>
    <div class="text-[8px] bg-secondary text-primary py-2 px-3 rounded-lg  mt-4">These are the language/frameworks I am currently studying in my github page there are listed all the languages I worked with.</div>
  </div>
</template>

<script setup lang="ts">
import { skills_data as skillsData } from "../content/skills";
</script>

<style scoped></style>
