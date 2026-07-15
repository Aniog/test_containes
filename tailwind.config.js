/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F2',
        surface: '#F5F0E8',
        foreground: '#1A1A1A',
        muted: '#6B6560',
        accent: '#B8860B',
        'accent-hover': '#9A7209',
        'accent-light': '#D4A843',
        border: '#E8E2D9',
        dark: '#1A1A1A',
        'dark-muted': '#A39E98',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
