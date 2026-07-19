# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry brand for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `ivory-dark`: #F2EDE4 — secondary background, section alternates
- `espresso`: #1A1208 — primary text, deepest dark
- `espresso-light`: #3D2E1E — secondary text, headings
- `gold`: #C4973A — primary accent, CTAs, highlights
- `gold-light`: #D4AA5A — hover state for gold
- `gold-pale`: #EDD9A3 — very light gold tint, backgrounds
- `stone`: #8C7B6B — muted text, captions, labels
- `stone-light`: #B5A898 — borders, dividers, placeholders
- `charcoal`: #2C2416 — dark section backgrounds

### Usage Rules
- Page background: `ivory` (#FAF7F2)
- Section alternates: `ivory-dark` (#F2EDE4)
- Dark sections (footer, newsletter): `espresso` (#1A1208)
- Primary text: `espresso` (#1A1208)
- Secondary/muted text: `stone` (#8C7B6B)
- Accent/CTA: `gold` (#C4973A)
- Borders/dividers: `stone-light` (#B5A898) at low opacity
- NEVER use pure black (#000) or pure white (#fff) as primary colors

## Typography

### Fonts
- Serif: "Cormorant Garamond" — headings, product names, editorial text
- Sans: "Inter" — body, UI, labels, prices, navigation links

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl lg:text-8xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product name: `font-cormorant text-xl md:text-2xl uppercase tracking-[0.15em] font-medium`
- Body: `font-inter text-sm md:text-base text-stone`
- Label/caption: `font-inter text-xs uppercase tracking-[0.12em] text-stone`
- Price: `font-inter text-lg font-medium text-espresso`
- Nav links: `font-inter text-xs uppercase tracking-[0.1em]`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6 lg:gap-8`
- Generous whitespace — never cramped

## Components

### Buttons
- Primary (solid): `bg-gold text-ivory font-inter text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-inter text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-ivory transition-all duration-300`
- Ghost: `text-espresso font-inter text-xs uppercase tracking-[0.1em] underline-offset-4 hover:underline`

### Cards
- Product card: white/ivory background, no border, soft shadow on hover
- Hover: `hover:shadow-lg transition-shadow duration-300`

### Dividers
- Hairline: `border-t border-stone-light/30`

## Animations
- Transitions: `duration-300 ease-out` for most interactions
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep generous whitespace between sections
- Use warm gold (#C4973A) sparingly as the accent
- Ensure all text has strong contrast against its background

## Don'ts
- Don't use bright/saturated colors
- Don't use tight spacing or cramped layouts
- Don't use generic blue links
- Don't use rounded-full on rectangular buttons (use rounded-none or rounded-sm)
- Don't use heavy font weights for headings (prefer light/regular for serif)
