# Velmora Fine Jewelry — Design System

## Brand Identity
Velmora is a premium demi-fine gold jewelry brand. The visual identity balances editorial luxury with approachable warmth. The brand voice is refined, confident, and understated.

## Color Palette
- **Background**: warm-white (#fcf9f6) — a soft, creamy off-white
- **Text**: charcoal (#1a1412) — deep warm black for body and headings
- **Accent**: gold-500 (#c8a06e) — a warm, muted gold for CTAs, highlights, borders, and accents
- **Supporting neutrals**: velmora family (50–950) — warm brown-grey tones ranging from cream to nearly black
- **Gold family**: 50–600 — warm gold tones for backgrounds, badges, and decorative elements
- Do NOT use cold blues, greens, or grays. Everything should feel warm, editorial, and tactile.

## Typography
- **Headings**: 'Cormorant Garamond', Georgia, serif — weight 600, letter-spacing 0.01em
- **Product names**: same as headings + uppercase + letter-spacing 0.08em (use `.product-name` class)
- **Section titles**: '.section-title' class — 2rem (mobile) / 2.5rem (desktop), letter-spacing 0.02em
- **Body / UI**: 'Inter', system-ui, sans-serif — weight 400/500
- **Navigation / buttons**: uppercase, letter-spacing 0.08–0.12em, small size
- **Pull quotes**: italic Cormorant Garamond for testimonials

## Spacing & Layout
- Max content width: 80rem (1280px) with 1.25rem (mobile) / 2rem (desktop) horizontal padding
- Section padding: py-16 (mobile) / py-24 (desktop)
- Generous whitespace between sections and elements

## Borders & Dividers
- Hairline dividers: 1px solid velmora-200 (#ded1c6)
- Thin borders on cards and inputs
- Rounded corners: rounded-sm (subtle, editorial)

## Buttons
- **Primary (btn-primary)**: charcoal background, white text, uppercase, tracking-wider, padding 0.875rem 2rem. Hover: velmora-700
- **Outline (btn-outline)**: transparent bg, charcoal border + text, same sizing. Hover: fills charcoal
- **Gold accent buttons**: gold-500 background, white text, tracking-wider

## Transitions & Interactions
- Duration: 0.3s ease for most transitions
- Image hover: scale(1.05) over 0.5s
- Button hover: background/border color transition
- Navbar: transparent at top, turns bg-warm-white/95 at scroll > 60px
- Product cards: second image on hover, quick-add button slides up
- Category tiles: label appears on hover with opacity + translate

## Component Do's
- Use serif for headings, product names, testimonials
- Use uppercase + tracking for nav links and button labels
- Use hairline dividers between sections
- Show cart badge count on the bag icon
- All images should feel warm, editorial, jewelry-focused
- Cart drawer should slide in from right with overlay

## Component Don'ts
- Don't use cold or blue tones
- Don't use heavy borders or box shadows (subtle only)
- Don't use generic e-commerce design patterns
- Don't use sans-serif for headings
- Don't use emoji or casual language