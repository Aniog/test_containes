# Design System

## Color Palette
- **Primary**: Indigo `#6366f1` (Tailwind: `indigo-500`) — used for primary actions, checkboxes, focus rings
- **Primary Dark**: `#4f46e5` (Tailwind: `indigo-600`) — hover states
- **Background**: `#f8fafc` (Tailwind: `slate-50`) — page background
- **Surface**: `#ffffff` (Tailwind: `white`) — cards, inputs
- **Border**: `#e2e8f0` (Tailwind: `slate-200`) — dividers, input borders
- **Text Primary**: `#1e293b` (Tailwind: `slate-800`) — headings, main text
- **Text Secondary**: `#64748b` (Tailwind: `slate-500`) — subtitles, counts, placeholders
- **Text Muted**: `#94a3b8` (Tailwind: `slate-400`) — disabled, completed text
- **Danger**: `#ef4444` (Tailwind: `red-500`) — delete actions
- **Danger Hover**: `#dc2626` (Tailwind: `red-600`)
- **Success**: `#22c55e` (Tailwind: `green-500`) — completed state accent

## Typography
- **Font Family**: Inter (Google Fonts), system-ui fallback
- **Heading (App Title)**: `text-3xl font-bold text-slate-800`
- **Subtitle**: `text-sm text-slate-500`
- **Body**: `text-sm text-slate-700`
- **Label / Badge**: `text-xs font-medium`

## Spacing & Layout
- Page max-width: `max-w-lg` (512px) centered
- Card padding: `p-6`
- Section gap: `gap-4`
- Input height: `h-11`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-full` for badges

## Components

### Card
```
bg-white rounded-2xl shadow-sm border border-slate-200 p-6
```

### Primary Button
```
bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 transition-colors
```

### Danger Button (icon)
```
text-slate-400 hover:text-red-500 transition-colors
```

### Input
```
w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white
```

### Todo Item
```
flex items-center gap-3 py-3 border-b border-slate-100 last:border-0
```

### Checkbox (custom)
- Unchecked: `w-5 h-5 rounded-full border-2 border-slate-300`
- Checked: `w-5 h-5 rounded-full bg-indigo-500 border-2 border-indigo-500` with checkmark icon

### Completed Todo Text
```
line-through text-slate-400
```

## Do's
- Always use explicit text colors — never rely on inherited color alone
- Use `transition-colors` on interactive elements
- Keep the layout single-column on mobile, centered card on desktop
- Use `shadow-sm` for subtle depth on cards

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use low-contrast text (e.g. gray on gray)
- Don't use raw hex values in JSX — map to Tailwind classes
