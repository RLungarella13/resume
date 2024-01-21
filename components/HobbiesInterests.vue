<template>
  <div class="text-2vw font-bold leading-none">Hobbies and Interests</div>
  <div class="flex flex-row flex-wrap">
    <ul>
      <li v-for="hobby in hobbies" :key="hobby.id">
        {{ hobby.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { hobbies } from "../content/hobbies";
</script>

<style scoped></style>
