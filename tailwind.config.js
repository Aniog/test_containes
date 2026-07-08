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
          cream: '#FAF8F5',
          warm: '#F5F0EB',
          deep: '#1A1A1A',
          gold: '#C9A96E',
          goldLight: '#D4B87A',
          goldDark: '#B8942F',
          text: '#1A1A1A',
          textMuted: '#6B6B6B',
          border: '#E8E4DF',
          borderLight: '#F0EDE8',
          white: '#FFFFFF',
          black: '#000000',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.2em',
        widest: '0.3em',
      },
      boxShadow: {
        premium: '0 2px 20px rgba(0, 0, 0, 0.06)',
        'premium-lg': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    },
  },
  plugins: [],
}
