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
        surface: '#F5F0E8',
        foreground: '#1A1A1A',
        muted: '#6B6358',
        gold: '#B8860B',
        'gold-light': '#D4A853',
        divider: '#E8E0D4',
        ink: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.15em',
      },
    },
  },
  plugins: [],
}
