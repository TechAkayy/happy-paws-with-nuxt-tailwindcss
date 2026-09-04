<script setup lang="ts">
  const heroCaption = 'Adopt A Pet'
  const heroDescription =
    'Find your new furry friend today! We have a wide variety of lovable pets available for adoption. Come visit us and take home your new best friend!'

  // Warm pet photography for the hero visual
  const heroImage =
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxkb2d8ZW58MHx8fHwxNjgzMjc1MDI1&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=1200&fit=crop'
  const heroImageAlt = 'A happy rescue dog waiting for a loving home'

  const highlights = [
    { value: '1200+', label: 'Happy adoptions' },
    { value: '1000+', label: 'Families united' },
    { value: '10K+', label: 'Animals helped' },
  ]
</script>
<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white dark:from-primary-950/40 dark:via-neutral-950 dark:to-neutral-950"
  >
    <!-- Decorative background glows -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute -top-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-500/10"
      />
      <div
        class="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-secondary-200/40 blur-3xl dark:bg-secondary-500/5"
      />
      <div
        class="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-tertiary-100/30 blur-3xl dark:bg-tertiary-500/5"
      />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid items-center gap-14 pt-12 pb-16 sm:pt-16 lg:grid-cols-2 lg:gap-10 lg:pt-20 lg:pb-24 xl:gap-16"
      >
        <!-- Copy -->
        <div class="relative text-center lg:text-left">
          <p
            class="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold tracking-[0.18em] text-primary-700 uppercase shadow-sm ring-1 ring-primary-200/80 backdrop-blur dark:bg-neutral-900/70 dark:text-primary-300 dark:ring-primary-500/20"
          >
            <BaseIcon name="i-noto-dog-face" height="20px" class="shrink-0" />
            {{ heroCaption }}
          </p>

          <h1 class="mt-6 capitalize text-neutral-900 dark:text-white">
            Thousands of homeless dogs,
            <span
              class="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent dark:from-primary-400 dark:via-primary-300 dark:to-secondary-300"
              >one act of kindness</span
            >
          </h1>

          <p
            class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 lg:mx-0 dark:text-neutral-300"
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
              class="w-full sm:w-auto"
            >
              <span>Become a volunteer</span>
            </BaseButton>
          </div>

          <!-- Trust indicators -->
          <div
            class="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-neutral-200/80 pt-8 lg:mx-0 dark:border-white/10"
          >
            <div
              v-for="highlight in highlights"
              :key="highlight.label"
              class="text-center lg:text-left"
            >
              <p
                class="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white"
              >
                {{ highlight.value }}
              </p>
              <p
                class="mt-1 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase sm:text-xs dark:text-neutral-400"
              >
                {{ highlight.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- Hero pet photo -->
        <div class="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            class="absolute -inset-4 -rotate-2 rounded-[3rem] bg-gradient-to-tr from-primary-200/80 via-primary-50 to-secondary-200/70 dark:from-primary-500/15 dark:via-white/5 dark:to-secondary-500/10"
          />
          <div
            class="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary-900/10 ring-1 ring-black/10 dark:shadow-black/40 dark:ring-white/10"
          >
            <NuxtImg
              :src="heroImage"
              :alt="heroImageAlt"
              class="h-auto w-full object-cover"
              loading="eager"
            />
          </div>

          <!-- Floating badge: top left -->
          <div
            class="absolute -top-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-left-6 dark:bg-neutral-900/90 dark:ring-white/10"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-full bg-primary-100 text-xl dark:bg-primary-500/15"
            >
              <BaseIcon name="i-ri-heart-add-fill" height="24px" />
            </span>
            <span>
              <span
                class="block text-sm leading-tight font-bold text-neutral-900 dark:text-white"
                >1200+ pets rehomed</span
              >
              <span
                class="block text-xs text-neutral-500 dark:text-neutral-400"
                >and counting, every week</span
              >
            </span>
          </div>

          <!-- Floating badge: bottom right -->
          <div
            class="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-right-4 dark:bg-neutral-900/90 dark:ring-white/10"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-full bg-secondary-100 text-xl dark:bg-secondary-500/15"
            >
              <BaseIcon name="i-noto-dog-face" height="24px" />
            </span>
            <span>
              <span
                class="block text-sm leading-tight font-bold text-neutral-900 dark:text-white"
                >Adoption made easy</span
              >
              <span
                class="block text-xs text-neutral-500 dark:text-neutral-400"
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
