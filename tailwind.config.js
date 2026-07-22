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
          DEFAULT: '#C9A96E',
          light: '#E8D5B0',
          dark: '#A68B52',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE1',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#3D3D3D',
        },
        'warm-gray': {
          DEFAULT: '#8C8377',
          light: '#B8B0A6',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'nav': '0.15em',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
