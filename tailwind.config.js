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
        charcoal: '#2C2825',
        stone: '#3D3835',
        parchment: '#F5F0E8',
        cream: '#FAF7F2',
        linen: '#EDE8DF',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        mist: '#6B6460',
        whisper: '#9C9490',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
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
      boxShadow: {
        subtle: '0 2px 20px rgba(26,23,20,0.06)',
        card: '0 8px 40px rgba(26,23,20,0.12)',
        'card-sm': '0 4px 20px rgba(26,23,20,0.08)',
      },
      aspectRatio: {
        '9/16': '9 / 16',
        '3/4': '3 / 4',
      },
    },
  },
  safelist: [
    'fill-gold',
    'fill-linen',
    'text-gold',
  ],
  plugins: [],
}
