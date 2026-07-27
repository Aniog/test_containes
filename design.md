# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China sourcing agent.

## Visual Direction
- Clean, spacious layouts with plenty of white/very-light gray breathing room.
- Professional, business-like, not flashy. Avoid exaggerated marketing claims.
- Trust is communicated through clear typography, real-world imagery, and subtle trust badges.

## Color Palette
- Primary: `#0f4c81` (deep trustworthy blue) — CTAs, headings, key accents.
- Primary dark: `#083763` — hover states.
- Secondary: `#f59e0b` (warm amber) — highlights, small emphasis, icons.
- Neutral background: `#f8fafc` (very light slate gray).
- Surface: `#ffffff`.
- Text primary: `#0f172a` (slate 900).
- Text secondary: `#475569` (slate 600).
- Muted: `#94a3b8` (slate 400).
- Success: `#16a34a`.

## Typography
- Font family: Inter, system-ui, sans-serif.
- Headings: 700–800 weight, tight line-height.
- Body: 400 weight, 1.6 line-height for readability.
- Section labels: uppercase, letter-spacing wide, small, primary color.

## Spacing
- Sections: `py-20` (80px) vertical, `px-4 sm:px-6 lg:px-8 xl:px-12` horizontal.
- Max content width: `max-w-7xl` centered.
- Card spacing: `p-6` to `p-8`, `gap-6`/`gap-8` grids.

## Components
- Buttons: rounded-lg, primary blue with white text, hover darker blue. Secondary button white/blue border.
- Cards: white background, rounded-xl, subtle shadow `shadow-sm`, border `border-slate-100`.
- Forms: rounded-lg inputs with slate-200 border, focus ring primary blue.
- Icons: Lucide React, consistent 24px/20px sizes, primary or secondary color.

## Imagery
- Realistic factory, QC inspection, shipping/logistics, and product/category visuals.
- Use the stock image tagging system (`data-strk-img`, `data-strk-bg`) with descriptive queries based on nearby text.
- Hero background uses `data-strk-bg` referencing hero title and subtitle.

## Do's and Don'ts
- Do use generous whitespace and readable contrast.
- Do use clear CTAs repeated naturally through the page.
- Don't use exaggerated superlatives.
- Don't use low-contrast text on light backgrounds.
- Don't clutter sections; keep one message per section.
