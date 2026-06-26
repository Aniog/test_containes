# ARTITECT MACHINERY — Design System

## Brand Personality
Industrial precision meets refined elegance. The site should feel like a premium
engineering brand: confident, calm, technically credible, but warm and welcoming
to procurement managers and shop owners who are not engineers.

## Color Palette
- **Primary (Deep Steel Navy)**: `#0E1B2C` — main backgrounds, headlines, footer
- **Surface (Light Steel)**: `#F5F4F0` — light backgrounds, cards on dark sections
- **Surface Elevated**: `#FFFFFF` — cards on light backgrounds
- **Secondary (Warm Graphite)**: `#2C3E50` — secondary text, borders
- **Muted Text**: `#6B7280` — captions, helper text
- **Accent (Brushed Brass)**: `#C8A85B` — primary CTAs, accent strokes, highlights
- **Accent Hover**: `#B59449` — hover state for accent
- **Hairline Border**: `#E5E1D8` — subtle dividers on light surfaces

## Typography
- **Headings**: Inter, weights 600/700, tracking-tight. Section headings often
  paired with an uppercase eyebrow label using `tracking-[0.25em]`.
- **Body**: Inter, weight 400, leading-relaxed for readability.
- **Numeric / Specs**: Inter with `tabular-nums`.
- **Font import**: Google Fonts (Inter 300, 400, 500, 600, 700, 800).

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-20 lg:py-28`.
- Use generous whitespace; never crowd machinery imagery.
- On mobile, sections collapse to `py-14` and content stacks.

## Borders & Shapes
- Default radius: `rounded-lg` (8px). Hero CTAs and product cards: `rounded-xl`.
- Hairline borders: `border border-[#E5E1D8]` on light surfaces.
- Hero / accent panels: subtle inset shadow + 1px brass-tinted top border.

## Shadows
- Cards on light bg: `shadow-[0_2px_24px_-12px_rgba(14,27,44,0.18)]`.
- Elevated product cards on hover: `shadow-[0_24px_60px_-28px_rgba(14,27,44,0.45)]`.

## Buttons
- **Primary (Brass)**:
  `bg-[#C8A85B] hover:bg-[#B59449] text-[#0E1B2C] font-semibold rounded-lg px-6 py-3`
- **Secondary (Outline on dark)**:
  `border border-white/20 hover:border-[#C8A85B] hover:text-[#C8A85B] text-white`
- **Ghost (Text link with arrow)**:
  `text-[#0E1B2C] hover:text-[#C8A85B] inline-flex items-center gap-2`

## Components Rules
- NEVER use text colors that blend with background. Always set explicit
  foreground classes (`text-white`, `text-[#0E1B2C]`, `text-[#6B7280]`).
- Eyebrow label style: `text-xs uppercase tracking-[0.25em] text-[#C8A85B]`.
- Section heading: `text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0E1B2C] tracking-tight`.
- Body: `text-base md:text-lg text-[#2C3E50] leading-relaxed`.
- Product cards: light surface, subtle border, brass accent line on hover.
- Decorative grid lines / diagonal patterns allowed on hero and section dividers.

## Imagery
- Use stock image system (`data-strk-img` and `data-strk-bg`).
- Subjects: industrial sheet-metal machinery, factory floor, folded metal
  panels, precision metalwork, engineers inspecting parts.
- Aspect ratios: 16x9 hero, 4x3 product, 3x2 about.
- Always supply `alt` text using the product/section title.

## Do
- Use uppercase eyebrows with wide tracking.
- Use the brass accent sparingly for emphasis (one accent per viewport zone).
- Pair each heavy heading with a calm supporting paragraph.
- Use icons (Lucide) with `text-[#C8A85B]` for feature lists.

## Don't
- Don't use bright primary colors (red/blue/purple) — stay industrial-elegant.
- Don't crowd sections; prefer fewer products with rich descriptions.
- Don't use gradients on text; use solid colors with proper contrast.
- Don't place light gray text on light background — always ensure ≥ 4.5:1.