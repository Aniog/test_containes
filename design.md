# Design System — Fictional Inventions Museum

## Visual Identity
A dark, immersive museum aesthetic evoking wonder, mystery, and retro-futurism. Think deep space observatory meets Victorian curiosity cabinet.

## Color Palette

### Backgrounds
- Page background: `bg-[#080c18]` (near-black deep navy)
- Card/surface: `bg-[#0f1629]` (dark navy)
- Card hover: `bg-[#141d35]`
- Elevated surface: `bg-[#1a2340]`

### Accent Colors
- Gold primary: `text-[#d4a843]`, `border-[#d4a843]` — used for headings, highlights, badges
- Gold muted: `text-[#a07830]`
- Cyan glow: `text-[#00d4ff]`, `shadow-[#00d4ff]` — used for interactive elements, glows
- Purple accent: `text-[#9b59b6]` — used for tags, secondary accents

### Text
- Primary: `text-white`
- Secondary: `text-slate-300`
- Muted: `text-slate-400`
- Disabled: `text-slate-600`

### Borders
- Default: `border-slate-700/50`
- Accent: `border-[#d4a843]/40`
- Glow: `border-[#00d4ff]/30`

## Typography

### Fonts
- Headings: Cinzel (serif, classical museum feel) — loaded via Google Fonts
- Body: Inter (clean, readable)

### Scale
- Hero title: `text-5xl md:text-7xl font-bold` (Cinzel)
- Section title: `text-3xl md:text-4xl font-bold` (Cinzel)
- Card title: `text-xl font-semibold` (Cinzel)
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 px-4`
- Card padding: `p-6`
- Gap between cards: `gap-6` or `gap-8`
- Max content width: `max-w-7xl mx-auto`

## Components

### Cards
- Rounded: `rounded-2xl`
- Border: `border border-slate-700/50`
- Background: `bg-[#0f1629]`
- Hover: `hover:border-[#d4a843]/50 hover:bg-[#141d35]`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-[#d4a843] text-[#080c18] font-semibold px-6 py-3 rounded-lg hover:bg-[#e8bc55] transition-colors`
- Secondary: `border border-[#d4a843]/60 text-[#d4a843] px-6 py-3 rounded-lg hover:bg-[#d4a843]/10 transition-colors`
- Ghost: `text-slate-300 hover:text-white transition-colors`

### Badges / Tags
- Category badge: `bg-[#d4a843]/15 text-[#d4a843] text-xs px-3 py-1 rounded-full border border-[#d4a843]/30`
- Status badge: `bg-[#00d4ff]/10 text-[#00d4ff] text-xs px-3 py-1 rounded-full border border-[#00d4ff]/20`

### Glow Effects
- Subtle glow: `shadow-lg shadow-[#d4a843]/10`
- Cyan glow: `shadow-lg shadow-[#00d4ff]/20`

## Do's
- Use Cinzel font for all display headings
- Use gold (#d4a843) as the primary accent color
- Add subtle glow/shadow effects to cards and hero elements
- Use dark navy backgrounds throughout
- Keep text contrast high — always white or slate-300 on dark backgrounds

## Don'ts
- Never use white or light backgrounds
- Never use default blue links on dark backgrounds
- Don't use more than 3 accent colors per section
- Don't use small font sizes for important labels (min 14px)
