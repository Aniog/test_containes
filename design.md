# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — deep warm neutrals, gold accents, generous whitespace.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: `#FAF7F2` — primary background, warm off-white
- `ivory-dark`: `#F2EDE4` — secondary background, section alternates
- `obsidian`: `#1A1714` — primary text, near-black with warm undertone
- `obsidian-light`: `#2E2A26` — secondary dark surface
- `warm-stone`: `#8C7B6B` — muted body text, captions
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E8D5A3` — hover states, subtle accents
- `gold-dark`: `#A07840` — pressed states, deep accent
- `blush`: `#E8D5C4` — soft warm highlight, trust bar bg
- `charcoal`: `#4A4540` — secondary text

### Usage Rules
- Background: `ivory` or `ivory-dark` for all light sections
- Dark sections (hero, newsletter): `obsidian` or `obsidian-light`
- Primary text on light: `obsidian`
- Body text on light: `charcoal`
- Muted/caption text: `warm-stone`
- Accent/CTA: `gold` background with `obsidian` text, or `gold` text on dark
- NEVER use pure white (#fff) or pure black (#000) — always warm variants
- NEVER use blue, purple, or cool-toned accents

## Typography

### Fonts
- Heading/Display: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body/UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display hero: `text-5xl md:text-7xl` Cormorant Garamond 300, leading-tight
- Section heading: `text-3xl md:text-4xl` Cormorant Garamond 400
- Product name: `text-xl md:text-2xl` Cormorant Garamond 500, UPPERCASE, tracking-widest
- Subheading: `text-lg` Manrope 400
- Body: `text-sm md:text-base` Manrope 400
- Caption/label: `text-xs` Manrope 500, tracking-wider, UPPERCASE
- Price: `text-lg` Manrope 500

### Rules
- Product names: always UPPERCASE with `tracking-widest`
- Section labels (e.g. "BESTSELLERS"): UPPERCASE, `text-xs tracking-[0.2em]` Manrope, gold color
- Headings: Cormorant Garamond, never bold (max 500 weight)
- Body copy: Manrope, `text-charcoal` on light backgrounds

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section vertical padding: `py-16 md:py-24`
- Product grid gap: `gap-6 md:gap-8`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-t border-gold/20` or `border-t border-obsidian/10`
- Card borders: none (use shadow or spacing instead)
- Input borders: `border border-obsidian/20 focus:border-gold`

## Shadows
- Subtle card shadow: `shadow-sm` with warm tint
- Hover elevation: `hover:shadow-md transition-shadow duration-300`
- No harsh drop shadows

## Buttons
- Primary (CTA): `bg-gold text-obsidian px-8 py-3 text-xs tracking-[0.15em] uppercase font-manrope font-medium hover:bg-gold-dark transition-colors duration-300`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost/text: `text-obsidian underline-offset-4 hover:underline text-xs tracking-wider uppercase`
- Pill variant selector: `border border-obsidian/20 px-4 py-2 text-xs tracking-wider rounded-full hover:border-gold`

## Animations & Transitions
- Default transition: `transition-all duration-300 ease-out`
- Image hover scale: `hover:scale-105 transition-transform duration-500`
- Nav scroll: smooth background transition `transition-colors duration-300`
- Cart drawer: slide-in from right
- All animations: subtle, never flashy

## Do's
- Use warm, editorial photography (gold on dark/neutral backgrounds)
- Generous padding around all content
- Thin hairline dividers between sections
- Uppercase tracking-widest for product names and labels
- Cormorant Garamond for all display text

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep them square/rectangular)
- No generic e-commerce blue buttons
- No tight/cramped layouts
- No bold headings (max font-medium for serif)
- No pure white or pure black
