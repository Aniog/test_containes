// Seed product catalog. Imagery is rendered as inline SVG so the
// storefront always has elegant, on-brand placeholders. Swap in real
// product photography by replacing the `image` field with URLs.

export const CATEGORIES = [
  { id: "earrings",  label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies",   label: "Huggies" },
  { id: "sets",      label: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold",  label: "18K Gold Plated" },
  { id: "sterling",  label: "Sterling Silver" },
  { id: "crystal",   label: "Crystal" },
];

// SVG art generator: returns a data URL containing a warm gold
// "photographic" product placeholder. Variants change the silhouette
// so each product feels distinct.
const svg = (variant, label) => {
  const palettes = {
    aura:       { base: "#1A1614", glow: "#C9A26B", accent: "#E8C99A" },
    flora:      { base: "#211A14", glow: "#D4A86A", accent: "#9B5B3A" },
    sphere:     { base: "#181412", glow: "#E0B779", accent: "#B8956A" },
    lace:       { base: "#1F1814", glow: "#CDA06A", accent: "#7A5538" },
    heirloom:   { base: "#1A1612", glow: "#D4AF7A", accent: "#5E4128" },
  };
  const p = palettes[variant] || palettes.aura;

  const art = {
    aura: `
      <g transform="translate(200 230)">
        <ellipse cx="0" cy="80" rx="80" ry="10" fill="#000" opacity="0.45"/>
        <path d="M-40 -60 Q-50 -10 -40 40 Q-30 70 -10 75 Q10 70 20 40 Q30 -10 20 -60 Q10 -75 0 -75 Q-10 -75 -40 -60 Z"
              fill="url(#gold1)" stroke="${p.accent}" stroke-width="1.2"/>
        <circle cx="-30" cy="-30" r="8" fill="${p.accent}" opacity="0.85"/>
        <circle cx="-30" cy="-30" r="3" fill="#fff" opacity="0.9"/>
        <path d="M-10 75 L-10 95" stroke="${p.glow}" stroke-width="1.5"/>
        <circle cx="-10" cy="100" r="4" fill="${p.accent}"/>
      </g>`,
    flora: `
      <g transform="translate(200 230)">
        <ellipse cx="0" cy="80" rx="90" ry="10" fill="#000" opacity="0.4"/>
        <path d="M0 -60 Q-3 -40 -3 -20" stroke="url(#gold1)" stroke-width="2" fill="none"/>
        <g transform="translate(0 -25)">
          <circle cx="-22" cy="-12" r="10" fill="#C46A4A" opacity="0.85"/>
          <circle cx="0" cy="-22" r="9" fill="#D4A86A" opacity="0.85"/>
          <circle cx="22" cy="-12" r="10" fill="#8B3F2B" opacity="0.85"/>
          <circle cx="-15" cy="14" r="9" fill="#E2B774" opacity="0.85"/>
          <circle cx="15" cy="14" r="9" fill="#A86244" opacity="0.85"/>
          <circle cx="0" cy="0" r="6" fill="${p.accent}"/>
        </g>
      </g>`,
    sphere: `
      <g transform="translate(200 230)">
        <ellipse cx="-40" cy="60" rx="40" ry="6" fill="#000" opacity="0.4"/>
        <ellipse cx="40" cy="60" rx="40" ry="6" fill="#000" opacity="0.4"/>
        <circle cx="-40" cy="0" r="38" fill="url(#gold1)" stroke="${p.accent}" stroke-width="0.8"/>
        <circle cx="-40" cy="-12" r="14" fill="${p.accent}" opacity="0.5"/>
        <circle cx="40" cy="0" r="38" fill="url(#gold1)" stroke="${p.accent}" stroke-width="0.8"/>
        <circle cx="40" cy="-12" r="14" fill="${p.accent}" opacity="0.5"/>
        <path d="M-40 -38 Q0 -50 40 -38" stroke="${p.glow}" stroke-width="1.2" fill="none" opacity="0.7"/>
      </g>`,
    lace: `
      <g transform="translate(200 230)">
        <ellipse cx="0" cy="80" rx="80" ry="8" fill="#000" opacity="0.4"/>
        <g fill="none" stroke="url(#gold1)" stroke-width="1.4" stroke-linecap="round">
          <path d="M-8 -50 Q-12 -20 -8 10 Q-4 40 -2 50"/>
          <path d="M8 -50 Q12 -20 8 10 Q4 40 2 50"/>
          <path d="M-25 -10 Q-20 5 -10 0 Q0 -5 10 0 Q20 5 25 -10"/>
          <path d="M-30 10 Q-20 25 0 20 Q20 25 30 10"/>
          <path d="M-22 28 Q-10 38 0 32 Q10 38 22 28"/>
        </g>
        <circle cx="0" cy="50" r="5" fill="${p.accent}"/>
        <circle cx="0" cy="-50" r="3" fill="${p.accent}"/>
      </g>`,
    heirloom: `
      <g transform="translate(200 230)">
        <ellipse cx="0" cy="80" rx="110" ry="8" fill="#000" opacity="0.4"/>
        <rect x="-100" y="-50" width="200" height="100" rx="6" fill="url(#box1)" stroke="${p.accent}" stroke-width="1"/>
        <rect x="-90" y="-42" width="180" height="84" rx="3" fill="none" stroke="${p.accent}" stroke-width="0.4" opacity="0.6"/>
        <g transform="translate(0 -10)">
          <path d="M-12 -25 Q-15 -10 -12 5 Q-9 18 -4 22 Q4 18 9 5 Q15 -10 12 -25 Q9 -32 0 -32 Q-9 -32 -12 -25 Z"
                fill="url(#gold1)" stroke="${p.accent}" stroke-width="0.8"/>
          <circle cx="0" cy="-5" r="4" fill="${p.accent}"/>
        </g>
        <text x="0" y="38" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="3" fill="${p.accent}" opacity="0.7">VELMORA</text>
      </g>`,
  }[variant] || "";

  const svgText = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="bg1" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#2A201A"/>
      <stop offset="55%" stop-color="${p.base}"/>
      <stop offset="100%" stop-color="#0E0B09"/>
    </radialGradient>
    <linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.accent}"/>
      <stop offset="50%" stop-color="${p.glow}"/>
      <stop offset="100%" stop-color="#8B6F4E"/>
    </linearGradient>
    <linearGradient id="box1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3A2A1E"/>
      <stop offset="100%" stop-color="#1F1610"/>
    </linearGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.4"/>
    </filter>
  </defs>
  <rect width="400" height="460" fill="url(#bg1)"/>
  <circle cx="200" cy="180" r="180" fill="${p.glow}" opacity="0.05"/>
  ${art}
  <g opacity="0.4" font-family="'Cormorant Garamond', serif" font-style="italic">
    <text x="200" y="420" text-anchor="middle" font-size="11" letter-spacing="4" fill="${p.glow}">${label}</text>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgText)}`;
};

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    shortDescription: "18K gold-plated ear cuff with a hand-set crystal accent. Designed for the helix or lobe — a quiet spark of light.",
    description: "The Vivid Aura cuff is sculpted in our signature demi-fine brass core and finished in a thick layer of 18K gold. A single handset crystal catches the light at the perfect angle, making it a versatile everyday piece that reads as quietly luxurious.",
    materials: "18K gold-plated brass, AAA crystal accent. Lead-free, nickel-free, hypoallergenic.",
    care: "Avoid water, perfume, and lotions. Store in the suede pouch provided. Wipe gently with the included polishing cloth.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Carbon-neutral delivery.",
    accent: "Ear Cuff",
    badge: "Bestseller",
    image: svg("aura", "Vivid Aura"),
    imageAlt: svg("aura", "Vivid Aura · Alt"),
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "crystal",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    shortDescription: "A multicolor floral crystal pendant on a delicate gold chain. Inspired by an heirloom brooch.",
    description: "A modern take on a vintage florette, the Majestic Flora is a cluster of hand-set crystals in warm amber, soft topaz, and antique gold tones. Suspended from a 16–18\" adjustable cable chain finished in 18K gold plating.",
    materials: "18K gold-plated brass, multicolor glass crystals, lobster clasp.",
    care: "Remove before showering or swimming. Store flat in the velvet pouch. Polish gently with a soft cloth.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns. Arrives in a keepsake box.",
    accent: "Pendant",
    badge: "New",
    image: svg("flora", "Majestic Flora"),
    imageAlt: svg("flora", "Majestic Flora · Alt"),
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.7,
    reviewCount: 211,
    shortDescription: "Chunky gold dome huggies with a satisfying weight. The everyday hero of the collection.",
    description: "Sculptural little domes with a buttery-smooth finish. The Golden Sphere huggies are a confident everyday silhouette — substantial enough to feel luxurious, light enough to sleep in.",
    materials: "18K gold-plated brass with a high-polish finish. Hinged snap closure.",
    care: "Water-resistant, but we recommend removing before swimming. Buff with the included cloth to maintain the polish.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns.",
    accent: "Huggies",
    badge: "Bestseller",
    image: svg("sphere", "Golden Sphere"),
    imageAlt: svg("sphere", "Golden Sphere · Alt"),
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.8,
    reviewCount: 76,
    shortDescription: "Textured gold filigree drops, light as air, glowing amber-warm against the skin.",
    description: "Inspired by antique Venetian lace, the Amber Lace drops are cast in lightweight brass and finished in a brushed 18K gold with a hand-aged patina. Each pair is slightly unique, like a small piece of family jewelry.",
    materials: "18K gold-plated brass, antique hand-patina finish. Sterling silver posts.",
    care: "Avoid contact with lotions and perfume. Store in the suede pouch. Do not polish the patina.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns.",
    accent: "Drop Earrings",
    badge: "Limited",
    image: svg("lace", "Amber Lace"),
    imageAlt: svg("lace", "Amber Lace · Alt"),
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviewCount: 54,
    shortDescription: "A gift-boxed earring + necklace set in keepsake packaging. The heirloom in the making.",
    description: "Our most-loved pair — the Vivid Aura ear cuff and Majestic Flora pendant — together in one heirloom-worthy keepsake. Finished in 18K gold plating and presented in a hand-assembled cream linen box with a magnetic closure and suede lining.",
    materials: "18K gold-plated brass, AAA crystals, glass florette. Linen keepsake box with suede lining.",
    care: "Store in the included box. Avoid water and chemicals. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns. Includes handwritten note option at checkout.",
    accent: "Earring + Necklace",
    badge: "Gifts",
    image: svg("heirloom", "Royal Heirloom"),
    imageAlt: svg("heirloom", "Royal Heirloom · Alt"),
  },
];

export const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const filterProducts = ({ category, material, priceMax }) =>
  PRODUCTS.filter((p) => {
    if (category && category !== "all" && p.category !== category) return false;
    if (material && p.material !== material) return false;
    if (priceMax && p.price > priceMax) return false;
    return true;
  });

export const relatedProducts = (product, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aScore = (a.category === product.category ? 2 : 0) +
                     (a.material === product.material ? 1 : 0);
      const bScore = (b.category === product.category ? 2 : 0) +
                     (b.material === product.material ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);

// Editorial UGC card content (vertical 9:16 reel-style)
export const UGC_REELS = [
  { id: "r1", handle: "@noor.styles",  caption: "the everyday huggie", accent: "Golden Sphere" },
  { id: "r2", handle: "@maeve.rose",   caption: "a study in warm gold",  accent: "Amber Lace" },
  { id: "r3", handle: "@studio.aria",  caption: "the heirloom gift",     accent: "Royal Heirloom" },
  { id: "r4", handle: "@june.weekes",  caption: "caught the light",      accent: "Vivid Aura" },
  { id: "r5", handle: "@lila.bloom",   caption: "petals on chain",       accent: "Majestic Flora" },
  { id: "r6", handle: "@mira.kit",     caption: "stacked & soft",        accent: "Golden Sphere" },
];

// Vertical reel placeholder art (returns data URL)
const reelSvg = (idx, accent) => {
  const tones = [
    ["#1F1813", "#C9A26B"],
    ["#221B14", "#D4A86A"],
    ["#1A1411", "#E0B779"],
    ["#1E1612", "#CDA06A"],
    ["#211A14", "#D4AF7A"],
    ["#1A1612", "#C9A26B"],
  ];
  const [base, glow] = tones[idx % tones.length];
  const svgText = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="r${idx}" cx="50%" cy="42%" r="70%">
      <stop offset="0%" stop-color="${glow}" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="${base}"/>
      <stop offset="100%" stop-color="#0E0B09"/>
    </radialGradient>
    <linearGradient id="g${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8C99A"/>
      <stop offset="100%" stop-color="#8B6F4E"/>
    </linearGradient>
  </defs>
  <rect width="360" height="640" fill="url(#r${idx})"/>
  <g transform="translate(180 320)">
    <ellipse cx="0" cy="160" rx="80" ry="10" fill="#000" opacity="0.45"/>
    <circle cx="0" cy="0" r="48" fill="url(#g${idx})" opacity="0.95"/>
    <circle cx="-12" cy="-14" r="14" fill="#fff" opacity="0.25"/>
    <path d="M-30 80 Q-25 110 -10 115 Q10 110 25 80" stroke="url(#g${idx})" stroke-width="2" fill="none"/>
  </g>
  <text x="180" y="600" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-style="italic" font-size="22" fill="#F5EFE7" opacity="0.85">${accent}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgText)}`;
};

export const UGC_REEL_IMAGES = UGC_REELS.map((r, i) => reelSvg(i, r.accent));
