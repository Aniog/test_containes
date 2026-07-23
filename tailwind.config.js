/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        parchment: '#F3EFE8',
        espresso: '#1C1917',
        warmstone: '#78716C',
        stoneborder: '#E7E5E4',
        gold: {
          DEFAULT: '#B4862C',
          dark: '#8C6A1F',
          light: '#D4AF37',
          muted: '#C8B99A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      transitionTimingFunction: {
        'in-out-circ': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
