# SSourcing China — Design Style Guide

## Brand Personality
Professional, trustworthy, international B2B. Clean and practical — no exaggerated claims, no flashy animations. The site should feel like a reliable partner, not a marketing pitch.

## Color Palette

### Primary Colors
- **Navy Blue** (primary): `#1B3A5C` — trust, authority, B2B professionalism
- **Deep Blue** (primary dark): `#0F2640` — headings, nav background
- **Sky Blue** (accent): `#2E86DE` — CTAs, links, interactive elements
- **Sky Blue Hover**: `#1B6FC5` — button/link hover states

### Neutral Colors
- **White**: `#FFFFFF` — page backgrounds, card backgrounds
- **Light Gray**: `#F7F8FA` — section backgrounds, alternating rows
- **Medium Gray**: `#E8ECF1` — borders, dividers
- **Dark Gray**: `#4A5568` — body text
- **Charcoal**: `#1A202C` — headings, nav text

### Semantic Colors
- **Success Green**: `#38A169` — trust badges, checkmarks
- **Warning Amber**: `#D69E2E` — cautionary notes
- **Error Red**: `#E53E3E` — form errors

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: font-weight 700 (bold), color charcoal/navy
- **Body**: font-weight 400, color dark gray
- **Small/Caption**: font-weight 400, color medium gray

### Scale
- H1: 3rem (48px) — hero headlines
- H2: 2.25rem (36px) — section titles
- H3: 1.5rem (24px) — card titles, subsections
- Body: 1rem (16px) — standard text
- Small: 0.875rem (14px) — captions, labels

## Spacing
- Section padding: `py-20` (80px vertical)
- Card padding: `p-6` to `p-8`
- Grid gaps: `gap-6` to `gap-8`
- Container max-width: `max-w-7xl` (1280px)

## Borders & Shadows
- Card border: `border border-gray-200` or `border border-gray-100`
- Card shadow: `shadow-sm` to `shadow-md`
- Rounded corners: `rounded-lg` (8px) for cards, `rounded-md` (6px) for buttons
- No heavy shadows or dramatic depth effects

## Buttons
- **Primary CTA**: `bg-sky-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-blue-hover`
- **Secondary**: `border border-navy text-navy px-6 py-3 rounded-md font-semibold hover:bg-navy hover:text-white`
- **Ghost/Link**: `text-sky-blue hover:underline`

## Cards
- White background, subtle border, light shadow
- Clean icon + title + description layout
- No gradients or heavy decorative elements

## Images
- Use `data-strk-img` for stock images showing: factories, quality inspection, shipping containers, warehouse, business meetings
- Ratios: `16x9` for heroes, `4x3` for cards, `3x2` for features
- Professional, realistic photography — no illustrations or cartoons

## Do's
- Use plenty of white space
- Keep layouts clean and scannable
- Use icons from Lucide React for visual cues
- Ensure high contrast for readability
- Use consistent spacing and alignment
- Mobile-first responsive design

## Don'ts
- No gradients on backgrounds or text
- No exaggerated claims or hype language
- No cartoon illustrations
- No dark mode (B2B professional = light theme)
- No auto-playing videos or animations
- No low-contrast text on colored backgrounds
