<script setup lang="ts">
  const { somePets: pets } = await usePets()
</script>
<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/70 to-white py-20 sm:py-24 dark:from-neutral-950 dark:via-primary-950/30 dark:to-neutral-950"
  >
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute top-1/3 -left-28 h-80 w-80 rounded-full bg-secondary-100/60 blur-3xl dark:bg-secondary-500/10"
      />
      <div
        class="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-primary-100/70 blur-3xl dark:bg-primary-500/10"
      />
    </div>

    <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p
          class="text-xs font-bold tracking-[0.2em] text-primary-600 uppercase dark:text-primary-300"
        >
          Adopt A Pet
        </p>
        <h3 class="mt-3 capitalize text-neutral-900 dark:text-white">
          Find your new best friend today
        </h3>
        <p
          class="mt-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400"
        >
          Every pet below has been vaccinated, vet-checked and cared for — and
          is ready to meet you.
        </p>
      </div>

      <div class="mt-14 flex flex-wrap justify-center">
        <PetCard v-for="(pet, index) in pets" :key="index" v-bind="pet" />
      </div>

      <div class="mt-8 text-center">
        <BaseButton
          to="/adopt"
          size="xl"
          color="secondary"
          class="!text-neutral-900 group"
        >
          <span>Meet Them All</span>
          <span
            aria-hidden="true"
            class="transition-transform duration-300 group-hover:translate-x-1"
            >&rarr;</span
          >
        </BaseButton>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
