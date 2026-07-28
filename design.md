# SSourcing China - Design Guidelines

## Visual Style
- Clean, professional B2B aesthetic
- Trustworthy and international feel
- Minimalist layout with generous whitespace
- Navy blue (#0A2540) as primary brand color
- Steel blue (#1E3A5F) for secondary elements
- Accent teal (#0D9488) for CTAs and highlights
- Light gray (#F8FAFC) backgrounds for sections
- White (#FFFFFF) for cards and content areas
- Dark slate (#1E293B) for body text
- Muted gray (#64748B) for secondary text

## Typography
- Font: Inter (system-ui fallback)
- Headlines: 600-700 weight, tight tracking
- Body: 400-500 weight, 1.6 line-height
- Use semantic hierarchy: h1, h2, h3
- No decorative fonts

## Layout Principles
- Max container width: 1280px
- Consistent 24px/48px spacing rhythm
- Responsive: mobile-first, then tablet, desktop
- Sticky navigation with clear branding
- Footer with essential links and contact

## Components
- Buttons: solid primary (teal), outline secondary (navy)
- Cards: subtle shadow, clean borders, white bg
- Forms: clean inputs, clear labels, teal focus states
- Navigation: horizontal on desktop, hamburger on mobile
- Sections: alternating light/white backgrounds

## Imagery
- Use realistic factory, QC inspection, shipping, and supplier verification visuals
- Professional photography style - no stock clichés
- Images should convey reliability and process
- Use data-strk-img system for dynamic stock images

## Color Palette (Tailwind)
- Primary: slate-900 (#0F172A) / navy-900
- Secondary: slate-700
- Accent: teal-600 (#0D9488)
- Backgrounds: slate-50, white
- Text: slate-900, slate-600, slate-500
- Borders: slate-200

## Do's
- Use plenty of white space
- Keep copy concise and practical
- Show real process steps
- Include trust signals (years, clients, coverage)
- Make CTAs prominent but not aggressive

## Don'ts
- No exaggerated claims ("#1", "guaranteed", "best ever")
- No bright gradients or playful colors
- No cluttered layouts
- No stock photo clichés (smiling handshakes, etc.)
- No popups or aggressive lead capture

## Page Structure
All pages share:
- Top navigation bar (logo + links + CTA button)
- Footer (links, contact, copyright)

Home:
- Hero with headline + CTA
- Trust bar (stats)
- Services overview
- Problems we solve
- Sourcing process (4-6 steps)
- Products we source (grid)
- Case studies (3 cards)
- FAQ accordion
- Final CTA / inquiry form

Services:
- Detailed service cards
- What each service includes

How It Works:
- Step-by-step sourcing process
- Timeline expectations
- Communication process

Products We Source:
- Category grid with examples
- Industries served

Case Studies:
- Detailed project stories
- Results and process highlights

Blog:
- Article listing (static for now)
- Category filters

Contact:
- Inquiry form (name, email, company, message, product interest)
- Office info / contact details
- Map placeholder or contact info

## Form Behavior
- All forms show success message on submit (client-side only)
- No backend integration in this phase
- Clear validation feedback

## SEO
- Page title: "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
- Meta description on home
- Clean URL structure
