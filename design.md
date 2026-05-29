# Mountains Site — Design System

## Brand Identity
A premium, nature-inspired mountain website. The aesthetic is bold, cinematic, and adventurous — evoking the grandeur of high peaks, crisp alpine air, and the spirit of exploration.

## Color Palette
All hex values are registered as named Tailwind colors in `tailwind.config.js`.

| Name         | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| `peak`       | `#1a2e44` | Primary dark navy — headings, navbar bg    |
| `slate-peak` | `#2d4a6b` | Secondary blue-slate — hover states, cards |
| `alpine`     | `#4a7c9e` | Mid-tone blue — accents, links             |
| `glacier`    | `#a8c5da` | Light blue — subtle backgrounds, borders  |
| `snow`       | `#f4f8fb` | Near-white — page backgrounds, cards      |
| `summit`     | `#e8f0f7` | Very light blue-white — section alternates |
| `pine`       | `#2d5a27` | Forest green — nature accents, badges     |
| `stone`      | `#6b7280` | Neutral gray — body text, captions        |
| `amber-peak` | `#d97706` | Warm amber — CTAs, highlights, badges     |

## Typography
- **Font**: Playfair Display (headings) + Inter (body) — loaded via Google Fonts in `index.html`
- **Headings**: `font-playfair` — bold, serif, cinematic
- **Body**: `font-inter` — clean, readable sans-serif
- **Scale**:
  - Hero title: `text-5xl md:text-7xl font-bold`
  - Section heading: `text-3xl md:text-4xl font-bold`
  - Card title: `text-xl font-semibold`
  - Body: `text-base text-stone`
  - Caption/label: `text-sm text-stone`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Components

### Navbar
- Background: `bg-peak` (dark navy), sticky top
- Logo: white text, `font-playfair font-bold text-xl`
- Nav links: `text-glacier hover:text-white` transition
- Mobile: hamburger menu, full-screen overlay

### Hero Section
- Full-viewport height: `min-h-screen`
- Background: stock image with dark overlay `bg-black/50`
- Title: white, `font-playfair`, large
- Subtitle: `text-glacier`
- CTA button: `bg-amber-peak text-white hover:bg-amber-600`

### Cards
- Background: `bg-white` with `shadow-md rounded-2xl overflow-hidden`
- Image: top of card, aspect-ratio `aspect-video` or `aspect-[4/3]`
- Title: `text-peak font-semibold`
- Body text: `text-stone`
- Hover: `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`

### Buttons
- Primary: `bg-amber-peak text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition`
- Secondary: `border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-peak transition`
- Ghost: `text-alpine underline hover:text-peak`

### Section Alternation
- Light sections: `bg-snow`
- Alternate sections: `bg-summit`
- Dark sections: `bg-peak text-white`

### Footer
- Background: `bg-peak text-glacier`
- Links: `hover:text-white`

## Do's
- Use `font-playfair` for all headings and display text
- Use `text-peak` for dark text on light backgrounds
- Use `text-white` or `text-glacier` for text on dark/image backgrounds
- Use `rounded-2xl` for cards and image containers
- Use `transition-all duration-300` for hover effects
- Use stock images for all hero and card images via `data-strk-img` / `data-strk-bg`

## Don'ts
- Never use black (`#000`) as a text color — use `text-peak` instead
- Never place light text on light backgrounds
- Never use flat, unstyled buttons — always use rounded, padded styles
- Never use more than 2 font families
- No magic hex values in JSX — use named Tailwind colors only
