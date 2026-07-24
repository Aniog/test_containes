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
          cream: '#F5F0EB',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BA8A',
          dark: '#A68B4B',
        },
        stone: {
          100: '#F5F5F4',
          300: '#D6D3D1',
          500: '#78716C',
          700: '#44403C',
          900: '#1C1917',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-15': '0.15em',
        'wide-20': '0.20em',
        'wide-30': '0.30em',
      },
    },
  },
  plugins: [],
}
