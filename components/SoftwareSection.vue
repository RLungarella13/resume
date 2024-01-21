<template>
  <div class="w-full mb-4">
    <div class="text-2vw font-bold uppercase mb-5">Softwares</div>
    <div v-for="software in softwares" :key="software.id">
      <SoftwareItem
        :softwareName="software.name"
        :skillLevel="software.level"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { softwares_data as softwares } from "../content/softwares";
</script>

<style scoped></style>
