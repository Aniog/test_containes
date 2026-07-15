# Design Guidelines - Velmora Fine Jewelry

## Visual Style: Quiet Luxury / Editorial / Warm
Velmora's aesthetic is built on "quiet luxury"—sophisticated, intentional, and high-end but accessible. The visual language should feel like an editorial spread from a premium fashion magazine.

## Typography
- **Headings (Brand/Product Names):** Serif - *Cormorant Garamond* or *Playfair Display*.
  - Product names should be uppercase with wide letter-spacing (`tracking-[0.2em]`).
- **Body & UI:** Clean Sans-Serif - *Inter* or *Manrope*.
- **Base Font Rendering:** `-webkit-font-smoothing: antialiased;`

## Color Palette
- **Primary (Background):** `bg-[#FAF9F6]` (Off-white / Alabaster) - Warm and inviting.
- **Secondary (Text):** `text-[#1A1A1A]` (Deep Charcoal) - Almost black but softer.
- **Accent (Metallic/Warmth):** `text-[#C5A059]` (Gold) - For small accents, links, or CTA highlights.
- **Muted/Neutral:** `bg-[#F4F1ED]` (Soft Stone) - For section backgrounds.
- **Contrast:** Ensure all text is readable. Charocal on Off-white or Off-white on Charcoal.

## Layout & UI Elements
- **Whitespace:** Generous padding and margins. Let the products breathe.
- **Dividers:** Use thin, hairline dividers (`border-t border-[#E5E5E5]`).
- **Cards:** No borders, subtle shadows only on hover. Soft transitions.
- **Buttons:**
  - **Primary:** Solid Charcoal `bg-[#1A1A1A] text-white hover:bg-black transition-colors`.
  - **Secondary:** Outlined `border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all`.
- **Transitions:** Smooth, 300ms duration for all hover effects.

## Imagery
- Large, high-quality editorial shots.
- Warm lighting, close-ups of gold jewelry on models.
- "Reels" style for UGC: 9:16 vertical cards with serif overlays.

## Do's and Don'ts
- **Do:** Use uppercase for brand and product labels.
- **Do:** Keep margins wide (`px-6 md:px-24`).
- **Don't:** Use bright, saturated colors (except the gold accent).
- **Don't:** Use heavy shadows or rounded corners (keep it sharp and refined).
