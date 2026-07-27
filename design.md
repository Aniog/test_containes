# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B

## Color Palette
- Primary Blue: `#1A4B8C` (deep navy — trust, authority) → Tailwind: `blue-900` or custom `brand-blue`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: custom `brand-red`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: custom `brand-gold`
- Background Light: `#F8FAFC` → Tailwind: `slate-50`
- Background White: `#FFFFFF`
- Surface Gray: `#F1F5F9` → Tailwind: `slate-100`
- Border: `#E2E8F0` → Tailwind: `slate-200`
- Text Primary: `#0F172A` → Tailwind: `slate-900`
- Text Secondary: `#475569` → Tailwind: `slate-600`
- Text Muted: `#94A3B8` → Tailwind: `slate-400`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
  - H2: `text-3xl md:text-4xl font-bold text-slate-900`
  - H3: `text-xl md:text-2xl font-semibold text-slate-800`
  - H4: `text-lg font-semibold text-slate-800`
- Body: `text-base text-slate-600 leading-relaxed`
- Small: `text-sm text-slate-500`
- Caption: `text-xs text-slate-400 uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-[#1A4B8C] hover:bg-[#153d73] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- CTA Red: `bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Badges
- `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider`
- Blue: `bg-blue-100 text-[#1A4B8C]`
- Red: `bg-red-100 text-[#C0392B]`
- Gold: `bg-amber-100 text-amber-700`

### Section Labels
- `text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-3`

## Layout
- Navbar: white bg, sticky, shadow on scroll, logo left, nav links center/right
- Footer: dark bg (`slate-900`), white text, 4-column grid
- Hero: full-width, dark overlay on image, white text
- Sections alternate: white and `slate-50`

## Do's
- Use consistent section padding
- Always pair dark backgrounds with white/light text
- Use brand-blue for primary actions, brand-red for CTAs and accents
- Keep card text `slate-700` or darker for readability
- Use subtle shadows on cards, not heavy drop shadows

## Don'ts
- No light gray text on white backgrounds (contrast too low)
- No decorative fonts — Inter only
- No magic pixel values — use Tailwind spacing scale
- No hardcoded hex in JSX — use Tailwind config custom colors
