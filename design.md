# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette

### Primary — Deep Navy Blue (trust, authority)
- `navy-900`: #0D1B2A — primary text, headings
- `navy-800`: #1B2E45 — dark backgrounds, footer
- `navy-700`: #1E3A5F — section backgrounds
- `navy-600`: #2A4E7C — hover states

### Accent — China Red (energy, action)
- `red-600`: #C0392B — primary CTA buttons
- `red-500`: #E74C3C — hover CTA
- `red-50`: #FEF2F2 — light accent backgrounds

### Secondary — Steel Blue (professional)
- `steel-600`: #2980B9 — links, secondary accents
- `steel-100`: #EBF5FB — light section backgrounds

### Neutral
- `gray-50`: #F8FAFC — page background
- `gray-100`: #F1F5F9 — card backgrounds
- `gray-200`: #E2E8F0 — borders
- `gray-500`: #64748B — body text secondary
- `gray-700`: #334155 — body text primary
- `white`: #FFFFFF — card surfaces, text on dark

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Fallback: system-ui, sans-serif

### Scale
- Display: `text-5xl font-bold` (48px) — hero headlines
- H1: `text-4xl font-bold` (36px) — page titles
- H2: `text-3xl font-semibold` (30px) — section headings
- H3: `text-xl font-semibold` (20px) — card titles
- Body Large: `text-lg` (18px) — lead paragraphs
- Body: `text-base` (16px) — standard text
- Small: `text-sm` (14px) — captions, labels

## Spacing
- Section vertical padding: `py-20` (80px)
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Components

### Primary CTA Button
```
bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors
```

### Secondary Button
```
border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors
```

### Ghost Button (on dark bg)
```
border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold px-8 py-3 rounded-lg transition-colors
```

### Card
```
bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow
```

### Section Heading
```
text-3xl font-bold text-navy-900 mb-4
```

### Section Subheading
```
text-lg text-gray-500 max-w-2xl mx-auto
```

### Badge / Tag
```
bg-steel-100 text-steel-600 text-sm font-medium px-3 py-1 rounded-full
```

## Layout

### Navbar
- Background: white with bottom border on scroll
- Logo: left-aligned, navy text
- Nav links: gray-700, hover navy-800
- CTA button: red-600

### Hero Section
- Background: navy-900 with subtle overlay on image
- Text: white
- Min-height: 90vh

### Alternating Sections
- Light: bg-white or bg-gray-50
- Dark accent: bg-navy-800 (text white)
- Steel accent: bg-steel-100

### Footer
- Background: navy-900
- Text: gray-300 / white

## Do's
- Use navy for authority and trust
- Use red only for primary CTAs and key highlights
- Maintain generous whitespace
- Use real-looking data in case studies
- Keep card grids to 3 columns on desktop, 1 on mobile

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No more than 2 font weights per section
- No decorative gradients that obscure readability
- No exaggerated claims in copy
