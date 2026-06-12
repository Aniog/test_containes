# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial elegance meets user-friendly clarity. The design communicates precision engineering, reliability, and professional craftsmanship.

## Color Palette

### Primary Colors
- **Navy** (`navy`): `#1B2A4A` — Primary brand color, used for headers, nav, hero backgrounds
- **Navy Light** (`navy-light`): `#2A3F6B` — Hover states, secondary backgrounds
- **Gold** (`gold`): `#C8963E` — Accent color for CTAs, highlights, borders
- **Gold Light** (`gold-light`): `#D4A94E` — Hover states for gold elements

### Neutral Colors
- **Slate 50** (`slate-50`): `#F8FAFC` — Page backgrounds, cards
- **Slate 100** (`slate-100`): `#F1F5F9` — Alternate section backgrounds
- **Slate 200** (`slate-200`): `#E2E8F0` — Borders, dividers
- **Slate 600** (`slate-600`): `#475569` — Body text
- **Slate 800** (`slate-800`): `#1E293B` — Headings
- **Slate 900** (`slate-900`): `#0F172A` — Dark backgrounds

### Semantic
- **White**: `#FFFFFF` — Card backgrounds, text on dark
- **Success**: `#16A34A`
- **Error**: `#DC2626`

## Typography

### Font Family
- **Headings**: `Inter` weight 700–800
- **Body**: `Inter` weight 400–500
- **Accent/Labels**: `Inter` weight 600, uppercase tracking-wide

### Scale (Tailwind classes)
- Hero title: `text-5xl md:text-6xl lg:text-7xl font-extrabold`
- Section title: `text-3xl md:text-4xl font-bold`
- Subtitle: `text-lg md:text-xl font-medium`
- Body: `text-base font-normal`
- Small/Caption: `text-sm font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Component gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-gold text-white font-semibold px-8 py-3 rounded-lg hover:bg-gold-light transition-colors`
- Secondary: `border-2 border-gold text-gold font-semibold px-8 py-3 rounded-lg hover:bg-gold hover:text-white transition-colors`
- On dark: `bg-gold text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gold-light transition-colors`

### Cards
- `bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow`

### Navigation
- Fixed top, `bg-navy/95 backdrop-blur-sm` with white text
- Logo text: `text-xl font-bold text-white`
- Nav links: `text-slate-200 hover:text-gold transition-colors`

## Do's
- Use generous whitespace between sections
- Keep text readable with proper contrast
- Use gold sparingly as an accent, not for large areas
- Maintain consistent border-radius (rounded-lg for buttons, rounded-2xl for cards)
- Use subtle shadows and transitions for depth

## Don'ts
- Don't use pure black (#000) for text — use slate-800 or slate-900
- Don't overuse gold — it's an accent, not a primary fill for large areas
- Don't use small text without sufficient contrast
- Don't crowd elements — maintain breathing room
- Don't use more than 2 font weights in a single component
