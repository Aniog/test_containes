# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
Primary brand colors defined in Tailwind via CSS variables in index.css.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0F2A4A | Primary headings, navbar background, footer |
| `brand-blue` | #1A5FA8 | Primary CTA buttons, links, accents |
| `brand-sky` | #2E8BC0 | Secondary accents, hover states |
| `brand-gold` | #D4A017 | Trust badges, highlights, star ratings |
| `brand-light` | #F4F7FB | Section backgrounds (light) |
| `brand-white` | #FFFFFF | Card backgrounds, content areas |
| `brand-gray` | #6B7280 | Body text, secondary text |
| `brand-dark` | #1F2937 | Primary body text |

## Typography
- Font family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), leading-relaxed
- Small/caption: text-sm

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: `bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-brand-blue hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Eyebrow label: `text-brand-blue text-sm font-semibold uppercase tracking-widest`
- Title: `text-brand-navy font-bold`
- Subtitle: `text-brand-gray text-lg leading-relaxed`

### Navbar
- Background: `bg-brand-navy`
- Logo text: white, bold
- Nav links: `text-gray-300 hover:text-white`
- CTA button: `bg-brand-blue hover:bg-brand-sky text-white`

### Footer
- Background: `bg-brand-navy`
- Text: `text-gray-400`
- Headings: `text-white`

## Do's
- Use consistent section padding (py-16 md:py-24)
- Always pair dark backgrounds with light text
- Use brand-navy for all major headings
- Use brand-blue for all interactive elements
- Keep cards clean with subtle shadows
- Use brand-light (#F4F7FB) for alternating section backgrounds

## Don'ts
- Don't use pure black (#000) for text — use brand-dark (#1F2937)
- Don't use low-contrast text on colored backgrounds
- Don't use more than 2 font weights in a single component
- Don't use inline styles — use Tailwind classes only
- Don't use arbitrary hex values in JSX — use named Tailwind tokens
