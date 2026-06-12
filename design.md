# SSourcing China - Visual Design System

## Brand Voice
Professional, clear, practical B2B. International tone. Trustworthy and operational - no exaggerated claims. Clean, modern, slightly industrial.

## Color Palette

### Primary
- Brand Navy `#0B2545` - primary headings, header background, deep accents
- Brand Blue `#1B4F72` - primary buttons, links, section accents
- Accent Amber `#D97706` - CTA highlights, key numbers, badges (used sparingly)

### Neutrals
- Ink `#0F172A` - body headings
- Slate `#334155` - body text
- Muted `#64748B` - secondary text
- Line `#E2E8F0` - borders/dividers
- Surface `#F8FAFC` - page background sections
- White `#FFFFFF` - cards / hero

### Semantic
- Success `#15803D`
- Warning `#B45309`
- Error `#B91C1C`

## Typography
- Font: Inter (Google Fonts), all weights 300-800
- Headings: font-semibold or font-bold, tracking-tight
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base, leading-relaxed, text-slate-700
- Small/eyebrow: text-sm uppercase tracking-wider text-blue-700

## Spacing
- Section vertical padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Element gap: gap-6 / gap-8

## Components

### Buttons
- Primary: bg-[#1B4F72] hover:bg-[#0B2545] text-white px-6 py-3 rounded-md font-semibold transition
- Secondary: border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-md font-semibold
- CTA Accent: bg-[#D97706] hover:bg-[#B45309] text-white

### Cards
- bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition

### Badges/Eyebrow Labels
- inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1B4F72] bg-blue-50 px-3 py-1 rounded-full

### Section Headers
- Eyebrow + H2 + lead paragraph (max-w-2xl)

## Imagery Style
- Real factory floors, QC inspectors with checklists, shipping containers, port cranes
- Color-balanced, warm-neutral, professional
- Avoid stocky overly-staged business handshakes

## Do's
- Use consistent navy/blue primary, sparing amber accents
- Keep generous whitespace
- Use real data, real numbers ("12+ years", "1,200+ orders shipped")
- Use Lucide icons in brand blue color
- Always pair foreground colors with explicit text classes (text-slate-900, text-white)

## Don'ts
- No gradients except very subtle navy-to-blue in hero
- No pure black backgrounds
- No childish/playful colors
- No purple/pink/teal as primary
- Never light-gray text on white (must be at least slate-600)
