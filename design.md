# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of tiny organisms. Deep blacks and dark teals evoke the look of microscope slides and bioluminescent life.

## Color Palette
- Background: `#050d12` (near-black deep ocean)
- Surface: `#0a1a24` (dark teal-black)
- Card: `#0f2535` (dark blue-teal)
- Primary: `#00c9a7` (bioluminescent teal/cyan)
- Primary Dark: `#009e84`
- Accent: `#7b61ff` (violet/purple)
- Accent2: `#ff6b6b` (coral/warm)
- Text Primary: `#e8f4f8` (near-white cool)
- Text Secondary: `#8ab4c4` (muted blue-grey)
- Border: `#1a3a4a`

Add to tailwind config as named colors:
- `cosmos-bg`: #050d12
- `cosmos-surface`: #0a1a24
- `cosmos-card`: #0f2535
- `cosmos-primary`: #00c9a7
- `cosmos-primary-dark`: #009e84
- `cosmos-accent`: #7b61ff
- `cosmos-accent2`: #ff6b6b
- `cosmos-text`: #e8f4f8
- `cosmos-muted`: #8ab4c4
- `cosmos-border`: #1a3a4a

## Typography
- Font: "Space Grotesk" (headings) + "Inter" (body) from Google Fonts
- Hero title: `text-6xl md:text-8xl font-bold tracking-tight`
- Section title: `text-3xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-cosmos-muted`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-cosmos-border`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,201,167,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,201,167,0.3)]`

## Visual Style
- Dark immersive backgrounds with subtle gradients
- Teal/cyan glow accents on key elements
- Image-heavy layout with overlapping text
- Frosted glass cards: `bg-cosmos-card/80 backdrop-blur-sm`
- Gradient text for headings: `bg-gradient-to-r from-cosmos-primary to-cosmos-accent bg-clip-text text-transparent`
- Subtle animated borders and glows

## Do's
- Use dark backgrounds everywhere
- Use teal/cyan as the primary accent color
- Use lots of full-bleed and grid images
- Use gradient overlays on images for text legibility
- Use rounded-2xl for cards

## Don'ts
- No white backgrounds
- No light color schemes
- No small or cramped image grids
- No low-contrast text on dark backgrounds
