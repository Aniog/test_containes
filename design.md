# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-900` | `#0f172a` | Headings, primary text, footer background |
| `navy-800` | `#1e293b` | Secondary surfaces, cards |
| `navy-700` | `#334155` | Body text, borders |
| `slate-50` | `#f8fafc` | Section backgrounds |
| `slate-100` | `#f1f5f9` | Subtle backgrounds |
| `white` | `#ffffff` | Card backgrounds, hero text on dark |
| `blue-600` | `#2563eb` | Primary buttons, links, accents |
| `blue-700` | `#1d4ed8` | Button hover |
| `orange-500` | `#f97316` | CTA emphasis, highlights |
| `orange-600` | `#ea580c` | CTA hover |
| `green-600` | `#16a34a` | Success, trust indicators |
| `gray-500` | `#64748b` | Muted text |

## Typography

- Font: `Inter`, system sans-serif
- Headings: tight line-height (1.1–1.2), font-weight 700–800
- Body: line-height 1.6–1.75, font-weight 400
- Small/labels: uppercase tracking-wide, font-weight 600

## Spacing & Layout

- Max container width: `1280px` (`max-w-7xl`)
- Section vertical padding: `py-16 md:py-24`
- Grid gaps: `gap-6 md:gap-8`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-lg` (8px), `rounded-xl` (12px)

## Components

### Buttons
- Primary: `bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold`
- Outline: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-6 py-3 font-semibold`
- CTA: `bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-4 font-bold text-lg`

### Cards
- White card: `bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8`
- Feature card: icon + title + description, hover shadow transition

### Forms
- Inputs: `w-full rounded-lg border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`
- Labels: `block text-sm font-semibold text-slate-700 mb-1`

## Imagery

- Use realistic factory, QC, shipping, and product photography via `data-strk-img` / `data-strk-bg`.
- Preferred ratios: `16x9` for hero, `4x3` for cards, `1x1` for icons/thumbnails.
- Always include descriptive `alt` text.

## Do's and Don'ts

- Do use generous whitespace and clear hierarchy.
- Do use navy + blue for trust, orange sparingly for CTAs.
- Don't use more than three colors on one section.
- Don't use light gray text on white backgrounds.
- Don't make claims without supporting detail.
