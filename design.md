# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (primary):** `bg-ivory` (#F7F3EE) — warm cream
- **Background (dark sections):** `bg-obsidian` (#1A1714) — deep warm charcoal
- **Background (soft dark):** `bg-obsidian-soft` (#2A2420)
- **Accent / Gold:** `text-gold` / `bg-gold` (#C9A96E) — warm metallic gold
- **Gold hover:** `bg-gold-dark` (#A8854A)
- **Text primary:** `text-text-primary` (#1A1714)
- **Text secondary:** `text-text-secondary` (#5C4F42)
- **Text muted:** `text-text-muted` (#9C8E82)
- **Dividers:** `border-ivory-dark` (#DDD5C8) — hairline thin

## Typography
- **Headings / Product names:** `font-serif` (Cormorant Garamond) — elegant, editorial
- **Body / UI / Labels:** `font-sans` (Manrope) — clean, modern
- **Product names:** UPPERCASE + `tracking-widest` (0.25em letter-spacing)
- **Section labels:** small caps, `tracking-ultra-wide`, muted gold color

### Type Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light`
- Section title: `text-3xl md:text-4xl font-serif`
- Product name: `text-lg font-serif uppercase tracking-widest`
- Body: `text-sm font-sans font-light leading-relaxed`
- Label/caption: `text-xs font-sans tracking-widest uppercase`

## Spacing
- Generous whitespace: sections use `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-6` internal padding

## Borders & Dividers
- Hairline: `border-t border-ivory-dark` (1px, warm beige)
- Card borders: none (use shadow instead)
- Subtle shadow: `shadow-sm` on cards

## Buttons
- **Primary (CTA):** `bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors`
- **Outlined:** `border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-obsidian hover:text-ivory transition-colors`
- **Dark CTA:** `bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-obsidian-soft`

## Animations
- Hover transitions: `transition-all duration-400`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: subtle opacity transitions
- Cart drawer: slide in from right

## Do's
- Use Cormorant Garamond for all headings and product names
- Keep product names in UPPERCASE with wide letter-spacing
- Use warm ivory backgrounds for most sections
- Use obsidian dark sections sparingly for contrast (testimonials, newsletter)
- Gold accent only for CTAs, prices, and key highlights
- Thin hairline dividers between sections

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No generic e-commerce blue/green CTAs
- No crowded layouts — always generous whitespace
- No bold/heavy body text
