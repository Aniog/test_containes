# SSourcing China - Design Guidelines

## Brand Identity
- **Company**: SSourcing China
- **Industry**: B2B Sourcing / Supply Chain
- **Tone**: Professional, trustworthy, clear, practical — no exaggerated claims

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Inter 600-700, tracking tight
- **Body**: Inter 400, leading relaxed
- **Font sizes**: Use Tailwind text scale (text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl)

## Color Palette
- **Primary**: Deep Navy Blue `#1e3a5f` — trust, professionalism, B2B authority
- **Primary Light**: `#2d5a8e` — hover states, accents
- **Accent**: Warm Orange `#e8772e` — CTAs, highlights, energy
- **Accent Hover**: `#d4691f` — CTA hover
- **Background**: White `#ffffff` and Light Gray `#f8f9fb`
- **Text Primary**: Dark Slate `#1e293b`
- **Text Secondary**: Medium Slate `#64748b`
- **Border**: `#e2e8f0`
- **Success**: `#16a34a`
- **Card Background**: White with subtle shadow

## Tailwind Custom Colors
Map these in index.css @theme:
- `primary`: #1e3a5f
- `primary-light`: #2d5a8e
- `accent`: #e8772e
- `accent-hover`: #d4691f

## Layout
- **Max width**: 1280px (max-w-7xl)
- **Section padding**: py-16 md:py-24
- **Card padding**: p-6 md:p-8
- **Grid gaps**: gap-6 md:gap-8
- **Border radius**: rounded-lg for cards, rounded-md for buttons

## Components
- **Buttons**: 
  - Primary: bg-accent text-white hover:bg-accent-hover, px-6 py-3, rounded-md, font-semibold
  - Secondary: border border-primary text-primary hover:bg-primary hover:text-white
  - Ghost: text-primary hover:bg-primary/5
- **Cards**: bg-white rounded-lg shadow-sm border border-gray-100, hover:shadow-md transition
- **Section headers**: text-3xl md:text-4xl font-bold text-primary, with subtitle text-lg text-gray-600

## Visual Style
- Clean, spacious layouts with generous whitespace
- Subtle shadows and borders, never heavy
- Professional photography: factories, quality inspection, shipping containers, warehouses
- Icons from Lucide React for service features
- No gradients on backgrounds — use solid colors
- Use data-strk-img for stock images with factory/QC/shipping themes

## Do's
- Use navy blue as the dominant brand color
- Use orange sparingly for CTAs and key highlights
- Keep layouts clean with plenty of whitespace
- Use professional, realistic imagery
- Ensure high contrast for readability
- Use consistent spacing and alignment

## Don'ts
- Don't use bright or neon colors
- Don't use cartoon or clip-art style imagery
- Don't overcrowd sections with too much text
- Don't use dark backgrounds with dark text
- Don't use more than 2 font families
- Don't use exaggerated marketing language
