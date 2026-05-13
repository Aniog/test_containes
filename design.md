# MicroCosmos Design System — Japanese Minimalism × Dark Laboratory

## Philosophy
Ultra-clean, deliberate whitespace, immersive dark palette mimicking a microscopy lab environment.
Typography is crisp and academic. Accents mimic fluorescent staining and bioluminescence.

## Color Palette
- Background primary: `#090D16` (deep obsidian) → `bg-[#090D16]`
- Background secondary: `#121824` (muted charcoal) → `bg-[#121824]`
- Background card: `#0E1520` → `bg-[#0E1520]`
- Background elevated: `#1A2235` → `bg-[#1A2235]`
- Accent green (bio-luminescent): `#10B981` → `text-emerald-400`, `border-emerald-400`
- Accent cyan (electric): `#06B6D4` → `text-cyan-400`, `border-cyan-400`
- Accent orange (phosphorus): `#F97316` → `text-orange-400`
- Accent purple (fluorescence): `#A855F7` → `text-purple-400`
- Text primary: `#F1F5F9` → `text-slate-100`
- Text secondary: `#94A3B8` → `text-slate-400`
- Text muted: `#475569` → `text-slate-600`
- Border subtle: `#1E293B` → `border-slate-800`
- Border accent: `rgba(16,185,129,0.3)` → `border-emerald-500/30`

## Typography
- Font family: `Inter` (Google Fonts) — clean, scientific
- Display headings: `font-light tracking-widest uppercase text-slate-100` (Japanese minimalism — sparse letterforms)
- Section headings: `font-semibold tracking-wide text-slate-100`
- Body text: `font-normal leading-relaxed text-slate-400`
- Labels / captions: `text-xs font-mono tracking-widest uppercase text-emerald-400`
- Scientific terms: `italic text-cyan-400`

## Spacing & Layout
- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card padding: `p-8 md:p-10`
- Grid gaps: `gap-8 md:gap-12`
- Max content width: `max-w-7xl mx-auto`
- Split screens: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`

## Component Styles

### Navigation
- `bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/50`
- Logo: `text-emerald-400 font-mono tracking-widest`
- Nav links: `text-slate-400 hover:text-emerald-400 transition-colors text-sm tracking-widest uppercase`

### Cards (Specimen / Slide)
- `bg-[#0E1520] border border-slate-800/60 rounded-sm` (minimal radius — lab slide aesthetic)
- Hover: `hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all`
- Image containers: `overflow-hidden` with `object-cover` images

### Buttons
- Primary: `bg-emerald-500 hover:bg-emerald-400 text-[#090D16] font-semibold tracking-widest uppercase text-xs px-6 py-3 transition-colors`
- Ghost: `border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 tracking-widest uppercase text-xs px-6 py-3 transition-colors`

### Accent Lines / Dividers
- `border-t border-slate-800/60`
- Colored accent bar: `w-12 h-px bg-emerald-400` (horizontal rule before headings)

### Form Inputs
- `bg-[#0E1520] border border-slate-700/60 text-slate-100 placeholder-slate-600 focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 rounded-sm px-4 py-3`

## Do's
- Use generous whitespace between sections (py-24 minimum)
- Use mono/uppercase labels for scientific metadata
- Use thin borders and subtle shadows
- Animate with `transition-all duration-300`
- Use `tracking-widest` for headings and labels

## Don'ts
- No rounded-xl or pill shapes — use `rounded-sm` or `rounded` at most
- No bright white backgrounds
- No heavy drop shadows
- No colorful gradients except subtle overlays on hero images
- No sans-serif body text that feels casual
