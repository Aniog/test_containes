# Velmora Fine Jewelry Design System

## Brand direction
Velmora uses a quiet-luxury editorial look: deep espresso backgrounds, warm ivory surfaces, brushed-gold accents, soft shadowing, and generous whitespace. The site should feel premium, feminine, calm, and modern.

## Typography
- Headings and product names: Cormorant Garamond
- Body, UI, labels, buttons: Inter
- Product names: uppercase with wide tracking

## Color system
Use semantic CSS variables and Tailwind utility classes that map to them.
- Background: `bg-[var(--color-background)]`
- Surface: `bg-[var(--color-surface)]`
- Elevated surface: `bg-[var(--color-surface-strong)]`
- Text primary: `text-[var(--color-foreground)]`
- Text muted: `text-[var(--color-muted)]`
- Gold accent: `bg-[var(--color-accent)]`, `text-[var(--color-accent)]`
- Hairline border: `border-[color:var(--color-border)]`

Suggested palette:
- `--color-background`: rich espresso
- `--color-surface`: warm ivory
- `--color-surface-strong`: deep charcoal-brown
- `--color-foreground`: soft ink
- `--color-muted`: muted taupe
- `--color-accent`: brushed antique gold
- `--color-accent-foreground`: dark espresso
- `--color-border`: translucent warm gray

## Layout and spacing
- Max width: 1400px
- Section padding: `px-5 sm:px-8 lg:px-12`
- Vertical rhythm: `py-16 md:py-24`
- Use airy gaps, thin separators, and restrained motion.

## Components
- Buttons: premium pill or sharp-corner style, subtle hover lift, no loud gradients
- Cards: soft shadow, thin border, readable foreground on every surface
- Header: transparent over hero, solid blurred surface on scroll
- Product imagery: editorial, warm, dark-neutral backdrops

## Do
- Keep contrast strong and readable.
- Use elegant serif display headlines.
- Keep interactions subtle and polished.
- Let whitespace and imagery carry the luxury feel.

## Don’t
- Don’t use bright discount colors, flashy badges, or heavy gradients.
- Don’t crowd the layout.
- Don’t rely on invisible inherited text colors.
- Don’t mix multiple visual directions.
