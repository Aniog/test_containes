# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry flattery through warm neutrals and deep espresso tones. NOT loud, NOT discount, NOT generic.

## Color Palette

### Base Colors
- `espresso` (#1a1614) — Primary dark background, nav solid state, footer
- `charcoal` (#2d2825) — Secondary dark, card overlays
- `warm-white` (#faf7f2) — Primary light background, page base
- `cream` (#f5f0e8) — Card backgrounds, section alternates
- `linen` (#ede8df) — Borders, dividers, subtle backgrounds

### Accent
- `gold` (#c9a96e) — Primary accent: CTAs, highlights, hover states, icons
- `gold-light` (#e2c99a) — Hover states, lighter gold tones
- `gold-dark` (#a8854a) — Active states, deeper gold

### Text
- `ink` (#1a1614) — Primary body text on light backgrounds
- `muted` (#8a7f76) — Secondary text, captions, metadata
- `ghost` (#b5aca4) — Placeholder text, disabled states

### Semantic
- `surface` = warm-white on light pages, espresso on dark sections
- `on-surface` = ink on light, warm-white on dark

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels):** Inter — weights 300, 400, 500, 600

### Scale
- `display`: 4xl–6xl, Cormorant Garamond, font-light, tracking-wide
- `heading`: 2xl–3xl, Cormorant Garamond, font-normal
- `subheading`: xl, Cormorant Garamond, font-light, italic
- `product-name`: sm–base, Inter or Cormorant, UPPERCASE, tracking-widest
- `body`: sm–base, Inter, font-normal, leading-relaxed
- `caption`: xs, Inter, muted color, tracking-wide

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Cards: p-6 to p-8
- Hairline dividers: border-linen, border-[0.5px]

## Components

### Buttons
- **Primary (CTA):** bg-gold text-espresso px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors
- **Outlined:** border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-espresso transition-colors
- **Ghost/text:** text-gold underline-offset-4 hover:underline text-xs tracking-widest uppercase

### Cards
- bg-cream, no border, soft shadow: shadow-[0_2px_20px_rgba(26,22,20,0.06)]
- Hover: shadow-[0_8px_40px_rgba(26,22,20,0.12)] translate-y-[-2px] transition

### Dividers
- `<hr>` or `border-t border-linen` — hairline, warm tone

### Nav
- Transparent over hero, transitions to bg-warm-white/95 backdrop-blur on scroll
- Logo: Cormorant Garamond, tracking-[0.3em], uppercase, text-espresso
- Links: Inter, text-xs, tracking-widest, uppercase, text-ink hover:text-gold

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and nav links
- Warm gold (#c9a96e) as the single accent color
- Generous padding, editorial breathing room
- Subtle transitions (200–300ms ease)
- Thin borders (0.5px–1px) in linen color

## Don'ts
- No bright whites (#ffffff) — use warm-white (#faf7f2) instead
- No cool grays — all neutrals are warm-toned
- No heavy drop shadows — keep them soft and warm
- No more than 2 font families
- No saturated colors other than gold accent
- No tight spacing or cramped layouts
