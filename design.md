# Velmora Fine Jewelry - Design System

## Typography
- **Headings & Product Names:** 'Cormorant Garamond', serif
- **Body & UI Elements:** 'Inter', sans-serif

## Color Palette
An elegant, quiet luxury theme.
- **Background / Base:** `#FDFBF8` (Very soft warm off-white, like cream/linen)
- **Surface / Card Backgrounds:** `#F5F2ED` (Slightly darker warm neutral for contrast, like light alabaster)
- **Text Primary:** `#2A2826` (Deep charcoal, almost black but softer)
- **Text Secondary / Muted:** `#736B63` (Warm grey-taupe)
- **Accent / Branding:** `#BCA173` (Soft, muted gold/champagne - used for primary buttons, thin dividers, highlights)
- **Accent Hover:** `#9E865E` (Darker muted gold for hover states)
- **Borders / Dividers:** `#E8E2D9` (Very light warm grey)

## Visual Style
- **Spacing:** Generous whitespace, airy feel
- **Borders:** Thin hairline dividers
- **Shadows:** Very soft, large radius shadows (e.g., `box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05)`)
- **Corners:** Slight rounding (e.g., `rounded-sm` or `rounded-md`, avoiding pill shapes unless specific accents)
- **Transitions:** Smooth, subtle hover effects
- **Images:** Large editorial imagery. Product images should have a subtle background if not full-bleed.

## Tailwind Configuration Notes
- Extend `colors` with specific variables for `velmora-base`, `velmora-accent`, etc.
- Add `fontFamily` overrides for `serif` and `sans`.
