# SSourcing China - Design System

## Typography
- Font family: Inter (loaded from Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- Small text: text-sm text-muted-foreground

## Colors
- Primary: #1e40af (blue-800) - Trust, authority
- Primary light: #3b82f6 (blue-500) - CTAs, links
- Secondary: #f59e0b (amber-500) - Accents, highlights
- Background: #ffffff (white) main, #f8fafc (slate-50) sections
- Text: #1e293b (slate-800) headings, #475569 (slate-600) body
- Muted: #94a3b8 (slate-400)
- Border: #e2e8f0 (slate-200)
- Success: #16a34a (green-600) - Trust indicators

## Spacing
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card gap: gap-6 md:gap-8
- Stack spacing: space-y-4 md:space-y-6

## Visual Style
- Cards: rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow
- Buttons: rounded-lg font-semibold px-6 py-3
- Primary CTA: bg-primary text-white hover:bg-primary/90
- Secondary CTA: bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white
- Section headings: text-3xl md:text-4xl font-bold text-center mb-4
- Section subheadings: text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12
- Icons: w-10 h-10 text-primary (in feature cards), w-6 h-6 inline
- Dividers: thin border-t border-border

## Navigation
- Sticky top, white bg, shadow-sm
- Logo on left, nav links center, CTA button right
- Mobile: hamburger menu with slide-out drawer
- Active link: text-primary font-semibold

## Footer
- Dark bg (slate-900), white text
- 4-column grid: Logo+desc, Quick links, Services, Contact
- Bottom bar with copyright

## Imagery
- Use data-strk-img attributes for stock images
- Aspect ratios: 16x9 for hero, 4x3 for cards, 3x2 for case studies
- Professional factory/QC/shipping/warehouse scenes

## Do's
- Use consistent spacing and alignment
- Use semantic HTML
- Use responsive grid layouts (1 col mobile, 2-4 cols desktop)
- Use clear visual hierarchy
- Keep CTAs prominent and action-oriented

## Don'ts
- No exaggerated claims or hype language
- No dark patterns or deceptive design
- No cluttered layouts
- No inconsistent spacing
- No text on low-contrast backgrounds