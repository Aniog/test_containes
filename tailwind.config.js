/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1714',
        espresso: '#2A2420',
        cream: '#F7F2EA',
        sand: '#EDE4D6',
        champagne: '#C9A24B',
        'champagne-dark': '#A8842F',
        mocha: '#3D332B',
        taupe: '#8A7B6C',
        stone: '#B8A99A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
