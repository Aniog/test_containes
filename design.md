# SSourcing China - Design System

## Brand Identity
- **Company**: SSourcing China - China-based sourcing agent for global buyers
- **Tone**: Professional, trustworthy, international, practical, no exaggerated claims
- **Target**: Overseas B2B buyers seeking reliable China sourcing

## Color Palette
- **Primary**: Deep navy blue `#0F2B46` - trust, professionalism
- **Primary Light**: `#1A3F5C` - hover states
- **Accent**: Warm amber/gold `#D4A843` - premium feel, CTAs
- **Accent Hover**: `#BF9530` - CTA hover
- **Success Green**: `#059669` - quality check, verified badges
- **Background**: `#FFFFFF` - clean white
- **Light Gray BG**: `#F8FAFB` - section alternation
- **Medium Gray BG**: `#EEF2F6` - cards, subtle sections
- **Text Primary**: `#1A202C` - main body text
- **Text Secondary**: `#4A5568` - secondary text, descriptions
- **Text Muted**: `#718096` - captions, meta text
- **Border**: `#E2E8F0` - dividers, card borders

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 weight, tight line-height (1.2)
- **Body**: 400 weight, line-height 1.6
- **Sizes**:
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - Body: text-base (16px)
  - Small: text-sm (14px)

## Layout
- **Max Width**: max-w-7xl mx-auto (1280px)
- **Section Padding**: py-16 md:py-24 px-4 md:px-6
- **Card Padding**: p-6 md:p-8
- **Grid Gap**: gap-6 md:gap-8
- **Border Radius**: rounded-lg (8px) for cards, rounded-md (6px) for buttons

## Component Styles

### Buttons
- **Primary**: bg-[#D4A843] text-white font-semibold rounded-md px-6 py-3 hover:bg-[#BF9530]
- **Secondary**: bg-white text-[#0F2B46] border border-[#0F2B46] font-semibold rounded-md px-6 py-3 hover:bg-[#0F2B46] hover:text-white
- **Dark**: bg-[#0F2B46] text-white font-semibold rounded-md px-6 py-3 hover:bg-[#1A3F5C]

### Cards
- bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow

### Section Headers
- text-[#0F2B46] font-bold
- Subtitle: text-[#4A5568] text-lg

### Navigation
- White background, fixed top, shadow on scroll
- Text: text-[#1A202C] hover:text-[#D4A843]
- CTA button in nav: accent colored

## Do's
- Use clean white space generously
- Maintain consistent spacing between sections
- Use icons from Lucide React for visual clarity
- Use stock images via data-strk-img for realistic factory/QC/shipping visuals
- Keep text contrast high for readability

## Don'ts
- Don't use decorative fonts or excessive styling
- Don't use gradients on text
- Don't use low-contrast text combinations
- Don't use emojis in professional sections
- Don't use animation-heavy interactions
