# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, practical, international B2B

## Color Palette
All hex values are registered in tailwind.config.js as named colors.

| Name         | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| brand-navy   | #0D2B4E   | Primary brand color, headings, nav bg      |
| brand-blue   | #1A5FA8   | CTAs, links, highlights                    |
| brand-sky    | #3B9EE8   | Hover states, accents                      |
| brand-gold   | #E8A020   | Trust badges, accent highlights            |
| brand-red    | #C0392B   | China accent (subtle), error states        |
| neutral-50   | #F8FAFC   | Page backgrounds                           |
| neutral-100  | #F1F5F9   | Card backgrounds, section alternates       |
| neutral-200  | #E2E8F0   | Borders, dividers                          |
| neutral-600  | #475569   | Body text secondary                        |
| neutral-800  | #1E293B   | Body text primary                          |
| neutral-900  | #0F172A   | Dark headings                              |

## Typography
- Font: Inter (Google Fonts, loaded in index.html)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
- Body: text-base text-neutral-800, leading-relaxed
- Small/caption: text-sm text-neutral-600

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-sky transition-colors
- Secondary: border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors
- CTA large: bg-brand-gold text-white px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90

### Cards
- bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow

### Section Headers
- Centered, with a small colored overline label above the H2
- Overline: text-brand-blue text-sm font-semibold uppercase tracking-widest
- H2: text-neutral-900 font-bold
- Subtitle: text-neutral-600 text-lg max-w-2xl mx-auto

### Navigation
- bg-brand-navy text-white
- Logo: white text, bold
- Links: text-white/80 hover:text-white
- Active: text-white font-semibold
- Mobile: hamburger menu

### Footer
- bg-neutral-900 text-white
- 4-column grid on desktop, stacked on mobile

## Do's
- Use brand-navy for all primary headings and nav
- Use brand-blue for all interactive elements
- Use brand-gold sparingly for trust/highlight accents
- Keep sections alternating: white and neutral-50/neutral-100
- Use generous whitespace
- Images: realistic factory, QC, shipping visuals via stock image system

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims in copy
- No decorative fonts
- No more than 3 colors per section
