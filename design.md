# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. No loud discount language, no generic big-box e-commerce. Rich refined base, warm gold metallic accents, generous whitespace, hairline dividers.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#F7F3ED` | Primary page background, warm off-white/cream |
| `--color-bg-alt` | `#EDE6DA` | Alternate section backgrounds (UGC, newsletter) |
| `--color-surface` | `#FFFFFF` | Cards, drawer, nav solid state |
| `--color-ink` | `#2A2420` | Primary text, headings |
| `--color-ink-muted` | `#6E645A` | Body text, captions, muted labels |
| `--color-accent` | `#A96E4B` | CTA buttons, accent block, links hover |
| `--color-accent-hover` | `#8D593C` | CTA hover state |
| `--color-gold` | `#C8A575` | Metallic highlights, stars, accents |
| `--color-hairline` | `#D9CFC2` | Dividers, borders, outlines |
| `--color-error` | `#B54242` | Error text |

Always use the Tailwind custom colors (`velmora-*`) defined in `tailwind.config.js`. Never hardcode hex values in JSX.

## Typography

- **Headings / product names:** Cormorant Garamond, 400–600. Elegant serif.
- **Body / UI:** Inter, 300–500. Clean sans-serif.
- Product names are UPPERCASE with wide `tracking-[0.22em]` letter-spacing.
- Headings use tight-ish line-height (`leading-[1.1]` to `leading-tight`).
- Body uses `leading-relaxed`.

## Spacing & Layout

- Max content width: `max-w-[1400px]` centered with `mx-auto`.
- Section vertical padding: `py-16 md:py-24` typically.
- Generous gaps: `gap-8`, `gap-12`.
- Thin hairline dividers: `h-px bg-velmora-hairline`.
- Cards: soft shadow `shadow-sm`, no heavy borders.

## Components

### Buttons
- **Primary solid:** `bg-velmora-accent text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-velmora-accent-hover transition-colors duration-300`
- **Primary outline:** `border border-velmora-ink text-velmora-ink px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-velmora-ink hover:text-white transition-colors duration-300`
- **Ghost icon buttons:** transparent, hover scale + color change.

### Product Cards
- Image wrapper with aspect ratio (`aspect-[4/5]`), second image revealed on hover.
- Product name uppercase tracking-widest, small serif.
- Price sans-serif, muted color.
- Quick "Add to Cart" appears as overlay on hover (desktop) / below image (mobile).

### Form Inputs
- `bg-white border border-velmora-hairline px-4 py-3 text-sm focus:outline-none focus:border-velmora-accent transition-colors`
- Placeholder in muted color.

## Animations
- Subtle hover transitions 300ms.
- Nav background transition 300ms.
- Mobile menu slide/fade.
- Cart drawer slide from right.
- Image hover crossfade 400ms.

## Accessibility
- Minimum 4.5:1 contrast for body text.
- All interactive elements keyboard accessible.
- Visible focus states on buttons/inputs.
