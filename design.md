# SSourcing China — Design System

## Brand Identity
SSourcing China is a professional B2B China sourcing agent. The visual identity must convey trust, reliability, international professionalism, and operational clarity.

## Color Palette
- **Primary Blue**: `#1a4f8a` (deep navy-blue — trust, authority) → Tailwind: `text-[#1a4f8a]`, `bg-[#1a4f8a]`
- **Accent Red**: `#c0392b` (China red — subtle cultural nod, CTAs) → Tailwind: `text-[#c0392b]`, `bg-[#c0392b]`
- **Light Blue**: `#e8f0fb` (section backgrounds) → Tailwind: `bg-[#e8f0fb]`
- **Dark Navy**: `#0d2d52` (hero backgrounds, footer) → Tailwind: `bg-[#0d2d52]`
- **Neutral Gray**: `#f4f6f9` (alternating section backgrounds) → Tailwind: `bg-[#f4f6f9]`
- **Text Dark**: `#1a202c` (body text) → Tailwind: `text-[#1a202c]`
- **Text Muted**: `#64748b` (secondary text) → Tailwind: `text-[#64748b]`
- **White**: `#ffffff`
- **Border**: `#e2e8f0`

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-white` (hero)
- **H2**: `text-3xl md:text-4xl font-bold text-[#1a202c]` (section titles)
- **H3**: `text-xl font-semibold text-[#1a202c]` (card titles)
- **Body**: `text-base text-[#1a202c] leading-relaxed`
- **Muted**: `text-sm text-[#64748b]`
- **Label/Badge**: `text-xs font-semibold uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `bg-white border border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#e8f0fb] font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost**: `text-[#1a4f8a] hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-6 hover:shadow-md transition-shadow`

### Section Backgrounds (alternating)
- White: `bg-white`
- Light gray: `bg-[#f4f6f9]`
- Light blue: `bg-[#e8f0fb]`
- Dark navy (hero/footer): `bg-[#0d2d52]`

### Badges
- `bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full`

## Do's
- Use deep navy and white for high-contrast readable text
- Use red only for primary CTAs and important highlights
- Keep layouts clean with generous whitespace
- Use icons from lucide-react consistently
- Use grid layouts for cards (2-3 columns on desktop, 1 on mobile)
- Always ensure text is readable against its background

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated marketing claims
- No cluttered layouts
- No more than 2 font weights per section
