# Velmora Fine Jewelry — Visual System

## Brand Mood
Quiet luxury. Warm. Editorial. Premium demi-fine — never loud, never discount, never generic e-commerce. Think small-batch atelier, not mall chain. Generous whitespace, thin hairlines, soft shadows, restrained motion.

## Color Palette
A warm-neutral, editorial scheme. One confident direction, applied sitewide.

- **Ivory** `#F6F1E8` — page background, the canvas. Warm, slightly creamy, never pure white.
- **Espresso** `#1F1A14` — primary text, footer background. Near-black with a warm brown undertone (NOT cool black).
- **Champagne** `#B8956A` — primary accent (gold). Muted, brushed-gold feel — never shiny `#FFD700`. Used for: CTA buttons (solid bg, ivory text), accent text, hover underlines, dividers on dark surfaces.
- **Sand** `#E8DFD0` — secondary surface (cards, subtle bands), hairlines on light. 
- **Stone** `#7A6E60` — secondary/muted text, captions, helper.
- **Linen** `#FBF8F2` — subtle elevation (drawer, modals).

Do not introduce any blue/cool grey, any bright red, any neon, any high-saturation yellow. Accents should feel sunlit, not electric.

Contrast pairs (passing WCAG AA on body text):
- Espresso on Ivory: 14.5:1
- Stone on Ivory: 4.6:1
- Ivory on Espresso: 14.5:1
- Ivory on Champagne: 4.0:1 (use only for non-body text ≥18pt or large UI)

## Typography
Two families, no more.

- **Display serif:** Cormorant Garamond (Google Fonts). Weights 300 / 400 / 500 / 600. Used for: H1, H2, product names, editorial headlines. Italic for accents.
- **Body sans:** Inter (Google Fonts). Weights 300 / 400 / 500 / 600. Used for: body copy, UI, nav, buttons, prices, captions, product metadata.

Rules:
- Product names: serif, **UPPERCASE**, letter-spacing `0.18em`, weight 500.
- Section headlines (H2): serif, mixed-case, weight 400, italic accents OK.
- Body: Inter, 15–16px, line-height 1.65, color Espresso.
- Captions / labels: Inter, 11–12px, UPPERCASE, letter-spacing `0.22em`, color Stone.
- Prices: Inter, 500, 15px, color Espresso. (No strikethrough; never show a "was/now" — the brand is premium, not on sale.)

## Spacing & Layout
- Container: max-w-7xl, horizontal px-6 mobile / px-12 desktop.
- Vertical rhythm between sections: `py-20` mobile / `py-32` desktop.
- Generous gutters inside product grids: `gap-y-16 gap-x-10`.
- Hairlines: `1px` warm-grey border (`#E5DDD0`), never `2px`. Use `border-ivory/...` only for special overlays.

## Imagery
- Editorial, warm, naturally lit. Models with soft, sunlit skin. Jewelry reads as the hero, never competes with busy backgrounds.
- Preferred background tones: warm beige, deep umber, soft taupe. Never cool grey, never pure black, never pure white.
- Product photography: flat-lay or on-model. Aspect ratio 4:5 for cards, 3:4 for hero, 1:1 for thumbnails, 9:16 for UGC reel.
- Use `data-strk-img` and `data-strk-bg` tags to fetch stock imagery at runtime.

## Components & Interactions
- **Buttons:**
  - Primary: solid Champagne background, Ivory text, no border, padding `px-8 py-3.5`, hover slightly darker Champagne, 250ms ease.
  - Secondary (outlined): 1px Espresso border on Ivory, Espresso text, hover fills Espresso / text becomes Ivory.
  - Ghost: no border, underline-on-hover, Espresso text.
  - Pill (variants): 1px border, fully rounded, selected state = Espresso bg / Ivory text.
- **Cards (product):** flat. No border, no shadow by default. On hover: image swap to second image; quick "Add to Cart" panel slides up from the bottom of the image.
- **Dividers:** 1px hairline, color Sand, full-width or constrained.
- **Shadows:** only for elevated surfaces (cart drawer, mobile menu). Use `shadow-[0_24px_60px_-30px_rgba(31,26,20,0.18)]` — very soft, warm.
- **Motion:** 200–350ms, `ease-out`. Fade + small translate-y. Never bouncy, never springy. Respect `prefers-reduced-motion`.
- **Focus rings:** 2px Champagne, 2px offset. Visible on keyboard nav only.

## Iconography
Lucide React. Stroke 1.5. Default size 20px. Color inherits from text (no colored icons).

## Anti-patterns (do NOT)
- No gradients (except the very subtle 1-stop hero veil).
- No emojis in product names or copy.
- No "SALE" / "DEAL" / "% OFF" badges.
- No more than 2 button styles visible at once.
- No drop shadows on product cards.
- No "Add to wishlist" heart icons cluttering cards (we have neither time nor scope).
- No blue or grey buttons. No cold colors.
- No stock images of models in cool, fluorescent, or over-saturated lighting.
- No boxy hard-cornered cards. Cards have no visible border by default.

## Responsive
Mobile-first. Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`. Most traffic is mobile — always design the phone view first, then scale up.
