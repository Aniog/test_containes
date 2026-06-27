// Site-wide static content: navigation, hero, UGC reel, testimonials, etc.

export const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const heroContent = {
  eyebrow: "The Velmora Atelier",
  headline: "Crafted to be Treasured",
  subhead:
    "Demi-fine jewelry designed for the moments that matter — and every quiet moment in between.",
  image: u("photo-1602173574767-37ac01994b2a", 1800),
  imageAlt:
    "A close-up editorial portrait of a woman wearing layered gold jewelry, soft warm light",
};

export const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export const ugcReel = [
  {
    id: "ugc-1",
    image: u("photo-1535632787350-4e68ef0ac584", 700),
    handle: "@noor.studios",
    caption: "Morning light, the Golden Sphere.",
  },
  {
    id: "ugc-2",
    image: u("photo-1611652022419-a9419f74343d", 700),
    handle: "@maren.k",
    caption: "Layered with linen and low light.",
  },
  {
    id: "ugc-3",
    image: u("photo-1605100804763-247f67b3557e", 700),
    handle: "@the.olu",
    caption: "Wedding guest, sorted.",
  },
  {
    id: "ugc-4",
    image: u("photo-1631982690223-8aa4be0a2497", 700),
    handle: "@isla.rae",
    caption: "Huggies, never off.",
  },
  {
    id: "ugc-5",
    image: u("photo-1602173574767-37ac01994b2a", 700),
    handle: "@amina.jewels",
    caption: "The Vivid Aura, by candlelight.",
  },
  {
    id: "ugc-6",
    image: u("photo-1599643478518-a784e5dc4c8f", 700),
    handle: "@studio.cameo",
    caption: "Flora Nectar, gift-ready.",
  },
  {
    id: "ugc-7",
    image: u("photo-1605100804763-247f67b3557e", 700),
    handle: "@paloma.notes",
    caption: "A birthday ritual.",
  },
];

export const brandStory = {
  image: u("photo-1602173574767-37ac01994b2a", 1400),
  imageAlt: "A jewelry maker's atelier — soft warm light, brass tools, sketchbooks",
  eyebrow: "Our Story",
  headline: "Quiet luxury, considered craft.",
  body: "Velmora was founded on a single belief: that everyday jewelry deserves the same attention as fine jewelry. Each piece is sketched, sculpted, and plated in small batches — never mass-produced, never loud. We work in 18K gold plate over a brass core, finished by hand and checked by eye. The result is demi-fine jewelry you can wear to dinner, to bed, to brunch — and still feel considered.",
  linkLabel: "Read our story",
  linkHref: "/about",
};

export const testimonials = [
  {
    id: "t1",
    quote:
      "I wear the Golden Sphere Huggies almost daily. They've held their finish through showers, beach trips, and a wedding — and they still feel like new.",
    name: "Maya R.",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The Royal Heirloom Set was the first gift my mother actually kept. The packaging alone is worth it — but the jewelry is the real moment.",
    name: "Elena S.",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Finally — demi-fine that doesn't look cheap. The Majestic Flora Nectar is the centerpiece of every outfit. I get stopped in the street.",
    name: "Priya K.",
    rating: 5,
  },
];

export const categoryTiles = [
  {
    id: "earrings",
    label: "Earrings",
    image: u("photo-1535632787350-4e68ef0ac584", 900),
    href: "/shop?category=earrings",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image: u("photo-1599643478518-a784e5dc4c8f", 900),
    href: "/shop?category=necklaces",
  },
  {
    id: "huggies",
    label: "Huggies",
    image: u("photo-1631982690223-8aa4be0a2497", 900),
    href: "/shop?category=huggies",
  },
];

export const aboutContent = {
  hero: {
    eyebrow: "The Velmora Atelier",
    headline: "Demi-fine, designed to be lived in.",
    image: u("photo-1602173574767-37ac01994b2a", 1600),
    imageAlt: "Editorial portrait of a model wearing layered gold jewelry, soft warm light",
  },
  story: {
    eyebrow: "Our Story",
    paragraphs: [
      "Velmora began at a kitchen table in Lisbon in 2019, with a brass bar, a jeweler's loupe, and an obsession with how the right gold tone can change an entire morning.",
      "We work in 18K gold plate over a brass core — a considered alternative to solid gold that lets us offer real weight, real finish, and a real heirloom feeling at a price that doesn't whisper 'treat yourself once a year.' Every piece is drawn, cast, plated, and inspected in small batches. Nothing is mass-produced. Nothing is loud.",
      "Our promise: hypoallergenic metals, tarnish-resistant plating, fair wages, and the kind of customer care that feels like getting a note from a friend.",
    ],
  },
  values: [
    {
      id: "hypoallergenic",
      title: "Hypoallergenic",
      body: "Lead-free, nickel-free brass core and 18K plating safe for sensitive skin.",
    },
    {
      id: "tarnish-resistant",
      title: "Tarnish-Resistant",
      body: "A triple-layer plating process designed for daily wear — even in the shower.",
    },
    {
      id: "small-batch",
      title: "Small-Batch",
      body: "Limited production runs. When a piece sells out, it returns in a new color.",
    },
  ],
  studio: {
    eyebrow: "From the Studio",
    headline: "Designed in Lisbon, plated to last.",
    body: "Every Velmora piece is drawn in-house, cast in small batches, and triple-plated for tarnish resistance. The studio ships from Portugal and arrives, gift-ready, anywhere in the world.",
    image: u("photo-1611652022419-a9419f74343d", 1200),
    imageAlt: "Studio workspace with brass castings and gold-plated components",
  },
};

export const collectionsContent = [
  {
    id: "aura",
    name: "The Aura Edit",
    tagline: "Crystals, sculpted light",
    image: u("photo-1535632787350-4e68ef0ac584", 1200),
    count: 12,
    href: "/shop?category=earrings",
  },
  {
    id: "heirloom",
    name: "Heirloom Gifts",
    tagline: "Gift-ready, ribbon-tied",
    image: u("photo-1605100804763-247f67b3557e", 1200),
    count: 8,
    href: "/shop",
  },
  {
    id: "everyday",
    name: "Everyday Gold",
    tagline: "Pieces you'll never take off",
    image: u("photo-1631982690223-8aa4be0a2497", 1200),
    count: 16,
    href: "/shop?category=huggies",
  },
];

export const journalPosts = [
  {
    id: "j1",
    title: "How to stack your huggies",
    excerpt:
      "Three pairs, one ear, a quiet kind of geometry. The Velmora guide to building a daily ear story.",
    image: u("photo-1631982690223-8aa4be0a2497", 1000),
    readTime: "4 min read",
    category: "Styling",
  },
  {
    id: "j2",
    title: "Demi-fine, explained",
    excerpt:
      "What '18K gold plated' actually means, why brass matters, and how to read a finish like a jeweler.",
    image: u("photo-1611652022419-a9419f74343d", 1000),
    readTime: "6 min read",
    category: "Craft",
  },
  {
    id: "j3",
    title: "The art of gifting jewelry",
    excerpt:
      "On sizing, surprise, and writing a card that lasts longer than the box.",
    image: u("photo-1605100804763-247f67b3557e", 1000),
    readTime: "5 min read",
    category: "Gifting",
  },
];