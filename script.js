/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 1/12 — CONFIGURACIÓN Y CONSTANTES
   ═══════════════════════════════════════════════════════════════ */

/* ─── Apps del sistema ─── */
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

/* ─── Catálogo de widgets ─── */
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
  'now-playing': {
    id: 'now-playing',
    name: 'Reproductor',
    description: 'Widget flotante de "Ahora suena" con cover, título, progreso en vivo y controles de reproducción.',
    icon: 'music',
    type: 'now-playing'
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

/* ─── Clima ─── */
const WEATHER_CITIES = [
  { id: 'rosario',      name: 'Rosario',      region: 'Santa Fe, Argentina', lat: -32.9468, lon: -60.6393, timezone: 'America/Argentina/Cordoba' },
  { id: 'buenos-aires', name: 'Buenos Aires', region: 'Argentina',           lat: -34.6037, lon: -58.3816, timezone: 'America/Argentina/Buenos_Aires' },
  { id: 'cordoba-ar',   name: 'Córdoba',      region: 'Argentina',           lat: -31.4201, lon: -64.1888, timezone: 'America/Argentina/Cordoba' },
  { id: 'tokio',        name: 'Tokio',        region: 'Japón',               lat: 35.6762,  lon: 139.6503, timezone: 'Asia/Tokyo' },
  { id: 'nueva-york',   name: 'Nueva York',   region: 'EE.UU.',              lat: 40.7128,  lon: -74.0060, timezone: 'America/New_York' },
  { id: 'madrid',       name: 'Madrid',       region: 'España',              lat: 40.4168,  lon: -3.7038,  timezone: 'Europe/Madrid' },
  { id: 'reikiavik',    name: 'Reikiavik',    region: 'Islandia',            lat: 64.1466,  lon: -21.9426, timezone: 'Atlantic/Reykjavik' }
];

const DEFAULT_WEATHER_CITY_ID = 'rosario';

const WMO_CODE_MAP = {
  0:  { icon: 'sun',                label: 'Despejado',                color: '#fab387' },
  1:  { icon: 'sun',                label: 'Mayormente despejado',     color: '#f9e2af' },
  2:  { icon: 'cloud-sun',          label: 'Parcialmente nublado',     color: '#f9e2af' },
  3:  { icon: 'cloud',              label: 'Nublado',                  color: '#94a3b8' },
  45: { icon: 'cloud-fog',          label: 'Niebla',                   color: '#94a3b8' },
  48: { icon: 'cloud-fog',          label: 'Niebla con escarcha',      color: '#94a3b8' },
  51: { icon: 'cloud-drizzle',      label: 'Llovizna ligera',          color: '#38bdf8' },
  53: { icon: 'cloud-drizzle',      label: 'Llovizna moderada',        color: '#38bdf8' },
  55: { icon: 'cloud-drizzle',      label: 'Llovizna densa',           color: '#38bdf8' },
  56: { icon: 'cloud-drizzle',      label: 'Llovizna helada',          color: '#a5f3fc' },
  57: { icon: 'cloud-drizzle',      label: 'Llovizna helada densa',    color: '#a5f3fc' },
  61: { icon: 'cloud-rain',         label: 'Lluvia ligera',            color: '#38bdf8' },
  63: { icon: 'cloud-rain',         label: 'Lluvia moderada',          color: '#38bdf8' },
  65: { icon: 'cloud-rain',         label: 'Lluvia intensa',           color: '#3a86ff' },
  66: { icon: 'cloud-rain',         label: 'Lluvia helada',            color: '#a5f3fc' },
  67: { icon: 'cloud-rain',         label: 'Lluvia helada intensa',    color: '#a5f3fc' },
  71: { icon: 'snowflake',          label: 'Nieve ligera',             color: '#a5f3fc' },
  73: { icon: 'snowflake',          label: 'Nieve moderada',           color: '#a5f3fc' },
  75: { icon: 'snowflake',          label: 'Nieve intensa',            color: '#a5f3fc' },
  77: { icon: 'snowflake',          label: 'Granos de nieve',          color: '#a5f3fc' },
  80: { icon: 'cloud-rain-wind',    label: 'Chaparrones ligeros',      color: '#38bdf8' },
  81: { icon: 'cloud-rain-wind',    label: 'Chaparrones moderados',    color: '#38bdf8' },
  82: { icon: 'cloud-rain-wind',    label: 'Chaparrones violentos',    color: '#3a86ff' },
  85: { icon: 'snowflake',          label: 'Chaparrones de nieve',     color: '#a5f3fc' },
  86: { icon: 'snowflake',          label: 'Nevadas fuertes',          color: '#a5f3fc' },
  95: { icon: 'cloud-lightning',    label: 'Tormenta',                 color: '#cba6f7' },
  96: { icon: 'cloud-lightning',    label: 'Tormenta con granizo',     color: '#cba6f7' },
  99: { icon: 'cloud-lightning',    label: 'Tormenta fuerte granizo',  color: '#cba6f7' }
};

const WEATHER_FETCH_INTERVAL_MS = 15 * 60 * 1000;
const WEATHER_CACHE_STALE_MS = 15 * 60 * 1000;
const weatherCache = {};

/* ─── Wallpapers ─── */
const WALLPAPERS = [
  { file: 'fondoPrincipal.jpg', name: 'Nebula', accent: '#b4befe', text: '#cdd6f4', sub: '#bac2de', green: '#a6e3a1', panel: 'rgba(18,21,33,0.72)' },
  { file: 'fondo2.jpg',         name: 'Aurora', accent: '#89dceb', text: '#d9f4ff', sub: '#a9c6d3', green: '#a6e3a1', panel: 'rgba(11,31,39,0.75)' },
  { file: 'fondo3.jpg',         name: 'Solar',  accent: '#f9c784', text: '#fff1dc', sub: '#d7bfa4', green: '#b8e986', panel: 'rgba(43,25,20,0.75)' }
];

const STORE_WALLPAPERS = [
  { id: 'cyber-city', name: 'Cyber City', file: 'cyber-city.jpg', accent: '#00ffcc', text: '#e0fff5', sub: '#7ab8a8', green: '#00ff88', panel: 'rgba(10, 14, 22, 0.88)' },
  { id: 'deep-space', name: 'Deep Space', file: 'deep-space.jpg', accent: '#8b5cf6', text: '#ede9fe', sub: '#a78bfa', green: '#34d399', panel: 'rgba(20, 15, 40, 0.88)' }
];

/* ─── Temas ─── */
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

/* ─── Estilos de hover del dock ─── */
const DOCK_PREVIEW_STYLES = {
  blueprint: { name: 'Blueprint',        desc: 'Plano técnico / sci-fi con líneas de acento',   available: true },
  minimal:   { name: 'Minimal',          desc: 'Limpio y directo, sin adornos',                 available: true },
  brutalist: { name: 'Neo-Brutalism',    desc: 'Borde grueso y sombra dura estilo brutalista',  available: true },
  glitch:    { name: 'Cyberpunk Glitch', desc: 'Scanlines, glitch digital y neón cyan/magenta', available: true },
  neumorph:  { name: 'Neumorphism',      desc: 'Relieve esculpido suave, estilo Apple-esque',   available: true },
  crt:       { name: 'Terminal CRT',     desc: 'Monitor retro con scanlines y fósforo',         available: true },
  glass:     { name: 'Glass',            desc: 'Cristal translúcido y bordes suaves',           available: false },
  compact:   { name: 'Compacto',         desc: 'Solo lo esencial: ícono y datos',               available: false }
};

/* ─── Nebula Shield ─── */
const SHIELD_FEATURES = {
  antivirus:  { id: 'antivirus',  name: 'Antivirus en Tiempo Real',   description: 'Escaneo continuo de archivos, procesos y descargas', icon: 'shield-check', color: '#00ff88' },
  firewall:   { id: 'firewall',   name: 'Firewall',                   description: 'Bloqueo de conexiones entrantes no autorizadas',      icon: 'flame',        color: '#ff9e00' },
  encryption: { id: 'encryption', name: 'Cifrado de Disco',           description: 'Protección AES-256 de todo el almacenamiento',        icon: 'lock',         color: '#7c3aed' },
  behavior:   { id: 'behavior',   name: 'Análisis de Comportamiento', description: 'Detección de procesos sospechosos por IA',            icon: 'brain',        color: '#3a86ff' }
};

const VPN_SERVERS = [
  { id: 'amsterdam',   name: 'Ámsterdam',    country: 'Países Bajos', flag: '🇳🇱', ping: 42 },
  { id: 'newyork',     name: 'Nueva York',   country: 'EE.UU.',       flag: '🇺🇸', ping: 87 },
  { id: 'tokyo',       name: 'Tokio',        country: 'Japón',        flag: '🇯🇵', ping: 156 },
  { id: 'zurich',      name: 'Zúrich',       country: 'Suiza',        flag: '🇨🇭', ping: 35 },
  { id: 'buenosaires', name: 'Buenos Aires', country: 'Argentina',    flag: '🇦🇷', ping: 18 }
];

/* ─── Nebula Store ─── */
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

/* ─── Nebula Vault ─── */
const VAULT_STORAGE_KEY = 'nebula-os:vault';
const VAULT_MASTER_KEY = 'nebula-os:vault-master';
const VAULT_LOCK_TIMEOUT_MS = 5 * 60 * 1000;

const VAULT_CATEGORIES = [
  { id: 'redes',   name: 'Redes Sociales', icon: 'users',     color: '#3b82f6' },
  { id: 'gaming',  name: 'Gaming',         icon: 'gamepad-2', color: '#a855f7' },
  { id: 'trabajo', name: 'Trabajo',        icon: 'briefcase', color: '#f59e0b' },
  { id: 'bancos',  name: 'Bancos',         icon: 'landmark',  color: '#10b981' },
  { id: 'email',   name: 'Email',          icon: 'mail',      color: '#ef4444' },
  { id: 'otros',   name: 'Otros',          icon: 'package',   color: '#64748b' }
];

/* ─── Centro de Actividad ─── */
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

/* ─── Biblioteca de Juegos ─── */
const GAMELIB_STORAGE_KEY = 'nebula-os:game-library';

const GAMELIB_GAMES = [
  { id: 'cyberpunk-2077', title: 'Cyberpunk 2077', developer: 'CD Projekt Red', year: 2020, genre: 'Acción / RPG', rating: 4.8, cover: './assets/images/APPS/steam/games/cyberpunk-2077.jpg', emoji: '🚀', color: '#f3e600', installed: true, favorite: true, hoursPlayed: 42.25, lastPlayedAt: Date.now() - 2 * 60 * 60 * 1000, achievementsUnlocked: 12, achievementsTotal: 45, avgFps: 142, recentAchievements: [{ name: 'Night City Legend', date: Date.now() - 3 * 60 * 60 * 1000 }, { name: 'Legendary Merc', date: Date.now() - 3 * 24 * 60 * 60 * 1000 }] },
  { id: 'elden-ring', title: 'Elden Ring', developer: 'FromSoftware', year: 2022, genre: 'Action RPG / Souls-like', rating: 4.9, cover: './assets/images/APPS/steam/games/elden-ring.jpg', emoji: '⚔️', color: '#c9a050', installed: true, favorite: true, hoursPlayed: 128.5, lastPlayedAt: Date.now() - 7 * 24 * 60 * 60 * 1000, achievementsUnlocked: 28, achievementsTotal: 42, avgFps: 118, recentAchievements: [{ name: 'Elden Lord', date: Date.now() - 7 * 24 * 60 * 60 * 1000 }] },
  { id: 'hollow-knight', title: 'Hollow Knight', developer: 'Team Cherry', year: 2017, genre: 'Metroidvania', rating: 4.9, cover: './assets/images/APPS/steam/games/hollow-knight.jpg', emoji: '🗡️', color: '#3b82f6', installed: true, favorite: true, hoursPlayed: 62.75, lastPlayedAt: Date.now() - 2 * 24 * 60 * 60 * 1000, achievementsUnlocked: 20, achievementsTotal: 63, avgFps: 144, recentAchievements: [{ name: 'Dream No More', date: Date.now() - 2 * 24 * 60 * 60 * 1000 }] },
  { id: 'cs2', title: 'Counter-Strike 2', developer: 'Valve', year: 2023, genre: 'FPS / Táctico', rating: 4.5, cover: './assets/images/APPS/steam/games/cs2.jpg', emoji: '🎯', color: '#f59e0b', installed: true, favorite: false, hoursPlayed: 856.25, lastPlayedAt: Date.now() - 5 * 60 * 60 * 1000, achievementsUnlocked: 0, achievementsTotal: 1, avgFps: 280, recentAchievements: [] },
  { id: 'doom-eternal', title: 'DOOM Eternal', developer: 'id Software', year: 2020, genre: 'FPS / Acción', rating: 4.7, cover: './assets/images/APPS/steam/games/doom-eternal.jpg', emoji: '🔥', color: '#dc2626', installed: true, favorite: false, hoursPlayed: 24.5, lastPlayedAt: Date.now() - 14 * 24 * 60 * 60 * 1000, achievementsUnlocked: 15, achievementsTotal: 50, avgFps: 200, recentAchievements: [{ name: 'Rip and Tear', date: Date.now() - 14 * 24 * 60 * 60 * 1000 }] },
  { id: 'rdr2', title: 'Red Dead Redemption 2', developer: 'Rockstar Games', year: 2018, genre: 'Acción / Aventura', rating: 4.9, cover: './assets/images/APPS/steam/games/rdr2.jpg', emoji: '🤠', color: '#b45309', installed: true, favorite: true, hoursPlayed: 145.75, lastPlayedAt: Date.now() - 10 * 24 * 60 * 60 * 1000, achievementsUnlocked: 32, achievementsTotal: 51, avgFps: 95, recentAchievements: [{ name: 'Best in the West', date: Date.now() - 10 * 24 * 60 * 60 * 1000 }] },
  { id: 'baldurs-gate-3', title: "Baldur's Gate 3", developer: 'Larian Studios', year: 2023, genre: 'RPG / Turnos', rating: 4.9, cover: './assets/images/APPS/steam/games/baldurs-gate-3.jpg', emoji: '🐉', color: '#a855f7', installed: true, favorite: false, hoursPlayed: 78.25, lastPlayedAt: Date.now() - 4 * 24 * 60 * 60 * 1000, achievementsUnlocked: 22, achievementsTotal: 54, avgFps: 110, recentAchievements: [{ name: 'Hero of the Forgotten Realms', date: Date.now() - 4 * 24 * 60 * 60 * 1000 }] },
  { id: 'witcher-3', title: 'The Witcher 3: Wild Hunt', developer: 'CD Projekt Red', year: 2015, genre: 'RPG / Mundo abierto', rating: 4.9, cover: './assets/images/APPS/steam/games/witcher-3.jpg', emoji: '🐺', color: '#991b1b', installed: false, favorite: true, hoursPlayed: 0, lastPlayedAt: null, achievementsUnlocked: 0, achievementsTotal: 78, avgFps: 0, recentAchievements: [] },
  { id: 'hades', title: 'Hades', developer: 'Supergiant Games', year: 2020, genre: 'Roguelike / Acción', rating: 4.8, cover: './assets/images/APPS/steam/games/hades.jpg', emoji: '⚡', color: '#f97316', installed: false, favorite: false, hoursPlayed: 0, lastPlayedAt: null, achievementsUnlocked: 0, achievementsTotal: 49, avgFps: 0, recentAchievements: [] },
  { id: 'stardew-valley', title: 'Stardew Valley', developer: 'ConcernedApe', year: 2016, genre: 'Simulación / Farming', rating: 4.9, cover: './assets/images/APPS/steam/games/stardew-valley.jpg', emoji: '🌾', color: '#84cc16', installed: false, favorite: false, hoursPlayed: 0, lastPlayedAt: null, achievementsUnlocked: 0, achievementsTotal: 40, avgFps: 0, recentAchievements: [] }
];

/* ─── Administrador de Tareas ─── */
const TASKMGR_SYSTEM_PROCESSES = [
  { pid: 1,   name: 'nebula-core',       sub: 'Kernel principal',         icon: 'cpu',            cpuBase: 3, ramBase: 180 },
  { pid: 84,  name: 'gpu-driver',        sub: 'NVIDIA 560.81',            icon: 'activity',       cpuBase: 5, ramBase: 340 },
  { pid: 112, name: 'audio-service',     sub: 'PipeWire',                 icon: 'audio-waveform', cpuBase: 1, ramBase: 90 },
  { pid: 156, name: 'network-manager',   sub: 'NetworkManager',           icon: 'wifi',           cpuBase: 1, ramBase: 75 },
  { pid: 203, name: 'nebula-shield',     sub: 'Antivirus en tiempo real', icon: 'shield-check',   cpuBase: 4, ramBase: 220 },
  { pid: 421, name: 'window-compositor', sub: 'Nebula Compositor',        icon: 'layers',         cpuBase: 6, ramBase: 260 }
];

/* ─── Visual Studio Code ─── */
const VSC_FILE_TREE = [
  {
    name: 'nebula-os',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file', language: 'html' },
      { name: 'styles.css', type: 'file', language: 'css' },
      { name: 'script.js',  type: 'file', language: 'js' },
      {
        name: 'src',
        type: 'folder',
        children: [
          { name: 'main.js',       type: 'file', language: 'js' },
          { name: 'components.js', type: 'file', language: 'js' },
          { name: 'utils.js',      type: 'file', language: 'js' }
        ]
      },
      {
        name: 'assets',
        type: 'folder',
        children: [
          { name: 'logo.png', type: 'file', language: 'img' },
          { name: 'icon.svg', type: 'file', language: 'svg' }
        ]
      },
      { name: 'package.json', type: 'file', language: 'json' },
      { name: 'README.md',    type: 'file', language: 'md' },
      { name: '.gitignore',   type: 'file', language: 'git' }
    ]
  }
];

const VSC_FILE_CONTENTS = {
  'index.html': `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nebula OS - Web Edition</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>

<div id="boot-screen">
  <div class="boot-logo-mark">
    <img src="./assets/images/logosSO/nebulaLogo.png" alt="Nebula OS">
  </div>
  <div class="boot-wordmark">NEBULA OS</div>
  <div class="boot-status">Iniciando entorno gráfico Gamer & IA</div>
</div>

<div id="screen">
  <div id="background-layer"></div>
  <div id="desktop-widgets-layer"></div>

  <div id="topbar">
    <div class="waybar-module left">
      <div class="logo" onclick="toggleWindowManager()">
        <img src="./assets/images/logosSO/nebulaLogo.png" alt="Nebula" width="18" height="18">
      </div>
      <div class="ws" id="ws-switcher">
        <button class="active" onclick="switchWorkspace(1)"></button>
        <button onclick="switchWorkspace(2)"></button>
        <button onclick="switchWorkspace(3)"></button>
      </div>
    </div>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>`,

  'styles.css': `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg-dark: #0d0f17;
  --accent: #b4befe;
  --accent-glow: rgba(180, 190, 254, 0.45);
  --accent-green: #a6e3a1;
  --accent-red: #f38ba8;
  --text-main: #cdd6f4;
  --text-sub: #9399b2;
  --radius-lg: 18px;
  --radius-md: 12px;
  --panel-color: rgba(18, 21, 33, 0.72);
  --blur-amount: 18px;
  --shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
}

body.game-mode-active {
  --accent: #00ffcc;
  --accent-glow: rgba(0, 255, 204, 0.5);
  --panel-color: rgba(10, 14, 22, 0.88);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 100%; height: 100%; overflow: hidden; }

#screen {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--bg-dark);
  transition: filter 0.25s ease;
}

.glass-panel {
  background: var(--panel-color);
  backdrop-filter: blur(var(--blur-amount)) saturate(1.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow);
}`,

  'script.js': `/* ================= CONFIGURACIÓN DE APPS ================= */
const APPS = {
  files:    { title: 'Archivos',  icon: 'folder' },
  terminal: { title: 'Terminal',  icon: 'terminal' },
  browser:  { title: 'Firefox',   icon: 'globe' },
  music:    { title: 'Spotify',   icon: 'music' },
  games:    { title: 'Steam',     icon: 'gamepad-2' },
  vscode:   { title: 'VS Code',   icon: 'code-2' },
  settings: { title: 'Ajustes',   icon: 'sliders' },
  nova:     { title: 'Nova AI',   icon: 'sparkles' }
};

const DOCK_APPS = [
  'browser', 'terminal', 'nova', 'files', 'vscode',
  'music', 'games', 'store', 'activity', 'taskmgr', 'settings'
];

const TOTAL_WORKSPACES = 5;
const TABBED_APPS = new Set(['terminal', 'files']);

/* ================= VARIABLES GLOBALES ================= */
let openWindows = {};
let appInstanceCounter = {};
let zIndexCounter = 100;
let activeWinId = null;
let currentWorkspace = 1;

/* ================= FUNCIONES PRINCIPALES ================= */
function openApp(appId, forceNew = false) {
  if (appId === 'store') {
    openStore();
    return;
  }

  const app = APPS[appId];
  if (!app) return;

  const instances = getInstancesOfApp(appId);

  if (!forceNew && instances.length > 0) {
    const lastWinId = getLastInstanceOfApp(appId);
    if (lastWinId) {
      focusWindow(lastWinId);
      return;
    }
  }

  const winId = generateWinId(appId);
  const win = document.createElement('div');
  win.className = 'window';
  win.dataset.appId = appId;
  win.dataset.winId = winId;

  document.getElementById('windows-container').appendChild(win);
  openWindows[winId] = { appId, win };

  renderDock();
  focusWindow(winId);
}`,

  'src/main.js': `/* Nebula OS — Entry point */

import { initKernel } from './components.js';
import { setupEventBus } from './utils.js';

const kernel = initKernel({
  name: 'Nebula',
  version: '2.5.0',
  mode: 'gaming'
});

setupEventBus(kernel);

kernel.on('ready', () => {
  console.log('🚀 Nebula OS ready');
  kernel.boot();
});

export default kernel;`,

  'src/components.js': `/* Componentes core del sistema */

export function initKernel(config) {
  const listeners = new Map();

  return {
    config,
    boot() {
      this.emit('boot');
      this.emit('ready');
    },
    on(event, fn) {
      if (!listeners.has(event)) listeners.set(event, []);
      listeners.get(event).push(fn);
    },
    emit(event, data) {
      (listeners.get(event) || []).forEach(fn => fn(data));
    }
  };
}`,

  'src/utils.js': `/* Utilidades generales */

export function setupEventBus(kernel) {
  window.__nebula = kernel;
  console.log('[EventBus] conectado');
}

export function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function throttle(fn, limit = 100) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      fn(...args);
    }
  };
}`,

  'package.json': `{
  "name": "nebula-os-web",
  "version": "2.5.0",
  "description": "Sistema operativo web con estética gaming",
  "main": "script.js",
  "scripts": {
    "start": "live-server",
    "build": "echo 'No build step needed'",
    "test": "echo 'No tests configured'"
  },
  "keywords": ["os", "web", "gaming", "ui"],
  "author": "Nebula Team",
  "license": "MIT"
}`,

  'README.md': `# Nebula OS — Web Edition

Sistema operativo simulado en el navegador con estética gamer & IA.

## Características

- 🎮 **Modo Juego** con HUD overlay
- 🎨 **Nebula Designer** para personalización total
- 🛡️ **Nebula Shield** antivirus + VPN
- 🔑 **Nebula Vault** gestor de contraseñas
- 🖥️ **Multi-workspace** (5 espacios)
- 🎯 **Centro de Actividad** con logging
- 📊 **Administrador de Tareas**
- 🎮 **Biblioteca de Juegos** estilo Steam

## Uso

Abrir \`index.html\` en un servidor local:

\`\`\`bash
python -m http.server 8000
\`\`\`

## Licencia

MIT © Nebula Team`,

  '.gitignore': `# Dependencies
node_modules/
.pnp
.pnp.js

# Build
dist/
build/
*.log

# Environment
.env
.env.local

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db`
};

const VSC_PROBLEMS = [
  { level: 'warning', message: "'screen' is deprecated. Use 'display' instead.", file: 'styles.css', line: 42 },
  { level: 'info',    message: "Variable 'zIndexCounter' is never reassigned. Use 'const'.", file: 'script.js', line: 18 },
  { level: 'warning', message: "Unused variable 'activeWinId'.", file: 'script.js', line: 22 }
];

/* ─── Estrellas Parallax ─── */
const STARS_CONFIG = {
  far:  { count: 80, size: [0.5, 1.0], opacityRange: [0.2, 0.4], accentChance: 0.03 },
  mid:  { count: 50, size: [1.0, 2.0], opacityRange: [0.4, 0.7], accentChance: 0.06 },
  near: { count: 25, size: [2.0, 3.0], opacityRange: [0.7, 1.0], accentChance: 0.10 }
};

/* ─── Bluetooth Devices (mock) ─── */
const BLUETOOTH_DEVICES = [
  { id: 'hyperx-cloud',    name: 'HyperX Cloud II',      type: 'headset',  icon: 'headphones', battery: 78, paired: true,  connected: true  },
  { id: 'mx-master-3',     name: 'Logitech MX Master 3', type: 'mouse',    icon: 'mouse',      battery: 45, paired: true,  connected: true  },
  { id: 'keychron-k8',     name: 'Keychron K8 Pro',      type: 'keyboard', icon: 'keyboard',   battery: 92, paired: true,  connected: false },
  { id: 'xbox-controller', name: 'Xbox Controller',      type: 'gamepad',  icon: 'gamepad-2',  battery: 15, paired: true,  connected: false },
  { id: 'jbl-flip',        name: 'JBL Flip 6',           type: 'speaker',  icon: 'speaker',    battery: 0,  paired: false, connected: false },
  { id: 'airpods-pro',     name: 'AirPods Pro',          type: 'headset',  icon: 'headphones', battery: 0,  paired: false, connected: false },
  { id: 'mi-band-8',       name: 'Xiaomi Mi Band 8',     type: 'watch',    icon: 'watch',      battery: 0,  paired: false, connected: false },
  { id: 'logi-k380',       name: 'Logitech K380',        type: 'keyboard', icon: 'keyboard',   battery: 0,  paired: false, connected: false }
];

/* ─── Redes WiFi (mock) ─── */
const WIFI_NETWORKS = [
  { id: 'nebula-5g',     ssid: 'Nebula_5G',      security: 'wpa3', signal: 4, frequency: '5 GHz',   password: 'N3bul4_2026#5G' },
  { id: 'nebula-24g',    ssid: 'Nebula_2.4G',    security: 'wpa2', signal: 3, frequency: '2.4 GHz', password: 'N3bul4_2026' },
  { id: 'vecino-24g',    ssid: 'TP-Link_2.4G',   security: 'wpa2', signal: 2, frequency: '2.4 GHz', password: null },
  { id: 'cafe-free',     ssid: 'Cafeteria_Free', security: 'open', signal: 3, frequency: '2.4 GHz', password: null },
  { id: 'fibertel',      ssid: 'Fibertel-2.4G',  security: 'wpa2', signal: 1, frequency: '2.4 GHz', password: null },
  { id: 'movistar-5g',   ssid: 'MOVISTAR_5G',    security: 'wpa2', signal: 4, frequency: '5 GHz',   password: null },
  { id: 'vecino-5g',     ssid: 'DIRECT-ROKU',    security: 'wpa2', signal: 2, frequency: '5 GHz',   password: null },
  { id: 'guest-network', ssid: 'Invitados',      security: 'open', signal: 3, frequency: '2.4 GHz', password: null }
];

/* ─── Storage Keys ─── */
const SETTINGS_STORAGE_KEY      = 'nebula-os:settings';
const WALLPAPER_STORAGE_KEY     = 'nebula-os:wallpaper';
const GAMEMODE_STORAGE_KEY      = 'nebula-os:gamemode';
const PROFILE_STORAGE_KEY       = 'nebula-os:profile';
const DESIGNER_STORAGE_KEY      = 'nebula-os:designer';
const WIDGETS_STORAGE_KEY       = 'nebula-os:widgets';
const WIFI_STORAGE_KEY          = 'nebula-os:wifi';
const BT_STORAGE_KEY            = 'nebula-os:bluetooth';
const DND_STORAGE_KEY           = 'nebula-os:dnd';
const BRIGHTNESS_STORAGE_KEY    = 'nebula-os:brightness';
const CALENDAR_NOTES_STORAGE_KEY= 'nebula-os:calendar-notes';
const SESSION_STORAGE_KEY       = 'nebula-os:session';
const FILESYSTEM_STORAGE_KEY    = 'nebula-os:filesystem';
const SHIELD_STORAGE_KEY        = 'nebula-os:shield';
const UPDATES_STORAGE_KEY       = 'nebula-os:updates';
const NOTIFICATIONS_STORAGE_KEY = 'nebula-os:notifications';
const NOTIFICATIONS_MAX         = 30;
const STORE_INSTALLED_STORAGE_KEY = 'nebula-os:store-installed';

/* ─── Constantes de animación ─── */
const Z_INDEX_NORMALIZE_THRESHOLD = 800;
const Z_INDEX_BASE = 100;
const ANIM_OPEN_MS = 340;
const ANIM_CLOSE_MS = 220;
const ANIM_MIN_MS = 300;
const ANIM_RESTORE_MS = 360;

/* ─── Duración de toasts por nivel ─── */
const TOAST_DURATIONS = {
  info:    3500,
  success: 3500,
  warning: 5000,
  danger:  8000
};

/* ─── Panel de Audio Avanzado ─── */
const AUDIO_PANEL_STORAGE_KEY = 'nebula-os:audio-mixer';
const AUDIO_MASTER_STORAGE_KEY = 'nebula-os:audio-master';

const AUDIO_DEVICES = [
  { id: 'speakers',    name: 'Parlantes',           sub: 'Realtek HD Audio · Sistema', icon: 'speaker',       available: true  },
  { id: 'headphones',  name: 'Auriculares HyperX',  sub: 'HyperX Cloud II · Bluetooth', icon: 'headphones',    available: true  },
  { id: 'hdmi',        name: 'Monitor Samsung',     sub: 'HDMI · 48 kHz · Estéreo',     icon: 'monitor',       available: true  }
];

const AUDIO_APP_DEFAULTS = {
  music:    { volume: 0.80, muted: false },
  browser:  { volume: 0.50, muted: false },
  games:    { volume: 0.70, muted: false },
  vscode:   { volume: 0.30, muted: false },
  terminal: { volume: 0.00, muted: true  },
  files:    { volume: 0.00, muted: true  },
  settings: { volume: 0.00, muted: true  },
  nova:     { volume: 0.40, muted: false },
  taskmgr:  { volume: 0.00, muted: true  },
  activity: { volume: 0.00, muted: true  },
  vault:    { volume: 0.00, muted: true  }
};

const AUDIO_APP_ACCENTS = {
  music:    '#1ed760',
  browser:  '#f59e0b',
  games:    '#7c3aed',
  vscode:   '#0284c7',
  terminal: '#38bdf8',
  nova:     '#c026d3',
  system:   '#b4befe',
  files:    '#3a86ff',
  settings: '#94a3b8'
};

/* ─── Mapa de ícono → nivel de toast ─── */
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

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Constantes de la app
   ═══════════════════════════════════════════════════════════════ */

/* ─── Persistencia ─── */
const SPOTIFY_STORAGE_KEY = 'nebula-os:spotify';

/* ─── Fuente de la biblioteca ─── */
const SPOTIFY_LIBRARY_URL = './assets/music/library.json';

/* ─── Modos de repeat ─── */
const SPOTIFY_REPEAT_MODES = ['off', 'all', 'one'];

/* ─── Vistas de la app ─── */
const SPOTIFY_VIEWS = {
  HOME:          'home',
  PLAYLIST:      'playlist',
  ARTIST:        'artist',
  ALBUM:         'album',
  SEARCH:        'search',
  LIKED:         'liked',
  LIBRARY:       'library',
  QUEUE:         'queue',
  NOW_PLAYING:   'now-playing'
};

/* ─── Opciones de orden para las listas ─── */
const SPOTIFY_SORT_OPTIONS = {
  RECENT:     { id: 'recent',     label: 'Recientes' },
  ALPHABETICAL: { id: 'alphabetical', label: 'Alfabético' },
  CREATOR:    { id: 'creator',    label: 'Creador' },
  DURATION:   { id: 'duration',   label: 'Duración' }
};

/* ─── Visualizador (Web Audio API) ─── */
const SPOTIFY_VISUALIZER_BARS = 64;
const SPOTIFY_VISUALIZER_FFT  = 256;
const SPOTIFY_VISUALIZER_SMOOTHING = 0.8;

/* ─── Colores oficiales de Spotify (para inyección en JS) ─── */
const SPOTIFY_ACCENT = '#1ed760';
const SPOTIFY_ACCENT_HOVER = '#1fdf64';
const SPOTIFY_BG = '#000000';
const SPOTIFY_BG_ELEV = '#121212';
const SPOTIFY_BG_HOVER = '#1f1f1f';
const SPOTIFY_BG_CARD = '#181818';
const SPOTIFY_BG_CARD_HOVER = '#282828';
const SPOTIFY_TEXT = '#ffffff';
const SPOTIFY_TEXT_SUB = '#a7a7a7';

/* ─── Debounce del buscador (ms) ─── */
const SPOTIFY_SEARCH_DEBOUNCE_MS = 220;

/* ─── Duración por defecto para tracks sin info (seg) ─── */
const SPOTIFY_DEFAULT_DURATION = 180;

/* ─── Fade in/out al cambiar de track (ms) ─── */
const SPOTIFY_FADE_MS = 220;

/* ─── Ancho máximo del historial de reproducción (recientes) ─── */
const SPOTIFY_RECENT_MAX = 30;

/* ─── Máximo de playlists custom del usuario ─── */
const SPOTIFY_CUSTOM_PLAYLISTS_MAX = 50;

/* ─── Máximo de tracks por playlist custom ─── */
const SPOTIFY_PLAYLIST_TRACKS_MAX = 500;

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Biblioteca por defecto (fallback)
   Se usa si `fetch(SPOTIFY_LIBRARY_URL)` falla o devuelve JSON inválido.
   Respeta exactamente el esquema de `assets/music/library.json`.
   ═══════════════════════════════════════════════════════════════ */
const SPOTIFY_DEFAULT_LIBRARY = {
  playlists: [
    {
      id: 'rock-nacional',
      name: 'Rock Nacional',
      description: 'Playlist · Fabricio Grottasanta',
      cover: null,
      color: '#a855f7',
      trackIds: [
        'gustavo-cerati-bocanada',
        'callejeros-prohibido',
        'soda-stereo-de-musica-ligera'
      ]
    },
    {
      id: 'favoritas',
      name: 'Mis Favoritas',
      description: 'Playlist · Vos',
      cover: null,
      color: '#1ed760',
      trackIds: [
        'gustavo-cerati-bocanada',
        'nirvana-smells-like-teen-spirit',
        'hyper-sound-cyberpunk-night-city-beat'
      ]
    },
    {
      id: 'synthwave-mix',
      name: 'Synthwave Mix',
      description: 'Playlist · Nebula FM',
      cover: null,
      color: '#ff71ce',
      trackIds: [
        'hyper-sound-cyberpunk-night-city-beat',
        'hyper-sound-neon-drive',
        'hyper-sound-midnight-grid'
      ]
    }
  ],
  tracks: [
    {
      id: 'gustavo-cerati-bocanada',
      title: 'Bocanada',
      artist: 'Gustavo Cerati',
      album: 'Bocanada',
      year: 1999,
      duration: 272,
      src: './assets/music/gustavo-cerati/gustavo-cerati-bocanada.mp3',
      cover: './assets/images/apps/spotify/gustavo-cerati-bocanada.jpg'
    },
    {
      id: 'callejeros-prohibido',
      title: 'Prohibido',
      artist: 'Callejeros',
      album: 'Señales',
      year: 2006,
      duration: 225,
      src: './assets/music/callejeros/callejeros-prohibido.mp3',
      cover: './assets/images/apps/spotify/callejeros-prohibido.jpg'
    },
    {
      id: 'soda-stereo-de-musica-ligera',
      title: 'De Música Ligera',
      artist: 'Soda Stereo',
      album: 'Canción Animal',
      year: 1990,
      duration: 213,
      src: './assets/music/soda-stereo/soda-stereo-de-musica-ligera.mp3',
      cover: './assets/images/apps/spotify/soda-stereo-de-musica-ligera.jpg'
    },
    {
      id: 'nirvana-smells-like-teen-spirit',
      title: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      album: 'Nevermind',
      year: 1991,
      duration: 301,
      src: './assets/music/nirvana/nirvana-smells-like-teen-spirit.mp3',
      cover: './assets/images/apps/spotify/nirvana-smells-like-teen-spirit.jpg'
    },
    {
      id: 'hyper-sound-cyberpunk-night-city-beat',
      title: 'Cyberpunk Night City Beat',
      artist: 'Hyper Sound',
      album: 'Synthwave Mix',
      year: 2024,
      duration: 192,
      src: './assets/music/hyper-sound/hyper-sound-cyberpunk-night-city-beat.mp3',
      cover: './assets/images/apps/spotify/hyper-sound-cyberpunk-night-city-beat.jpg'
    },
    {
      id: 'hyper-sound-neon-drive',
      title: 'Neon Drive',
      artist: 'Hyper Sound',
      album: 'Synthwave Mix',
      year: 2024,
      duration: 205,
      src: './assets/music/hyper-sound/hyper-sound-neon-drive.mp3',
      cover: './assets/images/apps/spotify/hyper-sound-neon-drive.jpg'
    },
    {
      id: 'hyper-sound-midnight-grid',
      title: 'Midnight Grid',
      artist: 'Hyper Sound',
      album: 'Synthwave Mix',
      year: 2024,
      duration: 188,
      src: './assets/music/hyper-sound/hyper-sound-midnight-grid.mp3',
      cover: './assets/images/apps/spotify/hyper-sound-midnight-grid.jpg'
    }
  ]
};

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Estado por defecto (para reset / inicialización)
   ═══════════════════════════════════════════════════════════════ */
const SPOTIFY_DEFAULT_STATE = {
  v: 1,
  libraryLoaded: false,
  librarySource: null,           // 'json' | 'fallback'
  currentTrackId: null,
  queue: [],                     // array de trackIds
  queueIndex: -1,
  isPlaying: false,
  volume: 0.8,
  muted: false,
  shuffle: false,
  repeat: 'off',                 // 'off' | 'all' | 'one'
  likedIds: [],                  // array de trackIds
  customPlaylists: [],           // array de { id, name, description, cover, color, trackIds, createdAt }
  recentIds: [],                 // array de trackIds (más recientes primero)
  playCount: {},                 // { [trackId]: number }
  lastView: 'home',
  lastPlaylistId: null,
  lastArtistName: null,
  lastAlbumName: null,
  currentTime: 0,
  lastUpdatedAt: null
};
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 2/12 — ESTADO GLOBAL (VARIABLES MUTABLES)
   ═══════════════════════════════════════════════════════════════ */

/* ─── Estado del sistema de ventanas ─── */
let openWindows = {};
let appInstanceCounter = {};
let zIndexCounter = 100;
let activeWinId = null;
let currentWorkspace = 1;
let currentWallpaperIndex = 0;
let fullscreenWindowId = null;
const widgetStartedAt = Date.now();
let isResizing = false;

/* ─── Estado del calendario y notas ─── */
const calendarState = {
  date: new Date(),
  selectedDate: null,
  notes: {}
};

let editingNoteKey = null;
let editingNoteIndex = null;

/* ─── Estado de métricas del sistema ─── */
const systemMetrics = {
  ram: 38,
  cpu: 24,
  temp: 42,
  gpu: 62,
  vram: 4.8,
  fps: 144
};

const pingHistory = [23, 24, 22, 25, 23, 21, 24, 22, 23, 24];

/* ─── Estado de Modo Juego y Perfiles ─── */
let gameModeActive = false;
let currentProfile = 'gamer';
let gamerOverlayVisible = false;

/* ─── Estado de conectividad ─── */
let wifiEnabled = true;
let connectedWifiId = null;
let wifiPasswordVisible = null;
let wifiScanInProgress = false;

let bluetoothEnabled = false;
let btScanInProgress = false;

let dndEnabled = false;
let currentBrightness = 100;

/* ─── Estado de reloj (control de animaciones) ─── */
let lastClockSecond = null;
let lastClockMinute = null;

/* ─── Estado del Designer ─── */
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
  dockPreviewStyle: 'blueprint',
  starsParallaxEnabled: true,
  starsParallaxIntensity: 1
};

/* ─── Estado del Shield (seguridad) ─── */
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

/* ─── Estado del sistema de Updates ─── */
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
      { version: '2.5.0', codename: 'Ultimate', date: 'Hace 3 semanas', size: '980 MB', changelog: [
        'Nuevo sistema de fondos animados (Particle, Matrix, Aurora)',
        'Rediseño completo del Nebula Designer',
        'Widgets de escritorio arrastrables',
        'Mejora del 18% en velocidad de arranque',
        'Corrección de bugs en el Window Manager'
      ]},
      { version: '2.4.2', codename: 'Gamer', date: 'Hace 2 meses', size: '1.1 GB', changelog: [
        'Nuevo Gaming HUD con telemetría en tiempo real',
        'Modo Juego optimizado (frecuencia CPU turbo)',
        'Integración de Nebula Shield con VPN WireGuard',
        'Soporte de perfiles (Gamer / Streamer / Estudio)',
        'Corrección de bugs en el reproductor multimedia'
      ]},
      { version: '2.4.0', codename: 'Quantum', date: 'Hace 4 meses', size: '850 MB', changelog: [
        'Migración total del core a JavaScript ES2024',
        'Nuevo motor de renderizado de ventanas',
        'Sistema multi-workspace (5 espacios virtuales)',
        'Rediseño del Dock con previews animadas',
        'Primera versión del Nebula Vault'
      ]}
    ]
};

let updatesHistoryExpandedId = null;

/* ─── Estado del sistema de notificaciones ─── */
let notifications = [];
let unreadCount = 0;
let notifIdCounter = 0;

/* ─── Estado de widgets de escritorio ─── */
let desktopWidgets = [];

/* ─── Estado del Store ─── */
let storeProducts = [...STORE_PRODUCTS];
let installedProducts = [];
let storeFilter = 'all';
let storeInstallProgress = {};

/* ─── Estado del Dock y previews ─── */
let dockPreviewEl = null;
let dockPreviewTimeout = null;
let dockContextMenuEl = null;
let dockContextMenuAppId = null;

/* ─── Estado del Window Manager ─── */
let windowManagerOpen = false;
let wmDragState = null;
let wmCardContextMenuEl = null;
let wmCardContextMenuWinId = null;

/* ─── Estado del sistema de sesión y persistencia ─── */
let sessionSaveTimeout = null;
let isRestoringSession = false;

/* ─── Estado del sistema de tabs ─── */
const windowTabsState = new WeakMap();
const terminalPanelStates = new WeakMap();
const fsPanelStates = {};

/* ─── Estado del Launcher ─── */
const launcherState = {
  query: '',
  results: [],
  selectedIndex: 0
};

/* ─── Estado del Filesystem (App Archivos) ─── */
let fsContextMenuEl = null;
let fsRenameModalEl = null;
let fsRenameTarget = null;
let fsRenameCallback = null;

/* ─── Estado de Settings ─── */
let settingsState = {
  animations: true,
  transparency: true,
  activeSettingsTab: 'system',
  designerSubTab: 'styles',
  designerExpanded: true,
  shieldSubTab: 'security',
  shieldExpanded: true
};

/* ─── Estado del Vault ─── */
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
let vaultEntryModalEl = null;
let vaultGeneratorModalEl = null;
let vaultMasterModalEl = null;

/* ─── Estado del Panel de Audio ─── */
let audioPanelState = {
  master: 0.80,
  masterMuted: false,
  activeDevice: 'speakers',
  appVolumes: {},   // { [appId]: { volume: 0.80, muted: false } }
  lastSpotifyVolume: 0.80,
  peakRafId: null,
  peakSmoothL: 0,
  peakSmoothR: 0
};

/* ─── Estado del Centro de Actividad ─── */
let activityLog = [];
let activityFilter = 'all';
let activitySearchQuery = '';
let activityExpandedId = null;
let activityIdCounter = 0;

/* ─── Estado del Task Manager ─── */
let taskmgrSearchQuery = '';
let taskmgrSortKey = 'cpu';
let taskmgrSortDir = 'desc';
let taskmgrSelectedPid = null;
let taskmgrProcessPids = {};
let taskmgrMetricsHistory = {
  cpu: Array(30).fill(20),
  ram: Array(30).fill(30),
  gpu: Array(30).fill(40)
};
let taskmgrMetricsInterval = null;

/* ─── Estado de la Game Library ─── */
let gamelibFilter = 'all';
let gamelibSearchQuery = '';
let gamelibModalGameId = null;
let gamelibModalEl = null;
let gamelibPlayingSession = null;
let gamelibPlayTimer = null;
let gamelibGames = [];

/* ─── Estado del Visual Studio Code ─── */
let vscOpenTabs = [];
let vscActiveTab = null;
let vscExpandedFolders = { 'nebula-os': true, 'src': true, 'assets': true };
let vscSearchOpen = false;
let vscSearchQuery = '';
let vscSearchMatches = [];
let vscSearchCurrentIndex = 0;
let vscPanelOpen = true;
let vscActivePanel = 'terminal';
let vscSidebarView = 'explorer';

/* ─── Estado del Browser (Firefox) ─── */
const browserState = new WeakMap();

/* ─── Estado del sistema de Toasts activos ─── */
const activeToasts = [];

/* ─── Set de cierres pendientes (para evitar doble close) ─── */
const pendingClose = new Set();

/* ─── Estado del Filesystem persistente ─── */
let FILE_SYSTEM = null;

/* ═══════════════════════════════════════════════════════════════
   ★ ESTRELLAS PARALLAX — Estado global (ÚNICA DECLARACIÓN)
═══════════════════════════════════════════════════════════════ */

let starsParallaxEnabled = true;
let starsParallaxIntensity = 1;
let starsMouseTarget = { x: 0, y: 0 };
let starsMouseCurrent = { x: 0, y: 0 };
let starsDrift = 0;
let starsAnimationFrameId = null;
let starsMouseListenerAttached = false;

let starsLayersData = {
  far:  { el: null, stars: [], speed: 0.15 },
  mid:  { el: null, stars: [], speed: 0.4  },
  near: { el: null, stars: [], speed: 0.8  }
};

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Estado runtime del reproductor
   (el estado persistente vive en SPOTIFY_DEFAULT_STATE)
═══════════════════════════════════════════════════════════════ */

/* ─── Estado runtime (no se persiste) ─── */
const spotify = {
  /* Biblioteca en memoria */
  library: null,            // { playlists: [], tracks: [] }
  tracksById: new Map(),    // Map<trackId, track>
  playlistsById: new Map(), // Map<playlistId, playlist>
  artistsIndex: new Map(),  // Map<artistName, { name, tracks: [], albums: Set, cover }>
  albumsIndex: new Map(),   // Map<albumKey, { name, artist, year, cover, tracks: [] }>

  /* Estado de reproducción actual */
  currentTrackId: null,
  queue: [],
  queueIndex: -1,

  /* Audio */
  audioEl: null,
  audioCtx: null,
  sourceNode: null,
  analyserNode: null,
  gainNode: null,
  visualizerData: null,
  fadeTimer: null,

  /* Playback */
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  seeking: false,

  /* Preferencias (duplican al estado persistente para acceso rápido) */
  volume: 0.8,
  muted: false,
  shuffle: false,
  repeat: 'off',

  /* Likes */
  likedIds: new Set(),

  /* Playlists custom */
  customPlaylists: [],

  /* Historial y stats */
  recentIds: [],
  playCount: {},

  /* Búsqueda actual */
  searchQuery: '',
  searchResults: { tracks: [], artists: [], albums: [], playlists: [] },
  searchHistory: [],

  /* Vistas de la app */
  view: 'home',             // 'home' | 'playlist' | 'artist' | 'album' | 'search' | 'liked' | 'library' | 'queue'
  viewParams: {},           // { playlistId?, artistName?, albumKey?, query? }

  /* UI */
  sortMode: 'recent',       // 'recent' | 'alphabetical' | 'creator' | 'duration'
  libraryFilter: 'all',     // 'all' | 'playlists' | 'albums' | 'artists'
  sidebarOpen: true,
  lyricsOpen: false,
  queueOpen: false,

  /* Control de operaciones async */
  initPromise: null,
  initResolved: false,
  progressRafId: null,
  analyserRafId: null,
  searchDebounceTimer: null,

  /* Listeners */
  listeners: new Map(),

  /* Estado de errores */
  lastError: null,
  mockMode: false
};

/* ─── Estado de "arrastrando" para el panel de cola ─── */
let spotifyDragState = null;

/* ─── Registro de la UI de Spotify (por ventana) ─── */
const spotifyUIState = new WeakMap();
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 3/12 — HELPERS Y UTILIDADES
   ═══════════════════════════════════════════════════════════════ */

/* ─── UI: Iconos ─── */
function refreshIcons() {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

/* ─── Seguridad: escape de HTML ─── */
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[character]));
}

/* ─── Ventanas: generadores de IDs ─── */
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

/* ─── Sliders: sincronización de fill ─── */
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

/* ─── Reloj: actualización ─── */
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

/* ─── Formato de tiempo (mm:ss) ─── */
function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const r = String(s % 60).padStart(2, '0');
  return `${m}:${r}`;
}

/* ─── Tiempo relativo "Hace X min" ─── */
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

/* ─── Tiempo relativo corto (para notificaciones) ─── */
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
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
}

/* ─── Batería: UI ─── */
function updateBatteryUI(level, charging) {
  const item = document.getElementById('tray-battery-item');
  const icon = document.getElementById('tray-battery-icon');
  const num  = document.getElementById('tray-battery-num');
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

/* ─── WiFi: helpers de señal y seguridad ─── */
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

/* ─── Bluetooth: helpers de dispositivo ─── */
function getBluetoothDeviceById(id) {
  return BLUETOOTH_DEVICES.find(d => d.id === id) || null;
}

function getBatteryClass(battery) {
  if (battery <= 20) return 'low';
  if (battery <= 50) return 'medium';
  return 'high';
}

/* ─── Weather: helpers de ciudad y códigos WMO ─── */
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
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function getForecastDayName(dateStr) {
  const date = new Date(dateStr + 'T12:00:00Z');
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return days[date.getUTCDay()];
}

/* ─── Game Library: helpers de formato ─── */
function formatGameHours(hours) {
  if (!hours || hours === 0) return 'Sin jugar';
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  return `${hours.toFixed(1)}h`;
}

function getGamelibLastPlayedLabel(game) {
  if (!game.lastPlayedAt) return 'Nunca';
  const diff = Date.now() - game.lastPlayedAt;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Ahora';
  if (mins < 60) return `Hace ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hoy`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'Ayer';
  if (days < 7) return `Hace ${days}d`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `Hace ${weeks}sem`;
  const months = Math.floor(days / 30);
  return `Hace ${months}mes`;
}

function getGamelibCategories() {
  const total = gamelibGames.length;
  const installed = gamelibGames.filter(g => g.installed).length;
  const favorites = gamelibGames.filter(g => g.favorite).length;
  const recent = gamelibGames.filter(g =>
    g.installed && g.lastPlayedAt &&
    (Date.now() - g.lastPlayedAt) < 7 * 24 * 60 * 60 * 1000
  ).length;

  return {
    all: total,
    installed,
    favorites,
    recent
  };
}

/* ─── VSCode: helpers de archivos ─── */
function getVscFileByName(name) {
  const walk = (nodes) => {
    for (const node of nodes) {
      if (node.type === 'file' && node.name === name) return node;
      if (node.type === 'folder' && node.children) {
        const found = walk(node.children);
        if (found) return found;
      }
    }
    return null;
  };
  return walk(VSC_FILE_TREE);
}

function getVscFileIcon(name) {
  if (name.endsWith('.html')) return { icon: 'file-code', cls: 'html' };
  if (name.endsWith('.css'))  return { icon: 'palette',   cls: 'css' };
  if (name.endsWith('.js'))   return { icon: 'file-code', cls: 'js' };
  if (name.endsWith('.json')) return { icon: 'braces',    cls: 'json' };
  if (name.endsWith('.md'))   return { icon: 'book-open', cls: 'md' };
  if (name.endsWith('.gitignore')) return { icon: 'git-branch', cls: 'git' };
  if (name.endsWith('.svg') || name.endsWith('.png')) return { icon: 'image', cls: 'img' };
  return { icon: 'file', cls: 'default' };
}

function getVscLanguageLabel(language) {
  return {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    json: 'JSON',
    md: 'Markdown',
    git: 'GitIgnore',
    svg: 'SVG',
    img: 'Image'
  }[language] || 'Plain Text';
}

function escapeVscHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function highlightVscLine(line, language) {
  let safe = escapeVscHtml(line);

  const tokens = [];
  const store = (html) => {
    const placeholder = `\u0001TOKEN${tokens.length}\u0001`;
    tokens.push(html);
    return placeholder;
  };

  safe = safe.replace(/&lt;!--[\s\S]*?--&gt;/g, m => store(`<span class="vsc-syn-comment">${m}</span>`));
  safe = safe.replace(/\/\/[^\n]*/g, m => store(`<span class="vsc-syn-comment">${m}</span>`));
  safe = safe.replace(/(^|\s)#[^\n]*/g, m => store(`<span class="vsc-syn-comment">${m}</span>`));

  safe = safe.replace(/&quot;[^&]*?&quot;/g, m => store(`<span class="vsc-syn-string">${m}</span>`));
  safe = safe.replace(/&#039;[^&]*?&#039;/g, m => store(`<span class="vsc-syn-string">${m}</span>`));
  safe = safe.replace(/`[^`]*?`/g, m => store(`<span class="vsc-syn-string">${m}</span>`));

  if (language === 'html') {
    safe = safe.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)/g,
      (m, p1, p2) => store(`<span class="vsc-syn-punct">${p1}</span><span class="vsc-syn-tag">${p2}</span>`));
    safe = safe.replace(/\s([a-zA-Z-]+)=/g,
      (m, attr) => store(` <span class="vsc-syn-attr">${attr}</span>=`));
  }

  const jsKeywords = /\b(const|let|var|function|return|if|else|for|while|class|new|this|import|export|from|default|async|await|try|catch|finally|typeof|instanceof|null|undefined|true|false|switch|case|break|continue|do|throw|void|delete)\b/g;
  safe = safe.replace(jsKeywords, m => store(`<span class="vsc-syn-keyword">${m}</span>`));

  if (language === 'css') {
    safe = safe.replace(/^\s*([a-z-]+)\s*:/gm,
      (m, prop) => store(`<span class="vsc-syn-property">${prop}</span>:`));
  }

  safe = safe.replace(/\b(\d+\.?\d*)\b/g, m => store(`<span class="vsc-syn-number">${m}</span>`));

  safe = safe.replace(/\u0001TOKEN(\d+)\u0001/g, (m, i) => tokens[parseInt(i, 10)]);

  return safe;
}

/* ─── Vault: fortaleza de contraseñas ─── */
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

/* ─── Activity: helpers de tiempo y grupos ─── */
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
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
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

function getActivityCategoryCount(categoryId) {
  if (categoryId === 'all') return activityLog.length;
  return activityLog.filter(a => a.category === categoryId).length;
}

/* ─── Toast: inferencia de nivel ─── */
function inferToastLevel(iconName) {
  return TOAST_ICON_LEVEL_MAP[iconName] || 'info';
}

/* ─── Animaciones: detección de reduced-motion ─── */
function prefersReducedMotion() {
  return !settingsState.animations || document.body.classList.contains('no-animations');
}

/* ─── Toast: posición dinámica ─── */
function updateToastPosition() {
  const container = document.getElementById('toast-container');
  const quickCenter = document.getElementById('quick-center');
  if (!container || !quickCenter) return;

  const isQuickCenterOpen = !quickCenter.classList.contains('hidden');
  container.classList.toggle('shifted', isQuickCenterOpen);
}

/* ─── Filesystem: generadores ─── */
function fsBuildTrail(folder) {
  const path = [];
  let cursor = folder;
  while (cursor && cursor !== FILE_SYSTEM) {
    path.unshift(cursor);
    cursor = fsFindParent(cursor);
  }
  return path;
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

/* ─── Dock Preview: HTML builder ─── */
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

/* ─── App Tile: HTML builder ─── */
function getAppTileHTML(appId) {
  const app = APPS[appId];
  if (!app) return '';
  if (app.image) {
    return `<div class="app-tile ${app.tileClass}" title="${app.title}"><img src="${app.image}" alt="${app.title}" class="app-tile-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><i data-lucide="${app.icon}" style="display:none;"></i></div>`;
  }
  return `<div class="app-tile ${app.tileClass}" title="${app.title}"><i data-lucide="${app.icon}"></i></div>`;
}

/* ─── Store: labels de tipo ─── */
function getStoreTypeLabel(type) {
  const labels = { theme: 'Tema', widget: 'Widget', wallpaper: 'Wallpaper', app: 'App', game: 'Juego' };
  return labels[type] || type;
}

/* ─── Metrics: render de tarjetas del control center ─── */
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

/* ─── Ping: simulación ─── */
function simulatePing() {
  const last = pingHistory[pingHistory.length - 1] || 23;
  let next = last + (Math.random() - 0.5) * 6;
  next = Math.max(8, Math.min(120, Math.round(next)));
  pingHistory.push(next);
  if (pingHistory.length > 10) pingHistory.shift();
  return next;
}

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Helpers
   ═══════════════════════════════════════════════════════════════ */

/* ─── Formato de tiempo: mm:ss ─── */
function spFormatTime(seconds) {
  const s = Math.max(0, Math.floor(Number(seconds) || 0));
  const m = Math.floor(s / 60);
  const r = String(s % 60).padStart(2, '0');
  return `${m}:${r}`;
}

/* ─── Formato de duración total: "1 h 23 min" ─── */
function spFormatTotalDuration(seconds) {
  const s = Math.max(0, Math.floor(Number(seconds) || 0));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0) return `${h} h ${m} min`;
  if (m > 0) return `${m} min`;
  return `${s} s`;
}

/* ─── Alias seguro de escape ─── */
function spEscapeHtml(value) {
  return escapeHtml(value == null ? '' : value);
}

/* ─── Debounce ─── */
function spDebounce(fn, ms = 200) {
  let timer = null;
  return function debounced(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };
}

/* ─── Throttle ─── */
function spThrottle(fn, ms = 100) {
  let last = 0;
  let timer = null;
  return function throttled(...args) {
    const now = Date.now();
    const remaining = ms - (now - last);
    if (remaining <= 0) {
      if (timer) { clearTimeout(timer); timer = null; }
      last = now;
      fn.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}

/* ─── ID único para playlists custom / otros ─── */
function spRandomId(prefix = 'sp') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/* ─── Cover con fallback ─── */
function spGetTrackCover(track) {
  if (track && typeof track === 'object') {
    if (track.cover) return track.cover;
    if (track.art)   return track.art;
  }
  return './assets/images/apps/spotify/tapaAlbum1.jpg';
}

/* ─── Iniciales para avatars (artistas) ─── */
function spGetArtistInitials(name) {
  if (!name) return '?';
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ─── Agrupar tracks por álbum ─── */
function spGroupTracksByAlbum(tracks) {
  const groups = new Map();
  (tracks || []).forEach(track => {
    const key = `${track.artist || '?'}::${track.album || '?'}`;
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        name: track.album || 'Sin álbum',
        artist: track.artist || 'Desconocido',
        year: track.year || null,
        cover: spGetTrackCover(track),
        tracks: []
      });
    }
    groups.get(key).tracks.push(track);
  });
  return Array.from(groups.values());
}

/* ─── Item más frecuente (para "Artista destacado") ─── */
function spGetMostFrequent(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  const counts = new Map();
  items.forEach(item => {
    if (item == null) return;
    counts.set(item, (counts.get(item) || 0) + 1);
  });
  let best = null;
  let bestCount = 0;
  counts.forEach((count, key) => {
    if (count > bestCount) { bestCount = count; best = key; }
  });
  return best;
}

/* ─── Clamp numérico ─── */
function spClamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

/* ─── Shuffle Fisher-Yates (devuelve nuevo array) ─── */
function spShuffleArray(arr) {
  const copy = Array.isArray(arr) ? arr.slice() : [];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ─── Comparación simple de arrays ─── */
function spSameArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/* ─── Truncar texto ─── */
function spTruncate(str, max = 40) {
  const s = String(str || '');
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trim() + '…';
}

/* ─── ¿El track actual está likeado? (consulta al motor) ─── */
function spIsTrackLiked(trackId) {
  if (!trackId) return false;
  return spotify.likedIds.has(trackId);
}

/* ─── Ícono Lucide con fallback ─── */
function spIcon(name) {
  return `<i data-lucide="${spEscapeHtml(name)}"></i>`;
}

/* ─── Slug seguro para URLs internas / keys ─── */
function spSlug(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';
}

/* ─── Deep clone liviano (para objetos planos) ─── */
function spClone(obj) {
  if (obj == null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(spClone);
  const out = {};
  Object.keys(obj).forEach(k => { out[k] = spClone(obj[k]); });
  return out;
}

/* ─── Formato de "hace X" para tracks recientes ─── */
function spTimeAgoShort(timestamp) {
  if (!timestamp) return '';
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'ahora';
  if (mins < 60) return `hace ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `hace ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `hace ${days} d`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `hace ${weeks} sem`;
  const months = Math.floor(days / 30);
  return `hace ${months} mes${months === 1 ? '' : 'es'}`;
}
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 4/12 — BOOTSTRAP PRINCIPAL
   ═══════════════════════════════════════════════════════════════ */

/* ─── Bootstrap del sistema (DOMContentLoaded) ─── */
document.addEventListener('DOMContentLoaded', async () => {
  const bootScreen = document.getElementById('boot-screen');
  setTimeout(() => bootScreen && bootScreen.classList.add('boot-complete'), 850);
  setTimeout(() => bootScreen && bootScreen.remove(), 1450);

  // 1. Fondo y estrellas
  createStars();
  initAnimatedBackground();

  // 2. Cargar estado persistido del sistema
  loadPersistedState();
  loadAudioMixerState();
  loadNotifications();
  loadGamelibState();
  loadActivityLog();
  vaultState.entries = loadVaultEntries();
  loadVaultMasterMeta();

  // 3. ★ SPOTIFY: inicializar el motor de audio ANTES que la UI
  //    (espera a que cargue library.json o el fallback)
  try {
    await SpotifyApp.init();
  } catch (err) {
    console.warn('[Spotify] Falló init, se usará fallback:', err);
  }

  // 4. Inicializar UI
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
  updateToastPosition();
  syncAllSliders();
  refreshIcons();

  // 5. ★ SPOTIFY: conectar el motor con la UI global
  //    (topbar, HUD, Control Center, atajos, widget)
  setupSpotifyIntegration();

  // 6. Aplicar glass-panel a módulos principales
  document.querySelectorAll('.waybar-module, #dock, #control-center, #quick-center, #launcher, #notification-center').forEach(el => {
    el.classList.add('glass-panel');
  });

  // 7. Setup de atajos y listeners de UI
  setupUIActions();

  // 8. Restaurar sesión (último, después de todo)
  restoreSessionState();
  syncVpnQuickCenterState();

  // 9. Guardar sesión al cerrar
  window.addEventListener('beforeunload', () => {
    saveSessionState(true);
    if (window.SpotifyApp && typeof SpotifyApp.flushState === 'function') {
      SpotifyApp.flushState();
    }
  });

  // 10. Fondos animados: sync con Game Mode
  setInterval(syncAnimatedBgWithGameMode, 800);
});

/* ─── Atajos de teclado globales (VS Code) ─── */
document.addEventListener('keydown', (e) => {
  if (activeWinId && openWindows[activeWinId]?.appId === 'vscode') {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {
      e.preventDefault();
      toggleVscSearch();
    }
    if (e.key === 'Escape' && vscSearchOpen) {
      e.preventDefault();
      toggleVscSearch();
    }
  }
});

/* ─── Guardar sesión al cerrar la pestaña ─── */
window.addEventListener('beforeunload', () => {
  saveSessionState(true);
});

/* ═══════════════════════════════════════════════════════════════
   ★ UI ACTIONS SETUP (listeners de topbar, panels, etc.)
═══════════════════════════════════════════════════════════════ */

function setupUIActions() {
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
    closeAudioPanel?.();
    closeWifiPanel?.();
    closeBluetoothPanel?.();

    const wasHidden = controlCenter?.classList.contains('hidden');
    controlCenter?.classList.toggle('hidden');

    // Marcar visualmente el topbar
    if (clockCenter) {
      clockCenter.classList.toggle('active', wasHidden);
    }

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

  /**
 * ★ Toggle del Control Center desde atajo o desde cualquier click
 *   en la franja central del topbar.
 *   Se encarga de:
 *     - Cerrar otros paneles abiertos
 *     - Alternar el estado del CC
 *     - Marcar visualmente el `.active` del topbar
 */
function toggleControlCenterFromShortcut() {
  const controlCenter = document.getElementById('control-center');
  const clockCenter = document.getElementById('clock-center');
  const quickCenter = document.getElementById('quick-center');

  if (!controlCenter) return;

  // Cerrar otros paneles
  if (quickCenter) closeQuickCenter();
  closeNotificationCenter();
  closeAudioPanel?.();
  closeWifiPanel?.();
  closeBluetoothPanel?.();

  const wasHidden = controlCenter.classList.contains('hidden');
  controlCenter.classList.toggle('hidden');

  // Marcar visualmente el topbar
  if (clockCenter) {
    clockCenter.classList.toggle('active', wasHidden);
  }

  if (wasHidden) {
    resetCalendarToToday();
  }

  refreshIcons();
}

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

  // ★ Panel de Audio — click en el item de volumen del tray
  const trayVolumeItem = document.getElementById('tray-volume-item');
  if (trayVolumeItem) {
    trayVolumeItem.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof toggleAudioPanel === 'function') toggleAudioPanel();
    });
  }

  // ★ Panel de Audio — botón cerrar
  const audioPanelCloseBtn = document.getElementById('audio-panel-close');
  if (audioPanelCloseBtn) {
    audioPanelCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof closeAudioPanel === 'function') closeAudioPanel();
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

  // Click global: cerrar paneles si se clickea afuera
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
    const isAudioPanelClick = e.target.closest('#audio-panel');
    const isAudioBtnClick = e.target.closest('#tray-volume-item');

    if (!isDockCtxClick) hideDockContextMenu();
    if (!isWmCardCtxClick) hideWmCardContextMenu();
    if (!isFsCtxClick) hideFsContextMenu();
    if (!isCitySelectorClick) closeAllCityDropdowns();

    if (!sysTrayBtn?.contains(e.target)
        && !clockCenter?.contains(e.target)
        && !controlCenter?.contains(e.target)
        && !quickCenter?.contains(e.target)
        && !isAudioPanelClick
        && !isAudioBtnClick
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

  // Right click: cerrar context menus
  document.addEventListener('contextmenu', (e) => {
    if (!e.target.closest('.dock-item')) hideDockContextMenu();
    if (!e.target.closest('.wm-card')) hideWmCardContextMenu();
  });

  // Escape: cerrar todo
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

  // Resize/blur/scroll: cerrar menús flotantes
  window.addEventListener('resize', () => {
    hideDockContextMenu();
    hideWmCardContextMenu();
    hideFsContextMenu();
    closeAllCityDropdowns();
  });
  window.addEventListener('blur', () => {
    hideDockContextMenu();
    hideWmCardContextMenu();
    hideFsContextMenu();
    closeAllCityDropdowns();
  });
  document.addEventListener('scroll', () => {
    hideDockContextMenu();
    hideWmCardContextMenu();
    hideFsContextMenu();
    closeAllCityDropdowns();
  }, true);

  // Right click sobre el escritorio: context menu
  document.getElementById('screen').addEventListener('contextmenu', (e) => {
    if (e.target.closest('#context-menu') || e.target.closest('.window') || e.target.closest('.desktop-widget')) return;
    if (e.target.closest('.dock-item')) return;
    if (e.target.closest('#window-manager-overlay')) return;
    if (e.target.closest('#store-overlay')) return;
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
  });

  // Fullscreen change: restaurar ventana si sale de fullscreen
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && fullscreenWindowId) {
      const id = fullscreenWindowId;
      fullscreenWindowId = null;
      restoreWindow(id);
    }
  });

  // Window Manager: click afuera para cerrar
  const wmOverlay = document.getElementById('window-manager-overlay');
  if (wmOverlay) {
    wmOverlay.addEventListener('mousedown', (e) => {
      if (e.target === wmOverlay) closeWindowManager();
    });
  }

  // Setup trash zone del WM
  setupWmTrashZone();

  // Slider fills dinámicos
  document.addEventListener('input', (e) => {
    if (e.target instanceof HTMLInputElement && e.target.type === 'range') {
      syncSliderFill(e.target);
    }
  });
    // Slider fills dinámicos
  document.addEventListener('input', (e) => {
    if (e.target instanceof HTMLInputElement && e.target.type === 'range') {
      syncSliderFill(e.target);
    }
  });

  // ★ Click extendido en el topbar central:
  //   si hacés click en cualquier zona vacía del medio del topbar,
  //   se abre el Control Center. NO interfiere con los módulos
  //   izquierdo ni derecho.
  const topbar = document.getElementById('topbar');
  if (topbar) {
    topbar.addEventListener('click', (e) => {
      // Ignorar clicks en módulos interactivos
      if (e.target.closest('.waybar-module.left')) return;
      if (e.target.closest('.waybar-module.right')) return;
      if (e.target.closest('.waybar-module.center')) return; // ya lo maneja el listener propio
      if (e.target.closest('.topbar-profile-pill')) return;
      if (e.target.closest('.topbar-gamemode-badge')) return;
      if (e.target.closest('.ws')) return;
      if (e.target.closest('.logo')) return;
      if (e.target.closest('.sys-tray')) return;

      // Si el click fue en la franja vacía del topbar → toggle CC
      toggleControlCenter();
    });
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ ATAJOS DE TECLADO
═══════════════════════════════════════════════════════════════ */

function setupShortcuts() {
  document.addEventListener('keydown', (e) => {
    // ★ Control Center — Super/Cmd + C
    //   (evitamos Ctrl+C porque es copiar)
    if ((e.metaKey || e.key === 'Meta') && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
      toggleControlCenterFromShortcut();
      return;
    }

    // HUD (Alt+Z / Alt+G / Meta+G)
    if ((e.altKey && (e.key === 'z' || e.key === 'Z' || e.key === 'g' || e.key === 'G')) ||
        (e.metaKey && (e.key === 'g' || e.key === 'G'))) {
      e.preventDefault();
      toggleGamerOverlay();
      return;
    }

    // ★ SPOTIFY — Atajos globales de audio
    if (isEditableTarget(e.target)) return;

    // Ignorar si el usuario está en la app Spotify con foco propio (ella maneja sus atajos)
    if (activeWinId && openWindows[activeWinId]?.appId === 'music') return;

    // Ctrl/Cmd + Shift + Space: play/pause
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.code === 'Space' || e.key === ' ')) {
      e.preventDefault();
      SpotifyApp.togglePlayPause();
      return;
    }

    // Ctrl/Cmd + Alt + Space: play/pause (alternativa)
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.code === 'Space' || e.key === ' ')) {
      e.preventDefault();
      SpotifyApp.togglePlayPause();
      return;
    }

    // Ctrl/Cmd + Alt + →: siguiente track
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'ArrowRight' || e.code === 'ArrowRight')) {
      e.preventDefault();
      SpotifyApp.next();
      return;
    }

    // Ctrl/Cmd + Alt + ←: track anterior
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'ArrowLeft' || e.code === 'ArrowLeft')) {
      e.preventDefault();
      SpotifyApp.prev();
      return;
    }

    // Ctrl/Cmd + Alt + ↑: subir volumen (+5)
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'ArrowUp' || e.code === 'ArrowUp')) {
      e.preventDefault();
      const newVol = Math.min(1, (spotify.volume || 0) + 0.05);
      SpotifyApp.setVolume(newVol);
      showToast('Volumen', `${Math.round(newVol * 100)}%`, 'volume-2');
      return;
    }

    // Ctrl/Cmd + Alt + ↓: bajar volumen (-5)
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'ArrowDown' || e.code === 'ArrowDown')) {
      e.preventDefault();
      const newVol = Math.max(0, (spotify.volume || 0) - 0.05);
      SpotifyApp.setVolume(newVol);
      showToast('Volumen', `${Math.round(newVol * 100)}%`, 'volume-1');
      return;
    }

    // Ctrl/Cmd + Alt + M: mute toggle
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'm' || e.key === 'M')) {
      e.preventDefault();
      SpotifyApp.toggleMute();
      showToast(
        spotify.muted ? 'Mute Activado' : 'Mute Desactivado',
        spotify.muted ? 'El audio está silenciado.' : 'El audio volvió a sonar.',
        spotify.muted ? 'volume-x' : 'volume-2'
      );
      return;
    }

    // Ctrl/Cmd + Alt + L: toggle like del track actual
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'l' || e.key === 'L')) {
      e.preventDefault();
      const current = SpotifyApp.getCurrentTrack();
      if (current) {
        SpotifyApp.toggleLike(current.id);
        showToast(
          spIsTrackLiked(current.id) ? 'Agregado a Tus me gusta' : 'Quitado de Tus me gusta',
          current.title,
          'heart'
        );
      }
      return;
    }
  });
}

/* ─── ¿Es un target editable (input/textarea/contenteditable)? ─── */
function isEditableTarget(target) {
  if (!target) return false;
  const tag = target.tagName ? target.tagName.toLowerCase() : '';
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
  if (target.isContentEditable) return true;
  return false;
}

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Integración con la UI global
   ═══════════════════════════════════════════════════════════════ */

/**
 * Se llama una vez que SpotifyApp.init() ya terminó.
 * Conecta el motor con:
 *   - Topbar (botón "Ahora suena")
 *   - HUD (barra de reproducción del gaming overlay)
 *   - Control Center (#cc-spotify-player)
 *   - Sliders de volumen del sistema
 *   - Atajos de teclado (ya en setupShortcuts)
 *   - Notificaciones de cambio de track
 */
function setupSpotifyIntegration() {
  if (!window.SpotifyApp) {
    console.warn('[Spotify] SpotifyApp no está disponible. Abortando integración.');
    return;
  }

  // 1. Sincronizar UI inicial con el estado actual del motor
  updateSpotifyGlobalUI();

  // 2. Suscribirse a eventos del motor para reflejar en UI global
  SpotifyApp.on('trackchange', () => {
    updateSpotifyGlobalUI();
    updateSpotifyTopbar();
    updatePlayerBackground();
    addSpotifyNotification();
  });

  SpotifyApp.on('play', () => {
    updateSpotifyGlobalPlayState(true);
  });

  SpotifyApp.on('pause', () => {
    updateSpotifyGlobalPlayState(false);
  });

  SpotifyApp.on('volume', ({ volume, muted }) => {
    updateSpotifyVolumeUI(volume, muted);
    if (typeof syncAudioPanelWithSpotify === 'function') syncAudioPanelWithSpotify();
    if (typeof updateAudioMasterUI === 'function') updateAudioMasterUI();
    if (typeof updateTrayVolumeIcon === 'function') updateTrayVolumeIcon();
  });

  SpotifyApp.on('shuffle', ({ shuffle }) => {
    document.querySelectorAll('#cc-shuffle, #spot-shuffle').forEach(el => {
      el.classList.toggle('active', shuffle);
    });
  });

  SpotifyApp.on('repeat', ({ repeat }) => {
    document.querySelectorAll('#cc-repeat, #spot-repeat').forEach(el => {
      el.classList.toggle('active', repeat !== 'off');
      el.dataset.repeat = repeat;
    });
  });

  SpotifyApp.on('liked', () => {
    // Actualizar corazones en la UI
    document.querySelectorAll('[data-spotify-like]').forEach(btn => {
      const id = btn.dataset.spotifyLike;
      btn.classList.toggle('liked', spIsTrackLiked(id));
    });
  });

  SpotifyApp.on('progress', () => {
    // Este evento se emite muchas veces; el update visual lo hace el propio motor
    // Pero actualizamos el HUD si está visible
    if (gamerOverlayVisible) updatePlayerProgress();
  });

  SpotifyApp.on('error', ({ error, context }) => {
    console.warn('[Spotify] Error:', context, error);
    showToast('Spotify', 'No se pudo reproducir el track.', 'alert-circle');
  });

  // 3. Botones del Control Center (rewire)
  const ccPlayBtn = document.getElementById('cc-play-btn');
  if (ccPlayBtn) {
    ccPlayBtn.onclick = (e) => {
      e.stopPropagation();
      SpotifyApp.togglePlayPause();
    };
  }

  const ccShuffleBtn = document.getElementById('cc-shuffle');
  if (ccShuffleBtn) {
    ccShuffleBtn.onclick = (e) => {
      e.stopPropagation();
      SpotifyApp.toggleShuffle();
    };
  }

  const ccRepeatBtn = document.getElementById('cc-repeat');
  if (ccRepeatBtn) {
    ccRepeatBtn.onclick = (e) => {
      e.stopPropagation();
      SpotifyApp.cycleRepeat();
    };
  }

  // 4. Botones del HUD (rewire)
  const hudPlayBtn = document.getElementById('hud-play-btn');
  if (hudPlayBtn) {
    hudPlayBtn.onclick = (e) => {
      e.stopPropagation();
      SpotifyApp.togglePlayPause();
    };
  }

  // 5. Botones globales del index.html que usan wrappers viejos
  //    (los wrappers los definimos en BLOQUE 8/15, pero por las dudas
  //     dejamos los onclick reasignados aquí)
  window.toggleMediaPlayback = function() { SpotifyApp.togglePlayPause(); };
  window.nextTrack = function() { SpotifyApp.next(); };
  window.previousTrack = function() { SpotifyApp.prev(); };

  // 6. Click en la barra de progreso del Control Center (seek)
  const ccTrack = document.querySelector('.cc-progress-track');
  if (ccTrack) {
    ccTrack.style.cursor = 'pointer';
    ccTrack.onclick = (e) => {
      e.stopPropagation();
      const rect = ccTrack.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      const current = SpotifyApp.getCurrentTrack();
      if (current && current.duration) {
        SpotifyApp.seek(pct * current.duration);
      }
    };
  }

  // 7. Inyectar el topbar "Ahora suena" si todavía no existe
  //    (el index.html lo va a tener, pero por las dudas)
  ensureTopbarNowPlaying();

  // ★ Forzar update inmediato: si Spotify ya tiene un track restaurado
  //   desde localStorage, el widget debe aparecer sin esperar
  //   a que se emita un evento 'trackchange'.
  updateSpotifyTopbar();

  // 8. Restaurar volumen del sistema al slider del Control Center
  const volSlider = document.getElementById('volume-slider');
  if (volSlider) {
    const pct = Math.round((spotify.volume || 0.8) * 100);
    volSlider.value = String(pct);
    syncSliderFill(volSlider);
    const label = document.getElementById('quick-volume-value');
    if (label) label.textContent = `${pct}%`;
    const trayNum = document.getElementById('tray-volume-num');
    if (trayNum) trayNum.textContent = `${pct}%`;
  }

  // 9. Sincronizar UI de shuffle/repeat global
  document.querySelectorAll('#cc-shuffle, #spot-shuffle').forEach(el => {
    el.classList.toggle('active', spotify.shuffle);
  });
  document.querySelectorAll('#cc-repeat, #spot-repeat').forEach(el => {
    el.classList.toggle('active', spotify.repeat !== 'off');
    el.dataset.repeat = spotify.repeat;
  });

  refreshIcons();
}

/* ─── Sincronizar TODA la UI global con el estado del motor ─── */
function updateSpotifyGlobalUI() {
  const current = SpotifyApp.getCurrentTrack();

  // Control Center
  const ccArt = document.getElementById('cc-media-art');
  const ccTitle = document.getElementById('cc-media-title');
  const ccArtist = document.getElementById('cc-media-artist');
  const ccBg = document.getElementById('cc-media-bg');
  const ccTotal = document.getElementById('cc-time-total');

  if (current) {
    if (ccArt) ccArt.src = spGetTrackCover(current);
    if (ccTitle) ccTitle.textContent = current.title || '—';
    if (ccArtist) ccArtist.textContent = current.artist || '—';
    if (ccBg) ccBg.style.backgroundImage = `url("${spGetTrackCover(current)}")`;
    if (ccTotal) ccTotal.textContent = spFormatTime(current.duration || 0);
  } else {
    if (ccTitle) ccTitle.textContent = 'Sin reproducción';
    if (ccArtist) ccArtist.textContent = 'Elegí un track';
  }

  // HUD
  const hudArt = document.getElementById('hud-media-art');
  const hudTitle = document.getElementById('hud-media-title');
  const hudArtist = document.getElementById('hud-media-artist');
  const hudBg = document.getElementById('hud-media-bg');

  if (current) {
    if (hudArt) hudArt.src = spGetTrackCover(current);
    if (hudTitle) hudTitle.textContent = current.title || '—';
    if (hudArtist) hudArtist.textContent = current.artist || '—';
    if (hudBg) hudBg.style.backgroundImage = `url("${spGetTrackCover(current)}")`;
  }

  updateSpotifyGlobalPlayState(spotify.isPlaying);
  updateSpotifyVolumeUI(spotify.volume, spotify.muted);
  updateSpotifyTopbar();
}

/* ─── Actualizar iconos de play/pause en todos los reproductores ─── */
function updateSpotifyGlobalPlayState(isPlaying) {
  const iconName = isPlaying ? 'pause' : 'play';
  ['cc-play-btn', 'hud-play-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<i data-lucide="${iconName}"></i>`;
  });
  document.querySelectorAll('#spot-play-btn').forEach(btn => {
    btn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  });

  const dot = document.getElementById('cc-eq-dot');
  if (dot) dot.classList.toggle('paused', !isPlaying);

  refreshIcons();
}

/* ─── Actualizar sliders/num de volumen en toda la UI ─── */
function updateSpotifyVolumeUI(volume, muted) {
  const pct = Math.round((muted ? 0 : volume) * 100);

  const volSlider = document.getElementById('volume-slider');
  if (volSlider && Number(volSlider.value) !== pct) {
    volSlider.value = String(pct);
    syncSliderFill(volSlider);
  }

  const quickVal = document.getElementById('quick-volume-value');
  if (quickVal) quickVal.textContent = `${pct}%`;

  const trayNum = document.getElementById('tray-volume-num');
  if (trayNum) trayNum.textContent = `${pct}%`;

  document.querySelectorAll('#spot-volume-slider').forEach(el => {
    const newVal = String(pct);
    if (el.value !== newVal) {
      el.value = newVal;
      syncSliderFill(el);
    }
  });
}

/* ─── Topbar "Ahora suena" ─── */
function ensureTopbarNowPlaying() {
  let el = document.getElementById('topbar-now-playing');
  if (el) return el;

  const right = document.querySelector('.waybar-module.right');
  if (!right) return null;

  el = document.createElement('div');
  el.id = 'topbar-now-playing';
  el.className = 'hidden';
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.title = 'Reproducción actual — click para abrir Spotify';
  el.innerHTML = `
    <div class="tnp-cover-wrap">
      <img class="tnp-cover" id="tnp-cover" src="" alt="" />
      <span class="tnp-eq" aria-hidden="true"><i></i><i></i><i></i></span>
    </div>
    <div class="tnp-meta">
      <span class="tnp-title" id="tnp-title">Sin reproducción</span>
      <span class="tnp-artist" id="tnp-artist">—</span>
    </div>
    <button class="tnp-play" id="tnp-play" type="button" aria-label="Reproducir/Pausar">
      <i data-lucide="play"></i>
    </button>
    <div class="tnp-progress" aria-hidden="true">
      <span class="tnp-progress-fill" id="tnp-progress-fill"></span>
    </div>
  `;
  const sysTray = right.querySelector('.sys-tray');
  if (sysTray) {
    right.insertBefore(el, sysTray);
  } else {
    right.appendChild(el);
  }

  el.addEventListener('click', (e) => {
    if (e.target.closest('.tnp-play')) return;
    openApp('music');
  });

  el.querySelector('.tnp-play')?.addEventListener('click', (e) => {
    e.stopPropagation();
    SpotifyApp.togglePlayPause();
  });

  refreshIcons();
  return el;
}

/* ─── Actualizar contenido del topbar ─── */
function updateSpotifyTopbar() {
  const el = document.getElementById('topbar-now-playing');
  if (!el) return;

  const current = SpotifyApp.getCurrentTrack();
  if (!current) {
    el.classList.add('hidden');
    return;
  }

  el.classList.remove('hidden');

  const cover = document.getElementById('tnp-cover');
  if (cover) {
    cover.src = spGetTrackCover(current);
    cover.alt = current.title || '';
  }

  const title = document.getElementById('tnp-title');
  if (title) title.textContent = spTruncate(current.title || '—', 26);

  const artist = document.getElementById('tnp-artist');
  if (artist) artist.textContent = spTruncate(current.artist || '—', 30);

  el.classList.toggle('playing', spotify.isPlaying);

  const playBtn = document.getElementById('tnp-play');
  if (playBtn) {
    playBtn.innerHTML = `<i data-lucide="${spotify.isPlaying ? 'pause' : 'play'}"></i>`;
  }

  refreshIcons();
}

/* ─── Notificación al cambiar de track ─── */
function addSpotifyNotification() {
  const current = SpotifyApp.getCurrentTrack();
  if (!current) return;

  // Solo si no está en DND y el HUD no está visible
  if (dndEnabled || gamerOverlayVisible) return;

  addNotificationToHistory(
    `♪ ${current.title}`,
    `${current.artist}${current.album ? ' · ' + current.album : ''}`,
    'music'
  );
}

/* ═══════════════════════════════════════════════════════════════
   ★ PERSISTENCIA DE SESIÓN
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ CARGA DE ESTADO PERSISTIDO
═══════════════════════════════════════════════════════════════ */

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
      const validTypes = new Set(['clock', 'weather', 'gaming-hub', 'now-playing', 'system-monitor-pro', 'music-visualizer']);
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

/* ─── Migración de notas (formato viejo → nuevo) ─── */
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

/* ═══════════════════════════════════════════════════════════════
   ★ SETUP DE SLIDERS
═══════════════════════════════════════════════════════════════ */

function setupSliders() {
  const initSlider = (id, callback) => {
    const slider = document.getElementById(id);
    if (!slider) return;

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

/* ─── Volumen del sistema → Spotify (wrapper) ─── */
function setSystemVolume(val) {
  const pct = Number(val);
  if (Number.isNaN(pct)) return;

  // Actualizar siempre los labels del tray y quick center
  const volNum = document.getElementById('tray-volume-num');
  const qVolVal = document.getElementById('quick-volume-value');
  if (volNum) volNum.textContent = `${pct}%`;
  if (qVolVal) qVolVal.textContent = `${pct}%`;

  // ★ Delegar al motor de Spotify
  if (window.SpotifyApp && typeof SpotifyApp.setVolume === 'function') {
    SpotifyApp.setVolume(pct / 100);
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ SETUP DEL WIDGET DE CONTROL CENTER (Calendario + Métricas)
═══════════════════════════════════════════════════════════════ */

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

function simulateMetrics() {
  if (!gameModeActive) {
    systemMetrics.ram = Math.max(25, Math.min(55, systemMetrics.ram + Math.round((Math.random() - 0.5) * 6)));
    systemMetrics.cpu = Math.max(8, Math.min(78, systemMetrics.cpu + Math.round((Math.random() - 0.5) * 16)));
    systemMetrics.temp = Math.max(30, Math.min(68, systemMetrics.temp + Math.round((Math.random() - 0.5) * 8)));
  }
  updateMetrics();
}

/* ═══════════════════════════════════════════════════════════════
   ★ SETUP DEL ESTADO DE DISPOSITIVOS (Batería)
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ ACCESIBILIDAD POR TECLADO
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ WORKSPACES (Cambio y movimiento de ventanas)
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ WM TRASH ZONE (Drop zone para eliminar ventanas)
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ SETUP DE MÉTRICAS DE TAREA (Loop de telemetría)
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ SETUP DE AUTO-REFRESH DE CLIMA
═══════════════════════════════════════════════════════════════ */

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
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 5/12 — SISTEMA DE VENTANAS
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ APERTURA DE APLICACIONES
═══════════════════════════════════════════════════════════════ */

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

  // Si ya está abierta y no es forceNew, enfocar la última
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

  // Setup específico de apps
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
    if (appId === 'games') setupGamelibApp(win);
    if (appId === 'vscode') setupVscApp(win);
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

  // ★ Actualizar panel de audio si está abierto
  if (typeof renderAudioPanel === 'function') {
    const ap = document.getElementById('audio-panel');
    if (ap && !ap.classList.contains('hidden')) {
      renderAudioPanel();
    }
    if (typeof updateAudioPanelSubtitle === 'function') updateAudioPanelSubtitle();
  }

  // Drag de la titlebar
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

  // ★ Permitir drag también desde el tabs bar (para ventanas con pestañas)
  const tabsBar = win.querySelector('.window-tabs');
  if (tabsBar) {
    // Solo permitir drag si no se clickeó un tab ni el botón "+"
    const tabsDragHandler = (e) => {
      if (e.target.closest('.window-tab') || e.target.closest('.window-tab-add') || e.target.closest('.window-tab-close')) return;
      startDrag(e);
    };
    tabsBar.addEventListener('mousedown', tabsDragHandler);
    tabsBar.addEventListener('touchstart', tabsDragHandler, { passive: false });
  }

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

/* ═══════════════════════════════════════════════════════════════
   ★ FOCUS / CLOSE / MINIMIZE / MAXIMIZE
═══════════════════════════════════════════════════════════════ */

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

/**
 * ★ closeApp — modificado: NO pausa la reproducción de Spotify
 * cuando se cierra la ventana de la app 'music'.
 */
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

    // Renumerar instancias restantes de la misma app
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

    // ★ Actualizar panel de audio si está abierto
    if (typeof renderAudioPanel === 'function') {
      const ap = document.getElementById('audio-panel');
      if (ap && !ap.classList.contains('hidden')) {
        renderAudioPanel();
      }
      if (typeof updateAudioPanelSubtitle === 'function') updateAudioPanelSubtitle();
    }

    if (windowManagerOpen) renderWindowManager();

    // ★ NO pausar música al cerrar la ventana de Spotify.
    //    El reproductor sigue sonando por diseño (igual que en un SO real).

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
    win.style.borderRadius = '0';

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
  win.style.borderRadius = 'var(--radius-md)';

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

/* ═══════════════════════════════════════════════════════════════
   ★ RESIZE DE VENTANAS
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ SISTEMA DE TABS INTERNAS
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ TABS: HTML del contenido de cada pestaña
═══════════════════════════════════════════════════════════════ */

function buildTabPanelHTML(appId, tab) {
  if (appId === 'terminal') {
    return `
      <div class="window-tab-panel" data-tab-id="${tab.id}">
        <div class="term-body">
          <div class="term-history">
            <div class="term-line term-welcome">Nebula OS v2.5 "Ultimate" · WezTerm Emulator</div>
            <div class="term-line term-hint">Escribí "help" para ver los comandos disponibles.</div>
            <div class="term-line">&nbsp;</div>
            <div class="prompt">
              <span class="dir">~/nebula-os/gaming-core</span>
              <span class="branch"> main [profile:${currentProfile}]</span>
            </div>
            <div class="prompt term-prompt-input">
              <span class="time">❯</span>
              <input class="term-input" autocomplete="off" spellcheck="false">
            </div>
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

/* ═══════════════════════════════════════════════════════════════
   ★ ANIMACIONES DE VENTANAS
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ TOPBAR: actualización
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ TERMINAL — Motor de comandos y setup
   ═══════════════════════════════════════════════════════════════ */

function setupTerminalPanel(panel) {
  if (!panel) return;

  const body = panel.querySelector('.term-body');
  const history = panel.querySelector('.term-history');
  const input = panel.querySelector('.term-input');
  if (!body || !history || !input) return;

  if (input.dataset.termBound === '1') {
    setTimeout(() => input.focus(), 30);
    return;
  }
  input.dataset.termBound = '1';

  // ─── Estado del panel ───
  const state = {
    history: [],
    historyIndex: -1,
    cwd: '~/nebula-os/gaming-core'
  };

  // ─── El prompt que se "consume" al enviar ───
  //     Al enviar, este prompt se convierte en eco y se crea uno nuevo.
  let activePrompt = history.querySelector('.term-prompt-input');
  let activeInput = activePrompt.querySelector('.term-input');
  activeInput.dataset.termBound = '1';

  // ─── Focus al clickear el cuerpo ───
  body.addEventListener('click', () => {
    activeInput.focus();
  });

  // ─── Auto-scroll al fondo ───
  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      body.scrollTop = body.scrollHeight;
    });
  };

  // ─── Enter: ejecutar comando ───
  const handleKeydown = (e) => {
    // Historial
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.history.length === 0) return;
      if (state.historyIndex === -1) state.historyIndex = state.history.length;
      state.historyIndex = Math.max(0, state.historyIndex - 1);
      activeInput.value = state.history[state.historyIndex] || '';
      requestAnimationFrame(() =>
        activeInput.setSelectionRange(activeInput.value.length, activeInput.value.length)
      );
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.history.length === 0) return;
      state.historyIndex = Math.min(state.history.length, state.historyIndex + 1);
      activeInput.value = state.history[state.historyIndex] || '';
      requestAnimationFrame(() =>
        activeInput.setSelectionRange(activeInput.value.length, activeInput.value.length)
      );
      return;
    }
    // Ctrl+L: limpiar
    if ((e.ctrlKey || e.metaKey) && (e.key === 'l' || e.key === 'L')) {
      e.preventDefault();
      // Borrar todo menos el prompt activo
      history.innerHTML = '';
      rebuildPrompt();
      return;
    }
    // Enter: enviar
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = activeInput.value.trim();

      // Historial de comandos
      if (cmd.length > 0) {
        state.history.push(cmd);
        state.historyIndex = state.history.length;
      }

      // Deshabilitar el input actual y convertirlo en eco
      activeInput.disabled = true;
      activeInput.value = cmd;
      activeInput.classList.add('term-input-echo');

      // Ejecutar (excepto clear)
      if (cmd.toLowerCase() === 'clear' || cmd.toLowerCase() === 'cls') {
        history.innerHTML = '';
        rebuildPrompt();
        return;
      }

      if (cmd.length > 0) {
        const result = processTerminalCommand(cmd, state);
        if (typeof result === 'string') {
          result.split('\n').forEach(line => appendTerminalLine(history, line, ''));
        } else if (Array.isArray(result)) {
          result.forEach(line => {
            if (typeof line === 'string') appendTerminalLine(history, line, '');
            else if (line && line.text) appendTerminalLine(history, line.text, line.cls || '');
          });
        }
      }

      // Actualizar el directorio del próximo prompt
      rebuildPrompt();
      return;
    }
  };

  // ─── Reconstruye el prompt al pie con input nuevo y funcional ───
  function rebuildPrompt() {
    // Cerrar el prompt viejo (si quedó huérfano)
    const oldPrompts = history.querySelectorAll('.term-prompt-input');
    oldPrompts.forEach((p, i) => {
      if (i < oldPrompts.length - 1) p.remove(); // solo dejar el último en caso de duplicado
    });

    // Crear nuevo prompt
    const newPrompt = document.createElement('div');
    newPrompt.className = 'prompt term-prompt-input';
    newPrompt.innerHTML = `
      <span class="dir">${state.cwd}</span>
      <span class="branch"> main [profile:${currentProfile}]</span>
    `;

    const inputRow = document.createElement('div');
    inputRow.className = 'prompt term-prompt-input term-prompt-row';
    inputRow.innerHTML = `<span class="time">❯</span>`;

    const newInput = document.createElement('input');
    newInput.className = 'term-input';
    newInput.autocomplete = 'off';
    newInput.spellcheck = false;
    inputRow.appendChild(newInput);

    history.appendChild(newPrompt);
    history.appendChild(inputRow);

    // El dir del prompt anterior ya no se actualiza
    // El nuevo input toma el control
    activePrompt = inputRow;
    activeInput = newInput;
    activeInput.dataset.termBound = '1';

    // Listener de auto-scroll al tipear
    activeInput.addEventListener('input', scrollToBottom);
    activeInput.addEventListener('focus', scrollToBottom);
    activeInput.addEventListener('paste', scrollToBottom);
    activeInput.addEventListener('keydown', handleKeydown);

    scrollToBottom();
    setTimeout(() => activeInput.focus(), 30);
  }

  // ─── Primer setup: conectar el input inicial ───
  activeInput.addEventListener('input', scrollToBottom);
  activeInput.addEventListener('focus', scrollToBottom);
  activeInput.addEventListener('paste', scrollToBottom);
  activeInput.addEventListener('keydown', handleKeydown);

  // ─── Focus inicial ───
  scrollToBottom();
  setTimeout(() => activeInput.focus(), 80);
}

function buildTerminalEchoLine(cwd, cmd) {
  // Devuelve texto plano que se insertará como una "línea de eco"
  return `❯ ${cmd}`;
}

function appendTerminalLine(history, text, cls) {
  const line = document.createElement('div');
  line.className = 'term-line' + (cls ? ' ' + cls : '');
  line.textContent = text;
  history.appendChild(line);
}

function scrollTerminalToBottom(body) {
  if (!body) return;
  requestAnimationFrame(() => {
    body.scrollTop = body.scrollHeight;
  });
}

/**
 * Motor de comandos. Devuelve un string (una línea) o un array de líneas.
 * Acepta también { text, cls } para estilos por línea.
 */
function processTerminalCommand(rawCmd, state) {
  const cmd = rawCmd.trim();
  const lower = cmd.toLowerCase();

  // ─── help ───
  if (lower === 'help' || lower === '?') {
    return [
      { text: 'Comandos disponibles:', cls: 'term-accent' },
      '',
      { text: '  help                  Muestra esta ayuda', cls: '' },
      { text: '  clear                 Limpia la terminal', cls: '' },
      { text: '  whoami                Muestra el perfil activo', cls: '' },
      { text: '  neofetch              Información del sistema', cls: '' },
      { text: '  ls / dir              Lista archivos del directorio actual', cls: '' },
      { text: '  cd <carpeta>          Cambia de directorio', cls: '' },
      { text: '  pwd                   Muestra el directorio actual', cls: '' },
      { text: '  date                  Fecha y hora actual', cls: '' },
      { text: '  echo <texto>          Repite el texto', cls: '' },
      { text: '  gamemode on|off       Activa/desactiva Modo Juego', cls: '' },
      { text: '  theme <nombre>        Cambia el tema (cyberpunk, catppuccin, synthwave, stealth, nord-arc)', cls: '' },
      { text: '  wallpaper <0-2>       Cambia el fondo de pantalla', cls: '' },
      { text: '  workspace <1-5>       Cambia de escritorio virtual', cls: '' },
      { text: '  open <app>            Abre una app (music, files, settings, games, vscode, nova)', cls: '' },
      { text: '  hud                   Abre/cierra el Gaming HUD', cls: '' },
      { text: '  optimize              Libera RAM', cls: '' },
      { text: '  close-all             Cierra todas las ventanas', cls: '' },
      { text: '  matrix                Modo Matrix desbloqueado...', cls: 'term-hint' }
    ];
  }

  // ─── clear ───
  if (lower === 'clear' || lower === 'cls') {
    return null; // El caller ya maneja esto con Ctrl+L
  }

  // ─── whoami ───
  if (lower === 'whoami') {
    return `${currentProfile}@nebula-os`;
  }

  // ─── pwd ───
  if (lower === 'pwd') {
    return state.cwd;
  }

  // ─── date ───
  if (lower === 'date') {
    return new Date().toString();
  }

  // ─── echo ───
  if (lower.startsWith('echo ')) {
    return cmd.slice(5).trim();
  }

  // ─── ls / dir ───
  if (lower === 'ls' || lower === 'dir' || lower === 'ls -la') {
    if (!FILE_SYSTEM) return 'Error: filesystem no inicializado.';
    const folderName = state.cwd.split('/').pop();
    const folder = fsFindFolder(folderName) || FILE_SYSTEM;
    if (!folder || !folder.children) return '(vacío)';
    return folder.children.map(child => {
      const isDir = child.type === 'folder';
      const prefix = isDir ? '📁  ' : '   ';
      const suffix = isDir ? '/' : '';
      return `${prefix}${child.name}${suffix}`;
    });
  }

  // ─── cd ───
  if (lower.startsWith('cd ')) {
    const target = cmd.slice(3).trim();
    if (!target || target === '~' || target === '/') {
      state.cwd = '~/nebula-os';
      return null;
    }
    if (target === '..') {
      const parts = state.cwd.split('/').filter(Boolean);
      if (parts.length > 1) parts.pop();
      state.cwd = parts.join('/') || '~';
      return null;
    }
    const folder = fsFindFolder(target);
    if (!folder) return `cd: no existe el directorio "${target}"`;
    state.cwd = `~/nebula-os/${folder.name}`;
    return null;
  }

  // ─── neofetch ───
  if (lower === 'neofetch') {
    const now = new Date();
    const uptimeMin = Math.floor((Date.now() - widgetStartedAt) / 60000);
    const uptimeStr = uptimeMin < 60 ? `${uptimeMin} min` : `${Math.floor(uptimeMin/60)}h ${uptimeMin%60}m`;
    return [
      { text: '        ▄▄▄▄▄▄▄        ' + 'user@nebula-os', cls: 'term-accent' },
      { text: '     ▄█████████▄     ' + '─────────────────', cls: 'term-accent' },
      { text: '   ▄█████████████▄   ' + `OS: Nebula OS v2.5 Ultimate`, cls: 'term-accent' },
      { text: '  ████████████████   ' + `Kernel: nebula-core 5.15.0`, cls: 'term-accent' },
      { text: '  ████████████████   ' + `Uptime: ${uptimeStr}`, cls: 'term-accent' },
      { text: '  ████████████████   ' + `Shell: wezterm 2024.1`, cls: 'term-accent' },
      { text: '   ▀█████████████▀   ' + `Resolution: ${window.innerWidth}x${window.innerHeight}`, cls: 'term-accent' },
      { text: '     ▀█████████▀     ' + `Profile: ${currentProfile}`, cls: 'term-accent' },
      { text: '        ▀▀▀▀▀▀▀        ' + `Game Mode: ${gameModeActive ? 'ON' : 'OFF'}`, cls: 'term-accent' }
    ];
  }

  // ─── gamemode ───
  if (lower === 'gamemode on') {
    toggleGameMode(true);
    return 'Modo Juego: ON';
  }
  if (lower === 'gamemode off') {
    toggleGameMode(false);
    return 'Modo Juego: OFF';
  }
  if (lower === 'gamemode') {
    return `Modo Juego está ${gameModeActive ? 'ON' : 'OFF'}. Usá "gamemode on" u "gamemode off".`;
  }

  // ─── theme ───
  if (lower.startsWith('theme ')) {
    const themeName = cmd.slice(6).trim().toLowerCase();
    if (THEME_PRESETS[themeName]) {
      applyThemePreset(themeName);
      return `Tema aplicado: ${THEME_PRESETS[themeName].name}`;
    }
    return `Tema no encontrado: "${themeName}". Disponibles: ${Object.keys(THEME_PRESETS).join(', ')}`;
  }

  // ─── wallpaper ───
  if (lower.startsWith('wallpaper ')) {
    const idx = parseInt(cmd.slice(10).trim(), 10);
    if (Number.isNaN(idx) || !WALLPAPERS[idx]) {
      return `Uso: wallpaper <0-${WALLPAPERS.length - 1}>`;
    }
    applyWallpaper(idx);
    return `Fondo aplicado: ${WALLPAPERS[idx].name}`;
  }

  // ─── workspace ───
  if (lower.startsWith('workspace ')) {
    const ws = parseInt(cmd.slice(10).trim(), 10);
    if (Number.isNaN(ws) || ws < 1 || ws > TOTAL_WORKSPACES) {
      return `Uso: workspace <1-${TOTAL_WORKSPACES}>`;
    }
    switchWorkspace(ws);
    return `Cambiado al Space ${ws}`;
  }

  // ─── open ───
  if (lower.startsWith('open ')) {
    const appId = cmd.slice(5).trim().toLowerCase();
    if (APPS[appId]) {
      openApp(appId);
      return `Abriendo ${APPS[appId].title}...`;
    }
    return `App no encontrada: "${appId}". Probá: ${Object.keys(APPS).join(', ')}`;
  }

  // ─── hud ───
  if (lower === 'hud') {
    toggleGamerOverlay();
    return `Gaming HUD: ${gamerOverlayVisible ? 'ON' : 'OFF'}`;
  }

  // ─── optimize ───
  if (lower === 'optimize' || lower === 'clean') {
    simulateRamBoost();
    return 'Optimizando sistema... RAM liberada.';
  }

  // ─── close-all ───
  if (lower === 'close-all' || lower === 'exit-all') {
    const count = Object.keys(openWindows).length;
    Object.keys(openWindows).forEach(id => closeApp(id));
    return `${count} ventana${count === 1 ? '' : 's'} cerrada${count === 1 ? '' : 's'}.`;
  }

  // ─── matrix ───
  if (lower === 'matrix') {
    return [
      { text: 'Wake up, Neo...', cls: 'term-matrix' },
      { text: 'The Matrix has you...', cls: 'term-matrix' },
      { text: 'Follow the white rabbit. 🐇', cls: 'term-matrix' },
      { text: 'Knock, knock, Neo.', cls: 'term-matrix' }
    ];
  }

  // ─── sudo ───
  if (lower.startsWith('sudo ')) {
    return `[sudo] password for ${currentProfile}: ********\nPermiso denegado: no sos root en Nebula OS. 😉`;
  }

  // ─── Fallback ───
  return `comando no encontrado: ${cmd.split(' ')[0]}. Probá "help".`;
}

/* ═══════════════════════════════════════════════════════════════
   ★ DOCK
═══════════════════════════════════════════════════════════════ */

function renderDock() {
  const dock = document.getElementById('dock');
  if (!dock) return;
  dock.innerHTML = '';

  // Botón launcher
  const lBtn = document.createElement('div');
  lBtn.className = 'dock-item dock-launcher-btn';
  lBtn.tabIndex = 0;
  lBtn.setAttribute('role', 'button');
  lBtn.title = 'Lanzador de Aplicaciones (Nebula Menu)';
  lBtn.innerHTML = `<img src="./assets/images/logosSO/nebulaLogo.png" alt="Nebula" class="dock-launcher-logo" onerror="this.onerror=null; this.outerHTML='<i data-lucide=\\'layout-grid\\'></i>'; refreshIcons();" />`;
  lBtn.onclick = toggleLauncher;
  dock.appendChild(lBtn);

  // Apps del dock
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

/* ═══════════════════════════════════════════════════════════════
   ★ DOCK CONTEXT MENU
═══════════════════════════════════════════════════════════════ */

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
    case 'open-new':
      openApp(appId, true);
      break;
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

/* ═══════════════════════════════════════════════════════════════
   ★ WINDOW MANAGER (Workspace Manager)
═══════════════════════════════════════════════════════════════ */

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
    case 'focus':
      focusFromWindowManager(winId);
      break;
    case 'minimize':
      minimizeApp(winId);
      if (windowManagerOpen) renderWindowManager();
      break;
    case 'restore':
      entry.win.classList.remove('minimized');
      entry.win.style.display = 'flex';
      focusWindow(winId);
      if (windowManagerOpen) renderWindowManager();
      break;
    case 'new-instance':
      openApp(entry.appId, true);
      if (windowManagerOpen) renderWindowManager();
      break;
    case 'move-ws':
      if (targetWs !== null && !Number.isNaN(targetWs)) moveWindowToWorkspace(winId, targetWs);
      break;
    case 'close':
      deleteWindowFromWm(winId);
      break;
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

/* ═══════════════════════════════════════════════════════════════
   ★ GET APP CONTENT — Router principal
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
      return getVscAppHTML();

    case 'games':
      return getGamelibAppHTML();

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
          <div class="term-history">
            <div class="term-line term-welcome">Nebula OS v2.5 "Ultimate" · WezTerm Emulator</div>
            <div class="term-line term-hint">Escribí "help" para ver los comandos disponibles.</div>
            <div class="term-line">&nbsp;</div>
            <div class="prompt">
              <span class="dir">~/nebula-os/gaming-core</span>
              <span class="branch"> main [profile:${currentProfile}]</span>
            </div>
            <div class="prompt term-prompt-input">
              <span class="time">❯</span>
              <input class="term-input" autocomplete="off" spellcheck="false">
            </div>
          </div>
        </div>
      `;

    default:
      return `<div class="app-pad"><h2>${APPS[id]?.title || id}</h2><p>${APPS[id]?.sub || ''}</p></div>`;
  }
}
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 6/12 — OVERLAYS Y MENÚS
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ LAUNCHER (Nebula Menu)
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

/* ─── Construcción de listas del Launcher ─── */

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
    { id: 'action-open-settings-designer', title: 'Abrir Nebula Designer', sub: 'Personalizar colores, blur y bordes', icon: 'palette', category: 'Acción', keywords: ['designer', 'ajustes', 'settings', 'personalizar'], run: () => openSettingsTab('designer') },
    { id: 'action-audio-panel', title: 'Abrir Panel de Audio', sub: 'Mezclador por aplicación, dispositivos y peak meter', icon: 'volume-2', category: 'Acción', keywords: ['audio', 'volumen', 'mezclador', 'mixer', 'sonido'], run: () => { if (typeof openAudioPanel === 'function') openAudioPanel(); } }
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
    { id: 'cmd-theme-nord-arc', title: '> theme nord-arc', sub: 'Aplicar tema Nord Arc', icon: 'palette', category: 'Comando', keywords: ['theme nord', 'tema nord', 'nord arc'], run: () => applyThemePreset('nord-arc') },
    { id: 'cmd-audio', title: '> audio', sub: 'Abrir el mezclador de audio', icon: 'volume-2', category: 'Comando', keywords: ['audio', 'mezclador', 'volumen', 'mixer'], run: () => { if (typeof openAudioPanel === 'function') openAudioPanel(); } },
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
          sub: `Nota del ${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`,
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
            showToast('Nota encontrada', `Del ${String(dd).padStart(2, '0')}/${String(mm).padStart(2, '0')}/${yy}`, 'notebook-pen');
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

/* ═══════════════════════════════════════════════════════════════
   ★ CONTEXT MENU DEL ESCRITORIO
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ CONTROL CENTER / QUICK CENTER
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ NOTIFICATION CENTER (Overlay)
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ WIFI PANEL — Overlay
═══════════════════════════════════════════════════════════════ */

function openWifiPanel() {
  const panel = document.getElementById('wifi-panel');
  if (!panel) return;
  closeQuickCenter();
  closeControlCenter();
  closeNotificationCenter();
  closeBluetoothPanel();
  if (typeof closeAudioPanel === 'function') closeAudioPanel();
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

function renderWifiPanel() {
  const body = document.getElementById('wifi-panel-body');
  const footer = document.getElementById('wifi-panel-footer');
  const subtitle = document.getElementById('wifi-panel-subtitle');

  if (!body) return;

  // 1) Si WiFi está apagado → mostrar estado vacío
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

  // 2) WiFi prendido → asegurar estructura
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
  if (footer) footer.hidden = false;

  // 3) Si está escaneando
  if (wifiScanInProgress) {
    if (loading) loading.hidden = false;
    list.innerHTML = '';
    if (subtitle) subtitle.textContent = 'Escaneando redes...';
    refreshIcons();
    return;
  }

  // 4) Renderizar lista
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

function getWifiNetworkHTML(network) {
  const isConnected = connectedWifiId === network.id;
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
        <i data-lucide="wifi"></i>
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

/* ═══════════════════════════════════════════════════════════════
   ★ BLUETOOTH PANEL — Overlay
═══════════════════════════════════════════════════════════════ */

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

function openNetworkSettings() {
  closeWifiPanel();
  openApp('settings');
  settingsState.activeSettingsTab = 'system';
  renderSettingsApp();
}

/* ═══════════════════════════════════════════════════════════════
   ★ FILES: Context Menu + Rename Modal + Move Menu
═══════════════════════════════════════════════════════════════ */

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
        action: () => SpotifyApp.togglePlayPause()
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

/* ═══════════════════════════════════════════════════════════════
   ★ WEATHER: City Dropdown
═══════════════════════════════════════════════════════════════ */

function closeAllCityDropdowns() {
  document.querySelectorAll('.weather-city-dropdown.open').forEach(d => {
    d.classList.remove('open');
    setTimeout(() => d.remove(), 180);
  });
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

/* ═══════════════════════════════════════════════════════════════
   ★ DELEGATED HANDLER: Manejo de errores de imagen
═══════════════════════════════════════════════════════════════ */

function handleImageError(e) {
  if (!(e.target instanceof HTMLImageElement)) return;
  e.target.classList.add('img-broken');
}
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 7/12 — WIDGETS + NOTIFICACIONES + TOASTS
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ WIDGETS DE ESCRITORIO — CRUD
═══════════════════════════════════════════════════════════════ */

function addDesktopWidget(type, x = null, y = null) {
  const allowsMultiple = (type === 'weather');

  if (!allowsMultiple) {
    const existing = desktopWidgets.find(w => w.type === type);
    if (existing) {
      showToast('Widget Existente', `El widget de ${type} ya está en el escritorio.`, 'info');
      return;
    }
  }

  const id = 'widget-' + type + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
  const defaultPositions = {
    clock:         { x: 24, y: 60 },
    'gaming-hub':  { x: window.innerWidth - 400, y: 60 },
    weather:       { x: window.innerWidth - 280, y: 60 },
    'now-playing': { x: 24, y: 320 }
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

function removeDesktopWidget(id) {
  const el = document.getElementById(id);
  if (el) detachNowPlayingWidgetListeners(el);

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

  const validTypes = new Set(['clock', 'weather', 'gaming-hub', 'now-playing', 'system-monitor-pro', 'music-visualizer']);
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
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
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
    } else if (widget.type === 'now-playing') {
      title = 'AHORA SUENA';
      iconName = 'music';
      extraClass = 'now-playing-widget';
      bodyHTML = renderNowPlayingWidgetHTML();
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
    if (widget.type === 'now-playing') {
      attachNowPlayingWidgetListeners(el);
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
    clockTime.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
}

/* ─── Widget: Clima ─── */

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

/* ─── Widget: Gaming Hub ─── */

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

/* ─── Widget: Now Playing (Reproductor) ─── */

/** Mapa de suscripciones por elemento para limpiar al cerrar. */
const npWidgetSubscriptions = new WeakMap();

function addNowPlayingWidget() {
  addDesktopWidget('now-playing');
  renderSettingsApp();
}

function removeNowPlayingWidget() {
  const existing = desktopWidgets.find(w => w.type === 'now-playing');
  if (existing) {
    removeDesktopWidget(existing.id);
    showToast('Widget Removido', 'Reproductor retirado del escritorio.', 'trash-2');
  }
  renderSettingsApp();
}

function renderNowPlayingWidgetHTML() {
  const current = window.SpotifyApp ? SpotifyApp.getCurrentTrack() : null;
  const isPlaying = window.SpotifyApp ? SpotifyApp.isPlaying() : false;

  if (!current) {
    return `
      <div class="np-widget-body is-empty">
        <div class="np-empty-icon"><i data-lucide="music-4"></i></div>
        <strong class="np-empty-title">Sin reproducción</strong>
        <span class="np-empty-sub">Abrí Spotify y elegí una canción.</span>
      </div>
    `;
  }

  const cover = spGetTrackCover(current);
  const liked = SpotifyApiIsLiked(current.id);
  const cur = SpotifyApp.getCurrentTime();
  const dur = SpotifyApp.getDuration() || current.duration || 0;
  const pct = dur > 0 ? Math.min(100, (cur / dur) * 100) : 0;

  return `
    <div class="np-widget-body">
      <div class="np-hero">
        <div class="np-cover-wrap">
          <img class="np-cover" src="${escapeHtml(cover)}" alt="" />
          <span class="np-eq" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
        <div class="np-meta">
          <span class="np-title" title="${escapeHtml(current.title)}">${escapeHtml(current.title)}</span>
          <button class="np-artist" type="button" data-np-go-artist="${escapeHtml(current.artist)}" title="Ir al artista">
            ${escapeHtml(current.artist)}
          </button>
          <span class="np-album" title="${escapeHtml(current.album)}">${escapeHtml(current.album)}</span>
        </div>
        <button class="np-like ${liked ? 'liked' : ''}" type="button" data-np-like="${escapeHtml(current.id)}" title="${liked ? 'Quitar de Tus me gusta' : 'Agregar a Tus me gusta'}">
          <i data-lucide="heart"></i>
        </button>
      </div>

      <div class="np-progress-row">
        <span class="np-time np-time-cur">${spFormatTime(cur)}</span>
        <div class="np-progress" data-np-progress>
          <div class="np-progress-track">
            <span class="np-progress-fill" style="width: ${pct}%"></span>
          </div>
        </div>
        <span class="np-time np-time-total">${spFormatTime(dur)}</span>
      </div>

      <div class="np-controls">
        <button class="np-ctrl" type="button" data-np-prev title="Anterior">
          <i data-lucide="skip-back"></i>
        </button>
        <button class="np-ctrl np-ctrl-main" type="button" data-np-play-pause title="${isPlaying ? 'Pausar' : 'Reproducir'}">
          <i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>
        </button>
        <button class="np-ctrl" type="button" data-np-next title="Siguiente">
          <i data-lucide="skip-forward"></i>
        </button>
        <button class="np-ctrl np-ctrl-shuffle ${spotify.shuffle ? 'active' : ''}" type="button" data-np-shuffle title="Aleatorio">
          <i data-lucide="shuffle"></i>
        </button>
        <button class="np-ctrl np-ctrl-repeat ${spotify.repeat !== 'off' ? 'active' : ''}" type="button" data-np-repeat data-np-repeat-mode="${spotify.repeat}" title="Repetir">
          <i data-lucide="${spotify.repeat === 'one' ? 'repeat-1' : 'repeat'}"></i>
        </button>
      </div>
    </div>
  `;
}

/** Actualiza en vivo un widget existente SIN re-render completo. */
function updateNowPlayingWidgetElement(el) {
  if (!el || !window.SpotifyApp) return;

  const current = SpotifyApp.getCurrentTrack();
  const isPlaying = SpotifyApp.isPlaying();

  // Si no hay track y estaba vacío, no hacemos nada
  if (!current && el.querySelector('.np-widget-body.is-empty')) return;
  if (!current && !el.querySelector('.np-widget-body.is-empty')) {
    // Volvió a estado vacío: re-render completo
    const body = el.querySelector('.np-widget-body');
    if (body) {
      body.outerHTML = renderNowPlayingWidgetHTML().trim();
      refreshIcons();
      attachNowPlayingWidgetListeners(el);
    }
    return;
  }

  // Actualizar cover
  const coverEl = el.querySelector('.np-cover');
  if (coverEl) coverEl.src = spGetTrackCover(current);

  // Título / artista / álbum
  const titleEl = el.querySelector('.np-title');
  if (titleEl) {
    titleEl.textContent = current.title;
    titleEl.title = current.title;
  }
  const artistEl = el.querySelector('.np-artist');
  if (artistEl) {
    artistEl.textContent = current.artist;
    artistEl.dataset.npGoArtist = current.artist;
  }
  const albumEl = el.querySelector('.np-album');
  if (albumEl) {
    albumEl.textContent = current.album;
    albumEl.title = current.album;
  }

  // Like
  const likeEl = el.querySelector('[data-np-like]');
  if (likeEl) {
    likeEl.classList.toggle('liked', SpotifyApiIsLiked(current.id));
    likeEl.dataset.npLike = current.id;
  }

  // Progreso
  const cur = SpotifyApp.getCurrentTime();
  const dur = SpotifyApp.getDuration() || current.duration || 0;
  const pct = dur > 0 ? Math.min(100, (cur / dur) * 100) : 0;

  const fill = el.querySelector('.np-progress-fill');
  if (fill) fill.style.width = `${pct}%`;

  const curTime = el.querySelector('.np-time-cur');
  if (curTime) curTime.textContent = spFormatTime(cur);
  const totTime = el.querySelector('.np-time-total');
  if (totTime) totTime.textContent = spFormatTime(dur);

  // Botón play/pause
  const ppBtn = el.querySelector('[data-np-play-pause]');
  if (ppBtn) {
    const icon = isPlaying ? 'pause' : 'play';
    if (ppBtn.querySelector('[data-lucide]')?.getAttribute('data-lucide') !== icon) {
      ppBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
      ppBtn.title = isPlaying ? 'Pausar' : 'Reproducir';
    }
  }

  // Estado "playing" en el root para animar el EQ y estilos
  el.classList.toggle('is-playing', isPlaying);

  // Shuffle / repeat
  const shuffleEl = el.querySelector('[data-np-shuffle]');
  if (shuffleEl) shuffleEl.classList.toggle('active', spotify.shuffle);
  const repeatEl = el.querySelector('[data-np-repeat]');
  if (repeatEl) {
    repeatEl.classList.toggle('active', spotify.repeat !== 'off');
    repeatEl.dataset.npRepeatMode = spotify.repeat;
    const icon = spotify.repeat === 'one' ? 'repeat-1' : 'repeat';
    if (repeatEl.querySelector('[data-lucide]')?.getAttribute('data-lucide') !== icon) {
      repeatEl.innerHTML = `<i data-lucide="${icon}"></i>`;
    }
  }

  refreshIcons();
}

/** Suscribe el widget a los eventos de Spotify y cablea los controles. */
function attachNowPlayingWidgetListeners(el) {
  if (!el || !window.SpotifyApp) return;
  if (npWidgetSubscriptions.has(el)) return;

  // ─── Cablear botones ───
  el.addEventListener('click', (e) => {
    const playPause = e.target.closest('[data-np-play-pause]');
    if (playPause) { e.stopPropagation(); SpotifyApp.togglePlayPause(); return; }

    const prev = e.target.closest('[data-np-prev]');
    if (prev) { e.stopPropagation(); SpotifyApp.prev(); return; }

    const next = e.target.closest('[data-np-next]');
    if (next) { e.stopPropagation(); SpotifyApp.next(); return; }

    const shuffle = e.target.closest('[data-np-shuffle]');
    if (shuffle) { e.stopPropagation(); SpotifyApp.toggleShuffle(); return; }

    const repeat = e.target.closest('[data-np-repeat]');
    if (repeat) { e.stopPropagation(); SpotifyApp.cycleRepeat(); return; }

    const like = e.target.closest('[data-np-like]');
    if (like) { e.stopPropagation(); SpotifyApp.toggleLike(like.dataset.npLike); return; }

    const goArtist = e.target.closest('[data-np-go-artist]');
    if (goArtist) {
      e.stopPropagation();
      openApp('music');
      setTimeout(() => {
        spotify.view = 'artist';
        spotify.viewParams = { artistName: goArtist.dataset.npGoArtist };
        getInstancesOfApp('music').forEach(id => {
          const w = openWindows[id]?.win;
          if (w) refreshSpotifyWindow(w);
        });
      }, 60);
      return;
    }
  });

  // ─── Click en barra de progreso → seek ───
  const progress = el.querySelector('[data-np-progress]');
  if (progress) {
    const onSeek = (ev) => {
      const rect = progress.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
      const dur = SpotifyApp.getDuration() || SpotifyApp.getCurrentTrack()?.duration || 0;
      SpotifyApp.seek(pct * dur);
    };
    progress.style.cursor = 'pointer';
    progress.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      onSeek(e);
      const onMove = (ev) => onSeek(ev);
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  // ─── Suscripciones al motor ───
  const unsubs = [];

  unsubs.push(SpotifyApp.on('trackchange', () => updateNowPlayingWidgetElement(el)));
  unsubs.push(SpotifyApp.on('play',        () => updateNowPlayingWidgetElement(el)));
  unsubs.push(SpotifyApp.on('pause',       () => updateNowPlayingWidgetElement(el)));
  unsubs.push(SpotifyApp.on('liked',       () => updateNowPlayingWidgetElement(el)));
  unsubs.push(SpotifyApp.on('shuffle',     () => updateNowPlayingWidgetElement(el)));
  unsubs.push(SpotifyApp.on('repeat',      () => updateNowPlayingWidgetElement(el)));
  unsubs.push(SpotifyApp.on('progress',    () => {
    // Actualización rápida solo del progreso (evita re-parsear todo)
    if (!window.SpotifyApp) return;
    const cur = SpotifyApp.getCurrentTime();
    const dur = SpotifyApp.getDuration() || SpotifyApp.getCurrentTrack()?.duration || 0;
    const pct = dur > 0 ? Math.min(100, (cur / dur) * 100) : 0;

    const fill = el.querySelector('.np-progress-fill');
    if (fill) fill.style.width = `${pct}%`;
    const curEl = el.querySelector('.np-time-cur');
    if (curEl) curEl.textContent = spFormatTime(cur);
    const totEl = el.querySelector('.np-time-total');
    if (totEl) totEl.textContent = spFormatTime(dur);
  }));

  npWidgetSubscriptions.set(el, unsubs);
}

/** Desuscribe y limpia. Se llama desde removeDesktopWidget cuando el tipo coincide. */
function detachNowPlayingWidgetListeners(el) {
  const unsubs = npWidgetSubscriptions.get(el);
  if (!unsubs) return;
  unsubs.forEach(fn => { try { fn(); } catch (_) {} });
  npWidgetSubscriptions.delete(el);
}

/* ═══════════════════════════════════════════════════════════════
   ★ SISTEMA DE NOTIFICACIONES (Historial)
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ SISTEMA DE TOASTS
═══════════════════════════════════════════════════════════════ */

function showToast(title, message, iconName = 'sparkles', force = false, options = {}) {
  if (dndEnabled && !force) return;

  let opts = options;
  if (typeof iconName === 'object' && iconName !== null) {
    opts = iconName;
    iconName = opts.icon || 'sparkles';
  }

  const level = opts.level || inferToastLevel(iconName);
  const actions = Array.isArray(opts.actions) ? opts.actions : [];
  const duration = typeof opts.duration === 'number' ? opts.duration : TOAST_DURATIONS[level] || 4000;
  const isPersistent = duration === 0 || (level === 'danger' && actions.length > 0);

  addNotificationToHistory(title, message, iconName);

  const container = document.getElementById('toast-container');
  if (!container) return;

  // Intentar agrupar con un toast similar
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

    groupMatch.el.style.animation = 'none';
    void groupMatch.el.offsetWidth;
    groupMatch.el.style.animation = '';

    if (!isPersistent && groupMatch.timer) {
      clearTimeout(groupMatch.timer);
      resetToastTimer(groupMatch, duration);
    }
    return;
  }

  // Crear nuevo toast
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

  if (!isPersistent && entry.progressFill) {
    startProgressBar(entry, duration);
  }

  if (!isPersistent) {
    resetToastTimer(entry, duration);
  }

  // Pausar al hover
  toast.addEventListener('mouseenter', () => {
    if (isPersistent || entry.closing) return;
    entry.paused = true;
    entry.remaining -= (Date.now() - entry.startedAt);
    if (entry.timer) {
      clearTimeout(entry.timer);
      entry.timer = null;
    }
  });

  toast.addEventListener('mouseleave', () => {
    if (isPersistent || entry.closing || !entry.paused) return;
    entry.paused = false;
    entry.startedAt = Date.now();
    resetToastTimer(entry, entry.remaining);
  });

  // Click en el toast → abrir Centro de Notificaciones
  toast.addEventListener('click', (e) => {
    if (e.target.closest('.toast-close-btn')) return;
    if (e.target.closest('.toast-action-btn')) return;
    closeToast(id);
    openNotificationCenter();
  });

  // Botón de cerrar
  toast.querySelector('[data-toast-close]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeToast(id);
  });

  // Botones de acción
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

/* ═══════════════════════════════════════════════════════════════
   ★ CALENDARIO Y NOTAS
═══════════════════════════════════════════════════════════════ */

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
      <span class="note-item-date">${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}</span>
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
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 8/12 — MULTIMEDIA: APP SPOTIFY COMPLETA
   ═══════════════════════════════════════════════════════════════

   Estructura del bloque:
     8A → Motor `SpotifyApp` (este sub-bloque)
     8B → HTML + UI (`getSpotifyAppHTML` + `setupSpotifyApp`)
     8C → Wrappers globales + integración final
*/

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY APP — MOTOR DE AUDIO Y BIBLIOTECA
   API pública expuesta en `window.SpotifyApp`
   ═══════════════════════════════════════════════════════════════ */

const SpotifyApp = (() => {

  /* ─────────────────────────────────────────────────────────────
     ★ HELPERS INTERNOS
  ───────────────────────────────────────────────────────────── */

  function _clone(obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(_clone);
    const out = {};
    for (const k of Object.keys(obj)) out[k] = _clone(obj[k]);
    return out;
  }

  function _safeStr(v) {
    return v == null ? '' : String(v);
  }

  function _normalizeTrack(raw, fallbackId) {
    if (!raw || typeof raw !== 'object') return null;
    const title = _safeStr(raw.title || raw.name).trim();
    if (!title) return null;
    const id = _safeStr(raw.id || fallbackId || '').trim() ||
               (spSlug(title) + '-' + spSlug(raw.artist || 'unknown'));
    return {
      id,
      title,
      artist: _safeStr(raw.artist || raw.artistName).trim() || 'Desconocido',
      album: _safeStr(raw.album).trim() || 'Sin álbum',
      year: Number.isFinite(+raw.year) ? +raw.year : null,
      duration: Number.isFinite(+raw.duration) ? +raw.duration : SPOTIFY_DEFAULT_DURATION,
      src: _safeStr(raw.src || raw.path).trim(),
      cover: _safeStr(raw.cover || raw.art).trim() ||
             './assets/images/apps/spotify/tapaAlbum1.jpg'
    };
  }

  function _normalizePlaylist(raw, fallbackId) {
    if (!raw || typeof raw !== 'object') return null;
    const name = _safeStr(raw.name).trim();
    if (!name) return null;
    const id = _safeStr(raw.id || fallbackId || '').trim() || spSlug(name);
    return {
      id,
      name,
      description: _safeStr(raw.description).trim() || 'Playlist',
      cover: _safeStr(raw.cover).trim() || null,
      color: _safeStr(raw.color).trim() || '#1ed760',
      trackIds: Array.isArray(raw.trackIds) ? raw.trackIds.map(_safeStr) : []
    };
  }

  /* ─────────────────────────────────────────────────────────────
     ★ ESTADO PERSISTENTE (se guarda en localStorage)
  ───────────────────────────────────────────────────────────── */

  let _state = _clone(SPOTIFY_DEFAULT_STATE);
  let _saveTimer = null;

  function _loadState() {
    try {
      const raw = localStorage.getItem(SPOTIFY_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      _state = Object.assign({}, _clone(SPOTIFY_DEFAULT_STATE), parsed);
      _state.likedIds = Array.isArray(_state.likedIds) ? _state.likedIds : [];
      _state.queue = Array.isArray(_state.queue) ? _state.queue : [];
      _state.recentIds = Array.isArray(_state.recentIds) ? _state.recentIds : [];
      _state.customPlaylists = Array.isArray(_state.customPlaylists) ? _state.customPlaylists : [];
      _state.playCount = _state.playCount && typeof _state.playCount === 'object'
        ? _state.playCount : {};
    } catch (e) {
      console.warn('[Spotify] No se pudo cargar el estado persistido:', e);
    }
  }

  function _scheduleSave() {
    if (_saveTimer) clearTimeout(_saveTimer);
    _saveTimer = setTimeout(() => {
      _saveTimer = null;
      _saveNow();
    }, 400);
  }

  function _saveNow() {
    try {
      _state.lastUpdatedAt = Date.now();
      localStorage.setItem(SPOTIFY_STORAGE_KEY, JSON.stringify(_state));
    } catch (e) {
      console.warn('[Spotify] No se pudo guardar el estado:', e);
    }
  }

  /* ─────────────────────────────────────────────────────────────
     ★ EVENT BUS
  ───────────────────────────────────────────────────────────── */

  const _listeners = new Map();

  function _on(event, fn) {
    if (!event || typeof fn !== 'function') return () => {};
    if (!_listeners.has(event)) _listeners.set(event, new Set());
    _listeners.get(event).add(fn);
    return () => _off(event, fn);
  }

  function _off(event, fn) {
    const set = _listeners.get(event);
    if (!set) return;
    if (fn) set.delete(fn);
    else set.clear();
  }

  function _emit(event, data) {
    const set = _listeners.get(event);
    if (!set) return;
    for (const fn of Array.from(set)) {
      try { fn(data); } catch (e) { console.warn('[Spotify] listener error:', e); }
    }
  }

  /* ─────────────────────────────────────────────────────────────
     ★ AUDIO: HTMLAudioElement + Web Audio API (Analyser)
  ───────────────────────────────────────────────────────────── */

  function _ensureAudioElement() {
    if (spotify.audioEl) return spotify.audioEl;

    const audio = new Audio();
    audio.preload = 'metadata';
    audio.crossOrigin = 'anonymous';
    audio.volume = _state.volume;

    audio.addEventListener('loadedmetadata', () => {
      spotify.duration = Number.isFinite(audio.duration) ? audio.duration : 0;
      _emit('loaded', { duration: spotify.duration });
    });

    audio.addEventListener('timeupdate', () => {
      spotify.currentTime = audio.currentTime || 0;
      _emit('progress', {
        currentTime: spotify.currentTime,
        duration: spotify.duration
      });
    });

    audio.addEventListener('play', () => {
      spotify.isPlaying = true;
      _state.isPlaying = true;
      _emit('play', { trackId: spotify.currentTrackId });
      _scheduleSave();
    });

    audio.addEventListener('pause', () => {
      spotify.isPlaying = false;
      _state.isPlaying = false;
      _emit('pause', { trackId: spotify.currentTrackId });
      _scheduleSave();
    });

    audio.addEventListener('ended', () => {
      _handleTrackEnded();
    });

    audio.addEventListener('error', (e) => {
      spotify.lastError = e;
      _emit('error', { error: e, context: 'audio-element' });
    });

    spotify.audioEl = audio;
    return audio;
  }

  function _ensureAudioContext() {
    if (spotify.audioCtx) return spotify.audioCtx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;

    try {
      const ctx = new Ctx();
      const audio = _ensureAudioElement();
      const source = ctx.createMediaElementSource(audio);
      const gain = ctx.createGain();
      const analyser = ctx.createAnalyser();

      analyser.fftSize = SPOTIFY_VISUALIZER_FFT;
      analyser.smoothingTimeConstant = SPOTIFY_VISUALIZER_SMOOTHING;

      source.connect(gain);
      gain.connect(analyser);
      analyser.connect(ctx.destination);

      spotify.audioCtx = ctx;
      spotify.sourceNode = source;
      spotify.gainNode = gain;
      spotify.analyserNode = analyser;
      spotify.visualizerData = new Uint8Array(analyser.frequencyBinCount);

      return ctx;
    } catch (e) {
      console.warn('[Spotify] No se pudo crear AudioContext:', e);
      spotify.audioCtx = null;
      return null;
    }
  }

  function _resumeAudioContextIfNeeded() {
    const ctx = spotify.audioCtx;
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  }

  /* ─────────────────────────────────────────────────────────────
     ★ CARGA DE BIBLIOTECA (JSON + fallback)
  ───────────────────────────────────────────────────────────── */

  async function _loadLibraryFromJSON() {
    try {
      const res = await fetch(SPOTIFY_LIBRARY_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const cleaned = text.replace(/^\uFEFF/, '').trim();
      const json = JSON.parse(cleaned);
      if (!json || typeof json !== 'object') throw new Error('JSON inválido');
      if (!Array.isArray(json.tracks)) throw new Error('Sin tracks');
      return { json, source: 'json' };
    } catch (e) {
      console.warn('[Spotify] library.json no disponible, usando fallback:', e);
      return { json: SPOTIFY_DEFAULT_LIBRARY, source: 'fallback' };
    }
  }

  function _buildIndexes(library) {
    spotify.library = { tracks: [], playlists: [] };
    spotify.tracksById.clear();
    spotify.playlistsById.clear();
    spotify.artistsIndex.clear();
    spotify.albumsIndex.clear();

    // Tracks
    const tracks = [];
    (library.tracks || []).forEach((raw, i) => {
      const t = _normalizeTrack(raw, `track-${i}`);
      if (!t) return;
      if (spotify.tracksById.has(t.id)) return;
      tracks.push(t);
      spotify.tracksById.set(t.id, t);

      // Índice de artistas
      if (!spotify.artistsIndex.has(t.artist)) {
        spotify.artistsIndex.set(t.artist, {
          name: t.artist,
          tracks: [],
          albums: new Set(),
          cover: t.cover
        });
      }
      const artist = spotify.artistsIndex.get(t.artist);
      artist.tracks.push(t);
      artist.albums.add(`${t.artist}::${t.album}`);

      // Índice de álbumes
      const albumKey = `${t.artist}::${t.album}`;
      if (!spotify.albumsIndex.has(albumKey)) {
        spotify.albumsIndex.set(albumKey, {
          key: albumKey,
          name: t.album,
          artist: t.artist,
          year: t.year,
          cover: t.cover,
          tracks: []
        });
      }
      spotify.albumsIndex.get(albumKey).tracks.push(t);
    });
    spotify.library.tracks = tracks;

    // Playlists
    const playlists = [];
    (library.playlists || []).forEach((raw, i) => {
      const p = _normalizePlaylist(raw, `playlist-${i}`);
      if (!p) return;
      if (spotify.playlistsById.has(p.id)) return;
      // Filtrar trackIds que no existen
      p.trackIds = p.trackIds.filter(id => spotify.tracksById.has(id));
      playlists.push(p);
      spotify.playlistsById.set(p.id, p);
    });
    spotify.library.playlists = playlists;

    // Playlist virtual "Tus me gusta"
    const likedPlaylist = {
      id: '__liked__',
      name: 'Tus me gusta',
      description: 'Playlist automática',
      cover: null,
      color: '#1ed760',
      trackIds: [], // se rellena dinámicamente
      __virtual: 'liked'
    };
    spotify.playlistsById.set(likedPlaylist.id, likedPlaylist);
    spotify.library.playlists.unshift(likedPlaylist);

    _refreshLikedPlaylist();
  }

  function _refreshLikedPlaylist() {
    const likedPlaylist = spotify.playlistsById.get('__liked__');
    if (!likedPlaylist) return;
    likedPlaylist.trackIds = Array.from(spotify.likedIds)
      .filter(id => spotify.tracksById.has(id));
  }

  /* ─────────────────────────────────────────────────────────────
     ★ PLAYBACK — CORE
  ───────────────────────────────────────────────────────────── */

  function _fadeOut(ms = SPOTIFY_FADE_MS) {
    const audio = spotify.audioEl;
    if (!audio) return Promise.resolve();
    if (spotify.fadeTimer) {
      clearInterval(spotify.fadeTimer);
      spotify.fadeTimer = null;
    }
    return new Promise(resolve => {
      const startVol = audio.volume;
      const startTime = performance.now();
      const target = 0;
      spotify.fadeTimer = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const k = Math.min(1, elapsed / ms);
        audio.volume = startVol + (target - startVol) * k;
        if (k >= 1) {
          clearInterval(spotify.fadeTimer);
          spotify.fadeTimer = null;
          resolve();
        }
      }, 16);
    });
  }

  function _fadeIn(ms = SPOTIFY_FADE_MS) {
    const audio = spotify.audioEl;
    if (!audio) return Promise.resolve();
    const targetVol = _state.muted ? 0 : _state.volume;
    return new Promise(resolve => {
      const startVol = audio.volume;
      const startTime = performance.now();
      spotify.fadeTimer = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const k = Math.min(1, elapsed / ms);
        audio.volume = startVol + (targetVol - startVol) * k;
        if (k >= 1) {
          clearInterval(spotify.fadeTimer);
          spotify.fadeTimer = null;
          resolve();
        }
      }, 16);
    });
  }

  function _setAudioVolume(v, muted = false) {
    const audio = spotify.audioEl;
    if (!audio) return;
    audio.volume = muted ? 0 : Math.max(0, Math.min(1, v));
  }

  async function _playTrack(trackId, { autoplay = true, resetQueue = false } = {}) {
    const track = spotify.tracksById.get(trackId);
    if (!track) {
      _emit('error', { error: new Error('Track no encontrado'), context: 'play', trackId });
      return false;
    }

    _resumeAudioContextIfNeeded();
    const audio = _ensureAudioElement();
    _ensureAudioContext();

    // Fade out si ya hay algo sonando
    if (spotify.currentTrackId && spotify.currentTrackId !== trackId && !audio.paused) {
      await _fadeOut();
    }

    spotify.currentTrackId = trackId;
    _state.currentTrackId = trackId;
    spotify.currentTime = 0;
    _state.currentTime = 0;

    // Actualizar cola si hace falta
    if (resetQueue || !spotify.queue.includes(trackId)) {
      // Si no está en la cola, reconstruimos desde la biblioteca completa
      spotify.queue = spotify.library.tracks.map(t => t.id);
    }
    const idx = spotify.queue.indexOf(trackId);
    spotify.queueIndex = idx >= 0 ? idx : 0;
    _state.queue = spotify.queue.slice();
    _state.queueIndex = spotify.queueIndex;

    // Registrar reciente + contador de reproducciones
    _registerRecent(trackId);

    // Cargar fuente
    if (track.src) {
      audio.src = track.src;
      audio.currentTime = 0;
    } else {
      // Sin src: no podemos reproducir, pero avisamos y simulamos
      console.warn('[Spotify] Track sin src:', track);
      _emit('error', { error: new Error('Track sin src'), context: 'play', trackId });
    }

    // Volumen inicial
    _setAudioVolume(0, _state.muted);

    if (autoplay) {
      try {
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === 'function') {
          await playPromise;
        }
        await _fadeIn();
      } catch (e) {
        console.warn('[Spotify] No se pudo reproducir:', e);
        _emit('error', { error: e, context: 'play-promise', trackId });
      }
    }

    _emit('trackchange', {
      track,
      trackId,
      queueIndex: spotify.queueIndex,
      queueLength: spotify.queue.length
    });

    _scheduleSave();
    return true;
  }

  function _registerRecent(trackId) {
    const list = _state.recentIds.filter(id => id !== trackId);
    list.unshift(trackId);
    _state.recentIds = list.slice(0, SPOTIFY_RECENT_MAX);
    _state.playCount[trackId] = (_state.playCount[trackId] || 0) + 1;
    spotify.recentIds = _state.recentIds.slice();
    spotify.playCount = _state.playCount;
  }

  function _handleTrackEnded() {
    if (_state.repeat === 'one') {
      const audio = spotify.audioEl;
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
      return;
    }
    _emit('ended', { trackId: spotify.currentTrackId });

    // Avanzar
    const nextId = _computeNextTrackId();
    if (nextId) {
      _playTrack(nextId, { autoplay: true });
    } else {
      // Fin de la cola sin repeat
      spotify.isPlaying = false;
      _state.isPlaying = false;
      _emit('pause', { trackId: spotify.currentTrackId, reason: 'queue-ended' });
      _scheduleSave();
    }
  }

  function _computeNextTrackId() {
    const { queue, queueIndex } = spotify;
    if (queue.length === 0) return null;

    if (_state.shuffle) {
      // Random distinto al actual
      const candidates = queue.filter(id => id !== spotify.currentTrackId);
      if (candidates.length === 0) return queue[queueIndex] || null;
      return candidates[Math.floor(Math.random() * candidates.length)];
    }

    const nextIdx = queueIndex + 1;
    if (nextIdx < queue.length) return queue[nextIdx];
    if (_state.repeat === 'all') return queue[0];
    return null;
  }

  function _computePrevTrackId() {
    const { queue, queueIndex } = spotify;
    if (queue.length === 0) return null;

    if (_state.shuffle) {
      const candidates = queue.filter(id => id !== spotify.currentTrackId);
      if (candidates.length === 0) return queue[queueIndex] || null;
      return candidates[Math.floor(Math.random() * candidates.length)];
    }

    const prevIdx = queueIndex - 1;
    if (prevIdx >= 0) return queue[prevIdx];
    if (_state.repeat === 'all') return queue[queue.length - 1];
    return null;
  }

  /* ─────────────────────────────────────────────────────────────
     ★ API PÚBLICA
  ───────────────────────────────────────────────────────────── */

  const api = {

    /* ══════════════════════════════════════════════════════════
       INIT
    ══════════════════════════════════════════════════════════ */
    async init() {
      if (spotify.initPromise) return spotify.initPromise;

      spotify.initPromise = (async () => {
        try {
          // 1. Cargar estado persistido
          _loadState();

          // 2. Cargar biblioteca (JSON o fallback)
          const { json, source } = await _loadLibraryFromJSON();
          _buildIndexes(json);
          _state.libraryLoaded = true;
          _state.librarySource = source;
          spotify.mockMode = (source === 'fallback');

          // 3. Preferencias al runtime
          spotify.volume = _state.volume;
          spotify.muted = _state.muted;
          spotify.shuffle = _state.shuffle;
          spotify.repeat = _state.repeat;
          spotify.likedIds = new Set(_state.likedIds);
          spotify.customPlaylists = _state.customPlaylists.slice();
          spotify.recentIds = _state.recentIds.slice();
          spotify.playCount = Object.assign({}, _state.playCount);

          // 4. Audio element (sin ctx todavía, para evitar warnings)
          _ensureAudioElement();

          // 5. Restaurar última canción (pausada, sin autoplay)
          if (_state.currentTrackId && spotify.tracksById.has(_state.currentTrackId)) {
            spotify.currentTrackId = _state.currentTrackId;
            const audio = _ensureAudioElement();
            const track = spotify.tracksById.get(_state.currentTrackId);
            if (track && track.src) {
              audio.src = track.src;
              audio.currentTime = 0;
            }
            spotify.queue = Array.isArray(_state.queue) && _state.queue.length
              ? _state.queue.filter(id => spotify.tracksById.has(id))
              : spotify.library.tracks.map(t => t.id);
            spotify.queueIndex = Math.max(0, spotify.queue.indexOf(_state.currentTrackId));
          } else {
            // Por defecto: primera canción de la biblioteca (cargada pero pausada)
            if (spotify.library.tracks.length > 0) {
              const first = spotify.library.tracks[0];
              spotify.currentTrackId = first.id;
              spotify.queue = spotify.library.tracks.map(t => t.id);
              spotify.queueIndex = 0;
              const audio = _ensureAudioElement();
              if (first.src) {
                audio.src = first.src;
                audio.currentTime = 0;
              }
            }
          }

          spotify.initResolved = true;
          _emit('loaded', {
            trackCount: spotify.library.tracks.length,
            playlistCount: spotify.library.playlists.length,
            source
          });

          return true;
        } catch (e) {
          spotify.lastError = e;
          console.error('[Spotify] Falló init:', e);
          spotify.initResolved = true;
          _emit('error', { error: e, context: 'init' });
          return false;
        }
      })();

      return spotify.initPromise;
    },

    /* ══════════════════════════════════════════════════════════
       PLAYBACK
    ══════════════════════════════════════════════════════════ */

    play(trackId) {
      const id = trackId || spotify.currentTrackId;
      if (!id) return Promise.resolve(false);
      return _playTrack(id, { autoplay: true, resetQueue: true });
    },

    pause() {
      const audio = spotify.audioEl;
      if (!audio) return;
      audio.pause();
    },

    resume() {
      const audio = spotify.audioEl;
      if (!audio) return;
      if (!spotify.currentTrackId) return;
      _resumeAudioContextIfNeeded();
      _ensureAudioContext();
      audio.play().catch(e => {
        _emit('error', { error: e, context: 'resume' });
      });
    },

    togglePlayPause() {
      if (spotify.isPlaying) {
        api.pause();
      } else {
        api.resume();
      }
    },

    next() {
      const nextId = _computeNextTrackId();
      if (!nextId) {
        api.pause();
        return;
      }
      // Actualizar índice de cola
      spotify.queueIndex = spotify.queue.indexOf(nextId);
      _playTrack(nextId, { autoplay: true });
    },

    prev() {
      const audio = spotify.audioEl;
      // Si pasaron más de 3 segundos, reiniciar la canción actual
      if (audio && audio.currentTime > 3) {
        audio.currentTime = 0;
        spotify.currentTime = 0;
        _emit('progress', { currentTime: 0, duration: spotify.duration });
        return;
      }

      const prevId = _computePrevTrackId();
      if (!prevId) {
        if (audio) audio.currentTime = 0;
        return;
      }
      spotify.queueIndex = spotify.queue.indexOf(prevId);
      _playTrack(prevId, { autoplay: true });
    },

    seek(seconds) {
      const audio = spotify.audioEl;
      if (!audio) return;
      const dur = spotify.duration || (audio.duration || 0);
      const target = Math.max(0, Math.min(dur || 0, Number(seconds) || 0));
      try {
        audio.currentTime = target;
        spotify.currentTime = target;
        _emit('progress', { currentTime: target, duration: dur });
      } catch (e) {}
    },

    setVolume(value) {
      const v = Math.max(0, Math.min(1, Number(value)));
      _state.volume = v;
      spotify.volume = v;
      _setAudioVolume(v, _state.muted);
      _emit('volume', { volume: v, muted: _state.muted });
      _scheduleSave();
    },

    getVolume() {
      return _state.volume;
    },

    toggleMute() {
      _state.muted = !_state.muted;
      spotify.muted = _state.muted;
      _setAudioVolume(_state.volume, _state.muted);
      _emit('volume', { volume: _state.volume, muted: _state.muted });
      _scheduleSave();
      return _state.muted;
    },

    isMuted() {
      return _state.muted;
    },

    toggleShuffle() {
      _state.shuffle = !_state.shuffle;
      spotify.shuffle = _state.shuffle;
      _emit('shuffle', { shuffle: _state.shuffle });
      _scheduleSave();
      return _state.shuffle;
    },

    setShuffle(v) {
      _state.shuffle = !!v;
      spotify.shuffle = _state.shuffle;
      _emit('shuffle', { shuffle: _state.shuffle });
      _scheduleSave();
    },

    cycleRepeat() {
      const modes = SPOTIFY_REPEAT_MODES;
      const idx = modes.indexOf(_state.repeat);
      const next = modes[(idx + 1) % modes.length];
      _state.repeat = next;
      spotify.repeat = next;
      _emit('repeat', { repeat: next });
      _scheduleSave();
      return next;
    },

    setRepeat(mode) {
      if (!SPOTIFY_REPEAT_MODES.includes(mode)) return;
      _state.repeat = mode;
      spotify.repeat = mode;
      _emit('repeat', { repeat: mode });
      _scheduleSave();
    },

    /* ══════════════════════════════════════════════════════════
       GETTERS DE ESTADO / BIBLIOTECA
    ══════════════════════════════════════════════════════════ */

    isPlaying() {
      return spotify.isPlaying;
    },

    getCurrentTrack() {
      if (!spotify.currentTrackId) return null;
      return spotify.tracksById.get(spotify.currentTrackId) || null;
    },

    getCurrentTime() {
      return spotify.currentTime || 0;
    },

    getDuration() {
      return spotify.duration || 0;
    },

    getQueue() {
      return spotify.queue.slice();
    },

    getQueueIndex() {
      return spotify.queueIndex;
    },

    getAllTracks() {
      return spotify.library ? spotify.library.tracks.slice() : [];
    },

    getTrackById(id) {
      if (!id) return null;
      return spotify.tracksById.get(id) || null;
    },

    getPlaylists() {
      return spotify.library ? spotify.library.playlists.slice() : [];
    },

    getPlaylistById(id) {
      if (!id) return null;
      return spotify.playlistsById.get(id) || null;
    },

    getArtistByName(name) {
      if (!name) return null;
      const a = spotify.artistsIndex.get(name);
      if (!a) return null;
      return {
        name: a.name,
        cover: a.cover,
        albums: Array.from(a.albums),
        tracks: a.tracks.slice(),
        trackCount: a.tracks.length
      };
    },

    getAlbumByKey(key) {
      if (!key) return null;
      const alb = spotify.albumsIndex.get(key);
      if (!alb) return null;
      return {
        key: alb.key,
        name: alb.name,
        artist: alb.artist,
        year: alb.year,
        cover: alb.cover,
        tracks: alb.tracks.slice(),
        trackCount: alb.tracks.length
      };
    },

    getRecentTracks() {
      return _state.recentIds
        .map(id => spotify.tracksById.get(id))
        .filter(Boolean);
    },

    getMostPlayed(limit = 10) {
      const entries = Object.entries(_state.playCount)
        .map(([id, count]) => ({ track: spotify.tracksById.get(id), count }))
        .filter(e => e.track)
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
      return entries;
    },

    /* ══════════════════════════════════════════════════════════
       LIKES
    ══════════════════════════════════════════════════════════ */

    isLiked(trackId) {
      return spotify.likedIds.has(trackId);
    },

    getLikedIds() {
      return Array.from(spotify.likedIds);
    },

    getLikedTracks() {
      return Array.from(spotify.likedIds)
        .map(id => spotify.tracksById.get(id))
        .filter(Boolean);
    },

    toggleLike(trackId) {
      if (!trackId) return false;
      if (spotify.likedIds.has(trackId)) {
        spotify.likedIds.delete(trackId);
      } else {
        spotify.likedIds.add(trackId);
      }
      _state.likedIds = Array.from(spotify.likedIds);
      _refreshLikedPlaylist();
      _emit('liked', { trackId, liked: spotify.likedIds.has(trackId) });
      _scheduleSave();
      return spotify.likedIds.has(trackId);
    },

    /* ══════════════════════════════════════════════════════════
       PLAYLISTS CUSTOM
    ══════════════════════════════════════════════════════════ */

    getCustomPlaylists() {
      return spotify.customPlaylists.slice();
    },

    createPlaylist({ name, description = '', cover = null, color = '#1ed760', trackIds = [] } = {}) {
      if (spotify.customPlaylists.length >= SPOTIFY_CUSTOM_PLAYLISTS_MAX) {
        _emit('error', { error: new Error('Máximo de playlists alcanzado'), context: 'createPlaylist' });
        return null;
      }
      const cleanName = _safeStr(name).trim();
      if (!cleanName) return null;

      const id = spRandomId('pl');
      const playlist = {
        id,
        name: cleanName,
        description: _safeStr(description).trim(),
        cover: _safeStr(cover).trim() || null,
        color: _safeStr(color).trim() || '#1ed760',
        trackIds: Array.isArray(trackIds) ? trackIds.filter(id => spotify.tracksById.has(id)) : [],
        createdAt: Date.now()
      };
      spotify.customPlaylists.unshift(playlist);
      _state.customPlaylists = spotify.customPlaylists.slice();
      _emit('playlists-change', { action: 'create', playlist });
      _scheduleSave();
      return playlist;
    },

    updatePlaylist(id, patch = {}) {
      const idx = spotify.customPlaylists.findIndex(p => p.id === id);
      if (idx === -1) return null;
      const current = spotify.customPlaylists[idx];
      const next = Object.assign({}, current, patch);
      if (patch.name != null) next.name = _safeStr(patch.name).trim() || current.name;
      if (patch.description != null) next.description = _safeStr(patch.description).trim();
      if (patch.color != null) next.color = _safeStr(patch.color).trim() || current.color;
      if (patch.cover != null) next.cover = _safeStr(patch.cover).trim() || null;
      if (Array.isArray(patch.trackIds)) {
        next.trackIds = patch.trackIds
          .filter(tid => spotify.tracksById.has(tid))
          .slice(0, SPOTIFY_PLAYLIST_TRACKS_MAX);
      }
      next.updatedAt = Date.now();
      spotify.customPlaylists[idx] = next;
      _state.customPlaylists = spotify.customPlaylists.slice();
      _emit('playlists-change', { action: 'update', playlist: next });
      _scheduleSave();
      return next;
    },

    deletePlaylist(id) {
      const idx = spotify.customPlaylists.findIndex(p => p.id === id);
      if (idx === -1) return false;
      const [removed] = spotify.customPlaylists.splice(idx, 1);
      _state.customPlaylists = spotify.customPlaylists.slice();
      _emit('playlists-change', { action: 'delete', playlist: removed });
      _scheduleSave();
      return true;
    },

    addToPlaylist(playlistId, trackId) {
      const playlist = spotify.customPlaylists.find(p => p.id === playlistId);
      if (!playlist) return false;
      if (!spotify.tracksById.has(trackId)) return false;
      if (playlist.trackIds.includes(trackId)) return false;
      if (playlist.trackIds.length >= SPOTIFY_PLAYLIST_TRACKS_MAX) return false;
      playlist.trackIds.push(trackId);
      playlist.updatedAt = Date.now();
      _state.customPlaylists = spotify.customPlaylists.slice();
      _emit('playlists-change', { action: 'add-track', playlist, trackId });
      _scheduleSave();
      return true;
    },

    removeFromPlaylist(playlistId, trackId) {
      const playlist = spotify.customPlaylists.find(p => p.id === playlistId);
      if (!playlist) return false;
      const idx = playlist.trackIds.indexOf(trackId);
      if (idx === -1) return false;
      playlist.trackIds.splice(idx, 1);
      playlist.updatedAt = Date.now();
      _state.customPlaylists = spotify.customPlaylists.slice();
      _emit('playlists-change', { action: 'remove-track', playlist, trackId });
      _scheduleSave();
      return true;
    },

    /* ══════════════════════════════════════════════════════════
       SEARCH
    ══════════════════════════════════════════════════════════ */

    search(query) {
      const q = _safeStr(query).trim().toLowerCase();
      const result = { tracks: [], artists: [], albums: [], playlists: [] };

      if (!q) return result;

      // Tracks
      for (const track of spotify.library.tracks) {
        const haystack = `${track.title} ${track.artist} ${track.album}`.toLowerCase();
        if (haystack.includes(q)) result.tracks.push(track);
      }

      // Artistas
      for (const [name, data] of spotify.artistsIndex) {
        if (name.toLowerCase().includes(q)) {
          result.artists.push({
            name,
            cover: data.cover,
            trackCount: data.tracks.length
          });
        }
      }

      // Álbumes
      for (const alb of spotify.albumsIndex.values()) {
        const haystack = `${alb.name} ${alb.artist}`.toLowerCase();
        if (haystack.includes(q)) {
          result.albums.push({
            key: alb.key,
            name: alb.name,
            artist: alb.artist,
            year: alb.year,
            cover: alb.cover,
            trackCount: alb.tracks.length
          });
        }
      }

      // Playlists (custom + library)
      for (const pl of spotify.library.playlists) {
        if (pl.name.toLowerCase().includes(q)) result.playlists.push(pl);
      }
      for (const pl of spotify.customPlaylists) {
        if (pl.name.toLowerCase().includes(q)) result.playlists.push(pl);
      }

      return result;
    },

    /* ══════════════════════════════════════════════════════════
       VISUALIZER
    ══════════════════════════════════════════════════════════ */

    getAnalyserData() {
      if (!spotify.analyserNode || !spotify.visualizerData) return null;
      const data = new Uint8Array(spotify.analyserNode.frequencyBinCount);
      spotify.analyserNode.getByteFrequencyData(data);
      spotify.visualizerData = data;
      return data;
    },

    getAnalyserNode() {
      return spotify.analyserNode;
    },

    /* ══════════════════════════════════════════════════════════
       EVENTOS
    ══════════════════════════════════════════════════════════ */

    on(event, fn) {
      return _on(event, fn);
    },

    off(event, fn) {
      _off(event, fn);
    },

    emit(event, data) {
      _emit(event, data);
    },

    /* ══════════════════════════════════════════════════════════
       PERSISTENCIA
    ══════════════════════════════════════════════════════════ */

    flushState() {
      if (_saveTimer) {
        clearTimeout(_saveTimer);
        _saveTimer = null;
      }
      // Sincronizar runtime → state
      _state.currentTrackId = spotify.currentTrackId;
      _state.queue = spotify.queue.slice();
      _state.queueIndex = spotify.queueIndex;
      _state.volume = spotify.volume;
      _state.muted = spotify.muted;
      _state.shuffle = spotify.shuffle;
      _state.repeat = spotify.repeat;
      _state.likedIds = Array.from(spotify.likedIds);
      _state.customPlaylists = spotify.customPlaylists.slice();
      _state.recentIds = spotify.recentIds.slice();
      _state.playCount = Object.assign({}, spotify.playCount);
      _saveNow();
    },

    resetState() {
      try {
        localStorage.removeItem(SPOTIFY_STORAGE_KEY);
      } catch (e) {}
      _state = _clone(SPOTIFY_DEFAULT_STATE);
      spotify.likedIds = new Set();
      spotify.customPlaylists = [];
      spotify.recentIds = [];
      spotify.playCount = {};
      _refreshLikedPlaylist();
    },

    /* ══════════════════════════════════════════════════════════
       DEBUG
    ══════════════════════════════════════════════════════════ */

    isReady() {
      return spotify.initResolved;
    },

    isMockMode() {
      return spotify.mockMode;
    },

    getInternalState() {
      return _state;
    }
  };

  return api;
})();

// Exponer globalmente
window.SpotifyApp = SpotifyApp;

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY APP — UI (HTML, vistas, player, listeners)
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ HTML PRINCIPAL
═══════════════════════════════════════════════════════════════ */

function getSpotifyAppHTML() {
  const current = SpotifyApp.getCurrentTrack();
  const volumePct = Math.round(SpotifyApp.getVolume() * 100);
  const shuffle = spotify.shuffle;
  const repeat = spotify.repeat;
  const isPlaying = spotify.isPlaying;
  const isLiked = current ? SpotifyApp.isLiked(current.id) : false;

  return `
    <div class="sp-app" data-spotify-root>
      <!-- ═══ TOPBAR ═══ -->
      <header class="sp-topbar">
        <div class="sp-topbar-nav">
          <button class="sp-nav-btn" data-sp-nav="back" title="Atrás" aria-label="Atrás">
            <i data-lucide="chevron-left"></i>
          </button>
          <button class="sp-nav-btn" data-sp-nav="forward" title="Adelante" aria-label="Adelante">
            <i data-lucide="chevron-right"></i>
          </button>
        </div>

        <label class="sp-search">
          <i data-lucide="search" class="sp-search-icon"></i>
          <input
            type="search"
            class="sp-search-input"
            placeholder="¿Qué querés escuchar?"
            autocomplete="off"
            value="${spEscapeHtml(spotify.searchQuery || '')}"
          />
          <button class="sp-search-clear" data-sp-search-clear type="button" title="Limpiar" ${spotify.searchQuery ? '' : 'hidden'}>
            <i data-lucide="x"></i>
          </button>
        </label>

        <div class="sp-topbar-right">
          <button class="sp-topbar-btn" data-sp-action="queue" title="Cola de reproducción">
            <i data-lucide="list-music"></i>
          </button>
          <button class="sp-topbar-btn" data-sp-action="now-playing" title="Now Playing">
            <i data-lucide="disc-3"></i>
          </button>
          <div class="sp-avatar" title="Perfil">
            <span>N</span>
          </div>
        </div>
      </header>

      <!-- ═══ BODY: SIDEBAR + MAIN ═══ -->
      <div class="sp-body">
        <aside class="sp-sidebar">
          <div class="sp-sidebar-head">
            <button class="sp-sidebar-lib-btn" data-sp-nav="library" title="Tu biblioteca">
              <i data-lucide="library"></i>
              <span>Tu biblioteca</span>
            </button>
            <button class="sp-sidebar-create" data-sp-action="create-playlist" title="Crear playlist">
              <i data-lucide="plus"></i>
            </button>
          </div>

          <div class="sp-sidebar-filters">
            <button class="sp-chip ${spotify.libraryFilter === 'all' ? 'active' : ''}" data-sp-filter="all">Todo</button>
            <button class="sp-chip ${spotify.libraryFilter === 'playlists' ? 'active' : ''}" data-sp-filter="playlists">Playlists</button>
            <button class="sp-chip ${spotify.libraryFilter === 'albums' ? 'active' : ''}" data-sp-filter="albums">Álbumes</button>
            <button class="sp-chip ${spotify.libraryFilter === 'artists' ? 'active' : ''}" data-sp-filter="artists">Artistas</button>
          </div>

          <div class="sp-sidebar-scroll" data-sp-sidebar-scroll>
            ${renderSpotifySidebarLibrary()}
          </div>
        </aside>

        <main class="sp-main" data-sp-main>
          ${renderSpotifyMain()}
        </main>
      </div>

      <!-- ═══ PLAYER INFERIOR ═══ -->
      <footer class="sp-player" data-sp-player>
        <div class="sp-player-left">
          ${current ? `
            <img class="sp-player-cover" src="${spEscapeHtml(spGetTrackCover(current))}" alt="" />
            <div class="sp-player-info">
              <button class="sp-player-title-btn" data-sp-action="now-playing" title="${spEscapeHtml(current.title)}">
                <span class="sp-player-title">${spEscapeHtml(current.title)}</span>
              </button>
              <button class="sp-player-artist-btn" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(current.artist)}">
                <span class="sp-player-artist">${spEscapeHtml(current.artist)}</span>
              </button>
            </div>
            <button class="sp-player-like ${isLiked ? 'liked' : ''}" data-sp-action="like-current" title="${isLiked ? 'Quitar de Tus me gusta' : 'Agregar a Tus me gusta'}">
              <i data-lucide="heart"></i>
            </button>
          ` : `
            <div class="sp-player-cover sp-player-cover--empty"><i data-lucide="music"></i></div>
            <div class="sp-player-info">
              <span class="sp-player-title">Sin reproducción</span>
              <span class="sp-player-artist">Elegí un track para empezar</span>
            </div>
          `}
        </div>

        <div class="sp-player-center">
          <div class="sp-player-controls">
            <button class="sp-ctrl ${shuffle ? 'active' : ''}" data-sp-action="shuffle" title="Aleatorio">
              <i data-lucide="shuffle"></i>
            </button>
            <button class="sp-ctrl" data-sp-action="prev" title="Anterior">
              <i data-lucide="skip-back"></i>
            </button>
            <button class="sp-ctrl sp-ctrl-main" data-sp-action="play-pause" title="${isPlaying ? 'Pausar' : 'Reproducir'}">
              <i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>
            </button>
            <button class="sp-ctrl" data-sp-action="next" title="Siguiente">
              <i data-lucide="skip-forward"></i>
            </button>
            <button class="sp-ctrl sp-ctrl-repeat ${repeat !== 'off' ? 'active' : ''}" data-sp-action="repeat" data-sp-repeat="${repeat}" title="Repetir">
              <i data-lucide="${repeat === 'one' ? 'repeat-1' : 'repeat'}"></i>
            </button>
          </div>

          <div class="sp-player-progress">
            <span class="sp-time" data-sp-time="current">${spFormatTime(SpotifyApp.getCurrentTime())}</span>
            <div class="sp-progress" data-sp-progress>
              <div class="sp-progress-track">
                <div class="sp-progress-fill" data-sp-progress-fill style="width: 0%"></div>
                <div class="sp-progress-knob" data-sp-progress-knob style="left: 0%"></div>
              </div>
            </div>
            <span class="sp-time" data-sp-time="duration">${spFormatTime(current ? (current.duration || 0) : 0)}</span>
          </div>
        </div>

        <div class="sp-player-right">
          <button class="sp-ctrl" data-sp-action="now-playing" title="Now Playing">
            <i data-lucide="mic-2"></i>
          </button>
          <button class="sp-ctrl" data-sp-action="queue" title="Cola de reproducción">
            <i data-lucide="list-music"></i>
          </button>
          <button class="sp-ctrl" data-sp-action="devices" title="Dispositivos">
            <i data-lucide="monitor-speaker"></i>
          </button>
          <div class="sp-volume">
            <button class="sp-ctrl sp-volume-btn" data-sp-action="mute" title="${spotify.muted ? 'Activar sonido' : 'Silenciar'}">
              <i data-lucide="${spotify.muted ? 'volume-x' : (volumePct === 0 ? 'volume' : volumePct < 50 ? 'volume-1' : 'volume-2')}"></i>
            </button>
            <div class="sp-volume-track" data-sp-volume>
              <div class="sp-volume-fill" data-sp-volume-fill style="width: ${spotify.muted ? 0 : volumePct}%"></div>
            </div>
          </div>
          <button class="sp-ctrl" data-sp-action="fullscreen" title="Pantalla completa">
            <i data-lucide="maximize-2"></i>
          </button>
        </div>
      </footer>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   ★ SIDEBAR — Lista de biblioteca
═══════════════════════════════════════════════════════════════ */

function renderSpotifySidebarLibrary() {
  const filter = spotify.libraryFilter || 'all';
  const items = [];

  // Playlists virtuales fijas
  if (filter === 'all' || filter === 'playlists') {
    items.push({
      id: '__liked__',
      type: 'playlist',
      name: 'Tus me gusta',
      subtitle: `Playlist · ${SpotifyApp.getLikedTracks().length} canciones`,
      cover: null,
      color: '#1ed760',
      icon: 'heart'
    });

    // Playlists del library
    SpotifyApp.getPlaylists().forEach(pl => {
      if (pl.id === '__liked__') return;
      const cover = getPlaylistCover(pl);
      items.push({
        id: pl.id,
        type: 'playlist',
        name: pl.name,
        subtitle: `Playlist · ${pl.trackIds.length} canciones`,
        cover,
        color: pl.color || '#1ed760',
        icon: 'music'
      });
    });

    // Playlists custom
    SpotifyApp.getCustomPlaylists().forEach(pl => {
      const cover = getPlaylistCover(pl);
      items.push({
        id: pl.id,
        type: 'playlist',
        name: pl.name,
        subtitle: `Playlist tuya · ${pl.trackIds.length} canciones`,
        cover,
        color: pl.color || '#1ed760',
        icon: 'music',
        custom: true
      });
    });
  }

  if (filter === 'all' || filter === 'artists') {
    const artists = new Map();
    SpotifyApp.getAllTracks().forEach(t => {
      if (!artists.has(t.artist)) {
        artists.set(t.artist, { name: t.artist, cover: t.cover, count: 0 });
      }
      artists.get(t.artist).count++;
    });
    artists.forEach((a, name) => {
      items.push({
        id: name,
        type: 'artist',
        name: a.name,
        subtitle: `Artista · ${a.count} canciones`,
        cover: a.cover,
        color: '#a855f7',
        icon: 'user'
      });
    });
  }

  if (filter === 'all' || filter === 'albums') {
    const albums = new Map();
    SpotifyApp.getAllTracks().forEach(t => {
      const key = `${t.artist}::${t.album}`;
      if (!albums.has(key)) {
        albums.set(key, { key, name: t.album, artist: t.artist, cover: t.cover, count: 0 });
      }
      albums.get(key).count++;
    });
    albums.forEach((a) => {
      items.push({
        id: a.key,
        type: 'album',
        name: a.name,
        subtitle: `Álbum · ${a.artist} · ${a.count} canciones`,
        cover: a.cover,
        color: '#f59e0b',
        icon: 'disc-3'
      });
    });
  }

  if (items.length === 0) {
    return `
      <div class="sp-sidebar-empty">
        <i data-lucide="library"></i>
        <span>Nada por acá todavía</span>
      </div>
    `;
  }

  return items.map(item => {
    const coverHTML = item.cover
      ? `<img src="${spEscapeHtml(item.cover)}" alt="" loading="lazy" />`
      : `<div class="sp-sidebar-item-icon" style="background: ${item.color}22; color: ${item.color};">
           <i data-lucide="${item.icon || 'music'}"></i>
         </div>`;

    return `
      <button class="sp-sidebar-item" data-sp-nav="${item.type}" data-sp-id="${spEscapeHtml(item.id)}" data-sp-artist="${item.type === 'artist' ? spEscapeHtml(item.id) : ''}" data-sp-album="${item.type === 'album' ? spEscapeHtml(item.id) : ''}">
        <div class="sp-sidebar-item-cover ${item.type === 'artist' ? 'is-artist' : ''}">
          ${coverHTML}
        </div>
        <div class="sp-sidebar-item-meta">
          <span class="sp-sidebar-item-title">${spEscapeHtml(item.name)}</span>
          <span class="sp-sidebar-item-sub">${spEscapeHtml(item.subtitle)}</span>
        </div>
      </button>
    `;
  }).join('');
}

function getPlaylistCover(pl) {
  if (pl.cover) return pl.cover;
  if (pl.trackIds && pl.trackIds.length) {
    const first = SpotifyApp.getTrackById(pl.trackIds[0]);
    if (first) return spGetTrackCover(first);
  }
  return null;
}

/* ═══════════════════════════════════════════════════════════════
   ★ MAIN — Router de vistas
═══════════════════════════════════════════════════════════════ */

function renderSpotifyMain() {
  const view = spotify.view || 'home';
  switch (view) {
    case 'home':      return renderSpotifyHome();
    case 'playlist':  return renderSpotifyPlaylist(spotify.viewParams.playlistId);
    case 'artist':    return renderSpotifyArtist(spotify.viewParams.artistName);
    case 'album':     return renderSpotifyAlbum(spotify.viewParams.albumKey);
    case 'search':    return renderSpotifySearch();
    case 'liked':     return renderSpotifyLiked();
    case 'library':   return renderSpotifyLibrary();
    case 'queue':     return renderSpotifyQueue();
    default:          return renderSpotifyHome();
  }
}

/* ─── Vista: HOME ─── */

function renderSpotifyHome() {
  const allTracks = SpotifyApp.getAllTracks();
  const recent = SpotifyApp.getRecentTracks().slice(0, 8);
  const liked = SpotifyApp.getLikedTracks().slice(0, 6);

  // Destacar un álbum aleatorio de la biblioteca
  const albumsMap = new Map();
  allTracks.forEach(t => {
    const key = `${t.artist}::${t.album}`;
    if (!albumsMap.has(key)) albumsMap.set(key, { key, name: t.album, artist: t.artist, cover: t.cover });
  });
  const albums = Array.from(albumsMap.values());

  // Artista destacado (el más frecuente)
  const artistCounts = {};
  allTracks.forEach(t => { artistCounts[t.artist] = (artistCounts[t.artist] || 0) + 1; });
  const featuredArtistName = spGetMostFrequent(allTracks.map(t => t.artist));
  const featuredArtist = featuredArtistName ? SpotifyApp.getArtistByName(featuredArtistName) : null;

  const greeting = getSpotifyGreeting();

  return `
    <div class="sp-view sp-view-home">
      <div class="sp-hero">
        <div class="sp-hero-inner">
          <div class="sp-hero-text">
            <span class="sp-hero-kicker">${greeting}</span>
            <h1 class="sp-hero-title">Buenas vibras</h1>
            <p class="sp-hero-sub">${allTracks.length} canciones en tu biblioteca</p>
          </div>
          <div class="sp-hero-actions">
            <button class="sp-btn sp-btn-primary" data-sp-action="play-all">
              <i data-lucide="play"></i> Reproducir
            </button>
            <button class="sp-btn sp-btn-ghost" data-sp-action="shuffle-all">
              <i data-lucide="shuffle"></i> Aleatorio
            </button>
          </div>
        </div>
      </div>

      ${recent.length > 0 ? `
        <section class="sp-section">
          <div class="sp-section-head">
            <h2 class="sp-section-title">Escuchado recientemente</h2>
            <button class="sp-section-link" data-sp-nav="recent">Ver todo</button>
          </div>
          <div class="sp-cards-grid">
            ${recent.map(track => renderSpotifyCard(track)).join('')}
          </div>
        </section>
      ` : ''}

      ${liked.length > 0 ? `
        <section class="sp-section">
          <div class="sp-section-head">
            <h2 class="sp-section-title">Tus me gusta</h2>
            <button class="sp-section-link" data-sp-nav="liked">Ver todo</button>
          </div>
          <div class="sp-cards-grid">
            ${liked.map(track => renderSpotifyCard(track)).join('')}
          </div>
        </section>
      ` : ''}

      ${albums.length > 0 ? `
        <section class="sp-section">
          <div class="sp-section-head">
            <h2 class="sp-section-title">Álbumes en tu biblioteca</h2>
          </div>
          <div class="sp-cards-grid">
            ${albums.slice(0, 8).map(alb => `
              <button class="sp-card sp-card-album" data-sp-nav="album" data-sp-album="${spEscapeHtml(alb.key)}">
                <div class="sp-card-cover">
                  <img src="${spEscapeHtml(alb.cover)}" alt="" loading="lazy" />
                  <span class="sp-card-play" aria-hidden="true"><i data-lucide="play"></i></span>
                </div>
                <div class="sp-card-meta">
                  <span class="sp-card-title">${spEscapeHtml(alb.name)}</span>
                  <span class="sp-card-sub">${spEscapeHtml(alb.artist)}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}

      ${featuredArtist ? `
        <section class="sp-section">
          <div class="sp-section-head">
            <h2 class="sp-section-title">Artista destacado</h2>
          </div>
          <div class="sp-featured-artist">
            <div class="sp-featured-cover" style="background-image: url('${spEscapeHtml(featuredArtist.cover)}');">
              <button class="sp-featured-play" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(featuredArtist.name)}">
                <i data-lucide="play"></i>
              </button>
            </div>
            <div class="sp-featured-info">
              <span class="sp-featured-kicker">ARTISTA</span>
              <h3 class="sp-featured-name">${spEscapeHtml(featuredArtist.name)}</h3>
              <p class="sp-featured-meta">${featuredArtist.trackCount} canciones · ${featuredArtist.albums.length} álbumes</p>
              <button class="sp-btn sp-btn-ghost" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(featuredArtist.name)}">
                <i data-lucide="arrow-right"></i> Ver artista
              </button>
            </div>
          </div>
        </section>
      ` : ''}

      ${allTracks.length === 0 ? `
        <div class="sp-empty">
          <i data-lucide="music-2"></i>
          <h2>No hay música todavía</h2>
          <p>Agregá archivos MP3 en <code>assets/music/</code> y un <code>library.json</code> para empezar.</p>
        </div>
      ` : ''}
    </div>
  `;
}

function getSpotifyGreeting() {
  const h = new Date().getHours();
  if (h < 6) return 'Buenas noches';
  if (h < 12) return 'Buenos días';
  if (h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

/* ─── Card de track (grid) ─── */

function renderSpotifyCard(track) {
  const isCurrent = spotify.currentTrackId === track.id;
  return `
    <button class="sp-card ${isCurrent ? 'is-current' : ''}" data-sp-play="${spEscapeHtml(track.id)}">
      <div class="sp-card-cover">
        <img src="${spEscapeHtml(spGetTrackCover(track))}" alt="" loading="lazy" />
        <span class="sp-card-play" aria-hidden="true">
          <i data-lucide="${isCurrent && spotify.isPlaying ? 'pause' : 'play'}"></i>
        </span>
      </div>
      <div class="sp-card-meta">
        <span class="sp-card-title">${spEscapeHtml(track.title)}</span>
        <span class="sp-card-sub">${spEscapeHtml(track.artist)}</span>
      </div>
    </button>
  `;
}

/* ─── Vista: PLAYLIST ─── */

function renderSpotifyPlaylist(playlistId) {
  const playlist = SpotifyApp.getPlaylistById(playlistId);
  const custom = SpotifyApp.getCustomPlaylists().find(p => p.id === playlistId);

  const target = playlist || custom;
  if (!target) return renderSpotifyHome();

  const tracks = target.trackIds
    .map(id => SpotifyApp.getTrackById(id))
    .filter(Boolean);

  const totalDuration = tracks.reduce((sum, t) => sum + (t.duration || 0), 0);
  const cover = getPlaylistCover(target);

  return `
    <div class="sp-view sp-view-playlist">
      <header class="sp-playlist-header">
        <div class="sp-playlist-cover" style="--pl-color: ${target.color || '#1ed760'}">
          ${cover
            ? `<img src="${spEscapeHtml(cover)}" alt="" />`
            : `<i data-lucide="music-2"></i>`}
        </div>
        <div class="sp-playlist-info">
          <span class="sp-playlist-kicker">Playlist</span>
          <h1 class="sp-playlist-title">${spEscapeHtml(target.name)}</h1>
          ${target.description ? `<p class="sp-playlist-desc">${spEscapeHtml(target.description)}</p>` : ''}
          <div class="sp-playlist-meta">
            <span>${tracks.length} canciones</span>
            <span class="sp-dot">·</span>
            <span>${spFormatTotalDuration(totalDuration)}</span>
          </div>
          <div class="sp-playlist-actions">
            <button class="sp-btn sp-btn-primary sp-btn-large" data-sp-action="play-playlist" data-sp-playlist-id="${spEscapeHtml(target.id)}">
              <i data-lucide="play"></i> Reproducir
            </button>
            <button class="sp-btn sp-btn-ghost" data-sp-action="shuffle-playlist" data-sp-playlist-id="${spEscapeHtml(target.id)}">
              <i data-lucide="shuffle"></i> Aleatorio
            </button>
            ${custom ? `
              <button class="sp-btn-icon" data-sp-action="edit-playlist" data-sp-playlist-id="${spEscapeHtml(target.id)}" title="Editar">
                <i data-lucide="pencil"></i>
              </button>
              <button class="sp-btn-icon danger" data-sp-action="delete-playlist" data-sp-playlist-id="${spEscapeHtml(target.id)}" title="Eliminar">
                <i data-lucide="trash-2"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </header>

      ${renderSpotifyTrackList(tracks, { context: 'playlist', contextId: target.id })}
    </div>
  `;
}

/* ─── Vista: ARTISTA ─── */

function renderSpotifyArtist(artistName) {
  const artist = SpotifyApp.getArtistByName(artistName);
  if (!artist) return renderSpotifyHome();

  // Álbumes del artista
  const albumsMap = new Map();
  artist.tracks.forEach(t => {
    const key = `${t.artist}::${t.album}`;
    if (!albumsMap.has(key)) {
      albumsMap.set(key, { key, name: t.album, year: t.year, cover: t.cover, trackCount: 0 });
    }
    albumsMap.get(key).trackCount++;
  });
  const albums = Array.from(albumsMap.values());

  // Top tracks (por duración como heurística)
  const topTracks = artist.tracks.slice(0, 5);

  return `
    <div class="sp-view sp-view-artist">
      <header class="sp-artist-hero" style="--hero-cover: url('${spEscapeHtml(artist.cover)}');">
        <div class="sp-artist-hero-inner">
          <div class="sp-artist-avatar">
            <img src="${spEscapeHtml(artist.cover)}" alt="" />
          </div>
          <div class="sp-artist-info">
            <span class="sp-artist-kicker">Artista verificado</span>
            <h1 class="sp-artist-name">${spEscapeHtml(artist.name)}</h1>
            <div class="sp-artist-meta">
              <span>${artist.trackCount} canciones</span>
              <span class="sp-dot">·</span>
              <span>${artist.albums.length} álbumes</span>
            </div>
            <div class="sp-artist-actions">
              <button class="sp-btn sp-btn-primary" data-sp-action="play-artist" data-sp-artist="${spEscapeHtml(artist.name)}">
                <i data-lucide="play"></i> Reproducir
              </button>
              <button class="sp-btn sp-btn-ghost" data-sp-action="shuffle-artist" data-sp-artist="${spEscapeHtml(artist.name)}">
                <i data-lucide="shuffle"></i> Aleatorio
              </button>
            </div>
          </div>
        </div>
      </header>

      ${topTracks.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Populares</h2>
          ${renderSpotifyTrackList(topTracks, { context: 'artist', contextId: artist.name, compact: true })}
        </section>
      ` : ''}

      ${albums.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Discografía</h2>
          <div class="sp-cards-grid">
            ${albums.map(alb => `
              <button class="sp-card sp-card-album" data-sp-nav="album" data-sp-album="${spEscapeHtml(alb.key)}">
                <div class="sp-card-cover">
                  <img src="${spEscapeHtml(alb.cover)}" alt="" loading="lazy" />
                  <span class="sp-card-play" aria-hidden="true"><i data-lucide="play"></i></span>
                </div>
                <div class="sp-card-meta">
                  <span class="sp-card-title">${spEscapeHtml(alb.name)}</span>
                  <span class="sp-card-sub">${alb.year || ''} · ${alb.trackCount} canciones</span>
                </div>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}

/* ─── Vista: ÁLBUM ─── */

function renderSpotifyAlbum(albumKey) {
  const album = SpotifyApp.getAlbumByKey(albumKey);
  if (!album) return renderSpotifyHome();

  const totalDuration = album.tracks.reduce((sum, t) => sum + (t.duration || 0), 0);

  return `
    <div class="sp-view sp-view-album">
      <header class="sp-playlist-header">
        <div class="sp-playlist-cover">
          <img src="${spEscapeHtml(album.cover)}" alt="" />
        </div>
        <div class="sp-playlist-info">
          <span class="sp-playlist-kicker">Álbum</span>
          <h1 class="sp-playlist-title">${spEscapeHtml(album.name)}</h1>
          <p class="sp-playlist-desc">
            <button class="sp-inline-link" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(album.artist)}">${spEscapeHtml(album.artist)}</button>
            ${album.year ? ` · ${album.year}` : ''}
          </p>
          <div class="sp-playlist-meta">
            <span>${album.tracks.length} canciones</span>
            <span class="sp-dot">·</span>
            <span>${spFormatTotalDuration(totalDuration)}</span>
          </div>
          <div class="sp-playlist-actions">
            <button class="sp-btn sp-btn-primary sp-btn-large" data-sp-action="play-album" data-sp-album="${spEscapeHtml(album.key)}">
              <i data-lucide="play"></i> Reproducir
            </button>
            <button class="sp-btn sp-btn-ghost" data-sp-action="shuffle-album" data-sp-album="${spEscapeHtml(album.key)}">
              <i data-lucide="shuffle"></i> Aleatorio
            </button>
          </div>
        </div>
      </header>

      ${renderSpotifyTrackList(album.tracks, { context: 'album', contextId: album.key })}
    </div>
  `;
}

/* ─── Vista: BÚSQUEDA ─── */

function renderSpotifySearch() {
  const q = spotify.searchQuery || '';
  if (!q.trim()) {
    const history = spotify.searchHistory || [];
    return `
      <div class="sp-view sp-view-search">
        <h1 class="sp-view-title">Buscar</h1>
        ${history.length > 0 ? `
          <section class="sp-section">
            <h2 class="sp-section-title">Búsquedas recientes</h2>
            <div class="sp-chips-row">
              ${history.map(h => `
                <button class="sp-chip" data-sp-search-suggestion="${spEscapeHtml(h)}">
                  <i data-lucide="history"></i> ${spEscapeHtml(h)}
                </button>
              `).join('')}
            </div>
          </section>
        ` : ''}
        <div class="sp-empty">
          <i data-lucide="search"></i>
          <h2>Buscá algo</h2>
          <p>Encontrá canciones, artistas, álbumes o playlists.</p>
        </div>
      </div>
    `;
  }

  const results = SpotifyApp.search(q);
  const noResults = results.tracks.length === 0
    && results.artists.length === 0
    && results.albums.length === 0
    && results.playlists.length === 0;

  if (noResults) {
    return `
      <div class="sp-view sp-view-search">
        <h1 class="sp-view-title">Resultados para "${spEscapeHtml(q)}"</h1>
        <div class="sp-empty">
          <i data-lucide="search-x"></i>
          <h2>Sin resultados</h2>
          <p>Probá con otra búsqueda.</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="sp-view sp-view-search">
      <h1 class="sp-view-title">Resultados para "${spEscapeHtml(q)}"</h1>

      ${results.tracks.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Canciones</h2>
          ${renderSpotifyTrackList(results.tracks.slice(0, 8), { context: 'search', contextId: 'tracks', compact: true })}
        </section>
      ` : ''}

      ${results.artists.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Artistas</h2>
          <div class="sp-cards-grid">
            ${results.artists.slice(0, 6).map(a => `
              <button class="sp-card sp-card-artist" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(a.name)}">
                <div class="sp-card-cover is-round">
                  <img src="${spEscapeHtml(a.cover)}" alt="" loading="lazy" />
                </div>
                <div class="sp-card-meta">
                  <span class="sp-card-title">${spEscapeHtml(a.name)}</span>
                  <span class="sp-card-sub">Artista · ${a.trackCount} canciones</span>
                </div>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}

      ${results.albums.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Álbumes</h2>
          <div class="sp-cards-grid">
            ${results.albums.slice(0, 6).map(alb => `
              <button class="sp-card" data-sp-nav="album" data-sp-album="${spEscapeHtml(alb.key)}">
                <div class="sp-card-cover">
                  <img src="${spEscapeHtml(alb.cover)}" alt="" loading="lazy" />
                </div>
                <div class="sp-card-meta">
                  <span class="sp-card-title">${spEscapeHtml(alb.name)}</span>
                  <span class="sp-card-sub">${spEscapeHtml(alb.artist)}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}

      ${results.playlists.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Playlists</h2>
          <div class="sp-cards-grid">
            ${results.playlists.slice(0, 6).map(pl => {
              const cover = getPlaylistCover(pl);
              return `
                <button class="sp-card" data-sp-nav="playlist" data-sp-id="${spEscapeHtml(pl.id)}">
                  <div class="sp-card-cover">
                    ${cover
                      ? `<img src="${spEscapeHtml(cover)}" alt="" loading="lazy" />`
                      : `<div class="sp-card-cover-placeholder" style="background: ${pl.color || '#1ed760'}22;"><i data-lucide="music-2"></i></div>`}
                  </div>
                  <div class="sp-card-meta">
                    <span class="sp-card-title">${spEscapeHtml(pl.name)}</span>
                    <span class="sp-card-sub">Playlist · ${pl.trackIds.length} canciones</span>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}

/* ─── Vista: LIKED ─── */

function renderSpotifyLiked() {
  const tracks = SpotifyApp.getLikedTracks();
  const totalDuration = tracks.reduce((sum, t) => sum + (t.duration || 0), 0);

  return `
    <div class="sp-view sp-view-liked">
      <header class="sp-playlist-header sp-liked-header">
        <div class="sp-playlist-cover sp-liked-cover">
          <i data-lucide="heart"></i>
        </div>
        <div class="sp-playlist-info">
          <span class="sp-playlist-kicker">Playlist</span>
          <h1 class="sp-playlist-title">Tus me gusta</h1>
          <div class="sp-playlist-meta">
            <span>${tracks.length} canciones</span>
            <span class="sp-dot">·</span>
            <span>${spFormatTotalDuration(totalDuration)}</span>
          </div>
          ${tracks.length > 0 ? `
            <div class="sp-playlist-actions">
              <button class="sp-btn sp-btn-primary sp-btn-large" data-sp-action="play-liked">
                <i data-lucide="play"></i> Reproducir
              </button>
              <button class="sp-btn sp-btn-ghost" data-sp-action="shuffle-liked">
                <i data-lucide="shuffle"></i> Aleatorio
              </button>
            </div>
          ` : ''}
        </div>
      </header>

      ${tracks.length > 0
        ? renderSpotifyTrackList(tracks, { context: 'liked', contextId: '__liked__' })
        : `<div class="sp-empty">
            <i data-lucide="heart-off"></i>
            <h2>Aún no tenés favoritos</h2>
            <p>Tocá el corazón en cualquier canción para guardarla acá.</p>
          </div>`}
    </div>
  `;
}

/* ─── Vista: LIBRARY ─── */

function renderSpotifyLibrary() {
  const playlists = SpotifyApp.getPlaylists().filter(p => p.id !== '__liked__');
  const custom = SpotifyApp.getCustomPlaylists();
  const allPlaylists = [
    { id: '__liked__', name: 'Tus me gusta', color: '#1ed760', trackIds: SpotifyApp.getLikedIds(), __virtual: 'liked' },
    ...playlists,
    ...custom
  ];

  const allTracks = SpotifyApp.getAllTracks();
  const albumsMap = new Map();
  allTracks.forEach(t => {
    const key = `${t.artist}::${t.album}`;
    if (!albumsMap.has(key)) albumsMap.set(key, { key, name: t.album, artist: t.artist, cover: t.cover });
  });
  const albums = Array.from(albumsMap.values());

  const artists = new Map();
  allTracks.forEach(t => {
    if (!artists.has(t.artist)) artists.set(t.artist, { name: t.artist, cover: t.cover, count: 0 });
    artists.get(t.artist).count++;
  });

  return `
    <div class="sp-view sp-view-library">
      <h1 class="sp-view-title">Tu biblioteca</h1>

      ${allPlaylists.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Playlists</h2>
          <div class="sp-cards-grid">
            ${allPlaylists.map(pl => {
              const cover = getPlaylistCover(pl);
              return `
                <button class="sp-card" data-sp-nav="playlist" data-sp-id="${spEscapeHtml(pl.id)}">
                  <div class="sp-card-cover">
                    ${pl.id === '__liked__'
                      ? `<div class="sp-card-cover-liked"><i data-lucide="heart"></i></div>`
                      : (cover
                        ? `<img src="${spEscapeHtml(cover)}" alt="" loading="lazy" />`
                        : `<div class="sp-card-cover-placeholder" style="background: ${pl.color || '#1ed760'}22;"><i data-lucide="music-2"></i></div>`)}
                  </div>
                  <div class="sp-card-meta">
                    <span class="sp-card-title">${spEscapeHtml(pl.name)}</span>
                    <span class="sp-card-sub">Playlist · ${(pl.trackIds || []).length} canciones</span>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </section>
      ` : ''}

      ${albums.length > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Álbumes</h2>
          <div class="sp-cards-grid">
            ${albums.slice(0, 12).map(alb => `
              <button class="sp-card" data-sp-nav="album" data-sp-album="${spEscapeHtml(alb.key)}">
                <div class="sp-card-cover">
                  <img src="${spEscapeHtml(alb.cover)}" alt="" loading="lazy" />
                </div>
                <div class="sp-card-meta">
                  <span class="sp-card-title">${spEscapeHtml(alb.name)}</span>
                  <span class="sp-card-sub">${spEscapeHtml(alb.artist)}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}

      ${artists.size > 0 ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Artistas</h2>
          <div class="sp-cards-grid">
            ${Array.from(artists.values()).slice(0, 12).map(a => `
              <button class="sp-card sp-card-artist" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(a.name)}">
                <div class="sp-card-cover is-round">
                  <img src="${spEscapeHtml(a.cover)}" alt="" loading="lazy" />
                </div>
                <div class="sp-card-meta">
                  <span class="sp-card-title">${spEscapeHtml(a.name)}</span>
                  <span class="sp-card-sub">Artista · ${a.count} canciones</span>
                </div>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}

/* ─── Vista: QUEUE ─── */

function renderSpotifyQueue() {
  const queue = SpotifyApp.getQueue();
  const queueIndex = SpotifyApp.getQueueIndex();
  const upcoming = queue.slice(queueIndex + 1);

  return `
    <div class="sp-view sp-view-queue">
      <h1 class="sp-view-title">Cola de reproducción</h1>

      ${queueIndex >= 0 && queue[queueIndex] ? `
        <section class="sp-section">
          <h2 class="sp-section-title">Reproduciendo ahora</h2>
          ${renderSpotifyTrackList([SpotifyApp.getTrackById(queue[queueIndex])].filter(Boolean), { context: 'queue', compact: true, hidePlayedAt: true })}
        </section>
      ` : ''}

      <section class="sp-section">
        <h2 class="sp-section-title">Próximas (${upcoming.length})</h2>
        ${upcoming.length > 0
          ? renderSpotifyTrackList(upcoming.map(id => SpotifyApp.getTrackById(id)).filter(Boolean), { context: 'queue', compact: true })
          : `<p class="sp-empty-inline">No hay más canciones en la cola.</p>`}
      </section>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   ★ LISTA DE TRACKS (componente reutilizable)
═══════════════════════════════════════════════════════════════ */

function renderSpotifyTrackList(tracks, { context = '', contextId = '', compact = false } = {}) {
  if (!tracks || tracks.length === 0) {
    return `<div class="sp-empty-inline">Sin canciones.</div>`;
  }

  return `
    <div class="sp-tracklist ${compact ? 'is-compact' : ''}" data-sp-tracklist data-sp-context="${context}" data-sp-context-id="${spEscapeHtml(contextId)}">
      <div class="sp-tracklist-head">
        <span class="sp-track-num">#</span>
        <span class="sp-track-title-col">Título</span>
        <span class="sp-track-album-col">Álbum</span>
        <span class="sp-track-duration-col"><i data-lucide="clock-3"></i></span>
      </div>
      ${tracks.map((track, i) => renderSpotifyTrackRow(track, i, context, contextId)).join('')}
    </div>
  `;
}

function renderSpotifyTrackRow(track, index, context, contextId) {
  const isCurrent = spotify.currentTrackId === track.id;
  const isPlaying = isCurrent && spotify.isPlaying;
  const liked = SpotifyApiIsLiked(track.id);

  return `
    <div class="sp-track-row ${isCurrent ? 'is-current' : ''}" data-sp-track-id="${spEscapeHtml(track.id)}">
      <div class="sp-track-num">
        <span class="sp-track-index">${index + 1}</span>
        <button class="sp-track-play-btn" data-sp-play="${spEscapeHtml(track.id)}" title="${isPlaying ? 'Pausar' : 'Reproducir'}">
          <i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>
        </button>
      </div>
      <div class="sp-track-title">
        <img class="sp-track-cover" src="${spEscapeHtml(spGetTrackCover(track))}" alt="" loading="lazy" />
        <div class="sp-track-title-meta">
          <span class="sp-track-name ${isCurrent ? 'is-accent' : ''}">${spEscapeHtml(track.title)}</span>
          <button class="sp-track-artist-btn" data-sp-nav="artist" data-sp-artist="${spEscapeHtml(track.artist)}">
            ${spEscapeHtml(track.artist)}
          </button>
        </div>
      </div>
      <button class="sp-track-album" data-sp-nav="album" data-sp-album="${spEscapeHtml(`${track.artist}::${track.album}`)}">
        ${spEscapeHtml(track.album)}
      </button>
      <div class="sp-track-actions">
        <button class="sp-icon-btn sp-track-like ${liked ? 'liked' : ''}" data-sp-like="${spEscapeHtml(track.id)}" title="${liked ? 'Quitar de Tus me gusta' : 'Agregar a Tus me gusta'}">
          <i data-lucide="heart"></i>
        </button>
        <button class="sp-icon-btn sp-track-menu" data-sp-track-menu="${spEscapeHtml(track.id)}" title="Más opciones">
          <i data-lucide="more-horizontal"></i>
        </button>
      </div>
      <span class="sp-track-duration">${spFormatTime(track.duration || 0)}</span>
    </div>
  `;
}

/* Helper local para evitar referencia circular */
function SpotifyApiIsLiked(id) {
  return spotify.likedIds.has(id);
}

/* ═══════════════════════════════════════════════════════════════
   ★ SETUP DE LA APP — listeners completos
═══════════════════════════════════════════════════════════════ */

function setupSpotifyApp(win) {
  if (!win) return;

  // Registrar UI en el WeakMap para no duplicar listeners
  const ui = spotifyUIState.get(win) || {};
  if (ui.bound) {
    // Ya estaba bound; solo refrescamos el HTML
    refreshSpotifyWindow(win);
    return;
  }

  const root = win.querySelector('[data-spotify-root]');
  if (!root) return;

  ui.bound = true;
  ui.win = win;
  spotifyUIState.set(win, ui);

  // ─── Delegación de eventos ───
  root.addEventListener('click', (e) => handleSpotifyClick(e, win));

  // ─── Search input ───
  const searchInput = root.querySelector('.sp-search-input');
  if (searchInput) {
    const handler = spDebounce((value) => {
      spotify.searchQuery = value;
      if (value.trim()) {
        spotify.view = 'search';
        spotify.viewParams = { query: value };
        // Guardar en historial
        const hist = spotify.searchHistory || [];
        if (value.trim() && !hist.includes(value.trim())) {
          hist.unshift(value.trim());
          spotify.searchHistory = hist.slice(0, 10);
        }
      } else if (spotify.view === 'search') {
        spotify.view = 'home';
      }
      refreshSpotifyWindow(win);
    }, SPOTIFY_SEARCH_DEBOUNCE_MS);

    searchInput.addEventListener('input', (e) => handler(e.target.value));
    searchInput.addEventListener('focus', () => {
      // Expandir placeholder, etc.
    });
  }

  // ─── Barra de progreso (click para seek) ───
  const progress = root.querySelector('[data-sp-progress]');
  if (progress) {
    const onSeek = (e) => {
      const rect = progress.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const dur = SpotifyApp.getDuration() || (SpotifyApp.getCurrentTrack()?.duration || 0);
      SpotifyApp.seek(pct * dur);
    };
    let seeking = false;
    progress.addEventListener('mousedown', (e) => {
      seeking = true;
      onSeek(e);
      const onMove = (ev) => seeking && onSeek(ev);
      const onUp = () => {
        seeking = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  // ─── Slider de volumen ───
  const volumeTrack = root.querySelector('[data-sp-volume]');
  if (volumeTrack) {
    const onVol = (e) => {
      const rect = volumeTrack.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      SpotifyApp.setVolume(pct);
      if (pct > 0 && SpotifyApp.isMuted()) SpotifyApp.toggleMute();
    };
    let volDragging = false;
    volumeTrack.addEventListener('mousedown', (e) => {
      volDragging = true;
      onVol(e);
      const onMove = (ev) => volDragging && onVol(ev);
      const onUp = () => {
        volDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  // ─── Atajos locales de la app ───
  win.addEventListener('keydown', (e) => {
    if (e.target.closest('.sp-search-input')) return;
    const tag = e.target.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      SpotifyApp.togglePlayPause();
    } else if (e.key === 'ArrowRight' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      SpotifyApp.next();
    } else if (e.key === 'ArrowLeft' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      SpotifyApp.prev();
    } else if (e.key === 'ArrowUp' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      SpotifyApp.setVolume(Math.min(1, SpotifyApp.getVolume() + 0.05));
    } else if (e.key === 'ArrowDown' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      SpotifyApp.setVolume(Math.max(0, SpotifyApp.getVolume() - 0.05));
    } else if (e.key === 'f' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const input = win.querySelector('.sp-search-input');
      if (input) input.focus();
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const current = SpotifyApp.getCurrentTrack();
      if (current) SpotifyApp.toggleLike(current.id);
    }
  });

  // ─── Escuchar eventos del motor para refrescar la UI ───
  const unsubs = ui.unsubs || (ui.unsubs = []);
  unsubs.push(SpotifyApp.on('trackchange', () => refreshSpotifyWindow(win)));
  unsubs.push(SpotifyApp.on('play', () => refreshSpotifyPlayerBar(win)));
  unsubs.push(SpotifyApp.on('pause', () => refreshSpotifyPlayerBar(win)));
  unsubs.push(SpotifyApp.on('volume', () => refreshSpotifyVolumeUI(win)));
  unsubs.push(SpotifyApp.on('shuffle', () => refreshSpotifyPlayerBar(win)));
  unsubs.push(SpotifyApp.on('repeat', () => refreshSpotifyPlayerBar(win)));
  unsubs.push(SpotifyApp.on('liked', ({ trackId }) => {
    // Actualizar corazones en TODA la ventana
    win.querySelectorAll(`[data-sp-like="${trackId}"]`).forEach(btn => {
      const liked = SpotifyApp.isLiked(trackId);
      btn.classList.toggle('liked', liked);
      btn.title = liked ? 'Quitar de Tus me gusta' : 'Agregar a Tus me gusta';
    });
    // Actualizar el corazón del player
    const current = SpotifyApp.getCurrentTrack();
    if (current && current.id === trackId) {
      const playerLike = win.querySelector('[data-sp-action="like-current"]');
      if (playerLike) playerLike.classList.toggle('liked', SpotifyApp.isLiked(trackId));
    }
    // Sidebar "Tus me gusta"
    if (spotify.view === 'liked') refreshSpotifyWindow(win);
  }));
  unsubs.push(SpotifyApp.on('playlists-change', () => {
    refreshSpotifyWindow(win);
  }));

  // ─── Arrancar loop del visualizador (si hay barra) ───
  startSpotifyVisualizerLoop(win);

  // ─── Loop de progreso (por si timeupdate no dispara) ───
  const progressInterval = setInterval(() => {
    if (!win.isConnected) {
      clearInterval(progressInterval);
      return;
    }
    refreshSpotifyProgressUI(win);
  }, 250);
  ui.progressInterval = progressInterval;

  // ─── Refrescar por primera vez ───
  refreshSpotifyWindow(win);
}

/* ═══════════════════════════════════════════════════════════════
   ★ MANEJO DE CLICKS (delegación)
═══════════════════════════════════════════════════════════════ */

function handleSpotifyClick(e, win) {
  const target = e.target;

  // ─── Botón play/pause global ───
  const playPause = target.closest('[data-sp-action="play-pause"]');
  if (playPause) {
    e.stopPropagation();
    SpotifyApp.togglePlayPause();
    return;
  }

  // ─── Reproducir un track específico ───
  const playTrack = target.closest('[data-sp-play]');
  if (playTrack) {
    e.stopPropagation();
    const trackId = playTrack.dataset.spPlay;
    if (SpotifyApp.getCurrentTrack()?.id === trackId && spotify.isPlaying) {
      SpotifyApp.pause();
    } else if (SpotifyApp.getCurrentTrack()?.id === trackId && !spotify.isPlaying) {
      SpotifyApp.resume();
    } else {
      SpotifyApp.play(trackId);
    }
    return;
  }

  // ─── Like de un track ───
  const likeBtn = target.closest('[data-sp-like]');
  if (likeBtn) {
    e.stopPropagation();
    SpotifyApp.toggleLike(likeBtn.dataset.spLike);
    return;
  }

  // ─── Menú contextual de un track ───
  const menuBtn = target.closest('[data-sp-track-menu]');
  if (menuBtn) {
    e.stopPropagation();
    openSpotifyTrackMenu(win, menuBtn.dataset.spTrackMenu, menuBtn);
    return;
  }

  // ─── Navegación ───
  const nav = target.closest('[data-sp-nav]');
  if (nav) {
    e.stopPropagation();
    navigateSpotify(win, nav.dataset.spNav, nav);
    return;
  }

  // ─── Filtros de sidebar ───
  const filter = target.closest('[data-sp-filter]');
  if (filter) {
    e.stopPropagation();
    spotify.libraryFilter = filter.dataset.spFilter;
    refreshSpotifyWindow(win);
    return;
  }

  // ─── Limpiar búsqueda ───
  if (target.closest('[data-sp-search-clear]')) {
    e.stopPropagation();
    spotify.searchQuery = '';
    if (spotify.view === 'search') spotify.view = 'home';
    refreshSpotifyWindow(win);
    return;
  }

  // ─── Sugerencia de búsqueda (historial) ───
  const suggestion = target.closest('[data-sp-search-suggestion]');
  if (suggestion) {
    e.stopPropagation();
    spotify.searchQuery = suggestion.dataset.spSearchSuggestion;
    spotify.view = 'search';
    refreshSpotifyWindow(win);
    return;
  }

  // ─── Botón "back" del topbar ───
  if (target.closest('[data-sp-nav="back"]')) {
    e.stopPropagation();
    // volver a home
    spotify.view = 'home';
    spotify.viewParams = {};
    refreshSpotifyWindow(win);
    return;
  }

  // ─── Acciones ───
  const action = target.closest('[data-sp-action]');
  if (action) {
    e.stopPropagation();
    handleSpotifyAction(win, action.dataset.spAction, action);
    return;
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ NAVEGACIÓN INTERNA
═══════════════════════════════════════════════════════════════ */

function navigateSpotify(win, type, el) {
  switch (type) {
    case 'home':
      spotify.view = 'home';
      spotify.viewParams = {};
      break;

    case 'library':
      spotify.view = 'library';
      spotify.viewParams = {};
      break;

    case 'liked':
      spotify.view = 'liked';
      spotify.viewParams = {};
      break;

    case 'playlist':
      spotify.view = 'playlist';
      spotify.viewParams = { playlistId: el.dataset.spId };
      break;

    case 'artist':
      spotify.view = 'artist';
      spotify.viewParams = { artistName: el.dataset.spArtist || el.dataset.spId };
      break;

    case 'album':
      spotify.view = 'album';
      spotify.viewParams = { albumKey: el.dataset.spAlbum || el.dataset.spId };
      break;

    case 'search':
      spotify.view = 'search';
      spotify.viewParams = { query: spotify.searchQuery };
      break;

    case 'queue':
      spotify.view = 'queue';
      spotify.viewParams = {};
      break;

    case 'now-playing':
      // Abrir HUD overlay con el track actual (o hacer scroll al player)
      scrollSpotifyToPlayer(win);
      return;

    case 'recent':
      // Vista "recientes" → usar vista liked pero con recientes
      spotify.view = 'home';
      spotify.viewParams = {};
      break;

    default:
      spotify.view = 'home';
      spotify.viewParams = {};
  }

  refreshSpotifyWindow(win);
}

function scrollSpotifyToPlayer(win) {
  const player = win.querySelector('[data-sp-player]');
  if (player) player.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

/* ═══════════════════════════════════════════════════════════════
   ★ ACCIONES ESPECÍFICAS
═══════════════════════════════════════════════════════════════ */

function handleSpotifyAction(win, action, el) {
  switch (action) {
    case 'play-pause':
      SpotifyApp.togglePlayPause();
      break;

    case 'prev':
      SpotifyApp.prev();
      break;

    case 'next':
      SpotifyApp.next();
      break;

    case 'shuffle':
      SpotifyApp.toggleShuffle();
      break;

    case 'repeat':
      SpotifyApp.cycleRepeat();
      break;

    case 'mute':
      SpotifyApp.toggleMute();
      break;

    case 'like-current': {
      const current = SpotifyApp.getCurrentTrack();
      if (current) SpotifyApp.toggleLike(current.id);
      break;
    }

    case 'play-all': {
      const all = SpotifyApp.getAllTracks();
      if (all.length > 0) SpotifyApp.play(all[0].id);
      break;
    }

    case 'shuffle-all': {
      const all = SpotifyApp.getAllTracks();
      if (all.length === 0) break;
      const shuffled = spShuffleArray(all);
      SpotifyApp.setShuffle(true);
      SpotifyApp.play(shuffled[0].id);
      break;
    }

    case 'play-playlist': {
      const pl = SpotifyApp.getPlaylistById(el.dataset.spPlaylistId)
        || SpotifyApp.getCustomPlaylists().find(p => p.id === el.dataset.spPlaylistId);
      if (pl && pl.trackIds.length > 0) {
        spotify.queue = pl.trackIds.slice();
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(false);
        SpotifyApp.play(pl.trackIds[0]);
      }
      break;
    }

    case 'shuffle-playlist': {
      const pl = SpotifyApp.getPlaylistById(el.dataset.spPlaylistId)
        || SpotifyApp.getCustomPlaylists().find(p => p.id === el.dataset.spPlaylistId);
      if (pl && pl.trackIds.length > 0) {
        const shuffled = spShuffleArray(pl.trackIds);
        spotify.queue = shuffled;
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(true);
        SpotifyApp.play(shuffled[0]);
      }
      break;
    }

    case 'play-artist': {
      const artist = SpotifyApp.getArtistByName(el.dataset.spArtist);
      if (artist && artist.tracks.length > 0) {
        spotify.queue = artist.tracks.map(t => t.id);
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(false);
        SpotifyApp.play(artist.tracks[0].id);
      }
      break;
    }

    case 'shuffle-artist': {
      const artist = SpotifyApp.getArtistByName(el.dataset.spArtist);
      if (artist && artist.tracks.length > 0) {
        const shuffled = spShuffleArray(artist.tracks);
        spotify.queue = shuffled.map(t => t.id);
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(true);
        SpotifyApp.play(shuffled[0].id);
      }
      break;
    }

    case 'play-album': {
      const album = SpotifyApp.getAlbumByKey(el.dataset.spAlbum);
      if (album && album.tracks.length > 0) {
        spotify.queue = album.tracks.map(t => t.id);
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(false);
        SpotifyApp.play(album.tracks[0].id);
      }
      break;
    }

    case 'shuffle-album': {
      const album = SpotifyApp.getAlbumByKey(el.dataset.spAlbum);
      if (album && album.tracks.length > 0) {
        const shuffled = spShuffleArray(album.tracks);
        spotify.queue = shuffled.map(t => t.id);
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(true);
        SpotifyApp.play(shuffled[0].id);
      }
      break;
    }

    case 'play-liked': {
      const liked = SpotifyApp.getLikedTracks();
      if (liked.length > 0) {
        spotify.queue = liked.map(t => t.id);
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(false);
        SpotifyApp.play(liked[0].id);
      }
      break;
    }

    case 'shuffle-liked': {
      const liked = SpotifyApp.getLikedTracks();
      if (liked.length > 0) {
        const shuffled = spShuffleArray(liked);
        spotify.queue = shuffled.map(t => t.id);
        spotify.queueIndex = 0;
        SpotifyApp.setShuffle(true);
        SpotifyApp.play(shuffled[0].id);
      }
      break;
    }

    case 'queue':
      navigateSpotify(win, 'queue', el);
      break;

    case 'now-playing':
      scrollSpotifyToPlayer(win);
      break;

    case 'devices':
      showToast('Dispositivos', 'Esta PC · Nebula Audio', 'monitor-speaker');
      break;

    case 'fullscreen': {
      const root = win.querySelector('[data-spotify-root]');
      if (root) root.classList.toggle('is-fullscreen');
      break;
    }

    case 'create-playlist':
      openSpotifyCreatePlaylistModal(win);
      break;

    case 'edit-playlist':
      openSpotifyEditPlaylistModal(win, el.dataset.spPlaylistId);
      break;

    case 'delete-playlist': {
      const id = el.dataset.spPlaylistId;
      const pl = SpotifyApp.getCustomPlaylists().find(p => p.id === id);
      if (!pl) break;
      if (confirm(`¿Eliminar la playlist "${pl.name}"?`)) {
        SpotifyApp.deletePlaylist(id);
        navigateSpotify(win, 'home', el);
        showToast('Playlist eliminada', pl.name, 'trash-2');
      }
      break;
    }

    case 'add-to-playlist': {
      // El menú contextual ya maneja esto
      break;
    }

    default:
      console.warn('[Spotify] Acción no manejada:', action);
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ REFRESH PARCIAL DE LA UI
═══════════════════════════════════════════════════════════════ */

function refreshSpotifyWindow(win) {
  if (!win || !win.isConnected) return;

  const root = win.querySelector('[data-spotify-root]');
  if (!root) return;

  // Buscar el scroll actual del main
  const mainEl = root.querySelector('[data-sp-main]');
  const scrollTop = mainEl ? mainEl.scrollTop : 0;

  // Reemplazar todo el contenido de la app
  const temp = document.createElement('div');
  temp.innerHTML = getSpotifyAppHTML().trim();
  const newRoot = temp.firstElementChild;

  // Preservar foco del input de búsqueda
  const oldInput = root.querySelector('.sp-search-input');
  const hadFocus = oldInput && document.activeElement === oldInput;
  const oldSelStart = oldInput ? oldInput.selectionStart : null;
  const oldSelEnd = oldInput ? oldInput.selectionEnd : null;

  root.replaceWith(newRoot);

  // Re-bind de eventos (la delegación está en root, así que hay que re-hacerla)
  const ui = spotifyUIState.get(win);
  if (ui) {
    ui.bound = false;
    // Mantener unsubs
    const unsubs = ui.unsubs;
    const progressInterval = ui.progressInterval;
    spotifyUIState.delete(win);
    spotifyUIState.set(win, { bound: false, win, unsubs, progressInterval });
  }

  // Re-setup
  const newUi = spotifyUIState.get(win);
  if (newUi) newUi.bound = false;
  setupSpotifyAppLight(win);

  // Restaurar scroll
  const newMain = win.querySelector('[data-sp-main]');
  if (newMain && scrollTop > 0) newMain.scrollTop = scrollTop;

  // Restaurar foco
  if (hadFocus) {
    const newInput = win.querySelector('.sp-search-input');
    if (newInput) {
      newInput.focus();
      if (oldSelStart != null && oldSelEnd != null) {
        newInput.setSelectionRange(oldSelStart, oldSelEnd);
      }
    }
  }

  refreshIcons();
}

/**
 * Re-bind ligero: solo agrega delegación de clicks y search input.
 * Se usa después de replaceWith para no duplicar listeners de eventos del motor.
 */
function setupSpotifyAppLight(win) {
  const root = win.querySelector('[data-spotify-root]');
  if (!root) return;

  // Delegación de clicks (una sola vez por root)
  if (!root.dataset.boundClick) {
    root.dataset.boundClick = '1';
    root.addEventListener('click', (e) => handleSpotifyClick(e, win));
  }

  // Search input
  const searchInput = root.querySelector('.sp-search-input');
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = '1';
    const handler = spDebounce((value) => {
      spotify.searchQuery = value;
      if (value.trim()) {
        spotify.view = 'search';
        const hist = spotify.searchHistory || [];
        if (!hist.includes(value.trim())) {
          hist.unshift(value.trim());
          spotify.searchHistory = hist.slice(0, 10);
        }
      } else if (spotify.view === 'search') {
        spotify.view = 'home';
      }
      refreshSpotifyWindow(win);
    }, SPOTIFY_SEARCH_DEBOUNCE_MS);
    searchInput.addEventListener('input', (e) => handler(e.target.value));
  }

  // Progreso
  const progress = root.querySelector('[data-sp-progress]');
  if (progress && !progress.dataset.bound) {
    progress.dataset.bound = '1';
    const onSeek = (e) => {
      const rect = progress.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const dur = SpotifyApp.getDuration() || (SpotifyApp.getCurrentTrack()?.duration || 0);
      SpotifyApp.seek(pct * dur);
    };
    let seeking = false;
    progress.addEventListener('mousedown', (e) => {
      seeking = true;
      onSeek(e);
      const onMove = (ev) => seeking && onSeek(ev);
      const onUp = () => {
        seeking = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  // Volumen
  const vol = root.querySelector('[data-sp-volume]');
  if (vol && !vol.dataset.bound) {
    vol.dataset.bound = '1';
    const onVol = (e) => {
      const rect = vol.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      SpotifyApp.setVolume(pct);
      if (pct > 0 && SpotifyApp.isMuted()) SpotifyApp.toggleMute();
    };
    let dragging = false;
    vol.addEventListener('mousedown', (e) => {
      dragging = true;
      onVol(e);
      const onMove = (ev) => dragging && onVol(ev);
      const onUp = () => {
        dragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  // Refrescar barra de progreso y visualizador
  refreshSpotifyProgressUI(win);
  startSpotifyVisualizerLoop(win);
}

/**
 * Refresca solo el player inferior (más liviano que rebuild completo).
 */
function refreshSpotifyPlayerBar(win) {
  if (!win || !win.isConnected) return;
  const root = win.querySelector('[data-spotify-root]');
  if (!root) return;

  const player = root.querySelector('[data-sp-player]');
  if (!player) return;

  const current = SpotifyApp.getCurrentTrack();
  const isPlaying = spotify.isPlaying;
  const shuffle = spotify.shuffle;
  const repeat = spotify.repeat;
  const isLiked = current ? SpotifyApp.isLiked(current.id) : false;

  // Actualizar cover + info
  const cover = player.querySelector('.sp-player-cover');
  if (cover && current) {
    cover.src = spGetTrackCover(current);
  }

  const title = player.querySelector('.sp-player-title');
  if (title && current) title.textContent = current.title;

  const artist = player.querySelector('.sp-player-artist');
  if (artist && current) artist.textContent = current.artist;

  // Play/pause button
  const playBtn = player.querySelector('[data-sp-action="play-pause"]');
  if (playBtn) {
    playBtn.innerHTML = `<i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>`;
    playBtn.title = isPlaying ? 'Pausar' : 'Reproducir';
  }

  // Shuffle
  const shuffleBtn = player.querySelector('[data-sp-action="shuffle"]');
  if (shuffleBtn) shuffleBtn.classList.toggle('active', shuffle);

  // Repeat
  const repeatBtn = player.querySelector('[data-sp-action="repeat"]');
  if (repeatBtn) {
    repeatBtn.classList.toggle('active', repeat !== 'off');
    repeatBtn.dataset.spRepeat = repeat;
    repeatBtn.innerHTML = `<i data-lucide="${repeat === 'one' ? 'repeat-1' : 'repeat'}"></i>`;
  }

  // Like
  const likeBtn = player.querySelector('[data-sp-action="like-current"]');
  if (likeBtn) likeBtn.classList.toggle('liked', isLiked);

  // Mute icon
  refreshSpotifyVolumeUI(win);

  // Duraciones
  const durEl = player.querySelector('[data-sp-time="duration"]');
  if (durEl && current) durEl.textContent = spFormatTime(current.duration || 0);

  refreshIcons();
}

function refreshSpotifyVolumeUI(win) {
  const root = win.querySelector('[data-spotify-root]');
  if (!root) return;

  const volPct = Math.round(SpotifyApp.getVolume() * 100);
  const muted = SpotifyApp.isMuted();

  const fill = root.querySelector('[data-sp-volume-fill]');
  if (fill) fill.style.width = `${muted ? 0 : volPct}%`;

  const muteBtn = root.querySelector('[data-sp-action="mute"]');
  if (muteBtn) {
    const icon = muted ? 'volume-x' : (volPct === 0 ? 'volume' : volPct < 50 ? 'volume-1' : 'volume-2');
    muteBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    muteBtn.title = muted ? 'Activar sonido' : 'Silenciar';
  }

  refreshIcons();
}

function refreshSpotifyProgressUI(win) {
  const root = win.querySelector('[data-spotify-root]');
  if (!root) return;

  const cur = SpotifyApp.getCurrentTime();
  const dur = SpotifyApp.getDuration() || (SpotifyApp.getCurrentTrack()?.duration || 0);
  const pct = dur > 0 ? Math.min(100, (cur / dur) * 100) : 0;

  const fill = root.querySelector('[data-sp-progress-fill]');
  if (fill) fill.style.width = `${pct}%`;
  const knob = root.querySelector('[data-sp-progress-knob]');
  if (knob) knob.style.left = `${pct}%`;

  const curEl = root.querySelector('[data-sp-time="current"]');
  if (curEl) curEl.textContent = spFormatTime(cur);
  const durEl = root.querySelector('[data-sp-time="duration"]');
  if (durEl) durEl.textContent = spFormatTime(dur);

  // Actualizar íconos de play/pause en TODA la ventana
  const isPlaying = spotify.isPlaying;
  const currentId = spotify.currentTrackId;
  root.querySelectorAll('[data-sp-play]').forEach(btn => {
    const isThis = btn.dataset.spPlay === currentId;
    if (isThis) {
      const icon = isPlaying ? 'pause' : 'play';
      const svg = btn.querySelector('svg, i');
      if (svg && svg.getAttribute('data-lucide') !== icon) {
        btn.innerHTML = `<i data-lucide="${icon}"></i>`;
      }
    } else {
      const svg = btn.querySelector('svg, i');
      if (svg && svg.getAttribute('data-lucide') !== 'play') {
        btn.innerHTML = `<i data-lucide="play"></i>`;
      }
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   ★ VISUALIZADOR (Web Audio API)
═══════════════════════════════════════════════════════════════ */

function startSpotifyVisualizerLoop(win) {
  const ui = spotifyUIState.get(win);
  if (!ui) return;
  if (ui.visualizerRaf) return;

  const tick = () => {
    if (!win.isConnected) {
      ui.visualizerRaf = null;
      return;
    }
    updateSpotifyVisualizer(win);
    ui.visualizerRaf = requestAnimationFrame(tick);
  };
  ui.visualizerRaf = requestAnimationFrame(tick);
}

function updateSpotifyVisualizer(win) {
  // Buscar cualquier canvas de visualizer dentro de la ventana
  const canvases = win.querySelectorAll('.sp-visualizer canvas');
  if (canvases.length === 0) return;

  const data = SpotifyApp.getAnalyserData();
  canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width = canvas.clientWidth;
    const h = canvas.height = canvas.clientHeight;

    ctx.clearRect(0, 0, w, h);

    if (!data || data.length === 0) {
      // Sin audio: dibujar líneas base
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      const barW = w / SPOTIFY_VISUALIZER_BARS;
      for (let i = 0; i < SPOTIFY_VISUALIZER_BARS; i++) {
        ctx.fillRect(i * barW + 1, h - 2, barW - 2, 2);
      }
      return;
    }

    const step = Math.floor(data.length / SPOTIFY_VISUALIZER_BARS);
    const barW = w / SPOTIFY_VISUALIZER_BARS;

    for (let i = 0; i < SPOTIFY_VISUALIZER_BARS; i++) {
      const v = data[i * step] / 255;
      const barH = v * h * 0.9;
      const x = i * barW;
      const y = h - barH;

      const grad = ctx.createLinearGradient(0, h, 0, y);
      grad.addColorStop(0, 'rgba(30, 215, 96, 0.3)');
      grad.addColorStop(0.5, 'rgba(30, 215, 96, 0.7)');
      grad.addColorStop(1, '#1ed760');
      ctx.fillStyle = grad;

      ctx.fillRect(x + 1, y, barW - 2, barH);
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   ★ MENÚ CONTEXTUAL DE TRACK
═══════════════════════════════════════════════════════════════ */

let spotifyTrackMenuEl = null;

function openSpotifyTrackMenu(win, trackId, anchorEl) {
  closeSpotifyTrackMenu();

  const track = SpotifyApp.getTrackById(trackId);
  if (!track) return;

  const liked = SpotifyApiIsLiked(trackId);
  const customPlaylists = SpotifyApp.getCustomPlaylists();

  const menu = document.createElement('div');
  menu.className = 'sp-track-menu-popover';
  menu.innerHTML = `
    <div class="sp-track-menu-head">
      <img src="${spEscapeHtml(spGetTrackCover(track))}" alt="" />
      <div>
        <strong>${spEscapeHtml(track.title)}</strong>
        <small>${spEscapeHtml(track.artist)}</small>
      </div>
    </div>

    <button class="sp-track-menu-item" data-menu-action="play">
      <i data-lucide="play"></i> Reproducir ahora
    </button>
    <button class="sp-track-menu-item" data-menu-action="queue">
      <i data-lucide="list-plus"></i> Agregar a la cola
    </button>
    <button class="sp-track-menu-item ${liked ? 'active' : ''}" data-menu-action="like">
      <i data-lucide="heart"></i> ${liked ? 'Quitar de Tus me gusta' : 'Agregar a Tus me gusta'}
    </button>

    <div class="sp-track-menu-sep"></div>

    <button class="sp-track-menu-item" data-menu-action="add-to-playlist">
      <i data-lucide="folder-plus"></i> Agregar a playlist
    </button>
    <button class="sp-track-menu-item" data-menu-action="create-playlist">
      <i data-lucide="plus-square"></i> Crear playlist con esta canción
    </button>

    <div class="sp-track-menu-sep"></div>

    <button class="sp-track-menu-item" data-menu-action="go-album">
      <i data-lucide="disc-3"></i> Ir al álbum
    </button>
    <button class="sp-track-menu-item" data-menu-action="go-artist">
      <i data-lucide="user"></i> Ir al artista
    </button>
    <button class="sp-track-menu-item" data-menu-action="copy">
      <i data-lucide="link"></i> Copiar enlace
    </button>
  `;

  document.body.appendChild(menu);
  spotifyTrackMenuEl = menu;

  const rect = anchorEl.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  let left = rect.right + 6;
  let top = rect.top;
  if (left + menuRect.width + 10 > window.innerWidth) left = rect.left - menuRect.width - 6;
  if (top + menuRect.height + 10 > window.innerHeight) top = window.innerHeight - menuRect.height - 10;
  left = Math.max(10, left);
  top = Math.max(10, top);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  menu.addEventListener('click', (e) => {
    const item = e.target.closest('[data-menu-action]');
    if (!item) return;
    e.stopPropagation();
    handleSpotifyTrackMenuAction(win, item.dataset.menuAction, track);
    closeSpotifyTrackMenu();
  });

  // Cerrar al clickear fuera
  setTimeout(() => {
    const onOut = (e) => {
      if (!menu.contains(e.target)) {
        closeSpotifyTrackMenu();
        document.removeEventListener('mousedown', onOut);
      }
    };
    document.addEventListener('mousedown', onOut);
  }, 0);

  requestAnimationFrame(() => menu.classList.add('open'));
  refreshIcons();
}

function closeSpotifyTrackMenu() {
  if (spotifyTrackMenuEl) {
    spotifyTrackMenuEl.remove();
    spotifyTrackMenuEl = null;
  }
}

function handleSpotifyTrackMenuAction(win, action, track) {
  switch (action) {
    case 'play':
      SpotifyApp.play(track.id);
      break;

    case 'queue':
      if (!spotify.queue.includes(track.id)) {
        spotify.queue.splice(spotify.queueIndex + 1, 0, track.id);
        showToast('Agregado a la cola', track.title, 'list-plus');
      } else {
        showToast('Ya está en la cola', track.title, 'info');
      }
      break;

    case 'like':
      SpotifyApp.toggleLike(track.id);
      break;

    case 'add-to-playlist':
      openSpotifyAddToPlaylistModal(win, track.id);
      break;

    case 'create-playlist': {
      const pl = SpotifyApp.createPlaylist({
        name: `Mi playlist · ${new Date().toLocaleDateString()}`,
        description: 'Creada desde el menú contextual',
        trackIds: [track.id]
      });
      if (pl) {
        showToast('Playlist creada', pl.name, 'plus');
        refreshSpotifyWindow(win);
      }
      break;
    }

    case 'go-album':
      navigateSpotify(win, 'album', {
        dataset: { spAlbum: `${track.artist}::${track.album}` }
      });
      break;

    case 'go-artist':
      navigateSpotify(win, 'artist', {
        dataset: { spArtist: track.artist }
      });
      break;

    case 'copy': {
      const text = `${track.title} — ${track.artist}`;
      navigator.clipboard?.writeText(text).then(() => {
        showToast('Copiado', 'Enlace copiado al portapapeles.', 'clipboard-check');
      }).catch(() => {
        showToast('Copiado', text, 'clipboard');
      });
      break;
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ MODALES: CREAR / EDITAR PLAYLIST, AGREGAR A PLAYLIST
═══════════════════════════════════════════════════════════════ */

let spotifyPlaylistModalEl = null;

function openSpotifyCreatePlaylistModal(win, initialTrackIds = []) {
  closeSpotifyPlaylistModal();

  const modal = document.createElement('div');
  modal.className = 'sp-modal';
  modal.innerHTML = `
    <div class="sp-modal-dialog">
      <header class="sp-modal-header">
        <h2>Crear playlist</h2>
        <button class="sp-icon-btn" data-modal-close><i data-lucide="x"></i></button>
      </header>
      <div class="sp-modal-body">
        <label class="sp-field">
          <span>Nombre</span>
          <input type="text" data-field="name" placeholder="Mi playlist #1" maxlength="60" autofocus />
        </label>
        <label class="sp-field">
          <span>Descripción</span>
          <textarea data-field="description" placeholder="Contale al mundo de qué va..." maxlength="180" rows="3"></textarea>
        </label>
        <label class="sp-field">
          <span>Color</span>
          <input type="color" data-field="color" value="#1ed760" />
        </label>
      </div>
      <footer class="sp-modal-footer">
        <button class="sp-btn sp-btn-ghost" data-modal-close>Cancelar</button>
        <button class="sp-btn sp-btn-primary" data-modal-confirm>Crear</button>
      </footer>
    </div>
  `;

  document.body.appendChild(modal);
  spotifyPlaylistModalEl = modal;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSpotifyPlaylistModal();
    if (e.target.closest('[data-modal-close]')) closeSpotifyPlaylistModal();
    if (e.target.closest('[data-modal-confirm]')) {
      const name = modal.querySelector('[data-field="name"]').value.trim();
      const description = modal.querySelector('[data-field="description"]').value.trim();
      const color = modal.querySelector('[data-field="color"]').value;

      if (!name) {
        showToast('Falta el nombre', 'Escribí un nombre para la playlist.', 'alert-circle');
        return;
      }

      const pl = SpotifyApp.createPlaylist({ name, description, color, trackIds: initialTrackIds });
      if (pl) {
        showToast('Playlist creada', pl.name, 'plus');
        closeSpotifyPlaylistModal();
        refreshSpotifyWindow(win);
        navigateSpotify(win, 'playlist', { dataset: { spId: pl.id } });
      }
    }
  });

  requestAnimationFrame(() => modal.classList.add('open'));
  refreshIcons();
}

function openSpotifyEditPlaylistModal(win, playlistId) {
  const pl = SpotifyApp.getCustomPlaylists().find(p => p.id === playlistId);
  if (!pl) return;
  closeSpotifyPlaylistModal();

  const modal = document.createElement('div');
  modal.className = 'sp-modal';
  modal.innerHTML = `
    <div class="sp-modal-dialog">
      <header class="sp-modal-header">
        <h2>Editar playlist</h2>
        <button class="sp-icon-btn" data-modal-close><i data-lucide="x"></i></button>
      </header>
      <div class="sp-modal-body">
        <label class="sp-field">
          <span>Nombre</span>
          <input type="text" data-field="name" value="${spEscapeHtml(pl.name)}" maxlength="60" />
        </label>
        <label class="sp-field">
          <span>Descripción</span>
          <textarea data-field="description" maxlength="180" rows="3">${spEscapeHtml(pl.description || '')}</textarea>
        </label>
        <label class="sp-field">
          <span>Color</span>
          <input type="color" data-field="color" value="${spEscapeHtml(pl.color || '#1ed760')}" />
        </label>
      </div>
      <footer class="sp-modal-footer">
        <button class="sp-btn sp-btn-ghost" data-modal-close>Cancelar</button>
        <button class="sp-btn sp-btn-primary" data-modal-confirm>Guardar</button>
      </footer>
    </div>
  `;

  document.body.appendChild(modal);
  spotifyPlaylistModalEl = modal;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSpotifyPlaylistModal();
    if (e.target.closest('[data-modal-close]')) closeSpotifyPlaylistModal();
    if (e.target.closest('[data-modal-confirm]')) {
      const name = modal.querySelector('[data-field="name"]').value.trim();
      const description = modal.querySelector('[data-field="description"]').value.trim();
      const color = modal.querySelector('[data-field="color"]').value;

      if (!name) {
        showToast('Falta el nombre', 'Escribí un nombre para la playlist.', 'alert-circle');
        return;
      }

      SpotifyApp.updatePlaylist(playlistId, { name, description, color });
      showToast('Playlist actualizada', name, 'check');
      closeSpotifyPlaylistModal();
      refreshSpotifyWindow(win);
    }
  });

  requestAnimationFrame(() => modal.classList.add('open'));
  refreshIcons();
}

function closeSpotifyPlaylistModal() {
  if (spotifyPlaylistModalEl) {
    spotifyPlaylistModalEl.remove();
    spotifyPlaylistModalEl = null;
  }
}

function openSpotifyAddToPlaylistModal(win, trackId) {
  closeSpotifyPlaylistModal();

  const custom = SpotifyApp.getCustomPlaylists();
  const track = SpotifyApp.getTrackById(trackId);

  const modal = document.createElement('div');
  modal.className = 'sp-modal';
  modal.innerHTML = `
    <div class="sp-modal-dialog">
      <header class="sp-modal-header">
        <h2>Agregar a playlist</h2>
        <button class="sp-icon-btn" data-modal-close><i data-lucide="x"></i></button>
      </header>
      <div class="sp-modal-body">
        <div class="sp-modal-track-preview">
          <img src="${spEscapeHtml(spGetTrackCover(track))}" alt="" />
          <div>
            <strong>${spEscapeHtml(track.title)}</strong>
            <small>${spEscapeHtml(track.artist)}</small>
          </div>
        </div>

        ${custom.length === 0 ? `
          <p class="sp-empty-inline">No tenés playlists propias todavía.</p>
          <button class="sp-btn sp-btn-primary" data-modal-confirm-new>
            <i data-lucide="plus"></i> Crear nueva playlist
          </button>
        ` : `
          <ul class="sp-playlist-picker">
            ${custom.map(pl => `
              <li>
                <button class="sp-playlist-picker-item" data-playlist-pick="${spEscapeHtml(pl.id)}">
                  <span class="sp-playlist-picker-icon" style="background: ${pl.color}22; color: ${pl.color};">
                    <i data-lucide="music-2"></i>
                  </span>
                  <span class="sp-playlist-picker-name">${spEscapeHtml(pl.name)}</span>
                  <span class="sp-playlist-picker-count">${pl.trackIds.length}</span>
                </button>
              </li>
            `).join('')}
          </ul>
          <button class="sp-btn sp-btn-ghost" data-modal-confirm-new>
            <i data-lucide="plus"></i> Nueva playlist
          </button>
        `}
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  spotifyPlaylistModalEl = modal;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSpotifyPlaylistModal();
    if (e.target.closest('[data-modal-close]')) closeSpotifyPlaylistModal();

    const pick = e.target.closest('[data-playlist-pick]');
    if (pick) {
      const plId = pick.dataset.playlistPick;
      const ok = SpotifyApp.addToPlaylist(plId, trackId);
      if (ok) {
        showToast('Agregado', 'La canción se agregó a la playlist.', 'check');
      } else {
        showToast('Ya está', 'Esta canción ya estaba en la playlist.', 'info');
      }
      closeSpotifyPlaylistModal();
      refreshSpotifyWindow(win);
    }

    if (e.target.closest('[data-modal-confirm-new]')) {
      closeSpotifyPlaylistModal();
      openSpotifyCreatePlaylistModal(win, [trackId]);
    }
  });

  requestAnimationFrame(() => modal.classList.add('open'));
  refreshIcons();
}

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Wrappers globales (compatibilidad con el resto del sistema)
   ═══════════════════════════════════════════════════════════════

   El `index.html` y varios bloques del sistema llaman a funciones
   con nombres "viejos" que ya no existen en el motor nuevo.
   Estos wrappers mantienen la API pública y delegan en SpotifyApp.
*/

/* ─── Control de reproducción ─── */

function toggleMediaPlayback() {
  if (window.SpotifyApp) SpotifyApp.togglePlayPause();
}

function nextTrack() {
  if (window.SpotifyApp) SpotifyApp.next();
}

function previousTrack() {
  if (window.SpotifyApp) SpotifyApp.prev();
}

function playFirstTrack() {
  if (!window.SpotifyApp) return;
  const all = SpotifyApp.getAllTracks();
  if (all.length === 0) return;
  SpotifyApp.play(all[0].id);
}

/* ─── Volumen del sistema → Spotify ─── */
/* (setSystemVolume ya está definido en el BLOQUE 4 y delega en SpotifyApp) */

/* ─── Progress / Background (visual, sin estado) ─── */

function updatePlayerProgress() {
  const winIds = getInstancesOfApp('music');
  if (winIds.length === 0) return;
  winIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (win) refreshSpotifyProgressUI(win);
  });
}

function updatePlayerBackground() {
  const current = window.SpotifyApp ? SpotifyApp.getCurrentTrack() : null;
  if (!current) return;

  const cover = spGetTrackCover(current);
  const ccBg = document.getElementById('cc-media-bg');
  if (ccBg) ccBg.style.backgroundImage = `url("${cover}")`;
  const hudBg = document.getElementById('hud-media-bg');
  if (hudBg) hudBg.style.backgroundImage = `url("${cover}")`;
}

/* ─── Shuffle / Repeat sync global ─── */

function syncSpotifyShuffleRepeatUI() {
  if (!window.SpotifyApp) return;
  const shuffle = spotify.shuffle;
  const repeat = spotify.repeat;

  document.querySelectorAll('#cc-shuffle, #spot-shuffle, [data-sp-action="shuffle"]').forEach(el => {
    el.classList.toggle('active', shuffle);
  });
  document.querySelectorAll('#cc-repeat, #spot-repeat, [data-sp-action="repeat"]').forEach(el => {
    el.classList.toggle('active', repeat !== 'off');
    el.dataset.repeat = repeat;
  });
}

/* ─── Quick Center Player: stub (la lógica real vive en SpotifyApp) ─── */

function setupQuickCenterPlayer() {
  // No-op: la integración se hace en setupSpotifyIntegration (BLOQUE 4).
  // Este stub existe solo por compatibilidad con llamadas antiguas.
}

/* ─── Control Center + HUD: sincronización completa ─── */

/**
 * Refresca los reproductores globales (Control Center + HUD + Topbar).
 * Se llama desde setupSpotifyIntegration y desde los listeners de eventos.
 */
function updateSpotifyGlobalUI() {
  if (!window.SpotifyApp) return;
  const current = SpotifyApp.getCurrentTrack();

  // ─── Control Center ───
  const ccArt = document.getElementById('cc-media-art');
  const ccTitle = document.getElementById('cc-media-title');
  const ccArtist = document.getElementById('cc-media-artist');
  const ccBg = document.getElementById('cc-media-bg');
  const ccTotal = document.getElementById('cc-time-total');
  const ccCurrent = document.getElementById('cc-time-current');

  if (current) {
    const cover = spGetTrackCover(current);
    if (ccArt) ccArt.src = cover;
    if (ccTitle) ccTitle.textContent = current.title || '—';
    if (ccArtist) ccArtist.textContent = current.artist || '—';
    if (ccBg) ccBg.style.backgroundImage = `url("${cover}")`;
    if (ccTotal) ccTotal.textContent = spFormatTime(current.duration || 0);
    if (ccCurrent) ccCurrent.textContent = spFormatTime(SpotifyApp.getCurrentTime());
  } else {
    if (ccTitle) ccTitle.textContent = 'Sin reproducción';
    if (ccArtist) ccArtist.textContent = 'Elegí un track';
    if (ccBg) ccBg.style.backgroundImage = '';
    if (ccTotal) ccTotal.textContent = '0:00';
    if (ccCurrent) ccCurrent.textContent = '0:00';
  }

  // ─── HUD (gaming overlay) ───
  const hudArt = document.getElementById('hud-media-art');
  const hudTitle = document.getElementById('hud-media-title');
  const hudArtist = document.getElementById('hud-media-artist');
  const hudBg = document.getElementById('hud-media-bg');

  if (current) {
    const cover = spGetTrackCover(current);
    if (hudArt) hudArt.src = cover;
    if (hudTitle) hudTitle.textContent = current.title || '—';
    if (hudArtist) hudArtist.textContent = current.artist || '—';
    if (hudBg) hudBg.style.backgroundImage = `url("${cover}")`;
  }

  // ─── Topbar ───
  updateSpotifyTopbar();

  // ─── Estado de play/pause global ───
  updateSpotifyGlobalPlayState(spotify.isPlaying);

  // ─── Volumen ───
  updateSpotifyVolumeUI(spotify.volume, spotify.muted);

  // ─── Shuffle / repeat ───
  syncSpotifyShuffleRepeatUI();

  refreshIcons();
}

/* ─── Play/pause global (CC + HUD + Spotify app) ─── */

function updateSpotifyGlobalPlayState(isPlaying) {
  const iconName = isPlaying ? 'pause' : 'play';

  // Control Center
  const ccPlayBtn = document.getElementById('cc-play-btn');
  if (ccPlayBtn) {
    ccPlayBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
    ccPlayBtn.title = isPlaying ? 'Pausar' : 'Reproducir';
  }

  // HUD
  const hudPlayBtn = document.getElementById('hud-play-btn');
  if (hudPlayBtn) {
    hudPlayBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
    hudPlayBtn.title = isPlaying ? 'Pausar' : 'Reproducir';
  }

  // Topbar (botón mini)
  const tnpPlay = document.getElementById('tnp-play');
  if (tnpPlay) {
    tnpPlay.innerHTML = `<i data-lucide="${iconName}"></i>`;
  }

  // Eq dot del Control Center
  const dot = document.getElementById('cc-eq-dot');
  if (dot) dot.classList.toggle('paused', !isPlaying);

  // Topbar now playing: clase playing
  const tnp = document.getElementById('topbar-now-playing');
  if (tnp) tnp.classList.toggle('playing', isPlaying);

  refreshIcons();
}

/* ─── Volumen: sincronizar TODOS los sliders y labels globales ─── */

function updateSpotifyVolumeUI(volume, muted) {
  const pct = Math.round((muted ? 0 : volume) * 100);

  // Slider del Control Center
  const volSlider = document.getElementById('volume-slider');
  if (volSlider && Number(volSlider.value) !== pct) {
    volSlider.value = String(pct);
    syncSliderFill(volSlider);
  }

  // Labels del Quick Center y tray
  const quickVal = document.getElementById('quick-volume-value');
  if (quickVal) quickVal.textContent = `${pct}%`;
  const trayNum = document.getElementById('tray-volume-num');
  if (trayNum) trayNum.textContent = `${pct}%`;

  // Ícono del tray (mute / volumen)
  const trayVolIcon = document.querySelector('#sys-tray-btn .sys-tray .item[title="Volumen"] i');
  if (trayVolIcon) {
    const iconName = muted ? 'volume-x' : (pct === 0 ? 'volume' : pct < 50 ? 'volume-1' : 'volume-2');
    if (trayVolIcon.getAttribute('data-lucide') !== iconName) {
      trayVolIcon.setAttribute('data-lucide', iconName);
    }
  }

  // Sliders dentro de la app Spotify (por si hay varias ventanas)
  getInstancesOfApp('music').forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    refreshSpotifyVolumeUI(win);
  });

  refreshIcons();
}

/* ─── HUD: barra de progreso de reproducción ─── */

function updateHUDMediaInfo() {
  if (!gamerOverlayVisible) return;
  if (!window.SpotifyApp) return;

  const current = SpotifyApp.getCurrentTrack();
  const cur = SpotifyApp.getCurrentTime();
  const dur = SpotifyApp.getDuration() || (current ? current.duration : 0);
  const pct = dur > 0 ? Math.min(100, (cur / dur) * 100) : 0;

  const hudFill = document.getElementById('hud-progress-fill');
  const hudTime = document.getElementById('hud-progress-time');
  if (hudFill) hudFill.style.width = `${pct}%`;
  if (hudTime) hudTime.textContent = `${spFormatTime(cur)} / ${spFormatTime(dur)}`;

  // Media info del HUD
  if (current) {
    const hudArt = document.getElementById('hud-media-art');
    const hudTitle = document.getElementById('hud-media-title');
    const hudArtist = document.getElementById('hud-media-artist');
    if (hudArt) hudArt.src = spGetTrackCover(current);
    if (hudTitle) hudTitle.textContent = current.title || '—';
    if (hudArtist) hudArtist.textContent = current.artist || '—';
  }
}

/* ─── Progress: forzar actualización de la UI global cada 500ms ─── */
/* El motor ya emite 'progress' pero solo actuliza el Spotify app.
   Para el Control Center y el HUD, hacemos un poll liviano. */

(function startGlobalSpotifyProgressPoll() {
  let ticks = 0;
  setInterval(() => {
    if (!window.SpotifyApp) return;
    if (!spotify.isPlaying) return;

    const dur = SpotifyApp.getDuration() || (SpotifyApp.getCurrentTrack()?.duration || 0);
    const pct = dur > 0 ? Math.min(100, (SpotifyApp.getCurrentTime() / dur) * 100) : 0;

    // Control Center: tiempo actual
    const ccCurrent = document.getElementById('cc-time-current');
    if (ccCurrent) ccCurrent.textContent = spFormatTime(SpotifyApp.getCurrentTime());

    // Control Center: barra de progreso
    const ccFill = document.getElementById('cc-progress-fill');
    if (ccFill) ccFill.style.width = `${pct}%`;

    // ★ Topbar Now Playing: barra de progreso
    const tnpFill = document.getElementById('tnp-progress-fill');
    if (tnpFill) tnpFill.style.width = `${pct}%`;

    // HUD
    updateHUDMediaInfo();

    // Cada ~5s (10 ticks), refresh completo por si hubo cambios
    ticks++;
    if (ticks >= 10) {
      ticks = 0;
      // Por si cambió algo externamente
    }
  }, 500);
})();

/* ─── Suscripción de eventos para actualizar la UI global ─── */

(function bindSpotifyGlobalEvents() {
  if (!window.SpotifyApp) return;

  SpotifyApp.on('trackchange', () => {
    updateSpotifyGlobalUI();
    // Notificar (silencioso si HUD visible)
    if (!gamerOverlayVisible && !dndEnabled) {
      const current = SpotifyApp.getCurrentTrack();
      if (current) {
        addNotificationToHistory(
          `♪ ${current.title}`,
          `${current.artist}${current.album ? ' · ' + current.album : ''}`,
          'music'
        );
      }
    }
  });

  SpotifyApp.on('play', () => {
    updateSpotifyGlobalPlayState(true);
  });

  SpotifyApp.on('pause', () => {
    updateSpotifyGlobalPlayState(false);
  });

  SpotifyApp.on('volume', ({ volume, muted }) => {
    updateSpotifyVolumeUI(volume, muted);
  });

  SpotifyApp.on('shuffle', () => {
    syncSpotifyShuffleRepeatUI();
  });

  SpotifyApp.on('repeat', () => {
    syncSpotifyShuffleRepeatUI();
  });

  SpotifyApp.on('liked', () => {
    // Refrescar corazones en el Control Center si aplica
    // (el CC no muestra corazón actualmente, pero dejamos el hook)
  });

  SpotifyApp.on('error', ({ error, context }) => {
    // Silencioso en consola, toast solo si es error de reproducción
    if (context === 'play' || context === 'play-promise' || context === 'audio-element') {
      // Evitar spam: solo mostrar 1 por minuto
      const now = Date.now();
      if (!window.__lastSpotifyErrorToast || now - window.__lastSpotifyErrorToast > 60000) {
        window.__lastSpotifyErrorToast = now;
        showToast('Spotify', 'No se pudo reproducir la canción. Revisá los archivos MP3.', 'alert-circle');
      }
    }
  });
})();

/* ─── Atajos del Control Center (botones del HTML) ─── */

/**
 * El HTML del Control Center tiene onclick inline que llaman a:
 *   - previousTrack()
 *   - toggleMediaPlayback()
 *   - nextTrack()
 *   - toggleShuffle()  ← no existe, hay que crearlo
 *   - cycleRepeat()    ← no existe, hay que crearlo
 *
 * Los tres primeros ya están arriba como wrappers.
 * Los dos últimos los agregamos acá.
 */

function toggleShuffle() {
  if (window.SpotifyApp) SpotifyApp.toggleShuffle();
}

function cycleRepeat() {
  if (window.SpotifyApp) SpotifyApp.cycleRepeat();
}

/* ─── Botones del Control Center y HUD con id (agregar listeners) ─── */

document.addEventListener('DOMContentLoaded', () => {
  // Los botones del CC y del HUD ya tienen onclick inline en el HTML.
  // Pero por las dudas, si alguno tiene un ID y no onclick, lo bindeamos.
  // Este DOMContentLoaded corre después del principal (registro tardío),
  // así que solo actúa sobre elementos que ya existen.

  const ccShuffle = document.getElementById('cc-shuffle');
  if (ccShuffle && !ccShuffle.dataset.bound) {
    ccShuffle.dataset.bound = '1';
    ccShuffle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleShuffle();
    });
  }

  const ccRepeat = document.getElementById('cc-repeat');
  if (ccRepeat && !ccRepeat.dataset.bound) {
    ccRepeat.dataset.bound = '1';
    ccRepeat.addEventListener('click', (e) => {
      e.stopPropagation();
      cycleRepeat();
    });
  }

  // Botón de play/pause del CC
  const ccPlay = document.getElementById('cc-play-btn');
  if (ccPlay && !ccPlay.dataset.bound) {
    ccPlay.dataset.bound = '1';
    ccPlay.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMediaPlayback();
    });
  }

  // Botón de play/pause del HUD
  const hudPlay = document.getElementById('hud-play-btn');
  if (hudPlay && !hudPlay.dataset.bound) {
    hudPlay.dataset.bound = '1';
    hudPlay.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMediaPlayback();
    });
  }
});

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Comandos desde Nova AI
   ═══════════════════════════════════════════════════════════════
   Función helper que Nova puede llamar para controlar el reproductor
   por lenguaje natural. Se usa desde parseAndExecuteNovaAction.
*/

function handleSpotifyNovaCommand(query) {
  if (!window.SpotifyApp) return null;
  const q = String(query || '').toLowerCase().trim();

  // ─── Reproducir canción específica ───
  const playMatch = q.match(/(?:reproduc[ií]|pon[eé]?|toc[áa]|play)\s+(?:la\s+)?(?:canci[oó]n\s+)?["“']?(.+?)["”']?\s*(?:de\s+(.+))?$/i);
  if (playMatch) {
    const [, songQuery, artistQuery] = playMatch;
    const results = SpotifyApp.search(songQuery.trim());
    let target = results.tracks[0];

    // Si hay artista, filtrar
    if (target && artistQuery) {
      const filtered = results.tracks.filter(t =>
        t.artist.toLowerCase().includes(artistQuery.toLowerCase().trim())
      );
      if (filtered.length > 0) target = filtered[0];
    }

    if (target) {
      SpotifyApp.play(target.id);
      return {
        replyText: `Reproduciendo "${target.title}" de ${target.artist}.`,
        actionTaken: `Spotify: ${target.title}`
      };
    }
    return {
      replyText: `No encontré "${songQuery.trim()}" en tu biblioteca.`,
      actionTaken: null
    };
  }

  // ─── Pausar ───
  if (/\b(paus[áa]|pausar|deten[eé]|stop|par[áa])\b/.test(q) && /(m[uú]sica|canci[oó]n|spotify|reproducci[oó]n|track)/.test(q)) {
    SpotifyApp.pause();
    return {
      replyText: 'Música pausada.',
      actionTaken: 'Spotify: Pausa'
    };
  }

  // ─── Siguiente ───
  if (/\b(siguiente|next|salta|saltar|pr[oó]xima)\b/.test(q) && /(m[uú]sica|canci[oó]n|spotify|track)/.test(q)) {
    SpotifyApp.next();
    const next = SpotifyApp.getCurrentTrack();
    return {
      replyText: next ? `Reproduciendo "${next.title}" de ${next.artist}.` : 'Cambiando de canción...',
      actionTaken: 'Spotify: Siguiente'
    };
  }

  // ─── Anterior ───
  if (/\b(anterior|prev|volver|atr[áa]s)\b/.test(q) && /(m[uú]sica|canci[oó]n|spotify|track)/.test(q)) {
    SpotifyApp.prev();
    const prev = SpotifyApp.getCurrentTrack();
    return {
      replyText: prev ? `Reproduciendo "${prev.title}" de ${prev.artist}.` : 'Volviendo a la canción anterior...',
      actionTaken: 'Spotify: Anterior'
    };
  }

  // ─── Play / Resume genérico ───
  if (/\b(reproduc[ií]|pon[eé]?|toc[áa]|play|dale)\b/.test(q) && /(m[uú]sica|canci[oó]n|spotify|algo|track)/.test(q)) {
    if (SpotifyApp.getCurrentTrack() && SpotifyApp.isPlaying() === false) {
      SpotifyApp.resume();
      return { replyText: 'Reanudando la música.', actionTaken: 'Spotify: Play' };
    }
    const all = SpotifyApp.getAllTracks();
    if (all.length > 0) {
      SpotifyApp.play(all[0].id);
      return { replyText: `Reproduciendo "${all[0].title}" de ${all[0].artist}.`, actionTaken: 'Spotify: Play' };
    }
    return { replyText: 'No hay música en tu biblioteca todavía.', actionTaken: null };
  }

  // ─── Subir volumen ───
  if (/(sub[íi]|sube|aument[áa]|m[áa]s)\s*(el\s+)?volumen/.test(q) || /^volumen\s*\+\s*\d+/.test(q)) {
    const match = q.match(/\+\s*(\d+)/);
    const delta = match ? parseInt(match[1], 10) / 100 : 0.1;
    const newVol = Math.min(1, SpotifyApp.getVolume() + delta);
    SpotifyApp.setVolume(newVol);
    return {
      replyText: `Volumen al ${Math.round(newVol * 100)}%.`,
      actionTaken: 'Spotify: Volumen'
    };
  }

  // ─── Bajar volumen ───
  if (/(baj[áa]|baja|reduc[íi]|reduce|menos)\s*(el\s+)?volumen/.test(q) || /^volumen\s*-\s*\d+/.test(q)) {
    const match = q.match(/-\s*(\d+)/);
    const delta = match ? parseInt(match[1], 10) / 100 : 0.1;
    const newVol = Math.max(0, SpotifyApp.getVolume() - delta);
    SpotifyApp.setVolume(newVol);
    return {
      replyText: `Volumen al ${Math.round(newVol * 100)}%.`,
      actionTaken: 'Spotify: Volumen'
    };
  }

  // ─── Me gusta ───
  if (/(me gusta|like|favorit[oa]|guardar?)\s+(esta|la|esta canci[oó]n)/.test(q)) {
    const current = SpotifyApp.getCurrentTrack();
    if (current) {
      SpotifyApp.toggleLike(current.id);
      const liked = SpotifyApp.isLiked(current.id);
      return {
        replyText: liked ? `Agregué "${current.title}" a Tus me gusta.` : `Quité "${current.title}" de Tus me gusta.`,
        actionTaken: liked ? 'Spotify: Like' : 'Spotify: Unlike'
      };
    }
  }

  // ─── Aleatorio ───
  if (/(aleatorio|shuffle|random)/.test(q) && /(m[uú]sica|reproduc|spotify|poner)/.test(q)) {
    SpotifyApp.setShuffle(true);
    return { replyText: 'Modo aleatorio activado.', actionTaken: 'Spotify: Shuffle' };
  }

  // ─── Abrir Spotify ───
  if (/(abr[íi]|abre|open|mostrar)\s+spotify/.test(q) || /\bspotify\b/.test(q) && /(abr|mostrar|open)/.test(q)) {
    openApp('music');
    return { replyText: 'Abriendo Spotify.', actionTaken: 'Spotify: Abrir app' };
  }

  return null;
}

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Limpieza al cerrar ventana
   ═══════════════════════════════════════════════════════════════
   Cuando se cierra una ventana de Spotify, cancelamos los RAF
   y timers asociados a esa ventana para no dejar leaks.
*/

window.addEventListener('beforeunload', () => {
  if (window.SpotifyApp && typeof SpotifyApp.flushState === 'function') {
    SpotifyApp.flushState();
  }
});

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Decorador para closeApp (agrega cleanup)
   ═══════════════════════════════════════════════════════════════
   Envolvemos closeApp para que, cuando se cierra una ventana de
   Spotify, cancelemos el RAF del visualizador y el interval de
   progreso asociados a esa ventana.
*/

(function decorateSpotifyCloseApp() {
  if (typeof closeApp !== 'function') return;
  if (closeApp.__spotifyDecorated) return;

  const original = closeApp;
  window.closeApp = function(winId) {
    const entry = openWindows[winId];
    if (entry?.appId === 'music') {
      const win = entry.win;
      const ui = spotifyUIState.get(win);
      if (ui) {
        if (ui.visualizerRaf) cancelAnimationFrame(ui.visualizerRaf);
        if (ui.progressInterval) clearInterval(ui.progressInterval);
        if (Array.isArray(ui.unsubs)) {
          ui.unsubs.forEach(unsub => { try { unsub(); } catch (e) {} });
        }
        spotifyUIState.delete(win);
      }
    }
    return original.call(this, winId);
  };
  window.closeApp.__spotifyDecorated = true;
})();

/* ═══════════════════════════════════════════════════════════════
   ★ SPOTIFY — Fin del bloque de multimedia
   ═══════════════════════════════════════════════════════════════ */
   /* ═══════════════════════════════════════════════════════════════
   ★ PARTE 9A/12 — APPS: Nova AI + Files + Settings
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ APP: NOVA AI
═══════════════════════════════════════════════════════════════ */

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

function parseAndExecuteNovaAction(query) {
  const q = query.toLowerCase().trim();
  let actionTaken = null;
  let replyText = '';
  let actionBtnHTML = '';

  /* ─────────────────────────────────────────────────────────
     ★ SPOTIFY — Comandos de música (prioridad alta)
     Se intenta primero. Si retorna algo, se usa eso.
  ───────────────────────────────────────────────────────── */
  if (typeof handleSpotifyNovaCommand === 'function') {
    const spotifyResult = handleSpotifyNovaCommand(query);
    if (spotifyResult) {
      return {
        replyText: spotifyResult.replyText,
        actionTaken: spotifyResult.actionTaken,
        actionBtnHTML: spotifyResult.actionBtnHTML || ''
      };
    }
  }

  /* ─────────────────────────────────────────────────────────
     Temas
  ───────────────────────────────────────────────────────── */
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
  }

  /* ─────────────────────────────────────────────────────────
     Modo Juego
  ───────────────────────────────────────────────────────── */
  else if (q.includes('activa') && (q.includes('modo juego') || q.includes('game mode'))) {
    toggleGameMode(true);
    actionTaken = 'Modo Juego Activado';
    replyText = '¡Modo Juego iniciado! He liberado memoria RAM y ajustado el perfil de CPU/GPU al máximo rendimiento.';
  } else if (q.includes('desactiva') && (q.includes('modo juego') || q.includes('game mode'))) {
    toggleGameMode(false);
    actionTaken = 'Modo Juego Desactivado';
    replyText = 'Modo Juego apagado. El sistema ha vuelto al perfil energético estándar.';
  }

  /* ─────────────────────────────────────────────────────────
     Optimización
  ───────────────────────────────────────────────────────── */
  else if (q.includes('optimiza') || q.includes('limpia') || q.includes('ram') || q.includes('memoria') || q.includes('rendimiento')) {
    simulateRamBoost();
    actionTaken = 'RAM Optimizada y Cache Purgada';
    replyText = 'He ejecutado una limpieza profunda de procesos inactivos y cache. La memoria RAM quedó optimizada.';
  }

  /* ─────────────────────────────────────────────────────────
     VPN / Seguridad
  ───────────────────────────────────────────────────────── */
  else if (q.includes('vpn') || q.includes('conectar vpn')) {
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
  }

  /* ─────────────────────────────────────────────────────────
     Abrir apps
  ───────────────────────────────────────────────────────── */
  else if (q.includes('abre spotify') || q.includes('abrí spotify') || q.includes('abre musica') || q.includes('abre música')) {
    openApp('music');
    actionTaken = 'Spotify abierto';
    replyText = 'Abriendo Spotify. Podés pedirme que reproduzca algo en particular.';
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
  }

  /* ─────────────────────────────────────────────────────────
     Clima
  ───────────────────────────────────────────────────────── */
  else if (q.includes('clima') || q.includes('tiempo') || q.includes('temperatura')) {
    addWeatherWidget();
    actionTaken = 'Widget de Clima añadido';
    replyText = 'Añadí el widget de clima. Podés cambiar la ciudad desde el selector dentro del widget.';
  }

  /* ─────────────────────────────────────────────────────────
     Recomendaciones gamer
  ───────────────────────────────────────────────────────── */
  else if (q.includes('cyberpunk 2077') || q.includes('fps') || q.includes('consejos') || q.includes('juego') || q.includes('gamer')) {
    replyText = 'Para maximizar tus FPS y estabilidad en juegos exigentes te recomiendo:\n\n• Activar Modo Juego (fija frecuencia CPU en 4.95 GHz y libera RAM).\n• Habilitar el Gaming HUD (Alt+Z) para monitoreo de temperaturas.\n• Usar tema Cyberpunk de bajo consumo de sombreado.';
    actionBtnHTML = `<button class="nova-action-btn" type="button" onclick="applyGamerOptimization()"><i data-lucide="zap"></i> Aplicar Optimización Gamer (1-Clic)</button>`;
  }

  /* ─────────────────────────────────────────────────────────
     Saludos
  ───────────────────────────────────────────────────────── */
  else if (/^(hola|buenas|hey|buen d[ií]a)/.test(q)) {
    replyText = '¡Hola! Soy Nova AI, tu copiloto en Nebula OS. Puedo optimizar tu sistema, cambiar temas, poner música, abrir juegos y mucho más. ¿Qué querés configurar?';
  }

  /* ─────────────────────────────────────────────────────────
     Fallback
  ───────────────────────────────────────────────────────── */
  else {
    replyText = `Entendido. He analizado "${query}". Podés pedirme cosas como "Activa el modo juego", "Cambia al tema Cyberpunk", "Pon música" o "Reproducí Bocanada de Cerati".`;
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
    showToast('Voz a Acción', 'Simulando comando por voz: "Pon música y activá el modo juego"...', 'mic');
    setTimeout(() => {
      if (input) {
        input.value = 'Pon música y activá el modo juego';
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
   ★ APP: FILES (Explorador Inteligente)
═══════════════════════════════════════════════════════════════ */

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

/* Inicialización diferida del filesystem */
function initFileSystemIfNeeded() {
  if (!FILE_SYSTEM) {
    FILE_SYSTEM = loadFileSystem();
  }
}

function fsFindFolder(name, folder = FILE_SYSTEM) {
  if (!folder) return null;
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
  if (!folder || !folder.children) return null;
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
  if (!folder) return null;
  for (const child of folder.children || []) {
    if (child.name === name) return child;
    if (child.type === 'folder') {
      const result = fsFindItemByName(name, child);
      if (result) return result;
    }
  }
  return null;
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

function setupFiles(panel) {
  if (!panel) return;

  initFileSystemIfNeeded();

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

function searchFilesInSystem(query, folder = FILE_SYSTEM, trail = []) {
  if (!folder) return [];
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
/* ═══════════════════════════════════════════════════════════════
   ★ APP: SETTINGS (Panel de Ajustes)
═══════════════════════════════════════════════════════════════ */

/* ─── Render y navegación ─── */

function renderSettingsApp() {
  const settingsWinIds = getInstancesOfApp('settings');
  settingsWinIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;

    // Guardar posición de scroll antes de reemplazar
    const prevMain = content.querySelector('.settings-main');
    const prevNav = content.querySelector('.settings-nav');
    const scrollMain = prevMain ? prevMain.scrollTop : 0;
    const scrollNav = prevNav ? prevNav.scrollTop : 0;

    // Re-render
    content.innerHTML = getAppContent('settings');

    // Restaurar posición de scroll después de re-renderizar
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

/* ─── Shield: persistencia ─── */

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

/* ─── Shield: escaneo ─── */

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
              duration: 0,
              actions: [
                { id: 'open-center', label: 'Ver amenazas', icon: 'list-checks', variant: 'primary', onClick: () => { openApp('activity'); } },
                { id: 'dismiss', label: 'Ignorar' }
              ]
            },
            true
          );
          shieldState.threatsQuarantined += shieldState.threatsFound;

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

/* ─── Shield: HTML ─── */

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

/* ─── Shield: historial expandible ─── */

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

/* ─── Settings HTML: System + Gaming ─── */

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

/* ─── Designer: HTML ─── */

function getWidgetsGalleryHTML() {
  const hasGamingHub = desktopWidgets.some(w => w.type === 'gaming-hub');
  const hasNowPlaying = desktopWidgets.some(w => w.type === 'now-playing');
  const weatherCount = desktopWidgets.filter(w => w.type === 'weather').length;

  return `
    <div class="settings-section-label">Widgets de Escritorio</div>
    <div class="widgets-gallery-grid">
      <div class="widget-gallery-card ${hasGamingHub ? 'active' : ''}">
            <div class="widget-gallery-card ${hasNowPlaying ? 'active' : ''}">
        <div class="widget-gallery-preview">
          <div class="widget-gallery-preview-nowplaying">
            <div class="wg-np-cover">
              <i data-lucide="music"></i>
            </div>
            <div class="wg-np-meta">
              <span class="wg-np-title"></span>
              <span class="wg-np-artist"></span>
            </div>
            <div class="wg-np-progress">
              <span style="width: 45%;"></span>
            </div>
            <div class="wg-np-controls">
              <i data-lucide="skip-back"></i>
              <i data-lucide="play"></i>
              <i data-lucide="skip-forward"></i>
            </div>
          </div>
        </div>
        <div class="widget-gallery-info">
          <strong>${WIDGET_CATALOG['now-playing'].name}</strong>
          <small>${WIDGET_CATALOG['now-playing'].description}</small>
        </div>
        <div class="widget-gallery-action">
          <span class="widget-gallery-status"><span class="status-dot"></span>${hasNowPlaying ? 'Activo' : 'Inactivo'}</span>
          ${hasNowPlaying
            ? `<button class="widget-gallery-btn danger" type="button" onclick="removeNowPlayingWidget()"><i data-lucide="trash-2"></i> Quitar</button>`
            : `<button class="widget-gallery-btn" type="button" onclick="addNowPlayingWidget()"><i data-lucide="plus"></i> Agregar</button>`
          }
        </div>
      </div>
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

    <div class="settings-section-label">Efectos de Fondo</div>
    <div class="designer-controls-grid">
      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong style="display:flex; align-items:center; gap:6px;">
            <i data-lucide="sparkles" style="color:var(--accent);"></i> Parallax de Estrellas
          </strong>
          <small>Las estrellas del fondo se mueven con el mouse</small>
        </div>
        <button class="quick-switch ${starsParallaxEnabled ? 'active' : ''}"
                type="button"
                onclick="setStarsParallaxEnabled(!${starsParallaxEnabled})"
                aria-label="Toggle parallax">
          <span class="pill-switch-track"><span class="pill-switch-thumb"></span></span>
        </button>
      </div>

      <div class="designer-control-item">
        <div class="designer-control-info">
          <strong>Intensidad del Parallax</strong>
          <small>Sutil · Normal · Intenso</small>
        </div>
        <div class="designer-control-input">
          <input type="range" min="0.5" max="1.5" step="0.5"
                 value="${starsParallaxIntensity}"
                 oninput="setStarsParallaxIntensity(this.value)"
                 ${starsParallaxEnabled ? '' : 'disabled'}>
          <span id="designer-stars-intensity-val">${
            starsParallaxIntensity <= 0.7 ? 'Sutil'
            : starsParallaxIntensity <= 1.2 ? 'Normal'
            : 'Intenso'
          }</span>
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
    ${getAnimatedBgsGalleryHTML()}
  `;
}

function getDesignerSettingsHTML() {
  const subTab = settingsState.designerSubTab || 'styles';
  if (subTab === 'wallpapers') return getDesignerWallpapersHTML();
  return getDesignerStylesHTML();
}

/* ─── Updates: HTML y acciones ─── */

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

function toggleUpdatesHistoryItem(itemId) {
  updatesHistoryExpandedId = updatesHistoryExpandedId === itemId ? null : itemId;
  renderSettingsApp();
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
  ${updatesState.updateHistory.map((item, idx) => {
    const itemId = `hist-${item.version}`;
    const isExpanded = updatesHistoryExpandedId === itemId;
    const hasChangelog = Array.isArray(item.changelog) && item.changelog.length > 0;

    return `
      <div class="updates-history-item-expandable ${isExpanded ? 'expanded' : ''}"
           data-history-id="${itemId}">
        <div class="updates-history-item-header ${hasChangelog ? '' : 'no-expand'}"
             ${hasChangelog ? `onclick="toggleUpdatesHistoryItem('${itemId}')"` : ''}>
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
          ${hasChangelog ? `<i data-lucide="chevron-down" class="updates-history-chevron"></i>` : ''}
        </div>
        ${hasChangelog ? `
          <div class="updates-history-item-detail">
            <ul class="updates-history-changelog">
              ${item.changelog.map(change => `<li><i data-lucide="check"></i> ${escapeHtml(change)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  }).join('')}
    </div>    
  `;
}

/* ─── Settings Nav HTML ─── */

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
   ★ PARTE 9B-1/12 — APPS: Vault + Activity + Task Manager
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ APP: NEBULA VAULT
═══════════════════════════════════════════════════════════════ */

function getDefaultVaultEntries() {
  return [
    { id: 'vault-1', title: 'Netflix',  username: 'gamer@nebula.os',  password: 'N3bula#2026!Str0ng', url: 'https://netflix.com',             category: 'redes',   notes: 'Plan Premium 4K',  createdAt: Date.now() - 86400000 * 30 },
    { id: 'vault-2', title: 'Steam',    username: 'nebula_gamer',     password: 'St3am_Ultra$Pass',   url: 'https://store.steampowered.com',  category: 'gaming',  notes: 'Cuenta principal', createdAt: Date.now() - 86400000 * 25 },
    { id: 'vault-3', title: 'GitHub',   username: 'nebula-dev',       password: 'G1tHub@Dev_2026',    url: 'https://github.com',              category: 'trabajo', notes: '2FA activado',     createdAt: Date.now() - 86400000 * 20 },
    { id: 'vault-4', title: 'Gmail',    username: 'user@gmail.com',   password: 'MyM@il_Pr0t3ct',     url: 'https://mail.google.com',         category: 'email',   notes: 'Personal',         createdAt: Date.now() - 86400000 * 15 },
    { id: 'vault-5', title: 'Binance',  username: 'crypto_trader',    password: 'Bin@nce#Crypto!99',  url: 'https://binance.com',             category: 'bancos',  notes: 'Wallet principal', createdAt: Date.now() - 86400000 * 10 },
    { id: 'vault-6', title: 'Discord',  username: 'nebula#0001',      password: 'D1sc0rd_N1ght#',     url: 'https://discord.com',             category: 'redes',   notes: 'Servidor gaming',  createdAt: Date.now() - 86400000 * 5 }
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

/* ─── Lock timer ─── */

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

/* ─── HTML principal ─── */

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

function setupVaultApp(win) {
  if (!win) return;

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

/* ─── Acciones del Vault ─── */

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

/* ─── Modal: Entry ─── */

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

/* ─── Modal: Generator ─── */

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

/* ─── Modal: Master Password ─── */

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

/* ─── Vault: listeners globales ─── */

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
   ★ APP: CENTRO DE ACTIVIDAD
═══════════════════════════════════════════════════════════════ */

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

/* ─── HTML principal ─── */

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

/* ─── Interacciones ─── */

function setActivityFilter(filterId) {
  activityFilter = filterId;
  renderActivityApp();
}

function setActivitySearch(query) {
  activitySearchQuery = query;
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

  if (item.detail.actions) {
    item.detail.actions = [];
  }

  saveActivityLog();
  updateActivityDockBadge();
  renderActivityApp();

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

function setupActivityApp(win) {
  if (!win) return;
}

function openActivityFromShield() {
  const settingsWinIds = getInstancesOfApp('settings');
  settingsWinIds.forEach(winId => closeApp(winId));

  openApp('activity');
  showToast('Centro de Actividad', 'Abriendo historial de eventos del sistema.', 'list-checks');
}

/* ═══════════════════════════════════════════════════════════════
   ★ APP: ADMINISTRADOR DE TAREAS
═══════════════════════════════════════════════════════════════ */

function getTaskmgrPid(winId) {
  if (!taskmgrProcessPids[winId]) {
    taskmgrProcessPids[winId] = 1000 + Math.floor(Math.random() * 8000);
  }
  return taskmgrProcessPids[winId];
}

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

  // Procesos de sistema
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
      case 'name':   return a.name.localeCompare(b.name) * sortMult;
      case 'pid':    return (a.pid - b.pid) * sortMult;
      case 'cpu':    return (a.cpu - b.cpu) * sortMult;
      case 'ram':    return (a.ram - b.ram) * sortMult;
      case 'status': return a.status.localeCompare(b.status) * sortMult;
      default:       return 0;
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
   ★ PARTE 9B-2/12 — APPS: Game Library + VSCode + Browser
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ APP: BIBLIOTECA DE JUEGOS (Steam Library)
═══════════════════════════════════════════════════════════════ */

function loadGamelibState() {
  try {
    const raw = localStorage.getItem(GAMELIB_STORAGE_KEY);
    if (!raw) {
      gamelibGames = GAMELIB_GAMES.map(g => ({ ...g }));
      saveGamelibState();
      return;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      gamelibGames = GAMELIB_GAMES.map(g => ({ ...g }));
      saveGamelibState();
      return;
    }
    gamelibGames = GAMELIB_GAMES.map(baseGame => {
      const saved = parsed.find(g => g.id === baseGame.id);
      if (!saved) return { ...baseGame };
      return {
        ...baseGame,
        installed: saved.installed ?? baseGame.installed,
        favorite: saved.favorite ?? baseGame.favorite,
        hoursPlayed: saved.hoursPlayed ?? baseGame.hoursPlayed,
        lastPlayedAt: saved.lastPlayedAt ?? baseGame.lastPlayedAt,
        achievementsUnlocked: saved.achievementsUnlocked ?? baseGame.achievementsUnlocked
      };
    });
  } catch (e) {
    gamelibGames = GAMELIB_GAMES.map(g => ({ ...g }));
  }
}

function saveGamelibState() {
  try {
    localStorage.setItem(GAMELIB_STORAGE_KEY, JSON.stringify(gamelibGames));
  } catch (e) {}
}

function getGamelibGame(id) {
  return gamelibGames.find(g => g.id === id) || null;
}

function getGamelibFilteredGames() {
  let games = [...gamelibGames];

  switch (gamelibFilter) {
    case 'installed':
      games = games.filter(g => g.installed);
      break;
    case 'favorites':
      games = games.filter(g => g.favorite);
      break;
    case 'recent':
      games = games
        .filter(g => g.installed && g.lastPlayedAt)
        .sort((a, b) => (b.lastPlayedAt || 0) - (a.lastPlayedAt || 0));
      return games;
    case 'not-installed':
      games = games.filter(g => !g.installed);
      break;
  }

  if (gamelibSearchQuery) {
    const q = gamelibSearchQuery.toLowerCase();
    games = games.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.developer.toLowerCase().includes(q) ||
      g.genre.toLowerCase().includes(q)
    );
  }

  games.sort((a, b) => {
    if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
    const ta = a.lastPlayedAt || 0;
    const tb = b.lastPlayedAt || 0;
    return tb - ta;
  });

  return games;
}

function getGamelibAppHTML() {
  const cats = getGamelibCategories();
  const games = getGamelibFilteredGames();

  let playingBarHTML = '';
  if (gamelibPlayingSession) {
    const game = getGamelibGame(gamelibPlayingSession.gameId);
    if (game) {
      const elapsed = Math.floor((Date.now() - gamelibPlayingSession.startedAt) / 1000);
      const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const ss = String(elapsed % 60).padStart(2, '0');
      const iconHTML = game.cover
        ? `<img src="${game.cover}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" /><i data-lucide="gamepad-2" style="display:none;"></i>`
        : `<i data-lucide="gamepad-2"></i>`;

      playingBarHTML = `
        <div class="gamelib-playing-bar">
          <div class="gamelib-playing-bar-icon">${iconHTML}</div>
          <div class="gamelib-playing-bar-info">
            <strong>${escapeHtml(game.title)}</strong>
            <small>Sesión activa · ${mm}:${ss}</small>
          </div>
          <button class="gamelib-playing-bar-btn" type="button" onclick="stopGamelibGame()">
            <i data-lucide="square"></i> Detener
          </button>
        </div>
      `;
    }
  }

  const filtersHTML = `
    <button class="gamelib-filter-chip ${gamelibFilter === 'all' ? 'active' : ''}" onclick="setGamelibFilter('all')">
      <i data-lucide="layout-grid"></i> Todos <span class="filter-count">${cats.all}</span>
    </button>
    <button class="gamelib-filter-chip ${gamelibFilter === 'installed' ? 'active' : ''}" onclick="setGamelibFilter('installed')">
      <i data-lucide="check-circle-2"></i> Instalados <span class="filter-count">${cats.installed}</span>
    </button>
    <button class="gamelib-filter-chip ${gamelibFilter === 'favorites' ? 'active' : ''}" onclick="setGamelibFilter('favorites')">
      <i data-lucide="star"></i> Favoritos <span class="filter-count">${cats.favorites}</span>
    </button>
    <button class="gamelib-filter-chip ${gamelibFilter === 'recent' ? 'active' : ''}" onclick="setGamelibFilter('recent')">
      <i data-lucide="clock"></i> Recientes <span class="filter-count">${cats.recent}</span>
    </button>
    <button class="gamelib-filter-chip ${gamelibFilter === 'not-installed' ? 'active' : ''}" onclick="setGamelibFilter('not-installed')">
      <i data-lucide="download"></i> No instalados
    </button>
  `;

  let bodyHTML = '';
  if (games.length === 0) {
    bodyHTML = `
      <div class="gamelib-empty">
        <div class="gamelib-empty-icon"><i data-lucide="gamepad-2"></i></div>
        <strong>Sin juegos para mostrar</strong>
        <small>Probá con otro filtro o buscá algo distinto.</small>
      </div>
    `;
  } else {
    bodyHTML = `
      <div class="gamelib-grid">
        ${games.map(g => renderGamelibCardHTML(g)).join('')}
      </div>
    `;
  }

  const installedCount = cats.installed;
  const totalCount = cats.all;

  return `
    <div class="gamelib-app">
      ${playingBarHTML}

      <header class="gamelib-header">
        <div class="gamelib-header-left">
          <span class="gamelib-header-kicker">NEBULA GAMES LIBRARY</span>
          <h2 class="gamelib-header-title">Steam Library</h2>
          <div class="gamelib-header-sub">
            <strong>${totalCount}</strong> juegos · <strong>${installedCount}</strong> instalados · <strong>${cats.favorites}</strong> favoritos
          </div>
        </div>
        <div class="gamelib-header-actions">
          <button class="gamelib-action-btn" type="button" onclick="showToast('Tienda', 'La tienda de juegos se abriría en el navegador.', 'shopping-bag')">
            <i data-lucide="shopping-bag"></i> Tienda
          </button>
        </div>
      </header>

      <div class="gamelib-toolbar">
        <div class="gamelib-filters">${filtersHTML}</div>
        <label class="gamelib-search">
          <i data-lucide="search"></i>
          <input type="search"
                 placeholder="Buscar juego..."
                 value="${escapeHtml(gamelibSearchQuery)}"
                 oninput="setGamelibSearch(this.value)">
        </label>
      </div>

      <div class="gamelib-body">
        ${bodyHTML}
      </div>
    </div>
  `;
}

function renderGamelibCardHTML(game) {
  const isPlaying = gamelibPlayingSession?.gameId === game.id;

  const coverHTML = game.cover
    ? `<img src="${game.cover}" alt="${escapeHtml(game.title)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
       <div class="gamelib-cover-fallback" style="display:none; background: linear-gradient(135deg, ${game.color}33, ${game.color}11);">
         <span class="gamelib-cover-fallback-emoji">${game.emoji}</span>
       </div>`
    : `<div class="gamelib-cover-fallback" style="background: linear-gradient(135deg, ${game.color}33, ${game.color}11);">
         <span class="gamelib-cover-fallback-emoji">${game.emoji}</span>
       </div>`;

  const badgesHTML = `
    <div class="gamelib-cover-badges">
      <div style="display:flex; flex-direction:column; gap:4px;">
        ${game.favorite ? '<span class="gamelib-badge favorite"><i data-lucide="star"></i> FAV</span>' : ''}
        ${isPlaying ? '<span class="gamelib-badge playing"><i data-lucide="play"></i> JUGANDO</span>' : ''}
      </div>
      ${!game.installed ? '<span class="gamelib-badge not-installed"><i data-lucide="download"></i> NO INSTALADO</span>' : ''}
    </div>
  `;

  const overlayHTML = game.installed ? `
    <div class="gamelib-cover-overlay">
      <span class="gamelib-cover-play">
        <i data-lucide="play"></i> JUGAR
      </span>
      <span class="gamelib-cover-hours">${formatGameHours(game.hoursPlayed)}</span>
    </div>
  ` : '';

  return `
    <button class="gamelib-card ${isPlaying ? 'is-playing' : ''}"
            type="button"
            style="--game-accent: ${game.color};"
            onclick="openGamelibGameModal('${game.id}')">
      <div class="gamelib-cover">
        ${coverHTML}
        ${badgesHTML}
        ${overlayHTML}
      </div>
      <div class="gamelib-info">
        <div class="gamelib-info-title">${escapeHtml(game.title)}</div>
        <div class="gamelib-info-dev">${escapeHtml(game.developer)}</div>
        <div class="gamelib-info-meta">
          <span class="gamelib-info-rating"><i data-lucide="star"></i> ${game.rating}</span>
          <span class="gamelib-info-lastplayed">${game.installed ? getGamelibLastPlayedLabel(game) : '—'}</span>
        </div>
      </div>
    </button>
  `;
}

function setGamelibFilter(filterId) {
  gamelibFilter = filterId;
  renderGamelibApp();
}

function setGamelibSearch(query) {
  gamelibSearchQuery = query;
  const body = document.querySelector('.gamelib-body');
  if (!body) return;
  const games = getGamelibFilteredGames();
  if (games.length === 0) {
    body.innerHTML = `
      <div class="gamelib-empty">
        <div class="gamelib-empty-icon"><i data-lucide="gamepad-2"></i></div>
        <strong>Sin juegos para mostrar</strong>
        <small>Probá con otro filtro o buscá algo distinto.</small>
      </div>
    `;
  } else {
    body.innerHTML = `<div class="gamelib-grid">${games.map(g => renderGamelibCardHTML(g)).join('')}</div>`;
  }
  refreshIcons();
}

/* ─── Modal de juego ─── */

function ensureGamelibModal() {
  if (gamelibModalEl) return gamelibModalEl;

  const modal = document.createElement('div');
  modal.className = 'gamelib-modal';
  modal.id = 'gamelib-modal';
  modal.innerHTML = `
    <div class="gamelib-modal-dialog" id="gamelib-modal-dialog">
      <button class="gamelib-modal-close" type="button" onclick="closeGamelibGameModal()">
        <i data-lucide="x"></i>
      </button>
      <div class="gamelib-modal-body" id="gamelib-modal-content"></div>
    </div>
  `;
  document.body.appendChild(modal);
  gamelibModalEl = modal;

  modal.addEventListener('mousedown', (e) => {
    if (e.target === modal) closeGamelibGameModal();
  });

  return modal;
}

function openGamelibGameModal(gameId) {
  const game = getGamelibGame(gameId);
  if (!game) return;

  gamelibModalGameId = gameId;
  const modal = ensureGamelibModal();

  const dialog = modal.querySelector('#gamelib-modal-dialog');
  if (dialog) dialog.style.setProperty('--game-accent', game.color);

  renderGamelibModalContent();
  modal.classList.add('open');
  refreshIcons();
}

function closeGamelibGameModal() {
  if (!gamelibModalEl) return;
  gamelibModalEl.classList.remove('open');
  gamelibModalGameId = null;
}

function renderGamelibModalContent() {
  if (!gamelibModalEl || !gamelibModalGameId) return;
  const game = getGamelibGame(gamelibModalGameId);
  if (!game) return;

  const content = gamelibModalEl.querySelector('#gamelib-modal-content');
  if (!content) return;

  const isPlaying = gamelibPlayingSession?.gameId === game.id;
  const achievementPct = game.achievementsTotal > 0
    ? Math.round((game.achievementsUnlocked / game.achievementsTotal) * 100)
    : 0;

  const coverHTML = game.cover
    ? `<img src="${game.cover}" alt="${escapeHtml(game.title)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
       <div class="gamelib-modal-cover-fallback" style="display:none; background: linear-gradient(135deg, ${game.color}33, ${game.color}11);">${game.emoji}</div>`
    : `<div class="gamelib-modal-cover-fallback" style="background: linear-gradient(135deg, ${game.color}33, ${game.color}11);">${game.emoji}</div>`;

  let actionsHTML = '';

  if (!game.installed) {
    actionsHTML = `
      <button class="gamelib-modal-btn install" type="button" onclick="installGamelibGame('${game.id}')">
        <i data-lucide="download"></i> Instalar
      </button>
    `;
  } else if (isPlaying) {
    actionsHTML = `
      <button class="gamelib-modal-btn playing" type="button" onclick="stopGamelibGame()">
        <i data-lucide="square"></i> Detener sesión
      </button>
    `;
  } else {
    actionsHTML = `
      <button class="gamelib-modal-btn play" type="button" onclick="playGamelibGame('${game.id}')">
        <i data-lucide="play"></i> JUGAR
      </button>
    `;
  }

  actionsHTML += `
    <button class="gamelib-modal-btn ${game.favorite ? 'fav-active' : ''}" type="button" onclick="toggleGamelibFavorite('${game.id}')">
      <i data-lucide="star"></i> ${game.favorite ? 'En favoritos' : 'Agregar a favoritos'}
    </button>
    <button class="gamelib-modal-btn" type="button" onclick="showToast('Configuración', 'Se abriría el panel de configuración de ${escapeHtml(game.title)}.', 'settings-2')">
      <i data-lucide="settings-2"></i> Configurar
    </button>
  `;

  const recentAchievementsHTML = game.recentAchievements && game.recentAchievements.length > 0
    ? game.recentAchievements.map(a => `
        <div class="gamelib-achievement-item">
          <div class="gamelib-achievement-icon"><i data-lucide="trophy"></i></div>
          <div class="gamelib-achievement-info">
            <strong>${escapeHtml(a.name)}</strong>
            <small>${getGamelibLastPlayedLabel({ lastPlayedAt: a.date })}</small>
          </div>
        </div>
      `).join('')
    : `<div style="color: var(--text-sub); font-size: 11px; padding: 4px 0;">Todavía no desbloqueaste logros.</div>`;

  content.innerHTML = `
    <div class="gamelib-modal-hero">
      <div class="gamelib-modal-cover">${coverHTML}</div>
      <div class="gamelib-modal-info">
        <h2 class="gamelib-modal-title">${escapeHtml(game.title)}</h2>
        <div class="gamelib-modal-dev">${escapeHtml(game.developer)} · ${game.year}</div>
        <div class="gamelib-modal-genre-row">
          <span class="gamelib-modal-genre-chip">${escapeHtml(game.genre)}</span>
          <span class="gamelib-modal-rating"><i data-lucide="star"></i> ${game.rating}</span>
        </div>
        <div class="gamelib-modal-actions">${actionsHTML}</div>
      </div>
    </div>

    ${game.installed ? `
      <div class="gamelib-modal-section">
        <div class="gamelib-modal-section-title">
          <i data-lucide="bar-chart-3"></i> Estadísticas
        </div>
        <div class="gamelib-stats-grid">
          <div class="gamelib-stat-card">
            <span class="gamelib-stat-label">Tiempo jugado</span>
            <span class="gamelib-stat-value accent">${formatGameHours(game.hoursPlayed)}</span>
          </div>
          <div class="gamelib-stat-card">
            <span class="gamelib-stat-label">Última sesión</span>
            <span class="gamelib-stat-value">${getGamelibLastPlayedLabel(game)}</span>
          </div>
          <div class="gamelib-stat-card">
            <span class="gamelib-stat-label">Logros</span>
            <span class="gamelib-stat-value">${game.achievementsUnlocked}/${game.achievementsTotal}</span>
          </div>
          <div class="gamelib-stat-card">
            <span class="gamelib-stat-label">FPS promedio</span>
            <span class="gamelib-stat-value">${game.avgFps || '—'}</span>
          </div>
        </div>
        <div class="gamelib-achievements-progress">
          <div class="gamelib-achievements-bar">
            <div class="gamelib-achievements-fill" style="width: ${achievementPct}%;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-family: 'JetBrains Mono', monospace; font-size: 9.5px; color: var(--text-sub); font-weight: 700;">
            <span>Progreso de logros</span>
            <span>${achievementPct}%</span>
          </div>
        </div>
      </div>

      ${game.recentAchievements && game.recentAchievements.length > 0 ? `
        <div class="gamelib-modal-section">
          <div class="gamelib-modal-section-title">
            <i data-lucide="trophy"></i> Logros recientes
          </div>
          <div class="gamelib-achievements-list">${recentAchievementsHTML}</div>
        </div>
      ` : ''}
    ` : `
      <div class="gamelib-modal-section">
        <div class="gamelib-modal-section-title">
          <i data-lucide="download"></i> No instalado
        </div>
        <p style="color: var(--text-sub); font-size: 12px; line-height: 1.6; margin: 0;">
          Este juego no está instalado. Hacé click en <strong style="color: var(--accent-orange);">"Instalar"</strong> para descargarlo y empezar a jugar.
        </p>
      </div>
    `}
  `;

  refreshIcons();
}

function toggleGamelibFavorite(id) {
  const game = getGamelibGame(id);
  if (!game) return;
  game.favorite = !game.favorite;
  saveGamelibState();
  renderGamelibApp();
  if (gamelibModalGameId === id) renderGamelibModalContent();
  showToast(
    game.favorite ? 'Agregado a favoritos' : 'Quitado de favoritos',
    game.title,
    'star'
  );
}

function playGamelibGame(id) {
  const game = getGamelibGame(id);
  if (!game || !game.installed) return;

  if (gamelibPlayingSession) {
    stopGamelibGame();
  }

  gamelibPlayingSession = {
    gameId: id,
    startedAt: Date.now()
  };

  if (!gameModeActive) {
    toggleGameMode(true);
  }

  if (!gamerOverlayVisible) {
    toggleGamerOverlay();
  }

  closeGamelibGameModal();
  renderGamelibApp();
  startGamelibPlayTimer();

  showToast(
    'Iniciando juego',
    `${game.title} · Modo Juego activado`,
    { icon: 'play', level: 'success' }
  );

  logActivity({
    category: 'gaming',
    level: 'info',
    icon: 'play',
    title: 'Sesión de juego iniciada',
    subtitle: `${game.title}`,
    detail: {
      'Juego': game.title,
      'Desarrollador': game.developer,
      'Modo Juego': 'Activado',
      'HUD': 'Activado',
      description: 'Se inició una sesión de juego con Modo Juego y HUD activados automáticamente.'
    }
  });
}

function stopGamelibGame() {
  if (!gamelibPlayingSession) return;

  const game = getGamelibGame(gamelibPlayingSession.gameId);
  const elapsedMs = Date.now() - gamelibPlayingSession.startedAt;
  const elapsedHours = elapsedMs / (1000 * 60 * 60);
  const elapsedMin = Math.floor(elapsedMs / 60000);

  if (game) {
    game.hoursPlayed = (game.hoursPlayed || 0) + elapsedHours;
    game.lastPlayedAt = Date.now();
    saveGamelibState();
  }

  gamelibPlayingSession = null;
  stopGamelibPlayTimer();
  renderGamelibApp();

  if (game) {
    showToast(
      'Sesión finalizada',
      `${game.title} · ${elapsedMin} min jugados`,
      { icon: 'square', level: 'info' }
    );

    logActivity({
      category: 'gaming',
      level: 'info',
      icon: 'square',
      title: 'Sesión de juego finalizada',
      subtitle: `${game.title} · ${elapsedMin} min`,
      detail: {
        'Juego': game.title,
        'Duración': `${elapsedMin} min`,
        'Tiempo total': formatGameHours(game.hoursPlayed),
        description: 'La sesión de juego se cerró y se actualizó el tiempo total jugado.'
      }
    });
  }
}

function startGamelibPlayTimer() {
  if (gamelibPlayTimer) clearInterval(gamelibPlayTimer);
  gamelibPlayTimer = setInterval(() => {
    if (!gamelibPlayingSession) {
      stopGamelibPlayTimer();
      return;
    }
    const bar = document.querySelector('.gamelib-playing-bar-info small');
    if (bar) {
      const elapsed = Math.floor((Date.now() - gamelibPlayingSession.startedAt) / 1000);
      const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const ss = String(elapsed % 60).padStart(2, '0');
      bar.textContent = `Sesión activa · ${mm}:${ss}`;
    }
  }, 1000);
}

function stopGamelibPlayTimer() {
  if (gamelibPlayTimer) {
    clearInterval(gamelibPlayTimer);
    gamelibPlayTimer = null;
  }
}

function installGamelibGame(id) {
  const game = getGamelibGame(id);
  if (!game || game.installed) return;

  const modal = ensureGamelibModal();
  const content = modal.querySelector('#gamelib-modal-content');
  if (!content) return;

  const installBtn = content.querySelector('.gamelib-modal-btn.install');
  if (installBtn) {
    installBtn.disabled = true;
    installBtn.innerHTML = '<i data-lucide="loader-circle" class="shield-spinner"></i> Instalando...';
    refreshIcons();
  }

  let progress = 0;
  const tick = () => {
    progress += Math.random() * 8 + 4;
    if (progress >= 100) {
      progress = 100;
      game.installed = true;
      saveGamelibState();
      renderGamelibApp();
      if (gamelibModalGameId === id) renderGamelibModalContent();
      showToast(
        'Juego instalado',
        `${game.title} está listo para jugar`,
        { icon: 'check-circle-2', level: 'success' }
      );
      logActivity({
        category: 'gaming',
        level: 'success',
        icon: 'download',
        title: 'Juego instalado',
        subtitle: game.title,
        detail: {
          'Juego': game.title,
          'Desarrollador': game.developer,
          'Género': game.genre,
          description: 'El juego se instaló correctamente y está listo para jugar.'
        }
      });
      return;
    }

    const fill = content.querySelector('.gamelib-install-progress-fill');
    const label = content.querySelector('.gamelib-install-progress-pct');
    if (fill) fill.style.width = `${progress}%`;
    if (label) label.textContent = `${Math.round(progress)}%`;

    setTimeout(tick, 200 + Math.random() * 150);
  };

  const progressHTML = `
    <div class="gamelib-install-progress">
      <div class="gamelib-install-progress-label">
        <span>Descargando ${escapeHtml(game.title)}...</span>
        <span class="gamelib-install-progress-pct">0%</span>
      </div>
      <div class="gamelib-install-progress-track">
        <div class="gamelib-install-progress-fill" style="width: 0%;"></div>
      </div>
    </div>
  `;
  installBtn.insertAdjacentHTML('afterend', progressHTML);

  setTimeout(tick, 200);
}

function renderGamelibApp() {
  const winIds = getInstancesOfApp('games');
  winIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;
    content.innerHTML = getGamelibAppHTML();
  });
  refreshIcons();
}

function setupGamelibApp(win) {
  if (!win) return;
  if (gamelibPlayingSession) {
    startGamelibPlayTimer();
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ APP: VISUAL STUDIO CODE (Editor simulado)
═══════════════════════════════════════════════════════════════ */

function openVscFile(name) {
  const file = getVscFileByName(name);
  if (!file || file.type !== 'file') return;

  if (!vscOpenTabs.includes(name)) {
    vscOpenTabs.push(name);
  }
  vscActiveTab = name;
  vscSearchOpen = false;
  vscSearchQuery = '';
  vscSearchMatches = [];
  vscSearchCurrentIndex = 0;
  renderVscApp();
}

function closeVscTab(name) {
  const idx = vscOpenTabs.indexOf(name);
  if (idx === -1) return;

  vscOpenTabs.splice(idx, 1);

  if (vscActiveTab === name) {
    vscActiveTab = vscOpenTabs[Math.max(0, idx - 1)] || null;
  }
  renderVscApp();
}

function setVscActiveTab(name) {
  if (!vscOpenTabs.includes(name)) return;
  vscActiveTab = name;
  vscSearchOpen = false;
  vscSearchQuery = '';
  vscSearchMatches = [];
  vscSearchCurrentIndex = 0;
  renderVscApp();
}

function setVscSidebarView(view) {
  if (vscSidebarView === view) {
    const sidebar = document.querySelector('.vsc-sidebar');
    if (sidebar) sidebar.classList.toggle('hidden');
  } else {
    vscSidebarView = view;
    const sidebar = document.querySelector('.vsc-sidebar');
    if (sidebar) sidebar.classList.remove('hidden');
  }
  renderVscApp();
}

function toggleVscFolder(name) {
  vscExpandedFolders[name] = !vscExpandedFolders[name];
  renderVscApp();
}

function toggleVscSearch() {
  vscSearchOpen = !vscSearchOpen;
  if (!vscSearchOpen) {
    vscSearchQuery = '';
    vscSearchMatches = [];
  }
  renderVscApp();
  if (vscSearchOpen) {
    setTimeout(() => {
      const input = document.querySelector('.vsc-search-input');
      if (input) input.focus();
    }, 50);
  }
}

function setVscSearchQuery(query) {
  vscSearchQuery = query;
  vscSearchMatches = [];

  if (!query || !vscActiveTab) {
    updateVscSearchCount();
    updateVscHighlightedLines();
    return;
  }

  const content = VSC_FILE_CONTENTS[vscActiveTab];
  if (!content) return;

  const lines = content.split('\n');
  const q = query.toLowerCase();
  lines.forEach((line, idx) => {
    if (line.toLowerCase().includes(q)) {
      vscSearchMatches.push(idx);
    }
  });

  vscSearchCurrentIndex = 0;
  updateVscSearchCount();
  updateVscHighlightedLines();

  if (vscSearchMatches.length > 0) {
    scrollToVscMatch(vscSearchMatches[0]);
  }
}

function updateVscSearchCount() {
  const el = document.querySelector('.vsc-search-count');
  if (!el) return;
  if (!vscSearchQuery) {
    el.textContent = '—';
    return;
  }
  if (vscSearchMatches.length === 0) {
    el.textContent = 'Sin coincidencias';
    return;
  }
  el.textContent = `${vscSearchCurrentIndex + 1} de ${vscSearchMatches.length}`;
}

function updateVscHighlightedLines() {
  const lines = document.querySelectorAll('.vsc-code-line');
  lines.forEach(line => line.classList.remove('match', 'current'));

  if (!vscSearchQuery) return;

  vscSearchMatches.forEach((matchIdx, i) => {
    const lineEl = lines[matchIdx];
    if (!lineEl) return;
    lineEl.classList.add('match');
    if (i === vscSearchCurrentIndex) {
      lineEl.classList.add('current');
    }
  });
}

function scrollToVscMatch(lineIdx) {
  const lines = document.querySelectorAll('.vsc-code-line');
  const lineEl = lines[lineIdx];
  if (lineEl) {
    lineEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

function vscSearchNext() {
  if (vscSearchMatches.length === 0) return;
  vscSearchCurrentIndex = (vscSearchCurrentIndex + 1) % vscSearchMatches.length;
  updateVscSearchCount();
  updateVscHighlightedLines();
  scrollToVscMatch(vscSearchMatches[vscSearchCurrentIndex]);
}

function vscSearchPrev() {
  if (vscSearchMatches.length === 0) return;
  vscSearchCurrentIndex = (vscSearchCurrentIndex - 1 + vscSearchMatches.length) % vscSearchMatches.length;
  updateVscSearchCount();
  updateVscHighlightedLines();
  scrollToVscMatch(vscSearchMatches[vscSearchCurrentIndex]);
}

function toggleVscPanel() {
  vscPanelOpen = !vscPanelOpen;
  const panel = document.querySelector('.vsc-bottom-panel');
  if (panel) panel.classList.toggle('collapsed', !vscPanelOpen);
}

function setVscActivePanel(panel) {
  vscActivePanel = panel;
  if (!vscPanelOpen) {
    vscPanelOpen = true;
    const panelEl = document.querySelector('.vsc-bottom-panel');
    if (panelEl) panelEl.classList.remove('collapsed');
  }
  renderVscApp();
}

function getVscAppHTML() {
  const activeName = vscActiveTab || (vscOpenTabs[0] || null);
  const activeFile = activeName ? getVscFileByName(activeName) : null;
  const activeContent = activeName ? (VSC_FILE_CONTENTS[activeName] || '// Archivo vacío') : '';
  const activeLanguage = activeFile?.language || 'plain';

  const tabsHTML = vscOpenTabs.map(name => {
    const file = getVscFileByName(name);
    if (!file) return '';
    const iconInfo = getVscFileIcon(name);
    const isActive = name === vscActiveTab;
    return `
      <div class="vsc-tab ${isActive ? 'active' : ''}" onclick="setVscActiveTab('${name}')" data-tab-name="${name}">
        <span class="vsc-tab-icon ${iconInfo.cls}"><i data-lucide="${iconInfo.icon}"></i></span>
        <span class="vsc-tab-title">${escapeHtml(name)}</span>
        <button class="vsc-tab-close" type="button" onclick="event.stopPropagation(); closeVscTab('${name}')" aria-label="Cerrar">
          <i data-lucide="x"></i>
        </button>
      </div>
    `;
  }).join('');

  const lines = activeContent.split('\n');
  const linesHTML = lines.map((line, idx) => {
    const highlighted = highlightVscLine(line, activeLanguage);
    return `
      <div class="vsc-code-line" data-line-idx="${idx}">
        <span class="vsc-line-num">${idx + 1}</span>
        <span class="vsc-code-text">${highlighted || ' '}</span>
      </div>
    `;
  }).join('');

  const minimapHTML = lines.slice(0, 60).map((line, idx) => {
    const len = line.length;
    let widthClass = 'w10';
    if (len > 60) widthClass = 'w100';
    else if (len > 50) widthClass = 'w90';
    else if (len > 40) widthClass = 'w80';
    else if (len > 30) widthClass = 'w70';
    else if (len > 22) widthClass = 'w60';
    else if (len > 14) widthClass = 'w50';
    else if (len > 8) widthClass = 'w40';
    else if (len > 4) widthClass = 'w30';
    else if (len > 0) widthClass = 'w20';
    const isComment = /^\s*\/\//.test(line) || /^\s*#/.test(line);
    const isKeyword = /(function|const|let|import|export|class)/.test(line);
    const extraClass = isComment ? 'accent' : (isKeyword ? 'keyword' : '');
    return `<div class="vsc-minimap-line ${widthClass} ${extraClass}"></div>`;
  }).join('');

  const panelHTML = renderVscPanelHTML();

  const totalLines = lines.length;
  const gitChanges = 3;
  const errorCount = VSC_PROBLEMS.filter(p => p.level === 'error').length;
  const warningCount = VSC_PROBLEMS.filter(p => p.level === 'warning').length;

  return `
    <div class="vsc-app">
      <div class="vsc-topbar">
        <div class="vsc-activity-bar-mini">
          <div class="vsc-mini-icon" title="Buscar (Ctrl+F)" onclick="toggleVscSearch()"><i data-lucide="search"></i></div>
          <div class="vsc-mini-icon" title="Cerrar todos los tabs" onclick="closeAllVscTabs()"><i data-lucide="x-circle"></i></div>
        </div>
        <div class="vsc-tabs">${tabsHTML}</div>
      </div>

      <div class="vsc-body">
        <div class="vsc-activity-bar">
          <button class="vsc-activity-btn ${vscSidebarView === 'explorer' ? 'active' : ''}" type="button" title="Explorador" onclick="setVscSidebarView('explorer')">
            <i data-lucide="files"></i>
          </button>
          <button class="vsc-activity-btn ${vscSidebarView === 'search' ? 'active' : ''}" type="button" title="Buscar" onclick="setVscSidebarView('search')">
            <i data-lucide="search"></i>
          </button>
          <button class="vsc-activity-btn ${vscSidebarView === 'git' ? 'active' : ''}" type="button" title="Source Control" onclick="setVscSidebarView('git')">
            <i data-lucide="git-branch"></i>
            <span class="vsc-badge">${gitChanges}</span>
          </button>
          <button class="vsc-activity-btn ${vscSidebarView === 'debug' ? 'active' : ''}" type="button" title="Run & Debug" onclick="setVscSidebarView('debug')">
            <i data-lucide="play-circle"></i>
          </button>
          <button class="vsc-activity-btn ${vscSidebarView === 'extensions' ? 'active' : ''}" type="button" title="Extensiones" onclick="setVscSidebarView('extensions')">
            <i data-lucide="puzzle"></i>
            <span class="vsc-badge">${warningCount + errorCount}</span>
          </button>
        </div>

        <aside class="vsc-sidebar">
          <div class="vsc-sidebar-header">${getVscSidebarTitle()}</div>
          <div class="vsc-sidebar-content">
            ${getVscSidebarContent()}
          </div>
        </aside>

        <main class="vsc-editor-area">
          ${activeName ? `
            <div class="vsc-editor-header">
              <i data-lucide="${getVscFileIcon(activeName).icon}"></i>
              <span class="vsc-breadcrumb-item">nebula-os</span>
              <span class="vsc-breadcrumb-sep">›</span>
              <span class="vsc-breadcrumb-item active">${escapeHtml(activeName)}</span>
            </div>
          ` : ''}

          <div class="vsc-editor-main">
            <div class="vsc-editor-content" id="vsc-editor-content">
              ${activeName ? linesHTML : `
                <div style="padding: 60px 20px; text-align: center; color: #555; font-family: 'Inter', sans-serif;">
                  <i data-lucide="file-code-2" style="width: 40px; height: 40px; margin-bottom: 12px; opacity: 0.4;"></i>
                  <p style="font-size: 13px; margin: 0;">Seleccioná un archivo del explorador para abrirlo.</p>
                </div>
              `}
            </div>
            <div class="vsc-minimap">${minimapHTML}</div>

            ${vscSearchOpen ? `
              <div class="vsc-search-overlay open">
                <input type="text"
                       class="vsc-search-input"
                       placeholder="Buscar..."
                       value="${escapeHtml(vscSearchQuery)}"
                       oninput="setVscSearchQuery(this.value)"
                       onkeydown="if(event.key==='Escape'){toggleVscSearch()} else if(event.key==='Enter'){${'event.shiftKey'} ? vscSearchPrev() : vscSearchNext()}"
                       autofocus>
                <span class="vsc-search-count">—</span>
                <button class="vsc-search-nav-btn" type="button" onclick="vscSearchPrev()" title="Anterior">
                  <i data-lucide="chevron-up"></i>
                </button>
                <button class="vsc-search-nav-btn" type="button" onclick="vscSearchNext()" title="Siguiente">
                  <i data-lucide="chevron-down"></i>
                </button>
                <button class="vsc-search-close-btn" type="button" onclick="toggleVscSearch()" title="Cerrar">
                  <i data-lucide="x"></i>
                </button>
              </div>
            ` : ''}
          </div>
        </main>
      </div>

      <div class="vsc-bottom-panel ${vscPanelOpen ? '' : 'collapsed'}">
        <div class="vsc-panel-tabs">
          <button class="vsc-panel-tab ${vscActivePanel === 'problems' ? 'active' : ''} ${errorCount > 0 ? 'has-errors' : ''}" onclick="setVscActivePanel('problems')">
            Problemas <span class="vsc-panel-count">${errorCount + warningCount}</span>
          </button>
          <button class="vsc-panel-tab ${vscActivePanel === 'output' ? 'active' : ''}" onclick="setVscActivePanel('output')">
            Salida
          </button>
          <button class="vsc-panel-tab ${vscActivePanel === 'terminal' ? 'active' : ''}" onclick="setVscActivePanel('terminal')">
            Terminal
          </button>
          <button class="vsc-panel-tab ${vscActivePanel === 'ports' ? 'active' : ''}" onclick="setVscActivePanel('ports')">
            Puertos <span class="vsc-panel-count">1</span>
          </button>
          <button class="vsc-panel-close" type="button" onclick="toggleVscPanel()" title="Cerrar panel">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="vsc-panel-content">${panelHTML}</div>
      </div>

      <div class="vsc-statusbar">
        <div class="vsc-statusbar-left">
          <span class="vsc-statusbar-item git-branch">
            <i data-lucide="git-branch"></i> main*
          </span>
          <span class="vsc-statusbar-item">
            <i data-lucide="x-circle"></i> ${errorCount}
          </span>
          <span class="vsc-statusbar-item">
            <i data-lucide="alert-triangle"></i> ${warningCount}
          </span>
        </div>
        <div class="vsc-statusbar-right">
          <span class="vsc-statusbar-item">Ln ${totalLines}, Col 1</span>
          <span class="vsc-statusbar-item">Espacios: 2</span>
          <span class="vsc-statusbar-item">UTF-8</span>
          <span class="vsc-statusbar-item">${getVscLanguageLabel(activeLanguage)}</span>
          <span class="vsc-statusbar-item">{ }</span>
        </div>
      </div>
    </div>
  `;
}

function getVscSidebarTitle() {
  return {
    explorer: 'Explorador',
    search: 'Buscar',
    git: 'Control de Código Fuente',
    debug: 'Ejecutar y Depurar',
    extensions: 'Extensiones'
  }[vscSidebarView] || 'Explorador';
}

function getVscSidebarContent() {
  switch (vscSidebarView) {
    case 'explorer':
      return renderVscTreeHTML(VSC_FILE_TREE, 0);
    case 'search':
      return `
        <div style="padding: 10px 12px;">
          <input type="text" placeholder="Buscar en archivos..." style="width: 100%; padding: 6px 10px; background: #3c3c3c; border: 1px solid #3c3c3c; border-radius: 4px; color: #ccc; font-size: 12px; outline: none;">
          <p style="margin-top: 12px; font-size: 11px; color: #858585; line-height: 1.5;">Escribí para buscar en todos los archivos del proyecto.</p>
        </div>
      `;
    case 'git':
      return `
        <div style="padding: 10px 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
            <span style="font-size: 11px; color: #858585; font-weight: 600;">CAMBIOS (3)</span>
            <span style="font-size: 10px; color: #858585;">main*</span>
          </div>
          ${['index.html', 'styles.css', 'script.js'].map(name => `
            <div style="display: flex; align-items: center; gap: 6px; padding: 4px 0; font-size: 12px; color: #ccc;">
              <span style="color: #e2c08d; font-weight: 800;">M</span>
              <span>${escapeHtml(name)}</span>
            </div>
          `).join('')}
        </div>
      `;
    case 'debug':
      return `
        <div style="padding: 10px 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
            <span style="font-size: 11px; color: #858585; font-weight: 600;">VARIABLES</span>
          </div>
          <p style="font-size: 11px; color: #858585; line-height: 1.5;">No hay sesiones de debug activas.</p>
          <button style="margin-top: 12px; padding: 6px 12px; background: #0e639c; border: 0; border-radius: 4px; color: #fff; font-size: 11px; cursor: pointer;">Crear launch.json</button>
        </div>
      `;
    case 'extensions':
      return `
        <div style="padding: 10px 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
            <span style="font-size: 11px; color: #858585; font-weight: 600;">INSTALADAS</span>
          </div>
          ${[
            { name: 'Lucide Icons', author: 'Lucide',      icon: 'sparkles' },
            { name: 'Live Server',  author: 'Ritwick Dey', icon: 'radio' },
            { name: 'Prettier',     author: 'Prettier',    icon: 'wand-2' },
            { name: 'GitLens',      author: 'GitKraken',   icon: 'git-branch' }
          ].map(ext => `
            <div style="display: flex; align-items: center; gap: 8px; padding: 6px 0; font-size: 12px; color: #ccc;">
              <i data-lucide="${ext.icon}" style="width: 14px; height: 14px; color: var(--accent);"></i>
              <div>
                <div style="font-weight: 600;">${escapeHtml(ext.name)}</div>
                <div style="font-size: 10px; color: #858585;">${escapeHtml(ext.author)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    default:
      return '';
  }
}

function renderVscTreeHTML(nodes, depth) {
  return nodes.map(node => {
    if (node.type === 'folder') {
      const isExpanded = vscExpandedFolders[node.name] !== false;
      const childrenHTML = isExpanded
        ? renderVscTreeHTML(node.children || [], depth + 1)
        : '';
      return `
        <div class="vsc-tree-folder ${isExpanded ? '' : 'collapsed'}" onclick="toggleVscFolder('${node.name}')">
          <i data-lucide="chevron-down" class="vsc-tree-chevron"></i>
          <i data-lucide="folder"></i>
          <span class="vsc-tree-folder-name">${escapeHtml(node.name)}</span>
        </div>
        ${childrenHTML}
      `;
    }
    const iconInfo = getVscFileIcon(node.name);
    const isActive = node.name === vscActiveTab;
    return `
      <div class="vsc-tree-file ${isActive ? 'active' : ''}" onclick="openVscFile('${node.name}')">
        <span class="vsc-file-icon ${iconInfo.cls}"><i data-lucide="${iconInfo.icon}"></i></span>
        <span class="vsc-tree-file-name">${escapeHtml(node.name)}</span>
      </div>
    `;
  }).join('');
}

function renderVscPanelHTML() {
  switch (vscActivePanel) {
    case 'terminal':
      return `
        <div class="vsc-terminal-line">
          <span class="vsc-terminal-path">~/nebula-os</span>
          <span class="vsc-terminal-prompt">❯</span>
          <span class="vsc-terminal-cmd">npm start<span class="vsc-terminal-cursor"></span></span>
        </div>
        <div class="vsc-terminal-line">
          <span class="vsc-terminal-out">&gt; nebula-os-web@2.5.0 start</span>
        </div>
        <div class="vsc-terminal-line">
          <span class="vsc-terminal-out">&gt; live-server</span>
        </div>
        <div class="vsc-terminal-line">
          <span class="vsc-terminal-out">Serving "~/nebula-os" at http://127.0.0.1:5500</span>
        </div>
        <div class="vsc-terminal-line">
          <span class="vsc-terminal-out">Ready. Press CTRL+C to stop.</span>
        </div>
        <div class="vsc-terminal-line" style="margin-top: 6px;">
          <span class="vsc-terminal-path">~/nebula-os</span>
          <span class="vsc-terminal-prompt">❯</span>
          <span class="vsc-terminal-cursor"></span>
        </div>
      `;
    case 'problems':
      if (VSC_PROBLEMS.length === 0) {
        return `<div style="color: #858585; font-style: italic;">No hay problemas detectados.</div>`;
      }
      return `
        <div class="vsc-problems-list">
          ${VSC_PROBLEMS.map(p => `
            <div class="vsc-problem-item ${p.level}">
              <span class="vsc-problem-icon">
                <i data-lucide="${p.level === 'error' ? 'x-circle' : p.level === 'warning' ? 'alert-triangle' : 'info'}"></i>
              </span>
              <span class="vsc-problem-msg">${escapeHtml(p.message)}</span>
              <span class="vsc-problem-file">${escapeHtml(p.file)}:${p.line}</span>
            </div>
          `).join('')}
        </div>
      `;
    case 'output':
      return `
        <div style="color: #858585; line-height: 1.7;">
          <div>[Info  - 14:32:18] Nebula Kernel: startup complete</div>
          <div>[Info  - 14:32:19] Loaded 12 modules</div>
          <div>[Info  - 14:32:19] GPU detected: RTX 4080 SUPRIM</div>
          <div>[Info  - 14:32:20] Compositor initialized</div>
          <div>[Info  - 14:32:21] Session saved to localStorage</div>
          <div style="color: var(--accent-green);">[OK    - 14:32:21] Nebula OS ready</div>
        </div>
      `;
    case 'ports':
      return `
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">
            <span style="color: var(--accent-green); font-weight: 700;">● 5500</span>
            <span style="flex: 1; color: #ccc;">Live Server</span>
            <span style="color: #858585; font-size: 11px;">http://127.0.0.1:5500</span>
          </div>
        </div>
      `;
    default:
      return '';
  }
}

function closeAllVscTabs() {
  vscOpenTabs = [];
  vscActiveTab = null;
  renderVscApp();
}

function renderVscApp() {
  const winIds = getInstancesOfApp('vscode');
  winIds.forEach(winId => {
    const win = openWindows[winId]?.win;
    if (!win) return;
    const content = win.querySelector('.wcontent');
    if (!content) return;
    content.innerHTML = getVscAppHTML();
  });
  refreshIcons();
}

function setupVscApp(win) {
  if (!win) return;
  if (vscOpenTabs.length === 0) {
    vscOpenTabs = ['index.html', 'styles.css', 'script.js'];
    vscActiveTab = 'index.html';
    renderVscApp();
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ APP: FIREFOX (Navegador híbrido)
═══════════════════════════════════════════════════════════════ */

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
/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 10/12 — FEATURES DEL SISTEMA
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ DESIGNER: LIVE EDITING
═══════════════════════════════════════════════════════════════ */

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
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
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

/* ═══════════════════════════════════════════════════════════════
   ★ WALLPAPERS
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ STARS PARALLAX (Canvas de estrellas con parallax)
═══════════════════════════════════════════════════════════════ */

function createStars() {
  const layerFar = document.getElementById('stars-layer-far');
  const layerMid = document.getElementById('stars-layer-mid');
  const layerNear = document.getElementById('stars-layer-near');

  if (!layerFar || !layerMid || !layerNear) return;

  layerFar.innerHTML = '';
  layerMid.innerHTML = '';
  layerNear.innerHTML = '';

  starsLayersData.far.el = layerFar;
  starsLayersData.mid.el = layerMid;
  starsLayersData.near.el = layerNear;
  starsLayersData.far.stars = [];
  starsLayersData.mid.stars = [];
  starsLayersData.near.stars = [];

  ['far', 'mid', 'near'].forEach(layerName => {
    const config = STARS_CONFIG[layerName];
    const container = starsLayersData[layerName].el;
    const starsArray = starsLayersData[layerName].stars;

    for (let i = 0; i < config.count; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      const size = config.size[0] + Math.random() * (config.size[1] - config.size[0]);
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;

      const baseOpacity = config.opacityRange[0] + Math.random() * (config.opacityRange[1] - config.opacityRange[0]);
      star.style.opacity = String(baseOpacity);

      const isAccent = Math.random() < config.accentChance;
      if (isAccent) {
        star.classList.add('accent');
      }

      const twinkleDuration = 2.5 + Math.random() * 3.5;
      const twinkleDelay = Math.random() * 4;
      const twinkleMin = Math.max(0.1, baseOpacity * 0.4);
      const twinkleMax = Math.min(1, baseOpacity * 1.4);
      star.style.setProperty('--twinkle-duration', `${twinkleDuration}s`);
      star.style.setProperty('--twinkle-delay', `${twinkleDelay}s`);
      star.style.setProperty('--twinkle-min', String(twinkleMin));
      star.style.setProperty('--twinkle-max', String(twinkleMax));
      star.classList.add('twinkle');

      container.appendChild(star);

      starsArray.push({
        el: star,
        baseX: posX,
        baseY: posY,
        baseOpacity,
        size
      });
    }
  });

  attachStarsMouseListener();
  startStarsAnimationLoop();
}

function attachStarsMouseListener() {
  if (starsMouseListenerAttached) return;
  starsMouseListenerAttached = true;

  document.addEventListener('mousemove', (e) => {
    if (!starsParallaxEnabled) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    starsMouseTarget.x = (e.clientX / w - 0.5) * 2;
    starsMouseTarget.y = (e.clientY / h - 0.5) * 2;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    starsMouseTarget.x = 0;
    starsMouseTarget.y = 0;
  });
}

function startStarsAnimationLoop() {
  if (starsAnimationFrameId !== null) return;

  const animate = () => {
    starsMouseCurrent.x += (starsMouseTarget.x - starsMouseCurrent.x) * 0.06;
    starsMouseCurrent.y += (starsMouseTarget.y - starsMouseCurrent.y) * 0.06;

    starsDrift += 0.015;
    if (starsDrift > 100) starsDrift = 0;

    if (starsParallaxEnabled) {
      const maxOffsetX = 30 * starsParallaxIntensity;
      const maxOffsetY = 20 * starsParallaxIntensity;

      ['far', 'mid', 'near'].forEach(layerName => {
        const layer = starsLayersData[layerName];
        if (!layer.el) return;

        const offsetX = -starsMouseCurrent.x * maxOffsetX * layer.speed;
        const offsetY = -starsMouseCurrent.y * maxOffsetY * layer.speed;

        const drift = -(starsDrift * layer.speed) % 20;

        layer.el.style.transform = `translate3d(${offsetX + drift}px, ${offsetY}px, 0)`;
      });
    }

    starsAnimationFrameId = requestAnimationFrame(animate);
  };

  starsAnimationFrameId = requestAnimationFrame(animate);
}

function stopStarsAnimationLoop() {
  if (starsAnimationFrameId !== null) {
    cancelAnimationFrame(starsAnimationFrameId);
    starsAnimationFrameId = null;
  }
}

function setStarsParallaxEnabled(enabled) {
  starsParallaxEnabled = !!enabled;

  if (!starsParallaxEnabled) {
    ['far', 'mid', 'near'].forEach(layerName => {
      const layer = starsLayersData[layerName];
      if (layer.el) layer.el.style.transform = 'translate3d(0, 0, 0)';
    });
    starsMouseTarget.x = 0;
    starsMouseTarget.y = 0;
  } else {
    startStarsAnimationLoop();
  }

  saveDesignerState();
  showToast(
    'Parallax de estrellas',
    starsParallaxEnabled ? 'Activado' : 'Desactivado',
    'sparkles'
  );
}

function setStarsParallaxIntensity(value) {
  starsParallaxIntensity = Number(value) || 1;
  saveDesignerState();

  const valEl = document.getElementById('designer-stars-intensity-val');
  if (valEl) {
    const label = starsParallaxIntensity <= 0.7 ? 'Sutil'
                : starsParallaxIntensity <= 1.2 ? 'Normal'
                : 'Intenso';
    valEl.textContent = label;
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ GAME MODE + HUD
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ NEBULA STORE: Render y acciones
═══════════════════════════════════════════════════════════════ */

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
   ★ WIFI: TOGGLES Y CONEXIONES
═══════════════════════════════════════════════════════════════ */

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

function rescanWifiNetworks() {
  if (!wifiEnabled) return;
  wifiScanInProgress = true;
  renderWifiPanel();

  setTimeout(() => {
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

/* ═══════════════════════════════════════════════════════════════
   ★ BLUETOOTH: TOGGLES Y CONEXIONES
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ CONNECTIVITY STATE: Render en topbar + Quick Center
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ DND (Do Not Disturb) Y BRILLO
═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   ★ PANEL DE AUDIO AVANZADO — Helpers y lógica
   ═══════════════════════════════════════════════════════════════ */

function loadAudioMixerState() {
  try {
    const raw = localStorage.getItem(AUDIO_PANEL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        if (typeof parsed.master === 'number') audioPanelState.master = parsed.master;
        if (typeof parsed.masterMuted === 'boolean') audioPanelState.masterMuted = parsed.masterMuted;
        if (parsed.activeDevice) audioPanelState.activeDevice = parsed.activeDevice;
        if (parsed.appVolumes && typeof parsed.appVolumes === 'object') {
          audioPanelState.appVolumes = parsed.appVolumes;
        }
      }
    }
  } catch (e) {}
}

function saveAudioMixerState() {
  try {
    const serializable = {
      master: audioPanelState.master,
      masterMuted: audioPanelState.masterMuted,
      activeDevice: audioPanelState.activeDevice,
      appVolumes: audioPanelState.appVolumes
    };
    localStorage.setItem(AUDIO_PANEL_STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {}
}

function getAudioAppState(appId) {
  if (!audioPanelState.appVolumes[appId]) {
    const def = AUDIO_APP_DEFAULTS[appId] || { volume: 0.5, muted: false };
    audioPanelState.appVolumes[appId] = { volume: def.volume, muted: def.muted };
  }
  return audioPanelState.appVolumes[appId];
}

function getActiveAudioApps() {
  const apps = [];
  const seen = new Set();

  // ─── 1. Apps con ventana abierta ───
  Object.keys(openWindows).forEach(winId => {
    const entry = openWindows[winId];
    if (!entry?.win) return;
    const appId = entry.appId;
    if (!appId || appId === 'store') return;
    if (seen.has(appId)) return;
    const app = APPS[appId];
    if (!app) return;
    seen.add(appId);
    const count = getInstancesOfApp(appId).length;
    apps.push({
      id: appId,
      title: app.title,
      sub: app.sub || '',
      icon: app.icon,
      image: app.image,
      accent: AUDIO_APP_ACCENTS[appId] || '#b4befe',
      instances: count
    });
  });

  // ─── 2. ★ Spotify "fantasma": aparece si hay track cargado o suena ───
  //         (aunque no haya ventana abierta de la app music)
  //         Esto cubre el caso del Topbar Player: si el topbar está
  //         visible, significa que hay un track cargado → debe aparecer.
  if (window.SpotifyApp && !seen.has('music')) {
    const current = SpotifyApp.getCurrentTrack();
    const hasTrack = !!current;
    const isPlaying = spotify.isPlaying;

    if (hasTrack || isPlaying) {
      seen.add('music');
      const musicApp = APPS.music;
      apps.push({
        id: 'music',
        title: musicApp?.title || 'Spotify',
        sub: isPlaying
          ? `Reproduciendo · ${current?.title || 'cargando...'}`
          : `En pausa · ${current?.title || '—'}`,
        icon: musicApp?.icon || 'music',
        image: musicApp?.image || null,
        accent: AUDIO_APP_ACCENTS.music,
        instances: 1,
        virtual: true
      });
    }
  }

  // ─── 3. Sistema siempre presente ───
  apps.push({
    id: 'system',
    title: 'Sistema',
    sub: 'Sonidos del sistema',
    icon: 'cpu',
    image: null,
    accent: AUDIO_APP_ACCENTS.system,
    instances: 1,
    isSystem: true
  });

  // ─── 4. Ordenar: Spotify primero, luego por instancias, luego alfabético ───
  apps.sort((a, b) => {
    if (a.id === 'music') return -1;
    if (b.id === 'music') return 1;
    if (a.isSystem) return 1;
    if (b.isSystem) return -1;
    return a.title.localeCompare(b.title);
  });

  return apps;
}

function setAudioMasterVolume(pct, { fromSpotify = false } = {}) {
  const v = Math.max(0, Math.min(1, pct / 100));
  audioPanelState.master = v;
  audioPanelState.masterMuted = v === 0;

  // Sincronizar con Spotify (fuente única de verdad)
  if (window.SpotifyApp && !fromSpotify) {
    if (SpotifyApp.isMuted() && v > 0) {
      SpotifyApp.toggleMute();
    }
    SpotifyApp.setVolume(v);
  }

  // Sincronizar slider del Quick Center y tray
  const qVol = document.getElementById('volume-slider');
  if (qVol && Number(qVol.value) !== Math.round(v * 100)) {
    qVol.value = String(Math.round(v * 100));
    if (typeof syncSliderFill === 'function') syncSliderFill(qVol);
  }
  const qVal = document.getElementById('quick-volume-value');
  if (qVal) qVal.textContent = `${Math.round(v * 100)}%`;
  const trayNum = document.getElementById('tray-volume-num');
  if (trayNum) trayNum.textContent = `${Math.round(v * 100)}%`;

  updateTrayVolumeIcon();
  updateAudioMasterUI();
  saveAudioMixerState();
}

function toggleAudioMasterMute() {
  if (audioPanelState.masterMuted || audioPanelState.master === 0) {
    // Desmutear: restaurar último volumen o 80%
    const restored = audioPanelState.master > 0 ? audioPanelState.master : 0.8;
    audioPanelState.masterMuted = false;
    setAudioMasterVolume(restored * 100);
  } else {
    // Mutear
    audioPanelState.masterMuted = true;
    if (window.SpotifyApp && !SpotifyApp.isMuted()) {
      SpotifyApp.toggleMute();
    }
    audioPanelState.lastSpotifyVolume = audioPanelState.master;
    updateAudioMasterUI();
    updateTrayVolumeIcon();
    saveAudioMixerState();
  }
}

function setAppVolume(appId, pct) {
  const v = Math.max(0, Math.min(1, pct / 100));
  const state = getAudioAppState(appId);
  state.volume = v;
  if (v > 0 && state.muted) state.muted = false;

  // Si es Spotify, aplicar real (multiplicado por master)
  if (appId === 'music' && window.SpotifyApp) {
    // Spotify ya se controla desde master, así que aquí solo guardamos el estado visual
    // (Spotify solo tiene un volumen real; el master ya lo controla)
    // Para hacerlo más realista, el volumen de Spotify es el master, así que este slider es decorativo
  }

  saveAudioMixerState();
  updateAudioMixerItemUI(appId);
  updateAudioPanelSubtitle();
}

function toggleAppMute(appId) {
  const state = getAudioAppState(appId);
  state.muted = !state.muted;
  if (appId === 'music' && window.SpotifyApp) {
    const isMuted = SpotifyApp.isMuted();
    if (state.muted && !isMuted) SpotifyApp.toggleMute();
    if (!state.muted && isMuted) SpotifyApp.toggleMute();
  }
  saveAudioMixerState();
  updateAudioMixerItemUI(appId);
}

function selectAudioDevice(deviceId) {
  const device = AUDIO_DEVICES.find(d => d.id === deviceId);
  if (!device) return;
  audioPanelState.activeDevice = deviceId;
  saveAudioMixerState();
  renderAudioPanel();
  showToast('Dispositivo de Audio', `Salida → ${device.name}`, 'speaker');
}

function updateAudioMasterUI() {
  const pct = Math.round(audioPanelState.master * 100);
  const isMuted = audioPanelState.masterMuted || audioPanelState.master === 0;

  const valEl = document.getElementById('audio-master-value');
  if (valEl) valEl.textContent = isMuted ? 'Mute' : `${pct}%`;

  const fill = document.getElementById('audio-master-fill');
  if (fill) fill.style.width = `${isMuted ? 0 : pct}%`;

  const knob = document.getElementById('audio-master-knob');
  if (knob) knob.style.left = `${isMuted ? 0 : pct}%`;

  const muteBtn = document.getElementById('audio-master-mute');
  if (muteBtn) muteBtn.classList.toggle('muted', isMuted);

  const muteIcon = document.getElementById('audio-master-mute-icon');
  if (muteIcon) {
    const iconName = isMuted ? 'volume-x' : (pct === 0 ? 'volume' : pct < 50 ? 'volume-1' : 'volume-2');
    if (muteIcon.getAttribute('data-lucide') !== iconName) {
      muteIcon.setAttribute('data-lucide', iconName);
      if (typeof refreshIcons === 'function') refreshIcons();
    }
  }

  const masterIcon = document.getElementById('audio-master-icon');
  if (masterIcon) {
    const iconName = isMuted ? 'volume-x' : (pct === 0 ? 'volume' : pct < 50 ? 'volume-1' : 'volume-2');
    if (masterIcon.getAttribute('data-lucide') !== iconName) {
      masterIcon.setAttribute('data-lucide', iconName);
      if (typeof refreshIcons === 'function') refreshIcons();
    }
  }
}

function updateAudioMixerItemUI(appId) {
  const item = document.querySelector(`.audio-mixer-item[data-app-id="${appId}"]`);
  if (!item) return;
  const state = getAudioAppState(appId);
  const pct = Math.round(state.volume * 100);
  const isMuted = state.muted;

  const fill = item.querySelector('.audio-slider-fill');
  if (fill) fill.style.width = `${isMuted ? 0 : pct}%`;
  const knob = item.querySelector('.audio-slider-knob');
  if (knob) knob.style.left = `${isMuted ? 0 : pct}%`;
  const pctEl = item.querySelector('.audio-mixer-pct');
  if (pctEl) pctEl.textContent = isMuted ? 'Mute' : `${pct}%`;
  const muteBtn = item.querySelector('.audio-mini-btn');
  if (muteBtn) muteBtn.classList.toggle('muted', isMuted);
  item.classList.toggle('muted', isMuted);
}

function updateAudioPanelSubtitle() {
  const apps = getActiveAudioApps().filter(a => !a.isSystem);
  const count = apps.length;
  const el = document.getElementById('audio-panel-subtitle');
  if (el) {
    el.textContent = count === 0
      ? 'Sin aplicaciones abiertas'
      : `${count} aplicación${count === 1 ? '' : 'es'} con audio`;
  }
  const countEl = document.getElementById('audio-apps-count');
  if (countEl) countEl.textContent = String(count);
}

function renderAudioPanel() {
  const listEl = document.getElementById('audio-mixer-list');
  const devicesEl = document.getElementById('audio-devices-list');
  if (!listEl || !devicesEl) return;

  // 1. Master
  updateAudioMasterUI();

  // 2. Apps
  const apps = getActiveAudioApps();
  const visibleApps = apps.filter(a => !a.isSystem);

  if (visibleApps.length === 0 && !apps.find(a => a.isSystem)) {
    listEl.innerHTML = `
      <div class="audio-mixer-empty">
        <strong>Sin aplicaciones con audio</strong>
        Abrí alguna app desde el dock para verla acá.
      </div>
    `;
  } else {
    // Sistema siempre visible
    const allToRender = apps;

    listEl.innerHTML = allToRender.map(app => {
      const state = getAudioAppState(app.id);
      const pct = Math.round(state.volume * 100);
      const isMuted = state.muted;
      const iconHTML = app.image
        ? `<img src="${escapeHtml(app.image)}" alt="" onerror="this.style.display='none'; this.parentElement.innerHTML='<i data-lucide=\\'${app.icon}\\'></i>'; refreshIcons();" />`
        : `<i data-lucide="${app.icon}"></i>`;
      const instancesBadge = app.instances > 1
        ? `<span class="audio-mixer-instances">${app.instances}×</span>`
        : '';

      const showVisualizer = app.id === 'music';

      return `
        <div class="audio-mixer-item ${isMuted ? 'muted' : ''}"
             data-app-id="${app.id}"
             style="--app-audio-accent: ${app.accent};">
          <div class="audio-mixer-head">
            <div class="audio-mixer-icon">${iconHTML}</div>
            <div class="audio-mixer-info">
              <div class="audio-mixer-title">
                <strong>${escapeHtml(app.title)}</strong>
                ${instancesBadge}
              </div>
              <span class="audio-mixer-sub">${escapeHtml(app.sub || 'Aplicación')}</span>
            </div>
            <div class="audio-mixer-value">
              <span class="audio-mixer-pct">${isMuted ? 'Mute' : `${pct}%`}</span>
            </div>
          </div>

          <div class="audio-slider-row">
            <button class="audio-mini-btn ${isMuted ? 'muted' : ''}"
                    type="button"
                    data-app-mute="${app.id}"
                    title="${isMuted ? 'Activar' : 'Silenciar'}">
              <i data-lucide="${isMuted ? 'volume-x' : 'volume-2'}"></i>
            </button>
            <div class="audio-slider-track" data-app-slider="${app.id}">
              <div class="audio-slider-fill" style="width: ${isMuted ? 0 : pct}%"></div>
              <div class="audio-slider-knob" style="left: ${isMuted ? 0 : pct}%"></div>
            </div>
          </div>

          ${showVisualizer ? `
            <div class="audio-mixer-visualizer" data-audio-visualizer>
              ${Array.from({ length: 32 }).map(() => `<span class="audio-mixer-visualizer-bar" style="height: 8%"></span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // 3. Devices
  devicesEl.innerHTML = AUDIO_DEVICES.map(device => {
    const isActive = audioPanelState.activeDevice === device.id;
    return `
      <button class="audio-device-item ${isActive ? 'active' : ''}"
              type="button"
              data-audio-device="${device.id}">
        <div class="audio-device-icon"><i data-lucide="${device.icon}"></i></div>
        <div class="audio-device-info">
          <span class="audio-device-name">${escapeHtml(device.name)}</span>
          <span class="audio-device-sub">${escapeHtml(device.sub)}</span>
        </div>
        <span class="audio-device-check"><i data-lucide="check"></i></span>
      </button>
    `;
  }).join('');

  updateAudioPanelSubtitle();

  // Bind events
  bindAudioPanelEvents();

  if (typeof refreshIcons === 'function') refreshIcons();
}

function bindAudioPanelEvents() {
  // Master slider
  const masterTrack = document.getElementById('audio-master-slider');
  if (masterTrack && !masterTrack.dataset.bound) {
    masterTrack.dataset.bound = '1';
    bindAudioSlider(masterTrack, (pct) => setAudioMasterVolume(pct));
  }

  // Master mute
  const masterMute = document.getElementById('audio-master-mute');
  if (masterMute && !masterMute.dataset.bound) {
    masterMute.dataset.bound = '1';
    masterMute.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAudioMasterMute();
    });
  }

  // App sliders
  document.querySelectorAll('[data-app-slider]').forEach(track => {
    if (track.dataset.bound) return;
    track.dataset.bound = '1';
    const appId = track.dataset.appSlider;
    bindAudioSlider(track, (pct) => setAppVolume(appId, pct));
  });

  // App mute buttons
  document.querySelectorAll('[data-app-mute]').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAppMute(btn.dataset.appMute);
    });
  });

  // Devices
  document.querySelectorAll('[data-audio-device]').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectAudioDevice(btn.dataset.audioDevice);
    });
  });
}

function bindAudioSlider(trackEl, onChange) {
  const computePct = (clientX) => {
    const rect = trackEl.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    return pct;
  };

  const onMove = (e) => {
    const pct = computePct(e.clientX);
    onChange(pct);
  };

  const onDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    trackEl.classList.add('dragging');
    onMove(e);

    const onUp = () => {
      trackEl.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  trackEl.addEventListener('mousedown', onDown);

  // Touch support
  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const pct = computePct(e.touches[0].clientX);
      onChange(pct);
    }
  };
  trackEl.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    trackEl.classList.add('dragging');
    onTouchMove(e);
    const onTouchEnd = () => {
      trackEl.classList.remove('dragging');
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
  }, { passive: false });
}

function openAudioPanel() {
  const panel = document.getElementById('audio-panel');
  if (!panel) return;

  // Cerrar otros paneles
  if (typeof closeWifiPanel === 'function') closeWifiPanel();
  if (typeof closeBluetoothPanel === 'function') closeBluetoothPanel();
  if (typeof closeNotificationCenter === 'function') closeNotificationCenter();
  if (typeof closeQuickCenter === 'function') closeQuickCenter();
  if (typeof closeControlCenter === 'function') closeControlCenter();

  panel.classList.remove('hidden');
  renderAudioPanel();
  startAudioPeakMeter();
  if (typeof refreshIcons === 'function') refreshIcons();
}

function closeAudioPanel() {
  const panel = document.getElementById('audio-panel');
  if (!panel) return;
  panel.classList.add('hidden');
  stopAudioPeakMeter();
}

function toggleAudioPanel() {
  const panel = document.getElementById('audio-panel');
  if (!panel) return;
  if (panel.classList.contains('hidden')) openAudioPanel();
  else closeAudioPanel();
}

function updateTrayVolumeIcon() {
  const iconEl = document.querySelector('#tray-volume-item i, #tray-volume-item svg');
  if (!iconEl) return;
  const pct = Math.round(audioPanelState.master * 100);
  const isMuted = audioPanelState.masterMuted || audioPanelState.master === 0;
  const iconName = isMuted ? 'volume-x' : (pct < 20 ? 'volume' : pct < 50 ? 'volume-1' : 'volume-2');
  if (iconEl.getAttribute('data-lucide') !== iconName) {
    iconEl.outerHTML = `<i data-lucide="${iconName}" class="tray-icon"></i>`;
    if (typeof refreshIcons === 'function') refreshIcons();
  }
}

/* ─── Peak meter (visualizador L/R) ─── */
function startAudioPeakMeter() {
  if (audioPanelState.peakRafId !== null) return;
  const tick = () => {
    audioPanelState.peakRafId = requestAnimationFrame(tick);
    updateAudioPeakMeter();
  };
  audioPanelState.peakRafId = requestAnimationFrame(tick);
}

function stopAudioPeakMeter() {
  if (audioPanelState.peakRafId !== null) {
    cancelAnimationFrame(audioPanelState.peakRafId);
    audioPanelState.peakRafId = null;
  }
  audioPanelState.peakSmoothL = 0;
  audioPanelState.peakSmoothR = 0;
  const l = document.getElementById('audio-peak-l');
  const r = document.getElementById('audio-peak-r');
  const lv = document.getElementById('audio-peak-l-value');
  const rv = document.getElementById('audio-peak-r-value');
  if (l) l.style.width = '0%';
  if (r) r.style.width = '0%';
  if (lv) lv.textContent = '-∞ dB';
  if (rv) rv.textContent = '-∞ dB';
}

function updateAudioPeakMeter() {
  let levelL = 0;
  let levelR = 0;

  if (window.SpotifyApp && SpotifyApp.isPlaying()) {
    const data = SpotifyApp.getAnalyserData();
    if (data && data.length > 0) {
      // Tomamos la mitad izquierda y derecha del espectro como aproximación
      const half = Math.floor(data.length / 2);
      let sumL = 0, sumR = 0;
      for (let i = 0; i < half; i++) sumL += data[i];
      for (let i = half; i < data.length; i++) sumR += data[i];
      levelL = sumL / half / 255;
      levelR = sumR / (data.length - half) / 255;
    }
  } else {
    // Sin música: pequeño ruido aleatorio para dar vida
    levelL = Math.random() * 0.05;
    levelR = Math.random() * 0.05;
  }

  // Suavizado
  audioPanelState.peakSmoothL += (levelL - audioPanelState.peakSmoothL) * 0.35;
  audioPanelState.peakSmoothR += (levelR - audioPanelState.peakSmoothR) * 0.35;

  const pctL = Math.min(100, audioPanelState.peakSmoothL * 100);
  const pctR = Math.min(100, audioPanelState.peakSmoothR * 100);

  const l = document.getElementById('audio-peak-l');
  const r = document.getElementById('audio-peak-r');
  if (l) l.style.width = `${pctL}%`;
  if (r) r.style.width = `${pctR}%`;

  // dB aproximado (aproximación lineal)
  const dbFromPct = (pct) => {
    if (pct <= 1) return '-∞ dB';
    const db = 20 * Math.log10(pct / 100);
    if (db < -60) return '-∞ dB';
    return `${db.toFixed(0)} dB`;
  };

  const lv = document.getElementById('audio-peak-l-value');
  const rv = document.getElementById('audio-peak-r-value');
  if (lv) lv.textContent = dbFromPct(pctL);
  if (rv) rv.textContent = dbFromPct(pctR);

  // Actualizar visualizador de Spotify en el mixer
  const viz = document.querySelector('[data-audio-visualizer]');
  if (viz) {
    const bars = viz.querySelectorAll('.audio-mixer-visualizer-bar');
    if (bars.length > 0 && window.SpotifyApp && SpotifyApp.isPlaying()) {
      const data = SpotifyApp.getAnalyserData();
      if (data && data.length > 0) {
        const step = Math.floor(data.length / bars.length);
        bars.forEach((bar, i) => {
          const v = data[i * step] / 255;
          const h = Math.max(8, v * 100);
          bar.style.height = `${h}%`;
        });
      }
    } else if (bars.length > 0) {
      bars.forEach((bar, i) => {
        const h = 8 + Math.random() * 12;
        bar.style.height = `${h}%`;
      });
    }
  }
}

/* ─── Sync con Spotify ─── */
function syncAudioPanelWithSpotify() {
  if (!window.SpotifyApp) return;
  const spotifyVol = SpotifyApp.getVolume();
  const spotifyMuted = SpotifyApp.isMuted();

  // Si Spotify cambió de volumen (ej: desde el Quick Center), sincronizar master
  const expected = Math.round(audioPanelState.master * 100);
  const actual = Math.round(spotifyVol * 100);
  if (actual !== expected) {
    audioPanelState.master = spotifyVol;
    audioPanelState.masterMuted = spotifyMuted;
    updateAudioMasterUI();
    updateTrayVolumeIcon();
    saveAudioMixerState();
  }

  // Sync estado visual de Spotify en el mixer
  const spotifyAppState = getAudioAppState('music');
  if (spotifyMuted !== spotifyAppState.muted) {
    spotifyAppState.muted = spotifyMuted;
    updateAudioMixerItemUI('music');
  }
}

/* ─── Reset ─── */
function resetAudioMixer() {
  audioPanelState.master = 0.80;
  audioPanelState.masterMuted = false;
  audioPanelState.appVolumes = {};
  audioPanelState.activeDevice = 'speakers';
  saveAudioMixerState();

  if (window.SpotifyApp) {
    if (SpotifyApp.isMuted()) SpotifyApp.toggleMute();
    SpotifyApp.setVolume(0.80);
  }
  const qVol = document.getElementById('volume-slider');
  if (qVol) {
    qVol.value = '80';
    if (typeof syncSliderFill === 'function') syncSliderFill(qVol);
  }
  const qVal = document.getElementById('quick-volume-value');
  if (qVal) qVal.textContent = '80%';
  const trayNum = document.getElementById('tray-volume-num');
  if (trayNum) trayNum.textContent = '80%';

  updateTrayVolumeIcon();
  renderAudioPanel();
  showToast('Mezclador restablecido', 'Volúmenes por defecto restaurados.', 'rotate-ccw');
}

function openAudioSettings() {
  closeAudioPanel();
  if (typeof openApp === 'function') {
    openApp('settings');
    if (typeof settingsState !== 'undefined') {
      settingsState.activeSettingsTab = 'system';
      if (typeof renderSettingsApp === 'function') renderSettingsApp();
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 11/12 — PERFILES + MEDIA PLAYER + FONDOS ANIMADOS
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ★ PERFILES DE USUARIO
═══════════════════════════════════════════════════════════════ */

function switchProfile(profileId) {

  currentProfile = profileId;

  const profileNameEl = document.getElementById('topbar-profile-name');
  const profileIconEl = document.getElementById('topbar-profile-icon');

  const profileMap = {
    gamer:    { name: 'Gamer',    icon: 'gamepad-2', toast: 'Perfil Gamer: Modo Juego activado, HUD y telemetría listos.' },
    streamer: { name: 'Streamer', icon: 'radio',     toast: 'Perfil Streamer: Widgets multimedia y monitoreo de audio en vivo.' },
    studio:   { name: 'Estudio',  icon: 'terminal',  toast: 'Perfil Estudio / Dev: Espacio optimizado para programación con VS Code y Terminal.' }
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
   ★ MEDIA PLAYER SETUP (stub)
   ═══════════════════════════════════════════════════════════════
   El reproductor viejo ya no existe. Todo el manejo de reproducción
   está en `SpotifyApp` (BLOQUE 8). Este stub se deja solo por
   compatibilidad con llamadas que pudieran quedar dando vueltas.
*/

function setupMediaPlayer() {
  // No-op: el reproductor es SpotifyApp (BLOQUE 8).
}

/* ═══════════════════════════════════════════════════════════════
   ★ FONDOS ANIMADOS — Motor de Canvas (Particle / Matrix / Aurora)
   ═══════════════════════════════════════════════════════════════ */

/* ─── Constantes de los fondos animados ─── */
const ANIMATED_BG_IDS = ['particle', 'matrix', 'aurora'];

const ANIMATED_BG_META = {
  particle: {
    id: 'particle',
    name: 'Particle Network',
    description: 'Partículas conectadas que reaccionan al mouse. El más clásico y "wow".',
    accent: '#b4befe'
  },
  matrix: {
    id: 'matrix',
    name: 'Matrix Rain',
    description: 'Lluvia de caracteres verdes estilo Matrix. Encaja perfecto con Cyberpunk.',
    accent: '#00ff41'
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora',
    description: 'Ondas fluidas tipo aurora boreal. Elegante y sin ruido visual.',
    accent: '#89dceb'
  }
};

/* ─── Estado global de los fondos animados ─── */
let currentAnimatedBg = null;
let animatedBgPaused = false;
let animatedBgRafId = null;
let animatedBgCanvas = null;
let animatedBgCtx = null;
let animatedBgParticles = [];
let animatedBgMatrixCols = [];
let animatedBgAuroraTime = 0;
let animatedBgResizeHandler = null;

/* ─── Helpers ─── */
function getAnimatedBgCanvas() {
  if (!animatedBgCanvas) {
    animatedBgCanvas = document.getElementById('animated-bg-canvas');
    if (animatedBgCanvas) {
      animatedBgCtx = animatedBgCanvas.getContext('2d');
    }
  }
  return animatedBgCanvas;
}

function resizeAnimatedBgCanvas() {
  const c = getAnimatedBgCanvas();
  if (!c) return;
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  c.width = Math.floor(w * dpr);
  c.height = Math.floor(h * dpr);
  c.style.width = w + 'px';
  c.style.height = h + 'px';
  if (animatedBgCtx) {
    animatedBgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  if (currentAnimatedBg === 'particle') initParticleState(w, h);
  if (currentAnimatedBg === 'matrix') initMatrixState(w, h);
}

/* ═══════════════════════════════════════════════════════════════
   ★ FONDO 1 — PARTICLE NETWORK
   ═══════════════════════════════════════════════════════════════ */

let particleMouse = { x: -9999, y: -9999 };

function initParticleState(w, h) {
  const count = Math.min(90, Math.floor((w * h) / 18000));
  animatedBgParticles = [];
  for (let i = 0; i < count; i++) {
    animatedBgParticles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 1 + Math.random() * 1.6
    });
  }
}

function drawParticleFrame(w, h, dt) {
  const ctx = animatedBgCtx;
  if (!ctx) return;

  ctx.clearRect(0, 0, w, h);

  const particles = animatedBgParticles;
  const accent = '#b4befe';
  const linkDist = 130;
  const mouseDist = 180;

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    const dx = particleMouse.x - p.x;
    const dy = particleMouse.y - p.y;
    const dist = Math.hypot(dx, dy);
    if (dist < mouseDist && dist > 1) {
      const force = (1 - dist / mouseDist) * 0.04;
      p.vx += (dx / dist) * force;
      p.vy += (dy / dist) * force;
    }

    const speed = Math.hypot(p.vx, p.vy);
    const maxSpeed = 1.4;
    if (speed > maxSpeed) {
      p.vx = (p.vx / speed) * maxSpeed;
      p.vy = (p.vy / speed) * maxSpeed;
    }

    p.vx *= 0.995;
    p.vy *= 0.995;
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.hypot(dx, dy);
      if (d < linkDist) {
        const alpha = (1 - d / linkDist) * 0.35;
        ctx.strokeStyle = `rgba(180, 190, 254, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  for (const p of particles) {
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  for (const p of particles) {
    const dx = p.x - particleMouse.x;
    const dy = p.y - particleMouse.y;
    const d = Math.hypot(dx, dy);
    if (d < mouseDist) {
      const alpha = (1 - d / mouseDist) * 0.5;
      ctx.strokeStyle = `rgba(180, 190, 254, ${alpha.toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(particleMouse.x, particleMouse.y);
      ctx.stroke();
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ FONDO 2 — MATRIX RAIN
   ═══════════════════════════════════════════════════════════════ */

const MATRIX_CHARS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEF';

function initMatrixState(w, h) {
  const fontSize = 16;
  const cols = Math.floor(w / fontSize);
  animatedBgMatrixCols = [];
  for (let i = 0; i < cols; i++) {
    animatedBgMatrixCols.push({
      y: Math.random() * h,
      speed: 0.5 + Math.random() * 1.5
    });
  }
}

function drawMatrixFrame(w, h, dt) {
  const ctx = animatedBgCtx;
  if (!ctx) return;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, w, h);

  const fontSize = 16;
  const cols = Math.floor(w / fontSize);

  while (animatedBgMatrixCols.length < cols) {
    animatedBgMatrixCols.push({ y: Math.random() * h, speed: 0.5 + Math.random() * 1.5 });
  }

  ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

  for (let i = 0; i < cols; i++) {
    const col = animatedBgMatrixCols[i];
    if (!col) continue;

    const ch = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    const x = i * fontSize;
    const y = col.y;

    ctx.fillStyle = '#ccffdd';
    ctx.fillText(ch, x, y);

    ctx.fillStyle = 'rgba(0, 255, 65, 0.55)';
    ctx.fillText(ch, x, y - fontSize);

    col.y += col.speed * (fontSize / 3);
    if (col.y > h + 40) {
      col.y = -20 - Math.random() * 200;
      col.speed = 0.5 + Math.random() * 1.5;
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ FONDO 3 — AURORA (ondas fluidas)
   ═══════════════════════════════════════════════════════════════ */

function initAuroraState() {
  animatedBgAuroraTime = 0;
}

function drawAuroraFrame(w, h, dt) {
  const ctx = animatedBgCtx;
  if (!ctx) return;

  ctx.fillStyle = 'rgba(5, 7, 14, 0.35)';
  ctx.fillRect(0, 0, w, h);

  animatedBgAuroraTime += dt * 0.0004;

  const t = animatedBgAuroraTime;
  const layers = 4;

  for (let i = 0; i < layers; i++) {
    const offsetY = h * (0.35 + i * 0.08);
    const amp = 40 + i * 25;
    const speed = 0.6 + i * 0.3;
    const hueShift = i * 40;

    const hue1 = (180 + hueShift) % 360;
    const hue2 = (280 + hueShift) % 360;
    const grad = ctx.createLinearGradient(0, offsetY - amp, 0, offsetY + amp * 2);
    grad.addColorStop(0, `hsla(${hue1}, 80%, 60%, 0)`);
    grad.addColorStop(0.4, `hsla(${hue1}, 80%, 60%, 0.18)`);
    grad.addColorStop(0.7, `hsla(${hue2}, 80%, 60%, 0.12)`);
    grad.addColorStop(1, `hsla(${hue2}, 80%, 60%, 0)`);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, h);

    for (let x = 0; x <= w; x += 8) {
      const y =
        offsetY +
        Math.sin((x * 0.005) + t * speed + i * 1.3) * amp +
        Math.sin((x * 0.012) + t * speed * 1.7 + i * 0.7) * (amp * 0.4);
      ctx.lineTo(x, y);
    }

    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ LOOP PRINCIPAL
   ═══════════════════════════════════════════════════════════════ */

let lastAnimatedBgFrameTime = 0;

function animatedBgLoop(now) {
  animatedBgRafId = requestAnimationFrame(animatedBgLoop);

  if (animatedBgPaused) return;

  const c = getAnimatedBgCanvas();
  if (!c || !animatedBgCtx) return;

  const w = window.innerWidth;
  const h = window.innerHeight;
  const dt = lastAnimatedBgFrameTime ? Math.min(48, now - lastAnimatedBgFrameTime) : 16;
  lastAnimatedBgFrameTime = now;

  if (currentAnimatedBg === 'particle') {
    drawParticleFrame(w, h, dt);
  } else if (currentAnimatedBg === 'matrix') {
    drawMatrixFrame(w, h, dt);
  } else if (currentAnimatedBg === 'aurora') {
    drawAuroraFrame(w, h, dt);
  }
}

function startAnimatedBgLoop() {
  if (animatedBgRafId !== null) return;
  lastAnimatedBgFrameTime = 0;
  animatedBgRafId = requestAnimationFrame(animatedBgLoop);
}

function stopAnimatedBgLoop() {
  if (animatedBgRafId !== null) {
    cancelAnimationFrame(animatedBgRafId);
    animatedBgRafId = null;
  }
}

/* ═══════════════════════════════════════════════════════════════
   ★ API PÚBLICA — aplicar / limpiar / pausar
   ═══════════════════════════════════════════════════════════════ */

function applyAnimatedBackground(id) {
  if (!ANIMATED_BG_IDS.includes(id)) return;

  const c = getAnimatedBgCanvas();
  if (!c) return;

  if (currentAnimatedBg === id) {
    clearAnimatedBackground();
    return;
  }

  if (animatedBgCtx) {
    animatedBgCtx.clearRect(0, 0, c.width, c.height);
  }

  currentAnimatedBg = id;

  resizeAnimatedBgCanvas();

  if (id === 'particle') {
    initParticleState(window.innerWidth, window.innerHeight);
    attachParticleMouseListeners();
  }
  if (id === 'matrix') {
    initMatrixState(window.innerWidth, window.innerHeight);
    detachParticleMouseListeners();
  }
  if (id === 'aurora') {
    initAuroraState();
    detachParticleMouseListeners();
  }

  c.classList.add('active');
  c.classList.remove('paused');

  startAnimatedBgLoop();

  try {
    localStorage.setItem('nebula-os:animated-bg', id);
  } catch (e) {}

  if (typeof showToast === 'function') {
    showToast('Fondo Animado', `Se activó "${ANIMATED_BG_META[id].name}".`, 'sparkles');
  }

  if (typeof renderSettingsApp === 'function') renderSettingsApp();
}

function clearAnimatedBackground() {
  const c = getAnimatedBgCanvas();
  if (c) {
    c.classList.remove('active', 'paused');
    if (animatedBgCtx) animatedBgCtx.clearRect(0, 0, c.width, c.height);
  }

  currentAnimatedBg = null;
  animatedBgParticles = [];
  animatedBgMatrixCols = [];
  detachParticleMouseListeners();

  try {
    localStorage.removeItem('nebula-os:animated-bg');
  } catch (e) {}

  if (typeof showToast === 'function') {
    showToast('Fondo Animado', 'Se restauró el wallpaper estático.', 'image');
  }

  if (typeof renderSettingsApp === 'function') renderSettingsApp();
}

function setAnimatedBgPaused(paused) {
  animatedBgPaused = !!paused;
  const c = getAnimatedBgCanvas();
  if (!c) return;
  c.classList.toggle('paused', animatedBgPaused);
}

/* ─── Listeners del mouse (solo para particle) ─── */
let particleMouseListenerAttached = false;

function onParticleMouseMove(e) {
  particleMouse.x = e.clientX;
  particleMouse.y = e.clientY;
}

function onParticleMouseLeave() {
  particleMouse.x = -9999;
  particleMouse.y = -9999;
}

function attachParticleMouseListeners() {
  if (particleMouseListenerAttached) return;
  particleMouseListenerAttached = true;
  document.addEventListener('mousemove', onParticleMouseMove, { passive: true });
  document.addEventListener('mouseleave', onParticleMouseLeave);
}

function detachParticleMouseListeners() {
  if (!particleMouseListenerAttached) return;
  particleMouseListenerAttached = false;
  document.removeEventListener('mousemove', onParticleMouseMove);
  document.removeEventListener('mouseleave', onParticleMouseLeave);
}

/* ═══════════════════════════════════════════════════════════════
   ★ INICIALIZACIÓN
   ═══════════════════════════════════════════════════════════════ */

function initAnimatedBackground() {
  if (!animatedBgResizeHandler) {
    animatedBgResizeHandler = () => {
      if (currentAnimatedBg) resizeAnimatedBgCanvas();
    };
    window.addEventListener('resize', animatedBgResizeHandler);
  }

  let saved = null;
  try {
    saved = localStorage.getItem('nebula-os:animated-bg');
  } catch (e) {}

  if (saved && ANIMATED_BG_IDS.includes(saved)) {
    const c = getAnimatedBgCanvas();
    if (!c) return;

    currentAnimatedBg = saved;
    resizeAnimatedBgCanvas();

    if (saved === 'particle') {
      initParticleState(window.innerWidth, window.innerHeight);
      attachParticleMouseListeners();
    } else if (saved === 'matrix') {
      initMatrixState(window.innerWidth, window.innerHeight);
    } else if (saved === 'aurora') {
      initAuroraState();
    }

    c.classList.add('active');
    startAnimatedBgLoop();
  }
}

function syncAnimatedBgWithGameMode() {
  if (typeof gameModeActive === 'undefined') return;
  setAnimatedBgPaused(!!gameModeActive);
}

/* ═══════════════════════════════════════════════════════════════
   ★ GALERÍA DE FONDOS ANIMADOS EN EL DESIGNER
   ═══════════════════════════════════════════════════════════════ */

function getAnimatedBgsGalleryHTML() {
  return `
    <div class="animated-bg-section">
      <div class="animated-bg-section-header">
        <i data-lucide="sparkles"></i>
        <span>Fondos Animados</span>
      </div>

      <div class="designer-presets-grid">
        ${ANIMATED_BG_IDS.map(id => {
          const meta = ANIMATED_BG_META[id];
          const isActive = currentAnimatedBg === id;
          const isPaused = animatedBgPaused && isActive;

          return `
            <div class="theme-preset-card animated-bg-card ${isActive ? 'selected' : ''} ${isPaused ? 'paused' : ''}"
                 onclick="applyAnimatedBackground('${id}')">
              <div class="animated-bg-preview">
                <span class="animated-bg-badge">
                  <i data-lucide="${isPaused ? 'pause' : 'play'}"></i>
                  ${isPaused ? 'Pausado' : 'Animado'}
                </span>
                <canvas class="animated-bg-canvas-preview" data-bg-preview="${id}"></canvas>
              </div>
              <strong>${meta.name}</strong>
              <small>${meta.description}</small>
            </div>
          `;
        }).join('')}
      </div>

      <div class="animated-bg-note">
        <i data-lucide="info"></i>
        <small>
          Los fondos animados usan <strong>Canvas</strong> nativo del navegador, sin librerías externas.
          Se <strong>pausan automáticamente</strong> cuando activás Modo Juego para ahorrar recursos.
          <strong>Son excluyentes</strong> con los fondos estáticos.
        </small>
      </div>
    </div>
  `;
}

/* ─── Previews animadas (mini canvas) ─── */
let animatedBgPreviewRafId = null;
let animatedBgPreviewCanvases = [];

function drawMiniParticlePreview(ctx, w, h, time) {
  ctx.clearRect(0, 0, w, h);

  const cols = 5;
  const rows = 3;
  const pts = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const baseX = (c + 1) * (w / (cols + 1));
      const baseY = (r + 1) * (h / (rows + 1));
      const offsetX = Math.sin(time * 0.0015 + c + r) * 6;
      const offsetY = Math.cos(time * 0.0018 + c * 0.5 + r) * 4;
      pts.push({ x: baseX + offsetX, y: baseY + offsetY });
    }
  }

  ctx.strokeStyle = 'rgba(180, 190, 254, 0.35)';
  ctx.lineWidth = 1;
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const d = Math.hypot(dx, dy);
      if (d < Math.min(w, h) * 0.4) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.stroke();
      }
    }
  }

  ctx.fillStyle = '#b4befe';
  for (const p of pts) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawMiniMatrixPreview(ctx, w, h, time) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
  ctx.fillRect(0, 0, w, h);

  const fontSize = 8;
  ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

  const cols = Math.floor(w / fontSize);
  const t = (time * 0.03) % h;

  for (let i = 0; i < cols; i++) {
    const x = i * fontSize;
    const y = ((t + i * 12) % h);
    const ch = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    ctx.fillStyle = 'rgba(0, 255, 65, 0.85)';
    ctx.fillText(ch, x, y);
  }
}

function drawMiniAuroraPreview(ctx, w, h, time) {
  ctx.fillStyle = 'rgba(5, 7, 14, 0.4)';
  ctx.fillRect(0, 0, w, h);

  const t = time * 0.001;
  const layers = 2;
  for (let i = 0; i < layers; i++) {
    const offsetY = h * (0.4 + i * 0.15);
    const amp = 8 + i * 5;
    const hue1 = (180 + i * 60) % 360;
    const hue2 = (280 + i * 60) % 360;

    const grad = ctx.createLinearGradient(0, offsetY - amp, 0, offsetY + amp * 2);
    grad.addColorStop(0, `hsla(${hue1}, 80%, 60%, 0)`);
    grad.addColorStop(0.5, `hsla(${hue1}, 80%, 60%, 0.35)`);
    grad.addColorStop(1, `hsla(${hue2}, 80%, 60%, 0)`);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 3) {
      const y =
        offsetY +
        Math.sin(x * 0.05 + t * (0.6 + i * 0.4)) * amp +
        Math.sin(x * 0.12 + t * 0.8 + i) * (amp * 0.5);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();
  }
}

function startAnimatedBgPreviewLoop() {
  if (animatedBgPreviewRafId !== null) return;

  const loop = (now) => {
    animatedBgPreviewRafId = requestAnimationFrame(loop);

    for (const item of animatedBgPreviewCanvases) {
      const { canvas, id } = item;
      if (!canvas.isConnected) continue;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      if (id === 'particle') drawMiniParticlePreview(ctx, w, h, now);
      else if (id === 'matrix') drawMiniMatrixPreview(ctx, w, h, now);
      else if (id === 'aurora') drawMiniAuroraPreview(ctx, w, h, now);
    }
  };

  animatedBgPreviewRafId = requestAnimationFrame(loop);
}

function stopAnimatedBgPreviewLoop() {
  if (animatedBgPreviewRafId !== null) {
    cancelAnimationFrame(animatedBgPreviewRafId);
    animatedBgPreviewRafId = null;
  }
}

function syncAnimatedBgPreviews() {
  const canvases = document.querySelectorAll('.animated-bg-canvas-preview[data-bg-preview]');
  if (canvases.length === 0) {
    animatedBgPreviewCanvases = [];
    stopAnimatedBgPreviewLoop();
    return;
  }

  animatedBgPreviewCanvases = Array.from(canvases).map(c => ({
    canvas: c,
    id: c.dataset.bgPreview
  }));

  startAnimatedBgPreviewLoop();
}

/* ═══════════════════════════════════════════════════════════════
   ★ PARTE 12/12 — CIERRE
   ═══════════════════════════════════════════════════════════════ */

/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  NEBULA OS — script.js                                        ║
 * ║  Reorganizado y optimizado                                    ║
 * ║  © Nebula Team                                                ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  ESTRUCTURA DEL ARCHIVO (por orden de aparición):
 *
 *  PARTE 1  → Configuración y constantes
 *             APPS, DOCK_APPS, TABBED_APPS, WIDGET_CATALOG,
 *             WEATHER_CITIES, WMO_CODE_MAP, WALLPAPERS, THEME_PRESETS,
 *             STORE_THEMES, DOCK_PREVIEW_STYLES, SHIELD_FEATURES,
 *             VPN_SERVERS, STORE_PRODUCTS, VAULT_CATEGORIES,
 *             ACTIVITY_CATEGORIES, GAMELIB_GAMES, TASKMGR_SYSTEM_PROCESSES,
 *             VSC_FILE_TREE, VSC_FILE_CONTENTS, VSC_PROBLEMS, STARS_CONFIG,
 *             BLUETOOTH_DEVICES, WIFI_NETWORKS, todas las STORAGE_KEYS,
 *             constantes de animación y de toasts.
 *             + Constantes de Spotify (SPOTIFY_*).
 *
 *  PARTE 2  → Estado global (variables mutables)
 *             openWindows, activeWinId, currentWorkspace, systemMetrics,
 *             gameModeActive, currentProfile, designerState, shieldState,
 *             updatesState, notifications, desktopWidgets, storeProducts,
 *             settingsState, vaultState, activityLog, taskmgr*, gamelib*,
 *             vsc*, FILE_SYSTEM, stars*, etc.
 *             + Objeto `spotify` (runtime state del reproductor).
 *
 *  PARTE 3  → Helpers y utilidades
 *             refreshIcons, escapeHtml, generateWinId, getInstancesOfApp,
 *             normalizeZIndexes, syncSliderFill, updateClock, formatTime,
 *             getTimeAgo, getRelativeTime, updateBatteryUI,
 *             getWifiSignalClass, getBluetoothDeviceById, getCityById,
 *             getWmoInfo, formatGameHours, getVscFileByName, highlightVscLine,
 *             calculatePasswordStrength, generatePassword, updateMetrics,
 *             simulatePing, buildDockPreviewHTML, getAppTileHTML.
 *             + Helpers de Spotify (spFormatTime, spGetTrackCover, etc.).
 *
 *  PARTE 4  → Bootstrap principal
 *             DOMContentLoaded (async), setupUIActions, setupShortcuts,
 *             saveSessionState, restoreSessionState, loadPersistedState,
 *             applySettings, migrateNotesFormat, setupSliders,
 *             setupAdvancedWidget, updateWidgetTime, simulateMetrics,
 *             setupDeviceStatus, setupKeyboardAccessibility,
 *             switchWorkspace, moveWindowToWorkspace, setupWmTrashZone,
 *             setupTelemetryLoop, setupWeatherAutoRefresh,
 *             setupSpotifyIntegration + subfunciones.
 *
 *  PARTE 5  → Sistema de ventanas
 *             openApp, focusWindow, closeApp (sin pausar música),
 *             maximizeApp, restoreWindow, minimizeApp, setupWindowResize,
 *             sistema de tabs, runWindowAnimation, updateTopBar, renderDock,
 *             dock previews, dock context menu, Window Manager completo,
 *             getAppContent (router principal).
 *
 *  PARTE 6  → Overlays y menús
 *             Launcher, Context Menu, Control/Quick Center,
 *             Notification Center overlay, Store overlay,
 *             WiFi panel, Bluetooth panel,
 *             Files context menu + rename modal + move menu,
 *             Weather city dropdown.
 *
 *  PARTE 7  → Widgets + Notificaciones + Toasts
 *             addDesktopWidget, removeDesktopWidget, saveDesktopWidgets,
 *             renderDesktopWidgets, setupDraggableWidget, updateWidgetStats,
 *             addWeatherWidget, fetchWeatherForCity, renderWeatherWidgetHTML,
 *             addGamingHubWidget, renderGamingHubWidgetHTML,
 *             updateGamingHubWidget, addNotificationToHistory,
 *             updateNotifBadge, renderNotificationCenter, showToast,
 *             closeToast, calendario y notas.
 *
 *  PARTE 8  → Multimedia: APP SPOTIFY COMPLETA
 *             SpotifyApp (motor de audio HTMLAudioElement + Web Audio API),
 *             getSpotifyAppHTML, setupSpotifyApp, vistas (Home, Playlist,
 *             Artist, Album, Search, Liked, Library, Queue), tracklist,
 *             visualizer, track menu, modales de playlists,
 *             wrappers globales, integración con Control Center / HUD / Nova.
 *
 *  PARTE 9A → Nova AI + Files + Settings
 *             setupNovaAI, parseAndExecuteNovaAction (con Spotify),
 *             getDefaultFileSystem, setupFiles, fsRefresh, fsBindGridEvents,
 *             fsHandleDrop, fsUpdatePreview, searchFilesInSystem,
 *             renderSettingsApp, setSettingsTab, runShieldScan,
 *             getShieldSecurityHTML, getShieldVaultHTML,
 *             getSystemSettingsHTML, getGamingSettingsHTML,
 *             getDesignerStylesHTML, getDesignerWallpapersHTML,
 *             getUpdatesSettingsHTML, getSettingsNavHTML.
 *
 *  PARTE 9B → Vault + Activity + Task Manager + Game Library +
 *             VSCode + Browser
 *             loadVaultEntries, getVaultAppHTML, renderVault,
 *             attemptUnlockVault, modales del Vault,
 *             logActivity, renderActivityApp, getTaskmgrAppHTML,
 *             buildTaskmgrProcesses, renderGamelibApp,
 *             setupVscApp, getVscAppHTML, setupBrowserApp.
 *
 *  PARTE 10 → Features del sistema
 *             applyThemePreset, setLive* (Designer),
 *             applyWallpaper, createStars, setStarsParallaxEnabled,
 *             toggleGameMode, toggleGamerOverlay, updateHUDTelemetry,
 *             takeGamerScreenshot, simulateRamBoost,
 *             renderStore, installStoreProduct, uninstallStoreProduct,
 *             toggleWifi, toggleBluetooth, renderConnectivityState,
 *             toggleDnd, applyBrightness.
 *
 *  PARTE 11 → Perfiles + Media Player + Fondos animados
 *             switchProfile, closeAllOpenApps, setupMediaPlayer (stub),
 *             motor de fondos animados (Particle, Matrix, Aurora),
 *             getAnimatedBgsGalleryHTML, syncAnimatedBgPreviews.
 *
 *  PARTE 12 → Este cierre.
 *
 *
 *  NOTAS DE MANTENIMIENTO:
 *
 *  · Todas las variables `stars*` y `STARS_CONFIG` están declaradas UNA SOLA VEZ
 *    en las PARTES 1 y 2. NO deben redeclararse en ninguna otra parte.
 *
 *  · `getAppContent()` es el ROUTER principal. Si agregás una app nueva,
 *    registrala en APPS, agregala al switch de getAppContent, y agregá su
 *    setup en openApp().
 *
 *  · Para agregar un widget nuevo: agregalo a WIDGET_CATALOG, a los
 *    defaultPositions en addDesktopWidget(), y a renderDesktopWidgets().
 *
 *  · Para agregar un tema nuevo: agregalo a THEME_PRESETS y automáticamente
 *    va a aparecer en el Designer.
 *
 *  · El sistema de Toasts usa `activeToasts` (array) — no redeclarar.
 *
 *  · El sistema de session usa `SESSION_STORAGE_KEY` — no redeclarar.
 *
 *  · ★ El motor de Spotify vive en `SpotifyApp` (IIFE en PARTE 8).
 *    El estado runtime está en `spotify` (PARTE 2).
 *    La persistencia usa `SPOTIFY_STORAGE_KEY`.
 *    La biblioteca viene de `assets/music/library.json` con fallback a
 *    `SPOTIFY_DEFAULT_LIBRARY`.
 *
 *  · Si modificás el diseño CSS, revisá los nombres de clases en el HTML
 *    generado por JS. Todas las clases usan el prefijo del componente
 *    (ej: `weather-`, `shield-`, `vault-`, `taskmgr-`, `gamelib-`, `vsc-`,
 *    `sp-` para Spotify).
 *
 * ═══════════════════════════════════════════════════════════════
 */

/* FIN DEL ARCHIVO */