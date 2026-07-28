# SSourcing China — Design System

## Brand Identity

SSourcing China is a B2B sourcing agent. The visual language must read as **professional, trustworthy, international, and operationally competent**. We sell reliability, transparency, and on-the-ground execution — not bargain-basement prices.

Avoid: garish red-and-gold "Made in China" clichés, dramatic gradients, oversized hero claims, exclamation marks, decorative patterns.

Embrace: clean editorial layout, generous whitespace, calm color palette, factual tone, real-feeling factory / QC / shipping photography.

## Color Palette

Use these as named Tailwind colors (registered in `tailwind.config.js`).

| Token | Hex | Role | Example Use |
|---|---|---|---|
| `primary` | `#0F2A44` | Deep navy — primary brand color, trust | Header background, primary buttons, headings |
| `primary-700` | `#0A1E33` | Darker navy — hover, footer bg | Button hover, footer background |
| `primary-100` | `#E6ECF2` | Soft navy tint | Subtle section backgrounds, badge backgrounds |
| `accent` | `#C2410C` | Burnt orange / terracotta — warmth, action, China | CTA hover, accent text, icons, section accents |
| `accent-100` | `#FDE9DC` | Soft accent tint | Quote blocks, badges |
| `ink` | `#0B1320` | Near-black body text | Body text |
| `muted` | `#5B6675` | Secondary text | Descriptions, meta |
| `line` | `#E2E6EC` | Borders and dividers | Card borders, input borders |
| `surface` | `#FFFFFF` | Card / page surface | Cards, modals |
| `bg` | `#F7F8FA` | Page background | Page background |
| `success` | `#15803D` | Confirmation, on-track indicators | Success messages |
| `warn` | `#B45309` | Caution indicators | Risk callouts |

Foreground pairings (do not invert blindly):
- `bg-primary text-white` — primary buttons, header
- `bg-white text-primary` — secondary buttons on dark
- `bg-bg text-ink` — page body
- `bg-surface text-ink` — cards
- `bg-accent-100 text-accent` — highlighted callouts

## Typography

Google Font: **Inter** (already loaded). Use the weights 400, 500, 600, 700.

- Display / H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary`
- H2: `text-3xl md:text-4xl font-bold tracking-tight text-primary`
- H3: `text-xl md:text-2xl font-semibold text-primary`
- H4: `text-lg font-semibold text-ink`
- Body: `text-base leading-relaxed text-ink`
- Lead (intro paragraph): `text-lg md:text-xl leading-relaxed text-muted`
- Small / meta: `text-sm text-muted`
- Eyebrow (small caps style): `text-xs font-semibold uppercase tracking-[0.18em] text-accent`

Line height: 1.5 for body, 1.15 for headings. Max content width: 1200px, body copy: 65–75ch.

## Spacing & Layout

- Page max width: `max-w-7xl mx-auto px-5 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gap: `gap-6 md:gap-8`
- Standard border radius: `rounded-lg` (8px) for cards, `rounded-md` (6px) for inputs/buttons

## Components

### Buttons
- Primary: `bg-primary hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-md transition-colors`
- Accent: `bg-accent hover:opacity-90 text-white font-semibold px-6 py-3 rounded-md transition`
- Secondary: `bg-white border border-line text-primary hover:border-primary hover:text-primary font-semibold px-6 py-3 rounded-md transition-colors`
- Ghost / link: `text-primary hover:text-accent font-semibold underline-offset-4 hover:underline`
- Sizes: sm `px-4 py-2 text-sm`, md `px-6 py-3 text-base`, lg `px-7 py-3.5 text-base`

### Cards
`bg-surface border border-line rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow`

### Section eyebrow + heading pattern
```
<span class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">[Eyebrow]</span>
<h2 class="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-primary">[Heading]</h2>
<p class="mt-4 text-lg leading-relaxed text-muted max-w-3xl">[Lead paragraph]</p>
```

### Inputs / Forms
- Input: `w-full rounded-md border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`
- Label: `text-sm font-medium text-ink mb-1.5 block`
- Helper: `text-xs text-muted mt-1.5`

## Iconography

Use `lucide-react`. Preferred icons (outline, 1.75 stroke, 20–24px):

- Sourcing / factory: `Factory`, `Warehouse`, `PackageSearch`, `Search`, `Boxes`
- QC: `ClipboardCheck`, `ShieldCheck`, `ScanSearch`, `BadgeCheck`
- Shipping: `Ship`, `Truck`, `Plane`, `Container`
- Trust: `Shield`, `CheckCircle2`, `Lock`, `FileCheck2`
- Communication: `MessageSquare`, `Mail`, `Phone`
- Process: `ListChecks`, `Workflow`, `Compass`
- Problems: `AlertTriangle`, `X`, `HelpCircle`

## Photography

Use the `data-strk-img` / `data-strk-bg` system for stock images.

Subject guidance for queries (semantic, no plain text):
- Hero: container ship at port, factory floor, inspector with clipboard, shipping containers
- Services: factory workers, quality inspection, container yard, warehouse, document signing
- Products: industrial equipment, consumer goods on shelves, electronics, textiles, packaging
- Case studies: finished products, shipment loading, factory exterior
- Blog: logistics, meetings, paperwork, packaging

Aspect ratios:
- Hero background: 16x9, width 1600
- Service cards: 4x3, width 600
- Case study cards: 3x2, width 800
- Process steps: 1x1, width 400
- Blog cards: 3x2, width 600

## Voice & Tone

- Direct, second person ("you"), no marketing superlatives
- Quantify when possible ("typically 3–5 working days", "30%–50% lower than retail")
- No "best", "guaranteed cheapest", "100% risk-free" or similar absolutes
- Prefer concrete nouns: supplier, factory, inspection, sample, B/L, FOB, QC report
- B2B trust signals: years of experience, supplier base size, monthly inspection capacity, languages spoken, response time SLAs

## Layout Patterns

### Header
- Sticky, white background with bottom border, `h-16 md:h-20`
- Left: logo + wordmark
- Center/right: nav links (Services, How It Works, Products, Case Studies, Blog)
- Right: "Contact" + accent CTA "Get a Free Sourcing Quote"
- Mobile: hamburger that opens a full-height drawer

### Hero
- Two-column on desktop (text + image)
- Eyebrow → H1 → lead → two CTAs → small trust row
- Background image of port / containers / factory

### Footer
- Dark `bg-primary-700`, 4 columns: brand + about / Services / Company / Contact
- Bottom bar: copyright + small legal links
