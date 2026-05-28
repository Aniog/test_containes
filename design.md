# CUHK Mainland Alumni Association - Design System

## Brand Identity
- **Primary Color**: Deep Purple `#4B2D8F` (CUHK purple) — `bg-[#4B2D8F]`, `text-[#4B2D8F]`
- **Secondary Color**: Gold `#C9A84C` — `bg-[#C9A84C]`, `text-[#C9A84C]`
- **Accent**: Light Purple `#7B5EA7` — `bg-[#7B5EA7]`
- **Background**: Off-white `#F8F7FC` — `bg-[#F8F7FC]`
- **Surface**: White `#FFFFFF` — `bg-white`
- **Text Primary**: Dark `#1A1A2E` — `text-[#1A1A2E]`
- **Text Secondary**: Gray `#6B7280` — `text-gray-500`
- **Border**: `#E5E7EB` — `border-gray-200`
- **Success**: `#10B981` — `text-emerald-500`
- **Warning**: `#F59E0B` — `text-amber-500`
- **Error**: `#EF4444` — `text-red-500`

## Typography
- **Font**: Inter (Google Fonts)
- **Heading 1**: `text-4xl font-bold text-[#1A1A2E]`
- **Heading 2**: `text-2xl font-semibold text-[#1A1A2E]`
- **Heading 3**: `text-xl font-semibold text-[#1A1A2E]`
- **Body**: `text-base text-[#1A1A2E]`
- **Small/Caption**: `text-sm text-gray-500`
- **Label**: `text-sm font-medium text-[#1A1A2E]`

## Spacing
- Section padding: `py-16 px-4`
- Card padding: `p-6`
- Form gap: `gap-4`
- Button padding: `px-6 py-2.5`

## Components

### Buttons
- **Primary**: `bg-[#4B2D8F] hover:bg-[#3a2270] text-white font-medium px-6 py-2.5 rounded-lg transition-colors`
- **Secondary**: `bg-[#C9A84C] hover:bg-[#b8943d] text-white font-medium px-6 py-2.5 rounded-lg transition-colors`
- **Outline**: `border-2 border-[#4B2D8F] text-[#4B2D8F] hover:bg-[#4B2D8F] hover:text-white font-medium px-6 py-2.5 rounded-lg transition-colors`
- **Ghost**: `text-[#4B2D8F] hover:bg-purple-50 font-medium px-4 py-2 rounded-lg transition-colors`
- **Danger**: `bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2.5 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6`
- Hover: `hover:shadow-md transition-shadow`

### Form Inputs
- `w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#4B2D8F] focus:border-transparent`

### Badges
- **Pending**: `bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full`
- **Approved**: `bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full`
- **Rejected**: `bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full`
- **Paid**: `bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full`

### Navigation
- Sticky top nav: `bg-white shadow-sm border-b border-gray-100`
- Nav links: `text-gray-600 hover:text-[#4B2D8F] font-medium transition-colors`

## Do's
- Always use CUHK purple as the primary action color
- Use gold for highlights and secondary CTAs
- Maintain generous whitespace
- Use rounded-xl for cards, rounded-lg for inputs/buttons
- Keep text on white/light backgrounds always dark enough to read

## Don'ts
- Never use white text on gold background (low contrast)
- Never use light gray text on white background for important content
- Don't use more than 2 brand colors in one component
