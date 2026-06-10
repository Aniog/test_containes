# SSourcing China - Design System

## Brand & Tone
- Professional B2B sourcing agent
- Trustworthy, international, clear, practical
- No exaggerated claims; concrete and specific
- Audience: overseas buyers, importers, Amazon sellers, brand owners

## Color Palette
- **Primary Navy** `#0B2545` — primary brand, headers, dark sections
- **Primary Navy Deep** `#081B33` — darker variant for footer, deep contrast
- **Primary Navy Light** `#13315C` — secondary headings, hover states
- **Accent Orange** `#E8743B` — primary CTA color, accent highlights
- **Accent Orange Hover** `#CC6230` — hover state for CTAs
- **Steel Blue** `#4A6FA5` — secondary accent, links, info badges
- **Warm Gray 50** `#F8F9FB` — light background
- **Warm Gray 100** `#EEF1F6` — section background alt
- **Warm Gray 200** `#DDE2EC` — borders, dividers
- **Warm Gray 500** `#6B7A90` — secondary text
- **Warm Gray 700** `#3D4A5C` — body text
- **Warm Gray 900** `#1A2230` — headings
- **White** `#FFFFFF` — card backgrounds, light surfaces
- **Success Green** `#1E8E5A` — success badges
- **Warning Amber** `#C77A0A` — warning highlights

## Typography
- Font: Inter (300, 400, 500, 600, 700, 800)
- Headings: bold, navy color
- Body: regular, gray-700
- Hero headline: text-4xl to text-6xl, font-extrabold
- Section headlines: text-3xl to text-4xl, font-bold
- Subheadlines: text-lg, font-medium, steel blue
- Body: text-base, leading-relaxed
- Small captions: text-sm, gray-500

## Spacing
- Container max-width: 1280px (7xl) with px-4 sm:px-6 lg:px-8
- Section vertical padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element gap: gap-4 to gap-8

## Borders & Shadows
- Card borders: border border-gray-200 with rounded-xl
- Subtle shadow: shadow-sm hover:shadow-md transition
- Strong shadow: shadow-lg for primary cards
- No large drop shadows; keep professional restraint
- Border radius: rounded-md (6px) for inputs/buttons, rounded-xl (12px) for cards, rounded-2xl for hero features

## Buttons
- **Primary CTA** — `bg-[#E8743B] hover:bg-[#CC6230] text-white font-semibold px-6 py-3 rounded-md shadow-sm`
- **Secondary CTA** — `bg-white text-[#0B2545] border border-[#0B2545] hover:bg-[#0B2545] hover:text-white font-semibold px-6 py-3 rounded-md`
- **Tertiary / link** — `text-[#0B2545] hover:text-[#E8743B] font-medium underline-offset-4`

## Components Patterns
- **Section header**: Eyebrow tag (uppercase, steel blue, small), large heading, subheadline, optional CTA link
- **Cards**: White bg, rounded-xl, border, subtle shadow on hover
- **Trust badges**: Pill-shape with icon + text in steel-blue or navy
- **Process step**: Numbered circle in navy, vertical timeline, large step title
- **Stat**: Big bold number in navy, supporting label below in gray
- **FAQ**: Border-bottom items, expand/collapse with smooth transition
- **Form fields**: Border-b or full border, focus:ring-2 ring-[#E8743B]/30, clear labels

## Imagery
- Realistic B2B visuals: factory floors, QC inspectors with clipboards, shipping containers, port cranes, product warehouses, supplier meetings, signed contracts
- Use `data-strk-img` and `data-strk-bg` with contextual search queries
- Always use referenced DOM text IDs in image search queries

## Layout Grid
- Two-column on desktop (text + image), single column on mobile
- Service cards: 1 col mobile, 2 col tablet, 3 col desktop
- Process steps: stacked vertical with timeline on desktop
- Stats: 2x2 on mobile, 4x1 on desktop

## Do's
- Use ample whitespace
- Pair every claim with concrete mechanism or example
- Use icons (Lucide) for visual structure
- Maintain consistent vertical rhythm
- Use semantic HTML
- Show clear navigation paths and CTAs

## Don'ts
- Don't use exaggerated marketing claims ("#1", "best", "guaranteed lowest")
- Don't use bright neon colors or playful illustrations
- Don't use stock photos of "diverse handshakes" or other clichéd B2B imagery
- Don't use heavy gradients; prefer flat colors
- Don't use low-contrast text
