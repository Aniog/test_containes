# SSourcing China — Design System

## Overview
A professional B2B sourcing agent website. Clean, trustworthy, and international. Focus on converting overseas buyers into qualified sourcing inquiries.

## Color Palette
- **Primary Navy**: `#1a2b4a` — Headings, nav, footer, trust sections. Dark, stable, professional.
- **Accent Gold**: `#c4951a` — CTAs, highlights, key numbers. Warm, confident.
- **Light Background**: `#f6f7f9` — Section backgrounds alternating with white.
- **White**: `#ffffff` — Card backgrounds, content areas.
- **Text Primary**: `#1e293b` — Body text.
- **Text Muted**: `#64748b` — Secondary text, captions.
- **Text on Dark**: `#ffffff` — Text over navy backgrounds.
- **Success Green**: `#16a34a` — Trust badges, success states.
- **Border Light**: `#e2e8f0` — Dividers, card borders.

## Typography
- **Font Family**: Inter, system-ui, sans-serif (already loaded via Google Fonts)
- **Headings**: Weight 700-800, tight line-height (1.1-1.2)
  - H1: 48px / 3rem (desktop), 32px / 2rem (mobile)
  - H2: 36px / 2.25rem (desktop), 28px / 1.75rem (mobile)
  - H3: 24px / 1.5rem
  - H4: 18px / 1.125rem
- **Body**: 16px / 1rem, weight 400, line-height 1.6
- **Small / Caption**: 14px / 0.875rem
- **Labels / Nav**: 14px / 0.875rem, weight 500

## Spacing
- Section vertical padding: 80px desktop, 48px mobile (`py-20 md:py-12` pattern)
- Content max-width: 1200px, centered (`max-w-6xl mx-auto`)
- Component gaps: 24px-48px
- Card padding: 24px (`p-6`)

## Components

### Buttons
- **Primary CTA**: Background `#c4951a`, text white, rounded-md, px-6 py-3, hover darkens slightly.
- **Secondary**: Border `#1a2b4a`, text `#1a2b4a`, transparent bg, hover fill.
- **Ghost (on dark)**: Border white, text white, hover bg white/10.

### Cards
- Background white, border `#e2e8f0`, rounded-lg, shadow-sm (`shadow-sm`)
- Hover: subtle lift with `shadow-md` and `translateY(-2px)` transition.

### Navigation
- Fixed top, white background with subtle bottom border.
- Logo left, nav links center, CTA button right.
- Mobile: hamburger menu with slide-down panel.

### Forms
- Input fields: border `#d1d5db`, rounded-md, focus ring `#c4951a`.
- Labels: 14px, weight 500, text `#374151`.
- Submit button: full-width primary CTA style.

## Layout Patterns
- **Hero**: Full-width, navy background, headline + subhead + CTA centered, optional background image.
- **Feature Grid**: 3-column cards on desktop, single column on mobile.
- **Process Steps**: Numbered steps with connecting line or alternating layout.
- **Testimonial / Trust**: Logo bar, stats row, or quote cards.
- **FAQ**: Accordion-style expandable items.
- **CTA Band**: Full-width colored band with centered headline and button.

## Image Strategy
Use stock images tagged with relevant search queries: factory interiors, quality inspection, shipping containers, product manufacturing, warehouse logistics, quality control teams. Referenced via `data-strk-img` attributes.

## Animation
- Subtle fade-in on scroll for sections.
- Card hover lift transitions (200ms ease).
- No heavy animations — keep it fast and professional.

## Responsive
- Desktop: 1024px+ — multi-column layouts
- Tablet: 768px-1023px — 2-column grids
- Mobile: <768px — single column, stacked layout
