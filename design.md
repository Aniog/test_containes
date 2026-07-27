# SSourcing China Design System

## Brand Colors
- Primary: #1e3a5f (deep navy blue) - trustworthy, corporate
- Primary Light: #2d5a87
- Primary Dark: #0f2440
- Accent: #d97706 (amber/orange) - CTAs, highlights
- Accent Light: #f59e0b
- Accent Dark: #b45309
- Background: #ffffff (white)
- Background Alt: #f8fafc (light gray)
- Text: #1e293b (slate-800)
- Text Muted: #64748b (slate-500)
- Border: #e2e8f0 (slate-200)
- Success: #16a34a (green)
- Card Background: #ffffff

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- Small: text-sm text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card gap: gap-6 md:gap-8
- Stack spacing: space-y-4 md:space-y-6

## Components

### Buttons
- Primary CTA: bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg
- Secondary: bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white
- Ghost: text-primary hover:bg-primary/10

### Cards
- bg-white rounded-xl shadow-sm border border-slate-200 p-6
- Hover: shadow-md transition-shadow

### Section Headers
- text-center mb-12 md:mb-16
- Subtitle: text-sm font-semibold text-amber-600 uppercase tracking-wider
- Title: text-3xl md:text-4xl font-bold text-slate-900 mt-2
- Description: text-lg text-slate-600 mt-4 max-w-2xl mx-auto

### Navigation
- Sticky top-0 bg-white/95 backdrop-blur border-b
- Links: text-slate-700 hover:text-primary font-medium
- Active: text-primary

### Footer
- bg-slate-900 text-white
- Links: text-slate-400 hover:text-white
- Divided into columns

### Form Elements
- Input: w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary
- Textarea: same as input with resize-y
- Label: block text-sm font-medium text-slate-700 mb-1

## Do's
- Use consistent spacing (py-16 for sections, gap-6 for grids)
- Use the amber accent sparingly for CTAs and highlights
- Keep layouts clean with plenty of whitespace
- Use shadow-sm on cards, shadow-md on hover
- Use border-slate-200 for all borders
- Use Inter font everywhere

## Don'ts
- Don't use bright/neon colors
- Don't use more than 2-3 font sizes per page
- Don't overcrowd sections
- Don't use black (#000) for text, use slate-800 instead
- Don't use rounded-full for buttons (use rounded-lg)