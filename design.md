# Velmora Fine Jewelry Visual System

Velmora uses a quiet luxury editorial direction designed to flatter warm gold jewelry and feel premium-but-accessible.

## Palette
- Deep base: `velmora-ink` / Tailwind `bg-velmora-ink text-velmora-ivory` for hero, nav overlays, footer, and high-impact panels.
- Warm page neutral: `velmora-ivory` and `velmora-porcelain` for product cards and editorial sections.
- Soft blush warmth: `velmora-blush` for newsletter and gentle section backgrounds.
- Metallic accent: `velmora-gold` and `velmora-brass` for CTAs, thin dividers, ratings, and small premium details.
- Readable text: `velmora-charcoal` on light surfaces, `velmora-ivory` on dark surfaces, `velmora-muted` for secondary text.

## Typography
- Headings and product names use an elegant serif: `font-serif` mapped to Cormorant Garamond.
- Body, navigation, filters, forms, and buttons use `font-sans` mapped to Manrope.
- Product names should be uppercase with generous letter spacing: `uppercase tracking-[0.24em]` or similar.
- Hero headlines are large, graceful, and spaced with generous line height.

## Layout and Spacing
- Use generous whitespace and wide editorial rhythm: `py-16 md:py-24`, `px-5 sm:px-8 lg:px-12`.
- Prefer thin hairline dividers: `border-velmora-line`.
- Cards should feel refined: soft shadows, subtle borders, rounded only where it supports tactility.
- Mobile-first layouts, moving to multi-column editorial compositions at `md:` and `lg:` breakpoints.

## Components
- Primary buttons: solid warm metallic accent with dark readable text, uppercase label, subtle hover lift.
- Secondary buttons: outlined in brass or light line, transparent background, premium hover fill.
- Product cards: calm image-first presentation, serif uppercase names, quick add reveal on hover/focus.
- Navigation: transparent over the hero, then solid ivory with clear text after scroll.
- Drawer/modals: porcelain or ivory surfaces with explicit dark foreground text.

## Do
- Keep contrast strong and text readable on every surface.
- Use restrained accent color sparingly.
- Use editorial imagery, warm light, gold jewelry close-ups, model-worn jewelry.
- Add subtle transitions: opacity, transform, color, shadow.

## Don’t
- Do not use discount-style colors, bright red sale badges, or loud gradients.
- Do not crowd product grids or typography.
- Do not hardcode arbitrary hex values in JSX class strings; use named Tailwind tokens.
