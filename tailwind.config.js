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
        charcoal: '#1A1A1A',
        muted: '#6B6560',
        accent: '#B8860B',
        'accent-hover': '#9A7209',
        surface: '#F3EDE7',
        border: '#E8E0D8',
        'dark-surface': '#2C2420',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
      },
    },
  },
  plugins: [],
}
