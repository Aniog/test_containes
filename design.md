# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: editorial, warm, composed, and premium without looking flashy or inaccessible. The storefront should flatter gold jewelry with rich contrast, generous whitespace, and subtle tactile surfaces.

## Color system
Use a single refined palette across the whole site.

- Background base: deep espresso ink for hero and footer surfaces.
  - Tailwind intent: `bg-stone-950`
- Primary page background: warm parchment.
  - Tailwind intent: `bg-stone-50`
- Elevated card background: soft ivory.
  - Tailwind intent: `bg-[#f8f4ee]` should be avoided directly; instead extend named colors in Tailwind config.
- Accent metallic: muted champagne gold.
  - Tailwind intent: named brand color `champagne`
- Text primary on light: rich espresso.
  - Tailwind intent: named brand color `ink`
- Text on dark: warm ivory.
  - Tailwind intent: named brand color `porcelain`
- Dividers: soft gold-taupe hairlines.
  - Tailwind intent: named brand color `line`

## Typography
- Headings and product names: Cormorant Garamond
  - Tailwind intent: `font-display`
- Body and UI: Inter
  - Tailwind intent: `font-sans`
- Product names should use uppercase with wide tracking.
  - Tailwind intent: `uppercase tracking-[0.3em]`

## Layout and spacing
- Use roomy vertical spacing.
  - Tailwind intent: sections typically `py-16 md:py-24`
- Use wide desktop gutters and comfortable mobile padding.
  - Tailwind intent: `px-5 md:px-8 lg:px-12`
- Keep content width editorial, not cramped.
  - Tailwind intent: `max-w-7xl mx-auto`

## Surface language
- Thin hairline dividers and understated borders.
  - Tailwind intent: `border border-line/70`
- Soft shadows only on elevated cards and drawers.
  - Tailwind intent: `shadow-[0_18px_60px_rgba(32,24,19,0.08)]`
- Rounded corners should be refined, not bubbly.
  - Tailwind intent: `rounded-2xl` for cards, `rounded-full` only for pills/buttons where needed.

## Motion
- Subtle transitions only.
  - Tailwind intent: `transition duration-300 ease-out`
- Hover states should feel gentle and polished, never springy or playful.

## Do
- Keep text contrast strong and explicit on every surface.
- Use large editorial image blocks.
- Make mobile feel luxurious through spacing, not density.
- Keep CTAs confident and restrained.

## Don't
- Do not use bright yellow gold, loud gradients, or discount-sale styling.
- Do not overcrowd cards with badges or too many labels.
- Do not let transparent overlays reduce readability.
- Do not mix multiple accent colors.
