# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm, editorial, intimate, premium-but-accessible. The site should feel like a modern jewelry editorial with subtle commerce layers rather than a loud marketplace.

## Typography
- Headings and product names: Cormorant Garamond
- Body and UI: Inter
- Product names: uppercase with generous letter spacing
- Avoid playful or trendy fonts

## Color direction
Commit to one refined dark-editorial direction that flatters gold jewelry.

### Core palette
- Background base: deep espresso-plum (`bg-stone-950` / custom CSS variable equivalent)
- Surface: softened charcoal-plum (`bg-stone-900` / custom CSS variable equivalent)
- Elevated card: warm ivory (`bg-stone-50` / custom CSS variable equivalent)
- Soft neutral section: champagne mist (`bg-stone-100` / custom CSS variable equivalent)
- Primary text on dark: warm ivory (`text-stone-50`)
- Primary text on light: rich espresso (`text-stone-900`)
- Secondary text: muted taupe (`text-stone-400` on dark, `text-stone-500` on light)
- Accent: brushed gold (`text-amber-300`, `bg-amber-300`, `border-amber-300`)
- Divider: thin low-contrast warm line (`border-stone-800` on dark, `border-stone-200` on light)

## Styling rules
- Generous whitespace and breathing room
- Large editorial imagery with soft crop and minimal rounded corners
- Hairline borders and restrained shadows
- Buttons feel premium: either brushed-gold solid with dark text, or transparent outlined with warm border
- Hover effects should be subtle: opacity shifts, slight translate, image crossfade
- Keep sections visually calm; avoid noisy badges and bright sale colors

## Layout
- Mobile-first
- Desktop should feel spacious, not stacked like mobile
- Max content width: around Tailwind `max-w-7xl`
- Section rhythm: `py-16 md:py-24`
- Use 1 column on mobile, then 2-5 columns depending on content and viewport

## Components
- Navigation should start transparent over the hero and become solid when scrolled
- Product cards should use uppercase names, thin metadata, and image hover swap
- Cart drawer should feel polished and minimal
- Accordions should use clean dividers, no heavy panels
- Testimonial and newsletter areas can use light surfaces to create contrast against the dark page base

## Do
- Maintain explicit text colors on every surface
- Use serif display headlines generously but selectively
- Keep product UI clean and premium
- Make forms and inputs elegant with thin borders and clear contrast

## Do not
- Do not use bright discount colors or loud gradients
- Do not mix multiple accent colors
- Do not create low-contrast text on image or tinted backgrounds
- Do not overcrowd cards with excessive labels or controls
