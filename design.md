Velmora Fine Jewelry visual system

Direction
- Quiet luxury with a deep espresso backdrop and warm champagne accents.
- The experience should feel editorial, calm, and premium-but-accessible.
- Use strong contrast and soft lighting so gold jewelry feels luminous, not flashy.

Typography
- Headings and product names: Cormorant Garamond or Playfair Display feel. Use elegant serif styling with high contrast and generous line height.
- Body and UI: Inter.
- Product names should be uppercase with wide tracking.

Color system
- Background: deep espresso surface, e.g. Tailwind classes like `bg-stone-950`.
- Elevated surface: warm charcoal, e.g. `bg-stone-900`.
- Soft surface: ivory/champagne wash, e.g. `bg-stone-100` or `bg-amber-50`.
- Primary text on dark: `text-stone-100`.
- Secondary text on dark: `text-stone-300`.
- Primary text on light: `text-stone-900`.
- Accent: muted gold/champagne, e.g. `bg-amber-200`, `text-amber-200`, `border-amber-200/40`.
- Hairlines: `border-stone-800` on dark and `border-stone-200` on light.

Layout and spacing
- Use generous vertical spacing: sections usually `py-16 md:py-24`.
- Constrain content with `max-w-7xl` and comfortable horizontal padding `px-4 sm:px-6 lg:px-8`.
- Prefer clean grids, editorial asymmetry, and breathing room over dense merchandising.

Components
- Buttons should feel premium: rounded-full, subtle shadows, restrained transitions, no loud gradients.
- Cards should use soft shadows, thin borders, and clear readable text.
- Navigation should be refined and minimal, with a transparent-to-solid scroll transition.

Do
- Keep product imagery large and elegant.
- Use thin dividers and subtle hover motion.
- Maintain readable text on every surface.

Don't
- Do not use bright sale colors, discount badges, or noisy promotional UI.
- Do not stack everything into one narrow mobile-style column on desktop.
- Do not use arbitrary hex values directly in class names when a Tailwind token works.
