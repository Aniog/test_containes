# Velmora Fine Jewelry - Design System

## Brand Identity
- Mood: quiet luxury, warm, editorial
- Target: women 25–45, premium-but-accessible ($30–$120)
- Style: demi-fine gold jewelry, NOT loud, NOT discount-looking

## Color Palette

### Primary Colors
- **Cream (Background)**: `cream-50: #FEFCF9`, `cream-100: #FDF8F0`, `cream-200: #FAF3E8`
- **Charcoal (Text)**: `charcoal-700: #2C2821`, `charcoal-800: #1E1B16`, `charcoal-600: #3D3933`
- **Gold (Accent)**: `gold-500: #C9A055`, `gold-400: #D4AF6A`, `gold-600: #B8893E`

### Usage
- Backgrounds: cream-50 (main), cream-100 (sections), charcoal-800 (dark sections)
- Text: charcoal-700/800 (primary), charcoal-500 (secondary), charcoal-400 (muted)
- Accents: gold-500 (buttons, highlights), gold-400 (hover states)
- Borders: cream-200/300 (light), charcoal-200 (medium)

## Typography

### Font Families
- **Headings/Logo**: Cormorant Garamond (serif) - elegant, editorial
- **Body/UI**: Inter (sans-serif) - clean, readable

### Text Styles
- Logo: `font-serif text-xl md:text-2xl tracking-nav uppercase`
- Section headings: `font-serif text-3xl md:text-4xl text-charcoal-800`
- Product names: `text-[11px] tracking-product uppercase font-medium` (0.2em letter-spacing)
- Nav links: `text-xs tracking-nav uppercase font-medium` (0.15em letter-spacing)
- Body text: `text-sm text-charcoal-500 leading-relaxed`

## Spacing & Layout
- Max width: `max-w-7xl` (80rem)
- Section padding: `py-16 md:py-24`
- Card gaps: `gap-6 md:gap-8`
- Generous whitespace throughout

## Components

### Buttons
- Primary: `bg-charcoal-800 text-cream-100 py-4 text-xs tracking-nav uppercase font-semibold`
- Accent: `bg-gold-500 text-charcoal-900 px-8 py-3.5 text-xs tracking-nav uppercase font-semibold`
- Outline: `border border-charcoal-800 text-charcoal-800 px-8 py-3 text-xs tracking-nav uppercase font-medium`

### Cards
- Shadow: `shadow-soft` or `shadow-card`
- Border: `border border-cream-200`
- Hover: subtle scale on images, color transitions

### Dividers
- Thin hairline: `w-full h-px bg-cream-200`
- Gold accent: `w-12 h-px bg-gold-400`

## Shadows
- Soft: `shadow-soft` - subtle card shadows
- Card: `shadow-card` - product cards
- Elevated: `shadow-elevated` - dropdowns, modals

## Animations
- Transitions: `transition-all duration-300 ease-luxury`
- Hover: scale(1.05) on images, color shifts on text
- Entry: fadeIn, fadeInUp with delays

## Do's
- Use generous whitespace
- Keep typography hierarchy clear
- Use gold accents sparingly for impact
- Ensure high contrast for readability
- Use thin borders and subtle shadows

## Don'ts
- Don't use bright, saturated colors
- Don't use heavy shadows or borders
- Don't use lowercase product names
- Don't overcrowd layouts
- Don't use generic stock photo aesthetics
