# SSourcing China — Design Guidelines

## Brand Colors
- Primary: brand-600 (#1e3a8a) — deep navy blue for buttons, headers, primary CTAs
- Primary dark: brand-800 (#1a2d6d) — for gradient overlays and dark sections
- Primary light: brand-100 (#dbeafe) — for icon backgrounds and subtle highlights
- Accent: brand-500 (#1e40af) — for hover states and secondary accents
- Text primary: neutral-900 (#0f172a) — main body text
- Text secondary: neutral-600 (#475569) — supporting text
- Text muted: neutral-400 (#94a3b8) — captions, footnotes
- Background sections: white, neutral-50 (#f8fafc) for alternating sections
- Dark backgrounds: neutral-900 (#0f172a) / brand-900 (#172554) for hero and CTA sections
- Success: green-500 for positive indicators

## Typography
- Font: Inter (Google Fonts), loaded in index.html
- H1: text-4xl to text-6xl, font-extrabold
- H2: text-3xl to text-4xl, font-bold
- H3: text-lg to text-xl, font-semibold
- Body: text-base, text-neutral-600
- Small/links: text-sm, text-neutral-500/600
- Code/numbers: same font family

## Spacing
- Section padding: py-16 lg:py-24
- Section inner: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 lg:p-8
- Grid gap: gap-6 lg:gap-8

## Borders & Shadows
- Cards: border border-neutral-200, rounded-xl (12px)
- Hover: hover:border-brand-300, hover:shadow-md or hover:shadow-lg
- Buttons: rounded-lg (8px) or rounded-md (6px)
- Inputs: border border-neutral-300, rounded-lg

## Button Styles
- Primary: bg-brand-600 text-white, hover:bg-brand-700
- Secondary (on dark): bg-white/10 text-white border-white/20 hover:bg-white/20
- Outline: bg-transparent text-brand-600 border border-brand-600 hover:bg-brand-50

## Section Background Alternating
1. Hero: bg-gradient-to-br from-neutral-900 via-brand-900 to-neutral-900
2. Features/cards: bg-neutral-50
3. Plain content: bg-white
4. Trust/CTA colored: bg-brand-600 or bg-gradient-to-r from-brand-600 to-brand-800
5. Stats bar: bg-white with border-b

## Component Specifics

### Header
- Sticky, bg-white, border-b border-neutral-200
- Logo: brand square with "SS" + text "SSourcing" (neutral-900) "China" (brand-600)
- Nav: text-neutral-700, active=brand-600 bg-brand-50

### Footer
- bg-neutral-900, text-neutral-300
- Headings: text-white font-semibold
- Links: text-neutral-400 hover:text-white

### FAQ
- details/summary with border, rounded-xl
- Chevron rotates on open

### Cards
- bg-white, border-neutral-200, rounded-xl
- Icon boxes: w-12 h-12 bg-brand-100 rounded-lg

## Do's
- Use consistent brand colors for all interactive elements
- Keep plenty of white space
- Use alternating section backgrounds for visual rhythm
- Make CTAs prominent with arrow icons
- Use neutral-50 for card backgrounds when on white sections

## Don'ts
- Don't use bright reds or oranges
- Don't use overly complex gradients
- Don't make text too small (minimum 14px)
- Don't use justified text alignment