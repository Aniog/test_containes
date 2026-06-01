# Mnemosyne Archive — Design System

## Visual Identity
Deep-space aesthetic. The UI evokes the feeling of navigating a star field — dark, vast, and full of quiet light. Every element should feel like it belongs in the cosmos.

## Color Palette

### Backgrounds (darkest to lightest)
- `void` (#03040a) — page background, deepest dark
- `cosmos` (#070b18) — card backgrounds, secondary surfaces
- `nebula` (#0d1530) — elevated surfaces, modals

### Text
- `starlight` (#e8eaf6) — primary text, headings
- `mist-light` (#a8b2d8) — secondary text, body copy
- `mist` (#8892b0) — tertiary text, labels
- `mist-dark` (#495670) — disabled, placeholder text

### Accent Colors (emotion-coded)
- `aurora` (#7c83fd) — primary brand, interactive elements, wonder
- `aurora-glow` (#a5aaff) — hover states, highlights, hope
- `aurora-dim` (#4a52c8) — pressed states
- `jade` (#4ecdc4) — success, peace, verified badges
- `rose` (#ff6b9d) — love, alerts, mission accent
- `ember` (#ff8c42) — nostalgia, warm highlights
- `gold` (#ffd166) — joy, era labels, stats
- `mist` (#8892b0) — grief, neutral states

## Typography

### Fonts
- **Display**: Cinzel (serif) — headings, titles, section labels
- **Body**: Inter (sans-serif) — all body text, UI labels
- **Mono**: JetBrains Mono — dates, IDs, technical labels, badges

### Scale
- Hero heading: `text-7xl md:text-8xl font-display font-bold`
- Section heading: `text-4xl md:text-5xl font-display font-bold`
- Card title: `text-lg font-display font-semibold`
- Body: `text-base text-mist-light leading-relaxed`
- Label/meta: `text-xs font-mono text-mist`
- Section eyebrow: `text-sm font-mono tracking-widest uppercase text-aurora`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-24 px-6`
- Card padding: `p-6` (standard), `p-8` (featured)
- Grid gap: `gap-6` (standard), `gap-8` (sections)
- Border radius: `rounded-2xl` (cards), `rounded-3xl` (modals/featured), `rounded-full` (pills/buttons)

## Components

### Cards
```
bg: linear-gradient(135deg, rgba(13,21,48,0.9), rgba(7,11,24,0.95))
border: border border-white/8
hover: translateY(-4px), box-shadow 0 20px 60px rgba(124,131,253,0.2)
top accent bar: h-0.5 gradient from emotion color
```

### Buttons
- Primary: `bg-aurora text-white rounded-full px-8 py-4 hover:bg-aurora-glow hover:shadow-[0_0_40px_rgba(124,131,253,0.5)]`
- Secondary: `border border-aurora/40 text-aurora-glow rounded-full hover:border-aurora hover:bg-aurora/10`
- Ghost: `text-mist hover:text-starlight hover:bg-white/5`

### Filter Pills
- Default: `border border-white/10 bg-nebula/60 text-mist-light`
- Active: `border-aurora/50 bg-aurora/15 text-aurora-glow`

### Emotion Dots
Each emotion has a color. Always show as a small circle (`w-2.5 h-2.5 rounded-full`) with a subtle glow (`box-shadow: 0 0 8px {color}88`).

## Special Effects

### Shimmer Text
Used for hero gradient text. CSS animation cycling through aurora → jade → aurora.
Class: `.shimmer-text`

### Nebula Blobs
Decorative background elements. Large blurred circles (`filter: blur(80px)`, `opacity: 0.15`) in brand colors. Never interactive, always `pointer-events: none`.

### Constellation Canvas
Full-screen animated canvas on the homepage hero. Colored dots (memory fragments) drift slowly and connect with gradient lines when nearby. Mouse proximity creates additional connections.

### Glow Text
`text-shadow: 0 0 20px rgba(124,131,253,0.6), 0 0 40px rgba(124,131,253,0.3)`
Class: `.glow-text`

## Do's
- Use `font-display` (Cinzel) for all headings and titles
- Use `font-mono` for dates, IDs, counts, and technical labels
- Always pair a background color with an explicit text color
- Use emotion colors consistently — each emotion always maps to the same color
- Add subtle glow effects to interactive elements on hover
- Use `backdrop-filter: blur` for overlays and modals

## Don'ts
- Never use white backgrounds or light color schemes
- Never use plain black — use `void` (#03040a) as the darkest background
- Don't use more than 3 accent colors in a single component
- Don't use `font-display` for body text — it's for headings only
- Don't use bright colors at full opacity for backgrounds — always use low-opacity variants (e.g., `bg-aurora/10`)
- Don't add borders thicker than 1px on cards
