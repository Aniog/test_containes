# SSourcing China – Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy – trust, authority)
- Accent Orange: `#E8621A` (energy, CTA, highlights)
- Light Blue: `#EBF2FA` (section backgrounds)
- White: `#FFFFFF`
- Dark Text: `#1A1A2E`
- Muted Text: `#5A6A7A`
- Border: `#D1DCE8`
- Success Green: `#2E7D52`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base md:text-lg

## Tailwind Config Extensions
- `primary`: `#1A3C6E`
- `accent`: `#E8621A`
- `lightblue`: `#EBF2FA`
- `darktext`: `#1A1A2E`
- `mutedtext`: `#5A6A7A`
- `border-color`: `#D1DCE8`

## Spacing & Layout
- Max content width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Border radius: rounded-xl for cards, rounded-lg for buttons

## Components
### Buttons
- Primary CTA: bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition
- Secondary: border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition
- Small: px-5 py-2.5 text-sm

### Cards
- bg-white rounded-xl shadow-sm border border-[#D1DCE8] p-6 hover:shadow-md transition

### Section Backgrounds
- White: bg-white
- Light: bg-[#EBF2FA]
- Dark (footer/hero): bg-[#1A3C6E] text-white

## Do's
- Use navy + orange for strong visual hierarchy
- Keep layouts clean with generous whitespace
- Use icons from lucide-react consistently
- Show trust signals prominently (years, clients, countries)
- Use realistic stock images via data-strk-img

## Don'ts
- No exaggerated claims or superlatives
- No dark text on dark backgrounds
- No cluttered layouts
- No small unreadable text on colored backgrounds
