# SSourcing China Design System

## Brand personality
SSourcing China should feel clean, trustworthy, international, practical, and B2B-focused. The design should support overseas buyers evaluating a China sourcing partner, with calm confidence rather than exaggerated claims.

## Color palette
Use named Tailwind colors from `tailwind.config.js`:
- `ss-navy` (`#0f2742`) for headers, footer, and primary text on light surfaces.
- `ss-blue` (`#1f5f9f`) for primary actions, links, and selected states.
- `ss-sky` (`#eaf4fb`) for subtle blue section backgrounds.
- `ss-steel` (`#506274`) for secondary copy.
- `ss-border` (`#d8e2ec`) for clean B2B dividers and card borders.
- `ss-amber` (`#d9922e`) for restrained highlight accents and risk/quality notes.
- `ss-cream` (`#f7f4ef`) for warm alternate sections.

## Typography
- Use Inter for all UI text.
- Headings should be clear and direct, using `font-semibold` or `font-bold` with tight leading.
- Body text should use `text-ss-steel` on white or pale backgrounds for readable contrast.
- Keep marketing copy concise and practical.

## Layout and spacing
- Use a maximum content width of `max-w-7xl` with `px-4 sm:px-6 lg:px-8`.
- Sections should use generous vertical spacing: `py-16 lg:py-24`.
- Cards should use `rounded-2xl`, `border border-ss-border`, `bg-white`, and subtle shadows such as `shadow-sm`.
- Desktop layouts should use grids with two to four columns where appropriate. Mobile layouts should stack naturally.

## Visual style
- Use realistic factory, inspection, product, logistics, and business meeting visuals through the Strikingly stock image attributes.
- Prefer white surfaces, crisp borders, restrained blue accents, and practical iconography.
- Buttons should be professional: primary `bg-ss-blue text-white hover:bg-ss-navy`; secondary `border border-ss-border text-ss-navy hover:bg-ss-sky`.

## Do
- Make every form label, table/card value, CTA, and badge clearly readable.
- Use semantic sections and accessible labels.
- Present credibility through process, transparency, and operational details.

## Don't
- Do not use exaggerated claims such as guaranteed lowest prices or risk-free sourcing.
- Do not use low-contrast text.
- Do not use random one-off hex values in JSX class strings.
