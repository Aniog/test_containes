# ARTITECT MACHINERY — Design System

## Brand Identity
- Industrial precision meets modern elegance
- Professional, trustworthy, high-quality machinery brand
- Clean layouts with generous whitespace

## Typography
- Headings: Inter, font-weight 700–800, tracking tight
- Body: Inter, font-weight 400, leading relaxed
- Hero headings: text-5xl to text-6xl on desktop, text-3xl on mobile
- Section headings: text-3xl to text-4xl
- Body text: text-base to text-lg

## Color Palette (Tailwind config names)
- **brand-navy**: #0f1b2d — primary dark, used for headers and hero backgrounds
- **brand-steel**: #1e3a5f — secondary dark blue
- **brand-accent**: #c8a961 — gold accent for CTAs, highlights, borders
- **brand-light**: #f8f9fb — light background sections
- **brand-white**: #ffffff — cards, content areas
- **brand-gray**: #6b7b8f — muted body text
- **brand-dark-text**: #1a2332 — primary text on light backgrounds

## Spacing
- Section padding: py-20 to py-24 on desktop, py-12 on mobile
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 to p-8
- Component gaps: gap-6 to gap-8

## Borders & Shadows
- Cards: rounded-xl shadow-sm border border-gray-100
- Buttons: rounded-lg
- Hover cards: shadow-md transition-shadow duration-300
- Accent borders: border-l-4 border-brand-accent

## Buttons
- Primary: bg-brand-accent text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition
- Secondary: border-2 border-brand-accent text-brand-accent px-6 py-3 rounded-lg hover:bg-brand-accent hover:text-brand-navy transition
- On dark backgrounds: same primary style stands out well

## Do's
- Use generous whitespace between sections
- Use the gold accent sparingly for emphasis
- Keep text highly readable with strong contrast
- Use subtle animations on scroll/hover
- Maintain consistent section structure

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements together
- Don't use more than 2 font weights per section
- Don't use arbitrary hex codes outside the defined palette
