# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `cream`: #FAF7F2 — primary page background, warm ivory
- `espresso`: #1C1410 — primary text, nav, footer background
- `charcoal`: #2E2520 — secondary dark surface

### Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights, borders
- `gold-light`: #E8D5B0 — hover states, subtle fills
- `gold-dark`: #A07840 — pressed states

### Neutrals
- `warm-gray`: #8B7D6B — secondary text, captions, muted labels
- `warm-gray-light`: #D4C9BC — hairline dividers, borders
- `warm-gray-pale`: #F0EBE3 — card backgrounds, subtle fills

### Semantic
- `text-primary`: espresso (#1C1410)
- `text-secondary`: warm-gray (#8B7D6B)
- `bg-page`: cream (#FAF7F2)
- `bg-dark`: espresso (#1C1410)

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial text)
- **Sans**: Inter (body, UI, labels, prices)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-inter text-sm leading-relaxed`
- Caption: `font-inter text-xs tracking-widest uppercase`
- Price: `font-inter text-base font-medium`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Components

### Buttons
- Primary (solid): `bg-gold text-espresso px-8 py-3 text-xs tracking-widest uppercase font-inter hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-inter hover:bg-gold hover:text-espresso transition-colors`
- Ghost: `text-espresso text-xs tracking-widest uppercase underline-offset-4 hover:underline`

### Cards
- Product card: white/cream bg, no border, soft shadow on hover `hover:shadow-lg transition-shadow`
- Rounded corners: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)

### Dividers
- Hairline: `border-t border-warm-gray-light`
- Accent: `border-t border-gold`

### Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover scale: `hover:scale-[1.02]`
- Opacity fade: `transition-opacity duration-200`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color
- Generous padding and whitespace
- Thin hairline dividers (1px, warm-gray-light)
- Subtle hover transitions (no jarring effects)
- Dark footer (espresso) with cream text

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very subtle radius)
- No heavy drop shadows
- No generic blue links
- No crowded layouts
- No white backgrounds (use cream #FAF7F2 instead)
