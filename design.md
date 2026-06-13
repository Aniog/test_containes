# SSourcing China — Design System

A professional B2B website for a China-based sourcing agent. Clean, trustworthy, international aesthetic.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #0F4C81 | Brand blue, headings, primary buttons, nav links |
| Primary Dark | #0A3A64 | Hover states, emphasis |
| Accent | #C9963A | Gold accent for CTAs, highlights, icons |
| Accent Dark | #A67C2E | Accent hover |
| Text Primary | #1A1A2E | Body text, headings |
| Text Secondary | #4A5568 | Secondary text, captions |
| Text Muted | #718096 | Placeholder, meta text |
| Background | #FFFFFF | Page background |
| Surface | #F7F9FC | Cards, sections alternate |
| Surface Dark | #0F172A | Footer, dark sections |
| Border | #E2E8F0 | Dividers, card borders |
| Success | #059669 | Success states, trust badges |
| White | #FFFFFF | On dark backgrounds |

## Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: font-weight 700, tight letter-spacing (-0.02em)
  - H1: 48px / 56px line-height
  - H2: 36px / 44px line-height
  - H3: 24px / 32px line-height
  - H4: 20px / 28px line-height
- **Body**: font-weight 400, 16px / 28px line-height
- **Small / Caption**: 14px / 20px line-height

## Spacing

| Token | Value |
|-------|-------|
| Section Padding | 80px vertical (desktop), 48px (mobile) |
| Content Max Width | 1200px |
| Card Gap | 24px |
| Element Spacing | 16px |

## Components

### Buttons
- **Primary**: bg-primary, text-white, rounded-lg, px-6 py-3, font-semibold, hover:bg-primary-dark
- **Secondary**: bg-white, border border-primary, text-primary, rounded-lg, px-6 py-3, hover:bg-surface
- **CTA**: bg-accent, text-white, rounded-lg, px-8 py-4, font-bold, hover:bg-accent-dark

### Cards
- bg-white, rounded-xl, shadow-sm, border border-border, p-6
- Hover: shadow-md, border-accent transition

### Navigation
- Fixed top, bg-white/95 backdrop-blur, border-bottom border-border
- Logo left, links center, CTA button right
- Mobile: hamburger menu

### Hero
- Large headline, subheadline, CTA button
- Optional background image with overlay
- Padding: 120px top, 80px bottom

## Do's and Don'ts

- DO use the brand blue for headings and trust elements
- DO use the gold accent sparingly for CTAs and highlights only
- DO use white backgrounds for readability
- DO use consistent icon style (Lucide outline)
- DON'T use more than 3 colors on a card
- DON'T use gradients except in subtle hero backgrounds
- DON'T use rounded-full for main CTAs (use rounded-lg)
- DON'T use playful fonts — keep it professional
