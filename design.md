# Design System — The Starry Night & Astronomy

## Theme: Japanese Minimalism × Night Sky

A dark, contemplative aesthetic inspired by Japanese wabi-sabi and the infinite cosmos.
Generous whitespace, deliberate typography, and restrained color usage create a sense of
depth and wonder without visual noise.

---

## Color Palette

All hex values are registered as named Tailwind colors in `tailwind.config.js`.

| Token         | Hex       | Tailwind Class         | Usage                              |
|---------------|-----------|------------------------|------------------------------------|
| `cosmos`      | `#0a0c14` | `bg-cosmos`            | Primary page background            |
| `deep-space`  | `#0f1221` | `bg-deep-space`        | Card / section backgrounds         |
| `nebula`      | `#161b33` | `bg-nebula`            | Elevated surfaces, nav             |
| `stardust`    | `#1e2540` | `bg-stardust`          | Borders, dividers                  |
| `aurora`      | `#4f6ef7` | `text-aurora`          | Primary accent (indigo-blue)       |
| `amber-star`  | `#f5c842` | `text-amber-star`      | Secondary accent (warm gold)       |
| `moonlight`   | `#e8eaf6` | `text-moonlight`       | Primary body text                  |
| `comet`       | `#9ba3c4` | `text-comet`           | Muted / secondary text             |
| `horizon`     | `#5c6490` | `text-horizon`         | Placeholder / disabled text        |

### Do's
- Use `cosmos` or `deep-space` as page backgrounds
- Use `moonlight` for all primary readable text on dark backgrounds
- Use `aurora` for interactive elements, links, and highlights
- Use `amber-star` sparingly for emphasis and decorative accents
- Pair `comet` with `deep-space` backgrounds for secondary text

### Don'ts
- Never use light text on light backgrounds
- Never use `horizon` for important content — it's for placeholders only
- Avoid more than 2 accent colors per section

---

## Typography

Font: **Cormorant Garamond** (headings) + **Inter** (body)
Loaded via Google Fonts in `index.html`.

| Role          | Class                                      |
|---------------|--------------------------------------------|
| Hero title    | `font-cormorant text-5xl md:text-7xl font-light tracking-wide` |
| Section title | `font-cormorant text-3xl md:text-4xl font-light` |
| Card title    | `font-cormorant text-xl font-medium`       |
| Body text     | `font-inter text-base text-moonlight`      |
| Caption       | `font-inter text-sm text-comet`            |
| Label         | `font-inter text-xs uppercase tracking-widest text-comet` |

---

## Spacing & Layout

- Page max-width: `max-w-6xl mx-auto px-6 md:px-12`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Grid gap: `gap-6 md:gap-8`

---

## Borders & Shadows

- Subtle border: `border border-stardust`
- Card border: `border border-stardust/60 rounded-xl`
- Glow effect (aurora): `shadow-[0_0_24px_rgba(79,110,247,0.15)]`
- Glow effect (amber): `shadow-[0_0_24px_rgba(245,200,66,0.12)]`

---

## Interactive States

- Hover on cards: `hover:border-aurora/40 hover:shadow-[0_0_24px_rgba(79,110,247,0.2)] transition-all duration-300`
- Hover on links: `hover:text-aurora transition-colors duration-200`
- Focus on inputs: `focus:ring-2 focus:ring-aurora/50 focus:border-aurora`
- Active button: `active:scale-95 transition-transform`

---

## Components

### Navigation Bar
- Background: `bg-nebula/80 backdrop-blur-md`
- Border bottom: `border-b border-stardust`
- Logo: `font-cormorant text-xl text-moonlight`
- Nav links: `text-comet hover:text-moonlight text-sm tracking-wide`

### Cards
- Background: `bg-deep-space`
- Border: `border border-stardust/60 rounded-xl`
- Hover: lift + aurora glow

### Buttons (Primary)
- `bg-aurora text-white px-6 py-3 rounded-lg font-inter text-sm tracking-wide hover:bg-aurora/90 active:scale-95 transition-all`

### Buttons (Ghost)
- `border border-aurora/40 text-aurora px-6 py-3 rounded-lg hover:bg-aurora/10 transition-all`

### Form Inputs
- `bg-nebula border border-stardust text-moonlight placeholder:text-horizon rounded-lg px-4 py-3 focus:ring-2 focus:ring-aurora/50 focus:border-aurora outline-none transition-all`

### Dividers
- `<hr className="border-stardust/40" />`

---

## Decorative Elements

- Star dots: small `w-1 h-1 rounded-full bg-amber-star/60` scattered via absolute positioning
- Section labels: `text-xs uppercase tracking-widest text-aurora font-inter`
- Gradient overlays: `bg-gradient-to-b from-cosmos via-deep-space to-cosmos`
