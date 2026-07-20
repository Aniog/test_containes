# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Not loud, not discount-looking.

## Color Palette
- **Background**: `#FAF7F2` (warm off-white / cream)
- **Foreground**: `#1A1A1A` (deep charcoal, near-black)
- **Accent / Gold**: `#C5A265` (warm muted gold)
- **Accent hover**: `#B08D4E` (slightly deeper gold)
- **Muted text**: `#6B6560` (warm gray)
- **Card / section bg**: `#FFFFFF` (pure white for contrast)
- **Hairline divider**: `#E8E2D9` (warm light gray)
- **Dark section bg**: `#1A1A1A` (for newsletter / footer sections)
- **Dark section text**: `#FAF7F2`

## Typography
- **Headings / Serif**: `Cormorant Garamond` (Google Fonts), weight 400/500/600
  - H1: 48-56px, weight 500, line-height 1.1
  - H2: 32-40px, weight 500, line-height 1.2
  - Product names: uppercase, tracking-[0.2em], weight 500, 14-16px
- **Body / Sans**: `Inter`, weight 400/500/600
  - Body: 15-16px, line-height 1.6, weight 400
  - UI labels: 13-14px, weight 500, uppercase with tracking

## Spacing
- Generous whitespace. Sections separated by 80-120px vertical padding.
- Content max-width: 1280px centered.
- Horizontal padding: 16px mobile, 24px tablet, 32-48px desktop.

## Components
- **Buttons**: 
  - Primary: bg-accent, text-white, rounded-none, px-8 py-3, uppercase tracking-wide, hover:bg-accent-hover, transition 300ms
  - Secondary/Outline: border border-foreground, text-foreground, rounded-none, hover:bg-foreground hover:text-background
- **Cards**: bg-white, no border-radius (or 2px), subtle shadow on hover, transition 400ms
- **Dividers**: 1px solid hairline color
- **Inputs**: border-b only, rounded-none, focus:border-accent, bg-transparent

## Animation
- Subtle hover transitions: 300-400ms ease-out
- Image hover: slight scale (1.03) or reveal second image
- Scroll: navbar transitions from transparent to solid
- Cart drawer: slide from right, 300ms ease-out

## Do's and Don'ts
- DO use generous whitespace and large imagery
- DO keep product names in uppercase with wide letter-spacing
- DO use thin hairline dividers
- DON'T use bright colors, gradients, or loud patterns
- DON'T use heavy drop shadows or border-radius on cards
- DON'T use discount-style badges or countdown timers
