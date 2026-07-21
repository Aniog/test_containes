# Design Guidelines: Velmora Fine Jewelry

## Visual Style
- **Mood**: Quiet luxury, warm, editorial, premium demi-fine jewelry.
- **Vibe**: Direct-to-consumer, sophisticated, for women 25-45. High-end aesthetic without the gatekeeping.

## Typography
- **Headings**: `Cormorant Garamond` (Serif). Elegant, sophisticated.
  - Accentuate with `uppercase` and `letter-spacing` (tracking-widest) for product names.
- **Body & UI**: `Inter` or `Manrope` (Sans-serif). Clean, highly readable.

## Color Palette
| Color | Tailwind Class | Hex | Usage |
|-------|----------------|-----|-------|
| Deep Charcoal | `bg-[#121212]` | `#121212` | Dark backgrounds, primary text on light backgrounds |
| Warm Gold | `text-[#D4AF37]` | `#D4AF37` | Accents, CTA borders, highlights |
| Cream Pearl | `bg-[#F9F7F2]` | `#F9F7F2` | Primary light background |
| Soft Sand | `bg-[#E8E2D9]` | `#E8E2D9` | Secondary light background, section breaks |
| Ivory White | `bg-[#FFFFFF]` | `#FFFFFF` | Cards, popovers |

## UI Elements
- **Borders**: Thin hairline dividers (`border-[0.5px]`).
- **Buttons**:
  - Primary: Solid deep charcoal or gold background, clean sans-serif text.
  - Secondary: Outlined gold or charcoal, transparent background.
- **Transitions**: Smooth, subtle hover transitions (0.3s ease).
- **Shadows**: Very soft, large radius (`shadow-sm` or custom subtle shadows).
- **Whitespace**: Generous margins and padding to create an editorial feel.

## Components
- **Navbar**: Transparent over hero, transition to solid `bg-[#F9F7F2]` on scroll.
- **Cards**: Large imagery, hover reveals secondary product shot.
- **Grids**: 4-5 items per row for desktop, 2 for mobile.
