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
          bg: '#FAF8F5',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          secondary: '#6B6560',
          muted: '#9B9590',
          accent: '#B8860B',
          'accent-hover': '#996F0A',
          'accent-light': '#F5E6C8',
          border: '#E8E4DF',
          'border-thin': '#D4CFC9',
          dark: '#1A1A1A',
          'dark-text': '#FAF8F5',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.15em',
      },
    },
  },
  plugins: [],
}
