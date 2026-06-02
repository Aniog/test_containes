# Design System – Sudoku Challenge Game

## Color Palette
- Background: `bg-slate-900` (#0f172a)
- Surface / Card: `bg-slate-800` (#1e293b)
- Surface elevated: `bg-slate-700` (#334155)
- Primary accent: `bg-blue-500` / `text-blue-400` (#3b82f6)
- Secondary accent: `bg-amber-400` / `text-amber-300` (#fbbf24)
- Success: `text-emerald-400` (#34d399)
- Error / conflict: `text-red-400` (#f87171)
- Muted text: `text-slate-400`
- Body text: `text-slate-100`

## Typography
- Font family: Inter (Google Fonts)
- Headings: `font-bold text-slate-100`
- Body: `text-sm text-slate-300`
- Numbers in grid: `text-xl font-bold`
- Given (clue) numbers: `text-slate-100 font-bold`
- User-entered numbers: `text-blue-400 font-semibold`
- Note numbers: `text-xs text-slate-400`

## Grid / Board
- Cell size: `w-10 h-10` (40px) on desktop, `w-9 h-9` on mobile
- Cell border: `border border-slate-600`
- Box border (3x3): `border-2 border-slate-400`
- Selected cell: `bg-blue-600`
- Highlighted (same row/col/box): `bg-slate-700`
- Same number highlight: `bg-blue-900`
- Conflict cell: `bg-red-900/50`
- Given cell: cursor not-allowed, `bg-slate-800`
- Empty user cell: `bg-slate-800 hover:bg-slate-700`

## Number Pad
- Button: `w-12 h-12 rounded-xl bg-slate-700 text-slate-100 text-xl font-bold hover:bg-blue-600`
- Active/pressed: `bg-blue-500`

## Buttons
- Primary: `bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2 font-semibold`
- Secondary: `bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-xl px-4 py-2`
- Icon button: `p-2 rounded-lg bg-slate-700 hover:bg-slate-600`

## Level Card
- `bg-slate-800 rounded-2xl p-4 border border-slate-700 hover:border-blue-500`
- Completed: `border-emerald-500`
- Locked: `opacity-50 cursor-not-allowed`

## Spacing
- Section padding: `p-4` or `p-6`
- Gap between grid cells: `gap-0` (borders handle spacing)
- Gap between UI sections: `gap-4` or `gap-6`

## Do's
- Always use dark backgrounds with light text
- Use blue as the primary interactive color
- Use amber/yellow for timers and scores
- Keep the grid centered on screen
- Use rounded corners on all interactive elements

## Don'ts
- Never use white backgrounds
- Never use black text on dark surfaces
- Don't use more than 3 accent colors at once
- Don't make cells too small on mobile (min 36px)
