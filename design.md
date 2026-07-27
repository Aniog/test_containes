# SSourcing China — Design System

## Brand Identity
Professional B2B sourcing company based in China, serving global buyers.
Tone: trustworthy, clear, international, practical.

## Color Palette
- **Primary Blue**: `#1A4B8C` (deep navy-blue — trust, professionalism) → Tailwind: `brand-blue`
- **Accent Orange**: `#E8621A` (action, energy, CTA buttons) → Tailwind: `brand-orange`
- **Light Blue**: `#EBF2FB` (section backgrounds, subtle highlights) → Tailwind: `brand-blue-light`
- **Dark Navy**: `#0F2D5A` (hero backgrounds, dark sections) → Tailwind: `brand-navy`
- **Neutral Gray**: `#F5F7FA` (page backgrounds) → Tailwind: `brand-gray`
- **Text Dark**: `#1A2332` (primary body text) → Tailwind: `brand-text`
- **Text Muted**: `#6B7A8D` (secondary text, captions) → Tailwind: `brand-muted`
- **Border**: `#D8E2EF` (dividers, card borders) → Tailwind: `brand-border`
- **White**: `#FFFFFF`

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy`
  - H2: `text-3xl md:text-4xl font-bold text-brand-text`
  - H3: `text-xl md:text-2xl font-semibold text-brand-text`
  - H4: `text-lg font-semibold text-brand-text`
- **Body**: `text-base text-brand-text leading-relaxed`
- **Muted**: `text-sm text-brand-muted`
- **Caption**: `text-xs text-brand-muted uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost**: `text-brand-blue hover:text-brand-navy font-medium underline-offset-4 hover:underline`

### Cards
- `bg-white rounded-xl shadow-sm border border-brand-border p-6 md:p-8`
- Hover: `hover:shadow-md transition-shadow`

### Section Backgrounds
- White: `bg-white`
- Light gray: `bg-brand-gray`
- Light blue: `bg-brand-blue-light`
- Dark navy (hero/CTA): `bg-brand-navy`

### Navbar
- Sticky, white background, shadow on scroll
- Logo left, nav links center/right, CTA button right
- Mobile: hamburger menu

### Badges / Tags
- `bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full`

## Do's
- Use brand-orange exclusively for primary CTAs
- Use brand-navy for hero/dark sections
- Maintain generous whitespace
- Use subtle shadows on cards, not heavy drop shadows
- Keep text contrast high — dark text on light backgrounds always

## Don'ts
- No light text on light backgrounds
- No dark text on dark backgrounds
- No more than 2 font weights per section
- No decorative fonts — Inter only
- No exaggerated claims in copy
