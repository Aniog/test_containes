# Velmora Fine Jewelry

A high-end direct-to-consumer storefront for **Velmora Fine Jewelry** — demi-fine gold jewelry designed in-house and sold direct.

## Stack

- Vite + React 18
- React Router v6
- Tailwind CSS 3
- Lucide icons
- `@strikingly/sdk` `ImageHelper` for stock image resolution

## Visual identity

- **Palette:** deep warm charcoal (`#1A1612`) + warm cream (`#FAF6EF`) + champagne gold (`#C9A96A`)
- **Type:** Cormorant Garamond (display, serif) + Inter (UI, sans)
- **Mood:** quiet luxury, editorial, premium-but-accessible

See `tailwind.config.js` for the full token map and `src/index.css` for utility classes (`.btn-base`, `.eyebrow`, `.hairline`, `.reel-overlay`, `.acc-content`).

## Project structure

```
src/
├── App.jsx                # Router + CartProvider
├── main.jsx               # Entry
├── index.css              # Global theme + utility classes
├── context/
│   └── CartContext.jsx    # Cart state (add/remove/qty, drawer, localStorage)
├── data/
│   └── products.js        # Seed product catalog
├── components/
│   ├── layout/            # Header, Footer, CartDrawer
│   ├── home/              # Hero, TrustBar, Bestsellers, UGC, Categories, BrandStory, Testimonials, Newsletter
│   └── ui/                # SectionTitle, ProductCard, JewelImage, Stars
└── pages/
    ├── Home.jsx
    ├── Shop.jsx           # Filter sidebar + sort + grid
    ├── Product.jsx        # Gallery, variants, accordions, related
    ├── Collections.jsx
    ├── About.jsx
    ├── Journal.jsx
    └── NotFound.jsx
```

## Run

```
npm install
npm run dev    # http://localhost:8080
npm run build
```

## Connecting a real checkout

`CartContext` exposes `addItem`, `removeItem`, `updateQty`, and `totals`. Wire `Checkout` in `src/components/layout/CartDrawer.jsx` to your provider of choice (Stripe, Shopify, etc.).
