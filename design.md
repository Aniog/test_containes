# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1a4f8a` — trust, reliability (Tailwind: use `[#1a4f8a]`)
- **Accent Orange:** `#e8621a` — CTA, highlights (Tailwind: use `[#e8621a]`)
- **Dark Navy:** `#0d2340` — headings, footer bg (Tailwind: use `[#0d2340]`)
- **Light Gray:** `#f4f6f9` — section backgrounds (Tailwind: use `[#f4f6f9]`)
- **White:** `#ffffff` — card backgrounds
- **Text Dark:** `#1a2332` — body text
- **Text Muted:** `#5a6a7e` — secondary text
- **Border:** `#dde3ec` — dividers, card borders

## Typography
- **Font:** Inter (Google Fonts)
- **H1:** `text-4xl md:text-5xl font-bold text-[#0d2340]`
- **H2:** `text-3xl font-bold text-[#0d2340]`
- **H3:** `text-xl font-semibold text-[#1a2332]`
- **Body:** `text-base text-[#1a2332]`
- **Muted:** `text-sm text-[#5a6a7e]`
- **Caption:** `text-xs text-[#5a6a7e] uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary Button (CTA)
`bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Secondary Button
`border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Ghost Button (on dark bg)
`border-2 border-white text-white hover:bg-white hover:text-[#0d2340] font-semibold px-6 py-3 rounded-lg transition-colors`

### Card
`bg-white rounded-xl border border-[#dde3ec] shadow-sm hover:shadow-md transition-shadow p-6`

### Section Badge
`text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3`

### Navbar
- Background: `bg-white border-b border-[#dde3ec]`
- Logo text: `text-[#0d2340] font-bold text-xl`
- Nav links: `text-[#5a6a7e] hover:text-[#1a4f8a] font-medium`

### Footer
- Background: `bg-[#0d2340]`
- Text: `text-[#a8b8cc]`
- Headings: `text-white font-semibold`

## Do's
- Use blue for trust signals, data, and informational elements
- Use orange exclusively for CTAs and key highlights
- Keep layouts clean with generous whitespace
- Use subtle shadows on cards, not heavy drop shadows
- Use grid layouts for service/product cards (3-col desktop, 1-col mobile)
- Always show clear CTA buttons in hero and section endings

## Don'ts
- No dark mode — this is a professional B2B site with light theme only
- No exaggerated claims or superlatives
- No overly decorative fonts
- No low-contrast text combinations
- No full-width text blocks without max-width containers
