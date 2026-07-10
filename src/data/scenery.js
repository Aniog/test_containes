// Editorial imagery is generated as warm-toned SVG compositions. Each
// scene returns a data URL that can be used as an <img src> or CSS
// background. The palette is intentionally narrow (espresso, champagne,
// ivory) so the site feels cohesive without a real photo shoot.

const svg = (markup) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(markup)}`

// Museum-style warm-light jewelry shot — used for the hero, product
// cards, and category tiles. Variations on composition keep the site
// feeling curated rather than repetitive.
const jewelryBase = (opts) => {
  const {
    width = 1200,
    height = 1500,
    bg = "#1A120C",
    mid = "#2A1F1A",
    glow = "#3A2A1F",
    accent = "#B89466",
    accentSoft = "#D9B888",
    shape = "earrings",
    seed = 1,
  } = opts

  const shapes = {
    earrings: `
      <g transform="translate(${width / 2}, ${height * 0.55})">
        <ellipse cx="-130" cy="0" rx="38" ry="38" fill="${accent}"/>
        <ellipse cx="-130" cy="0" rx="22" ry="22" fill="${accentSoft}"/>
        <ellipse cx="130" cy="0" rx="38" ry="38" fill="${accent}"/>
        <ellipse cx="130" cy="0" rx="22" ry="22" fill="${accentSoft}"/>
        <circle cx="-130" cy="-70" r="6" fill="${accent}"/>
        <circle cx="130" cy="-70" r="6" fill="${accent}"/>
        <path d="M -130 -76 L -130 -90" stroke="${accent}" stroke-width="2"/>
        <path d="M 130 -76 L 130 -90" stroke="${accent}" stroke-width="2"/>
      </g>`,
    huggies: `
      <g transform="translate(${width / 2}, ${height * 0.55})">
        <circle cx="-110" cy="0" r="62" fill="none" stroke="${accent}" stroke-width="14"/>
        <circle cx="110" cy="0" r="62" fill="none" stroke="${accent}" stroke-width="14"/>
        <circle cx="-110" cy="0" r="44" fill="none" stroke="${accentSoft}" stroke-width="2"/>
        <circle cx="110" cy="0" r="44" fill="none" stroke="${accentSoft}" stroke-width="2"/>
      </g>`,
    necklace: `
      <g transform="translate(${width / 2}, ${height * 0.42})">
        <path d="M -260 0 Q 0 220 260 0" fill="none" stroke="${accent}" stroke-width="4"/>
        <path d="M -260 0 Q 0 220 260 0" fill="none" stroke="${accentSoft}" stroke-width="1" stroke-dasharray="2 6"/>
        <circle cx="0" cy="180" r="22" fill="${accent}"/>
        <circle cx="0" cy="180" r="10" fill="${accentSoft}"/>
        <circle cx="-60" cy="155" r="6" fill="${accent}"/>
        <circle cx="60" cy="155" r="6" fill="${accent}"/>
        <circle cx="-110" cy="115" r="4" fill="${accentSoft}"/>
        <circle cx="110" cy="115" r="4" fill="${accentSoft}"/>
      </g>`,
    cuff: `
      <g transform="translate(${width / 2}, ${height * 0.55})">
        <path d="M -160 -40 Q 0 -120 160 -40 L 160 40 Q 0 120 -160 40 Z" fill="none" stroke="${accent}" stroke-width="6"/>
        <circle cx="0" cy="0" r="14" fill="${accent}"/>
        <circle cx="0" cy="0" r="6" fill="${accentSoft}"/>
        <path d="M -160 -40 L -160 40" stroke="${accentSoft}" stroke-width="1.5"/>
        <path d="M 160 -40 L 160 40" stroke="${accentSoft}" stroke-width="1.5"/>
      </g>`,
    set: `
      <g transform="translate(${width / 2}, ${height * 0.55})">
        <ellipse cx="-150" cy="-30" rx="50" ry="50" fill="${accent}"/>
        <ellipse cx="-150" cy="-30" rx="28" ry="28" fill="${accentSoft}"/>
        <ellipse cx="150" cy="-30" rx="50" ry="50" fill="${accent}"/>
        <ellipse cx="150" cy="-30" rx="28" ry="28" fill="${accentSoft}"/>
        <path d="M -200 70 Q 0 200 200 70" fill="none" stroke="${accent}" stroke-width="3"/>
        <circle cx="0" cy="160" r="14" fill="${accent}"/>
      </g>`,
    drops: `
      <g transform="translate(${width / 2}, ${height * 0.55})">
        <circle cx="-110" cy="-50" r="10" fill="${accent}"/>
        <path d="M -110 -40 L -110 0 Q -150 30 -110 60 Q -70 30 -110 0 Z" fill="${accent}"/>
        <path d="M -110 -20 L -110 -10" stroke="${accentSoft}" stroke-width="1"/>
        <circle cx="110" cy="-50" r="10" fill="${accent}"/>
        <path d="M 110 -40 L 110 0 Q 150 30 110 60 Q 70 30 110 0 Z" fill="${accent}"/>
        <path d="M 110 -20 L 110 -10" stroke="${accentSoft}" stroke-width="1"/>
      </g>`,
  }

  // Soft warm spotlight gradient at top
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      <radialGradient id="bg-${seed}" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stop-color="${glow}"/>
        <stop offset="55%" stop-color="${mid}"/>
        <stop offset="100%" stop-color="${bg}"/>
      </radialGradient>
      <radialGradient id="haze-${seed}" cx="50%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.18"/>
        <stop offset="60%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="metal-${seed}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${accentSoft}"/>
        <stop offset="50%" stop-color="${accent}"/>
        <stop offset="100%" stop-color="${accentSoft}"/>
      </linearGradient>
      <filter id="grain-${seed}">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${seed}"/>
        <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0"/>
        <feComposite in2="SourceGraphic" operator="in"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg-${seed})"/>
    <rect width="100%" height="100%" fill="url(#haze-${seed})"/>
    <g opacity="0.5">${shapes[shape] || shapes.earrings}</g>
    <rect width="100%" height="100%" filter="url(#grain-${seed})" opacity="0.6"/>
  </svg>`
}

// Light/cream background variants for product cards on light sections
const lightJewelryBase = (opts) => {
  return jewelryBase({
    ...opts,
    bg: "#EFE7D9",
    mid: "#E5D8C7",
    glow: "#FBF7F0",
  })
}

export const scenes = {
  hero: svg(jewelryBase({
    width: 1600, height: 2000, shape: "necklace", seed: 11,
  })),
  heroAlt: svg(jewelryBase({
    width: 1600, height: 2000, shape: "earrings", seed: 12,
  })),
  ugc1: svg(jewelryBase({
    width: 900, height: 1600, shape: "earrings", seed: 21,
  })),
  ugc2: svg(jewelryBase({
    width: 900, height: 1600, shape: "huggies", seed: 22,
  })),
  ugc3: svg(jewelryBase({
    width: 900, height: 1600, shape: "cuff", seed: 23,
  })),
  ugc4: svg(jewelryBase({
    width: 900, height: 1600, shape: "necklace", seed: 24,
  })),
  ugc5: svg(jewelryBase({
    width: 900, height: 1600, shape: "drops", seed: 25,
  })),
  ugc6: svg(jewelryBase({
    width: 900, height: 1600, shape: "set", seed: 26,
  })),
  categoryEarrings: svg(lightJewelryBase({
    width: 1000, height: 1300, shape: "earrings", seed: 31,
  })),
  categoryNecklaces: svg(lightJewelryBase({
    width: 1000, height: 1300, shape: "necklace", seed: 32,
  })),
  categoryHuggies: svg(lightJewelryBase({
    width: 1000, height: 1300, shape: "huggies", seed: 33,
  })),
  story: svg(jewelryBase({
    width: 1200, height: 1500, shape: "set", seed: 41,
  })),
}
