# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, practical, B2B

## Color Palette

### Primary Colors
- `brand-navy`: #0F2A4A — Deep navy, primary brand color, headers, CTAs
- `brand-blue`: #1A5FA8 — Medium blue, links, accents, secondary CTAs
- `brand-sky`: #2E8BC0 — Sky blue, highlights, hover states
- `brand-red`: #C0392B — China red accent, used sparingly for emphasis

### Neutral Colors
- `neutral-900`: #111827 — Body text, headings
- `neutral-700`: #374151 — Secondary text
- `neutral-500`: #6B7280 — Muted text, captions
- `neutral-200`: #E5E7EB — Borders, dividers
- `neutral-100`: #F3F4F6 — Light backgrounds, cards
- `neutral-50`: #F9FAFB — Page background

### Semantic Colors
- `success`: #16A34A — Positive indicators
- `warning`: #D97706 — Caution indicators

## Typography

### Font Family
- Primary: Inter (Google Fonts) — all body and UI text
- Headings: Inter 700/800 weight

### Scale
- `text-xs`: 12px — Labels, badges
- `text-sm`: 14px — Captions, secondary info
- `text-base`: 16px — Body text
- `text-lg`: 18px — Lead text, card titles
- `text-xl`: 20px — Section subtitles
- `text-2xl`: 24px — Card headings
- `text-3xl`: 30px — Section headings
- `text-4xl`: 36px — Page headings
- `text-5xl`: 48px — Hero headline

## Spacing
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Components

### Buttons
- Primary CTA: `bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition`
- Secondary: `bg-brand-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition`
- Outline: `border-2 border-brand-navy text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition`

### Cards
- Background: `bg-white`
- Border: `border border-neutral-200`
- Shadow: `shadow-sm hover:shadow-md transition`
- Radius: `rounded-xl`

### Section Headers
- Eyebrow: `text-brand-blue text-sm font-semibold uppercase tracking-widest`
- Heading: `text-neutral-900 text-3xl md:text-4xl font-bold`
- Subheading: `text-neutral-500 text-lg mt-4 max-w-2xl`

### Navigation
- Background: `bg-white` with `shadow-sm` on scroll
- Links: `text-neutral-700 hover:text-brand-blue font-medium`
- Active: `text-brand-blue`

## Do's
- Use `brand-navy` for primary headings and hero backgrounds
- Use `brand-red` only for primary CTAs and key highlights
- Use `neutral-100` for alternating section backgrounds
- Keep generous whitespace between sections
- Use icons from lucide-react consistently
- Images should be realistic factory/QC/shipping visuals

## Don'ts
- Don't use dark text on dark backgrounds
- Don't use `brand-red` for large background areas
- Don't use more than 2 font weights in a single component
- Don't use decorative fonts — keep it clean and professional
- Don't use exaggerated claims in copy
