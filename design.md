# Design System: Ignition Dynamics — The Fusion Era

## Visual Philosophy
"Japanese Industrial Minimalism" meets Hyper-Quant. The UI is a cold, structured machine — all black, white, and gray. Images are the only source of color, acting as glowing windows of energy inside the monochrome shell.

## Color Palette

### UI / Layout (Strictly Monochrome)
- **Void Black** `#050505` — primary background (`bg-[#050505]`)
- **Industrial Black** `#0a0a0a` — card/section backgrounds (`bg-[#0a0a0a]`)
- **Dark Gray** `#121212` — elevated surfaces (`bg-[#121212]`)
- **Border Gray** `#1a1a1a` — subtle borders (`border-[#1a1a1a]`)
- **Muted Border** `#262626` — hairline dividers (`border-[#262626]`)
- **Dim Text** `#555555` — secondary labels (`text-[#555555]`)
- **Mid Gray** `#888888` — tertiary text (`text-[#888888]`)
- **Light Gray** `#aaaaaa` — body text (`text-[#aaaaaa]`)
- **Off White** `#e0e0e0` — headings (`text-[#e0e0e0]`)
- **Pure White** `#ffffff` — primary headings, key labels (`text-white`)

### Images / Visuals (Hyper-Chromatic — images only, never UI)
- Plasma purples, laser cyans, solar-flare oranges, tritium greens
- These colors appear ONLY inside `<img>` tags or image backgrounds

## Typography
- **Display / Hero:** `font-mono` uppercase, tracking-widest, massive scale (text-7xl to text-9xl)
- **Section Headings:** `font-mono` uppercase, text-3xl to text-5xl, tracking-wider
- **Labels / Tags:** `font-mono` uppercase, text-xs, tracking-widest, text-[#555555]
- **Body / Specs:** `font-sans` (Inter), text-sm to text-base, text-[#aaaaaa], leading-relaxed
- **Data / Telemetry:** `font-mono` text-xs, text-[#888888]

## Borders & Dividers
- All borders: `border-[#262626]` or `border-[#1a1a1a]`, always `1px`
- Use `border` not `border-2` — hairline only
- Dividers between sections: `border-t border-[#1a1a1a]`

## Spacing
- Generous padding: `px-8 py-16` for sections, `px-16 py-24` for hero
- Cards: `p-8` to `p-12`
- Gaps between grid items: `gap-px` (1px gap for industrial grid look)

## Components

### Navigation
- Fixed top, full-width, `bg-[#050505]/95 backdrop-blur`
- Height: `h-14`
- Logo: `font-mono uppercase tracking-widest text-white`
- Links: `font-mono text-xs uppercase tracking-widest text-[#555555] hover:text-white`
- Right side: system telemetry status indicators (green dot + mono text)

### Cards / Panels
- Background: `bg-[#0a0a0a]`
- Border: `border border-[#262626]`
- No border-radius or very subtle: `rounded-none` (industrial)
- Hover: `hover:border-[#444444]` transition

### Buttons
- Primary: `bg-white text-black font-mono text-xs uppercase tracking-widest px-6 py-3`
- Ghost: `border border-[#262626] text-[#888888] font-mono text-xs uppercase tracking-widest px-6 py-3 hover:border-white hover:text-white`
- No border-radius: `rounded-none`

### Images
- Always full-bleed within their container
- `object-cover` with defined aspect ratios
- Slight overlay gradient on edges to blend into black background
- Never add white borders or frames around images

## Do's
- Use `font-mono` for all labels, headings, navigation
- Use `tracking-widest` or `tracking-wider` for uppercase text
- Use `border-[#262626]` for all visible borders
- Keep backgrounds strictly black/dark gray
- Let images be the ONLY color on the page

## Don'ts
- Never use colored text in the UI (no blue links, no colored badges)
- Never use rounded corners on cards or buttons
- Never use drop shadows (use borders instead)
- Never use gradients in the UI (only in image overlays)
- Never use white backgrounds for sections
