# AGENTS.md — Durable instructions for AI coding agents

Repository: **Happy Paws** — a Nuxt pet-adoption demo (Nuxt 3 SSR/SSG, Tailwind CSS,
Pinegrow/Vue Designer). These rules keep agent changes aligned with the intended
stack, conventions and quality expectations. They distill the findings in
`AI_AGENT_REVIEW.md` (F1–F8) and complement — never replace — `README.md`.

---

## 1. Orientation first

- **Read `README.md` before any change** — it is the authoritative source for the
  stack, npm scripts, module list and coding style. This file does not repeat it.
- Read `AI_AGENT_REVIEW.md` for the concrete pitfalls found in a past redesign.
- Before editing anything, map the impact: which routes (`app/pages/**`), which
  shared components, and where theme tokens are used (`grep`) will be affected.

## 2. Repository quick map

- `app/pages/*` — routes; homepage composes page-scoped section components
  (`HeroSection`, `CallToAction`, `OurMission`, `PetListLite`, `StatsSection`).
- `app/components/**` — auto-imported; `The*` = layout chrome, section components
  are homepage-only unless proven otherwise.
- `app-nuxt-tailwindcss-layer/` — extended layer holding `NavBar`, `nav/*`, etc.
  Project components override layer components of the same name.
- `themes/pg-tailwindcss/tokens.{mjs,cjs}` — **design tokens = source of truth**
  (colors/fonts/backgrounds). `tokens.cjs` mirrors `tokens.mjs`; keep both in sync
  inside the Pinegrow markers. `projectdb.pgml` is a stale design-panel snapshot —
  never treat it as source of truth or edit it.
- `app/site.ts` — central site meta & navs; `app/utils/hero.ts` — hero image URL;
  `server/api/adopt/*` + `db.json` — pet data; `app/content/blog/*` — markdown blog.
- `tailwind.config.ts` + `app/utils/colors.ts` derive utilities (incl. dynamic
  `BaseButton` variants and their safelist) from the tokens; `app/app.config.ts`
  configures the `ui.button` presets (solid/outline/ghost, text colors).

## 3. Design & styling rules

1. **Colors come from theme palettes only** (`primary`/`secondary`/`tertiary`,
   50–950 scales; built-ins like `neutral`/`gray`). No hard-coded hex in
   components/templates. To change palettes edit **both** token files, then audit
   every page — token edits are app-wide, not page-scoped.
2. **Always provide light + dark styles** (`dark:` variants). The app toggles via
   `composables/dark.ts` (`isDark`/`toggleDark`, class strategy). A missing
   `dark:` counterpart is a bug.
3. **Contrast is a release gate (WCAG AA: 4.5:1 text, 3:1 large/UI) in both
   modes.** Never use the same color for foreground and background; never put
   white text on `{color}-500` brand buttons (≈2.2–2.6:1). Fix contrast in
   `app/app.config.ts` button presets or by using darker token steps (`600/700`)
   for small light-mode text — **no `!important` overrides**.
4. Prefer theme/utility scales over arbitrary values (`rounded-[…]`, `text-[…]`,
   `tracking-[…]`, `aspect-[4/3]`). If a scale is genuinely missing, extend the
   theme tokens instead of sprinkling arbitrary values.
5. Use shared primitives: `BaseButton`, `BaseIcon`, `DarkModeSwitch`,
   `BackgroundImageWrapper`. Icons are unocss `i-{collection}-{icon}` strings —
   only use icon names already present in the codebase or verified in
   `@iconify/json` (loaded set), to avoid silent missing icons.
6. Global edits (tokens, `BaseButton`, `PetCard`, layout, `site.ts`) affect all
   routes. Audit consumers first and check every affected page in **both** themes.

## 4. Component & content conventions

- Write components with Composition API `<script setup lang="ts">` (plain JS is
  allowed where the file doesn’t use TS). Formatting is Prettier
  (`.prettierrc.mjs`: no semicolons, single quotes, 2-space).
- **Shared components:** restyle `PetCard`-style shared components only after
  listing consumers (e.g. homepage + `/adopt`); otherwise introduce a
  page-specific variant rather than mutating the shared one.
- **Images:** `NuxtImg` with `alt`. The hero uses the centralized
  `utils/hero.ts` + `useOptimizeImage()` pipeline; other sections keep their own
  Unsplash URLs (existing pattern). Nuxt Image runs with `provider: 'none'` —
  URLs must be directly loadable and local assets live in `public/`.
- **Content:** pages set `definePageMeta` (`title`, `description`, `icon`,
  `navOrder`); navs live in `site.ts`. When copy is placeholder/lorem, replace it
  with purpose-consistent text or ask — don’t silently drop meaning.

## 5. Validation before finishing

Run in this order:

1. `npx eslint` on changed files (prefer focused lint over the repo-wide
   `npm run lint`, which also auto-formats via Prettier and rewrites files).
2. `npm run build` (or `npm run generate`) and fix compile errors.
3. Start `npm run dev` and smoke-test every changed route **plus the dark-mode
   toggle** (curl for SSR content is acceptable, but visually verify both
   schemes — screenshot or ask a human).
4. Re-check contrast of any new color/text pairing in both modes.

## 6. Working agreements

- **Ask before implementing ambiguous creative direction** (e.g. which image or
  theme to apply) instead of guessing.
- Keep commits small and scoped; commit messages short and imperative.
- Never push to the shared remote (`origin/main`) without an explicit
  instruction from the user; run validations first.
- Do not edit generated/vendor artifacts (`dist/`, `.nuxt/`, `node_modules/`,
  `projectdb.pgml`, Pinegrow-internal files).

## References

- `README.md` — authoritative stack/scripts/architecture documentation.
- `AI_AGENT_REVIEW.md` — rationale & failure-mode write-up behind these rules.
- `themes/pg-tailwindcss/tokens.mjs` (`.cjs`), `tailwind.config.ts`,
  `app/app.config.ts`, `app/utils/colors.ts` — design-system sources.
