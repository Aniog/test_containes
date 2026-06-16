# ARTITECT MACHINERY Design System

## Brand personality
Elegant, precise, reliable, and user friendly. The visual style should feel like premium industrial engineering: clean lines, confident spacing, refined typography, and clear product information.

## Colors
- Primary surface: deep slate / near-black industrial tones. Example Tailwind classes: `bg-slate-950`, `text-slate-50`.
- Secondary surface: white and soft slate panels. Example classes: `bg-white`, `bg-slate-50`, `text-slate-950`.
- Brand accent: amber/gold for calls to action, highlights, and premium details. Example classes: `bg-amber-500`, `text-amber-500`, `border-amber-300`.
- Supporting cool accent: steel blue for technical details. Example classes: `bg-sky-900`, `text-sky-100`, `border-sky-200`.
- Muted text: use readable slate tones. Example classes: `text-slate-600`, `text-slate-300`.

## Typography
- Use Inter as the base font.
- Headings: bold, tight tracking, elegant and confident. Example classes: `text-4xl md:text-6xl font-bold tracking-tight`.
- Body text: comfortable line height, medium contrast. Example classes: `text-base leading-7 text-slate-600`.
- Labels and badges: uppercase or small caps when appropriate. Example classes: `text-xs font-semibold uppercase tracking-[0.2em]`.

## Layout and spacing
- Use spacious sections with strong alignment. Example classes: `py-16 md:py-24`, `max-w-7xl mx-auto px-6`.
- Desktop layouts should use multiple columns where useful; mobile should stack cleanly.
- Cards should have generous padding and subtle borders/shadows. Example classes: `rounded-3xl border border-slate-200 bg-white p-6 shadow-sm`.

## Components
- Navigation: clear, minimal, anchored to sections, with a strong CTA.
- Hero: dark premium industrial panel with clear headline and product promise.
- Product cards: white cards with concise benefits and specs.
- Process/features: use numbered steps and icons for clarity.
- Contact section: accessible, high-contrast form-like call-to-action without requiring persistence.

## Do
- Keep all text highly readable with explicit foreground colors.
- Use consistent rounded corners and borders.
- Use stock image tags for machinery/industrial visuals where helpful.
- Make the site responsive with `md:` and `lg:` Tailwind breakpoints.

## Don't
- Do not use low-contrast gray text on dark backgrounds.
- Do not use hardcoded external image URLs.
- Do not overcrowd desktop sections with mobile-only stacked layouts.
- Do not introduce arbitrary hex colors in components.
