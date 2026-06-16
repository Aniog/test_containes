# ARTITECT MACHINERY - Design System

## Brand Identity
ARTITECT MACHINERY is a professional manufacturer of sheet metal folding machines. The design conveys industrial precision, engineering excellence, and premium quality.

## Color Palette

### Primary (Deep Navy / Industrial Blue)
- `brand-900`: #0a1628 (darkest navy - backgrounds)
- `brand-800`: #0f2240 (dark navy - header, footer)
- `brand-700`: #162d50 (medium navy)
- `brand-600`: #1e3a5f (navy accents)
- `brand-500`: #2563eb (primary blue - buttons, CTAs)

### Accent (Steel Orange / Warning)
- `accent-500`: #f97316 (orange - highlights, CTAs)
- `accent-600`: #ea580c (darker orange hover)

### Neutral (Steel Grays)
- `steel-50`: #f8fafc (lightest backgrounds)
- `steel-100`: #f1f5f9 (card backgrounds)
- `steel-200`: #e2e8f0 (borders)
- `steel-300`: #cbd5e1 (dividers)
- `steel-400`: #94a3b8 (muted text)
- `steel-500`: #64748b (secondary text)
- `steel-600`: #475569 (body text)
- `steel-700`: #334155 (headings)
- `steel-800`: #1e293b (dark headings)
- `steel-900`: #0f172a (near-black)

### Semantic
- `success`: #10b981
- `error`: #ef4444
- `warning`: #f59e0b

## Typography

### Font Family
- Primary: Inter (headings and body)
- Monospace: JetBrains Mono (technical specs)

### Hierarchy
- H1: text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight
- H2: text-3xl md:text-4xl font-bold
- H3: text-xl md:text-2xl font-semibold
- H4: text-lg md:text-xl font-semibold
- Body: text-base leading-relaxed
- Small: text-sm
- Caption: text-xs uppercase tracking-widest

## Spacing & Layout
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg
- Secondary: bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg
- Outline: border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white

### Cards
- White background with subtle shadow: bg-white rounded-xl shadow-sm hover:shadow-lg
- Border: border border-steel-200
- Image aspect ratio: aspect-[4/3] or aspect-video

### Navigation
- Fixed top navbar with backdrop blur
- Dark background: bg-brand-800/95 backdrop-blur-md
- Logo on left, links center, CTA right

### Hero Sections
- Full-width with stock background image overlay
- Dark overlay for text readability
- Large heading + subtitle + CTA buttons

## Do's
- Use the brand navy for headers, footers, and key sections
- Use accent orange sparingly for CTAs and highlights
- Maintain generous whitespace between sections
- Use stock images showing industrial machinery, metalwork, factories
- Keep text highly readable with strong contrast
- Use responsive layouts with Tailwind breakpoints

## Don'ts
- Don't use bright or flashy colors
- Don't overcrowd sections
- Don't use low-contrast text combinations
- Don't use decorative fonts - keep it industrial and clean
