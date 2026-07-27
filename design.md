# SSourcing China — Visual Design Guide

## Brand Identity
SSourcing China is a B2B China-sourcing partner for overseas buyers. Visual language must read as **trustworthy, international, and practical** — never flashy. Photography is documentary (real factory floors, container yards, QC tables), not stock-marketing.

## Color Palette
- **Primary (Navy)**: `#0E2A47` — trust, stability, cross-border professionalism. Used for headers, primary text on light backgrounds, dark sections.
- **Accent (Brick Red)**: `#C8362B` — energy, action, nods to Chinese flag without being literal. Used for primary CTAs, accent badges, key highlights.
- **Gold (Trust Mark)**: `#C9A35C` — used sparingly for trust indicators (badges, divider accents) to convey premium B2B service.
- **Slate (Body)**: `#334155` — primary body text on light backgrounds.
- **Muted (Secondary)**: `#64748B` — secondary text, captions, labels.
- **Surface (Light)**: `#F8FAFC` — page background, soft sections.
- **Surface (Card)**: `#FFFFFF` — card backgrounds.
- **Border**: `#E2E8F0` — hairline borders and dividers.
- **Dark Surface**: `#0A1F36` — dark footer/hero gradient base.

### Pairing Rules
- Light backgrounds (F8FAFC / FFFFFF) always pair with `text-slate-700` for body and `text-[#0E2A47]` for headings. Never rely on inherited text color.
- Dark backgrounds always pair with `text-white` for headings and `text-slate-200` for body. Add explicit foreground classes to cards/badges.
- CTA buttons: `bg-[#C8362B] text-white hover:bg-[#A82A22]`. White text on red must pass contrast.

## Typography
- **Font**: Inter (Google webfont), weights 300/400/500/600/700/800.
- **Display (H1 hero)**: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` on `text-[#0E2A47]` or `text-white` depending on background.
- **Section Title (H2)**: `text-3xl md:text-4xl font-semibold tracking-tight`.
- **Subsection (H3)**: `text-xl md:text-2xl font-semibold`.
- **Body**: `text-base leading-relaxed text-slate-700`.
- **Lead Paragraph**: `text-lg text-slate-600`.
- **Small / Caption**: `text-sm text-slate-500`.
- **Labels**: `text-sm font-medium text-slate-700`.

## Layout & Spacing
- Page max width: `max-w-7xl` (1280px) with `px-4 md:px-6 lg:px-8` gutters.
- Vertical rhythm: section padding `py-16 md:py-20 lg:py-24`.
- Grid gaps: `gap-6 md:gap-8 lg:gap-10`.
- Card padding: `p-6 md:p-8`.

## Components
- **Header**: Sticky top, white background with subtle bottom border (`border-slate-200`), navy text, red CTA button on the right.
- **Footer**: Dark navy (`bg-[#0A1F36]`) with white/slate-200 text and a red CTA. Always set explicit foreground colors on headings and links.
- **Buttons**:
  - Primary: `bg-[#C8362B] text-white hover:bg-[#A82A22] focus:ring-2 focus:ring-[#C8362B]/40`.
  - Secondary: `bg-white text-[#0E2A47] border border-[#0E2A47] hover:bg-slate-50`.
  - Ghost: `text-[#0E2A47] hover:text-[#C8362B]`.
- **Cards**: `bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow`.
- **Section wrapper**: white or `bg-slate-50` to alternate between sections.
- **Form fields**: `border-slate-300 focus:border-[#0E2A47] focus:ring-[#0E2A47]` with `text-slate-900` label.

## Imagery
- Documentary factory/QC/shipping photography via `data-strk-img` system.
- Hero uses a wide container-yard or factory-floor image at 16:9.
- Section illustrations use 4:3 or 3:2 ratios.
- Never use cartoon or marketing-style illustrations.
- Always set explicit alt text for accessibility.

## Do's and Don'ts
- DO use ample whitespace — this is a premium B2B brand, not a consumer site.
- DO show concrete numbers (years of experience, factories verified, inspections completed) but use realistic, conservative figures.
- DO use icons from `lucide-react` sparingly — for bullet points and small indicators only.
- DON'T use emojis in copy.
- DON'T use animated carousels; static, predictable layout is more B2B-appropriate.
- DON'T exaggerate claims ("#1 in China", "Lowest price guaranteed").
- DON'T use marketing-heavy stock photos (rocket ships, fake handshakes).
- DON'T ship text that relies on inherited color — always set explicit foreground on cards, modals, dark sections, badges, and empty states.
