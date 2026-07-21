# Visual Identity - Velmora Fine Jewelry

## Overview
Velmora is a premium direct-to-consumer jewelry brand focusing on "quiet luxury." The aesthetic is editorial, warm, and sophisticated. It targets modern women who appreciate refined, demi-fine gold jewelry.

## Color Palette
- **Primary (Luxury Gold):** `#C5A059` - Use for accents, buttons, and call-to-actions.
- **Background (Soft Pearl):** `#FDFCFB` - Main background color for a clean, editorial feel.
- **Secondary (Obsidian):** `#1A1A1A` - Primary text color and dark backgrounds.
- **Muted (Champagne):** `#F3EEE8` - Subtle background for sections, dividers, and card backgrounds.
- **Accent (Deep Bronze):** `#7D6548` - For hover states and subtle details.

## Typography
- **Headings & Product Names:** 'Cormorant Garamond', serif.
  - Headings should use `tracking-wide` and often `uppercase` for a high-end look.
- **Body & UI:** 'Manrope' or 'Inter', sans-serif.
  - Focus on readability and elegant spacing.

## Visual Elements
- **Whitespace:** Generous spacing between sections and around images.
- **Dividers:** Thin, light-gray hairlines (`border-t border-muted`).
- **Cards:** No borders or shadows by default, or very soft shadows (`shadow-sm`) on hover.
- **Transitions:** Smooth, soft transitions (300ms–500ms) for hovers and page changes.
- **Imagery:** Large, high-quality editorial shots with warm lighting.

## Implementation Details (Tailwind)
- **Colors:**
  - `bg-background`: `#FDFCFB`
  - `text-foreground`: `#1A1A1A`
  - `bg-primary`: `#C5A059`
  - `text-primary-foreground`: `#FFFFFF`
  - `bg-muted`: `#F3EEE8`
  - `text-muted-foreground`: `#7D6548`
- **Buttons:**
  - Primary: `bg-[#C5A059] text-white px-8 py-3 tracking-widest uppercase text-sm font-medium hover:bg-[#7D6548] transition-colors`
  - Outline: `border border-[#C5A059] text-[#C5A059] px-8 py-3 tracking-widest uppercase text-sm font-medium hover:bg-[#C5A059] hover:text-white transition-all`
