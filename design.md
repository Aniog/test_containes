# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
- **Quiet luxury, warm, editorial**
- Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce
- Target: women 25-45, gifting and self-purchase, premium-but-accessible ($30–$120)

### Color Palette
**Primary Colors:**
- `velmora-cream` - #FAF7F2 (warm off-white background)
- `velmora-charcoal` - #1A1A1A (deep refined base text)
- `velmora-gold` - #C9A962 (warm metallic accent)
- `velmora-gold-light` - #E8DCC4 (soft gold highlight)

**Accent Colors:**
- `velmora-sage` - #8B9A7D (subtle secondary accent)
- `velmora-rose` - #C9A5A0 (warm blush for subtle accents)

**Neutral Colors:**
- `velmora-warm-gray` - #6B6560 (secondary text)
- `velmora-light-gray` - #F0EDE8 (borders, dividers)

### Typography
- **Headings & Product Names:** Cormorant Garamond (serif)
  - Font weights: 400, 500, 600
  - Product names: UPPERCASE with letter-spacing: 0.15em
  
- **Body & UI:** Inter (sans-serif)
  - Font weights: 300, 400, 500, 600
  - Clean, readable, modern

### Spacing System
- Base unit: 4px
- Section padding: 80px (desktop), 48px (mobile)
- Component gaps: 16px, 24px, 32px
- Generous whitespace throughout

### Visual Elements
- Thin hairline dividers (1px, velmora-light-gray)
- Subtle hover transitions (200-300ms ease)
- Soft shadows: 0 4px 20px rgba(26, 26, 26, 0.08)
- Large editorial imagery
- Restrained accent color usage

### Buttons
**Primary (Accent):**
- Background: velmora-charcoal
- Text: white
- Padding: 16px 32px
- Border-radius: 0 (sharp, premium feel)
- Hover: background shifts to velmora-gold

**Secondary (Outlined):**
- Border: 1px velmora-charcoal
- Background: transparent
- Text: velmora-charcoal
- Hover: background velmora-charcoal, text white

### Components
- Product cards: minimal, image-focused, hover reveals second image + quick add
- Accordions: clean, thin borders, smooth expand/collapse
- Form inputs: minimal borders, focus state with gold accent
- Badges: subtle, small, uppercase text

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Mobile-first approach (most traffic is mobile)

## Animations
- Fade-in on scroll: 400ms ease-out
- Hover transitions: 200-300ms ease
- Image hover: subtle scale (1.02) + opacity crossfade
- Button hover: background color shift
- Page transitions: smooth fade

## Do's and Don'ts
**DO:**
- Use generous whitespace
- Keep imagery large and editorial
- Use serif fonts for headings and product names
- Maintain consistent gold accent throughout
- Use thin, elegant dividers

**DON'T:**
- Use loud, bright colors
- Create cluttered layouts
- Use generic sans-serif for headings
- Add too many accent colors
- Use rounded corners on buttons (keep sharp/premium)