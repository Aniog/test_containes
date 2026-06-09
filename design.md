# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, trustworthy, practical, international B2B

## Color Palette
- **Primary Blue**: `#1a4f8a` — trust, reliability (Tailwind: `[#1a4f8a]`)
- **Accent Red**: `#c0392b` — China accent, urgency (Tailwind: `[#c0392b]`)
- **Light Blue**: `#e8f0fb` — section backgrounds
- **Dark Navy**: `#0d2b4e` — headings, footer
- **Neutral Gray**: `#f4f6f9` — alternating section bg
- **Text Dark**: `#1a2332` — body text
- **Text Muted**: `#5a6a7e` — secondary text
- **White**: `#ffffff`
- **Border**: `#dde3ec`

Named in tailwind.config.js:
- `primary`: #1a4f8a
- `primary-dark`: #0d2b4e
- `accent`: #c0392b
- `light-blue`: #e8f0fb
- `neutral-bg`: #f4f6f9
- `text-dark`: #1a2332
- `text-muted`: #5a6a7e
- `border-color`: #dde3ec

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight`
- **H2**: `text-3xl md:text-4xl font-bold text-primary-dark`
- **H3**: `text-xl md:text-2xl font-semibold text-primary-dark`
- **Body**: `text-base text-text-dark leading-relaxed`
- **Small/Muted**: `text-sm text-text-muted`
- **Label/Tag**: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-accent hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Outline**: `border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-border-color p-6 hover:shadow-md transition-shadow`

### Section Headers
- Centered label in accent color above H2
- H2 in primary-dark
- Subtitle in text-muted below

### Navigation
- White background, sticky top
- Logo left, nav links center/right
- CTA button in accent color

### Hero
- Dark navy gradient background
- White headline text
- Accent CTA button + secondary outline button
- Background image overlay

## Do's
- Use consistent 8px spacing grid
- Keep cards uniform height in grids
- Use icons from lucide-react
- Ensure all text is readable (min 4.5:1 contrast)
- Use section alternating bg: white / neutral-bg / light-blue

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims in copy
- No decorative fonts
- No more than 2 font weights per section
