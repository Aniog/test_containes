# SSourcing China Design System

## Brand direction
Professional B2B website for a China-based sourcing agent. The interface should feel clean, trustworthy, practical, international, and easy for overseas buyers to scan. Avoid exaggerated claims and avoid consumer-style decoration.

## Typography
- Primary font: Inter from Google Fonts.
- Headings: strong, compact, and businesslike using `font-semibold` or `font-bold` with tight tracking.
- Body copy: clear and readable with `text-base` or `text-lg`, generous line-height, and muted but high-contrast color.
- Use sentence-case labels and practical wording.

## Colors
Use named Tailwind colors, not arbitrary hex values.
- Page background: `bg-slate-50` or `bg-white`.
- Main text: `text-slate-950`.
- Body text: `text-slate-700`.
- Muted text: `text-slate-600`, never lighter for important content.
- Primary brand: deep blue using `bg-blue-700`, `text-blue-700`, hover `bg-blue-800`.
- Secondary accent: controlled amber for trust markers using `bg-amber-100`, `text-amber-800`, `border-amber-200`.
- Professional surfaces: `bg-white`, `bg-slate-900`, `bg-blue-950`, with explicit readable foreground colors.

## Layout and spacing
- Use a centered page container with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Desktop sections should use multi-column layouts where appropriate, not mobile stacking.
- Mobile sections can stack with `grid-cols-1`, shifting to `lg:grid-cols-*` on larger screens.
- Section padding: `py-16 lg:py-24`.
- Cards: `rounded-2xl`, `border border-slate-200`, `bg-white`, `shadow-sm`, with comfortable padding.

## Components
- Navigation: sticky or top header, clean white surface, visible CTA button.
- CTA buttons: solid deep blue for primary actions, white or outline for secondary actions.
- Forms: clear labels, white fields, slate borders, visible focus ring, no backend submission in frontend-only stage.
- Badges: concise, readable, and high contrast.
- FAQ: simple cards or rows with readable text.

## Images
- Use Strikingly stock image tags for realistic factory, QC, supplier verification, production follow-up, warehouse, and shipping visuals.
- Avoid generic lifestyle photos unless relevant to international trade.
- Use overlays only when text contrast remains strong.

## Do's
- Make inquiry paths obvious: repeat “Get a Free Sourcing Quote” near hero, mid-page, and contact.
- Show practical services and process steps.
- Emphasize supplier verification, factory audits, QC inspection, production follow-up, and shipping coordination.
- Keep all text explicitly readable against its background.

## Don'ts
- Do not use low-contrast gray text on blue/dark surfaces.
- Do not make claims such as “guaranteed lowest price” or “risk-free”.
- Do not add backend integrations or external API calls in this frontend stage.
