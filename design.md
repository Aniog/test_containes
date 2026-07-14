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
- `linen`: #F2EDE5 — card backgrounds, section alternates
- `sand`: #E8DFD0 — borders, dividers, subtle fills

### Gold Accent (THE brand color)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, lighter gold
- `gold-dark`: #A8854A — pressed states, deep gold

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A6E65 — secondary text, captions
- `whisper`: #B5A99A — placeholder, disabled

## Typography

### Fonts
- Headings/Display: "Cormorant Garamond" (serif) — elegant, editorial
- Body/UI: "Inter" (sans-serif) — clean, readable

### Scale
- Display: 72px / font-display, tracking-wide
- H1: 56px / font-display
- H2: 40px / font-display
- H3: 28px / font-display
- Product Name: 20px / font-display, uppercase, tracking-widest
- Body: 16px / font-sans
- Small: 14px / font-sans
- Caption: 12px / font-sans, tracking-wide, uppercase

### Product Names
Always UPPERCASE with `tracking-widest` (letter-spacing: 0.15em+)

## Spacing
Generous whitespace. Section padding: py-20 to py-32.
Card padding: p-6 to p-8. Grid gaps: gap-6 to gap-8.

## Borders & Dividers
- Hairline dividers: `border-sand` (1px)
- Card borders: `border border-sand`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Soft card shadow: `shadow-sm` with warm tint
- Hover elevation: `shadow-md`
- No harsh drop shadows

## Buttons
- Primary (CTA): `bg-gold text-obsidian` — solid gold, dark text
- Secondary: `border border-gold text-gold` — outlined gold
- Ghost: `text-ink underline-offset-4 hover:underline`
- All buttons: uppercase, tracking-widest, text-xs/sm, px-8 py-3

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Fade-in: opacity 0→1, translateY 8px→0
- Cart drawer: slide from right

## Do's
- Use Cormorant Garamond for all headings and product names
- Use gold accent sparingly — it should feel precious
- Generous padding around all content
- Thin hairline borders (1px, sand color)
- Large editorial images
- Uppercase product names with wide tracking

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full on rectangular buttons
- No cramped layouts
- No generic stock-photo vibes
- No blue links
