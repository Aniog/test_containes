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
        cream: '#FAF7F2',
        linen: '#EDE8DF',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        muted: '#6B6259',
        whisper: '#9E9189',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
        'ultra-wide': '0.25em',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        card: '0 8px 32px rgba(26,23,20,0.08)',
        'card-hover': '0 16px 48px rgba(26,23,20,0.14)',
        drawer: '-4px 0 24px rgba(26,23,20,0.12)',
      },
      aspectRatio: {
        '9/16': '9 / 16',
        '4/5': '4 / 5',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
