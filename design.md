# Strikingly /generators Hub Page — Design System

## Purpose
A clean, on-brand directory page for Strikingly's AI-powered website generators. This page must look and feel like existing Strikingly product pages while serving as an SEO-optimized hub.

## Brand Tokens

### Fonts
- **Headings**: Brandon Grotesque (weight 700), ALL UPPERCASE, line-height 1.2
  - Fallback: Josefin Sans (Google Fonts, weight 700)
  - Secondary fallback: Poppins (Google Fonts, weight 700)
  - Do NOT use Inter or system sans for headings
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Same heading font (Brandon Grotesque / Josefin Sans), weight 700, uppercase

### Typography Scale
- H1: 48px desktop → 32px mobile, heading font, weight 700, uppercase, line-height 1.2
- H2: 32px desktop → 26px mobile, heading font, weight 700, uppercase, line-height 1.2
- H3: 20px desktop, heading font, weight 700, uppercase, line-height 1.3
- Body: 14px, Open Sans, weight 400, line-height 1.5
- Small / tags: 11px, heading font, weight 700, uppercase

### Colors
- Brand purple: `#8159BB` (badges, accents, breadcrumb separators)
- AI gradient: `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)` — use ONLY for primary CTAs and H1 line 2
- Body text: `#636972`
- Headings: `#4B5056` for section headings, `#2E2E2F` for hero H1 line 1
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)
- Avoid black `#000000`

### Buttons
- Standard: 36px height, 4px border-radius, 14px heading font uppercase, 9px 15px padding
- Big variant: 44px height
- Gradient fill: AI gradient with **white text (#FFFFFF)** — never dark text on gradient
- Ghost: transparent bg, 1px brand-purple border, brand-purple text
- Hover: subtle opacity or scale-free lift

### Cards
- White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding
- Hover: subtle box-shadow elevation, 1px brand-purple border
- No scale or rotation transforms on hover

### Tags (category badges)
- 11px heading font uppercase, 2px 6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

### Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks, 40px between sections
- Hero: 60–80px top and bottom padding
- 10px between adjacent buttons
- Max content width: 1200px, centered
- Page padding: 20px horizontal on mobile, 40px on desktop

## Layout Rules
- Desktop: multi-column grids with generous spacing
- Tablet: reduce to 2-column grids
- Mobile: single column, comfortable touch targets
- Content container: max-width 1200px, centered, with responsive padding
- Hero: two-column on desktop, stacked on mobile (headline + CTAs first)

## Do's and Don'ts
- DO use semantic HTML (`<h1>`, `<h2>`, `<h3>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- DO make every card a real `<a>` element with descriptive accessible name
- DO include all directory entries in the initial server-rendered HTML
- DO use CSS height transitions for expand/collapse (not instant display swap)
- DON'T use fake social proof (ratings, customer counts, testimonials)
- DON'T embed a builder form on this page
- DON'T use `href="#"` placeholder links — use real URLs or render text without a link
- DON'T add extra JSON-LD schemas beyond BreadcrumbList
