# Velmora Fine Jewelry Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Typography
- **Headings & Product Names:** Cormorant Garamond (Serif), elegant, sophisticated. Product names in UPPERCASE with wide letter-spacing.
  - Tailwind Classes: `font-serif`, `uppercase tracking-widest`
- **Body & UI:** Inter (Sans-serif), clean, highly readable.
  - Tailwind Classes: `font-sans`

## Colors
- **Background:** Warm off-white `bg-background` (`#FAF9F6` approx)
- **Text (Foreground):** Deep charcoal `text-foreground` (`#262626` approx)
- **Primary:** Dark warm gray/brown `bg-primary text-primary-foreground`
- **Muted:** Soft beige `bg-muted text-muted-foreground`
- **Accent:** Warm gold/bronze `bg-accent text-accent-foreground` (`#D4AF37` approx) - used sparingly for buttons and highlights.
- **Border:** Soft light gray/beige `border-border` (`#E5E5E5` approx)

## UI Elements
- **Whitespace:** Generous, airy layouts. Use `py-16`, `gap-8`, `gap-12`.
- **Dividers:** Thin hairline dividers `border-t border-border`.
- **Imagery:** Large editorial imagery. Use aspect ratios like `3:4` or `4:5` for products, `16:9` or `21:9` for heroes.
- **Buttons:** Solid accent or outlined. Minimal border radius (e.g., `rounded-sm` or `rounded-none`).
  - Example Primary: `bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 tracking-widest uppercase text-sm transition-colors`
  - Example Outline: `border border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 tracking-widest uppercase text-sm transition-colors`
- **Effects:** Subtle hover transitions (`transition-all duration-300`), soft shadows only where necessary, clean minimal aesthetic.

## Imagery
Warm-lit close-ups of gold jewelry on models, dark or neutral backgrounds to make the gold pop. Editorial feel.