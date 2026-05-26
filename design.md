# Skateboarding Site Design System

## Brand Identity
Urban, raw, energetic. The site captures the spirit of street and park skateboarding — bold, rebellious, and authentic.

## Color Palette
- **Background (dark):** `bg-zinc-950` (#09090b) — near-black base
- **Surface / Card:** `bg-zinc-900` (#18181b)
- **Surface elevated:** `bg-zinc-800` (#27272a)
- **Border:** `border-zinc-700` (#3f3f46)
- **Primary accent (yellow):** `bg-yellow-400` (#facc15) — electric pop color
- **Primary accent text:** `text-yellow-400`
- **Secondary accent (red):** `text-red-500` (#ef4444)
- **Body text:** `text-zinc-100` (#f4f4f5)
- **Muted text:** `text-zinc-400` (#a1a1aa)
- **Inverted text on accent:** `text-zinc-950`

## Typography
- **Font:** "Bebas Neue" for headings (bold, condensed, impactful); "Inter" for body text
- **Hero heading:** `text-6xl md:text-8xl font-black uppercase tracking-tight`
- **Section heading:** `text-4xl md:text-5xl font-black uppercase tracking-tight`
- **Card heading:** `text-xl font-bold uppercase`
- **Body:** `text-base text-zinc-300 leading-relaxed`
- **Label / tag:** `text-xs font-bold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card padding: `p-6`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Tags/badges: `rounded-full px-3 py-1`
- Accent borders: `border-l-4 border-yellow-400`

## Buttons
- **Primary:** `bg-yellow-400 text-zinc-950 font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-yellow-300 transition`
- **Secondary / outline:** `border-2 border-zinc-600 text-zinc-100 font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition`

## Layout
- Max content width: `max-w-7xl mx-auto`
- Navigation: sticky top, dark background, logo left, links right
- Hero: full-viewport height, dark overlay on background image, centered content
- Sections alternate between `bg-zinc-950` and `bg-zinc-900`
- Grid: 1 col mobile → 2 col tablet → 3 col desktop

## Visual Style
- Heavy use of uppercase text for headings and labels
- Yellow accent lines and highlights for emphasis
- Dark, moody backgrounds with high-contrast text
- Subtle grain/texture feel via dark surfaces
- Images with slight overlay for text legibility

## Do's
- Always use `text-zinc-100` or `text-zinc-300` on dark backgrounds
- Use `text-yellow-400` for accent highlights and hover states
- Use `font-black` or `font-bold` for all headings
- Keep section headings uppercase

## Don'ts
- Never use light backgrounds without switching to dark text
- Don't use low-contrast combos like `text-zinc-600` on `bg-zinc-900`
- Don't use rounded-lg for cards — use `rounded-2xl`
- Don't use default blue link colors
