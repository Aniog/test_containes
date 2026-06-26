# ARTITECT MACHINERY - Design Guidelines

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Industry**: Industrial machinery / Sheet metal folding equipment
- **Style**: Elegant but user-friendly — industrial precision meets refined design

## Color Palette

### Primary Colors
- **Deep Navy**: `#0B1D3A` — Main background for hero and dark sections. Tailwind: `bg-[#0B1D3A]`
- **Steel Blue**: `#1E3A5F` — Secondary dark sections, card backgrounds. Tailwind: `bg-[#1E3A5F]`
- **Brass Gold**: `#C8963E` — Accent color for highlights, CTAs, borders. Tailwind: `text-[#C8963E]`, `bg-[#C8963E]`
- **Light Gold**: `#E2B866` — Hover states, secondary accents. Tailwind: `text-[#E2B866]`

### Neutral Colors
- **White**: `#FFFFFF` — Text on dark backgrounds, card backgrounds
- **Off-White**: `#F5F5F0` — Light section backgrounds. Tailwind: `bg-[#F5F5F0]`
- **Light Gray**: `#E8E8E4` — Borders, dividers. Tailwind: `border-[#E8E8E4]`
- **Medium Gray**: `#6B7280` — Secondary text. Tailwind: `text-gray-500`
- **Dark Charcoal**: `#1A1A2E` — Body text on light backgrounds. Tailwind: `text-[#1A1A2E]`

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font-weight 700-800, letter-spacing tight, uppercase for section titles
- **Body**: Font-weight 400, line-height 1.6-1.8
- **Accent text**: Font-weight 500-600, letter-spacing wide for labels

### Scale
- Hero title: `text-5xl md:text-6xl lg:text-7xl`
- Section title: `text-3xl md:text-4xl lg:text-5xl`
- Card title: `text-xl md:text-2xl`
- Body: `text-base md:text-lg`
- Small/Label: `text-sm`

## Spacing
- Section padding: `py-20 md:py-28 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Card borders: `border border-[#E8E8E4]` on light, `border border-white/10` on dark
- Card shadows: `shadow-lg` or `shadow-2xl`
- Rounded corners: `rounded-lg` for cards, `rounded-full` for buttons
- Gold accent lines: `h-1 w-16 bg-[#C8963E]` for section dividers

## Buttons
- **Primary CTA**: `bg-[#C8963E] text-white hover:bg-[#E2B866]` with `px-8 py-3 rounded-full font-semibold`
- **Secondary CTA**: `border-2 border-[#C8963E] text-[#C8963E] hover:bg-[#C8963E] hover:text-white` with `px-8 py-3 rounded-full font-semibold`
- **On dark backgrounds**: Same styles work with sufficient contrast

## Visual Elements
- Subtle gold accent lines under section titles
- Clean geometric patterns or industrial imagery
- Generous whitespace for elegance
- Smooth hover transitions (`transition-all duration-300`)

## Do's
- Use generous whitespace to convey elegance
- Use brass/gold accents sparingly for emphasis
- Keep typography clean and well-spaced
- Use high contrast between text and backgrounds
- Maintain consistent spacing rhythm

## Don'ts
- Don't use bright or neon colors
- Don't overcrowd sections with too much content
- Don't use more than 2 font weights in a single component
- Don't use low-contrast text (e.g., light gray on white)
- Don't use rounded corners larger than `rounded-lg` on cards
