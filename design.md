# Velmora Fine Jewelry — Visual Design System

> Source of truth for all visual decisions. Translate these tokens to Tailwind
> classes consistently across the codebase.

## Brand Positioning

Quiet-luxury, editorial, warm. Premium demi-fine jewelry — *never* loud,
*never* discount-looking, *never* generic e-commerce. Think
"Aesop meets Mejori meets a Vogue editorial".

The site should feel like a printed magazine spread that happens to sell
jewelry — confident, restrained, and considered.

## Color Palette (single committed direction)

**Warm cream + deep espresso + brushed champagne gold.**

| Token              | Hex       | Tailwind name       | Role                                        |
| ------------------ | --------- | ------------------- | ------------------------------------------- |
| `cream`            | `#F6F0E6` | `bg-cream`          | Primary page background (warm ivory)         |
| `cream-deep`       | `#ECE2D1` | `bg-cream-deep`     | Subtle section break, soft fills             |
| `ivory`            | `#FBF7F0` | `bg-ivory`          | Card / elevated surface                     |
| `espresso`         | `#1B1612` | `text-espresso` / `bg-espresso` | Primary text + dark hero variants |
| `espresso-soft`    | `#3A322B` | `text-espresso-soft`| Secondary text, hairline dividers on light  |
| `taupe`            | `#8A7B6B` | `text-taupe`        | Tertiary text, captions                     |
| `champagne`        | `#B08A55` | `bg-champagne` / `text-champagne` | Accent — buttons, badges, hairlines |
| `champagne-deep`   | `#8E6E3F` | `bg-champagne-deep` | Accent hover state                          |
| `champagne-soft`   | `#D9C29A` | `bg-champagne-soft` | Soft accent fills, halo overlays            |
| `success`          | `#5C6B4F` | `text-success`      | Confirmation only (used sparingly)          |

**Contrast guarantees**
- Body text on cream: espresso (#1B1612) → 13.5:1 (AAA)
- Secondary text on cream: espresso-soft (#3A322B) → 9.4:1 (AAA)
- Champagne button text on champagne: espresso → 4.9:1 (AA Large)
- Champagne button text on champagne-deep: cream → 7.1:1 (AAA)
- White text on espresso hero: → 14.5:1 (AAA)

## Typography

Two-family pairing. Product names, section titles, and hero copy all use the
serif; everything else uses the sans.

- **Serif (display + product names):** `Cormorant Garamond` — weights 300 (light)
  / 400 (regular) / 500 (medium). Tight letter-spacing on hero, wide on
  UPPERCASE product names.
- **Sans (body, UI, buttons):** `Inter` — weights 300 / 400 / 500 / 600.

### Scale (mobile-first, scale up on `md:`)

| Role                | Mobile          | Desktop         | Notes                          |
| ------------------- | --------------- | --------------- | ------------------------------ |
| Hero headline       | `text-5xl`      | `text-7xl`      | Cormorant 300, `leading-[1.05]`, `tracking-tight` |
| Section title       | `text-3xl`      | `text-5xl`      | Cormorant 400, `leading-tight` |
| Section eyebrow     | `text-[11px]`   | `text-xs`       | Inter 500, UPPERCASE, `tracking-[0.22em]` |
| Product name        | `text-sm`       | `text-sm`       | Inter 500, UPPERCASE, `tracking-[0.18em]` |
| Body                | `text-base`     | `text-base`     | Inter 400, `leading-relaxed`   |
| UI / button label   | `text-xs`       | `text-xs`       | Inter 500, UPPERCASE, `tracking-[0.2em]` |
| Caption / muted     | `text-xs`       | `text-xs`       | Inter 400, taupe color         |

## Spacing & Layout

- **Max content width:** `max-w-[1440px]` for full-bleed sections,
  `max-w-7xl` for the nav and product grids.
- **Horizontal page padding:** `px-5 md:px-8 lg:px-12`.
- **Section vertical rhythm:** `py-20 md:py-28 lg:py-36`. The hero is the
  exception (`min-h-[88vh]`).
- **Generous whitespace** is the single most important visual cue for
  premium. When in doubt, add more air.

## Hairline Dividers

The visual signature of the site. Use a 1px line in `espresso/10` over cream
or `cream/15` over espresso. Never use thick borders.

```
border-t border-espresso/10    (on light)
border-t border-cream/15       (on dark)
```

## Buttons

Two flavors only:

- **Primary (champagne):** solid champagne background, espresso text,
  UPPERCASE label, `tracking-[0.2em]`, `px-8 py-4`, no border-radius
  sharpness (`rounded-none`) — *no* rounded pills. Hover: champagne-deep.
- **Ghost:** transparent, espresso border `border-espresso/30`, espresso
  text. Hover: fills with `cream-deep`.

Disabled / loading states drop opacity to 70% and disable pointer events.

## Cards (product, UGC, testimonials)

- Background: `bg-ivory` (subtly lifted from cream page).
- No visible border. Use `shadow-[0_2px_24px_-12px_rgba(27,22,18,0.18)]`
  for a *very* soft drop. On hover, lift to
  `shadow-[0_18px_40px_-18px_rgba(27,22,18,0.28)]` over 500ms.
- No `rounded-2xl` — use `rounded-sm` (2px) or `rounded-none`.

## Imagery

- Product photography sits on deep, warm neutrals (espresso, warm taupe,
  brushed bronze). Never on bright white.
- UGC strip uses 9:16 vertical crops with a soft espresso gradient at the
  bottom for caption legibility.
- Hero is editorial portrait: model wearing gold, warm window light.

## Motion

Subtle, slow, never bouncy.

- Default easing: `cubic-bezier(0.22, 1, 0.36, 1)` (a slow ease-out).
- Default duration: `400ms` for hovers, `700ms` for section reveals.
- Reveal pattern: opacity 0→1 + translateY 12px→0, fired on
  `IntersectionObserver` once per element.
- No springs, no bounces, no flashy parallax.

## Do's and Don'ts

**Do**
- Let images breathe. Crop to a 3:4 or 4:5 ratio and let whitespace speak.
- Use hairlines (`1px`) for every divider.
- Set serif headlines in *light* weight (300) for the most editorial feel.
- Reuse the same champagne accent for every interactive element so the
  brand reads as one piece.

**Don't**
- Don't use bright white (`#FFFFFF`) anywhere on the site. Always warm.
- Don't use drop-shadows that look like SaaS dashboards. Keep them very soft.
- Don't use rounded-full pills on buttons. Sharp corners read more luxe.
- Don't introduce a new accent color. Champagne is the only accent.
- Don't use emoji, gradient text, or glow effects.
- Don't center-align body copy longer than 2 lines.
