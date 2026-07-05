# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm. Editorial. Premium demi-fine. Not loud, not discount-looking, not generic e-commerce.

## Color Palette (commit to this — used sitewide)
- **Ivory (canvas)**: `#F5EFE6` — primary background. Warm, soft, paper-like.
- **Ink (text/dark sections)**: `#1B1714` — deep charcoal-brown, never pure black.
- **Gold (accent / CTAs / logo hover)**: `#B8893E` — warm bronze-gold, not brassy.
- **Rose-gold (subtle accent)**: `#C9A57B` — for secondary highlights, hovers.
- **Taupe (muted text)**: `#7A6F62` — for subheads, captions, secondary UI.
- **Hairline**: `#1B1714 / 12%` — for dividers, borders, button outlines.
- **Surface (cards)**: `#FBF7F1` — slightly lighter than ivory for elevated cards.
- **Mocha (dark surface / product image bg)**: `#241D17` — warm dark for image placeholders.

Tailwind tokens (extended in tailwind.config.js):
- `ivory`, `ink`, `gold`, `rosegold`, `taupe`, `surface`, `mocha`.

Contrast rules:
- Body text on ivory: `ink` (passes WCAG AA at 14px+).
- Light text on `ink` / `mocha`: `ivory` or `surface` — never muted gold alone.
- CTA filled gold button → text is `ink` for AA contrast.
- Hairlines: `ink` at 12% (decorative only, never for primary content).

## Typography
- **Headings & product names**: Cormorant Garamond (Google Fonts). Light 300, Regular 400, Medium 500.
- **Body & UI**: Inter. Regular 400, Medium 500, Semi 600.
- **Product names**: UPPERCASE, `tracking-[0.18em]`, weight 500, size 12–14px.
- **Headline H1**: Cormorant 400, `text-5xl md:text-7xl`, leading `1.05`.
- **H2**: Cormorant 400, `text-3xl md:text-5xl`.
- **Section subhead**: Inter 500, `text-xs uppercase tracking-[0.25em] text-taupe`.

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-32`.
- Container max-width: `max-w-7xl`, side padding `px-6 md:px-10`.
- Hairline dividers: `border-t border-ink/10`, `1px` only.

## Buttons
- **Primary (filled)**: `bg-ink text-ivory hover:bg-ink/90` OR `bg-gold text-ink hover:bg-gold/90`.
  Use gold for the single most important CTA per page; ink for the rest. 12px vertical, 32–40px horizontal, uppercase tracking 0.2em, 11–12px text.
- **Secondary (outlined)**: `border border-ink text-ink hover:bg-ink hover:text-ivory`.
- **Text link**: `text-ink underline-offset-4 hover:underline` or `text-ink/70 hover:text-ink`.

## Cards & Shadows
- Product cards: NO background, hairline at top/bottom, product sits on ivory. Hover lifts image and reveals second image + Add-to-cart overlay.
- Soft shadow: `shadow-[0_30px_60px_-30px_rgba(27,23,20,0.25)]` for elevated surfaces.
- Transition: `transition-all duration-500 ease-out` for image swaps; `duration-300` for hovers.

## Imagery
- Product / editorial image placeholders: warm dark `mocha` background with a hand-illustrated SVG jewelry piece. Each product gets a unique illustration.
- Hero: real photo (Unsplash) of a model wearing gold jewelry, with a warm gradient overlay for text legibility.

## Do
- Lead with whitespace. Let the product breathe.
- Use hairlines, never heavy borders.
- Keep accent color restrained — gold appears in ONE place per view (a single button, a thin line, a logo accent).
- Use serif for emotion (headlines, product names), sans for utility (nav, body, UI).
- Use uppercase + wide tracking on small labels to feel "branded."

## Don't
- No emojis.
- No bright primary colors, no neon, no loud red.
- No "SALE" badges in the loud red, no countdown timers.
- No drop-shadows under every element.
- No dark mode. The site is one warm, light, editorial mode.
- No underlines on body links — use color or underline-offset.
- No background images behind text without a readable scrim.
