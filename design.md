# Design Guidelines

## Visual Style
- **Color Palette**: Slate & Blue
  - Primary Background: `bg-slate-50`
  - Secondary Background: `bg-white`
  - Primary Text: `text-slate-900`
  - Secondary Text: `text-slate-600`
  - Accent Color: `bg-blue-600` (Hover: `bg-blue-700`)
- **Typography**: Inter (System Default fallback)
  - Headers: `font-bold tracking-tight text-slate-900`
  - Body: `text-slate-600 leading-relaxed`
- **Borders & Shadows**:
  - Rounded corners: `rounded-xl`
  - Shadows: `shadow-sm` or `shadow-md` for cards
- **Spacing**:
  - Consistent padding: `p-4` or `p-6` for containers
  - Margin between sections: `my-8` or `my-12`

## Do's
- Use Tailwind CSS utility classes extensively.
- Ensure high contrast between text and background.
- Implement responsive designs using `md:` and `lg:` breakpoints.
- Use Lucide React icons for visual cues.

## Don'ts
- Do not use magic hex codes; stick to Tailwind's palette.
- Avoid invisible or low-contrast text.
- Do not use single-column stacking layouts on desktop.
- Avoid cluttered interfaces; prefer clean, white-space oriented designs.
