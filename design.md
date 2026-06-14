# ARTITECT MACHINERY — Design System

## Brand Tone
Elegant industrial: precise engineering, premium materials, confident professionalism. The site should feel like a well-machined component — clean lines, considered details, and effortless usability.

## Color Palette
- **Steel Deep** `#0F1B2D` — primary brand color (deep navy/steel). Used for hero backgrounds, primary buttons, headings.
- **Steel Mid** `#1E2C42` — secondary surface, header background
- **Steel Soft** `#2A3A55` — borders, dividers, dark sections
- **Brushed Bronze** `#B08D57` — accent (lines, highlights, CTA hover). Conveys craftsmanship and metal.
- **Brushed Bronze Light** `#C9A876` — accent on dark
- **Graphite** `#3A4555` — body text on light surfaces
- **Slate** `#5A6678` — secondary body text
- **Mist** `#E8ECF1` — section background
- **Pearl** `#F7F9FC` — page background
- **Pure White** `#FFFFFF` — cards, primary surfaces

Use clear, semantic foreground/background pairs. Never place light text on light surfaces or dark text on dark surfaces.

## Typography
- **Display / Headings**: `"Playfair Display", serif` — for hero headline and section titles to give an elegant editorial feel.
- **Body / UI**: `"Inter", system-ui, sans-serif` — for all paragraphs, buttons, navigation. Keep generous line-height (1.6) for readability.
- **Eyebrow / Labels**: Inter uppercase with letter-spacing 0.18em and small size. Used above section titles to provide structure.

Sizes (Tailwind):
- Hero headline: `text-5xl md:text-7xl`
- Section title: `text-3xl md:text-5xl`
- Subheading: `text-xl md:text-2xl`
- Body: `text-base md:text-lg`
- Eyebrow: `text-xs uppercase tracking-[0.18em]`

## Spacing & Layout
- Container max-width: `max-w-7xl` with `px-6 lg:px-10`.
- Vertical section padding: `py-20 md:py-28`.
- Card padding: `p-8 md:p-10`.
- Generous breathing room between blocks; aim for 96-112px section gaps on desktop.

## Borders & Shadows
- Border radius: 4px for small elements, 8px for cards, 0px for large hero/feature blocks (industrial straight edges).
- Hairline borders: 1px solid `border-stone-200` on light cards; `border-white/10` on dark surfaces.
- Subtle shadow: `shadow-[0_2px_24px_rgba(15,27,45,0.06)]` for elevated cards on light bg.
- Heavier shadow: `shadow-[0_24px_60px_rgba(15,27,45,0.18)]` for the hero feature card.

## Imagery
- Use `data-strk-img` for hero background, product category thumbnails, and industry visuals.
- Always include alt text and a referenced text element ID for context.
- Maintain consistent 3:2 or 4:3 ratios across product cards.

## Components Style Guide
- **Buttons**
  - Primary: `bg-steel-deep text-white hover:bg-[#1E2C42]` with bronze underline animation.
  - Secondary: `border border-steel-deep text-steel-deep hover:bg-steel-deep hover:text-white`.
  - Ghost: text + bronze arrow on dark.
  - Padding: `px-7 py-3.5`, font-medium, `rounded-sm`, transition 200ms.
- **Navigation**: transparent on hero, becomes solid `Steel Mid` on scroll. Logo left, links right. Use uppercase Inter for nav links.
- **Cards**: white background, hairline border, optional inner accent line (4px bronze top border on hover).
- **Section header**: eyebrow + title + optional subtitle, centered or left-aligned. Title uses serif font.
- **Forms**: minimal line inputs (no heavy boxes) with bottom-border style. Labels above inputs in uppercase eyebrow.

## Voice & Copy
- Confident, knowledgeable, helpful. Avoid jargon-heavy sentences.
- Short value propositions. Use parallel structure.
- Always tie features back to customer outcomes: precision, productivity, reliability.

## Do's
- Use generous whitespace.
- Keep typography hierarchical but uncluttered.
- Provide clear next-step CTAs (Request a Quote, Talk to Engineering).
- Use the bronze accent sparingly for high-impact emphasis.

## Don'ts
- No more than 2 typefaces (Playfair Display + Inter only).
- No busy gradients; prefer flat colors with subtle textures.
- No tiny body text under 15px.
- No emoji icons; use Lucide React icons only.
