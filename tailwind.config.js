/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        cream: '#F7F4EF',
        charcoal: '#1C1C1C',
        black: '#1A1A1A',
        'warm-gray': '#6B6560',
        taupe: '#9B9590',
        gold: {
          DEFAULT: '#C9A962',
          dark: '#A88B45',
          light: '#D4BA7A',
        },
        hairline: '#E8E4DC',
        sage: '#7D9B76',
        rose: '#C27D7D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'extra-wide': '0.2em',
      },
      transitionDuration: {
        '300': '300ms',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
