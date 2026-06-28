# SSourcing China Design Guide

## Brand direction
- Professional, international, practical, and trustworthy.
- Visual tone should feel like a reliable B2B operations partner, not a flashy consumer brand.
- Use clean layouts, clear hierarchy, generous spacing, and business-friendly copy.

## Typography
- Primary font: Inter.
- Headings should feel confident and structured.
- Example Tailwind classes:
  - Hero H1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
  - Section headings: `text-3xl md:text-4xl font-semibold tracking-tight`
  - Body copy: `text-base md:text-lg leading-7`
  - Small labels: `text-sm font-medium uppercase tracking-[0.18em]`

## Color system
- Use a light neutral background with deep navy and slate foregrounds.
- Primary brand color should feel credible and international.
- Prefer semantic Tailwind theme tokens defined in CSS rather than raw hex in JSX.
- Intended roles:
  - Background: soft white / cool neutral
  - Surface: white
  - Foreground: deep navy
  - Muted text: slate gray
  - Primary: business blue
  - Accent: soft steel / pale blue
  - Border: light neutral gray
  - Success/trust: muted green-blue support tone

## Layout and spacing
- Use a centered content width with comfortable whitespace.
- Example Tailwind classes:
  - Page container: `mx-auto w-full max-w-7xl px-6 lg:px-8`
  - Section spacing: `py-16 md:py-24`
  - Card padding: `p-6 md:p-8`
  - Grid gaps: `gap-6 md:gap-8`

## Components
- Cards should use subtle borders, soft shadows, and rounded corners.
- Buttons should be simple, strong, and readable.
- Forms should have clear labels, borders, and visible focus states.
- Navigation should remain minimal and businesslike.
- Case studies and trust blocks should feel evidence-based.

## Imagery
- Use realistic sourcing-related visuals only.
- Prefer factory floor, product inspection, supplier meetings, cargo handling, and shipping coordination scenes.
- Avoid generic startup illustrations, abstract 3D art, or overly staged corporate smiling team photos.

## Do
- Keep every text element clearly readable against its surface.
- Use concise, practical copy.
- Highlight process clarity, supplier verification, QA discipline, and shipping coordination.
- Maintain responsive layouts that are multi-column on desktop and comfortable on mobile.

## Don't
- Do not use exaggerated claims like "best in the world" or "guaranteed success".
- Do not use neon colors, oversized gradients, or playful consumer-style visuals.
- Do not use low-contrast text.
- Do not overcrowd sections with dense paragraphs.
