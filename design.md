# VELMORA Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Audience**: Women 25–45, gifting and self-purchase, premium-but-accessible price point ($30–$120).

## Color Palette

### Primary (Gold Metallic)
- `gold-50`: #FFF9E6 (lightest tint)
- `gold-100`: #FFF0BF
- `gold-200`: #FFE699
- `gold-300`: #FFD966
- `gold-400`: #FFCC33
- `gold-500`: #D4A017 (primary gold)
- `gold-600`: #B8860B (darker gold for buttons)
- `gold-700`: #8B6914
- `gold-800`: #5C4400
- `gold-900`: #3D2B00

### Neutral (Warm Charcoal)
- `charcoal-50`: #FAF9F7 (lightest background)
- `charcoal-100`: #F5F3F0
- `charcoal-200`: #E8E4DE
- `charcoal-300`: #D4CFC7
- `charcoal-400`: #A8A198
- `charcoal-500`: #7D766D
- `charcoal-600`: #5C564F
- `charcoal-700`: #3D3832
- `charcoal-800`: #2A2521
- `charcoal-900`: #1A1714
- `charcoal-950`: #0D0B0A

### Brand Accent
- `brand-50`: #FAF9F7 (background)
- `brand-100`: #F5F3F0
- `brand-200`: #E8E4DE
- `brand-300`: #D4CFC7
- `brand-400`: #A8A198

## Typography

### Headings (Serif)
- Font: Cormorant Garamond
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Usage: `heading-serif` class
- Product names: UPPERCASE with `tracking-ultra-wide` (0.25em)
- Headline size: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`

### Body (Sans-serif)
- Font: Inter
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Usage: default body text
- Size: `text-sm` (14px) for UI, `text-base` (16px) for body copy

### Tracking Classes
- `tracking-mega-wide`: 0.35em
- `tracking-ultra-wide`: 0.25em
- `tracking-wide`: 0.1em

## Spacing
- Generous whitespace throughout
- Section padding: `py-16 sm:py-20 lg:py-24`
- Card padding: `p-4 sm:p-6`
- Grid gaps: `gap-4 sm:gap-6`

## Borders & Dividers
- Thin hairline dividers: `border-brand-200/40`
- Subtle card borders: `border border-brand-200/30`
- Accent borders: `border-gold-600`

## Shadows
- Soft card shadow: `shadow-sm`
- Hover elevation: `hover:shadow-md`
- No harsh shadows — keep it soft and editorial

## Buttons

### Primary (Accent)
```jsx
className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-600 text-white text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-gold-700 transition-colors duration-300"
```

### Secondary (Outlined)
```jsx
className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-300 text-brand-100 text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-brand-50/10 transition-colors duration-300"
```

## Animations
- Fade-in on load: `animate-fade-in`
- Hover transitions: `transition-all duration-300`
- Smooth transforms: `transform hover:scale-[1.02]`
- Image hover: soft zoom on product cards

## Do's
- Use generous whitespace
- Use warm gold tones
- Keep text readable (high contrast)
- Use editorial-style imagery
- Maintain consistent spacing

## Don'ts
- Don't use harsh colors or neon
- Don't use heavy shadows or borders
- Don't use discount-looking badges (except subtle "SALE")
- Don't overcrowd layouts
- Don't use inconsistent font sizes
