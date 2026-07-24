# Velmora Fine Jewelry - Design System

## Visual Identity

### Brand Essence
- **Mood**: Quiet luxury, warm, editorial
- **Personality**: Premium demi-fine jewelry, not loud, not discount-looking, not generic
- **Target**: Women 25-45, gifting and self-purchase
- **Price Point**: $30-120 (premium but accessible)

### Color Palette

#### Primary Colors
- **Deep Charcoal** `#1a1814` — Primary text, headers
- **Warm Ivory** `#f8f6f1` — Primary background
- **Cream** `#faf8f5` — Card backgrounds, alternating sections
- **Soft Sand** `#e8e4dd` — Borders, dividers, subtle backgrounds

#### Accent Colors
- **Gold Primary** `#c9a962` — Primary accent, CTAs, highlights
- **Gold Dark** `#a68a4a` — Hover states, secondary accents
- **Gold Light** `#dfc88a` — Subtle gold tints

#### Neutral Scale
- **Charcoal Light** `#3d3830` — Secondary text
- **Warm Gray** `#8a8478` — Muted text, captions
- **Stone** `#b5afa4` — Placeholder text, disabled states

#### Functional Colors
- **Success** `#4a7c59` — Success states
- **Error** `#9c4a4a` — Error states
- **White** `#ffffff` — Overlay backgrounds

### Typography

#### Font Families
- **Headings**: Cormorant Garamond (serif) — elegant, editorial, premium
- **Body/UI**: Inter (sans-serif) — clean, modern, highly legible
- **Fallbacks**: Georgia, serif / system-ui, sans-serif

#### Type Scale
```
Display:    Cormorant Garamond, 56px, 400 weight, -0.02em tracking
H1:         Cormorant Garamond, 48px, 400 weight, -0.01em tracking
H2:         Cormorant Garamond, 36px, 400 weight, 0 tracking
H3:         Cormorant Garamond, 28px, 500 weight, 0 tracking
H4:         Inter, 20px, 500 weight, 0 tracking
Body Large: Inter, 18px, 400 weight, 0 tracking
Body:       Inter, 16px, 400 weight, 0 tracking
Body Small: Inter, 14px, 400 weight, 0.01em tracking
Caption:    Inter, 12px, 400 weight, 0.02em tracking
Overline:   Inter, 11px, 500 weight, 0.15em tracking, UPPERCASE
```

#### Product Names
- Font: Cormorant Garamond
- Transform: UPPERCASE
- Letter-spacing: 0.15em
- Weight: 500

### Spacing System
```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
2xl:  48px
3xl:  64px
4xl:  96px
5xl:  128px
```

### Border Radius
```
none: 0px
sm:   2px
md:   4px
lg:   8px
full: 9999px (pills, avatars)
```

### Shadows
```
sm:   0 1px 2px rgba(26, 24, 20, 0.05)
md:   0 4px 12px rgba(26, 24, 20, 0.08)
lg:   0 8px 24px rgba(26, 24, 20, 0.12)
xl:   0 16px 48px rgba(26, 24, 20, 0.16)
```

### Motion Philosophy
- **Principle**: Subtle, refined, never distracting
- **Duration**: 200ms for micro-interactions, 400ms for reveals
- **Easing**: ease-out for entrances, ease-in-out for transforms
- **Hover**: Scale 1.02 max, opacity shifts, shadow elevation

### Components

#### Buttons
**Primary (Gold)**
- Background: `#c9a962`
- Text: `#1a1814`
- Padding: 16px 32px
- Border-radius: 2px
- Hover: `#a68a4a` background
- Font: Inter, 13px, 500 weight, 0.1em tracking, UPPERCASE

**Secondary (Outlined)**
- Background: transparent
- Border: 1px solid `#c9a962`
- Text: `#c9a962`
- Padding: 16px 32px
- Border-radius: 2px
- Hover: `#c9a962` background with `#1a1814` text

**Ghost**
- Background: transparent
- Text: `#1a1814`
- Hover: Underline or subtle background

#### Cards
- Background: `#faf8f5`
- Border: 1px solid `#e8e4dd`
- Border-radius: 4px
- Padding: 24px
- Shadow: none (flat design for premium feel)
- Hover: Subtle shadow elevation

#### Form Inputs
- Background: `#ffffff`
- Border: 1px solid `#e8e4dd`
- Border-radius: 2px
- Padding: 14px 16px
- Focus: 2px solid `#c9a962`
- Placeholder: `#b5afa4`

#### Pills/Tags
- Background: `#f8f6f1`
- Border: 1px solid `#e8e4dd`
- Padding: 8px 16px
- Border-radius: 100px
- Selected: `#c9a962` border

### Dividers
- Style: 1px solid `#e8e4dd`
- Hairline style for elegance
- Can add decorative center element for emphasis sections

### Layout

#### Container Widths
```
full:   100%
wide:   1440px (max-width for page content)
content: 1200px (max-width for text-heavy content)
narrow: 800px (max-width for forms, narrow content)
```

#### Grid
- Desktop: 12-column, 24px gutter
- Tablet: 8-column, 20px gutter
- Mobile: 4-column, 16px gutter

### Responsive Breakpoints
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Image Guidelines
- Aspect ratios: 3:4 (portrait), 1:1 (square), 16:9 (landscape)
- Warm-toned imagery with soft lighting
- Dark or neutral backgrounds to make gold pop
- Editorial style, lifestyle-focused

### Accessibility
- Minimum contrast ratio: 4.5:1 for body text
- Focus states visible on all interactive elements
- Touch targets minimum 44px on mobile
- Alt text for all images
