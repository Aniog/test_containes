# Design System — Argentina Football Team Website

## Color Palette

| Name | Hex | Tailwind Class |
|------|-----|----------------|
| Argentina Blue | #74ACDF | `bg-argentina-blue` / `text-argentina-blue` |
| Argentina White | #FFFFFF | `bg-white` / `text-white` |
| Gold | #F6C90E | `bg-gold` / `text-gold` |
| Dark Navy | #0D1B2A | `bg-navy` / `text-navy` |
| Light Gray | #F4F6F9 | `bg-light-gray` |
| Muted Text | #6B7280 | `text-gray-500` |

## Typography

- **Font Family**: Inter (Google Fonts)
- **Hero Title**: `text-5xl md:text-7xl font-extrabold tracking-tight`
- **Section Title**: `text-3xl md:text-4xl font-bold`
- **Card Title**: `text-xl font-semibold`
- **Body**: `text-base font-normal leading-relaxed`
- **Caption / Label**: `text-sm font-medium uppercase tracking-widest`

## Spacing

- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows

- Card: `rounded-2xl shadow-lg`
- Button: `rounded-full`
- Divider accent: `border-l-4 border-argentina-blue`

## Components

### Navbar
- Sticky top, dark navy background
- Logo left, nav links right
- Active link underline in gold

### Hero Section
- Full-screen height, dark navy background with diagonal blue stripe
- Large white headline, gold accent text
- CTA button: gold background, navy text, rounded-full

### Stats Bar
- 3-column grid on desktop, 1-column on mobile
- White background, large blue numbers, gray labels

### Players Section
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- Player card: white background, rounded-2xl, player photo top, name + position below

### Achievements Section
- Dark navy background, white text
- Trophy icons in gold, year in argentina-blue

### Gallery Section
- Masonry-style grid, 3 columns on desktop

### Footer
- Dark navy background, white text
- Social icons in gold

## Do's
- Always use `text-white` on dark navy backgrounds
- Use gold (`#F6C90E`) for highlights, CTAs, and accents
- Use argentina-blue (`#74ACDF`) for primary interactive elements
- Maintain generous whitespace between sections

## Don'ts
- Never use dark text on dark navy backgrounds
- Never use light gray text on white backgrounds (use gray-500 minimum)
- Avoid more than 3 font weights per section
