# Velmora Fine Jewelry — Design System

## Palette
- `velvet` (#1A1714) — primary text, nav bg (scrolled), footer bg
- `obsidian` (#0F0D0C) — deepest backgrounds, hero overlay
- `charcoal` (#2C2825) — card backgrounds, dark sections
- `mist` (#F5F0EB) — warm off-white, primary page background
- `parchment` (#EDE6DC) — alternate section backgrounds
- `champagne` (#C9A96E) — primary accent (CTA buttons, highlights, borders)
- `gold` (#B8924A) — deeper gold for hover states
- `goldLight` (#E2C98A) — light gold for subtle highlights
- `stone` (#8A7F74) — muted/secondary text
- `smoke` (#D4CCC4) — hairline dividers, borders

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond) — weights 300–600
- **Body / UI**: `font-sans` (Manrope) — weights 300–700
- **Product names**: UPPERCASE, `tracking-widest2` (0.25em) or `tracking-widest3` (0.35em)
- **Section labels**: uppercase, `tracking-widest`, `text-stone`, `text-xs` or `text-sm`

## Spacing & Layout
- Generous whitespace: sections use `py-20` to `py-32`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Hairline dividers: `border-t hairline` (0.5px, smoke color)

## Buttons
- **Primary CTA**: `bg-champagne text-velvet hover:bg-gold` — solid, no border-radius or slight `rounded-sm`
- **Outlined**: `border border-champagne text-champagne hover:bg-champagne hover:text-velvet`
- **Ghost/text**: `text-champagne hover:text-gold underline-offset-4`
- Padding: `px-8 py-3` for standard, `px-6 py-2.5` for compact
- Font: `font-sans text-xs tracking-widest uppercase font-semibold`

## Cards
- Background: `bg-charcoal` (dark) or `bg-white/60` (light sections)
- Soft shadow: `shadow-sm` or custom `shadow-[0_2px_20px_rgba(0,0,0,0.08)]`
- Hover: subtle scale `hover:scale-[1.02]` with `transition-transform duration-500`

## Animations
- All transitions: `duration-300` to `duration-500`, `ease-luxury`
- Image hover: opacity crossfade for second product image
- Nav: opacity + backdrop-blur transition on scroll

## Do's
- Use `font-serif` for all editorial headings and product names
- Keep product names UPPERCASE with wide letter-spacing
- Use champagne/gold only as accent — never as a background for large areas
- Maintain warm, editorial feel — avoid cold blues or harsh whites

## Don'ts
- No generic e-commerce blue/green CTAs
- No tight spacing — always generous padding
- No pure white (#fff) backgrounds — use mist or parchment
- No bold/heavy serif weights for body text
