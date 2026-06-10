# SSourcing China — Visual Design System

## Brand Personality
Professional, trustworthy, international B2B. The visual language should feel like a long-established China trading company that has matured into a modern sourcing partner: clean, confident, calm. No flashy gradients, no exaggerated claims, no marketing gimmicks.

## Color Palette
- **Navy Primary** (`#0E2A47` → `slate-900/950`): Top bar, headings, primary text. Conveys stability and international trade heritage.
- **Ink Black** (`#0A1626`): Body copy on light surfaces.
- **Steel Blue** (`#1E3A5F` → `blue-900`): Secondary buttons, hover states, links.
- **Warm Accent** (`#C8A45C` → custom amber): Sparing use for primary CTAs, key highlights, badge markers. Reads as a "trust seal" tone, not a call-to-action shouting color.
- **Surface** (`#FFFFFF`): Cards, content panels.
- **Page Background** (`#F5F6F8` → `slate-50`): Page-level background to soften the canvas.
- **Subtle Border** (`#E2E5EA`): Card outlines, dividers, form field borders.
- **Muted Text** (`#5B6473`): Helper text, metadata.
- **Success** (`#1F8A5A`), **Warning** (`#B45309`), **Error** (`#B91C1C`): Functional colors only.

Tailwind tokens: extend with `primary: { 50..900 }` and `accent: { 400..700 }` based on the hex values above.

## Typography
- **Font**: Inter (already loaded via Google Fonts in `index.html`). Use weights 400, 500, 600, 700.
- **Display / H1**: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900`
- **H2 Section Heading**: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
- **H3 Card Heading**: `text-xl font-semibold text-slate-900`
- **Body Lead**: `text-lg text-slate-600 leading-relaxed`
- **Body**: `text-base text-slate-700 leading-relaxed`
- **Caption / Eyebrow**: `text-xs uppercase tracking-[0.18em] font-semibold text-accent-600`
- **Numbers / Stats**: `text-4xl font-bold text-slate-900`

## Layout & Spacing
- **Max width**: `max-w-7xl` for page containers, `max-w-6xl` for prose.
- **Section vertical rhythm**: `py-20 md:py-28` for major sections, `py-12 md:py-16` for inner subsections.
- **Card padding**: `p-6 md:p-8` for content cards.
- **Grid gaps**: `gap-6` (mobile), `gap-8` (desktop).
- **Mobile**: 4-column → 2-column → 1-column responsive. Never let content overflow on small screens.

## Visual Elements
- **Cards**: White background, 1px `border-slate-200`, `rounded-xl`, `shadow-sm` on hover with `hover:shadow-md hover:-translate-y-0.5 transition`.
- **Buttons**:
  - Primary: `bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md shadow-sm transition`.
  - Secondary: `bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-md`.
  - Outline: `border border-slate-300 hover:border-slate-900 text-slate-900 bg-white`.
- **Icons**: Lucide React, 20-24px, `text-slate-700` by default. Accent icons use `text-accent-600`.
- **Badges**: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700` or accent variant for highlights.
- **Form fields**: `border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 rounded-md px-3 py-2 w-full bg-white text-slate-900 placeholder:text-slate-400`.

## Photography
Use the strk-img system (data-strk-img / data-strk-bg) for all hero and section imagery. Subject themes:
- China factory floors with workers in uniform
- Quality-control inspections (hands with calipers, sample review)
- Shipping containers and ports
- Office / handshake scenes for trust
- Product close-ups (electronics, apparel, packaging)

Aspect ratios: `16x9` for hero, `4x3` for service cards, `1x1` for team/case studies, `3x2` for blog thumbnails.

## Iconography Rules
- Use Lucide React outline icons, 1.5px stroke.
- Never use emoji in place of icons.
- Service icons sit inside a `w-12 h-12 rounded-lg bg-slate-100` wrapper, with the icon in `text-accent-600`.

## Do's
- Use generous whitespace.
- Pair every section heading with a short eyebrow text and a 1–2 sentence lead.
- Show real-looking numbers, process steps, and product categories — no vague "best quality" claims.
- Use clear hierarchy: navy heading, slate body, accent for action.
- Provide an inquiry form on every page (footer or sidebar CTA).

## Don'ts
- No purple/pink gradients, no "AI glow" effects.
- No "🚀 Get started in 30 seconds" tone. Keep language practical.
- No stock photo of a Western model in a hard hat.
- No rainbow color blocks.
- No low-contrast text. Always pair foreground/background explicitly.
