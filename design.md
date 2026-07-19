# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Restrained, sophisticated, never loud or discount-looking. Generous whitespace, hairline dividers, subtle hover transitions.

## Color Palette
- **Ivory** (`#F5EFE6`) — primary background, warm neutral
- **Espresso** (`#1A1410`) — primary text & deep surfaces
- **Brushed Gold** (`#B08850`) — accent / CTAs / highlights
- **Gold Hover** (`#9A6F3D`) — darker gold for hover
- **Taupe** (`#A89A8C`) — secondary text, captions
- **Sand** (`#E8DFD2`) — soft section backgrounds
- **Hairline** (`#D8CFC1`) — dividers, borders
- **White** (`#FFFFFF`) — cards, product surfaces
- **Warm Black** (`#0E0A07`) — hero overlays, footer

## Typography
- **Heading font:** Cormorant Garamond (serif, weights 300, 400, 500, 600)
  - Used for: page H1, section titles, product names, brand logo, editorial captions
  - Tracking: tight for H1, wide letter-spacing (0.15em) for product names in UPPERCASE
- **Body font:** Inter (sans-serif, weights 300, 400, 500, 600)
  - Used for: nav links, body, buttons, UI text
  - Tracking: 0.1em uppercase for nav links and tags

## Layout Principles
- Max-width: `max-w-7xl` (1280px) for content, `max-w-screen-2xl` for hero/full-bleed
- Generous vertical rhythm: `py-20` (80px) section spacing desktop, `py-12` mobile
- Hairline dividers: `border-t border-hairline` (1px)
- Section padding: `px-6 md:px-10 lg:px-16`

## Buttons
- **Primary (solid gold):** `bg-gold text-white hover:bg-goldHover tracking-widest uppercase text-xs font-medium py-4 px-10`
- **Secondary (outlined):** `border border-espresso text-espresso hover:bg-espresso hover:text-white`
- **Underline link:** serif italic, with animated underline

## Cards & Surfaces
- Product cards: white background, no border, soft shadow `shadow-[0_2px_20px_rgba(26,20,16,0.06)]`
- Hover: subtle lift `translate-y-[-4px]`, second image fade-in
- Section backgrounds alternate: ivory, white, sand

## Icons
- `lucide-react` line icons at 1.5px stroke, sized `w-5 h-5` (UI) or `w-6 h-6` (feature)
- Star rating: filled gold stars, `text-gold`

## Do's
- Use Cormorant for any editorial / brand moment
- UPPERCASE + wide tracking for product names and nav
- Generous whitespace — never crowd
- Warm, soft shadows
- Restrained accent color (gold) — never overuse
- Maintain a consistent warm cream surface throughout

## Don'ts
- No bright primary colors, no neon, no discount red
- No harsh black (#000) — use warm espresso
- No bold sans-serif headlines (no Inter Bold for H1)
- No flat icons, no emojis in UI
- No more than 1 button color per view
- No overcrowding — when in doubt, add whitespace
