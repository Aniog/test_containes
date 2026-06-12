# ARTITECT MACHINERY — Design System

## Brand Identity
- **Name:** ARTITECT MACHINERY
- **Industry:** Sheet metal folding machines / industrial equipment
- **Tone:** Elegant, professional, trustworthy, user-friendly

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| navy | #0F1B2D | Primary dark backgrounds, headings |
| navy-light | #1A2B42 | Cards, secondary backgrounds |
| slate | #2D3E50 | Body text on light backgrounds |
| gold | #C8A45C | Accent, CTAs, highlights |
| gold-light | #E8D5A3 | Hover states, subtle accents |
| cream | #FAF8F5 | Page backgrounds |
| white | #FFFFFF | Card backgrounds, text on dark |
| gray-100 | #F4F5F7 | Section alternating backgrounds |
| gray-400 | #9CA3AF | Muted text, borders |
| gray-600 | #4B5563 | Secondary text |

## Typography
- **Headings:** Inter, weight 700–800, tracking tight
- **Body:** Inter, weight 400, leading relaxed
- **Accent/Labels:** Inter, weight 600, uppercase tracking wide

## Tailwind Classes (Do's)
- Backgrounds: `bg-navy`, `bg-cream`, `bg-white`, `bg-gray-100`
- Text: `text-navy`, `text-slate`, `text-white`, `text-gold`
- Buttons: `bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors`
- Cards: `bg-white rounded-xl shadow-sm border border-gray-100 p-6`
- Sections: `py-20 px-4 md:px-8 lg:px-16`
- Headings: `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`

## Spacing
- Section padding: py-20 (desktop), py-12 (mobile)
- Container max-width: max-w-7xl mx-auto
- Card gap: gap-6 md:gap-8

## Don'ts
- No arbitrary hex codes in JSX — use named Tailwind tokens
- No font sizes smaller than text-sm for body content
- No pure black (#000) — use navy or slate instead
- No harsh shadows — use shadow-sm or shadow-md
- No rounded-full on rectangular cards
