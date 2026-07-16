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
          dark: '#1A1817',
          cream: '#FBF8F4',
          sand: '#EDE7DF',
          gold: '#C8A96E',
          goldlight: '#E8D5B0',
          taupe: '#8B8279',
          rose: '#A67B7B',
          charcoal: '#2C2A29',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.25em',
        widest: '0.35em',
      },
    },
  },
  plugins: [],
}
