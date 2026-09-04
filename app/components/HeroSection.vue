<script setup lang="ts">
  import { heroImage } from '@/utils/hero'

  const heroCaption = 'Adopt A Pet'
  const heroIntro = 'Thousands of homeless dogs,'
  const heroDescription =
    'Find your new furry friend today! We have a wide variety of lovable pets available for adoption. Come visit us and take home your new best friend!'
  const heroImageAlt = 'A happy dog waiting to be adopted at Happy Paws'

  const highlights = [
    { value: '1200+', label: 'Happy adoptions' },
    { value: '1000+', label: 'Families united' },
    { value: '10K+', label: 'Animals helped' },
  ]
</script>
<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-primary-50/80 via-white to-white py-16 sm:py-20 lg:py-24 dark:from-primary-950/40 dark:via-neutral-950 dark:to-neutral-950"
  >
    <!-- Decorative background glows -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-500/10"
      />
      <div
        class="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-secondary-200/50 blur-3xl dark:bg-secondary-500/10"
      />
      <div
        class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tertiary-100/40 blur-3xl dark:bg-tertiary-500/5"
      />
    </div>

    <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16"
      >
        <!-- Copy -->
        <div class="text-center lg:text-left">
          <p
            class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wider text-primary-700 uppercase shadow-sm ring-1 ring-primary-200 dark:bg-neutral-900 dark:text-primary-300 dark:ring-primary-500/40"
          >
            <BaseIcon name="i-noto-dog-face" height="20px" class="shrink-0" />
            {{ heroCaption }}
          </p>

          <h1 class="mt-6 text-neutral-900 dark:text-white">
            {{ heroIntro }}
            <span
              class="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent dark:from-primary-300 dark:via-primary-200 dark:to-secondary-300"
              >one act of kindness</span
            >
          </h1>

          <p
            class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-500 lg:mx-0 dark:text-neutral-200"
          >
            {{ heroDescription }}
          </p>

          <div
            class="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <BaseButton to="/adopt" size="xl" class="group w-full sm:w-auto">
              <span>Adopt Now</span>
              <BaseIcon
                name="i-noto-dog-face"
                height="28px"
                class="ml-1.5 transition-transform duration-300 group-hover:scale-110"
              />
            </BaseButton>
            <BaseButton
              to="/volunteer"
              size="xl"
              variant="outline"
              color="secondary"
              class="w-full sm:w-auto"
            >
              <span>Become a volunteer</span>
            </BaseButton>
          </div>

          <!-- Trust indicators -->
          <div
            class="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-neutral-200 pt-8 lg:mx-0 dark:border-white/10"
          >
            <div
              v-for="highlight in highlights"
              :key="highlight.label"
              class="text-center lg:text-left"
            >
              <p
                class="text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white"
              >
                {{ highlight.value }}
              </p>
              <p
                class="mt-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-200"
              >
                {{ highlight.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- Pet photo -->
        <div class="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            class="absolute -inset-4 -rotate-2 rounded-3xl bg-gradient-to-tr from-primary-200/80 via-primary-100/60 to-secondary-200/70 dark:from-primary-500/15 dark:via-white/5 dark:to-secondary-500/10"
          />
          <div
            class="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10 dark:shadow-black/40 dark:ring-white/10"
          >
            <NuxtImg
              :src="heroImage"
              :alt="heroImageAlt"
              class="h-80 w-full object-cover sm:h-96"
              loading="eager"
            />
            <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/25 via-transparent to-transparent"
            />
          </div>

          <!-- Floating badge: top left -->
          <div
            class="absolute -top-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-left-6 dark:bg-neutral-900/90 dark:ring-white/10"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-full bg-primary-100 dark:bg-primary-500/20"
            >
              <BaseIcon
                name="i-ri-heart-add-fill"
                height="24px"
                class="text-tertiary-600 dark:text-tertiary-300"
              />
            </span>
            <span>
              <span
                class="block text-sm leading-tight font-bold text-neutral-900 dark:text-white"
                >1200+ pets rehomed</span
              >
              <span
                class="block text-xs text-neutral-500 dark:text-neutral-200"
                >and counting, every week</span
              >
            </span>
          </div>

          <!-- Floating badge: bottom right -->
          <div
            class="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-right-4 dark:bg-neutral-900/90 dark:ring-white/10"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-full bg-secondary-100 dark:bg-secondary-500/20"
            >
              <BaseIcon name="i-noto-dog-face" height="24px" />
            </span>
            <span>
              <span
                class="block text-sm leading-tight font-bold text-neutral-900 dark:text-white"
                >Adoption made easy</span
              >
              <span
                class="block text-xs text-neutral-500 dark:text-neutral-200"
                >Loving homes, happy tails</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
