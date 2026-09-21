/* ================= CONFIGURACIÓN DE APPS & ICONOS ================= */
const APPS = {
  files:    { title: 'Archivos', sub: 'Gestor inteligente de archivos', icon: 'folder', image: './assets/images/iconos/archivos.png', tileClass: 'app-tile-files', accentColor: '#3a86ff' },
  terminal: { title: 'Terminal', sub: 'WezTerm Emulator', icon: 'terminal', image: './assets/images/iconos/terminal.png', tileClass: 'app-tile-terminal', accentColor: '#38bdf8' },
  browser:  { title: 'Firefox', sub: 'Navegador Web', icon: 'globe', image: './assets/images/iconos/firefox.png', tileClass: 'app-tile-browser', accentColor: '#f59e0b' },
  music:    { title: 'Spotify', sub: 'Reproductor de Música', icon: 'music', image: './assets/images/iconos/spotify.png', tileClass: 'app-tile-music', accentColor: '#1ed760' },
  games:    { title: 'Steam', sub: 'Librería de Juegos', icon: 'gamepad-2', image: './assets/images/iconos/steam.png', tileClass: 'app-tile-games', accentColor: '#7c3aed' },
  vscode:   { title: 'VS Code', sub: 'Editor de Código', icon: 'code-2', image: './assets/images/iconos/visualStudioCode.png', tileClass: 'app-tile-vscode', accentColor: '#0284c7' },
  settings: { title: 'Ajustes', sub: 'Panel de Control & Designer', icon: 'sliders', image: './assets/images/iconos/ajustes.png', tileClass: 'app-tile-settings', accentColor: '#94a3b8' },
  nova:     { title: 'Nova AI', sub: 'Asistente Gamer & Tweaker', icon: 'sparkles', image: './assets/images/logosSO/novaLogo.png', tileClass: 'app-tile-nova', accentColor: '#c026d3' },
  store:    { title: 'Nebula Store', sub: 'Tienda de Personalización', icon: 'shopping-cart', image: null, tileClass: 'app-tile-store', accentColor: '#f59e0b' },
  vault:    { title: 'Nebula Vault', sub: 'Gestor de Contraseñas Seguro', icon: 'key-round', image: null, tileClass: 'app-tile-vault', accentColor: '#a855f7' },
  activity: { title: 'Centro de Actividad', sub: 'Historial y gestión de eventos del sistema', icon: 'list-checks', image: null, tileClass: 'app-tile-activity', accentColor: '#60a5fa' },
  taskmgr:  { title: 'Administrador de Tareas', sub: 'Monitor de procesos y recursos', icon: 'cpu', image: null, tileClass: 'app-tile-taskmgr', accentColor: '#3a86ff' }
};

const DOCK_APPS = ['browser', 'terminal', 'nova', 'files', 'vscode', 'music', 'games', 'store', 'settings'];

const TOTAL_WORKSPACES = 5;

const TABBED_APPS = new Set(['terminal', 'files']);

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
  },
  'system-monitor-pro': {
    id: 'system-monitor-pro',
    name: 'System Monitor Pro',
    description: 'Monitor avanzado de CPU, RAM, disco y red con gráficos en tiempo real.',
    icon: 'activity',
    type: 'system-monitor-pro',
    available: false
  },
  'music-visualizer': {
    id: 'music-visualizer',
    name: 'Music Visualizer',
    description: 'Visualizador de audio en tiempo real con barras de espectro y efectos de partículas.',
    icon: 'audio-waveform',
    type: 'music-visualizer',
    available: false
  }
};

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

const WEATHER_FETCH_INTERVAL_MS = 15 * 60 * 1000;
const WEATHER_CACHE_STALE_MS = 15 * 60 * 1000;

const weatherCache = {};
const weatherWidgetTimers = new WeakMap();

const WALLPAPERS = [
  { file: 'fondoPrincipal.jpg', name: 'Nebula', accent: '#b4befe', text: '#cdd6f4', sub: '#bac2de', green: '#a6e3a1', panel: 'rgba(18,21,33,0.72)' },
  { file: 'fondo2.jpg', name: 'Aurora', accent: '#89dceb', text: '#d9f4ff', sub: '#a9c6d3', green: '#a6e3a1', panel: 'rgba(11,31,39,0.75)' },
  { file: 'fondo3.jpg', name: 'Solar', accent: '#f9c784', text: '#fff1dc', sub: '#d7bfa4', green: '#b8e986', panel: 'rgba(43,25,20,0.75)' }
];

const STORE_WALLPAPERS = [
  { id: 'cyber-city', name: 'Cyber City', file: 'cyber-city.jpg', accent: '#00ffcc', text: '#e0fff5', sub: '#7ab8a8', green: '#00ff88', panel: 'rgba(10, 14, 22, 0.88)' },
  { id: 'deep-space', name: 'Deep Space', file: 'deep-space.jpg', accent: '#8b5cf6', text: '#ede9fe', sub: '#a78bfa', green: '#34d399', panel: 'rgba(20, 15, 40, 0.88)' }
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

const STORE_THEMES = {
  'sunset-vibes': {
    name: 'Sunset Vibes',
    accent: '#ff6b6b',
    accentGlow: 'rgba(255, 107, 107, 0.5)',
    panelColor: 'rgba(45, 20, 30, 0.88)',
    blurAmount: '14px',
    borderRadius: '12px',
    textMain: '#ffe0e0',
    textSub: '#c99a9a',
    bgDark: '#2d141e',
    accentGreen: '#ff9f43',
    accentRed: '#ee5253',
    accentOrange: '#feca57',
    shadowStrength: 55,
    colors: ['#ff6b6b', '#ff9f43', '#feca57', '#2d141e']
  },
  'matrix-green': {
    name: 'Matrix Green',
    accent: '#00ff41',
    accentGlow: 'rgba(0, 255, 65, 0.5)',
    panelColor: 'rgba(0, 20, 0, 0.9)',
    blurAmount: '8px',
    borderRadius: '4px',
    textMain: '#d0ffd0',
    textSub: '#5a8a5a',
    bgDark: '#001400',
    accentGreen: '#00ff41',
    accentRed: '#ff0040',
    accentOrange: '#ffaa00',
    shadowStrength: 70,
    colors: ['#00ff41', '#00cc33', '#003300', '#001400']
  },
  'blood-moon': {
    name: 'Blood Moon',
    accent: '#ff0040',
    accentGlow: 'rgba(255, 0, 64, 0.5)',
    panelColor: 'rgba(30, 5, 10, 0.92)',
    blurAmount: '10px',
    borderRadius: '8px',
    textMain: '#ffe0e5',
    textSub: '#b07080',
    bgDark: '#1e050a',
    accentGreen: '#ff4060',
    accentRed: '#ff0040',
    accentOrange: '#ff6080',
    shadowStrength: 65,
    colors: ['#ff0040', '#cc0033', '#66001a', '#1e050a']
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

const SHIELD_FEATURES = {
  antivirus: {
    id: 'antivirus',
    name: 'Antivirus en Tiempo Real',
    description: 'Escaneo continuo de archivos, procesos y descargas',
    icon: 'shield-check',
    color: '#00ff88'
  },
  firewall: {
    id: 'firewall',
    name: 'Firewall',
    description: 'Bloqueo de conexiones entrantes no autorizadas',
    icon: 'flame',
    color: '#ff9e00'
  },
  encryption: {
    id: 'encryption',
    name: 'Cifrado de Disco',
    description: 'Protección AES-256 de todo el almacenamiento',
    icon: 'lock',
    color: '#7c3aed'
  },
  behavior: {
    id: 'behavior',
    name: 'Análisis de Comportamiento',
    description: 'Detección de procesos sospechosos por IA',
    icon: 'brain',
    color: '#3a86ff'
  }
};

const VPN_SERVERS = [
  { id: 'amsterdam', name: 'Ámsterdam',   country: 'Países Bajos', flag: '🇳🇱', ping: 42 },
  { id: 'newyork',   name: 'Nueva York',  country: 'EE.UU.',       flag: '🇺🇸', ping: 87 },
  { id: 'tokyo',     name: 'Tokio',       country: 'Japón',        flag: '🇯🇵', ping: 156 },
  { id: 'zurich',    name: 'Zúrich',      country: 'Suiza',        flag: '🇨🇭', ping: 35 },
  { id: 'buenosaires', name: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷', ping: 18 }
];

const STORE_PRODUCTS = [
  { id: 'theme-sunset-vibes', type: 'theme', name: 'Sunset Vibes', description: 'Paleta cálida con tonos atardecer y acentos coral.', author: 'Nebula Design', rating: 4.8, downloads: 12500, size: '2.4 MB', price: 'Gratis', preview: { accent: '#ff6b6b', colors: ['#ff6b6b', '#ff9f43', '#feca57'] } },
  { id: 'theme-matrix-green', type: 'theme', name: 'Matrix Green', description: 'Estilo hacker con verde fósforo y fondo negro.', author: 'CodeMaster', rating: 4.6, downloads: 8900, size: '1.8 MB', price: 'Gratis', preview: { accent: '#00ff41', colors: ['#00ff41', '#00cc33', '#003300'] } },
  { id: 'theme-blood-moon', type: 'theme', name: 'Blood Moon', description: 'Tema oscuro con acentos rojos intensos y sombras profundas.', author: 'DarkArts', rating: 4.9, downloads: 15600, size: '2.1 MB', price: 'Gratis', preview: { accent: '#ff0040', colors: ['#ff0040', '#cc0033', '#66001a'] } },
  { id: 'widget-system-monitor-pro', type: 'widget', name: 'System Monitor Pro', description: 'Monitor avanzado de CPU, RAM, disco y red con gráficos en tiempo real.', author: 'Nebula Labs', rating: 4.7, downloads: 7800, size: '3.2 MB', price: 'Gratis', preview: { icon: 'activity' } },
  { id: 'widget-music-visualizer', type: 'widget', name: 'Music Visualizer', description: 'Visualizador de audio en tiempo real con barras de espectro y efectos de partículas.', author: 'SoundWave', rating: 4.5, downloads: 6200, size: '2.8 MB', price: 'Gratis', preview: { icon: 'audio-waveform' } },
  { id: 'wallpaper-cyber-city', type: 'wallpaper', name: 'Cyber City', description: 'Ciudad futurista con neones y lluvia digital.', author: 'NeonDreams', rating: 4.9, downloads: 22000, size: '5.6 MB', price: 'Gratis', preview: { accent: '#00ffcc', file: 'cyber-city.jpg' } },
  { id: 'wallpaper-deep-space', type: 'wallpaper', name: 'Deep Space', description: 'Nebulosa púrpura con estrellas y galaxias lejanas.', author: 'CosmosArt', rating: 4.8, downloads: 18500, size: '4.9 MB', price: 'Gratis', preview: { accent: '#8b5cf6', file: 'deep-space.jpg' } },
  { id: 'app-discord', type: 'app', name: 'Discord', description: 'Comunicación por voz, video y texto para gamers.', author: 'Discord Inc.', rating: 4.9, downloads: 45000, size: '12.4 MB', price: 'Gratis', preview: { icon: 'message-circle', color: '#5865F2' } },
  { id: 'app-notion', type: 'app', name: 'Notion', description: 'Organización personal y colaboración en equipo.', author: 'Notion Labs', rating: 4.7, downloads: 38000, size: '8.2 MB', price: 'Gratis', preview: { icon: 'file-text', color: '#ffffff' } },
  { id: 'app-obs-studio', type: 'app', name: 'OBS Studio', description: 'Grabación y transmisión en vivo profesional.', author: 'OBS Project', rating: 4.8, downloads: 32000, size: '15.6 MB', price: 'Gratis', preview: { icon: 'video', color: '#302e31' } },
  { id: 'game-hollow-knight', type: 'game', name: 'Hollow Knight', description: 'Aventura metroidvania en un reino de insectos.', author: 'Team Cherry', rating: 4.9, downloads: 52000, size: '9.2 GB', price: 'Gratis', preview: { icon: 'gamepad-2', color: '#ffffff' } },
  { id: 'game-elden-ring', type: 'game', name: 'Elden Ring', description: 'RPG de acción en un mundo abierto épico.', author: 'FromSoftware', rating: 4.9, downloads: 68000, size: '45.6 GB', price: 'Gratis', preview: { icon: 'sword', color: '#c9a050' } }
];

/* ================= VAULT — CONSTANTES GLOBALES (deben ir ARRIBA) ================= */
const VAULT_STORAGE_KEY = 'nebula-os:vault';
const VAULT_MASTER_KEY = 'nebula-os:vault-master';
const VAULT_LOCK_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutos

const VAULT_CATEGORIES = [
  { id: 'redes',   name: 'Redes Sociales', icon: 'users',    color: '#3b82f6' },
  { id: 'gaming',  name: 'Gaming',         icon: 'gamepad-2', color: '#a855f7' },
  { id: 'trabajo', name: 'Trabajo',        icon: 'briefcase', color: '#f59e0b' },
  { id: 'bancos',  name: 'Bancos',         icon: 'landmark',  color: '#10b981' },
  { id: 'email',   name: 'Email',          icon: 'mail',      color: '#ef4444' },
  { id: 'otros',   name: 'Otros',          icon: 'package',   color: '#64748b' }
];

let vaultState = {
  unlocked: false,
  entries: [],
  searchQuery: '',
  activeCategory: 'all',
  selectedEntryId: null,
  showPassword: {},
  masterChanged: false,
  lastOpenedAt: null,
  generator: {
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  }
};

let vaultLockTimer = null;

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
let connectedWifiId = null;
let wifiPasswordVisible = null;
let wifiScanInProgress = false;
let btScanInProgress = false;

const WIFI_NETWORKS = [
  { id: 'nebula-5g',     ssid: 'Nebula_5G',         security: 'wpa3', signal: 4, frequency: '5 GHz', password: 'N3bul4_2026#5G' },
  { id: 'nebula-24g',    ssid: 'Nebula_2.4G',       security: 'wpa2', signal: 3, frequency: '2.4 GHz', password: 'N3bul4_2026' },
  { id: 'vecino-24g',    ssid: 'TP-Link_2.4G',      security: 'wpa2', signal: 2, frequency: '2.4 GHz', password: null },
  { id: 'cafe-free',     ssid: 'Cafeteria_Free',    security: 'open', signal: 3, frequency: '2.4 GHz', password: null },
  { id: 'fibertel',      ssid: 'Fibertel-2.4G',     security: 'wpa2', signal: 1, frequency: '2.4 GHz', password: null },
  { id: 'movistar-5g',   ssid: 'MOVISTAR_5G',       security: 'wpa2', signal: 4, frequency: '5 GHz', password: null },
  { id: 'vecino-5g',     ssid: 'DIRECT-ROKU',       security: 'wpa2', signal: 2, frequency: '5 GHz', password: null },
  { id: 'guest-network', ssid: 'Invitados',         security: 'open', signal: 3, frequency: '2.4 GHz', password: null }
];

/* ═══════════════════════════════════════════════════════════════
   ★ CENTRO DE ACTIVIDAD — Constantes y estado global
═══════════════════════════════════════════════════════════════ */

const ACTIVITY_STORAGE_KEY = 'nebula-os:activity-log';
const ACTIVITY_MAX_ITEMS = 200;

const ACTIVITY_CATEGORIES = {
  all:      { id: 'all',      name: 'Todos',      icon: 'layers' },
  security: { id: 'security', name: 'Seguridad',  icon: 'shield-check' },
  gaming:   { id: 'gaming',   name: 'Gaming',     icon: 'gamepad-2' },
  network:  { id: 'network',  name: 'Red',        icon: 'wifi' },
  system:   { id: 'system',   name: 'Sistema',    icon: 'settings-2' }
};

const ACTIVITY_LEVELS = {
  info:    { id: 'info',    name: 'Info',    color: '#3a86ff' },
  success: { id: 'success', name: 'Éxito',   color: '#a6e3a1' },
  warning: { id: 'warning', name: 'Alerta',  color: '#fab387' },
  danger:  { id: 'danger',  name: 'Crítico', color: '#f38ba8' }
};

let activityLog = [];
let activityFilter = 'all';
let activitySearchQuery = '';
let activityExpandedId = null;
let activityIdCounter = 0;

const BLUETOOTH_DEVICES = [
  { id: 'hyperx-cloud',   name: 'HyperX Cloud II',     type: 'headset', icon: 'headphones',  battery: 78, paired: true,  connected: true  },
  { id: 'mx-master-3',    name: 'Logitech MX Master 3', type: 'mouse',   icon: 'mouse',       battery: 45, paired: true,  connected: true  },
  { id: 'keychron-k8',    name: 'Keychron K8 Pro',      type: 'keyboard',icon: 'keyboard',    battery: 92, paired: true,  connected: false },
  { id: 'xbox-controller',name: 'Xbox Controller',      type: 'gamepad', icon: 'gamepad-2',   battery: 15, paired: true,  connected: false },
  { id: 'jbl-flip',       name: 'JBL Flip 6',           type: 'speaker', icon: 'speaker',     battery: 0,  paired: false, connected: false },
  { id: 'airpods-pro',    name: 'AirPods Pro',          type: 'headset', icon: 'headphones',  battery: 0,  paired: false, connected: false },
  { id: 'mi-band-8',      name: 'Xiaomi Mi Band 8',     type: 'watch',   icon: 'watch',       battery: 0,  paired: false, connected: false },
  { id: 'logi-k380',      name: 'Logitech K380',        type: 'keyboard',icon: 'keyboard',    battery: 0,  paired: false, connected: false }
];
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
  shadowStrength: 55,
  dockStyle: 'floating',
  dockPreviewStyle: 'blueprint'
};

let shieldState = {
  antivirus: true,
  firewall: true,
  encryption: true,
  behavior: false,
  vpnConnected: false,
  vpnServer: 'amsterdam',
  lastScan: null,
  scanInProgress: false,
  scanProgress: 0,
  scanCurrentFile: '',
  threatsFound: 0,
  threatsQuarantined: 0,
  scheduledScan: true,
  scanHistory: []
};

let shieldHistoryExpandedId = null;
/* ═══════════════════════════════════════════════════════════════
   ★ ADMINISTRADOR DE TAREAS — Estado global
═══════════════════════════════════════════════════════════════ */

let taskmgrSearchQuery = '';
let taskmgrSortKey = 'cpu';
let taskmgrSortDir = 'desc';
let taskmgrSelectedPid = null;
let taskmgrProcessPids = {}; // winId → PID estable
let taskmgrMetricsHistory = {
  cpu: Array(30).fill(20),
  ram: Array(30).fill(30),
  gpu: Array(30).fill(40)
};
let taskmgrMetricsInterval = null;

const TASKMGR_SYSTEM_PROCESSES = [
  { pid: 1,   name: 'nebula-core',       sub: 'Kernel principal',            icon: 'cpu',         cpuBase: 3,  ramBase: 180 },
  { pid: 84,  name: 'gpu-driver',        sub: 'NVIDIA 560.81',               icon: 'activity',    cpuBase: 5,  ramBase: 340 },
  { pid: 112, name: 'audio-service',     sub: 'PipeWire',                    icon: 'audio-waveform', cpuBase: 1, ramBase: 90 },
  { pid: 156, name: 'network-manager',   sub: 'NetworkManager',              icon: 'wifi',        cpuBase: 1,  ramBase: 75 },
  { pid: 203, name: 'nebula-shield',     sub: 'Antivirus en tiempo real',    icon: 'shield-check', cpuBase: 4, ramBase: 220 },
  { pid: 421, name: 'window-compositor', sub: 'Nebula Compositor',           icon: 'layers',      cpuBase: 6,  ramBase: 260 }
];

let updatesState = {
  currentVersion: '2.5.0 Ultimate',
  currentCodename: 'Nebula',
  availableVersion: '2.6.0',
  availableCodename: 'Andromeda',
  updateAvailable: true,
  updateSize: '1.2 GB',
  updateCheckedAt: null,
  updateInProgress: false,
  updateProgress: 0,
  updateStage: '',
  autoUpdate: true,
  betaChannel: false,
  updateHistory: [
    { version: '2.5.0', codename: 'Ultimate', date: 'Hace 3 semanas', size: '980 MB' },
    { version: '2.4.2', codename: 'Gamer',    date: 'Hace 2 meses',   size: '1.1 GB' },
    { version: '2.4.0', codename: 'Quantum',  date: 'Hace 4 meses',   size: '850 MB' }
  ]
};

let notifications = [];
let unreadCount = 0;
let notifIdCounter = 0;
let desktopWidgets = [];
let storeProducts = [...STORE_PRODUCTS];
let installedProducts = [];
let storeFilter = 'all';
let storeInstallProgress = {};
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
const fsPanelStates = {};

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
const SHIELD_STORAGE_KEY = 'nebula-os:shield';
const UPDATES_STORAGE_KEY = 'nebula-os:updates';
const NOTIFICATIONS_STORAGE_KEY = 'nebula-os:notifications';
const NOTIFICATIONS_MAX = 30;
const STORE_INSTALLED_STORAGE_KEY = 'nebula-os:store-installed';

const Z_INDEX_NORMALIZE_THRESHOLD = 800;
const Z_INDEX_BASE = 100;
const ANIM_OPEN_MS = 340;
const ANIM_CLOSE_MS = 220;
const ANIM_MIN_MS = 300;
const ANIM_RESTORE_MS = 360;

const pendingClose = new Set();

let settingsState = {
  animations: true,
  transparency: true,
  activeSettingsTab: 'system',
  designerSubTab: 'styles',
  designerExpanded: true,
  shieldSubTab: 'security',
  shieldExpanded: true
};

function refreshIcons() {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
}

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

function updateToastPosition() {
  const container = document.getElementById('toast-container');
  const quickCenter = document.getElementById('quick-center');
  if (!container || !quickCenter) return;

  const isQuickCenterOpen = !quickCenter.classList.contains('hidden');
  container.classList.toggle('shifted', isQuickCenterOpen);
}

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

document.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  setTimeout(() => bootScreen && bootScreen.classList.add('boot-complete'), 850);
  setTimeout(() => bootScreen && bootScreen.remove(), 1450);

  createStars();
  loadPersistedState();
  loadNotifications();
  updateNotifBadge();
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
  renderWifiPanel();
  renderBluetoothPanel();
  updateActivityDockBadge();
  applyBrightness(currentBrightness);
  setupQuickCenterPlayer();
  updatePlayerBackground();
  updatePlayerProgress();
  updateToastPosition();
  syncAllSliders();
  refreshIcons();

  document.querySelectorAll('.waybar-module, #dock, #control-center, #quick-center, #launcher, #notification-center').forEach(el => {
    el.classList.add('glass-panel');
  });
  
  const sysTrayBtn = document.getElementById('sys-tray-btn');
  const clockCenter = document.getElementById('clock-center');
  const controlCenter = document.getElementById('control-center');
  const quickCenter = document.getElementById('quick-center');
  const trayHudToggle = document.getElementById('tray-hud-toggle');
  const topbarProfilePill = document.getElementById('topbar-profile-pill');
  const trayNotifBtn = document.getElementById('tray-notif-btn');
  const notifClearBtn = document.getElementById('notif-clear-btn');

  const toggleControlCenter = () => {
    closeQuickCenter();
    closeNotificationCenter();
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
    closeNotificationCenter();
    quickCenter?.classList.toggle('hidden');
    updateToastPosition();
    syncAllSliders();
    syncVpnQuickCenterState();
    renderConnectivityState();
    refreshIcons();
  };

  if (sysTrayBtn) sysTrayBtn.addEventListener('click', (e) => {
    if (e.target.closest('#tray-hud-toggle')) return;
    toggleQuickCenter();
  });

  const trayWifiItem = document.getElementById('tray-wifi-item');
  if (trayWifiItem) {
    trayWifiItem.style.cursor = 'pointer';
    trayWifiItem.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWifiPanel();
    });
  }

  const trayBtItem = document.getElementById('tray-bt-item');
  if (trayBtItem) {
    trayBtItem.style.cursor = 'pointer';
    trayBtItem.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBluetoothPanel();
    });
  }
  if (clockCenter) clockCenter.addEventListener('click', toggleControlCenter);
  if (trayHudToggle) trayHudToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleGamerOverlay();
  });
  if (topbarProfilePill) topbarProfilePill.addEventListener('click', () => {
    const next = currentProfile === 'gamer' ? 'streamer' : currentProfile === 'streamer' ? 'studio' : 'gamer';
    switchProfile(next);
  });

  if (trayNotifBtn) {
    trayNotifBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      toggleNotificationCenter();
    }, true);
  }
  if (notifClearBtn) {
    notifClearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearAllNotifications();
    });
  }

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
    const isNotifPanelClick = e.target.closest('#notification-center');
    const isNotifBtnClick = e.target.closest('#tray-notif-btn');
    const isStoreClick = e.target.closest('#store-overlay');
    const isWifiPanelClick = e.target.closest('#wifi-panel');
    const isWifiBtnClick = e.target.closest('#tray-wifi-item');
    const isBtPanelClick = e.target.closest('#bluetooth-panel');
    const isBtBtnClick = e.target.closest('#tray-bt-item');

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
        && !isCitySelectorClick
        && !isNotifPanelClick
        && !isNotifBtnClick
        && !isStoreClick
        && !isWifiPanelClick
        && !isWifiBtnClick
        && !isBtPanelClick
        && !isBtBtnClick) {
      closeControlCenter();
      closeQuickCenter();
      closeNotificationCenter();
      closeStore();
      closeWifiPanel();
      closeBluetoothPanel();
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
      closeNotificationCenter();
      closeStore();
      closeWifiPanel();
      closeBluetoothPanel();
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
    if (e.target.closest('#store-overlay')) return;
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
  syncVpnQuickCenterState();

  window.addEventListener('beforeunload', () => {
  saveSessionState(true);
  });
});

function setupShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.altKey && (e.key === 'z' || e.key === 'Z' || e.key === 'g' || e.key === 'G')) ||
        (e.metaKey && (e.key === 'g' || e.key === 'G'))) {
      e.preventDefault();
      toggleGamerOverlay();
    }
  });
}

function toggleWifi(explicitState = null) {
  wifiEnabled = explicitState !== null ? explicitState : !wifiEnabled;

  if (!wifiEnabled) {
    connectedWifiId = null;
    wifiPasswordVisible = null;
  }

  const wifiToggle = document.getElementById('wifi-toggle');
  if (wifiToggle) {
    wifiToggle.classList.toggle('active', wifiEnabled);
    wifiToggle.setAttribute('aria-pressed', String(wifiEnabled));
  }

  const panelToggle = document.getElementById('wifi-panel-toggle');
  if (panelToggle) {
    panelToggle.classList.toggle('active', wifiEnabled);
    panelToggle.setAttribute('aria-pressed', String(wifiEnabled));
  }

  try {
    localStorage.setItem(WIFI_STORAGE_KEY, JSON.stringify(wifiEnabled));
  } catch (e) {}

  renderConnectivityState();
  renderWifiPanel();

  showToast(
    wifiEnabled ? 'WiFi Activado' : 'WiFi Desactivado',
    wifiEnabled ? 'Buscando redes inalámbricas disponibles...' : 'Sin conexión inalámbrica.',
    wifiEnabled ? 'wifi' : 'wifi-off'
  );

  if (wifiEnabled) {
    rescanWifiNetworks();
  }
}

function toggleBluetooth(explicitState = null) {
  bluetoothEnabled = explicitState !== null ? explicitState : !bluetoothEnabled;

  if (!bluetoothEnabled) {
    BLUETOOTH_DEVICES.forEach(d => { d.connected = false; });
  }

  const btToggle = document.getElementById('bt-toggle');
  if (btToggle) {
    btToggle.classList.toggle('active', bluetoothEnabled);
    btToggle.setAttribute('aria-pressed', String(bluetoothEnabled));
  }

  const panelToggle = document.getElementById('bt-panel-toggle');
  if (panelToggle) {
    panelToggle.classList.toggle('active', bluetoothEnabled);
    panelToggle.setAttribute('aria-pressed', String(bluetoothEnabled));
  }

  try {
    localStorage.setItem(BT_STORAGE_KEY, JSON.stringify(bluetoothEnabled));
  } catch (e) {}

  renderConnectivityState();
  renderBluetoothPanel();

  showToast(
    bluetoothEnabled ? 'Bluetooth Activado' : 'Bluetooth Desactivado',
    bluetoothEnabled ? 'Buscando dispositivos cercanos...' : 'Bluetooth apagado.',
    'bluetooth'
  );

  if (bluetoothEnabled) {
    rescanBluetoothDevices();
  }
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

  const trayVpn = document.getElementById('tray-vpn-item');
  if (trayVpn) {
    if (shieldState.vpnConnected) {
      trayVpn.classList.remove('hidden-tray');
      trayVpn.title = `VPN Shield: Conectada · ${VPN_SERVERS.find(s => s.id === shieldState.vpnServer)?.name || 'Ámsterdam'}`;
    } else {
      trayVpn.classList.add('hidden-tray');
      trayVpn.title = 'VPN Shield: Desconectada';
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

  syncVpnQuickCenterState();
  refreshIcons();
}

function syncVpnQuickCenterState() {
  const vpnToggle = document.getElementById('vpn-toggle');
  if (vpnToggle) {
    vpnToggle.classList.toggle('active', shieldState.vpnConnected);
    vpnToggle.setAttribute('aria-pressed', String(shieldState.vpnConnected));
  }
}

function toggleVpnFromQuickCenter() {
  toggleVpnConnection();
}

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
    const prevRam = systemMetrics.ram;
    systemMetrics.ram = Math.max(16, Math.min(22, Math.round(systemMetrics.ram * 0.45)));
    systemMetrics.cpu = Math.min(85, systemMetrics.cpu + 15);
    systemMetrics.fps = 144;
    updateMetrics();
    showToast('Modo Juego Activado', 'Recursos optimizados: RAM liberada y perfil de alto rendimiento fijado.', {
      icon: 'gamepad-2',
      level: 'success'
    });
    logActivity({
      category: 'gaming',
      level: 'info',
      icon: 'gamepad-2',
      title: 'Modo Juego activado',
      subtitle: `RAM: ${prevRam}% → ${systemMetrics.ram}% · CPU: 4.95 GHz`,
      detail: {
        'Perfil aplicado': 'Alto Rendimiento',
        'RAM liberada': `${((prevRam - systemMetrics.ram) * 32 / 100).toFixed(1)} GB`,
        'Frecuencia CPU': '4.95 GHz (Turbo Boost)',
        'GPU': 'RTX 4080 · Boost Mode',
        description: 'El sistema entró en modo de alto rendimiento. Los recursos fueron optimizados para gaming.'
      }
    });
  } else {
    showToast('Modo Juego Desactivado', 'Perfil estándar balanceado restablecido.', {
      icon: 'zap',
      level: 'info'
    });
    logActivity({
      category: 'gaming',
      level: 'info',
      icon: 'zap',
      title: 'Modo Juego desactivado',
      subtitle: 'Perfil balanceado restablecido',
      detail: {
        'Perfil aplicado': 'Balanceado',
        description: 'El sistema volvió al perfil de energía estándar.'
      }
    });
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
  logActivity({
    category: 'gaming',
    level: 'info',
    icon: 'camera',
    title: 'Captura guardada',
    subtitle: 'Guardada en Archivos / Capturas de Juegos',
    detail: {
      'Ruta': '/Capturas de Juegos/',
      'Formato': 'PNG · 3840x2160',
      description: 'La captura se guardó correctamente en la carpeta de Capturas de Juegos.'
    }
  });
}

function simulateRamBoost() {
  const previous = systemMetrics.ram;
  systemMetrics.ram = 17;
  updateMetrics();
  updateHUDTelemetry();
  updateGamingHubWidget();
  showToast('Memoria Optimizada', `RAM liberada de ${previous}% a 17%. 4.8 GB liberados.`, {
    icon: 'sparkles',
    level: 'success'
  });
}

function simulateCleanRam() {
  simulateRamBoost();
}

/* =====================================================
   ★ FEATURE 2: NEBULA DESIGNER
===================================================== */

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

  const body2 = el.querySelector('.weather-body');
  if (body2) {
    body2.outerHTML = renderWeatherWidgetHTML(widget, data);
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

  const validTypes = new Set(['clock', 'weather', 'gaming-hub', 'system-monitor-pro', 'music-visualizer']);
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
    } else if (widget.type === 'system-monitor-pro') {
      title = 'SYSTEM MONITOR PRO';
      iconName = 'activity';
      extraClass = 'system-monitor-pro-widget';
      bodyHTML = `<div class="system-monitor-pro-body" style="color:var(--text-sub);font-size:10px;text-align:center;padding:20px;">Widget de monitoreo avanzado (demo)</div>`;
    } else if (widget.type === 'music-visualizer') {
      title = 'MUSIC VISUALIZER';
      iconName = 'audio-waveform';
      extraClass = 'music-visualizer-widget';
      bodyHTML = `<div class="music-visualizer-body" style="color:var(--text-sub);font-size:10px;text-align:center;padding:20px;">Visualizador de audio (demo)</div>`;
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
  if (!panel) return null;
  const key = panel.dataset.tabId || 'default';
  if (!fsPanelStates[key]) {
    fsPanelStates[key] = {
      current: FILE_SYSTEM,
      trail: [FILE_SYSTEM],
      history: [],
      future: [],
      query: '',
      selected: new Set(),
      lastClickedIndex: -1,
      visibleItems: []
    };
  }
  return fsPanelStates[key];
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
  if (!state) return;

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
  if (!state) return;
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

/* ═══════════════════════════════════════════════════════════════
   ★ SISTEMA DE TOASTS ENRIQUECIDO
═══════════════════════════════════════════════════════════════ */

// Mapa de duración por nivel (ms)
const TOAST_DURATIONS = {
  info:    3500,
  success: 3500,
  warning: 5000,
  danger:  8000
};

// Cómo se infiere el nivel a partir del ícono (fallback)
const TOAST_ICON_LEVEL_MAP = {
  'check-circle-2': 'success',
  'check': 'success',
  'shield-check': 'success',
  'alert-triangle': 'danger',
  'alert-circle': 'danger',
  'x-circle': 'danger',
  'shield-off': 'danger',
  'info': 'info',
  'bell': 'info',
  'zap': 'warning',
  'moon': 'warning',
  'wifi-off': 'warning',
  'battery-warning': 'warning'
};

// Instancias activas (para agrupación)
const activeToasts = [];   // [{ id, level, title, message, icon, el, timer, remaining, startedAt, actions }]

function inferToastLevel(iconName) {
  return TOAST_ICON_LEVEL_MAP[iconName] || 'info';
}

function showToast(title, message, iconName = 'sparkles', force = false, options = {}) {
  if (dndEnabled && !force) return;

  // Permitir firma alternativa: showToast(title, message, { level, icon, actions, ... })
  let opts = options;
  if (typeof iconName === 'object' && iconName !== null) {
    opts = iconName;
    iconName = opts.icon || 'sparkles';
  }

  const level = opts.level || inferToastLevel(iconName);
  const actions = Array.isArray(opts.actions) ? opts.actions : [];
  const duration = typeof opts.duration === 'number' ? opts.duration : TOAST_DURATIONS[level] || 4000;
  const isPersistent = duration === 0 || (level === 'danger' && actions.length > 0);

  // Guardar en historial de notificaciones
  addNotificationToHistory(title, message, iconName);

  const container = document.getElementById('toast-container');
  if (!container) return;

  // ─── Intentar agrupar con un toast similar ya visible ───
  const groupMatch = activeToasts.find(t =>
    t.title === title &&
    t.level === level &&
    t.icon === iconName &&
    !t.closing &&
    t.actions.length === 0 &&
    actions.length === 0
  );

  if (groupMatch) {
    groupMatch.groupCount = (groupMatch.groupCount || 1) + 1;
    groupMatch.message = message;
    groupMatch.updatedAt = Date.now();

    const strongEl = groupMatch.el.querySelector('.toast-content strong');
    const smallEl = groupMatch.el.querySelector('.toast-content small');
    if (strongEl) {
      strongEl.dataset.groupCount = String(groupMatch.groupCount);
    }
    if (smallEl) smallEl.textContent = message;
    groupMatch.el.classList.add('grouped');

    // Reiniciar animación de entrada para dar feedback visual
    groupMatch.el.style.animation = 'none';
    void groupMatch.el.offsetWidth;
    groupMatch.el.style.animation = '';

    // Reiniciar timer de cierre
    if (!isPersistent && groupMatch.timer) {
      clearTimeout(groupMatch.timer);
      resetToastTimer(groupMatch, duration);
    }
    return;
  }

  // ─── Crear nuevo toast ───
  const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.dataset.level = level;
  toast.dataset.toastId = id;

  const actionsHTML = actions.length > 0 ? `
    <div class="toast-actions">
      ${actions.map(a => `
        <button class="toast-action-btn ${a.variant === 'primary' ? 'primary' : ''}"
                type="button"
                data-action-id="${escapeHtml(a.id || '')}">
          ${a.icon ? `<i data-lucide="${escapeHtml(a.icon)}"></i>` : ''}
          ${escapeHtml(a.label || 'Acción')}
        </button>
      `).join('')}
    </div>
  ` : '';

  toast.innerHTML = `
    <span class="toast-icon"><i data-lucide="${iconName}"></i></span>
    <div class="toast-content">
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(message)}</small>
      ${actionsHTML}
    </div>
    <button class="toast-close-btn" type="button" title="Cerrar" data-toast-close>
      <i data-lucide="x"></i>
    </button>
    ${!isPersistent ? `
      <div class="toast-progress">
        <div class="toast-progress-fill"></div>
      </div>
    ` : ''}
  `;

  container.appendChild(toast);

  const entry = {
    id,
    level,
    title,
    message,
    icon: iconName,
    el: toast,
    timer: null,
    remaining: duration,
    startedAt: Date.now(),
    duration,
    actions,
    groupCount: 1,
    isPersistent,
    paused: false,
    progressFill: toast.querySelector('.toast-progress-fill'),
    progressAnim: null
  };

  activeToasts.push(entry);

  // ─── Animación de la barra de progreso ───
  if (!isPersistent && entry.progressFill) {
    startProgressBar(entry, duration);
  }

  // ─── Timer de auto-cierre ───
  if (!isPersistent) {
    resetToastTimer(entry, duration);
  }

  // ─── Pausar al hover ───
  toast.addEventListener('mouseenter', () => {
    if (isPersistent || entry.closing) return;
    entry.paused = true;
    entry.remaining -= (Date.now() - entry.startedAt);
    if (entry.timer) {
      clearTimeout(entry.timer);
      entry.timer = null;
    }
    if (entry.progressAnim) {
      entry.progressAnim.pause();
    }
  });

  toast.addEventListener('mouseleave', () => {
    if (isPersistent || entry.closing || !entry.paused) return;
    entry.paused = false;
    entry.startedAt = Date.now();
    resetToastTimer(entry, entry.remaining);
    if (entry.progressAnim) {
      entry.progressAnim.play();
    }
  });

  // ─── Click en el toast → abrir Centro de Notificaciones ───
  toast.addEventListener('click', (e) => {
    if (e.target.closest('.toast-close-btn')) return;
    if (e.target.closest('.toast-action-btn')) return;
    closeToast(id);
    openNotificationCenter();
  });

  // ─── Botón de cerrar ───
  toast.querySelector('[data-toast-close]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeToast(id);
  });

  // ─── Botones de acción ───
  toast.querySelectorAll('.toast-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const actionId = btn.dataset.actionId;
      const action = actions.find(a => String(a.id) === String(actionId));
      if (action && typeof action.onClick === 'function') {
        try { action.onClick(); } catch (err) {}
      }
      if (action && action.close !== false) {
        closeToast(id);
      }
    });
  });

  refreshIcons();
}

function resetToastTimer(entry, duration) {
  if (entry.timer) clearTimeout(entry.timer);
  entry.startedAt = Date.now();
  entry.remaining = duration;
  entry.timer = setTimeout(() => closeToast(entry.id), duration);
}

function startProgressBar(entry, duration) {
  const fill = entry.progressFill;
  if (!fill) return;

  fill.style.transition = 'none';
  fill.style.transform = 'scaleX(1)';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.transition = `transform ${duration}ms linear`;
      fill.style.transform = 'scaleX(0)';
    });
  });
}

function closeToast(id) {
  const idx = activeToasts.findIndex(t => t.id === id);
  if (idx === -1) return;

  const entry = activeToasts[idx];
  if (entry.closing) return;
  entry.closing = true;

  if (entry.timer) {
    clearTimeout(entry.timer);
    entry.timer = null;
  }
  if (entry.progressAnim) {
    try { entry.progressAnim.cancel(); } catch (e) {}
  }

  entry.el.classList.add('closing');
  setTimeout(() => {
    entry.el.remove();
    const i = activeToasts.indexOf(entry);
    if (i !== -1) activeToasts.splice(i, 1);
  }, 300);
}

function closeAllToasts() {
  [...activeToasts].forEach(t => closeToast(t.id));
}

function addNotificationToHistory(title, message, iconName = 'sparkles') {
  notifIdCounter++;
  const notif = {
    id: 'notif-' + Date.now() + '-' + notifIdCounter,
    title: String(title),
    message: String(message),
    icon: iconName,
    timestamp: Date.now(),
    read: false
  };

  notifications.unshift(notif);
  if (notifications.length > NOTIFICATIONS_MAX) {
    notifications = notifications.slice(0, NOTIFICATIONS_MAX);
  }

  unreadCount++;
  saveNotifications();
  updateNotifBadge();

  const panel = document.getElementById('notification-center');
  if (panel && !panel.classList.contains('hidden')) {
    renderNotificationCenter();
  }
}

function updateNotifBadge() {
  const badge = document.getElementById('notif-badge');
  const btn = document.getElementById('tray-notif-btn');
  if (!badge || !btn) return;

  if (unreadCount > 0) {
    badge.hidden = false;
    badge.textContent = unreadCount > 99 ? '99+' : String(unreadCount);
    btn.classList.add('has-unread');
  } else {
    badge.hidden = true;
    btn.classList.remove('has-unread');
  }
}

function markAllNotificationsAsRead() {
  notifications.forEach(n => { n.read = true; });
  unreadCount = 0;
  saveNotifications();
  updateNotifBadge();
  renderNotificationCenter();
}

function clearAllNotifications() {
  if (notifications.length === 0) {
    showToast('Sin notificaciones', 'No hay nada para limpiar.', 'info');
    return;
  }
  const count = notifications.length;
  notifications = [];
  unreadCount = 0;
  saveNotifications();
  updateNotifBadge();
  renderNotificationCenter();
  showToast('Notificaciones limpiadas', `Se eliminaron ${count} notificacion${count === 1 ? '' : 'es'}.`, 'trash-2');
}

function removeNotification(id) {
  const idx = notifications.findIndex(n => n.id === id);
  if (idx === -1) return;
  const wasUnread = !notifications[idx].read;
  notifications.splice(idx, 1);
  if (wasUnread) unreadCount = Math.max(0, unreadCount - 1);
  saveNotifications();
  updateNotifBadge();
  renderNotificationCenter();
}

function getRelativeTime(timestamp) {
  const diff = Date.now() - timestamp;
  const secs = Math.floor(diff / 1000);
  if (secs < 10) return 'Ahora';
  if (secs < 60) return `Hace ${secs}s`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `Hace ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hace ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `Hace ${days}d`;
  const date = new Date(timestamp);
  return `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}`;
}

function renderNotificationCenter() {
  const list = document.getElementById('notif-list');
  const empty = document.getElementById('notif-empty');
  const subtitle = document.getElementById('notif-subtitle');
  const clearBtn = document.getElementById('notif-clear-btn');
  if (!list || !empty) return;

  if (notifications.length === 0) {
    list.innerHTML = '';
    list.hidden = true;
    empty.hidden = false;
    if (subtitle) subtitle.textContent = 'Sin notificaciones';
    if (clearBtn) clearBtn.disabled = true;
    return;
  }

  list.hidden = false;
  empty.hidden = true;
  if (subtitle) {
    subtitle.textContent = `${notifications.length} notificacion${notifications.length === 1 ? '' : 'es'} · ${unreadCount} sin leer`;
  }
  if (clearBtn) clearBtn.disabled = false;

  list.innerHTML = notifications.map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" data-notif-id="${n.id}">
      <span class="notif-item-icon"><i data-lucide="${n.icon || 'bell'}"></i></span>
      <div class="notif-item-body">
        <strong>${escapeHtml(n.title)}</strong>
        <small>${escapeHtml(n.message)}</small>
      </div>
      <div class="notif-item-meta">
        <span class="notif-item-time">${getRelativeTime(n.timestamp)}</span>
        <button class="notif-item-close" type="button" title="Eliminar" data-notif-remove="${n.id}">
          <i data-lucide="x"></i>
        </button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('[data-notif-remove]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeNotification(btn.dataset.notifRemove);
    });
  });

  refreshIcons();
}

function openNotificationCenter() {
  const panel = document.getElementById('notification-center');
  if (!panel) return;

  closeQuickCenter();
  closeControlCenter();

  panel.classList.remove('hidden');
  renderNotificationCenter();

  setTimeout(() => {
    markAllNotificationsAsRead();
  }, 300);
}

function closeNotificationCenter() {
  const panel = document.getElementById('notification-center');
  if (!panel) return;
  panel.classList.add('hidden');
}

function toggleNotificationCenter() {
  const panel = document.getElementById('notification-center');
  if (!panel) return;
  if (panel.classList.contains('hidden')) {
    openNotificationCenter();
  } else {
    closeNotificationCenter();
  }
}

function saveNotifications() {
  try {
    const serializable = notifications.map(n => ({ ...n }));
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {}
}

function loadNotifications() {
  try {
    const raw = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;
    notifications = parsed
      .filter(n => n && typeof n === 'object' && n.id && n.title)
      .map(n => ({
        id: String(n.id),
        title: String(n.title),
        message: String(n.message || ''),
        icon: n.icon || 'bell',
        timestamp: typeof n.timestamp === 'number' ? n.timestamp : Date.now(),
        read: !!n.read
      }));
    unreadCount = notifications.filter(n => !n.read).length;
  } catch (e) {}
}

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
      const validTypes = new Set(['clock', 'weather', 'gaming-hub', 'system-monitor-pro', 'music-visualizer']);
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

    loadInstalledProducts();

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

    const savedShield = JSON.parse(localStorage.getItem(SHIELD_STORAGE_KEY));
    if (savedShield && typeof savedShield === 'object') {
      shieldState = { ...shieldState, ...savedShield, scanInProgress: false, scanProgress: 0 };
    }

    const savedUpdates = JSON.parse(localStorage.getItem(UPDATES_STORAGE_KEY));
    if (savedUpdates && typeof savedUpdates === 'object') {
      updatesState = { ...updatesState, ...savedUpdates, updateInProgress: false, updateProgress: 0, updateStage: '' };
    }
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
  if (top < margin) top = anchorRect.bottom + 12;
  left = Math.max(margin, Math.min(window.innerWidth - menuRect.width - margin, left));
  top = Math.max(margin, Math.min(window.innerHeight - menuRect.height - margin, top));

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  menu.querySelectorAll('.dock-context-item[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleDockContextAction(btn.dataset.action, appId);
    });
  });

  requestAnimationFrame(() => menu.classList.add('open'));
  refreshIcons();
}

function handleDockContextAction(action, appId) {
  switch (action) {
    case 'open-new': openApp(appId, true); break;
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
        e.preventDefault();
        e.stopPropagation();
      const forceNew = e.ctrlKey || e.metaKey || e.button === 1;
      if (forceNew) {
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
  closeNotificationCenter();
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

    card.addEventListener('click', () => {
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

  const appTitle = APPS[entry.appId]?.title || entry.appId;
  const card = document.querySelector(`.wm-card[data-wm-win="${winId}"]`);
  if (card) card.classList.add('deleting');

  setTimeout(() => {
    closeApp(winId);
    showToast('Ventana eliminada', `${appTitle} fue cerrada.`, 'trash-2');
  }, 320);
}

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
  if (left + menuRect.width + margin > window.innerWidth) left = window.innerWidth - menuRect.width - margin;
  if (top + menuRect.height + margin > window.innerHeight) top = window.innerHeight - menuRect.height - margin;
  left = Math.max(margin, left);
  top = Math.max(margin, top);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  menu.querySelectorAll('.wm-ctx-item[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleWmCardAction(btn.dataset.action, winId, btn);
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
    case 'focus': focusFromWindowManager(winId); break;
    case 'minimize': minimizeApp(winId); if (windowManagerOpen) renderWindowManager(); break;
    case 'restore': entry.win.classList.remove('minimized'); entry.win.style.display = 'flex'; focusWindow(winId); if (windowManagerOpen) renderWindowManager(); break;
    case 'new-instance': openApp(entry.appId, true); if (windowManagerOpen) renderWindowManager(); break;
    case 'move-ws': if (targetWs !== null && !Number.isNaN(targetWs)) moveWindowToWorkspace(winId, targetWs); break;
    case 'close': deleteWindowFromWm(winId); break;
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

      wmDragState = { winId, sourceWs, justDropped: false };

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

function getWindowTabsState(win) {
  if (!windowTabsState.has(win)) {
    windowTabsState.set(win, { tabs: [], activeTabId: null, counter: 0 });
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
      panel.dataset.tabId = tab.id;
      if (entry?.win) panel.dataset.winId = winId;
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

function openApp(appId, forceNew = false, restoreData = null) {
  // ★ NEBULA STORE: se abre como overlay, NUNCA como ventana
  if (appId === 'store') {
    openStore();
    return;
  }

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
    if (appId === 'browser') setupBrowserApp(win);
    if (appId === 'vault') setupVaultApp(win);
    if (appId === 'activity') setupActivityApp(win);
    if (appId === 'taskmgr') setupTaskmgrApp(win);
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
    if (actionBtnHTML) message.innerHTML += actionBtnHTML;
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

function setupSpotifyApp(win) {
  if (!win) return;

  win.querySelectorAll('.spot-card[data-track-index]').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.trackIndex, 10);
      if (Number.isNaN(idx)) return;
      currentTrackIndex = idx;
      currentPlaybackTime = 0;
      if (!isPlaying) isPlaying = true;
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

function renderSettingsApp() {
  const settingsWinIds = getInstancesOfApp('settings');
  settingsWinIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;

    // ★ Guardar posición de scroll antes de reemplazar
    const prevMain = content.querySelector('.settings-main');
    const prevNav = content.querySelector('.settings-nav');
    const scrollMain = prevMain ? prevMain.scrollTop : 0;
    const scrollNav = prevNav ? prevNav.scrollTop : 0;

    // Re-render
    content.innerHTML = getAppContent('settings');

    // ★ Restaurar posición de scroll después de re-renderizar
    const newMain = content.querySelector('.settings-main');
    const newNav = content.querySelector('.settings-nav');
    if (newMain && scrollMain > 0) newMain.scrollTop = scrollMain;
    if (newNav && scrollNav > 0) newNav.scrollTop = scrollNav;
  });
  refreshIcons();
  setTimeout(syncAllSliders, 0);
}

function setSettingsTab(tabName) {
  settingsState.activeSettingsTab = tabName;
  if (tabName === 'designer') {
    settingsState.designerExpanded = true;
  } else {
    settingsState.designerExpanded = false;
  }
  saveSettingsState();
  renderSettingsApp();
}

function toggleDesignerFolder() {
  settingsState.designerExpanded = !settingsState.designerExpanded;
  saveSettingsState();
  renderSettingsApp();
}

function setShieldSubTab(subTab) {
  if (subTab !== 'security' && subTab !== 'vault') return;
  settingsState.shieldSubTab = subTab;
  settingsState.activeSettingsTab = 'shield';
  settingsState.shieldExpanded = true;
  saveSettingsState();
  renderSettingsApp();
}

function toggleShieldFolder() {
  settingsState.shieldExpanded = !settingsState.shieldExpanded;
  saveSettingsState();
  renderSettingsApp();
}

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

function saveShieldState() {
  try {
    const serializable = { ...shieldState, scanInProgress: false, scanProgress: 0, scanCurrentFile: '' };
    localStorage.setItem(SHIELD_STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {}
}

function toggleShieldFeature(featureId, explicitState = null) {
  const feature = SHIELD_FEATURES[featureId];
  if (!feature) return;

  const newState = explicitState !== null ? explicitState : !shieldState[featureId];
  shieldState[featureId] = newState;
  saveShieldState();

  showToast(
    `${feature.name}: ${newState ? 'Activado' : 'Desactivado'}`,
    newState ? `${feature.description} está ahora en ejecución.` : `${feature.description} fue pausado.`,
    newState ? 'shield-check' : 'shield-off'
  );
  renderSettingsApp();
}

function toggleVpnConnection() {
  const shieldBtn = document.getElementById('shield-vpn-btn');

  if (!shieldState.vpnConnected) {
    if (shieldBtn) {
      shieldBtn.disabled = true;
      shieldBtn.innerHTML = '<i data-lucide="loader-circle" class="shield-spinner"></i> Conectando...';
      refreshIcons();
    }
    const vpnToggle = document.getElementById('vpn-toggle');
    if (vpnToggle) vpnToggle.classList.add('active');

    setTimeout(() => {
      shieldState.vpnConnected = true;
      saveShieldState();
      const vpnServer = VPN_SERVERS.find(s => s.id === shieldState.vpnServer) || VPN_SERVERS[0];
      showToast('VPN Conectada', `Servidor: ${vpnServer.name}`, {
        icon: 'globe',
        level: 'success'
      });
      renderConnectivityState();
      renderSettingsApp();
      logActivity({
        category: 'network',
        level: 'info',
        icon: 'shield-check',
        title: 'VPN Conectada',
        subtitle: `${vpnServer.name} · ${vpnServer.country}`,
        detail: {
          'Servidor': `${vpnServer.flag} ${vpnServer.name}, ${vpnServer.country}`,
          'Protocolo': 'WireGuard',
          'Cifrado': 'AES-256-GCM',
          'Ping': `${vpnServer.ping} ms`,
          description: 'Conexión VPN establecida correctamente. Todo el tráfico está cifrado.'
        }
      });
    }, 1400);
  } else {
    shieldState.vpnConnected = false;
    saveShieldState();
    showToast('VPN Desconectada', 'Conexión segura finalizada.', {
      icon: 'globe-off',
      level: 'warning'
    });
    renderConnectivityState();
    renderSettingsApp();
    logActivity({
      category: 'network',
      level: 'warning',
      icon: 'globe-off',
      title: 'VPN Desconectada',
      subtitle: 'Tráfico ya no está cifrado',
      detail: {
        'Estado': 'Desconectado',
        description: 'La conexión VPN se cerró. El tráfico del sistema ya no está protegido.'
      }
    });
  }
}

function selectVpnServer(serverId) {
  const server = VPN_SERVERS.find(s => s.id === serverId);
  if (!server) return;
  if (shieldState.vpnConnected) {
    showToast('VPN activa', 'Desconectá la VPN antes de cambiar de servidor.', 'info');
    return;
  }
  shieldState.vpnServer = serverId;
  saveShieldState();
  renderSettingsApp();
}

function runShieldScan() {
  if (shieldState.scanInProgress) return;

  shieldState.scanInProgress = true;
  shieldState.scanProgress = 0;
  shieldState.threatsFound = 0;

  const SCAN_ITEMS = [
    '/System/Kernel/nebula-core.bin',
    '/Users/nebula/Documents/facturas_2026.pdf',
    '/Games/Steam/steamapps/cs2.exe',
    '/Downloads/cyberpunk_mod_v3.pak',
    '/System/Drivers/gpu_nvidia.sys',
    '/Users/nebula/Pictures/captura_pantalla_4k.png',
    '/Games/Riot/valorant/valorant.exe',
    '/Temp/cache_browser_4a3f2.bin',
    '/System/Security/kernel-patches.sig',
    '/Users/nebula/Dev/vscode-workspace.json',
    '/Downloads/archivo_sospechoso_xk3.exe',
    '/Games/Epic/fortnite-launcher.exe'
  ];

  const scanNext = () => {
    shieldState.scanProgress += Math.random() * 12 + 6;
    if (shieldState.scanProgress > 100) shieldState.scanProgress = 100;
    shieldState.scanCurrentFile = SCAN_ITEMS[Math.floor(Math.random() * SCAN_ITEMS.length)];

    if (shieldState.scanProgress > 60 && shieldState.threatsFound === 0 && Math.random() > 0.55) {
      shieldState.threatsFound = 1;
    }

    updateShieldScanUI();

    if (shieldState.scanProgress < 100) {
      setTimeout(scanNext, 250 + Math.random() * 200);
    } else {
      setTimeout(() => {
        shieldState.scanInProgress = false;
        shieldState.lastScan = Date.now();

        const scanEntry = {
          id: 'scan-' + Date.now(),
          date: new Date().toISOString(),
          threats: shieldState.threatsFound,
          duration: Math.round(3 + Math.random() * 4),
          filesScanned: 24187 + Math.floor(Math.random() * 500),
          threatDetails: null,
          resolved: true
        };

        if (shieldState.threatsFound > 0) {
          scanEntry.threatDetails = {
            fileName: shieldState.scanCurrentFile || '/Downloads/archivo_sospechoso.exe',
            threatType: 'Trojan.Win32.Agent',
            severity: 'critical',
            detectedBy: 'Antivirus en tiempo real',
            description: 'Este archivo intentó inyectar código malicioso en procesos del sistema. Fue neutralizado por el antivirus en tiempo real y puesto en cuarentena automáticamente.'
          };
          scanEntry.resolved = false;
        }

        shieldState.scanHistory.unshift(scanEntry);
        if (shieldState.scanHistory.length > 8) shieldState.scanHistory.pop();

        if (shieldState.threatsFound > 0) {
          showToast(
            '¡Amenaza Detectada!',
            `${shieldState.threatsFound} archivo${shieldState.threatsFound === 1 ? '' : 's'} sospechoso${shieldState.threatsFound === 1 ? '' : 's'} en cuarentena.`,
            {
              icon: 'alert-triangle',
              level: 'danger',
              duration: 0,  // no auto-cierra
              actions: [
                { id: 'open-center', label: 'Ver amenazas', icon: 'list-checks', variant: 'primary', onClick: () => { openApp('activity'); } },
                { id: 'dismiss', label: 'Ignorar' }
              ]
            },
            true   // force (ignora DND)
          );
          shieldState.threatsQuarantined += shieldState.threatsFound;

          // ★ Log en Centro de Actividad
          logActivity({
            category: 'security',
            level: 'danger',
            icon: 'alert-triangle',
            title: `Amenaza${shieldState.threatsFound > 1 ? 's' : ''} detectada${shieldState.threatsFound > 1 ? 's' : ''}`,
            subtitle: `${shieldState.threatsFound} archivo${shieldState.threatsFound === 1 ? '' : 's'} en cuarentena`,
            detail: {
              'Archivo': shieldState.scanCurrentFile || '/Downloads/archivo_sospechoso.exe',
              'Tipo': 'Trojan.Win32.Agent',
              'Nivel': 'Crítico',
              'Detectado por': 'Antivirus en tiempo real',
              description: 'Este archivo intentó inyectar código malicioso en procesos del sistema. Fue neutralizado por el antivirus en tiempo real y puesto en cuarentena automáticamente.',
              actions: [
                { id: 'delete',  label: 'Eliminar archivo', icon: 'trash-2',    variant: 'danger' },
                { id: 'restore', label: 'Restaurar',        icon: 'rotate-ccw', variant: 'success' },
                { id: 'info',    label: 'Más info',         icon: 'info',       variant: 'default' }
              ]
            }
          });
        } else {
          showToast('Escaneo Completado', 'No se encontraron amenazas. Sistema limpio.', 'shield-check');
          logActivity({
            category: 'security',
            level: 'success',
            icon: 'shield-check',
            title: 'Escaneo completado',
            subtitle: '0 amenazas encontradas',
            detail: {
              'Archivos escaneados': '24,187',
              'Duración': '4 min 12 s',
              'Motor': 'Nebula Shield v2.5',
              'Base de firmas': 'Actualizada hoy',
              description: 'Se realizó un escaneo completo del sistema. No se encontraron amenazas activas.'
            }
          });
        }
      }, 400);
    }
  };

  renderSettingsApp();
  setTimeout(scanNext, 200);
}

function updateShieldScanUI() {
  const progressFill = document.getElementById('shield-scan-fill');
  const progressPct = document.getElementById('shield-scan-pct');
  const currentFile = document.getElementById('shield-scan-file');
  const threatsEl = document.getElementById('shield-scan-threats');

  if (progressFill) progressFill.style.width = `${shieldState.scanProgress}%`;
  if (progressPct) progressPct.textContent = `${Math.round(shieldState.scanProgress)}%`;
  if (currentFile) currentFile.textContent = shieldState.scanCurrentFile || 'Iniciando análisis...';
  if (threatsEl) threatsEl.textContent = String(shieldState.threatsFound);
}

function cancelShieldScan() {
  if (!shieldState.scanInProgress) return;
  shieldState.scanInProgress = false;
  shieldState.scanProgress = 0;
  showToast('Escaneo Cancelado', 'El análisis fue detenido por el usuario.', 'x-circle');
  renderSettingsApp();
}

function toggleShieldScheduledScan() {
  shieldState.scheduledScan = !shieldState.scheduledScan;
  saveShieldState();
  showToast(
    'Escaneo Automático',
    shieldState.scheduledScan ? 'Análisis semanal programado cada lunes a las 03:00.' : 'Análisis automático desactivado.',
    shieldState.scheduledScan ? 'calendar-check' : 'calendar-x'
  );
  renderSettingsApp();
}

function getTimeAgo(timestamp) {
  if (!timestamp) return 'Nunca';
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Hace unos segundos';
  if (mins < 60) return `Hace ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hace ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `Hace ${days} día${days === 1 ? '' : 's'}`;
  const months = Math.floor(days / 30);
  return `Hace ${months} mes${months === 1 ? '' : 'es'}`;
}

function saveUpdatesState() {
  try {
    const serializable = { ...updatesState, updateInProgress: false, updateProgress: 0, updateStage: '' };
    localStorage.setItem(UPDATES_STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {}
}

function simulateUpdateCheck() {
  const btn = document.getElementById('updates-check-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-circle" class="shield-spinner"></i> Buscando...';
    refreshIcons();
  }

  showToast('Buscando Actualizaciones', 'Consultando servidores de Nebula OS...', 'search');

  setTimeout(() => {
    updatesState.updateCheckedAt = Date.now();

    if (updatesState.updateAvailable) {
      showToast('Actualización Disponible', `Nebula OS v${updatesState.availableVersion} "${updatesState.availableCodename}" está lista para instalar.`, 'download');
    } else {
      showToast('Sistema Actualizado', 'Ya tenés la última versión disponible.', 'check-circle-2');
    }

    saveUpdatesState();
    renderSettingsApp();
  }, 2200);
}

function installUpdate() {
  if (updatesState.updateInProgress) return;
  if (!updatesState.updateAvailable) {
    showToast('Sin actualizaciones', 'No hay nuevas versiones disponibles.', 'info');
    return;
  }

  updatesState.updateInProgress = true;
  updatesState.updateProgress = 0;
  updatesState.updateStage = 'descargando';
  renderSettingsApp();

  const tick = () => {
    updatesState.updateProgress += Math.random() * 8 + 4;

    if (updatesState.updateProgress >= 100) {
      updatesState.updateProgress = 100;
      updateUpdatesUI();

      if (updatesState.updateStage === 'descargando') {
        setTimeout(() => {
          updatesState.updateStage = 'instalando';
          updatesState.updateProgress = 0;
          renderSettingsApp();
          setTimeout(tick, 400);
        }, 600);
        return;
      }

      if (updatesState.updateStage === 'instalando') {
        setTimeout(() => {
          updatesState.updateStage = 'verificando';
          updatesState.updateProgress = 0;
          renderSettingsApp();
          setTimeout(tick, 400);
        }, 600);
        return;
      }

      setTimeout(() => {
        const prevVersion = updatesState.currentVersion;
        updatesState.updateInProgress = false;
        updatesState.updateProgress = 0;
        updatesState.updateStage = '';
        updatesState.currentVersion = updatesState.availableVersion;
        updatesState.currentCodename = updatesState.availableCodename;
        updatesState.updateAvailable = false;
        updatesState.updateHistory.unshift({
          version: updatesState.availableVersion,
          codename: updatesState.availableCodename,
          date: 'Hace unos segundos',
          size: updatesState.updateSize
        });
        if (updatesState.updateHistory.length > 6) updatesState.updateHistory.pop();
        saveUpdatesState();
        renderSettingsApp();
        showToast('¡Actualización Completa!', `Nebula OS v${updatesState.currentVersion} instalada correctamente. Reiniciando subsistemas...`, {
          icon: 'check-circle-2',
          level: 'success'
        });
        logActivity({
          category: 'system',
          level: 'success',
          icon: 'download',
          title: 'Actualización del sistema',
          subtitle: `v${updatesState.currentVersion} "${updatesState.currentCodename}" instalada`,
          detail: {
            'Versión anterior': `v${prevVersion}`,
            'Nueva versión': `v${updatesState.currentVersion}`,
            'Tamaño': updatesState.updateSize,
            description: 'La actualización se instaló correctamente. Mejoras de rendimiento y correcciones de seguridad aplicadas.'
          }
        });
      }, 800);
      return;
    }

    updateUpdatesUI();
    setTimeout(tick, 220 + Math.random() * 180);
  };

  setTimeout(tick, 300);
}

function updateUpdatesUI() {
  const fill = document.getElementById('updates-progress-fill');
  const pct = document.getElementById('updates-progress-pct');
  const stageEl = document.getElementById('updates-stage-label');

  if (fill) fill.style.width = `${updatesState.updateProgress}%`;
  if (pct) pct.textContent = `${Math.round(updatesState.updateProgress)}%`;

  if (stageEl) {
    const stageLabels = {
      descargando: 'Descargando paquete...',
      instalando: 'Instalando archivos...',
      verificando: 'Verificando integridad (SHA-256)...',
      '': 'Preparando...'
    };
    stageEl.textContent = stageLabels[updatesState.updateStage] || 'Preparando...';
  }
}

function scheduleUpdateLater() {
  showToast('Actualización Programada', 'Nebula OS se actualizará automáticamente cuando no estés usando el equipo.', 'clock');
}

function toggleAutoUpdate() {
  updatesState.autoUpdate = !updatesState.autoUpdate;
  saveUpdatesState();
  showToast(
    'Auto-Actualización',
    updatesState.autoUpdate ? 'Las actualizaciones se instalarán automáticamente.' : 'Ahora instalás las actualizaciones manualmente.',
    updatesState.autoUpdate ? 'toggle-right' : 'toggle-left'
  );
  renderSettingsApp();
}

function toggleBetaChannel() {
  updatesState.betaChannel = !updatesState.betaChannel;
  saveUpdatesState();
  showToast(
    'Canal Beta',
    updatesState.betaChannel ? 'Ahora recibís versiones beta antes que nadie. Podés experimentar inestabilidad.' : 'Volviste al canal estable.',
    updatesState.betaChannel ? 'flask-conical' : 'shield'
  );
  renderSettingsApp();
}

/* ═══════════════════════════════════════════════════════════════
   ★ SECCIÓN: NEBULA SHIELD — HTML
═══════════════════════════════════════════════════════════════ */

function getShieldSecurityHTML() {
  const activeCount = ['antivirus', 'firewall', 'encryption', 'behavior'].filter(k => shieldState[k]).length;
  const totalCount = 4;
  const isProtected = activeCount >= 3;
  const statusLabel = isProtected ? 'SISTEMA PROTEGIDO' : (activeCount >= 2 ? 'PROTECCIÓN PARCIAL' : 'PROTECCIÓN BAJA');
  const statusClass = isProtected ? 'protected' : (activeCount >= 2 ? 'warning' : 'danger');
  const activeVpn = VPN_SERVERS.find(s => s.id === shieldState.vpnServer) || VPN_SERVERS[0];

  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">NEBULA SHIELD</div>
        <h2>Seguridad & Protección</h2>
        <p>Antivirus, firewall y VPN en tiempo real. Estado actual de tu sistema.</p>
      </div>
      <div class="settings-status shield-status-${statusClass}">
        <span class="shield-status-dot"></span> ${statusLabel}
      </div>
    </div>

    <div class="settings-section-label">Estado de Protección (${activeCount}/${totalCount} activos)</div>
    <div class="shield-status-grid">
      ${Object.values(SHIELD_FEATURES).map(feature => {
        const isOn = shieldState[feature.id];
        return `
          <div class="shield-card ${isOn ? 'active' : 'inactive'}" data-feature="${feature.id}">
            <div class="shield-card-top">
              <div class="shield-card-icon" style="color: ${isOn ? feature.color : 'var(--text-sub)'};">
                <i data-lucide="${feature.icon}"></i>
              </div>
              <div class="shield-card-state">
                <span class="shield-card-led ${isOn ? 'on' : 'off'}"></span>
              </div>
            </div>
            <strong class="shield-card-title">${feature.name}</strong>
            <small class="shield-card-desc">${feature.description}</small>
            <button class="shield-card-btn ${isOn ? 'on' : ''}" type="button" onclick="toggleShieldFeature('${feature.id}')">
              ${isOn ? 'Activo · Desactivar' : 'Inactivo · Activar'}
            </button>
          </div>
        `;
      }).join('')}
    </div>

    <div class="settings-section-label">VPN NEBULA SHIELD</div>
    <div class="shield-vpn-card ${shieldState.vpnConnected ? 'connected' : ''}">
      <div class="shield-vpn-main">
        <div class="shield-vpn-icon">
          <i data-lucide="globe"></i>
          <span class="shield-vpn-pulse ${shieldState.vpnConnected ? 'active' : ''}"></span>
        </div>
        <div class="shield-vpn-info">
          <strong>${shieldState.vpnConnected ? 'Conexión Segura Activa' : 'VPN Desconectada'}</strong>
          <small>
            <span class="shield-vpn-flag">${activeVpn.flag}</span>
            ${activeVpn.name}, ${activeVpn.country}
            ${shieldState.vpnConnected ? `<span class="shield-vpn-ping">· ${activeVpn.ping} ms</span>` : ''}
          </small>
        </div>
        <button class="shield-vpn-btn ${shieldState.vpnConnected ? 'danger' : ''}" id="shield-vpn-btn" type="button" onclick="toggleVpnConnection()">
          ${shieldState.vpnConnected ? '<i data-lucide="power"></i> Desconectar' : '<i data-lucide="power"></i> Conectar'}
        </button>
      </div>

      <div class="shield-vpn-servers">
        <span class="shield-vpn-servers-label">Servidor:</span>
        <div class="shield-vpn-servers-list">
          ${VPN_SERVERS.map(s => `
            <button class="shield-vpn-server ${shieldState.vpnServer === s.id ? 'active' : ''}" type="button" onclick="selectVpnServer('${s.id}')">
              <span>${s.flag}</span> ${s.name}
              <small>${s.ping}ms</small>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="settings-section-label">Escaneo del Sistema</div>
    <div class="shield-scan-card ${shieldState.scanInProgress ? 'scanning' : ''}">
      <div class="shield-scan-header">
        <div class="shield-scan-info">
          <strong>
            <i data-lucide="${shieldState.scanInProgress ? 'loader-circle' : 'scan-line'}" class="${shieldState.scanInProgress ? 'shield-spinner' : ''}"></i>
            ${shieldState.scanInProgress ? 'Escaneando sistema...' : 'Análisis de Amenazas'}
          </strong>
          <small>Último escaneo: ${getTimeAgo(shieldState.lastScan)}</small>
        </div>
        <div class="shield-scan-stats">
          <span class="shield-scan-stat">
            <strong id="shield-scan-threats" class="${shieldState.threatsFound > 0 ? 'danger' : ''}">${shieldState.threatsFound}</strong>
            amenazas
          </span>
        </div>
      </div>

      ${shieldState.scanInProgress ? `
        <div class="shield-scan-progress">
          <div class="shield-scan-bar">
            <div class="shield-scan-fill" id="shield-scan-fill" style="width: ${shieldState.scanProgress}%"></div>
          </div>
          <div class="shield-scan-meta">
            <span class="shield-scan-pct" id="shield-scan-pct">${Math.round(shieldState.scanProgress)}%</span>
            <span class="shield-scan-file" id="shield-scan-file">${escapeHtml(shieldState.scanCurrentFile || 'Iniciando análisis...')}</span>
          </div>
        </div>
        <button class="shield-scan-btn cancel" type="button" onclick="cancelShieldScan()">
          <i data-lucide="x"></i> Cancelar escaneo
        </button>
      ` : `
        <button class="shield-scan-btn" type="button" onclick="runShieldScan()">
          <i data-lucide="scan-line"></i> Escanear ahora
        </button>
      `}

      <div class="shield-scan-scheduled">
        <div class="shield-scan-scheduled-info">
          <i data-lucide="calendar-clock"></i>
          <div>
            <strong>Análisis semanal automático</strong>
            <small>Cada lunes a las 03:00 AM · Duración estimada 4 min</small>
          </div>
        </div>
        <button class="quick-switch ${shieldState.scheduledScan ? 'active' : ''}" type="button" onclick="toggleShieldScheduledScan()" aria-label="Toggle escaneo programado">
          <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
        </button>
      </div>
    </div>

    ${shieldState.scanHistory.length > 0 ? `
      <div class="settings-section-label">Historial de Escaneos</div>
      <div class="shield-history-list">
        ${shieldState.scanHistory.slice(0, 5).map(item => {
          return renderShieldHistoryItemHTML(item);
        }).join('')}
      </div>
    ` : ''}
  `;
}

function getShieldVaultHTML() {
  const count = vaultState.entries.length;
  const isUnlocked = vaultState.unlocked;
  const hasDefaultMaster = !vaultState.masterChanged;
  const lastOpened = vaultState.lastOpenedAt ? getTimeAgo(vaultState.lastOpenedAt) : 'Nunca abierto';
  const strength = calculateVaultOverallStrength();

  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">NEBULA SHIELD</div>
        <h2>Gestor de Contraseñas</h2>
        <p>Bóveda cifrada localmente para guardar tus credenciales de forma segura.</p>
      </div>
      <div class="settings-status shield-status-${isUnlocked ? 'protected' : 'warning'}">
        <span class="shield-status-dot"></span>
        ${isUnlocked ? 'DESBLOQUEADA' : 'BLOQUEADA'}
      </div>
    </div>

    <div class="settings-section-label">Estado de la Bóveda</div>
    <div class="vault-shield-card ${isUnlocked ? 'unlocked' : 'locked'}">
      <div class="vault-shield-main">
        <div class="vault-shield-icon">
          <i data-lucide="key-round"></i>
          <span class="vault-shield-status ${isUnlocked ? 'unlocked' : 'locked'}"></span>
        </div>

        <div class="vault-shield-info">
          <div class="vault-shield-title-row">
            <strong>Nebula Vault</strong>
            <span class="vault-shield-status-badge ${isUnlocked ? 'unlocked' : 'locked'}">
              <i data-lucide="${isUnlocked ? 'unlock' : 'lock'}"></i>
              ${isUnlocked ? 'Desbloqueada' : 'Bloqueada'}
            </span>
          </div>
          <small>Gestor seguro de contraseñas · Cifrado local AES-256</small>
          <div class="vault-shield-stats">
            <span class="vault-shield-stat">
              <i data-lucide="key-round"></i>
              <strong>${count}</strong> contraseña${count === 1 ? '' : 's'}
            </span>
            <span class="vault-shield-stat" style="color: ${strength.color};">
              <i data-lucide="shield"></i>
              <strong>${strength.label}</strong>
            </span>
            <span class="vault-shield-stat">
              <i data-lucide="clock"></i>
              ${lastOpened}
            </span>
          </div>
        </div>

        <div class="vault-shield-actions">
          <button class="vault-shield-btn ${isUnlocked ? 'danger' : 'primary'}" type="button" onclick="${isUnlocked ? 'lockVaultFromShield()' : 'openVaultFromShield()'}">
            <i data-lucide="${isUnlocked ? 'lock' : 'key-round'}"></i>
            ${isUnlocked ? 'Bloquear' : 'Abrir Vault'}
          </button>
        </div>
      </div>

      ${hasDefaultMaster ? `
        <div class="vault-shield-warning">
          <i data-lucide="alert-triangle"></i>
          <div>
            <strong>Estás usando la contraseña maestra por defecto</strong>
            <small>Por seguridad, cambiá <code>nebula123</code> por una contraseña propia.</small>
          </div>
          <button class="vault-shield-warning-btn" type="button" onclick="openMasterPasswordModal()">
            <i data-lucide="pencil"></i> Cambiar
          </button>
        </div>
      ` : `
        <div class="vault-shield-footer">
          <button class="vault-shield-link-btn" type="button" onclick="openMasterPasswordModal()">
            <i data-lucide="key"></i> Cambiar contraseña maestra
          </button>
        </div>
      `}
    </div>

    <div class="settings-section-label">Contraseñas Guardadas</div>
    ${count > 0 ? `
      <div class="vault-mini-list">
        ${vaultState.entries.slice(0, 5).map(entry => {
          const cat = VAULT_CATEGORIES.find(c => c.id === entry.category) || VAULT_CATEGORIES[5];
          const strength = calculatePasswordStrength(entry.password);
          return `
            <div class="vault-mini-item">
              <div class="vault-mini-icon" style="background: ${cat.color}20; color: ${cat.color};">
                <i data-lucide="${cat.icon}"></i>
              </div>
              <div class="vault-mini-info">
                <strong>${escapeHtml(entry.title)}</strong>
                <small>${escapeHtml(entry.username)}</small>
              </div>
              <div class="vault-mini-strength">
                <div class="vault-strength-bar">
                  <span style="width: ${strength.percent}%; background: ${strength.color};"></span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
        ${count > 5 ? `<div class="vault-mini-more">+${count - 5} más…</div>` : ''}
      </div>
    ` : `
      <div class="vault-empty">
        <div class="vault-empty-icon"><i data-lucide="shield-off"></i></div>
        <strong>No hay contraseñas guardadas</strong>
        <span>Abrí Nebula Vault para agregar tu primera contraseña.</span>
      </div>
    `}
  `;
}
/* ═══════════════════════════════════════════════════════════════
   ★ SECCIÓN: SETTINGS HTML — Sistema, Gaming, Designer, Updates
═══════════════════════════════════════════════════════════════ */

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
      <div class="designer-control-item"><div class="designer-control-info"><strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="cpu" style="color:var(--accent);"></i> Procesador (CPU)</strong><small>AMD Ryzen 9 7950X · 16 Cores, 32 Threads @ 4.5 - 5.7 GHz</small></div></div>
      <div class="designer-control-item"><div class="designer-control-info"><strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="activity" style="color:#00ffcc;"></i> Tarjeta Gráfica (GPU)</strong><small>NVIDIA GeForce RTX 4090 · 24GB GDDR6X · Driver 560.81 GameReady</small></div></div>
      <div class="designer-control-item">
        <div class="designer-control-info"><strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="zap" style="color:#ff71ce;"></i> Memoria RAM</strong><small>32 GB DDR5 6000MHz Dual-Channel (Uso actual: ${systemMetrics.ram}%)</small></div>
        <button class="hud-tool-btn" onclick="simulateCleanRam()" style="margin-left:auto;"><i data-lucide="sparkles"></i> Limpiar</button>
      </div>
      <div class="designer-control-item"><div class="designer-control-info"><strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="monitor" style="color:#38bdf8;"></i> Pantalla</strong><small>2560x1440 QHD @ 240Hz OLED HDR · Espacio de trabajo ${currentWorkspace}/5</small></div></div>
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
        <div class="designer-control-info"><strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="gamepad-2" style="color:#00ffcc;"></i> Modo Juego (Game Mode)</strong><small>Fija el perfil en Máximo Rendimiento y reduce efectos pesados</small></div>
        <button class="quick-switch ${gameModeActive ? 'active' : ''}" onclick="toggleGameMode()" style="padding:0; border:0; background:transparent;"><span class="pill-switch-track"><span class="pill-switch-thumb"></span></span></button>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info"><strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="activity" style="color:#3a86ff;"></i> Gaming Overlay (HUD)</strong><small>Atajo rápido: <kbd style="color:#00ffcc; background:rgba(255,255,255,0.1); padding:2px 5px; border-radius:4px;">Alt + Z</kbd></small></div>
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

function getWidgetsGalleryHTML() {
  const hasGamingHub = desktopWidgets.some(w => w.type === 'gaming-hub');
  const weatherCount = desktopWidgets.filter(w => w.type === 'weather').length;

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
          <span class="widget-gallery-status"><span class="status-dot"></span>${hasGamingHub ? 'Activo' : 'Inactivo'}</span>
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
            <div class="wg-weather-minmax"><span>H: 31°</span><span>L: 21°</span></div>
          </div>
        </div>
        <div class="widget-gallery-info">
          <strong>${WIDGET_CATALOG['weather'].name}</strong>
          <small>${WIDGET_CATALOG['weather'].description}</small>
          ${weatherCount > 0 ? `<small style="color: var(--accent); font-weight: 700; margin-top: 2px;">${weatherCount} activo${weatherCount === 1 ? '' : 's'}</small>` : ''}
        </div>
        <div class="widget-gallery-action">
          <span class="widget-gallery-status"><span class="status-dot"></span>${weatherCount > 0 ? 'Activo' : 'Inactivo'}</span>
          <div style="display:flex; gap:6px;">
            <button class="widget-gallery-btn" type="button" onclick="addWeatherWidget()"><i data-lucide="plus"></i> Agregar</button>
            ${weatherCount > 0 ? `<button class="widget-gallery-btn danger" type="button" onclick="removeAllWeatherWidgets()"><i data-lucide="trash-2"></i></button>` : ''}
          </div>
        </div>
      </div>

      ${Object.values(WIDGET_CATALOG).filter(w => w.available && !['gaming-hub', 'weather'].includes(w.id)).map(widget => `
        <div class="widget-gallery-card ${desktopWidgets.some(dw => dw.type === widget.type) ? 'active' : ''}">
          <div class="widget-gallery-preview">
            <div class="widget-gallery-preview-inner">
              <div class="widget-gallery-preview-tile" style="grid-column: span 2;"><i data-lucide="${widget.icon}" style="color:var(--accent);"></i></div>
            </div>
          </div>
          <div class="widget-gallery-info">
            <strong>${widget.name}</strong>
            <small>${widget.description}</small>
          </div>
          <div class="widget-gallery-action">
            <span class="widget-gallery-status"><span class="status-dot"></span>${desktopWidgets.some(dw => dw.type === widget.type) ? 'Activo' : 'Inactivo'}</span>
            ${desktopWidgets.some(dw => dw.type === widget.type)
              ? `<button class="widget-gallery-btn danger" type="button" onclick="removeDesktopWidget('${desktopWidgets.find(dw => dw.type === widget.type)?.id}')"><i data-lucide="trash-2"></i> Quitar</button>`
              : `<button class="widget-gallery-btn" type="button" onclick="addDesktopWidget('${widget.type}')"><i data-lucide="plus"></i> Agregar</button>`
            }
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

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
      ${Object.entries(THEME_PRESETS).map(([key, preset]) => `
        <div class="theme-preset-card ${designerState.activePreset === key ? 'selected' : ''}" onclick="applyThemePreset('${key}')">
          <div class="preset-colors-row">
            ${preset.colors.map(c => `<span class="preset-color-chip" style="background:${c};"></span>`).join('')}
          </div>
          <strong>${preset.name}</strong>
          <small>${preset.name.includes('Cyberpunk') ? 'Cyan neón, sombras optimizadas y alto contraste' : preset.name.includes('Catppuccin') ? 'Tonos pastel lavanda, desenfoque suave y relajante' : preset.name.includes('Synthwave') ? 'Magenta brillante, estética 80s arcade' : preset.name.includes('Stealth') ? 'Carbón táctico y esmeralda de bajo consumo visual' : 'Acento cyan con fondo neutro oscuro, estética limpia y sobria'}</small>
        </div>
      `).join('')}
    </div>

    <div class="settings-section-label">Ajuste Fino en Vivo (CSS Variables)</div>
    <div class="designer-controls-grid">
      <div class="designer-control-item">
        <div class="designer-control-info"><strong>Color Primario / Acento (--accent)</strong><small>Color de botones activos, bordes y brillos</small></div>
        <input type="color" class="designer-color-picker" value="${designerState.accent}" onchange="setLiveAccentColor(this.value)">
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info"><strong>Desenfoque Glassmorphism (--blur-amount)</strong><small>Nivel de blur de ventanas y paneles</small></div>
        <div class="designer-control-input">
          <input type="range" min="0" max="30" value="${designerState.blurAmount}" oninput="setLiveBlurAmount(this.value)">
          <span id="designer-blur-val">${designerState.blurAmount}px</span>
        </div>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info"><strong>Redondeo de Bordes (--radius-md)</strong><small>Curvatura de ventanas y tarjetas</small></div>
        <div class="designer-control-input">
          <input type="range" min="0" max="28" value="${designerState.borderRadius}" oninput="setLiveBorderRadius(this.value)">
          <span id="designer-radius-val">${designerState.borderRadius}px</span>
        </div>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info"><strong>Opacidad de Paneles (--panel-color)</strong><small>Translucidez del cristal de la UI</small></div>
        <div class="designer-control-input">
          <input type="range" min="20" max="95" value="${Math.round(designerState.panelAlpha * 100)}" oninput="setLivePanelAlpha(this.value)">
          <span id="designer-alpha-val">${Math.round(designerState.panelAlpha * 100)}%</span>
        </div>
      </div>
      <div class="designer-control-item">
        <div class="designer-control-info"><strong>Sombras de Ventanas (--shadow)</strong><small>Intensidad de la sombra proyectada por ventanas y paneles</small></div>
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
            <button class="dock-preview-close" type="button" aria-label="Cerrar ventana"><i data-lucide="x"></i></button>
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

function getDesignerWallpapersHTML() {
  const allWallpapers = [...WALLPAPERS];
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
      ${allWallpapers.map((wp, index) => `
        <div class="theme-preset-card ${currentWallpaperIndex === index ? 'selected' : ''}" onclick="applyWallpaper(${index})">
          <div style="height:65px; border-radius:8px; background:url('./assets/images/fondosDePantalla/${wp.file}') center/cover; margin-bottom:8px; border:1px solid rgba(255,255,255,0.15);"></div>
          <strong>${wp.name}</strong>
          <small>${wp.name === 'Nebula' ? 'Violeta espacial profundo y nebulosas estelares' : wp.name === 'Aurora' ? 'Azul ártico cósmico y resplandor polar' : wp.name === 'Solar' ? 'Dorado estelar cálido y destellos solares' : wp.name}</small>
        </div>
      `).join('')}
    </div>
  `;
}

function getDesignerSettingsHTML() {
  const subTab = settingsState.designerSubTab || 'styles';
  if (subTab === 'wallpapers') return getDesignerWallpapersHTML();
  return getDesignerStylesHTML();
}

function getUpdatesSettingsHTML() {
  const hasUpdate = updatesState.updateAvailable;
  const statusLabel = hasUpdate
    ? `ACTUALIZACIÓN A v${updatesState.availableVersion}`
    : 'SISTEMA AL DÍA';
  const statusClass = hasUpdate ? 'warning' : 'protected';

  return `
    <div class="settings-heading">
      <div>
        <div class="settings-kicker">NEBULA UPDATES</div>
        <h2>Actualizaciones del Sistema</h2>
        <p>Versión actual, parches de seguridad y mejoras de rendimiento.</p>
      </div>
      <div class="settings-status shield-status-${statusClass}">
        <span class="shield-status-dot"></span> ${statusLabel}
      </div>
    </div>

    <div class="settings-section-label">Estado de Versión</div>
    <div class="updates-version-card">
      <div class="updates-version-row">
        <div class="updates-version-info">
          <span class="updates-version-label">Versión actual</span>
          <strong class="updates-version-number">v${updatesState.currentVersion}</strong>
          <small class="updates-version-codename">Codename "${updatesState.currentCodename}" · Canal ${updatesState.betaChannel ? 'Beta' : 'Estable'}</small>
        </div>
        <div class="updates-version-icon">
          <i data-lucide="package-check"></i>
        </div>
      </div>
    </div>

    ${hasUpdate ? `
      <div class="settings-section-label">Actualización Disponible</div>
      <div class="updates-available-card ${updatesState.updateInProgress ? 'installing' : ''}">
        <div class="updates-available-header">
          <div>
            <div class="updates-available-badge">
              <i data-lucide="sparkles"></i> NUEVO
            </div>
            <h3>Nebula OS v${updatesState.availableVersion} <span class="updates-codename">"${updatesState.availableCodename}"</span></h3>
            <small>Tamaño: ${updatesState.updateSize} · Disponible desde hoy</small>
          </div>
        </div>

        <ul class="updates-changelog">
          <li><i data-lucide="sparkles"></i> Nuevo widget de clima con selector de ciudad</li>
          <li><i data-lucide="zap"></i> Mejora del +12% de FPS en Game Mode</li>
          <li><i data-lucide="bug"></i> Corrección de bugs en el gestor de ventanas</li>
          <li><i data-lucide="shield-check"></i> Parches de seguridad CVE-2026-4521 y CVE-2026-4518</li>
          <li><i data-lucide="palette"></i> Nuevos presets visuales y mejoras del Designer</li>
        </ul>

        ${updatesState.updateInProgress ? `
          <div class="updates-progress">
            <div class="updates-progress-header">
              <span id="updates-stage-label">Preparando...</span>
              <span class="updates-progress-pct" id="updates-progress-pct">${Math.round(updatesState.updateProgress)}%</span>
            </div>
            <div class="updates-progress-bar">
              <div class="updates-progress-fill" id="updates-progress-fill" style="width: ${updatesState.updateProgress}%"></div>
            </div>
          </div>
        ` : `
          <div class="updates-actions">
            <button class="updates-btn primary" type="button" onclick="installUpdate()">
              <i data-lucide="download"></i> Actualizar ahora
            </button>
            <button class="updates-btn ghost" type="button" onclick="scheduleUpdateLater()">
              <i data-lucide="clock"></i> Programar
            </button>
          </div>
        `}
      </div>
    ` : `
      <div class="settings-section-label">Estado</div>
      <div class="updates-uptodate-card">
        <div class="updates-uptodate-icon">
          <i data-lucide="check-circle-2"></i>
        </div>
        <div class="updates-uptodate-info">
          <strong>¡Estás en la última versión!</strong>
          <small>Última verificación: ${getTimeAgo(updatesState.updateCheckedAt)}</small>
        </div>
      </div>
    `}

    <div class="updates-check-row">
      <button class="updates-btn ghost" id="updates-check-btn" type="button" onclick="simulateUpdateCheck()">
        <i data-lucide="refresh-cw"></i> Buscar actualizaciones
      </button>
    </div>

    <div class="settings-section-label">Preferencias</div>
    <div class="designer-controls-grid">
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="download-cloud" style="color:var(--accent);"></i> Auto-Actualización</strong>
          <small>Instalar automáticamente cuando estén disponibles</small>
        </div>
        <button class="quick-switch ${updatesState.autoUpdate ? 'active' : ''}" type="button" onclick="toggleAutoUpdate()" aria-label="Toggle auto update">
          <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
        </button>
      </div>

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;"><i data-lucide="flask-conical" style="color:var(--accent-orange);"></i> Canal Beta</strong>
          <small>Recibir versiones de prueba antes del lanzamiento público</small>
        </div>
        <button class="quick-switch ${updatesState.betaChannel ? 'active' : ''}" type="button" onclick="toggleBetaChannel()" aria-label="Toggle beta channel">
          <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
        </button>
      </div>
    </div>

    <div class="settings-section-label">Historial de Versiones</div>
    <div class="updates-history-list">
      ${updatesState.updateHistory.map(item => `
        <div class="updates-history-item">
          <div class="updates-history-icon">
            <i data-lucide="package"></i>
          </div>
          <div class="updates-history-info">
            <strong>v${item.version} <span class="updates-codename">"${item.codename}"</span></strong>
            <small>${item.date} · ${item.size}</small>
          </div>
          <span class="updates-history-check">
            <i data-lucide="check-circle-2"></i>
          </span>
        </div>
      `).join('')}
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   ★ SECCIÓN: SETTINGS NAV — Sidebar
═══════════════════════════════════════════════════════════════ */

function getSettingsNavHTML() {
  const activeTab = settingsState.activeSettingsTab || 'system';
  const designerExpanded = settingsState.designerExpanded !== false;
  const designerSubTab = settingsState.designerSubTab || 'styles';
  const shieldExpanded = settingsState.shieldExpanded !== false;
  const shieldSubTab = settingsState.shieldSubTab || 'security';

  return `
    <aside class="settings-nav">
      <div class="settings-nav-title"><i data-lucide="sliders"></i> Ajustes</div>

      <div class="settings-nav-item ${activeTab === 'system' ? 'active' : ''}" onclick="setSettingsTab('system')">
        <i data-lucide="monitor"></i> Sistema
      </div>

      <div class="settings-nav-folder ${activeTab === 'shield' ? 'active' : ''} ${shieldExpanded ? 'expanded' : ''}">
        <div class="settings-nav-folder-header" onclick="setSettingsTab('shield')">
          <span class="settings-nav-folder-label"><i data-lucide="shield-check"></i> Nebula Shield</span>
          <button type="button" class="settings-nav-folder-toggle" onclick="event.stopPropagation(); toggleShieldFolder();" aria-label="Expandir/colapsar carpeta">
            <i data-lucide="chevron-down" class="settings-nav-folder-chevron"></i>
          </button>
        </div>
        <div class="settings-nav-sub ${shieldExpanded ? 'expanded' : ''}">
          <div class="settings-nav-subitem ${activeTab === 'shield' && shieldSubTab === 'security' ? 'active' : ''}" onclick="setShieldSubTab('security')">
            <i data-lucide="lock"></i> Seguridad & Protección
          </div>
          <div class="settings-nav-subitem ${activeTab === 'shield' && shieldSubTab === 'vault' ? 'active' : ''}" onclick="setShieldSubTab('vault')">
            <i data-lucide="key-round"></i> Gestor de Contraseñas
          </div>
          <div class="settings-nav-subitem" onclick="openActivityFromShield()">
            <i data-lucide="list-checks"></i> Centro de Actividad
          </div>
        </div>
      </div>

      <div class="settings-nav-item ${activeTab === 'updates' ? 'active' : ''}" onclick="setSettingsTab('updates')">
        <i data-lucide="download"></i> Actualizaciones
        ${updatesState.updateAvailable ? '<span class="settings-nav-badge">1</span>' : ''}
      </div>

      <div class="settings-nav-folder ${activeTab === 'designer' ? 'active' : ''} ${designerExpanded ? 'expanded' : ''}">
        <div class="settings-nav-folder-header" onclick="setSettingsTab('designer')">
          <span class="settings-nav-folder-label"><i data-lucide="palette"></i> Nebula Designer</span>
          <button type="button" class="settings-nav-folder-toggle" onclick="event.stopPropagation(); toggleDesignerFolder();" aria-label="Expandir/colapsar carpeta">
            <i data-lucide="chevron-down" class="settings-nav-folder-chevron"></i>
          </button>
        </div>
        <div class="settings-nav-sub ${designerExpanded ? 'expanded' : ''}">
          <div class="settings-nav-subitem ${activeTab === 'designer' && designerSubTab === 'styles' ? 'active' : ''}" onclick="setDesignerSubTab('styles')"><i data-lucide="paintbrush"></i> Estilos</div>
          <div class="settings-nav-subitem ${activeTab === 'designer' && designerSubTab === 'wallpapers' ? 'active' : ''}" onclick="setDesignerSubTab('wallpapers')"><i data-lucide="image"></i> Fondos de Pantalla</div>
        </div>
      </div>

      <div class="settings-nav-item ${activeTab === 'gaming' ? 'active' : ''}" onclick="setSettingsTab('gaming')"><i data-lucide="gamepad-2"></i> Gaming & HUD</div>
    </aside>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   ★ HISTORIAL DE ESCANEOS — Items expandibles
═══════════════════════════════════════════════════════════════ */

function renderShieldHistoryItemHTML(item) {
  const date = new Date(item.date);
  const dateStr = `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
  const clean = item.threats === 0;
  const hasDetails = !!item.threatDetails;
  const isExpanded = shieldHistoryExpandedId === item.id;
  const isResolved = item.resolved === true;
  const hasUnresolved = hasDetails && !isResolved;

  let badgesHTML = '';
  if (hasUnresolved) {
    badgesHTML = `<span class="shield-history-badge unresolved">Sin resolver</span>`;
  } else if (hasDetails && isResolved) {
    badgesHTML = `<span class="shield-history-badge resolved">Resuelto</span>`;
  }

  let detailHTML = '';
  if (hasDetails && isExpanded) {
    detailHTML = renderShieldHistoryDetailHTML(item);
  }

  return `
    <div class="shield-history-item-expandable ${clean ? 'clean' : 'threat'} ${isExpanded ? 'expanded' : ''}"
         data-scan-id="${item.id}">
      <div class="shield-history-item-header"
           onclick="toggleShieldHistoryItem('${item.id}')"
           ${!hasDetails ? 'style="cursor: default;"' : ''}>
        <span class="shield-history-icon">
          <i data-lucide="${clean ? 'shield-check' : 'alert-triangle'}"></i>
        </span>
        <div class="shield-history-info">
          <strong>${clean ? 'Sin amenazas' : `${item.threats} amenaza${item.threats === 1 ? '' : 's'} detectada${item.threats === 1 ? '' : 's'}`}</strong>
          <small>${dateStr} · ${item.duration} min</small>
        </div>
        ${badgesHTML}
        ${hasDetails ? `<i data-lucide="chevron-down" class="shield-history-chevron"></i>` : ''}
      </div>
      ${hasDetails ? `
        <div class="shield-history-item-detail">
          ${detailHTML}
        </div>
      ` : ''}
    </div>
  `;
}

function renderShieldHistoryDetailHTML(item) {
  const details = item.threatDetails;
  if (!details) return '';

  const detailRows = [
    { label: 'Archivos escaneados', value: item.filesScanned.toLocaleString('es-AR') },
    { label: 'Amenazas encontradas', value: String(item.threats), danger: item.threats > 0 },
    { label: 'Duración', value: `${item.duration} min` },
    { label: 'Tipo detectado', value: details.threatType, danger: true },
    { label: 'Archivo', value: details.fileName, mono: true },
    { label: 'Detectado por', value: details.detectedBy }
  ];

  const rowsHTML = detailRows.map(row => `
    <div class="shield-history-detail-row">
      <span class="shield-history-detail-label">${escapeHtml(row.label)}</span>
      <span class="shield-history-detail-value ${row.mono ? 'mono' : ''} ${row.danger ? 'danger' : ''}">${escapeHtml(String(row.value))}</span>
    </div>
  `).join('');

  let actionsHTML = '';
  if (!item.resolved) {
    actionsHTML = `
      <div class="shield-history-detail-actions">
        <button class="shield-history-btn danger" type="button" onclick="event.stopPropagation(); handleShieldHistoryAction('${item.id}', 'delete')">
          <i data-lucide="trash-2"></i> Eliminar archivo
        </button>
        <button class="shield-history-btn success" type="button" onclick="event.stopPropagation(); handleShieldHistoryAction('${item.id}', 'restore')">
          <i data-lucide="rotate-ccw"></i> Restaurar
        </button>
        <button class="shield-history-btn" type="button" onclick="event.stopPropagation(); handleShieldHistoryAction('${item.id}', 'info')">
          <i data-lucide="info"></i> Más info
        </button>
      </div>
    `;
  } else {
    actionsHTML = `
      <div class="shield-history-resolved-note">
        <i data-lucide="check-circle-2"></i>
        Amenaza resuelta por el usuario
      </div>
    `;
  }

  return `
    <div class="shield-history-detail-grid">${rowsHTML}</div>
    <div class="shield-history-detail-description">${escapeHtml(details.description)}</div>
    ${actionsHTML}
  `;
}

function toggleShieldHistoryItem(id) {
  const item = shieldState.scanHistory.find(s => s.id === id);
  if (!item || !item.threatDetails) return;

  shieldHistoryExpandedId = shieldHistoryExpandedId === id ? null : id;
  renderSettingsApp();
}

function handleShieldHistoryAction(itemId, actionId) {
  const item = shieldState.scanHistory.find(s => s.id === itemId);
  if (!item || !item.threatDetails) return;

  if (actionId === 'info') {
    showToast('Más información', `Detalle completo de ${item.threatDetails.threatType}`, 'info');
    return;
  }

  item.resolved = true;
  item.resolvedAt = new Date().toISOString();
  item.resolutionAction = actionId;

  saveShieldState();
  renderSettingsApp();

  // También agregamos al Centro de Actividad
  logActivity({
    category: 'security',
    level: 'success',
    icon: 'check-circle-2',
    title: actionId === 'delete' ? 'Amenaza eliminada' : 'Amenaza restaurada',
    subtitle: `${item.threatDetails.fileName} — Resolución manual`,
    detail: {
      'Archivo': item.threatDetails.fileName,
      'Tipo': item.threatDetails.threatType,
      'Acción': actionId === 'delete' ? 'Eliminar archivo' : 'Restaurar',
      'Fecha': new Date().toLocaleString('es-AR'),
      description: 'La amenaza fue procesada por el usuario desde el Historial de Escaneos.'
    }
  });

  showToast(
    actionId === 'delete' ? 'Archivo eliminado' : 'Archivo restaurado',
    `"${item.threatDetails.fileName}"`,
    actionId === 'delete' ? 'trash-2' : 'rotate-ccw'
  );
}

/* ═══════════════════════════════════════════════════════════════
   ★ SECCIÓN: GET APP CONTENT — Router principal de apps
═══════════════════════════════════════════════════════════════ */

function getAppContent(id) {
  switch (id) {
    case 'nova':
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
              <button type="button" data-nova-prompt="Escaneá el sistema con Nebula Shield"><i data-lucide="shield-check"></i> Escanear sistema</button>
            </div>
          </div>
          <form class="nova-form">
            <button type="button" class="nova-voice-btn" id="nova-voice-btn" title="Comando por voz" onclick="startNovaVoiceInput()"><i data-lucide="mic"></i></button>
            <input class="nova-input" type="text" autocomplete="off" maxlength="240" placeholder="Pedile a Nova AI que cambie el tema, optimice o abra un juego...">
            <button type="submit" aria-label="Enviar comando">Enviar</button>
          </form>
        </div>
      `;

    case 'files':
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

    case 'settings': {
      const activeTab = settingsState.activeSettingsTab || 'system';
      const shieldSubTab = settingsState.shieldSubTab || 'security';

      let mainContent = '';
      switch (activeTab) {
        case 'system':   mainContent = getSystemSettingsHTML(); break;
        case 'gaming':   mainContent = getGamingSettingsHTML(); break;
        case 'designer': mainContent = getDesignerSettingsHTML(); break;
        case 'shield':   mainContent = (shieldSubTab === 'vault') ? getShieldVaultHTML() : getShieldSecurityHTML(); break;
        case 'updates':  mainContent = getUpdatesSettingsHTML(); break;
        default:         mainContent = getSystemSettingsHTML();
      }

      return `
        <div class="settings-preview">
          ${getSettingsNavHTML()}
          <section class="settings-main">${mainContent}</section>
        </div>
      `;
    }

    case 'browser':
      return getBrowserContentHTML('browser-0');

    case 'vscode':
      return `<div class="vscode-preview"><img src="./assets/images/apps/visualStudio/capturaVisualStudio.png" alt="Captura de Visual Studio Code"></div>`;

    case 'games':
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

    case 'music':
      return getSpotifyAppHTML();

    case 'vault':
      return getVaultAppHTML();
    case 'activity':
      return getActivityAppHTML();
    case 'taskmgr':
      return getTaskmgrAppHTML();
    case 'terminal':
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
        </div>
      `;

    default:
      return `<div class="app-pad"><h2>${APPS[id]?.title || id}</h2><p>${APPS[id]?.sub || ''}</p></div>`;
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY HTML
═══════════════════════════════════════════════════════════════ */

function getSpotifyAppHTML() {
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
        <label class="spot-searchbar"><i data-lucide="search"></i><input type="search" placeholder="¿Qué querés reproducir?" aria-label="Buscar en Spotify"></label>
        <div class="spot-topbar-right"><div class="spot-topbar-avatar" title="Perfil">N</div></div>
      </div>
      <aside class="spot-sidebar">
        <div class="spot-sidebar-header">
          <strong><i data-lucide="library"></i> Tu biblioteca</strong>
          <button class="spot-sidebar-create" type="button"><i data-lucide="plus"></i> Crear</button>
        </div>
        <div class="spot-sidebar-filters">
          <button class="spot-filter-chip active" type="button">Playlists</button>
          <button class="spot-filter-chip" type="button">Álbumes</button>
          <button class="spot-filter-chip" type="button">Artistas</button>
        </div>
        <label class="spot-library-search"><i data-lucide="search"></i><input type="search" placeholder="Buscar en tu biblioteca" aria-label="Buscar en tu biblioteca"></label>
        <div class="spot-library-list">
          <button class="spot-lib-item active" type="button"><span class="spot-lib-icon"><i data-lucide="heart"></i></span><div class="spot-lib-info"><strong>Tus me gusta</strong><small>Playlist · 42 canciones</small></div></button>
          <button class="spot-lib-item" type="button"><span class="spot-lib-icon"><i data-lucide="sparkles"></i></span><div class="spot-lib-info"><strong>Descubrimiento semanal</strong><small>Playlist · 30 canciones</small></div></button>
          <button class="spot-lib-item" type="button"><span class="spot-lib-icon"><i data-lucide="music"></i></span><div class="spot-lib-info"><strong>Mix de Rock</strong><small>Playlist · 50 canciones</small></div></button>
          <button class="spot-lib-item" type="button"><span class="spot-lib-icon"><i data-lucide="headphones"></i></span><div class="spot-lib-info"><strong>Lofi Beats Gaming</strong><small>Playlist · 25 canciones</small></div></button>
          <button class="spot-lib-item" type="button"><span class="spot-lib-icon"><i data-lucide="radio"></i></span><div class="spot-lib-info"><strong>Cyberpunk Beats</strong><small>Playlist · 40 canciones</small></div></button>
        </div>
      </aside>
      <main class="spot-main">
        <div class="spot-hero">
          <div class="spot-hero-info">
            <div class="spot-hero-kicker">Playlist destacada</div>
            <h1>Música para programar</h1>
            <button class="spot-hero-btn" type="button" onclick="playFirstTrack()">
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
          <button class="spot-card" type="button" data-track-index="2"><img class="spot-card-img" src="./assets/images/apps/spotify/tapaAlbum3.jpg" alt="Callejeros"><div class="spot-card-info"><div class="spot-card-title">Rock Nacional</div><div class="spot-card-sub">Callejeros · Prohibido</div></div></button>
          <button class="spot-card" type="button" data-track-index="3"><img class="spot-card-img" src="./assets/images/apps/spotify/top50.jpg" alt="Synthwave"><div class="spot-card-info"><div class="spot-card-title">Synthwave Mix</div><div class="spot-card-sub">Hyper Sound · Night City</div></div></button>
          <button class="spot-card" type="button" data-track-index="1"><img class="spot-card-img" src="./assets/images/apps/spotify/tapaAlbum1.jpg" alt="Nirvana"><div class="spot-card-info"><div class="spot-card-title">Nevermind</div><div class="spot-card-sub">Nirvana · Smells Like...</div></div></button>
        </div>
      </main>
      <div class="spot-player">
        <div class="spot-player-left">
          <img src="${track.art}" alt="${escapeHtml(track.title)}" id="spot-player-cover">
          <div class="spot-player-track">
            <strong id="spot-player-title">${escapeHtml(track.title)}</strong>
            <small id="spot-player-artist">${escapeHtml(track.artist)}</small>
          </div>
          <button class="spot-player-like" type="button" id="spot-like-btn" title="Me gusta"><i data-lucide="heart"></i></button>
        </div>
        <div class="spot-player-center">
          <div class="spot-player-controls">
            <button class="spot-ctrl ${shuffleEnabled ? 'active' : ''}" type="button" id="spot-shuffle" title="Aleatorio"><i data-lucide="shuffle"></i></button>
            <button class="spot-ctrl" type="button" id="spot-prev-btn" title="Anterior"><i data-lucide="skip-back"></i></button>
            <button class="spot-ctrl main" type="button" id="spot-play-btn" title="Reproducir / Pausar"><i data-lucide="${isPlaying ? 'pause' : 'play'}"></i></button>
            <button class="spot-ctrl" type="button" id="spot-next-btn" title="Siguiente"><i data-lucide="skip-forward"></i></button>
            <button class="spot-ctrl ${repeatEnabled ? 'active' : ''}" type="button" id="spot-repeat" title="Repetir"><i data-lucide="repeat"></i></button>
          </div>
          <div class="spot-player-progress">
            <span class="spot-player-time" id="spot-time-current">${currentFormatted}</span>
            <div class="spot-progress-track" id="spot-progress-track"><span id="spot-progress-fill" style="width: 0%;"></span></div>
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

function playFirstTrack() {
  currentTrackIndex = 0;
  currentPlaybackTime = 0;
  if (!isPlaying) isPlaying = true;
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
}

/* ═══════════════════════════════════════════════════════════════
   ★ LAUNCHER
═══════════════════════════════════════════════════════════════ */

const launcherOverlay = document.getElementById('launcher-overlay');
const launcherInput = document.getElementById('launcher-input');
const launcherResults = document.getElementById('launcher-results');

function toggleLauncher() {
  if (!launcherOverlay) return;
  if (launcherOverlay.classList.contains('open')) closeLauncher();
  else openLauncher();
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
    { id: 'action-vpn', title: 'Alternar VPN Nebula Shield', sub: 'Conectar / desconectar la VPN', icon: 'shield-check', category: 'Acción', keywords: ['vpn', 'shield', 'privacidad'], run: () => toggleVpnConnection() },
    { id: 'action-wallpaper-next', title: 'Siguiente fondo de pantalla', sub: 'Rota al siguiente wallpaper disponible', icon: 'image', category: 'Acción', keywords: ['wallpaper', 'fondo', 'siguiente', 'rotar'], run: () => applyWallpaper((currentWallpaperIndex + 1) % WALLPAPERS.length) },
    { id: 'action-ram-boost', title: 'Optimizar RAM', sub: 'Libera memoria y limpia cache', icon: 'sparkles', category: 'Acción', keywords: ['optimizar', 'ram', 'limpiar', 'memoria', 'boost'], run: () => simulateRamBoost() },
    { id: 'action-weather-widget', title: 'Añadir Widget de Clima', sub: 'Widget meteorológico con datos reales (Open-Meteo)', icon: 'cloud-sun', category: 'Acción', keywords: ['clima', 'weather', 'widget', 'tiempo', 'temperatura'], run: () => addWeatherWidget() },
    { id: 'action-clear-widgets', title: 'Limpiar widgets del escritorio', sub: 'Remueve todos los widgets flotantes', icon: 'trash-2', category: 'Acción', keywords: ['limpiar', 'widgets', 'escritorio', 'borrar'], run: () => clearDesktopWidgets() },
    { id: 'action-close-all', title: 'Cerrar todas las ventanas', sub: 'Cierra todas las apps abiertas', icon: 'x-circle', category: 'Acción', keywords: ['cerrar', 'close', 'todas', 'ventanas', 'apps'], run: () => { Object.keys(openWindows).forEach(id => closeApp(id)); showToast('Ventanas cerradas', 'Se cerraron todas las apps abiertas.', 'x-circle'); } },
    { id: 'action-shield-scan', title: 'Escaneo de Seguridad (Nebula Shield)', sub: 'Inicia un análisis completo del sistema', icon: 'shield-check', category: 'Acción', keywords: ['escanear', 'seguridad', 'shield', 'virus', 'antivirus', 'scan'], run: () => { openApp('settings'); settingsState.activeSettingsTab = 'shield'; renderSettingsApp(); setTimeout(() => runShieldScan(), 400); } },
    { id: 'action-check-updates', title: 'Buscar actualizaciones', sub: 'Verifica si hay nuevas versiones del sistema', icon: 'download', category: 'Acción', keywords: ['actualizar', 'update', 'version', 'updates'], run: () => { openApp('settings'); settingsState.activeSettingsTab = 'updates'; renderSettingsApp(); setTimeout(() => simulateUpdateCheck(), 400); } },
    { id: 'action-notif-center', title: 'Abrir Centro de Notificaciones', sub: 'Ver historial de notificaciones del sistema', icon: 'bell', category: 'Acción', keywords: ['notificaciones', 'notif', 'historial', 'centro'], run: () => openNotificationCenter() },
    { id: 'action-open-store', title: 'Abrir Nebula Store', sub: 'Tienda de temas, widgets, apps y juegos', icon: 'shopping-bag', category: 'Acción', keywords: ['tienda', 'store', 'temas', 'widgets', 'apps', 'juegos'], run: () => openStore() },
    { id: 'action-open-vault', title: 'Abrir Nebula Vault', sub: 'Gestor de contraseñas seguro', icon: 'key-round', category: 'Acción', keywords: ['vault', 'contraseñas', 'passwords', 'boveda'], run: () => openApp('vault') },
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
            if (cc && cc.classList.contains('hidden')) cc.classList.remove('hidden');
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

  if (raw.startsWith('>')) { mode = 'command'; query = raw.slice(1).trim(); }
  else if (raw.startsWith('?')) { mode = 'files'; query = raw.slice(1).trim(); }
  else if (raw.startsWith('@')) { mode = 'notes'; query = raw.slice(1).trim(); }

  let items = [];

  if (mode === 'command') {
    const commands = buildLauncherCommands();
    if (!query) items = commands;
    else items = commands.filter(c => {
      const haystack = (c.title + ' ' + c.sub + ' ' + (c.keywords || []).join(' ')).toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
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
    if (mode === 'files' && !query) empty.innerHTML = `<strong>Buscá en tu sistema</strong>Escribí algo después de <code>?</code> para buscar archivos, mods, música o fondos.`;
    else if (mode === 'notes' && !query) empty.innerHTML = `<strong>Buscá en tus notas</strong>Escribí algo después de <code>@</code> para buscar en los recordatorios del calendario.`;
    else if (mode === 'command' && !query) empty.innerHTML = `<strong>Comandos disponibles</strong>Escribí <code>&gt; help</code> para ver el listado completo.`;
    else empty.innerHTML = `<strong>Sin resultados</strong>No encontramos nada que coincida con "<em>${escapeHtml(raw)}</em>".`;
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

      res.innerHTML = `${iconHTML}<div class="meta"><div class="title">${escapeHtml(item.title)}</div><div class="sub">${escapeHtml(item.sub)}</div></div>`;

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

function updateBatteryUI(level, charging) {
  const item = document.getElementById('tray-battery-item');
  const icon = document.getElementById('tray-battery-icon');
  const num = document.getElementById('tray-battery-num');
  if (!item || !num) return;

  const lvl = Math.max(0, Math.min(100, Math.round(level)));

  item.classList.remove('high', 'medium', 'low', 'charging');
  if (charging) item.classList.add('charging');
  else if (lvl > 50) item.classList.add('high');
  else if (lvl >= 20) item.classList.add('medium');
  else item.classList.add('low');

  let iconName = 'battery';
  if (charging) iconName = 'battery-charging';
  else if (lvl >= 90) iconName = 'battery-full';
  else if (lvl >= 50) iconName = 'battery-medium';
  else if (lvl >= 20) iconName = 'battery-low';
  else iconName = 'battery-warning';

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
  item.title = charging ? `Batería: ${lvl}% (Cargando)` : `Batería: ${lvl}%`;
  refreshIcons();
}

function setupDeviceStatus() {
  const hasRealBattery = typeof navigator.getBattery === 'function';

  if (hasRealBattery) {
    navigator.getBattery().then(battery => {
      const updateBattery = () => updateBatteryUI(battery.level * 100, battery.charging);
      updateBattery();
      battery.addEventListener('levelchange', updateBattery);
      battery.addEventListener('chargingchange', updateBattery);
    }).catch(() => startSimulatedBattery());
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
        <div class="gaming-hub-tile-bar"><span id="gh-fps-bar" style="width:${fpsBarPct}%;"></span></div>
      </div>
      <div class="gaming-hub-tile ${gpuTempClass}">
        <span class="tile-icon"><i data-lucide="cpu"></i></span>
        <span class="gaming-hub-tile-value" id="gh-gpu-temp">${gpuTemp}°</span>
        <span class="gaming-hub-tile-label">GPU TEMP</span>
        <div class="gaming-hub-tile-bar"><span id="gh-gpu-bar" style="width:${gpuBarPct}%;"></span></div>
      </div>
      <div class="gaming-hub-tile ${cpuTempClass}">
        <span class="tile-icon"><i data-lucide="hard-drive"></i></span>
        <span class="gaming-hub-tile-value" id="gh-cpu-temp">${cpuTemp}°</span>
        <span class="gaming-hub-tile-label">CPU TEMP</span>
        <div class="gaming-hub-tile-bar"><span id="gh-cpu-bar" style="width:${cpuBarPct}%;"></span></div>
      </div>
      <div class="gaming-hub-tile">
        <span class="tile-icon"><i data-lucide="memory-stick"></i></span>
        <span class="gaming-hub-tile-value" id="gh-vram">${vram.toFixed(1)}</span>
        <span class="gaming-hub-tile-label">VRAM GB</span>
        <div class="gaming-hub-tile-bar"><span id="gh-vram-bar" style="width:${vramPct}%;"></span></div>
      </div>
      <div class="gaming-hub-tile ${pingClass}" style="grid-column: span 2;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span class="tile-icon"><i data-lucide="wifi"></i></span>
          <span class="gaming-hub-tile-value" id="gh-ping">${ping}<span class="gaming-hub-tile-unit"> ms</span></span>
        </div>
        <span class="gaming-hub-tile-label">LATENCIA DE RED</span>
        <div class="gaming-hub-ping-spark" id="gh-ping-spark">${sparkBars}</div>
      </div>
    </div>
    <div class="gaming-hub-footer">
      <span class="gaming-hub-footer-label ${gameModeActive ? 'active' : ''}" id="gh-gamemode-label"><i data-lucide="gamepad-2"></i> GAME MODE</span>
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
  } else if (q.includes('vpn') || q.includes('conectar vpn')) {
    toggleVpnConnection();
    actionTaken = shieldState.vpnConnected ? 'VPN Conectada' : 'VPN Desconectada';
    replyText = shieldState.vpnConnected ? 'Conexión VPN establecida. Tu tráfico está cifrado.' : 'VPN desconectada.';
  } else if (q.includes('antivirus') || q.includes('escaneo') || q.includes('escanea') || q.includes('seguridad') || q.includes('virus')) {
    openApp('settings');
    settingsState.activeSettingsTab = 'shield';
    renderSettingsApp();
    actionTaken = 'Nebula Shield abierto';
    replyText = 'He abierto el centro de seguridad Nebula Shield. Podés ejecutar un escaneo completo desde ahí.';
  } else if (q.includes('actualiza') || q.includes('update') || q.includes('version') || q.includes('versión')) {
    openApp('settings');
    settingsState.activeSettingsTab = 'updates';
    renderSettingsApp();
    actionTaken = 'Centro de Actualizaciones abierto';
    replyText = 'He abierto el centro de actualizaciones. Podés verificar si hay nuevas versiones disponibles.';
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
  } else if (q.includes('abre vault') || q.includes('contraseña') || q.includes('boveda')) {
    openApp('vault');
    actionTaken = 'Abriendo Nebula Vault';
    replyText = 'Abriendo el gestor de contraseñas Nebula Vault.';
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

/* ═══════════════════════════════════════════════════════════════
   ★ NEBULA STORE — Overlay
═══════════════════════════════════════════════════════════════ */

function openStore() {
  const overlay = document.getElementById('store-overlay');
  if (!overlay) return;

  overlay.classList.remove('hidden');
  renderStore();

  const cats = document.getElementById('store-categories');
  if (cats) {
    cats.querySelectorAll('.store-cat-btn').forEach(btn => {
      btn.onclick = () => {
        storeFilter = btn.dataset.cat || 'all';
        renderStore();
      };
    });
  }

  refreshIcons();
}

function closeStore() {
  const overlay = document.getElementById('store-overlay');
  if (!overlay) return;
  overlay.classList.add('hidden');
}

function renderStore() {
  const grid = document.getElementById('store-grid');
  const cats = document.getElementById('store-categories');
  if (!grid || !cats) return;

  cats.querySelectorAll('.store-cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === storeFilter);
  });

  let filtered = storeProducts;
  if (storeFilter !== 'all') {
    filtered = storeProducts.filter(p => p.type === storeFilter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="store-empty">No hay productos en esta categoría.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isInstalled = installedProducts.includes(product.id);
    const progress = storeInstallProgress[product.id] || 0;

    let previewHTML = '';
    if (product.type === 'theme') {
      previewHTML = `
        <div class="store-preview-theme">
          <div class="store-preview-colors">
            ${product.preview.colors.map(c => `<span class="store-preview-color" style="background:${c};"></span>`).join('')}
          </div>
          <div class="store-preview-accent" style="background:${product.preview.accent};"></div>
        </div>
      `;
    } else if (product.type === 'wallpaper') {
      previewHTML = `
        <div class="store-preview-wallpaper" style="background: linear-gradient(135deg, ${product.preview.accent}, #1a1a2e);">
          <i data-lucide="image"></i>
        </div>
      `;
    } else if (product.type === 'widget') {
      previewHTML = `<div class="store-preview-widget"><i data-lucide="${product.preview.icon}"></i></div>`;
    } else if (product.type === 'app') {
      previewHTML = `<div class="store-preview-app" style="background: ${product.preview.color}20; border-color: ${product.preview.color}60;"><i data-lucide="${product.preview.icon}" style="color: ${product.preview.color};"></i></div>`;
    } else if (product.type === 'game') {
      previewHTML = `<div class="store-preview-game" style="background: ${product.preview.color}20; border-color: ${product.preview.color}60;"><i data-lucide="${product.preview.icon}" style="color: ${product.preview.color};"></i></div>`;
    }

    let actionHTML = '';
    if (isInstalled) {
      actionHTML = `<button class="store-action-btn installed" type="button" onclick="uninstallStoreProduct('${product.id}')"><i data-lucide="check"></i> Instalado</button>`;
    } else if (progress > 0 && progress < 100) {
      actionHTML = `
        <div class="store-progress-bar"><div class="store-progress-fill" style="width: ${progress}%;"></div></div>
        <span class="store-progress-text">${Math.round(progress)}%</span>
      `;
    } else {
      actionHTML = `<button class="store-action-btn" type="button" onclick="installStoreProduct('${product.id}')"><i data-lucide="download"></i> Instalar</button>`;
    }

    return `
      <div class="store-card" data-product-id="${product.id}">
        <div class="store-card-preview">
          ${previewHTML}
          <span class="store-card-type">${getStoreTypeLabel(product.type)}</span>
        </div>
        <div class="store-card-info">
          <div class="store-card-header">
            <strong class="store-card-name">${escapeHtml(product.name)}</strong>
            <span class="store-card-price">${product.price}</span>
          </div>
          <p class="store-card-desc">${escapeHtml(product.description)}</p>
          <div class="store-card-meta">
            <span class="store-meta-item"><i data-lucide="user"></i> ${escapeHtml(product.author)}</span>
            <span class="store-meta-item"><i data-lucide="star"></i> ${product.rating}</span>
            <span class="store-meta-item"><i data-lucide="download"></i> ${(product.downloads / 1000).toFixed(1)}k</span>
            <span class="store-meta-item"><i data-lucide="hard-drive"></i> ${product.size}</span>
          </div>
        </div>
        <div class="store-card-action">
          ${actionHTML}
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function getStoreTypeLabel(type) {
  const labels = { theme: 'Tema', widget: 'Widget', wallpaper: 'Wallpaper', app: 'App', game: 'Juego' };
  return labels[type] || type;
}

function installStoreProduct(productId) {
  const product = storeProducts.find(p => p.id === productId);
  if (!product) return;

  if (storeInstallProgress[productId]) return;

  storeInstallProgress[productId] = 0;

  const tick = () => {
    storeInstallProgress[productId] += Math.random() * 12 + 5;
    if (storeInstallProgress[productId] >= 100) {
      storeInstallProgress[productId] = 100;
      installedProducts.push(productId);
      saveInstalledProducts();
      applyStoreProductEffect(product);
      delete storeInstallProgress[productId];
      renderStore();
      showToast('Instalación Completa', `"${product.name}" se instaló correctamente.`, 'check-circle-2');
      return;
    }
    renderStore();
    setTimeout(tick, 180 + Math.random() * 120);
  };

  setTimeout(tick, 200);
}

function uninstallStoreProduct(productId) {
  const product = storeProducts.find(p => p.id === productId);
  if (!product) return;

  installedProducts = installedProducts.filter(id => id !== productId);
  saveInstalledProducts();
  removeStoreProductEffect(product);
  renderStore();
  showToast('Desinstalado', `"${product.name}" fue removido del sistema.`, 'trash-2');
}

function applyStoreProductEffect(product) {
  if (product.type === 'theme') {
    const themeKey = product.id.replace('theme-', '');
    const preset = STORE_THEMES[themeKey];
    if (preset) {
      THEME_PRESETS[themeKey] = preset;
      applyThemePreset(themeKey);
    }
  } else if (product.type === 'widget') {
    const widgetKey = product.id.replace('widget-', '');
    if (WIDGET_CATALOG[widgetKey]) WIDGET_CATALOG[widgetKey].available = true;
    if (widgetKey === 'system-monitor-pro') addDesktopWidget('system-monitor-pro');
    else if (widgetKey === 'music-visualizer') addDesktopWidget('music-visualizer');
  } else if (product.type === 'wallpaper') {
    const wpKey = product.id.replace('wallpaper-', '');
    const storeWp = STORE_WALLPAPERS.find(w => w.id === wpKey);
    if (storeWp) {
      WALLPAPERS.push(storeWp);
      applyWallpaper(WALLPAPERS.length - 1);
    }
  } else if (product.type === 'app') {
    const appKey = product.id.replace('app-', '');
    if (!APPS[appKey]) {
      APPS[appKey] = {
        title: product.name,
        sub: product.description,
        icon: product.preview.icon,
        image: null,
        tileClass: 'app-tile-default',
        accentColor: product.preview.color
      };
      if (!DOCK_APPS.includes(appKey)) DOCK_APPS.push(appKey);
      renderDock();
    }
  } else if (product.type === 'game') {
    showToast('Juego Añadido a Steam', `"${product.name}" se agregó a tu biblioteca de Steam.`, 'gamepad-2');
  }
}

function removeStoreProductEffect(product) {
  if (product.type === 'theme') {
    const themeKey = product.id.replace('theme-', '');
    if (THEME_PRESETS[themeKey]) {
      delete THEME_PRESETS[themeKey];
      if (designerState.activePreset === themeKey) applyThemePreset('catppuccin');
    }
  } else if (product.type === 'widget') {
    const widgetKey = product.id.replace('widget-', '');
    if (WIDGET_CATALOG[widgetKey]) WIDGET_CATALOG[widgetKey].available = false;
    desktopWidgets = desktopWidgets.filter(w => w.type !== widgetKey);
    saveDesktopWidgets();
    renderDesktopWidgets();
  } else if (product.type === 'wallpaper') {
    const wpKey = product.id.replace('wallpaper-', '');
    const idx = WALLPAPERS.findIndex(w => w.id === wpKey);
    if (idx !== -1) {
      WALLPAPERS.splice(idx, 1);
      if (currentWallpaperIndex >= WALLPAPERS.length) applyWallpaper(0);
    }
  } else if (product.type === 'app') {
    const appKey = product.id.replace('app-', '');
    if (APPS[appKey]) delete APPS[appKey];
    const dockIdx = DOCK_APPS.indexOf(appKey);
    if (dockIdx !== -1) DOCK_APPS.splice(dockIdx, 1);
    getInstancesOfApp(appKey).forEach(winId => closeApp(winId));
    renderDock();
  }
}

function saveInstalledProducts() {
  try {
    localStorage.setItem(STORE_INSTALLED_STORAGE_KEY, JSON.stringify(installedProducts));
  } catch (e) {}
}

function loadInstalledProducts() {
  try {
    const raw = localStorage.getItem(STORE_INSTALLED_STORAGE_KEY);
    if (!raw) { installedProducts = []; return; }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) { installedProducts = []; return; }
    installedProducts = parsed;
    installedProducts.forEach(id => {
      const product = storeProducts.find(p => p.id === id);
      if (product) applyStoreProductEffect(product);
    });
  } catch (e) {
    installedProducts = [];
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ FIREFOX HÍBRIDO — Browser App
═══════════════════════════════════════════════════════════════ */

const browserState = new WeakMap();

function getDefaultBrowserState() {
  return {
    url: 'https://www.google.com',
    history: [],
    future: [],
    iframeLoaded: false,
    iframeError: false
  };
}

function getBrowserContentHTML(winId) {
  const state = browserState.get(winId) || getDefaultBrowserState();
  return `
    <div class="browser-app">
      <div class="browser-toolbar">
        <div class="browser-nav-btns">
          <button class="browser-nav-btn" data-browser-back title="Atrás" ${state.history.length === 0 ? 'disabled' : ''}><i data-lucide="arrow-left"></i></button>
          <button class="browser-nav-btn" data-browser-forward title="Adelante" ${state.future.length === 0 ? 'disabled' : ''}><i data-lucide="arrow-right"></i></button>
          <button class="browser-nav-btn" data-browser-reload title="Recargar"><i data-lucide="refresh-cw"></i></button>
          <button class="browser-nav-btn" data-browser-home title="Inicio"><i data-lucide="home"></i></button>
        </div>
        <div class="browser-url-bar">
          <i data-lucide="lock" class="browser-url-icon"></i>
          <input type="text" class="browser-url-input" value="${escapeHtml(state.url)}" placeholder="Escribí una URL o buscá en Google..." />
        </div>
        <div class="browser-bookmarks">
          <button class="browser-bookmark" data-bookmark="google" title="Google"><i data-lucide="search"></i></button>
          <button class="browser-bookmark" data-bookmark="youtube" title="YouTube"><i data-lucide="youtube"></i></button>
          <button class="browser-bookmark" data-bookmark="github" title="GitHub"><i data-lucide="github"></i></button>
          <button class="browser-bookmark" data-bookmark="wikipedia" title="Wikipedia"><i data-lucide="book-open"></i></button>
        </div>
      </div>
      <div class="browser-content">
        <div class="browser-iframe-container" id="browser-iframe-${winId}">
          <div class="browser-loading">
            <div class="browser-loading-spinner"></div>
            <p>Cargando página...</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupBrowserApp(win) {
  const winId = win.dataset.winId;
  const state = getDefaultBrowserState();
  browserState.set(winId, state);

  const urlInput = win.querySelector('.browser-url-input');
  const iframeContainer = win.querySelector('.browser-iframe-container');
  const backBtn = win.querySelector('[data-browser-back]');
  const forwardBtn = win.querySelector('[data-browser-forward]');
  const reloadBtn = win.querySelector('[data-browser-reload]');
  const homeBtn = win.querySelector('[data-browser-home]');
  const bookmarks = win.querySelectorAll('.browser-bookmark');

  if (!urlInput || !iframeContainer) return;

  let currentTimeout = null;

  function clearTimers() {
    if (currentTimeout) {
      clearTimeout(currentTimeout);
      currentTimeout = null;
    }
  }

  function showBrowserFallback(container, url) {
    clearTimers();
    container.innerHTML = `
      <div class="browser-fallback">
        <div class="browser-fallback-icon"><i data-lucide="globe"></i></div>
        <h3>Nebula Web</h3>
        <p>No se puede mostrar <strong>${escapeHtml(url)}</strong> dentro del navegador.</p>
        <p class="browser-fallback-hint">El sitio puede tener restricciones de seguridad (X-Frame-Options).</p>
        <div class="browser-fallback-actions">
          <button class="browser-fallback-btn" onclick="window.open('${escapeHtml(url)}', '_blank')">
            <i data-lucide="external-link"></i> Abrir en pestaña externa
          </button>
          <button class="browser-fallback-btn" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(url)}', '_blank')">
            <i data-lucide="search"></i> Buscar en Google
          </button>
        </div>
        <div class="browser-fallback-search">
          <i data-lucide="search"></i>
          <input type="text" placeholder="Buscar en la web..." onkeydown="if(event.key==='Enter'){window.open('https://www.google.com/search?q='+encodeURIComponent(this.value),'_blank')}">
        </div>
      </div>
    `;
    refreshIcons();
  }

  function loadUrl(url) {
    if (!url) return;
    clearTimers();

    let normalized = url.trim();
    if (!/^https?:\/\//i.test(normalized)) {
      if (normalized.includes('.') && !normalized.includes(' ')) {
        normalized = 'https://' + normalized;
      } else {
        normalized = 'https://www.google.com/search?q=' + encodeURIComponent(normalized);
      }
    }

    state.url = normalized;
    urlInput.value = normalized;

    iframeContainer.innerHTML = `
      <div class="browser-loading">
        <div class="browser-loading-spinner"></div>
        <p>Cargando página...</p>
      </div>
    `;

    const iframe = document.createElement('iframe');
    iframe.className = 'browser-iframe';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
    iframe.setAttribute('referrerpolicy', 'no-referrer');

    let resolved = false;

    const resolveFallback = (reason) => {
      if (resolved) return;
      resolved = true;
      clearTimers();
      state.iframeError = true;
      state.iframeLoaded = false;
      showBrowserFallback(iframeContainer, normalized);
    };

    const resolveSuccess = () => {
      if (resolved) return;
      resolved = true;
      clearTimers();
      state.iframeError = false;
      state.iframeLoaded = true;
      iframeContainer.innerHTML = '';
      iframeContainer.appendChild(iframe);
    };

    iframe.onload = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body && doc.body.innerHTML.trim().length > 0) {
          resolveSuccess();
        } else {
          resolveFallback('empty');
        }
      } catch (e) {
        resolveFallback('cross-origin');
      }
    };

    iframe.onerror = () => resolveFallback('error');

    currentTimeout = setTimeout(() => resolveFallback('timeout'), 2500);

    iframe.src = normalized;
  }

  function goBack() {
    if (state.history.length === 0) return;
    state.future.unshift(state.url);
    const prev = state.history.pop();
    loadUrl(prev);
    updateNavButtons();
  }

  function goForward() {
    if (state.future.length === 0) return;
    state.history.push(state.url);
    const next = state.future.shift();
    loadUrl(next);
    updateNavButtons();
  }

  function updateNavButtons() {
    if (backBtn) backBtn.disabled = state.history.length === 0;
    if (forwardBtn) forwardBtn.disabled = state.future.length === 0;
  }

  urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      state.history.push(state.url);
      state.future = [];
      loadUrl(urlInput.value);
      updateNavButtons();
    }
  });

  urlInput.addEventListener('focus', () => urlInput.select());

  if (backBtn) backBtn.addEventListener('click', goBack);
  if (forwardBtn) forwardBtn.addEventListener('click', goForward);
  if (reloadBtn) reloadBtn.addEventListener('click', () => loadUrl(state.url));
  if (homeBtn) homeBtn.addEventListener('click', () => {
    state.history.push(state.url);
    state.future = [];
    loadUrl('https://www.google.com');
    updateNavButtons();
  });

  bookmarks.forEach(btn => {
    btn.addEventListener('click', () => {
      const site = btn.dataset.bookmark;
      const urls = {
        google: 'https://www.google.com',
        youtube: 'https://www.youtube.com',
        github: 'https://www.github.com',
        wikipedia: 'https://www.wikipedia.org'
      };
      if (urls[site]) {
        state.history.push(state.url);
        state.future = [];
        loadUrl(urls[site]);
        updateNavButtons();
      }
    });
  });

  loadUrl(state.url);
  updateNavButtons();
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

function closeAllOpenApps() {
  const ids = Object.keys(openWindows);
  ids.forEach(winId => closeApp(winId));
}

/* ═══════════════════════════════════════════════════════════════
   ★ NEBULA VAULT — Gestor de Contraseñas (lógica completa)
═══════════════════════════════════════════════════════════════ */

function getDefaultVaultEntries() {
  return [
    { id: 'vault-1', title: 'Netflix',     username: 'gamer@nebula.os',   password: 'N3bula#2026!Str0ng', url: 'https://netflix.com',   category: 'redes',   notes: 'Plan Premium 4K', createdAt: Date.now() - 86400000 * 30 },
    { id: 'vault-2', title: 'Steam',       username: 'nebula_gamer',      password: 'St3am_Ultra$Pass',   url: 'https://store.steampowered.com', category: 'gaming',  notes: 'Cuenta principal', createdAt: Date.now() - 86400000 * 25 },
    { id: 'vault-3', title: 'GitHub',      username: 'nebula-dev',        password: 'G1tHub@Dev_2026',    url: 'https://github.com',    category: 'trabajo', notes: '2FA activado',      createdAt: Date.now() - 86400000 * 20 },
    { id: 'vault-4', title: 'Gmail',       username: 'user@gmail.com',    password: 'MyM@il_Pr0t3ct',     url: 'https://mail.google.com', category: 'email', notes: 'Personal',          createdAt: Date.now() - 86400000 * 15 },
    { id: 'vault-5', title: 'Binance',     username: 'crypto_trader',     password: 'Bin@nce#Crypto!99',  url: 'https://binance.com',   category: 'bancos',  notes: 'Wallet principal',   createdAt: Date.now() - 86400000 * 10 },
    { id: 'vault-6', title: 'Discord',     username: 'nebula#0001',       password: 'D1sc0rd_N1ght#',     url: 'https://discord.com',   category: 'redes',   notes: 'Servidor de gaming', createdAt: Date.now() - 86400000 * 5 }
  ];
}

function loadVaultEntries() {
  try {
    const raw = localStorage.getItem(VAULT_STORAGE_KEY);
    if (!raw) return getDefaultVaultEntries();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return getDefaultVaultEntries();
    return parsed;
  } catch (e) {
    return getDefaultVaultEntries();
  }
}

function saveVaultEntries() {
  try {
    localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(vaultState.entries));
  } catch (e) {}
}

function getVaultMaster() {
  try {
    const raw = localStorage.getItem(VAULT_MASTER_KEY);
    if (!raw) return 'nebula123';
    const parsed = JSON.parse(raw);
    return parsed.master || 'nebula123';
  } catch (e) {
    return 'nebula123';
  }
}

function setVaultMaster(newMaster) {
  try {
    localStorage.setItem(VAULT_MASTER_KEY, JSON.stringify({
      master: newMaster,
      updatedAt: Date.now(),
      changed: true
    }));
    vaultState.masterChanged = true;
  } catch (e) {}
}

function loadVaultMasterMeta() {
  try {
    const raw = localStorage.getItem(VAULT_MASTER_KEY);
    if (!raw) {
      vaultState.masterChanged = false;
      return;
    }
    const parsed = JSON.parse(raw);
    vaultState.masterChanged = !!parsed.changed;
  } catch (e) {
    vaultState.masterChanged = false;
  }
}

function calculatePasswordStrength(password) {
  if (!password) return { score: 0, label: 'Vacía', color: '#64748b', percent: 0 };

  let score = 0;
  if (password.length >= 8)  score += 15;
  if (password.length >= 12) score += 15;
  if (password.length >= 16) score += 10;
  if (password.length >= 20) score += 10;

  if (/[a-z]/.test(password)) score += 10;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 15;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;

  if (/^(123|abc|qwe|password|admin)/i.test(password)) score = Math.max(10, score - 40);
  if (/(.)\1{2,}/.test(password)) score = Math.max(10, score - 15);
  if (/^\d+$/.test(password)) score = Math.max(10, score - 30);

  score = Math.min(100, Math.max(0, score));

  let label, color;
  if (score >= 80) { label = 'Muy Fuerte'; color = '#10b981'; }
  else if (score >= 60) { label = 'Fuerte'; color = '#22c55e'; }
  else if (score >= 40) { label = 'Media'; color = '#f59e0b'; }
  else if (score >= 20) { label = 'Débil'; color = '#ef4444'; }
  else { label = 'Muy Débil'; color = '#dc2626'; }

  return { score, label, color, percent: score };
}

function generatePassword() {
  const opts = vaultState.generator;
  let chars = '';
  if (opts.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (opts.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (opts.numbers)   chars += '0123456789';
  if (opts.symbols)   chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (!chars) return '';

  let password = '';
  if (opts.uppercase) password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
  if (opts.lowercase) password += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
  if (opts.numbers)   password += '0123456789'[Math.floor(Math.random() * 10)];
  if (opts.symbols)   password += '!@#$%^&*()_+-=[]{}|;:,.<>?'[Math.floor(Math.random() * 27)];

  for (let i = password.length; i < opts.length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password.split('').sort(() => Math.random() - 0.5).join('');
}

function resetVaultLockTimer() {
  if (vaultLockTimer) clearTimeout(vaultLockTimer);
  if (!vaultState.unlocked) return;

  vaultLockTimer = setTimeout(() => {
    lockVault();
    showToast('Nebula Vault bloqueado', 'La bóveda se bloqueó por inactividad.', 'lock');
  }, VAULT_LOCK_TIMEOUT_MS);
}

function lockVault() {
  vaultState.unlocked = false;
  vaultState.selectedEntryId = null;
  renderVault();
  if (vaultLockTimer) clearTimeout(vaultLockTimer);
}

function setupVaultApp(win) {
  if (!win) return;

  // Si la bóveda está bloqueada, enfocar el input de master password
  if (!vaultState.unlocked) {
    setTimeout(() => {
      const input = win.querySelector('#vault-master-input');
      if (input) {
        input.focus();
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            attemptUnlockVault();
          }
        });
      }
    }, 100);
  } else {
    resetVaultLockTimer();
  }
}

function getVaultAppHTML() {
  const entries = vaultState.entries;

  if (!vaultState.unlocked) {
    return `
      <div class="vault-app vault-locked">
        <div class="vault-lock-screen">
          <div class="vault-lock-icon">
            <i data-lucide="shield-check"></i>
          </div>
          <h2>Nebula Vault</h2>
          <p>Ingresá tu contraseña maestra para desbloquear la bóveda</p>
          <div class="vault-lock-form">
            <input type="password" class="vault-master-input" id="vault-master-input" placeholder="Contraseña maestra..." autocomplete="off">
            <button type="button" class="vault-unlock-btn" onclick="attemptUnlockVault()">
              <i data-lucide="unlock"></i> Desbloquear
            </button>
          </div>
          <small class="vault-hint">Pista: la contraseña por defecto es <code>nebula123</code></small>
        </div>
      </div>
    `;
  }

  return `
    <div class="vault-app">
      <div class="vault-sidebar">
        <div class="vault-sidebar-header">
          <div class="vault-logo"><i data-lucide="key-round"></i></div>
          <div>
            <strong>Nebula Vault</strong>
            <small>${entries.length} contraseña${entries.length === 1 ? '' : 's'}</small>
          </div>
        </div>

        <button type="button" class="vault-add-btn" onclick="openVaultEntryModal()">
          <i data-lucide="plus"></i> Nueva contraseña
        </button>

        <div class="vault-sidebar-section">
          <span class="vault-sidebar-label">Categorías</span>
          <button class="vault-cat-item ${vaultState.activeCategory === 'all' ? 'active' : ''}" type="button" onclick="setVaultCategory('all')">
            <span class="vault-cat-icon" style="background: rgba(255,255,255,0.08);"><i data-lucide="layers"></i></span>
            Todas
            <span class="vault-cat-count">${entries.length}</span>
          </button>
          ${VAULT_CATEGORIES.map(cat => {
            const count = entries.filter(e => e.category === cat.id).length;
            return `
              <button class="vault-cat-item ${vaultState.activeCategory === cat.id ? 'active' : ''}" type="button" onclick="setVaultCategory('${cat.id}')">
                <span class="vault-cat-icon" style="background: ${cat.color}20; color: ${cat.color};"><i data-lucide="${cat.icon}"></i></span>
                ${cat.name}
                <span class="vault-cat-count">${count}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="vault-sidebar-footer">
          <button class="vault-lock-btn" type="button" onclick="lockVault()">
            <i data-lucide="lock"></i> Bloquear bóveda
          </button>
        </div>
      </div>

      <div class="vault-main">
        <div class="vault-toolbar">
          <label class="vault-search">
            <i data-lucide="search"></i>
            <input type="search" placeholder="Buscar por título, usuario o URL..." value="${escapeHtml(vaultState.searchQuery)}" oninput="setVaultSearch(this.value)">
          </label>
          <button class="vault-tool-btn" type="button" onclick="openVaultGeneratorModal()" title="Generador de contraseñas">
            <i data-lucide="wand-2"></i> Generador
          </button>
        </div>

        <div class="vault-content">
          ${renderVaultEntriesList()}
        </div>
      </div>
    </div>
  `;
}

function renderVaultEntriesList() {
  let entries = vaultState.entries;

  if (vaultState.activeCategory !== 'all') {
    entries = entries.filter(e => e.category === vaultState.activeCategory);
  }

  if (vaultState.searchQuery) {
    const q = vaultState.searchQuery.toLowerCase();
    entries = entries.filter(e =>
      (e.title || '').toLowerCase().includes(q) ||
      (e.username || '').toLowerCase().includes(q) ||
      (e.url || '').toLowerCase().includes(q)
    );
  }

  if (entries.length === 0) {
    return `
      <div class="vault-empty">
        <div class="vault-empty-icon"><i data-lucide="shield-off"></i></div>
        <strong>No hay contraseñas guardadas</strong>
        <span>${vaultState.searchQuery ? 'Probá con otra búsqueda' : 'Agregá tu primera contraseña con el botón de arriba'}</span>
      </div>
    `;
  }

  return `
    <div class="vault-entries-list">
      ${entries.map(entry => {
        const cat = VAULT_CATEGORIES.find(c => c.id === entry.category) || VAULT_CATEGORIES[5];
        const isShowing = vaultState.showPassword[entry.id] === true;
        const strength = calculatePasswordStrength(entry.password);
        const isSelected = vaultState.selectedEntryId === entry.id;

        return `
          <div class="vault-entry ${isSelected ? 'selected' : ''}" data-vault-id="${entry.id}" onclick="selectVaultEntry('${entry.id}')">
            <div class="vault-entry-icon" style="background: ${cat.color}20; color: ${cat.color};">
              <i data-lucide="${cat.icon}"></i>
            </div>
            <div class="vault-entry-info">
              <div class="vault-entry-title">${escapeHtml(entry.title)}</div>
              <div class="vault-entry-user">${escapeHtml(entry.username)}</div>
            </div>
            <div class="vault-entry-password">
              <span class="vault-password-text" data-visible="${isShowing}">
                ${isShowing ? escapeHtml(entry.password) : '••••••••••••'}
              </span>
            </div>
            <div class="vault-entry-strength" title="${strength.label} (${strength.score}/100)">
              <div class="vault-strength-bar">
                <span style="width: ${strength.percent}%; background: ${strength.color};"></span>
              </div>
            </div>
            <div class="vault-entry-actions" onclick="event.stopPropagation()">
              <button class="vault-icon-btn" type="button" onclick="toggleVaultShowPassword('${entry.id}')" title="${isShowing ? 'Ocultar' : 'Mostrar'}">
                <i data-lucide="${isShowing ? 'eye-off' : 'eye'}"></i>
              </button>
              <button class="vault-icon-btn" type="button" onclick="copyVaultPassword('${entry.id}')" title="Copiar contraseña">
                <i data-lucide="copy"></i>
              </button>
              <button class="vault-icon-btn" type="button" onclick="editVaultEntry('${entry.id}')" title="Editar">
                <i data-lucide="pencil"></i>
              </button>
              <button class="vault-icon-btn danger" type="button" onclick="deleteVaultEntry('${entry.id}')" title="Eliminar">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderVault() {
  const vaultWinIds = getInstancesOfApp('vault');
  vaultWinIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;
    content.innerHTML = getVaultAppHTML();
    refreshIcons();

    if (!vaultState.unlocked) {
      setTimeout(() => {
        const input = content.querySelector('#vault-master-input');
        if (input) {
          input.focus();
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              attemptUnlockVault();
            }
          });
        }
      }, 100);
    }
  });
  refreshIcons();
}

function attemptUnlockVault() {
  const input = document.getElementById('vault-master-input');
  if (!input) return;

  const master = getVaultMaster();
  if (input.value === master) {
    vaultState.unlocked = true;
    vaultState.searchQuery = '';
    vaultState.activeCategory = 'all';
    resetVaultLockTimer();
    renderVault();
    refreshIcons();
    showToast('Bóveda Desbloqueada', 'Acceso concedido. Cuidá tus datos.', 'unlock');
    logActivity({
      category: 'security',
      level: 'info',
      icon: 'unlock',
      title: 'Bóveda desbloqueada',
      subtitle: 'Acceso concedido a Nebula Vault',
      detail: {
        'Método': 'Contraseña maestra',
        'Hora': new Date().toLocaleTimeString('es-AR'),
        description: 'Acceso concedido a la bóveda de contraseñas. Se bloqueó automáticamente por inactividad tras 5 minutos.'
      }
    });
  } else {
    input.value = '';
    input.classList.add('shake-error');
    setTimeout(() => input.classList.remove('shake-error'), 500);
    showToast('Contraseña Incorrecta', 'Verificá tu contraseña maestra e intentá de nuevo.', 'alert-circle');
  }
}

function setVaultCategory(catId) {
  vaultState.activeCategory = catId;
  vaultState.selectedEntryId = null;
  renderVault();
  resetVaultLockTimer();
}

function setVaultSearch(query) {
  vaultState.searchQuery = query;
  const content = document.querySelector('.vault-content');
  if (content) content.innerHTML = renderVaultEntriesList();
  refreshIcons();
  resetVaultLockTimer();
}

function selectVaultEntry(id) {
  vaultState.selectedEntryId = vaultState.selectedEntryId === id ? null : id;
  renderVault();
  resetVaultLockTimer();
}

function toggleVaultShowPassword(id) {
  vaultState.showPassword[id] = !vaultState.showPassword[id];
  renderVault();
  resetVaultLockTimer();
}

async function copyVaultPassword(id) {
  const entry = vaultState.entries.find(e => e.id === id);
  if (!entry) return;

  try {
    await navigator.clipboard.writeText(entry.password);
    showToast('Copiado al Portapapeles', `Contraseña de "${entry.title}" copiada.`, 'clipboard-check');
  } catch (e) {
    showToast('Copiado', 'Contraseña copiada (fallback).', 'clipboard');
  }
  resetVaultLockTimer();
}

function deleteVaultEntry(id) {
  const entry = vaultState.entries.find(e => e.id === id);
  if (!entry) return;

  vaultState.entries = vaultState.entries.filter(e => e.id !== id);
  saveVaultEntries();
  vaultState.selectedEntryId = null;
  renderVault();
  showToast('Contraseña eliminada', `"${entry.title}" fue removida de la bóveda.`, 'trash-2');
  resetVaultLockTimer();
}

function editVaultEntry(id) {
  const entry = vaultState.entries.find(e => e.id === id);
  if (!entry) return;
  openVaultEntryModal(entry);
}

function openVaultFromShield() {
  openApp('vault');
  vaultState.lastOpenedAt = Date.now();
}

function lockVaultFromShield() {
  lockVault();
  renderSettingsApp();
  showToast('Bóveda Bloqueada', 'La bóveda se cerró por seguridad.', 'lock');
}

function calculateVaultOverallStrength() {
  if (vaultState.entries.length === 0) {
    return { score: 0, label: 'Sin datos', color: '#64748b' };
  }
  let total = 0;
  vaultState.entries.forEach(e => {
    total += calculatePasswordStrength(e.password).score;
  });
  const avg = Math.round(total / vaultState.entries.length);

  let label, color;
  if (avg >= 80) { label = 'Excelente'; color = '#10b981'; }
  else if (avg >= 60) { label = 'Buena'; color = '#22c55e'; }
  else if (avg >= 40) { label = 'Regular'; color = '#f59e0b'; }
  else { label = 'Débil'; color = '#ef4444'; }

  return { score: avg, label, color };
}

/* ───────── Modales: Entry + Master + Generator ───────── */

let vaultEntryModalEl = null;

function ensureVaultEntryModal() {
  if (vaultEntryModalEl) return vaultEntryModalEl;

  const modal = document.createElement('div');
  modal.className = 'vault-modal';
  modal.id = 'vault-entry-modal';
  modal.innerHTML = `
    <div class="vault-modal-dialog">
      <div class="vault-modal-header">
        <div class="vault-modal-icon"><i data-lucide="key-round"></i></div>
        <div>
          <strong id="vault-modal-title">Nueva Contraseña</strong>
          <small id="vault-modal-sub">Guardá una nueva entrada en la bóveda</small>
        </div>
        <button class="vault-modal-close" type="button" onclick="closeVaultEntryModal()">
          <i data-lucide="x"></i>
        </button>
      </div>

      <div class="vault-modal-body">
        <div class="vault-field">
          <label>Título *</label>
          <input type="text" id="vault-field-title" placeholder="Ej: Netflix, GitHub, Steam..." maxlength="60">
        </div>

        <div class="vault-field">
          <label>Usuario / Email *</label>
          <input type="text" id="vault-field-username" placeholder="usuario@email.com" maxlength="80">
        </div>

        <div class="vault-field">
          <label>Contraseña *</label>
          <div class="vault-password-input-wrap">
            <input type="password" id="vault-field-password" placeholder="Escribí o generá una contraseña..." maxlength="120">
            <button type="button" class="vault-inline-btn" onclick="toggleVaultFieldPassword()" title="Mostrar/Ocultar">
              <i data-lucide="eye" id="vault-field-eye"></i>
            </button>
            <button type="button" class="vault-inline-btn accent" onclick="fillVaultFieldWithGenerated()" title="Generar contraseña">
              <i data-lucide="wand-2"></i>
            </button>
          </div>
          <div class="vault-strength-indicator" id="vault-strength-indicator">
            <div class="vault-strength-track"><span id="vault-strength-fill" style="width: 0%; background: #64748b;"></span></div>
            <small id="vault-strength-label">Fortaleza: —</small>
          </div>
        </div>

        <div class="vault-field">
          <label>URL (opcional)</label>
          <input type="text" id="vault-field-url" placeholder="https://..." maxlength="120">
        </div>

        <div class="vault-field">
          <label>Categoría</label>
          <select id="vault-field-category">
            ${VAULT_CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
          </select>
        </div>

        <div class="vault-field">
          <label>Notas (opcional)</label>
          <textarea id="vault-field-notes" placeholder="Información adicional..." maxlength="300" rows="2"></textarea>
        </div>
      </div>

      <div class="vault-modal-footer">
        <button class="vault-btn ghost" type="button" onclick="closeVaultEntryModal()">Cancelar</button>
        <button class="vault-btn primary" type="button" id="vault-save-btn" onclick="saveVaultEntryModal()">
          <i data-lucide="save"></i> Guardar
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  vaultEntryModalEl = modal;

  modal.addEventListener('mousedown', (e) => {
    if (e.target === modal) closeVaultEntryModal();
  });

  const passInput = modal.querySelector('#vault-field-password');
  passInput.addEventListener('input', () => updateVaultStrengthIndicator(passInput.value));

  refreshIcons();
  return modal;
}

function openVaultEntryModal(entry = null) {
  const modal = ensureVaultEntryModal();
  const title = modal.querySelector('#vault-modal-title');
  const sub = modal.querySelector('#vault-modal-sub');
  const saveBtn = modal.querySelector('#vault-save-btn');

  if (entry) {
    title.textContent = 'Editar Contraseña';
    sub.textContent = `Modificando "${entry.title}"`;
    saveBtn.innerHTML = '<i data-lucide="save"></i> Guardar cambios';
    modal.dataset.editId = entry.id;
    modal.querySelector('#vault-field-title').value = entry.title || '';
    modal.querySelector('#vault-field-username').value = entry.username || '';
    modal.querySelector('#vault-field-password').value = entry.password || '';
    modal.querySelector('#vault-field-url').value = entry.url || '';
    modal.querySelector('#vault-field-category').value = entry.category || 'otros';
    modal.querySelector('#vault-field-notes').value = entry.notes || '';
  } else {
    title.textContent = 'Nueva Contraseña';
    sub.textContent = 'Guardá una nueva entrada en la bóveda';
    saveBtn.innerHTML = '<i data-lucide="save"></i> Guardar';
    modal.dataset.editId = '';
    modal.querySelector('#vault-field-title').value = '';
    modal.querySelector('#vault-field-username').value = '';
    modal.querySelector('#vault-field-password').value = '';
    modal.querySelector('#vault-field-url').value = '';
    modal.querySelector('#vault-field-category').value = 'otros';
    modal.querySelector('#vault-field-notes').value = '';
  }

  updateVaultStrengthIndicator(modal.querySelector('#vault-field-password').value);

  modal.classList.add('open');
  refreshIcons();

  setTimeout(() => modal.querySelector('#vault-field-title').focus(), 100);
  resetVaultLockTimer();
}

function closeVaultEntryModal() {
  if (vaultEntryModalEl) vaultEntryModalEl.classList.remove('open');
}

function toggleVaultFieldPassword() {
  const modal = ensureVaultEntryModal();
  const input = modal.querySelector('#vault-field-password');
  const eye = modal.querySelector('#vault-field-eye');
  if (input.type === 'password') {
    input.type = 'text';
    eye.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    eye.setAttribute('data-lucide', 'eye');
  }
  refreshIcons();
}

function fillVaultFieldWithGenerated() {
  const modal = ensureVaultEntryModal();
  const input = modal.querySelector('#vault-field-password');
  input.value = generatePassword();
  input.type = 'text';
  modal.querySelector('#vault-field-eye').setAttribute('data-lucide', 'eye-off');
  updateVaultStrengthIndicator(input.value);
  refreshIcons();
  showToast('Contraseña Generada', 'Se generó una contraseña segura.', 'wand-2');
}

function updateVaultStrengthIndicator(password) {
  const fill = document.getElementById('vault-strength-fill');
  const label = document.getElementById('vault-strength-label');
  if (!fill || !label) return;

  const s = calculatePasswordStrength(password);
  fill.style.width = `${s.percent}%`;
  fill.style.background = s.color;
  label.textContent = `Fortaleza: ${s.label}`;
  label.style.color = s.color;
}

function saveVaultEntryModal() {
  const modal = ensureVaultEntryModal();
  const title    = modal.querySelector('#vault-field-title').value.trim();
  const username = modal.querySelector('#vault-field-username').value.trim();
  const password = modal.querySelector('#vault-field-password').value;
  const url      = modal.querySelector('#vault-field-url').value.trim();
  const category = modal.querySelector('#vault-field-category').value;
  const notes    = modal.querySelector('#vault-field-notes').value.trim();
  const editId   = modal.dataset.editId;

  if (!title)    { showToast('Falta título',    'Escribí un título para identificar la entrada.',  'alert-circle'); return; }
  if (!username) { showToast('Falta usuario',   'Escribí un usuario o email.',                    'alert-circle'); return; }
  if (!password) { showToast('Falta contraseña','Escribí o generá una contraseña.',               'alert-circle'); return; }

  if (editId) {
    const idx = vaultState.entries.findIndex(e => e.id === editId);
    if (idx !== -1) {
      vaultState.entries[idx] = { ...vaultState.entries[idx], title, username, password, url, category, notes, updatedAt: Date.now() };
      showToast('Contraseña actualizada', `"${title}" fue modificada.`, 'check-circle-2');
    }
  } else {
    const newId = 'vault-' + Date.now();
    vaultState.entries.unshift({
      id: newId, title, username, password, url, category, notes,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
    showToast('Contraseña Guardada', `"${title}" se agregó a la bóveda.`, 'save');
  }

  saveVaultEntries();
  closeVaultEntryModal();
  renderVault();
  resetVaultLockTimer();
}

/* ───────── Modal: Generador ───────── */

let vaultGeneratorModalEl = null;

function ensureVaultGeneratorModal() {
  if (vaultGeneratorModalEl) return vaultGeneratorModalEl;

  const modal = document.createElement('div');
  modal.className = 'vault-modal';
  modal.id = 'vault-generator-modal';
  modal.innerHTML = `
    <div class="vault-modal-dialog vault-modal-small">
      <div class="vault-modal-header">
        <div class="vault-modal-icon accent"><i data-lucide="wand-2"></i></div>
        <div>
          <strong>Generador de Contraseñas</strong>
          <small>Creá contraseñas seguras al instante</small>
        </div>
        <button class="vault-modal-close" type="button" onclick="closeVaultGeneratorModal()">
          <i data-lucide="x"></i>
        </button>
      </div>

      <div class="vault-modal-body">
        <div class="vault-generated-display">
          <span id="vault-generated-password">Hacé click en "Generar"</span>
          <button type="button" class="vault-inline-btn" onclick="copyGeneratedPassword()" title="Copiar">
            <i data-lucide="copy"></i>
          </button>
        </div>

        <div class="vault-field">
          <label>Longitud: <strong id="vault-gen-length-label">${vaultState.generator.length}</strong></label>
          <input type="range" min="8" max="64" value="${vaultState.generator.length}" id="vault-gen-length" oninput="updateVaultGeneratorOption('length', parseInt(this.value))">
        </div>

        <div class="vault-gen-options">
          <label class="vault-gen-option">
            <input type="checkbox" ${vaultState.generator.uppercase ? 'checked' : ''} onchange="updateVaultGeneratorOption('uppercase', this.checked)">
            <span>Mayúsculas (A-Z)</span>
          </label>
          <label class="vault-gen-option">
            <input type="checkbox" ${vaultState.generator.lowercase ? 'checked' : ''} onchange="updateVaultGeneratorOption('lowercase', this.checked)">
            <span>Minúsculas (a-z)</span>
          </label>
          <label class="vault-gen-option">
            <input type="checkbox" ${vaultState.generator.numbers ? 'checked' : ''} onchange="updateVaultGeneratorOption('numbers', this.checked)">
            <span>Números (0-9)</span>
          </label>
          <label class="vault-gen-option">
            <input type="checkbox" ${vaultState.generator.symbols ? 'checked' : ''} onchange="updateVaultGeneratorOption('symbols', this.checked)">
            <span>Símbolos (!@#$...)</span>
          </label>
        </div>

        <div class="vault-strength-indicator">
          <div class="vault-strength-track"><span id="vault-gen-strength-fill" style="width: 0%; background: #64748b;"></span></div>
          <small id="vault-gen-strength-label">Fortaleza: —</small>
        </div>
      </div>

      <div class="vault-modal-footer">
        <button class="vault-btn ghost" type="button" onclick="closeVaultGeneratorModal()">Cerrar</button>
        <button class="vault-btn primary" type="button" onclick="regenerateVaultPassword()">
          <i data-lucide="refresh-cw"></i> Generar
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  vaultGeneratorModalEl = modal;

  modal.addEventListener('mousedown', (e) => {
    if (e.target === modal) closeVaultGeneratorModal();
  });

  refreshIcons();
  return modal;
}

function openVaultGeneratorModal() {
  const modal = ensureVaultGeneratorModal();
  modal.classList.add('open');
  refreshIcons();
  regenerateVaultPassword();
  resetVaultLockTimer();
}

function closeVaultGeneratorModal() {
  if (vaultGeneratorModalEl) vaultGeneratorModalEl.classList.remove('open');
}

function updateVaultGeneratorOption(key, value) {
  vaultState.generator[key] = value;
  if (key === 'length') {
    const label = document.getElementById('vault-gen-length-label');
    if (label) label.textContent = value;
  }
  regenerateVaultPassword();
}

function regenerateVaultPassword() {
  const pass = generatePassword();
  const display = document.getElementById('vault-generated-password');
  if (display) display.textContent = pass || 'Seleccioná al menos un tipo de carácter';

  const fill = document.getElementById('vault-gen-strength-fill');
  const label = document.getElementById('vault-gen-strength-label');
  if (fill && label) {
    const s = calculatePasswordStrength(pass);
    fill.style.width = `${s.percent}%`;
    fill.style.background = s.color;
    label.textContent = `Fortaleza: ${s.label}`;
    label.style.color = s.color;
  }
}

async function copyGeneratedPassword() {
  const display = document.getElementById('vault-generated-password');
  if (!display || !display.textContent || display.textContent.startsWith('Hacé click') || display.textContent.startsWith('Seleccioná')) {
    showToast('Nada para copiar', 'Primero generá una contraseña.', 'info');
    return;
  }
  try {
    await navigator.clipboard.writeText(display.textContent);
    showToast('Copiado', 'Contraseña generada copiada al portapapeles.', 'clipboard-check');
  } catch (e) {
    showToast('Copiado', 'Contraseña copiada (fallback).', 'clipboard');
  }
}

/* ───────── Modal: Master Password ───────── */

let vaultMasterModalEl = null;

function ensureVaultMasterModal() {
  if (vaultMasterModalEl) return vaultMasterModalEl;

  const modal = document.createElement('div');
  modal.className = 'vault-modal';
  modal.id = 'vault-master-modal';
  modal.innerHTML = `
    <div class="vault-modal-dialog vault-modal-small">
      <div class="vault-modal-header">
        <div class="vault-modal-icon accent"><i data-lucide="key"></i></div>
        <div>
          <strong>Cambiar Contraseña Maestra</strong>
          <small>Actualizá la clave de acceso a tu bóveda</small>
        </div>
        <button class="vault-modal-close" type="button" onclick="closeMasterPasswordModal()">
          <i data-lucide="x"></i>
        </button>
      </div>

      <div class="vault-modal-body">
        <div class="vault-field">
          <label>Contraseña maestra actual</label>
          <input type="password" id="vault-master-current" placeholder="Escribí tu contraseña actual..." autocomplete="off">
        </div>
        <div class="vault-field">
          <label>Nueva contraseña maestra</label>
          <input type="password" id="vault-master-new" placeholder="Mínimo 6 caracteres..." autocomplete="off" oninput="updateMasterStrengthIndicator(this.value)">
        </div>
        <div class="vault-field">
          <label>Confirmar nueva contraseña</label>
          <input type="password" id="vault-master-confirm" placeholder="Repetí la nueva contraseña..." autocomplete="off">
        </div>

        <div class="vault-strength-indicator">
          <div class="vault-strength-track"><span id="vault-master-strength-fill" style="width: 0%; background: #64748b;"></span></div>
          <small id="vault-master-strength-label">Fortaleza: —</small>
        </div>

        <div class="vault-master-hint">
          <i data-lucide="info"></i>
          <small>Si olvidás la contraseña maestra, <strong>no vas a poder recuperar tus contraseñas</strong>. Guardala en un lugar seguro.</small>
        </div>
      </div>

      <div class="vault-modal-footer">
        <button class="vault-btn ghost" type="button" onclick="closeMasterPasswordModal()">Cancelar</button>
        <button class="vault-btn primary" type="button" onclick="saveMasterPassword()">
          <i data-lucide="check"></i> Guardar
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  vaultMasterModalEl = modal;

  modal.addEventListener('mousedown', (e) => {
    if (e.target === modal) closeMasterPasswordModal();
  });

  refreshIcons();
  return modal;
}

function openMasterPasswordModal() {
  const modal = ensureVaultMasterModal();
  modal.querySelector('#vault-master-current').value = '';
  modal.querySelector('#vault-master-new').value = '';
  modal.querySelector('#vault-master-confirm').value = '';
  updateMasterStrengthIndicator('');
  modal.classList.add('open');
  refreshIcons();
  setTimeout(() => modal.querySelector('#vault-master-current').focus(), 100);
}

function closeMasterPasswordModal() {
  if (vaultMasterModalEl) vaultMasterModalEl.classList.remove('open');
}

function updateMasterStrengthIndicator(pass) {
  const fill = document.getElementById('vault-master-strength-fill');
  const label = document.getElementById('vault-master-strength-label');
  if (!fill || !label) return;

  const s = calculatePasswordStrength(pass);
  fill.style.width = `${s.percent}%`;
  fill.style.background = s.color;
  label.textContent = `Fortaleza: ${s.label}`;
  label.style.color = s.color;
}

function saveMasterPassword() {
  const current = document.getElementById('vault-master-current').value;
  const newPass = document.getElementById('vault-master-new').value;
  const confirm = document.getElementById('vault-master-confirm').value;

  if (current !== getVaultMaster()) {
    showToast('Contraseña incorrecta', 'La contraseña maestra actual no coincide.', 'alert-circle');
    return;
  }
  if (newPass.length < 6) {
    showToast('Muy corta', 'La nueva contraseña debe tener al menos 6 caracteres.', 'alert-circle');
    return;
  }
  if (newPass !== confirm) {
    showToast('No coinciden', 'Las contraseñas nuevas no coinciden.', 'alert-circle');
    return;
  }
  if (newPass === current) {
    showToast('Sin cambios', 'La nueva contraseña debe ser distinta a la actual.', 'info');
    return;
  }

  setVaultMaster(newPass);
  closeMasterPasswordModal();
  renderSettingsApp();
  showToast('Contraseña Maestra Actualizada', 'Tu bóveda está más segura.', 'shield-check');
}

/* ═══════════════════════════════════════════════════════════════
   ★ VAULT — Bootstrap: cargar datos al inicio
═══════════════════════════════════════════════════════════════ */

vaultState.entries = loadVaultEntries();
loadVaultMasterMeta();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVaultEntryModal();
    closeVaultGeneratorModal();
    closeMasterPasswordModal();
  }
});

document.addEventListener('mousemove', () => {
  if (vaultState.unlocked) resetVaultLockTimer();
}, { passive: true });

document.addEventListener('keydown', () => {
  if (vaultState.unlocked) resetVaultLockTimer();
}, { passive: true });
/* ═══════════════════════════════════════════════════════════════
   ★ PANEL DE REDES WIFI + BLUETOOTH
═══════════════════════════════════════════════════════════════ */

function getWifiSignalClass(signal) {
  if (signal >= 4) return 'excellent';
  if (signal >= 3) return 'good';
  if (signal >= 2) return 'fair';
  return 'weak';
}

function getWifiSecurityIcon(security) {
  if (security === 'open') return 'wifi';
  if (security === 'wpa3') return 'shield-check';
  return 'lock';
}

function getWifiSecurityLabel(security) {
  if (security === 'open') return 'Red abierta';
  if (security === 'wpa3') return 'WPA3 · Segura';
  return 'WPA2 · Segura';
}

function getWifiNetworkById(id) {
  return WIFI_NETWORKS.find(n => n.id === id) || null;
}

function getWifiNetworkHTML(network) {
  const isConnected = connectedWifiId === network.id;
  const signalClass = getWifiSignalClass(network.signal);
  const isWeak = network.signal <= 1;
  const signalBarsHTML = [1, 2, 3, 4].map(i =>
    `<span class="${i <= network.signal ? 'on' : ''}"></span>`
  ).join('');

  const securityIcon = getWifiSecurityIcon(network.security);
  const isOpen = network.security === 'open';

  let actionHTML = '';
  if (isConnected) {
    actionHTML = `
      <button class="network-connect-btn disconnect" type="button" onclick="event.stopPropagation(); disconnectWifi()">
        Desconectar
      </button>
    `;
  } else {
    actionHTML = `
      <button class="network-connect-btn" type="button" onclick="event.stopPropagation(); connectToWifi('${network.id}')">
        Conectar
      </button>
    `;
  }

  let passwordHTML = '';
  if (isConnected && wifiPasswordVisible === network.id && network.password) {
    passwordHTML = `
      <div class="network-password-row">
        <span>${escapeHtml(network.password)}</span>
        <button class="network-item-btn" type="button" title="Copiar contraseña" onclick="event.stopPropagation(); copyWifiPassword('${network.id}')">
          <i data-lucide="copy"></i>
        </button>
      </div>
    `;
  }

  const actionBtnsHTML = isConnected ? `
    <button class="network-item-btn" type="button" title="${wifiPasswordVisible === network.id ? 'Ocultar contraseña' : 'Ver contraseña'}"
            onclick="event.stopPropagation(); toggleWifiPassword('${network.id}')">
      <i data-lucide="${wifiPasswordVisible === network.id ? 'eye-off' : 'eye'}"></i>
    </button>
    <button class="network-item-btn danger" type="button" title="Olvidar red"
            onclick="event.stopPropagation(); forgetWifi('${network.id}')">
      <i data-lucide="trash-2"></i>
    </button>
  ` : '';

  return `
    <div class="network-item ${isConnected ? 'connected' : ''} ${isWeak ? 'weak-signal' : ''}"
         data-wifi-id="${network.id}"
         onclick="connectToWifi('${network.id}')">
      <div class="network-item-icon">
        <i data-lucide="${isOpen ? 'wifi' : 'wifi'}"></i>
      </div>
      <div class="network-item-meta">
        <div class="network-item-title">
          ${escapeHtml(network.ssid)}
          ${!isOpen ? `<i data-lucide="${securityIcon}" class="network-lock-icon"></i>` : ''}
        </div>
        <div class="network-item-sub">
          ${isConnected ? 'Conectada · ' + network.frequency : getWifiSecurityLabel(network.security) + ' · ' + network.frequency}
        </div>
      </div>
      <div class="network-signal-bars" title="Señal: ${network.signal}/4">
        ${signalBarsHTML}
      </div>
      <div class="network-item-actions">
        ${actionBtnsHTML}
        ${actionHTML}
      </div>
    </div>
    ${passwordHTML}
  `;
}

function renderWifiPanel() {
  const body = document.getElementById('wifi-panel-body');
  const footer = document.getElementById('wifi-panel-footer');
  const subtitle = document.getElementById('wifi-panel-subtitle');

  if (!body) return;

  // 1) Si WiFi está apagado → mostrar estado vacío (destruye la lista si existe)
  if (!wifiEnabled) {
    body.innerHTML = `
      <div class="network-empty-state">
        <div class="network-empty-icon"><i data-lucide="wifi-off"></i></div>
        <strong>WiFi está desactivado</strong>
        <small>Activá WiFi para ver las redes disponibles en tu zona.</small>
      </div>
    `;
    if (subtitle) subtitle.textContent = 'WiFi desactivado';
    if (footer) footer.hidden = true;
    refreshIcons();
    return;
  }

  // 2) WiFi prendido → asegurar que existe la estructura (loading + lista)
  let list = document.getElementById('wifi-networks-list');
  let loading = document.getElementById('wifi-loading');
  if (!list) {
    body.innerHTML = `
      <div class="network-loading" id="wifi-loading" hidden>
        <i data-lucide="loader-circle" class="network-spinner"></i>
        <span>Escaneando redes...</span>
      </div>
      <div class="network-list" id="wifi-networks-list"></div>
    `;
    list = document.getElementById('wifi-networks-list');
    loading = document.getElementById('wifi-loading');
  }

  if (!list) return;

  // 3) Footer visible cuando WiFi está prendido
  if (footer) footer.hidden = false;

  // 4) Si está escaneando → mostrar spinner y salir
  if (wifiScanInProgress) {
    if (loading) loading.hidden = false;
    list.innerHTML = '';
    if (subtitle) subtitle.textContent = 'Escaneando redes...';
    refreshIcons();
    return;
  }

  // 5) Renderizar la lista de redes
  if (loading) loading.hidden = true;

  const sorted = [...WIFI_NETWORKS].sort((a, b) => {
    if (connectedWifiId === a.id) return -1;
    if (connectedWifiId === b.id) return 1;
    return b.signal - a.signal;
  });

  list.innerHTML = sorted.map(getWifiNetworkHTML).join('');

  if (subtitle) {
    const count = WIFI_NETWORKS.length;
    subtitle.textContent = connectedWifiId
      ? `Conectada a ${getWifiNetworkById(connectedWifiId)?.ssid || '—'}`
      : `${count} red${count === 1 ? '' : 'es'} disponible${count === 1 ? '' : 's'}`;
  }

  refreshIcons();
}

function rescanWifiNetworks() {
  if (!wifiEnabled) return;
  wifiScanInProgress = true;
  renderWifiPanel();

  setTimeout(() => {
    // Simulamos que las señales varían levemente
    WIFI_NETWORKS.forEach(n => {
      if (n.signal < 4) {
        const delta = Math.random() > 0.5 ? 1 : -1;
        n.signal = Math.max(1, Math.min(4, n.signal + delta));
      }
    });
    wifiScanInProgress = false;
    renderWifiPanel();
  }, 1200 + Math.random() * 600);
}

function connectToWifi(networkId) {
  if (!wifiEnabled) return;
  const network = getWifiNetworkById(networkId);
  if (!network) return;
  if (connectedWifiId === networkId) return;

  // Mostrar estado "conectando" en el botón
  const item = document.querySelector(`.network-item[data-wifi-id="${networkId}"]`);
  const connectBtn = item?.querySelector('.network-connect-btn');
  if (connectBtn) {
    connectBtn.classList.add('connecting');
    connectBtn.textContent = 'Conectando...';
  }

  setTimeout(() => {
    connectedWifiId = networkId;
    wifiPasswordVisible = null;
    renderWifiPanel();
    showToast('WiFi Conectada', `Conectado a "${network.ssid}".`, 'wifi');
    logActivity({
      category: 'network',
      level: 'info',
      icon: 'wifi',
      title: 'WiFi conectada',
      subtitle: `${network.ssid} · ${network.frequency}`,
      detail: {
        'Red': network.ssid,
        'Seguridad': getWifiSecurityLabel(network.security),
        'Frecuencia': network.frequency,
        'Señal': `${network.signal}/4`,
        description: 'Conexión inalámbrica establecida correctamente.'
      }
    });
  }, 900 + Math.random() * 600);
}

function disconnectWifi() {
  const network = getWifiNetworkById(connectedWifiId);
  connectedWifiId = null;
  wifiPasswordVisible = null;
  renderWifiPanel();
  if (network) {
    showToast('WiFi Desconectada', `Te desconectaste de "${network.ssid}".`, 'wifi-off');
  }
}

function forgetWifi(networkId) {
  const network = getWifiNetworkById(networkId);
  if (!network) return;
  if (connectedWifiId === networkId) {
    connectedWifiId = null;
    wifiPasswordVisible = null;
  }
  showToast('Red Olvidada', `Se olvidó la red "${network.ssid}".`, 'trash-2');
  renderWifiPanel();
}

function toggleWifiPassword(networkId) {
  wifiPasswordVisible = wifiPasswordVisible === networkId ? null : networkId;
  renderWifiPanel();
}

async function copyWifiPassword(networkId) {
  const network = getWifiNetworkById(networkId);
  if (!network || !network.password) return;
  try {
    await navigator.clipboard.writeText(network.password);
    showToast('Contraseña Copiada', `Contraseña de "${network.ssid}" copiada.`, 'clipboard-check');
  } catch (e) {
    showToast('Copiado', 'Contraseña copiada (fallback).', 'clipboard');
  }
}

function openWifiPanel() {
  const panel = document.getElementById('wifi-panel');
  if (!panel) return;
  closeQuickCenter();
  closeControlCenter();
  closeNotificationCenter();
  closeBluetoothPanel();
  panel.classList.remove('hidden');
  renderWifiPanel();
  refreshIcons();
  if (wifiEnabled && !connectedWifiId) {
    rescanWifiNetworks();
  }
}

function closeWifiPanel() {
  const panel = document.getElementById('wifi-panel');
  if (!panel) return;
  panel.classList.add('hidden');
}

function toggleWifiPanel() {
  const panel = document.getElementById('wifi-panel');
  if (!panel) return;
  if (panel.classList.contains('hidden')) openWifiPanel();
  else closeWifiPanel();
}

/* ───────── Bluetooth ───────── */

function getBluetoothDeviceById(id) {
  return BLUETOOTH_DEVICES.find(d => d.id === id) || null;
}

function getBatteryClass(battery) {
  if (battery <= 20) return 'low';
  if (battery <= 50) return 'medium';
  return 'high';
}

function getBluetoothDeviceHTML(device, mode = 'paired') {
  const isConnected = device.connected;
  const batteryClass = getBatteryClass(device.battery);

  const iconHTML = `<i data-lucide="${device.icon}"></i>`;

  const batteryHTML = (device.paired && device.battery > 0) ? `
    <div class="network-battery ${batteryClass}" title="Batería: ${device.battery}%">
      <div class="network-battery-bar">
        <span class="network-battery-fill" style="width: ${device.battery}%;"></span>
      </div>
      <span>${device.battery}%</span>
    </div>
  ` : '';

  let actionHTML = '';
  if (mode === 'paired') {
    if (isConnected) {
      actionHTML = `
        <button class="network-connect-btn disconnect" type="button"
                onclick="event.stopPropagation(); disconnectBluetoothDevice('${device.id}')">
          Desconectar
        </button>
      `;
    } else {
      actionHTML = `
        <button class="network-connect-btn" type="button"
                onclick="event.stopPropagation(); connectBluetoothDevice('${device.id}')">
          Conectar
        </button>
      `;
    }
  } else {
    actionHTML = `
      <button class="network-connect-btn" type="button"
              onclick="event.stopPropagation(); pairBluetoothDevice('${device.id}')">
        Emparejar
      </button>
    `;
  }

  const forgetBtn = (mode === 'paired' && !isConnected) ? `
    <button class="network-item-btn danger" type="button" title="Olvidar dispositivo"
            onclick="event.stopPropagation(); forgetBluetoothDevice('${device.id}')">
      <i data-lucide="trash-2"></i>
    </button>
  ` : '';

  return `
    <div class="network-item ${isConnected ? 'connected' : ''}" data-bt-id="${device.id}">
      <div class="network-item-icon">${iconHTML}</div>
      <div class="network-item-meta">
        <div class="network-item-title">${escapeHtml(device.name)}</div>
        <div class="network-item-sub">
          ${isConnected ? 'Conectado' : (mode === 'paired' ? 'Emparejado' : 'Dispositivo cercano')}
          ${batteryHTML ? ' · ' : ''}
          ${batteryHTML}
        </div>
      </div>
      <div class="network-item-actions">
        ${forgetBtn}
        ${actionHTML}
      </div>
    </div>
  `;
}

function renderBluetoothPanel() {
  const empty = document.getElementById('bt-empty-state');
  const content = document.getElementById('bt-panel-content');
  const pairedList = document.getElementById('bt-paired-list');
  const availableList = document.getElementById('bt-available-list');
  const subtitle = document.getElementById('bt-panel-subtitle');
  const footer = document.getElementById('bt-panel-footer');
  if (!content) return;

  if (!bluetoothEnabled) {
    if (empty) empty.hidden = false;
    content.hidden = true;
    if (footer) footer.hidden = true;
    if (subtitle) subtitle.textContent = 'Bluetooth desactivado';
    refreshIcons();
    return;
  }

  if (empty) empty.hidden = true;
  content.hidden = false;
  if (footer) footer.hidden = false;

  const paired = BLUETOOTH_DEVICES.filter(d => d.paired);
  const available = BLUETOOTH_DEVICES.filter(d => !d.paired);

  if (pairedList) {
    pairedList.innerHTML = paired.length
      ? paired.map(d => getBluetoothDeviceHTML(d, 'paired')).join('')
      : `<div class="network-empty-state" style="padding:20px 12px;"><small>No hay dispositivos emparejados.</small></div>`;
  }

  if (availableList) {
    if (btScanInProgress) {
      availableList.innerHTML = `
        <div class="network-loading">
          <i data-lucide="loader-circle" class="network-spinner"></i>
          <span>Buscando dispositivos...</span>
        </div>
      `;
    } else {
      availableList.innerHTML = available.length
        ? available.map(d => getBluetoothDeviceHTML(d, 'available')).join('')
        : `<div class="network-empty-state" style="padding:20px 12px;"><small>No se encontraron dispositivos nuevos.</small></div>`;
    }
  }

  if (subtitle) {
    const connectedCount = BLUETOOTH_DEVICES.filter(d => d.connected).length;
    subtitle.textContent = connectedCount > 0
      ? `${connectedCount} dispositivo${connectedCount === 1 ? '' : 's'} conectado${connectedCount === 1 ? '' : 's'}`
      : `${paired.length} emparejado${paired.length === 1 ? '' : 's'}`;
  }

  refreshIcons();
}

function rescanBluetoothDevices() {
  if (!bluetoothEnabled) return;
  btScanInProgress = true;
  renderBluetoothPanel();

  setTimeout(() => {
    btScanInProgress = false;
    renderBluetoothPanel();
  }, 1400 + Math.random() * 800);
}

function connectBluetoothDevice(id) {
  const device = getBluetoothDeviceById(id);
  if (!device || !device.paired) return;
  if (device.connected) return;

  const item = document.querySelector(`.network-item[data-bt-id="${id}"]`);
  const btn = item?.querySelector('.network-connect-btn');
  if (btn) {
    btn.classList.add('connecting');
    btn.textContent = 'Conectando...';
  }

  setTimeout(() => {
    device.connected = true;
    renderBluetoothPanel();
    showToast('Dispositivo Conectado', `"${device.name}" conectado por Bluetooth.`, 'bluetooth');
  }, 800 + Math.random() * 600);
}

function disconnectBluetoothDevice(id) {
  const device = getBluetoothDeviceById(id);
  if (!device) return;
  device.connected = false;
  renderBluetoothPanel();
  showToast('Desconectado', `"${device.name}" fue desconectado.`, 'bluetooth');
}

function forgetBluetoothDevice(id) {
  const device = getBluetoothDeviceById(id);
  if (!device) return;
  device.paired = false;
  device.connected = false;
  device.battery = 0;
  renderBluetoothPanel();
  showToast('Dispositivo Olvidado', `"${device.name}" fue removido de la lista.`, 'trash-2');
}

function pairBluetoothDevice(id) {
  const device = getBluetoothDeviceById(id);
  if (!device || device.paired) return;

  const item = document.querySelector(`.network-item[data-bt-id="${id}"]`);
  const btn = item?.querySelector('.network-connect-btn');
  if (btn) {
    btn.classList.add('connecting');
    btn.textContent = 'Emparejando...';
  }

  setTimeout(() => {
    device.paired = true;
    device.connected = true;
    device.battery = Math.floor(60 + Math.random() * 40);
    renderBluetoothPanel();
    showToast('Dispositivo Emparejado', `"${device.name}" emparejado y conectado.`, 'check-circle-2');
    logActivity({
      category: 'network',
      level: 'info',
      icon: 'bluetooth',
      title: 'Dispositivo Bluetooth emparejado',
      subtitle: `${device.name}`,
      detail: {
        'Dispositivo': device.name,
        'Tipo': device.type,
        'Batería': `${device.battery}%`,
        description: 'Nuevo dispositivo Bluetooth emparejado y conectado al sistema.'
      }
    });
  }, 1200 + Math.random() * 800);
}

function openBluetoothPanel() {
  const panel = document.getElementById('bluetooth-panel');
  if (!panel) return;
  closeQuickCenter();
  closeControlCenter();
  closeNotificationCenter();
  closeWifiPanel();
  panel.classList.remove('hidden');
  renderBluetoothPanel();
  refreshIcons();
  if (bluetoothEnabled) {
    rescanBluetoothDevices();
  }
}

function closeBluetoothPanel() {
  const panel = document.getElementById('bluetooth-panel');
  if (!panel) return;
  panel.classList.add('hidden');
}

function toggleBluetoothPanel() {
  const panel = document.getElementById('bluetooth-panel');
  if (!panel) return;
  if (panel.classList.contains('hidden')) openBluetoothPanel();
  else closeBluetoothPanel();
}

function openNetworkSettings() {
  closeWifiPanel();
  openApp('settings');
  settingsState.activeSettingsTab = 'system';
  renderSettingsApp();
}

/* ═══════════════════════════════════════════════════════════════
   ★ ADMINISTRADOR DE TAREAS — Lógica completa
═══════════════════════════════════════════════════════════════ */

/* ─── Gestión de PIDs ─── */

function getTaskmgrPid(winId) {
  if (!taskmgrProcessPids[winId]) {
    taskmgrProcessPids[winId] = 1000 + Math.floor(Math.random() * 8000);
  }
  return taskmgrProcessPids[winId];
}

/* ─── Generación de procesos ─── */

function buildTaskmgrProcesses() {
  const processes = [];

  // Apps reales abiertas
  Object.keys(openWindows).forEach(winId => {
    const entry = openWindows[winId];
    if (!entry?.win) return;

    const appId = entry.appId;
    const app = APPS[appId];
    if (!app) return;

    const instances = getInstancesOfApp(appId);
    const hasMultiple = instances.length > 1;
    const instNum = hasMultiple ? getInstanceNumber(winId) : 1;

    // CPU y RAM simulados: cada app tiene un "perfil" base
    const appCpuBase = {
      browser: 12, music: 3, games: 18, vscode: 8, nova: 5,
      settings: 1, files: 2, terminal: 1, vault: 1,
      activity: 1, taskmgr: 2, store: 0
    }[appId] || 3;

    const appRamBase = {
      browser: 480, music: 220, games: 820, vscode: 340, nova: 180,
      settings: 90, files: 120, terminal: 80, vault: 60,
      activity: 70, taskmgr: 85, store: 50
    }[appId] || 120;

    const jitter = () => (Math.random() - 0.5) * 2;
    const cpu = Math.max(0, Math.round(appCpuBase + jitter() * appCpuBase * 0.3));
    const ram = Math.max(20, Math.round(appRamBase + jitter() * appRamBase * 0.15));

    processes.push({
      pid: getTaskmgrPid(winId),
      winId,
      appId,
      name: hasMultiple ? `${app.title} · #${instNum}` : app.title,
      sub: app.sub || '',
      icon: app.icon,
      image: app.image,
      cpu,
      ram,
      status: 'running',
      isSystem: false
    });
  });

  // Procesos de sistema (mock)
  TASKMGR_SYSTEM_PROCESSES.forEach(sysProc => {
    const jitter = () => (Math.random() - 0.5) * 2;
    processes.push({
      pid: sysProc.pid,
      winId: null,
      appId: null,
      name: sysProc.name,
      sub: sysProc.sub,
      icon: sysProc.icon,
      image: null,
      cpu: Math.max(0, Math.round(sysProc.cpuBase + jitter() * sysProc.cpuBase * 0.4)),
      ram: Math.max(20, Math.round(sysProc.ramBase + jitter() * sysProc.ramBase * 0.1)),
      status: 'system',
      isSystem: true
    });
  });

  return processes;
}

/* ─── Filtros y ordenamiento ─── */

function getTaskmgrFilteredProcesses() {
  let processes = buildTaskmgrProcesses();

  if (taskmgrSearchQuery) {
    const q = taskmgrSearchQuery.toLowerCase();
    processes = processes.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      String(p.pid).includes(q)
    );
  }

  const sortMult = taskmgrSortDir === 'asc' ? 1 : -1;
  processes.sort((a, b) => {
    if (a.isSystem !== b.isSystem) return a.isSystem ? 1 : -1;
    switch (taskmgrSortKey) {
      case 'name': return a.name.localeCompare(b.name) * sortMult;
      case 'pid':  return (a.pid - b.pid) * sortMult;
      case 'cpu':  return (a.cpu - b.cpu) * sortMult;
      case 'ram':  return (a.ram - b.ram) * sortMult;
      case 'status': return a.status.localeCompare(b.status) * sortMult;
      default: return 0;
    }
  });

  return processes;
}

function getTaskmgrTotals() {
  const processes = buildTaskmgrProcesses();
  const totalCpu = processes.reduce((sum, p) => sum + p.cpu, 0);
  const totalRam = processes.reduce((sum, p) => sum + p.ram, 0);
  const totalProcesses = processes.length;

  const cpuPct = Math.min(100, Math.round(totalCpu * 0.8));
  const ramPct = Math.min(100, Math.round(totalRam / 32768 * 100));
  const gpuPct = gameModeActive
    ? 55 + Math.floor(Math.random() * 25)
    : 25 + Math.floor(Math.random() * 30);

  return {
    cpu: cpuPct,
    ram: ramPct,
    ramGB: (totalRam / 1024).toFixed(1),
    gpu: gpuPct,
    totalProcesses
  };
}

/* ─── Render ─── */

function getTaskmgrAppHTML() {
  const totals = getTaskmgrTotals();
  const processes = getTaskmgrFilteredProcesses();

  const cpuHistory = taskmgrMetricsHistory.cpu.map(v => Math.max(4, v));
  const ramHistory = taskmgrMetricsHistory.ram.map(v => Math.max(4, v));
  const gpuHistory = taskmgrMetricsHistory.gpu.map(v => Math.max(4, v));

  const sparkHTML = (history) => history.map(v =>
    `<span class="taskmgr-spark-bar" style="height:${Math.max(8, Math.min(100, v))}%;"></span>`
  ).join('');

  const metricsHTML = `
    <div class="taskmgr-metrics">
      <div class="taskmgr-metric-card cpu">
        <div class="taskmgr-metric-top">
          <span class="taskmgr-metric-label"><i data-lucide="cpu"></i> CPU</span>
          <span class="taskmgr-metric-value cpu">${totals.cpu}%</span>
        </div>
        <div class="taskmgr-sparkline">${sparkHTML(cpuHistory)}</div>
      </div>
      <div class="taskmgr-metric-card ram">
        <div class="taskmgr-metric-top">
          <span class="taskmgr-metric-label"><i data-lucide="memory-stick"></i> RAM</span>
          <span class="taskmgr-metric-value ram">${totals.ramGB} GB</span>
        </div>
        <div class="taskmgr-sparkline">${sparkHTML(ramHistory)}</div>
      </div>
      <div class="taskmgr-metric-card gpu">
        <div class="taskmgr-metric-top">
          <span class="taskmgr-metric-label"><i data-lucide="activity"></i> GPU</span>
          <span class="taskmgr-metric-value gpu">${totals.gpu}%</span>
        </div>
        <div class="taskmgr-sparkline">${sparkHTML(gpuHistory)}</div>
      </div>
    </div>
  `;

  const userProcesses = processes.filter(p => !p.isSystem);
  const systemProcesses = processes.filter(p => p.isSystem);

  let bodyHTML = '';

  if (processes.length === 0) {
    bodyHTML = `
      <div class="taskmgr-empty">
        <div class="taskmgr-empty-icon"><i data-lucide="search"></i></div>
        <strong>Sin resultados</strong>
        <small>No hay procesos que coincidan con "${escapeHtml(taskmgrSearchQuery)}".</small>
      </div>
    `;
  } else {
    if (userProcesses.length > 0) {
      bodyHTML += userProcesses.map(p => renderTaskmgrRowHTML(p)).join('');
    }

    if (systemProcesses.length > 0) {
      bodyHTML += `
        <div class="taskmgr-section-label">
          <i data-lucide="cpu"></i> Procesos del sistema
        </div>
        ${systemProcesses.map(p => renderTaskmgrRowHTML(p)).join('')}
      `;
    }
  }

  return `
    <div class="taskmgr-app">
      <header class="taskmgr-header">
        <div class="taskmgr-header-left">
          <span class="taskmgr-header-kicker">NEBULA TASK MANAGER</span>
          <h2 class="taskmgr-header-title">Administrador de Tareas</h2>
          <div class="taskmgr-header-sub">
            <strong>${totals.totalProcesses}</strong> procesos activos · CPU <strong>${totals.cpu}%</strong> · RAM <strong>${totals.ramGB} GB</strong>
          </div>
        </div>
        <div class="taskmgr-header-actions">
          <button class="taskmgr-action-btn" type="button"
                  onclick="taskmgrKillSelected()"
                  ${taskmgrSelectedPid === null ? 'disabled' : ''}>
            <i data-lucide="x-circle"></i> Finalizar
          </button>
        </div>
      </header>

      ${metricsHTML}

      <div class="taskmgr-toolbar">
        <label class="taskmgr-search">
          <i data-lucide="search"></i>
          <input type="search"
                 placeholder="Buscar proceso..."
                 value="${escapeHtml(taskmgrSearchQuery)}"
                 oninput="setTaskmgrSearch(this.value)">
        </label>
        <div class="taskmgr-toolbar-right">
          <i data-lucide="info"></i> Click en las columnas para ordenar
        </div>
      </div>

      <div class="taskmgr-table">
        <div class="taskmgr-table-head">
          <button class="taskmgr-col-btn ${taskmgrSortKey === 'name' ? 'sorted-' + taskmgrSortDir : ''}"
                  type="button" onclick="setTaskmgrSort('name')">
            Nombre <i data-lucide="chevron-down"></i>
          </button>
          <button class="taskmgr-col-btn ${taskmgrSortKey === 'pid' ? 'sorted-' + taskmgrSortDir : ''}"
                  type="button" onclick="setTaskmgrSort('pid')">
            PID <i data-lucide="chevron-down"></i>
          </button>
          <button class="taskmgr-col-btn ${taskmgrSortKey === 'cpu' ? 'sorted-' + taskmgrSortDir : ''}"
                  type="button" onclick="setTaskmgrSort('cpu')">
            CPU <i data-lucide="chevron-down"></i>
          </button>
          <button class="taskmgr-col-btn ${taskmgrSortKey === 'ram' ? 'sorted-' + taskmgrSortDir : ''}"
                  type="button" onclick="setTaskmgrSort('ram')">
            RAM <i data-lucide="chevron-down"></i>
          </button>
          <button class="taskmgr-col-btn ${taskmgrSortKey === 'status' ? 'sorted-' + taskmgrSortDir : ''}"
                  type="button" onclick="setTaskmgrSort('status')">
            Estado <i data-lucide="chevron-down"></i>
          </button>
          <span></span>
        </div>
        <div class="taskmgr-table-body">
          ${bodyHTML}
        </div>
      </div>
    </div>
  `;
}

function renderTaskmgrRowHTML(p) {
  const isSelected = taskmgrSelectedPid === p.pid;
  const cpuClass = p.cpu >= 30 ? 'critical' : p.cpu >= 15 ? 'high' : '';
  const ramClass = p.ram >= 800 ? 'critical' : p.ram >= 400 ? 'high' : '';

  const iconHTML = p.image
    ? `<img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" /><i data-lucide="${p.icon}" style="display:none;"></i>`
    : `<i data-lucide="${p.icon}"></i>`;

  const ramDisplay = p.ram >= 1024
    ? `${(p.ram / 1024).toFixed(1)} GB`
    : `${p.ram} MB`;

  const statusLabel = p.isSystem ? 'Sistema' : 'Ejecutándose';

  return `
    <div class="taskmgr-row ${isSelected ? 'selected' : ''} ${p.isSystem ? 'system' : ''}"
         data-pid="${p.pid}"
         onclick="setTaskmgrSelected(${p.pid})"
         ondblclick="taskmgrKillProcess(${p.pid})">
      <div class="taskmgr-name">
        <div class="taskmgr-name-icon">${iconHTML}</div>
        <div style="min-width:0;">
          <div class="taskmgr-name-text">${escapeHtml(p.name)}</div>
          <div class="taskmgr-name-sub">${escapeHtml(p.sub)}</div>
        </div>
      </div>
      <span class="taskmgr-col-pid">${p.pid}</span>
      <span class="taskmgr-col-cpu ${cpuClass}">${p.cpu}%</span>
      <span class="taskmgr-col-ram ${ramClass}">${ramDisplay}</span>
      <span class="taskmgr-col-status">
        <span class="taskmgr-status-dot"></span>${statusLabel}
      </span>
      <div class="taskmgr-col-actions">
        <button class="taskmgr-kill-btn" type="button" title="Finalizar tarea"
                onclick="event.stopPropagation(); taskmgrKillProcess(${p.pid})">
          <i data-lucide="x"></i>
        </button>
      </div>
    </div>
  `;
}

/* ─── Interacciones ─── */

function setTaskmgrSearch(query) {
  taskmgrSearchQuery = query;
  renderTaskmgrApp();
}

function setTaskmgrSort(key) {
  if (taskmgrSortKey === key) {
    taskmgrSortDir = taskmgrSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    taskmgrSortKey = key;
    taskmgrSortDir = key === 'name' ? 'asc' : 'desc';
  }
  renderTaskmgrApp();
}

function setTaskmgrSelected(pid) {
  taskmgrSelectedPid = taskmgrSelectedPid === pid ? null : pid;
  renderTaskmgrApp();
}

function taskmgrKillSelected() {
  if (taskmgrSelectedPid === null) return;
  taskmgrKillProcess(taskmgrSelectedPid);
}

function taskmgrKillProcess(pid) {
  const processes = buildTaskmgrProcesses();
  const proc = processes.find(p => p.pid === pid);
  if (!proc) return;

  if (proc.isSystem) {
    showToast('No se puede finalizar', `"${proc.name}" es un proceso del sistema.`, 'alert-circle');
    return;
  }

  if (!proc.winId || !openWindows[proc.winId]) return;

  const appTitle = APPS[proc.appId]?.title || proc.appId;

  closeApp(proc.winId);
  taskmgrSelectedPid = null;

  showToast(
    'Proceso finalizado',
    `"${appTitle}" (PID ${pid}) fue cerrado.`,
    'x-circle'
  );

  logActivity({
    category: 'system',
    level: 'warning',
    icon: 'x-circle',
    title: 'Proceso finalizado',
    subtitle: `${appTitle} · PID ${pid}`,
    detail: {
      'Aplicación': appTitle,
      'PID': String(pid),
      'Acción': 'Finalizar tarea',
      'Fecha': new Date().toLocaleString('es-AR'),
      description: 'El proceso fue terminado manualmente desde el Administrador de Tareas.'
    }
  });
}

/* ─── Loop de métricas en vivo ─── */

function startTaskmgrMetricsLoop() {
  if (taskmgrMetricsInterval) return;

  taskmgrMetricsInterval = setInterval(() => {
    if (getInstancesOfApp('taskmgr').length === 0) {
      stopTaskmgrMetricsLoop();
      return;
    }

    const totals = getTaskmgrTotals();

    taskmgrMetricsHistory.cpu.push(totals.cpu);
    taskmgrMetricsHistory.ram.push(totals.ram);
    taskmgrMetricsHistory.gpu.push(totals.gpu);

    if (taskmgrMetricsHistory.cpu.length > 30) taskmgrMetricsHistory.cpu.shift();
    if (taskmgrMetricsHistory.ram.length > 30) taskmgrMetricsHistory.ram.shift();
    if (taskmgrMetricsHistory.gpu.length > 30) taskmgrMetricsHistory.gpu.shift();

    renderTaskmgrApp();
  }, 1500);
}

function stopTaskmgrMetricsLoop() {
  if (taskmgrMetricsInterval) {
    clearInterval(taskmgrMetricsInterval);
    taskmgrMetricsInterval = null;
  }
}

/* ─── Render y bootstrap ─── */

function renderTaskmgrApp() {
  const winIds = getInstancesOfApp('taskmgr');
  winIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;
    content.innerHTML = getTaskmgrAppHTML();
  });
  refreshIcons();
}

function setupTaskmgrApp(win) {
  if (!win) return;
  startTaskmgrMetricsLoop();
}

/* ═══════════════════════════════════════════════════════════════
   ★ CENTRO DE ACTIVIDAD — Lógica completa
═══════════════════════════════════════════════════════════════ */

/* ─── Logging API ─── */

function logActivity(opts) {
  const {
    category = 'system',
    level = 'info',
    icon = 'activity',
    title = '',
    subtitle = '',
    detail = null
  } = opts || {};

  activityIdCounter++;
  const activity = {
    id: 'act-' + Date.now() + '-' + activityIdCounter,
    category,
    level,
    icon,
    title: String(title),
    subtitle: String(subtitle),
    detail: detail ? { ...detail } : null,
    timestamp: Date.now(),
    expanded: false,
    resolved: detail?.actions?.length ? false : null
  };

  activityLog.unshift(activity);
  if (activityLog.length > ACTIVITY_MAX_ITEMS) {
    activityLog = activityLog.slice(0, ACTIVITY_MAX_ITEMS);
  }

  saveActivityLog();
  updateActivityDockBadge();

  // Si la ventana del Centro de Actividad está abierta, re-renderizar
  const openActivityWins = getInstancesOfApp('activity');
  if (openActivityWins.length > 0) {
    renderActivityApp();
  }
}

function saveActivityLog() {
  try {
    const serializable = activityLog.map(a => ({ ...a }));
    localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {}
}

function loadActivityLog() {
  try {
    const raw = localStorage.getItem(ACTIVITY_STORAGE_KEY);
    if (!raw) {
      seedInitialActivityLog();
      return;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      seedInitialActivityLog();
      return;
    }
    activityLog = parsed.filter(a =>
      a && typeof a === 'object' && a.id && a.title
    );
    if (activityLog.length === 0) {
      seedInitialActivityLog();
    }
  } catch (e) {
    seedInitialActivityLog();
  }
}

function seedInitialActivityLog() {
  const now = Date.now();
  const min = 60 * 1000;
  const hour = 60 * min;

  activityLog = [
    {
      id: 'act-seed-1',
      category: 'security',
      level: 'danger',
      icon: 'alert-triangle',
      title: 'Amenaza detectada',
      subtitle: 'Trojan.Win32.Agent.xk3',
      detail: {
        fileName: '/Downloads/archivo_sospechoso_xk3.exe',
        type: 'Trojan.Win32.Agent',
        severity: 'critical',
        detectedBy: 'Antivirus en tiempo real',
        description: 'Este archivo intentó inyectar código malicioso en procesos del sistema. Fue neutralizado por el antivirus en tiempo real y puesto en cuarentena automáticamente.',
        actions: [
          { id: 'delete',  label: 'Eliminar archivo', icon: 'trash-2',    variant: 'danger' },
          { id: 'restore', label: 'Restaurar',        icon: 'rotate-ccw', variant: 'success' },
          { id: 'info',    label: 'Más info',         icon: 'info',       variant: 'default' }
        ]
      },
      timestamp: now - 12 * min,
      expanded: false,
      resolved: false
    },
    {
      id: 'act-seed-2',
      category: 'security',
      level: 'success',
      icon: 'shield-check',
      title: 'Escaneo completado',
      subtitle: '0 amenazas encontradas en 4 min',
      detail: {
        'Archivos escaneados': '24,187',
        'Duración': '4 min 12 s',
        'Motor': 'Nebula Shield v2.5',
        'Base de firmas': 'Actualizada hoy',
        description: 'Se realizó un escaneo completo del sistema. No se encontraron amenazas activas.'
      },
      timestamp: now - 25 * min,
      expanded: false,
      resolved: null
    },
    {
      id: 'act-seed-3',
      category: 'gaming',
      level: 'info',
      icon: 'gamepad-2',
      title: 'Modo Juego activado',
      subtitle: 'RAM: 38% → 17% · CPU: 4.95 GHz',
      detail: {
        'Perfil aplicado': 'Alto Rendimiento',
        'RAM liberada': '3.4 GB',
        'Frecuencia CPU': '4.95 GHz (Turbo Boost)',
        'GPU': 'RTX 4080 · Boost Mode',
        description: 'El sistema entró en modo de alto rendimiento. Los recursos fueron optimizados para gaming.'
      },
      timestamp: now - 1 * hour,
      expanded: false,
      resolved: null
    },
    {
      id: 'act-seed-4',
      category: 'network',
      level: 'info',
      icon: 'shield-check',
      title: 'VPN Conectada',
      subtitle: 'Ámsterdam · Países Bajos',
      detail: {
        'Servidor': '🇳🇱 Ámsterdam, Países Bajos',
        'Protocolo': 'WireGuard',
        'Cifrado': 'AES-256-GCM',
        'Ping': '42 ms',
        description: 'Conexión VPN establecida correctamente. Todo el tráfico está cifrado.'
      },
      timestamp: now - 2 * hour,
      expanded: false,
      resolved: null
    },
    {
      id: 'act-seed-5',
      category: 'system',
      level: 'success',
      icon: 'download',
      title: 'Actualización del sistema',
      subtitle: 'Nebula OS v2.4.2 "Gamer" instalada',
      detail: {
        'Versión anterior': 'v2.4.0 Quantum',
        'Nueva versión': 'v2.4.2 Gamer',
        'Tamaño': '1.1 GB',
        'Duración': '2 min 45 s',
        description: 'La actualización se instaló correctamente. Mejoras de rendimiento y correcciones de seguridad aplicadas.'
      },
      timestamp: now - 5 * hour,
      expanded: false,
      resolved: null
    },
    {
      id: 'act-seed-6',
      category: 'system',
      level: 'info',
      icon: 'sparkles',
      title: 'RAM optimizada',
      subtitle: '5.8 GB liberados',
      detail: {
        'RAM anterior': '62%',
        'RAM nueva': '17%',
        'Procesos cerrados': '14',
        description: 'Se ejecutó una limpieza profunda de procesos inactivos y cache.'
      },
      timestamp: now - 24 * hour,
      expanded: false,
      resolved: null
    }
  ];

  activityIdCounter = activityLog.length;
  saveActivityLog();
}

function updateActivityDockBadge() {
  const unresolvedThreats = activityLog.filter(a =>
    a.category === 'security' &&
    a.level === 'danger' &&
    a.resolved === false
  ).length;

  const dockItem = document.querySelector('.dock-item[data-app-id="activity"]');
  if (!dockItem) return;

  if (unresolvedThreats > 0) {
    dockItem.classList.add('has-alert-badge');
    dockItem.title = `Centro de Actividad · ${unresolvedThreats} amenaza${unresolvedThreats === 1 ? '' : 's'} sin resolver`;
  } else {
    dockItem.classList.remove('has-alert-badge');
  }
}

/* ─── Helpers ─── */

function getActivityRelativeTime(timestamp) {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Ahora';
  if (mins < 60) return `Hace ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hace ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `Hace ${days}d`;
  const date = new Date(timestamp);
  return `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}`;
}

function getActivityGroupKey(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yesterday = today - 86400000;
  const weekAgo = today - 7 * 86400000;

  const ts = date.getTime();

  if (ts >= today) return 'today';
  if (ts >= yesterday) return 'yesterday';
  if (ts >= weekAgo) return 'this-week';
  return 'older';
}

function getActivityGroupLabel(key) {
  return {
    'today': 'Hoy',
    'yesterday': 'Ayer',
    'this-week': 'Esta semana',
    'older': 'Anteriores'
  }[key] || key;
}

function getActivityFilteredItems() {
  let items = [...activityLog];

  if (activityFilter !== 'all') {
    items = items.filter(a => a.category === activityFilter);
  }

  if (activitySearchQuery) {
    const q = activitySearchQuery.toLowerCase();
    items = items.filter(a =>
      (a.title || '').toLowerCase().includes(q) ||
      (a.subtitle || '').toLowerCase().includes(q)
    );
  }

  return items;
}

function getActivityCategoryCount(categoryId) {
  if (categoryId === 'all') return activityLog.length;
  return activityLog.filter(a => a.category === categoryId).length;
}

/* ─── Render principal ─── */

function getActivityAppHTML() {
  const items = getActivityFilteredItems();
  const totalCount = activityLog.length;

  const filtersHTML = Object.values(ACTIVITY_CATEGORIES).map(cat => {
    const count = getActivityCategoryCount(cat.id);
    const isActive = activityFilter === cat.id;
    return `
      <button class="activity-filter-chip ${isActive ? 'active' : ''}"
              type="button"
              onclick="setActivityFilter('${cat.id}')">
        <i data-lucide="${cat.icon}"></i>
        ${cat.name}
        ${count > 0 ? `<span class="filter-count">${count}</span>` : ''}
      </button>
    `;
  }).join('');

  let bodyHTML = '';

  if (items.length === 0) {
    bodyHTML = `
      <div class="activity-empty">
        <div class="activity-empty-icon"><i data-lucide="list-checks"></i></div>
        <strong>Sin actividad registrada</strong>
        <small>${activitySearchQuery ? 'No se encontraron eventos que coincidan con tu búsqueda.' : 'Los eventos del sistema aparecerán acá a medida que ocurran.'}</small>
      </div>
    `;
  } else {
    // Agrupar por fecha
    const groups = { today: [], yesterday: [], 'this-week': [], older: [] };
    items.forEach(item => {
      const groupKey = getActivityGroupKey(item.timestamp);
      groups[groupKey].push(item);
    });

    const order = ['today', 'yesterday', 'this-week', 'older'];

    bodyHTML = order.map(groupKey => {
      const groupItems = groups[groupKey];
      if (groupItems.length === 0) return '';

      const groupHTML = groupItems.map(item => renderActivityItemHTML(item)).join('');

      return `
        <div class="activity-group">
          <div class="activity-group-header">
            <span>${getActivityGroupLabel(groupKey)}</span>
            <span class="activity-group-count">${groupItems.length}</span>
          </div>
          ${groupHTML}
        </div>
      `;
    }).join('');
  }

  return `
    <div class="activity-app">
      <header class="activity-header">
        <div class="activity-header-left">
          <span class="activity-header-kicker">NEBULA ACTIVITY CENTER</span>
          <h2 class="activity-header-title">Centro de Actividad</h2>
          <div class="activity-header-sub">
            ${totalCount} evento${totalCount === 1 ? '' : 's'} registrado${totalCount === 1 ? '' : 's'} · Mostrando <strong>${items.length}</strong>
          </div>
        </div>
        <div class="activity-header-actions">
          <button class="activity-action-btn danger" type="button"
                  onclick="clearActivityLog()"
                  ${activityLog.length === 0 ? 'disabled' : ''}
                  title="Limpiar historial">
            <i data-lucide="trash-2"></i> Limpiar
          </button>
        </div>
      </header>

      <div class="activity-toolbar">
        <div class="activity-filters">${filtersHTML}</div>
        <label class="activity-search">
          <i data-lucide="search"></i>
          <input type="search"
                 placeholder="Buscar evento..."
                 value="${escapeHtml(activitySearchQuery)}"
                 oninput="setActivitySearch(this.value)">
        </label>
      </div>

      <div class="activity-body">
        ${bodyHTML}
      </div>
    </div>
  `;
}

function renderActivityItemHTML(item) {
  const isExpanded = item.id === activityExpandedId;
  const isUnresolved = item.resolved === false;
  const isResolved = item.resolved === true;

  let badgesHTML = '';
  if (isUnresolved) {
    badgesHTML = `<span class="activity-item-badge unresolved">Sin resolver</span>`;
  } else if (isResolved) {
    badgesHTML = `<span class="activity-item-badge resolved">Resuelto</span>`;
  }

  let detailHTML = '';
  if (item.detail) {
    detailHTML = renderActivityDetailHTML(item);
  }

  return `
    <div class="activity-item level-${item.level} ${isExpanded ? 'expanded' : ''}"
         data-activity-id="${item.id}">
      <div class="activity-item-header" onclick="toggleActivityItem('${item.id}')">
        <div class="activity-item-icon">
          <i data-lucide="${item.icon}"></i>
        </div>
        <div class="activity-item-meta">
          <div class="activity-item-title">${escapeHtml(item.title)}</div>
          <div class="activity-item-sub">${escapeHtml(item.subtitle)}</div>
        </div>
        ${badgesHTML}
        <div class="activity-item-time">
          <i data-lucide="clock"></i>
          ${getActivityRelativeTime(item.timestamp)}
        </div>
        ${item.detail ? '<i data-lucide="chevron-down" class="activity-item-chevron"></i>' : ''}
      </div>
      ${item.detail ? `
        <div class="activity-item-detail">
          ${detailHTML}
        </div>
      ` : ''}
    </div>
  `;
}

function renderActivityDetailHTML(item) {
  const detail = item.detail;
  if (!detail) return '';

  // Detalles estructurados (excluyendo description y actions)
  const detailEntries = Object.entries(detail).filter(([key]) =>
    key !== 'description' && key !== 'actions'
  );

  const detailRowsHTML = detailEntries.map(([key, value]) => {
    const isMono = key.toLowerCase().includes('archivo') ||
                   key.toLowerCase().includes('file') ||
                   key.toLowerCase().includes('ruta');
    const isDanger = String(value).toLowerCase().includes('critical') ||
                     String(value).toLowerCase().includes('crítico');

    const label = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, s => s.toUpperCase());

    return `
      <div class="activity-detail-row">
        <span class="activity-detail-label">${escapeHtml(label)}</span>
        <span class="activity-detail-value ${isMono ? 'mono' : ''} ${isDanger ? 'danger' : ''}">${escapeHtml(String(value))}</span>
      </div>
    `;
  }).join('');

  const descriptionHTML = detail.description ? `
    <div class="activity-detail-description">
      ${escapeHtml(detail.description)}
    </div>
  ` : '';

  const actionsHTML = detail.actions && detail.actions.length > 0 ? `
    <div class="activity-detail-actions">
      ${detail.actions.map(action => `
        <button class="activity-detail-btn ${action.variant || 'default'}"
                type="button"
                onclick="handleActivityAction('${item.id}', '${action.id}')">
          <i data-lucide="${action.icon}"></i>
          ${escapeHtml(action.label)}
        </button>
      `).join('')}
    </div>
  ` : '';

  return `
    ${detailRowsHTML ? `<div class="activity-detail-grid">${detailRowsHTML}</div>` : ''}
    ${descriptionHTML}
    ${actionsHTML}
  `;
}

/* ─── Acciones ─── */

function setActivityFilter(filterId) {
  activityFilter = filterId;
  renderActivityApp();
}

function setActivitySearch(query) {
  activitySearchQuery = query;
  // Re-render only the body to preserve focus
  const body = document.querySelector('.activity-body');
  if (!body) return;
  const items = getActivityFilteredItems();

  if (items.length === 0) {
    body.innerHTML = `
      <div class="activity-empty">
        <div class="activity-empty-icon"><i data-lucide="list-checks"></i></div>
        <strong>Sin actividad registrada</strong>
        <small>No se encontraron eventos que coincidan con tu búsqueda.</small>
      </div>
    `;
  } else {
    const groups = { today: [], yesterday: [], 'this-week': [], older: [] };
    items.forEach(item => {
      const groupKey = getActivityGroupKey(item.timestamp);
      groups[groupKey].push(item);
    });
    const order = ['today', 'yesterday', 'this-week', 'older'];
    body.innerHTML = order.map(groupKey => {
      const groupItems = groups[groupKey];
      if (groupItems.length === 0) return '';
      return `
        <div class="activity-group">
          <div class="activity-group-header">
            <span>${getActivityGroupLabel(groupKey)}</span>
            <span class="activity-group-count">${groupItems.length}</span>
          </div>
          ${groupItems.map(renderActivityItemHTML).join('')}
        </div>
      `;
    }).join('');
  }

  refreshIcons();
}

function toggleActivityItem(id) {
  activityExpandedId = activityExpandedId === id ? null : id;
  renderActivityApp();
}

function clearActivityLog() {
  if (activityLog.length === 0) return;

  // Removemos solo los que NO están sin resolver (para no perder amenazas activas)
  const unresolved = activityLog.filter(a => a.resolved === false);
  const removedCount = activityLog.length - unresolved.length;

  if (unresolved.length > 0) {
    activityLog = unresolved;
    saveActivityLog();
    updateActivityDockBadge();
    renderActivityApp();
    showToast(
      'Historial parcialmente limpiado',
      `${removedCount} evento${removedCount === 1 ? '' : 's'} eliminado${removedCount === 1 ? '' : 's'}. Se conservaron ${unresolved.length} amenaza${unresolved.length === 1 ? '' : 's'} sin resolver.`,
      'trash-2'
    );
  } else {
    activityLog = [];
    saveActivityLog();
    updateActivityDockBadge();
    renderActivityApp();
    showToast('Historial limpiado', `${removedCount} evento${removedCount === 1 ? '' : 's'} eliminado${removedCount === 1 ? '' : 's'}.`, 'trash-2');
  }
}

function handleActivityAction(itemId, actionId) {
  const item = activityLog.find(a => a.id === itemId);
  if (!item) return;

  switch (actionId) {
    case 'delete':
      resolveActivityThreat(item, 'deleted');
      showToast('Archivo eliminado', `"${item.detail?.fileName || 'El archivo'}" fue eliminado permanentemente.`, 'trash-2');
      break;

    case 'restore':
      resolveActivityThreat(item, 'restored');
      showToast('Archivo restaurado', `"${item.detail?.fileName || 'El archivo'}" fue movido a la carpeta original.`, 'rotate-ccw');
      break;

    case 'info':
      showToast('Más información', 'Se abriría el detalle completo de la amenaza en una ventana externa.', 'info');
      break;

    default:
      showToast('Acción ejecutada', `Acción "${actionId}" completada.`, 'check-circle-2');
  }
}

function resolveActivityThreat(item, actionType) {
  item.resolved = true;
  item.detail = item.detail || {};
  item.detail['Estado'] = actionType === 'deleted' ? 'Eliminado permanentemente' : 'Restaurado por el usuario';
  item.detail['Resuelto'] = new Date().toLocaleString('es-AR');

  // Quitar acciones para que no se puedan repetir
  if (item.detail.actions) {
    item.detail.actions = [];
  }

  saveActivityLog();
  updateActivityDockBadge();
  renderActivityApp();

  // Log del evento de resolución
  logActivity({
    category: 'security',
    level: 'success',
    icon: 'check-circle-2',
    title: actionType === 'deleted' ? 'Amenaza eliminada' : 'Amenaza restaurada',
    subtitle: `${item.detail?.fileName || 'Archivo'} — Resolución manual`,
    detail: {
      'Amenaza original': item.title,
      'Acción': actionType === 'deleted' ? 'Eliminar archivo' : 'Restaurar',
      'Fecha': new Date().toLocaleString('es-AR'),
      description: 'La amenaza fue procesada por el usuario desde el Centro de Actividad.'
    }
  });
}

function renderActivityApp() {
  const activityWinIds = getInstancesOfApp('activity');
  activityWinIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;
    content.innerHTML = getActivityAppHTML();
  });
  refreshIcons();
}

/* ─── Bootstrap ─── */

function setupActivityApp(win) {
  if (!win) return;
  // No necesita listeners adicionales — todo es onclick inline
}

loadActivityLog();

function openActivityFromShield() {
  // Cierra todas las ventanas de Ajustes (porque vamos a abrir otra app)
  const settingsWinIds = getInstancesOfApp('settings');
  settingsWinIds.forEach(winId => closeApp(winId));

  // Abre el Centro de Actividad
  openApp('activity');

  // Toast de feedback
  showToast('Centro de Actividad', 'Abriendo historial de eventos del sistema.', 'list-checks');
}