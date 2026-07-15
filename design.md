# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: `#FAF7F2` — primary background, warm off-white
- `cream`: `#F2EDE4` — secondary background, section alternates
- `espresso`: `#1C1410` — primary text, deep warm near-black
- `mink`: `#4A3F35` — secondary text, warm dark brown
- `stone`: `#8B7D6B` — muted text, captions, labels
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E8D5A3` — hover states, soft gold tints
- `gold-dark`: `#A07840` — pressed states, deeper gold
- `blush`: `#F5EDE3` — warm tint for cards, hover backgrounds

### Usage Rules
- Page backgrounds: `ivory` or `cream`
- Primary text: `espresso`
- Secondary/muted text: `stone`
- Accent/CTA: `gold` background with `espresso` text
- Buttons: solid `gold` with `espresso` text, or outlined `espresso` border
- Dividers: `stone/20` (hairline, very subtle)
- Never use pure white (#fff) as a background — use `ivory` instead
- Never use pure black — use `espresso`

## Typography

### Fonts
- **Serif (headings, product names, brand)**: Cormorant Garamond — loaded via Google Fonts
- **Sans-serif (body, UI, labels)**: Inter — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant)
- Section headings: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant)
- Product names: `text-sm md:text-base font-normal uppercase tracking-[0.15em]` (Cormorant)
- Body text: `text-sm md:text-base font-normal leading-relaxed` (Inter)
- Labels/captions: `text-xs uppercase tracking-widest` (Inter)
- Prices: `text-base font-medium` (Inter)

## Spacing & Layout
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-stone/20` or `border-[#C9A96E]/20`
- Card borders: none (use shadow or background contrast instead)
- Subtle card shadow: `shadow-sm` with warm tint

## Buttons
- Primary CTA: `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold-dark transition-colors`
- Secondary/outlined: `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-widest hover:bg-espresso hover:text-ivory transition-colors`
- Ghost: `text-stone text-xs uppercase tracking-widest hover:text-espresso transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade-in: subtle opacity transitions
- No jarring animations — everything is soft and refined

## Do's
- Large editorial imagery
- Generous whitespace
- Thin hairline dividers
- Restrained use of gold accent
- Uppercase product names with wide letter-spacing
- Serif for anything brand/editorial, sans for functional UI

## Don'ts
- No bright/saturated colors
- No heavy drop shadows
- No rounded pill buttons (use subtle rounding: `rounded-none` or `rounded-sm`)
- No generic stock-photo vibes — warm, editorial, jewelry-focused
- No cluttered layouts
