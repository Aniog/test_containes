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
        muted: '#6B6560',
        'muted-bg': '#F0EBE3',
        border: '#E8E2D9',
        'dark-surface': '#1A1A1A',
        'dark-text': '#FAF7F2',
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
