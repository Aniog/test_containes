# Design System — Purple Theme

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Background Deep | `#0f0520` | `bg-[#0f0520]` | Page background |
| Background Mid | `#1a0a35` | `bg-[#1a0a35]` | Section backgrounds |
| Brand Purple | `#9333ea` | `bg-purple-600` | Primary CTA, accents |
| Brand Dark | `#6b21a8` | `bg-purple-800` | Hover states, dark accents |
| Brand Light | `#e9d5ff` | `text-purple-200` | Headings, highlights |
| Accent Violet | `#8b5cf6` | `bg-violet-500` | Secondary accents |
| Text Primary | `#f3e8ff` | `text-purple-100` | Body text |
| Text Muted | `#c4b5fd` | `text-violet-300` | Subtitles, captions |
| Border | `rgba(147,51,234,0.3)` | `border-purple-600/30` | Card borders |

## Typography

- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold`, `text-purple-100` or `text-white`
- **Body**: `font-normal`, `text-purple-100`
- **Muted**: `text-violet-300`
- **H1**: `text-5xl md:text-7xl font-bold`
- **H2**: `text-3xl md:text-4xl font-bold`
- **H3**: `text-xl font-semibold`
- **Body**: `text-base leading-relaxed`

## Spacing

- Section padding: `py-20 px-6`
- Container max-width: `max-w-6xl mx-auto`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows

- Card border: `border border-purple-600/30`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-lg shadow-purple-900/50`
- Hover glow: `hover:shadow-purple-500/30`

## Backgrounds

- Hero: `bg-purple-gradient` (135deg, #3b0764 → #6b21a8 → #9333ea)
- Sections alternate: `bg-[#0f0520]` and `bg-[#1a0a35]`
- Cards: `bg-card-gradient` with `border border-purple-600/30`

## Buttons

- Primary: `bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition`
- Secondary: `border border-purple-500 text-purple-200 hover:bg-purple-900/40 px-6 py-3 rounded-xl transition`

## Do's

- Always use light text (`text-purple-100`, `text-white`) on dark purple backgrounds
- Use `backdrop-blur` for glassmorphism card effects
- Add subtle gradient overlays to sections for depth
- Use `transition` on interactive elements

## Don'ts

- Never use dark text on dark purple backgrounds
- Avoid pure black backgrounds — use deep purple (`#0f0520`) instead
- Don't use unsaturated grays — keep everything in the purple family
