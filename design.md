# Velmora Fine Jewelry — Visual Design System

## Mood & Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal**: `#1a1a1a` — Primary text, headings, footer background
- **Warm Black**: `#0d0d0d` — Hero overlays, premium sections
- **Rich Gold**: `#c9a96e` — Accent color, CTAs, hover states, price tags
- **Muted Gold**: `#b8943e` — Secondary accent, subtle highlights

### Neutral Colors
- **Warm White**: `#faf8f5` — Page background (warm, not sterile)
- **Soft Cream**: `#f5f0e8` — Alternate section backgrounds
- **Light Gray**: `#e8e4df` — Borders, dividers
- **Medium Gray**: `#9a9590` — Secondary text, placeholders
- **Dark Gray**: `#4a4540` — Body text

### Semantic Colors
- **Success**: `#2d5a3d` — Subtle green for success states
- **Error**: `#8b3a3a` — Subtle red for error states

## Typography

### Headings & Product Names
- **Font**: Cormorant Garamond (serif)
- **Weights**: 300 (light) for large headlines, 400 (regular) for headings, 600 (semibold) for product names
- **Product names**: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`)
- **Sizes**:
  - H1: `text-5xl md:text-7xl` (hero headline)
  - H2: `text-4xl md:text-5xl` (section headings)
  - H3: `text-2xl md:text-3xl` (product names)
  - Product name: `text-lg tracking-[0.2em]` (uppercase)

### Body & UI Text
- **Font**: Inter (sans-serif)
- **Weights**: 300 (light) for elegant body text, 400 (regular) for UI, 500 (medium) for buttons
- **Sizes**:
  - Body: `text-base` (16px)
  - Small: `text-sm` (14px)
  - Caption: `text-xs` (12px)
  - Button: `text-sm tracking-wide`

## Spacing & Layout
- **Generous whitespace**: Minimum gap of `gap-8` (2rem) between sections
- **Section padding**: `py-20 md:py-32` (5rem mobile, 8rem desktop)
- **Container**: Max-width `max-w-7xl` (1280px), centered with `px-6 md:px-8`
- **Grid gaps**: `gap-6 md:gap-8` (1.5rem mobile, 2rem desktop)

## Component Styles

### Buttons
- **Primary**: Solid gold background (`bg-[#c9a96e]`), dark text (`text-[#0d0d0d]`), hover darkens gold
- **Secondary**: Transparent with gold border (`border-[#c9a96e] text-[#c9a96e]`), hover fills gold
- **Tertiary**: Text-only with gold underline on hover
- **Border radius**: `rounded-none` (sharp corners for luxury feel) or `rounded-sm` (subtle)
- **Padding**: `px-8 py-3` (generous, premium feel)
- **Transitions**: `transition-all duration-300`

### Cards
- **Product cards**: No border, subtle shadow on hover (`hover:shadow-lg`)
- **Image aspect ratio**: 4:5 (portrait) for product images
- **Background**: `bg-white` or `bg-[#faf8f5]`
- **Hover**: Reveal second image, show "Add to Cart" button with smooth transition

### Dividers
- **Hairline**: `border-t border-[#e8e4df]` (very subtle)
- **Accent**: `border-t border-[#c9a96e]` (gold accent divider)

### Inputs & Forms
- **Border**: `border-[#e8e4df]` with `focus:border-[#c9a96e]`
- **Background**: `bg-transparent` or `bg-white`
- **Padding**: `px-4 py-3`
- **Font**: Inter, `text-sm`

## Imagery Guidelines
- **Product images**: Warm, editorial lighting. Gold jewelry on dark/neutral backgrounds
- **Lifestyle images**: Soft, natural lighting. Editorial aesthetic
- **Aspect ratios**:
  - Hero: 16:9 or full-bleed
  - Product grid: 4:5 (portrait)
  - UGC/reels: 9:16 (vertical)
  - Category tiles: 1:1 (square)
- **Overlays**: Gradient from transparent to `#0d0d0d` at bottom for text readability

## Animation & Transitions
- **Duration**: `duration-300` (300ms) for most transitions
- **Easing**: `ease-in-out` for smooth, premium feel
- **Hover effects**: Subtle scale (`hover:scale-[1.02]`), never dramatic
- **Fade in**: `opacity-0` to `opacity-100` with `transition-opacity`
- **Slide**: Cart drawer slides from right with `transform translate-x`

## Responsive Breakpoints
- **Mobile-first**: Base styles for mobile (< 768px)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (wide desktop)

## Do's and Don'ts

### Do's
✅ Use generous whitespace
✅ Keep typography elegant and readable
✅ Use gold accents sparingly but confidently
✅ Maintain high contrast for readability
✅ Use subtle animations and transitions
✅ Keep product names in UPPERCASE with wide spacing

### Don'ts
❌ Don't use bright, saturated colors
❌ Don't use rounded corners excessively (keep it sharp/modern)
❌ Don't clutter the interface
❌ Don't use stock-photo-looking images
❌ Don't make buttons too small (accessibility)
❌ Don't use all-caps for body text (only product names)

## Google Fonts Embed
Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## Tailwind CSS Classes (Examples)
- **Gold accent**: `text-[#c9a96e]` / `bg-[#c9a96e]`
- **Dark text**: `text-[#1a1a1a]`
- **Body text**: `text-[#4a4540]`
- **Background**: `bg-[#faf8f5]`
- **Serif font**: `font-['Cormorant_Garamond']`
- **Sans-serif**: `font-['Inter']`
- **Uppercase tracking**: `uppercase tracking-[0.2em]`
