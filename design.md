# SSourcing China — Design System

## Brand Positioning
Professional B2B China sourcing agent website. The visual style must communicate
**trust, precision, and international readiness** — not playful, not generic
"SaaS landing page", not warehouse-grungy. Think corporate supply-chain services:
shipping lines, inspection labs, trade associations.

## Tone
- Clear, direct, practical copy
- No exaggerated claims ("#1", "best in China", "guaranteed lowest price")
- Numbers used sparingly and only when defensible
- Slight formality without being stuffy

## Color Palette
- **Primary (brand):** `navy` `#0E2A47` — headers, primary buttons, footer
- **Accent (action):** `red` `#C8102E` — CTAs, key highlights (logistics / customs red)
- **Surface white:** `#FFFFFF` — cards, modals, page background
- **Surface muted:** `#F4F6F9` — alternating sections
- **Border subtle:** `#E2E7EE`
- **Text primary:** `#0E1A2B` — body text
- **Text secondary:** `#56657A` — meta, captions
- **Text on dark:** `#FFFFFF` / `#B7C2D0`
- **Success:** `#1F8A5A`
- **Warning:** `#C26B00`

Use only the named tokens in Tailwind. Do not introduce new hex values
outside this list.

## Typography
- Font: Inter (300, 400, 500, 600, 700, 800) via Google Fonts (already in `index.html`)
- Display (H1 hero): `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
- Section H2: `text-3xl md:text-4xl font-semibold tracking-tight`
- Card H3: `text-xl font-semibold`
- Body: `text-base leading-relaxed text-slate-700`
- Meta / caption: `text-sm text-slate-500`

## Spacing
- Sections: `py-16 md:py-24` with horizontal `px-4 md:px-8`
- Container max width: `max-w-7xl mx-auto`
- Card padding: `p-6 md:p-8`
- Vertical rhythm between blocks: `space-y-6`

## Components
- **Buttons**
  - Primary: `bg-[#C8102E] hover:bg-[#A60D26] text-white font-semibold rounded-md px-6 py-3`
  - Secondary: `border border-[#0E2A47] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white font-semibold rounded-md px-6 py-3`
  - Ghost: `text-[#0E2A47] hover:underline font-medium`
- **Cards:** `bg-white border border-[#E2E7EE] rounded-lg shadow-sm`
- **Section header:** eyebrow tag + H2 + supporting paragraph, centered on home, left on inner pages
- **Eyebrow tag:** `text-xs font-semibold tracking-[0.18em] uppercase text-[#C8102E]`

## Imagery
- Realistic factory, QC inspector with clipboard, shipping containers, port cranes
- Use `data-strk-img` / `data-strk-bg` for stock images
- Image-to-text consistency: every tagged image must reference actual text ids
- Use ratio 16x9 for hero, 4x3 for cards, 3x2 for grids

## Do
- Use real-feeling case study numbers (e.g., "8 suppliers short-listed, 3 sampled, 1 contracted")
- Show process steps in numbered order
- Always include a primary CTA above and below the fold
- Use icons (Lucide) for service features

## Don't
- No emoji in body copy
- No "We are the best / cheapest / fastest" claims
- No bright neon colors, no gradients on body backgrounds
- No decorative stock photos with no relevance
- No mobile-style single-column stacking on desktop hero / services grid
