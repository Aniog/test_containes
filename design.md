# Design Guidelines - Velmora Fine Jewelry

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial, premium.
- **Palette**: 
  - Background: `#FCFBF7` (Soft Pearl/Off-white)
  - Dark: `#1C1C1C` (Deep Onyx for text/accents)
  - Gold Accent: `#D4AF37` (Metallic Gold - use sparingly)
  - Muted Neutral: `#F5F2ED` (For cards/sections)
- **Typography**:
  - Headings: 'Cormorant Garamond', serif (Elegant, premium)
  - Body/UI: 'Inter', sans-serif (Clean, readable)
  - Product Names: UPPERCASE, letter-spacing: 0.15em

## Components Style
- **Buttons**:
  - Primary: Solid `#1C1C1C` background, white text, no border-radius or very slight (2px).
  - Secondary: Outlined `#1C1C1C`, thin border.
- **Dividers**: Hairline width (0.5px), color: `#E5E5E5`.
- **Shadows**: Very soft, subtle elevation.
- **Gaps/Padding**: Generous whitespace.

## Tailwind Classes
- Heading Serif: `font-serif tracking-tight text-[#1C1C1C]`
- Product Title: `font-serif uppercase tracking-[0.15em] text-[#1C1C1C]`
- UI Sans: `font-sans text-[#1C1C1C]`
- Accent Gold: `text-[#D4AF37]`
- Section Padding: `py-16 md:py-24`
- Max Width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
