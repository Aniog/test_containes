// Generates a premium, warm-toned SVG placeholder for product imagery.
// Each "scene" renders gold jewelry on an editorial dark/neutral backdrop.
// Returns a data URL so it can be used directly as <img src>.

const palettes = {
  // Warm deep cocoa — flagship backdrop
  cocoa: { bg1: "#1F1813", bg2: "#3F322A", accent: "#E2C07A" },
  // Espresso black
  noir: { bg1: "#0F0B08", bg2: "#221813", accent: "#C99A4A" },
  // Champagne
  champagne: { bg1: "#3B2E22", bg2: "#5A4836", accent: "#F1DFAE" },
  // Sand
  sand: { bg1: "#5A4A3C", bg2: "#7A6A58", accent: "#FBF1DC" },
};

function svgHeader(w, h, p) {
  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
  <defs>
    <radialGradient id='rg' cx='35%' cy='30%' r='85%'>
      <stop offset='0%' stop-color='${p.bg2}'/>
      <stop offset='60%' stop-color='${p.bg1}'/>
      <stop offset='100%' stop-color='#000'/>
    </radialGradient>
    <radialGradient id='gold' cx='50%' cy='40%' r='60%'>
      <stop offset='0%' stop-color='#FBEFC4'/>
      <stop offset='55%' stop-color='${p.accent}'/>
      <stop offset='100%' stop-color='#876320'/>
    </radialGradient>
    <radialGradient id='goldSoft' cx='50%' cy='50%' r='60%'>
      <stop offset='0%' stop-color='${p.accent}' stop-opacity='0.85'/>
      <stop offset='100%' stop-color='${p.accent}' stop-opacity='0'/>
    </radialGradient>
    <linearGradient id='skin' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='#C49A78'/>
      <stop offset='100%' stop-color='#7A4F38'/>
    </linearGradient>
  </defs>
  <rect width='${w}' height='${h}' fill='url(#rg)'/>`;
}

// Earring — small gold hoop with crystal pendant
function sceneEarring(w, h, p) {
  const cx = w * 0.5;
  const cy = h * 0.46;
  return `${svgHeader(w, h, p)}
  <g transform='translate(${cx} ${cy})'>
    <ellipse cx='0' cy='40' rx='180' ry='20' fill='#000' opacity='0.35'/>
    <path d='M 0 -150 a 95 95 0 1 1 -0.1 0 z' fill='none' stroke='url(#gold)' stroke-width='14'/>
    <path d='M 0 -150 a 95 95 0 1 1 -0.1 0 z' fill='none' stroke='#FBEFC4' stroke-width='2' opacity='0.7'/>
    <line x1='0' y1='40' x2='0' y2='110' stroke='url(#gold)' stroke-width='3'/>
    <circle cx='0' cy='130' r='26' fill='url(#gold)'/>
    <circle cx='-7' cy='123' r='8' fill='#FFF7DA' opacity='0.7'/>
    <ellipse cx='0' cy='130' rx='36' ry='36' fill='url(#goldSoft)' opacity='0.4'/>
  </g>
  <circle cx='${w * 0.78}' cy='${h * 0.22}' r='1.4' fill='#FBEFC4' opacity='0.6'/>
  <circle cx='${w * 0.18}' cy='${h * 0.72}' r='1.2' fill='#FBEFC4' opacity='0.5'/>
</svg>`;
}

// Huggie — chunky gold dome
function sceneHuggie(w, h, p) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  return `${svgHeader(w, h, p)}
  <g transform='translate(${cx} ${cy})'>
    <ellipse cx='0' cy='130' rx='220' ry='30' fill='#000' opacity='0.35'/>
    <path d='M -130 0 a 130 130 0 0 1 260 0' fill='none' stroke='url(#gold)' stroke-width='42' stroke-linecap='round'/>
    <path d='M -130 0 a 130 130 0 0 1 260 0' fill='none' stroke='#FBEFC4' stroke-width='3' opacity='0.55'/>
    <circle cx='0' cy='-130' r='12' fill='url(#gold)'/>
    <ellipse cx='-40' cy='-90' rx='60' ry='14' fill='#FFF7DA' opacity='0.35'/>
  </g>
</svg>`;
}

// Necklace — pendant on chain, draped
function sceneNecklace(w, h, p) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  return `${svgHeader(w, h, p)}
  <g>
    <path d='M ${cx - 320} ${cy - 240} Q ${cx} ${cy + 80} ${cx + 320} ${cy - 240}' fill='none' stroke='url(#gold)' stroke-width='3'/>
    <path d='M ${cx - 320} ${cy - 240} Q ${cx} ${cy + 80} ${cx + 320} ${cy - 240}' fill='none' stroke='#FBEFC4' stroke-width='1' opacity='0.5'/>
    <g transform='translate(${cx} ${cy + 60})'>
      <ellipse cx='0' cy='20' rx='90' ry='14' fill='#000' opacity='0.3'/>
      <circle cx='0' cy='0' r='34' fill='url(#gold)'/>
      <circle cx='-8' cy='-8' r='10' fill='#FFF7DA' opacity='0.7'/>
      <ellipse cx='0' cy='0' rx='48' ry='48' fill='url(#goldSoft)' opacity='0.4'/>
    </g>
  </g>
</svg>`;
}

// Set — earring + necklace composition
function sceneSet(w, h, p) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  return `${svgHeader(w, h, p)}
  <g>
    <path d='M ${cx - 200} ${cy - 160} Q ${cx} ${cy - 20} ${cx + 200} ${cy - 160}' fill='none' stroke='url(#gold)' stroke-width='2.5'/>
    <g transform='translate(${cx - 180} ${cy + 30})'>
      <path d='M 0 -60 a 35 35 0 1 1 -0.1 0 z' fill='none' stroke='url(#gold)' stroke-width='7'/>
      <line x1='0' y1='20' x2='0' y2='48' stroke='url(#gold)' stroke-width='2'/>
      <circle cx='0' cy='58' r='10' fill='url(#gold)'/>
    </g>
    <g transform='translate(${cx + 180} ${cy + 30})'>
      <path d='M 0 -60 a 35 35 0 1 1 -0.1 0 z' fill='none' stroke='url(#gold)' stroke-width='7'/>
      <line x1='0' y1='20' x2='0' y2='48' stroke='url(#gold)' stroke-width='2'/>
      <circle cx='0' cy='58' r='10' fill='url(#gold)'/>
    </g>
    <g transform='translate(${cx} ${cy + 100})'>
      <circle cx='0' cy='0' r='22' fill='url(#gold)'/>
      <circle cx='-5' cy='-5' r='6' fill='#FFF7DA' opacity='0.7'/>
    </g>
  </g>
</svg>`;
}

// Lace earrings — floral filigree drop
function sceneLace(w, h, p) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  return `${svgHeader(w, h, p)}
  <g transform='translate(${cx} ${cy})'>
    <ellipse cx='0' cy='160' rx='200' ry='24' fill='#000' opacity='0.3'/>
    <g transform='translate(-140 0) rotate(-12)'>
      <circle r='46' fill='url(#gold)'/>
      <g fill='none' stroke='#876320' stroke-width='1.5' opacity='0.6'>
        <path d='M -30 0 Q 0 -30 30 0 Q 0 30 -30 0 Z'/>
        <path d='M -22 -22 Q 0 -8 22 -22'/>
        <path d='M -22 22 Q 0 8 22 22'/>
      </g>
      <line x1='0' y1='46' x2='0' y2='100' stroke='url(#gold)' stroke-width='2.5'/>
      <path d='M 0 100 Q -22 130 0 160 Q 22 130 0 100 Z' fill='url(#gold)'/>
    </g>
    <g transform='translate(140 0) rotate(12)'>
      <circle r='46' fill='url(#gold)'/>
      <g fill='none' stroke='#876320' stroke-width='1.5' opacity='0.6'>
        <path d='M -30 0 Q 0 -30 30 0 Q 0 30 -30 0 Z'/>
        <path d='M -22 -22 Q 0 -8 22 -22'/>
        <path d='M -22 22 Q 0 8 22 22'/>
      </g>
      <line x1='0' y1='46' x2='0' y2='100' stroke='url(#gold)' stroke-width='2.5'/>
      <path d='M 0 100 Q -22 130 0 160 Q 22 130 0 100 Z' fill='url(#gold)'/>
    </g>
  </g>
</svg>`;
}

// Hero — close-up model wearing earring + necklace (skin tone)
function sceneHero(w, h, p) {
  return `${svgHeader(w, h, p)}
  <g>
    <!-- Soft skin-tone "ear" backdrop -->
    <ellipse cx='${w * 0.62}' cy='${h * 0.5}' rx='${w * 0.32}' ry='${h * 0.5}' fill='url(#skin)' opacity='0.18'/>
    <!-- Earring -->
    <g transform='translate(${w * 0.7} ${h * 0.42})'>
      <path d='M 0 -80 a 50 50 0 1 1 -0.1 0 z' fill='none' stroke='url(#gold)' stroke-width='8'/>
      <line x1='0' y1='18' x2='0' y2='70' stroke='url(#gold)' stroke-width='2.5'/>
      <circle cx='0' cy='88' r='18' fill='url(#gold)'/>
      <circle cx='-4' cy='84' r='5' fill='#FFF7DA' opacity='0.7'/>
      <ellipse cx='0' cy='88' rx='26' ry='26' fill='url(#goldSoft)' opacity='0.4'/>
    </g>
    <!-- Necklace -->
    <path d='M ${w * 0.05} ${h * 0.18} Q ${w * 0.5} ${h * 0.7} ${w * 0.95} ${h * 0.18}' fill='none' stroke='url(#gold)' stroke-width='2'/>
    <g transform='translate(${w * 0.5} ${h * 0.6})'>
      <circle r='18' fill='url(#gold)'/>
      <circle cx='-4' cy='-4' r='5' fill='#FFF7DA' opacity='0.7'/>
    </g>
  </g>
  <!-- Subtle vignette -->
  <rect width='${w}' height='${h}' fill='url(#rg)' opacity='0.0'/>
  <circle cx='${w * 0.2}' cy='${h * 0.85}' r='1.5' fill='#FBEFC4' opacity='0.6'/>
  <circle cx='${w * 0.85}' cy='${h * 0.12}' r='1.2' fill='#FBEFC4' opacity='0.5'/>
</svg>`;
}

// Reel card — vertical 9:16 with model and jewelry
function sceneReel(w, h, p, label) {
  return `${svgHeader(w, h, p)}
  <g>
    <!-- Soft neck/shoulder silhouette -->
    <path d='M ${w * 0.5} ${h * 0.05} L ${w * 0.05} ${h} L ${w * 0.95} ${h} Z' fill='url(#skin)' opacity='0.28'/>
    <!-- Necklace -->
    <path d='M ${w * 0.15} ${h * 0.32} Q ${w * 0.5} ${h * 0.62} ${w * 0.85} ${h * 0.32}' fill='none' stroke='url(#gold)' stroke-width='2.2'/>
    <g transform='translate(${w * 0.5} ${h * 0.58})'>
      <circle r='16' fill='url(#gold)'/>
      <circle cx='-4' cy='-4' r='4' fill='#FFF7DA' opacity='0.7'/>
    </g>
    <!-- Earring -->
    <g transform='translate(${w * 0.78} ${h * 0.38})'>
      <path d='M 0 -40 a 22 22 0 1 1 -0.1 0 z' fill='none' stroke='url(#gold)' stroke-width='4'/>
      <line x1='0' y1='8' x2='0' y2='36' stroke='url(#gold)' stroke-width='1.8'/>
      <circle cx='0' cy='44' r='8' fill='url(#gold)'/>
    </g>
  </g>
  <!-- Soft bottom gradient for caption -->
  <defs>
    <linearGradient id='fade' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='#000' stop-opacity='0'/>
      <stop offset='100%' stop-color='#000' stop-opacity='0.55'/>
    </linearGradient>
  </defs>
  <rect x='0' y='${h * 0.55}' width='${w}' height='${h * 0.45}' fill='url(#fade)'/>
  <text x='${w / 2}' y='${h * 0.86}' text-anchor='middle' font-family='Cormorant Garamond, Georgia, serif' font-style='italic' font-size='${Math.round(w * 0.07)}' fill='#F5EFE5' opacity='0.95'>${label}</text>
</svg>`;
}

// Category tile — single hero of category
function sceneCategory(w, h, p, accent) {
  return `${svgHeader(w, h, p)}
  <g transform='translate(${w / 2} ${h / 2})'>
    <ellipse cx='0' cy='80' rx='${w * 0.32}' ry='14' fill='#000' opacity='0.3'/>
    <circle r='${Math.min(w, h) * 0.16}' fill='url(#gold)'/>
    <circle r='${Math.min(w, h) * 0.16 - 10}' fill='none' stroke='#876320' stroke-width='1.5' opacity='0.5'/>
    <circle r='${Math.min(w, h) * 0.08}' fill='none' stroke='#FBEFC4' stroke-width='1.5' opacity='0.8'/>
    <text y='${Math.min(w, h) * 0.24}' text-anchor='middle' font-family='Inter, sans-serif' font-size='${Math.round(w * 0.04)}' fill='#FBEFC4' letter-spacing='6'>${accent}</text>
  </g>
</svg>`;
}

function encode(svg) {
  // Use base64 to safely embed into data URL
  if (typeof window === "undefined") {
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

export function productImage({ scene = "earring", palette = "cocoa", w = 800, h = 1000, variant = 1 } = {}) {
  const p = palettes[palette] || palettes.cocoa;
  let svg = "";
  if (scene === "earring") svg = sceneEarring(w, h, p);
  else if (scene === "huggie") svg = sceneHuggie(w, h, p);
  else if (scene === "necklace") svg = sceneNecklace(w, h, p);
  else if (scene === "set") svg = sceneSet(w, h, p);
  else if (scene === "lace") svg = sceneLace(w, h, p);
  else if (scene === "hero") svg = sceneHero(w, h, p);
  else if (scene === "reel") svg = sceneReel(w, h, p, variant);
  else if (scene === "category") svg = sceneCategory(w, h, p, variant);
  else svg = sceneEarring(w, h, p);
  return encode(svg);
}

export const PALETTES = palettes;
