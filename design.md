# SSourcing China – Design System

This document is the source of truth for all visual style decisions in the SSourcing China marketing site. Translate the rules below into Tailwind utility classes. Keep the look consistent across every page.

## Brand & Voice

- **Positioning**: Professional B2B China sourcing partner. Trustworthy, international, practical.
- **Tone**: Confident, clear, no exaggerations. Never promise "lowest price" or "best factory". Always explain how the process works.
- **Audience**: Overseas buyers, importers, Amazon / Shopify sellers, brand owners, procurement managers.
- **Imagery**: Realistic factory floors, container ports, QC inspections, shipping documents, business meetings. Avoid stock-photo cliches (handshakes, thumbs up, fake smiles).

## Color Palette

All colors are exposed as Tailwind utilities via `tailwind.config.js` and must be used by name (no magic hex values in class strings).

| Token | Hex | Tailwind class | Use |
| --- | --- | --- | --- |
| `navy` 950 | `#061529` | `bg-navy-950` / `text-navy-950` | Header, footer, hero overlay, primary headings on dark |
| `navy` 900 | `#0A2540` | `bg-navy-900` / `text-navy-900` | Primary brand, deep sections, footer accents |
| `navy` 700 | `#143A6B` | `bg-navy-700` / `text-navy-700` | Sub-headings, icon strokes |
| `navy` 500 | `#2E6CB5` | `text-navy-500` | Link default, link hover is `navy-700` |
| `slate` 50 | `#F6F8FB` | `bg-slate-50` | Page background for soft sections |
| `slate` 100 | `#EEF2F7` | `bg-slate-100` | Card surface, table header, alternating rows |
| `slate` 200 | `#DCE3EC` | `border-slate-200` | Default 1px dividers and borders |
| `slate` 600 | `#475569` | `text-slate-600` | Body copy, secondary text |
| `slate` 700 | `#334155` | `text-slate-700` | Default paragraph color |
| `slate` 900 | `#0F172A` | `text-slate-900` | Page H1 / H2 |
| `accent` 500 | `#E07A1F` | `bg-accent-500` / `text-accent-500` | Primary CTA background, key stats highlights |
| `accent` 600 | `#C26410` | `hover:bg-accent-600` | CTA hover |
| `accent` 50 | `#FDF3E7` | `bg-accent-50` | Accent surface (badges, callouts) |
| `success` 600 | `#15803D` | `text-success-600` | Trust badges, "verified" tags |
| `success` 50 | `#ECFDF3` | `bg-success-50` | Verified supplier / QC passed pill |
| `white` | `#FFFFFF` | `bg-white` | Card backgrounds on tinted sections |
| `black` | `#000000` | Use sparingly | Hero overlay gradients only |

**Rules**:
- Body copy on light background: `text-slate-700` (never `text-slate-400` or lighter).
- Body copy on dark background: `text-white` or `text-slate-200`. Never use a gray below `text-slate-300` on `navy-900`.
- CTA buttons: `bg-accent-500 hover:bg-accent-600 text-white`. Never use `text-slate-700` on a `bg-accent-500` button.
- All links: `text-navy-500 hover:text-navy-700`.
- Cards on tinted sections: `bg-white border border-slate-200`.

## Typography

- **Font family**: `Inter` (loaded from Google Fonts in `index.html`). Use `font-sans` (default) for everything.
- **Scale** (mobile → desktop):
  - H1: `text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
  - H2: `text-2xl md:text-4xl font-semibold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
  - Body L (lead): `text-base md:text-lg text-slate-600 leading-relaxed`
  - Body: `text-base text-slate-700 leading-relaxed`
  - Small: `text-sm text-slate-600`
  - Eyebrow label: `text-xs font-semibold uppercase tracking-[0.18em] text-navy-700`
- Line height: 1.5 default; lead paragraphs use `leading-relaxed` (1.65).
- **No italic** for body copy. Use `font-medium` for emphasis.

## Layout

- Page max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-16 md:py-24` for major sections, `py-10 md:py-14` for tighter blocks.
- Two-column layouts: `grid lg:grid-cols-2 gap-10 lg:gap-16`.
- Three or four column feature grids: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6` or `lg:grid-cols-4`.

## Components

### Buttons
- Primary CTA: `inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 text-sm md:text-base transition-colors shadow-sm hover:shadow-md`
- Secondary CTA: `inline-flex items-center justify-center gap-2 rounded-md border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-6 py-3 text-sm md:text-base transition-colors`
- Tertiary / link button: `text-navy-500 hover:text-navy-700 font-semibold inline-flex items-center gap-1`

### Cards
- Default: `bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`
- Tinted card: `bg-slate-50 border border-slate-200 rounded-xl p-6`
- Feature card with icon: icon in a 12×12 rounded `bg-accent-50 text-accent-500` box, title `text-lg font-semibold text-slate-900`, body `text-slate-600 text-sm`.

### Section heading block
- Eyebrow (small uppercase) + H2 + supporting paragraph, centered, max-w-3xl.
- On dark sections: eyebrow `text-accent-500`, H2 `text-white`, paragraph `text-slate-300`.

### Badges / Pills
- Verified: `inline-flex items-center gap-1 rounded-full bg-success-50 text-success-600 text-xs font-semibold px-2.5 py-1`
- Status neutral: `inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1`
- Accent: `inline-flex items-center gap-1 rounded-full bg-accent-50 text-accent-600 text-xs font-semibold px-2.5 py-1`

### Form fields
- Label: `text-sm font-medium text-slate-700 mb-1.5 block`
- Input: `w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20`
- Help text: `mt-1 text-xs text-slate-500`
- Error: `mt-1 text-xs text-red-600`

## Iconography

- Use **lucide-react** icons. Stroke width `1.75`. Default size `w-5 h-5` for inline, `w-6 h-6` for feature cards, `w-7 h-7` for hero stat icons.
- Always pair an icon with a label — never an icon-only button without aria-label.

## Imagery

- Use the `data-strk-img` system for all factory / QC / shipping visuals. The stock system picks contextually relevant photos.
- Provide a descriptive `alt` attribute and unique `data-strk-img-id` (suffix with a random short string per element).
- Image ratios: hero `16x9` width `1600`, feature cards `4x3` width `600`, thumbnails `3x2` width `400`, team photos `1x1` width `240`.
- All `<img>` use `src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"` as the placeholder.
- Trigger `ImageHelper.loadImages(strkImgConfig, containerRef.current)` from a `useEffect` on each page-level container.

## Trust & Content Rules

- Use real, specific numbers (e.g. "12+ years sourcing in China", "300+ supplier audits per year") instead of vague claims.
- Always describe the *how* (process step, deliverable, timeline) next to the benefit.
- Never use exclamation marks in H1/H2. Keep CTAs action-oriented ("Get a free sourcing quote", "See our process").
- Avoid superlatives like "lowest", "best", "guaranteed cheapest", "#1".

## Do / Don't

**Do**
- Show a clear next step in every section ("Talk to a sourcing manager", "Request a sample").
- Use icons + short text for process steps.
- Show real country flags or region names for international buyers.

**Don't**
- Don't use gradient text.
- Don't use drop-shadow on text.
- Don't put dark text on dark backgrounds or light text on light backgrounds.
- Don't hide the navigation on desktop.
- Don't use more than two typefaces (Inter only).
