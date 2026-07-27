# Green Website Design System

## Color Palette

### Primary Greens
- **Forest Green** (primary): `#1a5c38` — main brand color, used for headings, CTAs
- **Emerald** (accent): `#2d9e5f` — hover states, highlights
- **Sage Light**: `#4ade80` — bright accents, badges
- **Mint**: `#bbf7d0` — light backgrounds, subtle tints
- **Pale Green**: `#f0fdf4` — page backgrounds, card surfaces

### Neutrals
- **Dark**: `#0f1f14` — primary text on light backgrounds
- **Mid**: `#374151` — body text
- **Muted**: `#6b7280` — secondary text, captions
- **Border**: `#d1fae5` — dividers, card borders
- **White**: `#ffffff` — surfaces, nav background

### Semantic
- **Success**: `#16a34a`
- **Warning**: `#ca8a04`
- **Error**: `#dc2626`

## Typography

- **Font Family**: Inter (Google Fonts)
- **Heading XL**: `text-5xl font-bold tracking-tight text-forest` (hero titles)
- **Heading LG**: `text-3xl font-bold text-forest`
- **Heading MD**: `text-xl font-semibold text-forest`
- **Body**: `text-base text-gray-700 leading-relaxed`
- **Caption**: `text-sm text-gray-500`
- **Label**: `text-xs font-semibold uppercase tracking-widest text-emerald`

## Spacing & Layout

- **Section padding**: `py-20 px-6` (desktop), `py-12 px-4` (mobile)
- **Container max-width**: `max-w-6xl mx-auto`
- **Card padding**: `p-8`
- **Gap between cards**: `gap-8`

## Components

### Buttons
- **Primary**: `bg-forest text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald transition-colors`
- **Secondary**: `border-2 border-forest text-forest px-6 py-3 rounded-full font-semibold hover:bg-mint transition-colors`
- **Ghost**: `text-forest underline hover:text-emerald`

### Cards
- Background: `bg-white`
- Border: `border border-mint`
- Shadow: `shadow-sm hover:shadow-md`
- Radius: `rounded-2xl`

### Badges
- `bg-mint text-forest text-xs font-semibold px-3 py-1 rounded-full`

### Navigation
- Background: `bg-white/95 backdrop-blur`
- Border bottom: `border-b border-mint`
- Links: `text-gray-700 hover:text-forest font-medium`

## Do's
- Use green gradients for hero sections: `from-forest to-emerald`
- Use `text-forest` for all important headings
- Use `bg-pale` for alternating section backgrounds
- Maintain high contrast: dark text on light green, white text on dark green
- Use rounded corners (`rounded-2xl`, `rounded-full`) for a friendly feel

## Don'ts
- Never use green text on green backgrounds
- Avoid using more than 3 shades of green in one section
- Don't use pure black (`#000`) — use `#0f1f14` instead
- Don't use small font sizes below `text-sm` for body content
