# SSourcing China Design System

## Brand direction
A professional B2B sourcing website for international buyers. The visual style should feel credible, operational, and globally business-ready rather than trendy or overly promotional.

## Typography
- Primary font: Inter
- Headings: strong, compact, confident
- Body copy: clear, neutral, practical
- Recommended Tailwind feel: `font-sans`, `font-semibold`, `tracking-tight`, `leading-7`

## Color system
Use named semantic tokens rather than hardcoded hex values in JSX.

- `bg-canvas`: warm light gray-blue page background
- `bg-surface`: white cards and content panels
- `bg-panel`: slightly tinted neutral panels
- `bg-brand`: deep navy for hero/nav/footer
- `bg-brand-soft`: muted blue panel for process/trust areas
- `fg-default`: primary text
- `fg-muted`: secondary text
- `fg-onbrand`: text on dark brand surfaces
- `border-soft`: subtle borders
- `accent`: restrained teal-blue highlight
- `accent-strong`: darker accent for buttons and links
- `success`: calm green for positive states

## Layout
- Use wide desktop sections with clear spacing and contained max-width layouts.
- Preferred section rhythm: `py-16 md:py-24`
- Preferred content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Desktop layouts should use 2 to 4 columns where appropriate; avoid mobile-stacked layout on large screens.

## Components
- Cards: white or lightly tinted backgrounds, subtle border, medium radius, soft shadow
- Buttons: solid brand primary for main CTA, outline/ghost for secondary CTA
- Navigation: simple, high trust, sticky header
- Forms: high contrast labels and inputs, generous spacing, clear submit action
- Badges: restrained, data-like, not flashy

## Imagery
- Use realistic visuals of supplier meetings, production floors, quality inspection, product packaging, containers, and shipping coordination.
- Images should support trust and operational capability.
- Avoid generic smiling-team-only imagery.

## Do
- Keep contrast strong and readable.
- Prioritize clarity, proof points, and business outcomes.
- Use icons sparingly to support structure.
- Maintain consistent spacing and alignment.

## Don't
- Do not use neon colors, gradients everywhere, or startup-style hype visuals.
- Do not use exaggerated claims or crowded hero sections.
- Do not use weak-contrast muted text on light panels.
