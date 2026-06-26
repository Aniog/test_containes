# ARTITECT MACHINERY — Design System

Elegant, industrial, and user-friendly. The brand sells precision sheet-metal folding machinery, so the visual language must feel engineered, trustworthy, and refined — like a luxury workshop catalogue.

## Brand Voice
- Confident, precise, technical-but-approachable.
- Short, declarative headlines. Plain-English body copy.

## Color Palette
Use Tailwind v4 utilities; raw hex codes shown for reference, but use the named utilities where possible.

- Primary (Steel Ink): `slate-900` `#0f172a` — for body text, headings, primary buttons.
- Surface (Paper): `stone-50` `#fafaf9` — main page background.
- Surface alt (Cool Mist): `slate-100` `#f1f5f9` — alternating sections.
- Accent (Burnished Brass): `amber-600` `#d97706` — primary CTAs, key highlights, single accent only.
- Accent hover: `amber-700` `#b45309`.
- Border (Hairline): `slate-200` `#e2e8f0`.
- Muted text: `slate-500` `#64748b`.
- Inverse surface: `slate-900` with `stone-50` text for footer / dark sections.

Rule: only ONE accent color per screen. Never use both blue and amber; amber is the only accent.

## Typography
- Display / Headings: `Playfair Display`, serif. Tight tracking, balanced.
  - Tailwind: `font-serif` (configured via Google Font in index.html).
- Body / UI: `Inter`, sans-serif. `font-sans`.
- Scale:
  - H1 hero: `text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight`
  - H2 section: `text-3xl md:text-4xl font-serif font-medium tracking-tight`
  - H3 card: `text-xl font-serif font-medium`
  - Eyebrow: `text-xs uppercase tracking-[0.2em] text-amber-700 font-medium`
  - Body: `text-base text-slate-600 leading-relaxed`
  - Small: `text-sm text-slate-500`

## Spacing & Layout
- Page container: `max-w-7xl mx-auto px-6 lg:px-8`.
- Section vertical padding: `py-20 md:py-28`.
- Generous whitespace. Never let content touch viewport edges on desktop.
- Grid gaps: `gap-8` for cards, `gap-12` for major columns.

## Borders & Radius
- Radius: cards `rounded-2xl`, buttons `rounded-full`, inputs `rounded-lg`.
- Borders: hairline `border border-slate-200`. Never thick borders.

## Shadows
- Default card: `shadow-[0_1px_2px_rgba(15,23,42,0.04)]` resting; `hover:shadow-xl hover:-translate-y-1` on interactive.
- No neon glows. No colored shadows.

## Buttons
- Primary: `inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-stone-50 hover:bg-slate-800 transition-colors`
- Accent (use sparingly, hero CTA only): `bg-amber-600 text-white hover:bg-amber-700`
- Secondary / ghost: `rounded-full border border-slate-300 px-7 py-3.5 text-sm font-medium text-slate-900 hover:bg-slate-100`

## Cards
- Product card: white background `bg-white`, hairline border, `rounded-2xl`, image on top with `aspect-[4/3]`, content with `p-6`.
- Always set explicit text colors (`text-slate-900`, `text-slate-600`) — never rely on inherited.

## Imagery
- High-contrast, industrial photography of metal folding machines, workshop scenes, close-ups of bent sheet metal.
- Always pair stock images with the data-strk-img tagging system.
- Prefer wider ratios (`16x9`, `3x2`) for heroes and `4x3` for product cards.

## Iconography
- `lucide-react` only. Stroke weight 1.5–2. Color `text-slate-900` or `text-amber-600` for accent.

## Do's
- ✅ Use generous whitespace and clear hierarchy.
- ✅ Pair serif headings with sans-serif body.
- ✅ Anchor sections with eyebrow → headline → supporting paragraph.
- ✅ Keep one accent color (amber) per page.
- ✅ Always set explicit foreground text colors on dark/light surfaces for contrast.

## Don'ts
- ❌ No gradients other than subtle slate-50→white.
- ❌ No drop-shadows in brand color.
- ❌ No emojis in UI copy.
- ❌ No more than one accent color per page.
- ❌ Never use low-contrast text (amber on white body copy, etc.).
