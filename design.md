# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, practical, B2B

## Color Palette
Primary brand color: Deep Navy Blue — conveys trust, professionalism, international business
Accent: China Red — subtle use for CTAs and highlights
Neutral: Clean whites and light grays for backgrounds

### Named Colors (Tailwind config)
- `navy`: #1B2B4B (primary brand, headings, navbar)
- `navy-dark`: #0F1E35 (darker navy for footer, hover states)
- `navy-light`: #2D4A7A (lighter navy for section backgrounds)
- `red-china`: #C0392B (CTA buttons, accent highlights)
- `red-china-dark`: #A93226 (hover state for CTA)
- `gold`: #D4A843 (trust badges, star ratings)
- `slate-bg`: #F4F6F9 (light section backgrounds)
- `text-main`: #1A2332 (primary body text)
- `text-muted`: #5A6A7E (secondary/muted text)

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

## Borders & Shadows
- Card border: border border-gray-200
- Card shadow: shadow-sm hover:shadow-md transition-shadow
- Rounded corners: rounded-xl for cards, rounded-lg for buttons
- Dividers: border-t border-gray-200

## Buttons
- Primary CTA: bg-red-china text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-china-dark transition-colors
- Secondary: border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors
- Ghost/Link: text-navy underline-offset-4 hover:underline

## Components
- Navbar: bg-white shadow-sm, sticky top-0, z-50
- Hero: bg-navy text-white, full-width, with overlay on background image
- Section headings: centered, with colored underline accent
- Cards: white bg, border, shadow, rounded-xl
- Badges: small pill shapes, bg-slate-bg text-navy font-medium
- Trust indicators: icon + number + label layout

## Do's
- Use navy for all primary headings and navigation
- Use red-china sparingly — only for primary CTAs and key highlights
- Use slate-bg (#F4F6F9) for alternating section backgrounds
- Keep text contrast high — always dark text on light backgrounds
- Use Inter font throughout
- Use Lucide React icons consistently

## Don'ts
- Don't use dark text on dark backgrounds
- Don't use red-china for body text
- Don't use more than 2 accent colors per section
- Don't use overly decorative fonts
- Don't make exaggerated claims in copy
