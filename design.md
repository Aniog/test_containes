# MA (Space) — Design System

## Brand Identity
Pure Japanese minimalism. Negative space is the primary design element. Every element earns its place.

## Color Palette
All hex values are registered as named Tailwind colors.

| Name         | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| `ma-white`   | `#F7F5F2` | Primary background, page canvas            |
| `ma-paper`   | `#EDE9E3` | Secondary surfaces, cards, hover states    |
| `ma-stone`   | `#C8C0B4` | Borders, dividers, subtle lines            |
| `ma-ash`     | `#8C8680` | Muted text, captions, labels               |
| `ma-concrete`| `#5A5550` | Body text, secondary headings              |
| `ma-ink`     | `#1C1A18` | Primary headings, nav, high-contrast text  |
| `ma-wood`    | `#A07850` | Accent — used sparingly for warmth         |
| `ma-cedar`   | `#7A5C3A` | Deeper wood accent, hover on wood elements |

## Typography
- **Display / Headings**: `'Cormorant Garamond'` — elegant, architectural serif
- **Body / UI**: `'Inter'` — clean, neutral sans-serif
- **Tracking**: Headings use wide letter-spacing (`tracking-widest`) for Japanese-inspired spacing
- **Weight**: Prefer light (300) and regular (400); bold only for emphasis

### Scale
- `text-xs` — captions, labels (10–11px)
- `text-sm` — nav items, metadata (13–14px)
- `text-base` — body copy (16px)
- `text-lg` / `text-xl` — subheadings
- `text-3xl` / `text-4xl` / `text-5xl` — section titles
- `text-7xl` / `text-8xl` — hero display text

## Spacing
Generous whitespace is the signature. Use multiples of 8px.
- Section padding: `py-24 md:py-32 lg:py-40`
- Content max-width: `max-w-5xl` or `max-w-4xl` centered
- Grid gaps: `gap-8 md:gap-12`

## Borders & Lines
- Use `border-ma-stone` for all visible borders
- Prefer `border-t` or `border-b` single lines over full borders
- No box shadows — use whitespace and borders for separation

## Do's
- Use `tracking-widest` or `tracking-[0.2em]` on headings
- Use `uppercase` for nav items and labels
- Use `font-light` for large display text
- Let images breathe with generous padding
- Use `object-cover` for all images

## Don'ts
- No drop shadows
- No rounded corners (use `rounded-none` explicitly where needed)
- No gradients
- No bright accent colors
- No dense layouts — always add more whitespace
- No more than 2 typefaces on a page
