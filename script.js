/* ================= CONFIGURACIÓN DE APPS & ICONOS ================= */
const APPS = {
  files:    { title: 'Archivos', sub: 'Gestor inteligente de archivos', icon: 'folder', image: './assets/images/iconos/archivos.png', tileClass: 'app-tile-files', accentColor: '#3a86ff' },
  terminal: { title: 'Terminal', sub: 'WezTerm Emulator', icon: 'terminal', image: './assets/images/iconos/terminal.png', tileClass: 'app-tile-terminal', accentColor: '#38bdf8' },
  browser:  { title: 'Firefox', sub: 'Navegador Web', icon: 'globe', image: './assets/images/iconos/firefox.png', tileClass: 'app-tile-browser', accentColor: '#f59e0b' },
  music:    { title: 'Spotify', sub: 'Reproductor de Música', icon: 'music', image: './assets/images/iconos/spotify.png', tileClass: 'app-tile-music', accentColor: '#1ed760' },
  games:    { title: 'Steam', sub: 'Librería de Juegos', icon: 'gamepad-2', image: './assets/images/iconos/steam.png', tileClass: 'app-tile-games', accentColor: '#7c3aed' },
  vscode:   { title: 'VS Code', sub: 'Editor de Código', icon: 'code-2', image: './assets/images/iconos/visualStudioCode.png', tileClass: 'app-tile-vscode', accentColor: '#0284c7' },
  settings: { title: 'Ajustes', sub: 'Panel de Control & Designer', icon: 'sliders', image: './assets/images/iconos/ajustes.png', tileClass: 'app-tile-settings', accentColor: '#94a3b8' },
  nova:     { title: 'Nova AI', sub: 'Asistente Gamer & Tweaker', icon: 'sparkles', image: './assets/images/logosSO/novaLogo.png', tileClass: 'app-tile-nova', accentColor: '#c026d3' }
};

const DOCK_APPS = ['browser', 'terminal', 'nova', 'files', 'vscode', 'music', 'games', 'settings'];

const TOTAL_WORKSPACES = 5;

const TABBED_APPS = new Set(['terminal', 'files']);

/* Catálogo de widgets disponibles para el Designer */
const WIDGET_CATALOG = {
  'gaming-hub': {
    id: 'gaming-hub',
    name: 'Gaming Hub',
    description: 'Monitor unificado de rendimiento: FPS, temperaturas, VRAM, ping y Modo Juego en un solo widget.',
    icon: 'gamepad-2',
    type: 'gaming-hub'
  },
  'weather': {
    id: 'weather',
    name: 'Clima',
    description: 'Widget meteorológico con datos reales de Open-Meteo, selector de ciudad y pronóstico de 3 días.',
    icon: 'cloud-sun',
    type: 'weather'
  }
};

/* =====================================================
   CIUDADES DISPONIBLES PARA EL WIDGET DE CLIMA
   Coordenadas + zona horaria IANA para datos reales
===================================================== */
const WEATHER_CITIES = [
  { id: 'rosario',     name: 'Rosario',     region: 'Santa Fe, Argentina',  lat: -32.9468, lon: -60.6393, timezone: 'America/Argentina/Cordoba' },
  { id: 'buenos-aires',name: 'Buenos Aires',region: 'Argentina',            lat: -34.6037, lon: -58.3816, timezone: 'America/Argentina/Buenos_Aires' },
  { id: 'cordoba-ar',  name: 'Córdoba',     region: 'Argentina',            lat: -31.4201, lon: -64.1888, timezone: 'America/Argentina/Cordoba' },
  { id: 'tokio',       name: 'Tokio',       region: 'Japón',                lat: 35.6762,  lon: 139.6503, timezone: 'Asia/Tokyo' },
  { id: 'nueva-york',  name: 'Nueva York',  region: 'EE.UU.',               lat: 40.7128,  lon: -74.0060, timezone: 'America/New_York' },
  { id: 'madrid',      name: 'Madrid',      region: 'España',               lat: 40.4168,  lon: -3.7038,  timezone: 'Europe/Madrid' },
  { id: 'reikiavik',   name: 'Reikiavik',   region: 'Islandia',             lat: 64.1466,  lon: -21.9426, timezone: 'Atlantic/Reykjavik' }
];

const DEFAULT_WEATHER_CITY_ID = 'rosario';

/* Mapeo de WMO Weather Codes (Open-Meteo) a íconos Lucide + label + color */
const WMO_CODE_MAP = {
  0:  { icon: 'sun',                label: 'Despejado',              color: '#fab387' },
  1:  { icon: 'sun',                label: 'Mayormente despejado',   color: '#f9e2af' },
  2:  { icon: 'cloud-sun',          label: 'Parcialmente nublado',   color: '#f9e2af' },
  3:  { icon: 'cloud',              label: 'Nublado',                color: '#94a3b8' },
  45: { icon: 'cloud-fog',          label: 'Niebla',                 color: '#94a3b8' },
  48: { icon: 'cloud-fog',          label: 'Niebla con escarcha',    color: '#94a3b8' },
  51: { icon: 'cloud-drizzle',      label: 'Llovizna ligera',        color: '#38bdf8' },
  53: { icon: 'cloud-drizzle',      label: 'Llovizna moderada',      color: '#38bdf8' },
  55: { icon: 'cloud-drizzle',      label: 'Llovizna densa',         color: '#38bdf8' },
  56: { icon: 'cloud-drizzle',      label: 'Llovizna helada',        color: '#a5f3fc' },
  57: { icon: 'cloud-drizzle',      label: 'Llovizna helada densa',  color: '#a5f3fc' },
  61: { icon: 'cloud-rain',         label: 'Lluvia ligera',          color: '#38bdf8' },
  63: { icon: 'cloud-rain',         label: 'Lluvia moderada',        color: '#38bdf8' },
  65: { icon: 'cloud-rain',         label: 'Lluvia intensa',         color: '#3a86ff' },
  66: { icon: 'cloud-rain',         label: 'Lluvia helada',          color: '#a5f3fc' },
  67: { icon: 'cloud-rain',         label: 'Lluvia helada intensa',  color: '#a5f3fc' },
  71: { icon: 'snowflake',          label: 'Nieve ligera',           color: '#a5f3fc' },
  73: { icon: 'snowflake',          label: 'Nieve moderada',         color: '#a5f3fc' },
  75: { icon: 'snowflake',          label: 'Nieve intensa',          color: '#a5f3fc' },
  77: { icon: 'snowflake',          label: 'Granos de nieve',        color: '#a5f3fc' },
  80: { icon: 'cloud-rain-wind',    label: 'Chaparrones ligeros',    color: '#38bdf8' },
  81: { icon: 'cloud-rain-wind',    label: 'Chaparrones moderados',  color: '#38bdf8' },
  82: { icon: 'cloud-rain-wind',    label: 'Chaparrones violentos',  color: '#3a86ff' },
  85: { icon: 'snowflake',          label: 'Chaparrones de nieve',   color: '#a5f3fc' },
  86: { icon: 'snowflake',          label: 'Nevadas fuertes',        color: '#a5f3fc' },
  95: { icon: 'cloud-lightning',    label: 'Tormenta',               color: '#cba6f7' },
  96: { icon: 'cloud-lightning',    label: 'Tormenta con granizo',   color: '#cba6f7' },
  99: { icon: 'cloud-lightning',    label: 'Tormenta fuerte granizo',color: '#cba6f7' }
};

/* Configuración del widget de clima */
const WEATHER_FETCH_INTERVAL_MS = 15 * 60 * 1000; // 15 min
const WEATHER_CACHE_STALE_MS = 15 * 60 * 1000;

/* Caché en memoria: { [cityId]: { data, fetchedAt } } */
const weatherCache = {};

/* Timers activos por widget */
const weatherWidgetTimers = new WeakMap();

const WALLPAPERS = [
  { file: 'fondoPrincipal.jpg', name: 'Nebula', accent: '#b4befe', text: '#cdd6f4', sub: '#bac2de', green: '#a6e3a1', panel: 'rgba(18,21,33,0.72)' },
  { file: 'fondo2.jpg', name: 'Aurora', accent: '#89dceb', text: '#d9f4ff', sub: '#a9c6d3', green: '#a6e3a1', panel: 'rgba(11,31,39,0.75)' },
  { file: 'fondo3.jpg', name: 'Solar', accent: '#f9c784', text: '#fff1dc', sub: '#d7bfa4', green: '#b8e986', panel: 'rgba(43,25,20,0.75)' }
];

/* =====================================================
   ★ THEME PRESETS
   Cada preset define colores + parámetros visuales.
   `shadowStrength` (0-100) controla la intensidad de
   `--shadow` en :root, con la fórmula de applyShadowStrength().
===================================================== */
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
    shadowStrength: 65,
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
    shadowStrength: 55,
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
    shadowStrength: 60,
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
    shadowStrength: 40,
    colors: ['#10b981', '#3b82f6', '#475569', '#08090c']
  },
  /* ★ Nord Arc: paleta SwiftUI + fondo neutro */
  'nord-arc': {
    name: 'Nord Arc',
    accent: '#30B0C7',
    accentGlow: 'rgba(48, 176, 199, 0.30)',
    panelColor: 'rgba(28, 32, 38, 0.88)',
    blurAmount: '14px',
    borderRadius: '10px',
    textMain: '#E5E5EA',
    textSub: '#8E8E93',
    bgDark: '#1C1C1E',
    accentGreen: '#34C759',
    accentRed: '#FF3B30',
    accentOrange: '#FF9500',
    shadowStrength: 35,
    colors: ['#30B0C7', '#5856D6', '#AF52DE', '#1C1C1E']
  }
};

const TRACKS = [
  { title: 'Bocanada', artist: 'Gustavo Cerati', album: 'Bocanada', art: './assets/images/apps/spotify/tapaAlbum2.jpg', duration: 272 },
  { title: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', art: './assets/images/apps/spotify/tapaAlbum1.jpg', duration: 301 },
  { title: 'Prohibido', artist: 'Callejeros', album: 'Rock Nacional', art: './assets/images/apps/spotify/tapaAlbum3.jpg', duration: 225 },
  { title: 'Cyberpunk Night City Beat', artist: 'Hyper Sound', album: 'Synthwave Mix', art: './assets/images/apps/spotify/top50.jpg', duration: 192 }
];

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

const pingHistory = [23, 24, 22, 25, 23, 21, 24, 22, 23, 24];

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

/* ★ designerState ahora incluye shadowStrength */
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
  shadowStrength: 55,
  dockStyle: 'floating',
  dockPreviewStyle: 'blueprint'
};

let desktopWidgets = [];

let dockPreviewEl = null;
let dockPreviewTimeout = null;

let windowManagerOpen = false;

let wmDragState = null;

let wmCardContextMenuEl = null;
let wmCardContextMenuWinId = null;

let dockContextMenuEl = null;
let dockContextMenuAppId = null;

let sessionSaveTimeout = null;
let isRestoringSession = false;

let isResizing = false;

const windowTabsState = new WeakMap();
const terminalPanelStates = new WeakMap();
const filesPanelStates = new WeakMap();

const launcherState = {
  query: '',
  results: [],
  selectedIndex: 0
};

let fsContextMenuEl = null;
let fsRenameModalEl = null;
let fsRenameTarget = null;
let fsRenameCallback = null;

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
const SESSION_STORAGE_KEY = 'nebula-os:session';
const FILESYSTEM_STORAGE_KEY = 'nebula-os:filesystem';

const Z_INDEX_NORMALIZE_THRESHOLD = 800;
const Z_INDEX_BASE = 100;

const ANIM_OPEN_MS = 340;
const ANIM_CLOSE_MS = 220;
const ANIM_MIN_MS = 300;
const ANIM_RESTORE_MS = 360;

const pendingClose = new Set();

/* ★ settingsState: nueva estructura con sub-tabs y carpeta del Designer */
let settingsState = {
  animations: true,
  transparency: true,
  activeSettingsTab: 'system',        // 'system' | 'designer' | 'gaming'
  designerSubTab: 'styles',           // 'styles' | 'wallpapers'
  designerExpanded: true
};

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

/* =====================================================
   ★ NORMALIZACIÓN DE Z-INDEX
===================================================== */
function normalizeZIndexes() {
  const sorted = Object.keys(openWindows)
    .map(winId => {
      const entry = openWindows[winId];
      return {
        winId,
        win: entry?.win,
        z: parseInt(entry?.win?.style.zIndex, 10) || Z_INDEX_BASE
      };
    })
    .filter(item => item.win)
    .sort((a, b) => a.z - b.z);

  zIndexCounter = Z_INDEX_BASE;
  sorted.forEach(item => {
    zIndexCounter++;
    item.win.style.zIndex = zIndexCounter;
  });

  scheduleSaveSession();
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

/* =====================================================
   ★ PERSISTENCIA DE SESIÓN DE VENTANAS (CON TABS)
===================================================== */

function saveSessionState(immediate = false) {
  if (isRestoringSession || isResizing) return;

  const doSave = () => {
    try {
      const windowsData = {};
      Object.keys(openWindows).forEach(winId => {
        const entry = openWindows[winId];
        const win = entry?.win;
        if (!entry || !win) return;

        const isMaximized = win.classList.contains('maximized');
        const isMinimized = win.classList.contains('minimized');

        let tabsData = null;
        if (TABBED_APPS.has(entry.appId)) {
          const state = windowTabsState.get(win);
          if (state) {
            tabsData = {
              tabs: state.tabs.map(t => ({ id: t.id, label: t.label, kind: t.kind || null })),
              activeTabId: state.activeTabId,
              counter: state.counter
            };
          }
        }

        windowsData[winId] = {
          appId: entry.appId,
          ws: parseInt(win.dataset.ws, 10) || 1,
          top: win.style.top || '',
          left: win.style.left || '',
          width: win.style.width || '',
          height: win.style.height || '',
          zIndex: parseInt(win.style.zIndex, 10) || 100,
          minimized: isMinimized,
          maximized: isMaximized,
          oldW: win.dataset.oldW || '',
          oldH: win.dataset.oldH || '',
          oldT: win.dataset.oldT || '',
          oldL: win.dataset.oldL || '',
          tabs: tabsData
        };
      });

      const sessionData = {
        v: 2,
        windows: windowsData,
        activeWinId: activeWinId,
        currentWorkspace: currentWorkspace,
        zIndexCounter: zIndexCounter,
        appInstanceCounter: appInstanceCounter
      };

      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
    } catch (e) {}
  };

  if (immediate) {
    if (sessionSaveTimeout) {
      clearTimeout(sessionSaveTimeout);
      sessionSaveTimeout = null;
    }
    doSave();
  } else {
    if (sessionSaveTimeout) clearTimeout(sessionSaveTimeout);
    sessionSaveTimeout = setTimeout(() => {
      sessionSaveTimeout = null;
      doSave();
    }, 300);
  }
}

function scheduleSaveSession() {
  saveSessionState(false);
}

function restoreSessionState() {
  let sessionData = null;
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return;
    sessionData = JSON.parse(raw);
  } catch (e) {
    return;
  }

  if (!sessionData || typeof sessionData !== 'object') return;
  if (!sessionData.windows || typeof sessionData.windows !== 'object') return;

  const winIds = Object.keys(sessionData.windows);
  if (winIds.length === 0) {
    if (typeof sessionData.currentWorkspace === 'number' &&
        sessionData.currentWorkspace >= 1 &&
        sessionData.currentWorkspace <= TOTAL_WORKSPACES) {
      currentWorkspace = sessionData.currentWorkspace;
    }
    return;
  }

  isRestoringSession = true;

  try {
    if (sessionData.appInstanceCounter && typeof sessionData.appInstanceCounter === 'object') {
      appInstanceCounter = { ...sessionData.appInstanceCounter };
    }
    if (typeof sessionData.zIndexCounter === 'number' && sessionData.zIndexCounter > 100) {
      zIndexCounter = sessionData.zIndexCounter;
    }
    if (typeof sessionData.currentWorkspace === 'number' &&
        sessionData.currentWorkspace >= 1 &&
        sessionData.currentWorkspace <= TOTAL_WORKSPACES) {
      currentWorkspace = sessionData.currentWorkspace;
    }

    const sortedEntries = winIds
      .map(id => ({ id, data: sessionData.windows[id] }))
      .filter(e => e.data && APPS[e.data.appId])
      .sort((a, b) => (a.data.zIndex || 100) - (b.data.zIndex || 100));

    sortedEntries.forEach(({ id, data }) => {
      if (openWindows[id]) return;
      openApp(data.appId, true, {
        winId: id,
        ws: data.ws,
        top: data.top,
        left: data.left,
        width: data.width,
        height: data.height,
        zIndex: data.zIndex,
        minimized: !!data.minimized,
        maximized: !!data.maximized,
        oldW: data.oldW,
        oldH: data.oldH,
        oldT: data.oldT,
        oldL: data.oldL,
        tabs: data.tabs || null,
        silent: true
      });
    });

    const buttons = document.querySelectorAll('#ws-switcher button');
    buttons.forEach((btn, index) => {
      btn.className = (index + 1 === currentWorkspace) ? 'active' : '';
    });

    Object.values(openWindows).forEach(entry => {
      const win = entry?.win;
      if (!win) return;
      const winWs = parseInt(win.dataset.ws, 10);
      if (winWs !== currentWorkspace) {
        win.style.display = 'none';
      } else if (win.classList.contains('minimized')) {
        win.style.display = 'none';
      } else {
        win.style.display = 'flex';
      }
    });

    const targetActive = sessionData.activeWinId;
    if (targetActive && openWindows[targetActive]) {
      const entry = openWindows[targetActive];
      const win = entry.win;
      const winWs = parseInt(win.dataset.ws, 10);
      if (winWs === currentWorkspace && !win.classList.contains('minimized')) {
        focusWindow(targetActive);
      } else {
        updateTopBar(null);
      }
    } else {
      activeWinId = null;
      updateTopBar(null);
    }

    renderDock();
    if (windowManagerOpen) renderWindowManager();
    refreshIcons();
  } catch (e) {
  } finally {
    isRestoringSession = false;
  }
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
  setupWeatherAutoRefresh();
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
    const isWmCardCtxClick = e.target.closest('.wm-card-context-menu');
    const isFsCtxClick = e.target.closest('.fs-context-menu');
    const isFsRenameClick = e.target.closest('.fs-rename-modal');
    const isCitySelectorClick = e.target.closest('.weather-city-selector');

    if (!isDockCtxClick) hideDockContextMenu();
    if (!isWmCardCtxClick) hideWmCardContextMenu();
    if (!isFsCtxClick) hideFsContextMenu();
    if (!isCitySelectorClick) closeAllCityDropdowns();

    if (!sysTrayBtn?.contains(e.target)
        && !clockCenter?.contains(e.target)
        && !controlCenter?.contains(e.target)
        && !quickCenter?.contains(e.target)
        && !isPlayerClick
        && !isCalendarClick
        && !isHudClick
        && !isWMClick
        && !isDockCtxClick
        && !isWmCardCtxClick
        && !isFsCtxClick
        && !isFsRenameClick
        && !isCitySelectorClick) {
      closeControlCenter();
      closeQuickCenter();
    }
    hideContextMenu();
  });

  document.addEventListener('contextmenu', (e) => {
    if (!e.target.closest('.dock-item')) hideDockContextMenu();
    if (!e.target.closest('.wm-card')) hideWmCardContextMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeControlCenter();
      closeQuickCenter();
      if (gamerOverlayVisible) toggleGamerOverlay();
      if (windowManagerOpen) closeWindowManager();
      hideDockContextMenu();
      hideWmCardContextMenu();
      hideFsContextMenu();
      closeFsRenameModal();
      closeAllCityDropdowns();
    }
  });

  window.addEventListener('resize', () => { hideDockContextMenu(); hideWmCardContextMenu(); hideFsContextMenu(); closeAllCityDropdowns(); });
  window.addEventListener('blur', () => { hideDockContextMenu(); hideWmCardContextMenu(); hideFsContextMenu(); closeAllCityDropdowns(); });
  document.addEventListener('scroll', () => { hideDockContextMenu(); hideWmCardContextMenu(); hideFsContextMenu(); closeAllCityDropdowns(); }, true);

  document.getElementById('screen').addEventListener('contextmenu', (e) => {
    if (e.target.closest('#context-menu') || e.target.closest('.window') || e.target.closest('.desktop-widget')) return;
    if (e.target.closest('.dock-item')) return;
    if (e.target.closest('#window-manager-overlay')) return;
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

  setupWmTrashZone();

  restoreSessionState();

  window.addEventListener('beforeunload', () => {
    saveSessionState(true);
  });
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
  updateGamingHubWidget();
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
    simulatePing();
    if (gamerOverlayVisible) updateHUDTelemetry();
    updateWidgetStats();
    updateGamingHubWidget();
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
  updateGamingHubWidget();
  showToast('Memoria Optimizada', `RAM liberada de ${previous}% a 17%. 4.8 GB liberados.`, 'sparkles');
}

/* =====================================================
   ★ FEATURE 2: NEBULA DESIGNER — Temas y controles en vivo
===================================================== */

/**
 * Aplica la intensidad de sombra a la variable global --shadow.
 * s = value/100, se calcula offset-y, blur y alpha proporcionales.
 */
function applyShadowStrength(value) {
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));
  const s = clamped / 100;
  const y = Math.round(16 * s);
  const blur = Math.round(40 * s);
  const alpha = (0.15 + 0.55 * s).toFixed(2);
  const shadowValue = `0 ${y}px ${blur}px rgba(0, 0, 0, ${alpha}), inset 0 1px 0 rgba(255, 255, 255, 0.08)`;
  document.documentElement.style.setProperty('--shadow', shadowValue);
  designerState.shadowStrength = clamped;
}

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

  if (typeof preset.shadowStrength === 'number') {
    applyShadowStrength(preset.shadowStrength);
    designerState.shadowStrength = preset.shadowStrength;
  }

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

/* ★ Control en vivo de sombra de ventanas */
function setLiveShadowStrength(value) {
  applyShadowStrength(value);
  const valEl = document.getElementById('designer-shadow-val');
  if (valEl) valEl.textContent = `${value}%`;
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

/* =====================================================
   ★ WIDGETS FLOTANTES DE ESCRITORIO
===================================================== */
function addDesktopWidget(type, x = null, y = null) {
  const allowsMultiple = type === 'weather';

  if (!allowsMultiple) {
    const existing = desktopWidgets.find(w => w.type === type);
    if (existing) {
      showToast('Widget Existente', `El widget de ${type} ya está en el escritorio.`, 'info');
      return;
    }
  }

  const id = 'widget-' + type + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
  const defaultPositions = {
    clock:        { x: 24, y: 60 },
    'gaming-hub': { x: window.innerWidth - 400, y: 60 },
    weather:      { x: window.innerWidth - 280, y: 60 }
  };

  const offsetIndex = allowsMultiple ? desktopWidgets.filter(w => w.type === type).length : 0;
  const baseX = x !== null ? x : (defaultPositions[type]?.x || 40);
  const baseY = y !== null ? y : (defaultPositions[type]?.y || 90);

  const posX = baseX + (offsetIndex * 30);
  const posY = baseY + (offsetIndex * 30);

  const widgetData = { id, type, x: posX, y: posY };

  if (type === 'weather') {
    widgetData.cityId = DEFAULT_WEATHER_CITY_ID;
  }

  desktopWidgets.push(widgetData);
  saveDesktopWidgets();
  renderDesktopWidgets();

  const label = type === 'weather' ? 'Clima' : type === 'clock' ? 'Reloj' : type;
  showToast('Widget Añadido', `Widget de ${label} colocado en el escritorio.`, 'plus');
  hideContextMenu();
}

/* =====================================================
   ★ WEATHER WIDGET — Clima real con Open-Meteo + Luxon
===================================================== */

function getCityById(cityId) {
  return WEATHER_CITIES.find(c => c.id === cityId) || WEATHER_CITIES[0];
}

function getWmoInfo(code, isDay = 1) {
  const base = WMO_CODE_MAP[code] || { icon: 'cloud', label: 'Desconocido', color: '#94a3b8' };
  if (isDay === 0 && (code === 0 || code === 1)) {
    return { icon: 'moon', label: base.label, color: '#cba6f7' };
  }
  if (isDay === 0 && code === 2) {
    return { icon: 'cloud-moon', label: base.label, color: '#cba6f7' };
  }
  return base;
}

async function fetchWeatherForCity(cityId, { force = false } = {}) {
  const city = getCityById(cityId);
  const now = Date.now();
  const cached = weatherCache[cityId];

  if (!force && cached && (now - cached.fetchedAt) < WEATHER_CACHE_STALE_MS) {
    return { ok: true, data: cached.data, fromCache: true };
  }

  try {
    const params = new URLSearchParams({
      latitude: city.lat,
      longitude: city.lon,
      current: 'temperature_2m,weather_code,is_day',
      daily: 'temperature_2m_max,temperature_2m_min,weather_code',
      timezone: 'auto',
      forecast_days: '4'
    });
    const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    const current = json.current || {};
    const daily = json.daily || {};

    const dailyDates = daily.time || [];
    const dailyMax = daily.temperature_2m_max || [];
    const dailyMin = daily.temperature_2m_min || [];
    const dailyCode = daily.weather_code || [];

    const forecast = [];
    for (let i = 1; i < Math.min(4, dailyDates.length); i++) {
      forecast.push({
        date: dailyDates[i],
        max: Math.round(dailyMax[i]),
        min: Math.round(dailyMin[i]),
        code: dailyCode[i]
      });
    }

    const data = {
      temp: Math.round(current.temperature_2m),
      code: current.weather_code ?? 0,
      isDay: current.is_day ?? 1,
      forecast,
      fetchedAt: now,
      cityId: city.id,
      timezone: city.timezone
    };

    weatherCache[cityId] = { data, fetchedAt: now };
    return { ok: true, data, fromCache: false };
  } catch (err) {
    if (cached) {
      return { ok: true, data: cached.data, fromCache: true, stale: true };
    }
    return { ok: false, error: err };
  }
}

function formatWeatherDateForCity(city) {
  if (typeof luxon !== 'undefined' && luxon.DateTime) {
    try {
      const dt = luxon.DateTime.now().setZone(city.timezone);
      const shortDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      const shortMonths = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
      const dayIdx = dt.weekday === 7 ? 0 : dt.weekday;
      return `${shortDays[dayIdx]} ${dt.day} de ${shortMonths[dt.month - 1]}`;
    } catch (e) {}
  }
  const now = new Date();
  const shortDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const shortMonths = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${shortDays[now.getDay()]} ${now.getDate()} de ${shortMonths[now.getMonth()]}`;
}

function getCityTimeForHeader(city) {
  if (typeof luxon !== 'undefined' && luxon.DateTime) {
    try {
      const dt = luxon.DateTime.now().setZone(city.timezone);
      return dt.toFormat('HH:mm');
    } catch (e) {}
  }
  const now = new Date();
  return `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
}

function getForecastDayName(dateStr) {
  const date = new Date(dateStr + 'T12:00:00Z');
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return days[date.getUTCDay()];
}

function renderWeatherWidgetHTML(widget, weatherData = null) {
  const city = getCityById(widget.cityId || DEFAULT_WEATHER_CITY_ID);
  const data = weatherData || weatherCache[widget.cityId]?.data || null;

  const dateStr = formatWeatherDateForCity(city);
  const timeStr = getCityTimeForHeader(city);

  let iconName, label, color, temp;
  let high = '—', low = '—';
  let forecast = [];
  let offline = false;

  if (data) {
    const info = getWmoInfo(data.code, data.isDay);
    iconName = info.icon;
    label = info.label;
    color = info.color;
    temp = data.temp;
    forecast = data.forecast || [];
    if (forecast.length > 0) {
      high = forecast[0].max;
      low = forecast[0].min;
    }
  } else {
    iconName = 'cloud-off';
    label = 'Sin conexión';
    color = '#6b7280';
    temp = '—';
    offline = true;
  }

  const forecastHTML = forecast.length ? forecast.map(day => {
    const info = getWmoInfo(day.code, 1);
    const dayName = getForecastDayName(day.date);
    return `
      <div class="weather-forecast-day">
        <span class="weather-forecast-name">${dayName}</span>
        <span class="weather-forecast-icon" style="color: ${info.color};">
          <i data-lucide="${info.icon}"></i>
        </span>
        <span class="weather-forecast-temps">
          <strong>${day.max}°</strong>
          <small>${day.min}°</small>
        </span>
      </div>
    `;
  }).join('') : `
    <div class="weather-forecast-empty">Sin datos de pronóstico</div>
  `;

  return `
    <div class="weather-body">
      <div class="weather-header">
        <span class="weather-date">${dateStr} · ${timeStr}</span>
        <div class="weather-city-selector" data-widget-id="${widget.id}">
          <button class="weather-city-btn" type="button" data-city-toggle>
            <span class="weather-city-name">${city.name}</span>
            <i data-lucide="chevron-down" class="weather-city-chevron"></i>
          </button>
        </div>
      </div>

      <div class="weather-main${offline ? ' offline' : ''}">
        <div class="weather-icon-wrap" style="color: ${color};">
          <i data-lucide="${iconName}"></i>
        </div>
        <div class="weather-info">
          <div class="weather-temp">${temp}<span class="weather-temp-unit">°</span></div>
          <div class="weather-cond">${label}</div>
        </div>
      </div>

      <div class="weather-minmax">
        <span class="weather-minmax-item">H: <strong>${high}°</strong></span>
        <span class="weather-minmax-item">L: <strong>${low}°</strong></span>
      </div>

      <div class="weather-forecast">
        ${forecastHTML}
      </div>
    </div>
  `;
}

function buildCitySelectorHTML(widgetId, activeCityId) {
  return WEATHER_CITIES.map(city => `
    <button class="weather-city-option ${city.id === activeCityId ? 'active' : ''}"
            type="button"
            data-city-option="${city.id}"
            data-widget-target="${widgetId}">
      <span class="weather-city-option-name">${city.name}</span>
      <span class="weather-city-option-region">${city.region}</span>
      ${city.id === activeCityId ? '<i data-lucide="check" class="weather-city-option-check"></i>' : ''}
    </button>
  `).join('');
}

function closeAllCityDropdowns() {
  document.querySelectorAll('.weather-city-dropdown.open').forEach(d => {
    d.classList.remove('open');
    setTimeout(() => d.remove(), 180);
  });
}

function openCityDropdown(widgetId, anchorEl) {
  closeAllCityDropdowns();
  const widget = desktopWidgets.find(w => w.id === widgetId);
  if (!widget) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'weather-city-dropdown';
  dropdown.dataset.widgetId = widgetId;
  dropdown.innerHTML = `
    <div class="weather-city-dropdown-header">
      <i data-lucide="map-pin"></i>
      <span>Elegir ciudad</span>
    </div>
    <div class="weather-city-dropdown-list">
      ${buildCitySelectorHTML(widgetId, widget.cityId || DEFAULT_WEATHER_CITY_ID)}
    </div>
  `;
  document.body.appendChild(dropdown);

  const rect = anchorEl.getBoundingClientRect();
  const ddRect = dropdown.getBoundingClientRect();
  let left = rect.left;
  let top = rect.bottom + 6;

  if (left + ddRect.width + 10 > window.innerWidth) {
    left = window.innerWidth - ddRect.width - 10;
  }
  if (top + ddRect.height + 10 > window.innerHeight) {
    top = rect.top - ddRect.height - 6;
  }
  left = Math.max(10, left);
  top = Math.max(10, top);

  dropdown.style.left = `${left}px`;
  dropdown.style.top = `${top}px`;

  dropdown.querySelectorAll('[data-city-option]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cityId = btn.dataset.cityOption;
      selectCityForWidget(widgetId, cityId);
      closeAllCityDropdowns();
    });
  });

  requestAnimationFrame(() => dropdown.classList.add('open'));
  refreshIcons();
}

async function selectCityForWidget(widgetId, cityId) {
  const widget = desktopWidgets.find(w => w.id === widgetId);
  if (!widget) return;
  if (widget.cityId === cityId) return;

  widget.cityId = cityId;
  saveDesktopWidgets();

  const el = document.getElementById(widgetId);
  if (!el) return;

  const body = el.querySelector('.weather-body');
  if (body) {
    const iconWrap = body.querySelector('.weather-icon-wrap');
    if (iconWrap) {
      iconWrap.innerHTML = '<i data-lucide="loader-circle" class="weather-spinner"></i>';
      iconWrap.style.color = 'var(--accent)';
    }
  }
  refreshIcons();

  const result = await fetchWeatherForCity(cityId, { force: false });
  const data = result.ok ? result.data : null;

  const titlebar = el.querySelector('.widget-titlebar');
  const body2 = el.querySelector('.weather-body');
  if (body2) {
    body2.outerHTML = renderWeatherWidgetHTML(widget, data);
  }

  if (titlebar) {
    const strong = titlebar.querySelector('strong');
    if (strong) strong.innerHTML = `<i data-lucide="cloud-sun"></i> CLIMA`;
  }

  refreshIcons();
  attachWeatherWidgetListeners(widget.id);
}

function setupWeatherAutoRefresh() {
  setInterval(() => {
    desktopWidgets.filter(w => w.type === 'weather').forEach(async (widget) => {
      const result = await fetchWeatherForCity(widget.cityId, { force: true });
      if (!result.ok) return;
      const el = document.getElementById(widget.id);
      if (!el) return;
      const body = el.querySelector('.weather-body');
      if (body) {
        body.outerHTML = renderWeatherWidgetHTML(widget, result.data);
        refreshIcons();
        attachWeatherWidgetListeners(widget.id);
      }
    });
  }, WEATHER_FETCH_INTERVAL_MS);
}

function attachWeatherWidgetListeners(widgetId) {
  const el = document.getElementById(widgetId);
  if (!el) return;

  const selector = el.querySelector('.weather-city-selector');
  if (!selector || selector.dataset.bound === '1') return;
  selector.dataset.bound = '1';

  const btn = selector.querySelector('[data-city-toggle]');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (document.querySelector('.weather-city-dropdown.open')?.dataset.widgetId === widgetId) {
        closeAllCityDropdowns();
      } else {
        openCityDropdown(widgetId, btn);
      }
    });
  }
}

function addWeatherWidget(x = null, y = null) {
  addDesktopWidget('weather', x, y);
}

function removeWeatherWidget(id) {
  removeDesktopWidget(id);
  showToast('Widget Removido', 'Clima retirado del escritorio.', 'trash-2');
}

function removeAllWeatherWidgets() {
  const ids = desktopWidgets.filter(w => w.type === 'weather').map(w => w.id);
  if (ids.length === 0) {
    showToast('Sin widgets', 'No hay widgets de clima en el escritorio.', 'info');
    return;
  }
  desktopWidgets = desktopWidgets.filter(w => w.type !== 'weather');
  saveDesktopWidgets();
  renderDesktopWidgets();
  showToast('Widgets Removidos', `${ids.length} widget${ids.length === 1 ? '' : 's'} de clima retirado${ids.length === 1 ? '' : 's'}.`, 'trash-2');
}

/* ================= GAMING HUB WIDGET ================= */
function addGamingHubWidget() {
  addDesktopWidget('gaming-hub');
  renderSettingsApp();
}

function removeGamingHubWidget() {
  const existing = desktopWidgets.find(w => w.type === 'gaming-hub');
  if (existing) {
    removeDesktopWidget(existing.id);
    showToast('Widget Removido', 'Gaming Hub retirado del escritorio.', 'trash-2');
  }
  renderSettingsApp();
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

  const validTypes = new Set(['clock', 'weather', 'gaming-hub']);
  desktopWidgets = desktopWidgets.filter(w => validTypes.has(w.type));

  desktopWidgets.forEach(widget => {
    const el = document.createElement('div');
    el.className = 'desktop-widget';
    el.id = widget.id;
    el.style.left = `${widget.x}px`;
    el.style.top = `${widget.y}px`;

    let bodyHTML = '';
    let title = '';
    let iconName = 'activity';
    let extraClass = '';

    if (widget.type === 'clock') {
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
    } else if (widget.type === 'gaming-hub') {
      title = 'GAMING HUB';
      iconName = 'gamepad-2';
      extraClass = 'gaming-hub-widget';
      bodyHTML = renderGamingHubWidgetHTML();
    } else if (widget.type === 'weather') {
      title = 'CLIMA';
      iconName = 'cloud-sun';
      extraClass = 'weather-widget';
      const cached = weatherCache[widget.cityId]?.data;
      bodyHTML = renderWeatherWidgetHTML(widget, cached);

      if (!cached) {
        fetchWeatherForCity(widget.cityId, { force: false }).then(result => {
          if (!result.ok) return;
          const el2 = document.getElementById(widget.id);
          if (!el2) return;
          const body2 = el2.querySelector('.weather-body');
          if (body2) {
            body2.outerHTML = renderWeatherWidgetHTML(widget, result.data);
            refreshIcons();
            attachWeatherWidgetListeners(widget.id);
          }
        });
      }
    }

    el.className = `desktop-widget ${extraClass}`.trim();

    el.innerHTML = `
      <div class="widget-titlebar">
        <strong><i data-lucide="${iconName}"></i> ${title}</strong>
        <button class="widget-close-btn" onclick="removeDesktopWidget('${widget.id}')" title="Cerrar widget"><i data-lucide="x"></i></button>
      </div>
      ${bodyHTML}
    `;

    setupDraggableWidget(el, widget);
    layer.appendChild(el);

    if (widget.type === 'weather') {
      attachWeatherWidgetListeners(widget.id);
    }
  });
  refreshIcons();
}

function setupDraggableWidget(el, widgetData) {
  const titlebar = el.querySelector('.widget-titlebar');
  if (!titlebar) return;

  titlebar.addEventListener('mousedown', (e) => {
    if (e.target.closest('.widget-close-btn')) return;
    if (e.target.closest('.weather-city-selector')) return;
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
  } else if (profileId === 'streamer') {
    applyThemePreset('synthwave');
    toggleGameMode(false);
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
  } else if (q.includes('nord') || q.includes('arc')) {
    applyThemePreset('nord-arc');
    actionTaken = 'Tema Nord Arc aplicado';
    replyText = 'Listo. Apliqué el tema Nord Arc, con acento cyan y estética sobria.';
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
  } else if (q.includes('clima') || q.includes('tiempo') || q.includes('temperatura')) {
    addWeatherWidget();
    actionTaken = 'Widget de Clima añadido';
    replyText = 'Añadí el widget de clima. Podés cambiar la ciudad desde el selector dentro del widget.';
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

/* =====================================================
   ★ FEATURE 5: SMART FILE EXPLORER
===================================================== */

function getDefaultFileSystem() {
  return {
    name: 'Inicio', label: 'Inicio', type: 'folder', children: [
      {
        name: 'capturas', label: 'Capturas de Juegos', type: 'folder', children: [
          { name: 'cyberpunk_night_city_4k.jpg', type: 'image', path: './assets/images/fondosDePantalla/fondoPrincipal.jpg', size: 'JPG · 3840x2160 · 144 FPS Capture' },
          { name: 'elden_ring_boss_victory.jpg', type: 'image', path: './assets/images/fondosDePantalla/fondo2.jpg', size: 'JPG · 2560x1440 · HDR On' },
          { name: 'valorant_ace_round.jpg', type: 'image', path: './assets/images/fondosDePantalla/fondo3.jpg', size: 'JPG · 1920x1080 · Clip' }
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
          { name: 'Cyberpunk_2077.exe', type: 'image', path: './assets/images/apps/steam/capturaSteam.png', size: 'EXE · Acceso directo' },
          { name: 'Hollow_Knight_Silksong.iso', type: 'image', path: './assets/images/apps/steam/capturaSteam.png', size: 'ISO · Imagen de disco' },
          { name: 'Doom_Eternal_Ultra.exe', type: 'image', path: './assets/images/apps/steam/capturaSteam.png', size: 'EXE · Lanzador Vulkan' }
        ]
      },
      {
        name: 'musica', label: 'Música & Audio', type: 'folder', children: [
          { name: 'Gustavo_Cerati_Bocanada.mp3', type: 'audio', path: './assets/images/apps/spotify/tapaAlbum2.jpg', size: 'MP3 · 320 kbps · Bocanada' },
          { name: 'Nirvana_Smells_Like_Teen_Spirit.mp3', type: 'audio', path: './assets/images/apps/spotify/tapaAlbum1.jpg', size: 'MP3 · 320 kbps · Nevermind' },
          { name: 'Synthwave_Chill_Night.flac', type: 'audio', path: './assets/images/apps/spotify/top50.jpg', size: 'FLAC · 24-bit · Lossless' }
        ]
      },
      { name: 'fondos', label: 'Fondos', type: 'folder', children: WALLPAPERS.map(w => ({ name: w.file, type: 'image', path: `./assets/images/fondosDePantalla/${w.file}`, size: 'JPG · Fondo HD' })) },
      { name: 'imagenes', label: 'Imágenes', type: 'folder', children: ['archivos.png', 'ajustes.png', 'home.png', 'lupa.png', 'play.png', 'noSignal.png', 'steam.png', 'visualStudioCode.png'].map(name => ({ name, type: 'image', path: `./assets/images/iconos/${name}`, size: 'PNG · Icono UI' })) },
      { name: 'spotify', label: 'Spotify', type: 'folder', children: ['tapaAlbum1.jpg', 'top50.jpg', 'tapaAlbum2.jpg', 'tapaAlbum3.jpg'].map(name => ({ name, type: 'image', path: `./assets/images/apps/spotify/${name}`, size: 'JPG · Portada Álbum' })) },
      { name: 'vsc', label: 'Proyectos Dev', type: 'folder', children: [{ name: 'capturaVisualStudio.png', type: 'image', path: './assets/images/apps/visualStudio/capturaVisualStudio.png', size: 'PNG · Workspace' }] },
      { name: 'index.html', type: 'text', path: './index.html', size: 'HTML · Estructura Nebula OS' },
      { name: 'styles.css', type: 'text', path: './styles.css', size: 'CSS · Estilos y Variables' },
      { name: 'script.js', type: 'text', path: './script.js', size: 'JS · Núcleo del sistema' }
    ]
  };
}

function loadFileSystem() {
  try {
    const raw = localStorage.getItem(FILESYSTEM_STORAGE_KEY);
    if (!raw) return getDefaultFileSystem();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.children)) {
      return getDefaultFileSystem();
    }
    return parsed;
  } catch (e) {
    return getDefaultFileSystem();
  }
}

function saveFileSystem(fs) {
  try {
    localStorage.setItem(FILESYSTEM_STORAGE_KEY, JSON.stringify(fs));
  } catch (e) {}
}

function resetFileSystem() {
  try {
    localStorage.removeItem(FILESYSTEM_STORAGE_KEY);
  } catch (e) {}
}

let FILE_SYSTEM = loadFileSystem();

function fsFindFolder(name, folder = FILE_SYSTEM) {
  if (folder.name === name) return folder;
  for (const child of folder.children || []) {
    if (child.type === 'folder') {
      const result = fsFindFolder(name, child);
      if (result) return result;
    }
  }
  return null;
}

function fsFindParent(targetItem, folder = FILE_SYSTEM) {
  if (!folder.children) return null;
  for (const child of folder.children) {
    if (child === targetItem) return folder;
    if (child.type === 'folder') {
      const result = fsFindParent(targetItem, child);
      if (result) return result;
    }
  }
  return null;
}

function fsFindItemByName(name, folder = FILE_SYSTEM) {
  for (const child of folder.children || []) {
    if (child.name === name) return child;
    if (child.type === 'folder') {
      const result = fsFindItemByName(name, child);
      if (result) return result;
    }
  }
  return null;
}

function fsGenerateUniqueName(baseName, folder) {
  if (!folder.children) return baseName;
  const existing = new Set(folder.children.map(c => c.name));
  if (!existing.has(baseName)) return baseName;
  const dotIdx = baseName.lastIndexOf('.');
  const stem = dotIdx > 0 ? baseName.slice(0, dotIdx) : baseName;
  const ext = dotIdx > 0 ? baseName.slice(dotIdx) : '';
  let n = 2;
  while (existing.has(`${stem} (${n})${ext}`)) n++;
  return `${stem} (${n})${ext}`;
}

function fsAddItem(parentFolder, newItem) {
  if (!parentFolder.children) parentFolder.children = [];
  parentFolder.children.push(newItem);
  saveFileSystem(FILE_SYSTEM);
}

function fsRemoveItem(item) {
  const parent = fsFindParent(item);
  if (!parent || !parent.children) return false;
  const idx = parent.children.indexOf(item);
  if (idx === -1) return false;
  parent.children.splice(idx, 1);
  saveFileSystem(FILE_SYSTEM);
  return true;
}

function fsRenameItem(item, newName) {
  if (!newName || !newName.trim()) {
    showToast('Nombre vacío', 'Escribí un nombre válido.', 'alert-circle');
    return false;
  }
  const parent = fsFindParent(item);
  if (!parent) {
    showToast('Error', 'No se encontró el elemento padre.', 'alert-circle');
    return false;
  }
  const clean = newName.trim();
  if (parent.children.some(c => c !== item && c.name === clean)) {
    showToast('Nombre duplicado', `Ya existe "${clean}" en esta carpeta.`, 'alert-circle');
    return false;
  }

  item.name = clean;
  if (Object.prototype.hasOwnProperty.call(item, 'label')) {
    item.label = clean;
  }

  saveFileSystem(FILE_SYSTEM);
  return true;
}

function fsMoveItem(item, targetFolder) {
  if (!item || !targetFolder || item === targetFolder) return false;
  if (targetFolder.type !== 'folder') return false;

  const parent = fsFindParent(item);
  if (!parent) return false;
  if (parent === targetFolder) return false;

  if (item.type === 'folder') {
    let cursor = targetFolder;
    while (cursor) {
      if (cursor === item) return false;
      cursor = fsFindParent(cursor);
    }
  }

  parent.children = parent.children.filter(c => c !== item);
  if (!targetFolder.children) targetFolder.children = [];
  targetFolder.children.push(item);
  saveFileSystem(FILE_SYSTEM);
  return true;
}

function getFsPanelState(panel) {
  if (!filesPanelStates.has(panel)) {
    filesPanelStates.set(panel, {
      current: FILE_SYSTEM,
      trail: [FILE_SYSTEM],
      history: [],
      future: [],
      query: '',
      selected: new Set(),
      lastClickedIndex: -1,
      visibleItems: []
    });
  }
  return filesPanelStates.get(panel);
}

function ensureFsRenameModal() {
  if (fsRenameModalEl) return fsRenameModalEl;
  const modal = document.createElement('div');
  modal.className = 'fs-rename-modal';
  modal.innerHTML = `
    <div class="fs-rename-dialog">
      <div class="fs-rename-header">
        <div class="fs-rename-icon"><i data-lucide="pencil"></i></div>
        <div>
          <strong id="fs-rename-title">Renombrar</strong>
          <small id="fs-rename-sub">Escribí el nuevo nombre</small>
        </div>
      </div>
      <input class="fs-rename-input" id="fs-rename-input" type="text" maxlength="120" autocomplete="off">
      <div class="fs-rename-actions">
        <button class="fs-rename-btn" id="fs-rename-cancel" type="button">Cancelar</button>
        <button class="fs-rename-btn primary" id="fs-rename-confirm" type="button">Confirmar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  fsRenameModalEl = modal;

  const input = modal.querySelector('#fs-rename-input');
  const cancel = modal.querySelector('#fs-rename-cancel');
  const confirm = modal.querySelector('#fs-rename-confirm');

  cancel.onclick = () => closeFsRenameModal();

  modal.onmousedown = (e) => {
    if (e.target === modal) closeFsRenameModal();
  };

  confirm.onclick = () => {
    const value = input.value.trim();
    const cb = fsRenameCallback;
    if (typeof cb === 'function') {
      const ok = cb(value);
      if (ok !== false) closeFsRenameModal();
    } else {
      closeFsRenameModal();
    }
  };

  input.addEventListener('keydown', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      e.preventDefault();
      confirm.click();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeFsRenameModal();
    }
  });
  input.addEventListener('keyup', (e) => e.stopPropagation());
  input.addEventListener('keypress', (e) => e.stopPropagation());

  refreshIcons();
  return modal;
}

function openFsRenameModal(opts) {
  const { title = 'Renombrar', sub = 'Escribí el nuevo nombre', initial = '', onConfirm } = opts || {};
  const modal = ensureFsRenameModal();
  modal.querySelector('#fs-rename-title').textContent = title;
  modal.querySelector('#fs-rename-sub').textContent = sub;
  const input = modal.querySelector('#fs-rename-input');
  input.value = initial;
  fsRenameCallback = onConfirm;

  modal.classList.add('open');
  setTimeout(() => {
    input.focus();
    input.select();
  }, 60);
}

function closeFsRenameModal() {
  if (fsRenameModalEl) fsRenameModalEl.classList.remove('open');
  fsRenameCallback = null;
}

function ensureFsContextMenu() {
  if (fsContextMenuEl) return fsContextMenuEl;
  const el = document.createElement('div');
  el.className = 'fs-context-menu';
  document.body.appendChild(el);
  fsContextMenuEl = el;
  return el;
}

function hideFsContextMenu() {
  if (fsContextMenuEl) {
    fsContextMenuEl.classList.remove('open');
    setTimeout(() => {
      if (fsContextMenuEl) fsContextMenuEl.innerHTML = '';
    }, 160);
  }
}

function showFsContextMenu(ev, panel, targetItem, win) {
  ev.preventDefault();
  ev.stopPropagation();

  const state = getFsPanelState(panel);

  const menu = ensureFsContextMenu();
  menu.innerHTML = '';

  const isMulti = state.selected.size > 1;
  const itemsCount = state.selected.size;

  if (targetItem && !isMulti) {
    const icon = targetItem.type === 'folder' ? 'folder' : targetItem.type === 'image' ? 'image' : targetItem.type === 'audio' ? 'music' : 'file-text';
    const header = document.createElement('div');
    header.className = 'fs-ctx-header';
    header.innerHTML = `
      <div class="fs-ctx-header-icon">
        ${targetItem.type === 'image' && targetItem.path ? `<img src="${escapeHtml(targetItem.path)}" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='<i data-lucide=\\'${icon}\\'></i>';" />` : `<i data-lucide="${icon}"></i>`}
      </div>
      <div class="fs-ctx-header-meta">
        <div class="fs-ctx-header-title">${escapeHtml(targetItem.label || targetItem.name)}</div>
        <div class="fs-ctx-header-sub">${targetItem.type === 'folder' ? 'Carpeta' : (targetItem.size || 'Archivo')}</div>
      </div>
    `;
    menu.appendChild(header);
  }

  const appendItem = (opts) => {
    const btn = document.createElement('button');
    btn.className = 'fs-ctx-item' + (opts.danger ? ' danger' : '');
    btn.type = 'button';
    btn.innerHTML = `
      <span class="fs-ctx-icon"><i data-lucide="${opts.icon}"></i></span>
      <span class="fs-ctx-label">${escapeHtml(opts.label)}</span>
      ${opts.shortcut ? `<span class="fs-ctx-shortcut">${escapeHtml(opts.shortcut)}</span>` : ''}
    `;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideFsContextMenu();
      opts.action();
    });
    menu.appendChild(btn);
  };

  const appendSep = () => {
    const sep = document.createElement('div');
    sep.className = 'fs-ctx-sep';
    menu.appendChild(sep);
  };

  if (targetItem && !isMulti) {
    if (targetItem.type === 'folder') {
      appendItem({
        icon: 'folder-open',
        label: 'Abrir carpeta',
        action: () => fsOpenFolder(panel, targetItem)
      });
    } else if (targetItem.type === 'image') {
      appendItem({
        icon: 'image',
        label: 'Establecer como fondo',
        action: () => setCustomWallpaperFromFile(targetItem.path)
      });
    } else if (targetItem.type === 'audio') {
      appendItem({
        icon: 'play',
        label: 'Reproducir',
        action: () => toggleMediaPlayback()
      });
    }

    appendItem({
      icon: 'pencil',
      label: 'Renombrar',
      shortcut: 'F2',
      action: () => fsPromptRename(panel, targetItem)
    });

    appendSep();
  }

  const moveLabel = isMulti ? `Mover ${itemsCount} elementos a...` : 'Mover a...';
  appendItem({
    icon: 'folder-input',
    label: moveLabel,
    action: () => fsPromptMove(panel, isMulti ? Array.from(state.selected) : [targetItem])
  });

  if (targetItem && !isMulti) {
    appendItem({
      icon: 'check-square',
      label: 'Seleccionar',
      action: () => {
        state.selected.clear();
        state.selected.add(targetItem);
        fsRefresh(panel);
      }
    });
  }

  if (itemsCount > 0) {
    appendSep();
    appendItem({
      icon: 'trash-2',
      label: isMulti ? `Eliminar ${itemsCount} elementos` : 'Eliminar',
      shortcut: 'Supr',
      danger: true,
      action: () => fsDeleteSelection(panel)
    });
  }

  appendSep();
  appendItem({
    icon: 'folder-plus',
    label: 'Nueva carpeta aquí',
    action: () => fsCreateFolder(panel)
  });
  appendItem({
    icon: 'file-plus',
    label: 'Nuevo archivo de texto',
    action: () => fsCreateFile(panel)
  });

  menu.classList.add('open');
  refreshIcons();

  const rect = menu.getBoundingClientRect();
  const margin = 10;
  let left = ev.clientX;
  let top = ev.clientY;
  if (left + rect.width + margin > window.innerWidth) left = window.innerWidth - rect.width - margin;
  if (top + rect.height + margin > window.innerHeight) top = window.innerHeight - rect.height - margin;
  left = Math.max(margin, left);
  top = Math.max(margin, top);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

function fsOpenFolder(panel, folder) {
  const state = getFsPanelState(panel);
  state.history.push(state.current);
  state.future = [];
  state.current = folder;
  state.trail = [FILE_SYSTEM, ...fsBuildTrail(folder)];
  state.query = '';
  state.selected.clear();
  const search = panel.querySelector('[data-files-search]');
  if (search) search.value = '';
  fsRefresh(panel);
}

function fsBuildTrail(folder) {
  const path = [];
  let cursor = folder;
  while (cursor && cursor !== FILE_SYSTEM) {
    path.unshift(cursor);
    cursor = fsFindParent(cursor);
  }
  return path;
}

function fsPromptRename(panel, item) {
  openFsRenameModal({
    title: 'Renombrar',
    sub: item.type === 'folder' ? 'Carpeta' : 'Archivo',
    initial: item.name,
    onConfirm: (value) => {
      if (!value) return false;
      const ok = fsRenameItem(item, value);
      if (ok) {
        showToast('Renombrado', `"${item.name}" actualizado.`, 'pencil');
        fsRefresh(panel);
      }
      return ok;
    }
  });
}

function fsPromptMove(panel, items) {
  const state = getFsPanelState(panel);
  const folders = [];
  const collectFolders = (folder, depth = 0) => {
    if (folder !== FILE_SYSTEM) folders.push({ folder, depth });
    (folder.children || []).forEach(child => {
      if (child.type === 'folder') collectFolders(child, depth + 1);
    });
  };
  collectFolders(FILE_SYSTEM);

  if (folders.length === 0) {
    showToast('Sin carpetas', 'No hay carpetas destino disponibles.', 'folder');
    return;
  }

  const menu = document.createElement('div');
  menu.className = 'fs-context-menu';
  menu.style.position = 'fixed';
  document.body.appendChild(menu);

  const header = document.createElement('div');
  header.className = 'fs-ctx-header';
  header.innerHTML = `
    <div class="fs-ctx-header-icon"><i data-lucide="folder-input"></i></div>
    <div class="fs-ctx-header-meta">
      <div class="fs-ctx-header-title">Mover a...</div>
      <div class="fs-ctx-header-sub">${items.length} elemento${items.length === 1 ? '' : 's'}</div>
    </div>
  `;
  menu.appendChild(header);

  folders.forEach(({ folder, depth }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'fs-ctx-item';
    btn.innerHTML = `
      <span class="fs-ctx-icon"><i data-lucide="folder"></i></span>
      <span class="fs-ctx-label" style="padding-left:${depth * 10}px;">${escapeHtml(folder.label || folder.name)}</span>
    `;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      let moved = 0;
      items.forEach(item => {
        if (fsMoveItem(item, folder)) moved++;
      });
      hideAllFsMoveMenus();
      if (moved > 0) {
        showToast('Movido', `${moved} elemento${moved === 1 ? '' : 's'} → ${folder.label || folder.name}`, 'folder-input');
        state.selected.clear();
        fsRefresh(panel);
      }
    });
    menu.appendChild(btn);
  });

  const closeHandler = (e) => {
    if (!menu.contains(e.target)) {
      hideAllFsMoveMenus();
      document.removeEventListener('mousedown', closeHandler);
    }
  };
  setTimeout(() => document.addEventListener('mousedown', closeHandler), 50);

  const rect = menu.getBoundingClientRect();
  const margin = 10;
  let left = window.innerWidth - rect.width - margin - 20;
  let top = 80;
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.zIndex = '2760';
  menu.classList.add('open');
  refreshIcons();
}

function hideAllFsMoveMenus() {
  document.querySelectorAll('.fs-context-menu').forEach(el => {
    if (el === fsContextMenuEl) {
      el.classList.remove('open');
      setTimeout(() => { if (el) el.innerHTML = ''; }, 160);
    } else {
      el.remove();
    }
  });
}

function fsDeleteSelection(panel) {
  const state = getFsPanelState(panel);
  const items = Array.from(state.selected);
  if (items.length === 0) return;

  items.forEach(item => fsRemoveItem(item));
  state.selected.clear();

  showToast('Eliminado', `${items.length} elemento${items.length === 1 ? '' : 's'} eliminado${items.length === 1 ? '' : 's'}.`, 'trash-2');
  fsRefresh(panel);
}

function fsCreateFolder(panel) {
  const state = getFsPanelState(panel);
  const parent = state.current;
  const baseName = 'Nueva carpeta';
  const unique = fsGenerateUniqueName(baseName, parent);
  fsAddItem(parent, { name: unique, label: unique, type: 'folder', children: [] });
  showToast('Carpeta creada', `"${unique}" creada.`, 'folder-plus');
  fsRefresh(panel);
}

function fsCreateFile(panel) {
  const state = getFsPanelState(panel);
  const parent = state.current;
  const baseName = 'Nuevo archivo.txt';
  const unique = fsGenerateUniqueName(baseName, parent);
  fsAddItem(parent, { name: unique, type: 'text', path: './message.txt', size: 'TXT · Documento' });
  showToast('Archivo creado', `"${unique}" creado.`, 'file-plus');
  fsRefresh(panel);
}

function fsRefresh(panel) {
  if (!panel) return;
  const state = getFsPanelState(panel);

  const explorer = panel;
  const grid = explorer.querySelector('.files-grid');
  const titleEl = explorer.querySelector('[data-files-title]');
  const pathEl = explorer.querySelector('[data-files-path]');
  const preview = explorer.querySelector('[data-files-preview]');
  const toolbar = explorer.querySelector('.files-toolbar');
  if (!grid) return;

  const q = (state.query || '').toLowerCase();
  const items = (state.current.children || []).filter(item =>
    !q || item.name.toLowerCase().includes(q) || (item.label || '').toLowerCase().includes(q)
  );
  state.visibleItems = items;

  if (titleEl) titleEl.textContent = state.current.label || state.current.name;
  if (pathEl) {
    const trailNames = [FILE_SYSTEM.label || FILE_SYSTEM.name, ...state.trail.slice(1).map(f => f.label || f.name)];
    pathEl.textContent = trailNames.join(' / ');
  }

  let counter = toolbar?.querySelector('.files-sel-counter');
  if (!counter && toolbar) {
    counter = document.createElement('span');
    counter.className = 'files-sel-counter';
    toolbar.appendChild(counter);
  }
  if (counter) {
    if (state.selected.size > 0) {
      counter.textContent = `${state.selected.size} sel.`;
      counter.style.display = '';
    } else {
      counter.style.display = 'none';
    }
  }

  let delBtn = toolbar?.querySelector('[data-files-delete]');
  if (delBtn) delBtn.disabled = state.selected.size === 0;

  grid.innerHTML = items.length ? items.map((item, idx) => {
    const isFolder = item.type === 'folder';
    const isSelected = state.selected.has(item);
    const iconName = isFolder ? 'folder' : item.type === 'image' ? 'image' : item.type === 'audio' ? 'music' : 'file-text';
    return `
      <button class="explorer-item ${isFolder ? 'folder-drop' : ''} ${isSelected ? 'selected' : ''}"
              type="button"
              data-fs-item-index="${idx}"
              draggable="true">
        <span class="file-visual">
          ${item.type === 'image' && item.path ? `<img src="${escapeHtml(item.path)}" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=&quot;file-type-icon&quot;><i data-lucide=&quot;${iconName}&quot;></i></span>';refreshIcons();" />` : `<span class="file-type-icon"><i data-lucide="${iconName}"></i></span>`}
        </span>
        <strong>${escapeHtml(item.label || item.name)}</strong>
        <small>${isFolder ? `${(item.children || []).length} elementos` : escapeHtml((item.size || 'Archivo').split(' · ')[0])}</small>
      </button>
    `;
  }).join('') : '<div class="files-no-results" style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--text-sub); font-size: 11px;">No hay elementos que coincidan.</div>';

  refreshIcons();
  fsBindGridEvents(panel);

  if (preview && state.selected.size !== 1) {
    preview.innerHTML = '<div class="files-empty-preview" style="color: var(--text-sub); font-size: 11px;">Seleccioná un archivo para previsualización interactiva rápida.</div>';
  }
}

function fsBindGridEvents(panel) {
  const state = getFsPanelState(panel);
  const explorer = panel;
  if (!explorer) return;
  const grid = explorer.querySelector('.files-grid');
  if (!grid) return;

  grid.querySelectorAll('.explorer-item').forEach(el => {
    const idx = parseInt(el.dataset.fsItemIndex, 10);
    const item = state.visibleItems[idx];
    if (!item) return;

    el.addEventListener('dragstart', (e) => {
      if (!state.selected.has(item)) {
        state.selected.clear();
        state.selected.add(item);
      }
      const draggingItems = Array.from(state.selected);

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('application/x-nebula-fs-items', JSON.stringify(draggingItems.map(i => i.name)));

      el.classList.add('dragging');
      grid.querySelectorAll('.explorer-item').forEach(otherEl => {
        const otherIdx = parseInt(otherEl.dataset.fsItemIndex, 10);
        const otherItem = state.visibleItems[otherIdx];
        if (otherItem && state.selected.has(otherItem)) otherEl.classList.add('dragging');
      });

      try {
        e.dataTransfer.setDragImage(el, el.offsetWidth / 2, el.offsetHeight / 2);
      } catch (_) {}

      fsRefresh(panel);
    });

    el.addEventListener('dragend', () => {
      grid.querySelectorAll('.explorer-item').forEach(x => x.classList.remove('dragging'));
      grid.querySelectorAll('.explorer-item').forEach(x => x.classList.remove('drag-over'));
    });

    if (item.type === 'folder') {
      el.addEventListener('dragover', (e) => {
        if (!e.dataTransfer.types.includes('application/x-nebula-fs-items')) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        el.classList.add('drag-over');
      });

      el.addEventListener('dragleave', (e) => {
        if (!el.contains(e.relatedTarget)) {
          el.classList.remove('drag-over');
        }
      });

      el.addEventListener('drop', (e) => {
        e.preventDefault();
        el.classList.remove('drag-over');
        fsHandleDrop(panel, e, item);
      });
    }

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.shiftKey && state.lastClickedIndex !== -1) {
        const from = Math.min(state.lastClickedIndex, idx);
        const to = Math.max(state.lastClickedIndex, idx);
        for (let i = from; i <= to; i++) {
          if (state.visibleItems[i]) state.selected.add(state.visibleItems[i]);
        }
      } else if (e.ctrlKey || e.metaKey) {
        if (state.selected.has(item)) state.selected.delete(item);
        else state.selected.add(item);
        state.lastClickedIndex = idx;
      } else {
        state.selected.clear();
        state.selected.add(item);
        state.lastClickedIndex = idx;
      }
      fsRefresh(panel);
      fsUpdatePreview(panel);
    });

    el.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      if (item.type === 'folder') {
        fsOpenFolder(panel, item);
      } else {
        fsUpdatePreview(panel);
      }
    });

    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!state.selected.has(item)) {
        state.selected.clear();
        state.selected.add(item);
        fsRefresh(panel);
      }
      showFsContextMenu(e, panel, item, openWindows[panel.dataset.winId]?.win);
    });
  });

  grid.addEventListener('click', (e) => {
    if (e.target === grid || e.target.classList.contains('files-no-results')) {
      state.selected.clear();
      state.lastClickedIndex = -1;
      fsRefresh(panel);
      const preview = explorer.querySelector('[data-files-preview]');
      if (preview) preview.innerHTML = '<div class="files-empty-preview" style="color: var(--text-sub); font-size: 11px;">Seleccioná un archivo para previsualización interactiva rápida.</div>';
    }
  });

  grid.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.explorer-item')) return;
    e.preventDefault();
    e.stopPropagation();
    state.selected.clear();
    fsRefresh(panel);
    showFsContextMenu(e, panel, null, openWindows[panel.dataset.winId]?.win);
  });

  grid.addEventListener('dragover', (e) => {
    if (!e.dataTransfer.types.includes('application/x-nebula-fs-items')) return;
    if (e.target.closest('.explorer-item')) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    grid.classList.add('drag-over-empty');
  });
  grid.addEventListener('dragleave', (e) => {
    if (!grid.contains(e.relatedTarget)) {
      grid.classList.remove('drag-over-empty');
    }
  });
  grid.addEventListener('drop', (e) => {
    if (!e.dataTransfer.types.includes('application/x-nebula-fs-items')) return;
    if (e.target.closest('.explorer-item')) return;
    e.preventDefault();
    grid.classList.remove('drag-over-empty');
    fsHandleDropToCurrent(panel, e);
  });

  const pathEl = explorer.querySelector('[data-files-path]');
  if (pathEl) {
    pathEl.addEventListener('dragover', (e) => {
      if (!e.dataTransfer.types.includes('application/x-nebula-fs-items')) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      pathEl.classList.add('drop-target');
    });
    pathEl.addEventListener('dragleave', () => {
      pathEl.classList.remove('drop-target');
    });
    pathEl.addEventListener('drop', (e) => {
      e.preventDefault();
      pathEl.classList.remove('drop-target');
      fsHandleDropToFolder(panel, e, FILE_SYSTEM);
    });
  }
}

function fsHandleDrop(panel, e, targetFolder) {
  fsHandleDropToFolder(panel, e, targetFolder);
}

function fsHandleDropToCurrent(panel, e) {
  const state = getFsPanelState(panel);
  fsHandleDropToFolder(panel, e, state.current);
}

function fsHandleDropToFolder(panel, e, targetFolder) {
  const state = getFsPanelState(panel);
  let names = [];
  try {
    names = JSON.parse(e.dataTransfer.getData('application/x-nebula-fs-items') || '[]');
  } catch (_) {}

  if (!Array.isArray(names) || names.length === 0) {
    names = Array.from(state.selected).map(i => i.name);
  }

  let moved = 0;
  let failed = 0;

  names.forEach(name => {
    const item = fsFindItemByName(name);
    if (!item) { failed++; return; }
    if (item === targetFolder) { failed++; return; }
    if (item.type === 'folder') {
      let cursor = targetFolder;
      while (cursor) {
        if (cursor === item) { failed++; return; }
        cursor = fsFindParent(cursor);
      }
    }
    if (fsMoveItem(item, targetFolder)) moved++;
    else failed++;
  });

  if (moved > 0) {
    showToast('Movido', `${moved} elemento${moved === 1 ? '' : 's'} → ${targetFolder.label || targetFolder.name}${failed ? ` (${failed} fallaron)` : ''}`, 'folder-input');
  } else if (failed > 0) {
    showToast('No se pudo mover', 'El destino no es válido o ya contiene esos elementos.', 'alert-circle');
  }

  state.selected.clear();
  fsRefresh(panel);
}

function fsUpdatePreview(panel) {
  const state = getFsPanelState(panel);
  const explorer = panel;
  if (!explorer) return;
  const preview = explorer.querySelector('[data-files-preview]');
  if (!preview) return;

  const items = Array.from(state.selected);
  if (items.length === 0) {
    preview.innerHTML = '<div class="files-empty-preview" style="color: var(--text-sub); font-size: 11px;">Seleccioná un archivo para previsualización interactiva rápida.</div>';
    return;
  }
  if (items.length > 1) {
    preview.innerHTML = `
      <div style="color: var(--text-sub); font-size: 11px;">
        <strong style="color:#fff; font-size:12px; display:block; margin-bottom:4px;">${items.length} elementos seleccionados</strong>
        Usá <kbd style="font-family:'JetBrains Mono',monospace; font-size:10px; background:rgba(255,255,255,0.08); padding:1px 5px; border-radius:4px; color:var(--accent);">Supr</kbd> para eliminar o <kbd style="font-family:'JetBrains Mono',monospace; font-size:10px; background:rgba(255,255,255,0.08); padding:1px 5px; border-radius:4px; color:var(--accent);">click derecho</kbd> para más acciones.
      </div>
    `;
    return;
  }

  const item = items[0];
  if (item.type === 'image') {
    preview.innerHTML = `
      <div style="display:flex; gap:12px; align-items:center;">
        <img src="${escapeHtml(item.path || '')}" alt="${escapeHtml(item.name)}" style="width:75px; height:60px; border-radius:6px; object-fit:cover;">
        <div>
          <strong style="color:#fff; font-size:12px;">${escapeHtml(item.name)}</strong>
          <small style="display:block; color:var(--text-sub); font-size:10px;">${escapeHtml(item.size || '')}</small>
          ${item.path ? `<button class="preview-set-wall-btn" type="button" onclick="setCustomWallpaperFromFile('${item.path.replace(/'/g, "\\'")}')"><i data-lucide="image"></i> Establecer de fondo</button>` : ''}
        </div>
      </div>
    `;
  } else if (item.type === 'audio') {
    preview.innerHTML = `
      <div>
        <strong style="color:#fff; font-size:12px;"><i data-lucide="music" style="width:14px; height:14px; color:var(--accent);"></i> ${escapeHtml(item.name)}</strong>
        <small style="display:block; color:var(--text-sub); font-size:10px;">${escapeHtml(item.size || '')}</small>
        <div class="preview-audio-player">
          <button class="preview-play-btn" type="button" onclick="toggleMediaPlayback()"><i data-lucide="play"></i></button>
          <div class="preview-audio-wave">
            <span style="height:40%;"></span><span style="height:80%;"></span><span style="height:60%;"></span>
            <span style="height:100%;"></span><span style="height:50%;"></span><span style="height:70%;"></span>
          </div>
        </div>
      </div>
    `;
  } else if (item.type === 'folder') {
    preview.innerHTML = `
      <div>
        <strong style="color:#fff; font-size:12px;"><i data-lucide="folder" style="width:14px; height:14px; color:var(--accent);"></i> ${escapeHtml(item.label || item.name)}</strong>
        <small style="display:block; color:var(--text-sub); font-size:10px;">Carpeta · ${(item.children || []).length} elementos</small>
      </div>
    `;
  } else {
    preview.innerHTML = `
      <div>
        <strong style="color:#fff; font-size:12px;"><i data-lucide="file-text" style="width:14px; height:14px; color:var(--accent);"></i> ${escapeHtml(item.name)}</strong>
        <small style="display:block; color:var(--text-sub); font-size:10px;">${escapeHtml(item.size || '')} · Solo lectura</small>
        <div style="margin-top:6px; font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--text-sub); background:rgba(0,0,0,0.3); padding:6px; border-radius:4px; max-height:80px; overflow:hidden;">
          // Nebula OS File Descriptor\\n// Archivo listo para ejecución y lectura
        </div>
      </div>
    `;
  }
  refreshIcons();
}

function setupFiles(panel) {
  if (!panel) return;

  if (!FILE_SYSTEM || typeof FILE_SYSTEM !== 'object' || !Array.isArray(FILE_SYSTEM.children)) {
    FILE_SYSTEM = getDefaultFileSystem();
  }

  const state = getFsPanelState(panel);
  state.current = FILE_SYSTEM;
  state.trail = [FILE_SYSTEM];
  state.selected = new Set();

  const grid = panel.querySelector('.files-grid');
  const search = panel.querySelector('[data-files-search]');
  const back = panel.querySelector('[data-files-back]');
  const forward = panel.querySelector('[data-files-forward]');

  const toolbar = panel.querySelector('.files-toolbar');
  if (toolbar && !toolbar.querySelector('[data-files-toolbar-extras]')) {
    const extras = document.createElement('div');
    extras.setAttribute('data-files-toolbar-extras', '');
    extras.style.display = 'flex';
    extras.style.gap = '6px';
    extras.style.marginLeft = 'auto';
    extras.innerHTML = `
      <button class="files-toolbar-btn" type="button" data-files-newfolder title="Nueva carpeta (Ctrl+Shift+N)">
        <i data-lucide="folder-plus"></i> Nueva carpeta
      </button>
      <button class="files-toolbar-btn danger" type="button" data-files-delete title="Eliminar seleccionados (Supr)" disabled>
        <i data-lucide="trash-2"></i> Eliminar
      </button>
    `;
    const searchEl = toolbar.querySelector('.files-search');
    if (searchEl) toolbar.insertBefore(extras, searchEl);
    else toolbar.appendChild(extras);

    if (searchEl) searchEl.style.marginLeft = '8px';

    extras.querySelector('[data-files-newfolder]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      fsCreateFolder(panel);
    });
    extras.querySelector('[data-files-delete]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      fsDeleteSelection(panel);
    });
  }

  if (search) {
    search.addEventListener('input', () => {
      state.query = search.value.trim().toLowerCase();
      fsRefresh(panel);
    });
  }

  if (back) {
    back.addEventListener('click', () => {
      if (state.history.length === 0) return;
      const prev = state.history.pop();
      state.future.unshift(state.current);
      state.current = prev;
      state.trail = [FILE_SYSTEM, ...fsBuildTrail(prev)];
      state.query = '';
      if (search) search.value = '';
      state.selected.clear();
      fsRefresh(panel);
    });
  }
  if (forward) {
    forward.addEventListener('click', () => {
      if (state.future.length === 0) return;
      const next = state.future.shift();
      state.history.push(state.current);
      state.current = next;
      state.trail = [FILE_SYSTEM, ...fsBuildTrail(next)];
      state.query = '';
      if (search) search.value = '';
      state.selected.clear();
      fsRefresh(panel);
    });
  }

  panel.querySelectorAll('[data-files-location]').forEach(button => {
    button.addEventListener('click', () => {
      const folder = fsFindFolder(button.dataset.filesLocation);
      if (!folder) return;
      panel.querySelectorAll('[data-files-location]').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      state.history.push(state.current);
      state.future = [];
      state.current = folder;
      state.trail = [FILE_SYSTEM, ...fsBuildTrail(folder)];
      state.query = '';
      if (search) search.value = '';
      state.selected.clear();
      fsRefresh(panel);
    });
  });

  panel.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    const isInput = tag === 'input' || tag === 'textarea';
    if (e.target.closest('.fs-rename-modal')) return;

    if (e.key === 'F2' && state.selected.size === 1) {
      e.preventDefault();
      const item = Array.from(state.selected)[0];
      fsPromptRename(panel, item);
    } else if (e.key === 'Delete' && state.selected.size > 0 && !isInput) {
      e.preventDefault();
      fsDeleteSelection(panel);
    } else if (e.key === 'a' && (e.ctrlKey || e.metaKey) && !isInput) {
      e.preventDefault();
      state.visibleItems.forEach(item => state.selected.add(item));
      fsRefresh(panel);
    } else if (e.key === 'n' && e.shiftKey && (e.ctrlKey || e.metaKey) && !isInput) {
      e.preventDefault();
      fsCreateFolder(panel);
    }
  });

  fsRefresh(panel);
}

function searchFilesInSystem(query, folder = FILE_SYSTEM, trail = []) {
  const results = [];
  const q = (query || '').toLowerCase();
  const children = folder.children || [];

  children.forEach(child => {
    const pathHere = [...trail, child.label || child.name];
    if (child.type === 'folder') {
      if (child.name.toLowerCase().includes(q)) {
        results.push({
          id: 'file-' + pathHere.join('/'),
          title: child.label || child.name,
          sub: 'Carpeta · ' + pathHere.join(' / '),
          icon: 'folder',
          category: 'Archivo',
          keywords: [child.name],
          run: () => { openApp('files'); showToast('Archivo encontrado', `Carpeta en ${pathHere.join(' / ')}`, 'folder'); }
        });
      }
      const sub = searchFilesInSystem(query, child, pathHere);
      sub.forEach(r => results.push(r));
    } else {
      if (child.name.toLowerCase().includes(q)) {
        results.push({
          id: 'file-' + pathHere.join('/'),
          title: child.name,
          sub: (child.size || 'Archivo') + ' · ' + pathHere.join(' / '),
          icon: child.type === 'image' ? 'image' : child.type === 'audio' ? 'music' : 'file-text',
          category: 'Archivo',
          keywords: [child.name],
          run: () => {
            openApp('files');
            showToast('Archivo encontrado', `Abriendo ${child.name}`, 'folder');
          }
        });
      }
    }
  });

  return results;
}

function setCustomWallpaperFromFile(imgPath) {
  const screen = document.getElementById('screen');
  if (screen) {
    screen.style.backgroundImage = `linear-gradient(rgba(8, 9, 17, 0.42), rgba(8, 9, 17, 0.58)), url("${imgPath}")`;
    showToast('Fondo Actualizado', 'Nueva imagen establecida como fondo de pantalla.', 'image');
  }
}

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

      if (typeof designerState.shadowStrength === 'number') {
        applyShadowStrength(designerState.shadowStrength);
      } else {
        applyShadowStrength(55);
      }
    } else {
      applyDockPreviewStyle('blueprint');
      applyShadowStrength(55);
    }

    const savedWidgets = JSON.parse(localStorage.getItem(WIDGETS_STORAGE_KEY));
    if (Array.isArray(savedWidgets)) {
      const validTypes = new Set(['clock', 'weather', 'gaming-hub']);
      desktopWidgets = savedWidgets
        .filter(w => w && typeof w === 'object' && validTypes.has(w.type))
        .map(w => {
          if (w.type === 'weather') {
            const cityId = w.cityId || DEFAULT_WEATHER_CITY_ID;
            return {
              id: w.id || ('widget-weather-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6)),
              type: 'weather',
              x: typeof w.x === 'number' ? w.x : window.innerWidth - 280,
              y: typeof w.y === 'number' ? w.y : 60,
              cityId
            };
          }
          return w;
        });
    }

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

  scheduleSaveSession();
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

  saveSessionState(true);

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
  screen.style.backgroundImage = `linear-gradient(rgba(8, 9, 17, 0.42), rgba(8, 9, 17, 0.58)), url("./assets/images/fondosDePantalla/${wallpaper.file}")`;
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
   ★ DOCK CONTEXT MENU
===================================================== */
function showDockContextMenu(appId, event) {
  const app = APPS[appId];
  if (!app) return;

  hideDockContextMenu();

  const instances = getInstancesOfApp(appId);
  const count = instances.length;
  const isRunning = count > 0;

  const menu = document.createElement('div');
  menu.className = 'dock-context-menu';
  menu.dataset.appId = appId;

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

  html += `
    <button class="dock-context-item" data-action="open-new" type="button">
      <span class="dc-icon"><i data-lucide="plus-square"></i></span>
      <span class="dc-label">Abrir nueva ${escapeHtml(app.title)}</span>
      <span class="dc-shortcut">Ctrl+Click</span>
    </button>
  `;

  if (isRunning) {
    html += `
      <button class="dock-context-item" data-action="focus" type="button">
        <span class="dc-icon"><i data-lucide="focus"></i></span>
        <span class="dc-label">Enfocar ${escapeHtml(app.title)}</span>
      </button>
    `;
  }

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

  document.body.appendChild(menu);
  dockContextMenuEl = menu;
  dockContextMenuAppId = appId;

  refreshIcons();

  const menuRect = menu.getBoundingClientRect();
  const margin = 10;
  const anchorRect = event.currentTarget
    ? event.currentTarget.getBoundingClientRect()
    : { left: event.clientX, right: event.clientX, top: event.clientY, bottom: event.clientY };

  let left = anchorRect.left + (anchorRect.right - anchorRect.left) / 2 - menuRect.width / 2;
  let top = anchorRect.top - menuRect.height - 12;

  if (top < margin) {
    top = anchorRect.bottom + 12;
  }

  left = Math.max(margin, Math.min(window.innerWidth - menuRect.width - margin, left));
  top = Math.max(margin, Math.min(window.innerHeight - menuRect.height - margin, top));

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  menu.querySelectorAll('.dock-context-item[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      handleDockContextAction(action, appId);
    });
  });

  requestAnimationFrame(() => {
    menu.classList.add('open');
  });

  refreshIcons();
}

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

function hideDockContextMenu() {
  if (dockContextMenuEl) {
    const el = dockContextMenuEl;
    el.classList.remove('open');
    setTimeout(() => el.remove(), 160);
    dockContextMenuEl = null;
    dockContextMenuAppId = null;
  }
}

/* ================= DOCK ================= */
function renderDock() {
  const dock = document.getElementById('dock');
  if (!dock) return;
  dock.innerHTML = '';
  
  const lBtn = document.createElement('div');
  lBtn.className = 'dock-item dock-launcher-btn';
  lBtn.tabIndex = 0;
  lBtn.setAttribute('role', 'button');
  lBtn.title = 'Lanzador de Aplicaciones (Nebula Menu)';
  lBtn.innerHTML = `<img src="./assets/images/logosSO/nebulaLogo.png" alt="Nebula" class="dock-launcher-logo" onerror="this.onerror=null; this.outerHTML='<i data-lucide=\\'layout-grid\\'></i>'; refreshIcons();" />`;
  lBtn.onclick = toggleLauncher;
  dock.appendChild(lBtn);

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

    div.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      showDockContextMenu(id, e);
    };

    if (isRunning) {
      div.addEventListener('mouseenter', () => {
        if (dockContextMenuAppId === id) return;
        showDockPreview(id, div);
      });
      div.addEventListener('mouseleave', () => hideDockPreview());
    }

    dock.appendChild(div);
  });
  refreshIcons();
}

/* ================= DOCK HOVER PREVIEW ================= */
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
  hideWmCardContextMenu();

  refreshIcons();
}

function closeWindowManager() {
  const overlay = document.getElementById('window-manager-overlay');
  if (!overlay) return;

  cleanupWmDrag();
  hideWmCardContextMenu();

  windowManagerOpen = false;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('wm-drag-active');
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
    grid.style.display = 'none';
    empty.hidden = false;
    empty.style.display = '';
    refreshIcons();
    return;
  }

  grid.hidden = false;
  grid.style.display = '';
  empty.hidden = true;
  empty.style.display = 'none';

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
    const winId = card.dataset.wmWin;

    card.addEventListener('click', (e) => {
      if (wmDragState) return;
      focusFromWindowManager(winId);
    });

    card.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showWmCardContextMenu(winId, e);
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
   ★ WM TRASH ZONE
===================================================== */
function setupWmTrashZone() {
  const trash = document.getElementById('wm-trash-zone');
  if (!trash) return;

  trash.addEventListener('dragover', (e) => {
    if (!wmDragState) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    trash.classList.add('drag-over');
  });

  trash.addEventListener('dragleave', (e) => {
    if (!trash.contains(e.relatedTarget)) {
      trash.classList.remove('drag-over');
    }
  });

  trash.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    trash.classList.remove('drag-over');

    if (!wmDragState) return;

    const { winId } = wmDragState;
    if (!winId || !openWindows[winId]) return;

    deleteWindowFromWm(winId);

    wmDragState.justDropped = true;
  });
}

function setWmDragActive(active) {
  const overlay = document.getElementById('window-manager-overlay');
  const strip = document.getElementById('wm-workspaces-strip');
  if (!overlay) return;

  overlay.classList.toggle('wm-drag-active', active);
  if (strip) strip.classList.toggle('wm-dragging', active);
}

function deleteWindowFromWm(winId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;

  const win = entry.win;
  const appTitle = APPS[entry.appId]?.title || entry.appId;

  const card = document.querySelector(`.wm-card[data-wm-win="${winId}"]`);
  if (card) {
    card.classList.add('deleting');
  }

  setTimeout(() => {
    closeApp(winId);
    showToast(
      'Ventana eliminada',
      `${appTitle} fue cerrada.`,
      'trash-2'
    );
  }, 320);
}

/* =====================================================
   ★ WM CARD CONTEXT MENU
===================================================== */
function showWmCardContextMenu(winId, event) {
  const entry = openWindows[winId];
  if (!entry?.win) return;

  const app = APPS[entry.appId];
  if (!app) return;

  hideWmCardContextMenu();

  const win = entry.win;
  const isMinimized = win.classList.contains('minimized');
  const winWs = parseInt(win.dataset.ws, 10);
  const instances = getInstancesOfApp(entry.appId);
  const hasMultiple = instances.length > 1;
  const instNumber = hasMultiple ? getInstanceNumber(winId) : 1;

  const menu = document.createElement('div');
  menu.className = 'wm-card-context-menu';
  menu.dataset.winId = winId;

  const iconHTML = app.image
    ? `<img src="${app.image}" alt="${escapeHtml(app.title)}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i data-lucide=\\'${app.icon}\\'></i>';" />`
    : `<i data-lucide="${app.icon}"></i>`;

  const displayTitle = hasMultiple ? `${app.title} · #${instNumber}` : app.title;

  let html = `
    <div class="wm-ctx-header">
      <div class="wm-ctx-icon">${iconHTML}</div>
      <div class="wm-ctx-meta">
        <span class="wm-ctx-title">${escapeHtml(displayTitle)}</span>
        <span class="wm-ctx-sub">Space ${winWs}${isMinimized ? ' · Minimizada' : ''}</span>
      </div>
    </div>
  `;

  html += `
    <button class="wm-ctx-item" data-action="focus" type="button">
      <span class="wm-ctx-icon-left"><i data-lucide="focus"></i></span>
      <span class="wm-ctx-label">Enfocar ventana</span>
    </button>
  `;

  if (isMinimized) {
    html += `
      <button class="wm-ctx-item" data-action="restore" type="button">
        <span class="wm-ctx-icon-left"><i data-lucide="maximize-2"></i></span>
        <span class="wm-ctx-label">Restaurar ventana</span>
      </button>
    `;
  } else {
    html += `
      <button class="wm-ctx-item" data-action="minimize" type="button">
        <span class="wm-ctx-icon-left"><i data-lucide="minus-circle"></i></span>
        <span class="wm-ctx-label">Minimizar ventana</span>
      </button>
    `;
  }

  html += `
    <button class="wm-ctx-item" data-action="new-instance" type="button">
      <span class="wm-ctx-icon-left"><i data-lucide="plus-square"></i></span>
      <span class="wm-ctx-label">Abrir nueva ${escapeHtml(app.title)}</span>
      <span class="wm-ctx-shortcut">Ctrl+Clic</span>
    </button>
  `;

  html += `<div class="wm-ctx-separator"></div>`;
  html += `<span class="wm-ctx-section-label">Mover a otro Space</span>`;

  for (let ws = 1; ws <= TOTAL_WORKSPACES; ws++) {
    if (ws === winWs) continue;
    const countInWs = getWindowsInWorkspace(ws).length;
    html += `
      <button class="wm-ctx-space-item" data-action="move-ws" data-target-ws="${ws}" type="button">
        <span class="wm-ctx-space-num">${ws}</span>
        <span class="wm-ctx-space-label">Space ${ws}</span>
        <span class="wm-ctx-space-count">${countInWs} ${countInWs === 1 ? 'app' : 'apps'}</span>
      </button>
    `;
  }

  html += `<div class="wm-ctx-separator"></div>`;
  html += `
    <button class="wm-ctx-item danger" data-action="close" type="button">
      <span class="wm-ctx-icon-left"><i data-lucide="x-circle"></i></span>
      <span class="wm-ctx-label">Cerrar ventana</span>
    </button>
  `;

  menu.innerHTML = html;

  document.body.appendChild(menu);
  wmCardContextMenuEl = menu;
  wmCardContextMenuWinId = winId;

  refreshIcons();

  const menuRect = menu.getBoundingClientRect();
  const margin = 10;

  let left = event.clientX;
  let top = event.clientY;

  if (left + menuRect.width + margin > window.innerWidth) {
    left = window.innerWidth - menuRect.width - margin;
  }

  if (top + menuRect.height + margin > window.innerHeight) {
    top = window.innerHeight - menuRect.height - margin;
  }

  left = Math.max(margin, left);
  top = Math.max(margin, top);

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  menu.querySelectorAll('.wm-ctx-item[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      handleWmCardAction(action, winId, btn);
    });
  });

  menu.querySelectorAll('.wm-ctx-space-item[data-target-ws]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetWs = parseInt(btn.dataset.targetWs, 10);
      if (Number.isNaN(targetWs)) return;
      handleWmCardAction('move-ws', winId, btn, targetWs);
    });
  });

  requestAnimationFrame(() => menu.classList.add('open'));
  refreshIcons();
}

function handleWmCardAction(action, winId, btnEl, targetWs = null) {
  const entry = openWindows[winId];
  if (!entry?.win) {
    hideWmCardContextMenu();
    return;
  }

  switch (action) {
    case 'focus': {
      focusFromWindowManager(winId);
      break;
    }

    case 'minimize': {
      minimizeApp(winId);
      if (windowManagerOpen) renderWindowManager();
      break;
    }

    case 'restore': {
      entry.win.classList.remove('minimized');
      entry.win.style.display = 'flex';
      focusWindow(winId);
      if (windowManagerOpen) renderWindowManager();
      break;
    }

    case 'new-instance': {
      const appId = entry.appId;
      openApp(appId, true);
      if (windowManagerOpen) renderWindowManager();
      break;
    }

    case 'move-ws': {
      if (targetWs === null || Number.isNaN(targetWs)) break;
      moveWindowToWorkspace(winId, targetWs);
      break;
    }

    case 'close': {
      deleteWindowFromWm(winId);
      break;
    }
  }

  hideWmCardContextMenu();
}

function hideWmCardContextMenu() {
  if (wmCardContextMenuEl) {
    const el = wmCardContextMenuEl;
    el.classList.remove('open');
    setTimeout(() => el.remove(), 160);
    wmCardContextMenuEl = null;
    wmCardContextMenuWinId = null;
  }
}

/* =====================================================
   DRAG & DROP: mover ventanas entre workspaces + trash
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

      setWmDragActive(true);
    });

    mini.addEventListener('dragend', () => {
      mini.classList.remove('dragging');
      setWmDragActive(false);

      strip.querySelectorAll('.wm-workspace-card').forEach(c => {
        c.classList.remove('drag-over', 'drag-invalid');
      });

      const trash = document.getElementById('wm-trash-zone');
      if (trash) trash.classList.remove('drag-over');

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
  const trash = document.getElementById('wm-trash-zone');
  if (trash) trash.classList.remove('drag-over');
  setWmDragActive(false);
}

/* =====================================================
   ★ SETUP WINDOW RESIZE
===================================================== */
function setupWindowResize(win) {
  const MIN_W = 450;
  const MIN_H = 350;
  const TOP_MIN = 46;

  const dirs = ['n', 's', 'e', 'w', 'nw', 'ne', 'sw', 'se'];
  const cursorMap = {
    'n': 'ns-resize', 's': 'ns-resize',
    'e': 'ew-resize', 'w': 'ew-resize',
    'nw': 'nwse-resize', 'se': 'nwse-resize',
    'ne': 'nesw-resize', 'sw': 'nesw-resize'
  };

  dirs.forEach(dir => {
    const handle = document.createElement('div');
    handle.className = 'window-resize-handle';
    handle.dataset.dir = dir;
    win.appendChild(handle);
  });

  win.querySelectorAll('.window-resize-handle').forEach(handle => {
    const dir = handle.dataset.dir;

    const onStart = (e) => {
      if (win.classList.contains('maximized')) return;
      if (e.type === 'mousedown' && e.button !== 0) return;

      e.preventDefault();
      e.stopPropagation();

      const winId = win.dataset.winId;
      if (winId) focusWindow(winId);

      const startX = e.touches ? e.touches[0].clientX : e.clientX;
      const startY = e.touches ? e.touches[0].clientY : e.clientY;

      const startLeft = win.offsetLeft;
      const startTop = win.offsetTop;
      const startWidth = win.offsetWidth;
      const startHeight = win.offsetHeight;

      isResizing = true;
      win.classList.add('resizing');
      document.body.classList.add('window-resizing');
      document.body.style.setProperty('--resize-cursor', cursorMap[dir] || 'default');

      const moveEvent = e.type === 'touchstart' ? 'touchmove' : 'mousemove';
      const endEvent = e.type === 'touchstart' ? 'touchend' : 'mouseup';

      function onMove(ev) {
        const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
        const clientY = ev.touches ? ev.touches[0].clientY : ev.clientY;

        const dx = clientX - startX;
        const dy = clientY - startY;

        let newLeft = startLeft;
        let newTop = startTop;
        let newWidth = startWidth;
        let newHeight = startHeight;

        if (dir.includes('e')) newWidth = Math.max(MIN_W, startWidth + dx);
        if (dir.includes('s')) newHeight = Math.max(MIN_H, startHeight + dy);

        if (dir.includes('w')) {
          const maxDx = startWidth - MIN_W;
          const safeDx = Math.min(dx, maxDx);
          newWidth = startWidth - safeDx;
          newLeft = startLeft + safeDx;
        }

        if (dir.includes('n')) {
          const maxDy = startHeight - MIN_H;
          const safeDy = Math.min(dy, maxDy);
          const desiredTop = startTop + safeDy;
          if (desiredTop < TOP_MIN) {
            const correction = TOP_MIN - desiredTop;
            newHeight = startHeight - (safeDy - correction);
            newTop = TOP_MIN;
          } else {
            newHeight = startHeight - safeDy;
            newTop = desiredTop;
          }
        }

        win.style.width = `${newWidth}px`;
        win.style.height = `${newHeight}px`;
        win.style.left = `${newLeft}px`;
        win.style.top = `${newTop}px`;
      }

      function onEnd() {
        document.removeEventListener(moveEvent, onMove);
        document.removeEventListener(endEvent, onEnd);
        isResizing = false;
        win.classList.remove('resizing');
        document.body.classList.remove('window-resizing');
        document.body.style.removeProperty('--resize-cursor');
        saveSessionState(true);
      }

      document.addEventListener(moveEvent, onMove, { passive: false });
      document.addEventListener(endEvent, onEnd);
    };

    handle.addEventListener('mousedown', onStart);
    handle.addEventListener('touchstart', onStart, { passive: false });
  });
}

/* =====================================================
   ★ WINDOW TABS — Sistema de pestañas internas
===================================================== */

function getWindowTabsState(win) {
  if (!windowTabsState.has(win)) {
    windowTabsState.set(win, {
      tabs: [],
      activeTabId: null,
      counter: 0
    });
  }
  return windowTabsState.get(win);
}

function generateTabId() {
  return 'tab-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

function createTabObject(appId, win) {
  const state = getWindowTabsState(win);
  state.counter++;
  const tabId = generateTabId();

  let label = '';
  let kind = null;

  if (appId === 'terminal') {
    kind = 'terminal';
    label = `Terminal ${state.counter}`;
  } else if (appId === 'files') {
    kind = 'files';
    label = `Inicio ${state.counter}`;
  } else {
    label = `Tab ${state.counter}`;
  }

  return { id: tabId, label, kind };
}

function buildTabPanelHTML(appId, tab) {
  if (appId === 'terminal') {
    return `
      <div class="window-tab-panel" data-tab-id="${tab.id}">
        <div class="term-body">
          <div class="prompt">
            <span class="dir">~/nebula-os/gaming-core</span>
            <span class="branch"> main [profile:${currentProfile}]</span>
          </div>
          <div class="term-history"></div>
          <div class="prompt" style="margin-top:4px;">
            <span class="time">❯</span>
            <input class="term-input" autocomplete="off">
          </div>
        </div>
      </div>
    `;
  }

  if (appId === 'files') {
    return `
      <div class="window-tab-panel" data-tab-id="${tab.id}">
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
      </div>
    `;
  }

  return `<div class="window-tab-panel" data-tab-id="${tab.id}"></div>`;
}

function renderWindowTabs(winId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;
  const win = entry.win;
  const appId = entry.appId;

  if (!TABBED_APPS.has(appId)) return;

  const state = getWindowTabsState(win);
  const tabsBar = win.querySelector('.window-tabs');
  const panelsWrap = win.querySelector('.window-tab-panels');
  if (!tabsBar || !panelsWrap) return;

  tabsBar.innerHTML = state.tabs.map(tab => {
    const isActive = tab.id === state.activeTabId;
    const icon = appId === 'terminal' ? 'terminal' : 'folder';
    return `
      <div class="window-tab ${isActive ? 'active' : ''}" data-tab-id="${tab.id}" role="tab">
        <span class="window-tab-icon"><i data-lucide="${icon}"></i></span>
        <span class="window-tab-title">${escapeHtml(tab.label)}</span>
        <button class="window-tab-close" type="button" data-tab-close="${tab.id}" aria-label="Cerrar pestaña">
          <i data-lucide="x"></i>
        </button>
      </div>
    `;
  }).join('') + `
    <button class="window-tab-add" type="button" data-tab-add title="Nueva pestaña (Ctrl+T)">
      <i data-lucide="plus"></i>
    </button>
  `;

  state.tabs.forEach(tab => {
    let panel = panelsWrap.querySelector(`.window-tab-panel[data-tab-id="${tab.id}"]`);
    if (!panel) {
      const wrap = document.createElement('div');
      wrap.innerHTML = buildTabPanelHTML(appId, tab).trim();
      panel = wrap.firstElementChild;
      panelsWrap.appendChild(panel);

      if (appId === 'terminal') {
        setupTerminalPanel(panel);
      } else if (appId === 'files') {
        setupFiles(panel);
      }
    }
    panel.classList.toggle('active', tab.id === state.activeTabId);
  });

  panelsWrap.querySelectorAll('.window-tab-panel').forEach(panel => {
    const tabId = panel.dataset.tabId;
    if (!state.tabs.some(t => t.id === tabId)) {
      panel.remove();
    }
  });

  tabsBar.querySelectorAll('.window-tab').forEach(tabEl => {
    const tabId = tabEl.dataset.tabId;
    tabEl.addEventListener('click', (e) => {
      if (e.target.closest('.window-tab-close')) return;
      switchWindowTab(winId, tabId);
    });
    tabEl.addEventListener('auxclick', (e) => {
      if (e.button === 1) {
        e.preventDefault();
        closeWindowTab(winId, tabId);
      }
    });
  });

  tabsBar.querySelectorAll('[data-tab-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeWindowTab(winId, btn.dataset.tabClose);
    });
  });

  tabsBar.querySelector('[data-tab-add]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    addWindowTab(winId);
  });

  refreshIcons();
  updateWindowTitleForTabs(winId);
  syncAllSliders();
}

function updateWindowTitleForTabs(winId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;
  const win = entry.win;
  const appId = entry.appId;
  const app = APPS[appId];
  if (!app) return;

  const titleEl = win.querySelector('.window-identity strong');
  if (!titleEl) return;

  const instances = getInstancesOfApp(appId);
  const hasMultipleInstances = instances.length > 1;
  const instNumber = hasMultipleInstances ? getInstanceNumber(winId) : 1;

  let baseTitle = app.title;
  if (hasMultipleInstances) baseTitle += ` · #${instNumber}`;

  if (TABBED_APPS.has(appId)) {
    const state = getWindowTabsState(win);
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab && state.tabs.length > 1) {
      const idx = state.tabs.findIndex(t => t.id === state.activeTabId) + 1;
      titleEl.textContent = `${baseTitle} · ${activeTab.label} (${idx}/${state.tabs.length})`;
    } else {
      titleEl.textContent = baseTitle;
    }
  } else {
    titleEl.textContent = baseTitle;
  }
}

function addWindowTab(winId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;
  const win = entry.win;
  const appId = entry.appId;
  if (!TABBED_APPS.has(appId)) return;

  const state = getWindowTabsState(win);
  const newTab = createTabObject(appId, win);
  state.tabs.push(newTab);
  state.activeTabId = newTab.id;

  renderWindowTabs(winId);
  saveSessionState(true);
}

function closeWindowTab(winId, tabId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;
  const win = entry.win;
  const appId = entry.appId;
  if (!TABBED_APPS.has(appId)) return;

  const state = getWindowTabsState(win);
  const idx = state.tabs.findIndex(t => t.id === tabId);
  if (idx === -1) return;

  state.tabs.splice(idx, 1);

  if (state.tabs.length === 0) {
    closeApp(winId);
    return;
  }

  if (state.activeTabId === tabId) {
    const newActive = state.tabs[Math.max(0, idx - 1)];
    state.activeTabId = newActive.id;
  }

  renderWindowTabs(winId);
  saveSessionState(true);
}

function switchWindowTab(winId, tabId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;
  const win = entry.win;
  const state = getWindowTabsState(win);
  if (!state.tabs.some(t => t.id === tabId)) return;
  if (state.activeTabId === tabId) return;
  state.activeTabId = tabId;
  renderWindowTabs(winId);
  saveSessionState(true);
}

/* =====================================================
   ★ ANIMACIONES DE VENTANAS — helpers
===================================================== */

function prefersReducedMotion() {
  return !settingsState.animations || document.body.classList.contains('no-animations');
}

function runWindowAnimation(win, className, durationMs, onEnd) {
  if (!win) {
    if (typeof onEnd === 'function') onEnd();
    return;
  }

  if (prefersReducedMotion()) {
    win.classList.add(className);
    if (typeof onEnd === 'function') onEnd();
    return;
  }

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    win.removeEventListener('animationend', onAnimEnd);
    clearTimeout(safety);
    if (typeof onEnd === 'function') onEnd();
  };

  const onAnimEnd = (e) => {
    if (e.target !== win) return;
    if (e.animationName && !e.animationName.startsWith('window-')) return;
    finish();
  };

  win.addEventListener('animationend', onAnimEnd);
  const safety = setTimeout(finish, durationMs + 80);

  void win.offsetWidth;
  win.classList.add(className);
}

/* ================= GESTIÓN DE VENTANAS ================= */
function openApp(appId, forceNew = false, restoreData = null) {
  const app = APPS[appId];
  if (!app) return;

  const isRestoring = !!restoreData;
  const instances = getInstancesOfApp(appId);

  if (!forceNew && !isRestoring && instances.length > 0) {
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

  const winId = isRestoring && restoreData.winId ? restoreData.winId : generateWinId(appId);

  if (openWindows[winId]) {
    return;
  }

  const win = document.createElement('div');
  win.className = 'window focused';
  win.id = `win-${winId}`;
  win.dataset.appId = appId;
  win.dataset.winId = winId;

  const supportsTabs = TABBED_APPS.has(appId);
  if (supportsTabs) win.classList.add('has-tabs');

  const wsToUse = isRestoring && restoreData.ws ? restoreData.ws : currentWorkspace;
  win.dataset.ws = String(wsToUse);

  const top = (isRestoring && restoreData.top) ? restoreData.top : (65 + Math.random() * 25) + 'px';
  const left = (isRestoring && restoreData.left) ? restoreData.left : (100 + Math.random() * 50) + 'px';
  const width = (isRestoring && restoreData.width) ? restoreData.width
    : (appId === 'music' ? '980px' : appId === 'settings' ? '780px' : '680px');
  const height = (isRestoring && restoreData.height) ? restoreData.height
    : (appId === 'music' ? '640px' : appId === 'settings' ? '540px' : '480px');

  win.style.top = top;
  win.style.left = left;
  win.style.width = width;
  win.style.height = height;

  if (isRestoring && typeof restoreData.zIndex === 'number') {
    win.style.zIndex = restoreData.zIndex;
    if (restoreData.zIndex > zIndexCounter) {
      zIndexCounter = restoreData.zIndex;
    }
  } else {
    win.style.zIndex = ++zIndexCounter;
  }

  if (isRestoring && restoreData.maximized) {
    win.classList.add('maximized');
    win.style.width = '100vw';
    win.style.height = 'calc(100vh - 46px)';
    win.style.top = '46px';
    win.style.left = '0';
    win.style.borderRadius = '0';
  }
  if (isRestoring && restoreData.minimized) {
    win.classList.add('minimized');
    win.style.display = 'none';
  }

  if (isRestoring) {
    if (restoreData.oldW) win.dataset.oldW = restoreData.oldW;
    if (restoreData.oldH) win.dataset.oldH = restoreData.oldH;
    if (restoreData.oldT) win.dataset.oldT = restoreData.oldT;
    if (restoreData.oldL) win.dataset.oldL = restoreData.oldL;
  }

  const totalInstances = instances.length + 1;
  const newInstNumber = getInstanceNumber(winId);
  const titleWithInstance = totalInstances > 1 ? `${app.title} · #${newInstNumber}` : app.title;

  let contentHTML = '';
  if (supportsTabs) {
    contentHTML = `
      <div class="window-tabs" role="tablist"></div>
      <div class="window-tab-panels"></div>
    `;
  } else {
    contentHTML = getAppContent(appId);
  }

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
      ${contentHTML}
    </div>
  `;

  win.addEventListener('mousedown', () => focusWindow(winId));
  document.getElementById('windows-container').appendChild(win);

  openWindows[winId] = { appId, win };

  if (!isRestoring) {
    win.style.animationDelay = '0ms';
    runWindowAnimation(win, 'opening', ANIM_OPEN_MS, () => {
      win.classList.remove('opening');
    });
  }

  if (supportsTabs) {
    const state = getWindowTabsState(win);
    if (isRestoring && restoreData.tabs && Array.isArray(restoreData.tabs.tabs) && restoreData.tabs.tabs.length > 0) {
      state.tabs = restoreData.tabs.tabs.map(t => ({
        id: t.id || generateTabId(),
        label: t.label || 'Tab',
        kind: t.kind || null
      }));
      state.counter = restoreData.tabs.counter || state.tabs.length;
      state.activeTabId = restoreData.tabs.activeTabId && state.tabs.some(t => t.id === restoreData.tabs.activeTabId)
        ? restoreData.tabs.activeTabId
        : state.tabs[0].id;
    } else {
      const firstTab = createTabObject(appId, win);
      state.tabs = [firstTab];
      state.activeTabId = firstTab.id;
    }

    renderWindowTabs(winId);
  } else {
    if (appId === 'nova') setupNovaAI(win);
    if (appId === 'settings') renderSettingsApp();
    if (appId === 'music') setupSpotifyApp(win);
  }

  setupWindowResize(win);

  if (!isRestoring) {
    focusWindow(winId);
  } else {
    win.classList.add('focused');
  }

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
      scheduleSaveSession();
    }
    function up() {
      document.removeEventListener(moveEvent, move);
      document.removeEventListener(endEvent, up);
      saveSessionState(true);
    }
    document.addEventListener(moveEvent, move, { passive: false });
    document.addEventListener(endEvent, up);
  }

  titlebar.addEventListener('mousedown', startDrag);
  titlebar.addEventListener('touchstart', startDrag, { passive: false });

  if (!isRestoring && totalInstances > 1) {
    showToast(
      `${app.title} · Instancia #${newInstNumber}`,
      `Abriendo nueva ventana de ${app.title}.`,
      'plus'
    );
  }

  if (!isRestoring) {
    saveSessionState(true);
  }
}

function focusWindow(winId) {
  if (!openWindows[winId]) return;

  activeWinId = winId;
  Object.values(openWindows).forEach(entry => {
    entry.win.classList.remove('focused');
  });

  const win = openWindows[winId].win;
  const wasMinimized = win.classList.contains('minimized');

  win.classList.add('focused');

  if (wasMinimized) {
    win.classList.remove('minimized');
    win.style.display = 'flex';

    if (!prefersReducedMotion()) {
      runWindowAnimation(win, 'restoring', ANIM_RESTORE_MS, () => {
        win.classList.remove('restoring');
      });
    }
  }

  if (zIndexCounter >= Z_INDEX_NORMALIZE_THRESHOLD) {
    normalizeZIndexes();
  }

  win.style.zIndex = ++zIndexCounter;

  if (parseInt(win.dataset.ws) === currentWorkspace) {
    win.style.display = 'flex';
  }

  updateTopBar(winId);

  if (windowManagerOpen) renderWindowManager();

  scheduleSaveSession();
}

function closeApp(winId) {
  const entry = openWindows[winId];
  if (!entry) return;

  if (pendingClose.has(winId)) return;
  pendingClose.add(winId);

  const win = entry.win;
  const appId = entry.appId;

  const finalize = () => {
    pendingClose.delete(winId);

    if (!openWindows[winId]) return;

    win.remove();
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

    saveSessionState(true);
  };

  if (prefersReducedMotion()) {
    finalize();
  } else {
    win.classList.remove('focused');
    runWindowAnimation(win, 'closing', ANIM_CLOSE_MS, finalize);
  }
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

    saveSessionState(true);
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

  saveSessionState(true);
}

function minimizeApp(winId) {
  const entry = openWindows[winId];
  if (!entry?.win) return;

  const win = entry.win;
  if (win.classList.contains('minimized')) return;

  const finalize = () => {
    if (!openWindows[winId]) return;

    win.classList.add('minimized');
    win.style.display = 'none';

    if (activeWinId === winId) {
      activeWinId = null;
      updateTopBar(null);
    }

    if (windowManagerOpen) renderWindowManager();

    saveSessionState(true);
  };

  if (prefersReducedMotion()) {
    finalize();
    return;
  }

  runWindowAnimation(win, 'minimizing', ANIM_MIN_MS, () => {
    win.classList.remove('minimizing');
    finalize();
  });
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

/* ================= SETUP TERMINAL (por PANEL) ================= */
function setupTerminalPanel(panel) {
  if (!panel) return;

  const history = panel.querySelector('.term-history');
  const input = panel.querySelector('.term-input');
  if (!history || !input) return;

  if (terminalPanelStates.has(panel)) return;
  terminalPanelStates.set(panel, { history: [] });

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

  appendLine('Nebula OS Terminal (WezTerm Emulator)');
  appendLine('Escribí "help" para ver comandos disponibles.');
  appendLine('');

  input.focus();
}

/* ================= SETUP SPOTIFY APP ================= */
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

  /* Auto-expandir carpeta al activar Designer */
  if (tabName === 'designer') {
    settingsState.designerExpanded = true;
  } else {
    /* Auto-colapsar carpeta al cambiar a otra sección */
    settingsState.designerExpanded = false;
  }

  saveSettingsState();
  renderSettingsApp();
}

/* ★ Nuevo: colapsar/expandir carpeta del Designer */
function toggleDesignerFolder() {
  settingsState.designerExpanded = !settingsState.designerExpanded;
  saveSettingsState();
  renderSettingsApp();
}

/* ★ Nuevo: cambiar sub-tab dentro del Designer (Estilos / Fondos) */
function setDesignerSubTab(subTab) {
  if (subTab !== 'styles' && subTab !== 'wallpapers') return;
  settingsState.designerSubTab = subTab;
  settingsState.activeSettingsTab = 'designer';
  settingsState.designerExpanded = true;
  saveSettingsState();
  renderSettingsApp();
}

function saveSettingsState() {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settingsState));
  } catch (e) {}
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
            <button type="button" data-nova-prompt="Añadí un widget de clima"><i data-lucide="cloud-sun"></i> Widget de Clima</button>
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
    const activeTab = settingsState.activeSettingsTab || 'system';
    const designerExpanded = settingsState.designerExpanded !== false;
    const designerSubTab = settingsState.designerSubTab || 'styles';

    /* Determinar qué contenido mostrar en el panel principal */
    let mainContent = '';
    if (activeTab === 'system') {
      mainContent = getSystemSettingsHTML();
    } else if (activeTab === 'gaming') {
      mainContent = getGamingSettingsHTML();
    } else if (activeTab === 'designer') {
      mainContent = getDesignerSettingsHTML();
    }

    return `
      <div class="settings-preview">
        <aside class="settings-nav">
          <div class="settings-nav-title"><i data-lucide="sliders"></i> Ajustes</div>

          <div class="settings-nav-item ${activeTab === 'system' ? 'active' : ''}" onclick="setSettingsTab('system')">
            <i data-lucide="monitor"></i> Sistema
          </div>

          <!-- ★ Carpeta Nebula Designer con sub-ítems -->
          <div class="settings-nav-folder ${activeTab === 'designer' ? 'active' : ''} ${designerExpanded ? 'expanded' : ''}">
            <div class="settings-nav-folder-header" onclick="setSettingsTab('designer')">
              <span class="settings-nav-folder-label">
                <i data-lucide="palette"></i> Nebula Designer
              </span>
              <button type="button" class="settings-nav-folder-toggle" onclick="event.stopPropagation(); toggleDesignerFolder();" aria-label="Expandir/colapsar carpeta">
                <i data-lucide="chevron-down" class="settings-nav-folder-chevron"></i>
              </button>
            </div>
            <div class="settings-nav-sub ${designerExpanded ? 'expanded' : ''}">
              <div class="settings-nav-subitem ${activeTab === 'designer' && designerSubTab === 'styles' ? 'active' : ''}" onclick="setDesignerSubTab('styles')">
                <i data-lucide="paintbrush"></i> Estilos
              </div>
              <div class="settings-nav-subitem ${activeTab === 'designer' && designerSubTab === 'wallpapers' ? 'active' : ''}" onclick="setDesignerSubTab('wallpapers')">
                <i data-lucide="image"></i> Fondos de Pantalla
              </div>
            </div>
          </div>

          <div class="settings-nav-item ${activeTab === 'gaming' ? 'active' : ''}" onclick="setSettingsTab('gaming')">
            <i data-lucide="gamepad-2"></i> Gaming & HUD
          </div>
        </aside>
        <section class="settings-main">
          ${mainContent}
        </section>
      </div>
    `;
  }

  if (id === 'browser') {
    return `<div class="firefox-preview"><img src="./assets/images/apps/mozilaFirefox/capturaFirefox.jpg" alt="Vista de Firefox"></div>`;
  }

  if (id === 'vscode') {
    return `<div class="vscode-preview"><img src="./assets/images/apps/visualStudio/capturaVisualStudio.png" alt="Captura de Visual Studio Code"></div>`;
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
        <img src="./assets/images/apps/steam/capturaSteam.png" alt="Vista de Steam">
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
            <img class="spot-hero-cover" src="./assets/images/apps/spotify/top50.jpg" alt="Playlist destacada">
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
              <img class="spot-card-img" src="./assets/images/apps/spotify/tapaAlbum3.jpg" alt="Callejeros">
              <div class="spot-card-info">
                <div class="spot-card-title">Rock Nacional</div>
                <div class="spot-card-sub">Callejeros · Prohibido</div>
              </div>
            </button>
            <button class="spot-card" type="button" data-track-index="3">
              <img class="spot-card-img" src="./assets/images/apps/spotify/top50.jpg" alt="Synthwave">
              <div class="spot-card-info">
                <div class="spot-card-title">Synthwave Mix</div>
                <div class="spot-card-sub">Hyper Sound · Night City</div>
              </div>
            </button>
            <button class="spot-card" type="button" data-track-index="1">
              <img class="spot-card-img" src="./assets/images/apps/spotify/tapaAlbum1.jpg" alt="Nirvana">
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

/* HTML de la sección de Widgets del Designer */
function getWidgetsGalleryHTML() {
  const hasGamingHub = desktopWidgets.some(w => w.type === 'gaming-hub');
  const weatherWidgets = desktopWidgets.filter(w => w.type === 'weather');
  const weatherCount = weatherWidgets.length;

  return `
    <div class="settings-section-label">Widgets de Escritorio</div>
    <div class="widgets-gallery-grid">

      <div class="widget-gallery-card ${hasGamingHub ? 'active' : ''}">
        <div class="widget-gallery-preview">
          <div class="widget-gallery-preview-inner">
            <div class="widget-gallery-preview-tile"></div>
            <div class="widget-gallery-preview-tile"></div>
            <div class="widget-gallery-preview-tile"></div>
            <div class="widget-gallery-preview-tile"></div>
            <div class="widget-gallery-preview-tile"></div>
            <div class="widget-gallery-preview-tile" style="grid-column: span 1;"></div>
          </div>
        </div>

        <div class="widget-gallery-info">
          <strong>${WIDGET_CATALOG['gaming-hub'].name}</strong>
          <small>${WIDGET_CATALOG['gaming-hub'].description}</small>
        </div>

        <div class="widget-gallery-action">
          <span class="widget-gallery-status">
            <span class="status-dot"></span>
            ${hasGamingHub ? 'Activo' : 'Inactivo'}
          </span>
          ${hasGamingHub
            ? `<button class="widget-gallery-btn danger" type="button" onclick="removeGamingHubWidget()"><i data-lucide="trash-2"></i> Quitar</button>`
            : `<button class="widget-gallery-btn" type="button" onclick="addGamingHubWidget()"><i data-lucide="plus"></i> Agregar</button>`
          }
        </div>
      </div>

      <div class="widget-gallery-card ${weatherCount > 0 ? 'active' : ''}">
        <div class="widget-gallery-preview">
          <div class="widget-gallery-preview-weather">
            <div class="wg-weather-icon"><i data-lucide="cloud-sun"></i></div>
            <div class="wg-weather-temp">27°</div>
            <div class="wg-weather-label">Parcialmente nublado</div>
            <div class="wg-weather-minmax">
              <span>H: 31°</span>
              <span>L: 21°</span>
            </div>
          </div>
        </div>

        <div class="widget-gallery-info">
          <strong>${WIDGET_CATALOG['weather'].name}</strong>
          <small>${WIDGET_CATALOG['weather'].description}</small>
          ${weatherCount > 0 ? `<small style="color: var(--accent); font-weight: 700; margin-top: 2px;">${weatherCount} activo${weatherCount === 1 ? '' : 's'}</small>` : ''}
        </div>

        <div class="widget-gallery-action">
          <span class="widget-gallery-status">
            <span class="status-dot"></span>
            ${weatherCount > 0 ? 'Activo' : 'Inactivo'}
          </span>
          <div style="display:flex; gap:6px;">
            <button class="widget-gallery-btn" type="button" onclick="addWeatherWidget()"><i data-lucide="plus"></i> Agregar</button>
            ${weatherCount > 0
              ? `<button class="widget-gallery-btn danger" type="button" onclick="removeAllWeatherWidgets()"><i data-lucide="trash-2"></i></button>`
              : ''
            }
          </div>
        </div>
      </div>

    </div>
  `;
}

/* ★ Sub-tab "Estilos" del Designer */
function getDesignerStylesHTML() {
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

      <div class="theme-preset-card ${designerState.activePreset === 'nord-arc' ? 'selected' : ''}" onclick="applyThemePreset('nord-arc')">
        <div class="preset-colors-row">
          <span class="preset-color-chip" style="background:#30B0C7;"></span>
          <span class="preset-color-chip" style="background:#5856D6;"></span>
          <span class="preset-color-chip" style="background:#AF52DE;"></span>
        </div>
        <strong>Nord Arc</strong>
        <small>Acento cyan con fondo neutro oscuro, estética limpia y sobria</small>
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

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong>Sombras de Ventanas (--shadow)</strong>
          <small>Intensidad de la sombra proyectada por ventanas y paneles</small>
        </div>
        <div class="designer-control-input">
          <input type="range" min="0" max="100" value="${designerState.shadowStrength ?? 55}" oninput="setLiveShadowStrength(this.value)">
          <span id="designer-shadow-val">${designerState.shadowStrength ?? 55}%</span>
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

    ${getWidgetsGalleryHTML()}
  `;
}

/* ★ Sub-tab "Fondos de Pantalla" del Designer */
function getDesignerWallpapersHTML() {
  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">NEBULA DESIGNER</div>
        <h2>Fondos de Pantalla</h2>
        <p>Elegí la escena de fondo para tu escritorio. No afectará a tus colores y ajustes de diseño actuales.</p>
      </div>
      <div class="settings-status"><span></span> Fondo Activo: ${WALLPAPERS[currentWallpaperIndex]?.name || 'Nebula'}</div>
    </div>

    <div class="settings-section-label">Galería de Fondos Disponibles</div>
    <div class="designer-presets-grid">
      <div class="theme-preset-card ${currentWallpaperIndex === 0 ? 'selected' : ''}" onclick="applyWallpaper(0)">
        <div style="height:65px; border-radius:8px; background:url('./assets/images/fondosDePantalla/fondoPrincipal.jpg') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
        <strong>Fondo Nebula</strong>
        <small>Violeta espacial profundo y nebulosas estelares</small>
      </div>
      <div class="theme-preset-card ${currentWallpaperIndex === 1 ? 'selected' : ''}" onclick="applyWallpaper(1)">
        <div style="height:65px; border-radius:8px; background:url('./assets/images/fondosDePantalla/fondo2.jpg') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
        <strong>Fondo Aurora</strong>
        <small>Azul ártico cósmico y resplandor polar</small>
      </div>
      <div class="theme-preset-card ${currentWallpaperIndex === 2 ? 'selected' : ''}" onclick="applyWallpaper(2)">
        <div style="height:65px; border-radius:8px; background:url('./assets/images/fondosDePantalla/fondo3.jpg') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
        <strong>Fondo Solar</strong>
        <small>Dorado estelar cálido y destellos solares</small>
      </div>
    </div>
  `;
}

/* ★ Router del contenido del Designer según sub-tab */
function getDesignerSettingsHTML() {
  const subTab = settingsState.designerSubTab || 'styles';
  if (subTab === 'wallpapers') {
    return getDesignerWallpapersHTML();
  }
  return getDesignerStylesHTML();
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

/* =====================================================
   ★ LAUNCHER OVERLAY — Búsqueda global
===================================================== */
const launcherOverlay = document.getElementById('launcher-overlay');
const launcherInput = document.getElementById('launcher-input');
const launcherResults = document.getElementById('launcher-results');

function toggleLauncher() {
  if (!launcherOverlay) return;
  if (launcherOverlay.classList.contains('open')) {
    closeLauncher();
  } else {
    openLauncher();
  }
}

function openLauncher() {
  if (!launcherOverlay) return;
  launcherOverlay.classList.add('open');
  launcherState.query = '';
  launcherState.selectedIndex = 0;
  if (launcherInput) {
    launcherInput.value = '';
    renderLauncherResults('');
    setTimeout(() => launcherInput.focus(), 50);
  }
  refreshIcons();
}

function closeLauncher() {
  if (!launcherOverlay) return;
  launcherOverlay.classList.remove('open');
  launcherState.query = '';
  launcherState.results = [];
  launcherState.selectedIndex = 0;
}

launcherOverlay?.addEventListener('mousedown', e => {
  if (e.target === launcherOverlay) closeLauncher();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && launcherOverlay?.classList.contains('open')) closeLauncher();
});

launcherInput?.addEventListener('input', e => {
  launcherState.query = e.target.value;
  launcherState.selectedIndex = 0;
  renderLauncherResults(e.target.value);
});

launcherInput?.addEventListener('keydown', handleLauncherKeydown);

function buildLauncherActions() {
  return [
    { id: 'action-gamemode', title: 'Activar / Desactivar Modo Juego', sub: 'Boost de CPU/GPU, libera RAM y activa HUD', icon: 'gamepad-2', category: 'Acción', keywords: ['modo juego', 'game mode', 'gamemode', 'boost', 'gamer'], run: () => toggleGameMode() },
    { id: 'action-hud', title: 'Alternar Gaming HUD', sub: 'Overlay con telemetría de hardware (Alt+Z)', icon: 'activity', category: 'Acción', keywords: ['hud', 'overlay', 'telemetria', 'gaming', 'alt z'], run: () => toggleGamerOverlay() },
    { id: 'action-wallpaper-next', title: 'Siguiente fondo de pantalla', sub: 'Rota al siguiente wallpaper disponible', icon: 'image', category: 'Acción', keywords: ['wallpaper', 'fondo', 'siguiente', 'rotar'], run: () => applyWallpaper((currentWallpaperIndex + 1) % WALLPAPERS.length) },
    { id: 'action-ram-boost', title: 'Optimizar RAM', sub: 'Libera memoria y limpia cache', icon: 'sparkles', category: 'Acción', keywords: ['optimizar', 'ram', 'limpiar', 'memoria', 'boost'], run: () => simulateRamBoost() },
    { id: 'action-weather-widget', title: 'Añadir Widget de Clima', sub: 'Widget meteorológico con datos reales (Open-Meteo)', icon: 'cloud-sun', category: 'Acción', keywords: ['clima', 'weather', 'widget', 'tiempo', 'temperatura'], run: () => addWeatherWidget() },
    { id: 'action-clear-widgets', title: 'Limpiar widgets del escritorio', sub: 'Remueve todos los widgets flotantes', icon: 'trash-2', category: 'Acción', keywords: ['limpiar', 'widgets', 'escritorio', 'borrar'], run: () => clearDesktopWidgets() },
    { id: 'action-close-all', title: 'Cerrar todas las ventanas', sub: 'Cierra todas las apps abiertas', icon: 'x-circle', category: 'Acción', keywords: ['cerrar', 'close', 'todas', 'ventanas', 'apps'], run: () => { Object.keys(openWindows).forEach(id => closeApp(id)); showToast('Ventanas cerradas', 'Se cerraron todas las apps abiertas.', 'x-circle'); } },
    { id: 'action-profile-gamer', title: 'Perfil: Gamer', sub: 'Aplica tema Cyberpunk + Game Mode + telemetría', icon: 'gamepad-2', category: 'Perfil', keywords: ['perfil', 'gamer', 'profile'], run: () => switchProfile('gamer') },
    { id: 'action-profile-streamer', title: 'Perfil: Streamer', sub: 'Aplica tema Synthwave + widget multimedia', icon: 'radio', category: 'Perfil', keywords: ['perfil', 'streamer', 'profile'], run: () => switchProfile('streamer') },
    { id: 'action-profile-studio', title: 'Perfil: Estudio', sub: 'Aplica tema Catppuccin + workspace 1', icon: 'terminal', category: 'Perfil', keywords: ['perfil', 'estudio', 'studio', 'dev'], run: () => switchProfile('studio') },
    { id: 'action-theme-cyberpunk', title: 'Tema: Cyberpunk Neón', sub: 'Paleta cyan/rosa con alto contraste', icon: 'palette', category: 'Tema', keywords: ['tema', 'cyberpunk', 'neon', 'theme'], run: () => applyThemePreset('cyberpunk') },
    { id: 'action-theme-catppuccin', title: 'Tema: Minimal Catppuccin', sub: 'Paleta pastel suave y relajante', icon: 'palette', category: 'Tema', keywords: ['tema', 'catppuccin', 'minimal', 'theme'], run: () => applyThemePreset('catppuccin') },
    { id: 'action-theme-synthwave', title: 'Tema: Retro Synthwave', sub: 'Magenta brillante, estética 80s', icon: 'palette', category: 'Tema', keywords: ['tema', 'synthwave', 'retro', 'theme'], run: () => applyThemePreset('synthwave') },
    { id: 'action-theme-stealth', title: 'Tema: Dark Stealth', sub: 'Carbón táctico, esmeralda de bajo consumo', icon: 'palette', category: 'Tema', keywords: ['tema', 'stealth', 'oscuro', 'dark', 'theme'], run: () => applyThemePreset('stealth') },
    { id: 'action-theme-nord-arc', title: 'Tema: Nord Arc', sub: 'Acento cyan con fondo neutro oscuro', icon: 'palette', category: 'Tema', keywords: ['tema', 'nord', 'arc', 'theme', 'cyan'], run: () => applyThemePreset('nord-arc') },
    { id: 'action-workspace-1', title: 'Ir al Space 1', sub: 'Cambiar al primer escritorio virtual', icon: 'layout-grid', category: 'Space', keywords: ['space', 'workspace', 'escritorio', '1'], run: () => switchWorkspace(1) },
    { id: 'action-workspace-2', title: 'Ir al Space 2', sub: 'Cambiar al segundo escritorio virtual', icon: 'layout-grid', category: 'Space', keywords: ['space', 'workspace', 'escritorio', '2'], run: () => switchWorkspace(2) },
    { id: 'action-workspace-3', title: 'Ir al Space 3', sub: 'Cambiar al tercer escritorio virtual', icon: 'layout-grid', category: 'Space', keywords: ['space', 'workspace', 'escritorio', '3'], run: () => switchWorkspace(3) },
    { id: 'action-workspace-4', title: 'Ir al Space 4', sub: 'Cambiar al cuarto escritorio virtual', icon: 'layout-grid', category: 'Space', keywords: ['space', 'workspace', 'escritorio', '4'], run: () => switchWorkspace(4) },
    { id: 'action-workspace-5', title: 'Ir al Space 5', sub: 'Cambiar al quinto escritorio virtual', icon: 'layout-grid', category: 'Space', keywords: ['space', 'workspace', 'escritorio', '5'], run: () => switchWorkspace(5) },
    { id: 'action-open-wm', title: 'Abrir Administrador de Escritorios', sub: 'Vista general de spaces y ventanas', icon: 'layout-grid', category: 'Acción', keywords: ['wm', 'window manager', 'administrador', 'escritorios'], run: () => openWindowManager() },
    { id: 'action-open-settings-designer', title: 'Abrir Nebula Designer', sub: 'Personalizar colores, blur y bordes', icon: 'palette', category: 'Acción', keywords: ['designer', 'ajustes', 'settings', 'personalizar'], run: () => openSettingsTab('designer') }
  ];
}

function buildLauncherCommands() {
  return [
    { id: 'cmd-help', title: '> help', sub: 'Ver todos los comandos disponibles', icon: 'help-circle', category: 'Comando', keywords: ['help', 'ayuda', 'comandos'], run: () => showToast('Comandos disponibles', '> gamemode on/off · > wallpaper 0-2 · > workspace 1-5 · > theme <nombre> · > optimize · > close-all', 'terminal') },
    { id: 'cmd-optimize', title: '> optimize', sub: 'Libera RAM y limpia cache', icon: 'sparkles', category: 'Comando', keywords: ['optimize', 'optimizar', 'ram'], run: () => simulateRamBoost() },
    { id: 'cmd-close-all', title: '> close-all', sub: 'Cierra todas las ventanas abiertas', icon: 'x-circle', category: 'Comando', keywords: ['close-all', 'cerrar todo'], run: () => { Object.keys(openWindows).forEach(id => closeApp(id)); showToast('Ventanas cerradas', 'Todas las apps fueron cerradas.', 'x-circle'); } },
    { id: 'cmd-gamemode-on', title: '> gamemode on', sub: 'Activa Modo Juego', icon: 'gamepad-2', category: 'Comando', keywords: ['gamemode on', 'modo juego on'], run: () => toggleGameMode(true) },
    { id: 'cmd-gamemode-off', title: '> gamemode off', sub: 'Desactiva Modo Juego', icon: 'gamepad-2', category: 'Comando', keywords: ['gamemode off', 'modo juego off'], run: () => toggleGameMode(false) },
    { id: 'cmd-wallpaper-0', title: '> wallpaper 0', sub: 'Fondo Nebula', icon: 'image', category: 'Comando', keywords: ['wallpaper 0', 'fondo nebula'], run: () => applyWallpaper(0) },
    { id: 'cmd-wallpaper-1', title: '> wallpaper 1', sub: 'Fondo Aurora', icon: 'image', category: 'Comando', keywords: ['wallpaper 1', 'fondo aurora'], run: () => applyWallpaper(1) },
    { id: 'cmd-wallpaper-2', title: '> wallpaper 2', sub: 'Fondo Solar', icon: 'image', category: 'Comando', keywords: ['wallpaper 2', 'fondo solar'], run: () => applyWallpaper(2) },
    { id: 'cmd-workspace-1', title: '> workspace 1', sub: 'Ir al Space 1', icon: 'layout-grid', category: 'Comando', keywords: ['workspace 1', 'space 1'], run: () => switchWorkspace(1) },
    { id: 'cmd-workspace-2', title: '> workspace 2', sub: 'Ir al Space 2', icon: 'layout-grid', category: 'Comando', keywords: ['workspace 2', 'space 2'], run: () => switchWorkspace(2) },
    { id: 'cmd-workspace-3', title: '> workspace 3', sub: 'Ir al Space 3', icon: 'layout-grid', category: 'Comando', keywords: ['workspace 3', 'space 3'], run: () => switchWorkspace(3) },
    { id: 'cmd-workspace-4', title: '> workspace 4', sub: 'Ir al Space 4', icon: 'layout-grid', category: 'Comando', keywords: ['workspace 4', 'space 4'], run: () => switchWorkspace(4) },
    { id: 'cmd-workspace-5', title: '> workspace 5', sub: 'Ir al Space 5', icon: 'layout-grid', category: 'Comando', keywords: ['workspace 5', 'space 5'], run: () => switchWorkspace(5) },
    { id: 'cmd-theme-cyberpunk', title: '> theme cyberpunk', sub: 'Aplicar tema Cyberpunk Neón', icon: 'palette', category: 'Comando', keywords: ['theme cyberpunk', 'tema cyberpunk'], run: () => applyThemePreset('cyberpunk') },
    { id: 'cmd-theme-catppuccin', title: '> theme catppuccin', sub: 'Aplicar tema Minimal Catppuccin', icon: 'palette', category: 'Comando', keywords: ['theme catppuccin', 'tema catppuccin'], run: () => applyThemePreset('catppuccin') },
    { id: 'cmd-theme-synthwave', title: '> theme synthwave', sub: 'Aplicar tema Retro Synthwave', icon: 'palette', category: 'Comando', keywords: ['theme synthwave', 'tema synthwave'], run: () => applyThemePreset('synthwave') },
    { id: 'cmd-theme-stealth', title: '> theme stealth', sub: 'Aplicar tema Dark Stealth', icon: 'palette', category: 'Comando', keywords: ['theme stealth', 'tema stealth'], run: () => applyThemePreset('stealth') },
    { id: 'cmd-theme-nord-arc', title: '> theme nord-arc', sub: 'Aplicar tema Nord Arc', icon: 'palette', category: 'Comando', keywords: ['theme nord', 'tema nord', 'nord arc'], run: () => applyThemePreset('nord-arc') }
  ];
}

function searchCalendarNotes(query) {
  const q = query.toLowerCase();
  const results = [];

  Object.keys(calendarState.notes).forEach(key => {
    const notes = calendarState.notes[key];
    if (!Array.isArray(notes)) return;
    notes.forEach((noteText, idx) => {
      if (noteText.toLowerCase().includes(q)) {
        const [y, m, d] = key.split('-').map(Number);
        results.push({
          id: 'note-' + key + '-' + idx,
          title: noteText,
          sub: `Nota del ${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${y}`,
          icon: 'notebook-pen',
          category: 'Nota',
          keywords: [noteText],
          run: () => {
            const cc = document.getElementById('control-center');
            if (cc && cc.classList.contains('hidden')) {
              cc.classList.remove('hidden');
            }
            calendarState.selectedDate = key;
            const [yy, mm, dd] = key.split('-').map(Number);
            selectCalendarDate(new Date(yy, mm - 1, dd));
            renderNotesList();
            showToast('Nota encontrada', `Del ${String(dd).padStart(2,'0')}/${String(mm).padStart(2,'0')}/${yy}`, 'notebook-pen');
          }
        });
      }
    });
  });

  return results;
}

function searchAppsAndActions(query) {
  const q = query.toLowerCase().trim();
  const results = [];

  Object.keys(APPS).forEach(id => {
    const app = APPS[id];
    const haystack = (app.title + ' ' + app.sub + ' ' + id).toLowerCase();
    if (!q || haystack.includes(q)) {
      results.push({
        id: 'app-' + id,
        title: app.title,
        sub: app.sub,
        icon: app.icon,
        image: app.image,
        tileClass: app.tileClass,
        category: 'App',
        keywords: [app.title, app.sub, id],
        run: () => openApp(id)
      });
    }
  });

  if (q) {
    const actions = buildLauncherActions();
    actions.forEach(action => {
      const haystack = (action.title + ' ' + action.sub + ' ' + (action.keywords || []).join(' ')).toLowerCase();
      if (haystack.includes(q)) {
        results.push({
          id: action.id,
          title: action.title,
          sub: action.sub,
          icon: action.icon,
          category: action.category,
          keywords: action.keywords || [],
          run: action.run
        });
      }
    });
  }

  return results;
}

function renderLauncherResults(rawQuery) {
  if (!launcherResults) return;
  launcherResults.innerHTML = '';
  launcherState.results = [];

  const raw = (rawQuery || '').trim();
  let mode = 'default';
  let query = raw;

  if (raw.startsWith('>')) {
    mode = 'command';
    query = raw.slice(1).trim();
  } else if (raw.startsWith('?')) {
    mode = 'files';
    query = raw.slice(1).trim();
  } else if (raw.startsWith('@')) {
    mode = 'notes';
    query = raw.slice(1).trim();
  }

  let items = [];

  if (mode === 'command') {
    const commands = buildLauncherCommands();
    if (!query) {
      items = commands;
    } else {
      items = commands.filter(c => {
        const haystack = (c.title + ' ' + c.sub + ' ' + (c.keywords || []).join(' ')).toLowerCase();
        return haystack.includes(query.toLowerCase());
      });
    }
  } else if (mode === 'files') {
    if (query) items = searchFilesInSystem(query).slice(0, 30);
  } else if (mode === 'notes') {
    if (query) items = searchCalendarNotes(query).slice(0, 20);
  } else {
    items = searchAppsAndActions(query);
    const catWeight = { 'App': 0, 'Acción': 1, 'Perfil': 2, 'Tema': 3, 'Space': 4 };
    items.sort((a, b) => {
      const wa = catWeight[a.category] ?? 99;
      const wb = catWeight[b.category] ?? 99;
      if (wa !== wb) return wa - wb;
      return a.title.localeCompare(b.title);
    });
  }

  launcherState.results = items;
  if (launcherState.selectedIndex >= items.length) {
    launcherState.selectedIndex = Math.max(0, items.length - 1);
  }

  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'launcher-empty';
    if (mode === 'files' && !query) {
      empty.innerHTML = `<strong>Buscá en tu sistema</strong>Escribí algo después de <code>?</code> para buscar archivos, mods, música o fondos.`;
    } else if (mode === 'notes' && !query) {
      empty.innerHTML = `<strong>Buscá en tus notas</strong>Escribí algo después de <code>@</code> para buscar en los recordatorios del calendario.`;
    } else if (mode === 'command' && !query) {
      empty.innerHTML = `<strong>Comandos disponibles</strong>Escribí <code>&gt; help</code> para ver el listado completo.`;
    } else {
      empty.innerHTML = `<strong>Sin resultados</strong>No encontramos nada que coincida con "<em>${escapeHtml(raw)}</em>".`;
    }
    launcherResults.appendChild(empty);
    launcherResults.appendChild(buildLauncherHint(mode));
  } else {
    items.forEach((item, index) => {
      const res = document.createElement('div');
      res.className = 'result' + (index === launcherState.selectedIndex ? ' selected' : '');
      res.dataset.resultIndex = String(index);

      const iconHTML = item.image
        ? `<div class="app-tile ${item.tileClass || ''}"><img src="${item.image}" alt="${escapeHtml(item.title)}" class="app-tile-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><i data-lucide="${item.icon}" style="display:none;"></i></div>`
        : `<div class="app-tile ${item.tileClass || ''}" style="background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.12);"><i data-lucide="${item.icon}"></i></div>`;

      res.innerHTML = `
        ${iconHTML}
        <div class="meta">
          <div class="title">${escapeHtml(item.title)}</div>
          <div class="sub">${escapeHtml(item.sub)}</div>
        </div>
      `;

      res.addEventListener('click', (e) => {
        e.stopPropagation();
        launcherState.selectedIndex = index;
        executeLauncherItem(item);
      });

      res.addEventListener('mouseenter', () => {
        launcherState.selectedIndex = index;
        updateLauncherSelection();
      });

      launcherResults.appendChild(res);
    });

    launcherResults.appendChild(buildLauncherHint(mode));
  }

  refreshIcons();

  const selectedEl = launcherResults.querySelector(`.result[data-result-index="${launcherState.selectedIndex}"]`);
  if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
}

function buildLauncherHint(mode) {
  const hint = document.createElement('div');
  hint.className = 'launcher-hint';
  hint.innerHTML = `
    <span class="launcher-hint-item${mode === 'command' ? ' active' : ''}"><kbd>&gt;</kbd><span class="hint-label">Comandos</span></span>
    <span class="launcher-hint-item${mode === 'files' ? ' active' : ''}"><kbd>?</kbd><span class="hint-label">Archivos</span></span>
    <span class="launcher-hint-item${mode === 'notes' ? ' active' : ''}"><kbd>@</kbd><span class="hint-label">Notas</span></span>
  `;
  return hint;
}

function updateLauncherSelection() {
  if (!launcherResults) return;
  launcherResults.querySelectorAll('.result').forEach(el => {
    const idx = parseInt(el.dataset.resultIndex, 10);
    el.classList.toggle('selected', idx === launcherState.selectedIndex);
  });
  const selectedEl = launcherResults.querySelector(`.result[data-result-index="${launcherState.selectedIndex}"]`);
  if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
}

function executeLauncherItem(item) {
  if (!item || typeof item.run !== 'function') return;
  closeLauncher();
  setTimeout(() => {
    try { item.run(); } catch (e) {}
  }, 80);
}

function handleLauncherKeydown(e) {
  if (!launcherState.results || launcherState.results.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    launcherState.selectedIndex = (launcherState.selectedIndex + 1) % launcherState.results.length;
    updateLauncherSelection();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    launcherState.selectedIndex = (launcherState.selectedIndex - 1 + launcherState.results.length) % launcherState.results.length;
    updateLauncherSelection();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const item = launcherState.results[launcherState.selectedIndex];
    if (item) executeLauncherItem(item);
  }
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
    if (e.target.closest('.fs-rename-modal')) return;
    const tag = e.target?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

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

/* =====================================================
   ★ GAMING HUB WIDGET — Lógica
===================================================== */

function simulatePing() {
  const last = pingHistory[pingHistory.length - 1] || 23;
  let next = last + (Math.random() - 0.5) * 6;
  next = Math.max(8, Math.min(120, Math.round(next)));
  pingHistory.push(next);
  if (pingHistory.length > 10) pingHistory.shift();
  return next;
}

function renderGamingHubWidgetHTML() {
  const fps = systemMetrics.fps;
  const gpu = systemMetrics.gpu;
  const cpu = systemMetrics.cpu;
  const vram = systemMetrics.vram;
  const gpuTemp = Math.round(48 + systemMetrics.gpu * 0.15);
  const cpuTemp = Math.round(35 + systemMetrics.cpu * 0.35);
  const ping = pingHistory[pingHistory.length - 1] || 23;

  const fpsClass = fps >= 120 ? 'good' : fps >= 60 ? 'warn' : 'bad';
  const gpuTempClass = gpuTemp <= 65 ? 'good' : gpuTemp <= 80 ? 'warn' : 'bad';
  const cpuTempClass = cpuTemp <= 60 ? 'good' : cpuTemp <= 75 ? 'warn' : 'bad';
  const pingClass = ping <= 30 ? 'good' : ping <= 70 ? 'warn' : 'bad';

  const fpsBarPct = Math.min(100, (fps / 144) * 100);
  const gpuBarPct = Math.min(100, gpu);
  const cpuBarPct = Math.min(100, cpu);
  const vramPct = Math.min(100, (vram / 16) * 100);

  const sparkBars = pingHistory.map(p => {
    const h = Math.min(100, (p / 120) * 100);
    const cls = p <= 30 ? '' : p <= 70 ? 'high' : 'critical';
    return `<span class="spark-bar ${cls}" style="height:${Math.max(8, h)}%;"></span>`;
  }).join('');

  return `
    <div class="gaming-hub-grid">
      <div class="gaming-hub-tile ${fpsClass}">
        <span class="tile-icon"><i data-lucide="gauge"></i></span>
        <span class="gaming-hub-tile-value" id="gh-fps">${fps}</span>
        <span class="gaming-hub-tile-label">FPS</span>
        <div class="gaming-hub-tile-bar">
          <span id="gh-fps-bar" style="width:${fpsBarPct}%;"></span>
        </div>
      </div>

      <div class="gaming-hub-tile ${gpuTempClass}">
        <span class="tile-icon"><i data-lucide="cpu"></i></span>
        <span class="gaming-hub-tile-value" id="gh-gpu-temp">${gpuTemp}°</span>
        <span class="gaming-hub-tile-label">GPU TEMP</span>
        <div class="gaming-hub-tile-bar">
          <span id="gh-gpu-bar" style="width:${gpuBarPct}%;"></span>
        </div>
      </div>

      <div class="gaming-hub-tile ${cpuTempClass}">
        <span class="tile-icon"><i data-lucide="hard-drive"></i></span>
        <span class="gaming-hub-tile-value" id="gh-cpu-temp">${cpuTemp}°</span>
        <span class="gaming-hub-tile-label">CPU TEMP</span>
        <div class="gaming-hub-tile-bar">
          <span id="gh-cpu-bar" style="width:${cpuBarPct}%;"></span>
        </div>
      </div>

      <div class="gaming-hub-tile">
        <span class="tile-icon"><i data-lucide="memory-stick"></i></span>
        <span class="gaming-hub-tile-value" id="gh-vram">${vram.toFixed(1)}</span>
        <span class="gaming-hub-tile-label">VRAM GB</span>
        <div class="gaming-hub-tile-bar">
          <span id="gh-vram-bar" style="width:${vramPct}%;"></span>
        </div>
      </div>

      <div class="gaming-hub-tile ${pingClass}" style="grid-column: span 2;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span class="tile-icon"><i data-lucide="wifi"></i></span>
          <span class="gaming-hub-tile-value" id="gh-ping">${ping}<span class="gaming-hub-tile-unit"> ms</span></span>
        </div>
        <span class="gaming-hub-tile-label">LATENCIA DE RED</span>
        <div class="gaming-hub-ping-spark" id="gh-ping-spark">
          ${sparkBars}
        </div>
      </div>
    </div>

    <div class="gaming-hub-footer">
      <span class="gaming-hub-footer-label ${gameModeActive ? 'active' : ''}" id="gh-gamemode-label">
        <i data-lucide="gamepad-2"></i> GAME MODE
      </span>
      <button class="quick-switch ${gameModeActive ? 'active' : ''}" onclick="toggleGameMode()" type="button" aria-label="Toggle Game Mode" style="padding:0; border:0; background:transparent;">
        <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
      </button>
    </div>
  `;
}

function updateGamingHubWidget() {
  const widget = desktopWidgets.find(w => w.type === 'gaming-hub');
  if (!widget) return;
  const el = document.getElementById(widget.id);
  if (!el) return;

  const fps = systemMetrics.fps;
  const gpu = systemMetrics.gpu;
  const cpu = systemMetrics.cpu;
  const vram = systemMetrics.vram;
  const gpuTemp = Math.round(48 + systemMetrics.gpu * 0.15);
  const cpuTemp = Math.round(35 + systemMetrics.cpu * 0.35);
  const ping = pingHistory[pingHistory.length - 1] || 23;

  const fpsEl = el.querySelector('#gh-fps');
  const gpuTempEl = el.querySelector('#gh-gpu-temp');
  const cpuTempEl = el.querySelector('#gh-cpu-temp');
  const vramEl = el.querySelector('#gh-vram');
  const pingEl = el.querySelector('#gh-ping');
  const fpsBar = el.querySelector('#gh-fps-bar');
  const gpuBar = el.querySelector('#gh-gpu-bar');
  const cpuBar = el.querySelector('#gh-cpu-bar');
  const vramBar = el.querySelector('#gh-vram-bar');
  const pingSpark = el.querySelector('#gh-ping-spark');
  const gmLabel = el.querySelector('#gh-gamemode-label');
  const gmSwitch = el.querySelector('.gaming-hub-footer .quick-switch');

  if (fpsEl) fpsEl.textContent = String(fps);
  if (gpuTempEl) gpuTempEl.textContent = `${gpuTemp}°`;
  if (cpuTempEl) cpuTempEl.textContent = `${cpuTemp}°`;
  if (vramEl) vramEl.textContent = vram.toFixed(1);
  if (pingEl) pingEl.innerHTML = `${ping}<span class="gaming-hub-tile-unit"> ms</span>`;
  if (fpsBar) fpsBar.style.width = `${Math.min(100, (fps / 144) * 100)}%`;
  if (gpuBar) gpuBar.style.width = `${Math.min(100, gpu)}%`;
  if (cpuBar) cpuBar.style.width = `${Math.min(100, cpu)}%`;
  if (vramBar) vramBar.style.width = `${Math.min(100, (vram / 16) * 100)}%`;

  const fpsTile = fpsEl?.closest('.gaming-hub-tile');
  if (fpsTile) {
    fpsTile.classList.remove('good', 'warn', 'bad');
    fpsTile.classList.add(fps >= 120 ? 'good' : fps >= 60 ? 'warn' : 'bad');
  }
  const gpuTile = gpuTempEl?.closest('.gaming-hub-tile');
  if (gpuTile) {
    gpuTile.classList.remove('good', 'warn', 'bad');
    gpuTile.classList.add(gpuTemp <= 65 ? 'good' : gpuTemp <= 80 ? 'warn' : 'bad');
  }
  const cpuTile = cpuTempEl?.closest('.gaming-hub-tile');
  if (cpuTile) {
    cpuTile.classList.remove('good', 'warn', 'bad');
    cpuTile.classList.add(cpuTemp <= 60 ? 'good' : cpuTemp <= 75 ? 'warn' : 'bad');
  }
  const pingTile = pingEl?.closest('.gaming-hub-tile');
  if (pingTile) {
    pingTile.classList.remove('good', 'warn', 'bad');
    pingTile.classList.add(ping <= 30 ? 'good' : ping <= 70 ? 'warn' : 'bad');
  }

  if (pingSpark) {
    const bars = pingHistory.map(p => {
      const h = Math.min(100, (p / 120) * 100);
      const cls = p <= 30 ? '' : p <= 70 ? 'high' : 'critical';
      return `<span class="spark-bar ${cls}" style="height:${Math.max(8, h)}%;"></span>`;
    }).join('');
    pingSpark.innerHTML = bars;
  }

  if (gmLabel) gmLabel.classList.toggle('active', gameModeActive);
  if (gmSwitch) gmSwitch.classList.toggle('active', gameModeActive);

  refreshIcons();
}