# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount-looking, not generic e-commerce.

## Color Palette
- Background: `#0f0e0e` (deep charcoal-black) — serves as a rich dark canvas that makes gold jewelry glow.
- Surface: `#1a1818` (slightly lighter dark) for cards, footers, sections.
- Surface elevated: `#222020` for hover states, dropdowns.
- Text primary: `#f5f0eb` (warm off-white) — soft, not harsh.
- Text secondary: `#a09890` (warm taupe) for captions, labels.
- Accent / Gold: `#c9a96e` (warm metallic gold) — CTAs, highlights, accent lines.
- Accent hover: `#d4b87a` (lighter gold).
- Border: `#2a2726` (subtle dark divider).
- Border light: `#3a3635` (hairline dividers).
- Star / rating: `#c9a96e`.
- Error: `#c94e4e`.
- Success: `#4a8c5c`.

## Typography
- Headings, product names, logo: `Cormorant Garamond` serif. Product names in UPPERCASE with `tracking-widest`.
- Body, UI, buttons: `Inter` sans-serif.
- Font sizes: h1 ~3.5rem, h2 ~2.5rem, h3 ~1.5rem, body ~1rem, small ~0.875rem.

## Spacing & Layout
- Generous whitespace throughout. Section padding: `py-20 md:py-28`.
- Max content width: `max-w-7xl` with `px-6 md:px-8`.
- Thin hairline dividers: `border-t border-[#2a2726]`.

## Components
- Buttons: solid accent (`bg-[#c9a96e] text-[#0f0e0e]`) for primary CTAs, or outlined (`border border-[#c9a96e] text-[#c9a96e]`). Hover transition: `transition-all duration-300`.
- Cards: subtle hover lift (`hover:translate-y-[-2px]`), soft shadow on hover.
- Nav: transparent over hero, `bg-[#0f0e0e]` on scroll. Sticky top.
- Dividers: thin `border-t border-[#2a2726]` or `border-b`.

## Imagery
- Warm-lit editorial jewelry photography. Gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` attributes with warm, descriptive queries.

## Do's
- Use generous whitespace.
- Keep text readable with high contrast (warm off-white on dark).
- Use gold accent sparingly — it's a highlight, not the main color.
- Maintain consistent vertical rhythm.

## Don'ts
- Don't use pure white `#ffffff` — always use warm off-white.
- Don't use bright or saturated colors.
- Don't overcrowd — every element needs breathing room.
- Don't use generic e-commerce patterns.