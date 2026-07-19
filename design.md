# Velmora Fine Jewelry Design Guide

## Typography
- **Headings**: Cormorant Garamond (Fonts: 300, 400, 500, 600, 700) - `font-serif`
  - Elegant serif used for main titles, product names, and section headers.
- **Body Context**: Inter (Fonts: 300, 400, 500, 600, 700) - `font-sans`
  - Clean sans-serif used for body text, UI elements, tiny labels, and nav links.
- **Micro-copy & Emphasized Labels**: Uppercase with wide letter spacing (`uppercase tracking-widest text-xs`).

## Color Palette
- **Background**: Warm beige (`#FAF8F5`, `hsl(40 20% 98%)`) - Gives a premium, non-stark feel.
- **Foreground**: Deep brown/black (`#2C2520`, `hsl(20 14% 15%)`) - Softer than pure black but strong contrast.
- **Primary / Accent**: Rich warm gold/bronze (`#9A7B4F`, `hsl(38 45% 42%)`) - Used sparingly for highlights, links, and key CTA buttons.
  - Hover states often invert to background/foreground or use the primary color depending on context.

## Spacing & Layout
- **Generous Whitespace**: High use of padding (py-16, py-24) between sections to let products breathe.
- **Grid Systems**: 4-column bestsellers, 3-column categories. Asymmetric splits for brand story.
- **Thin Dividers**: Use `border-border` (`hsl(35 25% 85%)`) to subtly separate sections or items without heavy visual weight.

## Shapes & Radii
- **Sharp Corners (mostly)**: Minimal corner rounding (`radius: 0.125rem`) to maintain an editorial, mature, magazine-like structure.
- **Hairlines**: 1px borders used extensively but highly transparent/subtle.

## Imagery
- **Aspect Ratios**: 
  - Products mostly use tall aspect ratios e.g., 4:5 (`aspect-[4/5]`) to highlight the verticality of jewelry and models.
  - UGC uses 9:16 (`aspect-[9/16]`) to reflect modern social formats.
- **Hover Reveal**: Extensive use of secondary image reveal on hover to show context (model wearing vs white background component).

## Interactivity
- **Subtle fade-ins**: Images fade in or slightly scale up (`group-hover:scale-105 duration-700`).
- **Button hovers**: Solid buttons invert colors; text links use underline or changing text colors.

## DOs and DON'Ts
**DO:**
- DO let text breathe. Avoid cramming information.
- DO use uppercase carefully on very short labels and product titles.
- DO ensure all text meets contrast rules against the warm beige background.

**DON'T:**
- DON'T use pure black (`#000`) or pure white (`#fff`) extensively; lean into the off-whites and dark-browns.
- DON'T use drop shadows heavily. Stick to borders.
- DON'T over-use the gold secondary color; it should feel like an accent, not the main color of large blocks.