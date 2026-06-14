# SSourcing China — Design System

## Brand Position
Professional China-based B2B sourcing agent serving international buyers. Tone: trustworthy, practical, no over-claiming, international.

## Visual Style
- **Aesthetic**: Clean, modern B2B, white-space rich, subtle shadows, professional.
- **Layout**: Generous padding, clear hierarchy, grid-based sections, max width 1200px content.
- **Imagery**: Real factory / shipping / inspection photography. No stock-cliché. Always paired with explanatory text.
- **Density**: Airy — never crowded. Section vertical spacing 80-128px on desktop, 56-80px on mobile.

## Color Palette
- **Primary (Deep Navy)**: `#0B2545` — used for headings, primary buttons, top bar.
- **Primary Hover**: `#13315C`
- **Accent (Red)** `#D62828` — used for the primary CTA only ("Get a Free Sourcing Quote"). Sparingly, never as decoration.
- **Surface**:
  - Page: `#FFFFFF`
  - Soft: `#F8FAFC` (slate-50) — section alternating background
  - Card: `#FFFFFF` with `border: 1px solid #E2E8F0`
- **Text**:
  - Heading: `#0B2545` (slate-900)
  - Body: `#334155` (slate-700)
  - Muted: `#64748B` (slate-500)
  - On dark: `#FFFFFF` / `#E2E8F0`
- **Borders**: `#E2E8F0` (slate-200)
- **Success**: `#16A34A` (green-600)
- **Warning**: `#D97706` (amber-600)

## Typography
- **Font family**: Inter (already loaded via Google Fonts).
- **Headings**: weight 700 (bold), tight line-height 1.1–1.2.
- **Body**: weight 400, line-height 1.6.
- **Sizes** (Tailwind scale):
  - H1 (hero): `text-4xl md:text-5xl lg:text-6xl` (36/48/60 px)
  - H2 (section): `text-3xl md:text-4xl lg:text-5xl`
  - H3 (card): `text-xl md:text-2xl`
  - Body: `text-base md:text-lg` (16/18 px)
  - Small: `text-sm` (14 px)
- **Letter spacing**: tight on h1/h2 (`tracking-tight`), normal on body.

## Spacing
- Section vertical: `py-16 md:py-24 lg:py-32` (64/96/128)
- Container: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`

## Components
- **Buttons**:
  - Primary (CTA): bg `#D62828`, text white, `px-6 py-3`, rounded `rounded-md`, font-semibold. Hover: `#B91C1C`.
  - Secondary: bg white, text `#0B2545`, border 1px `#0B2545`. Hover: bg `#0B2545` text white.
  - Ghost: text `#0B2545` underline on hover.
- **Cards**: white bg, border `#E2E8F0`, `rounded-lg`, optional shadow `shadow-sm` → `shadow-md` on hover.
- **Section header**: H2 + optional kicker label (uppercase, small, accent color, letter-spacing).

## Iconography
- Lucide React. Use outline style (default), size 20–28. Use 1.5–2 strokeWidth for headings, default for body.
- Color follows text or accent — never random.

## Do's
- Maintain strong typographic hierarchy. Headings should clearly dominate.
- Use icons next to text labels (never alone) in feature lists.
- Show real numbers in case studies (no round figures like "100% satisfied").
- Pair every image with descriptive, specific copy.

## Don'ts
- Don't use red as decoration — only for the primary CTA and key emphasis.
- Don't use emojis as iconography.
- Don't use low-contrast text. Always check headings against their bg.
- Don't use more than 2 accent colors in one section.
- Don't use gradients or glows.
- Don't use "amazing", "best", "world-leading" in copy.
- Don't use stock photos of women in suits pointing at whiteboards.
