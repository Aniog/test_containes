# Design System — HTML to Markdown Chrome Extension Website

## Brand Identity
A developer-focused tool website with a clean, modern aesthetic. Dark-themed with vibrant accent colors to convey technical precision and productivity.

## Color Palette

### Primary Colors
- Background (dark): `#0f1117` — `bg-[#0f1117]`
- Surface (card): `#1a1d27` — `bg-[#1a1d27]`
- Surface elevated: `#22263a` — `bg-[#22263a]`
- Border: `#2e3347` — `border-[#2e3347]`

### Accent Colors
- Primary accent (purple): `#7c3aed` — `bg-violet-700`, `text-violet-400`
- Secondary accent (cyan): `#06b6d4` — `text-cyan-400`, `bg-cyan-500`
- Gradient: `from-violet-600 to-cyan-500`

### Text Colors
- Heading: `#f1f5f9` — `text-slate-100`
- Body: `#94a3b8` — `text-slate-400`
- Muted: `#64748b` — `text-slate-500`
- Accent text: `#a78bfa` — `text-violet-400`

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Monospace: `font-mono` for code blocks

### Scale
- Hero heading: `text-5xl md:text-7xl font-extrabold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Subheading: `text-xl font-semibold`
- Body: `text-base text-slate-400`
- Small/caption: `text-sm text-slate-500`
- Code: `font-mono text-sm`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-6xl mx-auto px-6`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition`
- Secondary: `border border-[#2e3347] text-slate-300 px-6 py-3 rounded-xl hover:bg-[#22263a] transition`
- Ghost: `text-violet-400 hover:text-violet-300 transition`

### Cards
- Base: `bg-[#1a1d27] border border-[#2e3347] rounded-2xl p-6`
- Hover: `hover:border-violet-500/50 transition`

### Badges
- Feature badge: `bg-violet-500/10 text-violet-400 text-xs font-medium px-3 py-1 rounded-full border border-violet-500/20`

### Code Blocks
- Container: `bg-[#0d1117] border border-[#2e3347] rounded-xl p-4 font-mono text-sm`
- Syntax colors: HTML tags `text-red-400`, attributes `text-yellow-400`, values `text-green-400`, markdown `text-cyan-400`

## Layout
- Navbar: fixed top, `bg-[#0f1117]/80 backdrop-blur-md border-b border-[#2e3347]`
- Hero: full viewport height with gradient background
- Sections: alternating with subtle background variation
- Grid: 3-column on desktop, 1-column on mobile

## Visual Effects
- Gradient text: `bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent`
- Glow effect: `shadow-[0_0_40px_rgba(124,58,237,0.15)]`
- Subtle grid background: CSS grid pattern on hero
- Animated gradient border on feature cards

## Do's
- Use dark backgrounds consistently
- Keep text contrast high (slate-100 on dark backgrounds)
- Use violet/cyan gradient as the primary brand accent
- Use monospace font for all code examples
- Add subtle hover transitions on interactive elements

## Don'ts
- Don't use white backgrounds
- Don't use light text on light backgrounds
- Don't use more than 2 accent colors
- Don't use rounded corners smaller than `rounded-xl` for cards
