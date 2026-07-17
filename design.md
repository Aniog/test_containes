# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium demi-fine. The brand is feminine but grounded — not precious, not loud. Think: worn-in luxury, a piece that lives on a vanity in soft morning light, on skin that knows it well.

## Color Direction
A single confident direction: **warm editorial cream + espresso + antique gold**. The entire site is anchored on a warm cream canvas so gold jewelry photographs warm. Espresso (warm near-black) is the primary text and CTA. Antique gold is the restrained accent — used sparingly for hover, link underline, price emphasis.

### Tokens (defined in `tailwind.config.js`)

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#F7F1E8` | Page background — never use stark white |
| `creamLight` | `#FBF7F0` | Card background, soft surface lift |
| `beige` | `#EDE2D0` | Alternate section background, badge background |
| `beigeDark` | `#E2D4BC` | Hover surfaces |
| `taupe` | `#C9B89F` | Muted icon, decorative line |
| `taupeLight` | `#DDCFB6` | Hairline dividers |
| `gold` | `#B8956A` | Antique gold — primary accent |
| `gold-light` | `#D4B584` | Soft hover highlight |
| `gold-dark` | `#8B6F47` | Pressed / darker gold |
| `espresso` | `#1F1814` | Primary text, dark surface, primary CTA |
| `espresso-soft` | `#2B2218` | CTA hover |

### Rules
- **No** pure white (`#FFFFFF`) or pure black (`#000000`). The cream and espresso tokens are always warm.
- **Never** put `text-taupe` or `text-gold` on the cream background without sufficient contrast for important copy. Use them for accents and eyebrows, not body.
- Body text on cream uses `text-espresso`. Body text on espresso uses `text-cream`.
- Accent color appears in: link underline on hover, "New" / "Bestseller" tag backgrounds, primary accent CTA section (e.g. newsletter), variant pill when selected, star rating.

## Typography

| Role | Family | Size | Notes |
| --- | --- | --- | --- |
| Hero headline | Cormorant Garamond | `text-5xl` → `text-7xl` | font-light (300), italic for accent words |
| Section heading | Cormorant Garamond | `text-3xl` → `text-5xl` | font-light to regular |
| Product name | Inter | `text-xs` → `text-sm` | **UPPERCASE**, `tracking-widest2` (0.18em), font-medium |
| Eyebrow / micro label | Inter | `text-[10px]` → `text-xs` | **UPPERCASE**, `tracking-widest3` (0.28em), `text-gold-dark` |
| Body | Inter | `text-sm` → `text-base` | font-light to regular |
| UI / button | Inter | `text-xs` | **UPPERCASE**, `tracking-widest2` |
| Price | Cormorant Garamond | `text-xl` → `text-2xl` | font-medium, elegant |

## Layout

- Container max width: `max-w-7xl` (1280px), with `max-w-[1440px]` for hero / full-bleed sections.
- Section vertical rhythm: `py-20 md:py-28` for major sections, `py-12 md:py-16` for compact ones.
- Generous gutters: `px-6 md:px-10 lg:px-16`.
- Hairline `<div>` separators in `bg-taupeLight` for editorial rhythm.

## Component Patterns

### Buttons
- **Primary** (`btn-primary`): espresso background, cream text, uppercase, 0.2em tracking. Lifts 1px on hover.
- **Outline** (`btn-outline`): espresso border, espresso text. Inverts on hover.
- **Accent / Gold** (`btn-gold`): antique gold background, cream text. Used on newsletter and key CTAs.
- **Text link** (`text-link`): uppercase Inter, hairline underline. Underline shifts to gold on hover.

### Cards
- 1px border in `border-taupeLight/60` or no border on cream.
- Image overflow on hover (subtle 1.04 scale).
- Quick "Add to Cart" button fades in on hover (creamLight background).
- Subtle shadow on hover only (`shadow-soft`).

### Pills (variant selector, filters)
- Rounded-full, 1px border in `border-taupe`, padded `px-4 py-2`.
- Selected state: `bg-espresso text-cream border-espresso`.
- Unselected hover: `border-espresso/60`.

### Inputs
- Bottom-border only. Cream background. Espresso text. Subtle gold focus underline.

### Navbar
- Transparent over hero, `bg-cream/95 backdrop-blur` on scroll with hairline border.
- Logo on the left ("VELMORA" in serif, letter-spaced).
- Center nav links: Inter, uppercase, 0.2em tracking, no underline.
- Right: search + cart icon (Lucide). Cart icon shows a small espresso badge with item count.

### Cart Drawer
- Slides in from right (`animate-slide-in-right`).
- Cream background, espresso accents, hairline between items.

## Imagery

- All product / hero / category imagery is warm, low-light, editorial. Use stock queries that describe warm-lit gold jewelry on neutral/dark skin-tone backgrounds.
- Always wrap image-bearing sections in a stable `containerRef` and call `ImageHelper.loadImages`.
- Image tags include `data-strk-img-id` (unique per element) and `data-strk-img` queries referencing nearby text IDs (most-specific-first, e.g. `[item-title] [section-eyebrow] [page-title]`).

## Motion

- All transitions: 300–500ms with `ease-out`. No bounce, no springy effects.
- Reveal animations use the `reveal` class with staggered delays (`reveal-1`, `reveal-2`, `reveal-3`).
- Hover lifts are 1px max. Image scale is 1.04 max.
- Marquee: very slow (40s) for trust strip only.

## Do / Don't

- **Do** keep product names in UPPERCASE with wide letter-spacing.
- **Do** use hairlines for separation, not heavy boxes.
- **Do** allow sections to breathe — generous padding is non-negotiable.
- **Don't** use gradients on body. Only very subtle warm gradients on hero overlays.
- **Don't** use drop-shadows on text.
- **Don't** put more than one gold-colored CTA above the fold.
- **Don't** use emoji, decorative icons, or "discount" badges (e.g. "SALE 50% OFF").
- **Don't** show prices with strikethroughs or "was/now" framing.
