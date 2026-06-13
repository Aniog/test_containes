# SSourcing China — Design Guidelines

## Visual Identity
- Industry: B2B sourcing / supply chain / quality control
- Personality: Clean, trustworthy, international, professional, practical
- No exaggerated claims, no flashy animations, no emojis

## Typography
- Font family: Inter (from Google Fonts, already in index.html)
- Headings: font-semibold or font-bold, tracking-tight
- Body: text-base, text-gray-700
- Small/caption: text-sm, text-gray-500

## Colors (Tailwind config)
- Primary Blue: #1e3a5f (deep navy — trust, stability)
- Primary Lighter: #2c5282
- Accent Orange: #e07b39 (warm, action-oriented)
- Accent Orange Hover: #c96a2e
- Gray backgrounds: #f8fafc (slate-50), #f1f5f9 (slate-100)
- Text: #1e293b (slate-800) for headings, #475569 (slate-600) for body
- White backgrounds with subtle borders

## Spacing
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8

## Borders & Shadows
- Cards: bg-white rounded-xl shadow-sm border border-gray-100
- Shadows: shadow-sm for cards, shadow-md for hover states
- No harsh shadows or neon glows

## Buttons
- Primary: bg-[#e07b39] hover:bg-[#c96a2e] text-white font-medium rounded-lg px-6 py-3
- Secondary: bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg px-6 py-3
- Transitions: transition-colors duration-200

## Icons
- Use Lucide React icons
- Icon sizes: w-5 h-5 (inline), w-8 h-8 (feature cards), w-12 h-12 (hero badges)
- Color: primary blue or accent orange for feature icons

## Images
- Use data-strk-img for realistic factory/QC/shipping visuals
- Ratios: 16:9 for hero backgrounds, 4:3 for cards, 3:2 for case studies

## Do's
- Use white backgrounds with subtle gray section dividers
- Keep copy concise and benefit-driven
- Use real-looking business imagery (factories, warehouses, QC inspectors)
- Numbered steps for processes
- Clear section hierarchy with consistent heading styles

## Don'ts
- No gradient backgrounds on sections
- No neon/fluorescent colors
- No exaggerated animations or transitions
- No generic stock photo clichés (handshakes, globes)
- No dark mode sections
