// Elegant inline SVG placeholders for gold-jewelry editorial imagery.
// Each "art" is a warm, editorial composition on a dark/neutral background,
// designed to read as a gold jewelry still-life rather than a generic placeholder.

// Shared gradient & filter definitions
const defs = `
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#221C15"/>
    <stop offset="55%" stop-color="#15110D"/>
    <stop offset="100%" stop-color="#0A0806"/>
  </linearGradient>
  <linearGradient id="bg-soft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3A2F22"/>
    <stop offset="100%" stop-color="#1A140E"/>
  </linearGradient>
  <linearGradient id="bg-cream" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#EFE5D0"/>
    <stop offset="100%" stop-color="#D8C9A8"/>
  </linearGradient>
  <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#F0D199"/>
    <stop offset="40%" stop-color="#D6B07A"/>
    <stop offset="65%" stop-color="#A47E4A"/>
    <stop offset="100%" stop-color="#7B5A2E"/>
  </linearGradient>
  <linearGradient id="gold-soft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#E4C892"/>
    <stop offset="100%" stop-color="#9E773E"/>
  </linearGradient>
  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#FFDDA8" stop-opacity="0.45"/>
    <stop offset="100%" stop-color="#FFDDA8" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glow2" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#FFE6BB" stop-opacity="0.6"/>
    <stop offset="100%" stop-color="#FFE6BB" stop-opacity="0"/>
  </radialGradient>
  <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="2.5"/>
  </filter>
</defs>`;

function frame(bg = "url(#bg)") {
  return `<rect width="600" height="800" fill="${bg}"/>
    <ellipse cx="300" cy="500" rx="280" ry="40" fill="#000" opacity="0.45" filter="url(#soft)"/>
    <ellipse cx="300" cy="420" rx="220" ry="260" fill="url(#glow)" opacity="0.7"/>`;
}

// 1. Single ear cuff with a crystal accent (Vivid Aura Cuff)
function artCuff() {
  return `
  ${defs}
  ${frame()}
  <g transform="translate(300 420)">
    <path d="M -120 -30 C -120 -160, 120 -160, 120 -30" fill="none" stroke="url(#gold)" stroke-width="22" stroke-linecap="round"/>
    <path d="M -120 -30 C -120 -160, 120 -160, 120 -30" fill="none" stroke="#FFE0A8" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
    <path d="M -118 -32 C -118 -158, 118 -158, 118 -32" fill="none" stroke="#5C3F18" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <circle cx="0" cy="-180" r="14" fill="url(#glow2)"/>
    <circle cx="0" cy="-180" r="9" fill="#FFF3D6"/>
    <path d="M 0 -188 L 3 -180 L 0 -172 L -3 -180 Z" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="120" cy="-30" r="6" fill="url(#gold)"/>
  </g>
  <g opacity="0.35" stroke="#B8945F" stroke-width="0.6" fill="none">
    <path d="M 60 120 Q 200 60, 380 130"/>
    <path d="M 80 200 Q 220 150, 380 220"/>
  </g>`;
}

// 2. Floral crystal necklace (Majestic Flora Nectar)
function artFlora() {
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    const cx = 300 + Math.cos(angle) * 38;
    const cy = 420 + Math.sin(angle) * 38;
    const colors = ["#E2B36A", "#C9A48A", "#A8B58A", "#C7A06A", "#B58A5C"];
    petals.push(
      `<ellipse cx="${cx}" cy="${cy}" rx="22" ry="32" fill="${colors[i]}" opacity="0.95" transform="rotate(${i * 72} ${cx} ${cy})"/>` +
        `<ellipse cx="${cx}" cy="${cy}" rx="9" ry="14" fill="#FFF3D6" opacity="0.55" transform="rotate(${i * 72} ${cx} ${cy})"/>`
    );
  }
  return `
  ${defs}
  ${frame()}
  <g fill="none" stroke="url(#gold-soft)" stroke-width="2.4" opacity="0.9">
    <path d="M 80 360 C 160 200, 440 200, 520 360" />
    <path d="M 90 380 C 170 220, 430 220, 510 380" opacity="0.5"/>
    ${Array.from({ length: 13 }, (_, i) => {
      const t = i / 12;
      const x = 80 + 440 * t;
      const y = 360 + Math.sin(t * Math.PI) * -160 + (i % 2 === 0 ? 0 : 6);
      return `<circle cx="${x}" cy="${y}" r="2.2" fill="url(#gold)" stroke="none"/>`;
    }).join("")}
  </g>
  <g transform="translate(300 420)">
    <circle r="34" fill="url(#glow2)"/>
    <circle r="22" fill="#1F1810" stroke="url(#gold)" stroke-width="2"/>
    ${petals.join("")}
    <circle r="10" fill="#FFE8B5" opacity="0.8"/>
  </g>`;
}

// 3. Chunky gold dome huggie (Golden Sphere Huggies)
function artHuggie() {
  return `
  ${defs}
  ${frame("url(#bg-soft)")}
  <g transform="translate(220 430)">
    <circle cx="0" cy="0" r="150" fill="url(#gold)"/>
    <circle cx="0" cy="0" r="150" fill="none" stroke="#5C3F18" stroke-width="2" opacity="0.5"/>
    <ellipse cx="-45" cy="-55" rx="55" ry="35" fill="#FFEBC6" opacity="0.55"/>
    <circle cx="0" cy="0" r="78" fill="#0E0A06"/>
    <circle cx="0" cy="0" r="78" fill="none" stroke="url(#gold)" stroke-width="4"/>
    <ellipse cx="-22" cy="-22" rx="14" ry="9" fill="#FFE6B0" opacity="0.7"/>
  </g>
  <g transform="translate(420 460)">
    <circle cx="0" cy="0" r="118" fill="url(#gold)"/>
    <ellipse cx="-35" cy="-42" rx="42" ry="28" fill="#FFEBC6" opacity="0.55"/>
    <circle cx="0" cy="0" r="60" fill="#0E0A06"/>
    <circle cx="0" cy="0" r="60" fill="none" stroke="url(#gold)" stroke-width="3"/>
  </g>`;
}

// 4. Antique lace drop earrings (Amber Lace)
function artLace() {
  const filigree = `
  <g stroke="url(#gold)" stroke-width="1.2" fill="none" opacity="0.95">
    <path d="M -50 -10 C -55 -45, -30 -75, 0 -75 C 30 -75, 55 -45, 50 -10 C 50 30, 30 70, 0 70 C -30 70, -50 30, -50 -10 Z"/>
    <path d="M -36 -8 C -40 -38, -20 -60, 0 -60 C 20 -60, 40 -38, 36 -8 C 36 22, 22 55, 0 55 C -22 55, -36 22, -36 -8 Z"/>
    <path d="M -22 -4 C -25 -28, -12 -45, 0 -45 C 12 -45, 25 -28, 22 -4 C 22 16, 12 40, 0 40 C -12 40, -22 16, -22 -4 Z"/>
    <path d="M 0 -45 L 0 40"/>
    <path d="M -22 -10 Q 0 0 22 -10"/>
    <path d="M -22 8 Q 0 18 22 8"/>
    <path d="M -22 26 Q 0 36 22 26"/>
    <path d="M -36 -20 Q 0 -10 36 -20"/>
    <path d="M -36 22 Q 0 32 36 22"/>
    <circle cx="0" cy="0" r="3" fill="url(#gold)"/>
    <circle cx="0" cy="-22" r="2" fill="url(#gold)"/>
    <circle cx="0" cy="22" r="2" fill="url(#gold)"/>
  </g>`;
  return `
  ${defs}
  ${frame()}
  <g transform="translate(220 410)">
    <path d="M 0 -100 L 0 -60" stroke="url(#gold)" stroke-width="2.5"/>
    <circle cx="0" cy="-100" r="4" fill="url(#gold)"/>
    ${filigree}
  </g>
  <g transform="translate(420 410)">
    <path d="M 0 -100 L 0 -60" stroke="url(#gold)" stroke-width="2.5"/>
    <circle cx="0" cy="-100" r="4" fill="url(#gold)"/>
    ${filigree}
  </g>`;
}

// 5. Royal Heirloom gift set
function artSet() {
  return `
  ${defs}
  ${frame("url(#bg-soft)")}
  <g transform="translate(300 410)">
    <rect x="-200" y="-30" width="400" height="200" rx="6" fill="#0E0A06" stroke="url(#gold)" stroke-width="2"/>
    <rect x="-200" y="-30" width="400" height="60" fill="url(#gold-soft)" opacity="0.9"/>
    <path d="M -200 -10 L 200 -10" stroke="#5C3F18" stroke-width="1" opacity="0.6"/>
    <path d="M -60 0 C -60 -60, 60 -60, 60 0" fill="none" stroke="url(#gold)" stroke-width="3"/>
    <path d="M -30 0 C -30 -30, 30 -30, 30 0" fill="none" stroke="url(#gold)" stroke-width="2.5" opacity="0.85"/>
    <circle cx="0" cy="60" r="14" fill="url(#gold)"/>
    <circle cx="0" cy="60" r="6" fill="#FFF3D6"/>
    <text x="0" y="160" text-anchor="middle" font-family="serif" font-size="14" letter-spacing="6" fill="#E2C18A" opacity="0.85">VELMORA</text>
  </g>
  <g transform="translate(120 320)">
    <circle r="32" fill="url(#gold)"/>
    <circle r="14" fill="#0E0A06" stroke="url(#gold)" stroke-width="1.5"/>
  </g>
  <g transform="translate(480 320)">
    <circle r="32" fill="url(#gold)"/>
    <circle r="14" fill="#0E0A06" stroke="url(#gold)" stroke-width="1.5"/>
  </g>`;
}

// Extras for "You may also like"
function artPearl() {
  return `
  ${defs}
  ${frame()}
  <g transform="translate(300 430)">
    <circle cx="-60" cy="0" r="38" fill="url(#gold-soft)"/>
    <circle cx="-60" cy="0" r="22" fill="#F5E8CF"/>
    <ellipse cx="-66" cy="-8" rx="6" ry="3" fill="#FFFFFF" opacity="0.85"/>
    <circle cx="60" cy="0" r="38" fill="url(#gold-soft)"/>
    <circle cx="60" cy="0" r="22" fill="#F5E8CF"/>
    <ellipse cx="54" cy="-8" rx="6" ry="3" fill="#FFFFFF" opacity="0.85"/>
    <circle cx="-60" cy="0" r="6" fill="url(#gold)"/>
    <circle cx="60" cy="0" r="6" fill="url(#gold)"/>
  </g>`;
}
function artChain() {
  return `
  ${defs}
  ${frame()}
  <g fill="none" stroke="url(#gold-soft)" stroke-width="2.5" opacity="0.95">
    <path d="M 100 200 C 80 380, 520 380, 500 200"/>
    <path d="M 100 200 C 80 380, 520 380, 500 200" stroke="#FFE3A8" stroke-width="0.8" opacity="0.6"/>
  </g>
  ${Array.from({ length: 32 }, (_, i) => {
    const t = i / 31;
    const x = 100 + 400 * t;
    const y = 200 + Math.sin(t * Math.PI) * 180;
    return `<circle cx="${x}" cy="${y}" r="3.5" fill="url(#gold)" stroke="none"/>`;
  }).join("")}
  <g transform="translate(300 380)">
    <ellipse cx="0" cy="0" rx="24" ry="30" fill="url(#gold)"/>
    <ellipse cx="-7" cy="-8" rx="6" ry="9" fill="#FFE3A8" opacity="0.85"/>
  </g>`;
}
function artHoop() {
  return `
  ${defs}
  ${frame("url(#bg-soft)")}
  <g transform="translate(220 430)">
    <circle r="130" fill="none" stroke="url(#gold)" stroke-width="14"/>
    <circle r="130" fill="none" stroke="#FFE3A8" stroke-width="2" opacity="0.6"/>
    <circle r="120" fill="none" stroke="#5C3F18" stroke-width="1" opacity="0.5"/>
    <ellipse cx="-40" cy="-50" rx="35" ry="22" fill="#FFE3A8" opacity="0.45"/>
  </g>
  <g transform="translate(420 460)">
    <circle r="110" fill="none" stroke="url(#gold)" stroke-width="12"/>
    <ellipse cx="-30" cy="-40" rx="28" ry="18" fill="#FFE3A8" opacity="0.45"/>
  </g>`;
}
function artCuff2() {
  return `
  ${defs}
  ${frame()}
  <g transform="translate(300 420)">
    <path d="M -130 -10 C -130 -150, 130 -150, 130 -10" fill="none" stroke="url(#gold)" stroke-width="18" stroke-linecap="round"/>
    <path d="M -130 -10 C -130 -150, 130 -150, 130 -10" fill="none" stroke="#FFE3A8" stroke-width="2" opacity="0.55"/>
    <path d="M -100 -90 Q -60 -120 0 -130 Q 60 -120 100 -90" fill="none" stroke="#FFE3A8" stroke-width="1.2" opacity="0.5"/>
  </g>`;
}

// Editorial / category tiles (lighter cream backdrop)
function editorialFrame(label) {
  return `
  ${defs}
  <rect width="600" height="800" fill="url(#bg)"/>
  <ellipse cx="300" cy="500" rx="280" ry="40" fill="#000" opacity="0.45" filter="url(#soft)"/>
  <ellipse cx="300" cy="380" rx="240" ry="300" fill="url(#glow2)" opacity="0.6"/>
  <text x="300" y="730" text-anchor="middle" font-family="serif" font-size="22" fill="#F5EFE3" letter-spacing="6" opacity="0.85">${label}</text>`;
}
function artEditorialEarrings() {
  return `
  ${defs}
  ${editorialFrame("EARRINGS")}
  <g transform="translate(220 410)">
    <path d="M 0 -120 L 0 -50" stroke="url(#gold)" stroke-width="3"/>
    <circle cx="0" cy="-120" r="4" fill="url(#gold)"/>
    <circle cx="0" cy="0" r="44" fill="url(#gold)"/>
    <circle cx="0" cy="0" r="20" fill="#0E0A06" stroke="url(#gold)" stroke-width="2"/>
    <ellipse cx="-12" cy="-14" rx="9" ry="5" fill="#FFE3A8" opacity="0.7"/>
  </g>
  <g transform="translate(380 410)">
    <path d="M 0 -120 L 0 -50" stroke="url(#gold)" stroke-width="3"/>
    <circle cx="0" cy="-120" r="4" fill="url(#gold)"/>
    <circle cx="0" cy="0" r="44" fill="url(#gold)"/>
    <circle cx="0" cy="0" r="20" fill="#0E0A06" stroke="url(#gold)" stroke-width="2"/>
  </g>`;
}
function artEditorialNecklaces() {
  return `
  ${defs}
  ${editorialFrame("NECKLACES")}
  <g fill="none" stroke="url(#gold-soft)" stroke-width="2.2" opacity="0.95">
    <path d="M 80 320 C 80 180, 520 180, 520 320"/>
  </g>
  ${Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    const x = 80 + 440 * t;
    const y = 320 + Math.sin(t * Math.PI) * -140;
    return `<circle cx="${x}" cy="${y}" r="3" fill="url(#gold)"/>`;
  }).join("")}
  <g transform="translate(300 320)">
    <ellipse cx="0" cy="0" rx="40" ry="50" fill="url(#gold)"/>
    <ellipse cx="-12" cy="-12" rx="9" ry="14" fill="#FFE3A8" opacity="0.85"/>
  </g>`;
}
function artEditorialHuggies() {
  return `
  ${defs}
  ${editorialFrame("HUGGIES")}
  <g transform="translate(220 410)">
    <circle r="100" fill="url(#gold)"/>
    <circle r="48" fill="#0E0A06" stroke="url(#gold)" stroke-width="3"/>
    <ellipse cx="-30" cy="-38" rx="36" ry="22" fill="#FFE3A8" opacity="0.55"/>
  </g>
  <g transform="translate(400 410)">
    <circle r="100" fill="url(#gold)"/>
    <circle r="48" fill="#0E0A06" stroke="url(#gold)" stroke-width="3"/>
    <ellipse cx="-30" cy="-38" rx="36" ry="22" fill="#FFE3A8" opacity="0.55"/>
  </g>`;
}

// Hero composition (model wearing gold jewelry — abstract close-up)
function artHero() {
  return `
  ${defs}
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <ellipse cx="900" cy="700" rx="700" ry="120" fill="#000" opacity="0.6" filter="url(#soft)"/>
  <ellipse cx="900" cy="500" rx="600" ry="500" fill="url(#glow2)" opacity="0.55"/>

  <!-- silhouette of ear / jawline -->
  <g opacity="0.95">
    <path d="M 600 220 C 720 140, 980 140, 1100 240 C 1180 320, 1180 540, 1100 660 C 1040 760, 980 800, 940 820 C 920 830, 900 830, 880 820 C 850 800, 830 760, 820 720 C 800 700, 780 700, 760 720 C 720 740, 660 700, 640 640 C 600 560, 580 380, 600 220 Z"
      fill="#241B12" stroke="#3a2b1c" stroke-width="2" opacity="0.92"/>
    <path d="M 980 250 C 1000 200, 1050 200, 1060 260 C 1070 320, 1040 360, 1010 360 C 990 360, 970 320, 980 250 Z"
      fill="#2a2014"/>
  </g>

  <!-- gold huggie earring -->
  <g transform="translate(990 320)">
    <circle r="48" fill="url(#gold)"/>
    <circle r="22" fill="#0E0A06" stroke="url(#gold)" stroke-width="2"/>
    <ellipse cx="-12" cy="-18" rx="14" ry="9" fill="#FFE3A8" opacity="0.7"/>
  </g>

  <!-- delicate gold chain across skin -->
  <g fill="none" stroke="url(#gold-soft)" stroke-width="1.6" opacity="0.95">
    <path d="M 820 600 C 880 720, 1020 720, 1080 600"/>
  </g>
  ${Array.from({ length: 22 }, (_, i) => {
    const t = i / 21;
    const x = 820 + 260 * t;
    const y = 600 + Math.sin(t * Math.PI) * 110;
    return `<circle cx="${x}" cy="${y}" r="2" fill="url(#gold)"/>`;
  }).join("")}

  <!-- second ear cuff hint -->
  <g transform="translate(720 380)" opacity="0.9">
    <path d="M -10 -40 C -10 -90, 30 -90, 30 -40" fill="none" stroke="url(#gold)" stroke-width="6" stroke-linecap="round"/>
    <circle cx="10" cy="-90" r="4" fill="url(#gold)"/>
  </g>`;
}

// Story / about side
function artStory() {
  return `
  ${defs}
  <rect width="800" height="900" fill="url(#bg)"/>
  <ellipse cx="400" cy="600" rx="320" ry="50" fill="#000" opacity="0.5" filter="url(#soft)"/>
  <ellipse cx="400" cy="450" rx="280" ry="320" fill="url(#glow2)" opacity="0.5"/>
  <g transform="translate(400 470)">
    <path d="M -160 -40 C -160 -180, 160 -180, 160 -40" fill="none" stroke="url(#gold)" stroke-width="12" stroke-linecap="round"/>
    <path d="M -160 -40 C -160 -180, 160 -180, 160 -40" fill="none" stroke="#FFE3A8" stroke-width="2" opacity="0.6"/>
    <circle cx="0" cy="-190" r="6" fill="url(#gold)"/>
  </g>
  <g transform="translate(280 540)">
    <circle r="40" fill="url(#gold)"/>
    <ellipse cx="-10" cy="-15" rx="10" ry="6" fill="#FFE3A8" opacity="0.7"/>
  </g>
  <g transform="translate(520 540)">
    <circle r="40" fill="url(#gold)"/>
    <ellipse cx="-10" cy="-15" rx="10" ry="6" fill="#FFE3A8" opacity="0.7"/>
  </g>`;
}

// Reel-style UGC cards (vertical, 9:16) — abstract ear with jewelry
const reelsArts = [
  () => `
    ${defs}
    <rect width="540" height="960" fill="url(#bg)"/>
    <ellipse cx="270" cy="650" rx="260" ry="40" fill="#000" opacity="0.5" filter="url(#soft)"/>
    <ellipse cx="270" cy="500" rx="220" ry="300" fill="url(#glow2)" opacity="0.6"/>
    <path d="M 200 250 C 200 130, 380 130, 380 250 C 380 360, 360 460, 340 540 C 320 600, 280 600, 260 540 C 240 460, 200 360, 200 250 Z" fill="#241B12"/>
    <g transform="translate(330 320)">
      <circle r="42" fill="url(#gold)"/>
      <circle r="18" fill="#0E0A06" stroke="url(#gold)" stroke-width="2"/>
      <ellipse cx="-10" cy="-14" rx="12" ry="8" fill="#FFE3A8" opacity="0.7"/>
    </g>
    <g transform="translate(220 300)" opacity="0.9">
      <path d="M -8 -32 C -8 -76, 24 -76, 24 -32" fill="none" stroke="url(#gold)" stroke-width="5" stroke-linecap="round"/>
    </g>`,
  () => `
    ${defs}
    <rect width="540" height="960" fill="url(#bg-soft)"/>
    <ellipse cx="270" cy="600" rx="240" ry="40" fill="#000" opacity="0.5" filter="url(#soft)"/>
    <ellipse cx="270" cy="450" rx="220" ry="300" fill="url(#glow2)" opacity="0.6"/>
    <path d="M 180 200 C 180 100, 400 100, 400 220 C 400 320, 380 420, 360 520 C 340 580, 280 580, 260 520 C 220 420, 180 320, 180 200 Z" fill="#2a2014"/>
    <g transform="translate(360 300)">
      <path d="M 0 -60 L 0 -20" stroke="url(#gold)" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="38" fill="url(#gold)"/>
      <circle cx="0" cy="0" r="14" fill="#0E0A06" stroke="url(#gold)" stroke-width="1.5"/>
      <ellipse cx="-8" cy="-10" rx="8" ry="5" fill="#FFE3A8" opacity="0.7"/>
    </g>
    <g transform="translate(200 280)">
      <path d="M 0 -50 L 0 -20" stroke="url(#gold)" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="34" fill="url(#gold)"/>
      <circle cx="0" cy="0" r="13" fill="#0E0A06" stroke="url(#gold)" stroke-width="1.5"/>
    </g>`,
  () => `
    ${defs}
    <rect width="540" height="960" fill="url(#bg)"/>
    <ellipse cx="270" cy="600" rx="240" ry="40" fill="#000" opacity="0.5" filter="url(#soft)"/>
    <ellipse cx="270" cy="450" rx="220" ry="280" fill="url(#glow2)" opacity="0.5"/>
    <g fill="none" stroke="url(#gold-soft)" stroke-width="2" opacity="0.95">
      <path d="M 120 480 C 120 320, 420 320, 420 480"/>
    </g>
    ${Array.from({ length: 18 }, (_, i) => {
      const t = i / 17;
      const x = 120 + 300 * t;
      const y = 480 + Math.sin(t * Math.PI) * -160;
      return `<circle cx="${x}" cy="${y}" r="2.5" fill="url(#gold)"/>`;
    }).join("")}
    <g transform="translate(270 480)">
      <ellipse cx="0" cy="0" rx="36" ry="44" fill="url(#gold)"/>
      <ellipse cx="-10" cy="-12" rx="8" ry="12" fill="#FFE3A8" opacity="0.8"/>
    </g>`,
  () => `
    ${defs}
    <rect width="540" height="960" fill="url(#bg-soft)"/>
    <ellipse cx="270" cy="600" rx="240" ry="40" fill="#000" opacity="0.5" filter="url(#soft)"/>
    <ellipse cx="270" cy="460" rx="220" ry="280" fill="url(#glow2)" opacity="0.55"/>
    <path d="M 200 220 C 200 120, 380 120, 380 220 C 380 320, 360 420, 340 520 C 320 580, 280 580, 260 520 C 240 420, 200 320, 200 220 Z" fill="#241B12"/>
    <g transform="translate(340 320)">
      <circle r="46" fill="url(#gold)"/>
      <circle r="20" fill="#0E0A06" stroke="url(#gold)" stroke-width="2"/>
      <ellipse cx="-12" cy="-16" rx="14" ry="9" fill="#FFE3A8" opacity="0.7"/>
    </g>
    <g transform="translate(230 320)">
      <circle r="42" fill="url(#gold)"/>
      <ellipse cx="-10" cy="-14" rx="12" ry="8" fill="#FFE3A8" opacity="0.7"/>
    </g>`,
  () => `
    ${defs}
    <rect width="540" height="960" fill="url(#bg)"/>
    <ellipse cx="270" cy="600" rx="240" ry="40" fill="#000" opacity="0.5" filter="url(#soft)"/>
    <ellipse cx="270" cy="450" rx="220" ry="280" fill="url(#glow2)" opacity="0.55"/>
    <g transform="translate(270 460)" stroke="url(#gold)" stroke-width="1.2" fill="none">
      <path d="M -100 -20 C -100 -160, 100 -160, 100 -20 C 100 60, 60 130, 0 130 C -60 130, -100 60, -100 -20 Z"/>
      <path d="M -70 -20 C -70 -130, 70 -130, 70 -20 C 70 50, 40 110, 0 110 C -40 110, -70 50, -70 -20 Z"/>
      <path d="M -40 -20 C -40 -100, 40 -100, 40 -20 C 40 40, 22 90, 0 90 C -22 90, -40 40, -40 -20 Z"/>
      <path d="M 0 -100 L 0 90"/>
      <path d="M -40 -20 Q 0 -10 40 -20"/>
      <path d="M -40 20 Q 0 30 40 20"/>
      <path d="M -40 60 Q 0 70 40 60"/>
    </g>`,
  () => `
    ${defs}
    <rect width="540" height="960" fill="url(#bg-soft)"/>
    <ellipse cx="270" cy="600" rx="240" ry="40" fill="#000" opacity="0.5" filter="url(#soft)"/>
    <ellipse cx="270" cy="460" rx="220" ry="280" fill="url(#glow2)" opacity="0.55"/>
    <path d="M 200 220 C 200 120, 380 120, 380 220 C 380 320, 360 420, 340 520 C 320 580, 280 580, 260 520 C 240 420, 200 320, 200 220 Z" fill="#241B12"/>
    <g transform="translate(330 320)">
      <path d="M 0 -60 L 0 -20" stroke="url(#gold)" stroke-width="2.5"/>
      <ellipse cx="0" cy="10" rx="22" ry="30" fill="url(#gold)"/>
      <ellipse cx="-6" cy="0" rx="6" ry="9" fill="#FFE3A8" opacity="0.8"/>
    </g>
    <g transform="translate(220 320)">
      <path d="M 0 -60 L 0 -20" stroke="url(#gold)" stroke-width="2.5"/>
      <ellipse cx="0" cy="10" rx="20" ry="28" fill="url(#gold)"/>
    </g>`,
];

const arts = {
  cuff: artCuff,
  flora: artFlora,
  huggie: artHuggie,
  lace: artLace,
  set: artSet,
  pearl: artPearl,
  chain: artChain,
  hoop: artHoop,
  cuff2: artCuff2,
  editorialEarrings: artEditorialEarrings,
  editorialNecklaces: artEditorialNecklaces,
  editorialHuggies: artEditorialHuggies,
  hero: artHero,
  story: artStory,
};

export function productSVG(art, altText = "") {
  const fn = arts[art] || artCuff;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${altText}">${fn()}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function heroSVG() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Close-up of a woman wearing gold jewelry">${artHero()}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function storySVG() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Velmora craft">${artStory()}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function editorialSVG(key) {
  const fn = arts[key] || artEditorialEarrings;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" role="img">${fn()}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function reelSVG(index = 0) {
  const fn = reelsArts[index % reelsArts.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" preserveAspectRatio="xMidYMid slice" role="img">${fn()}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
