<template>
  <div class="flex flex-row justify-between">
    <div class="font-mono text-2vw">
      {{ skillName }}
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
  skillName: {
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
  width: 12px;
  height: 12px;
  border-radius: 20rem;
  margin-right: 4px;
  border: 1px solid #323232;
}
.empty {
  background-color: #F8F4EC;
}
.filled {
  background-color: #323232;
}
</style>
