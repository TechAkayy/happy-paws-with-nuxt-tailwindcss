# AI Agent Review — Homepage Redesign Retrospective

Retrospective of the homepage redesign performed on this repository (Happy Paws,
a Nuxt 3 + Tailwind CSS + Pinegrow/Vue Designer template). Purpose: capture the
mistakes that an `AGENTS.md` with durable instructions would have prevented, and
provide ready-to-adopt rules. The redesign has been **undone** — the homepage and
theme tokens are restored to their pre-redesign state. This document is the only
remaining artifact of that work.

---

## 1. Repository context an agent must know first

- `README.md` is the authoritative orientation doc: stack, npm scripts
  (`npm run dev | build | generate | lint | preview`), module list, coding style
  (Composition API, `<script setup>`), and the Vue Designer live-design workflow.
- Design tokens are the single source of truth for look & feel:
  `themes/pg-tailwindcss/tokens.mjs` **and its mirror `tokens.cjs`**
  (`pg_colors`: `primary`/`secondary`/`tertiary` with full 50–950 scales, fonts,
  backgrounds). Tailwind config + `app/utils/colors.ts` safelist derive utility
  classes from these tokens, including dynamic `BaseButton` color variants.
- Layout chrome lives in the extended layer `app-nuxt-tailwindcss-layer/`
  (`NavBar`, `nav/*`); `app/components` wins on name conflicts.
- Several components are shared across routes — e.g. `PetCard` is used by the
  homepage (`PetListLite`) **and** the `/adopt` listing (`PetList`).

## 2. Findings (each preventable with durable agent instructions)

### F1 — Orientation skipped: README/tree/consumers were mapped after the work began
Implementation started before reading `README.md` or enumerating component
consumers. Later grep work proved valuable (`PetCard` shared with `/adopt`,
section components homepage-only). README-first would have avoided last-minute
surprises about shared components and scripts.

### F2 — Editing theme tokens is an app-wide change, not a homepage change
The "fresh colour set" replaced `primary`/`secondary`/`tertiary` in
`tokens.mjs`/`tokens.cjs`. Because every page styles itself from token classes
(`/adopt`, `/volunteer`, `/articles`, `/blog`, footer, dynamic buttons), the
whole app changed colour — while only the homepage was visually reviewed.
`projectdb.pgml` also contains a *stale* design-panel palette snapshot: not the
source of truth, do not trust or blindly sync it.

### F3 — Hard-coded colour lives in brand assets and drifted out of sync
The paw logo SVG (hard-coded hex, duplicated in `TheLogo.vue`,
`TheFooter.vue`, `OgImage/OgCard.vue`) was hand-retinted for the new palette,
while `public/favicon.svg`, `public/icon.svg` and social images stayed on the
old brand colour. Any palette change therefore requires a brand-asset checklist.

### F4 — Shared components were restyled without auditing all consumers
Redesigning `PetCard` changed gutters (`m-3` → `px-3 pb-8` wrapper), image
crop and CTA on **both** the homepage and the `/adopt` listing. Correct
approach: audit all consumers first, or add a page-specific variant (e.g.
`HomePetCard`) instead of mutating the shared one.

### F5 — Dark mode & text contrast were not systematically verified
Measured WCAG contrast (both colour schemes) exposed real problems — several
pre-existing, some introduced:

| Pair | Context | Ratio | Verdict (AA) |
| --- | --- | ---: | --- |
| `primary-100` text on `primary-100` bg | original `PetListLite` eyebrow vs section bg | 1.00 | invisible, both themes |
| `primary-100` on `primary-700` | original section text/bg (dark) | 2.85 | fail |
| `primary-900` on `primary-100` | `/adopt` header (light, old olive) | 4.00 | fail (small text) |
| white on `primary-500` | default solid button (olive 2.62 / emerald 2.54) | ≈2.6 | fail (even large/UI) |
| white on `secondary-500` (amber) | solid CTA | 2.15 | fail — needed `!text-neutral-900` hack |
| `primary-600` on white | small uppercase eyebrow (olive 3.18 / emerald 3.77) | <4.5 | fail (small text) |
| `primary-700` on white (emerald) | suggested eyebrow token | 5.48 | pass |
| `neutral-50` on `neutral-950` | default dark body | 15.59 | pass |

Takeaways: never same-colour fg/bg; white-on-brand-500 buttons fail — fix via
per-color button text tokens in `app.config.ts`, not `!important` overrides;
small text needs darker token steps (600/700) in light mode. Dark mode passes
broadly (e.g. `primary-200` on `neutral-950` ≈ 12:1), so failures concentrate
in light mode and in brand-on-brand sections.

### F6 — Validation was build-centric, never visual
`nuxt build` + SSR/CSS greps + `eslint` ran clean, but the dev server was never
started, no viewport was rendered, dark mode was never toggled, and the repo’s
own `npm run lint` (eslint + prettier format) was not run. Builds cannot catch
contrast, spacing, overflow, hydration, or accessibility regressions.

### F7 — Existing pipelines/utilities were bypassed or duplicated
The hero previously consumed the centralized image pipeline
(`app/utils/hero.ts` ← `pg_background_urls`, `useOptimizeImage`,
`BackgroundImageWrapper`); the redesign replaced it with a plain `NuxtImg` and
an inline remote URL embedded in the component. Icons went through `BaseIcon`
with unocss `i-*` names — safe only because reused icon names already present in
the codebase (new names can silently miss the iconify set). Many arbitrary
utilities were introduced (`rounded-[2.5rem]`, `text-[11px]`,
`tracking-[0.18em]`, `aspect-[4/3]`, `h-[30rem]`…) that bypass the theme/design
panel, because the theme does not define radii/type/spacing scales.

### F8 — Ambiguity was implemented instead of clarified; pushes were direct
"A real vue designer image" was interpreted literally (the repo’s shipped brand
artwork) — the wrong creative call, two push cycles, then a revert. Each change
was committed and pushed straight to `origin/main` without a branch/PR or a
visual check. Ambiguous creative direction should be confirmed first.

## 3. Recommended durable rules (candidate `AGENTS.md` content)

1. **Read `README.md` first.** Map stack, scripts, routes, components, theme
   files and shared-component consumers (`grep`) before any edit.
2. **Colours only from theme tokens.** Never hard-code hex in components;
   `primary/secondary/tertiary` + 50–950 scales only. Keep `tokens.mjs` and
   `tokens.cjs` mirrored. Ignore `projectdb.pgml` as a source of truth.
3. **Token changes are global.** Before touching `pg_colors`, enumerate usages;
   audit **every page in light and dark mode**; check dynamic utilities and the
   safelist in `app/utils/colors.ts`.
4. **Brand assets sync checklist** on any palette change: paw logos in
   `TheLogo.vue`/`TheFooter.vue`/`OgCard.vue`, favicons, social images.
5. **Shared components:** list all consumers first; prefer a new page-specific
   component over modifying shared ones; verify every consumer after changes.
6. **Contrast is a release gate.** Verify WCAG AA (4.5:1 text, 3:1 large/UI) for
   both schemes; avoid same-colour fg/bg and white-on-`{color}-500`; prefer
   `600/700` steps for small light-mode text; fix button text via
   `app.config.ts` tokens — no `!important` overrides.
7. **Validate like the repo expects:** run dev server and check every changed
   route + dark toggle; then `npm run lint` (eslint+prettier), then
   `npm run build`/`generate`. Consider enabling `@nuxtjs/html-validator` /
   axe for a11y in CI.
8. **Reuse the existing pipeline:** `BaseButton`, `BaseIcon` (only icon names
   already present), `useOptimizeImage`/`BackgroundImageWrapper`,
   `utils/hero.ts` for hero imagery. Prefer theme-extended scales over
   arbitrary utilities; if arbitrary values are allowed, document why.
9. **Ask before implementing ambiguous creative direction**; ship small,
   focused commits; validate before pushing; never push to a shared remote
   without explicit instruction from the user.

---

*Kept as a working reference only — `AGENTS.md` has deliberately **not** been
created yet.*
