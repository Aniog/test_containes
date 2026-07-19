# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF8F5` — warm off-white page base
- **Surface (warm white):** `#FFFFFF` — cards, modals
- **Foreground (charcoal):** `#1A1A1A` — primary text
- **Muted text:** `#6B6560` — secondary/body text
- **Accent (warm gold):** `#B8860B` — CTAs, highlights, hover states
- **Accent hover:** `#9A7209` — darker gold for hover
- **Accent light:** `#F5EFE0` — light gold tint for backgrounds
- **Border:** `#E8E4DF` — hairline dividers
- **Dark surface:** `#1A1A1A` — footer, dark sections

### Tailwind Config Names
- `cream`, `surface`, `charcoal`, `muted`, `gold`, `gold-hover`, `gold-light`, `border-subtle`, `dark-surface`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, `tracking-[0.15em]`
- Section headings: serif, normal case or uppercase depending on context
- Body: `text-base` (16px), `leading-relaxed`

### Tailwind Classes
- Heading: `font-serif text-3xl md:text-5xl font-medium`
- Subheading: `font-serif text-xl md:text-2xl font-normal`
- Product name: `font-serif text-sm uppercase tracking-[0.15em]`
- Body: `font-sans text-base text-muted leading-relaxed`
- Small: `font-sans text-sm text-muted`

## Spacing
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Card padding: `p-4 md:p-6`
- Container max-width: `max-w-7xl mx-auto`

## Borders & Dividers
- Hairline: `border-b border-border-subtle`
- Card border: `border border-border-subtle`

## Buttons
- Primary: `bg-gold text-white px-8 py-3 text-sm uppercase tracking-[0.12em] font-sans font-medium hover:bg-gold-hover transition-colors`
- Secondary/Outlined: `border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-[0.12em] font-sans font-medium hover:bg-charcoal hover:text-white transition-colors`

## Shadows
- Soft: `shadow-sm`
- Card hover: `shadow-md`

## Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover opacity: `hover:opacity-80`

## Do's
- Use generous whitespace between sections
- Large editorial imagery
- Thin hairline dividers
- Subtle hover transitions
- Restrained accent color usage

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners larger than `rounded-sm`
- No busy patterns or gradients
- No discount/sale-style badges
