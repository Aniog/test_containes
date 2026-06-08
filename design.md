# Design System — Fishing Equipment Site

## Brand Identity
Outdoorsy, trustworthy, and premium. The site evokes the feeling of early morning on the water — calm, focused, and ready for adventure.

## Color Palette
- **Primary (Deep Teal):** `#0d6e6e` — used for CTAs, headings, accents. Tailwind: `bg-teal-800` or custom `bg-primary`.
- **Primary Dark:** `#094f4f` — hover states on primary buttons.
- **Accent (Amber/Gold):** `#d97706` — highlights, badges, star ratings. Tailwind: `text-amber-600`.
- **Background Light:** `#f0f7f7` — page background, section alternates.
- **Background White:** `#ffffff` — cards, modals.
- **Surface Muted:** `#e8f4f4` — subtle section backgrounds.
- **Text Primary:** `#1a2e2e` — headings and body text on light backgrounds.
- **Text Secondary:** `#4a6b6b` — subheadings, captions, muted text.
- **Text On Dark:** `#ffffff` — text on dark/teal backgrounds.
- **Border:** `#c8dede` — card borders, dividers.

## Typography
- **Font Family:** Inter (Google Fonts), fallback: system-ui, sans-serif.
- **Hero Heading:** `text-5xl md:text-6xl font-extrabold text-white leading-tight`
- **Section Heading:** `text-3xl md:text-4xl font-bold text-teal-900`
- **Card Title:** `text-lg font-semibold text-teal-900`
- **Body Text:** `text-base text-gray-700 leading-relaxed`
- **Caption / Muted:** `text-sm text-teal-700`
- **Button Text:** `text-sm font-semibold uppercase tracking-wide`

## Spacing
- Section vertical padding: `py-16 md:py-24`
- Container max width: `max-w-6xl mx-auto px-4 md:px-8`
- Card padding: `p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-teal-100 rounded-2xl`
- Card shadow: `shadow-md hover:shadow-xl transition-shadow`
- Button border radius: `rounded-full`
- Section divider: `border-t border-teal-100`

## Buttons
- **Primary CTA:** `bg-teal-700 hover:bg-teal-800 text-white rounded-full px-8 py-3 font-semibold transition-colors`
- **Secondary / Outline:** `border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-8 py-3 font-semibold transition-colors`
- **Accent:** `bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-3 font-semibold transition-colors`

## Navigation
- Sticky top nav with white background and subtle shadow.
- Logo: bold teal text with a fish/hook icon.
- Nav links: `text-teal-800 hover:text-amber-600 font-medium transition-colors`
- Mobile: hamburger menu.

## Sections (in order)
1. **Hero** — full-width with background image, dark overlay, headline + CTA.
2. **Features / Why Us** — 3-column icon grid on light teal background.
3. **Product Categories** — card grid with images (rods, reels, lures, apparel).
4. **Featured Products** — horizontal scroll or 4-column grid with price + rating.
5. **Testimonials** — quote cards on white background.
6. **Newsletter / CTA Banner** — teal background, email input.
7. **Footer** — dark teal background, white text, links.

## Do's
- Always use teal/amber palette — never use generic blue or red.
- Use rounded corners (`rounded-2xl`) on cards.
- Use `transition-*` on interactive elements.
- Ensure all text on teal backgrounds is white or very light.
- Use stock images for hero, product cards, and category cards.

## Don'ts
- Don't use pure black (`#000`) for text — use `#1a2e2e` instead.
- Don't use gray-only color scheme — always incorporate teal.
- Don't use small font sizes below `text-sm` for body content.
- Don't hardcode hex colors in JSX — use Tailwind classes.
