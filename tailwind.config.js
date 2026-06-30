/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette: deep warm charcoal base + champagne/gold accents
        velvet: {
          50:  '#faf8f5',
          100: '#f4efe6',
          200: '#e8ddd0',
          300: '#d6c5b0',
          400: '#c0a882',
          500: '#a8895a',
          600: '#8f6f3e',
          700: '#735630',
          800: '#5c4226',
          900: '#3d2b18',
        },
        champagne: {
          50:  '#fdfaf4',
          100: '#f9f2e3',
          200: '#f2e4c4',
          300: '#e8d09e',
          400: '#d4b06a',
          500: '#c49a45',
          600: '#a87d2e',
          700: '#8a6224',
          800: '#6e4d1d',
          900: '#4f3614',
        },
        obsidian: '#1a1614',
        charcoal: '#2d2520',
        mink: '#4a3f38',
        stone: '#7a6e68',
        parchment: '#f7f3ee',
        cream: '#fdfaf6',
        gold: '#c49a45',
        'gold-light': '#e8d09e',
        'gold-pale': '#f9f2e3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
