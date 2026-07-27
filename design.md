# SSourcing China — Design System

## Brand positioning
Professional, trustworthy, international B2B sourcing partner based in China.
Tone: clear, practical, no exaggerated claims. Content reads like a logistics
company website, not a marketing landing page.

## Visual style
- **Aesthetic**: Corporate B2B, modern flat, generous whitespace, structured
  grid. Inspired by linear.app, flexport.com, mfg.com, Alibaba B2B.
- **Mood**: Confident, calm, organized. No playful illustrations, no neon
  gradients, no "AI/sci-fi" decorative elements.

## Color tokens
Use these exact hex values via the named Tailwind theme keys (configured in
`tailwind.config.js`).

| Token              | Hex       | Usage                                      |
|--------------------|-----------|--------------------------------------------|
| `navy-900`         | `#0B2545` | Primary brand (header, dark sections)      |
| `navy-800`         | `#13315C` | Hover/darker navy                          |
| `navy-700`         | `#1B4A7A` | Secondary navy (links, headings)           |
| `navy-50`          | `#EAF0F8` | Subtle navy tints (info backgrounds)       |
| `accent-500`       | `#E07A1F` | Primary CTA / accent                       |
| `accent-600`       | `#C8651A` | CTA hover                                  |
| `accent-50`        | `#FDF3E8` | Subtle accent tint                         |
| `slate-900`        | `#0F172A` | Body headings                              |
| `slate-700`        | `#334155` | Body text                                  |
| `slate-600`        | `#475569` | Secondary text                             |
| `slate-500`        | `#64748B` | Muted text                                 |
| `slate-400`        | `#94A3B8` | Borders, dividers                          |
| `slate-200`        | `#E2E8F0` | Light borders                              |
| `slate-100`        | `#F1F5F9` | Alternating section background             |
| `slate-50`         | `#F8FAFC` | Page background                            |
| `white`            | `#FFFFFF` | Cards, hero overlay                        |
| `success-500`      | `#16A34A` | Check / trust icons                        |

## Typography
- **Font family**: Inter (already loaded in `index.html`).
- **Headings**: Inter, semibold (600) or bold (700), tight tracking.
- **Body**: Inter, regular (400), 16px base, line-height 1.6.
- **Eyebrow / labels**: uppercase, tracking-widest, 12px, font-weight 600.
- **H1**: 48–56px desktop / 32–36px mobile.
- **H2**: 32–40px desktop / 26–28px mobile.
- **H3**: 22–24px.
- **Body large**: 18px for hero subhead.
- **Body**: 16px.
- **Small**: 14px for meta / footer.

## Spacing
- Section vertical padding: `py-20` (80px) desktop, `py-14` mobile.
- Container max width: `max-w-7xl` (1280px), inner padding `px-6 lg:px-8`.
- Card padding: `p-6` to `p-8`.
- Grid gaps: `gap-6` (24px) standard, `gap-8` (32px) for feature grids.

## Borders & shadows
- Cards: `border border-slate-200 rounded-lg` or `rounded-xl`.
- Subtle shadow on hover only: `shadow-sm hover:shadow-md transition-shadow`.
- Dividers: `border-t border-slate-200`.
- Avoid heavy drop shadows.

## Buttons
- **Primary**: `bg-accent-500 hover:bg-accent-600 text-white font-semibold
  rounded-md px-6 py-3`.
- **Secondary**: `bg-navy-900 hover:bg-navy-800 text-white`.
- **Outline**: `border border-navy-900 text-navy-900 hover:bg-navy-900
  hover:text-white`.
- **Ghost link**: `text-navy-700 hover:text-navy-900 underline-offset-4
  hover:underline`.
- All buttons: `transition-colors`, no extra glow.

## Iconography
- Use **lucide-react** (already available).
- Icon size: 20–24px in cards, 28–32px in feature callouts.
- Icon color: `text-navy-700` for neutral, `text-accent-500` for highlights,
  `text-success-500` for check marks.

## Imagery
- All photos via `data-strk-img` and `data-strk-bg` (no external URLs).
- Aspect ratios:
  - Hero: `16x9`
  - Service / category cards: `4x3`
  - Process steps: `3x2`
  - Case studies: `4x3`
- Image style cue keywords: factory floor, quality inspector, container port,
  shipping containers, warehouse, production line, handshakes, lab testing.

## Do's
- Keep section headings short and benefit-led.
- Use two-column layouts on desktop, single column on mobile.
- Use small "eyebrow" labels above section headings.
- Include trust indicators (years in business, factories verified, etc.) — only
  use realistic, conservative figures.
- Use specific, practical copy (e.g. "Pre-shipment inspection report with
  photos within 24 hours").

## Don'ts
- No emojis in UI text.
- No exaggerated marketing claims ("#1", "guaranteed", "best in world").
- No neon colors, no glassmorphism, no animated background blobs.
- No light-gray text on white backgrounds.
- No centered paragraph text in narrow column — use `max-w-3xl` then center.
- No multi-color icon tiles; use a single accent or navy color.
