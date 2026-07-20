# Velmora Fine Jewelry Design Guide

## Typography
- **Headings & Product Names:** Cormorant Garamond (Serif), Uppercase for product names with wide letter-spacing tracking-wider.
- **Body & UI:** Inter or Manrope (Sans-serif).

## Colors
- **Base / Background:** #ffffff (White), #faf9f8 (Warm Off-White/Pearl).
- **Text / Primary:** #2c2826 (Deep Espresso / Charcoal).
- **Accent:** #c19a6b (Warm Gold / Muted Brass) for buttons and key interactions.
- **Borders/Dividers:** Hairline thin borders in '#e5e0db'.

## Visual Style
- **Mood:** Quiet luxury, warm, editorial, premium-but-accessible.
- **Layout:** Generous whitespace, large editorial imagery.
- **Components:** Thin hairline dividers, restrained accent color, subtle hover transitions (opacity changes, slight color shifts), soft shadows.
- **Buttons:** Premium feel, solid or outlined accent colors.

## Tailwind Configuration (Add to index.css / classes)
Use standard tailwind classes supplemented with custom colors in index.css if necessary, but prefer sticking to utility classes where possible.

*Font Families:* 
- `font-serif`: 'Cormorant Garamond', serif
- `font-sans`: 'Inter', sans-serif

*Custom Colors (in index.css variables):*
- `--background`: 40 20% 98% (Warm Off-white)
- `--foreground`: 20 7% 16% (Deep Charcoal)
- `--primary`: 20 7% 16%
- `--primary-foreground`: 40 20% 98%
- `--accent`: 33 42% 59% (Warm Gold)
- `--accent-foreground`: 40 20% 98%
- `--border`: 30 15% 88%
