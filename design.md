# Velmora Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount, NOT generic e-commerce.
- **Audience**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette

### Primary Colors
- **Background (Deep Charcoal)**: `#1a1614` — Rich, warm charcoal. NOT pure black.
- **Background Alt (Warm Off-White)**: `#f8f5f1` — Cream ivory for light sections.
- **Card / Surface**: `#241f1c` — Slightly lighter charcoal for cards on dark bg.
- **Card on Light**: `#ffffff` — White cards on light backgrounds.

### Accent
- **Gold Accent**: `#c9a96e` — Warm 18K gold tone. Used for CTA buttons, links, decorative elements.
- **Gold Light**: `#dfc89a` — Lighter gold for hovers and subtle accents.
- **Gold Dark**: `#a88a4e` — Deeper gold for pressed/active states.

### Text Colors
- **Primary Text (on dark)**: `#f0ece7` — Warm off-white, very high contrast on dark bg.
- **Secondary Text (on dark)**: `#b8afa3` — Muted warm gray.
- **Primary Text (on light)**: `#1a1614` — Deep charcoal.
- **Secondary Text (on light)**: `#6b5e52` — Warm medium gray.

### UI
- **Border / Divider**: `#3a322d` — Subtle warm hairline on dark.
- **Border on Light**: `#e5ded6` — Warm light hairline.
- **Overlay**: `rgba(26, 22, 20, 0.85)` — For modals, drawers.

## Typography

### Headings — Cormorant Garamond (Serif)
- **Display / Hero**: `font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: 4.5rem; line-height: 1.05; letter-spacing: 0.02em;`
- **H1**: `font-size: 3rem; font-weight: 400; letter-spacing: 0.015em;`
- **H2**: `font-size: 2.25rem; font-weight: 400; letter-spacing: 0.015em;`
- **H3 / Product Name**: `font-size: 1.125rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;` (UPPERCASE with wide tracking)
- **Overline**: `font-size: 0.75rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;` (Inter, used for labels/tags)

### Body — Inter (Sans-Serif)
- **Body**: `font-family: 'Inter', sans-serif; font-size: 0.9375rem; line-height: 1.65; font-weight: 400;`
- **Body Small**: `font-size: 0.8125rem;`
- **Button**: `font-family: 'Inter', sans-serif; font-weight: 500; font-size: 0.8125rem; letter-spacing: 0.12em; text-transform: uppercase;`
- **Nav Link**: `font-size: 0.8125rem; font-weight: 400; letter-spacing: 0.06em;`

## Spacing Scale
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)
- Section padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Buttons
### Primary (Gold)
- `bg-[#c9a96e] text-[#1a1614] hover:bg-[#dfc89a]`
- `py-3 px-8 uppercase tracking-widest text-xs font-medium`
- Subtle transition, no harsh shadows

### Secondary (Outlined)
- `border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10`
- Same sizing as primary

### Text Link
- `text-[#c9a96e] underline-offset-4 hover:underline`

## Borders & Shadows
- Hairline dividers: `border-b border-[#3a322d]` (dark) or `border-[#e5ded6]` (light)
- Card shadow: `shadow-sm` or very subtle `shadow-[0_2px_20px_rgba(0,0,0,0.08)]`
- No heavy borders, no harsh shadows

## Animations
- Transitions: `transition-all duration-300 ease-in-out`
- Hover transforms: `hover:scale-[1.02]` or `hover:-translate-y-1`
- Fade-in on scroll: subtle opacity + translateY

## Do's
- Use generous whitespace (minimum 4rem between sections on desktop)
- Keep the palette disciplined: charcoal + cream + gold
- Product names in UPPERCASE with wide letter-spacing
- Use editorial image layouts (large, full-width, atmospheric)
- Hairline dividers between sections

## Don'ts
- Don't use pure black (#000) — use warm charcoal (#1a1614)
- Don't use cool grays — always warm-toned
- Don't use heavy drop shadows
- Don't use bright/neon colors
- Don't use rounded corners larger than 2px on cards (keep them editorial/rectangular)
- Don't use emojis or playful UI elements
