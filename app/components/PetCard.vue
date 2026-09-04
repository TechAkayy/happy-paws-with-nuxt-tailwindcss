<script setup lang="ts">
  import type { Pet } from '~~/types/pets'

  const props = defineProps<Pet>()

  const ageLabel = computed(() => {
    const dobString = props.dateOfBirth || ''
    // Pets data ships as DD/MM/YYYY
    const [day, month, year] = dobString.split('/').map(Number)
    if (!day || !month || !year) return ''
    const dob = new Date(year, month - 1, day)
    if (Number.isNaN(dob.getTime())) return ''
    const months =
      (Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
    if (months < 12) {
      const rounded = Math.max(1, Math.round(months))
      return `${rounded} mo`
    }
    const years = Math.round(months / 12)
    return `${years} yr${years > 1 ? 's' : ''}`
  })

  const sexLabel = computed(() => {
    const sex = (props.sex || '').toLowerCase()
    return sex === 'male' || sex === 'female' ? props.sex : ''
  })

  const metaLabel = computed(() => {
    const parts = [sexLabel.value, ageLabel.value].filter(Boolean)
    return parts.length ? parts.join(' · ') : 'Ready to adopt'
  })
</script>
<template>
  <NuxtLink
    :to="`/adopt/${id}`"
    class="group w-full px-3 pb-8 md:w-6/12 lg:w-4/12 xl:w-3/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
  >
    <article
      class="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-900/5 transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-neutral-900/10 dark:bg-neutral-900 dark:ring-white/10 dark:group-hover:shadow-black/30"
    >
      <div class="relative aspect-[4/3] overflow-hidden">
        <NuxtImg
          :src="image"
          :alt="name"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span
          class="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wide text-neutral-800 uppercase shadow-sm dark:bg-neutral-950/90 dark:text-white"
        >
          {{ metaLabel }}
        </span>
      </div>

      <div class="flex flex-1 flex-col p-5">
        <div class="flex items-baseline justify-between gap-3">
          <h5 class="mb-0 font-bold text-neutral-900 dark:text-white">
            {{ name }}
          </h5>
        </div>
        <p
          class="mt-1 text-sm leading-snug font-medium text-neutral-500 line-clamp-1 dark:text-neutral-400"
        >
          {{ breed }}
        </p>

        <div class="mt-3 flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-3.5 w-3.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span class="line-clamp-1">{{ location }}</span>
        </div>

        <span
          class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-50 py-2.5 text-sm font-bold text-primary-700 ring-1 ring-primary-200/80 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:ring-primary-500 dark:bg-primary-500/10 dark:text-primary-200 dark:ring-primary-500/20 dark:group-hover:bg-primary-500 dark:group-hover:text-white"
        >
          Adopt Now
          <BaseIcon name="i-ri-heart-add-fill" height="18px" />
        </span>
      </div>
    </article>
  </NuxtLink>
</template>
<style scoped></style>
