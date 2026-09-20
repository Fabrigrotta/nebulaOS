/* ================= CONFIGURACIÓN DE APPS & ICONOS ================= */
const APPS = {
  files:    { title: 'Archivos', sub: 'Gestor inteligente de archivos', icon: 'folder', image: './imagenes/archivos.png', tileClass: 'app-tile-files', accentColor: '#3a86ff' },
  terminal: { title: 'Terminal', sub: 'WezTerm Emulator', icon: 'terminal', image: './imagenes/terminal.png', tileClass: 'app-tile-terminal', accentColor: '#38bdf8' },
  browser:  { title: 'Firefox', sub: 'Navegador Web', icon: 'globe', image: './imagenes/firefox.png', tileClass: 'app-tile-browser', accentColor: '#f59e0b' },
  music:    { title: 'Spotify', sub: 'Reproductor de Música', icon: 'music', image: './imagenes/spotify.png', tileClass: 'app-tile-music', accentColor: '#1ed760' },
  games:    { title: 'Steam', sub: 'Librería de Juegos', icon: 'gamepad-2', image: './imagenes/Steam.png', tileClass: 'app-tile-games', accentColor: '#7c3aed' },
  vscode:   { title: 'VS Code', sub: 'Editor de Código', icon: 'code-2', image: './imagenes/VSC.png', tileClass: 'app-tile-vscode', accentColor: '#0284c7' },
  settings: { title: 'Ajustes', sub: 'Panel de Control & Designer', icon: 'sliders', image: './imagenes/Ajustes.png', tileClass: 'app-tile-settings', accentColor: '#94a3b8' },
  nova:     { title: 'Nova AI', sub: 'Asistente Gamer & Tweaker', icon: 'sparkles', image: './NOVA AI/logo nova.png', tileClass: 'app-tile-nova', accentColor: '#c026d3' }
};

const DOCK_APPS = ['browser', 'terminal', 'nova', 'files', 'vscode', 'music', 'games', 'settings'];

/* ★ Cantidad total de workspaces disponibles */
const TOTAL_WORKSPACES = 5;

const WALLPAPERS = [
  { file: 'fondo principal.jpg', name: 'Nebula', accent: '#b4befe', text: '#cdd6f4', sub: '#bac2de', green: '#a6e3a1', panel: 'rgba(18,21,33,0.72)' },
  { file: 'fondo 2.jpg', name: 'Aurora', accent: '#89dceb', text: '#d9f4ff', sub: '#a9c6d3', green: '#a6e3a1', panel: 'rgba(11,31,39,0.75)' },
  { file: 'fondo 3.jpg', name: 'Solar', accent: '#f9c784', text: '#fff1dc', sub: '#d7bfa4', green: '#b8e986', panel: 'rgba(43,25,20,0.75)' }
];

const THEME_PRESETS = {
  cyberpunk: {
    name: 'Cyberpunk Neón',
    accent: '#00ffcc',
    accentGlow: 'rgba(0, 255, 204, 0.5)',
    panelColor: 'rgba(10, 14, 22, 0.88)',
    blurAmount: '12px',
    borderRadius: '10px',
    textMain: '#e0fff5',
    textSub: '#7ab8a8',
    bgDark: '#0a0e18',
    accentGreen: '#00ff88',
    accentRed: '#ff2a6d',
    accentOrange: '#ff9e00',
    colors: ['#00ffcc', '#ff007f', '#7928ca', '#0a0e18']
  },
  catppuccin: {
    name: 'Minimal Catppuccin',
    accent: '#cba6f7',
    accentGlow: 'rgba(203, 166, 247, 0.45)',
    panelColor: 'rgba(18, 21, 33, 0.72)',
    blurAmount: '20px',
    borderRadius: '16px',
    textMain: '#cdd6f4',
    textSub: '#9399b2',
    bgDark: '#0d0f17',
    accentGreen: '#a6e3a1',
    accentRed: '#f38ba8',
    accentOrange: '#fab387',
    colors: ['#cba6f7', '#89b4fa', '#f5c2e7', '#1e1e2e']
  },
  synthwave: {
    name: 'Retro Synthwave',
    accent: '#ff71ce',
    accentGlow: 'rgba(255, 113, 206, 0.5)',
    panelColor: 'rgba(26, 16, 44, 0.82)',
    blurAmount: '16px',
    borderRadius: '14px',
    textMain: '#ffe4f6',
    textSub: '#b07aa8',
    bgDark: '#1a102c',
    accentGreen: '#05ffa1',
    accentRed: '#ff3860',
    accentOrange: '#ffb86c',
    colors: ['#ff71ce', '#01cdfe', '#05ffa1', '#1a102c']
  },
  stealth: {
    name: 'Dark Stealth',
    accent: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.4)',
    panelColor: 'rgba(12, 14, 18, 0.94)',
    blurAmount: '6px',
    borderRadius: '6px',
    textMain: '#d1d5db',
    textSub: '#6b7280',
    bgDark: '#08090c',
    accentGreen: '#34d399',
    accentRed: '#ef4444',
    accentOrange: '#f59e0b',
    colors: ['#10b981', '#3b82f6', '#475569', '#08090c']
  }
};

const TRACKS = [
  { title: 'Bocanada', artist: 'Gustavo Cerati', album: 'Bocanada', art: './spotify/tapa album 2.jpg', duration: 272 },
  { title: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', art: './spotify/tapa album 1.jpg', duration: 301 },
  { title: 'Prohibido', artist: 'Callejeros', album: 'Rock Nacional', art: './spotify/album 3.jpg', duration: 225 },
  { title: 'Cyberpunk Night City Beat', artist: 'Hyper Sound', album: 'Synthwave Mix', art: './spotify/top 50.jpg', duration: 192 }
];

/* ================= CATÁLOGO DE ESTILOS DE DOCK PREVIEW ================= */
const DOCK_PREVIEW_STYLES = {
  blueprint: { name: 'Blueprint',        desc: 'Plano técnico / sci-fi con líneas de acento',       available: true },
  minimal:   { name: 'Minimal',          desc: 'Limpio y directo, sin adornos',                     available: true },
  brutalist: { name: 'Neo-Brutalism',    desc: 'Borde grueso y sombra dura estilo brutalista',      available: true },
  glitch:    { name: 'Cyberpunk Glitch', desc: 'Scanlines, glitch digital y neón cyan/magenta',     available: true },
  neumorph:  { name: 'Neumorphism',      desc: 'Relieve esculpido suave, estilo Apple-esque',       available: true },
  crt:       { name: 'Terminal CRT',     desc: 'Monitor retro con scanlines y fósforo',             available: true },
  glass:     { name: 'Glass',            desc: 'Cristal translúcido y bordes suaves',               available: false },
  compact:   { name: 'Compacto',         desc: 'Solo lo esencial: ícono y datos',                   available: false }
};

/* ================= VARIABLES GLOBALES DE ESTADO ================= */
let openWindows = {};
let appInstanceCounter = {};
let zIndexCounter = 100;
let activeWinId = null;
let currentWorkspace = 1;
let currentWallpaperIndex = 0;
let fullscreenWindowId = null;
const widgetStartedAt = Date.now();
const calendarState = { date: new Date(), selectedDate: null, notes: {} };
const systemMetrics = { ram: 38, cpu: 24, temp: 42, gpu: 62, vram: 4.8, fps: 144 };

let gameModeActive = false;
let currentProfile = 'gamer';
let gamerOverlayVisible = false;
let currentTrackIndex = 0;
let isPlaying = false;
let playbackProgress = 32;
let systemVolume = 80;

let wifiEnabled = true;
let bluetoothEnabled = false;
let dndEnabled = false;
let currentBrightness = 100;

let currentPlaybackTime = 0;
let shuffleEnabled = false;
let repeatEnabled = false;

let editingNoteKey = null;
let editingNoteIndex = null;

let lastClockSecond = null;
let lastClockMinute = null;

let designerState = {
  activePreset: 'catppuccin',
  accent: '#b4befe',
  textMain: '#cdd6f4',
  textSub: '#9399b2',
  bgDark: '#0d0f17',
  accentGreen: '#a6e3a1',
  accentRed: '#f38ba8',
  accentOrange: '#fab387',
  panelColor: 'rgba(18, 21, 33, 0.72)',
  panelAlpha: 0.72,
  blurAmount: 18,
  borderRadius: 14,
  dockStyle: 'floating',
  dockPreviewStyle: 'blueprint'
};

let desktopWidgets = [];

let dockPreviewEl = null;
let dockPreviewTimeout = null;

let windowManagerOpen = false;
let wmDragState = null;

/* ★ Estado del Dock Context Menu */
let dockContextMenuEl = null;
let dockContextMenuAppId = null;

const SETTINGS_STORAGE_KEY = 'nebula-os:settings';
const WALLPAPER_STORAGE_KEY = 'nebula-os:wallpaper';
const GAMEMODE_STORAGE_KEY = 'nebula-os:gamemode';
const PROFILE_STORAGE_KEY = 'nebula-os:profile';
const DESIGNER_STORAGE_KEY = 'nebula-os:designer';
const WIDGETS_STORAGE_KEY = 'nebula-os:widgets';
const WIFI_STORAGE_KEY = 'nebula-os:wifi';
const BT_STORAGE_KEY = 'nebula-os:bluetooth';
const DND_STORAGE_KEY = 'nebula-os:dnd';
const BRIGHTNESS_STORAGE_KEY = 'nebula-os:brightness';
const CALENDAR_NOTES_STORAGE_KEY = 'nebula-os:calendar-notes';

let settingsState = { animations: true, transparency: true, activeSettingsTab: 'designer' };

/* ================= HELPER DE ICONOGRAFÍA LUCIDE ================= */
function refreshIcons() {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

/* ================= HELPERS DE INSTANCIAS ================= */
function generateWinId(appId) {
  if (!appInstanceCounter[appId]) appInstanceCounter[appId] = 0;
  appInstanceCounter[appId]++;
  return `${appId}-${appInstanceCounter[appId]}`;
}

function getInstancesOfApp(appId) {
  return Object.keys(openWindows).filter(winId => openWindows[winId]?.appId === appId);
}

function getLastInstanceOfApp(appId) {
  const ids = getInstancesOfApp(appId);
  if (ids.length === 0) return null;
  return ids.sort((a, b) => {
    const na = parseInt(a.split('-').pop(), 10) || 0;
    const nb = parseInt(b.split('-').pop(), 10) || 0;
    return nb - na;
  })[0];
}

function countInstancesByApp() {
  const counts = {};
  Object.values(openWindows).forEach(entry => {
    if (!entry?.appId) return;
    counts[entry.appId] = (counts[entry.appId] || 0) + 1;
  });
  return counts;
}

function getInstanceNumber(winId) {
  if (!openWindows[winId]) return 1;
  const appId = openWindows[winId].appId;
  const ids = getInstancesOfApp(appId).sort((a, b) => {
    const na = parseInt(a.split('-').pop(), 10) || 0;
    const nb = parseInt(b.split('-').pop(), 10) || 0;
    return na - nb;
  });
  return ids.indexOf(winId) + 1;
}

/* ================= SLIDERS: FILL DINÁMICO ================= */
function syncSliderFill(slider) {
  if (!slider || slider.type !== 'range') return;
  const min = Number(slider.min) || 0;
  const max = Number(slider.max) || 100;
  const val = Number(slider.value);
  const range = (max - min) || 1;
  const pct = Math.max(0, Math.min(100, ((val - min) / range) * 100));
  slider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, rgba(255,255,255,0.1) ${pct}%)`;
}

function syncAllSliders() {
  document.querySelectorAll('input[type="range"]').forEach(syncSliderFill);
}

document.addEventListener('input', (e) => {
  if (e.target instanceof HTMLInputElement && e.target.type === 'range') {
    syncSliderFill(e.target);
  }
});

/* ================= RELOJ CON SEGUNDOS Y ANIMACIÓN ================= */
function updateClock() {
  const clockWrap = document.getElementById('clock');
  const timeEl = document.getElementById('clock-time');
  const dateEl = document.getElementById('clock-date');
  if (!clockWrap || !timeEl || !dateEl) return;

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  timeEl.textContent = `${hh}:${mm}:${ss}`;

  const shortDays = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  dateEl.textContent = `${shortDays[now.getDay()]} ${now.getDate()}`;

  const longDays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const longMonths = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const fullTooltip = `${longDays[now.getDay()]}, ${now.getDate()} de ${longMonths[now.getMonth()]} de ${now.getFullYear()} · ${hh}:${mm}:${ss}`;
  clockWrap.setAttribute('title', fullTooltip);

  const currentSecond = now.getSeconds();
  const currentMinute = now.getMinutes();

  if (lastClockSecond === null) {
    lastClockSecond = currentSecond;
    lastClockMinute = currentMinute;
    return;
  }

  if (currentSecond !== lastClockSecond) {
    clockWrap.classList.remove('clock-tick');
    void clockWrap.offsetWidth;
    clockWrap.classList.add('clock-tick');
    setTimeout(() => clockWrap.classList.remove('clock-tick'), 600);
    lastClockSecond = currentSecond;
  }

  if (currentMinute !== lastClockMinute) {
    clockWrap.classList.remove('clock-minute-bounce');
    void clockWrap.offsetWidth;
    clockWrap.classList.add('clock-minute-bounce');
    setTimeout(() => clockWrap.classList.remove('clock-minute-bounce'), 800);
    lastClockMinute = currentMinute;
  }
}

/* ================= POSICIÓN DINÁMICA DE TOASTS ================= */
function updateToastPosition() {
  const container = document.getElementById('toast-container');
  const quickCenter = document.getElementById('quick-center');
  if (!container || !quickCenter) return;

  const isQuickCenterOpen = !quickCenter.classList.contains('hidden');
  container.classList.toggle('shifted', isQuickCenterOpen);
}

/* ================= CIERRE DE PANELES ================= */
function closeControlCenter() {
  const cc = document.getElementById('control-center');
  if (!cc || cc.classList.contains('hidden')) return;
  cc.classList.add('hidden');
  resetCalendarToToday();
}

function closeQuickCenter() {
  const qc = document.getElementById('quick-center');
  if (!qc) return;
  qc.classList.add('hidden');
  updateToastPosition();
}

/* ================= MIGRACIÓN DE NOTAS ================= */
function migrateNotesFormat(notes) {
  if (!notes || typeof notes !== 'object') return {};
  const migrated = {};
  Object.keys(notes).forEach(key => {
    const value = notes[key];
    if (Array.isArray(value)) {
      migrated[key] = value.filter(v => typeof v === 'string' && v.trim().length > 0);
    } else if (typeof value === 'string' && value.trim().length > 0) {
      migrated[key] = [value];
    }
  });
  return migrated;
}

/* ================= INICIALIZACIÓN DEL SISTEMA ================= */
document.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  setTimeout(() => bootScreen && bootScreen.classList.add('boot-complete'), 850);
  setTimeout(() => bootScreen && bootScreen.remove(), 1450);

  createStars();
  loadPersistedState();
  renderDock();
  setupSliders();
  updateClock();
  setInterval(updateClock, 1000);
  applyWallpaper(currentWallpaperIndex);
  applySettings();
  setupDeviceStatus();
  setupKeyboardAccessibility();
  setupAdvancedWidget();
  setupTelemetryLoop();
  setupShortcuts();
  renderDesktopWidgets();
  renderConnectivityState();
  renderDndState();
  applyBrightness(currentBrightness);
  setupQuickCenterPlayer();
  updatePlayerBackground();
  updatePlayerProgress();
  updateToastPosition();
  syncAllSliders();
  refreshIcons();

  document.querySelectorAll('.waybar-module, #dock, #control-center, #quick-center, #launcher').forEach(el => {
    el.classList.add('glass-panel');
  });
  
  const sysTrayBtn = document.getElementById('sys-tray-btn');
  const clockCenter = document.getElementById('clock-center');
  const controlCenter = document.getElementById('control-center');
  const quickCenter = document.getElementById('quick-center');
  const trayHudToggle = document.getElementById('tray-hud-toggle');
  const topbarProfilePill = document.getElementById('topbar-profile-pill');

  const toggleControlCenter = () => {
    closeQuickCenter();
    const wasHidden = controlCenter?.classList.contains('hidden');
    controlCenter?.classList.toggle('hidden');
    if (wasHidden) {
      resetCalendarToToday();
    }
    refreshIcons();
  };

  const toggleQuickCenter = () => {
    if (controlCenter && !controlCenter.classList.contains('hidden')) {
      closeControlCenter();
    }
    quickCenter?.classList.toggle('hidden');
    updateToastPosition();
    syncAllSliders();
    refreshIcons();
  };

  if (sysTrayBtn) sysTrayBtn.addEventListener('click', (e) => {
    if (e.target.closest('#tray-hud-toggle')) return;
    toggleQuickCenter();
  });
  if (clockCenter) clockCenter.addEventListener('click', toggleControlCenter);
  if (trayHudToggle) trayHudToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleGamerOverlay();
  });
  if (topbarProfilePill) topbarProfilePill.addEventListener('click', () => {
    const next = currentProfile === 'gamer' ? 'streamer' : currentProfile === 'streamer' ? 'studio' : 'gamer';
    switchProfile(next);
  });

  document.addEventListener('click', (e) => {
    const isPlayerClick = e.target.closest('#cc-spotify-player');
    const isCalendarClick = e.target.closest('.calendar-panel') || e.target.closest('#notes-list');
    const isHudClick = e.target.closest('#gamer-overlay');
    const isWMClick = e.target.closest('#window-manager-overlay');
    const isDockCtxClick = e.target.closest('.dock-context-menu');

    /* ★ Cerramos el menú contextual del dock si el click fue afuera */
    if (!isDockCtxClick) {
      hideDockContextMenu();
    }

    if (!sysTrayBtn?.contains(e.target)
        && !clockCenter?.contains(e.target)
        && !controlCenter?.contains(e.target)
        && !quickCenter?.contains(e.target)
        && !isPlayerClick
        && !isCalendarClick
        && !isHudClick
        && !isWMClick
        && !isDockCtxClick) {
      closeControlCenter();
      closeQuickCenter();
    }
    hideContextMenu();
  });

  /* ★ Context menu del dock: cerramos con contextmenu en otro lado */
  document.addEventListener('contextmenu', (e) => {
    if (!e.target.closest('.dock-item')) {
      hideDockContextMenu();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeControlCenter();
      closeQuickCenter();
      if (gamerOverlayVisible) toggleGamerOverlay();
      if (windowManagerOpen) closeWindowManager();
      hideDockContextMenu();
    }
  });

  /* ★ Cerrar menú contextual al hacer scroll/resize */
  window.addEventListener('resize', hideDockContextMenu);
  window.addEventListener('blur', hideDockContextMenu);
  document.addEventListener('scroll', hideDockContextMenu, true);

  document.getElementById('screen').addEventListener('contextmenu', (e) => {
    if (e.target.closest('#context-menu') || e.target.closest('.window') || e.target.closest('.desktop-widget')) return;
    /* ★ Si el click fue sobre el dock, el handler específico del dock se encarga */
    if (e.target.closest('.dock-item')) return;
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && fullscreenWindowId) {
      const id = fullscreenWindowId;
      fullscreenWindowId = null;
      restoreWindow(id);
    }
  });

  const wmOverlay = document.getElementById('window-manager-overlay');
  if (wmOverlay) {
    wmOverlay.addEventListener('mousedown', (e) => {
      if (e.target === wmOverlay) closeWindowManager();
    });
  }
});

/* ================= SHORTCUTS GLOBALES ================= */
function setupShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.altKey && (e.key === 'z' || e.key === 'Z' || e.key === 'g' || e.key === 'G')) ||
        (e.metaKey && (e.key === 'g' || e.key === 'G'))) {
      e.preventDefault();
      toggleGamerOverlay();
    }
  });
}

/* ================= FEATURE: CONECTIVIDAD ================= */
function toggleWifi(explicitState = null) {
  wifiEnabled = explicitState !== null ? explicitState : !wifiEnabled;

  const wifiToggle = document.getElementById('wifi-toggle');
  if (wifiToggle) {
    wifiToggle.classList.toggle('active', wifiEnabled);
    wifiToggle.setAttribute('aria-pressed', String(wifiEnabled));
  }

  try {
    localStorage.setItem(WIFI_STORAGE_KEY, JSON.stringify(wifiEnabled));
  } catch (e) {}

  renderConnectivityState();

  showToast(
    wifiEnabled ? 'WiFi Activado' : 'WiFi Desactivado',
    wifiEnabled ? 'Conexión inalámbrica establecida.' : 'Sin conexión inalámbrica.',
    wifiEnabled ? 'wifi' : 'wifi-off'
  );
}

function toggleBluetooth(explicitState = null) {
  bluetoothEnabled = explicitState !== null ? explicitState : !bluetoothEnabled;

  const btToggle = document.getElementById('bt-toggle');
  if (btToggle) {
    btToggle.classList.toggle('active', bluetoothEnabled);
    btToggle.setAttribute('aria-pressed', String(bluetoothEnabled));
  }

  try {
    localStorage.setItem(BT_STORAGE_KEY, JSON.stringify(bluetoothEnabled));
  } catch (e) {}

  renderConnectivityState();

  showToast(
    bluetoothEnabled ? 'Bluetooth Activado' : 'Bluetooth Desactivado',
    bluetoothEnabled ? 'Listo para emparejar dispositivos.' : 'Bluetooth apagado.',
    'bluetooth'
  );
}

function renderConnectivityState() {
  const trayWifi = document.getElementById('tray-wifi-item');
  if (trayWifi) {
    const iconEl = trayWifi.querySelector('i, svg');
    if (wifiEnabled) {
      trayWifi.classList.remove('off');
      trayWifi.title = 'WiFi: Conectado';
      if (iconEl) iconEl.outerHTML = '<i data-lucide="wifi" class="tray-icon"></i>';
    } else {
      trayWifi.classList.add('off');
      trayWifi.title = 'WiFi: Desconectado';
      if (iconEl) iconEl.outerHTML = '<i data-lucide="wifi-off" class="tray-icon"></i>';
    }
  }

  const trayBt = document.getElementById('tray-bt-item');
  if (trayBt) {
    if (bluetoothEnabled) {
      trayBt.classList.remove('hidden-tray');
      trayBt.title = 'Bluetooth: Activado';
    } else {
      trayBt.classList.add('hidden-tray');
      trayBt.title = 'Bluetooth: Apagado';
    }
  }

  const wifiToggle = document.getElementById('wifi-toggle');
  if (wifiToggle) {
    wifiToggle.classList.toggle('active', wifiEnabled);
    wifiToggle.setAttribute('aria-pressed', String(wifiEnabled));
  }
  const btToggle = document.getElementById('bt-toggle');
  if (btToggle) {
    btToggle.classList.toggle('active', bluetoothEnabled);
    btToggle.setAttribute('aria-pressed', String(bluetoothEnabled));
  }

  refreshIcons();
}

/* ================= FEATURE: NO MOLESTAR (DND) ================= */
function toggleDnd(explicitState = null) {
  dndEnabled = explicitState !== null ? explicitState : !dndEnabled;

  const dndToggle = document.getElementById('dnd-toggle');
  if (dndToggle) {
    dndToggle.classList.toggle('active', dndEnabled);
    dndToggle.setAttribute('aria-pressed', String(dndEnabled));
  }

  try {
    localStorage.setItem(DND_STORAGE_KEY, JSON.stringify(dndEnabled));
  } catch (e) {}

  showToast(
    dndEnabled ? 'No Molestar Activado' : 'No Molestar Desactivado',
    dndEnabled ? 'Las notificaciones estarán silenciadas.' : 'Las notificaciones volverán a mostrarse.',
    dndEnabled ? 'moon' : 'bell',
    true
  );
}

function renderDndState() {
  const dndToggle = document.getElementById('dnd-toggle');
  if (dndToggle) {
    dndToggle.classList.toggle('active', dndEnabled);
    dndToggle.setAttribute('aria-pressed', String(dndEnabled));
  }
}

/* ================= FEATURE: BRILLO ================= */
function applyBrightness(val) {
  currentBrightness = Number(val);
  const screen = document.getElementById('screen');
  if (!screen) return;

  const mapped = 40 + (currentBrightness / 100) * 90;
  screen.style.filter = `brightness(${mapped.toFixed(1)}%)`;

  const label = document.getElementById('quick-brightness-value');
  if (label) label.textContent = `${currentBrightness}%`;

  try {
    localStorage.setItem(BRIGHTNESS_STORAGE_KEY, String(currentBrightness));
  } catch (e) {}
}

/* ================= FEATURE: REPRODUCTOR QUICK CENTER + HUD ================= */
function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const r = String(s % 60).padStart(2, '0');
  return `${m}:${r}`;
}

function updatePlayerProgress() {
  const track = TRACKS[currentTrackIndex];
  if (!track) return;

  const pct = Math.min(100, (currentPlaybackTime / track.duration) * 100);
  const currentFormatted = formatTime(currentPlaybackTime);
  const totalFormatted = formatTime(track.duration);

  const fill = document.getElementById('cc-progress-fill');
  const currentEl = document.getElementById('cc-time-current');
  const totalEl = document.getElementById('cc-time-total');
  const dot = document.getElementById('cc-eq-dot');

  if (fill) fill.style.width = `${pct}%`;
  if (currentEl) currentEl.textContent = currentFormatted;
  if (totalEl) totalEl.textContent = totalFormatted;
  if (dot) dot.classList.toggle('paused', !isPlaying);

  const hudFill = document.getElementById('hud-progress-fill');
  const hudTime = document.getElementById('hud-progress-time');
  if (hudFill) hudFill.style.width = `${pct}%`;
  if (hudTime) hudTime.textContent = `${currentFormatted} / ${totalFormatted}`;

  const spFill = document.getElementById('spot-progress-fill');
  const spCurrent = document.getElementById('spot-time-current');
  const spTotal = document.getElementById('spot-time-total');
  if (spFill) spFill.style.width = `${pct}%`;
  if (spCurrent) spCurrent.textContent = currentFormatted;
  if (spTotal) spTotal.textContent = totalFormatted;
}

function resetPlayerProgress() {
  currentPlaybackTime = 0;
  updatePlayerProgress();
}

function updatePlayerBackground() {
  const track = TRACKS[currentTrackIndex];
  if (!track) return;

  const ccBg = document.getElementById('cc-media-bg');
  if (ccBg) ccBg.style.backgroundImage = `url("${track.art}")`;

  const hudBg = document.getElementById('hud-media-bg');
  if (hudBg) hudBg.style.backgroundImage = `url("${track.art}")`;
}

function setupQuickCenterPlayer() {
  setInterval(() => {
    if (!isPlaying) return;
    const track = TRACKS[currentTrackIndex];
    if (!track) return;
    currentPlaybackTime += 1;
    if (currentPlaybackTime >= track.duration) {
      if (repeatEnabled) {
        currentPlaybackTime = 0;
      } else {
        nextTrack();
        return;
      }
    }
    updatePlayerProgress();
  }, 1000);

  const shuffleBtn = document.getElementById('cc-shuffle');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      shuffleEnabled = !shuffleEnabled;
      shuffleBtn.classList.toggle('active', shuffleEnabled);
      syncSpotifyShuffleRepeatUI();
    });
  }

  const repeatBtn = document.getElementById('cc-repeat');
  if (repeatBtn) {
    repeatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      repeatEnabled = !repeatEnabled;
      repeatBtn.classList.toggle('active', repeatEnabled);
      syncSpotifyShuffleRepeatUI();
    });
  }

  updatePlayerProgress();
}

function syncSpotifyShuffleRepeatUI() {
  document.querySelectorAll('#spot-shuffle').forEach(el => {
    el.classList.toggle('active', shuffleEnabled);
  });
  document.querySelectorAll('#spot-repeat').forEach(el => {
    el.classList.toggle('active', repeatEnabled);
  });
}

/* ================= FEATURE 1: GAME MODE & GAMING OVERLAY ================= */
function toggleGameMode(explicitState = null) {
  gameModeActive = explicitState !== null ? explicitState : !gameModeActive;
  document.body.classList.toggle('game-mode-active', gameModeActive);
  
  const gmToggle = document.getElementById('gamemode-toggle');
  const hudGmBtn = document.getElementById('hud-gamemode-toggle');
  const hudGmText = document.getElementById('hud-gamemode-text');
  const topbarBadge = document.getElementById('topbar-gamemode-badge');

  if (gmToggle) {
    gmToggle.classList.toggle('active', gameModeActive);
    gmToggle.setAttribute('aria-pressed', String(gameModeActive));
  }
  if (hudGmBtn) hudGmBtn.classList.toggle('active', gameModeActive);
  if (hudGmText) hudGmText.textContent = `Modo Juego: ${gameModeActive ? 'ON' : 'OFF'}`;
  if (topbarBadge) topbarBadge.style.display = gameModeActive ? 'flex' : 'none';

  if (gameModeActive) {
    systemMetrics.ram = Math.max(16, Math.min(22, Math.round(systemMetrics.ram * 0.45)));
    systemMetrics.cpu = Math.min(85, systemMetrics.cpu + 15);
    systemMetrics.fps = 144;
    updateMetrics();
    showToast('Modo Juego Activado', 'Recursos optimizados: RAM liberada y perfil de alto rendimiento fijado.', 'gamepad-2');
  } else {
    showToast('Modo Juego Desactivado', 'Perfil estándar balanceado restablecido.', 'zap');
  }

  try {
    localStorage.setItem(GAMEMODE_STORAGE_KEY, JSON.stringify(gameModeActive));
  } catch (e) {}

  updateHUDTelemetry();
  refreshIcons();
}

function toggleGamerOverlay() {
  const overlay = document.getElementById('gamer-overlay');
  if (!overlay) return;
  
  gamerOverlayVisible = !gamerOverlayVisible;
  overlay.classList.toggle('hidden', !gamerOverlayVisible);

  if (gamerOverlayVisible) {
    updateHUDTelemetry();
    updatePlayerBackground();
    updatePlayerProgress();
    syncAllSliders();
    refreshIcons();
  }
}

function updateHUDTelemetry() {
  const fpsEl = document.getElementById('hud-fps');
  const gpuUsageEl = document.getElementById('hud-gpu-usage');
  const gpuBarEl = document.getElementById('hud-gpu-bar');
  const gpuTempEl = document.getElementById('hud-gpu-temp');
  const vramEl = document.getElementById('hud-vram-usage');
  const cpuUsageEl = document.getElementById('hud-cpu-usage');
  const cpuBarEl = document.getElementById('hud-cpu-bar');
  const cpuFreqEl = document.getElementById('hud-cpu-freq');
  const ramStatEl = document.getElementById('hud-ram-stat');

  if (fpsEl) fpsEl.textContent = String(systemMetrics.fps);
  if (gpuUsageEl) gpuUsageEl.textContent = `${systemMetrics.gpu}%`;
  if (gpuBarEl) gpuBarEl.style.width = `${systemMetrics.gpu}%`;
  if (gpuTempEl) gpuTempEl.textContent = `${Math.round(48 + systemMetrics.gpu * 0.15)}°C`;
  if (vramEl) vramEl.textContent = `${systemMetrics.vram.toFixed(1)} / 16 GB`;
  if (cpuUsageEl) cpuUsageEl.textContent = `${systemMetrics.cpu}%`;
  if (cpuBarEl) cpuBarEl.style.width = `${systemMetrics.cpu}%`;
  if (cpuFreqEl) cpuFreqEl.textContent = gameModeActive ? '4.95 GHz (Turbo Boost)' : '4.20 GHz (Estándar)';
  if (ramStatEl) ramStatEl.textContent = `${(systemMetrics.ram * 32 / 100).toFixed(1)} / 32 GB (${systemMetrics.ram}%)`;
}

function setupTelemetryLoop() {
  setInterval(() => {
    if (gameModeActive) {
      systemMetrics.fps = 142 + Math.floor(Math.random() * 3);
      systemMetrics.gpu = Math.max(50, Math.min(88, systemMetrics.gpu + Math.round((Math.random() - 0.5) * 6)));
      systemMetrics.vram = 4.6 + Math.random() * 0.4;
    } else {
      systemMetrics.fps = 120 + Math.floor(Math.random() * 20);
      systemMetrics.gpu = Math.max(20, Math.min(65, systemMetrics.gpu + Math.round((Math.random() - 0.5) * 8)));
    }
    if (gamerOverlayVisible) updateHUDTelemetry();
    updateWidgetStats();
  }, 1200);
}

function takeGamerScreenshot() {
  const screen = document.getElementById('screen');
  screen.style.filter = 'brightness(1.5)';
  setTimeout(() => screen.style.filter = '', 120);
  showToast('Captura Guardada', 'Guardada en Archivos / Capturas de Juegos', 'camera');
}

function simulateRamBoost() {
  const previous = systemMetrics.ram;
  systemMetrics.ram = 17;
  updateMetrics();
  updateHUDTelemetry();
  showToast('Memoria Optimizada', `RAM liberada de ${previous}% a 17%. 4.8 GB liberados.`, 'sparkles');
}

/* ================= FEATURE 2: NEBULA DESIGNER ================= */
function applyThemePreset(presetId) {
  const preset = THEME_PRESETS[presetId];
  if (!preset) return;

  designerState.activePreset = presetId;
  designerState.accent = preset.accent;
  designerState.panelColor = preset.panelColor;
  designerState.blurAmount = parseInt(preset.blurAmount, 10);
  designerState.borderRadius = parseInt(preset.borderRadius, 10);
  designerState.textMain = preset.textMain;
  designerState.textSub = preset.textSub;
  designerState.bgDark = preset.bgDark;
  designerState.accentGreen = preset.accentGreen;
  designerState.accentRed = preset.accentRed;
  designerState.accentOrange = preset.accentOrange;

  const root = document.documentElement;
  root.style.setProperty('--accent', preset.accent);
  root.style.setProperty('--accent-glow', preset.accentGlow);
  root.style.setProperty('--panel-color', preset.panelColor);
  root.style.setProperty('--blur-amount', `${preset.blurAmount}`);
  root.style.setProperty('--radius-md', `${preset.borderRadius}`);
  root.style.setProperty('--radius-lg', `${parseInt(preset.borderRadius, 10) + 6}px`);
  root.style.setProperty('--text-main', preset.textMain);
  root.style.setProperty('--text-sub', preset.textSub);
  root.style.setProperty('--bg-dark', preset.bgDark);
  root.style.setProperty('--accent-green', preset.accentGreen);
  root.style.setProperty('--accent-red', preset.accentRed);
  root.style.setProperty('--accent-orange', preset.accentOrange);

  saveDesignerState();
  showToast('Estilo Aplicado', `Paleta visual "${preset.name}" activada.`, 'palette');
  renderSettingsApp();
  setTimeout(syncAllSliders, 0);
}

function setLiveAccentColor(color) {
  designerState.accent = color;
  const root = document.documentElement;
  root.style.setProperty('--accent', color);
  root.style.setProperty('--accent-glow', `${color}66`);
  saveDesignerState();
  setTimeout(syncAllSliders, 0);
}

function setLiveTextMain(color) {
  designerState.textMain = color;
  document.documentElement.style.setProperty('--text-main', color);
  saveDesignerState();
}

function setLiveTextSub(color) {
  designerState.textSub = color;
  document.documentElement.style.setProperty('--text-sub', color);
  saveDesignerState();
}

function setLiveBgDark(color) {
  designerState.bgDark = color;
  document.documentElement.style.setProperty('--bg-dark', color);
  saveDesignerState();
}

function setLiveAccentGreen(color) {
  designerState.accentGreen = color;
  document.documentElement.style.setProperty('--accent-green', color);
  saveDesignerState();
}

function setLiveAccentRed(color) {
  designerState.accentRed = color;
  document.documentElement.style.setProperty('--accent-red', color);
  saveDesignerState();
}

function setLiveAccentOrange(color) {
  designerState.accentOrange = color;
  document.documentElement.style.setProperty('--accent-orange', color);
  saveDesignerState();
}

function setLiveBlurAmount(amount) {
  designerState.blurAmount = amount;
  document.documentElement.style.setProperty('--blur-amount', `${amount}px`);
  const valEl = document.getElementById('designer-blur-val');
  if (valEl) valEl.textContent = `${amount}px`;
  saveDesignerState();
}

function setLiveBorderRadius(radius) {
  designerState.borderRadius = radius;
  document.documentElement.style.setProperty('--radius-md', `${radius}px`);
  document.documentElement.style.setProperty('--radius-lg', `${parseInt(radius, 10) + 6}px`);
  const valEl = document.getElementById('designer-radius-val');
  if (valEl) valEl.textContent = `${radius}px`;
  saveDesignerState();
}

function setLivePanelAlpha(alpha) {
  designerState.panelAlpha = alpha;
  const alphaVal = alpha / 100;
  const hex = designerState.bgDark || '#0d0f17';
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const newColor = `rgba(${r}, ${g}, ${b}, ${alphaVal})`;
  designerState.panelColor = newColor;
  document.documentElement.style.setProperty('--panel-color', newColor);
  const valEl = document.getElementById('designer-alpha-val');
  if (valEl) valEl.textContent = `${alpha}%`;
  saveDesignerState();
}

function resetDesignerToPreset() {
  const presetId = designerState.activePreset || 'catppuccin';
  applyThemePreset(presetId);
  showToast('Reseteo Completo', `Todos los colores fueron restaurados al preset "${THEME_PRESETS[presetId].name}".`, 'rotate-ccw');
}

function setDockStyle(style) {
  designerState.dockStyle = style;
  document.body.classList.toggle('dock-unified-bottom', style === 'unified-bottom');
  saveDesignerState();
  showToast('Estilo de Dock', `Cambiado a ${style === 'unified-bottom' ? 'Barra Unificada Inferior' : 'Dock Flotante'}.`, 'layout');
  renderSettingsApp();
}

function applyDockPreviewStyle(styleId) {
  const validId = (styleId && DOCK_PREVIEW_STYLES[styleId] && DOCK_PREVIEW_STYLES[styleId].available)
    ? styleId
    : 'blueprint';

  const allStyles = Object.keys(DOCK_PREVIEW_STYLES);
  allStyles.forEach(s => document.body.classList.remove(`dock-preview-${s}`));
  document.body.classList.add(`dock-preview-${validId}`);

  if (validId !== designerState.dockPreviewStyle) {
    designerState.dockPreviewStyle = validId;
  }
}

function setDockPreviewStyle(styleId) {
  const style = DOCK_PREVIEW_STYLES[styleId];
  if (!style) return;
  if (!style.available) {
    showToast('Estilo no disponible', `"${style.name}" estará disponible próximamente.`, 'lock');
    return;
  }
  designerState.dockPreviewStyle = styleId;
  applyDockPreviewStyle(styleId);
  saveDesignerState();
  showToast('Apariencia del Hover', `Estilo "${style.name}" aplicado.`, 'layout');
  renderSettingsApp();
}

function saveDesignerState() {
  try {
    localStorage.setItem(DESIGNER_STORAGE_KEY, JSON.stringify(designerState));
  } catch (e) {}
}

/* ================= WIDGETS FLOTANTES DE ESCRITORIO ================= */
function addDesktopWidget(type, x = null, y = null) {
  const existing = desktopWidgets.find(w => w.type === type);
  if (existing) {
    showToast('Widget Existente', `El widget de ${type} ya está en el escritorio.`, 'info');
    return;
  }

  const id = 'widget-' + Date.now();
  const defaultPositions = {
    hardware: { x: window.innerWidth - 260, y: 60 },
    media:    { x: window.innerWidth - 260, y: 230 },
    clock:    { x: 24, y: 60 }
  };
  const posX = x !== null ? x : (defaultPositions[type]?.x || 40);
  const posY = y !== null ? y : (defaultPositions[type]?.y || 90);

  desktopWidgets.push({ id, type, x: posX, y: posY });
  saveDesktopWidgets();
  renderDesktopWidgets();
  showToast('Widget Añadido', `Widget de ${type} colocado en el escritorio.`, 'plus');
  hideContextMenu();
}

function removeDesktopWidget(id) {
  desktopWidgets = desktopWidgets.filter(w => w.id !== id);
  saveDesktopWidgets();
  renderDesktopWidgets();
}

function clearDesktopWidgets() {
  desktopWidgets = [];
  saveDesktopWidgets();
  renderDesktopWidgets();
  showToast('Widgets Limpiados', 'Se retiraron todos los widgets del escritorio.', 'trash-2');
  hideContextMenu();
}

function saveDesktopWidgets() {
  try {
    localStorage.setItem(WIDGETS_STORAGE_KEY, JSON.stringify(desktopWidgets));
  } catch (e) {}
}

function renderDesktopWidgets() {
  const layer = document.getElementById('desktop-widgets-layer');
  if (!layer) return;
  layer.innerHTML = '';

  desktopWidgets.forEach(widget => {
    const el = document.createElement('div');
    el.className = 'desktop-widget';
    el.id = widget.id;
    el.style.left = `${widget.x}px`;
    el.style.top = `${widget.y}px`;

    let bodyHTML = '';
    let title = '';
    let iconName = 'activity';

    if (widget.type === 'hardware') {
      title = 'TELEMETRÍA HARDWARE';
      iconName = 'cpu';
      bodyHTML = `
        <div class="hw-widget-grid">
          <div class="hw-item"><span>FPS</span><strong id="w-fps">${systemMetrics.fps}</strong></div>
          <div class="hw-item"><span>GPU</span><strong id="w-gpu">${systemMetrics.gpu}%</strong></div>
          <div class="hw-item"><span>CPU</span><strong id="w-cpu">${systemMetrics.cpu}%</strong></div>
          <div class="hw-item"><span>RAM</span><strong id="w-ram">${systemMetrics.ram}%</strong></div>
        </div>
      `;
    } else if (widget.type === 'media') {
      title = 'REPRODUCTOR';
      iconName = 'music';
      const track = TRACKS[currentTrackIndex];
      bodyHTML = `
        <div class="media-widget-body">
          <img src="${track.art}" alt="Art" id="w-media-art">
          <div class="media-widget-info">
            <strong id="w-media-title">${track.title}</strong>
            <small id="w-media-artist">${track.artist}</small>
          </div>
          <button class="media-toggle" onclick="toggleMediaPlayback()" type="button"><i data-lucide="${isPlaying ? 'pause' : 'play'}"></i></button>
        </div>
      `;
    } else if (widget.type === 'clock') {
      title = 'RELOJ DIGITAL';
      iconName = 'clock';
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
      const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
      const dateStr = `${weekdays[now.getDay()]}, ${now.getDate()}`;
      bodyHTML = `
        <div class="clock-widget-body">
          <div class="clock-widget-big" id="w-clock-time">${timeStr}</div>
          <div class="clock-widget-date">${dateStr}</div>
        </div>
      `;
    }

    el.innerHTML = `
      <div class="widget-titlebar">
        <strong><i data-lucide="${iconName}"></i> ${title}</strong>
        <button class="widget-close-btn" onclick="removeDesktopWidget('${widget.id}')" title="Cerrar widget"><i data-lucide="x"></i></button>
      </div>
      ${bodyHTML}
    `;

    setupDraggableWidget(el, widget);
    layer.appendChild(el);
  });
  refreshIcons();
}

function setupDraggableWidget(el, widgetData) {
  const titlebar = el.querySelector('.widget-titlebar');
  if (!titlebar) return;

  titlebar.addEventListener('mousedown', (e) => {
    if (e.target.closest('.widget-close-btn')) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const initialLeft = el.offsetLeft;
    const initialTop = el.offsetTop;

    function move(ev) {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const newX = Math.max(10, Math.min(window.innerWidth - el.offsetWidth - 10, initialLeft + dx));
      const newY = Math.max(50, Math.min(window.innerHeight - el.offsetHeight - 10, initialTop + dy));
      el.style.left = `${newX}px`;
      el.style.top = `${newY}px`;
      widgetData.x = newX;
      widgetData.y = newY;
    }

    function stop() {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', stop);
      saveDesktopWidgets();
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stop);
  });
}

function updateWidgetStats() {
  const fps = document.getElementById('w-fps');
  const gpu = document.getElementById('w-gpu');
  const cpu = document.getElementById('w-cpu');
  const ram = document.getElementById('w-ram');
  if (fps) fps.textContent = String(systemMetrics.fps);
  if (gpu) gpu.textContent = `${systemMetrics.gpu}%`;
  if (cpu) cpu.textContent = `${systemMetrics.cpu}%`;
  if (ram) ram.textContent = `${systemMetrics.ram}%`;

  const clockTime = document.getElementById('w-clock-time');
  if (clockTime) {
    const now = new Date();
    clockTime.textContent = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  }
}

/* ================= FEATURE 4: GESTOR DE PERFILES ================= */
function closeAllOpenApps() {
  const ids = Object.keys(openWindows);
  ids.forEach(winId => closeApp(winId));
}

function switchProfile(profileId) {
  closeAllOpenApps();

  currentProfile = profileId;
  
  const profileNameEl = document.getElementById('topbar-profile-name');
  const profileIconEl = document.getElementById('topbar-profile-icon');
  
  const profileMap = {
    gamer: { name: 'Gamer', icon: 'gamepad-2', toast: 'Perfil Gamer: Modo Juego activado, HUD y telemetría listos.' },
    streamer: { name: 'Streamer', icon: 'radio', toast: 'Perfil Streamer: Widgets multimedia y monitoreo de audio en vivo.' },
    studio: { name: 'Estudio', icon: 'terminal', toast: 'Perfil Estudio / Dev: Espacio optimizado para programación con VS Code y Terminal.' }
  };

  const pData = profileMap[profileId] || profileMap.gamer;
  if (profileNameEl) profileNameEl.textContent = pData.name;
  if (profileIconEl) profileIconEl.innerHTML = `<i data-lucide="${pData.icon}"></i>`;

  document.querySelectorAll('.profile-chip, .p-mini-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.profile === profileId);
  });

  if (profileId === 'gamer') {
    applyThemePreset('cyberpunk');
    toggleGameMode(true);
    addDesktopWidget('hardware', window.innerWidth - 260, 60);
  } else if (profileId === 'streamer') {
    applyThemePreset('synthwave');
    toggleGameMode(false);
    addDesktopWidget('media', window.innerWidth - 260, 60);
  } else if (profileId === 'studio') {
    applyThemePreset('catppuccin');
    toggleGameMode(false);
    switchWorkspace(1);
  }

  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, profileId);
  } catch (e) {}

  showToast(`Perfil: ${pData.name}`, pData.toast, pData.icon);
  refreshIcons();
}

/* ================= FEATURE 3: NOVA AI PROMPT-TO-ACTION ================= */
function parseAndExecuteNovaAction(query) {
  const q = query.toLowerCase().trim();
  let actionTaken = null;
  let replyText = '';
  let actionBtnHTML = '';

  if (q.includes('cyberpunk') || (q.includes('tema') && q.includes('neon'))) {
    applyThemePreset('cyberpunk');
    actionTaken = 'Tema Cyberpunk Neón aplicado';
    replyText = 'He cambiado la paleta visual a Cyberpunk Neón, ajustando acentos turquesa, contraste dinámico y fondo espacial.';
  } else if (q.includes('catppuccin') || q.includes('minimal')) {
    applyThemePreset('catppuccin');
    actionTaken = 'Tema Minimal Catppuccin aplicado';
    replyText = 'Listo. Apliqué la paleta suave y minimalista Catppuccin con efectos de cristal pulido.';
  } else if (q.includes('synthwave') || q.includes('retro')) {
    applyThemePreset('synthwave');
    actionTaken = 'Tema Retro Synthwave aplicado';
    replyText = '¡Vibras synthwave! Tema Retro Synthwave activo con tonos magenta y violeta.';
  } else if (q.includes('stealth') || q.includes('oscuro')) {
    applyThemePreset('stealth');
    actionTaken = 'Tema Dark Stealth aplicado';
    replyText = 'Activé el modo Dark Stealth con bajo contraste y acentos esmeralda para descansar la vista.';
  } else if (q.includes('activa') && (q.includes('modo juego') || q.includes('game mode'))) {
    toggleGameMode(true);
    actionTaken = 'Modo Juego Activado';
    replyText = '¡Modo Juego iniciado! He liberado memoria RAM y ajustado el perfil de CPU/GPU al máximo rendimiento.';
  } else if (q.includes('desactiva') && (q.includes('modo juego') || q.includes('game mode'))) {
    toggleGameMode(false);
    actionTaken = 'Modo Juego Desactivado';
    replyText = 'Modo Juego apagado. El sistema ha vuelto al perfil energético estándar.';
  } else if (q.includes('optimiza') || q.includes('limpia') || q.includes('ram') || q.includes('memoria') || q.includes('rendimiento')) {
    simulateRamBoost();
    actionTaken = 'RAM Optimizada y Cache Purgada';
    replyText = 'He ejecutado una limpieza profunda de procesos inactivos y cache. La memoria RAM quedó optimizada.';
  } else if (q.includes('musica') || q.includes('música') || q.includes('cancion') || q.includes('canción') || q.includes('spotify') || q.includes('cerati') || q.includes('nirvana')) {
    toggleMediaPlayback();
    const track = TRACKS[currentTrackIndex];
    actionTaken = isPlaying ? `Reproduciendo: ${track.title}` : 'Música en pausa';
    replyText = isPlaying ? `Reproduciendo "${track.title}" de ${track.artist}. Podés controlar el volumen desde el HUD o centro de control.` : 'He pausado la reproducción de música.';
  } else if (q.includes('abre steam') || q.includes('juegos')) {
    openApp('games');
    actionTaken = 'Abriendo Steam';
    replyText = 'Abriendo tu biblioteca de Steam.';
  } else if (q.includes('abre archivos') || q.includes('explorador')) {
    openApp('files');
    actionTaken = 'Abriendo Archivos';
    replyText = 'Abriendo el Gestor Inteligente de Archivos.';
  } else if (q.includes('abre vs code') || q.includes('código') || q.includes('editor')) {
    openApp('vscode');
    actionTaken = 'Abriendo Visual Studio Code';
    replyText = 'Abriendo Visual Studio Code.';
  } else if (q.includes('abre terminal')) {
    openApp('terminal');
    actionTaken = 'Abriendo WezTerm';
    replyText = 'Terminal iniciada.';
  } else if (q.includes('abre ajustes') || q.includes('designer')) {
    openApp('settings');
    actionTaken = 'Abriendo Nebula Designer';
    replyText = 'Abriendo el panel de Ajustes y personalización.';
  } else if (q.includes('cyberpunk 2077') || q.includes('fps') || q.includes('consejos') || q.includes('juego') || q.includes('gamer')) {
    replyText = 'Para maximizar tus FPS y estabilidad en juegos exigentes te recomiendo:\n\n• Activar Modo Juego (fija frecuencia CPU en 4.95 GHz y libera RAM).\n• Habilitar el Gaming HUD (Alt+Z) para monitoreo de temperaturas.\n• Usar tema Cyberpunk de bajo consumo de sombreado.';
    actionBtnHTML = `<button class="nova-action-btn" type="button" onclick="applyGamerOptimization()"><i data-lucide="zap"></i> Aplicar Optimización Gamer (1-Clic)</button>`;
  } else if (/^(hola|buenas|hey|buen d[ií]a)/.test(q)) {
    replyText = '¡Hola! Soy Nova AI, tu copiloto en Nebula OS. Puedo optimizar tu sistema, cambiar temas, poner música, abrir juegos y mucho más. ¿Qué querés configurar?';
  } else {
    replyText = `Entendido. He analizado "${query}". Podés pedirme cosas como "Activa el modo juego", "Cambia al tema Cyberpunk", "Optimiza el sistema" o "Pon música".`;
  }

  return { replyText, actionTaken, actionBtnHTML };
}

function applyGamerOptimization() {
  toggleGameMode(true);
  applyThemePreset('cyberpunk');
  simulateRamBoost();
  addDesktopWidget('hardware', window.innerWidth - 260, 60);
  showToast('Optimización Gamer Lista', 'CPU Turbo activado, RAM purgada y HUD listo para jugar.', 'zap');
}

function startNovaVoiceInput() {
  const voiceBtn = document.getElementById('nova-voice-btn');
  const input = document.querySelector('.nova-input');
  
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    if (voiceBtn) voiceBtn.classList.add('listening');
    showToast('Voz a Acción', 'Simulando comando por voz: "Activa el modo juego y optimiza"...', 'mic');
    setTimeout(() => {
      if (input) {
        input.value = 'Activa el modo juego y optimiza el sistema';
        document.querySelector('.nova-form')?.requestSubmit();
      }
      if (voiceBtn) voiceBtn.classList.remove('listening');
    }, 1200);
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;

  recognition.onstart = () => {
    if (voiceBtn) voiceBtn.classList.add('listening');
    showToast('Escuchando...', 'Hablá ahora para pedirle una acción a Nova AI', 'mic');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    if (input) {
      input.value = transcript;
      document.querySelector('.nova-form')?.requestSubmit();
    }
  };

  recognition.onend = () => {
    if (voiceBtn) voiceBtn.classList.remove('listening');
  };

  recognition.onerror = () => {
    if (voiceBtn) voiceBtn.classList.remove('listening');
    showToast('Voz', 'No se detectó audio. Podés escribir tu comando.', 'alert-circle');
  };

  recognition.start();
}

/* ================= FEATURE 5: SMART FILE EXPLORER ================= */
const FILE_SYSTEM = {
  name: 'Inicio', label: 'Inicio', type: 'folder', children: [
    {
      name: 'capturas', label: 'Capturas de Juegos', type: 'folder', children: [
        { name: 'cyberpunk_night_city_4k.jpg', type: 'image', path: './fondos/fondo principal.jpg', size: 'JPG · 3840x2160 · 144 FPS Capture' },
        { name: 'elden_ring_boss_victory.jpg', type: 'image', path: './fondos/fondo 2.jpg', size: 'JPG · 2560x1440 · HDR On' },
        { name: 'valorant_ace_round.jpg', type: 'image', path: './fondos/fondo 3.jpg', size: 'JPG · 1920x1080 · Clip' }
      ]
    },
    {
      name: 'mods', label: 'MODs & Configs', type: 'folder', children: [
        { name: 'cyberpunk_ultra_textures.pak', type: 'text', path: './message.txt', size: 'PAK · Mod gráfico 4K' },
        { name: 'elden_ring_ultrawide_fov.zip', type: 'text', path: './message.txt', size: 'ZIP · Patch 21:9 support' },
        { name: 'reshade_cinematic_preset.ini', type: 'text', path: './styles.css', size: 'INI · Preset de post-procesado' }
      ]
    },
    {
      name: 'juegos', label: 'Juegos & ISOs', type: 'folder', children: [
        { name: 'Cyberpunk_2077.exe', type: 'image', path: './steam/image.png', size: 'EXE · Acceso directo' },
        { name: 'Hollow_Knight_Silksong.iso', type: 'image', path: './steam/image.png', size: 'ISO · Imagen de disco' },
        { name: 'Doom_Eternal_Ultra.exe', type: 'image', path: './steam/image.png', size: 'EXE · Lanzador Vulkan' }
      ]
    },
    {
      name: 'musica', label: 'Música & Audio', type: 'folder', children: [
        { name: 'Gustavo_Cerati_Bocanada.mp3', type: 'audio', path: './spotify/tapa album 2.jpg', size: 'MP3 · 320 kbps · Bocanada' },
        { name: 'Nirvana_Smells_Like_Teen_Spirit.mp3', type: 'audio', path: './spotify/tapa album 1.jpg', size: 'MP3 · 320 kbps · Nevermind' },
        { name: 'Synthwave_Chill_Night.flac', type: 'audio', path: './spotify/top 50.jpg', size: 'FLAC · 24-bit · Lossless' }
      ]
    },
    { name: 'fondos', label: 'Fondos', type: 'folder', children: WALLPAPERS.map(w => ({ name: w.file, type: 'image', path: `./fondos/${w.file}`, size: 'JPG · Fondo HD' })) },
    { name: 'imagenes', label: 'Imágenes', type: 'folder', children: ['archivos.png', 'Ajustes.png', 'Home.png', 'Lupa.png', 'Play.png', 'Senial.png', 'Steam.png', 'VSC.png'].map(name => ({ name, type: 'image', path: `./imagenes/${name}`, size: 'PNG · Icono UI' })) },
    { name: 'spotify', label: 'Spotify', type: 'folder', children: ['tapa album 1.jpg', 'top 50.jpg', 'tapa album 2.jpg', 'album 3.jpg'].map(name => ({ name, type: 'image', path: `./spotify/${name}`, size: 'JPG · Portada Álbum' })) },
    { name: 'vsc', label: 'Proyectos Dev', type: 'folder', children: [{ name: 'vscimg.png', type: 'image', path: './vsc/vscimg.png', size: 'PNG · Workspace' }] },
    { name: 'index.html', type: 'text', path: './index.html', size: 'HTML · Estructura Nebula OS' },
    { name: 'styles.css', type: 'text', path: './styles.css', size: 'CSS · Estilos y Variables' },
    { name: 'script.js', type: 'text', path: './script.js', size: 'JS · Núcleo del sistema' }
  ]
};

/* ================= CONTROL MULTIMEDIA ================= */
function toggleMediaPlayback() {
  isPlaying = !isPlaying;

  const playBtn = document.getElementById('media-toggle');
  const hudPlayBtn = document.getElementById('hud-play-btn');
  const ccPlayBtn = document.getElementById('cc-play-btn');

  const iconName = isPlaying ? 'pause' : 'play';
  if (playBtn) playBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  if (hudPlayBtn) hudPlayBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  if (ccPlayBtn) ccPlayBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;

  document.querySelectorAll('#spot-play-btn').forEach(btn => {
    btn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  });

  updatePlayerProgress();
  renderDesktopWidgets();
  refreshIcons();
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % TRACKS.length;
  updateMediaUI();
  resetPlayerProgress();
  updatePlayerBackground();
}

function previousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
  updateMediaUI();
  resetPlayerProgress();
  updatePlayerBackground();
}

function updateMediaUI() {
  const track = TRACKS[currentTrackIndex];

  ['cc-media-art', 'hud-media-art', 'w-media-art'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.src = track.art;
  });
  document.querySelectorAll('#spot-player-cover').forEach(el => el.src = track.art);

  ['cc-media-title', 'hud-media-title', 'w-media-title'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = track.title;
  });
  document.querySelectorAll('#spot-player-title').forEach(el => el.textContent = track.title);

  ['cc-media-artist', 'hud-media-artist', 'w-media-artist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = track.artist;
  });
  document.querySelectorAll('#spot-player-artist').forEach(el => el.textContent = track.artist);

  const totalEl = document.getElementById('cc-time-total');
  if (totalEl) totalEl.textContent = formatTime(track.duration);

  document.querySelectorAll('.spot-card[data-track-index]').forEach(card => {
    const idx = parseInt(card.dataset.trackIndex, 10);
    card.classList.toggle('playing', idx === currentTrackIndex);
  });

  updatePlayerBackground();
  updatePlayerProgress();
}

function setSystemVolume(val) {
  systemVolume = val;
  const volNum = document.getElementById('tray-volume-num');
  const qVolVal = document.getElementById('quick-volume-value');
  if (volNum) volNum.textContent = `${val}%`;
  if (qVolVal) qVolVal.textContent = `${val}%`;

  document.querySelectorAll('#spot-volume-slider').forEach(spVol => {
    if (Number(spVol.value) !== Number(val)) {
      spVol.value = val;
      syncSliderFill(spVol);
    }
  });
}

/* ================= SISTEMA DE NOTIFICACIONES TOAST ================= */
function showToast(title, message, iconName = 'sparkles', force = false) {
  if (dndEnabled && !force) return;

  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <span class="toast-icon"><i data-lucide="${iconName}"></i></span>
    <div class="toast-content">
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(message)}</small>
    </div>
  `;

  container.appendChild(toast);
  refreshIcons();
  setTimeout(() => toast.remove(), 4000);
}

/* ================= PERSISTENCIA & CONFIG ================= */
function loadPersistedState() {
  try {
    const savedGm = localStorage.getItem(GAMEMODE_STORAGE_KEY);
    if (savedGm !== null) gameModeActive = JSON.parse(savedGm);
    if (gameModeActive) document.body.classList.add('game-mode-active');

    const savedProf = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (savedProf) currentProfile = savedProf;

    const savedDesigner = JSON.parse(localStorage.getItem(DESIGNER_STORAGE_KEY));
    if (savedDesigner) {
      designerState = { ...designerState, ...savedDesigner };
      const root = document.documentElement;
      root.style.setProperty('--accent', designerState.accent);
      root.style.setProperty('--panel-color', designerState.panelColor);
      root.style.setProperty('--blur-amount', `${designerState.blurAmount}px`);
      root.style.setProperty('--radius-md', `${designerState.borderRadius}px`);
      root.style.setProperty('--radius-lg', `${parseInt(designerState.borderRadius, 10) + 6}px`);
      document.body.classList.toggle('dock-unified-bottom', designerState.dockStyle === 'unified-bottom');
      applyDockPreviewStyle(designerState.dockPreviewStyle || 'blueprint');
    } else {
      applyDockPreviewStyle('blueprint');
    }

    const savedWidgets = JSON.parse(localStorage.getItem(WIDGETS_STORAGE_KEY));
    if (Array.isArray(savedWidgets)) desktopWidgets = savedWidgets;

    const wpIndex = Number.parseInt(localStorage.getItem(WALLPAPER_STORAGE_KEY), 10);
    if (Number.isInteger(wpIndex) && WALLPAPERS[wpIndex]) currentWallpaperIndex = wpIndex;

    const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY));
    if (savedSettings) settingsState = { ...settingsState, ...savedSettings };

    const savedWifi = localStorage.getItem(WIFI_STORAGE_KEY);
    if (savedWifi !== null) wifiEnabled = JSON.parse(savedWifi);
    const savedBt = localStorage.getItem(BT_STORAGE_KEY);
    if (savedBt !== null) bluetoothEnabled = JSON.parse(savedBt);

    const savedDnd = localStorage.getItem(DND_STORAGE_KEY);
    if (savedDnd !== null) dndEnabled = JSON.parse(savedDnd);

    const savedBrightness = localStorage.getItem(BRIGHTNESS_STORAGE_KEY);
    if (savedBrightness !== null) {
      const parsed = Number(savedBrightness);
      if (!Number.isNaN(parsed)) currentBrightness = parsed;
    }

    const rawNotes = JSON.parse(localStorage.getItem(CALENDAR_NOTES_STORAGE_KEY) || '{}');
    calendarState.notes = migrateNotesFormat(rawNotes);
  } catch (e) {}
}

function applySettings() {
  const screen = document.getElementById('screen');
  document.body.classList.toggle('no-blur', !settingsState.transparency);
  if (screen) screen.classList.toggle('reduce-motion', !settingsState.animations);
}

function toggleSetting(setting) {
  if (!Object.prototype.hasOwnProperty.call(settingsState, setting)) return;
  settingsState[setting] = !settingsState[setting];
  applySettings();
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settingsState));
  } catch (e) {}
}

/* ================= GESTIÓN DE WORKSPACES ================= */
function switchWorkspace(num) {
  currentWorkspace = num;
  
  const buttons = document.querySelectorAll('#ws-switcher button');
  buttons.forEach((btn, index) => {
    btn.className = (index + 1 === num) ? 'active' : '';
  });

  let hasActiveInWorkspace = false;
  Object.values(openWindows).forEach(entry => {
    const win = entry?.win;
    if (!win) return;
    if (parseInt(win.dataset.ws) === currentWorkspace) {
      if (!win.classList.contains('minimized')) {
        win.style.display = 'flex';
        hasActiveInWorkspace = true;
      }
    } else {
      win.style.display = 'none';
    }
  });

  if (!hasActiveInWorkspace) updateTopBar(null);
  hideDockPreview();
  renderDock();

  if (windowManagerOpen) renderWindowManager();
}

function moveWindowToWorkspace(winId, targetWs) {
  const entry = openWindows[winId];
  if (!entry?.win) return false;
  const win = entry.win;

  const currentWs = parseInt(win.dataset.ws, 10);
  if (currentWs === targetWs) return false;

  win.dataset.ws = String(targetWs);

  if (targetWs !== currentWorkspace) {
    win.style.display = 'none';
    if (activeWinId === winId) {
      activeWinId = null;
      updateTopBar(null);
    }
  } else {
    if (!win.classList.contains('minimized')) {
      win.style.display = 'flex';
    }
  }

  renderDock();
  if (windowManagerOpen) renderWindowManager();

  const appTitle = APPS[entry.appId]?.title || entry.appId;
  showToast(
    'Ventana movida',
    `${appTitle} → Space ${targetWs}`,
    'move'
  );

  return true;
}

/* ================= SLIDERS FUNCIONALES ================= */
function setupSliders() {
  const initSlider = (id, callback) => {
    const slider = document.getElementById(id);
    if(!slider) return;
    
    const updateBg = () => {
      syncSliderFill(slider);
      if (callback) callback(slider.value);
    };
    
    slider.addEventListener('input', updateBg);
    updateBg(); 
  };
  
  initSlider('brightness-slider', val => {
    applyBrightness(val);
  });
  initSlider('volume-slider', val => {
    setSystemVolume(val);
  });
}

function setupAdvancedWidget() {
  renderCalendar();
  renderNotesList();
  updateWidgetTime();
  updateMetrics();
  setInterval(updateWidgetTime, 60000);
  setInterval(simulateMetrics, 3000);

  document.getElementById('calendar-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    changeCalendarMonth(-1);
  });
  document.getElementById('calendar-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    changeCalendarMonth(1);
  });
  document.getElementById('save-note')?.addEventListener('click', (e) => {
    e.stopPropagation();
    saveCalendarNote();
  });
  document.getElementById('note-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      saveCalendarNote();
    }
  });
  setupQuickSwitch('battery-toggle');
  setupMediaPlayer();

  renderConnectivityState();
}

function updateWidgetTime() {
  const now = new Date();
  const time = document.getElementById('widget-time');
  const uptime = document.getElementById('widget-uptime');
  if (time) time.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  if (uptime) {
    const elapsedMinutes = Math.floor((Date.now() - widgetStartedAt) / 60000);
    uptime.textContent = `uptime: ${elapsedMinutes < 60 ? `${elapsedMinutes}m` : `${Math.floor(elapsedMinutes / 60)}h ${elapsedMinutes % 60}m`}`;
  }
}

function calendarKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function resetCalendarToToday() {
  calendarState.date = new Date();
  calendarState.selectedDate = null;
  editingNoteKey = null;
  editingNoteIndex = null;

  const editor = document.getElementById('note-editor');
  if (editor) editor.hidden = true;
  const input = document.getElementById('note-input');
  if (input) input.value = '';
  const saveBtn = document.getElementById('save-note');
  if (saveBtn) {
    saveBtn.textContent = 'Guardar';
    saveBtn.classList.remove('editing');
  }

  renderCalendar();
  renderNotesList();
}

function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const year = calendarState.date.getFullYear();
  const month = calendarState.date.getMonth();
  const mEl = document.getElementById('calendar-month');
  const yEl = document.getElementById('calendar-year');
  if (mEl) mEl.textContent = monthNames[month];
  if (yEl) yEl.textContent = year;
  grid.innerHTML = '';

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayKey = calendarKey(new Date());

  for (let index = 0; index < 42; index += 1) {
    const dayNumber = index - startOffset + 1;
    const cellDate = new Date(year, month, dayNumber);
    const isOutside = dayNumber < 1 || dayNumber > daysInMonth;
    if (isOutside && index >= startOffset + daysInMonth && index >= 35) continue;
    const day = document.createElement('button');
    day.type = 'button';
    day.className = 'calendar-day';
    if (isOutside) day.classList.add('outside');
    const key = calendarKey(cellDate);
    if (key === todayKey) day.classList.add('today');
    if (key === calendarState.selectedDate) day.classList.add('selected');
    day.textContent = String(cellDate.getDate());
    const dayNotes = calendarState.notes[key];
    if (Array.isArray(dayNotes) && dayNotes.length > 0) {
      const dot = document.createElement('span');
      dot.className = 'note-dot';
      day.appendChild(dot);
    }
    day.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      selectCalendarDate(cellDate);
    });
    grid.appendChild(day);
  }
  refreshIcons();
}

function changeCalendarMonth(offset) {
  calendarState.date.setMonth(calendarState.date.getMonth() + offset);
  renderCalendar();
}

function selectCalendarDate(date) {
  calendarState.selectedDate = calendarKey(date);
  editingNoteKey = null;
  editingNoteIndex = null;

  const editor = document.getElementById('note-editor');
  const input = document.getElementById('note-input');
  const label = document.getElementById('selected-date-label');
  const saveBtn = document.getElementById('save-note');

  if (label) label.textContent = `Nueva nota para ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  if (input) input.value = '';
  if (editor) editor.hidden = false;
  if (saveBtn) {
    saveBtn.textContent = 'Guardar';
    saveBtn.classList.remove('editing');
  }
  if (input) input.focus();

  renderCalendar();
  renderNotesList();
}

function saveCalendarNote() {
  const input = document.getElementById('note-input');
  const value = input ? input.value.trim() : '';

  if (!value && editingNoteKey === null) {
    showToast('Sin cambios', 'Escribí algo para guardar un recordatorio.', 'info');
    return;
  }

  if (editingNoteKey !== null && editingNoteIndex !== null) {
    const key = editingNoteKey;
    const idx = editingNoteIndex;

    if (!calendarState.notes[key]) calendarState.notes[key] = [];

    if (!value) {
      calendarState.notes[key].splice(idx, 1);
      if (calendarState.notes[key].length === 0) delete calendarState.notes[key];
      showToast('Nota eliminada', 'El recordatorio fue borrado.', 'trash-2');
    } else {
      calendarState.notes[key][idx] = value;
    }
  } else {
    const key = calendarState.selectedDate;
    if (!key) return;
    if (!calendarState.notes[key]) calendarState.notes[key] = [];
    calendarState.notes[key].push(value);
  }

  localStorage.setItem(CALENDAR_NOTES_STORAGE_KEY, JSON.stringify(calendarState.notes));

  editingNoteKey = null;
  editingNoteIndex = null;
  if (input) input.value = '';
  const saveBtn = document.getElementById('save-note');
  if (saveBtn) {
    saveBtn.textContent = 'Guardar';
    saveBtn.classList.remove('editing');
  }

  renderCalendar();
  renderNotesList();
}

function editCalendarNote(key, index) {
  editingNoteKey = key;
  editingNoteIndex = index;
  calendarState.selectedDate = key;

  const editor = document.getElementById('note-editor');
  const input = document.getElementById('note-input');
  const label = document.getElementById('selected-date-label');
  const saveBtn = document.getElementById('save-note');

  const [y, m, d] = key.split('-').map(Number);
  const notes = calendarState.notes[key] || [];

  if (label) label.textContent = `Editando nota del ${d}/${m}/${y}`;
  if (input) {
    input.value = notes[index] || '';
    input.focus();
  }
  if (editor) editor.hidden = false;
  if (saveBtn) {
    saveBtn.textContent = 'Actualizar';
    saveBtn.classList.add('editing');
  }
  renderNotesList();
}

function deleteCalendarNote(key, index) {
  if (!key) return;
  const notes = calendarState.notes[key];
  if (!Array.isArray(notes)) return;

  notes.splice(index, 1);
  if (notes.length === 0) delete calendarState.notes[key];

  localStorage.setItem(CALENDAR_NOTES_STORAGE_KEY, JSON.stringify(calendarState.notes));

  if (editingNoteKey === key && editingNoteIndex === index) {
    editingNoteKey = null;
    editingNoteIndex = null;
    const input = document.getElementById('note-input');
    if (input) input.value = '';
    const saveBtn = document.getElementById('save-note');
    if (saveBtn) {
      saveBtn.textContent = 'Guardar';
      saveBtn.classList.remove('editing');
    }
  }

  renderCalendar();
  renderNotesList();
  showToast('Nota eliminada', 'El recordatorio fue borrado.', 'trash-2');
}

function renderNotesList() {
  const list = document.getElementById('notes-list');
  if (!list) return;

  const targetKey = calendarState.selectedDate || calendarKey(new Date());
  const notes = calendarState.notes[targetKey];

  list.innerHTML = '';

  if (!Array.isArray(notes) || notes.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'notes-empty';
    empty.textContent = 'Sin recordatorios para este día.';
    list.appendChild(empty);
    return;
  }

  const [y, m, d] = targetKey.split('-').map(Number);

  notes.forEach((noteText, index) => {
    const item = document.createElement('div');
    item.className = 'note-item';
    item.innerHTML = `
      <span class="note-item-date">${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}</span>
      <span class="note-item-text" title="${escapeHtml(noteText)}">${escapeHtml(noteText)}</span>
      <div class="note-actions">
        <button class="note-btn" type="button" data-action="edit" title="Editar"><i data-lucide="pencil"></i></button>
        <button class="note-btn danger" type="button" data-action="delete" title="Eliminar"><i data-lucide="trash-2"></i></button>
      </div>
    `;

    item.querySelector('[data-action="edit"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      editCalendarNote(targetKey, index);
    });
    item.querySelector('[data-action="delete"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteCalendarNote(targetKey, index);
    });

    list.appendChild(item);
  });

  refreshIcons();
}

function updateMetrics() {
  const definitions = {
    ram: `RAM: ${(systemMetrics.ram * 16 / 100).toFixed(1)}GB / 16GB (${systemMetrics.ram}%)`,
    cpu: `CPU: ${systemMetrics.cpu}% de carga`,
    temp: `Temperatura: ${Math.round(28 + systemMetrics.temp / 2)}°C`
  };
  Object.keys(definitions).forEach(metric => {
    const value = systemMetrics[metric];
    const card = document.querySelector(`[data-metric="${metric}"]`);
    if (!card) return;
    const strong = card.querySelector('strong');
    if (strong) strong.textContent = `${value}%`;
    const progress = card.querySelector('.metric-progress');
    if (progress) progress.style.strokeDashoffset = String(100.53 - (100.53 * value / 100));
    const tooltip = document.getElementById(`${metric}-tooltip`);
    if (tooltip) tooltip.textContent = definitions[metric];
  });
}

function simulateMetrics() {
  if (!gameModeActive) {
    systemMetrics.ram = Math.max(25, Math.min(55, systemMetrics.ram + Math.round((Math.random() - 0.5) * 6)));
    systemMetrics.cpu = Math.max(8, Math.min(78, systemMetrics.cpu + Math.round((Math.random() - 0.5) * 16)));
    systemMetrics.temp = Math.max(30, Math.min(68, systemMetrics.temp + Math.round((Math.random() - 0.5) * 8)));
  }
  updateMetrics();
}

function setupQuickSwitch(id) {
  const button = document.getElementById(id);
  if (!button) return;
  button.addEventListener('click', () => {
    const active = button.classList.toggle('active');
    button.setAttribute('aria-pressed', String(active));
  });
}

function setupMediaPlayer() {
  const button = document.getElementById('media-toggle');
  const fill = document.getElementById('media-progress-fill');
  if (button) button.addEventListener('click', toggleMediaPlayback);
  setInterval(() => {
    if (!isPlaying) return;
    playbackProgress = playbackProgress >= 100 ? 0 : playbackProgress + 1;
    if (fill) fill.style.width = `${playbackProgress}%`;
  }, 1000);
}

/* ================= UTILIDADES VISUALES ================= */
function createStars() {
  const bg = document.getElementById('background-layer');
  if (!bg) return;
  for(let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    bg.appendChild(star);
  }
}

function applyWallpaper(index) {
  const wallpaper = WALLPAPERS[index];
  if (!wallpaper) return;
  currentWallpaperIndex = index;
  const root = document.documentElement;
  const screen = document.getElementById('screen');
  
  if (!designerState.accent) {
    root.style.setProperty('--accent', wallpaper.accent);
  }
  root.style.setProperty('--text-main', wallpaper.text);
  root.style.setProperty('--text-sub', wallpaper.sub);
  root.style.setProperty('--accent-green', wallpaper.green);
  
  screen.style.setProperty('--wallpaper-old', screen.style.backgroundImage);
  screen.style.backgroundImage = `linear-gradient(rgba(8, 9, 17, 0.42), rgba(8, 9, 17, 0.58)), url("./fondos/${wallpaper.file}")`;
  screen.classList.remove('wallpaper-transition');
  void screen.offsetWidth;
  screen.classList.add('wallpaper-transition');
  setTimeout(() => screen.classList.remove('wallpaper-transition'), 500);
  try {
    localStorage.setItem(WALLPAPER_STORAGE_KEY, String(index));
  } catch (error) {}
  showToast('Fondo de Pantalla', `Fondo "${wallpaper.name}" aplicado.`, 'image');
  renderSettingsApp();
  setTimeout(syncAllSliders, 0);
}

const contextMenu = document.getElementById('context-menu');
function showContextMenu(x, y) {
  if (!contextMenu) return;
  contextMenu.classList.add('open');
  contextMenu.style.left = `${Math.min(x, window.innerWidth - contextMenu.offsetWidth - 12)}px`;
  contextMenu.style.top = `${Math.min(y, window.innerHeight - contextMenu.offsetHeight - 12)}px`;
  refreshIcons();
}

function hideContextMenu() {
  if (contextMenu) contextMenu.classList.remove('open');
}

function openContextApp(id) {
  hideContextMenu();
  openApp(id);
}

function openSettingsTab(tab) {
  openApp('settings');
  settingsState.activeSettingsTab = tab;
  renderSettingsApp();
  hideContextMenu();
}

function cycleWallpaper() {
  applyWallpaper((currentWallpaperIndex + 1) % WALLPAPERS.length);
  hideContextMenu();
}

function refreshDesktop() {
  const background = document.getElementById('background-layer');
  if (background) {
    background.innerHTML = '';
    createStars();
  }
  hideContextMenu();
  showToast('Escritorio Actualizado', 'Vista y widgets recargados.', 'refresh-cw');
}

function getAppTileHTML(appId) {
  const app = APPS[appId];
  if (!app) return '';
  if (app.image) {
    return `<div class="app-tile ${app.tileClass}" title="${app.title}"><img src="${app.image}" alt="${app.title}" class="app-tile-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><i data-lucide="${app.icon}" style="display:none;"></i></div>`;
  }
  return `<div class="app-tile ${app.tileClass}" title="${app.title}"><i data-lucide="${app.icon}"></i></div>`;
}

/* =====================================================
   ★ DOCK CONTEXT MENU (click derecho sobre apps del dock)
===================================================== */

/**
 * Muestra el menú contextual sobre un ícono del dock.
 * @param {string} appId
 * @param {MouseEvent} event  Evento de contextmenu, para saber la posición y el target
 */
function showDockContextMenu(appId, event) {
  const app = APPS[appId];
  if (!app) return;

  /* Cerramos cualquier menú anterior */
  hideDockContextMenu();

  const instances = getInstancesOfApp(appId);
  const count = instances.length;
  const isRunning = count > 0;

  /* Creamos el contenedor del menú */
  const menu = document.createElement('div');
  menu.className = 'dock-context-menu';
  menu.dataset.appId = appId;

  /* ---- Header con ícono + nombre ---- */
  const iconHTML = app.image
    ? `<img src="${app.image}" alt="${escapeHtml(app.title)}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i data-lucide=\\'${app.icon}\\'></i>';" />`
    : `<i data-lucide="${app.icon}"></i>`;

  let html = `
    <div class="dock-context-header">
      <div class="app-icon-wrapper">${iconHTML}</div>
      <div class="app-meta">
        <span class="app-title">${escapeHtml(app.title)}</span>
        <span class="app-sub">${isRunning ? `${count} ${count === 1 ? 'instancia abierta' : 'instancias abiertas'}` : 'Sin abrir'}</span>
      </div>
    </div>
  `;

  /* ---- Opción: Abrir nueva instancia ---- */
  html += `
    <button class="dock-context-item" data-action="open-new" type="button">
      <span class="dc-icon"><i data-lucide="plus-square"></i></span>
      <span class="dc-label">Abrir nueva ${escapeHtml(app.title)}</span>
      <span class="dc-shortcut">Ctrl+Click</span>
    </button>
  `;

  /* ---- Opción: Enfocar última instancia (solo si está corriendo) ---- */
  if (isRunning) {
    html += `
      <button class="dock-context-item" data-action="focus" type="button">
        <span class="dc-icon"><i data-lucide="focus"></i></span>
        <span class="dc-label">Enfocar ${escapeHtml(app.title)}</span>
      </button>
    `;
  }

  /* ---- Separador + Cerrar (solo si está corriendo) ---- */
  if (isRunning) {
    html += `<div class="dock-context-separator"></div>`;
    html += `
      <button class="dock-context-item danger" data-action="close-all" type="button">
        <span class="dc-icon"><i data-lucide="x-circle"></i></span>
        <span class="dc-label">${count > 1 ? `Cerrar todas las instancias` : `Cerrar ${escapeHtml(app.title)}`}</span>
        <span class="dc-count">${count}</span>
      </button>
    `;
  }

  menu.innerHTML = html;

  /* Lo agregamos al body para medirlo y posicionarlo */
  document.body.appendChild(menu);
  dockContextMenuEl = menu;
  dockContextMenuAppId = appId;

  /* Refrescamos iconos */
  refreshIcons();

  /* ---- Posicionamiento ---- */
  const menuRect = menu.getBoundingClientRect();
  const margin = 10;
  const anchorRect = event.currentTarget
    ? event.currentTarget.getBoundingClientRect()
    : { left: event.clientX, right: event.clientX, top: event.clientY, bottom: event.clientY };

  /* Por defecto: centrado arriba del dock item */
  let left = anchorRect.left + (anchorRect.right - anchorRect.left) / 2 - menuRect.width / 2;
  let top = anchorRect.top - menuRect.height - 12;

  /* Si no entra arriba, lo ponemos debajo */
  if (top < margin) {
    top = anchorRect.bottom + 12;
  }

  /* Clamp horizontal */
  left = Math.max(margin, Math.min(window.innerWidth - menuRect.width - margin, left));
  top = Math.max(margin, Math.min(window.innerHeight - menuRect.height - margin, top));

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  /* ---- Listeners de las opciones ---- */
  menu.querySelectorAll('.dock-context-item[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      handleDockContextAction(action, appId);
    });
  });

  /* ---- Apertura con animación ---- */
  requestAnimationFrame(() => {
    menu.classList.add('open');
  });

  refreshIcons();
}

/**
 * Maneja una acción elegida del menú contextual del dock.
 */
function handleDockContextAction(action, appId) {
  switch (action) {
    case 'open-new': {
      openApp(appId, true);
      break;
    }
    case 'focus': {
      const lastId = getLastInstanceOfApp(appId);
      if (lastId) {
        const w = openWindows[lastId]?.win;
        if (w && parseInt(w.dataset.ws, 10) !== currentWorkspace) {
          switchWorkspace(parseInt(w.dataset.ws, 10));
        }
        focusWindow(lastId);
      }
      break;
    }
    case 'close-all': {
      const ids = getInstancesOfApp(appId);
      ids.forEach(winId => closeApp(winId));
      break;
    }
  }
  hideDockContextMenu();
}

/**
 * Cierra el menú contextual del dock si está abierto.
 */
function hideDockContextMenu() {
  if (dockContextMenuEl) {
    const el = dockContextMenuEl;
    el.classList.remove('open');
    setTimeout(() => el.remove(), 160);
    dockContextMenuEl = null;
    dockContextMenuAppId = null;
  }
}

/* ================= DOCK (adaptado a multi-instancia + context menu) ================= */
function renderDock() {
  const dock = document.getElementById('dock');
  if (!dock) return;
  dock.innerHTML = '';
  
  /* Launcher button */
  const lBtn = document.createElement('div');
  lBtn.className = 'dock-item dock-launcher-btn';
  lBtn.tabIndex = 0;
  lBtn.setAttribute('role', 'button');
  lBtn.title = 'Lanzador de Aplicaciones (Nebula Menu)';
  lBtn.innerHTML = `<img src="./logo nebula.png" alt="Nebula" class="dock-launcher-logo" onerror="this.onerror=null; this.outerHTML='<i data-lucide=\\'layout-grid\\'></i>'; refreshIcons();" />`;
  lBtn.onclick = toggleLauncher;
  dock.appendChild(lBtn);

  /* Apps del dock */
  DOCK_APPS.forEach(id => {
    const instances = getInstancesOfApp(id);
    const count = instances.length;

    const div = document.createElement('div');
    const isRunning = count > 0;
    const lastWinId = isRunning ? getLastInstanceOfApp(id) : null;
    const lastWin = lastWinId ? openWindows[lastWinId].win : null;
    const isCurrentWorkspace = lastWin && parseInt(lastWin.dataset.ws) === currentWorkspace;

    div.className = `dock-item ${isRunning ? 'running' : ''} ${isRunning && !isCurrentWorkspace ? 'other-workspace' : ''}`;
    div.tabIndex = 0;
    div.setAttribute('role', 'button');
    div.title = count > 1
      ? `${APPS[id].title} · ${count} instancias (Clic normal: enfocar · Ctrl+Clic: nueva · Clic derecho: menú)`
      : `${APPS[id].title} (Ctrl+Clic: nueva instancia · Clic derecho: menú)`;
    div.dataset.appId = id;
    div.innerHTML = `${getAppTileHTML(id)}<div class="dot"></div>`;

    if (count > 1) {
      const badge = document.createElement('span');
      badge.className = 'dock-item-instance-badge';
      badge.textContent = String(count);
      div.appendChild(badge);
    }

    /* Click normal vs Ctrl+Click vs Click medio */
    div.onclick = (e) => {
      const forceNew = e.ctrlKey || e.metaKey || e.button === 1;
      if (forceNew) {
        e.preventDefault();
        openApp(id, true);
      } else {
        openApp(id);
      }
    };
    div.onauxclick = (e) => {
      if (e.button === 1) {
        e.preventDefault();
        openApp(id, true);
      }
    };
    div.onmousedown = (e) => {
      if (e.button === 1) e.preventDefault();
    };

    /* ★ Click derecho: menú contextual del dock */
    div.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      showDockContextMenu(id, e);
    };

    /* Hover preview solo si hay instancias */
    if (isRunning) {
      div.addEventListener('mouseenter', () => {
        /* Si el menú contextual de este mismo app está abierto, no mostramos preview */
        if (dockContextMenuAppId === id) return;
        showDockPreview(id, div);
      });
      div.addEventListener('mouseleave', () => hideDockPreview());
    }

    dock.appendChild(div);
  });
  refreshIcons();
}

/* ================= DOCK HOVER PREVIEW — multi-estilo (multi-instancia) ================= */
function buildDockPreviewHTML(appId) {
  const app = APPS[appId];
  const instances = getInstancesOfApp(appId);
  if (!app || instances.length === 0) return '';

  const lastWinId = getLastInstanceOfApp(appId);
  const lastWin = openWindows[lastWinId]?.win;
  const isMinimized = lastWin?.classList.contains('minimized') ?? false;

  const badges = [];
  if (instances.length > 1) {
    badges.push(`<span class="dock-preview-badge instance"><i data-lucide="layers"></i> ${instances.length} INSTANCIAS</span>`);
  }
  if (isMinimized) {
    badges.push(`<span class="dock-preview-badge minimized"><i data-lucide="minus-circle"></i> MINIMIZED</span>`);
  }

  return `
    <div class="dock-preview-header">
      <div class="dock-preview-meta">
        <span class="dock-preview-title">${escapeHtml(app.title)}</span>
        <span class="dock-preview-sub">${escapeHtml(app.sub)}</span>
      </div>
      <button class="dock-preview-close" type="button" title="Cerrar todas las instancias" aria-label="Cerrar todas las instancias">
        <i data-lucide="x"></i>
      </button>
    </div>

    <div class="dock-preview-sketch">
      <div class="dock-preview-sketch-bar ${app.tileClass}">
        <span class="sketch-dot min"></span>
        <span class="sketch-dot max"></span>
        <span class="sketch-dot close"></span>
        <span class="sketch-title">${escapeHtml(app.title)}</span>
      </div>
      <div class="dock-preview-sketch-body">
        <span class="sketch-line accent w40"></span>
        <span class="sketch-line w90"></span>
        <span class="sketch-line w75"></span>
        <span class="sketch-line w60"></span>
        <span class="sketch-block"></span>
      </div>
    </div>

    ${badges.length ? `<div class="dock-preview-badges">${badges.join('')}</div>` : ''}
  `;
}

function showDockPreview(appId, dockItemEl) {
  clearTimeout(dockPreviewTimeout);
  dockPreviewTimeout = setTimeout(() => {
    hideDockPreview(true);

    const instances = getInstancesOfApp(appId);
    if (instances.length === 0) return;

    const app = APPS[appId];
    const preview = document.createElement('div');
    preview.className = 'dock-preview';

    const lastWinId = getLastInstanceOfApp(appId);
    const lastWin = openWindows[lastWinId]?.win;
    if (lastWin?.classList.contains('minimized')) preview.classList.add('is-minimized');

    preview.dataset.appId = appId;
    preview.innerHTML = buildDockPreviewHTML(appId);

    if (app && app.accentColor) {
      preview.style.setProperty('--app-accent', app.accentColor);
      preview.style.setProperty('--app-accent-glow', `${app.accentColor}66`);
    }

    document.body.appendChild(preview);

    const rect = dockItemEl.getBoundingClientRect();
    const previewRect = preview.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - previewRect.width / 2;
    left = Math.max(10, Math.min(window.innerWidth - previewRect.width - 10, left));
    const top = rect.top - previewRect.height - 18;

    preview.style.left = `${left}px`;
    preview.style.top = `${top}px`;

    const tailX = (rect.left + rect.width / 2) - left;
    preview.style.setProperty('--tail-x', `${tailX}px`);

    preview.addEventListener('click', (e) => {
      if (e.target.closest('.dock-preview-close')) return;
      const lastId = getLastInstanceOfApp(appId);
      if (lastId) {
        focusWindow(lastId);
        const w = openWindows[lastId]?.win;
        if (w && parseInt(w.dataset.ws) !== currentWorkspace) {
          switchWorkspace(parseInt(w.dataset.ws));
          focusWindow(lastId);
        }
      }
      hideDockPreview();
    });

    preview.querySelector('.dock-preview-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      getInstancesOfApp(appId).forEach(winId => closeApp(winId));
      hideDockPreview();
    });

    requestAnimationFrame(() => preview.classList.add('visible'));
    refreshIcons();

    dockPreviewEl = preview;
  }, 180);
}

function hideDockPreview(instant = false) {
  clearTimeout(dockPreviewTimeout);
  if (!dockPreviewEl) return;
  const el = dockPreviewEl;
  dockPreviewEl = null;
  if (instant) {
    el.remove();
    return;
  }
  el.classList.remove('visible');
  setTimeout(() => el.remove(), 180);
}

function updateTopBar(winId) {
  const appNameSpan = document.getElementById('active-app-name');
  if (!appNameSpan) return;

  if (winId && openWindows[winId]) {
    const appId = openWindows[winId].appId;
    const instances = getInstancesOfApp(appId);
    const baseTitle = APPS[appId]?.title || appId;

    if (instances.length > 1) {
      const instNum = getInstanceNumber(winId);
      appNameSpan.textContent = `${baseTitle} · #${instNum}`;
    } else {
      appNameSpan.textContent = baseTitle;
    }
  } else {
    appNameSpan.textContent = 'Escritorio';
  }
}

/* =====================================================
   WINDOW MANAGER — Administrador de Escritorios
===================================================== */
function toggleWindowManager() {
  if (windowManagerOpen) {
    closeWindowManager();
  } else {
    openWindowManager();
  }
}

function openWindowManager() {
  const overlay = document.getElementById('window-manager-overlay');
  if (!overlay) return;

  windowManagerOpen = true;
  renderWindowManager();
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');

  closeQuickCenter();
  closeControlCenter();
  hideDockPreview();
  hideContextMenu();
  hideDockContextMenu();

  refreshIcons();
}

function closeWindowManager() {
  const overlay = document.getElementById('window-manager-overlay');
  if (!overlay) return;

  cleanupWmDrag();

  windowManagerOpen = false;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

function getWindowsInWorkspace(wsNum) {
  return Object.keys(openWindows).filter(winId => {
    const entry = openWindows[winId];
    const win = entry?.win;
    return win && parseInt(win.dataset.ws, 10) === wsNum;
  });
}

function buildMiniWindowHTML(winId) {
  const entry = openWindows[winId];
  const win = entry?.win;
  const app = APPS[entry?.appId];
  if (!entry || !win || !app) return '';

  const isFocused = winId === activeWinId;
  const iconHTML = app.image
    ? `<img src="${app.image}" alt="${escapeHtml(app.title)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" /><i data-lucide="${app.icon}" style="display:none;"></i>`
    : `<i data-lucide="${app.icon}"></i>`;

  return `
    <div class="wm-mini-window ${isFocused ? 'focused' : ''}"
         title="${escapeHtml(app.title)} · Arrastrá para mover de Space"
         data-win-id="${winId}"
         draggable="true">
      ${iconHTML}
    </div>
  `;
}

function renderWindowManager() {
  const strip = document.getElementById('wm-workspaces-strip');
  const grid = document.getElementById('wm-grid');
  const empty = document.getElementById('wm-empty');
  const subtitle = document.getElementById('wm-subtitle');
  const sectionTitle = document.getElementById('wm-section-title');
  if (!strip || !grid || !empty) return;

  /* ============ 1) TIRA DE WORKSPACES ============ */
  strip.innerHTML = '';

  for (let ws = 1; ws <= TOTAL_WORKSPACES; ws++) {
    const winsInWs = getWindowsInWorkspace(ws);
    const isActive = ws === currentWorkspace;
    const isEmpty = winsInWs.length === 0;

    const visibleWins = winsInWs.slice(0, 6);
    const miniWindowsHTML = visibleWins.map(buildMiniWindowHTML).join('');

    const previewContent = isEmpty
      ? `<span class="wm-workspace-empty-hint">Vacío</span>`
      : `<div class="wm-mini-windows">${miniWindowsHTML}</div>`;

    const card = document.createElement('button');
    card.type = 'button';
    card.className = `wm-workspace-card ${isActive ? 'active' : ''} ${isEmpty ? 'empty' : ''}`;
    card.dataset.wmWs = String(ws);
    card.title = `Ir al Space ${ws}`;
    card.innerHTML = `
      <div class="wm-workspace-label">
        <span style="display:flex; align-items:center; gap:6px;">
          <span class="ws-num">${ws}</span>
          <span>Space ${ws}</span>
        </span>
        <span class="ws-count">${winsInWs.length} ${winsInWs.length === 1 ? 'app' : 'apps'}</span>
      </div>
      <div class="wm-workspace-preview">
        ${previewContent}
      </div>
    `;
    strip.appendChild(card);
  }

  strip.querySelectorAll('.wm-workspace-card[data-wm-ws]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      if (wmDragState && wmDragState.justDropped) return;
      const ws = parseInt(card.dataset.wmWs, 10);
      if (Number.isNaN(ws)) return;
      if (ws === currentWorkspace) return;
      switchWorkspace(ws);
    });
  });

  setupWmDragAndDrop();

  /* ============ 2) GRID DE VENTANAS DEL WORKSPACE ACTIVO ============ */
  const activeWsWinIds = getWindowsInWorkspace(currentWorkspace);

  if (sectionTitle) {
    sectionTitle.textContent = `Ventanas del Space ${currentWorkspace}`;
  }

  if (subtitle) {
    const totalWins = Object.keys(openWindows).length;
    const winsCount = activeWsWinIds.length;
    if (totalWins === 0) {
      subtitle.textContent = 'Sin ventanas abiertas en todo el sistema';
    } else if (winsCount === 0) {
      subtitle.textContent = `Space ${currentWorkspace} sin ventanas · ${totalWins} ${totalWins === 1 ? 'ventana abierta' : 'ventanas abiertas'} en otros spaces`;
    } else {
      subtitle.textContent = `${winsCount} ${winsCount === 1 ? 'ventana' : 'ventanas'} en este space · ${totalWins} en total`;
    }
  }

  if (activeWsWinIds.length === 0) {
    grid.innerHTML = '';
    grid.hidden = true;
    empty.hidden = false;
    refreshIcons();
    return;
  }

  grid.hidden = false;
  empty.hidden = true;

  grid.innerHTML = activeWsWinIds.map((winId, i) => {
    const entry = openWindows[winId];
    const win = entry?.win;
    const app = APPS[entry?.appId];
    if (!entry || !win || !app) return '';

    const isFocused = winId === activeWinId;
    const isMinimized = win.classList.contains('minimized');

    const instances = getInstancesOfApp(entry.appId);
    const hasMultiple = instances.length > 1;
    const instNumber = hasMultiple ? getInstanceNumber(winId) : 1;

    const badges = [];
    if (hasMultiple) {
      badges.push(`<span class="wm-badge instance" style="--app-accent: ${app.accentColor || 'var(--accent)'}">#${instNumber} / ${instances.length}</span>`);
    }
    if (isMinimized) {
      badges.push(`<span class="wm-badge minimized"><i data-lucide="minus-circle"></i> Minimizada</span>`);
    }

    const iconHTML = app.image
      ? `<img src="${app.image}" alt="${escapeHtml(app.title)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" /><i data-lucide="${app.icon}" style="display:none;"></i>`
      : `<i data-lucide="${app.icon}"></i>`;

    const titleText = hasMultiple ? `${app.title} · #${instNumber}` : app.title;

    return `
      <button
        class="wm-card ${isFocused ? 'is-focused' : ''} ${isMinimized ? 'is-minimized' : ''}"
        type="button"
        data-wm-win="${winId}"
        style="animation-delay: ${i * 30}ms; --app-accent: ${app.accentColor || 'var(--accent)'};"
        title="Enfocar ${escapeHtml(titleText)}"
      >
        ${badges.length ? `<div class="wm-card-badges">${badges.join('')}</div>` : ''}

        <div class="wm-card-header">
          <div class="wm-card-icon">${iconHTML}</div>
          <div class="wm-card-meta">
            <span class="wm-card-title">${escapeHtml(titleText)}</span>
            <span class="wm-card-sub">${escapeHtml(app.sub)}</span>
          </div>
        </div>

        <div class="wm-card-preview">
          <div class="wm-preview-bar ${app.tileClass}">
            <span class="wm-dot min"></span>
            <span class="wm-dot max"></span>
            <span class="wm-dot close"></span>
            <span class="wm-preview-title">${escapeHtml(app.title)}</span>
          </div>
          <div class="wm-preview-body">
            <span class="wm-preview-line accent"></span>
            <span class="wm-preview-line w90"></span>
            <span class="wm-preview-line w75"></span>
            <span class="wm-preview-line w60"></span>
            <span class="wm-preview-block"></span>
          </div>
        </div>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.wm-card[data-wm-win]').forEach(card => {
    card.addEventListener('click', () => {
      const winId = card.dataset.wmWin;
      focusFromWindowManager(winId);
    });
  });

  refreshIcons();
}

function focusFromWindowManager(winId) {
  if (!winId || !openWindows[winId]) {
    closeWindowManager();
    return;
  }

  const win = openWindows[winId].win;
  const winWs = parseInt(win.dataset.ws, 10);

  if (winWs !== currentWorkspace) {
    switchWorkspace(winWs);
  }

  if (win.classList.contains('minimized')) {
    win.classList.remove('minimized');
    win.style.display = 'flex';
  }

  focusWindow(winId);

  closeWindowManager();
}

/* =====================================================
   DRAG & DROP: mover ventanas entre workspaces
===================================================== */
function setupWmDragAndDrop() {
  const strip = document.getElementById('wm-workspaces-strip');
  if (!strip) return;

  strip.querySelectorAll('.wm-mini-window[data-win-id]').forEach(mini => {
    mini.addEventListener('dragstart', (e) => {
      const winId = mini.dataset.winId;
      if (!winId || !openWindows[winId]) {
        e.preventDefault();
        return;
      }

      const sourceWs = parseInt(openWindows[winId].win.dataset.ws, 10);

      wmDragState = {
        winId,
        sourceWs,
        justDropped: false
      };

      mini.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', winId);

      try { e.dataTransfer.setDragImage(mini, mini.offsetWidth / 2, mini.offsetHeight / 2); } catch (_) {}

      strip.classList.add('wm-dragging');
    });

    mini.addEventListener('dragend', () => {
      mini.classList.remove('dragging');
      strip.classList.remove('wm-dragging');

      strip.querySelectorAll('.wm-workspace-card').forEach(c => {
        c.classList.remove('drag-over', 'drag-invalid');
      });

      if (wmDragState) {
        wmDragState.justDropped = true;
        setTimeout(() => {
          if (wmDragState) wmDragState.justDropped = false;
        }, 120);
      }

      setTimeout(cleanupWmDrag, 200);
    });
  });

  strip.querySelectorAll('.wm-workspace-card[data-wm-ws]').forEach(card => {
    const targetWs = parseInt(card.dataset.wmWs, 10);

    card.addEventListener('dragover', (e) => {
      if (!wmDragState) return;

      if (wmDragState.sourceWs === targetWs) {
        e.dataTransfer.dropEffect = 'none';
        card.classList.add('drag-invalid');
        return;
      }

      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', (e) => {
      if (!card.contains(e.relatedTarget)) {
        card.classList.remove('drag-over', 'drag-invalid');
      }
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over', 'drag-invalid');

      if (!wmDragState) return;

      const { winId, sourceWs } = wmDragState;
      if (sourceWs === targetWs) return;

      moveWindowToWorkspace(winId, targetWs);

      wmDragState.justDropped = true;
    });
  });
}

function cleanupWmDrag() {
  wmDragState = null;
  const strip = document.getElementById('wm-workspaces-strip');
  if (strip) {
    strip.classList.remove('wm-dragging');
    strip.querySelectorAll('.wm-workspace-card').forEach(c => {
      c.classList.remove('drag-over', 'drag-invalid');
    });
    strip.querySelectorAll('.wm-mini-window').forEach(m => {
      m.classList.remove('dragging');
    });
  }
}

/* ================= GESTIÓN DE VENTANAS (multi-instancia) ================= */
function openApp(appId, forceNew = false) {
  const app = APPS[appId];
  if (!app) return;

  const instances = getInstancesOfApp(appId);

  if (!forceNew && instances.length > 0) {
    const lastWinId = getLastInstanceOfApp(appId);
    if (lastWinId) {
      const lastWin = openWindows[lastWinId].win;
      if (parseInt(lastWin.dataset.ws) !== currentWorkspace) {
        switchWorkspace(parseInt(lastWin.dataset.ws));
      }
      focusWindow(lastWinId);
      return;
    }
  }

  const winId = generateWinId(appId);
  const win = document.createElement('div');
  win.className = 'window focused';
  win.id = `win-${winId}`;
  win.dataset.ws = currentWorkspace;
  win.dataset.appId = appId;
  win.dataset.winId = winId;

  const top = 65 + Math.random() * 25;
  const left = 100 + Math.random() * 50;
  win.style.top = top + 'px';
  win.style.left = left + 'px';

  win.style.width = appId === 'music' ? '980px' : appId === 'settings' ? '780px' : '680px';
  win.style.height = appId === 'music' ? '640px' : appId === 'settings' ? '540px' : '480px';
  win.style.zIndex = ++zIndexCounter;

  const totalInstances = instances.length + 1;
  const newInstNumber = getInstanceNumber(winId);
  const titleWithInstance = totalInstances > 1 ? `${app.title} · #${newInstNumber}` : app.title;

  win.innerHTML = `
    <div class="titlebar">
      <div class="window-identity">
        <span class="win-icon">
          ${app.image ? `<img src="${app.image}" alt="${app.title}" class="win-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" /><i data-lucide="${app.icon}" style="display:none;"></i>` : `<i data-lucide="${app.icon}"></i>`}
        </span>
        <strong>${escapeHtml(titleWithInstance)}</strong>
        <small>${app.sub}</small>
      </div>
      <div class="wbtns">
        <button class="min" onclick="minimizeApp('${winId}')" title="Minimizar"></button>
        <button class="max" onclick="maximizeApp('${winId}')" title="Maximizar"></button>
        <button class="close" onclick="closeApp('${winId}')" title="Cerrar"></button>
      </div>
    </div>
    <div class="wcontent">
      ${getAppContent(appId)}
    </div>
  `;

  win.addEventListener('mousedown', () => focusWindow(winId));
  document.getElementById('windows-container').appendChild(win);

  if (appId === 'terminal') setupTerminal(win);
  if (appId === 'nova') setupNovaAI(win);
  if (appId === 'files') setupFiles(win);
  if (appId === 'settings') renderSettingsApp();
  if (appId === 'music') setupSpotifyApp(win);

  openWindows[winId] = { appId, win };
  focusWindow(winId);
  renderDock();
  syncAllSliders();
  refreshIcons();

  const titlebar = win.querySelector('.titlebar');
  function getPointerPosition(e) {
    const point = e.touches ? e.touches[0] : e;
    return { x: point.clientX, y: point.clientY };
  }

  function startDrag(e) {
    if (e.target.tagName === 'BUTTON' || e.target.closest('.wbtns')) return;
    if (e.type === 'touchstart') e.preventDefault();

    const start = getPointerPosition(e);
    const sx = start.x, sy = start.y;
    const ol = win.offsetLeft, ot = win.offsetTop;
    const moveEvent = e.type === 'touchstart' ? 'touchmove' : 'mousemove';
    const endEvent = e.type === 'touchstart' ? 'touchend' : 'mouseup';

    function move(ev) {
      if (moveEvent === 'touchmove') ev.preventDefault();
      const point = getPointerPosition(ev);
      win.style.left = (ol + point.x - sx) + 'px';
      win.style.top = Math.max(46, (ot + point.y - sy)) + 'px';
    }
    function up() {
      document.removeEventListener(moveEvent, move);
      document.removeEventListener(endEvent, up);
    }
    document.addEventListener(moveEvent, move, { passive: false });
    document.addEventListener(endEvent, up);
  }

  titlebar.addEventListener('mousedown', startDrag);
  titlebar.addEventListener('touchstart', startDrag, { passive: false });

  if (totalInstances > 1) {
    showToast(
      `${app.title} · Instancia #${newInstNumber}`,
      `Abriendo nueva ventana de ${app.title}.`,
      'plus'
    );
  }
}

function focusWindow(winId) {
  if (!openWindows[winId]) return;

  activeWinId = winId;
  Object.values(openWindows).forEach(entry => {
    entry.win.classList.remove('focused');
  });

  const win = openWindows[winId].win;
  win.classList.add('focused');
  win.classList.remove('minimized');
  win.style.zIndex = ++zIndexCounter;

  if (parseInt(win.dataset.ws) === currentWorkspace) {
    win.style.display = 'flex';
  }

  updateTopBar(winId);

  if (windowManagerOpen) renderWindowManager();
}

function closeApp(winId) {
  const entry = openWindows[winId];
  if (!entry) return;

  const appId = entry.appId;

  entry.win.remove();
  delete openWindows[winId];

  if (activeWinId === winId) {
    activeWinId = null;
    updateTopBar(null);
  }

  const remaining = getInstancesOfApp(appId);
  remaining.forEach(id => {
    const w = openWindows[id]?.win;
    if (!w) return;

    const wApp = APPS[appId];
    const newNum = getInstanceNumber(id);
    const titleEl = w.querySelector('.window-identity strong');
    if (titleEl && wApp) {
      titleEl.textContent = remaining.length > 1 ? `${wApp.title} · #${newNum}` : wApp.title;
    }
  });

  renderDock();
  hideDockPreview();

  if (windowManagerOpen) renderWindowManager();
}

function maximizeApp(winId) {
  const entry = openWindows[winId];
  const win = entry?.win;
  if (!win) return;

  if (win.classList.contains('maximized')) {
    restoreWindow(winId);
  } else {
    win.dataset.oldW = win.style.width;
    win.dataset.oldH = win.style.height;
    win.dataset.oldT = win.style.top;
    win.dataset.oldL = win.style.left;

    win.classList.add('maximized');
    win.style.width = '100vw';
    win.style.height = 'calc(100vh - 46px)';
    win.style.top = '46px';
    win.style.left = '0';
    win.style.borderRadius = "0";
  }
}

function restoreWindow(winId) {
  const entry = openWindows[winId];
  const win = entry?.win;
  if (!win) return;

  win.classList.remove('maximized');
  win.style.width = win.dataset.oldW;
  win.style.height = win.dataset.oldH;
  win.style.top = win.dataset.oldT;
  win.style.left = win.dataset.oldL;
  win.style.borderRadius = "var(--radius-md)";
}

function minimizeApp(winId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;

  entry.win.classList.add('minimized');
  entry.win.style.display = 'none';

  if (activeWinId === winId) {
    activeWinId = null;
    updateTopBar(null);
  }

  if (windowManagerOpen) renderWindowManager();
}

/* ================= SETUP NOVA AI ================= */
function setupNovaAI(win) {
  const history = win.querySelector('.nova-history');
  const form = win.querySelector('.nova-form');
  const input = win.querySelector('.nova-input');
  if (!history || !form || !input) return;

  const appendMessage = (text, sender, actionBadge = null, actionBtnHTML = '') => {
    const message = document.createElement('div');
    message.className = `nova-message ${sender}`;
    message.innerHTML = `<div>${escapeHtml(text).replace(/\n/g, '<br>')}</div>`;
    if (actionBadge) {
      message.innerHTML += `<div class="nova-action-badge"><i data-lucide="check-circle-2"></i> ${escapeHtml(actionBadge)}</div>`;
    }
    if (actionBtnHTML) {
      message.innerHTML += actionBtnHTML;
    }
    history.appendChild(message);
    history.scrollTop = history.scrollHeight;
    refreshIcons();
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    appendMessage(query, 'user');
    input.value = '';

    const typing = document.createElement('div');
    typing.className = 'nova-typing';
    typing.textContent = 'Nova ejecutando acción...';
    history.appendChild(typing);
    history.scrollTop = history.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const { replyText, actionTaken, actionBtnHTML } = parseAndExecuteNovaAction(query);
      appendMessage(replyText, 'nova', actionTaken, actionBtnHTML);
    }, 380);
  });

  win.querySelectorAll('[data-nova-prompt]').forEach(button => {
    button.addEventListener('click', () => {
      input.value = button.dataset.novaPrompt;
      form.requestSubmit();
    });
  });

  input.focus();
  refreshIcons();
}

/* ================= SETUP SMART FILES ================= */
function findFolder(name, folder = FILE_SYSTEM) {
  if (folder.name === name) return folder;
  for (const child of folder.children || []) {
    if (child.type === 'folder') {
      const result = findFolder(name, child);
      if (result) return result;
    }
  }
  return null;
}

function setupFiles(win) {
  const explorer = win.querySelector('.files-preview');
  if (!explorer) return;
  const state = { current: FILE_SYSTEM, trail: [FILE_SYSTEM], history: [], future: [], query: '', view: 'grid' };
  const grid = explorer.querySelector('.files-grid');
  const title = explorer.querySelector('[data-files-title]');
  const path = explorer.querySelector('[data-files-path]');
  const preview = explorer.querySelector('[data-files-preview]');
  const search = explorer.querySelector('[data-files-search]');
  const back = explorer.querySelector('[data-files-back]');
  const forward = explorer.querySelector('[data-files-forward]');

  const iconNameFor = item => item.type === 'folder' ? 'folder' : item.type === 'image' ? 'image' : item.type === 'audio' ? 'music' : 'file-code-2';

  const visibleItems = () => (state.current.children || []).filter(item => item.name.toLowerCase().includes(state.query));

  const setPreview = item => {
    if (!item) {
      preview.innerHTML = '<div class="files-empty-preview">Seleccioná un archivo para previsualización interactiva rápida.</div>';
      return;
    }
    
    if (item.type === 'image') {
      preview.innerHTML = `
        <div style="display:flex; gap:12px; align-items:center;">
          <img src="${item.path}" alt="${escapeHtml(item.name)}" style="width:75px; height:60px; border-radius:6px; object-fit:cover;">
          <div>
            <strong style="color:#fff; font-size:12px;">${escapeHtml(item.name)}</strong>
            <small style="display:block; color:var(--text-sub); font-size:10px;">${escapeHtml(item.size)}</small>
            <button class="preview-set-wall-btn" type="button" onclick="setCustomWallpaperFromFile('${item.path}')"><i data-lucide="image"></i> Establecer de fondo</button>
          </div>
        </div>
      `;
    } else if (item.type === 'audio') {
      preview.innerHTML = `
        <div>
          <strong style="color:#fff; font-size:12px;"><i data-lucide="music" style="width:14px; height:14px; color:var(--accent);"></i> ${escapeHtml(item.name)}</strong>
          <small style="display:block; color:var(--text-sub); font-size:10px;">${escapeHtml(item.size)}</small>
          <div class="preview-audio-player">
            <button class="preview-play-btn" type="button" onclick="toggleMediaPlayback()"><i data-lucide="play"></i></button>
            <div class="preview-audio-wave">
              <span style="height:40%;"></span><span style="height:80%;"></span><span style="height:60%;"></span>
              <span style="height:100%;"></span><span style="height:50%;"></span><span style="height:70%;"></span>
            </div>
          </div>
        </div>
      `;
    } else {
      preview.innerHTML = `
        <div>
          <strong style="color:#fff; font-size:12px;"><i data-lucide="file-text" style="width:14px; height:14px; color:var(--accent);"></i> ${escapeHtml(item.name)}</strong>
          <small style="display:block; color:var(--text-sub); font-size:10px;">${escapeHtml(item.size)} · Solo lectura</small>
          <div style="margin-top:6px; font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--text-sub); background:rgba(0,0,0,0.3); padding:6px; border-radius:4px; max-height:80px; overflow:hidden;">
            // Nebula OS File Descriptor\\n// Archivo listo para ejecución y lectura
          </div>
        </div>
      `;
    }
    refreshIcons();
  };

  const render = () => {
    const items = visibleItems();
    if (title) title.textContent = state.current.label || state.current.name;
    if (path) path.textContent = `Inicio / ${state.trail.slice(1).map(folder => folder.label || folder.name).join(' / ') || 'Escritorio'}`;
    
    grid.innerHTML = items.length ? items.map(item => `
      <button class="explorer-item" type="button" data-file-name="${escapeHtml(item.name)}">
        <span class="file-visual">
          ${item.type === 'image' ? `<img src="${item.path}" alt="">` : `<span class="file-type-icon"><i data-lucide="${iconNameFor(item)}"></i></span>`}
        </span>
        <strong>${escapeHtml(item.label || item.name)}</strong>
        <small>${item.type === 'folder' ? `${item.children.length} elementos` : escapeHtml(item.size.split(' · ')[0])}</small>
      </button>
    `).join('') : '<div class="files-no-results">No hay elementos que coincidan.</div>';
    
    if (back) back.disabled = state.history.length === 0;
    if (forward) forward.disabled = state.future.length === 0;
    refreshIcons();
  };

  const goTo = (folder, record = true) => {
    if (record) { state.history.push(state.current); state.future = []; }
    state.current = folder;
    const index = state.trail.indexOf(folder);
    state.trail = index >= 0 ? state.trail.slice(0, index + 1) : [...state.trail, folder];
    state.query = '';
    if (search) search.value = '';
    setPreview(null);
    render();
  };

  grid.addEventListener('click', event => {
    const itemElement = event.target.closest('[data-file-name]');
    if (itemElement) {
      const found = (state.current.children || []).find(item => item.name === itemElement.dataset.fileName);
      setPreview(found);
    }
  });

  grid.addEventListener('dblclick', event => {
    const itemElement = event.target.closest('[data-file-name]');
    if (!itemElement) return;
    const item = (state.current.children || []).find(entry => entry.name === itemElement.dataset.fileName);
    if (item?.type === 'folder') goTo(item);
  });

  if (search) search.addEventListener('input', () => { state.query = search.value.trim().toLowerCase(); render(); });
  if (back) back.onclick = () => { const previous = state.history.pop(); state.future.unshift(state.current); goTo(previous, false); };
  if (forward) forward.onclick = () => { const next = state.future.shift(); state.history.push(state.current); goTo(next, false); };

  explorer.querySelectorAll('[data-files-location]').forEach(button => {
    button.onclick = () => {
      explorer.querySelectorAll('[data-files-location]').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      const folder = findFolder(button.dataset.filesLocation);
      if (folder) goTo(folder);
    };
  });

  render();
}

function setCustomWallpaperFromFile(imgPath) {
  const screen = document.getElementById('screen');
  if (screen) {
    screen.style.backgroundImage = `linear-gradient(rgba(8, 9, 17, 0.42), rgba(8, 9, 17, 0.58)), url("${imgPath}")`;
    showToast('Fondo Actualizado', 'Nueva imagen establecida como fondo de pantalla.', 'image');
  }
}

/* ================= SETUP TERMINAL ================= */
function setupTerminal(win) {
  const history = win.querySelector('.term-history');
  const input = win.querySelector('.term-input');
  if (!history || !input) return;

  const appendLine = (text, className = '') => {
    const line = document.createElement('div');
    line.className = `term-line ${className}`;
    line.textContent = text;
    history.appendChild(line);
  };

  const showFetch = (cmd) => {
    appendLine(`
  _   _ _____ ____  _   _ _        _       ___  ____  
 | \\ | | ____| __ )| | | | |      / \\     / _ \\/ ___| 
 |  \\| |  _| |  _ \\| | | | |     / _ \\   | | | \\___ \\ 
 | |\\  | |___| |_) | |_| | |___ / ___ \\  | |_| |___) |
 |_| \\_|_____|____/ \\___/|_____/_/   \\_\\  \\___/|____/ 
    `, 'term-art');
    appendLine(`${cmd} — Nebula OS (Gamer Edition)`);
    appendLine('OS: Nebula OS v2.4 (Gaming Kernel)');
    appendLine('GPU: NVIDIA GeForce RTX 4080 (16GB VRAM)');
    appendLine('CPU: AMD Ryzen 9 7950X (16 Cores / 32 Threads @ 4.85GHz)');
    appendLine(`Game Mode: ${gameModeActive ? 'ACTIVO (Boost)' : 'Inactivo'}`);
    appendLine(`Perfil: ${currentProfile.toUpperCase()}`);
    appendLine(`Memoria: ${(systemMetrics.ram * 32 / 100).toFixed(1)}GB / 32GB`);
  };

  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const cmd = input.value.trim();
    if (!cmd) return;
    appendLine(`❯ ${cmd}`, 'term-command');

    if (cmd === 'clear') {
      history.innerHTML = '';
    } else if (cmd === 'help') {
      appendLine('Comandos: neofetch, screenfetch, gamemode [on|off], optimize, profile [gamer|streamer|studio], clear');
    } else if (cmd === 'neofetch' || cmd === 'screenfetch') {
      showFetch(cmd);
    } else if (cmd === 'gamemode on') {
      toggleGameMode(true);
      appendLine('Game Mode Activado.', 'term-line');
    } else if (cmd === 'gamemode off') {
      toggleGameMode(false);
      appendLine('Game Mode Desactivado.', 'term-line');
    } else if (cmd === 'optimize') {
      simulateRamBoost();
      appendLine('Memoria y recursos optimizados.', 'term-line');
    } else if (cmd.startsWith('profile ')) {
      const p = cmd.split(' ')[1];
      if (['gamer', 'streamer', 'studio'].includes(p)) {
        switchProfile(p);
        appendLine(`Cambiado a perfil: ${p}`, 'term-line');
      } else {
        appendLine('Perfiles válidos: gamer, streamer, studio', 'term-error');
      }
    } else {
      appendLine(`comando no encontrado: ${cmd}. Escribí 'help' para ver comandos.`, 'term-error');
    }

    input.value = '';
    input.focus();
  });

  input.focus();
}

/* ================= SETUP SPOTIFY APP (multi-instancia) ================= */
function setupSpotifyApp(win) {
  if (!win) return;

  win.querySelectorAll('.spot-card[data-track-index]').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.trackIndex, 10);
      if (Number.isNaN(idx)) return;
      currentTrackIndex = idx;
      currentPlaybackTime = 0;
      if (!isPlaying) {
        isPlaying = true;
      }
      updateMediaUI();
      updatePlayerBackground();
      updatePlayerProgress();
      const iconName = isPlaying ? 'pause' : 'play';
      ['media-toggle', 'hud-play-btn', 'cc-play-btn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = `<i data-lucide="${iconName}"></i>`;
      });
      document.querySelectorAll('#spot-play-btn').forEach(btn => {
        btn.innerHTML = `<i data-lucide="${iconName}"></i>`;
      });
      refreshIcons();
    });
  });

  const spPlay = win.querySelector('#spot-play-btn');
  if (spPlay) spPlay.addEventListener('click', () => toggleMediaPlayback());

  const spNext = win.querySelector('#spot-next-btn');
  if (spNext) spNext.addEventListener('click', () => nextTrack());

  const spPrev = win.querySelector('#spot-prev-btn');
  if (spPrev) spPrev.addEventListener('click', () => previousTrack());

  const spShuffle = win.querySelector('#spot-shuffle');
  if (spShuffle) spShuffle.addEventListener('click', () => {
    shuffleEnabled = !shuffleEnabled;
    syncSpotifyShuffleRepeatUI();

    const ccShuffle = document.getElementById('cc-shuffle');
    if (ccShuffle) ccShuffle.classList.toggle('active', shuffleEnabled);
  });

  const spRepeat = win.querySelector('#spot-repeat');
  if (spRepeat) spRepeat.addEventListener('click', () => {
    repeatEnabled = !repeatEnabled;
    syncSpotifyShuffleRepeatUI();

    const ccRepeat = document.getElementById('cc-repeat');
    if (ccRepeat) ccRepeat.classList.toggle('active', repeatEnabled);
  });

  const spLike = win.querySelector('#spot-like-btn');
  if (spLike) spLike.addEventListener('click', () => {
    spLike.classList.toggle('liked');
  });

  const spVol = win.querySelector('#spot-volume-slider');
  if (spVol) {
    spVol.value = systemVolume;
    syncSliderFill(spVol);
    spVol.addEventListener('input', () => {
      setSystemVolume(spVol.value);
    });
  }

  const spProgress = win.querySelector('#spot-progress-track');
  if (spProgress) {
    spProgress.addEventListener('click', (e) => {
      const rect = spProgress.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      const track = TRACKS[currentTrackIndex];
      if (!track) return;
      currentPlaybackTime = Math.floor(pct * track.duration);
      updatePlayerProgress();
    });
  }

  syncSpotifyShuffleRepeatUI();
  updateMediaUI();

  const iconName = isPlaying ? 'pause' : 'play';
  if (spPlay) spPlay.innerHTML = `<i data-lucide="${iconName}"></i>`;

  setTimeout(syncAllSliders, 0);

  refreshIcons();
}

/* ================= RENDERIZADO DE NEBULA DESIGNER & AJUSTES ================= */
function renderSettingsApp() {
  const settingsWinIds = getInstancesOfApp('settings');
  settingsWinIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;
    content.innerHTML = getAppContent('settings');
  });
  refreshIcons();
  setTimeout(syncAllSliders, 0);
}

function setSettingsTab(tabName) {
  settingsState.activeSettingsTab = tabName;
  renderSettingsApp();
}

/* ================= CONTENIDO DE APPS (HTML DINÁMICO) ================= */
function getAppContent(id) {
  if (id === 'nova') {
    return `
      <div class="nova-app">
        <header class="nova-header">
          <div class="nova-mark"><i data-lucide="sparkles"></i></div>
          <div><strong>Nova AI Assistant</strong><span>Prompt-to-Action & System Tweaker · En línea</span></div>
        </header>
        <div class="nova-context">
          <span class="nova-context-dot"></span>
          <span>Perfil: <strong>${currentProfile.toUpperCase()}</strong> | Modo Juego: <strong>${gameModeActive ? 'ON (Boost)' : 'OFF'}</strong></span>
        </div>
        <div class="nova-history" aria-live="polite">
          <div class="nova-message nova">
            ¡Hola! Soy Nova AI. Puedo ejecutar acciones directas en tu sistema (cambiar temas, activar Modo Juego, optimizar RAM o poner música). ¿Qué querés configurar hoy?
          </div>
          <div class="nova-suggestions">
            <button type="button" data-nova-prompt="Cambia al tema Cyberpunk"><i data-lucide="palette"></i> Tema Cyberpunk</button>
            <button type="button" data-nova-prompt="Activa el modo juego"><i data-lucide="gamepad-2"></i> Modo Juego</button>
            <button type="button" data-nova-prompt="Optimiza el sistema"><i data-lucide="sparkles"></i> Limpiar RAM</button>
            <button type="button" data-nova-prompt="Pon música"><i data-lucide="music"></i> Poner música</button>
            <button type="button" data-nova-prompt="¿Cómo optimizo Cyberpunk 2077?"><i data-lucide="zap"></i> Tips de Rendimiento</button>
          </div>
        </div>
        <form class="nova-form">
          <button type="button" class="nova-voice-btn" id="nova-voice-btn" title="Comando por voz" onclick="startNovaVoiceInput()"><i data-lucide="mic"></i></button>
          <input class="nova-input" type="text" autocomplete="off" maxlength="240" placeholder="Pedile a Nova AI que cambie el tema, optimice o abra un juego...">
          <button type="submit" aria-label="Enviar comando">Enviar</button>
        </form>
      </div>
    `;
  }

  if (id === 'files') {
    return `
      <div class="files-preview">
        <div class="files-toolbar">
          <button type="button" class="files-nav-btn" data-files-back aria-label="Atrás"><i data-lucide="chevron-left"></i></button>
          <button type="button" class="files-nav-btn" data-files-forward aria-label="Adelante"><i data-lucide="chevron-right"></i></button>
          <i data-lucide="folder"></i>
          <strong>Archivos Inteligentes</strong>
          <span class="files-path" data-files-path>Inicio</span>
          <label class="files-search"><i data-lucide="search"></i><input type="search" data-files-search placeholder="Buscar archivo o mod..." aria-label="Buscar"></label>
        </div>
        <div class="files-layout">
          <aside class="files-sidebar">
            <small>GAMING & MULTIMEDIA</small>
            <button class="files-side-item" type="button" data-files-location="capturas"><i data-lucide="gamepad-2"></i> Capturas de Juegos</button>
            <button class="files-side-item" type="button" data-files-location="mods"><i data-lucide="cpu"></i> MODs & Configs</button>
            <button class="files-side-item" type="button" data-files-location="juegos"><i data-lucide="disc"></i> Juegos / ISOs</button>
            <button class="files-side-item" type="button" data-files-location="musica"><i data-lucide="music"></i> Música & Audio</button>
            <small>UBICACIONES</small>
            <button class="files-side-item active" type="button" data-files-location="Inicio"><i data-lucide="home"></i> Inicio</button>
            <button class="files-side-item" type="button" data-files-location="fondos"><i data-lucide="image"></i> Fondos</button>
            <button class="files-side-item" type="button" data-files-location="imagenes"><i data-lucide="layers"></i> Imágenes</button>
            <button class="files-side-item" type="button" data-files-location="vsc"><i data-lucide="code"></i> Proyectos</button>
          </aside>
          <section class="files-content">
            <div class="files-content-bar">
              <strong data-files-title>Inicio</strong>
              <span>Explorador Inteligente</span>
            </div>
            <div class="files-grid"></div>
            <aside class="files-preview-pane" data-files-preview>
              <div class="files-empty-preview">Seleccioná un archivo para previsualización interactiva rápida.</div>
            </aside>
          </section>
        </div>
      </div>
    `;
  }

  if (id === 'settings') {
    const activeTab = settingsState.activeSettingsTab || 'designer';
    return `
      <div class="settings-preview">
        <aside class="settings-nav">
          <div class="settings-nav-title"><i data-lucide="sliders"></i> Ajustes</div>
          <div class="settings-nav-item ${activeTab === 'designer' ? 'active' : ''}" onclick="setSettingsTab('designer')"><i data-lucide="palette"></i> Nebula Designer</div>
          <div class="settings-nav-item ${activeTab === 'appearance' ? 'active' : ''}" onclick="setSettingsTab('appearance')"><i data-lucide="image"></i> Fondos de Pantalla</div>
          <div class="settings-nav-item ${activeTab === 'gaming' ? 'active' : ''}" onclick="setSettingsTab('gaming')"><i data-lucide="gamepad-2"></i> Gaming & HUD</div>
          <div class="settings-nav-item ${activeTab === 'system' ? 'active' : ''}" onclick="setSettingsTab('system')"><i data-lucide="cpu"></i> Sistema</div>
        </aside>
        <section class="settings-main">
          ${activeTab === 'designer' ? getDesignerSettingsHTML() : activeTab === 'appearance' ? getAppearanceSettingsHTML() : activeTab === 'gaming' ? getGamingSettingsHTML() : getSystemSettingsHTML()}
        </section>
      </div>
    `;
  }

  if (id === 'browser') {
    return `<div class="firefox-preview"><img src="./capturafirefox.jpg" alt="Vista de Firefox"></div>`;
  }

  if (id === 'vscode') {
    return `<div class="vscode-preview"><img src="./vsc/vscimg.png" alt="Captura de Visual Studio Code"></div>`;
  }

  if (id === 'games') {
    return `
      <div class="steam-preview" style="position:relative;">
        <div style="position:absolute; top:12px; right:12px; z-index:10; background:rgba(10,14,24,0.85); padding:8px 12px; border-radius:8px; border:1px solid rgba(0,255,204,0.3); display:flex; gap:10px; align-items:center; backdrop-filter:blur(10px);">
          <span style="font-size:11px; font-weight:700; color:#00ffcc; display:flex; align-items:center; gap:4px;"><i data-lucide="gamepad-2"></i> Modo Juego:</span>
          <button class="quick-switch ${gameModeActive ? 'active' : ''}" onclick="toggleGameMode()" style="padding:0; margin:0; border:0; background:transparent;">
            <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
          </button>
          <button class="hud-tool-btn" onclick="toggleGamerOverlay()" style="padding:4px 8px;"><i data-lucide="activity"></i> HUD (Alt+Z)</button>
        </div>
        <img src="./steam/image.png" alt="Vista de Steam">
      </div>
    `;
  }

  if (id === 'music') {
    const track = TRACKS[currentTrackIndex];
    const currentFormatted = formatTime(currentPlaybackTime);
    const totalFormatted = formatTime(track.duration);

    return `
      <div class="spot-app">
        <div class="spot-topbar">
          <div class="spot-topbar-nav">
            <button class="spot-nav-arrow" type="button" disabled aria-label="Atrás"><i data-lucide="chevron-left"></i></button>
            <button class="spot-nav-arrow" type="button" disabled aria-label="Adelante"><i data-lucide="chevron-right"></i></button>
          </div>

          <label class="spot-searchbar">
            <i data-lucide="search"></i>
            <input type="search" placeholder="¿Qué querés reproducir?" aria-label="Buscar en Spotify">
          </label>

          <div class="spot-topbar-right">
            <div class="spot-topbar-avatar" title="Perfil">N</div>
          </div>
        </div>

        <aside class="spot-sidebar">
          <div class="spot-sidebar-header">
            <strong><i data-lucide="library"></i> Tu biblioteca</strong>
            <button class="spot-sidebar-create" type="button">
              <i data-lucide="plus"></i> Crear
            </button>
          </div>

          <div class="spot-sidebar-filters">
            <button class="spot-filter-chip active" type="button">Playlists</button>
            <button class="spot-filter-chip" type="button">Álbumes</button>
            <button class="spot-filter-chip" type="button">Artistas</button>
          </div>

          <label class="spot-library-search">
            <i data-lucide="search"></i>
            <input type="search" placeholder="Buscar en tu biblioteca" aria-label="Buscar en tu biblioteca">
          </label>

          <div class="spot-library-list">
            <button class="spot-lib-item active" type="button">
              <span class="spot-lib-icon"><i data-lucide="heart"></i></span>
              <div class="spot-lib-info">
                <strong>Tus me gusta</strong>
                <small>Playlist · 42 canciones</small>
              </div>
            </button>

            <button class="spot-lib-item" type="button">
              <span class="spot-lib-icon"><i data-lucide="sparkles"></i></span>
              <div class="spot-lib-info">
                <strong>Descubrimiento semanal</strong>
                <small>Playlist · 30 canciones</small>
              </div>
            </button>

            <button class="spot-lib-item" type="button">
              <span class="spot-lib-icon"><i data-lucide="music"></i></span>
              <div class="spot-lib-info">
                <strong>Mix de Rock</strong>
                <small>Playlist · 50 canciones</small>
              </div>
            </button>

            <button class="spot-lib-item" type="button">
              <span class="spot-lib-icon"><i data-lucide="headphones"></i></span>
              <div class="spot-lib-info">
                <strong>Lofi Beats Gaming</strong>
                <small>Playlist · 25 canciones</small>
              </div>
            </button>

            <button class="spot-lib-item" type="button">
              <span class="spot-lib-icon"><i data-lucide="radio"></i></span>
              <div class="spot-lib-info">
                <strong>Cyberpunk Beats</strong>
                <small>Playlist · 40 canciones</small>
              </div>
            </button>
          </div>
        </aside>

        <main class="spot-main">
          <div class="spot-hero">
            <div class="spot-hero-info">
              <div class="spot-hero-kicker">Playlist destacada</div>
              <h1>Música para programar</h1>
              <button class="spot-hero-btn" type="button" onclick="currentTrackIndex=0; currentPlaybackTime=0; if(!isPlaying){isPlaying=true;} updateMediaUI(); updatePlayerBackground(); updatePlayerProgress(); const iconName = isPlaying ? 'pause' : 'play'; ['media-toggle','hud-play-btn','cc-play-btn'].forEach(id => { const el = document.getElementById(id); if (el) el.innerHTML = '<i data-lucide=\\'' + iconName + '\\'></i>'; }); document.querySelectorAll('#spot-play-btn').forEach(btn => btn.innerHTML = '<i data-lucide=\\'' + iconName + '\\'></i>'); refreshIcons();">
                <i data-lucide="play"></i> Escuchar ahora
              </button>
            </div>
            <img class="spot-hero-cover" src="./spotify/top 50.jpg" alt="Playlist destacada">
          </div>

          <div class="spot-main-chips">
            <button class="spot-main-chip active" type="button">Todo</button>
            <button class="spot-main-chip" type="button">Música</button>
            <button class="spot-main-chip" type="button">Podcasts</button>
          </div>

          <div class="spot-section-title">Tus canciones</div>
          <div class="spot-grid">
            ${TRACKS.map((t, i) => `
              <button class="spot-card ${i === currentTrackIndex ? 'playing' : ''}" type="button" data-track-index="${i}">
                <img class="spot-card-img" src="${t.art}" alt="${escapeHtml(t.title)}">
                <div class="spot-card-info">
                  <div class="spot-card-title">${escapeHtml(t.title)}</div>
                  <div class="spot-card-sub">${escapeHtml(t.artist)}</div>
                </div>
              </button>
            `).join('')}
          </div>

          <div class="spot-section-title">Descubrí algo nuevo</div>
          <div class="spot-grid">
            <button class="spot-card" type="button" data-track-index="2">
              <img class="spot-card-img" src="./spotify/album 3.jpg" alt="Callejeros">
              <div class="spot-card-info">
                <div class="spot-card-title">Rock Nacional</div>
                <div class="spot-card-sub">Callejeros · Prohibido</div>
              </div>
            </button>
            <button class="spot-card" type="button" data-track-index="3">
              <img class="spot-card-img" src="./spotify/top 50.jpg" alt="Synthwave">
              <div class="spot-card-info">
                <div class="spot-card-title">Synthwave Mix</div>
                <div class="spot-card-sub">Hyper Sound · Night City</div>
              </div>
            </button>
            <button class="spot-card" type="button" data-track-index="1">
              <img class="spot-card-img" src="./spotify/tapa album 1.jpg" alt="Nirvana">
              <div class="spot-card-info">
                <div class="spot-card-title">Nevermind</div>
                <div class="spot-card-sub">Nirvana · Smells Like...</div>
              </div>
            </button>
          </div>
        </main>

        <div class="spot-player">
          <div class="spot-player-left">
            <img src="${track.art}" alt="${escapeHtml(track.title)}" id="spot-player-cover">
            <div class="spot-player-track">
              <strong id="spot-player-title">${escapeHtml(track.title)}</strong>
              <small id="spot-player-artist">${escapeHtml(track.artist)}</small>
            </div>
            <button class="spot-player-like" type="button" id="spot-like-btn" title="Me gusta">
              <i data-lucide="heart"></i>
            </button>
          </div>

          <div class="spot-player-center">
            <div class="spot-player-controls">
              <button class="spot-ctrl ${shuffleEnabled ? 'active' : ''}" type="button" id="spot-shuffle" title="Aleatorio">
                <i data-lucide="shuffle"></i>
              </button>
              <button class="spot-ctrl" type="button" id="spot-prev-btn" title="Anterior">
                <i data-lucide="skip-back"></i>
              </button>
              <button class="spot-ctrl main" type="button" id="spot-play-btn" title="Reproducir / Pausar">
                <i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>
              </button>
              <button class="spot-ctrl" type="button" id="spot-next-btn" title="Siguiente">
                <i data-lucide="skip-forward"></i>
              </button>
              <button class="spot-ctrl ${repeatEnabled ? 'active' : ''}" type="button" id="spot-repeat" title="Repetir">
                <i data-lucide="repeat"></i>
              </button>
            </div>

            <div class="spot-player-progress">
              <span class="spot-player-time" id="spot-time-current">${currentFormatted}</span>
              <div class="spot-progress-track" id="spot-progress-track">
                <span id="spot-progress-fill" style="width: 0%;"></span>
              </div>
              <span class="spot-player-time" id="spot-time-total">${totalFormatted}</span>
            </div>
          </div>

          <div class="spot-player-right">
            <button class="spot-extra-btn" type="button" title="Letra"><i data-lucide="mic-2"></i></button>
            <button class="spot-extra-btn" type="button" title="Cola de reproducción"><i data-lucide="list-music"></i></button>
            <button class="spot-extra-btn" type="button" title="Dispositivos"><i data-lucide="monitor-speaker"></i></button>
            <div class="spot-volume">
              <i data-lucide="volume-2" class="spot-extra-btn" style="pointer-events: none;"></i>
              <input type="range" min="0" max="100" value="${systemVolume}" id="spot-volume-slider" aria-label="Volumen">
            </div>
            <button class="spot-extra-btn" type="button" title="Pantalla completa"><i data-lucide="maximize-2"></i></button>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'terminal') {
    return `
    <div class="term-body">
      <div class="prompt">
        <span class="dir">~/nebula-os/gaming-core</span>
        <span class="branch"> main [profile:${currentProfile}]</span>
      </div>
      <div class="term-history"></div>
      <div class="prompt" style="margin-top:4px;">
        <span class="time">❯</span>
        <input class="term-input" autocomplete="off" autofocus>
      </div>
    </div>`;
  }
  
  return `<div class="app-pad"><h2>${APPS[id].title}</h2><p>${APPS[id].sub}</p></div>`;
}

function getDesignerSettingsHTML() {
  const currentStyle = designerState.dockPreviewStyle || 'blueprint';
  const demoApp = APPS['terminal'];

  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">NEBULA DESIGNER</div>
        <h2>Colores, Estilos & Efectos UI</h2>
        <p>Personalizá la paleta cromática, desenfoque y formas de la interfaz. Tu fondo de pantalla permanecerá intacto.</p>
      </div>
      <div class="settings-status"><span></span> En vivo (:root)</div>
    </div>

    <div class="settings-section-label">Paletas de Color & Estilos de UI</div>
    <div class="designer-presets-grid">
      <div class="theme-preset-card ${designerState.activePreset === 'cyberpunk' ? 'selected' : ''}" onclick="applyThemePreset('cyberpunk')">
        <div class="preset-colors-row">
          <span class="preset-color-chip" style="background:#00ffcc;"></span>
          <span class="preset-color-chip" style="background:#ff007f;"></span>
          <span class="preset-color-chip" style="background:#7928ca;"></span>
        </div>
        <strong>Cyberpunk Neón</strong>
        <small>Cyan neón, sombras optimizadas y alto contraste</small>
      </div>

      <div class="theme-preset-card ${designerState.activePreset === 'catppuccin' ? 'selected' : ''}" onclick="applyThemePreset('catppuccin')">
        <div class="preset-colors-row">
          <span class="preset-color-chip" style="background:#cba6f7;"></span>
          <span class="preset-color-chip" style="background:#89b4fa;"></span>
          <span class="preset-color-chip" style="background:#f5c2e7;"></span>
        </div>
        <strong>Minimal Catppuccin</strong>
        <small>Tonos pastel lavanda, desenfoque suave y relajante</small>
      </div>

      <div class="theme-preset-card ${designerState.activePreset === 'synthwave' ? 'selected' : ''}" onclick="applyThemePreset('synthwave')">
        <div class="preset-colors-row">
          <span class="preset-color-chip" style="background:#ff71ce;"></span>
          <span class="preset-color-chip" style="background:#01cdfe;"></span>
          <span class="preset-color-chip" style="background:#05ffa1;"></span>
        </div>
        <strong>Retro Synthwave</strong>
        <small>Magenta brillante, estética 80s arcade</small>
      </div>

      <div class="theme-preset-card ${designerState.activePreset === 'stealth' ? 'selected' : ''}" onclick="applyThemePreset('stealth')">
        <div class="preset-colors-row">
          <span class="preset-color-chip" style="background:#10b981;"></span>
          <span class="preset-color-chip" style="background:#3b82f6;"></span>
          <span class="preset-color-chip" style="background:#1e293b;"></span>
        </div>
        <strong>Dark Stealth</strong>
        <small>Carbón táctico y esmeralda de bajo consumo visual</small>
      </div>
    </div>

    <div class="settings-section-label">Ajuste Fino en Vivo (CSS Variables)</div>
    <div class="designer-controls-grid">
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong>Color Primario / Acento (--accent)</strong>
          <small>Color de botones activos, bordes y brillos</small>
        </div>
        <input type="color" class="designer-color-picker" value="${designerState.accent}" onchange="setLiveAccentColor(this.value)">
      </div>

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong>Desenfoque Glassmorphism (--blur-amount)</strong>
          <small>Nivel de blur de ventanas y paneles</small>
        </div>
        <div class="designer-control-input">
          <input type="range" min="0" max="30" value="${designerState.blurAmount}" oninput="setLiveBlurAmount(this.value)">
          <span id="designer-blur-val">${designerState.blurAmount}px</span>
        </div>
      </div>

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong>Redondeo de Bordes (--radius-md)</strong>
          <small>Curvatura de ventanas y tarjetas</small>
        </div>
        <div class="designer-control-input">
          <input type="range" min="0" max="28" value="${designerState.borderRadius}" oninput="setLiveBorderRadius(this.value)">
          <span id="designer-radius-val">${designerState.borderRadius}px</span>
        </div>
      </div>

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong>Opacidad de Paneles (--panel-color)</strong>
          <small>Translucidez del cristal de la UI</small>
        </div>
        <div class="designer-control-input">
          <input type="range" min="20" max="95" value="${Math.round(designerState.panelAlpha * 100)}" oninput="setLivePanelAlpha(this.value)">
          <span id="designer-alpha-val">${Math.round(designerState.panelAlpha * 100)}%</span>
        </div>
      </div>
    </div>

    <div class="settings-section-label">Estilo de Barra / Dock</div>
    <div class="dock-styles-grid">
      <div class="dock-style-card ${designerState.dockStyle === 'floating' ? 'selected' : ''}" onclick="setDockStyle('floating')">
        <strong>Dock Flotante</strong>
        <small style="display:block; margin-top:3px; color:var(--text-sub);">Estilo Hyprland / macOS centrado</small>
      </div>
      <div class="dock-style-card ${designerState.dockStyle === 'unified-bottom' ? 'selected' : ''}" onclick="setDockStyle('unified-bottom')">
        <strong>Barra Unificada Inferior</strong>
        <small style="display:block; margin-top:3px; color:var(--text-sub);">Estilo Taskbar de Windows</small>
      </div>
    </div>

    <div class="settings-section-label">Apariencia del Hover</div>

    <div class="hover-live-preview">
      <div class="hover-live-preview-inner">
        <span class="hover-live-preview-label">Estilo activo: <strong>${DOCK_PREVIEW_STYLES[currentStyle]?.name || 'Blueprint'}</strong></span>
        <div class="dock-preview visible" style="position: relative; opacity: 1; transform: none; pointer-events: none; --app-accent: ${demoApp.accentColor}; --app-accent-glow: ${demoApp.accentColor}66;">
          <div class="dock-preview-header">
            <div class="dock-preview-meta">
              <span class="dock-preview-title">${demoApp.title}</span>
              <span class="dock-preview-sub">${demoApp.sub}</span>
            </div>
            <button class="dock-preview-close" type="button" aria-label="Cerrar ventana">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div class="dock-preview-sketch">
            <div class="dock-preview-sketch-bar ${demoApp.tileClass}">
              <span class="sketch-dot min"></span>
              <span class="sketch-dot max"></span>
              <span class="sketch-dot close"></span>
              <span class="sketch-title">${demoApp.title}</span>
            </div>
            <div class="dock-preview-sketch-body">
              <span class="sketch-line accent w40"></span>
              <span class="sketch-line w90"></span>
              <span class="sketch-line w75"></span>
              <span class="sketch-line w60"></span>
              <span class="sketch-block"></span>
            </div>
          </div>
          <div class="dock-preview-badges">
            <span class="dock-preview-badge other-ws"><i data-lucide="layers"></i> SPACE 2</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hover-styles-grid" style="margin-top:12px;">
      ${Object.entries(DOCK_PREVIEW_STYLES).map(([styleId, style]) => {
        const isSelected = styleId === currentStyle;
        const isLocked = !style.available;
        const thumbClass = `thumb-${styleId}`;
        return `
          <div class="hover-style-card ${isSelected ? 'selected' : ''} ${isLocked ? 'locked' : ''}"
               onclick="${isLocked ? '' : `setDockPreviewStyle('${styleId}')`}">
            ${isLocked ? `<span class="hover-style-badge">PRÓXIMAMENTE</span>` : ''}
            <div class="hover-style-thumb ${thumbClass}">
              <div class="hover-style-thumb-bar">
                <span class="t-dot red"></span>
                <span class="t-dot orange"></span>
                <span class="t-dot green"></span>
              </div>
              <div class="hover-style-thumb-body">
                <span class="hover-style-thumb-line accent w40"></span>
                <span class="hover-style-thumb-line w70"></span>
              </div>
            </div>
            <strong>${style.name}</strong>
            <small>${style.desc}</small>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function getGamingSettingsHTML() {
  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">NEBULA GAMING HUB</div>
        <h2>Configuración de Alto Rendimiento</h2>
        <p>Control de Game Mode, Overlay y telemetría de hardware.</p>
      </div>
      <div class="settings-status"><span></span> ${gameModeActive ? 'Modo Juego: ON' : 'Estándar'}</div>
    </div>

    <div class="settings-section-label">Estado de Rendimiento</div>
    <div class="designer-controls-grid">
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="gamepad-2" style="color:#00ffcc;"></i> Modo Juego (Game Mode)</strong>
          <small>Fija el perfil en Máximo Rendimiento y reduce efectos pesados</small>
        </div>
        <button class="quick-switch ${gameModeActive ? 'active' : ''}" onclick="toggleGameMode()" style="padding:0; border:0; background:transparent;">
          <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
        </button>
      </div>

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="activity" style="color:#3a86ff;"></i> Gaming Overlay (HUD)</strong>
          <small>Atajo rápido: <kbd style="color:#00ffcc; background:rgba(255,255,255,0.1); padding:2px 5px; border-radius:4px;">Alt + Z</kbd></small>
        </div>
        <button class="hud-tool-btn" onclick="toggleGamerOverlay()" style="margin-left:auto;"><i data-lucide="activity"></i> Abrir HUD</button>
      </div>
    </div>

    <div class="settings-section-label">Perfil de Usuario Activo</div>
    <div class="profile-switcher-chips" style="justify-content:flex-start; margin-top:10px;">
      <button class="profile-chip ${currentProfile === 'gamer' ? 'active' : ''}" onclick="switchProfile('gamer')"><i data-lucide="gamepad-2"></i> Gamer</button>
      <button class="profile-chip ${currentProfile === 'streamer' ? 'active' : ''}" onclick="switchProfile('streamer')"><i data-lucide="radio"></i> Streamer</button>
      <button class="profile-chip ${currentProfile === 'studio' ? 'active' : ''}" onclick="switchProfile('studio')"><i data-lucide="terminal"></i> Estudio</button>
    </div>
  `;
}

function getAppearanceSettingsHTML() {
  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">PERSONALIZACIÓN DE ESCRITORIO</div>
        <h2>Fondos de Pantalla</h2>
        <p>Elegí la escena de fondo para tu escritorio. No afectará a tus colores y ajustes de diseño actuales.</p>
      </div>
      <div class="settings-status"><span></span> Fondo Activo: ${WALLPAPERS[currentWallpaperIndex]?.name || 'Nebula'}</div>
    </div>

    <div class="settings-section-label">Galería de Fondos Disponibles</div>
    <div class="designer-presets-grid">
      <div class="theme-preset-card ${currentWallpaperIndex === 0 ? 'selected' : ''}" onclick="applyWallpaper(0)">
        <div style="height:65px; border-radius:8px; background:url('./fondos/fondo principal.jpg') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
        <strong>Fondo Nebula</strong>
        <small>Violeta espacial profundo y nebulosas estelares</small>
      </div>
      <div class="theme-preset-card ${currentWallpaperIndex === 1 ? 'selected' : ''}" onclick="applyWallpaper(1)">
        <div style="height:65px; border-radius:8px; background:url('./fondos/fondo 2.jpg') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
        <strong>Fondo Aurora</strong>
        <small>Azul ártico cósmico y resplandor polar</small>
      </div>
      <div class="theme-preset-card ${currentWallpaperIndex === 2 ? 'selected' : ''}" onclick="applyWallpaper(2)">
        <div style="height:65px; border-radius:8px; background:url('./fondos/fondo 3.jpg') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
        <strong>Fondo Solar</strong>
        <small>Dorado estelar cálido y destellos solares</small>
      </div>
    </div>
  `;
}

function getSystemSettingsHTML() {
  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">INFORMACIÓN DEL SISTEMA</div>
        <h2>Nebula OS v2.5 Ultimate</h2>
        <p>Especificaciones de hardware y configuración del entorno.</p>
      </div>
      <div class="settings-status"><span></span> Kernel Optimizado</div>
    </div>

    <div class="settings-section-label">Especificaciones del Equipo</div>
    <div class="designer-controls-grid">
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="cpu" style="color:var(--accent);"></i> Procesador (CPU)</strong>
          <small>AMD Ryzen 9 7950X · 16 Cores, 32 Threads @ 4.5 - 5.7 GHz</small>
        </div>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="activity" style="color:#00ffcc;"></i> Tarjeta Gráfica (GPU)</strong>
          <small>NVIDIA GeForce RTX 4090 · 24GB GDDR6X · Driver 560.81 GameReady</small>
        </div>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="zap" style="color:#ff71ce;"></i> Memoria RAM</strong>
          <small>32 GB DDR5 6000MHz Dual-Channel (Uso actual: ${systemMetrics.ram}%)</small>
        </div>
        <button class="hud-tool-btn" onclick="simulateCleanRam()" style="margin-left:auto;"><i data-lucide="sparkles"></i> Limpiar</button>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="monitor" style="color:#38bdf8;"></i> Pantalla</strong>
          <small>2560x1440 QHD @ 240Hz OLED HDR · Espacio de trabajo ${currentWorkspace}/5</small>
        </div>
      </div>
    </div>
  `;
}

/* ================= LAUNCHER OVERLAY ================= */
const launcherOverlay = document.getElementById('launcher-overlay');
const launcherInput = document.getElementById('launcher-input');
const launcherResults = document.getElementById('launcher-results');

function toggleLauncher() {
  if (!launcherOverlay) return;
  if (launcherOverlay.classList.contains('open')) {
    launcherOverlay.classList.remove('open');
  } else {
    launcherOverlay.classList.add('open');
    if (launcherInput) {
      launcherInput.value = '';
      renderLauncherResults('');
      setTimeout(() => launcherInput.focus(), 50);
    }
  }
  refreshIcons();
}

launcherOverlay?.addEventListener('mousedown', e => {
  if (e.target === launcherOverlay) toggleLauncher();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && launcherOverlay?.classList.contains('open')) toggleLauncher();
});
launcherInput?.addEventListener('input', e => {
  renderLauncherResults(e.target.value.toLowerCase());
});

function renderLauncherResults(query) {
  if (!launcherResults) return;
  launcherResults.innerHTML = '';
  Object.keys(APPS).forEach(id => {
    const app = APPS[id];
    if (app.title.toLowerCase().includes(query) || app.sub.toLowerCase().includes(query)) {
      const res = document.createElement('div');
      res.className = 'result';
      res.innerHTML = `
        ${getAppTileHTML(id)}
        <div class="meta"><div class="title">${app.title}</div><div class="sub">${app.sub}</div></div>
      `;
      res.onclick = (e) => {
        const forceNew = e.ctrlKey || e.metaKey;
        openApp(id, forceNew);
        toggleLauncher();
      };
      launcherResults.appendChild(res);
    }
  });
  refreshIcons();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
}

function handleImageError(e) {
  if (!(e.target instanceof HTMLImageElement)) return;
  e.target.classList.add('img-broken');
}

function setupKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (!['Enter', ' '].includes(e.key)) return;
    const target = e.target.closest('[role="button"][tabindex="0"]');
    if (!target) return;
    e.preventDefault();
    target.click();
  });
}

/* ================= BATERÍA (real o simulada) ================= */
function updateBatteryUI(level, charging) {
  const item = document.getElementById('tray-battery-item');
  const icon = document.getElementById('tray-battery-icon');
  const num = document.getElementById('tray-battery-num');
  if (!item || !num) return;

  const lvl = Math.max(0, Math.min(100, Math.round(level)));

  item.classList.remove('high', 'medium', 'low', 'charging');
  if (charging) {
    item.classList.add('charging');
  } else if (lvl > 50) {
    item.classList.add('high');
  } else if (lvl >= 20) {
    item.classList.add('medium');
  } else {
    item.classList.add('low');
  }

  let iconName = 'battery';
  if (charging) {
    iconName = 'battery-charging';
  } else if (lvl >= 90) {
    iconName = 'battery-full';
  } else if (lvl >= 50) {
    iconName = 'battery-medium';
  } else if (lvl >= 20) {
    iconName = 'battery-low';
  } else {
    iconName = 'battery-warning';
  }

  if (icon) {
    icon.setAttribute('data-lucide', iconName);
    const svg = icon.tagName.toLowerCase() === 'svg' ? icon : null;
    if (svg) {
      const newIcon = document.createElement('i');
      newIcon.setAttribute('data-lucide', iconName);
      newIcon.id = 'tray-battery-icon';
      newIcon.className = 'tray-icon';
      svg.replaceWith(newIcon);
    }
  }

  num.textContent = `${lvl}%`;
  item.title = charging
    ? `Batería: ${lvl}% (Cargando)`
    : `Batería: ${lvl}%`;

  refreshIcons();
}

function setupDeviceStatus() {
  const hasRealBattery = typeof navigator.getBattery === 'function';

  if (hasRealBattery) {
    navigator.getBattery().then(battery => {
      const updateBattery = () => {
        updateBatteryUI(battery.level * 100, battery.charging);
      };
      updateBattery();
      battery.addEventListener('levelchange', updateBattery);
      battery.addEventListener('chargingchange', updateBattery);
    }).catch(() => {
      startSimulatedBattery();
    });
  } else {
    startSimulatedBattery();
  }
}

function startSimulatedBattery() {
  let mockLevel = 53;
  let mockCharging = false;

  const update = () => updateBatteryUI(mockLevel, mockCharging);
  update();

  setInterval(() => {
    if (mockCharging) {
      mockLevel = Math.min(100, mockLevel + 1);
      if (mockLevel >= 100) mockCharging = false;
    } else {
      mockLevel = Math.max(0, mockLevel - 1);
      if (mockLevel <= 15) mockCharging = true;
    }
    update();
  }, 30000);
}