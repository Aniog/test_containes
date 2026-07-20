# Velmora Fine Jewelry — Design System

## Color Palette
- **Primary (Gold)**: `#B8860B` (Dark Goldenrod) — Used for accents, CTAs, hover states
- **Primary Light**: `#D4A843` — Lighter gold for subtle accents
- **Background**: `#FEFCF8` — Warm white, main page background
- **Background Alt**: `#F8F4EE` — Slightly warmer, for alternating sections
- **Card/Surface**: `#FFFFFF` — Pure white for cards and surfaces
- **Text Primary**: `#1A1A1A` — Near-black for headings and body text
- **Text Secondary**: `#6B6B6B` — Muted text for descriptions
- **Text Muted**: `#9A9A9A` — Placeholders, disabled states
- **Border**: `#E8E2D8` — Warm grey borders and dividers
- **Border Light**: `#F0EBE3` — Hairline dividers

## Typography
- **Headings/Logo**: `'Cormorant Garamond', serif` — Elegant, editorial feel
- **Body/UI**: `'Inter', sans-serif` — Clean, modern readability
- **Product Names**: Uppercase with `tracking-[0.15em]` letter-spacing
- **Weights**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)

## Spacing & Layout
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-16 md:py-24` (generous whitespace)
- **Card Padding**: `p-6`
- **Border Radius**: `rounded-lg` for cards, `rounded-full` for buttons/pills

## Shadows
- **Card**: `shadow-sm hover:shadow-md` — Subtle elevation
- **Button**: None (flat, premium feel)
- **Modal/Drawer**: `shadow-xl`

## Components Style
- **Buttons**: Solid gold with white text, or outlined gold with gold text
- **Inputs**: Clean borders, minimal, focus ring in gold
- **Cards**: White background, thin warm border, subtle hover shadow
- **Dividers**: Thin `border-border-light` or `border-border`

## Animations
- **Hover Transitions**: `transition-all duration-300 ease-in-out`
- **Scale on hover**: Cards scale `hover:scale-[1.02]`
- **Fade in**: `animate-fadeIn` for content loading
- **Slide up**: For modals and drawers

## Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)
