# Celestial Odyssey — Design System

## Visual Identity
- **Theme**: True Black — background is always `#000000`
- **Accent**: Deep violet `#7c3aed` (violet-700) and electric indigo `#6366f1` (indigo-500)
- **Highlight**: Pale gold `#f0c060` for star-like accents
- **Text Primary**: `#f1f5f9` (slate-100) — near-white for maximum contrast on black
- **Text Secondary**: `#94a3b8` (slate-400) — muted for captions and metadata
- **Text Accent**: `#a78bfa` (violet-400) — for labels, tags, and highlights

## Typography
- **Display / Hero**: `'Cormorant Garamond', serif` — elegant, editorial
- **Body / UI**: `'Inter', sans-serif` — clean, readable
- **Monospace / Data**: `'JetBrains Mono', monospace` — technical data sheets
- **Japanese Nav**: Use letter-spacing `0.3em` and `font-weight: 300` for minimal feel

## Navigation
- Fixed, transparent, full-width
- Backdrop blur: `backdrop-blur-sm` with very subtle border-bottom `border-white/5`
- Logo: small, uppercase, letter-spaced — `tracking-[0.4em]`
- Nav links: `tracking-[0.25em] text-xs uppercase font-light`
- Active state: thin underline using `border-b border-violet-400`
- No background fill — pure transparency over content

## Colors (Tailwind config additions)
```js
'true-black': '#000000',
'space-violet': '#7c3aed',
'space-indigo': '#6366f1',
'star-gold': '#f0c060',
'nebula-pink': '#e879f9',
'nebula-blue': '#38bdf8',
```

## Spacing & Layout
- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Max content width: `max-w-7xl mx-auto`
- Grid gaps: `gap-1` for gallery tiles (tight, editorial)

## Borders
- Data sheet borders: `0.5px solid rgba(255,255,255,0.12)` — ultra-thin
- Gallery tile hover: `ring-1 ring-violet-500/40`

## Animations
- Ken Burns: slow scale from `scale(1)` to `scale(1.12)` over 20s, ease-in-out, alternate infinite
- Framer Motion stagger: `staggerChildren: 0.08`, `y: 24 → 0`, `opacity: 0 → 1`
- Page transitions: fade + slight upward slide

## Do's
- Always use `text-slate-100` or `text-white` on black backgrounds
- Use `backdrop-blur` on overlays, never solid fills for nav
- Keep gallery tiles flush with no border-radius for editorial feel
- Use thin `0.5px` borders on data tables — never thick borders

## Don'ts
- Never use white backgrounds
- Never use rounded corners on gallery images
- Never use bright saturated colors except as accents
- Never use font-weight above 600 for body text
