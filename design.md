# ARTITECT MACHINERY - Design System

## Brand Identity
- Industrial precision meets elegant presentation
- Professional, trustworthy, high-quality feel
- Clean and user-friendly navigation

## Typography
- Headings: Inter, weight 700-800, tracking tight
- Body: Inter, weight 400-500
- Accent text: Inter, weight 600

## Colors (defined as CSS custom properties and Tailwind theme)
- **Primary (navy):** `--color-primary: #0f172a` — main brand color, headers, nav
- **Primary light:** `--color-primary-light: #1e293b` — cards, sections
- **Accent (gold):** `--color-accent: #b8860b` — CTAs, highlights, borders
- **Accent light:** `--color-accent-light: #d4a017` — hover states
- **Surface:** `--color-surface: #ffffff` — card backgrounds
- **Surface alt:** `--color-surface-alt: #f8fafc` — alternating sections
- **Text primary:** `--color-text: #0f172a` — main body text
- **Text secondary:** `--color-text-secondary: #475569` — descriptions
- **Text on dark:** `--color-text-on-dark: #f1f5f9` — text on dark backgrounds
- **Border:** `--color-border: #e2e8f0` — subtle borders

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`
- Gap between cards: `gap-6 lg:gap-8`

## Borders & Shadows
- Cards: `border border-border rounded-xl shadow-sm`
- Elevated cards: `shadow-lg rounded-xl`
- Accent border: `border-l-4 border-accent`

## Buttons
- Primary: `bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors`
- Secondary: `border-2 border-accent text-accent font-semibold px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors`

## Do's
- Use generous whitespace between sections
- Use subtle animations on scroll
- Keep text readable with proper contrast
- Use gold accent sparingly for emphasis
- Maintain consistent card heights in grids

## Don'ts
- Don't use more than 2 accent colors
- Don't use thin fonts for headings
- Don't crowd content — let it breathe
- Don't use pure black (#000) for text
- Don't use hardcoded hex values in JSX — use theme tokens
