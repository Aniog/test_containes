/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C1917',
        cream: '#F9F7F4',
        taupe: '#D7CFC5',
        gold: '#B8944A',
        'gold-hover': '#9C7A3A',
        'gold-light': '#F3EAD6',
        stone: '#8C8179',
        'stone-light': '#A8A09A',
        'warm-gray': '#EBE7E2',
        'rose-tint': '#F4EBE4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.18em',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
