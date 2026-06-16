# ARTITECT MACHINERY — Visual Design System

## Brand Essence
Industrial luxury meets precision engineering. The site should feel like the
cabinet of a high-end European machine tool builder: confident, restrained,
and engineered down to the last detail. "Elegant but user-friendly" means
generous whitespace, calm typography, and a clear visual hierarchy that guides
visitors through specs and benefits without overwhelming them.

## Color Palette
Treat these as semantic tokens, never hardcode hex in JSX.

| Token | Hex | Tailwind | Use |
| --- | --- | --- | --- |
| `ink` | `#0b0d10` | `bg-ink text-white` | Page background (dark sections) |
| `ink-2` | `#11141a` | `bg-ink-2` | Alternate dark surface |
| `ink-3` | `#1a1f29` | `bg-ink-3` | Card / inset dark surface |
| `bone` | `#f5f3ee` | `bg-bone text-ink` | Light section background |
| `paper` | `#faf8f3` | `bg-paper text-ink` | Soft warm light background |
| `line` | `#262b34` | `border-line` | Dark border |
| `line-2` | `#e6e1d6` | `border-line-2` | Light border |
| `brass` | `#c89b3c` | `text-brass bg-brass border-brass` | Primary accent (signature) |
| `brass-2` | `#a07d2a` | `text-brass-2` | Accent hover / pressed |
| `steel` | `#8a8f99` | `text-steel` | Secondary text on dark |
| `ash` | `#5a5f6a` | `text-ash` | Muted text on light |

Accent rule: brass is for highlights, not large fills. Use it for icons,
underlines, badges, and small CTAs. Never paint a full-width hero in brass.

## Typography
- Primary: **Inter** (already loaded). Use `font-sans` (default).
- Display headlines may also use `font-display` (Inter at weight 700/800) for
  tighter tracking.
- Base body: 16px / 1.6 line height.
- Section eyebrow labels: 12-13px uppercase tracking-[0.2em] text-brass or
  text-steel.

## Spacing & Layout
- Page max width: `max-w-7xl` (1280px) with `px-6 md:px-10`.
- Section vertical rhythm: `py-24 md:py-32` for major sections, `py-16 md:py-20`
  for secondary.
- Cards: `rounded-2xl` with `border border-line` (dark) or `border-line-2`
  (light) and `shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]` on hover.
- Use a 12-column grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## Components
- **Buttons**:
  - Primary: `bg-brass text-ink hover:bg-brass-2` with `rounded-full px-6 py-3`.
  - Secondary on dark: `border border-line text-white hover:bg-white/5`.
  - Secondary on light: `border border-line-2 text-ink hover:bg-ink hover:text-white`.
- **Eyebrow**: `text-xs uppercase tracking-[0.25em] text-brass` with a short
  hairline beside it.
- **Section title**: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`.
- **Card title**: `text-xl font-semibold`.
- **Stat number**: `text-5xl md:text-6xl font-semibold tracking-tight text-white`
  with a `text-brass` small unit suffix.

## Iconography
- Use `lucide-react` line icons. Stroke width 1.5 for product cards,
  1.75 for features. Icon color: `text-brass` on dark, `text-brass-2` on light.

## Imagery
- All product / hero / background imagery uses the `data-strk-img` /
  `data-strk-bg` system; do not paste external URLs.
- Wrap each section with a stable `containerRef` and call
  `ImageHelper.loadImages` in a `useEffect`.
- Photo ratio preferences: hero `16x9`, product `4x3`, detail `3x2`.

## Do / Don't
- DO alternate dark (`ink`) and light (`bone`/`paper`) sections for rhythm.
- DO use generous whitespace and tight tracking on display text.
- DO keep a single brass accent per visual area.
- DON'T use bright primary colors (red/blue/green) for branding.
- DON'T use gradients on text; they hurt legibility.
- DON'T stack more than two type sizes in a single block.
- DON'T ship the Vite default template screens.

## Motion (optional / tasteful)
- Fade + 8px upward translate on section enter via `motion-safe` CSS only.
- Buttons get a 150ms color transition.
- No carousel autoplay; keep interactions user-driven.
