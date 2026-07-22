# Velmora Fine Jewelry — Design Standards

## Brand Essence
Quiet luxury meets editorial elegance. Warm, premium, and refined — never loud or discount-looking.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background-primary` | #0A0A09 | Main page background |
| `background-secondary` | #1A1A18 | Cards, elevated surfaces |
| `background-elevated` | #2A2825 | Modals, dropdowns |
| `text-primary` | #F7F5F0 | Headlines, body text |
| `text-secondary` | #A8A49C | Muted text, captions |
| `text-tertiary` | #6B6860 | Disabled, placeholders |
| `accent-gold` | #C9A962 | Primary accent, CTAs |
| `accent-gold-hover` | #D4B876 | Hover states |
| `accent-gold-muted` | #8B7A4C | Subtle accents |
| `border-subtle` | #3D3A33 | Hairline dividers |
| `border-visible` | #4A4640 | Visible borders |
| `success` | #7A8B6F | Success states |
| `error` | #A66B6B | Error states |

## Typography

### Font Families
- **Headlines**: Cormorant Garamond (serif) — elegant, editorial
- **Body/UI**: Inter (sans-serif) — clean, readable

### Scale
```css
--text-xs: 12px;
--text-sm: 13px;
--text-base: 15px;
--text-lg: 18px;
--text-xl: 22px;
--text-2xl: 28px;
--text-3xl: 36px;
--text-4xl: 48px;
--text-5xl: 64px;
```

### Product Names
- Transform: UPPERCASE
- Letter-spacing: 0.12em
- Font-weight: 500

## Spacing

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

## Components

### Buttons

**Primary**
- Background: accent-gold (#C9A962)
- Text: background-primary (#0A0A09)
- Hover: accent-gold-hover + subtle lift shadow
- Disabled: 50% opacity

**Secondary**
- Background: transparent
- Border: 1px accent-gold
- Text: accent-gold
- Hover: background fills with accent-gold

**Ghost**
- Background: transparent
- Text: text-primary
- Hover: text-accent-gold

### Cards
- Background: background-secondary
- Border: 1px border-subtle
- Border-radius: 2px (subtle, not rounded)
- Shadow: subtle, warm-tinted

### Inputs
- Background: background-elevated
- Border: 1px border-subtle
- Focus: 2px ring accent-gold
- Text: text-primary
- Placeholder: text-tertiary

### Badges
- Font: Inter, uppercase, 10px, letter-spacing 0.1em
- Padding: 4px 8px
- Border-radius: 2px

## Motion

### Timing
- Fast: 0.15s (micro-interactions)
- Normal: 0.3s (hover states)
- Slow: 0.5s (page elements)

### Easing
- Default: cubic-bezier(0.4, 0, 0.2, 1)
- Enter: cubic-bezier(0, 0, 0.2, 1)
- Exit: cubic-bezier(0.4, 0, 1, 1)

### Patterns
- Entrance: fade-up (translateY 20px → 0, opacity 0 → 1)
- Hover: scale 1.02, subtle shadow lift
- Image hover: scale 1.05 over 0.5s

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
--shadow-gold: 0 0 20px rgba(201, 169, 98, 0.15);
```

## Do's and Don'ts

### Do
- Use generous whitespace
- Let photography breathe
- Maintain consistent gold accents
- Use serif for editorial moments
- Add subtle hover animations

### Don't
- Use bright/neon colors
- Add heavy drop shadows
- Overcrowd layouts
- Use more than 2 typefaces
- Add decorative patterns or busy backgrounds
