# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals (primary surfaces)
- `ivory`: #FAF7F2 — page background, light surfaces
- `cream`: #F2EDE4 — card backgrounds, section alternates
- `linen`: #E8E0D4 — borders, dividers, hairlines

### Gold Accent (THE brand color)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, lighter accents
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A7068 — secondary text, captions
- `whisper`: #B0A898 — placeholder, disabled

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: Cormorant Garamond 64–80px, weight 300–400, tracking normal
- H1: Cormorant Garamond 48px, weight 400
- H2: Cormorant Garamond 36px, weight 400
- H3: Cormorant Garamond 24px, weight 500
- Product Name: Cormorant Garamond 20px, UPPERCASE, tracking widest (0.15em)
- Body: Manrope 15–16px, weight 400, line-height 1.7
- Label/UI: Manrope 12–13px, weight 500, UPPERCASE, tracking wide
- Price: Manrope 18px, weight 600

## Spacing
- Section padding: py-20 to py-28 (desktop), py-14 to py-16 (mobile)
- Container max-width: 1280px, px-6 (mobile), px-8 (desktop)
- Card gap: gap-6 to gap-8
- Generous whitespace is a feature, not waste

## Borders & Dividers
- Hairline dividers: border-linen (1px)
- Card borders: border-linen, rounded-none (sharp corners = premium)
- No rounded-xl on product cards — keep it editorial

## Shadows
- Soft: shadow-[0_4px_24px_rgba(26,23,20,0.06)]
- Card hover: shadow-[0_8px_40px_rgba(26,23,20,0.12)]
- No harsh drop shadows

## Buttons
- Primary (CTA): bg-gold text-obsidian, hover:bg-gold-light, px-8 py-3.5, uppercase tracking-widest text-xs font-semibold (Manrope)
- Outlined: border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory
- Ghost: text-gold hover:text-gold-dark underline-offset-4 hover:underline
- NO border-radius on buttons (sharp = premium) or very subtle rounded-sm

## Animations
- Transitions: duration-300 ease-out
- Image hover: scale-105 on inner img (overflow-hidden on container)
- Nav: opacity + translateY on scroll
- Cart drawer: translateX slide-in from right
- Subtle fade-in on section entry

## Do's
- Large editorial imagery (full-bleed hero, big product images)
- Thin hairline dividers between sections
- Generous padding around text
- UPPERCASE product names with wide tracking
- Warm gold accents sparingly — they should feel precious
- Serif for anything emotional/brand; sans for anything functional

## Don'ts
- No rounded-xl on cards or buttons
- No bright/saturated colors other than gold
- No heavy drop shadows
- No generic stock-photo vibes in copy
- No crowded layouts — if in doubt, add more whitespace
- No blue links (use gold or obsidian)
