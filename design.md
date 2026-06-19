# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, refined, editorial, and premium without ever looking flashy or discount-driven. The experience should flatter gold jewelry, use generous whitespace, and rely on subtle motion rather than loud graphics.

## Color palette
Use one cohesive palette rooted in warm neutrals and deep espresso tones.

- Background canvas: soft ivory stone — example `bg-stone-50`
- Elevated surfaces: warm white — example `bg-[#f8f4ee]` should be avoided in classes; instead use semantic custom tokens
- Primary text: espresso — example `text-brand-espresso`
- Secondary text: muted taupe — example `text-brand-mink`
- Accent metallic: brushed bronze / antique gold — example `bg-brand-bronze`, `text-brand-bronze`
- Divider/borders: soft champagne line — example `border-brand-line`
- Dark editorial section: deep umber — example `bg-brand-umber text-brand-ivory`

## Typography
- Headings, logo, and editorial statements: `Cormorant Garamond`
- Body, navigation, UI controls, prices, metadata: `Inter`
- Product names: uppercase with wide tracking, e.g. `uppercase tracking-[0.32em]`

## Layout and spacing
- Prefer airy sections with large vertical spacing: `py-16 md:py-24`
- Keep content width elegant: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Use thin dividers and restrained shadows: `border border-brand-line shadow-[0_20px_60px_rgba(44,33,28,0.08)]` should be represented by semantic utilities/classes in CSS if reused often
- Avoid cluttered grids; product cards should breathe

## Components
- Buttons: premium and restrained, either solid bronze with dark text or transparent with fine borders
- Cards: warm surface, readable foreground, rounded but not overly bubbly (`rounded-2xl` or `rounded-3xl`)
- Navigation: transparent over hero, then warm solid background with blur on scroll
- Inputs: warm white fill, thin border, clear readable text and placeholder contrast

## Motion
- Use subtle transitions only: `duration-300 ease-out`
- Hover states can lift slightly, reveal secondary image, or adjust overlay opacity
- Avoid bouncy or playful motion

## Imagery
- Use warm-lit editorial jewelry imagery on models or sculptural still lifes
- Backgrounds should be soft, dark neutral, or creamy stone tones
- UGC strip should feel like polished social content, not raw screenshots

## Do
- Keep contrast strong and explicit on every surface
- Use serif headlines with generous line height
- Let gold/bronze accents appear sparingly
- Maintain a premium, giftable tone

## Don't
- Do not use bright sale colors, badges, or discount-store treatments
- Do not mix multiple accent palettes
- Do not use overly dark-on-dark or light-on-light text
- Do not crowd mobile layouts
