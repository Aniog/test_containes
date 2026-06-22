# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, practical, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-900` or custom `brand-navy`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: custom `brand-red`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: custom `brand-gold`
- Background Light: `#F8FAFC` → Tailwind: `slate-50`
- Background White: `#FFFFFF`
- Surface Gray: `#F1F5F9` → Tailwind: `slate-100`
- Border: `#E2E8F0` → Tailwind: `slate-200`
- Text Primary: `#0F172A` → Tailwind: `slate-900`
- Text Secondary: `#475569` → Tailwind: `slate-600`
- Text Muted: `#94A3B8` → Tailwind: `slate-400`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), leading-relaxed
- Small: text-sm
- Caption: text-xs text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: `bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-brand-navy hover:text-brand-red font-medium transition-colors`

### Cards
- Standard: `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`
- Feature: `bg-white rounded-xl shadow-sm border border-slate-200 p-8`

### Badges
- `bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full`
- `bg-brand-navy/10 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full`

### Section Headers
- Eyebrow: `text-brand-red text-sm font-semibold uppercase tracking-widest mb-3`
- Title: `text-slate-900 font-bold`
- Subtitle: `text-slate-600 text-lg leading-relaxed max-w-2xl`

## Borders & Shadows
- Card border: `border border-slate-200`
- Card shadow: `shadow-sm` default, `shadow-md` on hover
- Section divider: `border-t border-slate-200`
- Rounded: `rounded-xl` for cards, `rounded-lg` for buttons/inputs, `rounded-full` for badges/avatars

## Do's
- Use navy for headings and primary text
- Use red sparingly for CTAs and accents
- Use gold for trust indicators and highlights
- Keep layouts clean with generous whitespace
- Use grid layouts for cards (2-3 columns on desktop)
- Always ensure text is readable against its background

## Don'ts
- Don't use dark text on dark backgrounds
- Don't use light text on light backgrounds
- Don't use more than 3 colors in a single section
- Don't use decorative fonts — keep it Inter throughout
- Don't use exaggerated marketing language
