# Strikingly Generators Hub Design System

## Visual direction
A clean Strikingly-style marketing page with a white canvas, crisp light-gray dividers, restrained purple accents, and a limited AI gradient used only for primary actions and the hero highlight line. The page should feel useful and product-led, not flashy or SEO-driven.

## Typography
- Headings: Josefin Sans 700 uppercase as the fallback for Brandon Grotesque.
- Body: Open Sans 400, 14px base, relaxed readability.
- Buttons: same heading font, uppercase.
- Example Tailwind direction: `font-['Josefin_Sans'] font-bold uppercase tracking-[0.08em]`, `font-['Open_Sans'] text-sm leading-6`.

## Colors
- Brand purple: `#8159BB`
- AI gradient endpoints: `#7671FF` to `#CB0C9F`
- Hero line 1 / strong dark text: `#2E2E2F`
- Section heading gray: `#4B5056`
- Body gray: `#636972`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light neutral background: `#F4F6F8`
- White surfaces: `#FFFFFF`
- Example Tailwind direction: `text-[#4B5056]`, `border-[#C6C9CD]`, `bg-[#F4F6F8]`, `from-[#7671FF] to-[#CB0C9F]`.

## Layout and spacing
- Max content width: 1200px centered.
- Use 20px block spacing inside cards and between related elements.
- Use 40px between page sections.
- Hero padding: 60px to 80px vertically.
- Keep mobile layouts airy and desktop layouts multi-column.
- Example Tailwind direction: `max-w-[1200px] mx-auto px-5 md:px-8`, `gap-5`, `py-16 md:py-20`.

## Cards
- White background.
- 1px neutral border.
- 3px radius.
- 20px padding.
- Hover only lifts subtly and changes border to brand purple.
- No playful rotations or scale transforms.
- Example Tailwind direction: `rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-shadow duration-200 hover:border-[#8159BB] hover:shadow-[0_10px_30px_rgba(46,46,47,0.08)]`.

## Buttons
- Standard height 36px, large height 44px.
- Filled buttons use the AI gradient with white text only.
- Ghost buttons have transparent background, 1px purple border, purple text.
- Example Tailwind direction: `h-11 rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] px-5 text-white`, `border border-[#8159BB] text-[#8159BB] bg-transparent`.

## Tags
- Small uppercase outlined labels.
- Purple text, transparent background, 1px purple border.
- Example Tailwind direction: `inline-flex rounded-[3px] border border-[#8159BB] px-1.5 py-0.5 text-[11px] uppercase text-[#8159BB]`.

## Do
- Keep important text explicitly dark on light surfaces.
- Use semantic sections and clear content hierarchy.
- Let the gradient appear only in the hero accent line and primary CTAs.
- Preserve strong contrast for all buttons, inputs, and cards.

## Don't
- Do not use black backgrounds or neon accents.
- Do not put the AI gradient behind paragraphs or entire sections.
- Do not rely on color alone for hierarchy.
- Do not hide directory content behind JavaScript-only rendering.
