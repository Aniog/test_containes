# Design Guide - Velmora Fine Jewelry

## Visual Identity
**Mood**: Quiet luxury, warm, editorial, premium demi-fine jewelry.
**Color Palette**:
- **Background**: White/Soft Cream (#FFFFFF / #F9F7F5) - `bg-background`
- **Foreground**: Deep Charcoal (#1A1A1A) - `text-foreground`
- **Primary/Accent**: Warm Gold/Bronze (#8B7355) - `text-accent`, `bg-accent`
- **Muted**: Soft Grey/Taupe (#F0EDE9) - `bg-muted`
- **Border**: Noble Grey (#E5E1DD) - `border-border`

## Typography
- **Headings**: Cormorant Garamond (Serif)
  - Style: Elegant, high contrast.
  - Tailwind: `font-serif`
- **Body & UI**: Inter (Sans-serif)
  - Style: Clean, readable.
  - Tailwind: `font-sans`
- **Product Names**: Uppercase, wide letter-spacing.
  - Tailwind: `uppercase tracking-[0.2em] font-serif`

## UI Components
- **Buttons**:
  - Primary: Solid Charcoal background with White text. Sharp corners (minimal radius).
  - Secondary: Outlined Charcoal or Accent gold.
  - Hover: Subtle opacity change or slight scale.
- **Cards**:
  - Image-focused, minimal padding.
  - Thin hairline dividers.
- **Divisions**:
  - Hairline borders: `border-[0.5px] border-border`
  - Generous whitespace between sections.

## Imagery
- High-resolution, warm-lit editorial photography.
- Close-ups of jewelry on skin.
- Minimalist backgrounds.

## Do's and Don'ts
### Do:
- Use generous whitespace.
- Keep animations subtle and slow (500ms+).
- Use serif for storytelling and branding.
- Limit the use of bold weights.

### Don't:
- Use bright, neon, or high-saturation colors.
- Use rounded corners (> 2px).
- Use loud shadows.
- Overcrowd the mobile view.
