/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#1f1916',
          cocoa: '#5b4d45',
          parchment: '#f7f1e9',
          mist: '#fbf8f4',
          sand: '#e4d7c7',
          line: '#d5c4b1',
          gold: '#b59669',
          goldDeep: '#8f7145',
          forest: '#30413a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        overline: '0.22em',
        product: '0.28em',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 25, 22, 0.08)',
        panel: '0 24px 60px rgba(31, 25, 22, 0.12)',
      },
      borderRadius: {
        hero: '2rem',
      },
    },
  },
  plugins: [],
}
