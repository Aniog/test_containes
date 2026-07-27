# SSourcing China — Design System

## Brand Positioning
A professional B2B China sourcing agent. International buyers (US, EU, UK, AU, MENA) sourcing consumer goods, industrial parts, packaging, and OEM/ODM products from Chinese factories.

Visual goals: trustworthy, clean, international, professional. NOT flashy, NOT exaggerated, NOT Alibaba-style marketplace noise.

## Tone
Practical, clear, confident, calm. Plain language. No superlatives or unverifiable claims ("#1", "best in China", "guaranteed lowest price"). Use real operational language: "supplier verification", "on-site inspection", "pre-shipment QC", "production follow-up", "logistics coordination".

## Color Tokens (mapped in tailwind.config.js)
- `navy` (primary): #0E2A47 — deep navy for headers, navigation, hero, footer
- `navy-soft` #1A3A5C — slightly lighter for hover, borders on dark surfaces
- `accent` (CTA): #C2410C — burnt orange used ONLY for primary CTAs and accent highlights
- `accent-soft` #EA580C — hover state for accent
- `surface` #FFFFFF — card and form backgrounds
- `page` #F7F8FA — page background
- `ink-900` #0F172A — primary text
- `ink-700` #334155 — body text
- `ink-500` #64748B — secondary text
- `ink-400` #94A3B8 — placeholders, disabled
- `border-soft` #E2E8F0 — card / divider borders
- `success` #15803D — confirmation states
- `warning` #B45309 — warning states

## Typography
- Font family: `Inter` (already loaded from Google Fonts in index.html)
- Headings: `font-semibold` or `font-bold`, tight tracking
- Body: `font-normal`, `leading-relaxed` (1.6+)
- H1: text-4xl md:text-5xl lg:text-6xl, font-semibold, tracking-tight
- H2: text-3xl md:text-4xl, font-semibold
- H3: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg
- Small / caption: text-sm

## Layout
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical rhythm: `py-16 md:py-20 lg:py-24`
- Cards: `rounded-2xl border border-slate-200 bg-white shadow-sm` (subtle, professional)
- Buttons: `rounded-lg` for primary, `rounded-md` for secondary
- Spacing scale: use Tailwind's default (4, 6, 8, 12, 16, 20, 24)

## Components Conventions
- Primary CTA: `bg-accent hover:bg-accent-soft text-white font-semibold px-6 py-3 rounded-lg`
- Secondary CTA: `bg-white text-navy border border-navy hover:bg-slate-50 font-semibold px-6 py-3 rounded-lg`
- Ghost link: `text-navy hover:text-accent font-medium`
- Section eyebrow: `uppercase text-xs tracking-widest text-accent font-semibold`
- Section title: `text-3xl md:text-4xl font-semibold text-ink-900`
- Section subtitle: `text-base md:text-lg text-ink-700 max-w-2xl`

## Do's
- Generous whitespace
- Restrained color use (navy + white + one accent)
- Subtle borders, never heavy shadows
- Real photography vibe (factory, container, QC, handshakes) via stock system
- Clear hierarchy, scannable content

## Don'ts
- No emoji as icons (use lucide-react)
- No rainbow gradients
- No stock-marketplace tile style
- No exaggerated badges, ribbons, or "100% guaranteed" claims
- No pure black text on pure white background — use ink-900
- No low-contrast text on colored backgrounds
