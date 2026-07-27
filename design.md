# SSourcing China — Design System

## Brand Personality
Clean, trustworthy, international B2B. Professional and practical — no exaggerated claims, no flashy gradients. The visual language should feel like a reliable operations partner: structured, precise, calm.

## Colors
- **Primary (navy)**: `primary` — deep navy blue (#1E3A5F family). Used for headings, footer, primary buttons, key accents. Conveys trust and professionalism.
  - Scale: primary-50 (#F0F5FA), primary-100 (#DCE7F2), primary-200 (#B9CFE5), primary-300 (#8FB0D2), primary-400 (#5D8ABA), primary-500 (#3E6DA3), primary-600 (#2E5688), primary-700 (#24456D), primary-800 (#1E3A5F), primary-900 (#16293F), primary-950 (#0F1D2F)
- **Accent (amber)**: `accent` — warm amber (#D97706 family). Used sparingly for CTAs, highlights, small badges. Signals action and energy without being loud.
  - Scale: accent-50 (#FFFBEB), accent-100 (#FEF3C7), accent-500 (#D97706), accent-600 (#B45309), accent-700 (#92400E)
- **Neutrals**: Use Tailwind `slate` scale for body text (slate-600/700), borders (slate-200), muted backgrounds (slate-50, slate-100).
- **Surfaces**: White cards on slate-50 page backgrounds. Navy (primary-900) footer and hero overlays.

## Typography
- **Font**: Inter (Google Fonts, loaded in index.html). Weights: 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold for hero headings).
- **Headings**: `font-bold text-slate-900` or white on dark. Hero H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`. Section H2: `text-3xl md:text-4xl font-bold tracking-tight`. Card H3: `text-lg font-semibold`.
- **Body**: `text-slate-600 leading-relaxed`, base size `text-base` or `text-lg` for lead paragraphs.
- **Eyebrow labels**: `text-xs font-semibold uppercase tracking-widest text-accent-600` above section headings.

## Layout & Spacing
- **Container**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- **Section padding**: `py-16 md:py-24`. Alternate white and slate-50 backgrounds between sections.
- **Grids**: services/products use `grid gap-6 md:grid-cols-2 lg:grid-cols-3`; trust points `lg:grid-cols-4`.

## Components
- **Buttons**:
  - Primary CTA: `bg-accent-500 text-white hover:bg-accent-600 font-semibold rounded-lg px-6 py-3 shadow-sm transition-colors`
  - Secondary: `border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 rounded-lg px-6 py-3 font-semibold`
  - On dark: `bg-white text-primary-900 hover:bg-primary-50`
- **Cards**: `rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow`
- **Badges/pills**: `rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700`
- **Icons**: Lucide, in `h-10 w-10 rounded-lg bg-primary-50 text-primary-600 p-2` containers, or simple `h-5 w-5` inline.

## Imagery
- Realistic factory, QC inspection, warehouse, and container/shipping photos via the strk-img system. Hero uses a dark navy overlay over a factory/logistics background image.
- Card images use ratio 4x3 or 3x2; hero backgrounds 16x9.

## Do's
- Do keep generous whitespace and consistent section rhythm.
- Do use the accent color sparingly — one CTA per viewport area.
- Do use real-looking data: metrics with units, named product categories, plausible case details.
- Do keep text contrast strong: slate-900/slate-600 on white, white/slate-300 on navy.

## Don'ts
- Don't use gradients, neon colors, or playful illustrations.
- Don't use low-contrast text (e.g. slate-400 on slate-100).
- Don't exaggerate claims ("#1", "best", "guaranteed") — keep tone factual.
- Don't hardcode hex values in class strings — use the named theme colors.
