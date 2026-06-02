# Design System — Cucumber Site

## Visual Identity
Fresh, natural, and clean. The site celebrates the cucumber as a crisp, healthy vegetable with a modern editorial feel.

## Color Palette
- **Primary Green**: `#3d7a3d` (deep cucumber green) — used for headings, accents, CTAs
- **Light Green**: `#6aab4f` — hover states, highlights
- **Pale Green**: `#e8f5e2` — section backgrounds, cards
- **Cream**: `#fafaf5` — page background
- **Dark Text**: `#1a2e1a` — body text, headings
- **Muted Text**: `#5a7a5a` — captions, secondary text
- **White**: `#ffffff` — card surfaces, nav background

Add to Tailwind config as named colors:
- `cucumber`: `#3d7a3d`
- `cucumber-light`: `#6aab4f`
- `cucumber-pale`: `#e8f5e2`
- `cucumber-cream`: `#fafaf5`
- `cucumber-dark`: `#1a2e1a`
- `cucumber-muted`: `#5a7a5a`

## Typography
- **Font**: Lato (Google Fonts) — clean, friendly, readable
- **Display headings**: `font-bold text-4xl md:text-6xl text-cucumber-dark`
- **Section headings**: `font-bold text-2xl md:text-3xl text-cucumber-dark`
- **Body text**: `text-base text-cucumber-dark leading-relaxed`
- **Captions / labels**: `text-sm text-cucumber-muted`

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto px-6`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-md`
- Subtle borders: `border border-cucumber-pale`
- Hover lift: `hover:shadow-lg transition-shadow duration-300`

## Buttons
- Primary: `bg-cucumber text-white px-6 py-3 rounded-full font-semibold hover:bg-cucumber-light transition-colors`
- Outline: `border-2 border-cucumber text-cucumber px-6 py-3 rounded-full font-semibold hover:bg-cucumber-pale transition-colors`

## Do's
- Use generous whitespace between sections
- Use stock images for hero and feature sections
- Keep text contrast high — always dark text on light backgrounds
- Use rounded corners on cards and images

## Don'ts
- No dark backgrounds except for the footer
- No neon or overly saturated colors
- No small unreadable text on green backgrounds
