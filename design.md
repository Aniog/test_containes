# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm, editorial, premium-but-accessible. The storefront should feel refined and intimate, never loud, flashy, or discount-driven.

## Typography
- Headings and product names: elegant serif using Cormorant Garamond
- Body and UI: clean sans-serif using Inter
- Product names: uppercase with generous letter spacing

## Color direction
Commit to one cohesive dark-editorial direction that flatters gold jewelry.

### Named palette
- Ink base: deep espresso-charcoal for page backgrounds and hero overlays
- Porcelain: warm ivory for cards and light sections
- Champagne: muted warm gold accent for buttons, borders, and highlights
- Mocha: soft brown for secondary surfaces
- Mist: soft beige-gray for dividers and muted UI
- Forest ink: very dark brown-green for strong readable text on light surfaces

## Tailwind translation examples
- Page background: `bg-stone-950`
- Elevated dark surfaces: `bg-stone-900`
- Light editorial surfaces: `bg-stone-50`
- Accent gold: `bg-amber-200`, `text-amber-200`, `border-amber-200/60`
- Primary readable text on dark: `text-stone-50`
- Secondary readable text on dark: `text-stone-300`
- Primary readable text on light: `text-stone-900`
- Secondary readable text on light: `text-stone-600`
- Hairline dividers: `border-stone-200/70` on light, `border-stone-800/80` on dark

## Layout and spacing
- Use generous vertical rhythm with sections around `py-16 md:py-24`
- Keep content width elegant with `max-w-7xl` and readable text blocks with `max-w-2xl`
- Use rounded corners sparingly; prefer `rounded-2xl` for cards and imagery
- Use thin borders and subtle shadows instead of heavy decoration

## Buttons
- Primary button: warm gold background with dark text, subtle hover darkening
- Secondary button: transparent or porcelain background with thin champagne border
- Buttons should feel tailored and premium, never oversized or overly playful

## Imagery
- Favor warm-lit gold jewelry photography on neutral, espresso, or skin-tone backgrounds
- Use large editorial image areas with clean cropping
- Avoid cluttered, highly saturated, or discount-market visuals

## Motion
- Keep transitions subtle and smooth: `transition-all duration-300 ease-out`
- Use restrained hover lifts, opacity changes, and image fades

## Do
- Preserve strong text contrast on every surface
- Use whitespace generously
- Keep cards minimal and premium
- Let product imagery and typography lead

## Don’t
- Do not use neon accents, bright sales colors, or dense layouts
- Do not use low-contrast gold-on-beige text for important information
- Do not make the UI feel mass-market or templated
