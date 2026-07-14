# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F7F3EE — primary light background
- `cream`: #EDE8E1 — secondary light surface, cards
- `linen`: #E0D9D0 — borders, hairlines, dividers

### Accent
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6460 — secondary/muted text
- `ink-faint`: #9C9490 — placeholder, captions

### Semantic
- `surface`: #FFFFFF — card surfaces
- `overlay`: rgba(26,23,20,0.55) — image overlays

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, prices

### Scale
- `text-xs`: 11px — labels, badges
- `text-sm`: 13px — captions, meta
- `text-base`: 15px — body
- `text-lg`: 17px — lead text
- `text-xl`: 20px — subheadings
- `text-2xl`: 24px — section headings
- `text-3xl`: 30px — page headings
- `text-4xl`: 38px — hero subhead
- `text-5xl`: 52px — hero headline
- `text-6xl`: 68px — display

### Product Names
Always UPPERCASE, tracking-widest (letter-spacing: 0.15em), font-serif

## Spacing
Generous whitespace. Section padding: py-20 to py-28 on desktop, py-14 on mobile.
Grid gaps: gap-6 to gap-8. Card padding: p-6.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border-linen` or none (shadow preferred)
- Border radius: rounded-none for editorial, rounded-sm for buttons, rounded-full for pills

## Shadows
- Card hover: `shadow-md` with warm tint
- Drawer: `shadow-2xl`
- Subtle: `shadow-sm`

## Buttons
- **Primary (CTA)**: bg-gold text-obsidian uppercase tracking-widest text-xs font-sans font-semibold px-8 py-3.5 hover:bg-gold-light transition
- **Outlined**: border border-obsidian text-obsidian uppercase tracking-widest text-xs hover:bg-obsidian hover:text-parchment transition
- **Ghost**: text-ink-muted hover:text-ink underline-offset-4 hover:underline

## Animations
- Hover transitions: duration-300 ease-out
- Image zoom on hover: scale-105
- Cart drawer: slide-in from right
- Nav: opacity + backdrop-blur transition

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide tracking for product names
- Use gold accent sparingly — only for CTAs and key highlights
- Generous padding and whitespace
- Thin hairline borders
- Warm, editorial image treatment

## Don'ts
- No bright/neon colors
- No rounded-xl or pill shapes on editorial elements
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts
