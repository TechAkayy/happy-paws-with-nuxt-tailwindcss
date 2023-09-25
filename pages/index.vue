<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    navOrder: 1,
  })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main>
    <HeroSection />
    <CallToAction />
    <MiniDivider />
    <OurMission />
    <PetListLite />
    <StatsSection />
  </main>
</template>
<style scoped></style>
