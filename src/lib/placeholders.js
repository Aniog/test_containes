// Editorial SVG placeholders that look like warm-lit gold jewelry compositions.
// They are deterministic so we can use them as image sources and as gallery images.
// Switch to real photography by replacing the `images` array in src/data/products.js.

const PALETTES = {
  // Warm chocolate studio with golden subject
  amber: {
    bg1: "#2A1F18",
    bg2: "#1B1310",
    bg3: "#3A2A1F",
    glow: "#D6A55A",
    accent: "#F1C97A",
    shadow: "#120B07",
    line: "#7A5A33",
  },
  // Soft taupe editorial
  taupe: {
    bg1: "#3D332A",
    bg2: "#26201A",
    bg3: "#4A3E32",
    glow: "#E1B673",
    accent: "#F4D29A",
    shadow: "#15110D",
    line: "#876B45",
  },
  // Deep umber
  umber: {
    bg1: "#1F1612",
    bg2: "#100B08",
    bg3: "#2C2018",
    glow: "#C99650",
    accent: "#EBC382",
    shadow: "#0A0604",
    line: "#6B4D2C",
  },
  // Cream linen / light editorial
  cream: {
    bg1: "#E9DECF",
    bg2: "#D8C9B6",
    bg3: "#F0E6D6",
    glow: "#A87B3B",
    accent: "#7E5A28",
    shadow: "#B8A88E",
    line: "#8C7A60",
  },
};

function jewelry(type, p, id) {
  // Returns SVG inner markup for a jewelry silhouette
  switch (type) {
    case "earCuff":
      return `
        <g transform="translate(300 360)">
          <ellipse cx="0" cy="40" rx="70" ry="14" fill="${p.shadow}" opacity="0.55"/>
          <path d="M -50 -10 C -60 -90 60 -90 50 -10 L 35 -10 C 40 -70 -40 -70 -35 -10 Z" fill="url(#gold-${id})" stroke="${p.line}" stroke-width="1.2"/>
          <circle cx="0" cy="-72" r="9" fill="${p.accent}" stroke="${p.line}" stroke-width="0.8"/>
          <circle cx="0" cy="-72" r="3.5" fill="${p.shadow}" opacity="0.6"/>
        </g>`;
    case "necklace":
      return `
        <g transform="translate(300 320)">
          <path d="M -140 0 Q 0 200 140 0" fill="none" stroke="url(#goldLine-${id})" stroke-width="4"/>
          <path d="M -140 0 Q 0 200 140 0" fill="none" stroke="${p.line}" stroke-width="1" opacity="0.6"/>
          <g transform="translate(0 175)">
            <ellipse cx="0" cy="40" rx="80" ry="14" fill="${p.shadow}" opacity="0.5"/>
            <path d="M -40 0 C -50 -50 50 -50 40 0 L 28 0 C 32 -32 -32 -32 -28 0 Z" fill="url(#gold-${id})" stroke="${p.line}" stroke-width="1"/>
            <circle cx="-18" cy="-22" r="6" fill="${p.accent}"/>
            <circle cx="0" cy="-30" r="8" fill="${p.accent}"/>
            <circle cx="18" cy="-22" r="6" fill="${p.accent}"/>
          </g>
        </g>`;
    case "huggies":
      return `
        <g transform="translate(300 360)">
          <ellipse cx="0" cy="60" rx="120" ry="16" fill="${p.shadow}" opacity="0.55"/>
          <g transform="translate(-65 0)">
            <circle r="60" fill="none" stroke="url(#gold-${id})" stroke-width="22"/>
            <circle r="60" fill="none" stroke="${p.line}" stroke-width="1" opacity="0.6"/>
            <circle r="60" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.5"/>
          </g>
          <g transform="translate(65 0)">
            <circle r="60" fill="none" stroke="url(#gold-${id})" stroke-width="22"/>
            <circle r="60" fill="none" stroke="${p.line}" stroke-width="1" opacity="0.6"/>
            <circle r="60" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.5"/>
          </g>
        </g>`;
    case "dropEarrings":
      return `
        <g transform="translate(300 300)">
          <ellipse cx="0" cy="170" rx="150" ry="18" fill="${p.shadow}" opacity="0.55"/>
          <g transform="translate(-60 0)">
            <circle cy="-40" r="10" fill="url(#gold-${id})" stroke="${p.line}"/>
            <path d="M 0 -28 Q -10 40 0 100 Q 10 40 0 -28 Z" fill="url(#gold-${id})" stroke="${p.line}" stroke-width="0.8"/>
            <g stroke="${p.line}" stroke-width="0.6" fill="none" opacity="0.85">
              <path d="M -8 0 Q 0 20 8 0"/>
              <path d="M -10 25 Q 0 50 10 25"/>
              <path d="M -10 55 Q 0 80 10 55"/>
              <path d="M -8 85 Q 0 100 8 85"/>
            </g>
          </g>
          <g transform="translate(60 0)">
            <circle cy="-40" r="10" fill="url(#gold-${id})" stroke="${p.line}"/>
            <path d="M 0 -28 Q -10 40 0 100 Q 10 40 0 -28 Z" fill="url(#gold-${id})" stroke="${p.line}" stroke-width="0.8"/>
            <g stroke="${p.line}" stroke-width="0.6" fill="none" opacity="0.85">
              <path d="M -8 0 Q 0 20 8 0"/>
              <path d="M -10 25 Q 0 50 10 25"/>
              <path d="M -10 55 Q 0 80 10 55"/>
              <path d="M -8 85 Q 0 100 8 85"/>
            </g>
          </g>
        </g>`;
    case "set":
      return `
        <g transform="translate(300 340)">
          <ellipse cx="0" cy="120" rx="220" ry="20" fill="${p.shadow}" opacity="0.6"/>
          <g transform="translate(-100 0)">
            <circle r="34" fill="none" stroke="url(#gold-${id})" stroke-width="12"/>
            <circle r="34" fill="none" stroke="${p.line}" stroke-width="0.8"/>
            <circle cx="34" cy="20" r="6" fill="${p.accent}"/>
          </g>
          <g transform="translate(100 30)">
            <path d="M -36 0 C -42 -50 42 -50 36 0" fill="none" stroke="url(#gold-${id})" stroke-width="6"/>
            <path d="M -36 0 C -42 -50 42 -50 36 0" fill="none" stroke="${p.line}" stroke-width="0.8"/>
            <circle cy="6" r="9" fill="url(#gold-${id})" stroke="${p.line}" stroke-width="0.6"/>
          </g>
        </g>`;
    default:
      return "";
  }
}

export function buildPlaceholderSVG({
  type = "earCuff",
  palette = "amber",
  width = 800,
  height = 1000,
  variant = 1,
  id = "x",
} = {}) {
  const p = PALETTES[palette] || PALETTES.amber;
  const w = width;
  const h = height;
  const gradOffset = variant * 30;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${(h / w) * 600}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="bg-${id}" cx="50%" cy="38%" r="78%">
      <stop offset="0%" stop-color="${p.bg3}"/>
      <stop offset="55%" stop-color="${p.bg1}"/>
      <stop offset="100%" stop-color="${p.bg2}"/>
    </radialGradient>
    <radialGradient id="glow-${id}" cx="50%" cy="40%" r="45%">
      <stop offset="0%" stop-color="${p.glow}" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="${p.glow}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${p.glow}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.accent}"/>
      <stop offset="50%" stop-color="${p.glow}"/>
      <stop offset="100%" stop-color="${p.line}"/>
    </linearGradient>
    <linearGradient id="goldLine-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.line}"/>
      <stop offset="50%" stop-color="${p.accent}"/>
      <stop offset="100%" stop-color="${p.line}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="${(h / w) * 600}" fill="url(#bg-${id})"/>
  <rect width="600" height="${(h / w) * 600}" fill="url(#glow-${id})"/>
  <g opacity="${0.12 + variant * 0.06}">
    <circle cx="${120 + gradOffset}" cy="${80}" r="2" fill="${p.accent}"/>
    <circle cx="${480 - gradOffset}" cy="${160}" r="1.5" fill="${p.accent}"/>
    <circle cx="${300}" cy="${60}" r="1" fill="${p.accent}"/>
    <circle cx="${80}" cy="${400}" r="1.5" fill="${p.accent}"/>
    <circle cx="${520}" cy="${500}" r="2" fill="${p.accent}"/>
  </g>
  ${jewelry(type, p, id)}
  <rect x="0" y="${(h / w) * 600 - 90}" width="600" height="90" fill="${p.shadow}" opacity="0.45"/>
</svg>`.trim();
}

export function placeholderDataUri(opts) {
  const svg = buildPlaceholderSVG(opts);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Hero / editorial scenes (portrait, large)
export function buildSceneSVG({
  scene = "modelEar",
  palette = "amber",
  width = 1600,
  height = 2000,
  id = "scene",
} = {}) {
  const p = PALETTES[palette] || PALETTES.amber;
  const aspect = height / width;
  const w = 600;
  const h = w * aspect;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="bg-${id}" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="${p.bg3}"/>
      <stop offset="55%" stop-color="${p.bg1}"/>
      <stop offset="100%" stop-color="${p.bg2}"/>
    </radialGradient>
    <radialGradient id="spot-${id}" cx="50%" cy="35%" r="55%">
      <stop offset="0%" stop-color="${p.glow}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${p.glow}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="skin-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D8B496"/>
      <stop offset="100%" stop-color="#9C7158"/>
    </linearGradient>
    <linearGradient id="gold-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.accent}"/>
      <stop offset="50%" stop-color="${p.glow}"/>
      <stop offset="100%" stop-color="${p.line}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="${h}" fill="url(#bg-${id})"/>
  <rect width="600" height="${h}" fill="url(#spot-${id})"/>
  ${
    scene === "modelEar"
      ? `
    <!-- side of face silhouette -->
    <path d="M 200 ${h * 0.18}
             C 230 ${h * 0.12} 320 ${h * 0.12} 360 ${h * 0.22}
             C 420 ${h * 0.36} 440 ${h * 0.55} 420 ${h * 0.75}
             C 400 ${h * 0.92} 340 ${h * 0.98} 280 ${h * 0.92}
             C 220 ${h * 0.85} 180 ${h * 0.65} 180 ${h * 0.45}
             Z" fill="url(#skin-${id})" opacity="0.95"/>
    <!-- earring area: ear -->
    <ellipse cx="395" cy="${h * 0.5}" rx="22" ry="36" fill="#A87B5E" opacity="0.7"/>
    <!-- gold hoop earring -->
    <g transform="translate(395 ${h * 0.55})">
      <circle r="38" fill="none" stroke="url(#gold-${id})" stroke-width="6"/>
      <circle r="38" fill="none" stroke="${p.line}" stroke-width="0.6"/>
      <circle r="6" cx="0" cy="38" fill="${p.accent}"/>
    </g>`
      : scene === "neck"
      ? `
    <!-- neck & clavicle silhouette -->
    <path d="M 180 ${h * 0.05}
             C 220 ${h * 0.18} 240 ${h * 0.3} 240 ${h * 0.5}
             C 240 ${h * 0.7} 220 ${h * 0.92} 240 ${h}
             L 360 ${h}
             C 380 ${h * 0.92} 360 ${h * 0.7} 360 ${h * 0.5}
             C 360 ${h * 0.3} 380 ${h * 0.18} 420 ${h * 0.05}
             Z" fill="url(#skin-${id})" opacity="0.95"/>
    <!-- pendant necklace -->
    <path d="M 230 ${h * 0.18} Q 300 ${h * 0.34} 370 ${h * 0.18}" fill="none" stroke="url(#gold-${id})" stroke-width="2.4"/>
    <g transform="translate(300 ${h * 0.42})">
      <ellipse cx="0" cy="32" rx="40" ry="6" fill="${p.shadow}" opacity="0.5"/>
      <path d="M -22 0 C -28 -30 28 -30 22 0 L 14 0 C 16 -20 -16 -20 -14 0 Z" fill="url(#gold-${id})" stroke="${p.line}" stroke-width="0.8"/>
      <circle cx="-10" cy="-12" r="3.5" fill="${p.accent}"/>
      <circle cx="0" cy="-16" r="4" fill="${p.accent}"/>
      <circle cx="10" cy="-12" r="3.5" fill="${p.accent}"/>
    </g>`
      : scene === "earStack"
      ? `
    <!-- ear stack composition -->
    <ellipse cx="300" cy="${h * 0.5}" rx="120" ry="180" fill="url(#skin-${id})" opacity="0.9"/>
    <g transform="translate(300 ${h * 0.36})">
      <circle r="20" fill="url(#gold-${id})" stroke="${p.line}"/>
      <circle r="6" cy="-22" fill="${p.accent}"/>
    </g>
    <g transform="translate(300 ${h * 0.46})">
      <circle r="28" fill="none" stroke="url(#gold-${id})" stroke-width="5"/>
    </g>
    <g transform="translate(300 ${h * 0.58})">
      <circle r="34" fill="none" stroke="url(#gold-${id})" stroke-width="6"/>
      <circle cx="0" cy="-34" r="5" fill="${p.accent}"/>
    </g>`
      : `
    <ellipse cx="300" cy="${h * 0.5}" rx="180" ry="200" fill="url(#skin-${id})" opacity="0.85"/>
    <g transform="translate(300 ${h * 0.55})">
      <circle r="60" fill="none" stroke="url(#gold-${id})" stroke-width="10"/>
      <circle r="6" cy="-60" fill="${p.accent}"/>
    </g>`
  }
  <!-- subtle dust -->
  <g opacity="0.18">
    <circle cx="120" cy="${h * 0.2}" r="2" fill="${p.accent}"/>
    <circle cx="480" cy="${h * 0.25}" r="1.5" fill="${p.accent}"/>
    <circle cx="80" cy="${h * 0.7}" r="1.5" fill="${p.accent}"/>
    <circle cx="520" cy="${h * 0.65}" r="2" fill="${p.accent}"/>
  </g>
</svg>`.trim();
}

export function sceneDataUri(opts) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(buildSceneSVG(opts))}`;
}