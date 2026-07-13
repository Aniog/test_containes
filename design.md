# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, practical, B2B

## Color Palette
- Primary Blue: `#1B4F8A` (navy blue — trust, reliability) → Tailwind: `blue-900` or custom `brand-blue`
- Accent Orange: `#E8621A` (action, energy, CTA) → custom `brand-orange`
- Light Blue: `#EBF3FB` (section backgrounds) → custom `brand-blue-light`
- Dark Navy: `#0D2B4E` (headings, footer) → custom `brand-navy`
- Neutral Gray: `#F5F7FA` (page backgrounds)
- Text Dark: `#1A2332` (body text)
- Text Muted: `#6B7A8D` (secondary text)
- Border: `#D8E2EE`
- White: `#FFFFFF`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), leading-relaxed
- Small/Caption: text-sm, text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition
- Secondary: border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition
- Ghost: text-brand-blue underline

### Cards
- bg-white rounded-xl shadow-sm border border-border p-6 md:p-8
- Hover: shadow-md transition

### Badges
- bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full

### Section Headers
- Centered, with small colored label above, large heading, and subtitle below

## Layout
- Navbar: sticky top, white bg, shadow on scroll
- Footer: dark navy bg, white text
- Hero: full-width with overlay, centered content
- Sections alternate: white and brand-blue-light backgrounds

## Do's
- Use generous whitespace
- Use icons (Lucide) alongside text for scannability
- Use numbered steps for process sections
- Use real-looking data in case studies (no fake testimonials)
- Keep CTAs prominent and orange

## Don'ts
- No dark mode (B2B professional light theme only)
- No exaggerated claims ("best in the world", "100% guaranteed")
- No cluttered layouts
- No tiny text on colored backgrounds
- No hardcoded hex values in JSX — use Tailwind config tokens
