# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
Primary brand color: Deep Navy Blue — `#0F2A4A` (trust, authority)
Accent: China Red — `#C8102E` (energy, China identity — used sparingly)
Secondary accent: Steel Blue — `#2563EB` (links, CTAs, highlights)
Background: Off-white — `#F8FAFC`
Surface: White — `#FFFFFF`
Border: Light gray — `#E2E8F0`
Text primary: `#0F172A`
Text secondary: `#475569`
Text muted: `#94A3B8`
Success: `#16A34A`

### Tailwind custom colors (added to config):
- `navy`: `#0F2A4A`
- `china-red`: `#C8102E`
- `steel`: `#2563EB`
- `surface`: `#F8FAFC`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-slate-600
- Small/caption: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: `bg-china-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `bg-navy hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Outline: `border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Centered label: `text-sm font-semibold text-china-red uppercase tracking-widest mb-3`
- Main heading: `text-3xl md:text-4xl font-bold text-navy mb-4`
- Subheading: `text-lg text-slate-600 max-w-2xl mx-auto`

### Navbar
- Background: white with bottom border
- Logo: navy text, bold
- Links: text-slate-700 hover:text-navy
- CTA button: china-red

### Hero Section
- Background: deep navy gradient
- Text: white
- Overlay: subtle dark gradient over image

## Do's
- Use generous whitespace between sections
- Use icons from lucide-react consistently
- Keep CTAs prominent and action-oriented
- Use trust signals (years, clients, countries) with large numbers
- Use subtle borders and shadows, not heavy ones

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No more than 2 accent colors per section
- No exaggerated claims or superlatives
- No cluttered layouts
