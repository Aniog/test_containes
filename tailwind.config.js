/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^(bg|text|border|ring|from|to|via)-navy-(50|100|200|400|600|700|800|900)/ },
    { pattern: /^(bg|text|border|ring)-brand-(red|navy)/ },
    { pattern: /^bg-brand-red-light/ },
    { pattern: /^bg-brand-navy-(light|dark)/ },
    { pattern: /^text-brand-red-light/ },
    { pattern: /^hover:(bg|text|border)-navy-(50|100|200|400|600|700|800|900)/ },
    { pattern: /^hover:(bg|text)-brand-(red|navy)/ },
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          400: '#4B6CB7',
          600: '#2A5298',
          700: '#1E3A8A',
          800: '#1B3A6B',
          900: '#0F2347',
        },
        brand: {
          red:      '#C0392B',
          'red-light': '#E74C3C',
          navy:     '#1B3A6B',
          'navy-light': '#2A5298',
          'navy-dark':  '#0F2347',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

