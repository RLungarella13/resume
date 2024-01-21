<template>
    <div class="text-5xl">
        Education
    </div>
    <div> {{ educationData.school_name }}</div>
    <div> {{ educationData.degree }}</div>
    <div> {{ educationData.start_date }}</div>
    <div> {{ educationData.end_date }}</div>
    <div> {{ educationData.description }}</div>
</template>

<script setup lang="ts">
import { education_data as educationData } from '../content/education';
</script>

<style scoped>

</style>