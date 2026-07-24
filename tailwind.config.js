/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0',
        deep: '#1A1714',
        'text-primary': '#1A1714',
        'text-secondary': '#6B6560',
        'text-on-dark': '#F8F5F0',
        'accent-gold': '#C9A96E',
        'accent-gold-hover': '#B89860',
        'border-light': '#E8E3DC',
        'border-dark': '#3A3530',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'super-wide': '0.2em',
      },
      maxWidth: {
        'content': '1280px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
