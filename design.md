# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B

## Color Palette
- Primary Blue: `#1a4f8a` (deep navy-blue — trust, reliability)
- Primary Blue Light: `#2563eb` (accent blue for CTAs)
- Secondary Red: `#c0392b` (China accent, used sparingly)
- Neutral Dark: `#1e293b` (headings, body text)
- Neutral Mid: `#475569` (secondary text)
- Neutral Light: `#f1f5f9` (section backgrounds)
- White: `#ffffff`
- Border: `#e2e8f0`
- Success Green: `#16a34a`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-slate-600
- Small/Caption: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-slate-600 hover:text-blue-600 font-medium transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow`

### Badges
- `bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full`
- Industry badge: `bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full`

### Section Headers
- Eyebrow label: `text-blue-600 text-sm font-semibold uppercase tracking-widest`
- Title: `text-slate-900 font-bold`
- Subtitle: `text-slate-500 text-lg max-w-2xl mx-auto`

## Layout
- Navbar: sticky top, white bg, shadow on scroll
- Footer: dark bg (#1e293b), white text
- Hero: full-width with overlay image, centered content
- Sections alternate: white and slate-50 backgrounds

## Do's
- Use consistent blue (#2563eb) for all primary CTAs
- Use navy (#1a4f8a) for navbar and trust elements
- Keep generous whitespace between sections
- Use icons from lucide-react consistently
- Cards should have subtle hover effects

## Don'ts
- No bright/neon colors
- No excessive red (only for China accent elements)
- No small text on dark backgrounds without sufficient contrast
- No cluttered layouts — keep it clean and scannable
