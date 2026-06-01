# The Time Traveler's Archive - Design System

## Visual Style
- Dark, immersive atmosphere reminiscent of a classified government database meets futuristic museum
- Glassmorphism panels with subtle backdrop blur
- Glowing accent colors on dark backgrounds
- Cinematic animations that feel premium but remain performant
- Elegant serif + sans-serif typography pairing

## Colors (Tailwind config names)
- `archive-bg`: #0a0a0f (deep space black)
- `archive-surface`: #12121a (card/panel background)
- `archive-border`: #1e1e2e (subtle borders)
- `archive-glow`: #00d4ff (primary cyan glow)
- `archive-amber`: #f59e0b (amber/gold accent for warnings)
- `archive-emerald`: #10b981 (stable timeline indicator)
- `archive-rose`: #f43f5e (danger/paradox indicator)
- `archive-purple`: #a855f7 (alternate dimension accent)
- `archive-text`: #e2e8f0 (primary text)
- `archive-muted`: #64748b (muted/secondary text)

## Typography
- Headings: "Cinzel" (serif, elegant, archival feel)
- Body: "Inter" (clean sans-serif)
- Monospace accents: "JetBrains Mono" (for codes, IDs, timestamps)

## Spacing
- Section padding: py-20 lg:py-32
- Card padding: p-6 lg:p-8
- Component gaps: gap-4, gap-6, gap-8

## Borders & Effects
- Glass panels: bg-archive-surface/60 backdrop-blur-xl border border-archive-border/50
- Glow effects: shadow-[0_0_20px_rgba(0,212,255,0.15)]
- Hover glow: hover:shadow-[0_0_30px_rgba(0,212,255,0.25)]
- Border radius: rounded-lg (cards), rounded-xl (larger panels)

## Do's
- Use subtle particle/dot animations for atmosphere
- Use gradient text for important headings
- Use glassmorphism for all card/panel elements
- Keep animations smooth (use CSS transforms, opacity)
- Use monospace font for IDs, dates, classification codes

## Don'ts
- Don't use bright white backgrounds
- Don't use heavy box shadows without glow
- Don't make animations that cause layout shifts
- Don't use more than 2-3 accent colors in one section
- Don't use generic sans-serif for headings
