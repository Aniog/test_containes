# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue**: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-900` or custom `brand-navy`
- **Accent Blue**: `#2563EB` (action blue — CTAs, links) → Tailwind: `blue-600`
- **Accent Gold**: `#D97706` (highlight, badges) → Tailwind: `amber-600`
- **Light Background**: `#F8FAFC` → Tailwind: `slate-50`
- **Section Alt Background**: `#EFF6FF` → Tailwind: `blue-50`
- **Dark Background**: `#0F172A` → Tailwind: `slate-900`
- **Text Primary**: `#0F172A` → Tailwind: `slate-900`
- **Text Secondary**: `#475569` → Tailwind: `slate-600`
- **Text Muted**: `#94A3B8` → Tailwind: `slate-400`
- **Border**: `#E2E8F0` → Tailwind: `slate-200`
- **White**: `#FFFFFF`

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-semibold`, `tracking-tight`
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
- **H2**: `text-3xl md:text-4xl font-bold text-slate-900`
- **H3**: `text-xl font-semibold text-slate-900`
- **Body**: `text-base text-slate-600 leading-relaxed`
- **Small/Caption**: `text-sm text-slate-500`
- **Label/Badge**: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link**: `text-blue-600 hover:text-blue-700 font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Badges
- `bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider`
- `bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider`

### Section Headers
- Centered label badge above H2, then subtitle paragraph below

## Navbar
- White background, `shadow-sm`, sticky top
- Logo left, nav links center/right, CTA button far right
- Mobile: hamburger menu

## Footer
- Dark background (`slate-900`), white text
- 4-column grid: brand, services, company, contact

## Do's
- Use generous whitespace between sections
- Use icons (Lucide) alongside text for scannability
- Use numbered steps for process sections
- Use real-looking data in case studies (percentages, countries, product types)
- Keep CTAs prominent and repeated throughout the page

## Don'ts
- No exaggerated claims ("best in the world", "guaranteed")
- No dark text on dark backgrounds
- No light text on light backgrounds
- No magic pixel values — use Tailwind spacing scale
- No inline styles
