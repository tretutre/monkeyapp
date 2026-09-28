// =====================================================
// EXCLUSIVE SHOP — app.js v3
// =====================================================

const CONFIG = {
  telegram : "ChildPrncp",
  zangi    : "https://t.me/ChildPrncp",
  zangiUrl : "https://t.me/ChildPrncp",
};

const TG_URL    = `https://t.me/${CONFIG.telegram}`;
const ZANGI_URL = CONFIG.zangiUrl;

  const products = [
    {
      title: "NEW PREMIUM CP",
      video: "https://files.catbox.moe/n5v29p.mp4",
      desc: "CP NEW PREMIUM",
      chips: ["CHILD", "HOT", "2026"],
      badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 436,
    },
    {
      title: "RAPE FULL",
      video: "https://files.catbox.moe/ib6itj.mp4",
      desc: "* MORE THAN 789 VIDEOS 68.1GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["cumming", "NEW", "RARE"],
      badges: [{ label: "🚀 TRENDING", cls: "hot" }, { label: "✅ VERIFIED", cls: "new" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1984,
    },
    {
      title: "TEENS 5-17",
      video: "https://files.catbox.moe/wakgef.mp4",
      desc: "MORE THAN 820 VIDEOS 71.4GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["LONG VIDEOS", "TRENDING", "FRESH"],
      badges: [{ label: "⚡ INSTANT", cls: "new" }, { label: "🏆 BEST VALUE", cls: "bestseller" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1106,
    },
    {
      title: "FULL CP GAY",
      video: "https://files.catbox.moe/5scbn7.mp4",
      desc: "MORE THAN 900 VIDEOS 58GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["58GB+", "FEATURED", "BEST"],
      badges: [{ label: "💎 VIP", cls: "premium" }, { label: "🚀 NEW DROP", cls: "new" }],
      proof: ["./proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1016,
    },
    {
      title: "BABY PORN",
      video: "https://files.catbox.moe/3e657e.mp4",
      desc: "NEW BABY PORN VIDEOS, BLOWJOB AND FUCKING, BLACK AND WHITE BABYs",
      chips: ["43GB", "+590 VIDEOS", "BABYs"],
      badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
      proof: ["./proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 2362,
    },
    {
      title: "FULL CP",
      video: "https://files.catbox.moe/mcnev9.mp4",
      desc: "PREMIUM CONTENT BUNDLE WITH ALL CP, MORE THAN 104,000 VIDEOS",
      chips: ["1.9TB", "all CP", "LIFETIME ACESS"],
      badges: [{ label: "🚀 TRENDING", cls: "hot" }, { label: "✅ VERIFIED", cls: "new" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 568,
    },
    {
      title: "BLOWJOB CP",
      video: "https://files.catbox.moe/ydlolc.mp4",
      desc: "MORE THAN 900 VIDEOS! 86.59GB of exclusive content Complete and well-organized folder Premium quality content Instant access for the best experience!",
      chips: ["WHITHE & BLACK", "TRENDING", "FRESH"],
      badges: [{ label: "⚡ INSTANT", cls: "new" }, { label: "🏆 BEST VALUE", cls: "bestseller" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 917,
    },
    {
      title: "EXCLUSIVE CP",
      video: "https://files.catbox.moe/xsyutk.mp4",
      desc: "* MORE THAN 400 VIDEOS 6GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["8GB+", "VERIFIED", "INSTANT"],
      badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 2071,
    },
    {
      title: "CP PARADISE",
      video: "https://files.catbox.moe/74sdfp.mp4",
      desc: "* MORE THAN 1400 Videos IN TOTAL",
      chips: ["75GB+", "VIP", "FAMOUS"],
      badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1470,
    },
    {
      title: "BOYS",
      video: "https://files.catbox.moe/vyyotr.mp4",
      desc: "* MORE THAN 900 VIDEOS 68.25GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["GOURGEUS", "PREMIUM", "VIP"],
      badges: [{ label: "⭐ TOP SELLER", cls: "bestseller" }, { label: "💎 PREMIUM", cls: "premium" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 2335,
    },
    {
      title: "BLACK CP",
      video: "https://files.catbox.moe/xh83bg.mp4",
      desc: "* MORE THAN 700 VIDEOS 48GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["48GB+", "TOP", "2026"],
      badges: [{ label: "💥 EXCLUSIVE", cls: "hot" }, { label: "🔑 VIP", cls: "premium" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 465,
    },
    {
      title: "MIX TEENS",
      video: "https://files.catbox.moe/13fxt8.mp4",
      desc: "* MORE THAN 1870+ VIDEOS 98GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["98GB+", "VERIFIED", "INSTANT"],
      badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1665,
    },
    {
      title: "FATHER & DAUGTHER",
      video: "https://files.catbox.moe/7dui22.mp4",
      desc: "* Premium quality content<br>* Instant access for the best experience!<br>* Well-organized files",
      chips: ["95GB+", "VIP", "POPULAR"],
      badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1376,
    },
    {
      title: "TEENS & DOGS",
      video: "https://files.catbox.moe/kg19g9.mp4",
      desc: "* Premium quality content<br>* Instant access for the best experience!<br>* Well-organized files",
      chips: ["77GB+", "HOT", "2026"],
      badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1455,
    },
    {
      title: "NEW PYT STUFF & GIRLS",
      video: "https://files.catbox.moe/bgozjd.mp4",
      desc: "* MORE THAN 279 VIDEOS 8.5GB IN TOTAL MY COMPLETE FOLDER",
      chips: ["47GB+", "PREMIUM", "VIP"],
      badges: [{ label: "⭐ TOP SELLER", cls: "bestseller" }, { label: "💎 PREMIUM", cls: "premium" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 2185,
    },
    {
      title: "INCEST",
      video: "https://files.catbox.moe/296kj2.mp4",
      desc: "* PREMIUM CP PEDO",
      chips: ["44GB+", "TOP", "2026"],
      badges: [{ label: "💥 EXCLUSIVE", cls: "hot" }, { label: "🔑 VIP", cls: "premium" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 2098,
    },
    {
      title: "MOM AND SON",
      video: "https://files.catbox.moe/lxpskg.mp4",
      desc: "* MOM AND SON CP AVAILABLE",
      chips: ["78GB+", "VERIFIED", "INSTANT"],
      badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 809,
    },
    {
      title: "FATHER AND DAUGHTER CP",
      video: "https://files.catbox.moe/d0suzt.mp4",
      desc: "* FATHER AND DAUGHTER",
      chips: ["25GB+", "VIP", "POPULAR"],
      badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 860,
    },
    {
      title: "C#P 2-13 PEDO FATHER",
      video: "https://files.catbox.moe/ord5uo.mp4",
      desc: "* MORE THAN 100 VIDEOS",
      chips: ["53GB+", "PREMIUM", "VIP"],
      badges: [{ label: "⭐ TOP SELLER", cls: "bestseller" }, { label: "💎 PREMIUM", cls: "premium" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1757,
    },
    {
      title: "CP BRO AND SIS",
      video: "https://files.catbox.moe/tovhha.mp4",
      desc: "CHILDREN INCEST & SIS AND BRO",
      chips: ["INCEST", "TOP", "2026"],
      badges: [{ label: "💥 EXCLUSIVE", cls: "hot" }, { label: "🔑 VIP", cls: "premium" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1315,
    },
    {
      title: "CP 0-5",
      video: "https://files.catbox.moe/yzb9aw.mp4",
      desc: "* Amelia Teen Leaks",
      chips: ["35GB+", "TRENDING", "FRESH"],
      badges: [{ label: "⚡ INSTANT", cls: "new" }, { label: "🏆 BEST VALUE", cls: "bestseller" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1837,
    },
    {
      title: "MONKEY APP LEAKED",
      video: "https://files.catbox.moe/xnqsaq.mp4",
      desc: "* Premium quality content<br>* Instant access for the best experience!<br>* Well-organized files",
      chips: ["98GB+", "VERIFIED", "INSTANT"],
      badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1489,
    },
    {
      title: "BLOWJOB CHILDREN 4-9",
      video: "https://files.catbox.moe/v907m5.mp4",
      desc: "* 85GB IN TOTAL",
      chips: ["25GB+", "VIP", "POPULAR"],
      badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1059,
    },
    {
      title: "ORGIES & INCEST",
      video: "https://files.catbox.moe/zg42zg.mp4",
      desc: "* OVER 500 VIDEOS 5.19GB IN TOTAL MORE THAN 200 BLACKMAIL VIDEOS Incest MY COMPLETE FOLDER",
      chips: ["57GB+", "INCEST", "2026"],
      badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
      proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
      proofCaption: "Sales proof",
      freeLink: "",
      views: 1411,
    },

  ];



const buyers = [
  { name: "Lucas R.",   product: "Mentoria 2025", location: "São Paulo, BR" },
  { name: "Emma T.",    product: "Mentoria VIP",  location: "London, UK" },
  { name: "Michael B.", product: "Custom Pack",   location: "New York, US" },
  { name: "Sarah J.",   product: "VIP Access",    location: "Toronto, CA" },
  { name: "Ana M.",     product: "Mentoria 2025", location: "Lisboa, PT" },
  { name: "João F.",    product: "Pack Premium",  location: "Porto, PT" },
  { name: "Carlos S.",  product: "Mentoria 2025", location: "Rio de Janeiro, BR" },
  { name: "Mia K.",     product: "VIP Folder",    location: "Berlin, DE" },
];

// =====================================================
// i18n
// =====================================================
let currentLang = "en";

const i18n = {
  en: {
    featured_label       : "FEATURED",
    featured_title       : "Featured Videos",
    more_options         : "More Options",
    custom_folder_title  : "Custom Folder Request",
    custom_folder_desc   : "Describe what you are looking for and your budget.",
    custom_folder_ph     : "Example: I need niche X, approx 5GB. Budget $20...",
    vip_title            : "Join VIP Group",
    vip_desc             : "Enter the specific VIP group name you want to join.",
    vip_ph               : "Group Name...",
    send_request         : "Send Request",
    join_now             : "Join Now",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Premium digital content. Instant delivery.",
    contact              : "Contact",
    quick_links          : "Quick Links",
    back_top             : "↑ Back to Top",
    products             : "Products",
    buy_now              : "Buy Now",
    free_folder          : "Free Folder",
    show_less            : "Show less",
    show_more            : "Show more",
    views_live           : "watching",
    playing              : "Playing",
    free_available_title : "Free Folder Available!",
    free_available_desc  : "Access the free folder now",
    free_access_btn      : "🚀 Access Free Folder",
    free_unavail_title   : "Free Folder Not Available",
    free_unavail_desc    : "This product has no free folder. Contact us for access.",
    contact_telegram     : "Telegram Support",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 OFFICIAL & UNIQUE PAGE — YOUR PRIVACY IS FULLY PROTECTED",
  },
  pt: {
    featured_label       : "DESTACADOS",
    featured_title       : "Vídeos Destacados",
    more_options         : "Mais Opções",
    custom_folder_title  : "Pedido de Pasta Personalizada",
    custom_folder_desc   : "Descreve o que procuras e o teu orçamento.",
    custom_folder_ph     : "Exemplo: Preciso de nicho X, aprox 5GB. Orçamento $20...",
    vip_title            : "Entrar no Grupo VIP",
    vip_desc             : "Escreve o nome do grupo VIP que desejas entrar.",
    vip_ph               : "Nome do Grupo...",
    send_request         : "Enviar Pedido",
    join_now             : "Entrar Agora",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Conteúdo digital premium. Entrega imediata.",
    contact              : "Contacto",
    quick_links          : "Links Rápidos",
    back_top             : "↑ Voltar ao Topo",
    products             : "Produtos",
    buy_now              : "Comprar",
    free_folder          : "Pasta Grátis",
    show_less            : "Mostrar menos",
    show_more            : "Mostrar mais",
    views_live           : "a ver",
    playing              : "A Reproduzir",
    free_available_title : "Pasta Grátis Disponível!",
    free_available_desc  : "Acesse a pasta gratuita agora",
    free_access_btn      : "🚀 Aceder à Pasta Grátis",
    free_unavail_title   : "Pasta Gratuita Não Disponível",
    free_unavail_desc    : "Este conteúdo não possui pasta gratuita. Entre em contacto para obter acesso.",
    contact_telegram     : "Contactar no Telegram",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 PÁGINA OFICIAL E ÚNICA — A SUA PRIVACIDADE ESTÁ TOTALMENTE PROTEGIDA",
  }
};

function t(key) { return (i18n[currentLang] || i18n.en)[key] || key; }

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    el.placeholder = t(el.dataset.placeholderI18n);
  });
  document.getElementById("products-container").innerHTML = "";
  renderProducts();
}

// =====================================================
// TELEGRAM / ZANGI HELPERS
// =====================================================
function tgOpen(msg) {
  window.open(`${TG_URL}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ── Mensagem personalizada com o título do produto ──
function openTelegramProduct(title) {
  tgOpen(
    `Hello, I want to purchase this folder:\n\n` +
    `\uD83D\uDCC2 Folder: "${title}"\n\n` +
    `Please guide me through the payment process.`
  );
}

function sendCustomFolder() {
  const val = document.getElementById("custom-folder-text").value.trim();
  if (!val) { alert("Please describe the folder and your price offer."); return; }
  tgOpen(
    `Hello, I would like to negotiate a custom folder.\n\n` +
    `\uD83D\uDCC2 Request Details:\n${val}\n\n` +
    `Please let me know if this is possible.`
  );
}

function sendVipRequest() {
  const val = document.getElementById("vip-group-text").value.trim();
  if (!val) { alert("Please enter the VIP group name."); return; }
  tgOpen(
    `Hello, I am interested in joining a VIP group.\n\n` +
    `💎 VIP Group Name: ${val}\n\n` +
    `Please send me the payment details.`
  );
}

// =====================================================
// FREE FOLDER MODAL
// =====================================================
function openFreeModal(idx) {
  const p = products[idx];
  const inner = document.getElementById("free-modal-inner");
  if (p.freeLink) {
    inner.innerHTML = `
      <div class="free-available">
        <div class="modal-icon">🎁</div>
        <h3>${t("free_available_title")}</h3>
        <p>${t("free_available_desc")}</p>
        <button class="btn-access-folder" onclick="window.open('${p.freeLink}','_blank')">${t("free_access_btn")}</button>
      </div>`;
  } else {
    inner.innerHTML = `
      <div class="free-unavailable">
        <div class="modal-icon">🔒</div>
        <h3>${t("free_unavail_title")}</h3>
        <p>${t("free_unavail_desc")}</p>
        <div class="free-contact-btns">
          <button class="btn-contact-tg" onclick="openTelegramProduct('${p.title}')">💬 ${t("contact_telegram")}</button>
          <button class="btn-contact-zangi" onclick="window.open('${ZANGI_URL}','_blank')">📱 ${t("contact_zangi")}</button>
        </div>
      </div>`;
  }
  document.getElementById("free-folder-modal").classList.add("open");
}

function closeFreeModal() {
  document.getElementById("free-folder-modal").classList.remove("open");
}

// =====================================================
// PROOF MODAL
// =====================================================
let proofImages  = [];
let proofCurrent = 0;

function openProof(idx) {
  const p = products[idx];
  if (!p || !p.proof || !p.proof.length) return;
  proofImages  = Array.isArray(p.proof) ? p.proof : [p.proof];
  proofCurrent = 0;
  document.getElementById("proof-caption").textContent = p.proofCaption || "Proof of sales";
  renderProofSlide();
  document.getElementById("proof-modal").classList.add("open");
}

function renderProofSlide() {
  const img     = document.getElementById("proof-img");
  const counter = document.getElementById("proof-counter");
  img.src = proofImages[proofCurrent];
  if (proofImages.length > 1) {
    counter.textContent = `${proofCurrent + 1} / ${proofImages.length}`;
    counter.style.display = "block";
    document.getElementById("proof-prev").style.display = "flex";
    document.getElementById("proof-next").style.display = "flex";
  } else {
    counter.style.display = "none";
    document.getElementById("proof-prev").style.display = "none";
    document.getElementById("proof-next").style.display = "none";
  }
}

function proofNav(dir) {
  proofCurrent = (proofCurrent + dir + proofImages.length) % proofImages.length;
  renderProofSlide();
}

function openProofFullscreen() {
  const src = proofImages[proofCurrent];
  document.getElementById("proof-fs-img").src = src;
  document.getElementById("proof-fullscreen").classList.add("open");
}

function closeProofFullscreen() {
  document.getElementById("proof-fullscreen").classList.remove("open");
}

function closeProof() {
  document.getElementById("proof-modal").classList.remove("open");
  closeProofFullscreen();
}

// =====================================================
// LIVE VIEWS
// =====================================================
const liveViews = {};

function initViews() {
  products.forEach((p, i) => {
    liveViews[i] = p.views || Math.floor(Math.random() * 2000 + 400);
  });
}

function tickViews() {
  products.forEach((_, i) => {
    liveViews[i] = Math.max(100, liveViews[i] + Math.floor(Math.random() * 9) - 3);
    const el = document.getElementById(`views-${i}`);
    if (el) el.textContent = `${liveViews[i].toLocaleString()} ${t("views_live")}`;
  });
}

// =====================================================
// RENDER PRODUCTS
// =====================================================
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  products.forEach((p, idx) => {

    const badgesHtml = (p.badges || []).map((b, i) =>
      `<span class="vid-badge ${b.cls}" style="animation-delay:${i * .1}s">${b.label}</span>`
    ).join("");

    const chipsHtml = (p.chips || []).map(c =>
      `<span class="card-chip">${c}</span>`
    ).join("");

    const proofArr = Array.isArray(p.proof) ? p.proof : (p.proof ? [p.proof] : []);
    const proofBtn = proofArr.length
      ? `<button class="proof-btn" onclick="openProof(${idx})">🏆 Proof</button>`
      : "";

    const mediaHtml = p.video ? `
      <div class="video-wrapper">
        <video class="product-video" src="${p.video}" autoplay muted loop playsinline controlslist="nodownload" poster="${p.poster || ''}"></video>
        <div class="video-overlay"></div>
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
        <div class="vid-center-hud">
          <div class="vid-views">
            <span class="views-dot"></span>
            <span id="views-${idx}">${(liveViews[idx] || p.views || 0).toLocaleString()} ${t("views_live")}</span>
          </div>
          <div class="vid-playing">
            <div class="eq-bars">
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div>
            </div>
            ${t("playing")}
          </div>
        </div>
      </div>` : p.img ? `
      <div style="position:relative;">
        <img class="product-video" src="${p.img}" alt="${p.title}" loading="lazy" style="aspect-ratio:16/9;object-fit:cover;width:100%;">
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
      </div>` : "";

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${idx * .12}s`;
    card.innerHTML = `
      ${mediaHtml}
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc-wrap">
          <div class="card-desc" id="desc-${idx}">${p.desc || ""}</div>
          <button class="desc-toggle" id="toggle-${idx}" onclick="toggleDesc(${idx})">${t("show_more")}</button>
        </div>
        ${chipsHtml ? `<div class="card-chips">${chipsHtml}</div>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn-buy" type="button">🛒 ${t("buy_now")}</button>
        <button class="btn-free" type="button">📂 ${t("free_folder")}</button>
      </div>
    `;

    // ── BUY NOW → sempre abre Telegram com mensagem personalizada do produto ──
    card.querySelector(".btn-buy").addEventListener("click", () => {
      openTelegramProduct(p.title);
    });

    card.querySelector(".btn-free").addEventListener("click", () => openFreeModal(idx));
    container.appendChild(card);
  });
}

function toggleDesc(idx) {
  const desc = document.getElementById(`desc-${idx}`);
  const btn  = document.getElementById(`toggle-${idx}`);
  const expanded = desc.classList.toggle("expanded");
  btn.textContent = expanded ? t("show_less") : t("show_more");
}

// =====================================================
// PARTICLES
// =====================================================
function initParticles() {
  const wrap = document.getElementById("headerParticles");
  if (!wrap) return;
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
  wrap.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() { W = canvas.width = wrap.offsetWidth; H = canvas.height = wrap.offsetHeight; }

  function makeParticle() {
    return {
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.6+.3,
      dx: (Math.random()-.5)*.45, dy: (Math.random()-.5)*.3,
      a: Math.random()*.55+.15,
      color: Math.random()>.5 ? "66,165,245" : "211,47,47"
    };
  }

  function init() { resize(); particles = Array.from({length:80}, makeParticle); }

  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`; ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>W) p.dx*=-1;
      if(p.y<0||p.y>H) p.dy*=-1;
    });
    requestAnimationFrame(draw);
  }

  init(); draw();
  window.addEventListener("resize", resize);
}

// =====================================================
// VIEWER COUNT
// =====================================================
let viewerCount = Math.floor(Math.random()*300+120);

function updateViewerCount() {
  viewerCount = Math.max(80, Math.min(600, viewerCount + Math.floor(Math.random()*5)-2));
  const el = document.getElementById("viewerCount");
  if (el) el.textContent = `${viewerCount} live viewers`;
}

// =====================================================
// NOTIFICATIONS
// =====================================================
function showNotification() {
  const buyer = buyers[Math.floor(Math.random()*buyers.length)];
  const el = document.createElement("div");
  el.className = "notification-item";
  el.innerHTML =
    `🛒 <strong>${buyer.name}</strong> purchased <strong>${buyer.product}</strong><br>` +
    `<small>📍 ${buyer.location} &nbsp;•&nbsp; Just now</small>`;
  const wrap = document.getElementById("live-notifications");
  if (wrap) { wrap.prepend(el); setTimeout(() => el.remove(), 5000); }
}

function startNotifications() {
  setTimeout(showNotification, 2400);
  setInterval(showNotification, Math.floor(Math.random()*12000)+14000);
}

// =====================================================
// LINK INJECTION
// =====================================================
function injectLinks() {
  ["hdr-telegram-btn","footer-telegram"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = TG_URL;
  });
  ["hdr-zangi-btn","footer-zangi"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = ZANGI_URL;
  });
}

// =====================================================
// INIT
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  initViews();
  injectLinks();
  renderProducts();
  initParticles();
  startNotifications();
  updateViewerCount();
  setInterval(updateViewerCount, 3500);
  setInterval(tickViews, 4000);

  ["free-folder-modal","proof-modal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => {
      if (e.target === el) { closeFreeModal(); closeProof(); }
    });
  });

  const fs = document.getElementById("proof-fullscreen");
  if (fs) fs.addEventListener("click", e => { if(e.target===fs) closeProofFullscreen(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeFreeModal(); closeProof(); }
    if (e.key === "ArrowRight" && document.getElementById("proof-modal").classList.contains("open")) proofNav(1);
    if (e.key === "ArrowLeft"  && document.getElementById("proof-modal").classList.contains("open")) proofNav(-1);
  });
});
