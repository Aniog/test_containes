# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry targeting women 25-45.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, the primary page background
- **Background Alt (pearl):** `#F3EDE4` — slightly deeper warm tone for alternating sections
- **Surface (white):** `#FFFFFF` — cards, elevated surfaces
- **Text Primary (charcoal):** `#1C1917` — near-black warm charcoal for headings and body
- **Text Secondary (warm gray):** `#78716C` — muted warm gray for secondary text
- **Text Tertiary (stone):** `#A8A29E` — light labels, placeholders
- **Accent (gold):** `#B8960B` — primary gold accent for buttons, links, highlights
- **Accent Hover (deep gold):** `#96790A` — darker gold for hover states
- **Accent Light (gold wash):** `#F5ECD7` — very light gold for subtle backgrounds
- **Border (warm hairline):** `#E7E0D5` — thin dividers, card borders
- **Overlay:** `rgba(28, 25, 23, 0.6)` — modal/drawer overlays

## Typography
- **Headings / Logo:** Cormorant Garamond (serif), weights 300–600
- **Body / UI:** Inter (sans-serif), weights 300–600
- **Product names:** uppercase, letter-spacing 0.15em, font-weight 500
- **Section titles:** Cormorant Garamond, weight 400, text-transform uppercase, letter-spacing 0.1em
- **Body text:** Inter, weight 400, line-height 1.6

## Spacing & Layout
- Generous whitespace: section padding 80px–120px vertically on desktop
- Container max-width: 1280px, centered
- Grid gap: 24px–32px
- Card border-radius: 8px
- Button border-radius: 4px (slightly rounded, not pill)

## Dividers
- Thin hairline borders: 1px solid #E7E0D5
- Section separators use subtle divider with generous vertical padding

## Buttons
- **Primary (accent):** solid gold background #B8960B, white text, 4px radius
- **Primary Hover:** #96790A background
- **Secondary (outline):** transparent bg, 1px gold border, gold text
- **Ghost:** no border, subtle hover background
- **Letter-spacing:** 0.08em, uppercase, font-size 13px, font-weight 500

## Shadows
- **Card:** `0 1px 3px rgba(0,0,0,0.06)` subtle soft shadow
- **Card Hover:** `0 8px 25px rgba(0,0,0,0.08)` elevated on hover
- **Nav:** `0 1px 0 rgba(0,0,0,0.05)` thin bottom shadow

## Animations
- Transitions: 200–300ms ease
- Hover scale on product images: 1.05
- Smooth fade-ins for page transitions
- Subtle slide-up for drawer/modals

## Do's
- Use generous whitespace
- Keep backgrounds warm and neutral
- Use gold accents sparingly for maximum impact
- Maintain high contrast for accessibility
- Use editorial grid layouts

## Don'ts
- Don't use bright or saturated colors
- Don't use rounded pill buttons
- Don't add too many visual effects
- Don't use harsh black (#000000), use warm charcoal instead
- Don't crowd elements together

## Tailwind Custom Classes
- bg-cream: #FAF7F2
- bg-pearl: #F3EDE4
- bg-gold: #B8960B
- bg-gold-dark: #96790A
- bg-gold-wash: #F5ECD7
- text-charcoal: #1C1917
- text-warm-gray: #78716C
- text-stone: #A8A29E
- text-gold: #B8960B
- border-warm: #E7E0D5
- font-serif: Cormorant Garamond
- font-sans: Inter
