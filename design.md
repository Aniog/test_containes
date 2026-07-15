# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry.
- **Direction**: Deep warm base + warm metallic accents. Soft neutral/editorial scheme.

## Color Palette
- **Primary Background**: `#FAF7F2` — warm ivory/cream (main page bg)
- **Secondary Background**: `#1A1612` — deep warm espresso (hero overlays, footer, dark sections)
- **Card/Surface**: `#FFFFFF` — clean white (product cards, modals)
- **Accent**: `#C9A96E` — warm gold (buttons, links, highlights)
- **Accent Hover**: `#B8944F` — deeper gold
- **Accent Light**: `#F5EDE0` — soft gold tint (newsletter bg, subtle highlights)
- **Text Primary**: `#1A1612` — deep espresso (headings, body)
- **Text Secondary**: `#6B5E50` — warm medium brown (descriptions, captions)
- **Text Muted**: `#9B8E80` — warm muted (placeholders, disabled)
- **Border**: `#E8E0D4` — warm light border
- **Divider**: `#D4C9B8` — hairline dividers

## Typography
- **Headings**: Cormorant Garamond (serif), weights 400/500/600
- **Body/UI**: Inter (sans-serif), weights 400/500/600
- **Product Names**: UPPERCASE, letter-spacing 0.15em, Cormorant Garamond
- **Section Headings**: Cormorant Garamond, tracking wide

### Tailwind Font Classes
- `font-serif` → Cormorant Garamond
- `font-sans` → Inter (default)

## Spacing & Layout
- Generous whitespace: sections py-20 to py-28 on desktop
- Max content width: 1280px (max-w-7xl)
- Product grid gap: 6-8
- Hairline dividers: h-px bg-border

## Component Styles
- **Buttons**: Solid accent gold bg, white text, rounded-none (sharp corners for premium feel), px-8 py-3, tracking-widest uppercase text-xs font-sans
- **Outlined buttons**: border accent, text accent, hover fill accent
- **Cards**: White bg, subtle shadow on hover, no border radius (or minimal 2px)
- **Inputs**: Border-b style, no box, warm border color
- **Accordions**: Hairline dividers, serif headings
- **Nav**: Transparent over hero, solid cream on scroll, blur backdrop

## Do's
- Use generous whitespace between sections
- Use hairline dividers (1px, warm color)
- Keep hover transitions subtle (200-300ms ease)
- Use soft shadows (shadow-sm to shadow-md)
- Product names always uppercase with wide tracking
- Use serif for emotional/editorial text, sans for functional

## Don'ts
- No rounded buttons (premium = sharp or minimal radius)
- No bright/saturated colors
- No heavy shadows
- No discount/sale aesthetics
- No generic e-commerce look
- Never use text that blends into background
