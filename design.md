# ARTITECT MACHINERY — Design System

Brand: ARTITECT MACHINERY — industrial sheet-metal folding machinery.
Style: elegant but user-friendly. Precision engineering meets refined presentation.

## Typography
- Headings: "Inter", weights 600–800, tight tracking, large sizes.
- Body: "Inter", weights 400–500.
- Use Google Fonts Inter (already loaded in index.html).
- Uppercase eyebrow labels: text-xs, tracking-[0.2em], font-semibold.

## Color Palette (Tailwind v4 @theme tokens)
- Background base: a refined near-white `#f5f6f8` (surface) and deep charcoal `#0f1115` (dark sections).
- Primary (brand steel): `#1f3a5f` deep navy-steel. Hover: `#16294a`.
- Accent (machined copper/amber): `#c0843b`. Used sparingly for CTAs, highlights, dividers.
- Neutral surfaces: white cards `#ffffff`, borders `#e4e7ec`, muted text `#5b6472`.
- Foreground on dark: `#e8ebf0`; muted on dark: `#9aa3b2`.

Map to Tailwind classes:
- Primary button: `bg-[#1f3a5f] text-white hover:bg-[#16294a]`
- Accent button: `bg-[#c0843b] text-white hover:bg-[#a86f2f]`
- Card: `bg-white border border-[#e4e7ec]`
- Dark section: `bg-[#0f1115] text-[#e8ebf0]`

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 lg:px-8`.
- Card padding: `p-6 md:p-8`.
- Consistent rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons/inputs.

## Visual Style
- Clean, generous whitespace. Thin 1px borders. Subtle shadows: `shadow-sm`.
- Thin accent rule (2px copper) under section eyebrows.
- Numbered process steps with copper numerals.
- Product cards: image top, title, short spec, "View details" link.
- Elegant, not flashy. Industrial confidence through restraint.

## Do's
- Use the steel navy + copper accent consistently.
- Keep contrast high: dark text on light, light text on dark.
- Use uppercase eyebrows for section labels.
- Responsive: single column on mobile, multi-column on md+.

## Don'ts
- No neon colors. No gradients beyond subtle dark-section overlays.
- No low-contrast text. No hardcoded arbitrary hex outside the palette above.
- No crowded mobile layouts.
