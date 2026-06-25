# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery

## Visual Style
Elegant, professional, and trustworthy — with a clean industrial aesthetic. Dark navy backgrounds contrast with warm gold accents to convey precision and premium quality. Generous whitespace and refined typography keep the experience user-friendly.

## Color Palette

| Name         | Hex       | Tailwind Custom Token | Usage                          |
|:-------------|:----------|:----------------------|:-------------------------------|
| Navy Deep    | #0D1B2A   | `navy-deep`           | Primary background, hero       |
| Navy Mid     | #1B2E45   | `navy-mid`            | Section backgrounds, cards     |
| Navy Light   | #243B55   | `navy-light`          | Borders, subtle dividers       |
| Gold         | #C9A84C   | `gold`                | Primary accent, CTAs, icons    |
| Gold Light   | #E8C97A   | `gold-light`          | Hover states, highlights       |
| Slate        | #8FA3B1   | `slate-cool`          | Body text on dark backgrounds  |
| White        | #F5F7FA   | `off-white`           | Headings, primary text on dark |
| Light Gray   | #EEF1F5   | `light-gray`          | Section backgrounds (light)    |
| Dark Text    | #1A2332   | `dark-text`           | Body text on light backgrounds |

## Typography

- **Font Family:** Montserrat (headings) + Inter (body) — loaded via Google Fonts
- **Heading Scale:**
  - H1: `text-5xl md:text-6xl font-bold tracking-tight` (Montserrat)
  - H2: `text-3xl md:text-4xl font-bold tracking-tight` (Montserrat)
  - H3: `text-xl md:text-2xl font-semibold` (Montserrat)
  - H4: `text-lg font-semibold` (Montserrat)
- **Body:** `text-base font-normal leading-relaxed` (Inter)
- **Caption/Label:** `text-sm font-medium tracking-widest uppercase` (Inter)

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges, `rounded-lg` for buttons

## Buttons
- **Primary CTA:** `bg-gold text-navy-deep font-semibold px-8 py-3 rounded-lg hover:bg-gold-light transition-all`
- **Secondary/Outline:** `border border-gold text-gold px-8 py-3 rounded-lg hover:bg-gold hover:text-navy-deep transition-all`
- **Ghost (nav):** `text-off-white hover:text-gold transition-colors`

## Cards
- Background: `bg-navy-mid` on dark sections, `bg-white` on light sections
- Border: `border border-navy-light` or subtle shadow `shadow-lg`
- Hover: subtle lift `hover:-translate-y-1 hover:shadow-xl transition-all`

## Borders & Dividers
- Use `border-navy-light` for dark sections
- Use `border-gray-200` for light sections
- Gold accent lines: `border-t-2 border-gold` for section emphasis

## Do's
- Use Montserrat for all headings
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace between sections
- Use uppercase tracking-widest labels for section identifiers
- Keep CTAs clear and prominent with gold background

## Don'ts
- Don't use pure black backgrounds — use navy-deep instead
- Don't use more than 2 accent colors per section
- Don't crowd elements — maintain breathing room
- Don't use low-contrast text (e.g. slate on navy-mid without sufficient size)
