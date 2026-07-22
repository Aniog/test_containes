# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: `#FAF7F2` — primary background, warm off-white
- `ivory-dark`: `#F2EDE4` — secondary background, section alternates
- `obsidian`: `#1A1714` — primary text, deep warm black
- `obsidian-light`: `#2E2A26` — secondary dark surface
- `gold`: `#C9A96E` — primary accent, warm gold
- `gold-light`: `#DFC08A` — hover state for gold
- `gold-pale`: `#F0E4C8` — very light gold tint for backgrounds
- `mink`: `#8A7968` — muted warm brown, secondary text
- `mink-light`: `#B5A898` — tertiary text, captions
- `stone`: `#E8E2D9` — hairline dividers, borders

### Usage Rules
- Background: `ivory` (#FAF7F2) — warm, not cold white
- Primary text: `obsidian` (#1A1714) — deep warm black
- Accent: `gold` (#C9A96E) — buttons, highlights, icons
- Secondary text: `mink` (#8A7968)
- Borders/dividers: `stone` (#E8E2D9) — hairline thin
- Dark sections (hero overlay, footer): `obsidian` / `obsidian-light`

## Typography

### Fonts
- Serif: **Cormorant Garamond** — headings, product names, editorial text
- Sans: **Manrope** — body, UI, navigation, captions

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm text-obsidian`
- Caption: `font-manrope text-xs text-mink-light tracking-wide`
- Nav: `font-manrope text-xs uppercase tracking-[0.12em]`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Components

### Buttons
- Primary (solid): `bg-gold text-ivory font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-ivory transition-all duration-300`
- Ghost: `text-obsidian font-manrope text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors duration-300`

### Cards
- Product card: white/ivory bg, no border, soft shadow on hover `hover:shadow-lg transition-shadow duration-300`
- Thin hairline dividers: `border-stone`

### Animations
- Hover transitions: `duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and nav links
- Generous padding and whitespace
- Warm gold (#C9A96E) as the single accent color
- Hairline borders (1px) in stone color
- Soft, warm imagery tones

## Don'ts
- No cold whites or blues
- No bold/heavy typography for headings
- No bright or saturated colors
- No generic e-commerce patterns (no red sale badges, no cluttered layouts)
- No tight spacing
