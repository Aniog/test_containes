# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing company based in China
- Target audience: overseas buyers, importers, e-commerce brands
- Tone: trustworthy, clean, international, practical

## Colors
- Primary: `brand-navy` (#1B2B4B) - trust, professionalism
- Accent: `brand-orange` (#E8652B) - CTA, energy, action
- Light: `brand-light` (#F7F9FC) - backgrounds
- Gray: `brand-gray` (#6B7B8F) - body text
- Dark: `brand-dark` (#0F1A2E) - headings
- White: `#FFFFFF` - cards, sections
- Border: `brand-border` (#E2E8F0) - subtle borders

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, text-brand-dark
- Body: font-normal, text-brand-gray
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base md:text-lg

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between elements: space-y-4 or gap-6

## Components
- Buttons: rounded-lg px-6 py-3 font-semibold transition-all
- Primary button: bg-brand-orange text-white hover:bg-orange-700
- Secondary button: border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white
- Cards: bg-white rounded-xl shadow-sm border border-brand-border p-6
- Sections alternate between bg-white and bg-brand-light

## Do's
- Use consistent spacing with Tailwind utilities
- Keep text readable with proper contrast
- Use brand-orange for CTAs only
- Use icons from Lucide React
- Keep layouts clean with generous whitespace

## Don'ts
- No arbitrary hex codes outside the defined palette
- No dark mode (light-only B2B site)
- No overly decorative elements
- No text smaller than text-sm
- No low-contrast text combinations
