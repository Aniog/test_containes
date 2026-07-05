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
        gold: '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A07840',
        ink: '#1A1714',
        muted: '#6B5E52',
        whisper: '#9E8E7E',
        divider: '#E8E0D4',
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
      },
    },
  },
  plugins: [],
}
