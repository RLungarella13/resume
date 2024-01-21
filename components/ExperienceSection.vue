<template>
    <div class="text-5xl">
        Work Experience
    </div>
    <div v-for="experience in workExperienceData" :key="experience.id">
        {{ experience.company }}
    </div>
</template>

<script setup lang="ts">
import { work_experience_data as workExperienceData } from '../content/workExperience'
</script>

<style scoped>

</style>