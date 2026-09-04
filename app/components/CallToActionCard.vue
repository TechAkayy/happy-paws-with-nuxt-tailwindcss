<script setup lang="ts">
  const { img, kicker, action, blurb, label, to } = defineProps({
    img: {
      type: String,
      required: true,
    },
    kicker: {
      type: String,
      default: 'Get involved',
    },
    action: {
      type: String,
      required: true,
    },
    blurb: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Learn more',
    },
    to: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <NuxtLink
    :to="to"
    class="group relative block overflow-hidden rounded-[2rem] shadow-md ring-1 ring-black/5 transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl dark:ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
  >
    <div class="relative aspect-[4/5] w-full overflow-hidden">
      <NuxtImg
        :src="img"
        :alt="action"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/5"
      />
      <span
        class="absolute top-5 left-5 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase ring-1 ring-white/25 backdrop-blur-sm"
      >
        {{ kicker }}
      </span>
      <div class="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h4 class="mb-2 text-white">{{ action }}</h4>
        <p class="mb-6 text-sm leading-relaxed text-white/75 line-clamp-2">
          {{ blurb }}
        </p>
        <span
          class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-sm transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white"
        >
          {{ label }}
          <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped></style>
