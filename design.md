# Velmora Fine Jewelry — Design System

## Brand direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. The palette favors warm ivory, deep charcoal, and a muted gold accent. Avoid loud discount cues; favor restraint, whitespace, and large imagery.

## Color palette

| Token                 | Hex       | Usage                                            |
|-----------------------|-----------|--------------------------------------------------|
| `--velmora-cream`     | #f8f6f1   | Primary page background                          |
| `--velmora-ivory`     | #fffefb   | Card / elevated surfaces                         |
| `--velmora-charcoal`  | #1f1f1f   | Primary text, footer background                  |
| `--velmora-stone`     | #6b6560   | Secondary / muted text                           |
| `--velmora-taupe`     | #d4cec3   | Hairline borders, dividers                       |
| `--velmora-gold`      | #c5a065   | Accent CTA, stars, hover highlights              |
| `--velmora-gold-dark` | #a5824a   | Accent hover state                               |

## Typography

- Headings / product names: `Cormorant Garamond`, serif. Uppercase for product names with `tracking-[0.2em]`.
- Body / UI: `Manrope`, sans-serif.
- Use generous line-height and generous letter-spacing for uppercase labels.

## Spacing & layout

- Max content width: `max-w-7xl` (80rem).
- Section vertical padding: `py-16 md:py-24`.
- Hairline dividers: `border-t border-velmora-taupe/50`.
- Cards: soft shadow `shadow-sm`, hover `shadow-md`, transition `duration-500`.

## Components

- Buttons: solid accent (`bg-velmora-gold text-white`) or outlined (`border-velmora-charcoal text-velmora-charcoal`). Rounded `rounded-none` or subtle `rounded-sm`. Uppercase tracking-widest text-xs.
- Inputs: minimal underline style or 1px border, focus ring `focus-visible:ring-velmora-gold`.
- Pills: rounded-full, 1px border, selected state filled with gold.

## Imagery

- Use `data-strk-img` / `data-strk-bg` placeholders referencing nearby text IDs.
- Preferred ratios: hero `16x9` or `3x2`, product cards `4x3` or `3x4`, UGC `9x16`, category tiles `3x4`.
- Placeholder src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`.

## Accessibility

- Maintain WCAG AA contrast for body text on cream backgrounds.
- Interactive elements must show visible focus rings.
- All product images have descriptive `alt` text.
