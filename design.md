# ARTITECT MACHINERY — Design System

A clean, elegant industrial aesthetic for a precision sheet-metal folding machine brand. Confident, refined, user friendly.

## Visual Tone
- Industrial precision meets editorial elegance.
- Generous whitespace, strong typographic hierarchy, calm palette with one warm accent.
- Subtle micro-interactions (hover lifts, soft shadows). No flashy gradients.

## Color Palette
- Background base: `bg-stone-50` (page) and `bg-white` (cards).
- Deep ink (primary text + dark sections): `bg-neutral-900`, `text-neutral-900`.
- Mid neutral (secondary text/lines): `text-neutral-600`, `border-neutral-200`.
- Muted surface: `bg-neutral-100`.
- Accent (CTA, highlights): warm copper/amber — `bg-amber-600`, `text-amber-700`, hover `bg-amber-700`.
- Always pair dark surfaces with `text-stone-100` / `text-white`. Never use light text on light backgrounds.

## Typography
- Display + Headings: `Playfair Display` serif, `font-light` or `font-normal`, tight tracking — `tracking-tight`.
- Body + UI: `Inter` sans-serif, `font-normal`, `leading-relaxed`.
- Eyebrow labels: `text-xs uppercase tracking-[0.25em] text-neutral-500`.
- H1: `text-5xl md:text-7xl font-light`.
- H2: `text-3xl md:text-5xl font-light`.
- H3: `text-xl md:text-2xl font-medium`.
- Body: `text-base md:text-lg text-neutral-600`.

## Layout
- Container: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gaps: `gap-8 md:gap-10`.
- Use thin hairlines `border-neutral-200` to separate sections rather than heavy bars.

## Components
- Buttons primary: `inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 text-sm tracking-wide uppercase hover:bg-amber-600 transition-colors duration-300`.
- Buttons secondary: `border border-neutral-900 text-neutral-900 px-7 py-3.5 text-sm tracking-wide uppercase hover:bg-neutral-900 hover:text-white transition-colors`.
- Cards: `bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300`. Optional subtle shadow on hover: `hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]`.
- Inputs: `w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors`.
- Icons: `lucide-react`, stroke 1.5, `w-5 h-5`.

## Imagery
- Use `data-strk-img` / `data-strk-bg` system. Prefer ratios `3x2` and `4x3` for product cards, `16x9` for hero/banners.
- Imagery should look industrial, precise, clean shop-floor lighting. Steel, metal, machinery.

## Do's
- Use plenty of negative space.
- Pair serif headings with sans-serif body.
- Use uppercase eyebrow labels with wide tracking for section intros.
- Keep accent color usage sparing (CTAs, key numbers).

## Don'ts
- Don't use bright gradients, neon colors, or rounded-full giant blobs.
- Don't put low-contrast text on busy images without an overlay.
- Don't mix more than two type families.
- Don't overuse the amber accent — it should feel earned.
