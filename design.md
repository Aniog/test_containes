# SSourcing China — Visual Design System

## Brand Personality
Professional, trustworthy, international B2B sourcing partner. Calm, confident, practical. The visual language is built around industrial precision, global commerce, and clear communication.

## Color Palette
- **Primary (Brand Navy)**: `#0B2A4A` — used for top nav, footer, hero text accents, key headings.
- **Primary Hover**: `#102f55`
- **Accent (Trust Blue)**: `#1E63D6` — primary CTAs, link hovers, important highlights.
- **Accent Hover**: `#1851B3`
- **Surface (Off-White)**: `#F6F8FB` — page background, large panels.
- **Card Surface**: `#FFFFFF` — content cards, inquiry form.
- **Ink (Body Text)**: `#0E1726` — default text on light surfaces.
- **Ink Soft**: `#3D4A5C` — secondary copy, descriptions.
- **Muted Ink**: `#6B7689` — helper text, captions, metadata.
- **Hairline Border**: `#E2E7EF`
- **Hairline Hover**: `#CBD3E0`
- **Success Green**: `#10895B` — verified supplier, success states.
- **Warning Amber**: `#C77A0A` — QC flags, mid-attention states.
- **Danger Red**: `#B5341A` — production issues, rejections.

These hex codes are added to Tailwind config as named colors (e.g. `bg-brand-navy`, `text-ink`, `border-hairline`).

## Typography
- **Font Family**: Inter (Google Fonts) — weights 300, 400, 500, 600, 700, 800.
- **Hero H1**: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight` (Inter 700).
- **Section H2**: `text-3xl md:text-4xl font-bold tracking-tight`.
- **Sub H3**: `text-xl md:text-2xl font-semibold`.
- **Body**: `text-base leading-relaxed text-ink` (Inter 400).
- **Lead/Subtitle**: `text-lg md:text-xl text-ink-soft`.
- **Small/Caption**: `text-sm text-muted-ink`.
- **Eyebrow label**: `text-xs uppercase tracking-[0.18em] font-semibold text-accent`.

## Layout
- **Container**: `max-w-7xl mx-auto px-6 md:px-8`.
- **Section vertical rhythm**: `py-16 md:py-24`.
- **Grid**: 12-column responsive, gap-6 md:gap-8.
- **Cards**: `rounded-2xl bg-white border border-hairline shadow-[0_1px_2px_rgba(14,23,38,0.04)]`.

## Spacing
- Section padding `py-16 md:py-24`.
- Card padding `p-6 md:p-8`.
- Hero padding `pt-20 pb-24 md:pt-28 md:pb-32`.

## Component Conventions
- **Buttons**:
  - Primary: `bg-accent text-white hover:bg-accent-hover rounded-lg px-6 py-3 font-semibold transition-colors`.
  - Secondary: `bg-white text-ink border border-hairline hover:border-hairline-hover rounded-lg px-6 py-3 font-semibold`.
  - Ghost on dark: `text-white border border-white/30 hover:bg-white/10 rounded-lg`.
- **Icon containers**: `w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center`.
- **Badges/Pills**: `inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold`.
- **Dividers**: `border-t border-hairline`.
- **Form fields**: `border border-hairline rounded-lg px-4 py-3 text-ink bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none`.
- **Links**: `text-accent hover:text-accent-hover font-medium`.

## Iconography
- Use `lucide-react` line icons only.
- Common icons: `Globe2`, `Factory`, `ShieldCheck`, `Truck`, `Search`, `ClipboardCheck`, `PackageCheck`, `MessageSquare`, `CheckCircle2`, `ArrowRight`, `Quote`, `Mail`, `Phone`, `MapPin`, `FileText`, `Layers`, `BadgeCheck`, `CircleDot`.

## Imagery
- All hero/feature photography uses `data-strk-bg` and `data-strk-img` referencing nearby text IDs.
- Visuals must show: factory floor, QC inspection, shipping container/port, supplier meetings, handshakes, product samples. Avoid generic stock clichés.
- All images use proper aspect ratios, no distortion.

## Tone of Voice
- Direct, no hype, no "best in the world" claims.
- Sentences are short and operational.
- Numbers and process steps are preferred over adjectives.
- Always state what is delivered, when, and how.

## Do's
- Use a consistent navy/white/blue palette across all pages.
- Show real-world visuals (factory, QC, shipping) with contextual text.
- Keep hero copy to 1 headline + 1 subline + 1 primary CTA + optional secondary.
- Use badges and small caps for trust signals.
- Surface the inquiry form CTA on every page.

## Don'ts
- Do not use red as a brand color.
- Do not use emoji.
- Do not stack multiple competing CTAs above the fold.
- Do not use pure black (#000) text.
- Do not use animated gradients or glassmorphism.
- Do not make exaggerated claims ("#1 in China", "guaranteed lowest price").
- Do not use low-contrast text on tinted backgrounds.
