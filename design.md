# Wine Site Design System

## Visual Identity
Elegant, sophisticated, and warm. The site evokes the richness of wine culture — deep burgundy tones, warm creams, and aged gold accents on a dark background.

## Color Palette
- **Background (deep):** `#1a0a0e` — near-black with a warm red undertone
- **Background (surface):** `#2a1018` — dark burgundy card/section background
- **Primary (burgundy):** `#7b1d2e` — rich wine red, used for accents and CTAs
- **Primary hover:** `#9b2d3e`
- **Gold accent:** `#c9a84c` — warm gold for highlights, borders, and decorative elements
- **Cream text:** `#f5ede0` — warm off-white for headings and body text
- **Muted text:** `#b89a8a` — warm taupe for secondary text
- **Border subtle:** `#3d1a22` — subtle dark border

Add to Tailwind config as named colors:
```js
wine: {
  deep: '#1a0a0e',
  surface: '#2a1018',
  primary: '#7b1d2e',
  hover: '#9b2d3e',
  gold: '#c9a84c',
  cream: '#f5ede0',
  muted: '#b89a8a',
  border: '#3d1a22',
}
```

## Typography
- **Font:** Playfair Display (serif) for headings — elegant and classic
- **Font:** Inter (sans-serif) for body text — clean and readable
- **Heading sizes:** text-5xl / text-4xl / text-3xl / text-2xl
- **Body:** text-base / text-lg
- **Letter spacing:** tracking-wide for uppercase labels, tracking-tight for large headings

## Spacing & Layout
- Full-width sections with generous vertical padding: `py-20` to `py-32`
- Max content width: `max-w-6xl mx-auto px-6`
- Cards: `rounded-2xl` with subtle border and shadow
- Section dividers: thin gold horizontal lines `border-wine-gold/30`

## Component Styles
- **Buttons (primary):** `bg-wine-primary hover:bg-wine-hover text-wine-cream px-8 py-3 rounded-full font-semibold tracking-wide transition-all`
- **Buttons (outline):** `border border-wine-gold text-wine-gold hover:bg-wine-gold/10 px-8 py-3 rounded-full`
- **Cards:** `bg-wine-surface border border-wine-border rounded-2xl p-6 shadow-lg`
- **Section labels:** `text-wine-gold uppercase tracking-widest text-sm font-semibold`
- **Headings:** `text-wine-cream font-serif`
- **Body text:** `text-wine-muted`

## Do's
- Use serif fonts for all major headings
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace between sections
- Use subtle background gradients to add depth
- Overlay text on images with dark gradient scrim for readability

## Don'ts
- Don't use bright or saturated colors — keep the palette warm and muted
- Don't use flat white (#ffffff) — use cream (#f5ede0) instead
- Don't crowd sections — wine culture is about elegance and space
- Don't use rounded-sm for cards — prefer rounded-2xl or rounded-xl
