# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, trustworthy, practical, international B2B

## Color Palette
- **Primary Blue**: `#1a4f8a` — trust, reliability (Tailwind: `[#1a4f8a]`)
- **Accent Red**: `#c0392b` — China accent, urgency (Tailwind: `[#c0392b]`)
- **Light Blue**: `#e8f0fb` — section backgrounds
- **Dark Navy**: `#0d2b4e` — headings, footer
- **Mid Gray**: `#64748b` — body text (slate-500)
- **Light Gray**: `#f8fafc` — alternate section bg (slate-50)
- **White**: `#ffffff`
- **Border**: `#e2e8f0` (slate-200)

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl font-bold text-[#0d2b4e]`
- **H2**: `text-3xl font-bold text-[#0d2b4e]`
- **H3**: `text-xl font-semibold text-[#0d2b4e]`
- **Body**: `text-base text-slate-600`
- **Small/Caption**: `text-sm text-slate-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary**: `bg-[#1a4f8a] hover:bg-[#0d2b4e] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **CTA Red**: `bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Badges
- `bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full`

### Section Headers
- Centered with a short colored underline accent
- `text-center mb-12`

## Layout
- Navbar: white bg, sticky, shadow on scroll
- Footer: dark navy `#0d2b4e`
- Alternating section backgrounds: white / slate-50 / light-blue

## Do's
- Use clean grid layouts (2-3-4 columns on desktop)
- Use icons from lucide-react for service/feature items
- Use realistic stock images via data-strk-img system
- Keep CTAs prominent and above the fold
- Use trust signals (years experience, countries served, etc.)

## Don'ts
- No dark text on dark backgrounds
- No exaggerated claims ("best in the world")
- No cluttered layouts
- No small unreadable text on colored backgrounds
