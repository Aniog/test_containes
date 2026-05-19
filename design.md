# GameVault Design System

## Visual Identity
Dark, immersive gaming aesthetic. Deep navy/purple backgrounds with vibrant purple accents. High contrast text for readability. Neon-inspired glow effects on interactive elements.

## Color Palette

### Backgrounds
- Page background: `bg-surface` (#0F0F1A) — deep dark navy
- Card background: `bg-surface-card` (#1A1A2E)
- Elevated surface: `bg-surface-elevated` (#252540)
- Border: `border-surface-border` (#2E2E50)

### Brand
- Primary: `bg-brand` / `text-brand` (#7C3AED) — vivid purple
- Dark variant: `bg-brand-dark` (#5B21B6)
- Light variant: `text-brand-light` (#A78BFA)

### Text
- Primary text: `text-text-primary` (#F0F0FF) — near white with slight blue tint
- Secondary text: `text-text-secondary` (#A0A0C0)
- Muted text: `text-text-muted` (#606080)

### Platform Colors
- Steam: `bg-accent-steam` (#1B2838)
- Epic: `bg-accent-epic` (#2D2D2D)
- Nintendo: `bg-accent-nintendo` (#E4000F)
- PlayStation: `bg-accent-playstation` (#003087)
- Xbox: `bg-accent-xbox` (#107C10)

### Status
- Deal/discount: `text-deal` / `bg-deal` (#22C55E) — green
- Hot/featured: `text-hot` / `bg-hot` (#F97316) — orange

## Typography
- Font: Inter (Google Fonts)
- Page titles: `text-3xl md:text-5xl font-bold text-text-primary`
- Section headings: `text-2xl font-bold text-text-primary`
- Card titles: `text-lg font-semibold text-text-primary`
- Body: `text-sm text-text-secondary`
- Muted/meta: `text-xs text-text-muted`

## Spacing
- Page padding: `px-4 md:px-8 lg:px-16`
- Section gap: `py-12 md:py-16`
- Card padding: `p-4 md:p-6`
- Grid gap: `gap-4 md:gap-6`

## Components

### Cards
```
bg-surface-card border border-surface-border rounded-xl overflow-hidden shadow-card
hover:border-brand/50 hover:shadow-glow transition-all duration-300
```

### Buttons
- Primary: `bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Secondary: `bg-surface-elevated hover:bg-surface-border text-text-primary border border-surface-border px-6 py-2.5 rounded-lg transition-colors`
- Ghost: `text-text-secondary hover:text-text-primary transition-colors`

### Badges
- Platform badge: `text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide`
- Deal badge: `bg-deal/20 text-deal text-xs font-bold px-2 py-0.5 rounded`
- Hot badge: `bg-hot/20 text-hot text-xs font-bold px-2 py-0.5 rounded`

### Gradients
- Hero: `bg-hero-gradient`
- Card overlay: `bg-card-gradient`
- Brand CTA: `bg-brand-gradient`

## Do's
- Always use dark backgrounds with light text
- Use purple brand color for CTAs and highlights
- Add hover glow effects on interactive cards
- Use platform-specific colors for platform badges
- Show discount percentages in green (deal color)
- Use orange for "hot" or "featured" items

## Don'ts
- Never use white/light backgrounds
- Don't use low-contrast text combinations
- Don't mix too many accent colors in one section
- Avoid pure black (#000) — use surface colors instead
