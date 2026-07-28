# SSourcing China — Design System

## Purpose
A clean, trustworthy, international B2B website for a China-based sourcing agent. The design must feel reliable, professional, and easy to scan for busy overseas buyers.

## Color Palette

### Primary
- `--color-primary`: `#0f4c81` (deep navy) — headers, primary buttons, key trust accents
- `--color-primary-dark`: `#0b3a63` — hover states
- `--color-primary-light`: `#e8f0f8` — tinted backgrounds, badges

### Neutrals
- `--color-slate-900`: `#0f172a` — body text
- `--color-slate-700`: `#334155` — secondary text
- `--color-slate-500`: `#64748b` — muted text, placeholders
- `--color-slate-200`: `#e2e8f0` — borders
- `--color-slate-100`: `#f1f5f9` — subtle backgrounds
- `--color-slate-50`: `#f8fafc` — page background
- `--color-white`: `#ffffff` — cards, nav

### Accent
- `--color-accent`: `#f59e0b` (amber) — small highlights, icons, CTA emphasis
- `--color-accent-soft`: `#fff7ed` — amber-tinted backgrounds

### Semantic
- Success: `#16a34a`
- Error: `#dc2626`

## Typography

### Font
- Primary: `Inter`, system-ui, sans-serif
- Weights used: 400, 500, 600, 700, 800

### Type Scale
- Hero H1: `3rem` / `3.5rem` line-height on desktop, `2.25rem` mobile; font-weight 800; letter-spacing `-0.02em`
- Section H2: `2rem` / `2.5rem`; font-weight 700; letter-spacing `-0.01em`
- Card H3: `1.25rem` / `1.75rem`; font-weight 600
- Body: `1rem` / `1.7`; color slate-700
- Small/label: `0.875rem`; font-weight 500; uppercase tracking-wide

## Spacing

- Section vertical padding: `py-20 lg:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card internal padding: `p-6 lg:p-8`
- Grid gaps: `gap-6 lg:gap-8`

## Components

### Buttons
- Primary: `bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition`
- Secondary/Outline: `border border-primary text-primary bg-white hover:bg-primary-light transition`
- Large CTA: `px-8 py-4 text-lg rounded-lg`

### Cards
- White card with `rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition`
- Trust cards may use `bg-primary-light border-none`

### Forms
- Inputs: `w-full rounded-lg border-slate-300 px-4 py-3 focus:border-primary focus:ring-primary`
- Labels: `block text-sm font-medium text-slate-700 mb-1.5`

### Icons
- Lucide React icons in primary or accent color
- Icon containers: `w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center`

## Visual Style Rules

- Use a white background with navy headers; avoid dark-mode-only designs.
- Keep text contrast strong: slate-900/700 on white or light backgrounds.
- Use realistic factory, QC, and shipping imagery via `data-strk-img` / `data-strk-bg`.
- Limit color palette; rely on navy, white, slate, and small amber accents.
- Maintain generous whitespace and clear visual hierarchy.
- Avoid exaggerated claims; tone is practical and professional.
