# SSourcing China — Design System

## Brand Identity
Professional, trustworthy, international B2B sourcing company based in China.
Clean, modern, no clutter. Conveys reliability and expertise.

## Color Palette
- **Primary (Brand Blue):** `brand-700` (#1e3a8a) — headers, nav, primary buttons
- **Primary Dark:** `brand-900` (#0f1f4a) — hero backgrounds, footer
- **Primary Mid:** `brand-600` (#1d4ed8) — hover states, links
- **Accent (Amber):** `accent-500` (#d97706) — CTAs, highlights, badges
- **Accent Light:** `accent-400` (#f59e0b) — hover on CTAs
- **Neutral Dark:** `neutral-800` (#1e293b) — body text
- **Neutral Mid:** `neutral-600` (#475569) — secondary text
- **Neutral Light:** `neutral-100` (#f1f5f9) — section backgrounds
- **White:** `#ffffff` — cards, main content areas

## Typography
- **Font:** Inter (Google Fonts)
- **Display/H1:** `text-4xl md:text-5xl lg:text-6xl font-bold` — hero headlines
- **H2 Section:** `text-3xl md:text-4xl font-bold` — section titles
- **H3 Card:** `text-xl font-semibold` — card titles
- **Body:** `text-base font-normal` — paragraphs
- **Small/Caption:** `text-sm text-neutral-500` — labels, captions
- **All headings:** `text-neutral-800` on light bg, `text-white` on dark bg

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Outline:** `border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: default content sections
- `bg-neutral-50`: alternating sections
- `bg-brand-900`: dark hero/CTA sections (white text)
- `bg-brand-700`: mid-dark sections (white text)

### Navbar
- Sticky, white background, `shadow-sm`
- Logo: brand name in `brand-700`, bold
- Links: `text-neutral-700 hover:text-brand-600`
- CTA button in nav: accent color

### Footer
- Dark background `bg-brand-900`, white text
- 4-column grid on desktop, stacked on mobile

## Do's
- Use consistent 8px spacing grid
- Keep text readable: min contrast ratio 4.5:1
- Use Inter font throughout
- Subtle shadows on cards, not heavy drop shadows
- Professional photography via stock image system

## Don'ts
- No bright/neon colors
- No decorative fonts
- No text on low-contrast backgrounds
- No exaggerated marketing claims
- No cluttered layouts
