# SSourcing China Design System

## Brand position
SSourcing China should feel like a practical, reliable B2B sourcing partner for overseas buyers. The design should communicate factory-floor competence, documentation discipline, quality-control rigor, and international trade experience without exaggerated claims.

## Visual style
- Clean, modern, editorial B2B layout with generous whitespace and structured grids.
- Professional and trustworthy, using deep navy, slate, steel blue, warm amber accents, and white card surfaces.
- Use realistic factory, quality inspection, warehouse, and shipping visuals through the Strikingly stock image tagging system.
- Avoid flashy gradients, cartoon illustrations, exaggerated badges, or consumer-style hype.

## Typography
- Primary font: Inter via Google Fonts.
- Headlines: bold, tight leading, deep navy text. Example Tailwind classes: `text-4xl md:text-6xl font-bold tracking-tight text-slate-950`.
- Body text: clear and practical. Example: `text-base md:text-lg leading-7 text-slate-600`.
- Labels and eyebrow text: uppercase or small semibold text in steel blue/slate. Example: `text-xs font-semibold uppercase tracking-[0.2em] text-blue-700`.

## Color tokens and Tailwind guidance
Use Tailwind semantic colors instead of arbitrary hex values in JSX:
- Page background: `bg-slate-50`, `bg-white`.
- Primary text: `text-slate-950`.
- Body text: `text-slate-600` and `text-slate-700`.
- Dark sections: `bg-slate-950 text-white`, with secondary text `text-slate-300`.
- Primary CTA: `bg-blue-700 text-white hover:bg-blue-800`.
- Secondary CTA: `border border-slate-300 text-slate-900 hover:bg-slate-100`.
- Accent: `text-amber-600`, `bg-amber-100`, `border-amber-200`.
- Cards: `bg-white border border-slate-200 shadow-sm`.

## Layout and spacing
- Use centered max-width containers: `mx-auto max-w-7xl px-6 lg:px-8`.
- Sections should use generous vertical padding: `py-16 md:py-24`.
- Cards should have rounded corners and subtle borders: `rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`.
- Desktop layouts should use multi-column grids where appropriate; mobile layouts should stack cleanly.

## Components
- Header: sticky or static clean navigation with clear CTA.
- Hero: split layout with headline, proof points, CTAs, and a realistic sourcing/factory visual.
- Service/process/product/case cards: consistent card treatments, readable text, and practical details.
- Contact/inquiry form: prominent, easy to scan, with explicit readable labels and states.
- FAQ: simple accordion-like stacked cards or readable Q&A list.

## Do
- Keep copy specific and practical.
- Use strong contrast for all text.
- Make CTAs visible and repeated at key decision points.
- Use icons sparingly to support scanning.

## Don't
- Do not use vague hype such as “guaranteed best supplier” or “lowest price always”.
- Do not use low-contrast text or invisible placeholders.
- Do not hardcode arbitrary hex colors in JSX; use Tailwind classes.
- Do not overuse stock images; place them only where they support sourcing, QC, factory, and logistics context.
