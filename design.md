# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: editorial, warm, refined, and modern. The experience should feel premium-but-accessible, with generous whitespace, soft transitions, and elegant restraint.

## Typography
- Headings and product names: `Cormorant Garamond` with graceful, high-contrast serif styling.
- Body, navigation, buttons, labels, and UI: `Inter`.
- Product names should be uppercase with wide letter spacing.

## Color palette
Use one cohesive dark editorial direction that flatters gold jewelry.
- `obsidian` — deep charcoal base for hero, footer, and rich surfaces. Example: `bg-obsidian`, `text-ivory`.
- `ink` — dark brown-charcoal for primary text on light backgrounds. Example: `text-ink`.
- `porcelain` — warm off-white page background. Example: `bg-porcelain`.
- `champagne` — soft metallic accent for borders, buttons, badges, and highlights. Example: `text-champagne`, `border-champagne`.
- `sand` — warm muted neutral for cards and secondary surfaces. Example: `bg-sand`.
- `mist` — subtle border and divider color. Example: `border-mist`.
- `sage` — restrained muted accent for select chips or supporting UI if needed sparingly. Example: `bg-sage/10`, `text-sage`.

## Surface rules
- Light sections should use `bg-porcelain` or `bg-sand` with explicit `text-ink`.
- Dark sections should use `bg-obsidian` with explicit `text-ivory`.
- Hairline dividers should use `border-mist/70`.
- Buttons should never look promotional or discount-driven.

## Buttons
- Primary CTA: dark base with champagne or ivory foreground, slightly rounded, generous horizontal padding, subtle hover lift.
  - Example: `bg-ink text-ivory hover:bg-obsidian`
- Secondary CTA: transparent or porcelain surface with thin border and dark text.
  - Example: `border border-mist text-ink hover:border-champagne`

## Cards and product tiles
- Use thin borders, soft shadows, and subtle hover elevation.
- Product imagery should feel editorial, not catalog-only.
- Product names: uppercase with tracking around `0.3em` where reasonable.

## Spacing
- Prefer roomy vertical spacing: section padding around `py-16 md:py-24`.
- Keep content widths elegant with `max-w-7xl` or narrower for text sections.
- Use balanced gaps, especially on desktop. Avoid cramped card grids.

## Imagery
- Use warm, softly lit jewelry imagery on dark or neutral backgrounds.
- Prefer close-up editorial portraits, ear/neck details, and premium still life shots.
- Do not overload every area with imagery; preserve whitespace.

## Do
- Keep contrast strong and text explicitly readable on every surface.
- Use subtle transitions and understated shadows.
- Let serif typography carry the luxury feel.
- Keep the layout clean, calm, and expensive-looking.

## Don't
- Do not use bright discount colors, loud gradients, or salesy badges.
- Do not use heavy borders, crowded layouts, or low-contrast text.
- Do not mix multiple competing accent colors.
