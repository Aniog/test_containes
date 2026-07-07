# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry should feel like quiet luxury: editorial, warm, elevated, and calm. The site should emphasize craftsmanship and gifting value without looking loud, trendy, or discount-driven.

## Typography
- Headings and product names: Playfair Display, serif, elegant, refined, high-contrast.
- Body and UI: Inter, sans-serif, clean and understated.
- Product names: uppercase with wide tracking.

## Color palette
Use Tailwind semantic-style pairings built from neutral stone and warm amber tones.
- Page background: `bg-stone-50`
- Elevated surfaces: `bg-stone-100` or `bg-white`
- Deep brand surface: `bg-stone-900`
- Primary text on light backgrounds: `text-stone-900`
- Secondary text: `text-stone-600`
- Dividers: `border-stone-200` and `border-stone-300`
- Premium accent: `bg-amber-500`, `text-amber-500`, `border-amber-500`
- Accent hover states: `bg-amber-400`, `text-amber-400`
- Dark-on-dark text should use `text-stone-100` or `text-stone-200`

## Layout and spacing
- Favor generous whitespace and large vertical rhythm.
- Use thin dividers and soft shadows instead of heavy borders.
- Desktop layouts should feel editorial and roomy; mobile should remain compact but breathable.
- Section spacing should generally use `py-16`, `py-20`, or `py-24` depending on emphasis.
- Use `max-w-7xl` for primary page containers and `px-4 sm:px-6 lg:px-8` for horizontal padding.

## Components
- Buttons: premium and restrained. Prefer pill or softly rounded shapes with `rounded-full` and subtle transitions.
- Cards: clean image-forward cards with light shadows, soft hover lift, and visible readable text.
- Navigation: transparent over hero, transitions to a solid dark backdrop on scroll.
- Inputs: understated, clean, clear borders, strong contrast.
- Product tiles: minimal chrome, uppercase names, muted metadata, warm CTA accents.

## Motion
- Keep hover transitions subtle: opacity, translate, shadow, and color changes only.
- Avoid bouncy or playful animations.
- Use `duration-300` or `duration-500` for premium-feeling transitions.

## Do
- Keep color contrast strong and explicit.
- Use warm editorial imagery that flatters gold jewelry.
- Maintain consistent serif/sans pairing.
- Let whitespace do the work.

## Don’t
- Don’t use bright promotional reds, discount badges, or cluttered sale styling.
- Don’t stack desktop content into narrow mobile-like columns.
- Don’t rely on inherited text colors on dark or image-based surfaces.
- Don’t use arbitrary hex values in class names.
