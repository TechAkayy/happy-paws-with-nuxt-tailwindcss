<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'Thousands of homeless pets, one act of kindness!',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div>
    <HeroSection />
    <CallToAction />
    <OurMission />
    <PetListLite />
    <StatsSection />
  </div>
</template>
<style scoped></style>
