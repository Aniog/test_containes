# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry aesthetic — sophisticated, not loud, not discount-looking.

### Color Palette

**Primary Colors:**
- `--velmora-ivory`: #FAF8F5 (main background, warm off-white)
- `--velmora-cream`: #F5F1EB (secondary backgrounds, cards)
- `--velmora-taupe`: #8B7355 (secondary text, accents)
- `--velmora-charcoal`: #2C2824 (primary text, dark backgrounds)
- `--velmora-gold`: #C9A961 (primary accent, CTAs, highlights)
- `--velmora-gold-light`: #D4BA7A (hover states, subtle accents)
- `--velmora-gold-dark`: #A68B3D (active states, borders)

**Neutral Scale:**
- `--velmora-white`: #FFFFFF (cards, overlays)
- `--velmora-gray-100`: #F8F6F3 (dividers, subtle backgrounds)
- `--velmora-gray-200`: #E8E4DF (borders, disabled states)
- `--velmora-gray-400`: #A39E98 (placeholder text)
- `--velmora-gray-600`: #6B6560 (secondary text)

### Typography

**Headings & Product Names:**
- Font Family: `Cormorant Garamond` (Google Fonts)
- Weights: 400 (regular), 500 (medium), 600 (semi-bold)
- Product names: UPPERCASE with `letter-spacing: 0.2em`
- Line height: 1.2

**Body & UI:**
- Font Family: `Inter` (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold)
- Line height: 1.6

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Borders & Dividers
- Hairline dividers: 1px solid `--velmora-gray-200`
- Border radius: 0 (minimal), 4px (buttons), 8px (cards)

### Shadows
- Subtle: `0 2px 8px rgba(44, 40, 36, 0.06)`
- Medium: `0 4px 20px rgba(44, 40, 36, 0.08)`
- Elevated: `0 8px 40px rgba(44, 40, 36, 0.12)`

### Animations
- Default transition: `all 0.3s ease`
- Hover transitions: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- Page transitions: `fade 0.5s ease-out`

## Component Guidelines

### Buttons
- **Primary (CTA)**: Gold background (`--velmora-gold`), charcoal text, uppercase with wide letter-spacing
- **Secondary**: Transparent with gold border, gold text
- **Hover**: Slight scale (1.02), shadow elevation
- **States**: Disabled at 50% opacity

### Cards
- White or cream background
- Subtle shadow on hover
- No heavy borders

### Navigation
- Transparent on hero (white text overlay)
- Solid ivory background on scroll
- Thin hairline bottom border when solid

### Form Elements
- Clean, minimal inputs
- Focus state with gold outline
- Error states with taupe color

## Accessibility
- Minimum contrast ratio: 4.5:1
- Focus states on all interactive elements
- Semantic HTML throughout

## Image Guidelines
- Warm-toned product photography
- Neutral/dark backgrounds for product shots
- Editorial lifestyle imagery for hero sections
- Aspect ratios: 1:1 (products), 4:5 (lifestyle), 16:9 (hero)
