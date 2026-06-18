# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1A4B8C` — trust, reliability (Tailwind: `[#1A4B8C]`)
- **Accent Orange:** `#E8621A` — CTA, highlights (Tailwind: `[#E8621A]`)
- **Dark Navy:** `#0D2545` — headings, footer bg (Tailwind: `[#0D2545]`)
- **Light Gray:** `#F4F6FA` — section backgrounds (Tailwind: `[#F4F6FA]`)
- **Mid Gray:** `#6B7280` — body text secondary (Tailwind: `gray-500`)
- **White:** `#FFFFFF` — cards, nav bg
- **Border:** `#E2E8F0` — subtle dividers (Tailwind: `slate-200`)

Named in tailwind.config.js:
- `primary`: #1A4B8C
- `accent`: #E8621A
- `navy`: #0D2545
- `surface`: #F4F6FA

## Typography
- **Font:** Inter (Google Fonts)
- **Headings:** font-bold, text-navy, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
- **Body:** `text-base text-gray-600 leading-relaxed`
- **Small/Caption:** `text-sm text-gray-500`
- **Labels/Badges:** `text-xs font-semibold uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-accent hover:bg-[#C9541A] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link:** `text-primary hover:text-accent font-medium underline-offset-4 hover:underline`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Badges
- `bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`

### Section Headers
- Centered, with a small colored label above the main heading
- `text-accent text-sm font-semibold uppercase tracking-widest mb-2`
- `text-3xl md:text-4xl font-bold text-navy mb-4`
- `text-gray-500 text-lg max-w-2xl mx-auto`

## Navigation
- Sticky top nav, white bg, shadow on scroll
- Logo left, links center/right, CTA button far right
- Mobile: hamburger menu

## Layout Patterns
- Hero: full-width with bg image overlay, centered text, dual CTA buttons
- Feature grids: 3-col on desktop, 1-col on mobile
- Process steps: numbered horizontal timeline on desktop, vertical on mobile
- Testimonials/Case studies: card grid

## Do's
- Use `text-navy` for all primary headings
- Use `text-gray-600` for body text
- Use `bg-surface` for alternating section backgrounds
- Always pair bg-primary/accent with white text
- Use rounded-xl for cards, rounded-lg for buttons
- Maintain 8px grid spacing

## Don'ts
- Don't use pure black (#000) for text — use navy or gray-800
- Don't use low-contrast text on colored backgrounds
- Don't use more than 2 font weights per section
- Don't use decorative fonts — Inter only
