/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep warm ivory + rich espresso + gold accent
        ivory:    '#F7F3EE',
        cream:    '#EDE8E0',
        sand:     '#D9CFC3',
        gold:     '#B8965A',
        'gold-light': '#D4AF72',
        'gold-dark':  '#8C6E3A',
        espresso: '#2A1F14',
        'espresso-mid': '#3D2E1E',
        charcoal: '#4A3F35',
        muted:    '#8A7D70',
        blush:    '#E8D5C4',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
