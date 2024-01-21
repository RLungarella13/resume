<template>
  <div class="mb-8">
    <div class="text-2vw font-bold uppercase mb-5">Sites</div>
    <div v-for="site in sitesData" :key="site.id">
      <SiteItem :site="site" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { sites_data as sitesData } from "~/content/sites";
</script>

<style scoped></style>
