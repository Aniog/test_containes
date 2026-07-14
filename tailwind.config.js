/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0F2A4A',
        'brand-blue': '#1A5FA8',
        'brand-sky': '#2E8BC0',
        'brand-red': '#C0392B',
        'neutral-900': '#111827',
        'neutral-700': '#374151',
        'neutral-500': '#6B7280',
        'neutral-200': '#E5E7EB',
        'neutral-100': '#F3F4F6',
        'neutral-50': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
