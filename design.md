# Design Guidelines

## Visual Style
- **Color Palette**: Modern and clean. Use a primary color of Indigo (`#4F46E5`), with neutral grays for text and backgrounds.
- **Typography**: Inter font for all text. Clear hierarchy from H1 to body text.
- **Spacing**: Use standard Tailwind spacing (4, 8, 12, 16, 24, 32 units).
- **Cards & Containers**: Subtle shadows (`shadow-sm` or `shadow-md`), rounded corners (`rounded-lg`).

## UI Components
- **Buttons**: Rounded, clear hover states. Primary button: `bg-indigo-600 text-white hover:bg-indigo-700`.
- **Inputs**: Consistent borders, clear focus rings (`focus:ring-2 focus:ring-indigo-500`).
- **Navigation**: Clean, sticky top nav with legible links.

## Do's and Don'ts
### Do's
- Use consistent padding and margins.
- Ensure high contrast for readability.
- Use responsive Tailwind classes (`md:`, `lg:`).
- Use Lucide icons for visual cues.

### Don'ts
- Don't use non-semantic colors.
- Don't overcrowd the layout.
- Don't use hardcoded pixel values unless necessary.
