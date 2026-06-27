# Design tokens (Strikingly AI Generators hub)

This is the single source of truth for visual style on the `/generators` page.

## Fonts
- **Headings & buttons**: Brandon Grotesque (paid) -> fallback **Josefin Sans** (Google Fonts, weight 700), then Poppins (Google Fonts, weight 700). All uppercase, line-height 1.2.
- **Body**: **Open Sans** (Google Fonts, weight 400), 14px, line-height 1.5.
- Do not use Inter or system-default sans for headings.

## Colors
- Brand purple `#8159BB` (accents, ghost borders/text)
- AI gradient `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)` for primary CTAs and the second line of the hero H1
- Body text `#636972`
- Heading strong `#2E2E2F`, heading `#4B5056`
- Card border `#C6C9CD`
- Divider `#E2E4E7`
- Light background `#F4F6F8`
- Page background `#FFFFFF`
- Never use `#000000` for text.

## Buttons
- 36px height standard, 44px big.
- 4px radius, 14px font, 9x15 padding, uppercase.
- Primary: AI-gradient fill, **white text**.
- Ghost: transparent background, 1px brand-purple border, brand-purple text.

## Cards
- White background, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: 1px brand-purple border + subtle box-shadow. No transforms.

## Tags
- 11px heading font, uppercase, 2x6 padding, 3px radius.
- Ghost style: brand-purple text + border, no fill.

## Spacing
- All margins/paddings in 10px multiples; 5px allowed for tight pairs.
- 20px between blocks, 40px between sections, 60-80px hero top/bottom.
- Max content width 1200px, centered.

## Do
- Use Tailwind utility classes where possible, plus CSS custom properties from `theme.css`.
- Apply the AI gradient only to primary CTAs and the hero H1 second line.
- Keep the page neutral/white between sections.

## Don't
- Don't splash the AI gradient on backgrounds or section headers.
- Don't use dark text on the gradient (always white).
- Don't add fake social proof (no star ratings, no invented customer counts).
- Don't ship any input fields for site name or description; the builder lives at `/s/ai_site_builder`.
