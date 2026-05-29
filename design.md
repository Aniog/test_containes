# Bike Site Design System

## Brand Identity
Bold, energetic, and modern. The site targets cycling enthusiasts — from casual riders to serious mountain bikers. The aesthetic is clean with strong contrast, dynamic imagery, and confident typography.

## Color Palette

| Name        | Hex       | Tailwind Class         | Usage                          |
|-------------|-----------|------------------------|--------------------------------|
| Charcoal    | #1a1a2e   | bg-[#1a1a2e]           | Primary dark background        |
| Midnight    | #16213e   | bg-[#16213e]           | Secondary dark background      |
| Electric    | #e94560   | text-[#e94560]         | Primary accent / CTA           |
| Steel       | #0f3460   | bg-[#0f3460]           | Card backgrounds, sections     |
| Light Gray  | #f5f5f5   | bg-gray-100            | Light section backgrounds      |
| White       | #ffffff   | text-white             | Primary text on dark           |
| Muted       | #a0aec0   | text-gray-400          | Secondary text on dark         |
| Dark Text   | #1a202c   | text-gray-900          | Primary text on light          |

## Typography

- **Font**: Inter (Google Fonts)
- **Hero heading**: `text-5xl md:text-7xl font-black tracking-tight text-white`
- **Section heading**: `text-3xl md:text-4xl font-bold text-gray-900` (light bg) or `text-white` (dark bg)
- **Subheading**: `text-xl font-semibold`
- **Body**: `text-base text-gray-600` (light) or `text-gray-300` (dark)
- **Caption / label**: `text-sm font-medium uppercase tracking-widest`

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows

- Card border: `border border-gray-200` (light) or `border border-white/10` (dark)
- Card shadow: `shadow-lg hover:shadow-xl transition-shadow`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for badges/pills, `rounded-xl` for buttons

## Buttons

- **Primary CTA**: `bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-8 py-3 rounded-xl transition-colors`
- **Secondary**: `border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] font-semibold px-8 py-3 rounded-xl transition-colors`
- **Ghost**: `text-[#e94560] hover:underline font-medium`

## Component Patterns

- **Hero**: Full-width dark section with gradient overlay, large heading, subtext, two CTA buttons
- **Feature cards**: White cards on light gray background, icon + title + description
- **Bike cards**: Dark cards with image, name, category badge, price
- **Stats bar**: Dark background, large numbers with labels
- **Testimonials**: Light background, quote cards with avatar and name

## Do's
- Use high contrast text on all backgrounds
- Use `text-white` on dark backgrounds, `text-gray-900` on light backgrounds
- Use the electric red `#e94560` sparingly for emphasis and CTAs
- Maintain consistent section padding

## Don'ts
- Never use light gray text on white backgrounds
- Never use dark text on dark backgrounds
- Avoid more than 2 accent colors per section
- Don't use inline styles — use Tailwind classes only
