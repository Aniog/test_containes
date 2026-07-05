# Design System - Velmora Fine Jewelry

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial.
- **Palette**:
  - `primary`: #1A1A1A (Deep charcoal/black)
  - `secondary`: #FBF9F6 (Creamy off-white/bone)
  - `accent`: #C4A484 (Warm gold/metallic accent)
  - `muted`: #717171 (Refined gray)
  - `border`: #E5E5E5 (Soft hairline dividers)
- **Typography**:
  - Headings: `Cormorant Garamond`, serif (Elegant, editorial)
  - Body: `Inter`, sans-serif (Clean, legible)
  - Product Names: `Cormorant Garamond`, uppercase with wide letter-spacing (`tracking-[0.2em]`)

## Tailwind Configurations
- Use `font-serif` for Cormorant Garamond.
- Use `font-sans` for Inter.
- Spacing: Generous whitespace, `py-10` to `py-20` for sections.
- Borders: `border-hairline` (0.5px or default border with opacity).

## Components
- **Buttons**:
  - Primary: Solid background, serif font, uppercase, tracking-widest.
  - Secondary: Outlined, thin border, serif font.
- **Cards**: Minimalist, soft hover transition (slight scale or image swap).
- **Navigation**: Transparent backdrop-blur over hero, transitions to solid on scroll.
