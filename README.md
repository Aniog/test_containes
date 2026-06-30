# Velmora Fine Jewelry

A high-end direct-to-consumer jewelry storefront built with Vite, React, Tailwind CSS, and shadcn/ui.

## Overview

Velmora sells demi-fine gold jewelry — earrings, necklaces, and huggies — to women 25–45. The design direction is quiet luxury: warm editorial photography, generous whitespace, champagne gold accents, and elegant serif typography.

## Tech Stack

- Vite (React + SWC)
- React 18 & React Router DOM 6
- Tailwind CSS 3.4
- shadcn/ui components (Sheet, Button, Accordion, Input, Sonner)
- Lucide React icons
- `@strikingly/sdk` for image helpers and data client integration

## Project Structure

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    CartDrawer.jsx
    Image.jsx
    StarRating.jsx
    home/         # Hero, Bestsellers, UGCRow, CategoryTiles, BrandStory, Testimonials, Newsletter, TrustBar
    product/      # ProductCard, ProductGallery, ProductInfo, ProductAccordions, RelatedProducts
    shop/         # FilterSidebar, ProductGrid, SortDropdown
    ui/           # shadcn/ui components
  context/
    CartContext.jsx
  data/
    products.js
  hooks/
    useProductFilters.js
  pages/
    Home.jsx
    Shop.jsx
    ProductDetail.jsx
    NotFound.jsx
  App.jsx
  main.jsx
  index.css
```

## Available Scripts

```bash
npm run dev      # start development server
npm run build    # production build
npm run preview  # preview production build
```

## Features

- Responsive homepage with hero, bestsellers, UGC reel strip, category tiles, brand story, testimonials, and newsletter.
- Product detail page with image gallery, variant selector, quantity, and accordions.
- Collection / shop page with category, price, and material filters plus sorting.
- Working cart drawer: add to cart, update quantity, remove items, subtotal.
- Smooth hover transitions and a consistent dark luxury visual system.

## Visual System

- Ink: `#121212` — primary background
- Surface: `#1a1a1a` — secondary background
- Surface Highlight: `#252525` — inputs / hover surfaces
- Cream: `#f6f1eb` — primary text
- Cream Muted: `#a8a29e` — secondary text
- Champagne: `#c9a86c` — accent / CTAs
- Champagne Dark: `#b08c55` — hover accent
- Divider: `#2a2a2a` — hairline borders
- Headings: Cormorant Garamond
- Body: Inter

## Seed Products

Five products are included in `src/data/products.js`:

1. Vivid Aura Jewels — $42
2. Majestic Flora Nectar — $68
3. Golden Sphere Huggies — $38
4. Amber Lace Earrings — $54
5. Royal Heirloom Set — $95

## Next Steps

- Replace placeholder stock image tags with final brand photography.
- Wire cart checkout to a payment provider.
- Add real product inventory via the database SDK.
