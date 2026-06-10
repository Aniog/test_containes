/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0B2545',
        'brand-navy-700': '#13315C',
        'brand-blue': '#1D4ED8',
        'brand-blue-600': '#2563EB',
        'brand-sky': '#E6EEF8',
        'brand-gold': '#C9A24B',
        'ink-900': '#0F172A',
        'ink-700': '#334155',
        'ink-500': '#64748B',
        'ink-200': '#E2E8F0',
        'surface': '#FFFFFF',
        'surface-muted': '#F6F8FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
