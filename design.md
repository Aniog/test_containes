# SSourcing China — Design System

A professional, trustworthy B2B website for a China-based sourcing agent serving overseas buyers.

## Visual Style

- Clean, corporate, international B2B aesthetic.
- Plenty of whitespace, clear hierarchy, and readable typography.
- Professional photography of factories, quality control, warehouses, and shipping.
- No flashy gradients or exaggerated marketing graphics.

## Color Palette

- **Primary (Navy):** `#0F172A` — headings, footer, trust sections.
- **Primary Accent (Teal):** `#0D9488` — CTAs, links, icons, highlights.
- **Primary Accent Hover:** `#0F766E` — button hover states.
- **Background (Light Gray):** `#F8FAFC` — section alternates.
- **Surface (White):** `#FFFFFF` — cards, forms, nav.
- **Text Primary:** `#0F172A` — body headings.
- **Text Secondary:** `#475569` — descriptions, supporting text.
- **Text Muted:** `#64748B` — captions, placeholders.
- **Border:** `#E2E8F0` — dividers, card borders, input borders.

## Typography

- Font family: Inter (Google Fonts), sans-serif fallback.
- Headings: tight line-height (`leading-tight`), medium to bold weight.
- Body: `text-base` to `text-lg`, `leading-relaxed`, `text-slate-600`.

### Scale

- H1: `text-4xl md:text-5xl lg:text-6xl font-bold`
- H2: `text-3xl md:text-4xl font-bold`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg`
- Small/Caption: `text-sm text-slate-500`

## Spacing

- Section padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gaps: `gap-6 md:gap-8`
- Component internal padding: `p-6 md:p-8`

## Components

### Buttons

- Primary: `bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-lg font-medium`
- Secondary/Outline: `border border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-700 px-6 py-3 rounded-lg font-medium`
- Ghost: `text-teal-600 hover:text-teal-700 font-medium`

### Cards

- White background, `rounded-xl`, `shadow-sm`, `border border-slate-100`
- Hover: subtle shadow increase, `hover:shadow-md transition-shadow`

### Forms

- Inputs: `w-full rounded-lg border-slate-300 px-4 py-3 focus:border-teal-500 focus:ring-teal-500`
- Labels: `text-sm font-medium text-slate-700`

### Icons

- Use Lucide React icons.
- Teal color for icons in feature cards.
- Consistent `w-6 h-6` size in cards, `w-5 h-5` in inline contexts.

## Imagery

- Use `data-strk-img` and `data-strk-bg` tags with realistic factory, QC, shipping, and product visuals.
- Reference nearby heading/description IDs in image queries.
- Use 16:9 for hero/process, 4:3 for cards, 1:1 for icons/avatars.

## Responsive

- Mobile-first with `md:` and `lg:` breakpoints.
- Navigation collapses to a hamburger menu on mobile.
- Hero stacks vertically on small screens.
- Grids: 1 col mobile, 2 col tablet, 3-4 col desktop.

## Do's and Don'ts

- Do: keep claims factual and practical.
- Do: use real-world business language.
- Don't: use hype words like "guaranteed," "instant," or "revolutionary."
- Don't: use low-contrast text on backgrounds.
- Don't: use decorative emojis in copy.
