# SSourcing China - Design Guidelines

## Visual Style
Professional, trustworthy, international B2B sourcing website. Clean layout with clear hierarchy. No exaggerated claims. Practical and direct tone.

## Typography
- **Font**: Inter (Google Webfont)
- **Headings**: font-weight 700-800, tracking tight
- **Body**: font-weight 400, line-height 1.6
- **Small/Labels**: font-weight 500, tracking wide

## Colors
- **Primary**: Deep navy blue `#1e56a0` — trust, professionalism, B2B authority
- **Primary Dark**: `#15407d` — hover states, emphasis
- **Primary Light**: `#eff6ff` — backgrounds, subtle highlights
- **Accent**: Warm amber `#d4710a` — CTAs, highlights, action buttons
- **Accent Hover**: `#b85c08`
- **Neutral Text**: `#1e293b` — body text
- **Neutral Secondary**: `#475569` — secondary text, descriptions
- **Neutral Light**: `#94a3b8` — muted text, placeholders
- **Background**: `#ffffff` — main background
- **Section Alt**: `#f8fafc` — alternating section backgrounds
- **Border**: `#e2e8f0` — subtle borders, dividers

## Spacing
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Element gaps: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Cards: `rounded-lg border border-neutral-200 shadow-sm`
- Buttons: `rounded-md` for standard, `rounded-lg` for hero CTA
- Hover shadows: `shadow-md` on card hover
- No heavy shadows, keep it clean and professional

## Buttons
- **Primary CTA**: `bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg`
- **Secondary**: `bg-primary-500 hover:bg-primary-600 text-white font-medium px-5 py-2.5 rounded-md`
- **Outline**: `border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-medium px-5 py-2.5 rounded-md`

## Cards
- White background, subtle border, light shadow
- Icon + title + description pattern
- Hover: slight shadow increase, no dramatic transforms

## Images
- Use `data-strk-img` for factory, QC, shipping, warehouse visuals
- Ratios: `16x9` for hero/backgrounds, `4x3` for cards, `3x2` for features
- Professional, realistic imagery — factories, inspection, containers, logistics

## Do's
- Use ample whitespace between sections
- Keep text concise and scannable
- Use icons from Lucide React for service/process steps
- Alternate section backgrounds (white / neutral-50)
- Mobile-first responsive design
- Clear CTA buttons with contrasting accent color

## Don'ts
- Don't use dark backgrounds with dark text
- Don't use exaggerated marketing language
- Don't overcrowd sections with too many elements
- Don't use decorative gradients or flashy animations
- Don't use generic stock photo queries — be specific about sourcing/QC/shipping context
