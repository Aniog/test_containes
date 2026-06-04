# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the hidden world of microorganisms. The visual style blends deep-space darkness with bioluminescent accents — evoking the mysterious, glowing beauty of microscopic life.

## Color Palette
- **Background (deep):** `#050d1a` — near-black deep navy (bg-[#050d1a])
- **Background (surface):** `#0a1628` — dark navy card surface (bg-[#0a1628])
- **Background (elevated):** `#0f2040` — slightly lighter navy for hover/elevated states (bg-[#0f2040])
- **Primary accent:** `#00e5ff` — electric cyan / bioluminescent teal (text-[#00e5ff], border-[#00e5ff])
- **Secondary accent:** `#7c3aed` — deep violet / purple (text-violet-600)
- **Tertiary accent:** `#10b981` — emerald green (text-emerald-400)
- **Text primary:** `#e2e8f0` — light slate (text-slate-200)
- **Text secondary:** `#94a3b8` — muted slate (text-slate-400)
- **Text muted:** `#475569` — dimmed slate (text-slate-600)
- **Border:** `rgba(0,229,255,0.15)` — subtle cyan border (border-[#00e5ff]/20)

## Typography
- **Font family:** Inter (Google Fonts) — clean, scientific, modern
- **Display headings (h1):** `text-5xl md:text-7xl font-black tracking-tight`
- **Section headings (h2):** `text-3xl md:text-4xl font-bold tracking-tight`
- **Card headings (h3):** `text-xl font-semibold`
- **Body text:** `text-base font-normal leading-relaxed`
- **Caption / label:** `text-sm text-slate-400 uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components

### Navigation
- Fixed top bar, dark background with blur: `fixed top-0 w-full bg-[#050d1a]/90 backdrop-blur-md border-b border-[#00e5ff]/10 z-50`
- Logo: bold cyan text with icon
- Nav links: `text-slate-400 hover:text-[#00e5ff] transition-colors`
- Active link: `text-[#00e5ff]`
- Mobile: hamburger menu with slide-down panel

### Buttons
- **Primary:** `bg-[#00e5ff] text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all`
- **Secondary (outline):** `border border-[#00e5ff]/50 text-[#00e5ff] px-6 py-3 rounded-full hover:bg-[#00e5ff]/10 transition-all`
- **Ghost:** `text-slate-400 hover:text-[#00e5ff] transition-colors`

### Cards
- Background: `bg-[#0a1628] border border-[#00e5ff]/10 rounded-2xl`
- Hover: `hover:border-[#00e5ff]/40 hover:bg-[#0f2040] transition-all duration-300`
- Shadow: `shadow-lg shadow-black/40`

### Hero Section
- Full-viewport height: `min-h-screen`
- Gradient overlay on background image
- Animated glow effects using `animate-pulse` on accent elements

### Badges / Tags
- `bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-semibold px-3 py-1 rounded-full border border-[#00e5ff]/20`

### Dividers
- `border-t border-[#00e5ff]/10`

## Do's
- Use cyan (#00e5ff) as the primary interactive color
- Keep backgrounds very dark to make content pop
- Use subtle glows and gradients to suggest bioluminescence
- Use uppercase tracking-widest for category labels
- Maintain generous whitespace between sections

## Don'ts
- Never use white backgrounds — always dark navy
- Don't use red or orange (off-brand)
- Don't use light text on light backgrounds
- Don't use more than 3 accent colors per page
- Avoid overly decorative fonts — keep it clean and scientific
