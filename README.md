# Velmora Fine Jewelry

A premium direct-to-consumer (D2C) e-commerce storefront for Velmora Fine Jewelry, selling demi-fine gold jewelry including earrings, necklaces, and huggies. Built with React, Vite, Tailwind CSS, and shadcn/ui.

## Features

- **Homepage**: Full-bleed hero, trust bar, bestsellers grid, UGC reels strip, category tiles, brand story, testimonials, and newsletter capture
- **Product Detail Page**: Image gallery with thumbnails, variant selection, quantity controls, accordion sections, and related products
- **Shop/Collection Page**: Category filtering, price/material filters, sort dropdown, and mobile filter drawer
- **Cart Functionality**: Add/remove items, quantity controls, persistent cart state with localStorage, and slide-out cart drawer
- **Responsive Design**: Mobile-first design with premium editorial aesthetic
- **Premium Typography**: Cormorant Garamond/Playfair Display for headings, Inter for body text
- **Elegant Color Palette**: Deep refined base with warm metallic accents

## Tech Stack

- React 19 with Vite
- Tailwind CSS for styling
- shadcn/ui components
- React Router v7 for navigation
- Lucide React for icons
- date-fns for date formatting
- Recharts for data visualization
- Sonner for toast notifications

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd velmora-jewelry
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── home/          # Homepage sections
│   ├── layout/        # Navbar, Footer, CartDrawer
│   └── ui/            # shadcn/ui components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── data/              # Product catalog and seed data
├── lib/               # Utility functions
├── App.jsx            # Main app with routing
└── index.css          # Global styles
```

## Product Catalog

The store includes 5 seed products across 3 categories:

1. **Vivid Aura Jewels** - Gold ear cuff with crystal accent ($42)
2. **Majestic Flora Nectar** - Multicolor floral crystal necklace ($68)
3. **Golden Sphere Huggies** - Chunky gold dome huggie earrings ($38)
4. **Amber Lace Earrings** - Textured gold filigree drop earrings ($54)
5. **Royal Heirloom Set** - Gift-boxed earring + necklace set ($95)

## Design System

- **Typography**: Playfair Display for headings, Inter for body text
- **Colors**: Deep charcoal base (#1a1a1a), warm gold accents (#c9a96e), cream highlights (#f5f0e8)
- **Spacing**: Generous whitespace with 8px grid system
- **Components**: Premium button styles, thin hairline dividers, soft shadows

## Cart Features

- Add products to cart from product cards and detail pages
- Quantity adjustment controls
- Persistent cart state via localStorage
- Slide-out cart drawer with item summary
- Real-time cart count in navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Velmora Fine Jewelry. All rights reserved.
