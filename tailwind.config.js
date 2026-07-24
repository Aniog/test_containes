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
        gold: '#B8860B',
        'gold-light': '#D4A853',
        muted: '#F0EBE3',
        'muted-fg': '#6B6560',
        dark: '#1A1A1A',
        'dark-muted': '#2A2A2A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
