# Strikingly Generators Hub Design Guide

## Visual direction
A clean Strikingly-style marketing page with a white foundation, thin gray dividers, restrained purple accents, and AI-gradient emphasis used only for primary CTAs and the second line of the hero headline.

## Typography
- Headings: Josefin Sans 700, uppercase, tight line-height. Example Tailwind intent: `font-['Josefin_Sans'] font-bold uppercase leading-[1.2]`
- Body: Open Sans 400, 14px base, 1.5 line-height. Example intent: `font-['Open_Sans'] text-[14px] leading-[1.5]`
- Buttons: same heading font, uppercase, bold.

## Colors
- Heading primary: `#2E2E2F`
- Section heading/body dark gray: `#4B5056`
- Body text: `#636972`
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)`
- Border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light surface: `#F4F6F8`
- Page background: `#FFFFFF`

## Spacing
- Base spacing uses 10px increments.
- 20px between related blocks.
- 40px between sections.
- Hero vertical spacing 60px to 80px.
- Max content width 1200px, centered.

## Components
- Buttons: 4px radius, 36px standard height, 44px large height, white text on filled buttons.
- Cards: white background, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: subtle lift via shadow and purple border only, never scale.
- Tags: uppercase, 11px, ghost style with purple border and purple text.

## Do
- Keep the page bright, organized, and editorial.
- Use semantic sections and strong visual hierarchy.
- Make every card readable with explicit text color.
- Keep gradients limited to hero highlight text and primary CTAs.

## Don't
- Do not use dark app-shell backgrounds.
- Do not add fake ratings, counts, or testimonials.
- Do not use low-contrast text.
- Do not tint whole sections unnecessarily.
- Do not use oversized shadows or playful transforms.
