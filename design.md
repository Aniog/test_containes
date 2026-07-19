# Velmora Fine Jewelry — Design System

## Color Palette

### Primary Colors
- **Brand Charcoal** `#1a1a1a` — Primary text, navbar solid state, headings
- **Warm Ivory** `#faf8f5` — Page background, card backgrounds
- **Rich Gold** `#b8943e` — Primary accent, CTAs, hover states, metallic highlights
- **Soft Gold** `#d4b87a` — Lighter gold for borders, subtle accents
- **Gold Muted** `#f5edd6` — Very light gold tint for backgrounds, hover cards

### Neutral Scale
- **Near Black** `#0d0d0d` — Hero overlays, deepest text
- **Charcoal** `#2c2c2c` — Primary body text
- **Warm Gray** `#6b6b6b` — Secondary text, descriptions
- **Medium Gray** `#999999` — Tertiary text, placeholders
- **Light Gray** `#e8e5e0` — Borders, dividers, hairlines
- **Off White** `#f5f3ef` — Section alternate backgrounds
- **Pure White** `#ffffff` — Cards, nav solid state, modals

### Accent & Status
- **Gold Hover** `#a38230` — Gold button hover state
- **Success** `#4a7c59` — Cart added confirmation
- **Star Rating** `#c8a040` — Review star color

## Typography

### Font Families
- **Serif Heading**: `'Cormorant Garamond', 'Playfair Display', Georgia, serif`
- **Sans Body**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Font Weights
- Light (300): Hero subtitles
- Regular (400): Body text
- Medium (500): Nav links, buttons
- Semi-Bold (600): Card titles, emphasis
- Bold (700): Headings, prices

### Product Names
- Font: Cormorant Garamond
- Weight: 500 (Medium)
- Transform: UPPERCASE
- Letter-spacing: 0.15em (tracking-widest)

### Type Scale (Tailwind classes)
- Hero h1: `text-5xl md:text-7xl font-light tracking-wide`
- Section h2: `text-3xl md:text-4xl font-medium tracking-wide`
- Card title: `text-sm font-medium uppercase tracking-widest`
- Body: `text-base font-normal leading-relaxed`
- Price: `text-lg font-semibold`
- Nav: `text-sm font-medium tracking-wide`

## Spacing & Layout

### Spacing Scale
- Section padding: `py-16 md:py-24 lg:py-32`
- Container max: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 md:gap-8`
- Component padding: `p-6 md:p-8`

### Whitespace
- Generous whitespace between sections (96px–128px vertical)
- Breathing room around text blocks
- Clean grid layouts with consistent gaps

## Borders & Dividers

### Hairline Dividers
- `border border-[#e8e5e0]` — Standard dividers
- Thin, subtle, warm-toned

### Card Borders
- `rounded-none` or `rounded-sm` for editorial feel
- Subtle border: `border border-[#e8e5e0]`
- Hover shadow: `shadow-lg` with warm tint

## Shadows

- **Subtle**: `shadow-sm` — Cards at rest
- **Medium**: `shadow-md` — Cards on hover
- **Elevated**: `shadow-xl` — Modals, dropdowns
- Warm-tinted shadows preferred

## Buttons

### Primary (Gold CTA)
- Background: Rich Gold `#b8943e`
- Text: White
- Hover: Gold Hover `#a38230`
- Class: `bg-[#b8943e] text-white hover:bg-[#a38230] transition-colors duration-300`
- Padding: `px-8 py-3`
- Text: `text-sm font-medium uppercase tracking-widest`

### Secondary (Outlined)
- Background: Transparent
- Border: `border border-[#b8943e]`
- Text: Rich Gold
- Hover: Fill gold with white text
- Class: `border border-[#b8943e] text-[#b8943e] hover:bg-[#b8943e] hover:text-white transition-all duration-300`

### Text Link
- Underline on hover
- Class: `text-[#2c2c2c] hover:text-[#b8943e] transition-colors duration-300`

## Animations

- **Transitions**: `transition-all duration-300 ease-in-out`
- **Hover lift**: `hover:-translate-y-1` for cards
- **Fade in**: Use `opacity-0 → opacity-100` with transition
- **Image scale**: `hover:scale-105` on product images, duration 500ms
- Subtle, smooth, premium feel — nothing jarring

## Layout Patterns

### Grid
- Product grid: 2 cols mobile, 3 cols tablet, 4-5 cols desktop
- Category tiles: 1 col mobile, 3 cols desktop
- Hero: Full bleed, no padding

### Cards
- Clean, minimal borders
- Image with slight inner padding or edge-to-edge
- Text below with generous padding
- Hover reveals secondary action

## Iconography

- Use Lucide React icons
- Size: w-5 h-5 for nav icons, w-4 h-4 for inline
- Stroke width: 1.5 for elegant thin look
- Color: inherit from parent text color

## Do's
- Use warm tones consistently
- Maintain generous whitespace
- Keep animations subtle and smooth
- Use thin hairline dividers
- Product names in uppercase with wide tracking
- Gold accent for interactive elements

## Don'ts
- No bright, saturated colors
- No harsh shadows or 3D effects
- No thick borders
- No cramped layouts
- No playful or rounded UI elements
- No discount/sale badge styling — maintain luxury feel
