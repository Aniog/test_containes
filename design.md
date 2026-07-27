# SSourcing China - Design Style Guide

## Brand Identity
- **Name**: SSourcing China
- **Industry**: B2B sourcing / supply chain services
- **Tone**: Professional, trustworthy, clear, practical — no exaggerated claims
- **Target Audience**: Overseas buyers, importers, procurement managers

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Inter, weights 600-800, sizes responsive
- **Body**: Inter, weight 400, size 16px base
- **Example Tailwind**: `font-sans text-neutral-900` for body, `font-sans font-bold text-primary-900` for headings

## Color Palette
- **Primary**: Deep navy blue (#1e40af) — trust, professionalism, international business
  - Primary-500: #1e40af (main brand color)
  - Primary-600: #1e3a8a (hover states)
  - Primary-900: #152354 (dark backgrounds)
- **Accent**: Burnt orange (#c2410c) — action, CTA buttons, highlights
  - Accent-500: #c2410c (CTA buttons)
  - Accent-400: #fb923c (lighter accent)
- **Neutral**: Slate scale (#0f172a to #f8fafc) — backgrounds, text, borders
  - Neutral-50: #f8fafc (light backgrounds)
  - Neutral-100: #f1f5f9 (card backgrounds)
  - Neutral-800: #1e293b (dark text)
  - Neutral-900: #0f172a (headings)

## Layout & Spacing
- **Max content width**: 1200px (`max-w-6xl mx-auto`)
- **Section padding**: `py-16 md:py-24`
- **Card padding**: `p-6 md:p-8`
- **Grid gaps**: `gap-6 md:gap-8`
- **Responsive**: Desktop-first with mobile adaptations

## Visual Style
- **Backgrounds**: White (#ffffff) main, Neutral-50 (#f8fafc) for alternating sections
- **Cards**: White background with subtle border (`border border-neutral-200`) and shadow (`shadow-sm`)
- **Buttons**: 
  - Primary CTA: `bg-accent-500 hover:bg-accent-600 text-white rounded-lg px-6 py-3 font-semibold`
  - Secondary: `bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-6 py-3 font-semibold`
  - Outline: `border-2 border-primary-500 text-primary-500 hover:bg-primary-50 rounded-lg px-6 py-3 font-semibold`
- **Icons**: Lucide React icons, size w-6 h-6 or w-8 h-8, color primary-500 or accent-500
- **Images**: Use data-strk-img system for factory/QC/shipping visuals

## Do's
- Use clean, spacious layouts with generous whitespace
- Keep text readable with high contrast (dark text on light backgrounds)
- Use navy blue for trust elements, orange for action elements
- Include realistic factory/QC/shipping imagery
- Use professional iconography from Lucide
- Ensure all mobile layouts are clean and not overcrowded

## Don'ts
- Don't use exaggerated claims or hype language
- Don't use light text on light backgrounds (low contrast)
- Don't use more than 2-3 colors prominently
- Don't use decorative gradients or flashy animations
- Don't use stock photo URLs directly — use data-strk-img system
- Don't use single-column stacking on desktop — use grid layouts
