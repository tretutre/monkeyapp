// =====================================================
// dm-messages.js
// Mensagens personalizadas por botão — Exclusive Shop
// Agora com PREÇO incluído na mensagem automaticamente.
// Inclui APÓS o app.js no index.html:
//   <script src="app.js"></script>
//   <script src="dm-messages.js"></script>
// =====================================================

(function () {
  'use strict';

  // ── Configuração — muda só aqui ──
  var TELEGRAM_USER = 'ChildPrncp';  // só o @ sem @
  var ZANGI_USER    = 'https://t.me/ChildPrncp';                // preenche se usares Zangi, senão deixa vazio

  // ── Monta o link do Telegram com mensagem do produto (+ preço) ──
  function buildTelegramLink(productTitle, price) {
    var title = (productTitle || 'this folder').trim();
    var priceLine = price ? ('\uD83D\uDCB5 Price: $' + price + '\n\n') : '';
    var msg =
      'Hello, I want to purchase this folder:\n\n' +
      '\uD83D\uDCC2 Folder: "' + title + '"\n\n' +
      priceLine +
      'Please guide me through the payment process.';
    return 'https://t.me/' + TELEGRAM_USER + '?text=' + encodeURIComponent(msg);
  }

  function buildZangiLink(productTitle, price) {
    if (!ZANGI_USER) return null;
    var title = (productTitle || 'this folder').trim();
    var priceLine = price ? ('\uD83D\uDCB5 Price: $' + price + '\n\n') : '';
    var msg =
      'Hello, I want to purchase this folder:\n\n' +
      '\uD83D\uDCC2 Folder: "' + title + '"\n\n' +
      priceLine +
      'Please guide me through the payment process.';
    return 'https://zangi.com/' + ZANGI_USER + '?text=' + encodeURIComponent(msg);
  }

  // ── Descobre o título do produto a partir de qualquer elemento clicado ──
  // Sobe pelo DOM procurando o .product-card pai e lê o título
  function getProductTitle(el) {
    // 1. Atributo data-product directo no botão (prioridade máxima)
    var dp = el.getAttribute && el.getAttribute('data-product');
    if (dp && dp.trim()) return dp.trim();

    // 2. Sobe até encontrar o .product-card
    var node = el;
    for (var i = 0; i < 10 && node; i++) {
      if (node.classList && node.classList.contains('product-card')) {
        // Procura .product-title ou .card-title dentro do card
        var titleEl =
          node.querySelector('.product-title') ||
          node.querySelector('.card-title') ||
          node.querySelector('h2') ||
          node.querySelector('h3');
        if (titleEl) return (titleEl.innerText || titleEl.textContent || '').trim();
      }
      node = node.parentElement;
    }

    // 3. Fallback: texto do próprio botão (se não for genérico)
    var btnText = (el.innerText || el.textContent || '').trim();
    var GENERIC = /^(buy|buy now|comprar|purchase|order|get|get now|buy|click|here|join)$/i;
    if (btnText && !GENERIC.test(btnText)) return btnText;

    return 'this folder';
  }

  // ── Descobre o preço do produto a partir de qualquer elemento clicado ──
  function getProductPrice(el) {
    // 1. Atributo data-price directo no botão (prioridade máxima)
    var dp = el.getAttribute && el.getAttribute('data-price');
    if (dp && dp.trim()) return dp.trim();

    // 2. Sobe até encontrar o .product-card
    var node = el;
    for (var i = 0; i < 10 && node; i++) {
      if (node.classList && node.classList.contains('product-card')) {
        // data-price no próprio card
        var cardPrice = node.getAttribute && node.getAttribute('data-price');
        if (cardPrice && cardPrice.trim()) return cardPrice.trim();

        // Procura elemento visual .price-tag / .price dentro do card
        var priceEl =
          node.querySelector('.price-tag') ||
          node.querySelector('.price');
        if (priceEl) {
          var raw = (priceEl.innerText || priceEl.textContent || '').trim();
          var num = raw.replace(/[^0-9.]/g, '');
          if (num) return num;
        }
      }
      node = node.parentElement;
    }

    return null;
  }

  // ── Intercepta cliques em TODOS os botões BUY NOW e links de Telegram ──
  function patchButtons() {

    // Botões com classe .buy-btn ou .btn-buy ou .buyLink
    document.querySelectorAll('.buy-btn, .btn-buy, [data-action="buy"]').forEach(function (btn) {
      if (btn._dmPatched) return;
      btn._dmPatched = true;

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var title = getProductTitle(btn);
        var price = getProductPrice(btn);
        window.open(buildTelegramLink(title, price), '_blank');
      });
    });

    // Links <a> que apontam para t.me (sem mensagem ainda)
    document.querySelectorAll('a[href*="t.me"]').forEach(function (a) {
      if (a._dmPatched) return;
      // Se já tem ?text= personalizado, não mexe
      if (a.href && a.href.indexOf('?text=') !== -1) return;
      a._dmPatched = true;

      a.addEventListener('click', function (e) {
        // Só intercepta se parecer botão de compra
        var cls = (a.className || '') + ' ' + (a.getAttribute('data-action') || '');
        var isBuyBtn = /buy|purchase|comprar|order/.test(cls) || /buy/i.test(a.id || '');
        if (!isBuyBtn) return; // suporte / footer deixa passar normal
        e.preventDefault();
        e.stopPropagation();
        var title = getProductTitle(a);
        var price = getProductPrice(a);
        window.open(buildTelegramLink(title, price), '_blank');
      });
    });

    // Botões Zangi
    if (ZANGI_USER) {
      document.querySelectorAll('a[href*="zangi.com"], .zangi-btn, [data-action="zangi"]').forEach(function (btn) {
        if (btn._dmPatchedZangi) return;
        var cls = (btn.className || '') + ' ' + (btn.getAttribute('data-action') || '');
        var isBuyBtn = /buy|purchase|comprar|order/.test(cls);
        if (!isBuyBtn) return;
        btn._dmPatchedZangi = true;

        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var title = getProductTitle(btn);
          var price = getProductPrice(btn);
          var link = buildZangiLink(title, price);
          if (link) window.open(link, '_blank');
        });
      });
    }
  }

  // ── Observa novos cards adicionados dinamicamente pelo app.js ──
  function observe() {
    if (!window.MutationObserver) { patchButtons(); return; }
    var observer = new MutationObserver(function (mutations) {
      var hasNew = mutations.some(function (m) { return m.addedNodes.length > 0; });
      if (hasNew) patchButtons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    patchButtons();
  }

  // ── Expõe funções globais que o HTML pode chamar directamente ──
  // Uso: onclick="dmBuy(this)" no botão
  window.dmBuy = function (el) {
    var title = getProductTitle(el);
    var price = getProductPrice(el);
    window.open(buildTelegramLink(title, price), '_blank');
  };

  window.dmZangi = function (el) {
    var title = getProductTitle(el);
    var price = getProductPrice(el);
    var link = buildZangiLink(title, price);
    if (link) window.open(link, '_blank');
  };

  // Inicia depois do DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }

  console.log('[dm-messages.js] Carregado. Telegram: @ChildPrncp' + TELEGRAM_USER);
})();