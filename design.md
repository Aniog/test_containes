# Green Website Design System

## Theme
Eco-friendly / Nature / Sustainability — a lush, fresh green palette conveying growth, health, and environmental responsibility.

## Colors

### Primary Palette
- **Forest Green (Primary):** `#166534` — `bg-green-800`, `text-green-800`
- **Emerald (Accent):** `#059669` — `bg-emerald-600`, `text-emerald-600`
- **Leaf Green (Highlight):** `#22c55e` — `bg-green-500`, `text-green-500`
- **Mint (Light):** `#bbf7d0` — `bg-green-200`, `text-green-200`
- **Sage (Muted):** `#86efac` — `bg-green-300`

### Neutral Palette
- **Dark Background:** `#052e16` — `bg-green-950`
- **Section Background:** `#f0fdf4` — `bg-green-50`
- **White:** `#ffffff` — `bg-white`
- **Text Dark:** `#14532d` — `text-green-900`
- **Text Muted:** `#4ade80` — `text-green-400`

### Do's
- Use `text-white` on dark green backgrounds (`bg-green-800`, `bg-green-950`, `bg-emerald-600`)
- Use `text-green-900` on light backgrounds (`bg-green-50`, `bg-white`)
- Use `text-green-700` for body text on white/light backgrounds
- Pair `bg-emerald-600` with `text-white` for CTAs

### Don'ts
- Never use `text-green-500` on `bg-green-400` (low contrast)
- Never use light green text on white backgrounds
- Avoid pure black text — use `text-green-900` instead

## Typography

### Font
- **Primary:** Inter (Google Fonts)
- **Headings:** `font-bold` or `font-extrabold`, tracking tight (`tracking-tight`)
- **Body:** `font-normal`, `leading-relaxed`

### Scale
- **Hero H1:** `text-5xl md:text-7xl font-extrabold tracking-tight`
- **Section H2:** `text-3xl md:text-4xl font-bold`
- **Card H3:** `text-xl font-semibold`
- **Body:** `text-base leading-relaxed`
- **Caption/Label:** `text-sm font-medium`

## Spacing
- **Section padding:** `py-20 px-6` or `py-24 px-8`
- **Container max width:** `max-w-6xl mx-auto`
- **Card padding:** `p-6` or `p-8`
- **Gap between cards:** `gap-6` or `gap-8`

## Borders & Shadows
- **Card border:** `border border-green-100` on light backgrounds
- **Card shadow:** `shadow-md hover:shadow-lg transition-shadow`
- **Rounded corners:** `rounded-2xl` for cards, `rounded-full` for badges/pills, `rounded-xl` for buttons
- **Dividers:** `border-green-200`

## Buttons
- **Primary CTA:** `bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors`
- **Secondary:** `border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-3 rounded-xl transition-colors`
- **Ghost/Link:** `text-emerald-600 hover:text-emerald-700 font-medium`

## Components

### Navbar
- Background: `bg-green-950/95 backdrop-blur` (sticky)
- Logo text: `text-white font-bold text-xl`
- Nav links: `text-green-300 hover:text-white`
- CTA button: `bg-emerald-500 hover:bg-emerald-400 text-white`

### Hero Section
- Background: dark green gradient `from-green-950 via-green-900 to-emerald-900`
- Headline: `text-white font-extrabold`
- Subtext: `text-green-300`
- Badge/pill: `bg-green-800 text-green-300 border border-green-700`

### Feature Cards
- Background: `bg-white` with `border border-green-100 shadow-md`
- Icon container: `bg-green-100 text-emerald-600`
- Title: `text-green-900 font-semibold`
- Body: `text-green-700`

### Stats Section
- Background: `bg-emerald-600`
- Numbers: `text-white font-extrabold text-4xl`
- Labels: `text-emerald-100`

### Footer
- Background: `bg-green-950`
- Text: `text-green-400`
- Links: `text-green-300 hover:text-white`
