# SSourcing China Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.

## Color Palette

- **Primary**: `#0f4c81` (deep trust blue) — headings, CTAs, key accents.
- **Primary Dark**: `#0a3357` — hover states.
- **Secondary**: `#e4a11b` (amber) — small highlights, icons, badges.
- **Background**: `#f8fafc` (slate-50) — page background.
- **Surface**: `#ffffff` — cards, nav, footer top.
- **Text Primary**: `#0f172a` (slate-900) — body headings.
- **Text Secondary**: `#475569` (slate-600) — paragraphs, captions.
- **Text Muted**: `#64748b` (slate-500) — placeholders, metadata.
- **Border**: `#e2e8f0` (slate-200) — card borders, dividers.
- **Success**: `#15803d` — confirmations.
- **Danger**: `#b91c1c` — errors.

## Typography

- Font: `Inter` (loaded in `index.html`).
- Headings: `font-semibold` to `font-bold`, tight line-height (`leading-tight`).
- Body: `text-base` (`1rem`), `leading-relaxed`.
- Small text: `text-sm`.

## Spacing

- Section vertical padding: `py-16 md:py-24`.
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Card padding: `p-6 md:p-8`.
- Grid gaps: `gap-6 md:gap-8`.

## Components

### Buttons

- Primary: `bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition`.
- Outline: `border-2 border-primary text-primary font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition`.

### Cards

- White background, `rounded-xl`, `shadow-sm`, `border border-slate-200`.
- Hover: subtle shadow lift.

### Forms

- Inputs: `w-full rounded-lg border-slate-300 px-4 py-3 focus:border-primary focus:ring-primary`.
- Labels: `block text-sm font-medium text-slate-700 mb-1`.

## Imagery

- Use stock-image tagging with realistic factory, QC, shipping, and product visuals.
- Prefer background images for hero and section headers.
- Maintain 16:9 or 4:3 ratios for content images.

## Do's and Don'ts

- Do use generous whitespace and clear hierarchy.
- Do use high-contrast text on every surface.
- Don't use decorative emojis or exaggerated marketing language.
- Don't rely on inherited colors; explicitly set foreground colors.
