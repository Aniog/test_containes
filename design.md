# SSourcing China — Visual Design System

A clean, trustworthy, international B2B style. Inspired by global trade and
logistics brands. Professional, restrained, practical — no neon, no playful
gradients, no exaggerated marketing flourishes.

## Brand Palette

Add these to the Tailwind theme (via `@theme` in `index.css`) as named tokens:

- `brand-navy` `#0B2545` — primary deep navy, headings, footer
- `brand-blue` `#13315C` — secondary navy/blue
- `brand-accent` `#1F6FEB` — interactive blue, primary CTA
- `brand-accent-dark` `#1858BD` — CTA hover
- `brand-red` `#C8102E` — small accent, links to "China", inspectors
- `brand-gold` `#C9A227` — subtle premium accent (use sparingly)
- `brand-ink` `#0F172A` — body heading text
- `brand-body` `#334155` — body text
- `brand-muted` `#64748B` — secondary text
- `brand-line` `#E2E8F0` — borders, dividers
- `brand-soft` `#F1F5F9` — subtle section background
- `brand-bg` `#F8FAFC` — page background
- `brand-white` `#FFFFFF`

Do not introduce other hex codes inline. Always use these tokens.

## Typography

- Global font: Inter (Google Fonts) for UI/body.
- Display headings: Inter, weight 700–800, tight tracking.
- Body: 16px / 1.6, color `text-brand-body`.
- Headings color: `text-brand-ink` on light surfaces, `text-white` on navy.
- Use `tracking-tight` on large headings (`text-3xl` and above).

Type scale (Tailwind):
- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight`
- Card H3: `text-lg md:text-xl font-semibold`
- Eyebrow label: `text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent`

## Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-16 md:py-24`.
- Grid gaps: `gap-6 md:gap-8`.
- Cards: `rounded-xl border border-brand-line bg-white p-6 md:p-8 shadow-sm`.
- Feature blocks: subtle 1px border + soft shadow, no heavy drop shadows.
- Section separators: thin `border-brand-line`, never decorative lines.

## Buttons

- Primary: `bg-brand-accent text-white hover:bg-brand-accent-dark rounded-md px-5 py-3 font-semibold`.
- Secondary: `bg-white text-brand-ink border border-brand-line hover:border-brand-accent hover:text-brand-accent rounded-md px-5 py-3 font-semibold`.
- Ghost on dark: `text-white/90 hover:text-white underline-offset-4 hover:underline`.

## Forms

- Inputs: `w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-brand-ink placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent`.
- Labels: `text-sm font-medium text-brand-ink mb-1.5`.
- Helper / error: `text-xs text-brand-muted` / `text-xs text-red-600`.

## Visual Imagery

- Use realistic photos of: container ports, factory floors, QC inspectors with
  clipboards, packed cartons on pallets, sourcing meetings, supplier audits.
- Aspect ratios: prefer `3x2` for content thumbnails, `16x9` for hero, `4x3`
  for case study cards.
- Avoid stylized 3D renders, abstract gradients, or stock marketing clichés.

## Do's
- Generous whitespace.
- Strong typographic contrast over decorative effects.
- Stats and trust signals stated plainly, no superlatives.
- Use icons (lucide-react) at consistent sizes (`w-5 h-5` inline, `w-6 h-6`
  in cards, `w-8 h-8` for feature blocks).

## Don'ts
- No multi-color gradients in text or backgrounds.
- No emojis.
- No low-contrast text (e.g., light gray on white for body copy).
- No claims like "#1", "best", "cheapest", "guaranteed lowest".
- No hardcoded hex values in JSX — always use named tokens.
