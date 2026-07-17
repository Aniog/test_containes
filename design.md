# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
- **Quiet luxury, warm, editorial**
- Premium demi-fine jewelry aesthetic
- NOT loud, NOT discount-looking, NOT generic e-commerce

### Color Palette
Primary palette chosen to complement gold jewelry:

```css
/* Primary Colors */
--color-cream: #FAF7F2;          /* Main background - warm cream */
--color-ivory: #F5F0E8;          /* Secondary background */
--color-charcoal: #1A1A1A;       /* Primary text - soft black */
--color-warm-gray: #6B6560;      /* Secondary text */
--color-gold: #C9A962;           /* Accent gold */
--color-gold-light: #E5D4B3;     /* Light gold accent */
--color-gold-dark: #A68B4B;      /* Dark gold for hover */

/* Neutrals */
--color-white: #FFFFFF;
--color-off-white: #FEFEFE;
--color-border: #E8E4DE;         /* Subtle borders */
--color-border-light: #F0ECE6;   /* Light borders */
```

### Typography
- **Headings & Product Names**: Cormorant Garamond (serif)
  - Elegant, editorial feel
  - Product names in UPPERCASE with wide letter-spacing (0.15em)
- **Body & UI**: Inter (sans-serif)
  - Clean, readable, modern
  - Used for navigation, buttons, descriptions

```css
/* Font Sizes */
--font-heading-1: 3.5rem;    /* Hero headlines */
--font-heading-2: 2.5rem;    /* Section titles */
--font-heading-3: 1.75rem;   /* Subsection titles */
--font-heading-4: 1.25rem;   /* Product names */
--font-body: 1rem;           /* Body text */
--font-small: 0.875rem;      /* Captions, small text */
--font-tiny: 0.75rem;        /* Labels, badges */
```

### Spacing System
- Generous whitespace throughout
- Section padding: 80px-120px desktop, 40px-60px mobile
- Component spacing: 24px-32px
- Grid gaps: 24px

### Visual Elements
- **Hairline dividers**: 1px solid border in --color-border
- **Soft shadows**: Subtle, diffused shadows for cards
- **Hover transitions**: 300ms ease-out
- **Buttons**: 
  - Primary: Solid gold background, white text
  - Secondary: Outlined with gold border

## Component Guidelines

### Navigation
- Transparent over hero, solid on scroll
- Logo left (serif), center links, right icons (search, cart)
- Mobile: hamburger menu

### Product Cards
- Clean white background
- Image with hover reveal second image
- Quick "Add to Cart" on hover
- Product name uppercase, wide spacing
- Price below name

### Buttons
- Primary: Gold background (#C9A962), white text, rounded-sm
- Secondary: Transparent with gold border
- Hover: Darken gold, subtle scale

### Forms
- Clean input fields with subtle borders
- Focus state: gold border
- Newsletter: accent block with email input + button

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Animations
- Fade-in on scroll for sections
- Smooth hover transitions (300ms)
- Image zoom on hover (subtle)
- Cart drawer slide-in from right