# ARTITECT MACHINERY — Visual Style Guide

## Brand Positioning
ARTITECT MACHINERY is a precision-engineering manufacturer of sheet metal folding machines. The brand voice is **confident, technical, and quietly luxurious** — like a high-end European industrial OEM rather than a noisy factory floor.

The site must feel:
- Solid and engineered (industrial credibility)
- Calm and uncluttered (user-friendly)
- Premium and considered (elegant, not flashy)

## Color System

All colors are defined as semantic tokens in `src/index.css` via Tailwind v4 `@theme`.

### Light theme (default)
| Token | Hex | Usage |
| --- | --- | --- |
| `background` | `#F5F2EC` | Page background — warm off-white / parchment |
| `foreground` | `#0F172A` | Primary text — deep slate |
| `card` | `#FFFFFF` | Elevated surfaces (product cards, forms) |
| `card-foreground` | `#0F172A` | Text on cards |
| `muted` | `#ECE7DC` | Soft section dividers, badges |
| `muted-foreground` | `#5B6473` | Secondary text, captions |
| `primary` | `#0E2A47` | Primary brand — deep steel navy |
| `primary-foreground` | `#F5F2EC` | Text on primary |
| `accent` | `#C8A165` | Copper accent — highlights, CTA, dividers |
| `accent-foreground` | `#0F172A` | Text on accent |
| `border` | `#D9D2C2` | Hairline dividers |
| `ring` | `#0E2A47` | Focus rings |

### Dark sections (engineered)
| Token | Hex | Usage |
| --- | --- | --- |
| `ink` | `#0F172A` | Deep slate base for hero/footer dark sections |
| `ink-foreground` | `#F5F2EC` | Text on dark |
| `ink-muted` | `#1E293B` | Card surfaces over dark |

## Typography

Loaded from Google Fonts via `index.html`:
- **Display & headings**: `Space Grotesk` (500, 600, 700) — geometric, technical, modern
- **Body & UI**: `Inter` (400, 500, 600, 700) — neutral, readable
- **Numerals & specs**: `JetBrains Mono` (400, 500) — for technical specifications, model numbers

### Hierarchy (desktop)
- Hero headline: `text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]`
- Section headline: `text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight`
- Eyebrow: `text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-accent`
- Body large: `text-lg leading-relaxed text-muted-foreground`
- Body: `text-base leading-relaxed text-muted-foreground`

## Spacing & Layout

- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`
- Card padding: `p-8 md:p-10`
- Generous whitespace; no cramped sections.

## Surface Treatments

- Cards: `bg-card border border-border` with `rounded-2xl`. No heavy drop shadows — use a subtle 1px border and a hairline accent on hover.
- Dark sections: `bg-ink text-ink-foreground`.
- Decorative dividers: thin 1px `border-border` plus a small copper dot accent.
- Buttons:
  - Primary: `bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 font-medium`
  - Accent: `bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 py-3 font-medium`
  - Outline: `border border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-6 py-3`

## Imagery

- Use the `data-strk-img` system with semantic queries referencing nearby text IDs.
- Imagery should feel industrial: brushed steel, sheet metal, factory floor, precision machinery, sparks, blueprints.
- All hero and product images use ratios `16x9` (hero), `4x3` (product cards), `3x2` (about panels).

## Do's

- Use semantic color tokens (`bg-primary`, `text-foreground`), not raw hex.
- Use generous whitespace — let the engineering breathe.
- Pair a bold display headline with a muted-foreground subhead.
- Use the copper accent sparingly — never on large blocks; reserve for emphasis (eyebrows, key CTAs, dividers).
- Keep one strong visual per section.
- Use `font-mono` for model numbers and technical specifications.

## Don'ts

- No emoji icons — use `lucide-react` line icons at `w-5 h-5` or `w-6 h-6`.
- No heavy drop shadows or glassmorphism — this is engineered, not playful.
- No rainbow gradients. Copper and steel only.
- No low-contrast text — never put muted text on a dark background.
- No more than two CTA buttons per section.
- No stock photos of smiling office workers — only industrial/engineering imagery.