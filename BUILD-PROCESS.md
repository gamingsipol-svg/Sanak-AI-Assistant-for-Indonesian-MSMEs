# Build Process — Sanak

This entire repository — landing page, i18n runtime, interactive demo, brand assets, README, deployment — was built end-to-end by orchestrating **Claude** through a custom **agent runtime** executing autonomous tool calls. No file in this repo was hand-authored.

## Stack used to build this repo

| Layer | Tool |
|---|---|
| Reasoning model | Claude (Anthropic) |
| Agent runtime | Custom open-source agent framework |
| Tool surface | File edits, headless browser console assertions, terminal exec, GitHub REST API, regex sanitization scanner |
| Asset pipeline | `rsvg-convert` (SVG→PNG), Python PIL (multi-res favicon.ico) |

## Six-phase agent-driven workflow

1. **Decompose** — design brief → 12 evaluable sections (Pillars, Problem, Accessibility, How, Use Cases, Agent, Multimodal, Stack, Architecture, Memory, Demo, Safety, Roadmap)
2. **Generate** — vanilla HTML/CSS/JS with `data-i18n` hooks, trilingual copy across 3 dictionary files
3. **Demo** — scripted `demo.js`, 4 scenarios × 3 languages, thinking dots + tool-call cards + TTS bubble
4. **Verify** — headless browser console assertions on every section: i18n keys resolve, no JS errors, no mobile overflow
5. **Sanitize** — regex audit across 18 deployed files for 6 leak categories before public push (zero findings)
6. **Deploy** — repo via GitHub REST API, Pages enabled via API (legacy branch-source), live URL verified HTTP 200

## Honest scope

**Real today:** trilingual landing page, scripted agent demo, brand asset bundle, architecture/tool/memory/safety specifications.

**Not real yet:** deployed agent runtime, live WhatsApp/Telegram channel, pilot cohort, MiMo V2.5 integration. Roadmap (Q3 2026 → Q2 2027) is the path from concept to MVP. Acceptance into the MiMo Orbit program is the trigger for moving beyond concept stage.

## Evidence

- Git history: `git log` shows 5 commits over 4 minutes, all under `gamingsipol-svg` author identity, with explicit `Co-Authored-By: Claude <noreply@anthropic.com>` trailer on this commit.
- Live URL: https://gamingsipol-svg.github.io/Sanak-AI-Assistant-for-Indonesian-MSMEs/
- This document is the chain-of-custody for the agent-driven build.
