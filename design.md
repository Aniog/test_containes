# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, elegant, never loud or discount-looking.

## Color Palette
A deep refined base (warm charcoal/espresso) with warm metallic gold accents and soft ivory neutrals.

- `ink`        #1A1714  — deep warm charcoal (primary dark surface / text on light)
- `espresso`   #2B2520  — secondary dark
- `ivory`      #F7F3EC  — warm off-white (page background)
- `cream`      #EFE8DC  — soft neutral panel
- `sand`       #E2D8C7  — divider / muted surface
- `gold`       #B08D57  — primary accent (warm metallic gold)
- `gold-deep`  #8A6D3E  — hover / deeper gold
- `champagne`  #D9C3A1  — light gold tint
- `stone`      #6B6258  — muted body text on light
- `stone-light`#9A9088  — placeholder / secondary

### Semantic pairs
- Light surface: bg `ivory` / text `ink`
- Dark surface: bg `ink` / text `ivory`
- Accent: bg `gold` / text `ivory` (or `ink` on `champagne`)
- Muted: bg `cream` / text `stone`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Eyebrow / labels: UPPERCASE sans, `text-xs tracking-[0.25em] text-stone`.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand` 1px.

## Components
- Buttons: solid `gold` bg, `ivory` text, uppercase tracking, subtle hover darken + soft shadow. Outlined variant: `border-ink` text `ink`.
- Cards: `bg-ivory`, soft shadow `shadow-[0_10px_40px_-20px_rgba(26,23,20,0.25)]`, rounded-none (editorial square corners) or `rounded-sm`.
- Inputs: underline style or thin border, `border-sand`, focus `border-gold`.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, hairline highlights.
- Large editorial imagery with warm tones.
- Subtle transitions `duration-300 ease-out`.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons (except small pills like variant selectors).
- No heavy shadows or gradients.
- No generic e-commerce clutter.
