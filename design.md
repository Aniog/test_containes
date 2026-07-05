# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. No loud discounts, no generic e-commerce feel. Gold jewelry reads as treasured and refined.

## Color palette
- **Base / Ink**: `#1c1917` (warm near-black) — headings, primary text, nav solid background.
- **Warm cream**: `#f7f3ed` — primary background, hero text on dark, cards.
- **Soft sand**: `#ede7de` — secondary backgrounds, hover states, subtle separators.
- **Antique gold / brass**: `#b48a4a` — accent color, CTAs, highlights, star rating.
- **Deep espresso**: `#3e3630` — footer, dark section option.
- **Muted taupe**: `#8c8179` — secondary text, captions.

## Typography
- **Headings / product names**: `Cormorant Garamond`, serif. Weight 400/500/600. Product names are uppercase with wide letter-spacing (`tracking-[0.25em]`).
- **Body / UI**: `Inter`, sans-serif. Weight 300/400/500.

## Spacing & layout
- Generous whitespace. Sections use `py-20 md:py-28`.
- Container max-width: `max-w-7xl` centered with `px-4 md:px-8`.
- Thin hairline dividers: `border-stone-200` / `border-[#e6dfd5]`.

## Components
- **Buttons**: premium solid accent (`bg-[#b48a4a]` / `text-[#f7f3ed]`) or outlined (`border-[#b48a4a]` / `text-[#b48a4a]`). Hover: subtle opacity / background shift. Rounded `rounded-none` or slight `rounded-sm`.
- **Cards**: minimal, no heavy shadows. Soft shadow on hover.
- **Inputs**: hairline border, cream background, focus ring on accent.

## Imagery
Warm gold jewelry on dark/neutral backgrounds. Large editorial crops. Use `data-strk-img` tags with placeholder SVG.

## Motion
- Subtle hover transitions: `transition duration-500 ease-out`.
- Fade-in on scroll via simple opacity transition (optional).
- No heavy parallax; keep fast load.
