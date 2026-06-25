# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery
- **Tone:** Elegant, authoritative, trustworthy, user-friendly

## Color Palette
All colors are defined as Tailwind CSS theme tokens in `src/index.css`.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | `#0D1B2A` | Primary dark background, navbar |
| `brand-steel` | `#1C3A5E` | Secondary dark, section backgrounds |
| `brand-blue` | `#2563EB` | Primary accent, CTA buttons |
| `brand-gold` | `#C9A84C` | Highlight accent, borders, icons |
| `brand-silver` | `#8FA3B1` | Muted text, secondary labels |
| `brand-light` | `#F4F6F9` | Light section backgrounds |
| `brand-white` | `#FFFFFF` | Card backgrounds, text on dark |

## Typography
- **Font Family:** Montserrat (headings), Inter (body)
- **Heading 1:** `text-5xl font-bold tracking-tight` (Montserrat)
- **Heading 2:** `text-3xl font-bold tracking-tight` (Montserrat)
- **Heading 3:** `text-xl font-semibold` (Montserrat)
- **Body:** `text-base font-normal leading-relaxed` (Inter)
- **Label/Caption:** `text-sm font-medium tracking-wide uppercase`

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-8`
- Card padding: `p-8`
- Gap between cards: `gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-brand-gold/20`
- Card shadow: `shadow-lg`
- Hover shadow: `shadow-xl`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Buttons
- **Primary CTA:** `bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all`
- **Secondary CTA:** `border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-navy transition-all`
- **Ghost:** `text-brand-silver hover:text-white transition-colors`

## Component Patterns
- **Navbar:** Fixed top, dark navy background, gold accent on active links
- **Hero:** Full-screen with dark overlay, centered text, dual CTA buttons
- **Product Cards:** Dark steel background, gold border accent, hover lift effect
- **Feature Icons:** Gold icon on dark card, clean label below
- **Section Dividers:** Thin gold line `border-t border-brand-gold/30`

## Do's
- Use `text-white` on dark (`brand-navy`, `brand-steel`) backgrounds
- Use `text-brand-navy` on light (`brand-light`, `brand-white`) backgrounds
- Use `text-brand-gold` for accent text and highlights
- Use `text-brand-silver` for secondary/muted text on dark backgrounds
- Maintain generous whitespace for an elegant feel
- Use subtle hover transitions (`transition-all duration-300`)

## Don'ts
- Never use dark text on dark backgrounds
- Never use light text on light backgrounds
- Avoid overly bright or saturated colors — keep it industrial and refined
- Don't crowd elements — spacing is part of the elegance
