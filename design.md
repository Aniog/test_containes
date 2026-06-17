# ARTITECT MACHINERY — Visual Style Guide

A precision-engineered, elegant aesthetic for an industrial sheet-metal-folding machinery brand. The look should feel premium, confident, and quietly technical — never cluttered, never cartoonish.

## Brand Voice
- Premium industrial: measured, confident, refined.
- User-friendly: short sentences, plain English, clear CTAs.
- Avoid hype. Prefer specifics ("4 mm mild steel", "3200 mm bed length").

## Color Palette
Use Tailwind classes only. Build the palette from neutrals plus a single accent.

- Primary surface (page bg): `bg-stone-50` / `bg-white`
- Deep ink (headings, dark sections): `bg-neutral-950`, text `text-neutral-50`
- Body text: `text-neutral-700`
- Muted text: `text-neutral-500`
- Borders / hairlines: `border-neutral-200`
- Accent (single, used sparingly for CTAs and key highlights): `bg-amber-500` / `text-amber-500` / `hover:bg-amber-400`
- Accent ink (text on amber): `text-neutral-950`

Do:
- Use neutrals for 90% of the layout.
- Use amber accent only for primary CTAs, key numbers, and small marks.

Don't:
- Don't use blue, green, or red as primary colors.
- Don't use gradients except a very subtle dark vignette in hero sections.
- Don't put light text on amber backgrounds — always use `text-neutral-950` on amber.

## Typography
Fonts loaded via Google Fonts in `index.html`:
- Display / headings: `Fraunces` (serif, low contrast, slight optical size). Class: `font-serif` mapped to Fraunces via Tailwind's default serif stack override done inline using `style={{fontFamily:'Fraunces, serif'}}` is acceptable, but prefer a utility class `font-display` defined globally. We will use a custom CSS variable approach via the html font-family for simplicity and use `font-serif` Tailwind class for display text.
- Body / UI: `Inter` (sans, neutral). This is the default set in `index.css`.

Sizes:
- Hero H1: `text-5xl md:text-7xl` `tracking-tight` `font-light` (Fraunces light feels elegant)
- Section H2: `text-3xl md:text-5xl` `tracking-tight` `font-light`
- Section eyebrow: `text-xs uppercase tracking-[0.25em] text-neutral-500`
- Body: `text-base md:text-lg leading-relaxed text-neutral-700`
- Small / caption: `text-sm text-neutral-500`

Do:
- Mix serif headings with sans body for editorial feel.
- Use generous letter-spacing on small uppercase labels.

Don't:
- Don't bold large display headings — keep them light or regular weight.
- Don't use more than two type families.

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-6 lg:px-10`
- Section vertical rhythm: `py-20 md:py-32`
- Grid gaps: `gap-8 md:gap-12`
- Generous whitespace; never crowd content.

## Borders, Shadows, Radius
- Radius: small and architectural. Use `rounded-none` for hero plates, `rounded-md` for cards, `rounded-full` only for pill tags and small icons.
- Shadows: avoid heavy shadows. Prefer hairline `border border-neutral-200` and on hover a subtle `shadow-sm`.
- Hairline dividers: `h-px bg-neutral-200`.

## Buttons
Primary: `inline-flex items-center gap-2 bg-neutral-950 text-neutral-50 px-6 py-3 text-sm tracking-wide hover:bg-neutral-800 transition`
Accent: `inline-flex items-center gap-2 bg-amber-500 text-neutral-950 px-6 py-3 text-sm tracking-wide hover:bg-amber-400 transition`
Ghost: `inline-flex items-center gap-2 border border-neutral-300 text-neutral-900 px-6 py-3 text-sm tracking-wide hover:border-neutral-900 transition`

Always include an arrow icon `→` or Lucide `ArrowRight` after primary CTA labels.

## Imagery
- Photography: industrial, factory, polished metal, sheet metal panels, CNC machinery, dramatic lighting.
- Use stock-image tags (`data-strk-img`, `data-strk-bg`) — never hardcoded URLs.
- Prefer landscape ratios for product shots (`3x2`, `16x9`).

## Component Patterns
- Eyebrow + Headline + Lede stack at the start of each section.
- Two-column splits (text left, image right) on desktop, stacked on mobile.
- Product cards: image on top, eyebrow + title + 2-line spec list + thin link "See specs →".
- Stat blocks: oversized number in serif, label in small uppercase below.

## Contrast & Visibility (must)
- Always pair foreground/background explicitly.
- Never light text on light surfaces. Never dark text on dark surfaces.
- Body text on white surfaces: `text-neutral-700` minimum.
- Body text on `bg-neutral-950`: `text-neutral-300`.
- Captions on dark: `text-neutral-400`.

## Don'ts (summary)
- No emojis in UI.
- No neon colors.
- No drop-shadows on text.
- No multi-color gradient buttons.
