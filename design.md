# Velmora Fine Jewelry - Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial, premium.
- **Palette**:
  - `primary`: #1A1A1A (Quiet Luxury Black/Charcoal)
  - `accent`: #C5A059 (Warm Gold - for CTA and highlights)
  - `accent-muted`: #E5D5B7 (Soft Gold/Champagne)
  - `background`: #FDFCFB (Warm Editorial White)
  - `muted`: #F5F5F3 (Soft Stone/Grey)
- **Typography**:
  - **Headings**: Cormorant Garamond (Serif). Elegant, sophisticated.
  - **Body/UI**: Inter / Manrope (Sans-serif). Clean, readable.
  - **Product Names**: uppercase with wide letter-spacing (`tracking-[0.15em]`).

## Components
- **Buttons**:
  - `solid`: bg-accent text-accent-foreground hover:bg-accent/90 transition-all font-sans uppercase tracking-widest text-sm py-4 px-8.
  - `outline`: border border-black/10 hover:border-black/30 transition-all font-sans uppercase tracking-widest text-sm py-4 px-8.
- **Dividers**: Thin `hairline-divider` (border-black/5).
- **Whitespace**: Generous sections, large margins.
- **Imagery**: Large editorial imagery, soft lighting.

## Implementation Details
- Sticky navigation: Transparent to solid background scroll effect.
- Horizontal Reels: UGC-style 9:16 aspect ratio cards.
- Mobile First: Optimized for small screens and swipe gestures.
