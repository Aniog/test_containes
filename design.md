# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury. Warm. Editorial. Premium demi-fine jewelry that feels considered,
not loud. Generous whitespace, restrained accents, large editorial imagery,
soft shadows, hairline dividers. Inspired by Aesop, Mejuri, and Khaite campaigns.

## Color Palette (commit to one direction: warm cream + champagne gold)

- `ivory` `#FBF8F2` — primary page surface; flatters gold jewelry
- `cream` `#F4ECDF` — soft warm alt surface / category tile backgrounds
- `espresso` `#1B1410` — primary text; warm near-black, never #000
- `espresso-soft` `#3A2E25` — secondary headings on light surfaces
- `gold` `#B08A52` — primary accent; champagne, NOT yellow
- `gold-deep` `#8C6A3D` — hover/pressed accent
- `gold-soft` `#D9C39A` — warm metallic tint for soft highlights
- `taupe` `#8A7C6A` — muted body / metadata text
- `hairline` `#E4D9C6` — thin dividers on light surfaces
- `noir` `#0E0A07` — dark editorial sections (hero overlay, footer)
- `noir-soft` `#1A1410` — dark surface
- `danger` `#9B2C1F` — destructive actions (sparingly)

Use `gold` for primary CTAs, `espresso` for body, `ivory` for backgrounds,
`noir` only for editorial dark sections.

## Typography

- Headings: **Cormorant Garamond** (300, 400, 500) — editorial, delicate serif
- Body / UI: **Inter** (300, 400, 500, 600) — clean neutral sans
- Product names: UPPERCASE Inter 500 with `tracking-[0.22em]` and `text-[11px]` to `text-xs`
- Section titles: Cormorant Garamond 400, 2.5–4rem, often italic
- Hero headline: Cormorant Garamond 400, 5xl–7xl, leading-[1.05]
- Body: Inter 400, 15–16px, leading-[1.6]
- Captions / metadata: Inter 400, 11–12px, uppercase, tracking-[0.18em], color `taupe`

## Spacing & Layout

- Page max width: `1440px`, generous `px-6 md:px-10 lg:px-16`
- Vertical rhythm between sections: `py-20 md:py-28 lg:py-36`
- Cards: 1px borders, no rounded corners (`rounded-none`); 0–4px corner softness allowed on small UI only
- Buttons: 0–2px radius, 1px borders for outlined, solid fill for primary

## Components

### Buttons
- Primary (gold): `bg-gold text-ivory hover:bg-gold-deep px-8 py-3.5 tracking-[0.18em] uppercase text-xs font-medium`
- Outlined (espresso): `border border-espresso text-espresso hover:bg-espresso hover:text-ivory px-8 py-3.5 tracking-[0.18em] uppercase text-xs font-medium`
- Ghost / link: `text-espresso underline underline-offset-4 hover:text-gold transition-colors`

### Hairlines
- Section dividers: 1px `border-hairline`
- Editorial hairlines in hero/footers: 1px white at `border-white/15` to `border-white/25`

### Product Cards
- 3:4 image (or 1:1 for square crops)
- No rounded corners
- Product name: uppercase Inter 500, `tracking-[0.22em]`, `text-[11px]`
- Price: Inter 400, `text-sm`
- On hover: subtle scale image (1.03), soft fade-in second image, reveal quick-add button

### Shadows
- Use sparingly: `shadow-[0_8px_30px_rgba(27,20,16,0.06)]` on elevated cards/drawer
- Avoid heavy drop shadows

### Motion
- Default transition: `transition-all duration-300 ease-out`
- Subtle scale on image hover: `hover:scale-[1.03]` over 700ms
- Section fade-in on scroll: opacity 0→1, translateY 8px→0, 600ms

## Do's
- Do use Cormorant Garamond italic for "Our Story" / "Bestsellers" / "Reel" headings
- Do use hairline dividers under section titles
- Do leave generous whitespace around hero, story, and product sections
- Do use `gold` for ONLY one CTA per viewport where possible

## Don'ts
- Don't use saturated colors or gradients
- Don't use rounded-full buttons
- Don't use bright red / bright blue / lime
- Don't use emoji icons
- Don't use the word "cheap", "discount", or red price strikethroughs
- Don't use the default Tailwind blue link color
