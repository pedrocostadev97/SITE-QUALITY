/* ============================================
   QUALITY COMBUSTÍVEIS — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL SUAVE ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const alvo = document.querySelector(link.getAttribute('href'));
      if (alvo) { e.preventDefault(); alvo.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ── NAVBAR SOMBRA ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.style.boxShadow = window.scrollY > 8
      ? '0 4px 20px rgba(40,26,78,.18)' : 'none';
  }, { passive: true });

  /* ── ANIMAÇÃO ENTRADA CARDS ── */
  const animaveis = document.querySelectorAll(
    '.comb-card, .serv-card, .qual-item, .emp-item, .stat-item'
  );
  animaveis.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity .4s ease ${i * 55}ms, transform .4s ease ${i * 55}ms`;
  });
  const obsCards = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
        obsCards.unobserve(en.target);
      }
    });
  }, { threshold: 0.1 });
  animaveis.forEach(el => obsCards.observe(el));

  /* ── BUSCA DE POSTO ── */
  const btnBusca   = document.querySelector('.btn-busca');
  const inputBusca = document.querySelector('.campo-busca');
  const postosGrid = document.getElementById('postosGrid');

  if (btnBusca && inputBusca) {
    const filtrar = () => {
      const q = inputBusca.value.trim().toLowerCase();
      if (!q) {
        document.querySelectorAll('.posto-card').forEach(c => c.style.display = '');
        return;
      }
      document.querySelectorAll('.posto-card').forEach(c => {
        const nome = (c.dataset.nome || '').toLowerCase();
        const text = c.textContent.toLowerCase();
        c.style.display = (nome.includes(q) || text.includes(q)) ? '' : 'none';
      });
    };
    btnBusca.addEventListener('click', filtrar);
    inputBusca.addEventListener('keydown', e => { if (e.key === 'Enter') filtrar(); });
    inputBusca.addEventListener('input', filtrar);
  }

  /* ── NEWSLETTER ── */
  const nlBtn   = document.querySelector('.nl-btn');
  const nlInput = document.querySelector('.nl-input');
  if (nlBtn && nlInput) {
    nlBtn.addEventListener('click', () => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nlInput.value.trim())) {
        nlInput.style.outline = '3px solid #281A4E'; nlInput.focus();
        setTimeout(() => nlInput.style.outline = '', 2000); return;
      }
      nlBtn.textContent = '✓ Cadastrado!';
      nlBtn.style.background = '#22A06B';
      nlInput.value = ''; nlInput.disabled = true; nlBtn.disabled = true;
    });
  }

  /* ════════════════════════════════
     CARROSSEL STORIES — CORRIGIDO
     ════════════════════════════════ */
  const track    = document.getElementById('storiesTrack');
  const dots     = document.querySelectorAll('.sdot');
  const btnPrev  = document.getElementById('storiesPrev');
  const btnNext  = document.getElementById('storiesNext');

  if (track) {
    const cards = Array.from(track.querySelectorAll('.story-card'));
    let current = 0;
    let autoTimer = null;

    const visivel = () => {
      const w = window.innerWidth;
      if (w <= 560) return 1;
      if (w <= 960) return 2;
      return 4;
    };

    const maxIdx = () => Math.max(0, cards.length - visivel());

    const goTo = (idx) => {
      current = Math.max(0, Math.min(idx, maxIdx()));
      // Calcula largura real de um card + gap
      const gap   = 16;
      const cardW = cards[0].getBoundingClientRect().width + gap;
      track.style.transform = `translateX(-${current * cardW}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    const resetAuto = () => {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => goTo(current >= maxIdx() ? 0 : current + 1), 4500);
    };

    btnPrev && btnPrev.addEventListener('click', () => { goTo(current <= 0 ? maxIdx() : current - 1); resetAuto(); });
    btnNext && btnNext.addEventListener('click', () => { goTo(current >= maxIdx() ? 0 : current + 1); resetAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));

    // Swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? goTo(current + 1) : goTo(current - 1); resetAuto(); }
    });

    window.addEventListener('resize', () => { current = 0; goTo(0); });
    resetAuto();
  }

  /* ════════════════════════════════
     ASSISTENTE VIRTUAL
     ════════════════════════════════ */
  const bubble   = document.getElementById('chatBubble');
  const chatWin  = document.getElementById('chatWindow');
  const closeBtn = document.getElementById('chatClose');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  const notif    = document.getElementById('chatNotif');

  if (!bubble || !chatWin) return;

  // Respostas automáticas
  const respostas = {
    postos: [
      'Temos postos espalhados por Brasília/DF e também no <strong>Iate Clube de Brasília</strong> para abastecimento náutico! 📍',
      'Para encontrar o posto mais próximo, use o campo de busca na página principal ou acesse: <a href="#postos" style="color:var(--laranja)">clique aqui</a>. 🗺️'
    ],
    combustiveis: [
      'Trabalhamos com toda a linha Petrobras: <strong>Podium Carbono Neutro, Gasolina Aditivada, Etanol, Diesel S10 e Diesel Aditivado</strong>. ⛽',
      'Nosso destaque é o <strong>Petrobras Podium Carbono Neutro</strong> — exclusivo e inovador, disponível na nossa rede! 🏆'
    ],
    empresas: [
      'Para empresas, oferecemos: <strong>Plano Faturado</strong>, <strong>Pagamento a Prazo</strong> e <strong>Sistema de Gestão Gratuito</strong> para frota. 🚛',
      'Mais controle, menos custo, muito mais estrada. Quer falar com nosso consultor? Me diga que conecto você agora! 📊'
    ],
    agasalho: [
      'A <strong>Campanha do Agasalho</strong> está ativa em todos os nossos postos! 🧥',
      'Você pode doar casacos, cobertores, roupas de frio e meias. Sua doação pode <em>aquecer uma vida</em>. ❤️'
    ],
    nautico: [
      'Temos uma <strong>nova parceria com o Iate Clube de Brasília</strong>! ⚓',
      'Abastecimento náutico com a qualidade Quality. <em>Faz o check no lago também!</em> 🚢'
    ],
    whatsapp: [
      'Vou te conectar com nosso atendimento agora! 💬',
      'Clique aqui para falar com a equipe Quality no WhatsApp: <a href="https://wa.me/5561999999999" target="_blank" style="color:var(--laranja);font-weight:700;">Abrir WhatsApp →</a>'
    ]
  };

  const keywords = {
    posto: 'postos', gasolina: 'combustiveis', etanol: 'combustiveis',
    diesel: 'combustiveis', combustivel: 'combustiveis', empresa: 'empresas',
    frota: 'empresas', fatura: 'empresas', agasalho: 'agasalho', doação: 'agasalho',
    nautico: 'nautico', iate: 'nautico', barco: 'nautico', zap: 'whatsapp',
    whatsapp: 'whatsapp', atendente: 'whatsapp', humano: 'whatsapp'
  };

  let isOpen = false;

  const openChat = () => {
    isOpen = true;
    chatWin.classList.add('open');
    if (notif) notif.style.display = 'none';
    setTimeout(() => chatInput && chatInput.focus(), 300);
  };

  const closeChat = () => {
    isOpen = false;
    chatWin.classList.remove('open');
  };

  bubble.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn && closeBtn.addEventListener('click', closeChat);

  // Adicionar mensagem no chat
  const addMsg = (text, type = 'bot') => {
    const div = document.createElement('div');
    div.className = `chat-msg ${type}`;
    if (type === 'bot') {
      div.innerHTML = `
        <div class="chat-avatar">✔</div>
        <div class="chat-bubble-msg">${text}</div>
      `;
    } else {
      div.innerHTML = `<div class="chat-bubble-msg">${text}</div>`;
    }
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  // Indicador de digitação
  const showTyping = () => {
    const div = document.createElement('div');
    div.className = 'chat-msg bot chat-typing-row';
    div.innerHTML = `
      <div class="chat-avatar">✔</div>
      <div class="chat-typing"><span></span><span></span><span></span></div>
    `;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
    return div;
  };

  // Resposta do bot
  const botResponder = (opcao) => {
    const msgs = respostas[opcao];
    if (!msgs) {
      const typing = showTyping();
      setTimeout(() => {
        typing.remove();
        addMsg('Não entendi muito bem 😅 Mas pode escolher uma das opções abaixo ou digitar <strong>whatsapp</strong> para falar com a equipe!');
        mostrarOpcoes();
      }, 1000);
      return;
    }
    let delay = 800;
    msgs.forEach((msg, i) => {
      const typing = showTyping();
      setTimeout(() => {
        typing.remove();
        addMsg(msg);
        if (i === msgs.length - 1) setTimeout(mostrarOpcoes, 600);
      }, delay + i * 1200);
    });
  };

  const mostrarOpcoes = () => {
    const existing = chatBody.querySelector('.chat-opcoes');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = 'chat-opcoes';
    div.innerHTML = `
      <button class="chat-op" data-op="postos">📍 Encontrar Posto</button>
      <button class="chat-op" data-op="combustiveis">⛽ Combustíveis</button>
      <button class="chat-op" data-op="empresas">🚛 Para Empresas</button>
      <button class="chat-op" data-op="agasalho">🧥 Campanha Agasalho</button>
      <button class="chat-op" data-op="nautico">⚓ Posto Náutico</button>
      <button class="chat-op" data-op="whatsapp">💬 Falar com Atendente</button>
    `;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
    div.querySelectorAll('.chat-op').forEach(btn => {
      btn.addEventListener('click', () => {
        const op = btn.dataset.op;
        addMsg(btn.textContent.trim(), 'user');
        div.remove();
        botResponder(op);
      });
    });
  };

  // Cliques nas opções iniciais
  document.querySelectorAll('.chat-op').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isOpen) openChat();
      const op = btn.dataset.op;
      addMsg(btn.textContent.trim(), 'user');
      btn.closest('.chat-opcoes').remove();
      botResponder(op);
    });
  });

  // Input livre
  const enviarMensagem = () => {
    const txt = chatInput.value.trim();
    if (!txt) return;
    if (txt.toLowerCase() === 'sair') { closeChat(); chatInput.value = ''; return; }
    addMsg(txt, 'user');
    chatInput.value = '';
    const lower = txt.toLowerCase().replace(/[áàãâä]/g,'a').replace(/[éèê]/g,'e')
      .replace(/[íìî]/g,'i').replace(/[óòõô]/g,'o').replace(/[úùû]/g,'u').replace(/ç/g,'c');
    const match = Object.keys(keywords).find(k => lower.includes(k));
    botResponder(match ? keywords[match] : null);
  };

  chatSend && chatSend.addEventListener('click', enviarMensagem);
  chatInput && chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') enviarMensagem(); });

  // Abrir automaticamente após 4s com mensagem de boas-vindas
  setTimeout(() => {
    if (!isOpen) {
      openChat();
    }
  }, 4000);

});
