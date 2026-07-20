/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        accent: '#B8860B',
        'accent-hover': '#9A7209',
        muted: '#F5F0E8',
        'muted-fg': '#6B6358',
        border: '#E8E0D4',
        'dark-surface': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.12em',
      },
    },
  },
  plugins: [],
}
