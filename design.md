# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary page background, warm off-white
- `cream`: #F2EDE4 — secondary background, section alternates
- `parchment`: #E8E0D4 — borders, hairline dividers, subtle fills
- `stone`: #8A8178 — secondary/muted text, captions
- `charcoal`: #2C2825 — primary text, headings
- `ink`: #1A1714 — deepest text, nav on scroll, footer
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold
- `blush`: #F0E8DC — very soft warm tint for testimonial/newsletter bg

### Usage Rules
- Page background: `ivory`
- Section alternates: `cream` or `blush`
- Primary text: `charcoal`
- Secondary/muted text: `stone`
- Headings: `ink` or `charcoal`
- Accent / CTA: `gold`
- Borders / dividers: `parchment`
- Footer background: `ink`
- Footer text: `ivory`/`stone`

### Do's
- Always pair `gold` accent with `ivory` or `ink` backgrounds for strong contrast
- Use `charcoal` text on `ivory`/`cream` backgrounds
- Use `ivory` text on `ink`/`charcoal` backgrounds
- Hairline dividers: `border-parchment`

### Don'ts
- Never use `gold` text on `cream` background (low contrast)
- Never use `stone` text on `parchment` background
- No pure black (#000) or pure white (#fff) — use `ink` and `ivory`

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600, 700
- **Sans-serif (body, UI, labels)**: Inter — weights 300, 400, 500, 600

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-cormorant font-light`
- Product name: `text-xl font-cormorant font-medium uppercase tracking-widest`
- Body: `text-sm font-inter font-normal leading-relaxed`
- Caption/label: `text-xs font-inter uppercase tracking-widest`
- Price: `text-lg font-inter font-medium`
- Button: `text-xs font-inter uppercase tracking-widest font-medium`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Shadows
- Hairline dividers: `border border-parchment` or `divide-parchment`
- Card hover shadow: `shadow-md` with `transition-shadow duration-300`
- No heavy drop shadows — keep it refined

## Buttons
- Primary (solid gold): `bg-gold text-ink hover:bg-gold-light px-8 py-3 text-xs uppercase tracking-widest font-inter font-medium transition-colors duration-200`
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-ink px-8 py-3 text-xs uppercase tracking-widest font-inter font-medium transition-colors duration-200`
- Ghost: `text-charcoal hover:text-gold text-xs uppercase tracking-widest font-inter font-medium transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade-in: subtle opacity transitions
- No jarring animations — everything is slow and refined

## Component Patterns
- Product cards: white/ivory bg, product name in uppercase serif, price in inter, hover reveals second image
- Nav: transparent over hero, `bg-ink/95 backdrop-blur` on scroll
- Section headings: centered, serif, with thin gold underline accent or wide letter-spacing
- Testimonials: italic serif quote, small sans-serif attribution
