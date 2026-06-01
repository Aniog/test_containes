# The Time Traveler's Archive - Design System

## Visual Style
A blend of futuristic museum, vintage library, and classified government database.
Dark, atmospheric, cinematic. Premium storytelling experience.

## Colors
- Background: Deep space black (#0a0a0f) to dark navy (#0d1117)
- Surface: Dark panels (#12141a) with glassmorphism
- Primary accent: Temporal cyan (#00f0ff)
- Secondary accent: Chrono amber (#f0a500)
- Danger/Risk: Paradox red (#ff2d55)
- Success: Stable green (#00e676)
- Text primary: Off-white (#e8eaed)
- Text secondary: Muted silver (#8b949e)
- Text tertiary: Dim gray (#484f58)
- Glass border: rgba(255, 255, 255, 0.08)
- Glow: Cyan glow for highlights, amber for warnings

## Typography
- Font: Inter (weights 300-800)
- Headings: Font weight 700-800, tracking tight
- Body: Font weight 400, line-height relaxed
- Monospace elements: JetBrains Mono for codes/IDs
- Section labels: Uppercase, letter-spacing wide, font-weight 600

## Borders & Surfaces
- Glass panels: bg-white/5 backdrop-blur-xl border border-white/10
- Cards: bg-surface/80 backdrop-blur-md border border-white/5 rounded-xl
- Hover states: border-cyan/30 with subtle glow
- Active states: border-cyan/50 with stronger glow

## Spacing
- Section padding: py-24 px-6 (desktop), py-16 px-4 (mobile)
- Card padding: p-6 (desktop), p-4 (mobile)
- Grid gaps: gap-6 (cards), gap-8 (sections)
- Max content width: max-w-7xl mx-auto

## Animations
- Subtle floating for timeline elements
- Pulse glow on interactive elements
- Smooth fade-in on scroll
- Particle drift in backgrounds
- Cinematic but performant (use CSS transforms, will-change)

## Do's
- Use glassmorphism for panels and cards
- Add subtle glow effects on hover
- Use gradient text for important headings
- Keep animations smooth and 60fps
- Use dark backgrounds consistently
- Add depth with layered transparency

## Don'ts
- Don't use bright/white backgrounds
- Don't use heavy shadows (use glow instead)
- Don't make text hard to read against backgrounds
- Don't overuse animations (keep them subtle)
- Don't use rounded-full on large elements
- Don't use generic/boring layouts
