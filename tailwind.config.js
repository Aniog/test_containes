/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F4',
        'base-dark': '#0F0F0F',
        gold: '#B8956A',
        'gold-hover': '#A07E55',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6560',
        'text-muted': '#9A9590',
        hairline: '#E5E0DA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.12em',
      },
      transitionDuration: {
        '300': '300ms',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
