# SSourcing China — Design System

A professional, trustworthy, international B2B website for a China-based sourcing agent. The visual language communicates reliability, scale, and operational precision. No exaggerated claims, no gimmicks — clean, practical, corporate.

## Brand Personality
- Trustworthy, precise, international, operational
- B2B / industrial / logistics feel
- Calm authority — confident but never loud

## Color Palette

### Primary (Deep Navy — trust, authority)
- Primary background / brand: `#0B2545` (deep navy)
- Primary hover: `#0A1F38`
- Primary text on light: `#0B2545`
- Use navy for headers, footer, primary buttons, key CTAs.

### Accent (Steel Blue — action, links)
- Accent: `#1B6CA8` (steel blue)
- Accent hover: `#155A8A`
- Used for links, secondary CTAs, icons, highlights.

### Success / Trust (Teal-Green)
- Success: `#0E7C66`
- Used sparingly for trust badges, checkmarks, "verified" markers.

### Neutrals
- Page background: `#F5F7FA` (cool light gray)
- Card / surface: `#FFFFFF`
- Border: `#E2E8F0`
- Muted text: `#475569` (slate-600)
- Body text: `#1E293B` (slate-800)
- Heading text: `#0B2545`

### Warning / Amber (used very sparingly for "problems we solve")
- Amber: `#B45309`

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter 700/800, tight tracking, navy.
- Body: Inter 400/500, slate-800, 1.6 line-height for readability.
- Eyebrow / labels: Inter 600, uppercase, tracking-wider, steel-blue, small.
- Example Tailwind: `font-sans`, `text-slate-800`, `text-[#0B2545]`.

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px) for most sections; `max-w-4xl` for prose/blog.
- Section vertical padding: `py-20 md:py-28`.
- Card padding: `p-6 md:p-8`.
- Consistent gap scales: `gap-6`, `gap-8` for grids.

## Borders & Shadows
- Cards: `rounded-xl border border-slate-200 bg-white shadow-sm`.
- Hover lift: `transition hover:shadow-md hover:-translate-y-0.5`.
- Buttons: `rounded-lg`.
- No heavy shadows; keep it crisp and corporate.

## Buttons
- Primary CTA: `bg-[#0B2545] text-white hover:bg-[#0A1F38] px-6 py-3 rounded-lg font-semibold`
- Accent CTA: `bg-[#1B6CA8] text-white hover:bg-[#155A8A] px-6 py-3 rounded-lg font-semibold`
- Outline: `border border-slate-300 text-[#0B2545] hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold`
- Ghost link: `text-[#1B6CA8] hover:text-[#155A8A] font-semibold`

## Imagery
- Realistic factory, QC inspection, shipping/port, warehouse, product photography.
- Use the `data-strk-img` / `data-strk-bg` stock image system.
- Prefer wide 16x9 or 4x3 ratios for hero/section backgrounds; 4x3 for cards.
- Overlay dark gradient on hero backgrounds for text legibility.

## Do's
- Use navy + steel blue + white as the dominant palette.
- Keep generous whitespace.
- Use clear, scannable section headings with eyebrow labels.
- Make CTAs prominent and repeated logically down the page.
- Ensure all text is high-contrast and readable.

## Don'ts
- No neon colors, no gradients beyond subtle dark overlays on images.
- No playful/rounded cartoonish illustrations.
- No low-contrast gray-on-gray text for important content.
- No exaggerated marketing superlatives ("#1 best in the world").
- Don't stack single-column layouts on desktop — use multi-column grids.
