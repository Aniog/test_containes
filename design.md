# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, practical, international B2B

## Color Palette
- Primary Blue: #1A4B8C (deep navy — trust, authority)
- Accent Red: #C0392B (China red — identity, energy)
- Accent Gold: #D4A017 (quality, premium)
- Background Light: #F7F9FC
- Background White: #FFFFFF
- Surface Gray: #EEF2F7
- Text Dark: #1A2332
- Text Body: #3D4F66
- Text Muted: #6B7A8D
- Border: #D8E0EA
- Success Green: #27AE60

## Tailwind Custom Colors (in tailwind.config.js)
- primary: #1A4B8C
- accent: #C0392B
- gold: #D4A017
- bgLight: #F7F9FC
- textDark: #1A2332
- textBody: #3D4F66
- textMuted: #6B7A8D
- borderColor: #D8E0EA

## Typography
- Font: Inter (Google Fonts)
- H1: text-4xl md:text-5xl lg:text-6xl font-bold text-textDark
- H2: text-3xl md:text-4xl font-bold text-textDark
- H3: text-xl md:text-2xl font-semibold text-textDark
- Body: text-base text-textBody leading-relaxed
- Small/Caption: text-sm text-textMuted
- CTA Button text: text-base font-semibold

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Primary CTA Button
- bg-accent hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors
- Shadow: shadow-md hover:shadow-lg

### Secondary Button
- border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors

### Cards
- bg-white rounded-xl shadow-sm border border-borderColor hover:shadow-md transition-shadow p-6

### Section Headers
- Centered, with a short colored underline accent below the subtitle
- Label above: text-sm font-semibold text-accent uppercase tracking-widest
- Title: H2 text-textDark
- Subtitle: text-textBody max-w-2xl mx-auto

### Navbar
- bg-white shadow-sm sticky top-0 z-50
- Logo: text-primary font-bold text-xl
- Nav links: text-textBody hover:text-primary font-medium
- CTA: accent button (compact)

### Footer
- bg-textDark text-white
- Links: text-gray-400 hover:text-white

## Do's
- Use clean whitespace and generous padding
- Use blue for trust elements, red for CTAs and highlights
- Use card grids for services and products
- Use numbered steps for process sections
- Keep forms simple and professional

## Don'ts
- No dark backgrounds on body text sections
- No neon or overly bright colors
- No exaggerated claims in copy
- No cluttered layouts
