/* ============================================
   QUALITY COMBUSTÍVEIS — postos.js
   Dados reais extraídos da planilha da rede
   ============================================ */

const POSTOS = [
  // ── PLANO PILOTO ──────────────────────────────
  { id: 1,  lat: -15.7475676, lng: -47.8467478, nome: "Quality Plano Piloto 01",     regiao: "plano",      end: "Plano Piloto — Brasília/DF",          url: "https://www.google.com.br/maps/place/Posto+Petrobras/@-15.7476543,-47.846831,68m" },
  { id: 2,  lat: -15.7553196, lng: -47.8899879, nome: "Quality Plano Piloto 02",     regiao: "plano",      end: "Plano Piloto — Brasília/DF",          url: "https://www.google.com/maps/place/15%C2%B045'19.2%22S+47%C2%B053'24.0%22W/@-15.7553196,-47.8925628,17z" },
  { id: 3,  lat: -15.7660556, lng: -47.8790278, nome: "Quality Plano Piloto 03",     regiao: "plano",      end: "Plano Piloto — Brasília/DF",          url: "https://www.google.com/maps/place/15%C2%B045'57.8%22S+47%C2%B052'44.5%22W/@-15.7660556,-47.8790278,17z" },
  { id: 4,  lat: -15.7889444, lng: -47.8885833, nome: "Quality Plano Piloto 04",     regiao: "plano",      end: "Plano Piloto — Brasília/DF",          url: "https://www.google.com.br/maps/place/15%C2%B047'20.2%22S+47%C2%B053'18.9%22W/@-15.7889444,-47.8885833,1085m" },
  { id: 5,  lat: -15.7552634, lng: -47.8901778, nome: "Quality Posto Verde Amarelo", regiao: "plano",      end: "Plano Piloto — Brasília/DF",          url: "https://www.google.com/maps/place/Posto+Verde+Amarelo/@-15.7552634,-47.8901778,17z" },
  { id: 6,  lat: -15.8198620, lng: -47.9105830, nome: "Quality Plano Piloto 06",     regiao: "plano",      end: "Plano Piloto Sul — Brasília/DF",      url: "https://www.waze.com/pt-BR/live-map/directions?to=ll.-15.819862%2C-47.910583" },
  { id: 7,  lat: -15.8438333, lng: -47.8911667, nome: "Quality Plano Piloto 07",     regiao: "plano",      end: "Plano Piloto Sul — Brasília/DF",      url: "https://www.google.com/maps/place/15%C2%B050'37.8%22S+47%C2%B053'28.2%22W/@-15.8438333,-47.8911667,17z" },

  // ── GUARÁ / SUDOESTE ──────────────────────────
  { id: 8,  lat: -15.7966667, lng: -47.9671944, nome: "Quality Guará",               regiao: "outros",     end: "Guará — Brasília/DF",                url: "https://www.google.com/maps/place/15%C2%B047'48.0%22S+47%C2%B058'01.9%22W/@-15.7966667,-47.9671944,17z" },
  { id: 9,  lat: -15.8741741, lng: -47.9749694, nome: "Quality Núcleo Bandeirante",  regiao: "outros",     end: "Núcleo Bandeirante — Brasília/DF",    url: "https://www.google.com/maps/dir/-15.897493,-47.9923556/-15.8704713,-47.9740172" },
  { id: 10, lat: -15.7872778, lng: -47.9863333, nome: "Quality Águas Claras 01",     regiao: "outros",     end: "Águas Claras — Brasília/DF",          url: "https://www.google.com/maps/place/15%C2%B047'14.2%22S+47%C2%B059'10.8%22W/@-15.7872778,-47.9863333,17z" },

  // ── TAGUATINGA ────────────────────────────────
  { id: 11, lat: -15.8729010, lng: -48.0287125, nome: "Quality Taguatinga 01",       regiao: "taguatinga", end: "Taguatinga — Brasília/DF",            url: "https://www.google.com/maps/place/Auto+Posto+QS+09/@-15.872901,-48.0287125,17z" },
  { id: 12, lat: -15.8293116, lng: -48.0330537, nome: "Quality Taguatinga 02",       regiao: "taguatinga", end: "Taguatinga — Brasília/DF",            url: "https://www.google.com/maps/place/Posto+BR/@-15.8293116,-48.0330537,17z" },
  { id: 13, lat: -15.8010556, lng: -48.0606111, nome: "Quality Taguatinga 03",       regiao: "taguatinga", end: "Taguatinga Norte — Brasília/DF",      url: "https://www.google.com/maps/place/15%C2%B048'03.8%22S+48%C2%B003'38.2%22W/@-15.8010556,-48.0606111,17z" },
  { id: 14, lat: -15.7964460, lng: -48.0655360, nome: "Quality Taguatinga 04",       regiao: "taguatinga", end: "Taguatinga Norte — Brasília/DF",      url: "https://www.google.com/maps/place/15%C2%B047'47.2%22S+48%C2%B003'55.9%22W/@-15.796446,-48.065536,17z" },
  { id: 15, lat: -15.8001667, lng: -48.0684167, nome: "Quality Taguatinga 05",       regiao: "taguatinga", end: "Taguatinga — Brasília/DF",            url: "https://www.google.com/maps/place/15%C2%B048'00.6%22S+48%C2%B004'06.3%22W/@-15.8001667,-48.0684167,17z" },
  { id: 16, lat: -15.8424737, lng: -48.0526647, nome: "Quality Taguatinga Sul 01",   regiao: "taguatinga", end: "Taguatinga Sul — Brasília/DF",        url: "https://www.google.com/maps/place/8+-+St.+B+Sul+QSB+15+-+Taguatinga/@-15.8424737,-48.0526647,17z" },
  { id: 17, lat: -15.8417520, lng: -48.0577240, nome: "Quality Taguatinga Sul 02",   regiao: "taguatinga", end: "Taguatinga Sul — Brasília/DF",        url: "https://www.google.com/maps/place/15%C2%B050'30.3%22S+48%C2%B003'27.8%22W/@-15.841752,-48.057724,17z" },
  { id: 18, lat: -15.8364644, lng: -48.0558087, nome: "Quality Taguatinga Sul 03",   regiao: "taguatinga", end: "Taguatinga Sul — Brasília/DF",        url: "https://www.google.com/maps/@-15.8364644,-48.0558087,3a" },
  { id: 19, lat: -15.8334685, lng: -48.0611732, nome: "Quality Taguatinga Sul 04",   regiao: "taguatinga", end: "Taguatinga Sul — Brasília/DF",        url: "https://www.google.com/maps/place/15%C2%B050'00.5%22S+48%C2%B003'40.2%22W/@-15.8334685,-48.0637481,17z" },
  { id: 20, lat: -15.8315550, lng: -48.0770920, nome: "Quality Taguatinga 06",       regiao: "taguatinga", end: "Taguatinga — Brasília/DF",            url: "https://www.google.com.br/maps/place/15%C2%B049'53.6%22S+48%C2%B004'37.5%22W/@-15.831555,-48.077092,1085m" },

  // ── CEILÂNDIA ─────────────────────────────────
  { id: 21, lat: -15.8316056, lng: -48.1090282, nome: "Quality Ceilândia 01",        regiao: "ceilandia",  end: "Ceilândia — Brasília/DF",             url: "https://www.google.com/maps/place/15%C2%B049'53.8%22S+48%C2%B006'32.5%22W/@-15.8316056,-48.1116031,17z" },
  { id: 22, lat: -15.8460731, lng: -48.1064007, nome: "Quality Ceilândia 02",        regiao: "ceilandia",  end: "Ceilândia — Brasília/DF",             url: "https://www.google.com/maps/place/Posto+Petrobras/@-15.8461485,-48.106358,17z" },
  { id: 23, lat: -15.7962292, lng: -48.1414738, nome: "Quality Ceilândia 03",        regiao: "ceilandia",  end: "Ceilândia Norte — Brasília/DF",       url: "https://www.google.com/maps/place/15%C2%B047'46.4%22S+48%C2%B008'29.3%22W/@-15.7962292,-48.1440487,17z" },

  // ── SAMAMBAIA ─────────────────────────────────
  { id: 24, lat: -15.8686050, lng: -48.0859850, nome: "Quality Samambaia 01",        regiao: "samambaia",  end: "Samambaia — Brasília/DF",             url: "https://www.google.com/maps/place/15%C2%B052'07.0%22S+48%C2%B005'09.6%22W/@-15.868605,-48.085985,17z" },

  // ── RECANTO DAS EMAS ──────────────────────────
  { id: 25, lat: -15.9113430, lng: -48.0930039, nome: "Quality Recanto das Emas",    regiao: "outros",     end: "Recanto das Emas — Brasília/DF",      url: "https://www.google.com/maps/place/Posto+Petrobr%C3%A1s+Q304+Recanto+das+Emas/@-15.911343,-48.0930039,17z" },

  // ── LUZIÂNIA / ENTORNO ────────────────────────
  { id: 26, lat: -16.2536480, lng: -47.9485240, nome: "Quality Luziânia 01",         regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/16%C2%B015'13.1%22S+47%C2%B056'54.7%22W/@-16.253648,-47.948524,17z" },
  { id: 27, lat: -16.2476210, lng: -47.9145120, nome: "Quality Luziânia 02",         regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/16%C2%B014'51.4%22S+47%C2%B054'52.2%22W/@-16.247621,-47.914512,17z" },
  { id: 28, lat: -16.1001030, lng: -47.9197240, nome: "Quality Luziânia 03",         regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/16%C2%B006'00.4%22S+47%C2%B055'11.0%22W/@-16.100103,-47.9222989,17z" },
  { id: 29, lat: -16.0762629, lng: -47.9741777, nome: "Quality Luziânia 04",         regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/16%C2%B004'34.6%22S+47%C2%B058'27.0%22W/@-16.0762629,-47.9767526,17z" },
  { id: 30, lat: -16.0173889, lng: -48.0627222, nome: "Quality Luziânia 05",         regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/16%C2%B001'02.6%22S+48%C2%B003'45.8%22W/@-16.0173889,-48.0627222,17z" },
  { id: 31, lat: -16.0234454, lng: -48.0718910, nome: "Quality Petrogama",           regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/Petrogama/@-16.0234454,-48.071891,17z" },
  { id: 32, lat: -16.0201880, lng: -48.1851207, nome: "Quality Auto Posto DF 290",   regiao: "luziania",   end: "Luziânia — GO",                       url: "https://www.google.com/maps/place/Auto+Posto+DF+290/@-16.020188,-48.1851207,17z" },
];

/* ── INICIALIZA MAPA E CARDS ── */
document.addEventListener('DOMContentLoaded', () => {

  // ── MAPA LEAFLET ──────────────────────────────
  const mapaEl = document.getElementById('mapaPostos');
  if (!mapaEl) return;

  const mapa = L.map('mapaPostos', {
    center: [-15.95, -48.02],
    zoom: 10,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(mapa);

  // Ícone personalizado Quality
  const iconQuality = L.divIcon({
    className: '',
    html: `<div style="
      width:30px;height:30px;border-radius:50% 50% 50% 0;
      background:#281A4E;border:3px solid #E87914;
      transform:rotate(-45deg);
      box-shadow:0 2px 8px rgba(0,0,0,.35);
    "><span style="
      display:block;transform:rotate(45deg);
      text-align:center;line-height:24px;
      font-size:13px;
    ">⛽</span></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -32],
  });

  const marcadores = {};

  POSTOS.forEach(p => {
    const marker = L.marker([p.lat, p.lng], { icon: iconQuality })
      .addTo(mapa)
      .bindPopup(`
        <div style="font-family:'Montserrat',sans-serif;min-width:180px;">
          <strong style="color:#281A4E;font-size:13px;">${p.nome}</strong><br>
          <span style="color:#666;font-size:11px;">📍 ${p.end}</span><br><br>
          <a href="${p.url}" target="_blank"
            style="background:#E87914;color:#fff;padding:5px 12px;font-size:11px;
                   font-weight:800;text-decoration:none;letter-spacing:.5px;text-transform:uppercase;">
            VER NO MAPS →
          </a>
        </div>
      `, { maxWidth: 240 });
    marcadores[p.id] = marker;
  });

  // ── CARDS DOS POSTOS ──────────────────────────
  const grid = document.getElementById('postosGrid');
  const countEl = document.getElementById('postosCount');

  const renderCards = (lista) => {
    if (!grid) return;
    grid.innerHTML = lista.map(p => `
      <div class="posto-card" data-id="${p.id}" data-regiao="${p.regiao}">
        <div class="posto-card-top">
          <div class="posto-tag-tipo">⛽ Posto ${p.id.toString().padStart(2,'0')}</div>
          <div class="posto-status aberto">● Aberto</div>
        </div>
        <h4>${p.nome}</h4>
        <p class="posto-end">📍 ${p.end}</p>
        <div class="posto-servicos">
          <span>Gasolina</span><span>Etanol</span><span>Diesel S10</span><span>Podium</span>
        </div>
        <a class="posto-mapa-btn" href="${p.url}" target="_blank">Ver no mapa →</a>
      </div>
    `).join('');

    if (countEl) countEl.textContent = `${lista.length} posto${lista.length !== 1 ? 's' : ''} encontrado${lista.length !== 1 ? 's' : ''}`;

    // Ao clicar no card, centraliza o mapa no marcador
    grid.querySelectorAll('.posto-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        const p = POSTOS.find(x => x.id === id);
        if (p) {
          mapa.setView([p.lat, p.lng], 15, { animate: true });
          marcadores[id].openPopup();
          document.getElementById('postos').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };

  renderCards(POSTOS);

  // ── FILTROS POR REGIÃO ────────────────────────
  document.querySelectorAll('.pfiltro').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pfiltro').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const regiao = btn.dataset.regiao;
      const filtrado = regiao === 'todos' ? POSTOS : POSTOS.filter(p => p.regiao === regiao);
      renderCards(filtrado);

      // Atualiza visibilidade dos marcadores
      POSTOS.forEach(p => {
        const m = marcadores[p.id];
        if (regiao === 'todos' || p.regiao === regiao) {
          if (!mapa.hasLayer(m)) m.addTo(mapa);
        } else {
          if (mapa.hasLayer(m)) mapa.removeLayer(m);
        }
      });

      // Reposiciona mapa
      if (filtrado.length > 0) {
        const bounds = L.latLngBounds(filtrado.map(p => [p.lat, p.lng]));
        mapa.fitBounds(bounds, { padding: [40, 40] });
      }
    });
  });

  // ── BUSCA TEXTUAL ─────────────────────────────
  const inputBusca = document.querySelector('.campo-busca');
  const btnBusca   = document.querySelector('.btn-busca');

  const buscar = () => {
    const q = (inputBusca?.value || '').trim().toLowerCase();
    const filtrado = q
      ? POSTOS.filter(p =>
          p.nome.toLowerCase().includes(q) ||
          p.end.toLowerCase().includes(q) ||
          p.regiao.toLowerCase().includes(q)
        )
      : POSTOS;
    renderCards(filtrado);
    document.querySelectorAll('.pfiltro').forEach(b => b.classList.remove('active'));
    document.querySelector('.pfiltro[data-regiao="todos"]')?.classList.add('active');

    if (filtrado.length > 0) {
      const bounds = L.latLngBounds(filtrado.map(p => [p.lat, p.lng]));
      mapa.fitBounds(bounds, { padding: [40, 40] });
    }
  };

  btnBusca?.addEventListener('click', buscar);
  inputBusca?.addEventListener('keydown', e => { if (e.key === 'Enter') buscar(); });
  inputBusca?.addEventListener('input', buscar);

});
