# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Surface (ivory):** `ivory` → `#F5F0E8` — card/section backgrounds
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Muted text:** `stone` → `#6B5E54` — secondary/body text
- **Accent (gold):** `gold` → `#B8860B` — CTAs, highlights, hover states
- **Accent hover:** `gold-dark` → `#8B6508` — button hover
- **Accent light:** `gold-light` → `#D4A843` — subtle gold tints
- **Border:** `border` → `#E8E0D6` — hairline dividers
- **Dark surface:** `espresso` → `#2C2420` — dark sections (footer, newsletter)

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Normal case or uppercase depending on context

### Scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl font-light`
- Section title: `text-3xl md:text-4xl font-light`
- Product name: `text-sm uppercase tracking-[0.15em]`
- Body: `text-base` (16px)
- Small/caption: `text-sm` (14px)

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Cards: `p-0` (image bleeds) or `p-6` for text areas
- Grid gaps: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border-b border-border` (1px, warm gray)
- No heavy borders or box shadows on cards
- Cards: no border, rely on background contrast or very subtle shadow

## Buttons
- Primary: `bg-gold text-white hover:bg-gold-dark` — solid accent
- Secondary/outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Pill shape for variant selectors: `rounded-full px-4 py-2`
- Transitions: `transition-all duration-300`

## Shadows
- Minimal: `shadow-sm` only where needed (cart drawer, dropdowns)
- Cards: no shadow, use background contrast

## Hover & Animations
- Image zoom on hover: `hover:scale-105 transition-transform duration-500`
- Opacity reveals: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`
- Smooth scroll behavior

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm, golden tone throughout
- Use thin hairline dividers sparingly

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded corners on cards (use `rounded-none` or very subtle `rounded-sm`)
- No busy patterns or gradients
- No discount/sale-style badges or loud CTAs
- No dark mode (this is a warm, light brand)
