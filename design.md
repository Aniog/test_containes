# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, practical, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `[#1A3C6E]`
- Accent Blue: `#2563EB` (action blue) → Tailwind: `blue-600`
- Accent Gold: `#D97706` (highlight, CTA warmth) → Tailwind: `amber-600`
- Background Light: `#F8FAFC` → Tailwind: `slate-50`
- Background White: `#FFFFFF`
- Surface Gray: `#F1F5F9` → Tailwind: `slate-100`
- Border: `#E2E8F0` → Tailwind: `slate-200`
- Text Primary: `#0F172A` → Tailwind: `slate-900`
- Text Secondary: `#475569` → Tailwind: `slate-600`
- Text Muted: `#94A3B8` → Tailwind: `slate-400`
- Success Green: `#16A34A` → Tailwind: `green-600`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight, text-slate-900
- Body: font-normal, text-slate-600, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl font-bold
- H2: text-3xl md:text-4xl font-bold
- H3: text-xl md:text-2xl font-semibold
- Small/Caption: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Primary Button: bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg
- Secondary Button: border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg
- CTA Button (hero): bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-lg text-lg
- Card: bg-white rounded-xl shadow-sm border border-slate-200 p-6
- Badge: bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full
- Section Label: text-blue-600 font-semibold text-sm uppercase tracking-widest

## Do's
- Use navy (#1A3C6E) for nav background and hero overlays
- Use amber-600 for primary CTA buttons to stand out
- Use blue-600 for secondary actions and links
- Keep sections alternating white / slate-50 backgrounds
- Use subtle shadows (shadow-sm, shadow-md) on cards
- Icons: Lucide React, size w-6 h-6 or w-8 h-8, color blue-600 or amber-600
- Images: use data-strk-img system for realistic factory/QC/shipping visuals

## Don'ts
- No bright red or aggressive colors
- No dark text on dark backgrounds
- No more than 2 font weights per section
- No centered body text blocks longer than 2 lines
- No magic hex values — use named Tailwind classes or config tokens
