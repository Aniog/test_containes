// Velmora — site-wide configuration and content

export const BRAND = {
  name: "Velmora",
  tagline: "Crafted to be Treasured",
  full: "Velmora Fine Jewelry",
  email: "hello@velmora.co",
  announcement: "Complimentary worldwide shipping on orders over $80",
};

export const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?cat=collections" },
  { label: "About", to: "/#about" },
  { label: "Journal", to: "/#journal" },
];

export const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export const TESTIMONIALS = [
  {
    quote:
      "The gold has this warm, muted tone I can't find anywhere else. My new everyday piece.",
    author: "Amelia R.",
    rating: 5,
  },
  {
    quote:
      "I bought the Royal Heirloom Set as a gift. The packaging alone made me cry.",
    author: "Priya S.",
    rating: 5,
  },
  {
    quote:
      "Lightweight, doesn't tarnish after months, and looks like it cost ten times more.",
    author: "Naomi K.",
    rating: 5,
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
      { label: "Gifts", to: "/shop?cat=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/#help" },
      { label: "Returns & Exchanges", to: "/#help" },
      { label: "Care Guide", to: "/#help" },
      { label: "Contact", to: "/#help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/#about" },
      { label: "Sustainability", to: "/#about" },
      { label: "Journal", to: "/#journal" },
      { label: "Press", to: "/#about" },
    ],
  },
];
