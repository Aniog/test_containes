# MicroCosmos Design System

## Concept
A visually immersive website exploring the microscopic world. The aesthetic blends deep-space darkness with bioluminescent, scientific beauty — evoking the feeling of peering through a microscope into an alien universe.

## Color Palette

### Backgrounds
- Page background: `#050b18` (deep navy black) — `bg-[#050b18]`
- Surface / card: `#0d1526` — `bg-[#0d1526]`
- Elevated surface: `#111e35` — `bg-[#111e35]`
- Border subtle: `rgba(6,182,212,0.15)` — `border-cyan-500/15`

### Accent Colors
- Cyan (primary accent): `#06b6d4` — `text-cyan-400`, `bg-cyan-500`
- Teal (secondary): `#14b8a6` — `text-teal-400`
- Purple (tertiary): `#8b5cf6` — `text-violet-400`
- Amber (highlight): `#f59e0b` — `text-amber-400`

### Text
- Primary text: `#f0f6ff` — `text-slate-100`
- Secondary text: `#94a3b8` — `text-slate-400`
- Muted text: `#475569` — `text-slate-600`
- Accent text: `#67e8f9` — `text-cyan-300`

## Typography

### Font
- Primary: `Space Grotesk` (headings) — loaded via Google Fonts
- Body: `Inter` (body text)

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Components

### Cards
- Background: `bg-[#0d1526]`
- Border: `border border-cyan-500/15`
- Hover: `hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10`
- Rounded: `rounded-2xl`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-cyan-500 hover:bg-cyan-400 text-[#050b18] font-semibold px-6 py-3 rounded-full transition-all`
- Secondary/outline: `border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 px-6 py-3 rounded-full transition-all`
- Ghost: `text-slate-400 hover:text-cyan-300 transition-colors`

### Badges / Tags
- `bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs px-3 py-1 rounded-full`
- Teal variant: `bg-teal-500/10 text-teal-300 border border-teal-500/20`
- Purple variant: `bg-violet-500/10 text-violet-300 border border-violet-500/20`

### Navbar
- Background: `bg-[#050b18]/90 backdrop-blur-md border-b border-cyan-500/10`
- Logo: `text-cyan-400 font-bold text-xl`
- Nav links: `text-slate-400 hover:text-cyan-300 transition-colors`
- Active link: `text-cyan-300`

### Hero Section
- Full viewport height: `min-h-screen`
- Gradient overlay on background image
- Animated glow orbs for depth

### Section Dividers
- Use subtle gradient lines: `border-t border-cyan-500/10`

## Do's
- Use dark backgrounds consistently; never white backgrounds
- Always pair dark backgrounds with light text (`text-slate-100` or `text-slate-300`)
- Use cyan/teal glows sparingly for emphasis
- Use `rounded-2xl` for cards, `rounded-full` for pills/buttons
- Maintain generous whitespace between sections

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Avoid harsh pure-black (#000) — use deep navy instead
- Don't use more than 3 accent colors per section
- Avoid small font sizes below `text-sm` for body content
