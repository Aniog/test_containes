/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F8F5F0',
          sand: '#EDE8E0',
          stone: '#D5CFC6',
          charcoal: '#1E1E1E',
          ink: '#2A2A2A',
          warmgray: '#6B6560',
          gold: '#C5A265',
          goldlight: '#D9BC8A',
          golddark: '#A68340',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
