# SSourcing China Design System

## Brand direction
A professional B2B industrial website for overseas buyers who need a dependable China sourcing partner. The visual style should feel international, practical, and trustworthy rather than flashy or salesy.

## Core design principles
- Use a calm blue-led palette with neutral backgrounds and strong contrast.
- Prioritize clear information hierarchy, generous spacing, and readable body copy.
- Combine clean corporate layout with realistic operations visuals: factory floors, supplier verification, product inspections, packaging, containers, and shipping coordination.
- Keep CTAs visible but not aggressive.
- Present credibility through structure, facts, process clarity, and case-study storytelling.

## Typography
- Primary font: Inter
- Heading style: semibold to bold, tight tracking, balanced line height.
- Body style: medium contrast, relaxed line height.
- Suggested Tailwind patterns:
  - H1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
  - H2: `text-3xl md:text-4xl font-semibold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
  - Body large: `text-lg leading-8 text-slate-600`
  - Body: `text-base leading-7 text-slate-600`
  - Eyebrow: `text-sm font-semibold uppercase tracking-[0.2em] text-blue-700`

## Color system
Use Tailwind semantic colors only.
- Page background: `bg-slate-50`
- Primary surface: `bg-white`
- Secondary surface: `bg-slate-900`
- Accent tint: `bg-blue-50`
- Primary text: `text-slate-900`
- Secondary text: `text-slate-600`
- Muted text: `text-slate-500`
- Primary CTA: `bg-blue-700 text-white hover:bg-blue-800`
- Secondary CTA: `bg-white text-slate-900 border border-slate-300 hover:bg-slate-100`
- Borders: `border-slate-200`

## Layout and spacing
- Standard content width: `max-w-7xl`
- Reading width for long text: `max-w-3xl`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Rounded corners: `rounded-2xl` for main cards and sections, `rounded-xl` for smaller cards.
- Use subtle shadows only: `shadow-sm` or `shadow-lg` with restrained usage.

## Component style
- Navigation: white background with thin border, sticky, clean spacing.
- Hero: split layout with strong headline, concise proof points, primary CTA, secondary CTA, and one large industrial visual panel.
- Cards: white cards on slate background, explicit foreground colors, consistent icon treatment.
- Process/timeline sections: structured and easy to scan.
- Forms: white fields, dark readable labels, clear focus rings, practical helper copy.
- Case studies: measurable but believable results, no exaggerated promises.

## Image direction
- Prefer realistic operational imagery over generic corporate teams.
- Show factories, product checks, packaging tables, cartons, shipping containers, loading, sample reviews, supplier meetings, and manufacturing detail shots.
- Avoid lifestyle, abstract, or over-staged office imagery.

## Do
- Use explicit foreground colors on all surfaces.
- Maintain desktop multi-column layouts on larger screens.
- Keep CTAs repeated in logical places.
- Emphasize clarity, trust, and process.

## Don’t
- Do not use neon colors, gradients that reduce readability, or overpromising copy.
- Do not cram sections too tightly.
- Do not use weak-contrast text on tinted or dark backgrounds.
- Do not make the site feel like consumer ecommerce.