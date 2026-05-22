// Sanak — i18n extras part 2 (Pillars / Architecture / Safety)
// Merged into I18N before applyI18n runs.

(function() {
  if (typeof I18N === "undefined") return;

  const EXTRAS_2 = {
    en: {
      // Pillars overview
      "pillars.eyebrow": "Project pillars",
      "pillars.title": "Four pillars holding Sanak together.",
      "pillars.lead": "Every feature on this page maps to one of four pillars. Together they describe what we build, who we build for, and what we refuse to ship.",

      "pillars.p1.h": "Inclusion",
      "pillars.p1.d": "Designed first for the people technology has been leaving behind. Voice-first, plain language, weak-signal-friendly.",
      "pillars.p1.f1": "Voice-first interface",
      "pillars.p1.f2": "Screen-reader compatibility",
      "pillars.p1.f3": "Plain language tone",
      "pillars.p1.f4": "High contrast & 44px hit targets",
      "pillars.p1.f5": "3G/EDGE optimization",
      "pillars.p1.f6": "Multi-dialect NLU",

      "pillars.p2.h": "Intelligence",
      "pillars.p2.d": "A real agent — plan, call tools, observe, recover. Multimodal input, three-tier memory, every step traceable.",
      "pillars.p2.f1": "8 built-in tools",
      "pillars.p2.f2": "Multi-step reasoning trace",
      "pillars.p2.f3": "Voice + vision + document input",
      "pillars.p2.f4": "3-tier memory architecture",
      "pillars.p2.f5": "Live interactive demo",

      "pillars.p3.h": "Foundation",
      "pillars.p3.d": "Open-source first, transparent stack, multi-tier model strategy. Lean by design — small model first, escalate only when needed.",
      "pillars.p3.f1": "Open-source LLM (flagship + cost-tier)",
      "pillars.p3.f2": "Bilingual STT + TTS",
      "pillars.p3.f3": "WhatsApp + Telegram channels",
      "pillars.p3.f4": "Agent framework",
      "pillars.p3.f5": "Edge runtime + cloud orchestration",

      "pillars.p4.h": "Trust",
      "pillars.p4.d": "Safe by design. Content moderation, advice limits, end-to-end encryption, prompt-injection sandbox, full audit trail.",
      "pillars.p4.f1": "Content moderation",
      "pillars.p4.f2": "Financial advice guardrails",
      "pillars.p4.f3": "E2E memory encryption",
      "pillars.p4.f4": "Prompt-injection defense",
      "pillars.p4.f5": "User-confirmation gates",
      "pillars.p4.f6": "Tool-call audit trail",

      // Architecture
      "arch.eyebrow": "Architecture",
      "arch.title": "From spoken word to spoken answer.",
      "arch.lead": "How Sanak handles a single voice message — across channel, edge runtime, agent core, tools, memory, and back to voice. Average end-to-end latency under 3 seconds.",
      "arch.svg.user": "User input",
      "arch.svg.user.tags": "voice · photo · document",
      "arch.svg.channel": "Channel layer",
      "arch.svg.channel.sub": "WhatsApp · Telegram",
      "arch.svg.edge": "Edge runtime",
      "arch.svg.edge.sub": "cache · retry queue · weak-signal handling",
      "arch.svg.agent": "Agent core",
      "arch.svg.agent.sub": "planner · orchestrator · recovery",
      "arch.svg.tools": "Tool registry",
      "arch.svg.tools.sub": "8 sandboxed tools",
      "arch.svg.memory": "Memory layer",
      "arch.svg.memory.sub": "3-tier · E2E encrypted",
      "arch.svg.models": "Model tier",
      "arch.svg.models.sub": "small · flagship · vision",
      "arch.svg.output": "Response",
      "arch.svg.output.sub": "TTS · text · structured",

      "arch.l1.h": "Channel layer",
      "arch.l1.d": "WhatsApp Business API + Telegram Bot API. Message ingress and TTS output back to user, no install required.",
      "arch.l2.h": "Edge runtime",
      "arch.l2.d": "Local cache, retry queue, weak-signal handling. Voice cached for offline replay, transcripts queued when network drops.",
      "arch.l3.h": "Agent core",
      "arch.l3.d": "Orchestrator + planner. Decomposes intent, calls tools in sequence, recovers from errors, formats human-friendly response.",
      "arch.l4.h": "Tool registry",
      "arch.l4.d": "8 callable tools — bookkeeping, captions, vision, document parse, proactive notifications. Each tool sandboxed with structured I/O.",
      "arch.l5.h": "Memory layer",
      "arch.l5.d": "Three tiers — working, episodic, semantic. End-to-end encrypted per user. No cross-user training data exposure.",
      "arch.l6.h": "Model tier",
      "arch.l6.d": "Cost-efficient small model handles 80% of requests. Escalates to flagship LLM only for complex reasoning or vision tasks.",

      // Safety & Guardrails
      "safety.eyebrow": "Safety & guardrails",
      "safety.title": "Safe by design — not by accident.",
      "safety.lead": "An assistant that reaches the elderly, the visually impaired, and small-margin businesses must be careful by default. Every guardrail below is a hard constraint, not a wishlist.",

      "safety.c1.tag": "Content",
      "safety.c1.h": "Content moderation",
      "safety.c1.d": "Hate speech, NSFW, harmful instructions, and harassment are filtered at input and output. Indonesian-context-aware — local slurs and dog-whistles are caught alongside English.",

      "safety.c2.tag": "Advice",
      "safety.c2.h": "Conservative on financial / legal / medical",
      "safety.c2.d": "No investment recommendations, no legal opinions, no medical diagnoses. Sanak helps with bookkeeping and pricing, not \"should I take this loan.\" Hard refusal with redirect to qualified human.",

      "safety.c3.tag": "Privacy",
      "safety.c3.h": "End-to-end memory encryption",
      "safety.c3.d": "User memory — transactions, customer notes, business context — is encrypted with per-user keys before leaving the device. The server cannot read business data, even if compromised.",

      "safety.c4.tag": "Hallucination",
      "safety.c4.h": "Cited tool outputs, confidence labels",
      "safety.c4.d": "When Sanak gives a number, the source tool call is shown in the audit trail. Uncertain answers carry an explicit \"I'm not sure\" prefix. Numbers are never invented.",

      "safety.c5.tag": "Injection",
      "safety.c5.h": "Prompt-injection sandbox",
      "safety.c5.d": "Tool inputs are validated against a strict schema. Customer messages are quoted, not interpreted as commands. A customer typing \"ignore previous instructions\" cannot make Sanak send their data elsewhere.",

      "safety.c6.tag": "Confirmation",
      "safety.c6.h": "User confirmation before send",
      "safety.c6.d": "Outbound actions — replying to customers, sending invoices, posting to social — always require explicit user confirmation. Drafts shown in plain language, never auto-sent.",

      "safety.c7.tag": "Audit",
      "safety.c7.h": "Tool-call audit trail",
      "safety.c7.d": "Every tool call is logged client-side with timestamp, inputs, and outputs. Users can review their full history and revoke specific actions retroactively.",

      "safety.c8.tag": "Refusal",
      "safety.c8.h": "Honest \"I can't help with that\"",
      "safety.c8.d": "When Sanak hits its limits, it says so plainly and suggests a next step — human contact, retry phrasing, alternative tool. Never invents a workaround.",

      // Nav additions
      "nav.pillars": "Pillars",
      "nav.architecture": "Architecture",
      "nav.safety": "Safety",
    },

    id: {
      // Pillars
      "pillars.eyebrow": "Pilar proyek",
      "pillars.title": "Empat pilar yang menyatukan Sanak.",
      "pillars.lead": "Setiap fitur di halaman ini terpetakan ke salah satu dari empat pilar. Bersama-sama mereka menggambarkan apa yang kami bangun, untuk siapa, dan apa yang kami tolak untuk dirilis.",

      "pillars.p1.h": "Inklusi",
      "pillars.p1.d": "Dirancang untuk orang-orang yang selama ini dilewati teknologi. Voice-first, bahasa sederhana, ramah sinyal lemah.",
      "pillars.p1.f1": "Antarmuka voice-first",
      "pillars.p1.f2": "Kompatibel screen reader",
      "pillars.p1.f3": "Bahasa sederhana, bukan jargon",
      "pillars.p1.f4": "Kontras tinggi & target sentuh 44px",
      "pillars.p1.f5": "Optimasi 3G/EDGE",
      "pillars.p1.f6": "NLU multi-dialek",

      "pillars.p2.h": "Kecerdasan",
      "pillars.p2.d": "Agen sungguhan — merencanakan, memanggil tools, mengamati, pulih dari kesalahan. Input multimodal, memori tiga lapis, setiap langkah bisa ditelusuri.",
      "pillars.p2.f1": "8 built-in tools",
      "pillars.p2.f2": "Reasoning trace multi-langkah",
      "pillars.p2.f3": "Input suara + visi + dokumen",
      "pillars.p2.f4": "Arsitektur memori 3-lapis",
      "pillars.p2.f5": "Demo interaktif live",

      "pillars.p3.h": "Fondasi",
      "pillars.p3.d": "Open-source first, stack transparan, strategi model bertingkat. Ramping by design — model kecil dulu, eskalasi hanya kalau perlu.",
      "pillars.p3.f1": "LLM open-source (flagship + cost-tier)",
      "pillars.p3.f2": "STT + TTS bilingual",
      "pillars.p3.f3": "Channel WhatsApp + Telegram",
      "pillars.p3.f4": "Framework agen",
      "pillars.p3.f5": "Edge runtime + orchestration cloud",

      "pillars.p4.h": "Kepercayaan",
      "pillars.p4.d": "Aman by design. Moderasi konten, batasan advice, enkripsi end-to-end, sandbox prompt injection, audit trail penuh.",
      "pillars.p4.f1": "Moderasi konten",
      "pillars.p4.f2": "Guardrail saran finansial",
      "pillars.p4.f3": "Enkripsi memori E2E",
      "pillars.p4.f4": "Pertahanan prompt-injection",
      "pillars.p4.f5": "Konfirmasi user sebelum kirim",
      "pillars.p4.f6": "Audit trail tool-call",

      // Architecture
      "arch.eyebrow": "Arsitektur",
      "arch.title": "Dari ucapan ke jawaban suara.",
      "arch.lead": "Bagaimana Sanak menangani satu pesan suara — melalui channel, edge runtime, agen inti, tools, memori, dan kembali ke suara. Latensi end-to-end rata-rata di bawah 3 detik.",
      "arch.svg.user": "Input pengguna",
      "arch.svg.user.tags": "suara · foto · dokumen",
      "arch.svg.channel": "Layer channel",
      "arch.svg.channel.sub": "WhatsApp · Telegram",
      "arch.svg.edge": "Edge runtime",
      "arch.svg.edge.sub": "cache · antrian retry · sinyal lemah",
      "arch.svg.agent": "Agen inti",
      "arch.svg.agent.sub": "planner · orchestrator · recovery",
      "arch.svg.tools": "Tool registry",
      "arch.svg.tools.sub": "8 tools tersandbox",
      "arch.svg.memory": "Layer memori",
      "arch.svg.memory.sub": "3-lapis · enkripsi E2E",
      "arch.svg.models": "Tier model",
      "arch.svg.models.sub": "kecil · flagship · vision",
      "arch.svg.output": "Respons",
      "arch.svg.output.sub": "TTS · teks · terstruktur",

      "arch.l1.h": "Layer channel",
      "arch.l1.d": "WhatsApp Business API + Telegram Bot API. Masuknya pesan dan output TTS kembali ke pengguna, tanpa perlu install aplikasi.",
      "arch.l2.h": "Edge runtime",
      "arch.l2.d": "Cache lokal, antrian retry, penanganan sinyal lemah. Suara di-cache untuk replay offline, transkrip diantrikan saat jaringan drop.",
      "arch.l3.h": "Agen inti",
      "arch.l3.d": "Orchestrator + planner. Memecah niat, memanggil tools berurutan, pulih dari error, memformat respons yang ramah manusia.",
      "arch.l4.h": "Tool registry",
      "arch.l4.d": "8 tools yang bisa dipanggil — pembukuan, caption, visi, parsing dokumen, notifikasi proaktif. Setiap tool tersandbox dengan I/O terstruktur.",
      "arch.l5.h": "Layer memori",
      "arch.l5.d": "Tiga tier — working, episodic, semantic. Terenkripsi end-to-end per pengguna. Tidak ada paparan data training lintas-pengguna.",
      "arch.l6.h": "Tier model",
      "arch.l6.d": "Model kecil cost-efficient menangani 80% request. Hanya naik ke flagship LLM untuk reasoning kompleks atau task vision.",

      // Safety
      "safety.eyebrow": "Keamanan & guardrails",
      "safety.title": "Aman by design — bukan kebetulan.",
      "safety.lead": "Asisten yang menjangkau lansia, tunanetra, dan UMKM bermargin tipis harus hati-hati by default. Setiap guardrail di bawah ini adalah hard constraint, bukan wishlist.",

      "safety.c1.tag": "Konten",
      "safety.c1.h": "Moderasi konten",
      "safety.c1.d": "Ujaran kebencian, NSFW, instruksi berbahaya, dan pelecehan difilter di input dan output. Sadar konteks Indonesia — slur lokal dan dog-whistle ditangkap bersama bahasa Inggris.",

      "safety.c2.tag": "Saran",
      "safety.c2.h": "Konservatif soal finansial / legal / medis",
      "safety.c2.d": "Tidak ada rekomendasi investasi, tidak ada opini hukum, tidak ada diagnosis medis. Sanak bantu pembukuan dan harga, bukan \"haruskah saya ambil pinjaman ini.\" Penolakan tegas dengan rekomendasi kontak ahli.",

      "safety.c3.tag": "Privasi",
      "safety.c3.h": "Enkripsi memori end-to-end",
      "safety.c3.d": "Memori user — transaksi, catatan pelanggan, konteks bisnis — dienkripsi dengan kunci per-user sebelum keluar device. Server tidak bisa baca data bisnis, bahkan kalau dikompromikan.",

      "safety.c4.tag": "Halusinasi",
      "safety.c4.h": "Output tool yang dikutip, label kepercayaan",
      "safety.c4.d": "Ketika Sanak memberi angka, panggilan tool sumbernya ditampilkan di audit trail. Jawaban tidak pasti membawa prefix eksplisit \"saya tidak yakin.\" Angka tidak pernah dikarang.",

      "safety.c5.tag": "Injection",
      "safety.c5.h": "Sandbox prompt-injection",
      "safety.c5.d": "Input tool divalidasi dengan skema ketat. Pesan customer dikutip, bukan ditafsirkan sebagai perintah. Customer yang mengetik \"abaikan instruksi sebelumnya\" tidak bisa membuat Sanak mengirim data ke tempat lain.",

      "safety.c6.tag": "Konfirmasi",
      "safety.c6.h": "Konfirmasi user sebelum kirim",
      "safety.c6.d": "Aksi keluar — balas customer, kirim invoice, posting ke sosial — selalu memerlukan konfirmasi user eksplisit. Draft ditampilkan dalam bahasa sederhana, tidak pernah auto-kirim.",

      "safety.c7.tag": "Audit",
      "safety.c7.h": "Audit trail tool-call",
      "safety.c7.d": "Setiap panggilan tool dicatat di sisi klien dengan timestamp, input, dan output. User bisa mereview history lengkap dan mencabut aksi spesifik secara retrospektif.",

      "safety.c8.tag": "Penolakan",
      "safety.c8.h": "Jujur \"saya tidak bisa bantu itu\"",
      "safety.c8.d": "Saat Sanak mencapai batasnya, ia mengatakannya secara sederhana dan menyarankan langkah berikutnya — kontak manusia, ulangi dengan kata berbeda, tool alternatif. Tidak pernah mengarang workaround.",

      // Nav
      "nav.pillars": "Pilar",
      "nav.architecture": "Arsitektur",
      "nav.safety": "Keamanan",
    },

    cn: {
      // Pillars
      "pillars.eyebrow": "项目支柱",
      "pillars.title": "支撑 Sanak 的四大支柱。",
      "pillars.lead": "本页中的每一项功能都对应到四大支柱中的一个。它们共同描述了我们构建什么、为谁构建,以及我们拒绝发布什么。",

      "pillars.p1.h": "包容",
      "pillars.p1.d": "首先为那些一直被科技遗忘的人而设计。语音优先、平实语言、对弱信号友好。",
      "pillars.p1.f1": "语音优先界面",
      "pillars.p1.f2": "屏幕阅读器兼容",
      "pillars.p1.f3": "平实语言而非术语",
      "pillars.p1.f4": "高对比度 & 44px 触控目标",
      "pillars.p1.f5": "3G/EDGE 优化",
      "pillars.p1.f6": "多方言 NLU",

      "pillars.p2.h": "智能",
      "pillars.p2.d": "真正的智能体 — 规划、调用工具、观察、恢复。多模态输入、三层记忆、每一步都可追溯。",
      "pillars.p2.f1": "8 个内置工具",
      "pillars.p2.f2": "多步推理轨迹",
      "pillars.p2.f3": "语音 + 视觉 + 文档输入",
      "pillars.p2.f4": "三层记忆架构",
      "pillars.p2.f5": "实时交互式演示",

      "pillars.p3.h": "基础",
      "pillars.p3.d": "开源优先、栈透明、多层模型策略。精简设计 — 先用小模型,仅在需要时升级。",
      "pillars.p3.f1": "开源 LLM(旗舰 + 经济版)",
      "pillars.p3.f2": "双语 STT + TTS",
      "pillars.p3.f3": "WhatsApp + Telegram 渠道",
      "pillars.p3.f4": "智能体框架",
      "pillars.p3.f5": "边缘运行时 + 云端编排",

      "pillars.p4.h": "信任",
      "pillars.p4.d": "设计上即安全。内容审核、建议限制、端到端加密、提示注入沙箱、完整审计轨迹。",
      "pillars.p4.f1": "内容审核",
      "pillars.p4.f2": "金融建议护栏",
      "pillars.p4.f3": "E2E 记忆加密",
      "pillars.p4.f4": "提示注入防御",
      "pillars.p4.f5": "用户确认门",
      "pillars.p4.f6": "工具调用审计轨迹",

      // Architecture
      "arch.eyebrow": "架构",
      "arch.title": "从口语到语音回答。",
      "arch.lead": "Sanak 如何处理一条语音消息 — 经过渠道、边缘运行时、智能体核心、工具、记忆,再回到语音。端到端平均延迟低于 3 秒。",
      "arch.svg.user": "用户输入",
      "arch.svg.user.tags": "语音 · 照片 · 文档",
      "arch.svg.channel": "渠道层",
      "arch.svg.channel.sub": "WhatsApp · Telegram",
      "arch.svg.edge": "边缘运行时",
      "arch.svg.edge.sub": "缓存 · 重试队列 · 弱信号处理",
      "arch.svg.agent": "智能体核心",
      "arch.svg.agent.sub": "规划器 · 编排器 · 恢复",
      "arch.svg.tools": "工具注册表",
      "arch.svg.tools.sub": "8 个沙箱化工具",
      "arch.svg.memory": "记忆层",
      "arch.svg.memory.sub": "三层 · E2E 加密",
      "arch.svg.models": "模型层",
      "arch.svg.models.sub": "小型 · 旗舰 · 视觉",
      "arch.svg.output": "响应",
      "arch.svg.output.sub": "TTS · 文本 · 结构化",

      "arch.l1.h": "渠道层",
      "arch.l1.d": "WhatsApp Business API + Telegram Bot API。消息进入和 TTS 输出回用户,无需安装应用。",
      "arch.l2.h": "边缘运行时",
      "arch.l2.d": "本地缓存、重试队列、弱信号处理。语音缓存以供离线重播,网络断开时转录被排入队列。",
      "arch.l3.h": "智能体核心",
      "arch.l3.d": "编排器 + 规划器。分解意图、按顺序调用工具、从错误中恢复、格式化人性化响应。",
      "arch.l4.h": "工具注册表",
      "arch.l4.d": "8 个可调用工具 — 记账、文案、视觉、文档解析、主动通知。每个工具都用结构化 I/O 沙箱化。",
      "arch.l5.h": "记忆层",
      "arch.l5.d": "三层 — 工作、情景、语义。每用户端到端加密。无跨用户训练数据暴露。",
      "arch.l6.h": "模型层",
      "arch.l6.d": "经济型小模型处理 80% 的请求。仅在复杂推理或视觉任务时升级到旗舰 LLM。",

      // Safety
      "safety.eyebrow": "安全 & 护栏",
      "safety.title": "设计上即安全 — 而非偶然。",
      "safety.lead": "服务于老年人、视障人士和小利润企业的助手必须默认谨慎。下面的每个护栏都是硬约束,而非愿望清单。",

      "safety.c1.tag": "内容",
      "safety.c1.h": "内容审核",
      "safety.c1.d": "仇恨言论、NSFW、有害指令和骚扰在输入和输出端被过滤。具备印尼语境感知 — 本地诽谤和暗号与英语一同被捕获。",

      "safety.c2.tag": "建议",
      "safety.c2.h": "在金融 / 法律 / 医疗方面保守",
      "safety.c2.d": "无投资推荐、无法律意见、无医疗诊断。Sanak 帮助记账和定价,而不是「我该不该贷款」。明确拒绝并转介合格的人类专家。",

      "safety.c3.tag": "隐私",
      "safety.c3.h": "端到端记忆加密",
      "safety.c3.d": "用户记忆 — 交易、客户备注、业务上下文 — 在离开设备前用每用户密钥加密。服务器无法读取业务数据,即使被攻破。",

      "safety.c4.tag": "幻觉",
      "safety.c4.h": "引用工具输出、置信度标签",
      "safety.c4.d": "当 Sanak 给出数字时,源工具调用显示在审计轨迹中。不确定的回答带有明确的「我不确定」前缀。数字从不被发明。",

      "safety.c5.tag": "注入",
      "safety.c5.h": "提示注入沙箱",
      "safety.c5.d": "工具输入根据严格模式被验证。客户消息被引用,而非解释为命令。打字「忽略之前的指令」的客户无法让 Sanak 把数据发送到别处。",

      "safety.c6.tag": "确认",
      "safety.c6.h": "发送前用户确认",
      "safety.c6.d": "出站操作 — 回复客户、发送发票、发布到社交 — 始终需要明确的用户确认。草稿以平实语言显示,从不自动发送。",

      "safety.c7.tag": "审计",
      "safety.c7.h": "工具调用审计轨迹",
      "safety.c7.d": "每个工具调用都在客户端记录时间戳、输入和输出。用户可以审查完整历史并追溯撤销特定操作。",

      "safety.c8.tag": "拒绝",
      "safety.c8.h": "诚实地说「我无法帮您」",
      "safety.c8.d": "当 Sanak 触及其极限时,它会简单地说出来,并建议下一步 — 联系人类、换种说法、备选工具。从不发明变通。",

      // Nav
      "nav.pillars": "支柱",
      "nav.architecture": "架构",
      "nav.safety": "安全",
    }
  };

  // Merge into I18N
  for (const lang of Object.keys(EXTRAS_2)) {
    if (!I18N[lang]) I18N[lang] = {};
    Object.assign(I18N[lang], EXTRAS_2[lang]);
  }
})();
