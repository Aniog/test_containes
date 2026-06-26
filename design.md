# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A4B8C` (deep navy-blue — trust, reliability)
- Accent Red: `#C0392B` (China red — subtle accent only)
- Accent Gold: `#D4A017` (quality, premium)
- Background Light: `#F7F9FC`
- Background White: `#FFFFFF`
- Surface Gray: `#EEF2F7`
- Text Dark: `#1A1F2E`
- Text Body: `#3D4A5C`
- Text Muted: `#6B7A8D`
- Border: `#D8E0EA`
- Success Green: `#27AE60`

## Typography
- Font Family: Inter (Google Fonts)
- Heading 1: `text-4xl md:text-5xl font-bold text-[#1A1F2E]`
- Heading 2: `text-3xl font-bold text-[#1A1F2E]`
- Heading 3: `text-xl font-semibold text-[#1A1F2E]`
- Body: `text-base text-[#3D4A5C]`
- Muted: `text-sm text-[#6B7A8D]`
- Caption: `text-xs text-[#6B7A8D] uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-[#1A4B8C] hover:bg-[#153d73] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- CTA (large): `bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-[#D8E0EA] p-6 hover:shadow-md transition-shadow`

### Badges
- `bg-[#EEF2F7] text-[#1A4B8C] text-xs font-semibold px-3 py-1 rounded-full`

### Section Headers
- Eyebrow label: `text-xs font-bold uppercase tracking-widest text-[#1A4B8C] mb-2`
- Title: `text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4`
- Subtitle: `text-lg text-[#6B7A8D] max-w-2xl`

## Layout
- Navbar: white background, sticky, shadow on scroll
- Footer: dark navy `#1A1F2E` background, white text
- Hero: full-width with overlay image, dark gradient overlay

## Do's
- Use generous whitespace between sections
- Use icons alongside text for services/features
- Use numbered steps for process sections
- Use real-looking data in case studies (percentages, timelines)
- Keep CTAs prominent and action-oriented

## Don'ts
- No exaggerated claims ("best in the world", "guaranteed")
- No dark text on dark backgrounds
- No light text on light backgrounds
- No mobile-only stacked layouts on desktop
- No magic pixel values — use Tailwind classes only
