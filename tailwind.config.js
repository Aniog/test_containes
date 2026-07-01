/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8860B',
          hover: '#9A7209',
          light: '#D4A843',
          pale: '#F5ECD7',
        },
        base: {
          DEFAULT: '#1C1917',
          light: '#292524',
        },
        surface: {
          DEFAULT: '#FAFAF9',
          warm: '#F5F0EB',
        },
        muted: '#78716C',
        divider: '#E7E5E4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.1em',
        'wide': '0.05em',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
