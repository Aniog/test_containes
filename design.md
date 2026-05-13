# Design System — Strikingly Generators Hub

## Brand Identity
Dark-first, high-contrast, modern SaaS aesthetic. Coral accent on near-black backgrounds. Clean, confident typography.

## Colors

### Background Scale
- Page background: `bg-[#0A0A0F]` (near-black)
- Surface / card: `bg-[#13131A]`
- Elevated card: `bg-[#1C1C27]`
- Border: `border-[#2A2A38]`
- Subtle border: `border-[#1E1E2A]`

### Accent
- Primary coral: `#FF5533` → Tailwind config key: `coral`
- Hover coral: `#E84420`
- Coral text: `text-coral`
- Coral bg: `bg-coral`
- Coral border: `border-coral`

### Text
- Heading: `text-white`
- Body: `text-[#C8C8D8]`
- Muted: `text-[#7A7A96]`
- Label / tag: `text-[#9090B0]`

### Status / Utility
- Focus ring: `ring-coral ring-2 ring-offset-2 ring-offset-[#0A0A0F]`
- Success: `text-emerald-400`

## Typography

### Font
- Family: Inter (Google Fonts, loaded in index.html)
- Root: `font-sans`

### Scale
- H1 (hero): `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white`
- H2 (section): `text-2xl md:text-3xl font-bold text-white`
- H3 (subsection): `text-lg md:text-xl font-semibold text-white`
- Body large: `text-base md:text-lg text-[#C8C8D8]`
- Body: `text-sm md:text-base text-[#C8C8D8]`
- Label / tag: `text-xs font-medium uppercase tracking-wide text-[#9090B0]`
- Caption: `text-xs text-[#7A7A96]`

## Spacing

- Section vertical padding: `py-16 md:py-24`
- Section inner max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-5 md:p-6`
- Card gap in grid: `gap-4 md:gap-6`

## Borders & Radius

- Card radius: `rounded-xl`
- Button radius: `rounded-lg`
- Input radius: `rounded-lg`
- Tag radius: `rounded-full`

## Buttons

### Primary CTA
```
bg-coral hover:bg-[#E84420] text-white font-semibold px-6 py-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]
```

### Secondary / Ghost
```
border border-[#2A2A38] hover:border-coral text-[#C8C8D8] hover:text-white font-medium px-5 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]
```

### Text link
```
text-coral hover:text-[#E84420] underline-offset-2 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-coral rounded
```

## Cards

### Generator Card
- Background: `bg-[#13131A]`
- Border: `border border-[#2A2A38]`
- Hover: `hover:border-coral hover:bg-[#1C1C27]`
- Transition: `transition-all duration-200`
- Full card is a `<a>` element with `rounded-xl p-5 flex flex-col gap-3`

### Category Nav Card
- Same base as generator card
- Larger icon area, centered layout

## Inputs

### Search
```
w-full bg-[#13131A] border border-[#2A2A38] text-white placeholder-[#7A7A96] rounded-lg px-4 py-3 pl-11 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors
```

## Tags / Category Labels
```
inline-block bg-[#1C1C27] text-[#9090B0] text-xs font-medium px-2.5 py-1 rounded-full border border-[#2A2A38]
```

## Dividers
- `border-t border-[#1E1E2A]`

## Do's
- Always set explicit text color on every surface — never rely on inherited color
- Use `focus-visible:` for focus rings (not `focus:`) to avoid showing rings on mouse click
- Use real `<a href>` for all navigation; never use clickable `<div>`
- Use `aria-expanded` + `aria-controls` on all toggle buttons
- Use `aria-hidden="true"` on all decorative SVGs
- Keep heading hierarchy strict: one H1, H2 per major section, H3 for subsections

## Don'ts
- No `href="#"` placeholder links
- No fake social proof ("most-used", star ratings, invented testimonials)
- No FAQPage JSON-LD structured data
- No inline styles — use Tailwind classes only
- No hardcoded hex values in JSX — use Tailwind config named colors or CSS variables
- No client-side-only rendering of directory cards
