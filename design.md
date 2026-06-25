# SSourcing China — Visual Design System

## Brand essence
Professional B2B sourcing partner. Trustworthy, international, practical. Visuals should feel like a global trade operations company, not a flashy marketplace.

## Color palette (Tailwind tokens via @theme)
- **brand-navy** `#0B2545` — primary text, deep surfaces, headings
- **brand-navy-2** `#13315C` — secondary navy, hover states
- **brand-red** `#C81D25` — accent (China red, used sparingly for CTAs and key emphasis)
- **brand-amber** `#E8A33D` — supporting accent for highlights and category badges
- **brand-teal** `#1F7A8C` — informational accents, charts, tags
- **brand-paper** `#F7F4EE` — warm off-white background sections
- **brand-mist** `#EEF2F7` — cool light gray for alternating sections
- **brand-line** `#D9DEE6` — borders, dividers
- **brand-ink** `#0B2545` — primary text on light
- **brand-ink-muted** `#5A6473` — secondary text
- **brand-ink-soft** `#8A93A1` — tertiary/muted text

## Typography
- Headings: Inter (700/600), tight tracking, large sizes on desktop
- Body: Inter (400/500), relaxed 1.65 line-height
- Use Tailwind: `font-sans` default (Inter)
- Section eyebrow: uppercase, letter-spacing `tracking-[0.18em]`, small `text-xs`, color `brand-ink-muted` or `brand-teal`

## Layout
- Container max width: `max-w-7xl`, side padding `px-5 md:px-8 lg:px-10`
- Vertical section spacing: `py-16 md:py-24`
- Grid: 12-col on desktop, comfortable gap `gap-8` to `gap-10`

## Components
- Cards: `rounded-xl`, `border border-brand-line`, `bg-white`, `shadow-sm` on hover
- Buttons:
  - Primary: `bg-brand-red text-white hover:bg-[#A8161D]`
  - Secondary: `bg-white text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white`
  - Ghost: `text-brand-navy hover:text-brand-red`
- Pills/badges: `rounded-full`, small text, soft tinted backgrounds
- Section header: small eyebrow + large headline + supporting paragraph, centered or left-aligned

## Visual style
- Clean, content-first, generous whitespace
- Use real factory, shipping, QC imagery via stock system (no dragons/lanterns)
- Subtle background tints (`brand-paper` / `brand-mist`) to separate sections
- Icons: Lucide React, stroke 1.75, sized 20–28 in cards, 32+ in feature blocks
- No emoji in production UI

## Photography guidance
- Factory floors, container yards, QC inspectors with checklists, sample tables, shipping containers, handshake with documents
- Avoid staged models or unrealistic stock clichés

## Do
- Keep cards consistent height in grids
- Use clear CTA buttons above the fold on every page
- Show numbers/stats in monospaced tabular feel

## Don't
- Don't use dark mode by default (B2B buyers expect clean light)
- Don't over-saturate brand-red — use it as accent, not as fill for large surfaces
- Don't use mock dollar signs or fake certificate badges
