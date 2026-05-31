# Apex Academy — Design System

## Brand Identity
Elite academy for individuals with extraordinary abilities. The visual language is dark, sophisticated, and high-tech — evoking classified government facilities, advanced research, and superhuman potential.

## Color Palette
- **Background primary**: `#050a14` (near-black deep navy) — `bg-[#050a14]`
- **Background secondary**: `#0a1628` (dark navy) — `bg-[#0a1628]`
- **Background card**: `#0d1f3c` (dark blue-navy) — `bg-[#0d1f3c]`
- **Background elevated**: `#112244` (medium navy) — `bg-[#112244]`
- **Accent primary**: `#00d4ff` (electric cyan) — `text-[#00d4ff]`, `border-[#00d4ff]`
- **Accent secondary**: `#7c3aed` (deep violet) — `text-[#7c3aed]`
- **Accent tertiary**: `#f59e0b` (amber/gold) — `text-amber-400`
- **Accent danger**: `#ef4444` (red) — `text-red-500`
- **Accent success**: `#10b981` (emerald) — `text-emerald-400`
- **Text primary**: `#e2e8f0` — `text-slate-200`
- **Text secondary**: `#94a3b8` — `text-slate-400`
- **Text muted**: `#475569` — `text-slate-600`
- **Border subtle**: `rgba(0,212,255,0.15)` — `border-[#00d4ff]/15`
- **Border accent**: `rgba(0,212,255,0.4)` — `border-[#00d4ff]/40`

## Typography
- **Font**: Inter (Google Fonts)
- **Display headings**: `font-black tracking-tight` — large, bold, impactful
- **Section headings**: `text-3xl font-bold text-slate-100`
- **Card titles**: `text-lg font-semibold text-slate-100`
- **Body text**: `text-sm text-slate-400`
- **Labels/badges**: `text-xs font-medium uppercase tracking-wider`
- **Accent text**: `text-[#00d4ff]` for highlights and key data

## Spacing & Layout
- **Page max width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding**: `py-16 lg:py-24`
- **Card padding**: `p-6`
- **Grid gaps**: `gap-6` standard, `gap-8` for larger cards
- **Border radius**: `rounded-xl` for cards, `rounded-lg` for buttons/badges, `rounded-full` for pills

## Component Styles

### Cards
```
bg-[#0d1f3c] border border-[#00d4ff]/15 rounded-xl p-6
hover:border-[#00d4ff]/40 transition-all duration-300
```

### Buttons — Primary
```
bg-[#00d4ff] text-[#050a14] font-semibold px-6 py-2.5 rounded-lg
hover:bg-[#00b8d9] transition-colors duration-200
```

### Buttons — Secondary/Outline
```
border border-[#00d4ff]/40 text-[#00d4ff] px-6 py-2.5 rounded-lg
hover:bg-[#00d4ff]/10 transition-colors duration-200
```

### Badges
```
text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full
```
- Cyan: `bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30`
- Violet: `bg-violet-500/10 text-violet-400 border border-violet-500/30`
- Amber: `bg-amber-500/10 text-amber-400 border border-amber-500/30`
- Red: `bg-red-500/10 text-red-400 border border-red-500/30`
- Green: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`

### Navigation
```
bg-[#050a14]/90 backdrop-blur-md border-b border-[#00d4ff]/10
```

### Dividers / Glows
- Horizontal rule: `border-[#00d4ff]/10`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.1)]`

## Do's
- Use dark backgrounds exclusively — this is a dark-mode-only site
- Use cyan (#00d4ff) as the primary accent for interactive elements
- Use uppercase tracking-wider for labels, classifications, and status badges
- Use subtle glows and borders to create depth
- Keep text readable: slate-200 on dark backgrounds, never white-on-white

## Don'ts
- Never use light backgrounds
- Never use default blue links
- Never use low-contrast text (e.g. slate-600 on dark navy)
- Never use rounded-full on large cards
- Don't overuse color — keep it purposeful
