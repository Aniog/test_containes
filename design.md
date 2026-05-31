# Planet Designer — Design System

## Theme
Dark space aesthetic. Deep blacks and dark blues as backgrounds, with vibrant accent colors for each planet category. The UI should feel like a sci-fi control panel — immersive, futuristic, and tactile.

## Colors
- Background: `bg-gray-950` (#030712) — near-black space
- Surface: `bg-gray-900` (#111827) — panel backgrounds
- Surface elevated: `bg-gray-800` (#1f2937) — cards, inputs
- Border: `border-gray-700` (#374151)
- Text primary: `text-white`
- Text secondary: `text-gray-400`
- Text muted: `text-gray-500`

### Accent Colors (per section)
- Atmosphere: `text-sky-400` / `bg-sky-500` — cyan/blue
- Gravity: `text-violet-400` / `bg-violet-500` — purple
- Ecosystems: `text-emerald-400` / `bg-emerald-500` — green
- Weather: `text-blue-400` / `bg-blue-500` — blue
- Continents: `text-amber-400` / `bg-amber-500` — amber/gold
- Civilizations: `text-rose-400` / `bg-rose-500` — rose/red

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold tracking-tight`
- Section titles: `text-lg font-semibold`
- Labels: `text-sm font-medium text-gray-300`
- Values: `text-sm text-white`
- Muted: `text-xs text-gray-500`

## Spacing
- Page padding: `p-6`
- Card padding: `p-4` or `p-5`
- Gap between sections: `gap-4` or `gap-6`
- Input height: standard (h-9 or h-10)

## Borders & Radius
- Cards: `rounded-xl border border-gray-700/50`
- Inputs: `rounded-lg border border-gray-700`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Shadows
- Cards: `shadow-lg shadow-black/30`
- Glow effects on planet canvas: `drop-shadow` with accent color

## Buttons
- Primary: `bg-gradient-to-r from-[accent] to-[accent-dark] text-white font-semibold`
- Secondary: `bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700`
- Danger: `bg-red-900/50 border border-red-700 text-red-300`

## Sliders
- Custom styled range inputs with accent color tracks
- Show current value next to label

## Layout
- Left sidebar: navigation tabs (vertical)
- Center: planet canvas (visual)
- Right: customization panel
- Mobile: stacked single column

## Do's
- Use gradient text for headings: `bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent`
- Use glowing borders on active/selected states
- Use subtle grid or star patterns in backgrounds
- Animate planet rotation and atmospheric effects

## Don'ts
- No white backgrounds
- No light mode
- No flat/plain buttons without hover states
- No text that blends into dark backgrounds (always use text-white or text-gray-300+)
