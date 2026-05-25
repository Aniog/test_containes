# Mountain Climbing Site — Design System

## Visual Identity
Dark, dramatic, and adventurous. The design evokes the raw power of high-altitude environments — deep slate backgrounds, crisp whites, and bold accent colors inspired by alpine skies and glacial ice.

## Color Palette
- **Background (dark):** `bg-slate-950` (#020617)
- **Surface:** `bg-slate-900` (#0f172a)
- **Card surface:** `bg-slate-800` (#1e293b)
- **Border:** `border-slate-700`
- **Primary accent (sky blue):** `text-sky-400`, `bg-sky-500` (#0ea5e9)
- **Accent hover:** `hover:bg-sky-600`
- **Highlight (amber/gold):** `text-amber-400` (#fbbf24) — used for stats, badges
- **Body text:** `text-slate-200`
- **Muted text:** `text-slate-400`
- **White headings:** `text-white`

## Typography
- **Font:** "Montserrat" (Google Fonts) — bold, strong, mountaineering feel
- **Display headings (H1):** `font-black text-5xl md:text-7xl tracking-tight text-white`
- **Section headings (H2):** `font-bold text-3xl md:text-4xl text-white`
- **Card headings (H3):** `font-semibold text-xl text-white`
- **Body text:** `text-base text-slate-300 leading-relaxed`
- **Labels/badges:** `text-xs font-semibold uppercase tracking-widest`

## Spacing & Layout
- **Section padding:** `py-20 md:py-28 px-6`
- **Max content width:** `max-w-6xl mx-auto`
- **Card gap:** `gap-6 md:gap-8`
- **Section dividers:** subtle `border-t border-slate-800`

## Components

### Buttons
- **Primary CTA:** `bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-full transition-colors`
- **Secondary/outline:** `border border-slate-500 hover:border-sky-400 text-slate-200 hover:text-sky-400 font-semibold px-8 py-3 rounded-full transition-colors`

### Cards
- Background: `bg-slate-800 rounded-2xl overflow-hidden`
- Border: `border border-slate-700`
- Hover: `hover:border-sky-500 transition-colors`

### Navigation
- Sticky top, dark semi-transparent: `bg-slate-950/90 backdrop-blur-md border-b border-slate-800`
- Nav links: `text-slate-300 hover:text-sky-400 transition-colors text-sm font-medium`

### Badges
- `bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full`

## Do's
- Use full-width hero sections with dramatic background images
- Use large, bold numbers for stats (e.g., "8,849m")
- Use `text-white` on dark backgrounds — never leave text color implicit
- Use `rounded-2xl` for cards, `rounded-full` for buttons and badges
- Use `transition-colors` on all interactive elements

## Don'ts
- Never use light backgrounds — this is a dark-theme site
- Never use low-contrast text (e.g., `text-slate-600` on `bg-slate-900`)
- No magic hex values — use Tailwind named colors only
- No single-column stacking on desktop — use grid layouts for md+ screens
