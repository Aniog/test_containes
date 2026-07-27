# SSourcing China — Visual Design Guide

## Brand Positioning
A trustworthy, international B2B sourcing partner. The visual style must feel like a long-established, professional trade services firm — calm, businesslike, premium, and information-dense without being cluttered.

## Color Palette

Primary (deep navy / ink — trust, authority, international logistics):
- `ink-900` `#0B1B2B` (primary text, dark hero, footer)
- `ink-800` `#102538`
- `ink-700` `#1A3A55`

Accent (signal red / China-flag inspired but refined — used sparingly for CTAs, badges, and emphasis):
- `accent-600` `#C8102E` (primary CTA)
- `accent-500` `#D72638` (hover)
- `accent-50` `#FDECEF` (subtle backgrounds)

Neutral (clean light surfaces — document feel):
- `surface-0` `#FFFFFF` (cards, content surfaces)
- `surface-50` `#F5F7FA` (page background, alt sections)
- `surface-100` `#E8ECF1` (dividers, borders)
- `surface-200` `#D5DCE4`
- `ink-600` `#475569` (secondary text)
- `ink-500` `#64748B` (tertiary / muted)
- `ink-400` `#94A3B8` (placeholder, disabled)

Status (used for QC/process badges only):
- `success-600` `#15803D`
- `warning-500` `#D97706`
- `info-600` `#1D4ED8`

## Typography
- Font: **Inter** (Google) for everything. Use weights 400 / 500 / 600 / 700 / 800.
- Headlines are tight, sentence-case, with a clear hierarchy. No all-caps marketing shouts.
- Body text 16px / 1.65 line-height, max width ~70ch for prose.
- Display sizes:
  - H1 (hero): 48–64px, weight 700, tracking -0.02em
  - H2 (section): 36–44px, weight 700, tracking -0.01em
  - H3: 22–24px, weight 600
  - H4 / eyebrow: 13–14px, weight 600, tracking 0.08em, uppercase, color `ink-500`
  - Body large: 18px / 1.6
  - Body: 16px / 1.65
  - Small / meta: 14px

## Layout & Spacing
- Container max-width: 1200px (content), 1280px (wide sections).
- Section vertical rhythm: 96–112px desktop, 64–80px mobile.
- Grid: 12-column desktop, 4-column tablet, 1-column mobile. Generous 24–32px gutters.
- Cards: 24px padding, 1px `surface-200` border OR very soft `0 1px 2px rgba(15,23,42,0.04)` shadow. Never heavy drop shadows.
- Radius: 6px for inputs, 8px for buttons, 10–12px for cards, 0px for image edges (editorial / document feel).

## Iconography
- Lucide React only. Stroke 1.75px, size 20–24px. Color `ink-700` default, white on dark.
- Use icons inside a 40–48px square with a soft tinted background (e.g. `accent-50`, `info-600/10`) for feature/service cards.

## Imagery
- Factory floor, container port, QC inspector, handshake, shipping container, workshop interior.
- Use the strk-img tagging system with concrete, descriptive queries built from nearby text element IDs.
- Images: always at correct ratios (3x2, 4x3, 16x9). No stretched images.
- On dark hero sections, place a low-opacity dark overlay over the photo so text is legible.

## Components
- **Buttons**
  - Primary: bg `accent-600`, text white, h-12 px-6, radius 8px, weight 600, subtle shadow on hover.
  - Secondary: bg white, text `ink-900`, border 1px `ink-900`.
  - Ghost: text `ink-700` with arrow, no background.
- **Badges / pills**: tiny uppercase eyebrow labels with a 1px border, used for "Since 2014", "Verified supplier", "ISO 9001" etc.
- **Stat cards**: large number 44–56px weight 700 in `ink-900`, with a small caption underneath.
- **FAQ**: classic disclosure with chevron rotation, divider lines.
- **Inquiry form**: two-column on desktop, single column on mobile, with clear field labels, helper text, and a submit button that matches the primary CTA style.
- **Trust strip**: row of monochrome logos (text-based placeholders for the demo) with "as featured in" eyebrow.

## Voice & Tone
- Professional, practical, and direct. No superlatives ("world's best"), no exclamation marks, no emoji.
- Sentence case in headings. Active voice. Specifics over generalities (mention port names, common product types, realistic MOQs).
- Show, don't claim: replace "we guarantee" with what the team actually does (sample reports, on-site photos, named contact).

## Do
- Do keep sections anchored by a small uppercase eyebrow + clear H2.
- Do use the red accent only for primary CTAs, badges, and small emphasis.
- Do prefer a clean light background (`surface-50`) for most content; use `ink-900` only for the footer and one or two feature sections.

## Don't
- Don't use rainbow gradients, glow effects, or marketing-style illustrations.
- Don't stack multiple accent colors.
- Don't use icons with thick rounded backgrounds that look consumer/playful.
- Don't place low-contrast text on photos without a dark overlay or scrim.
