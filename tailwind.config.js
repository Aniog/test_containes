/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        surface: '#1A1A1A',
        'surface-light': '#262626',
        gold: {
          DEFAULT: '#C9A962',
          light: '#E5D4A1',
          dark: '#A68B4B',
        },
        white: '#FFFFFF',
        'off-white': '#F5F5F0',
        muted: '#8A8A8A',
        border: '#333333',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
      },
      maxWidth: {
        'container': '1280px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
    },
  },
  plugins: [],
}
