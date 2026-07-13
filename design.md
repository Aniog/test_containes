# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A4B8C` (deep navy-blue — trust, authority)
- Accent Blue: `#2563EB` (bright action blue — CTAs, links)
- Accent Gold: `#D97706` (amber — highlights, badges)
- Dark Text: `#0F172A` (slate-950)
- Body Text: `#334155` (slate-700)
- Muted Text: `#64748B` (slate-500)
- Light BG: `#F8FAFC` (slate-50)
- White: `#FFFFFF`
- Border: `#E2E8F0` (slate-200)
- Success Green: `#16A34A`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-slate-700
- Small/Caption: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: `bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- CTA Gold: `bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-8 py-4 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Eyebrow label: `text-sm font-semibold text-[#2563EB] uppercase tracking-widest`
- Title: `text-3xl md:text-4xl font-bold text-[#0F172A] mt-2`
- Subtitle: `text-lg text-slate-600 mt-4 max-w-2xl`

### Navbar
- Background: white with bottom border
- Logo: text-[#1A4B8C] font-bold text-xl
- Links: text-slate-700 hover:text-[#2563EB]
- CTA button: primary blue

### Hero
- Background: deep navy gradient `from-[#0F172A] to-[#1A4B8C]`
- Text: white
- Overlay: subtle pattern or image with dark overlay

### Trust Badges / Stats
- Large number: text-4xl font-bold text-[#2563EB]
- Label: text-sm text-slate-600

## Do's
- Use consistent section padding (py-16 md:py-24)
- Alternate section backgrounds: white and slate-50
- Use rounded-xl for cards, rounded-lg for buttons
- Use shadow-sm on cards, shadow-md on hover
- Keep CTAs prominent with high contrast
- Use icons from lucide-react consistently

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims or superlatives
- No more than 2 font weights per section
- No inline styles — use Tailwind classes only
