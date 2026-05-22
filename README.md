# Sanak — AI Assistant for Indonesian MSMEs

> An AI family assistant for 60 million Indonesian MSMEs.
> Voice-first. Accessibility-first. Bilingual. Built for the people technology has been leaving behind.

🌐 **Live demo:** https://gamingsipol-svg.github.io/Sanak-AI-Assistant-for-Indonesian-MSMEs/
🌍 **Languages:** English · Bahasa Indonesia · 中文

---

## What is Sanak?

**Sanak** (Indonesian for *kin / relative*) is an AI assistant designed from the ground up for the people most modern AI tools forget — the corner-shop owner, the elderly parent, the visually-impaired user. It runs on WhatsApp and Telegram, speaks back in voice, and remembers your business context across conversations.

It is not enterprise SaaS. It is not a developer tool. It is a digital family assistant for 60 million Indonesian micro, small, and medium enterprises (MSMEs) and the 4 million Indonesians living with visual impairment.

---

## Why this exists

Today's AI tools are built for developers and English-speaking professionals. The reality on the ground in Indonesia:

- **Language barrier.** Most LLMs lose nuance in Bahasa Indonesia, miss Javanese / Sundanese / Minang dialect entirely, and treat Indonesian as a translation problem rather than a primary modality.
- **Interface barrier.** Typing on a phone is a barrier for elderly users, low-literacy users, and the visually impaired. Voice should be the primary interface, not an afterthought.
- **Channel barrier.** Asking a 50-year-old warung owner to "open the app" is unrealistic. WhatsApp is already on every phone — that's where AI needs to live.
- **Cost barrier.** A US$20/month AI tool is roughly 10–40% of an average warung's monthly margin. Inference must be cheap, efficient, and tier-aware.

Sanak addresses all four directly. Every feature on the landing page maps to one of four pillars: **Inclusion**, **Intelligence**, **Foundation**, **Trust**.

---

## Four pillars

| Pillar | Focus | What it includes |
|---|---|---|
| **01 Inclusion** | Designed first for the people technology forgot | Voice-first interface · screen-reader compatibility · plain language · high contrast & 44px hit targets · 3G/EDGE optimization · multi-dialect NLU |
| **02 Intelligence** | A real agent — not a glorified chatbot | 8 built-in tools · multi-step reasoning trace · voice + vision + document input · 3-tier memory · live interactive demo |
| **03 Foundation** | Open-source, transparent, lean by design | Open-source LLM (flagship + cost tier) · bilingual STT + TTS · WhatsApp + Telegram channels · agent framework · edge runtime + cloud orchestration |
| **04 Trust** | Safe by design, not by accident | Content moderation · financial-advice guardrails · E2E memory encryption · prompt-injection sandbox · user-confirmation gates · tool-call audit trail |

---

## What Sanak can do

Six everyday scenarios, all designed from field interviews with MSME owners, visually-impaired community members, and digital-literacy classes for the elderly:

- **Daily bookkeeping by voice.** "Hari ini modal lima puluh ribu" → structured ledger entry, no app, no spreadsheet.
- **Captions that actually sell.** Take a photo, get three platform-aware caption variants for TikTok / Shopee / Instagram.
- **Margin & sensible pricing.** Speak your costs, hear back your breakeven volume and a sensible selling price — in plain language.
- **Quick customer reply templates.** Compose tone-matched WhatsApp replies, always shown as draft before sending.
- **Companion for visually-impaired users.** Scene narration, document reading, navigation prompts.
- **Bahasa Indonesia tutor for elderly.** Patient, plain-language explanations of forms, bills, and government documents.

---

## Architecture (one-message lifecycle)

```
[User input] ─▶ [Channel layer] ─▶ [Edge runtime] ─▶ [Agent core] ─▶ [Response]
   voice ·         WhatsApp ·         cache ·          planner ·         TTS ·
   photo ·         Telegram           retry queue ·    orchestrator ·    text ·
   document                           weak-signal      recovery          structured
                                                          │
                              ┌───────────────────────────┼───────────────────────────┐
                              ▼                           ▼                           ▼
                       [Tool registry]              [Memory layer]              [Model tier]
                       8 sandboxed tools            3-tier · E2E encrypted     small · flagship · vision
```

Average end-to-end latency under 3 seconds. Cost-efficient small model handles ~80% of requests; flagship LLM is escalated only for complex reasoning or vision tasks.

### Layers

1. **Channel layer.** WhatsApp Business API + Telegram Bot API. No install required.
2. **Edge runtime.** Local cache, retry queue, weak-signal handling. Voice cached for offline replay.
3. **Agent core.** Orchestrator + planner. Decomposes intent, calls tools, recovers from errors.
4. **Tool registry.** 8 callable tools — bookkeeping, captions, vision, document parse, proactive notifications. Each tool sandboxed with structured I/O.
5. **Memory layer.** Three tiers — working, episodic, semantic. End-to-end encrypted per user.
6. **Model tier.** Cost-efficient small model first; escalates only when needed.

---

## Built-in tools

| Tool | Purpose |
|---|---|
| `read_ledger` | Query encrypted bookkeeping store with date range, filters, aggregations |
| `log_transaction` | Parse natural-language entry into structured row |
| `calc_margin` | Cost-basis breakdown, breakeven volume, suggested selling price |
| `describe_image` | Multimodal vision — photo to caption, scan to summary, scene narration |
| `draft_caption` | Platform-aware copy for Shopee / TikTok / Instagram |
| `compose_reply` | Customer message replies in matching tone, awaits user approval |
| `read_document` | Parse PDFs, scans, screenshots — bills, invoices, government forms |
| `proactive_notify` | Stock-low notifications, weekly summary push, payment-due reminders |

---

## Safety & guardrails

Eight hard constraints — not a wishlist.

- **Content moderation** — Indonesian-context-aware filtering at input and output.
- **Conservative on advice** — no financial / legal / medical recommendations. Hard refusal with redirect to qualified human.
- **End-to-end memory encryption** — per-user keys before data leaves device. Server cannot read business data.
- **Cited tool outputs, confidence labels** — numbers are never invented; uncertainty is stated explicitly.
- **Prompt-injection sandbox** — strict schema validation; customer messages quoted, never interpreted as commands.
- **User confirmation before send** — outbound actions always shown as draft, never auto-sent.
- **Tool-call audit trail** — every call logged client-side, retroactively revocable.
- **Honest "I can't help with that"** — refusal with a next step, never an invented workaround.

---

## Roadmap (next 12 months)

| Phase | Window | Goal |
|---|---|---|
| MVP & Closed Pilot | Q3 2026 | Hand-built core agent, single pilot cohort, manual onboarding |
| Open Pilot — 100 MSMEs | Q4 2026 | Self-serve onboarding, tracked metrics, accessibility audit |
| Public Beta — 1,000 users | Q1 2027 | Multi-dialect coverage, payment integration, NGO partnerships |
| Scale-up — Regional | Q2 2027 | Cross-province expansion, advocacy partnerships, sustainability plan |

---

## Tech stack

- **Frontend (this landing):** vanilla HTML / CSS / JS — no framework, sub-100KB total payload, fully accessible (WCAG AA, ARIA, semantic, prefers-reduced-motion)
- **Internationalization:** custom lightweight `data-i18n` attribute system, three language packs merged at runtime
- **Interactive demo:** scripted agent traces in pure JS, no external API calls, three-language replay
- **Typography:** Fraunces (display) · Inter (body) · Noto Sans SC (Chinese)
- **Hosting:** static site on GitHub Pages

This repository is the **public landing page** for the project. The agent runtime, tool registry, and memory layer described above are part of the broader Sanak system architecture, not yet open-sourced as we work through the closed-pilot phase.

---

## Local development

```bash
git clone https://github.com/gamingsipol-svg/Sanak-AI-Assistant-for-Indonesian-MSMEs.git
cd Sanak-AI-Assistant-for-Indonesian-MSMEs/landing
python3 -m http.server 8000
# Open http://localhost:8000
```

---

## Project structure

```
landing/
├── index.html              # Main landing page (12 sections)
├── i18n.js                 # Base translations: hero, scale, problem, accessibility, how, use cases, stack, roadmap, footer
├── i18n-extra.js           # Translations for: agent, multimodal, memory, demo
├── i18n-extra-2.js         # Translations for: pillars, architecture, safety
├── demo.js                 # Interactive demo runtime — 4 scenarios × 3 languages
└── assets/
    ├── logo.svg            # Brand mark — interlocking circles (kin/connection)
    ├── logo-white.svg      # Inverse variant
    ├── favicon.svg / .ico  # Browser tab icon
    ├── apple-touch-icon.*  # iOS home-screen icon
    ├── icon-192.png        # PWA icon (small)
    ├── icon-512.png        # PWA icon (large)
    └── og-image.png/svg    # Social share card (1200×630)
```

---

## License

This landing page is distributed under the MIT License. See [`LICENSE`](LICENSE).

The Sanak product, brand, and broader system are owned by the project team. Contributions, partnership inquiries, and pilot signup go through the contact link on the landing page.

---

## Contact

If you are an MSME owner, accessibility advocate, NGO, government partner, or grant program interested in the closed pilot or general collaboration — open an issue or reach out via the landing page.
