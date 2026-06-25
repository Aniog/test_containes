# ARTITECT MACHINERY Design System

## Brand direction
ARTITECT MACHINERY should feel precise, elegant, and trustworthy. The visual language should balance industrial strength with a premium, approachable buying experience.

## Typography
- Primary font: Inter
- Headings: bold, tight tracking, clear hierarchy
- Body text: neutral, readable, medium line height
- Example Tailwind classes:
  - Display heading: `text-4xl md:text-6xl font-semibold tracking-tight`
  - Section heading: `text-3xl md:text-4xl font-semibold tracking-tight`
  - Body: `text-base md:text-lg leading-7`
  - Label / eyebrow: `text-xs md:text-sm uppercase tracking-[0.2em]`

## Color system
Use a refined slate and graphite base with warm metallic accents.
- Page background: soft off-white `bg-stone-50`
- Main surface: `bg-white`
- Deep brand surface: `bg-slate-950`
- Secondary surface: `bg-slate-900`
- Text on light surfaces: `text-slate-950`
- Supporting text: `text-slate-600`
- Text on dark surfaces: `text-white` and `text-slate-300`
- Accent color: muted gold / bronze feeling via `bg-amber-500`, `text-amber-500`, `border-amber-400`
- Soft accent surfaces: `bg-amber-50`, `bg-slate-100`

## Layout and spacing
- Use generous whitespace and strong section separation.
- Max content width: `max-w-7xl`
- Section rhythm: `py-16 md:py-24`
- Content gutters: `px-6 md:px-8`
- Card spacing: `p-6 md:p-8`
- Rounded corners: `rounded-3xl` for major panels, `rounded-2xl` for cards

## Component style
- Cards should feel polished and technical, with soft borders and subtle shadows.
- Preferred classes:
  - Main card: `rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]`
  - Dark panel: `rounded-3xl bg-slate-950 text-white`
  - Tag / pill: `rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm`
  - Primary button: `rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800`
  - Secondary button: `rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-950 hover:bg-slate-100`

## Imagery and illustration
- Prefer restrained industrial visuals, blueprint-like diagrams, metal textures, and refined machine silhouettes.
- Avoid crowded or overly colorful imagery.
- If using stock images, they should emphasize precision engineering, folding machinery, sheet metal production, and factory craftsmanship.

## Do
- Keep text contrast strong and explicit.
- Use balanced two-column desktop layouts where appropriate.
- Mix premium dark sections with bright content sections.
- Present technical information in a simple and scannable way.
- Make calls to action clear and calm.

## Don't
- Do not use neon accents or playful cartoon styling.
- Do not overcrowd the page with dense technical tables.
- Do not use low-contrast gray text on light surfaces.
- Do not rely on arbitrary hex values in JSX class strings.
- Do not make the desktop layout feel like a narrow mobile stack.
