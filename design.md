# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, professional, trustworthy, user-friendly

## Color Palette
All hex values are registered as named Tailwind tokens via `@theme` in `index.css`.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | `#0D1B2A` | Primary background, navbar, footer |
| `brand-steel` | `#1C3A5E` | Section backgrounds, card borders |
| `brand-gold` | `#C9A84C` | Accent, CTA buttons, highlights |
| `brand-gold-light` | `#E8C97A` | Hover states for gold elements |
| `brand-silver` | `#8FA3B1` | Muted text, secondary labels |
| `brand-white` | `#F5F7FA` | Body text on dark backgrounds |
| `brand-light` | `#EEF2F7` | Light section backgrounds |
| `brand-dark-card` | `#142233` | Card backgrounds on dark sections |

## Typography
- **Primary Font:** Inter (Google Fonts)
- **Headings:** `font-bold` or `font-semibold`, tracking-wide
- **Body:** `font-normal`, `leading-relaxed`
- **Accent labels:** `uppercase tracking-widest text-sm`

### Scale
- Hero H1: `text-5xl md:text-7xl font-bold`
- Section H2: `text-3xl md:text-4xl font-bold`
- Card H3: `text-xl font-semibold`
- Body: `text-base` or `text-lg`
- Caption/Label: `text-sm`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows
- Cards: `border border-brand-steel rounded-2xl`
- Elevated cards: `shadow-xl`
- Dividers: `border-brand-steel/30`

## Buttons
- **Primary CTA:** `bg-brand-gold text-brand-navy font-semibold rounded-full px-8 py-3 hover:bg-brand-gold-light transition`
- **Secondary/Outline:** `border border-brand-gold text-brand-gold rounded-full px-8 py-3 hover:bg-brand-gold hover:text-brand-navy transition`
- **Ghost:** `text-brand-silver hover:text-brand-white transition`

## Component Patterns
- Navbar: sticky, dark (`bg-brand-navy`), logo left, nav links right, CTA button
- Hero: full-screen, dark overlay on background image, centered text, two CTAs
- Section headers: centered, gold accent line below title
- Product cards: dark card background, gold accent on hover, image top, details below
- Feature icons: gold icon on dark circle background
- Footer: dark, multi-column, gold brand name

## Do's
- Use gold sparingly as an accent — never as a large background fill
- Maintain high contrast: white/light text on dark backgrounds
- Use rounded corners (`rounded-2xl`, `rounded-full`) for a modern feel
- Animate on hover with `transition` and `duration-300`

## Don'ts
- Don't use light backgrounds for hero or product sections
- Don't use more than 2 font weights in a single component
- Don't use pure black (`#000`) — use `brand-navy` instead
- Don't crowd elements — generous whitespace is key to elegance
