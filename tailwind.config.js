/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'velmora': {
          bg: '#FAF8F5',
          cream: '#F5F0EA',
          sand: '#EBE3D8',
          taupe: '#C4B8A8',
          stone: '#8A7E72',
          ink: '#2C2420',
          warm: '#3D322B',
          gold: '#C9A96E',
          goldlight: '#DCC090',
          golddark: '#A8824A',
          rose: '#C07A6B',
          roselight: '#D49A8D',
        },
      },
      letterSpacing: {
        'widest': '0.25em',
        'super': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
