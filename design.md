# Ancient Canopy — Design System

## Brand Identity
Heavy, grounded, old-growth forest atmosphere. Every element should feel like it has weight and age.

## Color Palette
- **Forest Deep**: `#1A2421` — primary background, darkest tone
- **Forest Mid**: `#243028` — card/panel backgrounds
- **Forest Surface**: `#2E3D35` — elevated surfaces, nav
- **Mist Grey**: `#8A9E94` — secondary text, borders
- **Mist Light**: `#B8C9C0` — primary body text
- **Fog White**: `#E8EDE9` — headings, high-contrast text
- **Moss Accent**: `#4A6741` — subtle accent, hover states
- **Bark Brown**: `#5C4A35` — warm accent

Tailwind custom colors (in tailwind.config.js):
- `forest-deep: #1A2421`
- `forest-mid: #243028`
- `forest-surface: #2E3D35`
- `mist-grey: #8A9E94`
- `mist-light: #B8C9C0`
- `fog-white: #E8EDE9`
- `moss: #4A6741`
- `bark: #5C4A35`

## Typography
- **Display / Headings**: "Playfair Display" — serif, heavy, ancient feel
  - H1: `text-6xl md:text-8xl font-black tracking-tight text-fog-white`
  - H2: `text-4xl md:text-5xl font-bold tracking-tight text-fog-white`
  - H3: `text-2xl font-bold text-fog-white`
- **Body**: "Inter" — clean, readable
  - Body: `text-base text-mist-light leading-relaxed`
  - Caption: `text-sm text-mist-grey`
- **Nav**: `text-sm font-semibold uppercase tracking-widest text-mist-light`

## Borders & Surfaces
- **Rugged border**: `border border-mist-grey/30` with slight roughness via `rounded-none` or `rounded-sm`
- **Heavy card**: `bg-forest-mid border border-mist-grey/20 rounded-sm`
- **Divider**: `border-t border-mist-grey/20`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Grid gap: `gap-3 md:gap-4`

## Effects
- **Fog overlay**: `bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent` — clears on hover
- **Smooth scroll**: `scroll-behavior: smooth` + CSS `scroll-snap` for momentum feel
- **Hover lift**: `transition-transform duration-700 ease-out hover:scale-[1.02]`
- **Image overlay transition**: `opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out`

## Do's
- Use Playfair Display for all headings
- Keep backgrounds very dark — never use white backgrounds
- Use `rounded-none` or `rounded-sm` for a rugged, unpolished feel
- Embrace negative space on The Outlook page
- Use `transition-all duration-700` for slow, heavy transitions

## Don'ts
- No bright colors or high-saturation accents
- No rounded-xl or pill shapes
- No light backgrounds
- No fast animations (keep durations 500ms+)
