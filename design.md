# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
Primary brand color: Deep Navy Blue — `#0F2A4A` (trust, authority)
Accent: Vibrant Red — `#C8102E` (China reference, energy, CTA)
Secondary accent: Steel Blue — `#1E6091` (links, highlights)
Background light: `#F8FAFC` (off-white, clean)
Background section alt: `#EEF2F7` (light blue-gray)
Text primary: `#0F2A4A` (navy)
Text secondary: `#4A5568` (gray-700)
Text muted: `#718096` (gray-500)
Border: `#E2E8F0`
White: `#FFFFFF`
Success green: `#2D7D46`

### Tailwind Config Custom Colors
Add to tailwind.config.js:
- `navy`: `#0F2A4A`
- `brand-red`: `#C8102E`
- `steel`: `#1E6091`
- `surface`: `#F8FAFC`
- `surface-alt`: `#EEF2F7`

## Typography
- Font: Inter (Google Fonts, already loaded)
- Headings: font-bold, tracking-tight, text-navy
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl font-bold
- H3: text-xl md:text-2xl font-semibold
- Body: text-base text-gray-600 leading-relaxed
- Small/caption: text-sm text-gray-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Borders & Shadows
- Card: rounded-xl shadow-sm border border-gray-100
- Card hover: shadow-md transition-shadow
- Button: rounded-lg
- Input: rounded-lg border border-gray-300 focus:ring-2 focus:ring-steel

## Buttons
- Primary CTA: bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors
- Secondary: bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors
- Outline: border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors

## Navigation
- Sticky top nav, white background, shadow on scroll
- Logo: text-navy font-bold text-xl
- Nav links: text-gray-700 hover:text-steel font-medium
- Mobile: hamburger menu

## Sections
- Hero: dark navy background with overlay, large headline, subtext, dual CTA
- Service cards: white cards with icon, title, description
- Process steps: numbered steps with connecting line
- Trust badges: logos/stats in a horizontal strip
- FAQ: accordion style
- CTA banner: brand-red background, white text

## Do's
- Use navy for headings and primary text
- Use brand-red only for CTAs and key highlights
- Use generous whitespace between sections
- Use subtle shadows on cards
- Keep images with overlay for text readability
- Use icons consistently (Lucide React)

## Don'ts
- Don't use light text on light backgrounds
- Don't use brand-red for body text
- Don't crowd sections — maintain breathing room
- Don't use more than 2 accent colors per section
