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
          obsidian: '#191f1c',
          ink: '#2d2924',
          ivory: '#f7f1e8',
          pearl: '#fffaf2',
          champagne: '#d0a868',
          champagneDark: '#a97832',
          taupe: '#837667',
          rose: '#ead8cc',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
