# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry aesthetic.
Deep obsidian base with warm ivory surfaces, gold accents, and generous whitespace.

## Color Palette
- **Obsidian** `#1A1714` — primary text, dark backgrounds, nav solid state
- **Obsidian Light** `#2C2825` — secondary dark surfaces
- **Ivory** `#F7F3EE` — primary background, light surfaces
- **Ivory Dark** `#EDE8E1` — card backgrounds, subtle section dividers
- **Gold** `#C9A96E` — primary accent: CTAs, borders, highlights
- **Gold Light** `#DFC08A` — hover states on gold elements
- **Gold Dark** `#A8854A` — pressed/active gold states
- **Taupe** `#8C7B6B` — body text secondary, captions
- **Taupe Light** `#B5A898` — placeholder text, muted labels
- **Blush** `#E8D5C4` — soft accent backgrounds, newsletter section

## Typography
- **Headings / Product Names**: `font-serif` (Cormorant Garamond) — elegant, editorial
  - Hero H1: `text-5xl md:text-7xl font-light tracking-wide`
  - Section titles: `text-3xl md:text-4xl font-light`
  - Product names: `text-xl font-medium tracking-widest uppercase`
- **Body / UI**: `font-sans` (Manrope) — clean, modern
  - Body: `text-sm md:text-base font-normal`
  - Labels/caps: `text-xs tracking-widest uppercase font-medium`
  - Prices: `text-base font-semibold`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: `border-gold opacity-30`
- Card borders: `border border-ivory-dark`
- Rounded corners: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)

## Buttons
- **Primary (CTA)**: `bg-gold text-obsidian px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors`
- **Outlined**: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-gold hover:text-obsidian transition-colors`
- **Dark**: `bg-obsidian text-ivory px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-obsidian-light transition-colors`

## Shadows
- Subtle: `shadow-sm` with warm tint
- Card hover: `shadow-md`
- No harsh drop shadows

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Opacity fades: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`

## Do's
- Use Cormorant Garamond for all headings and product names
- Keep product names UPPERCASE with wide letter-spacing
- Use gold sparingly as a true accent color
- Generous padding and whitespace
- Thin hairline borders (gold, low opacity)
- Large editorial imagery

## Don'ts
- No bright/neon colors
- No rounded pill buttons (keep sharp or very subtle radius)
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce blue/green CTAs
