// Sanak — interactive demo runtime
// Plays scripted agent traces with realistic timing.

const SCENARIOS = {
  bookkeeping: {
    en: [
      { t: "user", txt: "Show me this week's profit, and compare it to last week." },
      { t: "thinking" },
      { t: "tool", call: "read_ledger(range=\"last_7d\")", out: "income=2.34M · costs=1.18M · net=1.16M" },
      { t: "tool", call: "read_ledger(range=\"prev_7d\")", out: "net=1.04M" },
      { t: "tool", call: "calc_delta()", out: "+11.5% week-over-week" },
      { t: "agent", txt: "Net profit this week is Rp 1.16M — up 11.5% from last week (Rp 1.04M). Highest revenue came from Saturday. Want a category breakdown?" }
    ],
    id: [
      { t: "user", txt: "Hitung untung minggu ini dong, terus bandingin sama minggu lalu." },
      { t: "thinking" },
      { t: "tool", call: "read_ledger(range=\"last_7d\")", out: "pemasukan=2,34jt · biaya=1,18jt · bersih=1,16jt" },
      { t: "tool", call: "read_ledger(range=\"prev_7d\")", out: "bersih=1,04jt" },
      { t: "tool", call: "calc_delta()", out: "+11,5% dari minggu lalu" },
      { t: "agent", txt: "Untung bersih minggu ini Rp 1,16 juta — naik 11,5% dari minggu lalu (Rp 1,04 juta). Pemasukan terbesar dari hari Sabtu. Mau aku breakdown per kategori?" }
    ],
    cn: [
      { t: "user", txt: "帮我算一下这周的利润,跟上周对比一下。" },
      { t: "thinking" },
      { t: "tool", call: "read_ledger(range=\"last_7d\")", out: "收入=2.34M · 成本=1.18M · 净利=1.16M" },
      { t: "tool", call: "read_ledger(range=\"prev_7d\")", out: "净利=1.04M" },
      { t: "tool", call: "calc_delta()", out: "环比 +11.5%" },
      { t: "agent", txt: "本周净利 116 万印尼盾,比上周 (104 万) 增长 11.5%。最大收入来自周六。要按类别拆解吗?" }
    ]
  },
  caption: {
    en: [
      { t: "user", txt: "Just shot a photo of the new cassava chips. Write me a TikTok caption." },
      { t: "thinking" },
      { t: "tool", call: "describe_image(photo=p_4821)", out: "cassava chips, 100g plastic packaging, orange brand label" },
      { t: "tool", call: "memory.recall(product_history)", out: "avg 230 packs sold/week, target audience 18–35" },
      { t: "tool", call: "draft_caption(platform=\"tiktok\", tone=\"warm\", count=3)", out: "3 variants generated" },
      { t: "agent", txt: "Three variants ready. V1 (story): 'From a small kitchen in Bandung, these crispy cassava chips are here for your afternoon...'. V2 (humor): 'I only meant to snack a bit. Next thing I knew, the whole bag was gone...'. V3 (FOMO): 'Only 50 packs in stock this week — 12 already in line ☕'. Which one?" }
    ],
    id: [
      { t: "user", txt: "Aku baru foto produk keripik singkong baru, bikinin caption TikTok ya." },
      { t: "thinking" },
      { t: "tool", call: "describe_image(photo=p_4821)", out: "keripik singkong, kemasan plastik 100g, label brand orange" },
      { t: "tool", call: "memory.recall(produk)", out: "rata-rata 230 terjual/minggu, target 18-35 thn" },
      { t: "tool", call: "draft_caption(platform=\"tiktok\", tone=\"warm\", count=3)", out: "3 variasi siap" },
      { t: "agent", txt: "Tiga variasi caption siap. Variasi 1 (cerita): 'Dari dapur kecil di Bandung, keripik singkong renyah ini siap nemenin sore kamu...'. Variasi 2 (humor): 'Awalnya cuma mau ngemil dikit. Eh tau-tau habis sebungkus...'. Variasi 3 (FOMO): 'Stok minggu ini cuma 50 pack — udah ada 12 yang antri ☕'. Pilih yang mana?" }
    ],
    cn: [
      { t: "user", txt: "我刚拍了新的木薯片产品照片,帮我写 TikTok 文案。" },
      { t: "thinking" },
      { t: "tool", call: "describe_image(photo=p_4821)", out: "木薯片,100g 塑料包装,橙色品牌标签" },
      { t: "tool", call: "memory.recall(product_history)", out: "周均销量 230 包,目标人群 18-35 岁" },
      { t: "tool", call: "draft_caption(platform=\"tiktok\", tone=\"warm\", count=3)", out: "已生成 3 个版本" },
      { t: "agent", txt: "三个文案版本就绪。版本 1 (故事):「来自万隆小厨房的脆木薯片,陪你度过下午时光...」。版本 2 (幽默):「本来只想吃一点。结果整包没了...」。版本 3 (紧迫):「本周仅剩 50 包 — 已有 12 位排队中 ☕」。选哪个?" }
    ]
  },
  margin: {
    en: [
      { t: "user", txt: "I buy fabric at Rp 45k per meter, makes 5 shirts. I want 30% net margin — what should I sell at?" },
      { t: "thinking" },
      { t: "tool", call: "calculate_margin(material_cost=45000, units=5, target_margin=0.30)", out: "cost/unit=9,000 · raw price=14,400" },
      { t: "tool", call: "memory.recall(business_overhead)", out: "avg 18% (sewing + packaging + electricity)" },
      { t: "tool", call: "calculate_margin(adjusted=true)", out: "fair price = Rp 17,500/shirt → true 30% net" },
      { t: "agent", txt: "If we only count the fabric, you could price at Rp 14,400. But your overhead averages 18% (sewing, packaging, electricity) — the fair price is Rp 17,500/shirt to actually hit 30% net margin. Want me to update the price list?" }
    ],
    id: [
      { t: "user", txt: "Aku beli kain 45 ribu per meter, bisa jadi 5 kemeja. Mau untung 30% bersih, harga jualnya berapa?" },
      { t: "thinking" },
      { t: "tool", call: "calculate_margin(biaya_bahan=45000, unit=5, target=0.30)", out: "biaya/unit=9.000, harga_kasar=14.400" },
      { t: "tool", call: "memory.recall(overhead_bisnis)", out: "rata-rata 18% (jahit + packaging + listrik)" },
      { t: "tool", call: "calculate_margin(adjusted=true)", out: "harga_fair=Rp 17.500/kemeja → margin bersih 30%" },
      { t: "agent", txt: "Kalo cuma hitung kain, harga bisa Rp 14.400. Tapi overhead-mu rata-rata 18% (jahit, packaging, listrik) — fair-nya jual Rp 17.500/kemeja biar untung 30% bersih beneran. Mau aku update price list?" }
    ],
    cn: [
      { t: "user", txt: "我买布料每米 4.5 万,能做 5 件衬衫。想要净利 30%,售价多少?" },
      { t: "thinking" },
      { t: "tool", call: "calculate_margin(material=45000, units=5, target=0.30)", out: "成本/件=9000,初步售价=14400" },
      { t: "tool", call: "memory.recall(business_overhead)", out: "平均 18% (缝纫 + 包装 + 电费)" },
      { t: "tool", call: "calculate_margin(adjusted=true)", out: "公允价 = 1.75 万/件 → 净利 30%" },
      { t: "agent", txt: "只算布料的话,可以定 1.44 万。但你的间接成本平均 18% (缝纫、包装、电费) — 实际定价 1.75 万/件才能拿到 30% 真净利。要更新价格表吗?" }
    ]
  },
  accessibility: {
    en: [
      { t: "user", txt: "(holding up an electricity bill) Sanak, read this for me." },
      { t: "thinking" },
      { t: "tool", call: "describe_image(photo=p_doc)", out: "PLN bill, period: April 2026, customer ID: 5****" },
      { t: "tool", call: "read_document(doc_type=\"utility_bill\")", out: "usage=187 kWh · total=Rp 245,300 · due=May 20" },
      { t: "tool", call: "memory.recall(utility_history)", out: "last 3 months avg: 165 kWh / Rp 218,000" },
      { t: "agent", txt: "April electricity bill: Rp 245,300, due May 20. Usage was 187 kWh — 13% higher than your three-month average. Want me to remind you 3 days before the due date, or prepare a payment link now?" }
    ],
    id: [
      { t: "user", txt: "(menyodorkan tagihan listrik) Sanak, bacain ini dong." },
      { t: "thinking" },
      { t: "tool", call: "describe_image(photo=p_doc)", out: "tagihan PLN, periode April 2026, ID pelanggan: 5****" },
      { t: "tool", call: "read_document(doc_type=\"utility_bill\")", out: "pakai=187 kWh, tagihan=Rp 245.300, jatuh tempo=20 Mei" },
      { t: "tool", call: "memory.recall(riwayat_tagihan)", out: "rata-rata 3 bulan terakhir: 165 kWh / Rp 218.000" },
      { t: "agent", txt: "Tagihan listrik bulan April: Rp 245.300, jatuh tempo tanggal 20 Mei. Pemakaian 187 kWh — lebih tinggi 13% dari rata-rata tiga bulan terakhir. Mau aku ingetin H-3 jatuh tempo, atau langsung aku siapin link bayar?" }
    ],
    cn: [
      { t: "user", txt: "(出示电费单) Sanak,帮我念一下这个。" },
      { t: "thinking" },
      { t: "tool", call: "describe_image(photo=p_doc)", out: "PLN 电费单,2026 年 4 月,客户编号 5****" },
      { t: "tool", call: "read_document(doc_type=\"utility_bill\")", out: "用量=187 kWh,账单=24.53 万印尼盾,到期日=5 月 20 日" },
      { t: "tool", call: "memory.recall(utility_history)", out: "近三月平均:165 kWh / 21.8 万" },
      { t: "agent", txt: "4 月电费 24.53 万印尼盾,5 月 20 日到期。用电 187 kWh,比近三月平均高 13%。要在到期前 3 天提醒你,还是直接生成支付链接?" }
    ]
  }
};

const ICONS = {
  user: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  agent: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><circle cx="9" cy="12" r="5.5" stroke="currentColor" stroke-width="1.8"/><circle cx="15" cy="12" r="5.5" stroke="currentColor" stroke-width="1.8" opacity="0.85"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>'
};

let currentRunToken = 0;
let activeScenario = null;

function getCurrentLang() {
  try {
    const saved = localStorage.getItem("sanak.lang");
    if (saved && SCENARIOS.bookkeeping[saved]) return saved;
  } catch (e) {}
  const lang = (document.documentElement.lang || "en").toLowerCase();
  if (lang.startsWith("zh")) return "cn";
  if (lang.startsWith("id")) return "id";
  return "en";
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function appendMsg(role, content) {
  const body = document.getElementById("demoBody");
  if (!body) return null;
  const wrap = document.createElement("div");
  wrap.className = `demo-msg ${role}`;
  wrap.innerHTML = `
    <div class="demo-avatar" aria-hidden="true">${ICONS[role] || "•"}</div>
    <div class="demo-content"></div>
  `;
  wrap.querySelector(".demo-content").appendChild(content);
  body.appendChild(wrap);
  body.scrollTop = body.scrollHeight;
  return wrap;
}

function bubble(text) {
  const div = document.createElement("div");
  div.className = "demo-bubble";
  div.textContent = text;
  return div;
}

function thinkingDots() {
  const div = document.createElement("div");
  div.className = "demo-thinking";
  div.innerHTML = "<span></span><span></span><span></span>";
  return div;
}

function toolCallEl(call, out) {
  const div = document.createElement("div");
  div.className = "demo-tool-call";
  div.innerHTML = `<b>→</b> ${call}<br>&nbsp;&nbsp;<b>↳</b> ${out}`;
  return div;
}

async function playScenario(name) {
  activeScenario = name;
  const lang = getCurrentLang();
  const script = (SCENARIOS[name] && (SCENARIOS[name][lang] || SCENARIOS[name].en)) || [];
  if (!script.length) return;

  // disable buttons during play
  document.querySelectorAll(".demo-btn[data-scenario]").forEach(b => b.disabled = true);

  // bump run token; abort previous if a reset/scenario fires mid-play
  const myToken = ++currentRunToken;
  const body = document.getElementById("demoBody");
  body.innerHTML = "";

  let pending = null;
  for (const step of script) {
    if (myToken !== currentRunToken) return;
    if (step.t === "user") {
      appendMsg("user", bubble(step.txt));
      await sleep(900);
    } else if (step.t === "thinking") {
      pending = appendMsg("agent", thinkingDots());
      await sleep(800);
    } else if (step.t === "tool") {
      if (pending) {
        pending.querySelector(".demo-content").innerHTML = "";
        pending.querySelector(".demo-content").appendChild(toolCallEl(step.call, step.out));
        pending = null;
      } else {
        appendMsg("agent", toolCallEl(step.call, step.out));
      }
      await sleep(700);
      pending = appendMsg("agent", thinkingDots());
      await sleep(500);
    } else if (step.t === "agent") {
      if (pending) {
        pending.querySelector(".demo-content").innerHTML = "";
        pending.querySelector(".demo-content").appendChild(bubble(step.txt));
        pending = null;
      } else {
        appendMsg("agent", bubble(step.txt));
      }
      await sleep(400);
    }
  }

  if (myToken === currentRunToken) {
    document.querySelectorAll(".demo-btn[data-scenario]").forEach(b => b.disabled = false);
  }
}

function resetDemo() {
  currentRunToken++;
  activeScenario = null;
  const body = document.getElementById("demoBody");
  if (body) body.innerHTML = "";
  document.querySelectorAll(".demo-btn[data-scenario]").forEach(b => b.disabled = false);
}

function initDemo() {
  document.querySelectorAll(".demo-btn[data-scenario]").forEach(btn => {
    btn.addEventListener("click", () => playScenario(btn.dataset.scenario));
  });
  const resetBtn = document.getElementById("demoReset");
  if (resetBtn) resetBtn.addEventListener("click", resetDemo);

  // Replay active scenario when language switches mid-playback
  // (the local demo .lang-btn buttons are also handled by i18n.js,
  //  so applyI18n runs first; we hook onto the same buttons here)
  document.querySelectorAll(".demo-lang .lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (activeScenario) {
        // small defer so i18n.js applyI18n() finishes & DOM lang is current
        setTimeout(() => playScenario(activeScenario), 30);
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDemo);
} else {
  initDemo();
}
