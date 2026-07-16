# Velmora Fine Jewelry — Design System

## Overview
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45.
The brand is premium-but-accessible ($30–$120). The design should feel
luxurious, warm, and editorial — NOT loud, NOT discount-looking, NOT generic.

## Color Palette

### Primary
- `velmora-bg`: #FDFBF7 (warm cream/ivory — main page background)
- `velmora-text`: #1A1A1A (near-black — primary text)
- `velmora-text-secondary`: #6B635B (warm taupe — secondary text/meta)
- `velmora-gold`: #C9A96E (warm gold — accent / CTAs / highlights)
- `velmora-gold-hover`: #B8954E (darker gold — hover states)
- `velmora-border`: #E5DED5 (warm light beige — dividers, borders)
- `velmora-card`: #FFFFFF (white — card backgrounds)
- `velmora-muted`: #F5F0EB (warm light — muted/section backgrounds)
- `velmora-foreground`: #1A1A1A (text on light backgrounds)

### Accessibility
- velmora-gold (#C9A96E) on velmora-bg (#FDFBF7): contrast ratio ~3.1:1 — acceptable for large/decorative text and UI elements. For body text, use velmora-text (#1A1A1A) on white/cream backgrounds.
- All interactive text meets WCAG AA.

## Typography

### Headings / Serif
- Font family: 'Cormorant Garamond', serif
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold)
- Letter-spacing: normal or slightly tight for editorial feel
- Uses: Hero headlines, section titles, product names, logo

### Body / Sans-serif
- Font family: 'Inter', sans-serif
- Weights: 300 (light), 400 (regular), 500 (medium)
- Uses: Body text, navigation, buttons, UI labels, price, captions

### Product Names
- UPPERCASE
- letter-spacing: 0.08em to 0.12em
- Serif font (Cormorant Garamond)

## Spacing & Layout
- Generous whitespace: section padding `py-16 md:py-24`
- Max container width: `max-w-7xl mx-auto`
- Grid gaps: `gap-6 md:gap-8`
- Thin hairline dividers: `border-t border-[#E5DED5]`

## Visual Elements

### Buttons
- Primary: bg-velmora-gold text-white, hover:bg-velmora-gold-hover
- Outline: border-velmora-gold text-velmora-gold, hover:bg-velmora-gold hover:text-white
- Both: rounded-none, px-8 py-3, uppercase, tracking-widest, text-xs

### Shadows
- Card hover: shadow-lg, transition-all duration-300
- Soft: shadow-sm, shadow-md

### Transitions
- All interactive: duration-300 ease-in-out
- Image hover: scale-105 on overlay

### Borders
- Hairline: border-[0.5px] or border
- Color: velmora-border (#E5DED5)

## DO's
- Use generous whitespace
- Gold as accent color only (not overwhelming)
- Product images with warm, editorial lighting
- Thin, elegant dividers
- Uppercase with wide tracking for product names
- Serif for headings, sans-serif for UI

## DON'Ts
- Don't use loud or bright colors
- Don't use heavy borders
- Don't use discount/clearance visuals
- Don't use generic stock photos
- Don't overcrowd sections
- Don't use black-on-gold for body text