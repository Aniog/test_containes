# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1A4B8C` — trust, authority (Tailwind: `[#1A4B8C]`)
- **Accent Red (China):** `#C0392B` — energy, China identity (Tailwind: `[#C0392B]`)
- **Accent Gold:** `#D4A017` — quality, premium (Tailwind: `[#D4A017]`)
- **Dark Navy:** `#0F2A4A` — headings, deep backgrounds
- **Light Gray BG:** `#F4F6F9` — section backgrounds
- **White:** `#FFFFFF` — cards, content areas
- **Text Primary:** `#1A1A2E` — body text
- **Text Secondary:** `#4A5568` — muted text
- **Border:** `#E2E8F0`

Named in tailwind.config.js:
- `brand-blue: #1A4B8C`
- `brand-red: #C0392B`
- `brand-gold: #D4A017`
- `brand-navy: #0F2A4A`
- `brand-gray: #F4F6F9`
- `brand-text: #1A1A2E`
- `brand-muted: #4A5568`

## Typography
- **Font:** Inter (Google Fonts)
- **H1:** `text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy`
- **H2:** `text-3xl md:text-4xl font-bold text-brand-navy`
- **H3:** `text-xl md:text-2xl font-semibold text-brand-navy`
- **Body:** `text-base text-brand-muted leading-relaxed`
- **Small/Caption:** `text-sm text-brand-muted`
- **Label/Tag:** `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-brand-blue hover:bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Accent CTA:** `bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-brand-gray p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: `bg-white`
- Light gray: `bg-brand-gray`
- Dark navy: `bg-brand-navy text-white`
- Blue gradient: `bg-gradient-to-br from-brand-navy to-brand-blue text-white`

### Badges/Tags
- `bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full`
- `bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full`

## Do's
- Use Inter font throughout
- Keep layouts clean with generous whitespace
- Use blue as the dominant brand color
- Use red sparingly for China identity accents
- Use gold for quality/trust indicators
- Ensure all text is clearly readable against backgrounds
- Use grid layouts for desktop (2-4 columns), single column for mobile

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated marketing claims
- No cluttered layouts
- No more than 3 font sizes per section
