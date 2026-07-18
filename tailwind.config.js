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
          dark: '#1A1A1A',
          text: '#1A1A1A',
          muted: '#6B6560',
          gold: '#C9A96E',
          'gold-hover': '#B8944F',
          border: '#E8E4DF',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0,0,0,0.06)',
        'soft-hover': '0 4px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
