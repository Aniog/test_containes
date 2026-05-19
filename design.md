# MicroCosmos Design System

## Theme
Black and white monochrome UI with full-color photography as the visual focal point.

## Colors
- Background (primary): `#000000` (black) — `bg-black`
- Background (secondary): `#0a0a0a` — `bg-[#0a0a0a]`
- Background (card/section): `#111111` — `bg-[#111]`
- Background (subtle): `#1a1a1a` — `bg-[#1a1a1a]`
- Text (primary): `#ffffff` — `text-white`
- Text (secondary): `#a3a3a3` — `text-neutral-400`
- Text (muted): `#525252` — `text-neutral-600`
- Border: `#262626` — `border-neutral-800`
- Accent line / divider: `#404040` — `border-neutral-700`

## Typography
- Font: Inter (Google Fonts)
- Hero title: `text-6xl md:text-8xl font-black tracking-tighter text-white`
- Section title: `text-3xl md:text-5xl font-bold tracking-tight text-white`
- Subtitle: `text-lg md:text-xl font-light text-neutral-400`
- Body: `text-base text-neutral-300 leading-relaxed`
- Caption: `text-sm text-neutral-500 uppercase tracking-widest`
- Label/tag: `text-xs font-semibold uppercase tracking-widest text-neutral-500`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-4 md:gap-6`

## Images
- All images are full color — they are the only color elements on the page
- Images use rounded corners: `rounded-lg` or `rounded-xl`
- Images have a subtle border: `border border-neutral-800`
- On hover, images scale slightly: `hover:scale-105 transition-transform duration-500`
- Images are displayed in masonry/grid layouts to maximize visual impact

## Borders & Dividers
- Use `border-neutral-800` for subtle borders
- Use `border-t border-neutral-800` for section dividers

## Do's
- Keep all UI chrome (nav, text, buttons, backgrounds) strictly black/white/grey
- Let color photography be the hero of every section
- Use generous whitespace (actually blackspace) around images
- Use thin, elegant typography for headings

## Don'ts
- No colored text, buttons, or backgrounds
- No gradients with color (only black-to-transparent gradients allowed)
- No colored icons or decorative elements
- Never use low-contrast text (e.g. dark grey on black)
