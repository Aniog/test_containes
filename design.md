# SSourcing China - Design System

## Brand Identity
Professional B2B sourcing agent website. Clean, trustworthy, international feel.

## Colors (Tailwind config names)
- **primary**: `#1e3a5f` (deep navy) — headers, nav, trust elements
- **primary-light**: `#2d5a8e` — hover states, secondary headings
- **accent**: `#e8792b` (warm orange) — CTAs, highlights, action elements
- **accent-hover**: `#d06820` — CTA hover state
- **neutral-50**: `#f8fafc` — page backgrounds, alternating sections
- **neutral-100**: `#f1f5f9` — card backgrounds
- **neutral-200**: `#e2e8f0` — borders, dividers
- **neutral-600**: `#475569` — body text
- **neutral-800**: `#1e293b` — headings, strong text
- **neutral-900**: `#0f172a` — footer background
- **white**: `#ffffff` — card surfaces, clean sections

## Typography
- Font: Inter (Google Fonts), system-ui fallback
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-neutral-600, leading-relaxed
- Small/caption: text-sm text-neutral-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Buttons (primary): bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors
- Buttons (secondary): border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors
- Cards: bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow
- Badges: inline-flex px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary

## Do's
- Use generous whitespace between sections
- Keep text concise and scannable
- Use icons (Lucide) to support text, not replace it
- Alternate section backgrounds (white / neutral-50)
- Use subtle shadows on cards (shadow-sm)

## Don'ts
- No dark mode (B2B audience expects light professional look)
- No gradients on text
- No rounded-full on large containers
- No excessive animations
- No placeholder "Lorem ipsum" text
