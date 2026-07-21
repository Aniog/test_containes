# Velmora Fine Jewelry — Design System

> Quiet luxury, warm, editorial. Premium demi-fine jewelry, not loud, not discount-looking, not generic e-commerce. Inspired by Mejuri / Aurate / Vrai at the accessible end of the spectrum.

This document is the single source of truth for all visual decisions in the storefront. Translate every rule here into Tailwind utility classes — never invent new hex codes, font stacks, spacing scales, or motion curves without updating this file.

---

## 1. Brand Positioning

- **Brand**: Velmora Fine Jewelry
- **Tagline**: *Crafted to be Treasured*
- **Tone**: Confident, restrained, editorial. Sensorial but never shouty. Sentences are short. Gifting copy is warm; self-purchase copy is matter-of-fact.
- **Voice**: Third-person, present-tense. Avoid exclamation marks. Avoid sales words ("deal", "discount", "best ever"). Use "complimentary", "considered", "quiet", "heirloom", "in the making".
- **Audience**: Women 25–45, gifting and self-purchase, premium-but-accessible, $30–$120 price point.
- **Anti-patterns**: Anything that reads as Amazon, Temu, or AliExpress. No "FREE" all-caps. No rainbow gradients. No emoji. No rounded-pill playful buttons.

---

## 2. Color Palette

The palette is built around one confident direction: **warm ivory as the canvas, deep espresso as the ink, muted gold as the singular accent**. Everything else is a neutral derived from these three.

### 2.1 Core tokens

| Token | Hex | Role | Tailwind class |
|---|---|---|---|
| Ivory | `#FBF7F2` | Page background, soft surfaces | `bg-ivory`, `text-ivory` |
| Ivory 50 | `#FDFBF8` | Cards on ivory, hover wash | `bg-ivory-50` |
| Ivory 200 | `#F4ECE1` | Image placeholders, divider washes | `bg-ivory-200` |
| Ivory 300 | `#EBE0CF` | Active row wash, gentle fills | `bg-ivory-300` |
| Espresso | `#1F1612` | Body text, primary ink | `text-espresso`, `bg-espresso` |
| Espresso 700 | `#2E211A` | Secondary buttons, footer | `bg-espresso-700` |
| Espresso 600 | `#3D2D24` | Hover on espresso surfaces | `bg-espresso-600` |
| Espresso 500 | `#5A463C` | Muted text on ivory, captions | `text-espresso-500` |
| Espresso 800 | `#0E0A08` | Deepest contrast, hero scrim | `bg-espresso-800` |
| Gold | `#B08D5C` | Singular accent, CTAs, hover, ratings | `text-gold`, `bg-gold` |
| Gold 100 | `#E8DAC0` | Pill toggles, soft accent fills | `bg-gold-100` |
| Gold 200 | `#D6BC95` | Hover on ivory surfaces | `bg-gold-200` |
| Gold 300 | `#C8A26E` | Accent borders, dividers | `border-gold-300` |
| Gold 500 | `#9A7747` | Active state on gold buttons | `bg-gold-500` |
| Gold 600 | `#7E5F38` | Pressed state | `bg-gold-600` |
| Taupe | `#8C7E72` | Body text on dark surfaces | `text-taupe` |
| Taupe 200 | `#D9D2CA` | Hairline on espresso | `border-taupe-200` |
| Line | `rgba(31, 22, 18, 0.10)` | Section dividers, borders | `border-line` |
| Line-soft | `rgba(31, 22, 18, 0.06)` | Card inner dividers | `border-line-soft` |

### 2.2 Usage rules

- **Ivory is the canvas.** Every page background uses `bg-ivory`. Never use pure white. Never use a "scaffolding" gray.
- **Espresso is the ink.** All body, heading, UI, and icon text on ivory uses `text-espresso` or one of the espresso tints. Never use black.
- **Gold is a singular accent.** One element per section gets gold. Multiple gold elements cancel each other and read as cheap.
- **Never pair gold text on ivory without espresso-500 subtext nearby.** Gold-on-ivory alone falls below 3:1 contrast and fails accessibility.
- **Never use taupe on ivory as a primary CTA label.** Use it for helper text, micro-copy, captions.

### 2.3 Contrast & accessibility

| Pair | Ratio | Use |
|---|---|---|
| Espresso on ivory | 13.7:1 | AAA. Body, headings. |
| Espresso 500 on ivory | 8.1:1 | AAA. Secondary text. |
| Taupe on ivory | 4.6:1 | AA. Helper text, micro-copy. |
| Gold on espresso | 5.4:1 | AA. CTA on dark. |
| Ivory on espresso | 13.7:1 | AAA. Inverted text. |
| Gold on ivory | 2.7:1 | ❌ Do not use for text. Use for icons, dividers, or graphic accents only. |

Whenever adding a new color or background, run the contrast check against the text on top of it. If it's below 4.5:1 for body or 3:1 for large text/icons, fix the foreground — do not relax the rule.

---

## 3. Typography

### 3.1 Font families

Loaded once from Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Role | Family | Tailwind |
|---|---|---|
| Headings, product names, hero, serif moments | Cormorant Garamond | `font-serif` |
| Body, UI, buttons, captions, navigation | Inter | `font-sans` |

`font-sans` is the global default. Apply `font-serif` to `<h1>`/`<h2>`/`<h3>` and product names explicitly.

### 3.2 Type scale

| Token | Class | Usage |
|---|---|---|
| Display XL | `font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-light` | Hero headlines |
| Display L | `font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight font-light` | Page heroes, split sections |
| Display M | `font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight font-light` | Section titles |
| Heading L | `font-serif text-2xl sm:text-3xl leading-[1.18] font-normal` | Product names in cards & PDP |
| Heading M | `font-serif text-xl sm:text-2xl leading-[1.25] font-normal` | Subsections |
| Heading S | `font-serif text-lg sm:text-xl leading-[1.3] font-medium` | Sidebar, modals |
| Eyebrow | `text-[10px] sm:text-xs uppercase tracking-wider-3 font-medium font-sans text-espresso-500` | Section kickers, labels |
| Product label | `text-xs sm:text-sm uppercase tracking-wider-2 font-medium font-sans text-espresso` | Product names in grid |
| Body L | `text-base sm:text-lg leading-[1.65] text-espresso-500 font-sans font-light` | Long-form copy, about, journal |
| Body | `text-sm sm:text-base leading-[1.6] text-espresso font-sans font-normal` | Default body |
| Caption | `text-xs sm:text-sm leading-[1.55] text-espresso-500 font-sans` | Captions, helper text |
| Button | `text-xs sm:text-sm uppercase tracking-wider-2 font-medium font-sans` | All buttons |

### 3.3 Typography rules

- **Product names are always UPPERCASE** with `tracking-wider-2` (`0.18em` letter-spacing). This is non-negotiable.
- **All buttons are UPPERCASE** with `tracking-wider-2` and `font-medium`.
- **Eyebrows and labels are UPPERCASE** with `tracking-wider-3` (`0.25em`) and `text-espresso-500`.
- **Headings use `font-light` or `font-normal`**, never bold. Serif weight comes from the typeface, not the weight axis.
- **Body long-form uses `font-light`** for editorial calm. UI body uses `font-normal`.
- **Never combine Cormorant with another serif.** No Playfair fallback. If Cormorant fails to load, fall back to Georgia, which has the right weight and slab serifs.

---

## 4. Spacing, layout, and grid

### 4.1 Container

- Site max width: `max-w-screen-2xl` (`1440px`).
- Page padding: `px-4 sm:px-6 lg:px-10`.
- Section vertical rhythm: `py-16 sm:py-20 lg:py-28` for major sections, `py-10 sm:py-14` for inner sections.

### 4.2 Editorial whitespace

- Generous breathing room between sections is part of the brand. When in doubt, **add more space, not less**.
- Hero sections are full-bleed, no horizontal padding. Inner containers then have `px-4 sm:px-6 lg:px-10`.
- Headlines always have a comfortable line-height (≥1.05) and are never cramped.

### 4.3 Grids

| Surface | Grid |
|---|---|
| Bestsellers | `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10` |
| Product grid (shop) | `grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12` |
| Category tiles | `grid grid-cols-1 sm:grid-cols-3 gap-4` |
| Reels strip | horizontal scroll, `w-[60vw] sm:w-[28vw] xl:w-[18vw] gap-3` |
| Footer columns | `grid grid-cols-2 lg:grid-cols-4 gap-10` |

### 4.4 Hairline dividers

- Use `border-line` for primary dividers (10% espresso over ivory).
- Use `border-line-soft` for card inner dividers (6%).
- Use `border-taupe-200` only on espresso backgrounds.
- Use `border-gold-300` for accent lines and active states on forms.

---

## 5. Components

### 5.1 Buttons

Three variants, never four.

```jsx
// Primary: gold, the singular accent CTA
<button className="bg-espresso text-ivory hover:bg-espresso-700 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider-2 font-medium transition-all duration-300 ease-elegant">
  Shop the Collection
</button>

// On dark hero, use ivory outlined
<button className="border border-ivory/80 text-ivory hover:bg-ivory hover:text-espresso px-8 py-4 text-xs sm:text-sm uppercase tracking-wider-2 font-medium transition-all duration-300 ease-elegant">
  Discover
</button>

// Subtle inline (links styled as buttons)
<button className="text-espresso underline-offset-8 hover:text-gold-500 hover:underline text-xs sm:text-sm uppercase tracking-wider-2 font-medium transition-colors duration-300">
  Our Story
</button>
```

Rules:
- All buttons use `transition-all duration-300 ease-elegant`.
- No rounded-full buttons. Maximum `rounded-none`. Some inputs and pills can be `rounded-full` (e.g. variant selector).
- Disabled state: `disabled:opacity-40 disabled:cursor-not-allowed`.
- Loading state: replace label with a small spinner and keep the button width fixed via `min-w-[180px]`.

### 5.2 Pill / variant selector

- `rounded-full` is reserved for chips, tags, and variant selectors.
- `px-6 py-2 text-xs uppercase tracking-wider-2 font-medium`.
- Inactive: `border border-line text-espresso`.
- Active: `bg-espresso text-ivory border border-espresso`.

### 5.3 Form inputs

- `border-b border-line bg-transparent focus:border-espresso focus:outline-none py-3`.
- Label above the input: `text-[10px] uppercase tracking-wider-2 font-medium text-espresso-500`.
- Newsletter input on accent block: `bg-ivory/10 border-b border-ivory/40 text-ivory placeholder:text-ivory/60 focus:border-ivory`.

### 5.4 Card hover

- Image card: scale the secondary image in, slight Y-lift on the card.
- `group` + `group-hover:opacity-100` + `group-hover:scale-[1.04]` on the second image, with `duration-700 ease-elegant`.
- Product card: `group` + `group-hover:-translate-y-1` on the wrapper, `duration-500 ease-elegant`.
- Quick-add button slides up from the bottom of the image on hover, `translate-y-2 group-hover:translate-y-0`.

### 5.5 Rating stars

- Filled stars: `fill-gold-300 text-gold-300`. Empty stars: `fill-none text-taupe-300`.
- Star size: 12–14px in cards, 14–16px on PDP.

### 5.6 Cart drawer

- Slides in from the right: `animate-slide-in-right`.
- Width: `w-full sm:max-w-md`.
- Backdrop: `bg-espresso/40` with `backdrop-blur-sm`.
- Item image: 80×96 (mobile) / 96×112 (sm+).
- Subtotal in `font-serif` large. Buttons in `text-xs uppercase tracking-wider-2`.

### 5.7 Navigation

- Sticky, transparent over hero, solid ivory on scroll.
- Logo `font-serif text-xl tracking-wider-2 font-light`.
- Center links `text-xs uppercase tracking-wider-2 font-medium`.
- Right icons (search, account, cart) with a small `text-[11px] absolute -top-1 -right-2 bg-espresso text-ivory rounded-full` cart count badge.

### 5.8 StockImage

- Component, not a CSS class.
- `data-strk-img-id` must be globally unique and stable across renders.
- A `fallbackSrc` prop is allowed for components that mount outside the visible viewport (e.g. cart drawer) where the runtime `MutationObserver` may not have time to swap the src. Always prefer a URL derived from a known entry in `strk-img-config.json` (use `lookupProductImageUrl` from `src/lib/strkLookup.js`).

---

## 6. Imagery

### 6.1 The brief

Elegant placeholder imagery of warm gold jewelry on neutral / dark backgrounds. Editorial, well-lit, soft window light. Subject is the jewelry, not the model — the model is a context, the jewelry is the hero.

### 6.2 Strk-img runtime

All content images use the `data-strk-img-*` attribute convention described in `IMAGE_GUIDELINES`. The runtime (`@strikingly/sdk`'s `ImageHelper.loadImages`) replaces the `src` with the resolved CDN URL after observing the DOM.

- `data-strk-img-id`: unique, hyphenated, kebab-case.
- `data-strk-img`: search string composed of bracketed DOM IDs: `[item-title] [item-description] [section-title] [page-title]`.
- `data-strk-img-ratio`: `3x2 | 16x9 | 4x3 | 1x1 | 3x4 | 9x16 | 2x3`.
- `data-strk-img-width`: 240, 400, 600, 800, 1200, 1600.

A permanent `MutationObserver` on `document.body` (set up by `AppShellContent.jsx`) catches every new tag — routes, modal, drawer, lazy sections — and resolves them as they enter the DOM.

### 6.3 Background images

Use `data-strk-bg-*` on a single, dedicated `<div>`. Hero and category tiles are the primary consumers. Background images are 16x9 or 3x2, width 1600.

### 6.4 Static fallback for off-screen

Some images mount before the observer can resolve them and are inside portalled / off-screen components (e.g. cart drawer thumbnail). For those, use `lookupProductImageUrl(product, 0)` to read a known entry's URL from the build-time `strk-img-config.json` and pass it as `fallbackSrc`. The runtime will still replace it with a potentially better image when the observer matches.

---

## 7. Motion

### 7.1 Timing

| Curve | Tailwind | Used for |
|---|---|---|
| Elegant ease | `ease-elegant` (`cubic-bezier(0.22, 1, 0.36, 1)`) | All UI transitions, hovers, drawers, modals |
| Linear | `ease-linear` | Shimmer only |
| Ease in/out | `ease-in-out` | Image fade-in (used by strk-img runtime) |

| Duration | When |
|---|---|
| `duration-200` | Small toggles, focus rings |
| `duration-300` | Default for hovers, color changes |
| `duration-500` | Card lifts, image swaps |
| `duration-700` | Hero reveals, image scale on hover |
| `duration-1000` | Drawer slide-in, modal fade |

### 7.2 Patterns

- **Entrance**: `animate-fade-in-up` on hero content (800ms). Sections below the fold use `animate-fade-in` triggered on `IntersectionObserver` if used.
- **Hover**: Card lifts, image swaps, underline extends, color shifts to gold. Never animate two properties that fight each other.
- **Cart drawer**: `animate-slide-in-right` 400ms.
- **Image fade-in**: handled by the strk-img runtime (sets `opacity: 0` then `1` over 0.6s). Do not override.
- **Never use `transition-all` on long pages** — be specific. `transition-colors`, `transition-transform`, `transition-opacity`.

### 7.3 Reduced motion

Respect `prefers-reduced-motion: reduce`. Add a global rule:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 8. Iconography

- `lucide-react` only.
- Default stroke width: 1.5 (set via class `stroke-[1.5]` if the default 2 looks too heavy for editorial UI; otherwise leave default).
- Default size in nav / buttons: 18–20px. In cards: 16px. In product detail lists: 20px.
- Always pair icons with text labels in nav. Icon-only buttons (search, account, cart) need an `aria-label`.

---

## 9. Voice and copy

| Use | Avoid |
|---|---|
| "Crafted to be treasured" | "Best jewelry ever!" |
| "A quiet heirloom in the making" | "Heirloom-quality" (overclaim) |
| "Demi-fine gold" | "Real gold" |
| "Complimentary shipping" | "FREE shipping" |
| "Considered, small-batch" | "Handmade with love" |
| "An everyday indulgence" | "Must-have" |

Sentence case for body, ALL CAPS for labels only.

---

## 10. Accessibility checklist

- All interactive elements have visible focus rings: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500`.
- All images have descriptive `alt` text drawn from the `data-strk-img` query.
- Color contrast: see §2.3.
- Buttons / links distinguishable by more than color: hover state always pairs a position or shadow change with a color change.
- Forms: every input has a visible `<label>`. Errors are announced via `aria-live="polite"`.
- Cart drawer: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to the heading. Focus trap on open, restore focus on close.
- Skip-to-content link at the top of the page, visible on focus.

---

## 11. Do / Don't

**Do**
- Use `font-serif` for any product name, hero headline, or section title.
- Keep the gold accent singular. One gold CTA per section.
- Use generous whitespace, especially around hero content.
- Use thin `border-line` dividers, not solid gray bars.
- Pair every hover state with a transition: `transition-colors duration-300 ease-elegant`.

**Don't**
- Don't use pure white or pure black.
- Don't use bold weights on Cormorant — let the typeface do the work.
- Don't use bright red, blue, or green — there is no place for them in this brand.
- Don't use `rounded-2xl` or `rounded-3xl` on anything larger than a chip. The brand is angular and editorial.
- Don't use shadows for elevation on a flat surface. Shadows are reserved for drawers, modals, and the floating cart count.
- Don't add an icon if a label will do. Don't add a label if an icon will do.
- Don't add emojis to copy, ever.

---

## 12. File map (where things live)

- `src/index.css` — design tokens (CSS variables), global rules, reduced-motion.
- `tailwind.config.js` — palette, fonts, spacing, motion keyframes.
- `src/components/Nav.jsx` — sticky transparent-to-solid nav.
- `src/components/Footer.jsx` — site footer.
- `src/components/CartDrawer.jsx` — slide-in cart with `lookupProductImageUrl` fallback.
- `src/components/StockImage.jsx` — `data-strk-img-*` wrapper with optional `fallbackSrc`.
- `src/lib/strkLookup.js` — synchronous URL lookup from the build-time `strk-img-config.json`.
- `src/components/AppShellContent.jsx` — sets up the body-wide `ImageHelper` observer and re-scans on every route change.
- `src/context/CartContext.jsx` — localStorage-backed cart, exposes `addItem`, `setQuantity`, `removeItem`, totals.
- `src/pages/Home.jsx` — homepage with hero, bestsellers, UGC reel, category tiles, story, testimonials, newsletter.
- `src/pages/Shop.jsx` — collection page with filter sidebar and sort.
- `src/pages/Product.jsx` — product detail with gallery, variants, accordions, related products.
- `src/pages/About.jsx` — brand story.
- `src/pages/Journal.jsx` — editorial journal.

When in doubt, look at the homepage. The homepage is the brand; every other page is a quieter version of it.
