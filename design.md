# Velmora Fine Jewelry — Visual Direction

## Mood
Quiet luxury. Warm. Editorial. Premium demi-fine jewelry — never loud, never discount-looking, never generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent.

## Color Palette (commit to this — do not invent new colors)
Use ONLY these tokens. Defined in `tailwind.config.js` as `bg-ink`, `text-ink`, etc.

- `ivory` `#F7F1E6` — page background, soft warm cream
- `paper` `#FBF7F0` — card / surface background, lighter than ivory
- `ink` `#1A130E` — primary text, deep warm black (never pure black)
- `ink-soft` `#2A2018` — secondary text on ivory
- `taupe` `#7A6B58` — muted/secondary text
- `hairline` `#E4D9C4` — borders, dividers
- `gold` `#A8814C` — primary accent (warm muted gold, not bright)
- `gold-deep` `#8A6A3A` — accent hover/pressed
- `gold-soft` `#D9C39A` — accent surfaces / chips
- `cocoa` `#3A2A1C` — dark surfaces, footer

Dark sections (footer, story, drawer header) use `bg-cocoa` with `text-ivory`.

Contrast rules:
- Text on `ivory` / `paper` → `ink` or `ink-soft` (always readable)
- Text on `cocoa` → `ivory` or `gold-soft`
- Accent button (gold) → white text (`#FFFFFF` or `paper`) for AA contrast
- Never place `taupe` text on `ivory` smaller than 14px without underline/heading context — it can feel invisible.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 300/400/500/600, italic available
- Body & UI: **Inter** (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, `tracking-[0.18em]`, font-weight 500, serif
- Section titles: serif, 36–56px, weight 400, line-height 1.1
- Body: Inter, 15–16px, line-height 1.65, color `ink-soft`
- UI labels / nav: Inter, 12–13px, UPPERCASE, `tracking-[0.18em]`, weight 500

## Layout
- Max content width: `max-w-7xl` for grids, `max-w-3xl` for prose
- Generous section vertical spacing: `py-20 md:py-28 lg:py-32`
- Hairline dividers: 1px `border-hairline`, never thicker
- Grid gap: `gap-y-12 gap-x-8` for product grids
- Rounded corners: `rounded-sm` or `rounded` — never `rounded-xl` (too modern/casual)

## Buttons
- Primary: `bg-ink text-paper hover:bg-ink-soft` OR `bg-gold text-paper hover:bg-gold-deep` — full-width on product page, auto on CTAs. Height ~48px. Letter-spacing `0.18em`. UPPERCASE.
- Secondary: `border border-ink text-ink hover:bg-ink hover:text-paper` — same height & tracking.
- Ghost: underline-on-hover only, used for "View all", "Our Story", product names.
- Quick add: small text button inside product card on hover. No full buttons cluttering the grid.

## Imagery
- Product photography: warm gold jewelry on deep neutral backgrounds (cocoa / taupe / soft cream). Editorial, slightly warm, golden-hour light feel.
- Lifestyle / hero: warm-lit close-up, model wearing jewelry, soft bokeh.
- Aspect ratios: products 1:1 or 4:5, hero 16:9 or 21:9, UGC reels 9:16, story split 1:1.
- All real photos are loaded via `data-strk-img` (Strikingly image system). Do NOT paste hardcoded URLs.

## Motion
- Transitions: 300–500ms, ease-out. `transition-colors`, `transition-opacity`, `transition-transform`.
- Hover: gentle (1.02–1.05 scale on product images), never bouncy.
- No parallax, no spin, no aggressive zoom.

## Don'ts
- No bright primary colors (red, blue, green). The accent is ONLY warm gold.
- No emojis. No "🛍️" / "✨" anywhere — use lucide icons.
- No "SALE! 50% OFF" red badges. If a product is "Bestseller", use a hairline pill in `taupe` on `paper`.
- No drop shadows on white surfaces. Use `shadow-[0_1px_2px_rgba(26,19,14,0.04)]` at most.
- No neon gradients. No Tailwind `rounded-2xl` or `rounded-3xl` on hero CTAs.
- No two typefaces beyond Cormorant Garamond + Inter.

## Components
- `Button` variants: `primary | secondary | ghost` (see above)
- `Container`: max-w-7xl with px-6 md:px-10
- `Hairline`: 1px `bg-hairline` divider
- `StarRating`: 5 lucide `Star` icons
- `PillChip`: pill-shaped tag (UPPERCASE, hairline border, small)
