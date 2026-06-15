# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery
- **Tone:** Authoritative, precise, trustworthy, yet approachable

---

## Color Palette

| Name | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Steel Navy | #0D1B2A | `bg-[#0D1B2A]` | Primary dark background, navbar |
| Industrial Blue | #1A3A5C | `bg-[#1A3A5C]` | Section backgrounds, cards |
| Accent Gold | #C9A84C | `text-[#C9A84C]` | CTAs, highlights, borders |
| Light Gold | #E8C97A | `text-[#E8C97A]` | Hover states, subtle accents |
| Steel Gray | #8A9BB0 | `text-[#8A9BB0]` | Secondary text, muted labels |
| Off White | #F4F6F9 | `bg-[#F4F6F9]` | Light section backgrounds |
| Pure White | #FFFFFF | `text-white` | Body text on dark backgrounds |
| Charcoal | #2C3E50 | `bg-[#2C3E50]` | Card backgrounds on light sections |

---

## Typography

- **Primary Font:** Montserrat (headings — bold, uppercase for brand feel)
- **Secondary Font:** Inter (body text — clean, readable)
- **Google Fonts embed:** Montserrat (weights 400, 600, 700, 800) + Inter (weights 300, 400, 500, 600)

### Type Scale
- Hero heading: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

---

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-12`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-8`
- Gap between cards: `gap-8`

---

## Components

### Buttons
- **Primary CTA:** `bg-[#C9A84C] text-[#0D1B2A] font-bold px-8 py-3 rounded-none tracking-widest uppercase hover:bg-[#E8C97A] transition-colors`
- **Secondary/Outline:** `border-2 border-[#C9A84C] text-[#C9A84C] font-bold px-8 py-3 rounded-none tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-colors`

### Cards
- Dark cards: `bg-[#1A3A5C] border border-[#C9A84C]/20 p-8`
- Light cards: `bg-white shadow-lg p-8`
- Hover: `hover:border-[#C9A84C]/60 hover:shadow-xl transition-all`

### Navbar
- Background: `bg-[#0D1B2A]` with subtle bottom border `border-b border-[#C9A84C]/20`
- Logo: Montserrat, bold, gold accent on "ARTITECT"
- Links: `text-[#8A9BB0] hover:text-[#C9A84C] uppercase tracking-widest text-sm`

### Section Dividers
- Gold accent line: `w-16 h-1 bg-[#C9A84C]` centered or left-aligned under headings

---

## Do's
- Use uppercase tracking-widest for labels and nav items
- Use gold (#C9A84C) sparingly as an accent — borders, underlines, CTAs
- Maintain strong contrast: white text on dark backgrounds, dark text on light
- Use clean grid layouts (2-3 columns on desktop, 1 on mobile)
- Add subtle hover transitions (200-300ms)

## Don'ts
- Don't use rounded corners on primary buttons (sharp = industrial precision)
- Don't use bright/neon colors
- Don't crowd sections — generous whitespace is key
- Don't use light text on light backgrounds
- Don't use more than 2 font families
