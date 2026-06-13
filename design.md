# ARTITECT MACHINERY — Design System

## Overview
Elegant industrial machinery manufacturer website. Dark, refined aesthetic with warm bronze/gold accents conveying precision and reliability. Clean layouts, generous whitespace, high-contrast typography.

## Color Palette

### Backgrounds
| Token          | Hex       | Tailwind      | Usage                        |
|----------------|-----------|---------------|------------------------------|
| Deep Charcoal  | `#0f1115` | `bg-[#0f1115]`| Page background, sections    |
| Dark Slate     | `#1a1d24` | `bg-[#1a1d24]`| Cards, panels, secondary bg  |
| Warm Bronze    | `#b8860b` | `bg-[#b8860b]`| Accent buttons, highlights   |
| Light Gold     | `#d4af37` | `text-[#d4af37]`| Sub-headings, hover states |
| Off-white      | `#e8e4dc` | `text-[#e8e4dc]`| Primary text                 |
| Muted Gray     | `#8a8f99` | `text-[#8a8f99]`| Secondary/muted text         |

### Accents
- Primary accent: `#b8860b` (dark goldenrod/bronze)
- Secondary accent: `#d4af37` (gold)
- Hover accent: `#e8c84a` (light gold)

## Typography

| Role        | Font              | Weight | Size (base) | Usage                      |
|-------------|-------------------|--------|-------------|----------------------------|
| Headings    | Playfair Display  | 600-800| 40-64px     | Brand name, section titles |
| Body/UI     | Inter             | 400-600| 16-18px     | Paragraphs, nav, buttons   |
| Labels      | Inter             | 500    | 12-14px     | Tags, captions, labels     |

- Line height headings: 1.1–1.2
- Line height body: 1.6
- Letter spacing: `tracking-wide` on uppercase labels

## Spacing & Layout
- Section padding: `py-20 md:py-28 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-6 lg:px-8`
- Grid gaps: `gap-8` to `gap-12`
- Card border-radius: `rounded-lg` or `rounded-xl`

## Borders & Shadows
- Card border: `1px solid rgba(255,255,255,0.08)`
- Card hover border: `border-[#b8860b]/40`
- Shadows: subtle dark glows `shadow-[0_0_40px_rgba(184,134,11,0.08)]`

## Components

### Buttons
- Primary: `bg-[#b8860b] text-white hover:bg-[#d4af37] rounded-md px-6 py-3 font-medium transition-colors`
- Outline: `border border-[#e8e4dc]/20 text-[#e8e4dc] hover:border-[#b8860b] hover:text-[#d4af37] rounded-md px-6 py-3 transition-colors`

### Cards
- Background: `#1a1d24`
- Border: `1px solid rgba(255,255,255,0.06)`
- Padding: `p-6 lg:p-8`
- Hover: subtle border glow with bronze accent

### Navigation
- Fixed top, transparent until scroll
- Background on scroll: `bg-[#0f1115]/90 backdrop-blur-md`
- Links: uppercase, `tracking-widest`, `text-sm`
- Active/hover: `text-[#d4af37]`

## Responsive
- Mobile-first approach
- Breakpoints: `sm:640px md:768px lg:1024px xl:1280px`
- Navigation collapses to hamburger on `md` and below
- Hero text scales from `text-4xl` to `text-6xl`

## Do's and Don'ts
- DO use generous whitespace between sections
- DO use the bronze/gold accent sparingly for CTAs and highlights
- DO use high-contrast text (off-white on dark)
- DON'T use bright saturated colors
- DON'T clutter layouts with dense text blocks
- DON'T use gradients for backgrounds
