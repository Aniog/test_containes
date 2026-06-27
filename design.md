# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- **Obsidian** `#1a1714` — primary background, nav solid state, footer
- **Ivory Cream** `#f7f3ee` — page background, card backgrounds
- **Warm White** `#fdfaf6` — section backgrounds, hero overlay

### Accent Colors
- **Antique Gold** `#c9a96e` — primary accent, CTAs, borders, highlights
- **Pale Gold** `#e8d5b0` — hover states, subtle tints
- **Deep Champagne** `#b8935a` — hover on gold accent

### Text Colors
- **Charcoal** `#2c2825` — primary body text
- **Warm Gray** `#7a6f66` — secondary text, captions, metadata
- **Muted Stone** `#a89e95` — placeholder text, disabled states

### Surface Colors
- **Linen** `#f0ebe4` — card backgrounds, input fields
- **Parchment** `#e8e0d6` — dividers, borders
- **Smoke** `#d4ccc4` — subtle borders

## Typography

### Fonts
- **Serif (Headings)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (Body/UI)**: Manrope — clean, modern, readable

### Scale
- Display: `clamp(3rem, 6vw, 5.5rem)` / Cormorant Garamond / weight 300
- H1: `clamp(2rem, 4vw, 3.5rem)` / Cormorant Garamond / weight 400
- H2: `clamp(1.5rem, 3vw, 2.5rem)` / Cormorant Garamond / weight 400
- H3: `1.25rem` / Cormorant Garamond / weight 500
- Product Name: `0.875rem` / Manrope / weight 600 / UPPERCASE / letter-spacing: 0.15em
- Body: `1rem` / Manrope / weight 400
- Caption: `0.8125rem` / Manrope / weight 400
- Label/UI: `0.75rem` / Manrope / weight 500 / UPPERCASE / letter-spacing: 0.1em

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Component padding: `p-6 md:p-8`

## Borders & Dividers
- Hairline divider: `border-[#e8e0d6]` / `border-t` or `border-b`
- Card border: `border border-[#e8e0d6]`
- Accent border: `border border-[#c9a96e]`
- Border radius: `rounded-none` for editorial feel, `rounded-sm` for inputs/buttons

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`
- Button: none (flat, premium)

## Buttons
- **Primary (Accent)**: `bg-[#c9a96e] text-[#1a1714] hover:bg-[#b8935a]` / uppercase / letter-spacing / px-8 py-3
- **Outlined**: `border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1a1714]`
- **Ghost**: `text-[#2c2825] hover:text-[#c9a96e]`
- Transition: `transition-all duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image scale on hover: `scale-105`
- Fade in: `opacity-0 → opacity-100` with `transition-opacity duration-500`
- Underline slide: `after:w-0 hover:after:w-full after:transition-all after:duration-300`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Serif for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Warm, neutral backgrounds — never pure white or pure black
- Gold accent used sparingly for maximum impact

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (too casual)
- No drop shadows on text
- No generic stock photo vibes — editorial only
- No cluttered layouts — breathe
- No blue links — use gold or charcoal
