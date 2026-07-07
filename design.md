# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — think Mejuri, Missoma, Catbird. NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

### Primary Palette
- **Obsidian** `#1A1714` — primary background, hero, footer. Deep warm black with brown undertone.
- **Ivory** `#FAF7F2` — page background, card surfaces. Warm off-white, never pure white.
- **Champagne** `#C9A96E` — accent color. Warm gold/champagne. Used for CTAs, highlights, borders.
- **Champagne Light** `#E8D5B0` — lighter tint of accent for hover states, subtle backgrounds.
- **Champagne Dark** `#A07840` — darker shade for pressed states.
- **Stone** `#8C7B6B` — muted warm brown-gray for secondary text, captions.
- **Parchment** `#F0EAE0` — slightly darker ivory for section backgrounds, trust bar.
- **Charcoal** `#2D2926` — body text on light backgrounds.

### Usage Rules
- Page background: `ivory` (#FAF7F2)
- Hero / footer / dark sections: `obsidian` (#1A1714)
- Primary CTA button: `champagne` bg + `obsidian` text
- Secondary/outlined button: transparent + `champagne` border + `champagne` text
- Headings on light: `charcoal` (#2D2926)
- Headings on dark: `ivory` (#FAF7F2)
- Body text on light: `charcoal` (#2D2926)
- Body text on dark: `stone` (#8C7B6B) for secondary, `ivory` for primary
- Accent/highlight: `champagne` (#C9A96E)
- Dividers: `champagne` at 20% opacity or `stone` at 30% opacity

### DO NOT
- Use pure white (#FFFFFF) or pure black (#000000)
- Use cool grays — always warm-toned
- Use blue, purple, or any cool accent
- Use high-saturation colors

## Typography

### Fonts
- **Cormorant Garamond** — serif, for all headings, product names, editorial text
- **Manrope** — sans-serif, for body copy, UI labels, navigation, prices

### Scale
- Display: Cormorant Garamond 56–72px, weight 300–400, line-height 1.1
- H1: Cormorant Garamond 48px, weight 400
- H2: Cormorant Garamond 36–40px, weight 400
- H3: Cormorant Garamond 24–28px, weight 400
- Product Name: Cormorant Garamond 20–24px, UPPERCASE, letter-spacing 0.15em
- Body: Manrope 14–16px, weight 400, line-height 1.6
- Caption/Label: Manrope 11–12px, weight 500, UPPERCASE, letter-spacing 0.1em
- Price: Manrope 16–18px, weight 500
- Nav links: Manrope 12px, weight 500, UPPERCASE, letter-spacing 0.12em

### Tailwind Classes
- Display heading: `font-serif text-5xl md:text-7xl font-light tracking-tight`
- Section heading: `font-serif text-3xl md:text-4xl font-normal`
- Product name: `font-serif text-xl uppercase tracking-widest`
- Body: `font-sans text-sm md:text-base leading-relaxed`
- Label/caption: `font-sans text-xs uppercase tracking-widest font-medium`
- Price: `font-sans text-base font-medium`

## Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Card gap: `gap-4 md:gap-6 lg:gap-8`
- Generous whitespace — never cramped

## Components

### Buttons
- **Primary**: `bg-champagne text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-champagne-dark transition-colors duration-300`
- **Outlined**: `border border-champagne text-champagne px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-champagne hover:text-obsidian transition-colors duration-300`
- **Ghost/Text**: `text-champagne text-xs uppercase tracking-widest font-sans font-medium underline-offset-4 hover:underline`
- No border-radius on buttons (sharp edges feel more premium) OR very subtle `rounded-none`

### Cards
- Product card: white/ivory bg, no border, soft shadow on hover `hover:shadow-lg`
- Image aspect ratio: 3:4 (portrait) for product images
- Hover: second image crossfade + subtle scale `hover:scale-[1.02]`

### Dividers
- `border-t border-champagne/20` — hairline gold divider
- `border-t border-stone/20` — hairline neutral divider

### Animations
- All transitions: `duration-300 ease-out`
- Hover scale: `hover:scale-[1.02]` (never more than 1.05)
- Fade in: `opacity-0 → opacity-100`
- No bouncy or playful animations — everything is smooth and restrained

## Layout
- Mobile-first, responsive at `md:` (768px) and `lg:` (1024px)
- Full-bleed hero sections
- Product grid: 2 cols mobile, 3 cols tablet, 4-5 cols desktop
- Max content width: 1280px (`max-w-7xl`)
- Sticky nav height: 64px desktop, 56px mobile

## Imagery Style
- Warm-lit, editorial
- Gold jewelry on dark/neutral backgrounds (obsidian, warm stone, cream linen)
- Close-up macro shots showing texture
- Model shots: natural skin tones, minimal styling
- Never stock-photo-looking — always editorial
