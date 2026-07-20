# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `velmora-ink`: #1C1917 — deep warm near-black, primary text & backgrounds
- `velmora-espresso`: #2C2420 — slightly lighter dark, card backgrounds
- `velmora-gold`: #C9A96E — warm gold accent, CTAs, highlights
- `velmora-gold-light`: #E8D5A3 — lighter gold for hover states
- `velmora-cream`: #FAF7F2 — warm off-white, light section backgrounds
- `velmora-parchment`: #F0EAE0 — slightly deeper cream, alternating sections
- `velmora-stone`: #8A8178 — muted warm gray, secondary text
- `velmora-divider`: #E2D9CE — hairline divider color on light backgrounds
- `velmora-divider-dark`: #3A3330 — hairline divider on dark backgrounds

### Usage Rules
- Dark sections: bg-velmora-ink, text-velmora-cream
- Light sections: bg-velmora-cream, text-velmora-ink
- Accent: text-velmora-gold, bg-velmora-gold
- Secondary text: text-velmora-stone
- Dividers: border-velmora-divider (light) / border-velmora-divider-dark (dark)

## Typography

### Fonts
- Headings: "Cormorant Garamond" (serif) — loaded via Google Fonts
- Body/UI: "Inter" (sans-serif) — loaded via Google Fonts

### Scale
- Display: font-cormorant text-5xl md:text-7xl font-light tracking-wide
- H1: font-cormorant text-4xl md:text-5xl font-light tracking-wide
- H2: font-cormorant text-3xl md:text-4xl font-light tracking-wide
- H3: font-cormorant text-2xl font-light tracking-wide
- Product Name: font-cormorant text-xl uppercase tracking-[0.15em] font-medium
- Body: font-inter text-base font-normal
- Caption: font-inter text-sm text-velmora-stone
- Label/UI: font-inter text-xs uppercase tracking-[0.1em]

## Spacing & Layout
- Max content width: max-w-7xl mx-auto px-4 md:px-8 lg:px-12
- Section padding: py-16 md:py-24
- Card gap: gap-4 md:gap-6
- Generous whitespace is a feature, not a bug

## Components

### Buttons
- Primary (accent): bg-velmora-gold text-velmora-ink px-8 py-3 font-inter text-sm uppercase tracking-[0.12em] hover:bg-velmora-gold-light transition-colors duration-300
- Outlined: border border-velmora-gold text-velmora-gold px-8 py-3 font-inter text-sm uppercase tracking-[0.12em] hover:bg-velmora-gold hover:text-velmora-ink transition-all duration-300
- Ghost dark: border border-velmora-cream text-velmora-cream px-8 py-3 hover:bg-velmora-cream hover:text-velmora-ink transition-all duration-300

### Cards
- Product card: bg-white overflow-hidden group cursor-pointer
- Soft shadow on hover: hover:shadow-lg transition-shadow duration-300
- Image aspect: aspect-[3/4]

### Dividers
- Hairline: border-t border-velmora-divider (light) / border-velmora-divider-dark (dark)

## Animations
- Transitions: duration-300 ease-in-out (standard), duration-500 (images)
- Hover image scale: group-hover:scale-105 transition-transform duration-500
- Fade in: opacity-0 → opacity-100 on mount

## Do's
- Use generous padding and whitespace
- Serif for all headings and product names
- UPPERCASE with wide tracking for product names and labels
- Warm gold as the single accent color
- Thin borders, not thick
- Subtle shadows, not dramatic

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on buttons (sharp edges feel more premium)
- No heavy drop shadows
- No generic blue links
- No Comic Sans or system fonts for headings
