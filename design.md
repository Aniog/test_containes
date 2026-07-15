# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry aesthetic — NOT loud, NOT discount-looking.
Think: Mejuri, Missoma, Aurate. Generous whitespace, editorial photography, restrained palette.

## Color Palette

| Token       | Hex       | Usage                                      |
|-------------|-----------|---------------------------------------------|
| `velvet`    | `#1A1714` | Primary text, nav solid bg, buttons, footer |
| `obsidian`  | `#2C2825` | Card surfaces (dark variant)                |
| `mink`      | `#3D3733` | Subtle borders, dividers                    |
| `stone`     | `#7A736C` | Body text, secondary labels, icons          |
| `parchment` | `#F5F0E8` | Page background                             |
| `cream`     | `#FAF7F2` | Card backgrounds, section alternates        |
| `champagne` | `#C9A96E` | Primary accent — CTAs, stars, tags, accents |
| `gold`      | `#B8924A` | Hover state for champagne elements          |
| `blush`     | `#E8D5B7` | Hairline dividers, soft highlights          |
| `ivory`     | `#FFFDF9` | Text on dark backgrounds                    |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light` — warm, editorial
- Section H2: `font-serif text-4xl md:text-5xl font-light`
- Product names: `font-serif text-sm md:text-base tracking-wide uppercase`
- Always use `font-light` (300) or regular (400) weight — never bold for serif

### Body / UI — Manrope (sans-serif)
- Body text: `font-sans text-sm text-stone leading-relaxed`
- Labels / nav: `font-sans text-xs tracking-widest uppercase`
- Prices: `font-sans text-sm font-500 text-velvet`
- Captions: `font-sans text-[10px] text-stone`

### Letter Spacing
- Product names, nav links, CTAs: `tracking-widest` (0.1em) or `tracking-widest2` (0.25em)
- Section labels: `tracking-widest3` (0.35em)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-5 md:gap-6`
- Generous internal padding on cards: `p-8 md:p-10`

## Borders & Dividers
- Hairline dividers: `border-t border-blush` (1px, blush color)
- Card borders: avoid heavy borders — use shadow or bg color contrast instead
- Accent underline: `w-12 h-px bg-champagne` centered under section headings

## Buttons
- Primary (solid): `bg-velvet text-ivory font-sans text-xs tracking-widest uppercase py-4 px-10 hover:bg-champagne hover:text-velvet transition-all duration-300`
- Secondary (outlined): `border border-velvet text-velvet ... hover:bg-velvet hover:text-ivory`
- Accent (champagne): `bg-champagne text-velvet ... hover:bg-gold`
- NO border-radius on buttons — sharp corners only

## Shadows
- Subtle: `shadow-sm` on sticky nav
- Cards: no shadow by default — use bg contrast
- Drawer: `shadow-2xl`

## Animations
- Image hover zoom: `transition-transform duration-700 group-hover:scale-105`
- Button transitions: `transition-all duration-300`
- Nav transparency: `transition-all duration-500`
- Drawer slide: CSS transform translate

## Do's
- Use `font-light` for all serif headings
- Use `uppercase tracking-widest` for all product names and nav labels
- Use `champagne` as the single accent color — sparingly
- Use `parchment` and `cream` alternating for section backgrounds
- Keep imagery warm-toned (gold jewelry on neutral/dark backgrounds)
- Use thin `h-px` lines as decorative dividers under headings

## Don'ts
- Don't use border-radius on buttons (sharp corners = premium)
- Don't use bright/saturated colors — everything should feel warm and muted
- Don't use bold weight on serif headings
- Don't use generic blue links
- Don't crowd elements — whitespace is a design element
- Don't use drop shadows on product cards
