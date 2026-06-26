# Design System

## Typography
- **Font Family**: 'Inter', system-ui, sans-serif
- **Headings**: Semi-bold (600) or Bold (700)
- **Body**: Regular (400) or Medium (500)

## Colors
- **Primary**: slate-900 (#0f172a) / slate-50 (#f8fafc)
- **Secondary**: slate-600 (#475569) / slate-400 (#94a3b8)
- **Background**: slate-50 (#f8fafc)
- **Text**: slate-900 (#0f172a)

## Components
- **Cards**: Soft shadows, rounded corners (rounded-xl)
- **Buttons**: Rounded-md, focus ring, transitions
- **Spacing**: Generous padding and margins using Tailwind's spacing scale (p-4, m-8, etc.)

## Do's and Don'ts
### Do's
- Use Tailwind for all styling.
- Ensure high contrast for readability.
- Maintain responsive layouts across all screen sizes.

### Don'ts
- Use inline styles.
- Use arbitrary hex codes (prefer Tailwind's color palette).
- Use single-column layouts for desktop if multiple columns are appropriate.
