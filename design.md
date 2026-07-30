# Table Tennis Site — Design System

## Brand Identity
A modern, energetic sports site celebrating the speed and precision of table tennis.

## Colors

### Primary Palette
- **Brand Orange** `#f97316` — primary CTA, accents, highlights (`bg-orange-500`, `text-orange-500`)
- **Brand Orange Dark** `#ea580c` — hover states (`bg-orange-600`, `hover:bg-orange-600`)
- **Brand Orange Light** `#fed7aa` — tinted backgrounds (`bg-orange-100`)

### Neutral Palette
- **Navy Dark** `#0f172a` — hero backgrounds, footer (`bg-slate-950`)
- **Navy** `#1e293b` — card backgrounds, nav (`bg-slate-800`)
- **Slate** `#334155` — secondary text on dark (`text-slate-400`)
- **Light Gray** `#f1f5f9` — page backgrounds (`bg-slate-100`)
- **White** `#ffffff` — card surfaces, text on dark (`bg-white`, `text-white`)

### Text
- **Heading on light** `text-slate-900`
- **Body on light** `text-slate-600`
- **Heading on dark** `text-white`
- **Muted on dark** `text-slate-400`

## Typography

### Font
- **Primary**: Inter (loaded via Google Fonts in index.html)

### Scale
- **Hero heading**: `text-5xl md:text-7xl font-extrabold tracking-tight`
- **Section heading**: `text-3xl md:text-4xl font-bold`
- **Card heading**: `text-xl font-semibold`
- **Body**: `text-base text-slate-600 leading-relaxed`
- **Caption / label**: `text-sm font-medium uppercase tracking-widest`

## Spacing & Layout
- **Max content width**: `max-w-6xl mx-auto px-4 md:px-8`
- **Section vertical padding**: `py-16 md:py-24`
- **Card padding**: `p-6 md:p-8`
- **Grid gaps**: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary**: `bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors`
- **Secondary (outline)**: `border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-6 py-3 rounded-full transition-colors`
- **Ghost on light**: `text-orange-500 hover:text-orange-600 font-semibold`

### Cards
- `bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6`
- On dark sections: `bg-slate-800 rounded-2xl p-6`

### Navigation
- Sticky top nav: `bg-slate-950/95 backdrop-blur-sm`
- Nav links: `text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium`
- Active link: `text-orange-400`

### Badges / Tags
- `bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`

### Section Dividers
- Alternate sections between `bg-white` and `bg-slate-50`
- Dark hero/CTA sections use `bg-slate-950`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Images: `rounded-xl` or `rounded-2xl`
- Inputs: `rounded-lg border border-slate-200`

## Shadows
- Cards: `shadow-sm hover:shadow-md`
- Hero image: `shadow-2xl`

## Do's
- Use orange as the single accent color — don't mix in other accent hues
- Keep section headings large and bold for impact
- Use generous whitespace between sections
- Pair dark navy sections with white text for contrast
- Use `rounded-full` for all pill-shaped elements

## Don'ts
- Don't use low-contrast text (e.g. gray on gray)
- Don't use inline styles — always use Tailwind classes
- Don't use arbitrary hex values in JSX — use named Tailwind colors
- Don't stack multiple columns on mobile — use single column below `md:`
