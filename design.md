# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — not loud, not discount-looking, not generic e-commerce. Think Aesop / Mejuri / Vrai editorial photography married to a vintage Vogue spread.

## Color Palette (commit to one direction)
The brand lives in a **warm ivory + deep cocoa + claret** library palette — gold jewelry looks its most flattering against this combination.

| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#F5EFE7` | Page background, "paper" feel |
| `ivory-light` | `#FAF6F0` | Card / panel background (slightly lighter than ivory) |
| `ivory-dark` | `#EFE6D9` | Subtle alt sections, hairlines on hover |
| `cocoa` | `#2A1F1A` | Primary text (warm near-black, never pure black) |
| `cocoa-soft` | `#5A4A40` | Secondary text |
| `muted` | `#7A6B5F` | Tertiary text, captions |
| `claret` | `#5C2A2A` | **Sole accent** — primary buttons, hover states, category labels, newsletter |
| `claret-dark` | `#4A2222` | Hover/active state for claret |
| `gold` | `#B8924A` | Metallic detail, dividers on dark, rating stars |
| `gold-soft` | `#D4B679` | Secondary gold for highlights |
| `hairline` | `#E5DCD0` | 1px borders, dividers |
| `white` | `#FFFFFF` | Use sparingly, only for content-on-claret or cards on dark hero |

Contrast & accessibility: all text uses cocoa on ivory/white — passes WCAG AA. Claret on white passes AA for body and AAA for large text.

## Typography
- **Headings (serif):** Cormorant Garamond (300/400/500/600) — elegant, slightly modern, premium DTC feel
- **Body / UI (sans):** Inter (300/400/500/600)
- **Product names:** Inter, UPPERCASE, letter-spacing 0.18em, font-weight 500
- **Hero headline:** Cormorant Garamond, 300 weight, italic accent option
- **Letter-spacing on uppercase nav/buttons:** 0.15–0.2em

## Spacing
- Generous whitespace, editorial. Use Tailwind `py-20 md:py-28 lg:py-32` for section padding.
- Container max width: 1440px. Content max: 1280px. Product grid gap: 24–32px.
- Mobile: section padding `py-14`.

## Borders & Dividers
- 1px hairlines using `hairline` color.
- Buttons: 1px solid or none. No 2px borders.
- Cards: 0 border by default; lift on hover with shadow only.

## Shadows
- `shadow-soft`: `0 4px 30px rgba(42,31,26,0.06)` — cards on hover
- `shadow-product`: `0 12px 40px -12px rgba(42,31,26,0.18)` — elevated modals, drawers
- **No harsh drop shadows.** No neon glows.

## Buttons
Two main styles — never both at once on one screen.
- **Primary (claret):** `bg-claret text-white px-8 py-4 uppercase tracking-[0.18em] text-xs font-medium hover:bg-claret-dark transition-colors duration-300`
- **Secondary (outline):** `border border-cocoa text-cocoa px-8 py-4 uppercase tracking-[0.18em] text-xs font-medium hover:bg-cocoa hover:text-ivory transition-colors duration-300`
- Pill variant for variant selectors: `rounded-full border border-hairline px-5 py-2 text-xs uppercase tracking-[0.15em]`

## Hover / Motion
- Subtle: 300ms ease for color transitions
- Product image crossfade: opacity 0.5s
- Navbar background fade on scroll
- Drawer: slide-in 400ms ease-out
- **Never** use spring physics or bounces. **Never** use 0ms transitions.

## Imagery
- Editorial, warm-lit gold jewelry on ivory, soft brown, or cocoa backgrounds.
- Never gray. Never white seamless. Never stock-blue.
- Use the `data-strk-img` system to pull warm editorial jewelry photography.
- For product cards use 4:5 ratio (vertical product shots). For hero, 16:9. For UGC reel, 9:16. For category tiles, 3:4.

## Do's
- Do use generous whitespace
- Do use Cormorant Garamond for ALL headlines and product names
- Do keep the accent color (claret) restrained — only for primary actions and hover states
- Do use hairlines, not heavy borders
- Do commit to ONE direction — warm ivory/cocoa/claret — sitewide

## Don'ts
- Don't use bright red, hot pink, or electric blue
- Don't use sans-serif for product names or hero headlines
- Don't use thick borders (2px+)
- Don't use saturated gradients
- Don't use emoji in any UI text
- Don't use pure black (#000) — always warm cocoa
- Don't use shadow-lg (Tailwind default) — use the softer custom shadows
- Don't use rounded-2xl+ on cards — use rounded-sm or no rounding
