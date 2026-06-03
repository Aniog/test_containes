# Design System

## Color Palette
- Primary: indigo-600 (#4f46e5) — buttons, active states, accents
- Primary hover: indigo-700
- Background: slate-100 (#f1f5f9) — page background
- Surface: white — cards, panels
- Border: slate-200 (#e2e8f0)
- Text primary: slate-800 (#1e293b)
- Text secondary: slate-500 (#64748b)
- Text muted: slate-400 (#94a3b8)
- Success/completed: emerald-500 (#10b981)
- Danger: red-500 (#ef4444)

## Typography
- Font: Inter (Google Fonts)
- Heading: text-2xl font-bold text-slate-800
- Body: text-sm text-slate-700
- Muted: text-xs text-slate-400

## Spacing & Layout
- Page padding: px-4 py-8 (mobile), max-w-xl mx-auto (centered)
- Card: rounded-xl shadow-sm border border-slate-200 bg-white p-6
- Gap between items: gap-2 or gap-3

## Borders & Shadows
- Card shadow: shadow-sm
- Input focus: ring-2 ring-indigo-500 outline-none
- Rounded: rounded-lg (inputs, buttons), rounded-xl (cards)

## Buttons
- Primary: bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg px-4 py-2 text-sm font-medium
- Ghost/secondary: text-slate-500 hover:text-slate-700 hover:bg-slate-100
- Danger: text-red-400 hover:text-red-600

## Tabs
- Active tab: text-indigo-600 border-b-2 border-indigo-600 font-medium
- Inactive tab: text-slate-500 hover:text-slate-700

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use consistent spacing (multiples of 4px via Tailwind)
- Ensure all text is readable against its background

## Don'ts
- No hardcoded hex colors in JSX — use Tailwind named classes
- No inline styles
- No magic pixel values
