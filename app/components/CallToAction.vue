<script setup lang="ts">
  const callToActions = [
    {
      img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwfHxkb2clMjBob3VzZXxlbnwwfHx8fDE2MzA0NjM2Mzg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
      kicker: 'Find a friend',
      action: 'Adopt a pet',
      blurb: 'Meet loving dogs and cats waiting for their forever family.',
      label: 'See available pets',
      to: '/adopt',
    },
    {
      img: 'https://images.unsplash.com/photo-1499946682598-202f5b527154?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkzfHxmZWVkJTIwaGFtc3RlcnxlbnwwfHx8fDE2MzA0NjQ1Mzc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
      kicker: 'Lend a hand',
      action: 'Volunteer with us',
      blurb: 'Walk dogs, foster a pet or help at our adoption events.',
      label: 'Join the team',
      to: '/volunteer',
    },
    {
      img: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDR8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
      kicker: 'Give back',
      action: 'Donate',
      blurb: 'Your generosity keeps our rescue running all year round.',
      label: 'Donate now',
      to: '/quick-start',
    },
  ]
</script>
<template>
  <section class="bg-white py-16 sm:py-20 lg:py-24 dark:bg-neutral-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p
          class="text-xs font-bold tracking-wider text-primary-600 uppercase dark:text-primary-200"
        >
          Get Involved
        </p>
        <h3 class="mt-3 text-neutral-900 dark:text-white">
          Small gesture for a big impact
        </h3>
        <p
          class="mt-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-200"
        >
          A home, a few hours of your time, or a small donation — every act of
          kindness changes a rescued animal's life.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
        <CallToActionCard
          v-for="(callToAction, index) in callToActions"
          :key="index"
          :img="callToAction.img"
          :kicker="callToAction.kicker"
          :action="callToAction.action"
          :blurb="callToAction.blurb"
          :label="callToAction.label"
          :to="callToAction.to"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
