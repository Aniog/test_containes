# Velmora Fine Jewelry — Visual Design Specification

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette

### Primary Colors
- **Deep Charcoal** (`#1C1C1C`): Main background for hero and dark sections. Rich, warm black — not cold blue-black.
- **Warm Cream** (`#F5F0EB`): Light background for product grids, content sections. Soft, warm off-white.
- **Gold Accent** (`#C9A96E`): Primary accent — buttons, links, highlights, decorative elements. Warm muted gold, not brassy.
- **Gold Light** (`#D4B87A`): Hover state for gold accent, subtle highlights.

### Neutral Colors
- **Text Dark** (`#2D2D2D`): Primary text on light backgrounds. Warm dark gray.
- **Text Light** (`#F5F0EB`): Primary text on dark backgrounds. Same as warm cream.
- **Text Muted** (`#8A8A8A`): Secondary/muted text, captions, labels.
- **Divider** (`#E0D5CC`): Hairline dividers, borders. Warm beige-gray.
- **Surface** (`#EDE8E3`): Card backgrounds, elevated surfaces on cream.

### Semantic Colors
- **Success**: `#5A8A6E` (muted sage green)
- **Error**: `#C45C5C` (muted warm red)

## Typography

### Heading Font: Cormorant Garamond
- **Usage**: All headings, product names, hero text, section titles, logo
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Style**: Product names in UPPERCASE with wide letter-spacing (`tracking-[0.2em]`)
- **Sizes**: 
  - Hero headline: `text-5xl md:text-7xl` (Cormorant Garamond 300)
  - Section titles: `text-3xl md:text-4xl` (Cormorant Garamond 500)
  - Product names: `text-lg md:text-xl uppercase tracking-[0.2em]` (Cormorant Garamond 500)

### Body Font: Inter
- **Usage**: Body text, UI elements, buttons, navigation, prices, descriptions
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Sizes**:
  - Body: `text-sm md:text-base` (Inter 400)
  - Navigation: `text-sm tracking-wide` (Inter 500)
  - Prices: `text-base md:text-lg` (Inter 500)
  - Buttons: `text-sm tracking-[0.1em] uppercase` (Inter 500)
  - Captions/labels: `text-xs tracking-wide` (Inter 400)

## Spacing & Layout
- **Generous whitespace**: Sections padded `py-16 md:py-24`, content padded `px-6 md:px-12 lg:px-20`
- **Max content width**: `max-w-7xl` (1280px)
- **Product grid gap**: `gap-6 md:gap-8`
- **Hairline dividers**: `border-t border-divider h-px` between sections
- **Card padding**: `p-4 md:p-6`

## Component Styles

### Buttons
- **Primary (Accent)**: Solid gold background (`bg-gold text-deepCharcoal`), uppercase, wide tracking, hover lightens gold. Rounded-none or minimal rounded (`rounded-sm`). Padding: `px-8 py-3`.
- **Secondary (Outlined)**: Border gold (`border-gold text-gold`), transparent bg, hover fills gold. Same typography as primary.
- **Ghost**: Text-only, gold color, underline on hover.

### Cards
- **Product cards**: Clean, minimal. Image dominant (aspect 3:4 or 4:5). Name + price below. Hover: second image fades in, "Add to Cart" button appears.
- **Background**: `bg-surface` on cream, transparent on dark.
- **Shadow**: Subtle, warm — `shadow-[0_2px_8px_rgba(28,28,28,0.06)]`

### Navigation
- **Sticky**: Transparent over hero, solid cream/white on scroll with subtle shadow.
- **Logo**: "VELMORA" in Cormorant Garamond 500, uppercase, `tracking-[0.3em]`, `text-xl md:text-2xl`
- **Links**: Inter 500, `text-sm tracking-wide`, gold on hover
- **Icons**: Lucide icons, `w-5 h-5`, stroke-width 1.5

### Dividers
- Thin hairline: `border-t border-divider` — warm beige-gray, not cold gray
- Between all major homepage sections

### Animations
- **Hover transitions**: `transition-all duration-300 ease-out`
- **Image hover**: Second image fades in with `opacity-0 group-hover:opacity-100 transition-opacity duration-500`
- **Scroll reveal**: Subtle fade-in on scroll (optional, keep lightweight)
- **Cart drawer**: Slide in from right, `transition-transform duration-300`

## Do's
- Use generous whitespace — let content breathe
- Keep imagery large and editorial
- Use hairline dividers between sections
- Product names always uppercase with wide tracking
- Gold accent sparingly — buttons, links, key highlights only
- Warm, muted tones throughout — no cold blues or grays
- Strong contrast: dark text on light, light text on dark

## Don'ts
- No loud/discount aesthetics (no red sale tags, no bold discount banners)
- No cold blue-grays or pure whites — always warm-tinted
- No heavy shadows or thick borders
- No generic e-commerce templates feel
- No brassy/bright gold — keep it muted and refined
- No centered body text — left-aligned for readability
- No crowded layouts — maintain breathing room
