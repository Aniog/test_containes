# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. The visual language communicates trust, quality, and technical mastery while remaining approachable and user-friendly.

## Color Palette

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Navy Deep | #0F1C2E | `bg-[#0F1C2E]` | Primary backgrounds, navbar |
| Navy Mid | #1A2E45 | `bg-[#1A2E45]` | Section backgrounds, cards |
| Gold | #C9A84C | `text-[#C9A84C]` | Accent, CTAs, highlights |
| Gold Light | #E8C96A | `text-[#E8C96A]` | Hover states on gold |
| Warm White | #F8F6F1 | `bg-[#F8F6F1]` | Light section backgrounds |
| Off White | #EDE9E0 | `bg-[#EDE9E0]` | Subtle section dividers |
| Charcoal | #1A1A2E | `text-[#1A1A2E]` | Body text on light backgrounds |
| Muted | #6B7280 | `text-gray-500` | Secondary text |
| White | #FFFFFF | `text-white` | Text on dark backgrounds |

## Typography

- **Font Family**: Inter (Google Fonts)
- **Display / Hero**: `text-5xl md:text-7xl font-bold tracking-tight`
- **Section Heading**: `text-3xl md:text-4xl font-bold`
- **Sub-heading**: `text-xl md:text-2xl font-semibold`
- **Body**: `text-base font-normal leading-relaxed`
- **Caption / Label**: `text-sm font-medium tracking-widest uppercase`

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for pills/badges

## Components

### Buttons
- **Primary CTA**: `bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0F1C2E] font-semibold px-8 py-3 rounded-full transition-all duration-300`
- **Secondary / Outline**: `border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F1C2E] font-semibold px-8 py-3 rounded-full transition-all duration-300`
- **Ghost (dark bg)**: `text-white hover:text-[#C9A84C] transition-colors duration-200`

### Cards
- Dark variant: `bg-[#1A2E45] rounded-xl p-6 border border-white/10`
- Light variant: `bg-white rounded-xl p-6 shadow-lg border border-gray-100`

### Navbar
- Sticky, dark background `bg-[#0F1C2E]/95 backdrop-blur-sm`
- Logo in gold accent
- Links: white with gold hover

### Section Dividers
- Gold accent line: `w-16 h-1 bg-[#C9A84C] rounded-full`

## Do's
- Use gold sparingly as an accent — it should feel premium, not garish
- Maintain generous whitespace for an elegant feel
- Use uppercase tracking-widest for labels and category tags
- Pair dark navy sections with light warm-white sections for rhythm
- Use subtle border/shadow on cards rather than heavy drop shadows

## Don'ts
- Don't use pure black (#000) backgrounds — use navy deep instead
- Don't use bright/saturated colors other than gold accent
- Don't crowd elements — spacing is part of the elegance
- Don't use more than 2 font weights in a single component
- Don't use default blue links — override with gold or white
