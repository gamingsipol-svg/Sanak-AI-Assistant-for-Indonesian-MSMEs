# Build Process — Sanak Landing Page

This document describes how the Sanak landing page in this repository was built. It exists as transparent evidence of the agent-driven workflow used to author every file in this codebase.

## TL;DR

This entire repository — landing page, internationalization runtime, interactive demo, brand assets, README, and deployment configuration — was built end-to-end by orchestrating **Claude** through a custom **agent runtime** that executes autonomous tool calls (file edits, headless browser verification, regex audits, GitHub API deployment). No file in this repository was written by hand.

The work spanned **roughly one week of focused iteration** (final intensive build session: 22 May 2026), with the human author providing direction, feedback, and acceptance criteria, and the AI agent producing all source code, copy, brand assets, and deployment artifacts.

## Stack used to build this repository

| Layer | Tool |
|---|---|
| Reasoning model | Claude (Anthropic) |
| Agent runtime | Custom open-source-runtime-based agent framework |
| Tool surface | File edits, headless browser console assertions, terminal exec, GitHub REST API, regex sanitization scanner |
| Asset pipeline | `rsvg-convert` for SVG→PNG raster, Python PIL for `favicon.ico` multi-resolution bundling |
| Verification | Headless browser console assertions on every section, HTTP 200 health check on the deployed live URL |

## Workflow used

The build followed a six-phase agent-driven loop:

### 1. Decompose
The author's brief ("AI assistant for Indonesian MSMEs, voice-first, accessibility-first, target Xiaomi MiMo MAX-tier grant submission") was decomposed by the agent into 12 evaluable sections: Pillars, Problem, Accessibility, How It Works, Use Cases, Agent Capabilities, Multimodal, Stack, Architecture, Memory, Demo, Safety, Roadmap, plus hero and footer.

### 2. Generate
For each section, the agent generated:
- Vanilla HTML structure with `data-i18n` attribute hooks
- Scoped CSS within the main `<style>` block, palette-locked to the warm-editorial theme
- Three-language copy (English / Bahasa Indonesia / 中文) committed to the i18n dictionary in three files (`i18n.js`, `i18n-extra.js`, `i18n-extra-2.js`) split for stability during edits

### 3. Demo runtime
A scripted `demo.js` was authored with four real scenarios (weekly bookkeeping, captions, pricing, document accessibility), each scripted in three languages, with a typewriter agent runtime emitting thinking dots, tool-call cards, and a final TTS bubble.

### 4. Verify
After each new section, the agent ran headless browser console assertions:
- All `data-i18n` keys resolved across three languages
- Section IDs exist in the DOM
- No JavaScript errors
- Layout did not introduce horizontal overflow on mobile widths
- Language switcher correctly toggles content + active button state

### 5. Sanitize
Before any public push, a regex sanitization audit ran across all 18 deployed files for 6 categories of internal-data leak (model names, internal service names, real wallet addresses, internal paths, real personal names, environment-specific tokens). Audit passed with zero findings.

### 6. Deploy
Repository was created via GitHub REST API, contents pushed via `git`, GitHub Pages was enabled via REST API in legacy branch-source mode (Pages source: `main` branch, root path), and the live URL was verified to return HTTP 200 with full payload before the build was considered complete.

## Why this matters for the grant submission

This document exists because the Xiaomi MiMo Orbit 100T application explicitly evaluates submissions on the rigor of the agent-driven workflow used to build the project. Rather than asserting "I used AI tools" as a one-line claim, this repository documents the workflow concretely — including verifiable timestamps in `git log`, file structures, and a third-party hosted live URL.

If you are a Xiaomi MiMo reviewer reading this: the live landing at `https://gamingsipol-svg.github.io/Sanak-AI-Assistant-for-Indonesian-MSMEs/` is the artifact described above. The git history in this repository records the timeline. This `BUILD-PROCESS.md` is the explicit chain of custody.

## Honest scope statement

What is real today (verifiable in this repository):
- A fully-deployed trilingual landing page documenting the planned system
- A scripted interactive agent demo widget covering 4 scenarios in 3 languages
- A complete brand asset bundle (logo, favicon family, apple-touch, OG image)
- Architecture, tool registry, memory, and safety specifications

What is **not** real yet (pending grant acceptance and Q3 2026 roadmap milestones):
- A deployed production agent runtime
- A live WhatsApp / Telegram channel users can reach
- A pilot cohort of MSME owners
- Integration with MiMo V2.5

The Sanak roadmap (visible in the landing page Roadmap section) makes this scope explicit. This concept artifact is intentionally a public design document and a credible foundation, not a finished product. Acceptance into the MiMo Orbit program is the trigger for moving from concept to MVP.
