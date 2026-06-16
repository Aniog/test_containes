# Design System — ARTITECT MACHINERY

Elegant, user-friendly industrial brand site for precision sheet metal folding machinery. The visual language combines the precision of engineering with the warmth of a refined editorial layout: deep ink, soft cream, brass accent, and a contemporary serif for display.

## 1. Brand Voice
- Confident, precise, and craftsman-like.
- Editorial typographic feel — large serif headlines, generous spacing.
- Engineering rigor expressed through structure, alignment, and consistency — not visual noise.

## 2. Color Tokens
Use semantic Tailwind utility names. Custom colors are configured in `tailwind.config.js`.

| Token            | Hex        | Usage                                                  |
| ---------------- | ---------- | ------------------------------------------------------ |
| `cream`          | `#F5F0E6`  | Default page background                                |
| `cream-soft`     | `#FAF7F1`  | Alternating section background, cards                  |
| `ink`            | `#0E1A2B`  | Primary text, dark sections, primary CTA               |
| `ink-soft`       | `#1B2A40`  | Secondary dark surface, footer                         |
| `slate`          | `#4A5567`  | Body text, secondary text                              |
| `muted`          | `#8A93A0`  | Captions, helper text, placeholders                    |
| `brass`          | `#B89968`  | Accent — borders, dividers, highlights, secondary CTA  |
| `brass-deep`     | `#8A6E40`  | Accent hover, active states                            |
| `line`           | `#E2DCCD`  | Hairline dividers on cream                             |
| `line-dark`      | `#2A3A52`  | Hairline dividers on ink                               |
| `white`          | `#FFFFFF`  | Surfaces, elevated cards                               |

Do's:
- Always pair dark text (`ink`) on light surfaces (`cream`, `cream-soft`, `white`).
- Always pair light text (`cream-soft` / `white`) on dark surfaces (`ink`, `ink-soft`).
- Use `brass` only for accent lines, icons, and the secondary button style.

Don'ts:
- Don't place light text on cream or white.
- Don't use `brass` for body text — it must remain an accent.
- Don't use arbitrary hex codes in components; always use the tokens above.

## 3. Typography
- Display: **Cormorant Garamond** (300/400/500/600/700). Used for h1/h2 and the brand wordmark. Conveys elegance and architectural precision.
- Body: **Inter** (300/400/500/600/700). Used for paragraphs, UI, buttons.
- Mono / accent: optional `font-mono` for tiny eyebrow labels (e.g. "EST. 2008", "01 / 07").

Sizes (mobile / desktop):
- Hero h1: `text-4xl md:text-6xl lg:text-7xl` — `leading-[1.05]`, `font-light`, `tracking-tight`.
- Section h2: `text-3xl md:text-5xl` — `leading-tight`, `font-light`.
- Card title: `text-xl md:text-2xl` — `font-normal`.
- Body: `text-base md:text-lg` — `leading-relaxed`.
- Eyebrow / label: `text-xs uppercase tracking-[0.2em]` — `font-medium`.

Do's:
- Use the serif for hero/section titles, never for long body paragraphs.
- Keep line length ≤ 70ch on body text.

## 4. Spacing & Layout
- Section vertical padding: `py-20 md:py-28 lg:py-32`.
- Container width: `max-w-7xl mx-auto px-6 md:px-10`.
- Card padding: `p-6 md:p-8`.
- Grid gap: `gap-6 md:gap-8 lg:gap-10`.

## 5. Components

### Buttons
- Primary (on cream/white): `bg-ink text-cream-soft hover:bg-ink-soft`. `px-7 py-3`. `text-sm uppercase tracking-[0.18em]`. `font-medium`.
- Primary (on ink sections): `bg-brass text-ink hover:bg-brass-deep hover:text-cream-soft`.
- Secondary / outline: `border border-ink text-ink hover:bg-ink hover:text-cream-soft`. Same typography.
- Ghost link: `text-ink underline-offset-4 hover:text-brass-deep hover:underline`. Used for inline text links.

### Cards
- Surface: `bg-white border border-line` (on cream) or `bg-ink-soft border border-line-dark` (on ink).
- Rounded: `rounded-sm` (very subtle, 2px) — keep architectural, not soft.
- Hover: lift subtly with `transition` and a 1px brass border accent.

### Dividers
- Hairline: `border-t border-line` or `border-line-dark`.
- Decorative: `w-12 h-px bg-brass mx-auto` for centered accents above section titles.

### Icons
- Lucide React only. Default stroke width 1.5. Color inherits from text.

## 6. Imagery
- Use `data-strk-img` and `data-strk-bg` with the stock image system.
- Always reference nearby text IDs for the image query (do not hardcode plain text).
- Aspect ratios preferred: `16x9` for hero/banner, `4x3` for product cards, `1x1` for industry tiles, `3x2` for editorial blocks.

## 7. Motion
- Subtle, never decorative for its own sake.
- Default transition: `transition-colors duration-200 ease-out`, `transition-transform duration-300 ease-out`.
- Section reveal: opacity + 8px translate-y, 400ms ease-out, triggered by IntersectionObserver once.

## 8. Don'ts
- No emoji in any visible UI.
- No emoji or decorative icons in headings.
- No gradients on text.
- No drop shadows on cards — use hairline borders only.
- No fully-rounded (pill) buttons — keep corners sharp (`rounded-sm` max).
- No more than two font families in a single composition.
- No arbitrary hex / px values inline; route through tokens and Tailwind utilities.

