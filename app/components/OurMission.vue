<script setup lang="ts">
  const missionImage =
    'https://images.unsplash.com/photo-1528301725143-1ba694832e77?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDExfHxraWRzJTIwYW5pbWFsfGVufDB8fHx8MTYzMDQ2NTQwOQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=650&fit=crop'

  const values = [
    {
      title: 'Rescue with care',
      text: 'We take in abandoned and surrendered pets and give them shelter, vet care and plenty of love.',
    },
    {
      title: 'Match, don’t just sell',
      text: 'We get to know every animal and every family so that adoptions truly last a lifetime.',
    },
    {
      title: 'Support after adoption',
      text: 'Our help doesn’t end at the front door — advice and community support are always available.',
    },
  ]
</script>
<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-neutral-100/70 py-20 sm:py-24 dark:from-neutral-950 dark:via-neutral-900/60 dark:to-neutral-900/40"
  >
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute top-10 -right-24 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl dark:bg-primary-500/5"
      />
      <div
        class="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-secondary-100/50 blur-3xl dark:bg-secondary-500/5"
      />
    </div>

    <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid items-center gap-16 lg:grid-cols-2 lg:gap-20"
      >
        <!-- Visual -->
        <div class="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            class="absolute -inset-4 rotate-2 rounded-[3rem] bg-gradient-to-tr from-primary-100 via-primary-50 to-secondary-100 dark:from-primary-500/10 dark:via-white/5 dark:to-secondary-500/10"
          />
          <NuxtImg
            :src="missionImage"
            alt="Rescued pets and volunteers at Happy Paws"
            loading="lazy"
            class="relative w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5 dark:ring-white/10"
          />

          <div
            class="absolute -top-5 right-4 flex items-center gap-2.5 rounded-2xl bg-white/90 px-4 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur sm:right-8 dark:bg-neutral-900/90 dark:ring-white/10"
          >
            <span class="text-lg">
              <BaseIcon name="i-ri-heart-add-fill" height="22px" class="text-tertiary-500" />
            </span>
            <p
              class="text-sm font-bold text-neutral-900 dark:text-white"
            >
              Saving lives since 2002
            </p>
          </div>

          <div
            class="absolute -bottom-6 left-4 rounded-2xl bg-white/90 px-5 py-4 shadow-lg ring-1 ring-black/5 backdrop-blur sm:left-8 dark:bg-neutral-900/90 dark:ring-white/10"
          >
            <p
              class="font-serif text-2xl font-bold text-primary-600 dark:text-primary-300"
            >
              100%
            </p>
            <p
              class="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400"
            >
              Not-for-profit
            </p>
          </div>
        </div>

        <!-- Copy -->
        <div>
          <p
            class="text-xs font-bold tracking-[0.2em] text-primary-600 uppercase dark:text-primary-300"
          >
            Our Mission
          </p>
          <h3 class="mt-3 capitalize text-neutral-900 dark:text-white">
            Life changing experience for a valuable cause
          </h3>
          <p
            class="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
          >
            We rescue, rehabilitate and rehome abandoned dogs and cats — and we
            stand by the families who open their hearts to them.
          </p>

          <ul class="mt-8 space-y-6">
            <li
              v-for="(value, index) in values"
              :key="index"
              class="flex gap-4"
            >
              <span
                aria-hidden="true"
                class="mt-1.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-100 dark:bg-primary-500/15"
              >
                <span
                  class="h-2 w-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-400"
                />
              </span>
              <div>
                <h5
                  class="font-bold text-neutral-900 dark:text-white"
                >
                  {{ value.title }}
                </h5>
                <p
                  class="mt-1 leading-relaxed text-neutral-500 dark:text-neutral-400"
                >
                  {{ value.text }}
                </p>
              </div>
            </li>
          </ul>

          <div class="mt-10">
            <BaseButton to="/articles" size="xl">
              <span>Learn more about us</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
