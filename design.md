# Velmora Fine Jewelry — Design System

## Mood & Tone
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce. The brand feels approachable but aspirational.

## Color Palette
- **Background**: `hsl(42, 20%, 97%)` — warm off-white/cream
- **Text**: `hsl(0, 0%, 9%)` — near-black
- **Primary/Accent (clay gold)**: `#b68860` — warm, refined metallic bronze-gold. Used for buttons, dividers, accent lines, stars, hover states.
- **Hover accent**: `#a87655` — slightly deeper gold-brown
- **Secondary bg**: `hsl(36, 24%, 92%)` — warm light beige, used for UGC section
- **Muted text**: `hsl(36, 8%, 45%)` — soft warm grey
- **Borders**: `hsl(36, 12%, 84%)` at 40% opacity — thin, subtle hairline dividers
- **Dark section bg**: `#1a1a14` — deep warm charcoal, used for footer and newsletter
- **White** — used for cards, testimonials, overlays

## Typography
- **Headings, product names, logo**: `Cormorant Garamond` (serif) — elegant, refined. Light font-weight (300) for most headings, italic for emphasis.
- **Body, UI, buttons, navigation**: `Inter` (sans-serif) — clean, modern, highly legible.
- **Product names**: ALL CAPS, wide letter-spacing (`tracking-[0.15em]`), serif, small size.
- **Button text**: UPPERCASE, sans-serif, small, wide tracking.

## Spacing & Layout
- **Generous whitespace** everywhere. Sections have `py-20 lg:py-28`.
- **Max width**: `max-w-7xl` for content, `mx-auto` centered.
- **Grid gap**: `gap-4 lg:gap-6` for product grids.
- **Padding**: `px-6 lg:px-8` on sections.

## Borders & Dividers
- `.hairline` class: thin `border-t` with low opacity.
- Accent dividers: `w-12 h-[1px] bg-[#b68860] mx-auto mt-4` — thin gold line.
- No rounded corners anywhere (`--radius: 0rem`). Sharp, tailored.

## Buttons
- **Primary (btn-primary)**: solid `#b68860` background, white text, uppercase, small tracking. Hover: `#a87655`.
- **Outline (btn-outline)**: border `#b68860`, text `#b68860`, transparent bg. Hover: solid fill + white text.
- **Hero CTA**: white border on dark bg, white text. Hover: solid white fill + dark text.
- **Quick "Add to Cart"**: white/90 blur backdrop, slides up from bottom of product card on hover.

## Navigation
- Sticky, transparent on hero (white text), solid white on scroll with backdrop blur.
- Centered logo "VELMORA" in serif, uppercase, wide tracking.
- Center nav links in uppercase sans-serif small text.
- Right: search + cart icons with badge count.

## Product Cards
- Aspect ratio `3:4` for images.
- Hover: subtle scale-up (`scale-105`), second image swap.
- Quick "Add to Cart" slides up from bottom on hover.
- Info below: product name (uppercase serif), type, star rating, price.

## Animations
- Subtle `fadeIn` and `slideUp` keyframe animations on hero.
- Hover transitions: 300ms ease-out on buttons, borders.
- Cart drawer: smooth slide from right with overlay.
- Mobile menu: smooth expand/collapse.
- Scale on product images: 500ms ease for dreamy feel.

## Do's
- Use the clay gold (#b68860) sparingly as an accent — lines, stars, hover states, buttons.
- Keep whitespace generous.
- Use thin hairline dividers between sections.
- Product images should feel editorial — warm lighting, dark/neutral backgrounds.

## Don'ts
- No loud colors, no bright reds/blues/greens.
- No rounded corners.
- No heavy borders or thick lines.
- No discount-looking badges or sale stickers.