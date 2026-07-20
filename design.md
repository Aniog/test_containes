# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `ivory` → `#FFFDF7` — main page background
- **Surface (warm white):** `pearl` → `#FAF7F2` — cards, sections
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Muted text:** `stone` → `#78716C` — secondary/body text
- **Accent (warm gold):** `gold` → `#B8860B` — CTAs, highlights, hover states
- **Accent light:** `goldLight` → `#D4A843` — hover variant
- **Accent dark:** `goldDark` → `#8B6914` — pressed state
- **Border:** `border` → `#E7E5E4` — hairline dividers
- **Dark surface:** `espresso` → `#292524` — footer, dark sections

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Tailwind Classes (common patterns)

### Headings
- `font-serif text-charcoal` (serif = Cormorant Garamond)
- Hero: `text-4xl md:text-6xl lg:text-7xl font-light`
- Section: `text-3xl md:text-4xl font-light`
- Product name: `font-serif uppercase tracking-[0.15em] text-sm`

### Body
- `font-sans text-stone text-sm md:text-base leading-relaxed`

### Buttons
- Primary: `bg-gold text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-goldLight transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors`

### Cards
- `bg-white rounded-none` (no border-radius for editorial feel)
- Subtle shadow on hover: `hover:shadow-lg transition-shadow`

### Spacing
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Container max: `max-w-7xl mx-auto`

## Do's
- Use generous whitespace
- Thin hairline dividers (`border-t border-border`)
- Large editorial imagery
- Subtle hover transitions (300ms)
- Soft shadows only on hover

## Don'ts
- No rounded corners on cards/images (editorial = sharp)
- No bright/neon colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount/sale-style badges
