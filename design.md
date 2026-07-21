# Velmora Fine Jewelry — Design System

Quiet luxury. Warm. Editorial. Demi-fine jewelry that feels considered, not loud.

## Direction
Warm neutral / editorial scheme built on a rich charcoal-ink base with brushed champagne-gold accents and soft ivory-cream backgrounds. Reads premium and gallery-like, not e-commerce loud.

## Color Palette

Named Tailwind colors (added in `tailwind.config.js`):

- `ink`         `#1B1613`  — primary text on light, deep base
- `ink-soft`    `#2A2320`  — softer text on light
- `bone`        `#F6F1E8`  — page background (warm ivory)
- `porcelain`   `#EFE7D8`  — subtle surface / cards
- `champagne`   `#C9A96A`  — primary accent (brushed gold)
- `champagne-deep` `#A88448` — hover / active gold
- `champagne-soft` `#E4CFA1` — light gold tint
- `hairline`    `#D9CFBE`  — thin dividers on light
- `hairline-dark` `#3A302A` — thin dividers on dark
- `muted`       `#6B605A`  — secondary text
- `sand`        `#E8DEC9`  — warm neutral

Contrast is enforced: never place `champagne` text on `bone`. Use `champagne-deep` for accent text on light backgrounds. Use `bone` text on `ink` backgrounds.

## Typography

- Headings & product names: **Cormorant Garamond** (serif). Editorial, weighted 400/500. Product names in UPPERCASE with `tracking-[0.2em]`.
- Body & UI: **Inter** (sans). 300/400/500. Small caps for eyebrow labels.
- Base body size: `text-[15px]` desktop, `text-[14px]` mobile.
- Headings scale: hero `text-5xl md:text-7xl`, section `text-3xl md:text-5xl`, product name `text-xl md:text-2xl`.

## Do's
- Generous whitespace — sections min `py-20 md:py-28`.
- Thin `1px` hairline dividers using `border-hairline`.
- Restrained animations: `transition-all duration-500 ease-out`.
- Buttons: solid `bg-ink text-bone` OR outlined `border border-ink text-ink`. Accent CTA: `bg-champagne text-ink`. All buttons: uppercase, `tracking-[0.18em]`, `text-xs`, `px-8 py-4`, no big radii — use `rounded-none` or `rounded-sm`.
- Product image hover: crossfade to alt image, subtle scale.
- Soft shadows only when floating (drawer, sticky nav after scroll): `shadow-[0_10px_40px_-15px_rgba(27,22,19,0.15)]`.
- Uppercase eyebrow labels above section titles with `tracking-[0.3em] text-xs text-champagne-deep`.

## Don'ts
- No neon, no bright red/blue e-commerce badges.
- No pure black `#000` — always `ink`.
- No pure white `#fff` for the page — use `bone`.
- No large rounded pills (looks generic). Use squared or 2px rounding.
- No emoji, no drop shadows on text, no gradient text.
- Don't set text color to inherit inside colored cards — always explicit.

## Layout
- Max width container: `max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16`.
- Grid gap: `gap-6 md:gap-8`.
- Mobile-first, breakpoints: `md:768` `lg:1024`.
