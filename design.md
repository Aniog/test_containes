# SSourcing China Visual Design System

## Brand impression
SSourcing China should feel clean, trustworthy, international, and practical. The website should support B2B buyers who need sourcing, supplier verification, quality inspection, production follow-up, and shipping coordination in China.

## Color system
- Primary navy: `brand-navy` for headers, navigation, and key text. Example: `text-brand-navy`, `bg-brand-navy`.
- Deep blue: `brand-blue` for important actions and highlights. Example: `bg-brand-blue`, `text-brand-blue`.
- Professional light blue: `brand-sky` for soft accents and section backgrounds. Example: `bg-brand-sky`.
- Warm amber: `brand-amber` for secondary highlights, metrics, and callouts. Example: `text-brand-amber`.
- Slate neutrals: use Tailwind slate classes for body text, borders, and surfaces.
- White and near-white surfaces: use `bg-white`, `bg-slate-50`, and `bg-brand-sky` with explicit dark foreground text.

## Typography
- Use Inter as the main font from Google Fonts.
- Headlines should be clear, confident, and compact with tracking tightened slightly. Example: `text-4xl md:text-6xl font-semibold tracking-tight`.
- Body copy should be readable and practical. Example: `text-base md:text-lg leading-7 text-slate-600`.
- Avoid exaggerated wording and overly salesy phrases.

## Layout and spacing
- Use a max-width container around `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Use generous vertical rhythm: `py-16 md:py-24` for major sections.
- Use responsive grids: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`.
- Cards should use `rounded-2xl border border-slate-200 bg-white shadow-sm` with readable `text-slate-900`.

## Components
- Primary buttons: `rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-navy`.
- Secondary buttons: `rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue`.
- Badges: `rounded-full bg-brand-sky px-3 py-1 text-xs font-semibold text-brand-blue`.
- Forms: white cards with clear labels, dark text, visible borders, and helpful status messages.

## Imagery
- Use realistic factory, QC, logistics, shipping, warehouse, and product inspection visuals.
- Prefer stock image tags with nearby text references through `data-strk-img` and `data-strk-bg`.
- Avoid abstract or exaggerated imagery.

## Do's and don'ts
- Do keep text contrast high on every surface.
- Do use practical B2B language and precise service descriptions.
- Do make CTAs prominent but not aggressive.
- Do not use low-contrast gray text on blue or dark surfaces.
- Do not use arbitrary hardcoded hex colors in JSX class strings.
- Do not make unsupported claims such as guaranteed lowest price or risk-free sourcing.
