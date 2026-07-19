/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        surface: '#FFFFFF',
        charcoal: '#1A1A1A',
        muted: '#6B6560',
        gold: '#B8860B',
        'gold-hover': '#9A7209',
        'gold-light': '#F5EFE0',
        'border-subtle': '#E8E4DF',
        'dark-surface': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
