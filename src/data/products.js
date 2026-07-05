// Seed product catalog for Velmora Fine Jewelry.
// Each product uses inline SVG illustrations as placeholders so the UI
// always renders something beautiful even before any CDN image loads.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "sets", label: "Sets" },
]

export const MATERIALS = [
  { slug: "18k-gold", label: "18K Gold Plated" },
  { slug: "sterling-silver", label: "Sterling Silver" },
  { slug: "gold-vermeil", label: "Gold Vermeil" },
]

// Tone options available for the variant selector on PDP
export const TONES = [
  { id: "gold", label: "Gold", swatch: "#B8954A" },
  { id: "silver", label: "Silver", swatch: "#D9D4CC" },
  { id: "rose", label: "Rose Gold", swatch: "#C99B86" },
]

// SVG placeholder illustrations.
// They render warm gold jewelry on rich dark/cream backgrounds.
// `id` keeps things readable; the visual-id is what strk-img references for
// real product photography when it loads.
const earringCuff = `
<rect width='600' height='750' fill='#1A1410'/>
<g transform='translate(300 380)'>
  <path d='M-50 -120 Q 0 -160 50 -120 Q 80 -60 60 0 Q 30 80 0 110 Q -30 80 -60 0 Q -80 -60 -50 -120 Z'
        fill='none' stroke='#E5C77A' stroke-width='6' stroke-linecap='round'/>
  <circle cx='0' cy='-20' r='14' fill='#F0D38A' stroke='#8E6E33' stroke-width='2'/>
  <circle cx='0' cy='-20' r='6' fill='#FFFFFF' opacity='0.7'/>
</g>
<g transform='translate(300 580)' opacity='0.5'>
  <line x1='-60' y1='0' x2='60' y2='0' stroke='#B8954A' stroke-width='1'/>
</g>
`

const floralNecklace = `
<rect width='600' height='750' fill='#1A1410'/>
<g transform='translate(300 320)' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round'>
  <path d='M -150 0 Q -100 -90 0 -100 Q 100 -90 150 0'/>
  <circle cx='-150' cy='0' r='4' fill='#E5C77A'/>
  <circle cx='150' cy='0' r='4' fill='#E5C77A'/>
  <path d='M -90 -60 L -60 -90 M 90 -60 L 60 -90' stroke-width='2'/>
</g>
<g transform='translate(300 460)'>
  <circle cx='-40' cy='0' r='14' fill='#C99B86' stroke='#8E6E33' stroke-width='1.5'/>
  <circle cx='0' cy='-12' r='18' fill='#B8954A' stroke='#8E6E33' stroke-width='1.5'/>
  <circle cx='42' cy='0' r='12' fill='#E5C77A' stroke='#8E6E33' stroke-width='1.5'/>
  <circle cx='-15' cy='28' r='10' fill='#A4773E' stroke='#8E6E33' stroke-width='1.5'/>
  <circle cx='22' cy='32' r='9' fill='#D9B871' stroke='#8E6E33' stroke-width='1.5'/>
  <path d='M 0 -12 L 0 -38' stroke='#8E6E33' stroke-width='1'/>
</g>
`

const huggiesSphere = `
<rect width='600' height='750' fill='#1A1410'/>
<g transform='translate(220 380)'>
  <circle cx='0' cy='0' r='90' fill='none' stroke='#E5C77A' stroke-width='6'/>
  <circle cx='0' cy='0' r='90' fill='url(#g1)' opacity='0.4'/>
  <path d='M -90 0 A 90 90 0 0 1 90 0' fill='none' stroke='#F4ECE1' stroke-width='1' opacity='0.5'/>
</g>
<g transform='translate(380 380)'>
  <circle cx='0' cy='0' r='90' fill='none' stroke='#E5C77A' stroke-width='6'/>
  <circle cx='0' cy='0' r='90' fill='url(#g1)' opacity='0.4'/>
  <path d='M -90 0 A 90 90 0 0 1 90 0' fill='none' stroke='#F4ECE1' stroke-width='1' opacity='0.5'/>
</g>
<defs>
  <radialGradient id='g1' cx='0.3' cy='0.3'>
    <stop offset='0%' stop-color='#F4ECE1' stop-opacity='0.7'/>
    <stop offset='100%' stop-color='#B8954A' stop-opacity='0'/>
  </radialGradient>
</defs>
`

const laceDrop = `
<rect width='600' height='750' fill='#1A1410'/>
<g transform='translate(220 300)' fill='none' stroke='#E5C77A' stroke-width='2.5' stroke-linecap='round'>
  <circle cx='0' cy='-20' r='18'/>
  <path d='M 0 0 Q -10 30 0 60 Q 10 30 0 0 Z' fill='#E5C77A' fill-opacity='0.3'/>
  <path d='M -8 30 Q 0 50 8 30' />
  <path d='M -10 50 Q 0 70 10 50' />
  <path d='M -12 70 Q 0 90 12 70' />
  <path d='M 0 90 L 0 140' stroke-width='1.5'/>
  <circle cx='0' cy='150' r='6' fill='#F0D38A'/>
</g>
<g transform='translate(380 300)' fill='none' stroke='#E5C77A' stroke-width='2.5' stroke-linecap='round'>
  <circle cx='0' cy='-20' r='18'/>
  <path d='M 0 0 Q -10 30 0 60 Q 10 30 0 0 Z' fill='#E5C77A' fill-opacity='0.3'/>
  <path d='M -8 30 Q 0 50 8 30' />
  <path d='M -10 50 Q 0 70 10 50' />
  <path d='M -12 70 Q 0 90 12 70' />
  <path d='M 0 90 L 0 140' stroke-width='1.5'/>
  <circle cx='0' cy='150' r='6' fill='#F0D38A'/>
</g>
`

const heirloomSet = `
<rect width='600' height='750' fill='#1A1410'/>
<g transform='translate(300 280)' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round'>
  <path d='M -120 0 Q -80 -70 0 -80 Q 80 -70 120 0' />
  <path d='M -90 -45 L -60 -75 M 90 -45 L 60 -75' stroke-width='2'/>
  <circle cx='0' cy='-80' r='6' fill='#F0D38A'/>
</g>
<g transform='translate(300 470)'>
  <circle cx='0' cy='0' r='28' fill='none' stroke='#E5C77A' stroke-width='3'/>
  <circle cx='0' cy='0' r='10' fill='#B8954A' stroke='#8E6E33' stroke-width='1.5'/>
  <circle cx='0' cy='0' r='4' fill='#F4ECE1'/>
</g>
<g transform='translate(180 480)'>
  <circle cx='0' cy='0' r='20' fill='none' stroke='#E5C77A' stroke-width='2.5'/>
  <circle cx='0' cy='0' r='6' fill='#B8954A'/>
</g>
<g transform='translate(420 480)'>
  <circle cx='0' cy='0' r='20' fill='none' stroke='#E5C77A' stroke-width='2.5'/>
  <circle cx='0' cy='0' r='6' fill='#B8954A'/>
</g>
`

// Helper that wraps an inline SVG into a data URL so it can be used as an
// <img src=...> anywhere. Returned strings are safe to use directly.
function svgDataUrl(svg) {
  const encoded = svg
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ")
    .trim()
  return `data:image/svg+xml;utf8,${encodeURIComponent(encoded)}`
}

// All hero / lifestyle / UGC / category placeholder illustrations.
export const PLACEHOLDERS = {
  heroModel: svgDataUrl(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 1000' preserveAspectRatio='xMidYMid slice'>
      <defs>
        <radialGradient id='rg' cx='0.5' cy='0.4' r='0.8'>
          <stop offset='0%' stop-color='#3A2A1E'/>
          <stop offset='100%' stop-color='#0E0805'/>
        </radialGradient>
        <radialGradient id='glow' cx='0.5' cy='0.3' r='0.4'>
          <stop offset='0%' stop-color='#B8954A' stop-opacity='0.4'/>
          <stop offset='100%' stop-color='#B8954A' stop-opacity='0'/>
        </radialGradient>
        <linearGradient id='skin' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stop-color='#3A2820'/>
          <stop offset='100%' stop-color='#1A1410'/>
        </linearGradient>
      </defs>
      <rect width='1600' height='1000' fill='url(#rg)'/>
      <rect width='1600' height='1000' fill='url(#glow)'/>
      <!-- abstract silhouette: woman profile with earring -->
      <path d='M 1100 250 Q 1300 280 1340 500 Q 1350 700 1280 880 L 1200 1000 L 1600 1000 L 1600 0 L 1000 0 Q 1050 100 1100 250 Z' fill='url(#skin)' opacity='0.85'/>
      <!-- hair sweep -->
      <path d='M 1000 0 Q 950 200 1100 250 Q 1300 280 1340 500 Q 1350 700 1280 880' fill='none' stroke='#2A1A12' stroke-width='80' opacity='0.5'/>
      <!-- earring glow point -->
      <circle cx='1290' cy='560' r='20' fill='#F0D38A' opacity='0.9'/>
      <circle cx='1290' cy='560' r='6' fill='#FFFFFF'/>
      <!-- subtle dust particles -->
      <g fill='#B8954A' opacity='0.4'>
        <circle cx='300' cy='200' r='2'/>
        <circle cx='450' cy='350' r='1.5'/>
        <circle cx='600' cy='180' r='1'/>
        <circle cx='800' cy='420' r='1.5'/>
        <circle cx='200' cy='600' r='2'/>
        <circle cx='500' cy='800' r='1'/>
        <circle cx='700' cy='700' r='1.5'/>
        <circle cx='150' cy='450' r='1'/>
      </g>
    </svg>
  `),

  brandStory: svgDataUrl(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 1500' preserveAspectRatio='xMidYMid slice'>
      <defs>
        <radialGradient id='bg' cx='0.5' cy='0.4' r='0.9'>
          <stop offset='0%' stop-color='#2A1F18'/>
          <stop offset='100%' stop-color='#0E0805'/>
        </radialGradient>
        <linearGradient id='hand' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stop-color='#C99B86'/>
          <stop offset='100%' stop-color='#8E6E33'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='1500' fill='url(#bg)'/>
      <!-- abstract hand silhouette holding a necklace -->
      <path d='M 250 1500 L 250 1100 Q 260 950 380 880 L 540 800 Q 620 760 720 720 L 820 680 L 900 700 L 900 1500 Z' fill='url(#hand)' opacity='0.85'/>
      <!-- necklace chain -->
      <path d='M 200 600 Q 600 1000 1000 600' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round' opacity='0.9'/>
      <!-- pendant -->
      <circle cx='600' cy='900' r='50' fill='none' stroke='#E5C77A' stroke-width='4'/>
      <circle cx='600' cy='900' r='22' fill='#F0D38A' stroke='#8E6E33' stroke-width='1.5'/>
      <circle cx='600' cy='900' r='6' fill='#FFFFFF'/>
    </svg>
  `),

  categoryEarrings: svgDataUrl(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 750' preserveAspectRatio='xMidYMid slice'>
      <rect width='600' height='750' fill='#1A1410'/>
      <g transform='translate(300 360)' fill='none' stroke='#E5C77A' stroke-width='4' stroke-linecap='round'>
        <path d='M -30 -150 Q 0 -180 30 -150 Q 60 -100 50 -50 Q 30 50 0 80 Q -30 50 -50 -50 Q -60 -100 -30 -150 Z'/>
        <circle cx='0' cy='-30' r='10' fill='#F0D38A' stroke='#8E6E33' stroke-width='1.5'/>
        <line x1='0' y1='80' x2='0' y2='200' stroke-width='2'/>
        <circle cx='0' cy='220' r='8' fill='#F0D38A'/>
      </g>
    </svg>
  `),
  categoryNecklaces: svgDataUrl(floralNecklace),
  categoryHuggies: svgDataUrl(huggiesSphere),
}

// Seed product catalog — the 5 products from the brief + a few extras so
// the shop page has enough variety to demonstrate filters.
export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    tagline: "Crystal-accented gold ear cuff",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    description:
      "A whisper of light at the lobe. The Vivid Aura Cuff is hand-finished in 18K gold plating with a single crystal accent that catches the day the moment you move.",
    details: [
      "18K gold plated over brass",
      "Surgical-steel post, hypoallergenic",
      "No piercing required — cuff style",
      "Sold as a single cuff",
    ],
    care: [
      "Avoid contact with perfume, lotion, and water",
      "Store in the included velvet pouch",
      "Wipe gently with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–3 business days",
    ],
    gallery: [svgDataUrl(earringCuff), svgDataUrl(earringCuff), svgDataUrl(earringCuff)],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 218,
    badge: "New",
    description:
      "A garden of crystals clustered on a fine gold chain. The Majestic Flora Nectar necklace is a quiet centerpiece — wear it alone, or layered.",
    details: [
      "18K gold plated brass chain, 18\" with 2\" extender",
      "Hand-set Austrian crystals in five warm tones",
      "Lobster clasp closure",
    ],
    care: [
      "Remove before showering or sleeping",
      "Avoid direct contact with perfumes",
      "Store flat in the included jewelry box",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–3 business days",
    ],
    gallery: [svgDataUrl(floralNecklace), svgDataUrl(floralNecklace), svgDataUrl(floralNecklace)],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviews: 356,
    badge: "Bestseller",
    description:
      "The huggie, reimagined. A polished gold dome with satisfying weight — small enough for everyday, statement enough for evening.",
    details: [
      "18K gold plated over brass",
      "Hinged snap closure",
      "Inner diameter: 9mm",
      "Sold as a pair",
    ],
    care: [
      "Remove before showering or sleeping",
      "Store in the included velvet pouch",
      "Wipe gently with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–3 business days",
    ],
    gallery: [svgDataUrl(huggiesSphere), svgDataUrl(huggiesSphere), svgDataUrl(huggiesSphere)],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviews: 162,
    badge: "Editor’s Pick",
    description:
      "Inspired by antique lacework, the Amber Lace drop is delicately filigreed by hand. A warm heirloom in the making.",
    details: [
      "18K gold plated brass with textured finish",
      "Sterling-silver post, hypoallergenic",
      "Drop length: 1.5\"",
      "Sold as a pair",
    ],
    care: [
      "Avoid contact with perfume and lotion",
      "Store flat in the included jewelry box",
      "Wipe gently with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–3 business days",
    ],
    gallery: [svgDataUrl(laceDrop), svgDataUrl(laceDrop), svgDataUrl(laceDrop)],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "sets",
    material: "18k-gold",
    tone: "gold",
    rating: 5.0,
    reviews: 84,
    badge: "Gifts",
    description:
      "A complete moment, in one box. The Royal Heirloom Set pairs a delicate pendant necklace with matching drop earrings — ready to gift, ready to wear.",
    details: [
      "18K gold plated brass",
      "Sterling-silver posts, hypoallergenic",
      "Pendant chain: 16\" with 2\" extender",
      "Gift-boxed with care card and pouch",
    ],
    care: [
      "Remove before showering or sleeping",
      "Avoid direct contact with perfume",
      "Store in the included jewelry box",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–3 business days",
    ],
    gallery: [svgDataUrl(heirloomSet), svgDataUrl(heirloomSet), svgDataUrl(heirloomSet)],
  },
  // additional items so the shop grid has real filter variety
  {
    id: "petal-thread-necklace",
    name: "Petal Thread Necklace",
    tagline: "Dainty gold chain with single drop",
    price: 48,
    category: "necklaces",
    material: "sterling-silver",
    tone: "silver",
    rating: 4.6,
    reviews: 92,
    badge: "",
    description: "An everyday chain finished with a single teardrop — the kind of piece you forget you’re wearing until someone asks where it’s from.",
    details: [
      "Sterling silver with 18K gold plating option",
      "16\" chain with 2\" extender",
      "Lobster clasp",
    ],
    care: ["Remove before showering", "Store in the included pouch"],
    shipping: ["Free worldwide shipping over $80", "30-day returns"],
    gallery: [svgDataUrl(floralNecklace), svgDataUrl(floralNecklace)],
  },
  {
    id: "luna-crescent-huggies",
    name: "Luna Crescent Huggies",
    tagline: "Slim crescent huggie in rose gold",
    price: 36,
    category: "huggies",
    material: "gold-vermeil",
    tone: "rose",
    rating: 4.5,
    reviews: 71,
    badge: "",
    description: "A slim crescent that hugs the lobe. Rose gold vermeil with a quiet warmth — the kind of piece you reach for daily.",
    details: [
      "Gold vermeil over sterling silver",
      "Hinged snap closure",
      "Inner diameter: 8mm",
    ],
    care: ["Remove before showering", "Store in pouch"],
    shipping: ["Free worldwide shipping over $80", "30-day returns"],
    gallery: [svgDataUrl(huggiesSphere), svgDataUrl(huggiesSphere)],
  },
  {
    id: "celeste-crystal-huggies",
    name: "Celeste Crystal Huggies",
    tagline: "Pavé crystal huggie earrings",
    price: 58,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 142,
    badge: "",
    description: "Pavé-set crystals line a slim gold huggie. A whisper of sparkle that goes from morning to evening without a second thought.",
    details: [
      "18K gold plated brass",
      "Hand-set crystals",
      "Sold as a pair",
    ],
    care: ["Avoid perfume contact", "Store in pouch"],
    shipping: ["Free worldwide shipping over $80", "30-day returns"],
    gallery: [svgDataUrl(huggiesSphere), svgDataUrl(huggiesSphere)],
  },
  {
    id: "monogram-pendant",
    name: "Monogram Pendant",
    tagline: "Personalizable gold letter pendant",
    price: 52,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviews: 109,
    badge: "",
    description: "An initial, in gold. The Monogram Pendant is the everyday signature — layer it or wear it alone.",
    details: [
      "18K gold plated brass",
      "18\" chain with 2\" extender",
      "Initial charm: 12mm",
    ],
    care: ["Remove before showering", "Wipe with soft cloth"],
    shipping: ["Free worldwide shipping over $80", "30-day returns"],
    gallery: [svgDataUrl(floralNecklace), svgDataUrl(floralNecklace)],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(productId, limit = 4) {
  const current = getProductById(productId)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter(
    (p) => p.id !== productId && (p.category === current.category || p.material === current.material)
  ).slice(0, limit)
}

export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.badge === "Bestseller").slice(0, limit)
    .concat(PRODUCTS.slice(0, limit))
    .filter((p, i, arr) => arr.findIndex((q) => q.id === p.id) === i)
    .slice(0, limit)
}

// UGC reel cards: 9:16 vertical illustrations with captions.
export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "everyday gold",
    handle: "@velmora",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.4'>
            <stop offset='0%' stop-color='#3A2820'/>
            <stop offset='100%' stop-color='#0E0805'/>
          </radialGradient>
          <linearGradient id='s' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stop-color='#C99B86'/>
            <stop offset='100%' stop-color='#5A3A28'/>
          </linearGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <path d='M 200 80 Q 280 100 290 200 Q 300 350 280 500 L 280 711 L 120 711 L 120 500 Q 100 350 110 200 Q 120 100 200 80 Z' fill='url(#s)' opacity='0.7'/>
        <g transform='translate(200 350)' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round'>
          <circle cx='-60' cy='0' r='14'/>
          <circle cx='-60' cy='0' r='6' fill='#F0D38A'/>
          <circle cx='60' cy='0' r='14'/>
          <circle cx='60' cy='0' r='6' fill='#F0D38A'/>
          <path d='M -60 14 L -60 50' stroke-width='2'/>
          <path d='M 60 14 L 60 50' stroke-width='2'/>
        </g>
        <path d='M 200 280 Q 250 320 200 360' fill='none' stroke='#B8954A' stroke-width='2' opacity='0.6'/>
        <path d='M 200 280 Q 150 320 200 360' fill='none' stroke='#B8954A' stroke-width='2' opacity='0.6'/>
      </svg>
    `),
  },
  {
    id: "reel-2",
    caption: "softly stacked",
    handle: "@nora.wears",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.4'>
            <stop offset='0%' stop-color='#2A1F18'/>
            <stop offset='100%' stop-color='#0A0604'/>
          </radialGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <g transform='translate(200 400)' fill='none' stroke='#E5C77A' stroke-width='2' stroke-linecap='round'>
          <path d='M -120 -100 Q 0 -160 120 -100'/>
          <path d='M -90 -70 Q 0 -120 90 -70'/>
          <path d='M -60 -40 Q 0 -80 60 -40'/>
          <circle cx='0' cy='0' r='8' fill='#F0D38A'/>
        </g>
      </svg>
    `),
  },
  {
    id: "reel-3",
    caption: "the gift edit",
    handle: "@velmora",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.4'>
            <stop offset='0%' stop-color='#3A2820'/>
            <stop offset='100%' stop-color='#0E0805'/>
          </radialGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <g transform='translate(200 380)'>
          <rect x='-100' y='-50' width='200' height='100' fill='none' stroke='#E5C77A' stroke-width='3'/>
          <path d='M -100 -50 L 0 30 L 100 -50' fill='none' stroke='#E5C77A' stroke-width='3'/>
          <path d='M 0 -50 L 0 50' stroke='#E5C77A' stroke-width='2'/>
          <path d='M -30 -50 Q -10 -90 0 -50 Q 10 -90 30 -50' fill='none' stroke='#E5C77A' stroke-width='2'/>
        </g>
        <g transform='translate(200 480)'>
          <circle cx='-30' cy='0' r='6' fill='#F0D38A'/>
          <circle cx='0' cy='0' r='8' fill='#F0D38A'/>
          <circle cx='30' cy='0' r='6' fill='#F0D38A'/>
        </g>
      </svg>
    `),
  },
  {
    id: "reel-4",
    caption: "morning gold",
    handle: "@mae.studios",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.3'>
            <stop offset='0%' stop-color='#4A2E1E'/>
            <stop offset='100%' stop-color='#0A0604'/>
          </radialGradient>
          <linearGradient id='s' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stop-color='#D9B89A'/>
            <stop offset='100%' stop-color='#6A4830'/>
          </linearGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <ellipse cx='200' cy='320' rx='80' ry='100' fill='url(#s)' opacity='0.8'/>
        <g transform='translate(140 320)' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round'>
          <circle cx='0' cy='0' r='12'/>
          <circle cx='0' cy='0' r='5' fill='#F0D38A'/>
        </g>
        <g transform='translate(260 320)' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round'>
          <circle cx='0' cy='0' r='12'/>
          <circle cx='0' cy='0' r='5' fill='#F0D38A'/>
        </g>
      </svg>
    `),
  },
  {
    id: "reel-5",
    caption: "evening layers",
    handle: "@velmora",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.4'>
            <stop offset='0%' stop-color='#2A1F18'/>
            <stop offset='100%' stop-color='#0A0604'/>
          </radialGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <g transform='translate(200 360)' fill='none' stroke='#E5C77A' stroke-width='2.5' stroke-linecap='round'>
          <path d='M -140 -50 Q -100 -120 0 -130 Q 100 -120 140 -50'/>
          <path d='M -110 -90 Q -80 -140 -40 -150'/>
          <path d='M 110 -90 Q 80 -140 40 -150'/>
          <circle cx='0' cy='-80' r='8' fill='#F0D38A'/>
        </g>
        <g transform='translate(200 480)'>
          <path d='M -25 0 L 0 30 L 25 0 L 12 -10 L 0 0 L -12 -10 Z' fill='#B8954A' stroke='#8E6E33' stroke-width='1'/>
        </g>
      </svg>
    `),
  },
  {
    id: "reel-6",
    caption: "at the studio",
    handle: "@claire.makes",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.4'>
            <stop offset='0%' stop-color='#3A2820'/>
            <stop offset='100%' stop-color='#0E0805'/>
          </radialGradient>
          <linearGradient id='s' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stop-color='#C99B86'/>
            <stop offset='100%' stop-color='#5A3A28'/>
          </linearGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <path d='M 150 200 Q 200 240 200 320 Q 200 400 180 500 L 180 711 L 240 711 L 240 500 Q 220 400 220 320 Q 220 240 270 200 Z' fill='url(#s)' opacity='0.7'/>
        <g transform='translate(200 380)' fill='none' stroke='#E5C77A' stroke-width='3' stroke-linecap='round'>
          <circle cx='-40' cy='0' r='12'/>
          <circle cx='-40' cy='0' r='5' fill='#F0D38A'/>
          <circle cx='40' cy='0' r='12'/>
          <circle cx='40' cy='0' r='5' fill='#F0D38A'/>
        </g>
        <path d='M 200 460 L 200 540' stroke='#E5C77A' stroke-width='2'/>
        <circle cx='200' cy='560' r='14' fill='none' stroke='#E5C77A' stroke-width='2'/>
        <circle cx='200' cy='560' r='5' fill='#F0D38A'/>
      </svg>
    `),
  },
  {
    id: "reel-7",
    caption: "first heirloom",
    handle: "@velmora",
    illustration: svgDataUrl(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <radialGradient id='g' cx='0.5' cy='0.4'>
            <stop offset='0%' stop-color='#2A1F18'/>
            <stop offset='100%' stop-color='#0A0604'/>
          </radialGradient>
        </defs>
        <rect width='400' height='711' fill='url(#g)'/>
        <g transform='translate(200 400)'>
          <rect x='-60' y='-80' width='120' height='160' fill='none' stroke='#E5C77A' stroke-width='2' rx='2'/>
          <circle cx='0' cy='-30' r='22' fill='none' stroke='#E5C77A' stroke-width='2.5'/>
          <circle cx='0' cy='-30' r='8' fill='#F0D38A'/>
          <path d='M -30 30 L 30 30' stroke='#E5C77A' stroke-width='2'/>
          <circle cx='-15' cy='50' r='3' fill='#F0D38A'/>
          <circle cx='15' cy='50' r='3' fill='#F0D38A'/>
        </g>
      </svg>
    `),
  },
]

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    rating: 5,
    quote:
      "I’ve worn the Golden Sphere Huggies almost every day since they arrived. They feel weighty in the best way, and the gold hasn’t shifted at all.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Priya S.",
    rating: 5,
    quote:
      "The Majestic Flora Nectar is even prettier in person. The crystals catch light like a little garden. It was a gift to myself — worth every cent.",
    product: "Majestic Flora Nectar",
  },
  {
    name: "Sofia M.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom Set for my sister’s birthday. The packaging alone made her tear up. Velmora gets the details right.",
    product: "Royal Heirloom Set",
  },
]
