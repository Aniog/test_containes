# Visual Style Guide

## Overall Direction
- Build a calm, modern productivity interface with a light background and high-contrast text.
- Keep the layout spacious and focused, with one primary card containing the todo workflow.
- Use rounded surfaces and soft shadows for depth without heavy visual noise.

## Typography
- Use Inter across the app.
- Primary heading: `text-4xl md:text-5xl font-semibold tracking-tight text-slate-950`
- Section heading: `text-lg md:text-xl font-semibold text-slate-900`
- Body text: `text-sm md:text-base text-slate-600`
- Small helper text: `text-sm text-slate-500`

## Color System
- App background: `bg-slate-100`
- Primary surface: `bg-white text-slate-900`
- Secondary surface: `bg-slate-50 text-slate-700`
- Accent color: `indigo` family for focus states and primary actions, e.g. `bg-indigo-600 hover:bg-indigo-500 text-white`
- Success/completed states: `emerald` family, e.g. `bg-emerald-100 text-emerald-700`
- Destructive actions: `rose` family, e.g. `bg-rose-50 text-rose-700 hover:bg-rose-100`
- Borders: `border-slate-200`

## Layout and Spacing
- Use a centered content width with `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
- Main app card: `rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60`
- Standard spacing rhythm: `gap-4`, `gap-6`, `p-6`, `md:p-8`, `lg:p-10`
- Use two-column layouts only on medium and larger screens; keep mobile layouts stacked.

## Components
- Buttons should have clear foreground/background contrast and visible hover/focus styles.
- Inputs should use `border-slate-200 bg-white text-slate-900 placeholder:text-slate-400`.
- Badges should always have explicit foreground and background classes.
- Empty states should use a subtle surface with visible text, never muted-on-muted without contrast.

## Do
- Keep text readable on every surface.
- Use semantic Tailwind color families rather than custom hex values.
- Preserve a clean productivity aesthetic with generous whitespace.

## Don't
- Do not use low-contrast gray text on white cards for important values.
- Do not overcrowd desktop layouts into a narrow single-column card if more space is available.
- Do not introduce random accent colors outside slate, indigo, emerald, and rose.
