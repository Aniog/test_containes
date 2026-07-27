# SSourcing China — Design System

## Brand Positioning
A professional B2B website for a China-based sourcing agent. The visual style must communicate **trust, international professionalism, and operational competence** without over-promising.

## Tone
- Calm, precise, practical
- Industrial/operational (not "lifestyle")
- No exaggerated marketing language, no stock "happy handshake" tropes
- Photography should feel like factory floor, QC lines, shipping containers, sample tables

## Color Palette
- **Primary (Deep Navy)**: `#0E2A47` — main brand color, used in navbar, hero overlays, headings
- **Primary Dark**: `#08203A` — footer, deep sections
- **Accent (Action Orange)**: `#E25822` — primary CTAs only ("Get a Free Sourcing Quote")
- **Accent Hover**: `#C24A1A`
- **Steel (Surface tint)**: `#F4F6F8` — alternating section backgrounds
- **Ink (Body text)**: `#1A2330` — main text
- **Muted**: `#5A6573` — secondary text
- **Border**: `#E2E6EC`
- **White**: `#FFFFFF` — card surfaces

## Typography
- **Font**: Inter (Google Fonts) — already loaded in index.html
- **H1**: 3rem–3.75rem, font-weight 700, line-height 1.1, tracking-tight
- **H2**: 2rem–2.5rem, font-weight 700
- **H3**: 1.25rem–1.5rem, font-weight 600
- **Body**: 1rem, line-height 1.65
- **Small**: 0.875rem, color muted

## Layout
- Max content width: 1200px (`max-w-6xl`)
- Section vertical padding: `py-20` (80px) on desktop, `py-12` on mobile
- Generous gutter: `px-6 md:px-8`

## Components
- **Buttons**:
  - Primary: `bg-[#E25822] text-white hover:bg-[#C24A1A]`, padding `px-6 py-3`, font-weight 600
  - Secondary (outline on dark): `border border-white/30 text-white hover:bg-white/10`
  - Ghost (on light): `text-[#0E2A47] hover:text-[#E25822]`
- **Cards**: `bg-white border border-[#E2E6EC] rounded-lg`, padding `p-6` or `p-8`
- **Section header**: kicker text in uppercase `text-xs tracking-widest text-[#E25822] font-semibold`, then H2

## Do
- Use real-looking factory, container, and inspection imagery
- Use specific numbers in trust points (e.g. "8+ years", "1,200+ inspections")
- Use icons from lucide-react consistently
- Use the orange accent **only** for primary CTAs and small accents
- Use navy for major headings and structural elements

## Don't
- Don't use gradients on hero text
- Don't use emojis in headings
- Don't use purple/violet/blue-500 default Tailwind palette
- Don't use generic stock "diverse team" photography
- Don't over-claim: avoid "best in the world", "#1", "guaranteed lowest price"
