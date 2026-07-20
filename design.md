# VELMORA Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry.
- **Audience**: Women 25–45, gifting and self-purchase.
- **Price Point**: $30–$120 (premium-but-accessible).

## Color Palette

### Primary Colors
- **Charcoal 900** `#1A1A1A` — Primary text, dark backgrounds, buttons
- **Cream 50** `#FEFCF9` — Page background, light surfaces
- **Gold 400** `#C9A84E` — Primary accent, CTA buttons, highlights
- **Gold 500** `#B8943A` — Hover state for gold accents

### Secondary Colors
- **Charcoal 100** `#E7E7E7` — Borders, dividers, subtle backgrounds
- **Cream 100** `#FDF8F0` — Alternate section backgrounds
- **Rose 500** `#DC6B50` — Sale badges, urgency accents
- **Charcoal 400** `#888888` — Secondary text, placeholder text

### Usage Rules
- Never use low-contrast text combinations
- Gold is reserved for accents, buttons, and decorative elements
- Charcoal 900 on Cream 50 is the primary text/background pair
- All text must have a minimum 4.5:1 contrast ratio

## Typography

### Font Families
- **Serif**: Cormorant Garamond — Headings, product names, hero text
- **Sans**: Inter — Body text, UI elements, buttons, form inputs

### Heading Styles
- `h1`: font-serif, 3xl–8xl, font-light or font-medium
- `h2`: font-serif, 3xl–5xl, font-medium
- `h3`: font-serif, xl–2xl, font-medium

### Special Text
- **Product Names**: font-serif, uppercase, tracking-ultra-wide (0.25em)
- **Section Subtitles**: font-sans, text-xs, tracking-mega-wide (0.35em), uppercase, gold-500
- **Button Text**: font-sans, text-sm, tracking-ultra-wide, uppercase, font-medium

### Body Text
- Base: font-sans, text-sm (14px) or text-base (16px)
- Small: font-sans, text-xs (12px)
- Leading: relaxed (1.625) for body, tight (1.2) for headings

## Spacing

### Section Padding
- Horizontal: `px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24`
- Vertical: `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto`

### Component Spacing
- Between cards: `gap-4 md:gap-6 lg:gap-8`
- Within cards: `mb-4` for images, `space-y-1.5` for text
- Section headers: `mb-12 md:mb-16`

## Components

### Buttons
- **Primary** (`btn-primary`): Charcoal 900 bg, cream text, gold hover
- **Outline** (`btn-outline`): Charcoal 900 border, charcoal text, charcoal bg hover
- **Gold** (`btn-gold`): Gold 400 bg, charcoal text, Gold 500 hover
- All buttons: uppercase, tracking-ultra-wide, text-sm, py-3.5, px-8

### Cards (Product)
- Aspect ratio: 3:4 for images
- Hover: second image reveals, quick-add bar slides up
- No visible border, subtle shadow on hover
- Font: product-name class (serif, uppercase, ultra-wide tracking)

### Dividers
- `hairline` class: 1px, charcoal-100 color
- Gold accent dividers: `w-16 h-px bg-gold-400 mx-auto`

### Shadows
- Subtle: `shadow-sm` for elevated elements
- Card hover: `shadow-lg` transition

## Animations
- `fade-in`: 0.6s ease-out opacity
- `slide-up`: 0.5s ease-out, translateY 20px
- Hover transitions: 300–500ms duration
- Image hover: scale 1.05 with 700ms duration

## Responsive Breakpoints
- Mobile-first design
- `sm`: 640px — Small tablets
- `md`: 768px — Tablets, small desktop
- `lg`: 1024px — Desktop
- `xl`: 1280px — Large desktop
- `2xl`: 1536px — Extra large

## Don'ts
- No bright/neon colors
- No heavy shadows or 3D effects
- No comic sans or decorative fonts for body text
- No aggressive hover animations
- No discount-looking badges (except subtle sale badge)
- No cluttered layouts — always maintain generous whitespace
