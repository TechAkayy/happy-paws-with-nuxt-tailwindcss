<script setup lang="ts">
  const impactImage =
    'https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080'

  const stats = [
    { value: '1200+', label: 'Animals adopted' },
    { value: '1000+', label: 'Families united' },
    { value: '20+', label: 'Active volunteers' },
    { value: '10K+', label: 'Animals helped' },
  ]
</script>
<template>
  <section class="bg-white py-20 sm:py-24 dark:bg-neutral-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-800 via-primary-950 to-neutral-950 px-6 py-16 shadow-2xl shadow-primary-900/20 ring-1 ring-white/10 sm:px-12 sm:py-20 lg:px-16 dark:from-primary-900 dark:via-neutral-950 dark:to-neutral-950"
      >
        <!-- Decorative glows -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-0">
          <div
            class="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl"
          />
          <div
            class="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-secondary-400/10 blur-3xl"
          />
        </div>

        <div class="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <!-- Story -->
          <div>
            <p
              class="text-xs font-bold tracking-[0.2em] text-primary-300 uppercase"
            >
              Our Work
            </p>
            <h3 class="mt-3 capitalize text-white">Impact we make</h3>
            <p
              class="mt-4 text-lg leading-relaxed text-neutral-300"
            >
              From the first rescue to the happy tail-wag at the front door —
              every adoption is a small miracle made possible by our community.
            </p>

            <NuxtImg
              :src="impactImage"
              alt="A happy dog rescued and rehomed by Happy Paws"
              loading="lazy"
              class="mt-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-lg ring-1 ring-white/10"
            />
          </div>

          <!-- Numbers -->
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
          >
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-7"
            >
              <p
                class="font-serif text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-300 to-secondary-300 sm:text-5xl"
              >
                {{ stat.value }}
              </p>
              <p
                class="mt-2 text-sm font-semibold tracking-wide text-white/70 uppercase"
              >
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
