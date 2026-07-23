/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        espresso: '#2C2420',
        parchment: '#F5F0E8',
        ivory: '#FAF7F2',
        linen: '#EDE8DF',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        muted: '#6B6560',
        whisper: '#9E9690',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.15em',
        wide: '0.08em',
      },
      transitionDuration: {
        400: '400ms',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #DFC08A 50%, #A8854A 100%)',
      },
    },
  },
  plugins: [],
}
