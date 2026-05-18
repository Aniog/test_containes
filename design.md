# LLM Wiki Website Design System

## Visual Identity

A dark-themed, modern tech product website inspired by developer tools and AI products.
Deep dark backgrounds with vibrant accent colors convey intelligence and sophistication.

## Color Palette

- **Background primary**: `#0a0a0f` (near-black, deep space)
- **Background secondary**: `#111118` (dark card surfaces)
- **Background tertiary**: `#1a1a2e` (slightly elevated surfaces)
- **Border subtle**: `#1e1e2e` (subtle dividers)
- **Border accent**: `#2d2d4e` (card borders)
- **Accent primary**: `#6366f1` (indigo-500, primary CTA)
- **Accent secondary**: `#8b5cf6` (violet-500, secondary highlights)
- **Accent glow**: `#a78bfa` (violet-400, glow effects)
- **Text primary**: `#f1f5f9` (slate-100, main text)
- **Text secondary**: `#94a3b8` (slate-400, secondary text)
- **Text muted**: `#64748b` (slate-500, muted labels)
- **Success**: `#10b981` (emerald-500)
- **Warning**: `#f59e0b` (amber-500)

In Tailwind: bg-[#0a0a0f], bg-[#111118], text-slate-100, text-slate-400, text-indigo-400, border-[#2d2d4e]

## Typography

- **Font**: Inter (Google Fonts)
- **Hero heading**: `text-5xl md:text-7xl font-bold tracking-tight`
- **Section heading**: `text-3xl md:text-4xl font-bold`
- **Card heading**: `text-xl font-semibold`
- **Body**: `text-base text-slate-300 leading-relaxed`
- **Caption/label**: `text-sm text-slate-500`
- **Code**: `font-mono text-sm`

## Spacing & Layout

- **Max content width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding**: `py-20 md:py-28`
- **Card padding**: `p-6 md:p-8`
- **Grid gaps**: `gap-6 md:gap-8`

## Component Styles

### Navigation
- Sticky top, backdrop blur, semi-transparent dark background
- `sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e1e2e]`

### Hero Section
- Full viewport height, centered content
- Gradient text for headline: `bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent`
- Subtle grid background pattern

### Feature Cards
- Dark card with subtle border and hover glow
- `bg-[#111118] border border-[#2d2d4e] rounded-2xl p-6 hover:border-indigo-500/50 transition-all`
- Icon in colored rounded square: `bg-indigo-500/10 text-indigo-400 rounded-xl p-3`

### Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-6 py-3 font-semibold transition-all`
- Secondary: `border border-[#2d2d4e] hover:border-indigo-500/50 text-slate-300 rounded-xl px-6 py-3 transition-all`
- Ghost: `text-indigo-400 hover:text-indigo-300`

### Badges/Tags
- `bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-sm`

### Code Blocks
- `bg-[#0d0d1a] border border-[#2d2d4e] rounded-xl font-mono text-sm text-slate-300`

## Do's
- Use gradient accents sparingly for emphasis
- Add subtle glow effects on hover with `shadow-lg shadow-indigo-500/10`
- Use `backdrop-blur` for floating elements
- Animate with `transition-all duration-300`
- Use grid layouts for feature sections on desktop

## Don'ts
- No light backgrounds (this is a dark-only design)
- No pure white text (use slate-100 max)
- No harsh borders (keep them subtle with low opacity)
- No more than 3 accent colors in one section
- No magic pixel values — use Tailwind spacing scale
