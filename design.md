# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle motion.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory)
- `ink`        #1A1410  — deep warm espresso (primary dark / text on light)
- `espresso`   #2A211B  — secondary dark surface
- `ivory`      #F7F2EA  — warm ivory page background
- `cream`      #FBF8F2  — lightest surface / cards
- `sand`       #E8DECF  — soft neutral divider / muted surface
- `taupe`      #8C7B68  — muted body text on light
- `gold`       #B08D57  — warm metallic accent (primary accent)
- `gold-deep`  #9A7544  — hover / pressed accent
- `champagne`  #D9C3A0  — soft gold tint for subtle fills

Usage rules:
- Page background: `ivory`. Cards/surfaces: `cream` or `white`.
- Primary text on light: `ink`. Muted text: `taupe`.
- Accent (buttons, links, highlights): `gold`, hover `gold-deep`.
- Hairline dividers: `sand`.
- On dark sections (hero overlay, footer): background `ink`, text `ivory`,
  accent `gold` / `champagne`. Always ensure strong contrast.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Eyebrow / kicker labels: UPPERCASE, `text-xs tracking-[0.3em]`, `taupe`.
- Headings use `font-serif`; body uses default sans.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-sand`.
- Card radius: subtle, `rounded-none` to `rounded-sm` (editorial, sharp).
- Soft shadows only on hover: `shadow-[0_18px_40px_-24px_rgba(26,20,16,0.35)]`.

## Buttons
- Primary (accent): `bg-gold text-ink` (dark text on gold for contrast),
  uppercase, wide tracking, `px-8 py-3`, hover `bg-gold-deep`.
- Outline: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- On dark: `bg-gold text-ink` or `border border-ivory/70 text-ivory`.

## Motion
- Subtle, slow transitions (`duration-500`, `ease-out`).
- Image hover: crossfade second image, gentle scale (`scale-105`).
- Buttons: background/color transition only.
- No bounce, no loud animations.

## Do's
- Use serif for all headings and product names.
- Keep accent color restrained — gold for CTAs and key highlights only.
- Use generous whitespace and hairline dividers.
- Ensure every text element has strong contrast against its background.

## Don'ts
- No loud gradients, no neon, no discount-style badges.
- No rounded-full buttons (editorial = sharp/subtle radius).
- No low-contrast text (e.g. taupe on sand, champagne on ivory for body).
- No hardcoded arbitrary hex outside the palette above.
