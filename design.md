# Velmora Fine Jewelry — Visual Design System

Quiet luxury, warm editorial. Premium demi-fine gold jewelry storefront.
This document is the single source of truth for visual style.

## Mood
- Quiet luxury, warm, editorial
- Calm, confident, restrained — never loud, never discount-feeling
- Generous whitespace, large editorial imagery
- Thin hairline dividers (1px) in `velmora-line` / `border-stone-200`
- Subtle hover transitions (300–500ms ease-out)
- Soft shadows only on elevated cards (`shadow-[0_8px_30px_rgb(0,0,0,0.05)]`)

## Color Palette
Single confident direction: warm cream + deep espresso + champagne gold accent.

- Background base: `#FAF7F2` (warm cream) → `bg-velmora-cream`
- Surface elevated: `#FFFFFF` → `bg-white`
- Ink / primary text: `#1C1A17` (deep espresso) → `text-velmora-ink`
- Secondary text: `#6B645C` (warm taupe) → `text-velmora-muted`
- Hairline / dividers: `#E8E2D7` → `border-velmora-line`
- Accent / gold: `#B08D57` (champagne gold) → `text-velmora-gold` / `bg-velmora-gold`
- Accent hover: `#8F6F3F` → `bg-velmora-gold-dark`
- Deep section background (editorial): `#1C1A17` → `bg-velmora-ink`
- On-ink text: `#FAF7F2` → `text-velmora-cream`

All colors are registered as Tailwind tokens in `src/index.css` via `@theme`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), via Google Fonts
- Body & UI: **Inter** (sans-serif), via Google Fonts
- Product names: UPPERCASE with `tracking-[0.18em]` to `tracking-[0.25em]`
- Section eyebrows: uppercase Inter, `text-xs tracking-[0.3em]` in `text-velmora-gold`
- Editorial display: serif with `font-light` or `font-normal`, never bold

Examples:
- Hero headline: `font-serif text-5xl md:text-7xl font-light leading-[1.05]`
- Section title: `font-serif text-3xl md:text-5xl font-light`
- Product card name: `font-sans uppercase text-sm tracking-[0.2em]`
- Body: `font-sans text-base text-velmora-muted leading-relaxed`

## Layout & Spacing
- Container max width: `max-w-[1400px]` with `px-6 md:px-10 lg:px-16`
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`
- Card gap: `gap-6 md:gap-8`
- Mobile-first; collapse multi-column grids to 1–2 cols below `md`

## Buttons (Premium Feel)
- Primary solid (accent gold): `bg-velmora-ink text-velmora-cream hover:bg-velmora-gold-dark transition-colors duration-300 px-8 py-4 uppercase tracking-[0.2em] text-xs`
- Outline: `border border-velmora-ink text-velmora-ink hover:bg-velmora-ink hover:text-velmora-cream`
- Gold accent CTA: `bg-velmora-gold text-white hover:bg-velmora-gold-dark`
- Never use pill-shaped or heavily-rounded buttons. Use `rounded-none` or `rounded-sm`.

## Imagery
- Warm-lit, dark/neutral backgrounds favoring gold jewelry
- Editorial close-ups; lots of negative space
- All product photography is square or 4:5
- Hero ratio: 16:9 on desktop, 3:4 on mobile

## Dos
- ✅ Use serif for emotion, sans for utility
- ✅ Generous whitespace
- ✅ Hairline dividers between sections
- ✅ Restrained gold accent — only on CTAs, eyebrows, prices
- ✅ Slow hover transitions

## Don'ts
- ❌ Bright reds, neon discounts, "SALE!" badges
- ❌ Heavy drop shadows
- ❌ Multiple competing accent colors
- ❌ Stock e-commerce look (no big circular sale bursts, no rainbow swatches)
- ❌ Heavy borders or thick dividers
