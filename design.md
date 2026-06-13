# ARTITECT MACHINERY - Design System

## Overview
An elegant, industrial-themed website for a sheet metal machinery manufacturer. The design balances precision engineering aesthetics with warm, approachable usability.

## Color Palette
- **Primary Dark**: `#1a1a2e` — Deep navy-black for headers and primary text
- **Primary Accent**: `#c9a96e` — Warm champagne gold for highlights, buttons, accents
- **Secondary Accent**: `#8b7355` — Rich bronze for secondary highlights
- **Background Light**: `#f5f5f0` — Warm off-white for page backgrounds
- **Background Dark**: `#1a1a2e` — Dark sections (hero, footer)
- **Surface**: `#ffffff` — Cards and elevated surfaces
- **Text Primary**: `#1a1a2e` — On light backgrounds
- **Text Secondary**: `#6b6b7b` — Muted text, descriptions
- **Text Light**: `#f5f5f0` — On dark backgrounds
- **Border**: `#e0dcd4` — Subtle dividers
- **Success**: `#2d6a4f` — Confirmation states

## Typography
- **Headings**: Inter, weight 700/800. H1: 3.5rem (56px), H2: 2.25rem (36px), H3: 1.5rem (24px)
- **Body**: Inter, weight 400/500. Body: 1rem (16px), line-height 1.6
- **Small/Caption**: Inter, weight 400. 0.875rem (14px)
- **Labels/Buttons**: Inter, weight 600. 0.875rem (14px), uppercase, letter-spacing 0.05em

## Spacing
- Section padding: `py-20 px-6` desktop, `py-16 px-4` mobile
- Container max-width: `max-w-7xl mx-auto`
- Card padding: `p-6` to `p-8`
- Element gaps: `gap-6` standard, `gap-4` tight, `gap-8` spacious

## Components

### Buttons
- **Primary**: bg-[#c9a96e], text-[#1a1a2e], px-6 py-3, font-semibold, uppercase tracking-wide, hover:bg-[#b8975e]
- **Secondary/Outline**: border-2 border-[#c9a96e], text-[#c9a96e], px-6 py-3, hover:bg-[#c9a96e] hover:text-[#1a1a2e]
- **Ghost on dark**: border border-[#f5f5f0]/30, text-[#f5f5f0], hover:bg-[#f5f5f0]/10

### Cards
- Background: white, border: 1px solid `#e0dcd4`
- Border-radius: 8px
- Shadow: `shadow-sm` default, `shadow-md` on hover
- Hover: subtle translate-y -2px, shadow increase

### Navigation
- Fixed top, bg-white/95 with backdrop-blur
- Height: 72px
- Logo left, nav links center/right
- Mobile: hamburger menu, slide-down overlay

## Layout Patterns
- Full-width hero with dark overlay on background image
- Alternating light/dark sections
- 3-column product grid (desktop), 1-column (mobile)
- 2-column feature split (image + text)

## Do's and Don'ts
- **DO** use generous whitespace between sections
- **DO** use the gold accent sparingly for impact
- **DO** ensure all text has strong contrast
- **DON'T** use more than 2 accent colors
- **DON'T** use rounded corners larger than 8px
- **DON'T** clutter the layout — keep it clean and industrial
