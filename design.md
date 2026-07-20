# Velmora Fine Jewelry Visual Design

## Direction
Quiet luxury with a warm editorial point of view. The storefront should feel premium, intimate, and calm, with generous whitespace and restrained metallic accents. It should never feel loud, discount-led, or generic marketplace.

## Palette
Use a refined deep espresso base with warm ivory surfaces and champagne-gold accents.

- Espresso: `velmora-espresso` (`#1D1714`) for primary dark backgrounds and high-contrast text.
- Cocoa: `velmora-cocoa` (`#332720`) for elevated dark panels and nav states.
- Ivory: `velmora-ivory` (`#F8F3EA`) for page backgrounds.
- Parchment: `velmora-parchment` (`#EFE4D4`) for soft editorial sections.
- Champagne: `velmora-champagne` (`#C8A46D`) for buttons, accents, ratings, and hairlines.
- Antique: `velmora-antique` (`#9F7A43`) for hover states and secondary accents.
- Mist: `velmora-mist` (`#D8CBB9`) for dividers and muted borders.
- Rose: `velmora-rose` (`#7E4E45`) for subtle warm highlights.

Always pair dark backgrounds with ivory text and light backgrounds with espresso text. Do not use low-contrast gold text on light surfaces for body copy.

## Typography
- Headings and product names: elegant serif, `Cormorant Garamond`, with generous line-height.
- Body and UI: `Manrope`, clean and understated.
- Product names: uppercase, wide letter spacing, refined sizing.

Example classes:
- Heading: `font-serif text-5xl md:text-7xl leading-none tracking-tight`
- Product name: `font-serif uppercase tracking-[0.22em] text-sm`
- UI label: `font-sans uppercase tracking-[0.18em] text-xs`

## Layout and spacing
- Use mobile-first layouts with generous padding: `px-5`, `md:px-8`, `lg:px-12`.
- Keep desktop sections wide but composed: `max-w-7xl mx-auto`.
- Use thin dividers and hairline borders: `border-velmora-mist/70`.
- Favor editorial image blocks, split sections, and calm grid rhythm.

## Components
- Buttons: premium, restrained, either champagne filled with espresso text or transparent ivory outline on dark surfaces.
- Cards: soft ivory/parchment surfaces with subtle shadows and hairline borders.
- Cart drawer: dark espresso or warm ivory with explicit readable text colors.
- Forms: thin borders, warm fills, clear focus rings in champagne.

## Motion
Use subtle transitions only: `transition duration-300 ease-out`, gentle image scale on hover, soft fades. Avoid bouncy or flashy animations.

## Do
- Use warm jewelry imagery against neutral/dark backgrounds.
- Keep copy concise and editorial.
- Use high contrast for all text.
- Make mobile interactions easy with large touch targets.

## Don’t
- Don’t use bright sale colors, neon accents, heavy gradients, or crowded product cards.
- Don’t make gold text too small or low-contrast on ivory.
- Don’t rely on hardcoded image URLs; use the Strikingly stock image attribute system.
