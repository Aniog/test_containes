# Design System — Black Theme

## Visual Identity
A sleek, premium black-themed website with high contrast and electric accent colors.
Inspired by luxury tech brands: dark backgrounds, crisp white text, glowing accents.

## Colors
- Background primary: `#000000` (pure black)
- Background secondary: `#0d0d0d` (near black for sections)
- Background card: `#111111` (card surfaces)
- Background elevated: `#1a1a1a` (hover states, borders)
- Text primary: `#ffffff` (white)
- Text secondary: `#a3a3a3` (muted gray — `text-neutral-400`)
- Text tertiary: `#525252` (subtle — `text-neutral-600`)
- Accent primary: `#c8a96e` (gold — used for highlights, CTAs)
- Accent glow: `#c8a96e33` (gold with opacity for glow effects)
- Border: `#262626` (subtle border — `border-neutral-800`)
- Border accent: `#c8a96e66` (gold border)

## Typography
- Font family: Inter (Google Fonts)
- Heading XL: `text-6xl md:text-8xl font-black tracking-tighter`
- Heading L: `text-4xl md:text-5xl font-bold tracking-tight`
- Heading M: `text-2xl md:text-3xl font-semibold`
- Body: `text-base text-neutral-300`
- Caption: `text-sm text-neutral-500`
- Label/Tag: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-24 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Radius
- Card radius: `rounded-2xl`
- Button radius: `rounded-full`
- Tag radius: `rounded-full`
- Border style: `border border-neutral-800`

## Shadows & Glow
- Card hover: `hover:border-neutral-600 transition-colors`
- Accent glow: `shadow-[0_0_40px_rgba(200,169,110,0.15)]`
- Text glow: use CSS `text-shadow` sparingly on hero headings

## Buttons
- Primary: `bg-[#c8a96e] text-black font-semibold rounded-full px-8 py-3 hover:bg-[#d4b87a] transition-colors`
- Secondary: `border border-neutral-700 text-white rounded-full px-8 py-3 hover:border-neutral-400 transition-colors`
- Ghost: `text-neutral-400 hover:text-white transition-colors`

## Components
- Navbar: fixed top, `bg-black/80 backdrop-blur-md border-b border-neutral-900`
- Hero: full viewport height, centered content, large heading
- Section dividers: subtle `border-t border-neutral-900`
- Feature cards: dark card with icon, title, description
- Tags/Badges: `bg-neutral-900 text-neutral-400 border border-neutral-800 rounded-full px-3 py-1 text-xs`

## Do's
- Use high contrast (white on black)
- Use gold accent sparingly for emphasis
- Use generous whitespace
- Animate on hover with `transition-all duration-300`
- Use `backdrop-blur` for glass effects

## Don'ts
- No light backgrounds
- No colorful gradients (keep it monochrome + gold)
- No small text on dark backgrounds without sufficient contrast
- No cluttered layouts
