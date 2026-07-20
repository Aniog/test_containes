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
          sand: '#EDE7DE',
          stone: '#D5CFC6',
          taupe: '#A89F91',
          ink: '#1A1A1A',
          charcoal: '#2D2D2D',
          warmgray: '#6B6560',
          gold: '#C9A96E',
          goldlight: '#DDC79A',
          golddark: '#A0783C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
