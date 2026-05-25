# Visual Style Guide

## Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Semi-bold to Bold (font-semibold, font-bold)
- **Body**: Regular (font-normal)

## Colors (Tailwind Classes)
- **Primary**: Blue-600 (`bg-blue-600`, `text-blue-600`)
- **Background**: White (`bg-white`) / Slate-50 (`bg-slate-50`)
- **Text Primary**: Slate-900 (`text-slate-900`)
- **Text Secondary**: Slate-500 (`text-slate-500`)
- **Border**: Slate-200 (`border-slate-200`)
- **Destructive**: Red-500 (`bg-red-500`)

## Spacing & Layout
- **Containers**: Center aligned with max-width (e.g., `max-w-xl mx-auto`)
- **Spacing**: Consistent padding and margins using Tailwind's 4-scale (e.g., `p-4`, `m-2`, `gap-4`)
- **Cards**: Soft shadows (`shadow-sm`) and rounded corners (`rounded-lg`)

## UI Components
- **Buttons**: Rounded-md, font-medium, hover transitions
- **Inputs**: Rounded-md, border-slate-300, focus:ring-2 focus:ring-blue-500
- **Checkboxes**: Custom styled if possible, otherwise clean default with blue accent

## Do's
- Use explicit text colors for all elements.
- Ensure high contrast between text and background.
- Use whitespace to separate content.
- Support responsive views from mobile to desktop.

## Don'ts
- Clear text on white background with no contrast.
- Crowded layouts on mobile.
- Hardcoded hex values in JSX (use Tailwind).
