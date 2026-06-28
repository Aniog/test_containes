# Strikingly Generators Hub Design System

## Visual direction
A polished Strikingly marketing page with a clean white canvas, subtle gray dividers, compact card layouts, and selective AI-gradient accents. The page should feel editorial and organized rather than flashy or overly promotional.

## Typography
- Headings: Josefin Sans 700 uppercase as fallback for Brandon Grotesque.
- Body: Open Sans 400, 14px base, 1.5 line-height.
- Buttons and badges: same heading font, uppercase.
- Example utility intent: `font-['Josefin_Sans'] font-bold uppercase tracking-[0.08em]` for headings, `font-['Open_Sans'] text-sm leading-6` for body.

## Color tokens
- Brand purple: `#8159BB`
- AI blue: `#7671FF`
- AI pink: `#CB0C9F`
- Section heading: `#4B5056`
- Hero heading dark: `#2E2E2F`
- Body text: `#636972`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light neutral background: `#F4F6F8`
- White surface: `#FFFFFF`
- Gradient usage only on primary CTAs and the second line of the hero H1.

## Surfaces and cards
- Page background is white.
- Cards use white surfaces, 1px neutral border, 3px radius, and 20px padding.
- Hover state uses a subtle shadow and purple border only. No scaling, tilting, or dramatic motion.

## Buttons
- Standard height 36px, large CTA height 44px.
- Radius 4px.
- Filled buttons always use white text.
- Ghost buttons use transparent background, 1px purple border, and purple text.

## Spacing
- Max content width: 1200px centered.
- Section spacing: 40px vertical rhythm.
- Component gaps: 20px.
- Button gaps: 10px.
- Hero vertical spacing: 70px.

## Illustrations
- Use inline SVG or CSS-only decorative graphics.
- Keep them light, geometric, and purple-forward.
- Avoid photographic or noisy visual elements.

## Do
- Keep content clearly readable against every background.
- Maintain strong semantic structure and obvious link affordances.
- Keep directory cards scannable with short names and short descriptions.

## Don't
- Do not use dark fills with dark text.
- Do not tint entire sections with heavy purple or pink backgrounds.
- Do not use fake ratings, fake testimonials, or fake engagement numbers.
- Do not rely on JavaScript to render essential content.
