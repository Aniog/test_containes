# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm, editorial, premium and approachable. The storefront should feel like a boutique jewelry magazine rather than a mass-market marketplace.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, refined weight.
- Body and UI: Inter, clean sans-serif for clarity and modern contrast.
- Product names: uppercase with wide letter spacing.

## Color direction
Commit to one cohesive direction: a deep espresso-plum base with warm ivory surfaces and restrained antique-gold accents.

### Named color tokens
- `velvet`: #241b1f — primary dark base for hero, footer, and premium surfaces.
- `velvet-soft`: #34282d — secondary dark panels and overlays.
- `ivory`: #f6f0e7 — warm light background.
- `pearl`: #fdfaf5 — elevated light surface.
- `champagne`: #c8a979 — primary accent and button color.
- `champagne-deep`: #aa8857 — hover state for accent actions.
- `truffle`: #69575f — muted supporting text on light surfaces.
- `ink`: #1b1718 — high-contrast body text on light surfaces.
- `line`: rgba(36, 27, 31, 0.12) — hairline dividers on light backgrounds.
- `line-inverse`: rgba(246, 240, 231, 0.18) — hairline dividers on dark backgrounds.

## Surface rules
- Light content sections use `ivory` or `pearl` backgrounds with explicit `ink` or `truffle` text.
- Dark editorial sections use `velvet` backgrounds with explicit `ivory` text.
- Accent color is used sparingly for CTAs, ratings, pills, and subtle highlights.

## Spacing and layout
- Generous vertical rhythm with section spacing around `py-16 md:py-24`.
- Max width containers around `max-w-7xl` with padded gutters `px-5 md:px-8`.
- Cards use breathable internal spacing, typically `p-5 md:p-6`.

## Borders and shadows
- Prefer thin borders using `line` or `line-inverse`.
- Shadows should be soft and diffused, never harsh or heavy.
- Rounded corners should be restrained: typically `rounded-2xl` or `rounded-3xl`.

## Motion
- Subtle hover transitions only. Use opacity, translate-y, and color changes.
- Avoid flashy scale or bounce effects.

## Do
- Use large editorial image blocks.
- Keep navigation and product presentation calm and spacious.
- Maintain strong contrast and explicit readable text colors.
- Make mobile layouts feel luxurious, not crowded.

## Don’t
- Do not use loud sale styling, bright reds, or discount-badge visuals.
- Do not mix multiple accent colors.
- Do not rely on inherited text color on custom surfaces.
- Do not use cramped grids or dense UI chrome.
