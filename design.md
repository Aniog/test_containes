# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue**: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `primary`
- **Accent Blue**: `#2563EB` (action blue — CTAs, links) → Tailwind: `blue-600`
- **Accent Gold**: `#D97706` (highlight, badges) → Tailwind: `amber-600`
- **Background Light**: `#F8FAFC` → Tailwind: `slate-50`
- **Surface White**: `#FFFFFF`
- **Border**: `#E2E8F0` → Tailwind: `slate-200`
- **Text Primary**: `#0F172A` → Tailwind: `slate-900`
- **Text Secondary**: `#475569` → Tailwind: `slate-600`
- **Text Muted**: `#94A3B8` → Tailwind: `slate-400`
- **Success Green**: `#16A34A` → Tailwind: `green-600`

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
  - H2: `text-3xl md:text-4xl font-bold text-slate-900`
  - H3: `text-xl md:text-2xl font-semibold text-slate-900`
  - H4: `text-lg font-semibold text-slate-900`
- **Body**: `text-base text-slate-600 leading-relaxed`
- **Small/Caption**: `text-sm text-slate-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost**: `text-blue-600 hover:text-blue-700 font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Badges
- `bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full`
- `bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full`

### Section Headers
- Centered: `text-center mb-12 md:mb-16`
- Eyebrow label: `text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3`

## Layout
- **Navbar**: white bg, sticky top, shadow-sm, logo left + nav links + CTA button right
- **Footer**: dark navy (`bg-slate-900`) with white text, 4-column grid
- **Hero**: full-width with background image overlay, centered content
- **Sections**: alternating white and slate-50 backgrounds

## Do's
- Use generous whitespace
- Keep text readable with high contrast
- Use icons from lucide-react consistently
- Use real-world B2B language (no hype)
- Show trust signals prominently (years, clients, countries)

## Don'ts
- No neon or overly bright colors
- No dark text on dark backgrounds
- No cluttered layouts
- No exaggerated claims ("best in the world")
- No decorative fonts
