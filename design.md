# Velmora Fine Jewelry Visual Design

## Direction
Velmora uses a quiet-luxury editorial system: warm ivory surfaces, deep espresso typography, restrained antique-gold accents, generous whitespace, thin dividers, and large warm-lit jewelry imagery. The brand should feel premium and calm, never loud, promotional, or generic.

## Palette
Use named Tailwind colors only; no arbitrary hex values in components.
- `velmora-ivory` (`#F8F3EA`): primary page background.
- `velmora-parchment` (`#EFE5D6`): soft section/card background.
- `velmora-linen` (`#FBF8F2`): elevated cards and inputs.
- `velmora-espresso` (`#2A1D18`): primary text and dark surfaces.
- `velmora-charcoal` (`#3B302C`): body text and secondary dark text.
- `velmora-taupe` (`#8C7665`): muted text and hairline borders.
- `velmora-gold` (`#B68A4A`): primary accent and CTA color.
- `velmora-goldDeep` (`#8A642E`): hover/pressed accent.
- `velmora-rose` (`#D8B8A8`): subtle warm highlight.
- `velmora-mist` (`#E7DED2`): dividers and quiet panels.

## Typography
- Headings and product names: `font-serif` using Cormorant Garamond. Large, elegant, high contrast.
- Body and UI: `font-sans` using Manrope. Clean, readable, restrained.
- Product names are uppercase with wide letter spacing: `uppercase tracking-[0.22em]` is acceptable only for letter-spacing; prefer `tracking-[0.2em]` sparingly for premium product labels.

## Layout & Spacing
- Mobile-first, with spacious single-column stacking on mobile and editorial two-column/grid layouts on tablet and desktop.
- Use generous vertical rhythm: sections commonly use `py-16 md:py-24`.
- Keep card padding deliberate: `p-5`, `p-6`, or `p-8`.
- Use thin hairline dividers with `border-velmora-mist` or `border-velmora-taupe/30`.

## Components
- Buttons: solid antique gold with espresso text, or transparent outlined espresso/gold. Use pill shapes for CTAs and selectors.
- Cards: minimal borders, soft shadows, warm linen backgrounds, image-first composition.
- Navigation: transparent over hero, transitions to ivory/blurred solid on scroll.
- Cart drawer: linen panel with espresso text, strong contrast, clear controls.

## Do
- Use warm, model/editorial jewelry imagery via Strikingly stock image attributes.
- Use subtle transitions: opacity, transform, background, border.
- Ensure all text is explicit and readable on its surface.

## Don’t
- Do not use neon colors, heavy discount language, loud sale badges, or cluttered product tiles.
- Do not use hardcoded image URLs.
- Do not place low-contrast taupe text on gold/dark surfaces.
