# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry should feel like quiet luxury: warm, editorial, refined, and softly feminine. The experience must feel premium-but-accessible, with generous whitespace, restrained motion, and rich contrast that flatters gold jewelry.

## Visual palette
Use one consistent warm editorial direction sitewide.

- `velmora-ink` — deep espresso for primary text and dark surfaces. Example Tailwind: `bg-velmora-ink`, `text-velmora-ink`
- `velmora-cocoa` — softer dark brown for overlays and elevated navigation. Example Tailwind: `bg-velmora-cocoa`
- `velmora-ivory` — warm ivory page background. Example Tailwind: `bg-velmora-ivory`
- `velmora-cream` — light premium surface for cards and filters. Example Tailwind: `bg-velmora-cream`
- `velmora-bronze` — warm metallic accent for buttons, borders, and highlights. Example Tailwind: `bg-velmora-bronze`, `border-velmora-bronze`
- `velmora-sand` — muted neutral for panels, dividers, and secondary fills. Example Tailwind: `bg-velmora-sand`, `border-velmora-sand`
- `velmora-mist` — soft light text for dark hero overlays. Example Tailwind: `text-velmora-mist`

## Typography
- Headings, logo, and product names: `Cormorant Garamond`, elegant serif. Example Tailwind: `font-display`
- Body copy, labels, navigation, filters, and buttons: `Inter`, clean sans-serif. Example Tailwind: `font-sans`
- Product names should be uppercase with wide built-in tracking. Example Tailwind: `uppercase tracking-widest`

## Layout and spacing
- Use airy sections with large vertical padding. Examples: `py-16 md:py-24`, `gap-8 md:gap-12`
- Constrain content with large editorial widths. Examples: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Use thin, soft dividers instead of heavy borders. Example Tailwind: `border-b border-velmora-sand/60`

## Components
- Buttons should feel polished and substantial. Primary example: `bg-velmora-bronze text-velmora-ink hover:bg-velmora-gold`
- Secondary buttons and pills should use soft outlines. Example: `border border-velmora-sand bg-transparent text-velmora-ink hover:border-velmora-bronze`
- Cards should use cream surfaces, subtle shadows, and gentle hover lifts. Example: `bg-velmora-cream shadow-velmora transition duration-300 hover:-translate-y-1`

## Imagery
- Use warm-lit editorial jewelry photography with gold tones, skin, silk, and soft shadows.
- Prefer close crops, dark neutral backdrops, and premium styling. Avoid loud backgrounds, busy props, discount energy, or generic catalog framing.
- UGC imagery should still feel curated: candid but elevated, with natural light and soft focus.

## Motion
- Keep animations subtle and elegant. Examples: `transition-all duration-300 ease-out`, `group-hover:scale-105`
- Avoid aggressive bounce, oversized glow, or flashy carousels.

## Do
- Keep contrast strong and text explicitly readable on every surface.
- Use gold accents sparingly for premium emphasis.
- Maintain editorial whitespace and balance on desktop while staying mobile-first.

## Don’t
- Do not use bright promotional reds, neon accents, or discount-style badges.
- Do not stack desktop layouts into overly cramped mobile-looking columns on large screens.
- Do not leave important text on inherited colors when the background changes.
