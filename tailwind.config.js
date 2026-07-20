/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'ivory-dark': '#F2EDE4',
        espresso: '#1C1410',
        'espresso-light': '#3D2E24',
        gold: '#C9A96E',
        'gold-light': '#E2C98A',
        'gold-dark': '#A8854A',
        stone: '#8C7B6B',
        'stone-light': '#C4B5A5',
        charcoal: '#2C2420',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
}
