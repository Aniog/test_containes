# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm editorial, premium demi-fine jewelry. The experience should feel refined, feminine, calm, and giftable. Avoid loud promotional styling, overly bright UI, chunky borders, or discount-store visuals.

## Color direction
Commit to one direction sitewide: deep espresso-charcoal base with warm ivory surfaces and restrained champagne-gold accents.

### Palette
- `bg-noir`: near-black editorial background. Example Tailwind intent: `bg-stone-950`
- `bg-ivory`: soft warm page background. Example Tailwind intent: `bg-stone-50`
- `bg-panel`: elevated warm card background. Example Tailwind intent: `bg-stone-100`
- `text-rich`: primary dark text. Example Tailwind intent: `text-stone-900`
- `text-soft`: secondary copy. Example Tailwind intent: `text-stone-600`
- `text-inverse`: light text on dark surfaces. Example Tailwind intent: `text-stone-50`
- `line-soft`: hairline dividers. Example Tailwind intent: `border-stone-200`
- `line-inverse`: subtle borders on dark surfaces. Example Tailwind intent: `border-white/15`
- `accent-gold`: warm metallic accent. Example Tailwind intent: `bg-amber-200`, `text-amber-200`, `border-amber-200`
- `accent-deep`: deeper gold hover state. Example Tailwind intent: `bg-amber-300`, `text-amber-300`

## Typography
- Headings and product names: elegant serif. Use `Cormorant Garamond` from Google Fonts.
- Body and UI: clean sans-serif. Use `Inter` from Google Fonts.
- Product names must be uppercase with visible tracking. Example Tailwind intent: `uppercase tracking-[0.24em]`
- Section labels and utility text should use compact uppercase tracking. Example Tailwind intent: `uppercase tracking-[0.32em] text-xs`

## Layout and spacing
- Use generous whitespace. Prefer section padding like `py-16 md:py-24`.
- Keep content width refined, generally `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Use airy card spacing and avoid crowded grids.
- On desktop, preserve editorial asymmetry where appropriate. Do not collapse everything into a mobile-style single column.

## Borders, radius, shadows
- Use thin hairline borders, subtle depth, and soft shadows.
- Favor rounded corners around `rounded-2xl` to `rounded-3xl` for cards and drawers.
- Keep shadows soft and diffused. Example Tailwind intent: `shadow-[0_20px_60px_rgba(28,25,23,0.08)]`

## Buttons and inputs
- Buttons should feel premium and restrained.
- Primary CTA: dark surface with warm gold text or border, or warm gold surface with dark text.
- Secondary CTA: transparent with fine border.
- Inputs should use warm light backgrounds, dark text, soft placeholder color, and visible focus states.

## Imagery
- Use warm-lit editorial close-ups of gold jewelry on models or soft neutral surfaces.
- Backgrounds should support gold tones: espresso, stone, ivory, taupe.
- Avoid generic bright studio e-commerce imagery.

## Motion
- Keep animations subtle and fast.
- Use transitions such as `duration-300 ease-out`.
- Hover effects can include slight image scale, reveal overlays, and button fade-in.

## Do
- Keep contrast strong and text explicitly readable on every surface.
- Use gold accents sparingly.
- Use thin dividers to structure sections.
- Keep the cart, filters, and controls elegant and simple.

## Don’t
- Do not use neon colors, bright sale red, or heavy gradients.
- Do not use oversized badges, thick borders, or cluttered promo blocks.
- Do not rely on low-contrast beige-on-ivory text.
- Do not make desktop layouts feel like stretched mobile cards.
