# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry uses a quiet-luxury editorial aesthetic: warm, elevated, feminine, and calm. The site should feel premium and modern, never loud, discount-driven, or overly glossy.

## Color system
Use one consistent palette across the entire site.

- Background ink: deep espresso-brown for hero, nav overlays, footer, and rich surfaces.
  - Tailwind direction: `bg-stone-950`, `bg-neutral-950`
- Paper: warm ivory / champagne for page backgrounds and cards.
  - Tailwind direction: `bg-stone-50`, `bg-amber-50`
- Accent metallic: muted champagne gold for buttons, borders, icons, ratings, and subtle emphasis.
  - Tailwind direction: `bg-amber-200`, `text-amber-200`, `border-amber-200`, `bg-amber-300`
- Primary text on light surfaces: deep espresso.
  - Tailwind direction: `text-stone-900`
- Secondary text on light surfaces: softened taupe-gray.
  - Tailwind direction: `text-stone-600`
- Text on dark surfaces: warm ivory.
  - Tailwind direction: `text-stone-50`, `text-stone-200`

## Typography
- Headings, product names, editorial pull quotes, logo: Cormorant Garamond
- Body, navigation, buttons, UI labels: Inter
- Product names should be uppercase with increased tracking.
  - Tailwind direction: `uppercase tracking-[0.28em]`

## Layout and spacing
- Prioritize generous whitespace, strong vertical rhythm, and breathing room around cards and imagery.
- Use max-width containers with wide horizontal padding.
  - Tailwind direction: `mx-auto max-w-7xl px-5 sm:px-8 lg:px-12`
- Hairline dividers should feel subtle and refined.
  - Tailwind direction: `border-stone-200/70`, `border-stone-700/60`
- Cards should use soft radius, thin borders, and low-contrast shadows.
  - Tailwind direction: `rounded-3xl border shadow-[0_16px_50px_rgba(28,25,23,0.08)]`

## Buttons and interactions
- Buttons should feel premium and restrained, not playful.
- Primary buttons: deep surface with champagne-gold text or warm gold fill with dark text.
- Secondary buttons: transparent or ivory with thin border.
- Hover states should use subtle translate/fade/shadow changes only.
  - Tailwind direction: `transition duration-300 ease-out hover:-translate-y-0.5`

## Imagery
- Imagery should be warm-lit, editorial, intimate, and focused on gold jewelry on skin or refined neutral surfaces.
- Use large full-bleed compositions for hero and story sections.
- Avoid harsh studio lighting, generic white-background catalog style, and busy compositions.

## Do
- Keep text highly legible on every background.
- Use elegant serif headlines with large scale.
- Favor clean, minimal UI chrome.
- Maintain consistent warm neutral tones sitewide.

## Don’t
- Do not introduce bright promotional colors.
- Do not use chunky borders or loud gradients.
- Do not stack desktop layouts into narrow mobile patterns on large screens.
- Do not let key text rely on inherited color on custom surfaces.
