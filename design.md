# SSourcing China — Design System

## Brand
- Company: SSourcing China
- Positioning: Professional B2B China sourcing agent for global buyers
- Tone: Trustworthy, international, practical, no exaggerated claims
- Personality: Calm, confident, experienced, plain-spoken

## Visual Personality
- Clean, modern B2B SaaS-style site (think Linear, Stripe, Vercel marketing)
- Lots of white space, sharp but soft (rounded-md, not pill-shaped)
- Subtle elevation; never busy
- Information dense enough to feel "professional" but not overwhelming
- Imagery: realistic factories, QC inspections, shipping containers, port operations (no stock-photo cliches)
- Iconography: Lucide line icons, 1.5px stroke, neutral slate

## Color Palette
Add these to `tailwind.config.js` as named colors.

| Token             | Hex      | Use                                                       |
| :---------------- | :------- | :-------------------------------------------------------- |
| `brand-900`       | `#0B1F3A` | Primary navy, headings on light, hero gradients           |
| `brand-800`       | `#0E2A47` | Primary buttons, dark sections, footer                    |
| `brand-700`       | `#163A66` | Hover for primary buttons                                 |
| `brand-100`       | `#E6EDF7` | Tinted backgrounds, hover fills                           |
| `brand-50`        | `#F3F6FB` | Light tinted section backgrounds                          |
| `accent-600`      | `#C8102E` | Subtle China-red accent (sparingly: badges, dots, lines)  |
| `accent-500`      | `#D9342B` | Accent CTA secondary, highlight bars                      |
| `slate-50`        | `#F8FAFC` | Page background alternates                                |
| `slate-100`       | `#F1F5F9` | Subtle dividers, code blocks                              |
| `slate-200`       | `#E2E8F0` | Card borders                                              |
| `slate-400`       | `#94A3B8` | Muted icons, placeholders                                 |
| `slate-600`       | `#475569` | Body text on light                                        |
| `slate-700`       | `#334155` | Subheadings                                               |
| `slate-900`       | `#0F172A` | Headings                                                  |
| `success-600`     | `#15803D` | Trust badges, checkmarks                                  |
| `warning-600`     | `#B45309` | Advisory labels (used sparingly)                          |

**Foreground pairing rule:** Always set explicit text color when background uses brand or slate. Never rely on inherited colors. Cards use `text-slate-700` on `bg-white`, footer uses `text-slate-300` on `bg-brand-800`.

## Typography
- Font: **Inter** (already loaded via Google Fonts in `index.html`)
- Weights: 400 (body), 500 (subhead), 600 (heading), 700 (display)
- Scale (Tailwind):
  - Display / H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900`
  - H2: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
  - H3: `text-xl md:text-2xl font-semibold text-slate-900`
  - H4: `text-lg font-semibold text-slate-900`
  - Body: `text-base text-slate-600 leading-relaxed`
  - Small: `text-sm text-slate-600`
  - Eyebrow: `text-xs font-semibold tracking-[0.18em] uppercase text-accent-600`

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Buttons:
  - Primary: `bg-brand-800 hover:bg-brand-700 text-white px-6 py-3 rounded-md font-semibold transition`
  - Secondary: `bg-white text-brand-800 border border-slate-200 hover:border-brand-800 px-6 py-3 rounded-md font-semibold transition`
  - Ghost: `text-brand-800 hover:bg-brand-50 px-4 py-2 rounded-md font-semibold transition`
- Cards: `bg-white border border-slate-200 rounded-lg p-6 md:p-8`
- Section eyebrow + title: short uppercase accent label above large title
- Icon containers: `w-12 h-12 rounded-md bg-brand-50 text-brand-800 flex items-center justify-center`
- Form fields: `border border-slate-300 focus:border-brand-800 focus:ring-1 focus:ring-brand-800 rounded-md px-4 py-2.5 text-slate-900 placeholder:text-slate-400 bg-white`
- Trust badges: small inline pill `text-xs font-semibold bg-brand-50 text-brand-800 px-2.5 py-1 rounded`

## Imagery (stock image system)
- Always use `data-strk-img` / `data-strk-bg` tags driven by text references
- Aspect ratios: 16x9 for hero, 4x3 for cards, 3x2 for grids, 1x1 for avatars
- Search queries should reference the most specific nearby text first, then broader section text
- Do not over-use stock photos; rely on typography and clean layouts where possible

## Do
- Use 1.5px stroke Lucide icons sized to `w-5 h-5` or `w-6 h-6`
- Show concrete facts and processes (no vague "world-class", "best-in-class" copy)
- Provide explicit alt text on all `<img>` tags
- Use `text-slate-600` for body, `text-slate-900` for headings
- Keep CTAs above the fold and at the end of each long section

## Don't
- Do not use exaggerated claims ("#1 sourcing agent", "guaranteed lowest price")
- Do not use red, gold, or rainbow gradients
- Do not use emoji as iconography
- Do not use pill-shaped (rounded-full) buttons for primary CTAs
- Do not use placeholder lorem ipsum
- Do not rely on inherited text colors
