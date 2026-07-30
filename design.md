# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, practical

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-900` or custom `brand-blue`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: custom `brand-red`
- Accent Gold: `#D4A017` (premium, quality) → Tailwind: custom `brand-gold`
- Background Light: `#F7F9FC` → Tailwind: custom `brand-bg`
- Surface White: `#FFFFFF`
- Text Dark: `#1A1A2E` → Tailwind: custom `brand-dark`
- Text Muted: `#6B7280` → Tailwind: `gray-500`
- Border: `#E5E7EB` → Tailwind: `gray-200`
- Success Green: `#16A34A` → Tailwind: `green-600`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark
- H2: text-3xl md:text-4xl font-bold text-brand-dark
- H3: text-xl md:text-2xl font-semibold text-brand-dark
- Body: text-base text-gray-600 leading-relaxed
- Small/Caption: text-sm text-gray-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md
- Secondary: border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-lg transition-all
- Ghost: text-brand-blue hover:underline font-medium

### Cards
- bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow

### Navbar
- bg-white shadow-sm sticky top-0 z-50
- Logo: text-brand-blue font-bold text-xl
- Links: text-gray-700 hover:text-brand-blue font-medium
- CTA button in nav: bg-brand-red text-white

### Section Headers
- Centered, with a small colored label above (text-brand-red text-sm font-semibold uppercase tracking-widest)
- H2 below, then a short subtitle in text-gray-500

### Trust Badges / Stats
- Large number in text-brand-blue font-bold text-4xl
- Label below in text-gray-500 text-sm

## Do's
- Use clean whitespace and generous padding
- Use subtle shadows (shadow-sm, shadow-md) not heavy drop shadows
- Use brand-blue for headings and key UI elements
- Use brand-red sparingly for CTAs and accents
- Use brand-gold for highlights and star ratings
- Keep layouts grid-based and aligned
- Use rounded-xl for cards, rounded-lg for buttons
- Images should be realistic factory/QC/shipping visuals via stock image system

## Don'ts
- No gradients that look cheap or garish
- No neon colors
- No text on very dark backgrounds without sufficient contrast
- No overcrowded layouts
- No exaggerated marketing claims
