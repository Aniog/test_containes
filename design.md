# Thalassoria — Design System

## Visual Identity
Deep-ocean bioluminescent aesthetic. The site feels like a living, breathing underwater world — dark, mysterious, and glowing with life.

## Color Palette
- Background: `#020b18` (deep black ocean)
- Surface: `#061d3a` (deep navy)
- Card: `#082444` (ocean dark)
- Border: `rgba(0,212,212,0.15)` (dim cyan)
- Primary accent: `#00d4d4` (cyan glow)
- Secondary accent: `#00ff88` (bio green)
- Tertiary accent: `#00b4ff` (bio blue)
- Highlight: `#8b5cf6` (bio purple)
- Warning/Gold: `#ffd700`
- Text primary: `#e0f7fa`
- Text secondary: `#80deea`
- Text muted: `#4dd0e1`

## Typography
- Font: Inter (Google Fonts)
- Headings: bold, gradient text (cyan/bio/gold)
- Body: `text-[#e0f7fa]` or `text-[#80deea]`
- Labels/badges: `text-[#4dd0e1]` uppercase tracking-widest
- No dark text on dark backgrounds

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Borders & Shadows
- Cards: `border border-[rgba(0,212,212,0.15)] rounded-xl`
- Glow on hover: `box-shadow: 0 0 25px rgba(0,212,212,0.4)`
- Glass: `backdrop-filter: blur(12px)` with semi-transparent bg

## Animations
- Floating elements: `animate-float` (4s ease-in-out)
- Slow drift: `animate-float-slow` (7s)
- Pulse glow: `animate-pulse-glow` (2s)
- Shimmer: `animate-shimmer` (3s)
- Rotate: `animate-rotate-slow` (20s)
- Fade in: `animate-fade-in-up`

## Components
- Buttons: `bg-[#00d4d4]/10 border border-[#00d4d4]/40 text-[#00d4d4] hover:bg-[#00d4d4]/20`
- Primary CTA: `bg-gradient-to-r from-[#00d4d4] to-[#00b4ff] text-[#020b18] font-bold`
- Cards: `.glass` class + `.card-hover`
- Badges: `bg-[color]/20 text-[color] border border-[color]/30 rounded-full px-3 py-1 text-xs`
- Section headers: gradient text + small uppercase label above

## Do's
- Always use gradient text for major headings
- Use glow effects on interactive elements
- Layer multiple translucent backgrounds for depth
- Use hex/grid patterns as subtle backgrounds
- Animate key elements to feel alive

## Don'ts
- No white backgrounds
- No black text
- No flat, non-glowing UI
- No sharp corners on major cards (use rounded-xl or rounded-2xl)
- No dense text without breathing room
