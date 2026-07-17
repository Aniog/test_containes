# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

### Primary Colors
- `obsidian`: #1A1714 — Deep warm black. Primary background, nav solid state.
- `ivory`: #FAF7F2 — Warm off-white. Page background, card surfaces.
- `champagne`: #C9A96E — Warm gold accent. CTAs, highlights, borders, icons.
- `champagne-light`: #E8D5A3 — Lighter gold tint. Hover states, subtle fills.
- `champagne-dark`: #A07840 — Deeper gold. Active states, pressed buttons.

### Secondary / Neutral
- `stone`: #8C7B6B — Warm mid-tone brown-gray. Body text on light.
- `parchment`: #F0EAE0 — Slightly deeper warm white. Section alternates, trust bar.
- `mist`: #D6CFC4 — Hairline dividers, borders.
- `charcoal`: #3D3530 — Dark warm gray. Headings on light backgrounds.

### Text
- On dark (obsidian): ivory (#FAF7F2) for headings, champagne-light (#E8D5A3) for accents
- On light (ivory/parchment): charcoal (#3D3530) for headings, stone (#8C7B6B) for body

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI labels, navigation, captions

### Scale
- Display: Cormorant Garamond 64–80px, weight 300–400, tracking normal
- H1: Cormorant Garamond 48–56px, weight 400
- H2: Cormorant Garamond 36–42px, weight 400
- H3: Cormorant Garamond 24–28px, weight 500
- Product Name: Cormorant Garamond 20–24px, UPPERCASE, tracking-widest
- Body: Manrope 14–16px, weight 400, stone color
- Caption/Label: Manrope 11–12px, UPPERCASE, tracking-widest, weight 500
- Button: Manrope 12–13px, UPPERCASE, tracking-widest, weight 600

## Spacing & Layout
- Max content width: 1280px
- Section padding: py-20 to py-28 on desktop, py-14 on mobile
- Grid gaps: gap-6 to gap-8
- Card padding: p-6 to p-8

## Borders & Dividers
- Hairline dividers: border-mist (1px)
- Card borders: border border-mist/60
- Rounded corners: rounded-none (sharp) for editorial feel, rounded-sm for pills/badges

## Shadows
- Card hover: shadow-lg with warm tint
- Nav solid: shadow-sm

## Animations
- Transitions: duration-300 ease-out for all hover states
- Image hover: scale-105 on product images
- Nav: bg transition on scroll
- Cart drawer: translate-x slide-in

## Buttons
- Primary (CTA): bg-champagne text-obsidian uppercase tracking-widest text-xs font-semibold px-8 py-3.5 hover:bg-champagne-dark transition
- Secondary (outlined): border border-champagne text-champagne uppercase tracking-widest text-xs font-semibold px-8 py-3.5 hover:bg-champagne hover:text-obsidian transition
- Ghost: text-stone uppercase tracking-widest text-xs hover:text-charcoal

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-bleed)
- Thin hairline dividers between sections
- UPPERCASE + wide tracking for product names and labels
- Warm gold (#C9A96E) as the single accent color
- Serif for all emotional/editorial copy

## Don'ts
- No bright/saturated colors
- No rounded-full on main CTAs (keep sharp/minimal)
- No drop shadows on text
- No generic blue links
- No crowded layouts
