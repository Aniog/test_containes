# Visual Style Guide for SSourcing China

## 1. Typography
- **Primary Font:** Inter, sans-serif (Standard Tailwind sans)
- **Headings (h1 - h6):** Bold (font-bold) to convey strength and trust.
- **Body Text:** Regular weight (font-normal) for readability, size base (text-base) or large (text-lg) for introductory paragraphs.

## 2. Colors
- **Primary Brand Color:** Blue (bg-blue-600, text-blue-600) to convey professionalism, trust, and corporate B2B identity.
- **Dark Elements / Backgrounds:** Gray-900 (bg-gray-900) for footers and high-contrast sections.
- **Light Backgrounds:** White (bg-white) and off-white (bg-gray-50) to keep the layout clean and spacious.
- **Accent/Alert Colors:** 
  - Green (bg-green-50, text-green-600) for success states (e.g., successful form submisison).
  - Red (bg-red-50, text-red-500) for validation errors.
  - Yellow (text-yellow-500) for warning icons or highlighted problems.

## 3. Spacing & Layout
- **Container:** Standard Tailwind container with margins (container mx-auto px-4 sm:px-6 lg:px-8).
- **Section Padding:** Generous vertical padding for sections (py-16, py-20, py-24) to allow content to breathe.
- **Grid Gaps:** Use `gap-8` to `gap-12` between grid items.

## 4. Components & Borders
- **Cards:** White background with subtle rounded corners (rounded-xl or rounded-2xl), a light border (border border-gray-100), and a soft shadow (shadow-sm). Hover states should elevate the shadow (hover:shadow-md) to indicate interactivity.
- **Buttons (CTAs):** 
  - Primary: Solid blue background (bg-blue-600), white text, rounded corners (rounded-md), and bold text on hover (hover:bg-blue-700).
  - Secondary / Outline: White border, transparent background.

## 5. Imagery
- **Aspect Ratios:** Use professional ratios like 16:9 for heroes and blog covers, and 4:3 for standard cards or section images.
- **Content:** Images should reflect real B2B sourcing environments: factories, shipping containers, quality control inspections, port logistics.

## Do's and Don'ts
- **DO:** Keep text contrast high. Always use dark text (gray-900 or gray-600) on light backgrounds, and white/gray-200 on dark backgrounds.
- **DO:** Use Lucide icons consistently at standard sizes (w-6 h-6 or w-8 h-8) to accompany service descriptions.
- **DON'T:** Use overly playful fonts, excessive animations, or emojis. The tone must remain strictly professional and trustworthy.
- **DON'T:** Hardcode hex colors inside class attributes. Stick to standard Tailwind palette colors mapped to semantic meanings (blue for primary, gray for neutral).
