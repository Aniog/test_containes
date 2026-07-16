# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background**: `ivory` (#FDFBF7) — warm off-white base
- **Surface**: `cream` (#F7F3ED) — card/section backgrounds
- **Foreground / Text**: `charcoal` (#1C1917) — primary text
- **Muted text**: `stone` (#78716C) — secondary/body text
- **Accent**: `gold` (#B8860B) — CTA buttons, highlights, hover states
- **Accent light**: `gold-light` (#D4A843) — hover/lighter gold
- **Accent dark**: `gold-dark` (#8B6508) — pressed states
- **Border**: `border` (#E7E0D6) — hairline dividers

## Typography
- **Headings / Product names**: `Cormorant Garamond` (serif), weights 400/500/600
  - Product names: UPPERCASE, letter-spacing: 0.15em
  - Section headings: normal case or uppercase depending on context
- **Body / UI**: `Inter` (sans-serif), weights 300/400/500
- **Sizes** (Tailwind):
  - Hero headline: `text-4xl md:text-6xl lg:text-7xl`
  - Section title: `text-3xl md:text-4xl`
  - Product name: `text-sm md:text-base tracking-[0.15em]`
  - Body: `text-sm md:text-base`
  - Small/caption: `text-xs`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`

## Borders & Dividers
- Hairline dividers: `border-t border-border` (1px)
- Card borders: `border border-border`
- Border radius: minimal — `rounded-none` or `rounded-sm` for premium feel

## Buttons
- Primary (accent): `bg-gold text-white hover:bg-gold-light` — no border-radius or very subtle `rounded-sm`
- Secondary (outlined): `border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory`
- Pill variant selectors: `rounded-full border px-4 py-1.5`

## Shadows & Effects
- Soft shadows on hover: `hover:shadow-md transition-shadow duration-300`
- Image hover zoom: `hover:scale-105 transition-transform duration-500`
- Fade-in animations: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Maintain warm, golden tones throughout
- Use uppercase + letter-spacing for product names
- Keep UI minimal and restrained

## Don'ts
- No bright/neon colors
- No heavy drop shadows or gradients
- No rounded-lg or pill-shaped cards
- No cluttered layouts
- No discount/sale badges or loud CTAs
- No generic stock photo feel
