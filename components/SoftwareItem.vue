<template>
  <div class="flex flex-row justify-between">
    <div class="font-mono text-sm">
      {{ softwareName }}
    </div>
    <div class="flex flex-row items-center">
      <div
        v-for="i of 4"
        :key="i"
        class="balls"
        :class="{ filled: i <= (skillLevel ?? 0) + 1 }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  softwareName: {
    type: String,
  },
  skillLevel: {
    type: Number,
  },
});
onMounted(() => {
  switch (props.skillLevel) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
});
</script>

<style scoped>
.balls {
  width: 10px;
  height: 10px;
  border-radius: 20rem;
  margin-right: 3px;
  border: 1px solid #323232;
}
.empty {
  background-color: #F8F4EC;
}
.filled {
  background-color: #323232;
}
</style>
