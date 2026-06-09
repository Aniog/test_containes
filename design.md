# ARTITECT MACHINERY Design System

## Brand direction
ARTITECT MACHINERY should feel elegant, precise, and dependable. The visual language should combine industrial confidence with a refined presentation that makes complex machinery feel approachable.

## Typography
- Use Inter for all interface and marketing text.
- Headlines should feel confident and architectural: `text-4xl md:text-6xl font-semibold tracking-tight`
- Section headings should be compact and clear: `text-3xl md:text-4xl font-semibold tracking-tight`
- Body text should remain highly readable: `text-base md:text-lg leading-7`
- Supporting labels can use subtle uppercase tracking: `text-xs md:text-sm uppercase tracking-widest`

## Color palette
Use Tailwind semantic-style utility choices based on slate, zinc, stone, white, and amber.
- Page background: `bg-stone-950`
- Surface dark: `bg-slate-900`
- Surface light: `bg-stone-100`
- Primary text on dark: `text-stone-50`
- Secondary text on dark: `text-stone-300`
- Primary text on light: `text-slate-900`
- Secondary text on light: `text-slate-600`
- Accent: `bg-amber-400`, `text-amber-300`, `border-amber-400/40`
- Dividers: `border-white/10` on dark and `border-slate-200` on light

## Layout and spacing
- Use wide but controlled content width: `max-w-7xl mx-auto px-6 md:px-8`
- Use generous vertical rhythm: `py-16 md:py-24`
- Cards should have breathing room: `rounded-3xl p-6 md:p-8`
- Use 1 column on mobile, 2 to 4 columns on desktop depending on content

## Components and surfaces
- Hero sections can use layered dark backgrounds with subtle borders and blur: `rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm`
- Information cards should use clear contrast and subtle depth: `border border-white/10 bg-white/5 shadow-2xl shadow-black/10`
- Light sections can use `bg-stone-100` with explicit `text-slate-900`
- Buttons should feel solid and simple, not playful

## Imagery
- Use stock machinery imagery sparingly and only in high-impact sections.
- Prefer one strong hero image and one supporting product image grid.
- Queries should reference nearby product and brand text using `data-strk-img` or `data-strk-bg`.

## Do
- Keep every visible text color explicit and high-contrast.
- Use elegant spacing, refined borders, and compact copy blocks.
- Make industrial information easy to scan.
- Maintain a user-friendly hierarchy with clear CTA sections.

## Don’t
- Do not use neon colors or playful gradients.
- Do not use low-contrast gray text on gray backgrounds.
- Do not make desktop layout look like a stacked mobile page.
- Do not overload the page with too many visual effects.
