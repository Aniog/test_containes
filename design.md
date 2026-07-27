# SSourcing China — Design System

## Brand Personality
Professional, trustworthy, international B2B service. No marketing hype. The site must read like a serious operations partner that a procurement manager would feel comfortable sending an RFQ to.

## Color Palette
Deep navy conveys trust and international business; warm off-white feels approachable and editorial; muted teal accent is used sparingly for CTAs and key data; neutral grays form the structural scaffolding.

- **Primary (Navy)**: `#0E2A47` — used for header, dark sections, primary text on light surfaces.
- **Primary Hover**: `#0B2240`
- **Accent (Teal)**: `#0F7B7B` — used for CTA buttons, links on dark, key data.
- **Accent Hover**: `#0B6262`
- **Background (Page)**: `#F5F1EA` (warm off-white)
- **Surface (Card)**: `#FFFFFF`
- **Surface Muted**: `#EFE8DC`
- **Border**: `#E2DCCE` (soft warm border)
- **Text Primary (on light)**: `#0E2A47`
- **Text Secondary (on light)**: `#4A5A6B`
- **Text Muted (on light)**: `#7A8595`
- **Text on Dark**: `#F5F1EA`
- **Text Muted on Dark**: `#9FB0C2`
- **Success**: `#1F8A57`
- **Warning**: `#B5651D`

## Typography
- **Font**: Inter (already loaded via index.html).
- **Weights**: 300, 400, 500, 600, 700.
- **Display / H1**: 56–64px, weight 600, line-height 1.1, letter-spacing -0.02em.
- **H2**: 36–40px, weight 600, line-height 1.15, letter-spacing -0.015em.
- **H3**: 22–24px, weight 600.
- **Body Large**: 18px, weight 400, line-height 1.65.
- **Body**: 16px, weight 400, line-height 1.6.
- **Small / Caption**: 13–14px, weight 500, letter-spacing 0.04em, uppercase for eyebrow labels.
- Always set explicit `text-*` color on text nodes. Never rely on inherited color.

## Spacing
8px base grid. Section vertical padding: 80–96px desktop, 56–64px mobile. Card padding: 24–32px. Generous whitespace between sections.

## Border Radius
- Small (buttons, inputs): 4px
- Medium (cards, images): 6px
- Large (feature blocks): 8px

Avoid pill shapes for primary CTAs — keep them square-cornered for a B2B feel.

## Borders & Shadows
- Borders: 1px solid `#E2DCCE` on cards and inputs.
- Shadows: very subtle — `0 1px 2px rgba(14,42,71,0.04)` to `0 4px 12px rgba(14,42,71,0.06)`. Avoid heavy drop shadows.

## Layout
- Max content width: 1200px.
- Two-column hero on desktop (text left, image right). Stacks on mobile.
- Service and process sections alternate: white card on warm bg → muted bg band → white card.
- Use thin colored top borders or small icons to break up long pages.

## Components
- **Primary Button**: bg `#0F7B7B`, text white, h-11 px-5, font-weight 600, hover `#0B6262`. No rounded-full.
- **Secondary Button**: bg transparent, border 1px `#0E2A47`, text `#0E2A47`, hover bg `#0E2A47` text white.
- **Tertiary Link Button**: text `#0F7B7B`, underline on hover.
- **Card**: bg white, border 1px `#E2DCCE`, p-6 to p-8, no shadow by default.
- **Eyebrow label**: uppercase, 12–13px, font-weight 600, letter-spacing 0.12em, color `#0F7B7B`.
- **Stat number**: 40–56px, weight 600, color `#0E2A47`.
- **Form input**: h-11, border `#E2DCCE`, focus border `#0F7B7B` with 2px ring.

## Imagery
- Use the strk-img stock system for factory, quality inspection, shipping, container, warehouse, and team photos.
- Always set explicit `text-*` color on headings and body text inside image cards.

## Do's
- Use real B2B vocabulary: RFQ, MOQ, OEM, ODM, QC, FOB, CIF, DDP, lead time, pre-shipment inspection, container loading.
- Show specific numbers and years of experience.
- Show geographic reach (cities, countries served).
- Use case-study format with problem → action → outcome.

## Don'ts
- No "world's #1" or other exaggerated superlatives.
- No emoji icons.
- No generic stock phrases like "revolutionize your supply chain".
- No bright candy colors or marketing-style gradients.
- No fake testimonial counts or unverifiable metrics.
