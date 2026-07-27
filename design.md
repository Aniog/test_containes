# SSourcing China — Design System

## Brand Identity
Professional, trustworthy, international B2B sourcing company based in China.
Clean, modern, and practical — no flashy effects, no exaggerated claims.

## Color Palette
- **Primary Blue**: `#1A4F8A` (deep navy-blue — trust, reliability) → Tailwind: `brand-blue`
- **Accent Orange**: `#E8621A` (action, energy, CTA buttons) → Tailwind: `brand-orange`
- **Light Blue**: `#EBF3FB` (section backgrounds, cards) → Tailwind: `brand-blue-light`
- **Dark Navy**: `#0D2B4E` (footer, dark sections) → Tailwind: `brand-navy`
- **Neutral Gray**: `#6B7280` (body text secondary) → Tailwind: `gray-500`
- **Light Gray**: `#F8FAFC` (alternate section backgrounds) → Tailwind: `slate-50`
- **White**: `#FFFFFF`
- **Text Dark**: `#1E293B` (headings, primary text) → Tailwind: `slate-800`

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold`, `text-slate-800`, sizes: h1=`text-4xl md:text-5xl`, h2=`text-3xl`, h3=`text-xl`
- **Body**: `text-slate-600`, `text-base`, `leading-relaxed`
- **Labels/Caps**: `text-xs font-semibold uppercase tracking-widest text-brand-orange`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-brand-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link**: `text-brand-blue hover:text-brand-orange font-medium underline-offset-2`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow`

### Section Labels
- `text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3`

### Navbar
- White background, `shadow-sm`, sticky top
- Logo: brand-blue text, bold
- Nav links: `text-slate-700 hover:text-brand-blue`
- CTA button: brand-orange

### Hero
- Dark navy gradient background with subtle overlay
- White headline text
- Orange CTA button + secondary ghost button

### Footer
- `bg-brand-navy text-slate-300`
- White logo, muted links

## Do's
- Use `brand-blue` for trust elements, headings, icons
- Use `brand-orange` for CTAs, highlights, numbered steps
- Use `slate-50` or `brand-blue-light` for alternating section backgrounds
- Keep layouts clean with generous whitespace
- Use icons (Lucide) alongside text for scannability

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No gradients that reduce readability
- No more than 2 accent colors per section
- No exaggerated marketing language
