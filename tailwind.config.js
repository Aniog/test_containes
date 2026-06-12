/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^bg-navy-(50|100|400|500|600|700|800|900)$/ },
    { pattern: /^text-navy-(50|100|400|500|600|700|800|900)$/ },
    { pattern: /^border-navy-(50|100|400|500|600|700|800|900)$/ },
    { pattern: /^hover:bg-navy-(50|100|400|500|600|700|800|900)$/, variants: ['hover'] },
    { pattern: /^hover:text-navy-(50|100|400|500|600|700|800|900)$/, variants: ['hover'] },
    'bg-brand-red', 'bg-brand-redhov', 'text-brand-red',
    'hover:bg-brand-red', 'hover:bg-brand-redhov',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0D1B2A',
          800: '#1B2E45',
          700: '#1E3A5F',
          600: '#2A4F7C',
          500: '#3B6FA0',
          400: '#5B8FC0',
          100: '#E8F0F8',
          50:  '#F0F5FB',
        },
        brand: {
          red:    '#C0392B',
          redhov: '#E74C3C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
