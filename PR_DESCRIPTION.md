# Agent-ready Happy Paws: validated, contrast-safe homepage redesign

> Prepared with the repository's `prepare-pr` skill.
> Base: `f41a118` (original repository state) · Head: `4b23188` (main) · Net: 17 files, +921/−306.

## Summary / What changed

This PR tells the complete story of how this repository was redesigned twice by an AI
agent — and what was learned between the two attempts. The first attempt was reverted
after a self-review exposed process gaps; the repository was then made "agent-ready"
with durable instructions and tooling; the second attempt was implemented under those
rules and shipped alongside an app-wide, contrast-validated colour refresh.

Relative to the original repository, the net change is:

- **Agent readiness (new):** `AGENTS.md` (durable rules for AI agents), `AI_AGENT_REVIEW.md`
  (the failure-mode review behind those rules), and a portable Agent Plugins 1.0.0 package
  (`.agent-plugins/pr-tools/`) containing a reusable `prepare-pr` skill.
- **Homepage redesign:** split hero with a real pet photo, refreshed "Get Involved" tiles,
  "Our Mission", featured-pets and impact sections; cleaner typography, spacing and hierarchy;
  page purpose and content order preserved.
- **Refreshed, contrast-safe palette (app-wide):** theme tokens moved from muted olive to
  deep emerald (`primary`) / terracotta (`secondary`) / rose (`tertiary`), in both mirrored
  token files, with every shade pair verified against WCAG AA in light and dark modes.
- **Cross-page consistency fixes:** shared `PetCard` modernized (audited for both consumers,
  `/` and `/adopt`), dark-mode text on `ArticleListPreview` fixed, hero photo centralized in
  `app/utils/hero.ts`, obsolete `MiniDivider` removed.

## Why

The arc: **original repository → first AI redesign → problems identified → repository
agentization → second AI redesign → validation.**

1. **Original state** (`f41a118`): the Pinegrow/Vue Designer Nuxt + Tailwind starter with
   olive accents and a photo-banner hero.
2. **First AI redesign** (`6c52c00`, `00e63d1`): modern layout, refreshed palette, hero
   imagery — committed and pushed to `main` without a branch or visual verification.
3. **Problems identified** (`b3d68f3` + `AI_AGENT_REVIEW.md`): the review found the first
   attempt violated the project's own conventions — README/consumer mapping happened after
   the work; the palette is a *global* design-system token that restyled every page while
   only the homepage was reviewed; the shared `PetCard` was mutated without auditing `/adopt`;
   dark-mode contrast bugs were neither caught nor fixed (an invisible same-colour eyebrow,
   white text on vivid `-500` buttons at ~2.2–2.6:1, low-contrast band text); validation was
   build-only (no dev server, no dark-mode or contrast checks); and ambiguous direction was
   implemented instead of clarified. The design work was therefore reverted.
4. **Repository agentization** (`1bece74`, `4b23188`): the findings were distilled into
   `AGENTS.md` — orientation-first, token-only colours, light+dark variants mandatory, a
   WCAG contrast release gate, shared-component audit rules, a defined validation pipeline,
   and "ask before pushing". A portable `prepare-pr` skill was added so future sessions draft
   PRs from the same discipline.
5. **Second AI redesign** (`f324750`): the same design goal, executed under those rules —
   audited token change, measured contrast, verified consumers, full validation. No
   follow-up revert was needed.

Making the repository agent-ready directly improved the AI-assisted development process:
the second attempt avoided every failure class of the first because the rules were loadable
at the start of the session instead of discovered after the fact (see "How agent-readiness
improved AI-assisted development").

## Implementation decisions

- **Two-attempt history kept.** The revert commit (`b3d68f3`) is intentionally part of the
  history so the failure → review → rules story is auditable, and `AI_AGENT_REVIEW.md` is
  retained as the rationale.
- **Palette chosen by a contrast gate, not aesthetics alone.** Candidate scales were scored
  numerically (WCAG ratio) for every pairing the codebase actually uses, in both themes,
  before tokens were committed — e.g. `primary-500` was darkened so white-on-500 reaches
  4.71:1, and small-text accents use darker steps (`600/700`) in light mode. This fixed the
  "white text on `{color}-500`" problem at the token level instead of via `!important` hacks.
- **Token files mirrored.** `tokens.mjs` and `tokens.cjs` were updated together (they must
  never drift); `projectdb.pgml` was left untouched (stale design-panel snapshot).
- **Shared-component discipline.** `PetCard` (used by the homepage and `/adopt`) was
  modernized only after confirming both consumers and re-checking contrast; page-scoped
  homepage sections were redesigned freely; `ArticleListPreview`'s dark-mode band text was
  corrected as part of the palette audit.
- **Centralized hero image.** The hero photo now comes from `utils/hero.ts` (theme token
  source) rather than a URL hard-coded in the component.
- **Copy and content preserved.** Page purpose, section order and data sources are kept;
  only placeholder Lorem copy was replaced with purpose-consistent text.
- **Small, focused plugin.** The Agent Plugins package contains a single skill and nothing
  else; `AGENTS.md` references `README.md` instead of duplicating it.

## Validation performed

Only steps actually performed are listed (repository guidance: `AGENTS.md`, `README.md`):

- **Lint:** `npx eslint` on all changed `.vue`/`.ts` files → 0 errors.
- **Build:** `npm run build` → exit 0 (repeated across iterations).
- **Runtime smoke (dev server):** HTTP 200 for `/`, `/adopt`, `/adopt/1`, `/volunteer`,
  `/articles`, `/blog`, `/quick-start/*`; homepage SSR contains all new sections and the
  pet hero photo.
- **Contrast:** WCAG AA ratios computed (node) for every new and retained pairing in light
  and dark modes — all text ≥ 4.5:1, UI/icons ≥ 3:1. Examples: white on `primary-500`
  4.71:1; `primary-600` on white 5.81:1; `primary-200` on `neutral-950` 14.49:1;
  white on `secondary-500` 5.00:1.
- **CSS output:** compiled stylesheet contains the new palette hex values and none of the
  old olive tokens.
- **Plugin validation:** `plugin.json` matches the Agent Plugins 1.0.0 `$schema` with a
  valid name; `SKILL.md` passes Agent Skills frontmatter checks.

**Not verified:** no human visual review in a browser (layout is verified via SSR output and
contrast math); dark-mode styling is verified statically (`dark:` variants present on every
new element) but not visually toggled; remote Unsplash imagery requires network at runtime.

## Before / After

| Aspect | Before (original) | After |
| --- | --- | --- |
| Hero | Full-bleed photo banner, white text overlay | Split hero: copy column + framed real pet photo with floating badges, gradient accent headline, trust indicators |
| Palette | Muted olive; white on `-500` ≈ 2.2–2.6:1; small eyebrows ≈ 3.2:1 | Emerald / terracotta / rose tokens; every used pair ≥ 4.5:1 text, ≥ 3:1 UI (both themes) |
| Dark mode | Invisible same-colour eyebrow (1:1) and low-contrast band text | All elements carry `dark:` variants; band/text pairs verified |
| Buttons/CTA | White text on vivid `-500` (fails AA) | Contrast-safe defaults; no `!important` overrides |
| Pet cards | Shared `PetCard` centre-crop card (homepage + `/adopt`) | Modernized shared card (photo header, sex/age chip, hover lift) audited for both consumers |
| Articles | Dark-mode text on the `primary` band illegible | Fixed (white on `primary-500`, 4.71:1) |
| Hero image | URL from tokens, consumed via background wrapper | Centralized in `utils/hero.ts`, rendered as framed photo |
| Repo guidance for agents | None | `AGENTS.md` + `AI_AGENT_REVIEW.md` |
| PR tooling | None | Agent Plugins `pr-tools` package with `prepare-pr` skill |

## How agent-readiness improved AI-assisted development

- **Findings became loadable rules.** The first redesign's review (`AI_AGENT_REVIEW.md`,
  F1–F8) was distilled into `AGENTS.md`, so the next agent session started with the
  conventions instead of rediscovering them mid-task.
- **The second attempt demonstrably avoided the first's failure classes:** the palette
  change was audited app-wide in both themes before landing; `PetCard` consumers were
  checked before mutation; the hero image stayed in its centralized module; and validation
  included lint + build + dev-server smoke + numeric contrast checks — not just a build.
- **Net effect:** the first AI redesign required a full revert and two extra push cycles;
  the second shipped without follow-up fixes, with every colour decision backed by a
  measurable contrast value.
- **PR time is covered too:** the bundled `prepare-pr` skill inspects the actual branch/diff
  and repository guidance, then drafts PRs structured around what changed, why, decisions,
  validation, and before/after — so AI-produced PRs carry evidence rather than claims.

## Notes

Commit mapping for the arc: `f41a118` (original) → `6c52c00`+`00e63d1` (first redesign) →
`b3d68f3` (revert + review) → `1bece74`+`4b23188` (agentization) → `f324750` (second
redesign). The work currently lives on `main`; to open an actual PR, cut a branch at HEAD
and target it at this base or the upstream `Pinegrow/happy-paws-with-nuxt-tailwindcss`.
