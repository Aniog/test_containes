/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          black: '#1C1917',
          charcoal: '#292524',
          cream: '#FAF7F2',
          ivory: '#F5F0E8',
          sand: '#E8DFD0',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BA8A',
          dark: '#A8894E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-sm': '0.05em',
        'wide': '0.08em',
        'wider': '0.12em',
        'widest': '0.15em',
        'logo': '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
