<template>
  <div class="relative">
    <div class="flex flex-row">
      <ResumeMainContent class="flex-1 mr-10" />
      <SideBar class="flex-1" />
    </div>
    <div class="absolute bottom-20 w-full">
      <FooterSection />
    </div>
  </div>
  <div
    class="absolute bg-accent font-bold p-4 px-24 text-primary top-10 -right-20 rotate-45 overflow-hidden"
  >
    Looking for a job
  </div>
</template>

<script>
import "./assets/tailwind.css";
</script>
