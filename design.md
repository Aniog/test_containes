# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, authoritative, trustworthy, user-friendly

## Color Palette
- **Primary (Deep Steel Blue):** `#1B2A4A` — nav, headings, primary buttons
- **Accent (Burnished Gold):** `#C9A84C` — highlights, borders, CTAs, hover states
- **Surface Light:** `#F7F8FA` — page background
- **Surface White:** `#FFFFFF` — cards, modals
- **Surface Dark:** `#0F1C33` — footer, dark sections
- **Text Primary:** `#1B2A4A` — body text on light backgrounds
- **Text Secondary:** `#5A6A82` — subtitles, captions
- **Text On Dark:** `#F0F4FA` — text on dark backgrounds
- **Border:** `#DDE3EC` — subtle dividers

Add to Tailwind config as named colors:
- `steel`: `#1B2A4A`
- `gold`: `#C9A84C`
- `steel-dark`: `#0F1C33`
- `steel-light`: `#F7F8FA`
- `steel-muted`: `#5A6A82`

## Typography
- **Font Family:** "Montserrat" (headings) + "Inter" (body) — both from Google Fonts
- **H1:** `text-5xl font-bold tracking-tight text-steel` (Montserrat)
- **H2:** `text-3xl font-semibold tracking-tight text-steel`
- **H3:** `text-xl font-semibold text-steel`
- **Body:** `text-base font-normal text-steel` (Inter)
- **Caption/Label:** `text-sm text-steel-muted`

## Spacing
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows
- Card border: `border border-[#DDE3EC] rounded-2xl`
- Card shadow: `shadow-md hover:shadow-xl transition-shadow`
- Accent border: `border-l-4 border-gold`

## Buttons
- **Primary:** `bg-steel text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#243a63] transition-colors`
- **Accent/CTA:** `bg-gold text-steel px-8 py-3 rounded-lg font-semibold hover:bg-[#b8943e] transition-colors`
- **Outline:** `border-2 border-steel text-steel px-8 py-3 rounded-lg font-semibold hover:bg-steel hover:text-white transition-colors`

## Navigation
- Sticky top nav with white background + subtle bottom border
- Logo: brand name in Montserrat bold, steel color
- Nav links: `text-steel-muted hover:text-gold font-medium transition-colors`
- Mobile: hamburger menu

## Cards
- White background, rounded-2xl, subtle border, hover shadow lift
- Icon or image at top, heading, description, optional CTA link

## Do's
- Use generous whitespace between sections
- Use gold accents sparingly for emphasis
- Keep imagery industrial but clean (machinery, precision, metal)
- Use subtle gradients on hero (steel-dark to steel)

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements — maintain breathing room
- Don't use low-contrast text (e.g. light gray on white)
- Don't use more than 2 font families
