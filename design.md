# ARTITECT MACHINERY — Visual Style Guide

## Brand Personality
ARTITECT MACHINERY builds precision sheet-metal folding machines for fabricators who care about accuracy, repeatability, and long service life. The website must feel **engineered and elegant** — like the machines themselves — yet remain **approachable and easy to navigate** for first-time buyers, procurement officers, and workshop owners.

The visual tone is **industrial premium**: think a precision-tool showroom rather than a heavy-factory catalog. Clean lines, calm palette, generous whitespace, and meticulous typography.

## Color System

| Token | Hex | Usage |
| --- | --- | --- |
| `ink` | `#0E1A2B` | Primary background for hero, footer, dark sections; main brand color |
| `ink-soft` | `#16263D` | Secondary dark surface, gradients |
| `slate` | `#334155` | Body text on light surfaces, supporting copy |
| `slate-soft` | `#64748B` | Muted text, captions, helper text |
| `copper` | `#B8763E` | Primary accent — buttons, highlights, dividers, icons |
| `copper-bright` | `#D4A574` | Secondary accent — hover states, badges |
| `copper-deep` | `#8A5028` | Pressed states, strong accent |
| `bone` | `#F7F3EC` | Page background on light sections |
| `cream` | `#FAF8F4` | Card surfaces, subtle elevation |
| `paper` | `#FFFFFF` | Card surfaces on tinted backgrounds |
| `line` | `#E5E0D6` | Borders, dividers on light surfaces |
| `line-strong` | `#C9C0B0` | Stronger dividers, table lines |
| `success` | `#15803D` | Confirmation states |
| `danger` | `#B91C1C` | Validation errors |

**Contrast rules:** never place light text on `bone`/`cream`. Never use `copper-bright` for body text — reserve it for accents only. All headings on light surfaces use `ink`. All body text uses `slate`. All muted text uses `slate-soft`.

## Typography

- **Display headings**: Playfair Display (serif) — elegant, refined, recalls engineered blueprints.
- **UI / body / nav**: Inter (sans-serif) — friendly, highly legible at all sizes.
- **Numerals in stats**: Inter with tabular-nums tracking for clean alignment.
- **Mono accents** (model codes like "AM-DF 320"): JetBrains Mono for a technical feel.

**Type scale** (Tailwind classes used in components):

- `text-7xl md:text-8xl font-display font-medium` — hero headline
- `text-4xl md:text-6xl font-display` — section titles
- `text-2xl md:text-3xl font-display` — sub-section titles
- `text-lg md:text-xl font-medium` — card titles
- `text-base md:text-lg` — body paragraphs
- `text-sm uppercase tracking-[0.2em]` — eyebrow labels (e.g. "OUR MACHINES")
- `text-xs tracking-widest uppercase` — small captions

## Spacing & Layout

- Section vertical padding: `py-24 md:py-32` for hero/major sections, `py-16 md:py-24` for standard sections.
- Container max width: `max-w-7xl` for full sections, `max-w-5xl` for content-heavy sections (FAQ, form), `max-w-3xl` for narrow editorial text.
- Grid gap: `gap-8` between cards on desktop, `gap-6` on mobile.

## Visual Elements

- **Cards** (products, stats): `bg-cream border border-line rounded-sm` with subtle shadow `shadow-[0_1px_2px_rgba(14,26,43,0.04)]`. On hover lift to `shadow-[0_12px_30px_rgba(14,26,43,0.08)] -translate-y-1`.
- **Buttons**:
  - Primary: `bg-copper text-ink hover:bg-copper-bright active:bg-copper-deep` with `font-medium tracking-wide uppercase text-sm`.
  - Secondary (on dark): `border border-copper/40 text-cream hover:bg-copper/10`.
  - Ghost: `text-ink underline-offset-4 hover:underline`.
- **Eyebrow**: short uppercase label in `text-copper tracking-[0.3em] text-xs` placed above headings, with a thin `bg-copper h-px w-10` rule beside it.
- **Section dividers**: thin copper hairline `border-t border-copper/30`.
- **Iconography**: lucide-react icons, 1.5px stroke, sized `h-5 w-5` inline and `h-7 w-7` for feature highlights.
- **Imagery**: stock images via `data-strk-img-*` with industrial / sheet-metal / factory motifs. Hero uses a 16:9 wide backdrop; product cards use 4:3 with the machine as the focal point.

## Do's
- Lead every section with an eyebrow + title + subtitle pattern.
- Use generous whitespace and let typography breathe.
- Pair every accent color (`copper`) with a neutral to avoid clatter.
- Keep the product grid visually balanced — equal heights, equal padding.
- Provide clear primary CTA on every section ("Request a Quote", "Download Brochure").

## Don'ts
- No emojis as icons.
- No gradients on body text.
- No more than two accent colors per surface.
- No hardcoded hex values inside components — always use theme tokens.
- No light-gray text on `bone` or `cream` backgrounds — it disappears.
- No stock photos of smiling people — keep imagery industrial and authentic.
