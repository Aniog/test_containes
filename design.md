# Sea Slug Shop — Design System

## Brand Identity
An ocean-inspired e-commerce shop selling live sea slugs (nudibranchs) and related products.
Tone: playful, scientific, premium. Think "boutique aquarium meets marine biology lab".

## Color Palette
- **Primary**: Deep ocean teal — `#0d7377` (Tailwind custom: `teal-ocean`)
- **Primary Dark**: `#0a5c60`
- **Primary Light**: `#14a8ad`
- **Accent**: Vivid coral/orange — `#f4623a` (Tailwind custom: `coral`)
- **Accent Light**: `#f7845f`
- **Background**: Off-white sea foam — `#f0f7f7` (Tailwind custom: `seafoam`)
- **Surface**: White `#ffffff`
- **Surface Alt**: Light teal tint `#e6f4f4`
- **Text Primary**: Deep navy `#0f2b3d`
- **Text Secondary**: Muted slate `#4a6572`
- **Text Muted**: `#8aa5b0`
- **Border**: `#c8dfe0`
- **Success**: `#22c55e`
- **Error**: `#ef4444`

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: font-bold, tracking-tight, text-navy (`#0f2b3d`)
- **Body**: font-normal, text-slate (`#4a6572`)
- **Display**: text-4xl–text-6xl, font-extrabold
- **Section Title**: text-2xl–text-3xl, font-bold
- **Card Title**: text-lg–text-xl, font-semibold
- **Small/Label**: text-sm, font-medium, uppercase tracking-wide

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 lg:py-24`
- Card padding: `p-6`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges/pills, `rounded-xl` for buttons

## Components

### Buttons
- **Primary**: `bg-teal-ocean text-white hover:bg-primary-dark rounded-xl px-6 py-3 font-semibold transition`
- **Secondary**: `border-2 border-teal-ocean text-teal-ocean hover:bg-teal-ocean hover:text-white rounded-xl px-6 py-3 font-semibold transition`
- **Accent/CTA**: `bg-coral text-white hover:bg-accent-light rounded-xl px-6 py-3 font-semibold transition`

### Cards
- `bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-border`
- Image top, content below with p-5

### Navbar
- `bg-white/95 backdrop-blur border-b border-border sticky top-0 z-50`
- Logo: teal-ocean brand mark + wordmark
- Links: text-slate hover:text-teal-ocean

### Badges
- `rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide`
- Species badge: `bg-surface-alt text-teal-ocean`
- Sale badge: `bg-coral text-white`
- New badge: `bg-primary-light text-white`

## Do's
- Use ocean/marine imagery and metaphors throughout
- Keep product cards clean with clear pricing
- Use teal as the dominant brand color
- Coral accent for CTAs and sale items
- Generous whitespace

## Don'ts
- No dark mode (light, airy ocean feel only)
- No harsh black backgrounds
- Don't mix too many accent colors
- No tiny text on teal backgrounds (contrast issue)
