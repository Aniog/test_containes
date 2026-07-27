# SSourcing China — Visual Style Guide

## Brand
SSourcing China is a B2B China sourcing partner. The site must look like a
serious trade partner: confident, calm, factual. No hype, no stock-photo
clichés of skyscrapers, no decorative gradients.

## Tone
- Professional, clear, practical.
- Trust comes from structure and specifics, not from exclamation marks.
- Numbers, process steps and concrete deliverables should carry the page.

## Color palette (Tailwind tokens)
- `primary` — Deep navy `#0E2A47`. Used for headings, primary buttons,
  footer background, top-of-page accents.
- `primary-foreground` — `#FFFFFF` (text on primary).
- `accent` — Warm signal orange `#E8742A`. Reserved for primary CTAs,
  active step indicators, key data callouts. Never used for body text.
- `accent-foreground` — `#FFFFFF` (text on accent).
- `surface` — Pure white `#FFFFFF` (cards, page sections).
- `muted` — Cool light gray `#F4F6F9` (alternating section backgrounds).
- `muted-foreground` — Slate gray `#4B5563` (secondary text).
- `ink` — Near-black `#0B1220` (body text on light surfaces).
- `border` — Soft cool gray `#E3E7EE` (dividers, card borders).
- `success` — Forest green `#1F7A4D` (verification / trust badges).
- `warning` — Amber `#B45309` (problem / risk callouts).

Avoid raw blue-purple gradients. Avoid neon. Avoid emoji.

## Typography
- Font: Inter (already loaded via Google Fonts in `index.html`).
- Headings: 600–700 weight, tight tracking, navy color.
- Body: 400–500 weight, ink color, comfortable line-height (1.6+).
- Section eyebrows: 12–13px, uppercase, letter-spacing 0.12em, muted.

## Layout & spacing
- Max content width: `max-w-7xl` (1280px), centered.
- Vertical rhythm: 96px (py-24) between major sections on desktop,
  64px (py-16) on mobile.
- Cards: rounded-xl, 1px border in `border`, soft shadow `shadow-sm`
  on hover `shadow-md`. Never use drop-shadows on body text.
- Grid: 12-col on desktop, 2-col on tablet, 1-col on mobile.

## Components
- Buttons: `rounded-md`, `h-11` for primary, `h-10` for secondary.
  Primary = solid navy on white, with white text. CTA = solid accent
  orange with white text. Ghost = transparent with navy border.
- Inputs: 1px border `border`, focus ring `ring-primary/30`, no
  rounded-full inputs — keep `rounded-md`.
- Badges: small, `rounded-full`, `border` instead of fills.
- Icons: Lucide React only, 20px in body, 24px in card headers.

## Imagery
- Use the strk image system (`data-strk-img` / `data-strk-bg`).
- All imagery must look like real B2B scenes: factory floor, QC
  inspector with clipboard, shipping containers, sample boxes,
  forklifts, ports, supplier meetings. No abstract graphics.
- Always provide text reference IDs so the image query is descriptive.

## Do
- Use real, specific numbers ("1,200+ suppliers verified").
- Show process, not just benefits.
- Make the next step obvious on every page (CTA to inquiry form).

## Don't
- Don't use stock photos of generic office handshakes.
- Don't use vague claims ("best in class", "world leader").
- Don't use carousel sliders for content (only for case studies if needed).
- Don't center-align long paragraphs.
