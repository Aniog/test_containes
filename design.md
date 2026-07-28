# SSourcing China Design System

## Visual direction
Clean, trustworthy, international B2B. The site should feel practical and grounded, with a China sourcing, factory verification, QC inspection, production follow-up, and shipping coordination theme.

## Colors
- Primary navy: `brand-navy` (`#10243E`) for headers, hero, major text, and footer.
- Primary blue: `brand-blue` (`#1F5E9E`) for links, CTA accents, icons, and active navigation.
- Action amber: `brand-amber` (`#D88A24`) for the main quote CTA and important highlights.
- Soft background: `brand-mist` (`#F3F7FA`) for section backgrounds.
- Border color: `brand-border` (`#D9E2EC`) for cards, dividers, form controls.
- Body text: `brand-slate` (`#334155`) and muted text `brand-muted` (`#64748B`).

## Typography
Use Inter from Google Fonts. Headings should be concise and strong with tight line-height. Body copy should be readable, professional, and practical.
Example classes: `font-sans`, `text-4xl md:text-6xl`, `font-semibold`, `leading-tight`, `text-brand-slate`.

## Layout and spacing
- Use generous section spacing: `py-16 md:py-24`.
- Max width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Desktop layouts should use multi-column grids; mobile should stack cleanly.
- Cards should use clear padding: `p-6 md:p-8`.

## Components
- Cards: white background, subtle border, soft shadow, rounded corners (`rounded-2xl border border-brand-border bg-white shadow-sm`).
- Buttons: clear primary/secondary treatments, rounded but businesslike (`rounded-full px-6 py-3 font-semibold`).
- Forms: explicit labels, readable placeholders, strong focus states, no low-contrast text.
- Navigation: sticky top bar with white background and subtle border.

## Imagery
Use realistic factory, quality inspection, supplier meeting, warehouse, cargo, and shipping visuals. Avoid staged luxury imagery or exaggerated claims. Use stock image tags with contextual text references.

## Do's
- Keep copy specific and practical.
- Use trust signals such as supplier screening, inspection checklists, production follow-up, and shipping coordination.
- Make CTA paths obvious.

## Don'ts
- Do not use exaggerated promises such as “guaranteed best price” or “risk-free sourcing”.
- Do not use low contrast text or decorative elements that reduce readability.
- Do not use random hardcoded colors in component class strings; use named Tailwind colors.
