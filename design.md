# SSourcing China — Design Guidelines

## Brand Identity
- **Name**: SSourcing China
- **Industry**: B2B sourcing / supply chain services
- **Tone**: Professional, trustworthy, practical, international
- **Audience**: Overseas buyers, importers, procurement managers

## Typography
- **Primary font**: Inter (Google Fonts)
- **Headings**: Inter, weight 700–800, tracking tight
- **Body**: Inter, weight 400–500, line-height 1.6
- **Small/labels**: Inter, weight 500, size 14px

## Color Palette
- **Primary (Blue)**: `#1B3A5C` — deep navy, used for headings, nav, primary buttons
- **Primary Light**: `#2563EB` — bright blue, used for links, accents, hover states
- **Accent (Gold)**: `#D4A853` — warm gold, used for highlights, CTA borders, trust badges
- **Background**: `#F8F9FA` — off-white, main page background
- **Surface**: `#FFFFFF` — white, cards and sections
- **Text Primary**: `#1B3A5C` — dark navy, all readable text
- **Text Secondary**: `#5A6B7D` — muted slate, descriptions, secondary text
- **Text Muted**: `#8A9BAE` — light slate, placeholders, subtle labels
- **Border**: `#E2E8F0` — light gray, card borders, dividers
- **Success**: `#16A34A` — green, for positive indicators
- **Error**: `#DC2626` — red, for error states

## Tailwind Custom Colors
Map these hex codes to named colors in tailwind.config.js:
- `navy`: #1B3A5C
- `navy-light`: #2563EB
- `gold`: #D4A853
- `slate-muted`: #5A6B7D
- `slate-light`: #8A9BAE

## Spacing & Layout
- **Section padding**: py-16 md:py-24
- **Card padding**: p-6 md:p-8
- **Grid gap**: gap-6 md:gap-8
- **Max content width**: max-w-7xl mx-auto
- **Narrow content**: max-w-3xl mx-auto (for text-heavy sections)

## Visual Style
- Clean, minimal design with generous whitespace
- Cards with subtle shadows: `shadow-sm` or `shadow-md`
- Rounded corners: `rounded-lg` for cards, `rounded-xl` for hero sections
- No heavy gradients; use solid colors or very subtle gradients
- Professional iconography using Lucide React
- Stock images: factory floors, QC inspection, shipping containers, warehouse operations

## Buttons & CTAs
- **Primary CTA**: bg-navy text-white hover:bg-navy-light, rounded-lg, px-6 py-3
- **Secondary CTA**: border-2 border-navy text-navy hover:bg-navy hover:text-white
- **Gold accent CTA**: bg-gold text-navy hover:bg-gold/90, for special highlights
- All buttons: font-semibold, transition-all duration-200

## Cards
- bg-white border border-gray-200 rounded-lg shadow-sm
- Hover: shadow-md transition-shadow
- Image top, content below

## Navigation
- Sticky top nav, bg-white/95 backdrop-blur, border-b border-gray-200
- Logo left, nav links center/right, CTA button right
- Mobile: hamburger menu with slide-down panel

## Footer
- bg-navy text-white
- 4-column grid: Company info, Services, Resources, Contact
- Bottom bar: copyright, legal links

## Do's
- Use navy as the dominant color for trust and authority
- Use gold sparingly for emphasis and warmth
- Keep text readable with high contrast (navy on white, white on navy)
- Use professional, realistic imagery (factories, inspections, logistics)
- Maintain consistent spacing across all sections

## Don'ts
- Don't use bright/saturated colors as backgrounds
- Don't use light text on light backgrounds
- Don't use exaggerated marketing language
- Don't clutter pages with too many elements
- Don't use cartoonish or overly casual imagery
