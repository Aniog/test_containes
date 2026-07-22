# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — think Vogue, Net-a-Porter, Mejuri. NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

### Primary Colors
- `obsidian`: #1A1714 — Deep warm black. Primary text, nav background (solid state), footer.
- `ivory`: #FAF7F2 — Warm off-white. Page background, card backgrounds.
- `champagne`: #C9A96E — Warm gold accent. CTAs, highlights, star ratings, accent borders.
- `champagne-light`: #E8D5B0 — Pale gold. Hover states, subtle tints.
- `champagne-dark`: #A07840 — Deep gold. Active states, pressed buttons.

### Secondary Colors
- `stone`: #8C7B6B — Warm mid-tone brown-gray. Secondary text, captions, muted labels.
- `linen`: #EDE8E0 — Warm light gray. Dividers, borders, trust bar background, input borders.
- `blush`: #F5EDE4 — Very soft warm pink. Section backgrounds, newsletter block.

## Typography

### Fonts
- **Serif (headings, product names, brand)**: Cormorant Garamond — elegant, editorial, high-fashion
- **Sans-serif (body, UI, labels)**: Inter — clean, readable, modern

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide` — hero headlines
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-inter text-sm text-stone leading-relaxed`
- Label/UI: `font-inter text-xs uppercase tracking-[0.12em]`
- Price: `font-inter text-base font-medium text-obsidian`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace is a design feature — do not compress.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border border-linen`
- Rounded corners: `rounded-none` for editorial feel (or `rounded-sm` max)

## Shadows
- Subtle card shadow: `shadow-[0_2px_20px_rgba(26,23,20,0.06)]`
- Hover shadow: `shadow-[0_8px_40px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (CTA): `bg-champagne text-ivory font-inter text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-champagne-dark transition-colors`
- Outlined: `border border-obsidian text-obsidian font-inter text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-obsidian hover:text-ivory transition-colors`
- Ghost: `text-obsidian font-inter text-xs uppercase tracking-[0.12em] underline-offset-4 hover:underline`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Image hover scale: `hover:scale-105 transition-transform duration-500`
- Nav scroll: smooth background transition on scroll

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep backgrounds warm (ivory, blush, linen) — never cold white (#fff)
- Use champagne gold as the single accent color
- Generous padding and whitespace
- Hairline borders, not thick borders

## Don'ts
- No pure white (#ffffff) backgrounds
- No blue links or generic e-commerce colors
- No rounded pill buttons (keep rectangular/minimal radius)
- No heavy drop shadows
- No cluttered layouts
- No generic stock photo vibes — editorial warmth only
