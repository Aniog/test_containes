/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1C1714',
        ink: '#2A2420',
        champagne: '#B08D57',
        'champagne-deep': '#8A6D3E',
        ivory: '#F7F2EA',
        cream: '#FBF8F2',
        sand: '#E8DFD2',
        taupe: '#9C8B78',
        stone: '#6B5F52',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28, 23, 20, 0.18)',
      },
    },
  },
  plugins: [],
}
