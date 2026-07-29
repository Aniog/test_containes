# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, clear, practical, trustworthy, international B2B

## Color Palette
All colors are defined in tailwind.config.js as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0F2A4A | Primary brand color, headings, navbar bg |
| `brand-blue` | #1A5FA8 | Links, accents, primary buttons |
| `brand-sky` | #2E8BC0 | Hover states, secondary accents |
| `brand-gold` | #D4A017 | CTA highlights, trust badges |
| `brand-light` | #F4F7FB | Section backgrounds (light) |
| `brand-white` | #FFFFFF | Card backgrounds, clean surfaces |
| `brand-gray` | #6B7280 | Body text, secondary text |
| `brand-dark` | #1C2B3A | Dark section backgrounds |

## Typography
- **Font**: Inter (Google Fonts) — weights 300, 400, 500, 600, 700, 800
- **H1**: text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy
- **H2**: text-3xl md:text-4xl font-bold text-brand-navy
- **H3**: text-xl md:text-2xl font-semibold text-brand-navy
- **Body**: text-base text-brand-gray leading-relaxed
- **Small/Caption**: text-sm text-brand-gray

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Borders & Shadows
- Card: rounded-xl shadow-md border border-gray-100
- Button: rounded-lg
- Input: rounded-lg border border-gray-300 focus:border-brand-blue
- Divider: border-t border-gray-200

## Buttons
- **Primary CTA**: bg-brand-gold hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg
- **Primary Blue**: bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg
- **Outline**: border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 rounded-lg
- **Ghost/Nav**: text-gray-700 hover:text-brand-blue font-medium

## Navbar
- bg-white shadow-sm sticky top-0 z-50
- Logo: font-bold text-brand-navy text-xl
- Nav links: text-gray-700 hover:text-brand-blue font-medium text-sm
- CTA button: bg-brand-gold text-white

## Footer
- bg-brand-dark text-gray-300
- Headings: text-white font-semibold
- Links: text-gray-400 hover:text-white

## Section Patterns
- Light section: bg-brand-light
- White section: bg-white
- Dark section: bg-brand-dark text-white
- Accent section: bg-brand-navy text-white

## Cards
- White background, rounded-xl, shadow-md, border border-gray-100
- Icon: text-brand-blue w-10 h-10
- Title: font-semibold text-brand-navy
- Body: text-brand-gray text-sm

## Do's
- Use Inter font throughout
- Keep generous whitespace
- Use brand-navy for all headings
- Use brand-gold for primary CTAs
- Use brand-blue for links and secondary actions
- Keep images with overlay for text readability
- Use numbered steps for process sections

## Don'ts
- Don't use pure black (#000) for text — use brand-navy or brand-dark
- Don't use low-contrast text on colored backgrounds
- Don't use more than 3 font weights per section
- Don't use decorative fonts
- Don't stack single-column layouts on desktop
