# Velmora Fine Jewelry Design System

## Brand Direction
Velmora Fine Jewelry should feel like quiet luxury: editorial, warm, restrained, intimate, and polished. The storefront should flatter gold jewelry with deep neutral surfaces, champagne metallic accents, and soft ivory text treatments. The mood is premium-but-accessible, never loud, never discount-driven, and never overly trend-heavy.

## Palette
Use named colors only. Do not hardcode random hex values inside components.

- velmora-ink: `#171413` — deep espresso-charcoal background for hero, footer, and premium surfaces.
- velmora-panel: `#211d1b` — slightly lifted dark panel for cards and overlays.
- velmora-ivory: `#f6f0e8` — warm editorial background.
- velmora-cream: `#efe6da` — soft secondary background.
- velmora-gold: `#c8a66a` — restrained metallic accent.
- velmora-gold-deep: `#9c7a45` — darker accent for borders and hover states.
- velmora-mist: `#cdbfb0` — muted text on dark backgrounds.
- velmora-stone: `#7f6f63` — muted text on light backgrounds.
- velmora-line: `#d7cabd` — hairline divider on light surfaces.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant, high contrast, used generously.
- Body, UI, navigation, metadata: `Inter`, clean and quiet.
- Product names should be uppercase with generous tracking.

## Spacing & Layout
- Favor large vertical spacing: `py-16`, `py-20`, `lg:py-24`.
- Use wide containers: `max-w-7xl` with generous horizontal gutters.
- Hairline dividers should use `border-velmora-line/60` or `border-white/10`.
- Cards should breathe; avoid crowded modules.

## Components
- Buttons: refined rounded-full shapes, slim borders, subtle hover lift, gold accent for primary CTA.
- Product cards: editorial image-first layout, light card shadow, quick add overlay, uppercase product names.
- Navigation: transparent over hero, dark solid on scroll, thin underline/opacity hover.
- Inputs: quiet luxury styling with soft light backgrounds and visible text contrast.

## Motion
- Use subtle transitions only: `transition-all duration-300 ease-out`.
- Hover states may include slight translate, opacity shift, image scale, or border color change.
- Avoid bouncy or playful motion.

## Do
- Keep the visual system cohesive across home, shop, product, cart, and footer.
- Use warm-lit jewelry imagery on neutral or dark backgrounds.
- Maintain strong contrast and explicit foreground colors on every surface.
- Keep editorial whitespace intact on desktop while staying compact and clear on mobile.

## Don’t
- Do not use bright sale colors, generic marketplace styling, or discount-badge aesthetics.
- Do not use fully black backgrounds; stay warm and refined.
- Do not use low-contrast beige-on-beige text.
- Do not stack everything into a single narrow mobile-like column on desktop.
