# Velmora Fine Jewelry — Design System

## Visual Identity
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal (Base):** `#1C1C1C` — Main background for hero, sections, and dark areas. Rich, warm black.
- **Warm Cream (Light Base):** `#F5F0EB` — Light background for product grids, content sections. Soft, warm off-white.
- **Gold Accent:** `#C9A96E` — Primary accent. Used for CTAs, highlights, hover states, decorative elements. Warm metallic gold.
- **Gold Light:** `#D4B87A` — Lighter gold for subtle accents, borders on dark backgrounds.

### Neutral Colors
- **Text Dark:** `#1C1C1C` — Primary text on light backgrounds.
- **Text Light:** `#F5F0EB` — Primary text on dark backgrounds.
- **Text Muted Dark:** `#6B6B6B` — Secondary/muted text on light backgrounds.
- **Text Muted Light:** `#A0A0A0` — Secondary/muted text on dark backgrounds.
- **Divider:** `#E0D8CE` — Hairline dividers on light backgrounds.
- **Divider Dark:** `#3A3A3A` — Hairline dividers on dark backgrounds.

### Functional Colors
- **Success:** `#4A7C59` — Confirmation states.
- **Error:** `#C44B4B` — Error states.

## Typography

### Font Families
- **Headings & Product Names:** Cormorant Garamond (serif) — Elegant, refined. Loaded via Google Fonts.
- **Body & UI:** Inter (sans-serif) — Clean, modern, highly readable.

### Font Sizes & Styles
- **Hero Headline:** `text-5xl md:text-7xl` Cormorant Garamond, tracking-wide, uppercase optional for hero.
- **Section Headings:** `text-3xl md:text-4xl` Cormorant Garamond, tracking-wide.
- **Product Names:** `text-lg md:text-xl` Cormorant Garamond, UPPERCASE, `tracking-[0.15em]`.
- **Body Text:** `text-sm md:text-base` Inter, normal weight.
- **UI Labels/Buttons:** `text-xs md:text-sm` Inter, medium weight, uppercase, `tracking-[0.1em]`.
- **Prices:** `text-base md:text-lg` Inter, medium weight.

### Font Weights
- Cormorant Garamond: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Inter: 300, 400, 500, 600

## Spacing & Layout
- **Section Padding:** `py-16 md:py-24` for major sections, `py-8 md:py-12` for minor sections.
- **Container Max Width:** `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- **Card Padding:** `p-4 md:p-6`
- **Grid Gaps:** `gap-4 md:gap-6` for product grids, `gap-8 md:gap-12` for section spacing.
- **Generous whitespace** is key — never crowd elements.

## Components

### Buttons
- **Primary CTA:** Gold background (`bg-gold text-charcoal`), Cormorant Garamond or Inter uppercase, tracking-wide, `px-8 py-3`, hover: slightly lighter gold, subtle shadow.
- **Secondary/Outline:** Border gold (`border-gold text-gold`), same typography, hover: fill gold.
- **Pill Buttons (Variant Selector):** Small, `px-4 py-2`, rounded-full, border gold, selected state fills gold.

### Cards
- **Product Cards:** Clean, minimal. Image dominant. Name in uppercase serif. Price in sans-serif. Hover reveals second image with smooth crossfade. Soft shadow on hover.
- **Category Tiles:** Large image, label overlay on hover with gold accent.
- **UGC Cards:** Vertical 9:16 ratio, soft serif caption overlay at bottom.

### Dividers
- Hairline `h-px` dividers using divider color. Used between sections, in nav, in footer.

### Navigation
- Sticky, transparent over hero, solid cream/charcoal on scroll. Serif logo left, links center, icons right.
- Mobile: hamburger menu, slide-in drawer.

### Cart Drawer
- Slide-in from right, overlay background. Product list with image, name, price, quantity controls. Total at bottom. Gold CTA to checkout.

## Animations & Transitions
- **Hover transitions:** `transition-all duration-300 ease-in-out` — smooth, not snappy.
- **Image crossfade:** Opacity transition on hover for product cards.
- **Scroll reveal:** Subtle fade-in on scroll for sections (optional, CSS-only preferred).
- **Nav background:** Smooth transition from transparent to solid on scroll.

## Do's
- Use generous whitespace — let the jewelry breathe.
- Keep product names in UPPERCASE serif with wide letter-spacing.
- Use gold accent sparingly — it should feel precious, not overwhelming.
- Ensure strong contrast: dark text on light, light text on dark.
- Use hairline dividers to separate sections elegantly.
- Make buttons feel premium — solid gold or outlined gold, never generic blue/green.

## Don'ts
- Don't use bright/saturated colors — everything should feel muted and warm.
- Don't crowd elements — whitespace is luxury.
- Don't use generic e-commerce patterns (badges, loud sales tags, aggressive popups).
- Don't mix too many font styles — stick to serif headings + sans body.
- Don't use heavy shadows — keep them soft and subtle.
- Don't use rounded corners on cards — keep them minimal (`rounded-sm` or none).
