# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, unhurried. Demi-fine gold jewelry presented like a magazine spread — generous whitespace, thin hairlines, warm ivory surfaces that let gold glow. Never loud, never discount-like, never generic e-commerce.

## Color Palette (warm editorial neutrals + antique gold accent)
All colors are defined once in `tailwind.config.js`. Never hardcode raw hex values in components.

| Token | Hex | Usage |
|---|---|---|
| `ivory` | #FAF6EF | Primary page background |
| `cream` | #F1EADD | Alternate section background |
| `sand` | #E4D9C4 | Subtle panel / thumbnail surface |
| `espresso` | #1D1610 | Primary text, footer background, dark overlays |
| `cocoa` | #55483A | Secondary text |
| `taupe` | #8A7B67 | Muted text, metadata, captions |
| `gold` | #A5824A | Accent: buttons, links, stars, hover states |
| `gold-deep` | #8A6C3B | Accent hover |
| `gold-light` | #C9AE7E | Soft metallic highlight |
| `hairline` | #E3D8C3 | Thin dividers, borders |

Contrast rules: body text always `espresso` or `cocoa` on `ivory`/`cream`; on `espresso` backgrounds text is `ivory`/`sand`; accent buttons are `gold`/`gold-deep` with `ivory` text (large text / UI only) or `espresso` text on light chips.

## Typography
- Serif (display + product names): **Cormorant Garamond** — set in UPPERCASE with wide tracking (`tracking-[0.18em]`+), weights 400–500, never bold-heavy.
- Sans (body/UI): **Manrope** — 400–600, generous line-height, `tracking-wide` on labels.
- Eyebrow labels: sans, uppercase, `text-xs tracking-[0.3em] text-taupe`.
- Scale: hero `text-5xl md:text-7xl` serif; section titles `text-3xl md:text-5xl`; body `text-sm md:text-base`.

## Surfaces & Structure
- Hairline dividers: `border-t border-hairline`, 1px only. No heavy borders.
- Cards: no visible card chrome — images on `sand`/`cream` surfaces, text below. Soft shadow only on hover (`shadow-[0_18px_40px_-18px_rgba(29,22,16,0.25)]`).
- Buttons: `rounded-none`, serif or tracked sans uppercase labels. Solid = `bg-gold text-ivory hover:bg-gold-deep`; Outline = `border border-espresso/30 hover:border-gold hover:text-gold`.
- Inputs: `rounded-none border-hairline bg-ivory`, focus ring gold.
- Icons: Lucide, `stroke-width` default, 18–20px, `text-espresso` or `text-gold`.
- Star ratings: filled Lucide stars in `gold`, size 14px.

## Motion
- Subtle only: `transition-all duration-300/500 ease-out`. Hover image swap + slight scale (`scale-105`), quick-add bar slides up, cart drawer translates in. No bouncy easing, no parallax gimmicks.

## Imagery
- Warm-lit gold jewelry photography on dark/neutral backgrounds. Hero: 16x9 full-bleed with `espresso` gradient overlay for legible ivory text. Product images: 4x5-ish portrait crops on neutral surfaces. UGC strip: 9x16 vertical.

## Do / Don't
- DO keep layouts airy: `py-20 md:py-28` sections, max-w-7xl containers.
- DO use uppercase serif for all product names.
- DON'T use rounded-2xl cards, bright saturated colors, gradients other than dark photo overlays, badge clutter, or anything resembling a flash-sale aesthetic.
- DON'T let text sit on photography without a dark overlay for contrast.
