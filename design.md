# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud discount cues. Generous whitespace, large imagery, refined typography.

## Color Palette
- Background: warm cream `#F7F3ED` (cream), dark variant `#EDE7DE` (cream-dark)
- Text / base: deep ink `#1B1B1B` (ink), muted `#4A4A4A` (ink-muted)
- Accent: warm gold `#C9A962` (gold), light gold `#D9C28A`, dark gold `#A6883F`
- Supporting: `#E8DEC4` gold-muted, `#B5A89A` stone-warm, `#8C8074` stone-deep

## Typography
- Headings / product names: Cormorant Garamond, elegant serif
- Body / UI: Manrope, clean geometric sans
- Product names are UPPERCASE with wide letter-spacing (`tracking-widest-xl`)

## Spacing & Layout
- Mobile-first, generous padding (`py-16 md:py-24`)
- Max container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Thin hairline dividers: `border-ink/10` or `border-cream/20`

## Components
- Buttons: solid gold (`bg-gold text-ink`) or outlined (`border-ink text-ink`)
- Cards: minimal, soft shadow on hover, image swap on hover
- Inputs: bottom-border or minimal outlined, cream/gold focus ring
- Pills: rounded-full border for variants

## Imagery
- Use `data-strk-img` for stock jewelry images; warm gold on dark/neutral backgrounds
- Placeholder SVG for content images until runtime loads

## Animations
- Subtle transitions `duration-400`
- Fade-in / slide-up on sections
- Hover scale on images `scale-105`
