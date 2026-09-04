---
name: prepare-pr
description: >-
  Inspect the current Git branch and its changes, then write a professional
  pull-request description covering what changed, why it changed, key
  implementation decisions, validation performed, and relevant before/after
  differences. Use when asked to draft, review, or improve a PR description
  for the current branch, or to summarize a branch's changes for review.
compatibility: Requires read access to the repository working tree and Git CLI (branch, log, diff).
---

# Prepare a pull-request description

Turn the current branch's changes into a clear, professional PR description. Work only with read-only Git inspection unless the user explicitly asks you to change Git state.

## 1. Gather repository context

1. Confirm the repository root and current branch (`git branch --show-current`).
2. Read the repository's own guidance first if present: `AGENTS.md`, `README.md`, `CONTRIBUTING.md`, and any PR template (for example `.github/PULL_REQUEST_TEMPLATE.md`). Follow their conventions, validation commands, and tone.
3. Determine the base branch to compare against: prefer the remote default branch (`main` or `master` from `git remote show origin`); fall back to `main`.

## 2. Inspect the changes

Collect everything needed to describe the change accurately:

- Commit list: `git log --oneline <base>..HEAD` (or `git log --oneline -n 10` when the branch point is unclear).
- Change overview: `git diff --stat <base>...HEAD`.
- File summary: `git diff --name-status <base>...HEAD`.
- Detailed diff when useful: `git diff <base>...HEAD` for a few representative files.
- Uncommitted work: run `git status --porcelain` and `git diff`; if present, describe it separately and label it as uncommitted.

Use the file paths, languages, and directory structure to infer what the change is about (for example, UI components, theme tokens, server routes, docs).

## 3. Write the PR description

Produce a ready-to-paste Markdown PR description. Keep it professional and concise; let evidence from the diff drive the content. Use this structure, omitting a section only when it truly does not apply:

### Summary / What changed
One or two sentences on the user-visible or behavioral outcome, followed by the concrete changes (grouped by area when the diff is large).

### Why
The problem or motivation behind the change. Cite user intent, issue/commit context, or repository guidance when available.

### Implementation decisions
Notable choices and trade-offs: architecture or component boundaries respected, existing patterns/composables used, shared vs. page-specific code, styling or token approach, and anything that looks surprising in the diff (with the reason).

### Validation performed
Only list steps actually performed (commands run, routes checked, build/lint/test outcomes). Do not fabricate validation. If the repository documents validation commands (e.g. lint, build, test), follow them and report the results; mark anything not yet verified as "not verified".

### Before / After
Relevant differences the reader can verify: behavior, UI/layout, theme/colors (mention light and dark mode when styling changed), API/contract, dependencies, or files added/removed/renamed. When visual changes are involved and screenshots are available or requested, note where they live.

### Notes / Test plan (optional)
Anything the reviewer should know or try (manual QA steps, rollback notes, follow-up work).

## 4. Output

- Output only the PR description body (no preamble or commentary) when the user wants it pasted.
- If the user asks to open or update a PR, apply this description through the available PR tooling; otherwise stop after drafting.
- If the branch contains unrelated or unreviewable changes (large generated files, secrets, unrelated refactors), flag them instead of silently omitting them.
