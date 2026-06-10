# ARTITECT MACHINERY — Design System

## Visual Style
- **Overall aesthetic**: Elegant industrial. Clean, confident, and highly professional.
- **Color palette**:
  - Primary: Deep slate (#0F172A) — used for headers, CTAs, and strong accents.
  - Secondary: Soft slate (#F8FAFC, #F1F5F9) — backgrounds and cards.
  - Accent: Subtle amber (#F59E0B) for trust badges only.
  - Text: Slate-900 (#0F172A) for body, Slate-600 for secondary.
  - White (#FFFFFF) for cards and overlays.
- **Typography**: Inter (system-ui fallback). Tight tracking on headlines (-0.02em to -0.04em). Generous line-height on body (1.65).
- **Spacing**: Generous. 20–28px vertical rhythm on sections. 24–32px card padding. Large negative space around headlines.

## Components
- **Navbar**: Fixed, translucent white with subtle border. Logo left, nav center, phone + CTA right. Mobile: hamburger.
- **Hero**: Full viewport, dark overlay on industrial background. Massive headline (6xl–8xl), soft subhead, dual CTAs. Trust bar at bottom.
- **Section Headers**: Small uppercase tracking-[3px] label + massive tracking-tighter headline.
- **Cards**: Rounded-3xl, subtle border, hover lift + shadow. Product cards have image top, content below.
- **Buttons**: Rounded-xl, strong weight. Primary = dark slate bg + white text. Secondary = outline.
- **Forms**: Clean white inputs on light gray cards. Rounded-xl. Clear labels.

## Imagery
- Hero uses a dramatic industrial factory background (stock via data-strk-bg).
- Product cards use contextual industrial machinery photos (stock via data-strk-img).
- All images are high-quality, desaturated slightly to match the elegant tone.

## Responsive
- Mobile-first. Breakpoints at md (768) and lg (1024).
- On mobile: stacked nav, single-column products, larger touch targets.
- Desktop: generous horizontal padding, multi-column grids.

## Interactions
- Smooth scroll to sections.
- Subtle hover states (scale 0.985 on buttons, image zoom on product cards).
- Form success state with checkmark.
- Quote button can pre-select a product.

## Do's
- Keep text highly legible.
- Use plenty of whitespace.
- Maintain consistent 8px grid.
- Always show capacity badge on product images.
- Use the same button styles everywhere.

## Don'ts
- No bright colors or gradients.
- No cluttered layouts.
- No tiny touch targets.
- Never use low-contrast text.
