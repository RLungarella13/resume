<template>
  <div class="text-2vw font-bold uppercase mb-5">Soft Skills</div>
  <div class="flex flex-row flex-wrap justify-around">
    <div v-for="softSkill in softSkillsData" :key="softSkill.id">
      <div
        class="bg-secondary rounded-full text-primary mx-1 my-1 py-1 px-2 text-center text-1vw"
      >
        {{ softSkill.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { soft_skills_data as softSkillsData } from "/content/softSkills";
</script>

<style scoped></style>
~/content/softSkills