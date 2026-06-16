# ARTITECT MACHINERY Design System

## Brand direction
Elegant industrial presentation with a premium, user-friendly feel. The site should feel precise, dependable, and modern rather than overly corporate or cold.

## Color system
Use Tailwind semantic palette names only.

- Primary background: `bg-slate-950`
- Secondary dark surfaces: `bg-slate-900`, `bg-slate-800`
- Light surfaces: `bg-slate-50`, `bg-white`
- Primary text on dark: `text-white`
- Secondary text on dark: `text-slate-300`, `text-slate-400`
- Primary text on light: `text-slate-900`
- Secondary text on light: `text-slate-600`, `text-slate-500`
- Accent: `amber-400`, `amber-500`, `amber-600`
- Borders: `border-slate-200`, `border-slate-700`, `border-amber-500/30`

## Typography
- Use Inter as the main font.
- Headlines: strong, clean, and spaced with classes like `font-semibold`, `tracking-tight`, `leading-tight`
- Eyebrows and labels: uppercase with `tracking-[0.2em]` avoided in code; prefer Tailwind preset like `tracking-[0.3em]` only if necessary. Default preference is `uppercase tracking-widest`.
- Body text: `text-sm`, `text-base`, or `text-lg` depending on hierarchy.

## Layout
- Maximum content width: `max-w-7xl`
- Section padding: `px-6 py-16 md:px-10 md:py-24`
- Rounded corners: `rounded-2xl` or `rounded-3xl`
- Shadows: subtle only, e.g. `shadow-sm`, `shadow-xl` with opacity utilities
- Desktop layouts should use balanced multi-column grids; mobile should stack cleanly.

## Components
- Buttons: solid dark or amber emphasis, use strong contrast and generous horizontal padding.
- Cards: clear borders, layered surfaces, readable foreground colors on every card.
- Product blocks: combine short descriptive copy, bullets, and concise value statements.
- Stats and trust panels should feel structured and easy to scan.

## Imagery
- If imagery is added later, favor clean sheet-metal machinery, factory precision, folded metal profiles, and close-up manufacturing details.
- Avoid cluttered or generic stock office imagery.

## Do
- Keep the UI calm, premium, and trustworthy.
- Make product names easy to scan.
- Use consistent spacing and alignment.
- Ensure every text element has strong contrast against its surface.

## Do not
- Do not use neon or playful colors.
- Do not use cramped mobile spacing.
- Do not rely on low-contrast muted text for important details.
- Do not create oversized paragraphs; keep industrial copy clear and concise.
