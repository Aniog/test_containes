# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the microscopic world. The visual language blends deep-ocean darkness with bioluminescent accents — evoking wonder, discovery, and scientific precision.

## Color Palette

### Primary Colors
- **Deep Space** `#050d1a` — page background, darkest surfaces
- **Abyss** `#0a1628` — card backgrounds, nav background
- **Midnight** `#0f2040` — elevated surfaces, hover states
- **Ocean** `#0d3b6e` — secondary surfaces, borders

### Accent Colors
- **Bioluminescent Cyan** `#00d4ff` — primary accent, links, highlights (`text-cyan-400`)
- **Neon Teal** `#00ffcc` — secondary accent, success states (`text-teal-300`)
- **Violet Glow** `#7c3aed` — tertiary accent, tags (`text-violet-500`)
- **Amber Spark** `#f59e0b` — warning, featured badges (`text-amber-400`)

### Text Colors
- **Primary Text** `#e2e8f0` — body text (`text-slate-200`)
- **Secondary Text** `#94a3b8` — muted/supporting text (`text-slate-400`)
- **Heading Text** `#f8fafc` — headings (`text-slate-50`)
- **Accent Text** `#00d4ff` — links, highlights (`text-cyan-400`)

## Typography

### Font Stack
- **Headings**: `Space Grotesk` — modern, scientific feel
- **Body**: `Inter` — clean, readable
- **Mono/Labels**: `JetBrains Mono` — data, taxonomy labels

### Scale
- `text-xs` — labels, tags, captions
- `text-sm` — secondary body, metadata
- `text-base` — primary body
- `text-lg` / `text-xl` — lead paragraphs
- `text-2xl` / `text-3xl` — section headings
- `text-4xl` / `text-5xl` / `text-6xl` — hero headings

### Weights
- `font-normal` (400) — body
- `font-medium` (500) — UI labels
- `font-semibold` (600) — subheadings
- `font-bold` (700) — headings

## Spacing & Layout
- Max content width: `max-w-7xl` with `mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full` (pill) or `rounded-xl`
- Tags/badges: `rounded-full`
- Border color: `border-cyan-900/40` or `border-slate-700/50`

## Shadows & Glow Effects
- Card shadow: `shadow-lg shadow-cyan-900/20`
- Glow on hover: `hover:shadow-cyan-400/20 hover:shadow-xl`
- Neon border on hover: `hover:border-cyan-400/60`

## Component Patterns

### Cards
```
bg-[#0a1628] border border-cyan-900/40 rounded-2xl p-6
hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/10
transition-all duration-300
```

### Primary Button
```
bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-full
hover:bg-cyan-300 transition-colors duration-200
```

### Secondary Button / Outline
```
border border-cyan-400/60 text-cyan-400 font-semibold px-6 py-3 rounded-full
hover:bg-cyan-400/10 transition-colors duration-200
```

### Tags / Badges
```
bg-cyan-400/10 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-400/20
```

### Section Headings
```
text-3xl md:text-4xl font-bold text-slate-50 font-[Space_Grotesk]
```

### Dividers
```
border-t border-slate-700/50
```

## Navigation
- Sticky top nav with `bg-[#0a1628]/90 backdrop-blur-md`
- Logo: cyan accent color
- Links: `text-slate-300 hover:text-cyan-400 transition-colors`
- Active link: `text-cyan-400`
- Mobile: hamburger menu with slide-down panel

## Do's
- Use dark backgrounds exclusively — this is a dark-mode-only site
- Use cyan/teal glows sparingly for emphasis
- Maintain generous whitespace
- Use grid layouts for galleries (2-3 columns desktop, 1 column mobile)
- Always ensure text contrast ratio ≥ 4.5:1

## Don'ts
- No light backgrounds or white surfaces
- No flat, colorless designs — always add subtle glow or gradient
- No more than 3 accent colors per section
- No small text below `text-xs` for body content
- No hardcoded hex values in JSX — use Tailwind classes
