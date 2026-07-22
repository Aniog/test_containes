# Visual Identity - Velmora Fine Jewelry

## Brand Essence
Quiet luxury, warm, editorial, premium demi-fine jewelry.

## Palette
- **Primary (Background):** `#FAF9F6` (Warm White / Off-white)
- **Secondary (Dark/Text):** `#1A1A1A` (Deep Charcoal for text and primary UI)
- **Accent (Gold):** `#B8860B` (Deep Gold - used sparingly for buttons or active states)
- **Neutral:** `#E5E5E5` (Light Grey for thin dividers)
- **Soft Accent:** `#FDFCFB` (Lighter warm tint for cards/sections)

## Typography
- **Headings & Product Names:** serif - Cormorant Garamond / Playfair Display
  - *Note: For implementation, use "font-serif" with wide tracking and uppercase for product names.*
- **Body & UI:** sans-serif - Inter / Manrope
  - *Note: For implementation, use "font-sans".*

## Design Principles
- **Generous Whitespace:** Minimum section spacing `py-20`.
- **Large Editorial Imagery:** Full-bleed heroes and high-quality product close-ups.
- **Thin Hairline Dividers:** `border-t border-neutral-200/50`.
- **Restrained Color:** Use black and warm-white as the base, gold as a subtle highlight.
- **Transitions:** Subtle `transition-all duration-500 ease-out`.
- **Shadows:** Minimal, soft shadows `shadow-sm`.

## Implementation Notes (Tailwind)
- **Product Name:** `uppercase font-serif tracking-widest text-lg`
- **Buttons (Premium):** `bg-[#1A1A1A] text-white hover:bg-opacity-90 transition-all rounded-none px-12 py-4 uppercase text-sm tracking-widest` (Solid) or `border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all rounded-none px-12 py-4 uppercase text-sm tracking-widest` (Outlined)
