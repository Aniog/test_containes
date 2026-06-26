# ARTITECT MACHINERY — Visual Design Guide

## Brand Personality
ARTITECT MACHINERY builds precision sheet metal folding and double folding machines for industrial fabrication. The brand voice is engineered, confident, and trustworthy. The visual style is elegant but approachable: clean modern industrial, never cluttered, never gimmicky.

## Color System
- **Background (canvas)**: `#F4F5F7` (light warm gray) — main page background
- **Surface (cards)**: `#FFFFFF` (pure white) — for cards, sections on colored backgrounds
- **Surface Elevated**: `#FAFAFB` — subtle secondary surfaces
- **Ink Primary (heading)**: `#0E1726` (near-black navy) — main headings, body text on light
- **Ink Secondary**: `#3D4A5C` — secondary body text
- **Ink Muted**: `#6B7280` — captions, helper text
- **Brand Primary (Industrial Steel Blue)**: `#1B3A6B` — primary buttons, key accents, headers
- **Brand Primary Hover**: `#152d54`
- **Brand Accent (Copper)**: `#C77B3F` — premium highlights, callouts, dividers
- **Brand Accent Soft**: `#E8D5C0` — accent tints, soft badges
- **Border Subtle**: `#E5E7EB` — dividers, card borders
- **Border Strong**: `#D1D5DB` — stronger dividers, hover borders
- **Success**: `#1F8A5C`
- **Error**: `#B23A48`

Always pair foreground text explicitly. Never rely on inherited color on dark or colored backgrounds.

## Typography
- **Headings**: `Inter`, font weights 600 (semibold) and 700 (bold). Tight tracking on large headings.
- **Body**: `Inter`, 400/500. Line-height 1.6 for readability.
- **Eyebrow / Labels**: `Inter`, uppercase, tracked wider, weight 500, smaller size (0.75–0.875rem).
- **Hero Headline**: clamp(2.5rem, 5vw, 4.5rem), bold, tight line-height (1.1).
- **Section Heading**: clamp(1.875rem, 3vw, 2.75rem), semibold.
- **Body Large**: 1.125rem, regular.
- **Body**: 1rem, regular.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28 lg:py-32` (5rem / 7rem / 8rem).
- Container max-width: `max-w-7xl` with `px-6 md:px-8`.
- Section gap: 4–6rem between major blocks.
- Card padding: `p-6 md:p-8`.
- Generous whitespace. Industrial brands feel expensive when there's room to breathe.

## Borders & Shapes
- Default radius: `rounded-md` (6px) for inputs, small buttons; `rounded-lg` (8px) for cards; `rounded-xl` (12px) for large feature cards.
- Pills: `rounded-full` for badges and tag chips.
- Subtle 1px borders on cards: `border border-[#E5E7EB]`.
- Avoid heavy drop shadows. Use subtle shadow: `shadow-sm` or `shadow-md` for elevation; never `shadow-2xl`.

## Visual Style Direction
- Solid colors over gradients (industrial = honest materials).
- Use thin, sharp dividers (1px) over decorative blurs.
- Iconography: thin-stroke Lucide icons (`strokeWidth={1.5}`).
- Photography: stock images focused on real metal-folding machinery, sheet metal work, factories.
- Decorative elements: subtle geometric angles (diagonal corner cuts) and clean grid lines.

## Buttons
- **Primary**: bg `#1B3A6B`, text white, hover `#152d54`, radius `rounded-md`, `px-6 py-3`, font-weight 500.
- **Secondary (outline)**: border `#1B3A6B`, text `#1B3A6B`, hover bg `#1B3A6B` + white text.
- **Accent (CTA Quote)**: bg `#C77B3F`, text white, hover `#A86432`.
- **Ghost**: text `#1B3A6B`, hover bg `rgba(27, 58, 107, 0.06)`.

## Do's
- Use generous whitespace and clear typographic hierarchy.
- Lead with confident, factual claims (precision, capacity, repeatability).
- Pair every image with meaningful adjacent copy.
- Use the steel blue + copper accent palette consistently.
- Highlight product specifications in clean tables or spec lists.

## Don'ts
- Don't use neon colors, gradients, or playful illustrations.
- Don't mix multiple accent colors — stick to steel blue + copper.
- Don't use blurry or low-contrast text on dark backgrounds.
- Don't bury the contact CTA — surface it in hero, after products, and footer.
- Don't use generic Lorem-style placeholder copy that doesn't sound industrial.