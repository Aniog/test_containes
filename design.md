# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of time and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `#050810` (bg-[#050810])
- Dark navy: `#080d1a` (bg-[#080d1a])
- Card surface: `#0d1526` (bg-[#0d1526])
- Card hover: `#111d35` (bg-[#111d35])
- Subtle border: `rgba(255,255,255,0.07)` (border-white/[0.07])

### Accent Colors (Memory Glow)
- Stellar gold: `#e8c97a` — primary CTA, highlights (text-[#e8c97a])
- Nebula blue: `#7ab8e8` — links, era tags (text-[#7ab8e8])
- Aurora teal: `#5de8c9` — emotion tags (text-[#5de8c9])
- Rose memory: `#e87ab8` — life event tags (text-[#e87ab8])
- Violet deep: `#a87ae8` — location tags (text-[#a87ae8])

### Text
- Primary: `#f0eee8` — headings, body (text-[#f0eee8])
- Secondary: `#9ba8c0` — subtitles, metadata (text-[#9ba8c0])
- Muted: `#5a6480` — placeholders, disabled (text-[#5a6480])

## Typography

### Fonts
- Display: "Cormorant Garamond" — serif, for hero titles and memory quotes
- Body: "Inter" — sans-serif, for UI and metadata
- Mono: system-ui monospace — for coordinates, timestamps

### Scale
- Hero title: `text-6xl md:text-8xl font-light tracking-tight` (Cormorant Garamond)
- Section title: `text-3xl md:text-4xl font-light` (Cormorant Garamond)
- Card title: `text-lg font-medium` (Inter)
- Body: `text-sm leading-relaxed` (Inter)
- Caption/meta: `text-xs tracking-wider uppercase` (Inter)

## Spacing
- Section padding: `py-24 px-6 md:px-12`
- Card padding: `p-6`
- Grid gap: `gap-6`
- Max content width: `max-w-7xl mx-auto`

## Components

### Cards
- Background: `bg-[#0d1526]`
- Border: `border border-white/[0.07]`
- Hover: `hover:bg-[#111d35] hover:border-white/[0.12]`
- Rounded: `rounded-2xl`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-[#e8c97a] text-[#050810] font-semibold rounded-full px-8 py-3 hover:bg-[#f0d98a]`
- Ghost: `border border-white/20 text-[#f0eee8] rounded-full px-6 py-2 hover:border-white/40`
- Tag: `rounded-full px-3 py-1 text-xs font-medium`

### Tags by Category
- Era: `bg-[#7ab8e8]/10 text-[#7ab8e8] border border-[#7ab8e8]/20`
- Emotion: `bg-[#5de8c9]/10 text-[#5de8c9] border border-[#5de8c9]/20`
- Life Event: `bg-[#e87ab8]/10 text-[#e87ab8] border border-[#e87ab8]/20`
- Location: `bg-[#a87ae8]/10 text-[#a87ae8] border border-[#a87ae8]/20`

### Constellation Canvas
- Stars: white dots with varying opacity and size
- Connections: thin lines at low opacity (rgba(255,255,255,0.08))
- Memory nodes: slightly larger, with a soft glow effect
- Animation: slow drift, twinkling, pulsing nodes

## Do's
- Use generous whitespace to evoke cosmic emptiness
- Layer subtle gradients for depth
- Use glow effects (box-shadow with color) on interactive elements
- Animate slowly — memories are timeless, not urgent
- Use serif font for emotional/poetic content, sans for data

## Don'ts
- No bright white backgrounds
- No harsh borders or sharp shadows
- No fast animations
- No saturated neon colors — keep palette muted and luminous
- No crowded layouts — let elements breathe
