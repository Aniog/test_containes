# SSourcing China – Design System

## Brand Identity
- Professional B2B sourcing agent based in China
- Trustworthy, international, clean, practical

## Colors (defined in tailwind.config.js)
- **Primary (navy):** `primary` — #1e3a5f (headings, nav, trust)
- **Primary light:** `primary-light` — #2d5a8e (hover states)
- **Accent (orange):** `accent` — #e8600a (CTAs, highlights)
- **Accent hover:** `accent-dark` — #c75008
- **Surface:** `surface` — #f8fafc (page backgrounds)
- **Card:** `card` — #ffffff
- **Text primary:** `text-primary` — #1a2b3d
- **Text secondary:** `text-secondary` — #4b5e73
- **Text muted:** `text-muted` — #7a8fa3
- **Border:** `border` — #e2e8f0

## Typography
- Font: Inter (Google Fonts), system-ui fallback
- Headings: font-bold, tracking-tight
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base (16px), leading-relaxed
- Small: text-sm

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- **Buttons (CTA):** bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors
- **Buttons (secondary):** border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors
- **Cards:** bg-card rounded-xl shadow-sm border border-border p-6 md:p-8
- **Section headings:** text-center mb-4, with a subtitle in text-secondary below

## Layout
- Desktop: multi-column grids (2-col, 3-col, 4-col)
- Mobile: single column stacking
- Navigation: sticky top, white bg, shadow-sm
- Footer: bg-primary text-white

## Do's
- Use plenty of whitespace
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Use stock images for factory/QC/shipping visuals

## Don'ts
- No dark mode (B2B light theme only)
- No exaggerated claims or flashy animations
- No low-contrast text
- No hardcoded hex in JSX — use Tailwind config names
