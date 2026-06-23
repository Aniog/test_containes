# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
All colors are defined as Tailwind custom tokens in tailwind.config.js.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0F2A4A | Primary brand color, headings, navbar |
| `brand-blue` | #1A5FA8 | Primary CTA buttons, links, accents |
| `brand-sky` | #2E8BC0 | Secondary accents, hover states |
| `brand-gold` | #D4A017 | Trust badges, highlights, star ratings |
| `brand-light` | #F4F7FB | Section backgrounds (light) |
| `brand-white` | #FFFFFF | Card backgrounds, clean surfaces |
| `brand-gray` | #6B7280 | Body text, secondary text |
| `brand-dark` | #1C2B3A | Dark section backgrounds |

## Typography
- **Font:** Inter (Google Fonts) — weights 300, 400, 500, 600, 700, 800
- **Headings:** font-bold or font-extrabold, text-brand-navy
- **Body:** font-normal, text-gray-700
- **Small/Caption:** text-sm, text-brand-gray

### Scale
- H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold`
- H2: `text-3xl md:text-4xl font-bold`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base leading-relaxed`
- Small: `text-sm`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary:** `bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost:** `text-brand-blue hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`

### Badges
- `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold`
- Trust badge: `bg-brand-gold/10 text-brand-gold border border-brand-gold/20`
- Category badge: `bg-brand-blue/10 text-brand-blue`

### Section Headers
- Eyebrow label: `text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3`
- Title: `text-brand-navy text-3xl md:text-4xl font-bold mb-4`
- Subtitle: `text-gray-600 text-lg max-w-2xl`

## Layout
- Navbar: sticky top, white bg, shadow on scroll, logo left + nav links + CTA button right
- Footer: dark bg (brand-dark), white text, 4-column grid
- Hero: full-width with overlay image, centered content
- Sections alternate: white bg / brand-light bg

## Do's
- Use `text-brand-navy` for all headings
- Use `text-gray-700` or `text-gray-600` for body text
- Always ensure sufficient contrast (WCAG AA minimum)
- Use `rounded-xl` for cards, `rounded-lg` for buttons
- Use subtle shadows: `shadow-sm` default, `shadow-md` on hover

## Don'ts
- Don't use pure black (#000) for text — use brand-navy or gray-900
- Don't use light text on light backgrounds
- Don't use more than 3 font weights per section
- Don't use decorative fonts — Inter only
- Don't hardcode hex values in JSX — use Tailwind tokens
