# Design System — 数独游戏 (Sudoku Game)

## Visual Style
Clean, minimal, light-mode puzzle game aesthetic. Inspired by modern mobile puzzle apps.
White cards on a soft blue-gray gradient background. Crisp grid lines with bold 3x3 box borders.

## Colors
- Background: `bg-gradient-to-br from-slate-50 to-blue-50`
- Surface/Card: `bg-white`
- Primary accent: `bg-blue-600` / `text-blue-600`
- Selected cell: `bg-blue-400`
- Related cells: `bg-blue-50`
- Same-number highlight: `bg-blue-100`
- Conflict/error: `bg-red-100` / `text-red-500`
- Completed state: `bg-emerald-50` / `text-emerald-700`
- Hint button: `bg-amber-50` / `text-amber-600`

## Difficulty Colors
- Easy: `text-green-600` / `bg-green-100`
- Medium: `text-yellow-600` / `bg-yellow-100`
- Hard: `text-orange-600` / `bg-orange-100`
- Expert: `text-red-600` / `bg-red-100`

## Typography
- Font: Inter (Google Fonts)
- Logo/brand: `font-black text-xl`
- Cell numbers (original): `text-xl font-bold text-gray-800`
- Cell numbers (user): `text-xl font-semibold text-blue-600`
- Cell notes: `text-[9px] text-gray-500`
- UI labels: `text-sm font-medium`
- Timer: `font-mono font-semibold text-sm`

## Spacing & Layout
- Header: `px-4 py-3`
- Stats bar: `px-4 py-2`
- Main content: `px-4 py-6 gap-6`
- Cell size: 52×52px
- Board border: `border-2 border-gray-700`
- Box dividers: `border-l-2 border-t-2 border-gray-700`
- Cell borders: `border border-gray-300`

## Components
- Buttons: `rounded-lg` with `border`, hover states, `active:scale-95` for number pad
- Modal: `rounded-2xl shadow-2xl` with backdrop blur
- Header logo: `rounded-xl bg-blue-600`
- Difficulty badge: `rounded-lg` with color-coded bg/text

## Do's
- Always show clear contrast between original (dark) and user-entered (blue) numbers
- Highlight selected cell prominently in blue
- Show conflicts in red immediately
- Use `font-mono` for the timer
- Keep the board centered on all screen sizes

## Don'ts
- Don't use dark mode — this is a light-only game
- Don't use very small text for cell numbers (minimum text-xl)
- Don't use generic gray for user-entered numbers — use blue to distinguish from originals
- Don't add heavy shadows to the board — keep it clean
