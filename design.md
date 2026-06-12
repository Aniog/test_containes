# SSourcing China — Design System

A clean, trustworthy, international B2B style. Practical, professional, no flashy gradients or exaggerated visuals.

## Brand Colors

Use named Tailwind colors (already added to `tailwind.config.js`):

- `brand` — primary deep navy `#0B2545` — headers, primary text, footer
  - `brand-700` `#13315C` — headings on light surfaces
  - `brand-500` `#1E4A8A` — links, accents
- `accent` — clear professional blue `#1F6FEB` — primary buttons, CTAs, key highlights
  - `accent-600` `#1856C2` — button hover
- `gold` — warm, restrained accent `#C8A24B` — small badges and dividers (use sparingly)
- `surface` — off-white page background `#F5F7FA`
- `card` — pure white card surface `#FFFFFF`
- `border-soft` `#E2E8F0` — hairline borders
- `muted` `#6B7280` — secondary text

Do NOT hardcode hex values inline. Always use Tailwind names like `bg-brand`, `text-brand-700`, `bg-accent`, `border-border-soft`.

## Typography

- Default font family: Inter (loaded via Google Fonts).
- Headings: `font-semibold` or `font-bold`, `tracking-tight`, color `text-brand` on light, `text-white` on dark.
- Body: `text-base text-slate-700 leading-relaxed`.
- Section eyebrow labels: `text-xs uppercase tracking-[0.2em] text-accent font-semibold`.
- Buttons: `font-semibold`, `text-sm` or `text-base`.

Heading scale:
- H1 hero: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- H2 section: `text-3xl md:text-4xl font-bold tracking-tight`
- H3 card: `text-lg md:text-xl font-semibold`

## Layout & Spacing

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Card padding: `p-6 md:p-8`.
- Gap between cards: `gap-6 md:gap-8`.
- Border radius: `rounded-xl` for cards, `rounded-lg` for buttons/inputs, `rounded-2xl` for hero panels.

## Surfaces

- Page background: `bg-surface`.
- Cards: `bg-card border border-border-soft rounded-xl shadow-sm`.
- Dark band sections (footer, CTA banner): `bg-brand text-white`.
- Subtle band sections: `bg-white` or `bg-slate-50` to alternate.

## Buttons

- Primary CTA: `inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white font-semibold px-6 py-3 hover:bg-accent-600 transition-colors`.
- Secondary: `inline-flex items-center justify-center gap-2 rounded-lg bg-white text-brand border border-border-soft font-semibold px-6 py-3 hover:border-accent hover:text-accent transition-colors`.
- Tertiary link: `inline-flex items-center gap-1 text-accent font-semibold hover:text-accent-600`.

## Forms

- Input: `w-full rounded-lg border border-border-soft bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent`.
- Label: `block text-sm font-medium text-brand mb-1.5`.
- Helper / error text: `text-xs text-muted mt-1` / `text-xs text-red-600 mt-1`.

## Imagery

- Use realistic factory floor, QC inspection, container shipping, port photos.
- Keep aspect ratios consistent within a grid (3x2 or 4x3 for product/service cards, 16x9 for hero/case).

## Do / Don't

- Do: keep generous whitespace, use a single primary blue CTA color, make headings dark navy on white.
- Do: ensure all text has clear contrast — never light gray text on white for important content.
- Don't: use gradients across hero, no neon colors, no emojis, no animated marketing visuals.
- Don't: hardcode hex codes in JSX. Use Tailwind color names defined in `tailwind.config.js`.
