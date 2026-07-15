# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal (base):** `#1A1714` — Rich, warm near-black for backgrounds and text
- **Warm Cream:** `#FAF7F2` — Soft, warm off-white for light sections and cards
- **Antique White:** `#F5F0E8` — Slightly deeper cream for alternating sections

### Accent Colors
- **Champagne Gold:** `#C9A96E` — Primary accent, warm metallic gold for CTAs, highlights, borders
- **Deep Gold:** `#A8853A` — Darker gold for hover states and emphasis
- **Light Gold:** `#E8D5A8` — Soft gold for subtle backgrounds and dividers

### Neutral Colors
- **Warm Gray 700:** `#3D3832` — Secondary text on light backgrounds
- **Warm Gray 500:** `#6B635A` — Muted text, captions
- **Warm Gray 300:** `#B5AFA7` — Disabled states, subtle borders
- **Warm Gray 100:** `#E8E3DC` — Light borders, dividers

### Semantic Colors
- **Success:** `#5A7A5A` — Muted sage green
- **Error:** `#8B4C4C` — Muted warm red

## Typography

### Headings & Product Names
- **Font:** Cormorant Garamond (Google Fonts)
- **Weight:** 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Style:** Product names in UPPERCASE with wide letter-spacing (tracking-[0.2em])
- **Sizes:** 
  - H1: text-5xl md:text-6xl lg:text-7xl
  - H2: text-3xl md:text-4xl
  - H3: text-2xl md:text-3xl
  - Product name: text-lg md:text-xl

### Body & UI
- **Font:** Inter (Google Fonts)
- **Weight:** 300 (Light), 400 (Regular), 500 (Medium)
- **Sizes:**
  - Body: text-sm md:text-base
  - Small: text-xs md:text-sm
  - Button: text-sm tracking-widest uppercase

## Spacing & Layout
- Generous whitespace throughout
- Section padding: py-20 md:py-28 lg:py-32
- Container max-width: max-w-7xl
- Grid gaps: gap-6 md:gap-8
- Hairline dividers: h-px bg-warm-gray-100

## Component Styles

### Buttons
- **Primary (Accent):** bg-champagne-gold text-deep-charcoal, hover:bg-deep-gold, tracking-widest uppercase, px-8 py-3, transition-all duration-300
- **Secondary (Outlined):** border border-champagne-gold text-champagne-gold, hover:bg-champagne-gold hover:text-deep-charcoal
- **Ghost:** text-warm-gray-500 hover:text-champagne-gold

### Cards
- Product cards: bg-warm-cream, subtle shadow on hover, rounded-none (sharp corners for editorial feel)
- Hover: second image fade-in, slight scale on image

### Navigation
- Transparent over hero, solid bg on scroll (bg-deep-charcoal/95 backdrop-blur)
- Hairline bottom border on scroll

### Inputs
- Clean, minimal. Border-bottom style or thin border. Focus: champagne-gold accent.

## Do's
- Use generous whitespace between sections
- Use serif font for all headings and product names
- Use uppercase + wide tracking for product names and CTAs
- Use warm, muted tones throughout
- Use subtle transitions (duration-300, ease-in-out)
- Use hairline dividers between sections

## Don'ts
- Don't use bright or saturated colors
- Don't use rounded corners on cards (keep editorial/sharp)
- Don't use heavy shadows
- Don't use generic e-commerce patterns (badges, countdown timers, etc.)
- Don't use more than 2 fonts
- Don't use thin/light text on dark backgrounds without sufficient contrast
