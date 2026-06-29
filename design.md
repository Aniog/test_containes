# ARTITECT MACHINERY Design System

## Brand direction
ARTITECT MACHINERY should feel elegant, precise, and industrial without becoming cold or difficult to use. The design should communicate premium engineering, reliability, and clarity.

## Visual language
- Overall mood: refined industrial, confident, modern, spacious
- Layout style: clean sections with strong alignment and generous whitespace
- Content density: concise and readable, never crowded
- Border treatment: soft but defined, using thin borders and subtle shadows
- Surface style: layered light surfaces with dark feature panels for emphasis

## Color system
Use Tailwind semantic color families instead of arbitrary hex values.
- Page background: `bg-stone-50`
- Main surface: `bg-white`
- Dark premium sections: `bg-slate-950`
- Secondary surfaces: `bg-slate-100`, `bg-stone-100`
- Primary text on light surfaces: `text-slate-950`
- Secondary text on light surfaces: `text-slate-600`
- Primary text on dark surfaces: `text-white`
- Secondary text on dark surfaces: `text-slate-300`
- Accent color: `amber-500` / `amber-600`
- Accent soft background: `bg-amber-100`

## Typography
- Font family: Inter
- Headings: bold, compact, high contrast, e.g. `font-semibold` to `font-bold`
- Body text: clear and calm, e.g. `text-base leading-7`
- Eyebrow labels: uppercase with tracking, e.g. `text-xs font-semibold uppercase tracking-[0.24em]`

## Spacing and sizing
- Use section spacing such as `py-16 md:py-24`
- Use content containers like `mx-auto max-w-7xl px-6 lg:px-8`
- Use consistent gaps: `gap-6`, `gap-8`, `gap-10`, `gap-12`
- Card padding: `p-6 md:p-8`
- Corner radius: `rounded-3xl` for major surfaces, `rounded-2xl` for cards, `rounded-full` for pills

## Components
- Buttons: solid dark primary button and light secondary button with strong readable text
- Cards: white or slate surfaces with explicit foreground colors
- Feature stats: bold numbers with compact supporting copy
- Product panels: image-led or icon-led cards with short capability descriptions

## Imagery
- Use machinery and industrial fabrication visuals sparingly and purposefully
- Prefer one strong hero visual and one supporting product/plant visual
- If using stock-image tags, derive queries from nearby text content IDs

## Do
- Keep all text readable against every background
- Use strong hierarchy between headline, subheadline, and detail copy
- Maintain a premium B2B presentation style
- Make the mobile layout feel simple while keeping desktop layouts expansive

## Do not
- Do not use neon or overly playful colors
- Do not clutter sections with too many cards in one row on mobile
- Do not rely on faint text for important product details
- Do not use arbitrary hex values or inconsistent spacing patterns
