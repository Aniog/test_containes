/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0B1F3A',
        'brand-blue': '#1E63B6',
        'brand-slate': '#526173',
        'brand-mist': '#F3F6FA',
        'brand-line': '#D8E0EA',
        'brand-gold': '#B8892E',
        'brand-white': '#FFFFFF',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(11, 31, 58, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
