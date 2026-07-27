# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A4B8C` (deep navy-blue — trust, reliability) → Tailwind: `blue-900` or custom `brand-blue`
- Accent Orange: `#E8600A` (action, energy, CTA) → custom `brand-orange`
- Light Blue: `#EBF2FB` (section backgrounds) → custom `brand-blue-light`
- Dark Text: `#1A2332` → custom `brand-dark`
- Body Text: `#4A5568` → `gray-600`
- Muted Text: `#718096` → `gray-500`
- Border: `#E2E8F0` → `gray-200`
- White: `#FFFFFF`
- Success Green: `#2D7D46` → `green-700`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark`
  - H2: `text-3xl md:text-4xl font-bold text-brand-dark`
  - H3: `text-xl md:text-2xl font-semibold text-brand-dark`
  - H4: `text-lg font-semibold text-brand-dark`
- Body: `text-base text-gray-600 leading-relaxed`
- Small: `text-sm text-gray-500`
- Caption: `text-xs text-gray-400 uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary CTA: `bg-brand-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-brand-blue hover:underline font-medium`

### Cards
- Standard: `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`
- Feature: `bg-white rounded-xl shadow-sm border border-gray-100 p-8`
- Highlight: `bg-brand-blue-light rounded-xl p-6`

### Navigation
- Sticky top navbar: `bg-white shadow-sm`
- Nav links: `text-gray-700 hover:text-brand-blue font-medium transition-colors`
- Active: `text-brand-blue font-semibold`

### Badges
- Service badge: `bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full`
- Trust badge: `bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full`

### Sections
- White section: `bg-white`
- Light section: `bg-gray-50`
- Brand light section: `bg-brand-blue-light`
- Dark section: `bg-brand-dark text-white`

## Do's
- Use consistent 8px spacing grid
- Use Inter font throughout
- Use brand-blue for headings and trust elements
- Use brand-orange only for CTAs and key highlights
- Use generous whitespace for B2B professional feel
- Use subtle shadows on cards, not heavy drop shadows
- Keep images with rounded corners (`rounded-xl`)
- Use numbered steps for process sections

## Don'ts
- Don't use bright/neon colors
- Don't use decorative fonts
- Don't use heavy gradients (subtle only)
- Don't crowd sections — keep breathing room
- Don't use red for anything except errors
- Don't use all-caps for body text
