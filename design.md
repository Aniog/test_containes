# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — deep warm neutrals, gold accents, generous whitespace.

## Color Palette

### Base Colors (add to Tailwind config as named tokens)
- `velvet` — #1A1410 — Deep warm near-black (primary background for dark sections)
- `espresso` — #2C2118 — Rich dark brown (secondary dark surface)
- `parchment` — #F7F3EE — Warm off-white (primary light background)
- `linen` — #EDE8E1 — Slightly deeper warm neutral (card backgrounds, sections)
- `stone` — #C4B8A8 — Warm mid-tone gray (borders, dividers, muted text)
- `gold` — #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `gold-light` — #E8D5A3 — Pale gold (hover states, subtle accents)
- `gold-dark` — #A07840 — Deep gold (pressed states, strong accents)
- `ink` — #2A2118 — Warm near-black for body text on light backgrounds
- `mist` — #8A7E72 — Warm medium gray for secondary text

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — weights 300, 400, 500, 600, 700
- **Sans-serif (body, UI, labels):** Manrope — weights 300, 400, 500, 600, 700

### Scale
- Display: `font-cormorant text-6xl md:text-8xl font-light tracking-wide` — hero headlines
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- H3: `font-cormorant text-2xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl font-medium tracking-widest uppercase`
- Body: `font-manrope text-sm font-normal leading-relaxed`
- Caption: `font-manrope text-xs font-light tracking-wide`
- Label/UI: `font-manrope text-xs font-medium tracking-widest uppercase`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline divider: `border-stone/30` (1px, very subtle)
- Card border: `border border-stone/20`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for buttons

## Shadows
- Soft card shadow: `shadow-[0_2px_20px_rgba(26,20,16,0.06)]`
- Hover elevation: `shadow-[0_8px_40px_rgba(26,20,16,0.12)]`

## Buttons
- Primary (solid gold): `bg-gold text-velvet font-manrope text-xs font-medium tracking-widest uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs font-medium tracking-widest uppercase px-8 py-3.5 hover:bg-gold hover:text-velvet transition-all duration-300`
- Ghost: `text-ink font-manrope text-xs font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep backgrounds warm (parchment, linen, velvet) — never cold gray or pure white
- Gold accent only for CTAs, prices, and key highlights — don't overuse
- Hairline borders, not thick borders
- Large editorial images with generous padding

## Don'ts
- No pure white (#FFFFFF) backgrounds — use parchment instead
- No cold grays — always warm-toned
- No rounded-full buttons (pill shape feels discount-y)
- No bright/saturated colors
- No generic sans-serif headings
- No tight spacing or cramped layouts
