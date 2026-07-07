# Velmora Fine Jewelry — Design System

## Brand Identity
- **Name**: Velmora Fine Jewelry
- **Positioning**: Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45.
- **Mood**: NOT loud, NOT discount-looking, NOT generic e-commerce. Refined, warm, editorial.

## Color Palette
- **Background**: `#FAF8F5` — warm cream/ivory, soft and luxurious
- **Background Alt**: `#F3F0EB` — slightly deeper warm tone for alternating sections
- **Text Primary**: `#1A1A1A` — near-black for headings and important text
- **Text Secondary**: `#6B6560` — warm gray for body text
- **Text Muted**: `#9B9590` — lighter gray for captions, labels, placeholders
- **Accent**: `#C4A265` — warm gold, used for CTAs, highlights, stars
- **Accent Hover**: `#B08D4F` — deeper gold for hover states
- **Border**: `#E8E4DF` — subtle warm border color
- **Border Light**: `#F0EDE8` — very light border for subtle dividers
- **White**: `#FFFFFF` — for cards, overlays, and contrast areas
- **Black**: `#000000` — for dark sections and overlays

## Typography
- **Headings / Product Names**: Cormorant Garamond (serif)
  - Hero headline: `text-4xl md:text-5xl lg:text-6xl`, `font-light`, `tracking-wide`
  - Section headings: `text-2xl md:text-3xl`, `font-normal`, `tracking-wide`
  - Product names: `text-lg md:text-xl`, `uppercase`, `tracking-[0.2em]`
  - Logo: `text-2xl`, `uppercase`, `tracking-[0.3em]`
- **Body / UI**: Inter (sans-serif)
  - Body text: `text-sm md:text-base`, `font-light` or `font-normal`
  - Small text / labels: `text-xs`, `tracking-[0.15em]`, `uppercase`
  - Button text: `text-xs`, `tracking-[0.2em]`, `uppercase`, `font-medium`

## Spacing
- Section padding: `py-16 md:py-20 lg:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Card gap: `gap-6 md:gap-8`
- Element spacing: `space-y-4` to `space-y-8`

## Components

### Buttons
- **Primary (Accent)**: `bg-[var(--velmora-accent)] text-white hover:bg-[var(--velmora-accent-hover)] px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300`
- **Secondary (Outlined)**: `border border-[var(--velmora-border)] text-[var(--velmora-text-primary)] hover:border-[var(--velmora-accent)] hover:text-[var(--velmora-accent)] px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300`
- **Full-width**: Add `w-full` to primary button

### Cards
- Product cards: `group cursor-pointer`, image with `aspect-[4/5]`, hover reveals "Add to Bag" overlay
- Border: `border border-[var(--velmora-border-light)]`
- Hover: subtle shadow or border color change

### Dividers
- Hairline: `border-t border-[var(--velmora-border-light)]`
- Section divider: `border-t border-[var(--velmora-border)]`

### Forms
- Input: `border-b border-[var(--velmora-border)] bg-transparent py-2 text-sm focus:border-[var(--velmora-accent)] outline-none transition-colors`
- Placeholder: `text-[var(--velmora-text-muted)]`

## Animations
- Hover transitions: `transition-all duration-300`
- Fade in: `fade-in` keyframe (0.6s ease-out)
- Slide up: `slide-up` keyframe (0.5s ease-out)
- Cart drawer: slide from right with `translate-x` transition

## Do's
- Use generous whitespace — let the design breathe
- Keep text hierarchy clear with serif headings and sans-serif body
- Use uppercase with wide letter-spacing for product names and labels
- Maintain warm, editorial feel throughout
- Use gold accent sparingly — only for CTAs, stars, and key highlights

## Don'ts
- No bright or neon colors
- No heavy shadows or 3D effects
- No rounded corners on cards (use sharp or very subtle rounding)
- No bold/heavy font weights for headings (keep it light and elegant)
- No cluttered layouts — always prioritize whitespace
- No discount-style badges or urgency messaging
