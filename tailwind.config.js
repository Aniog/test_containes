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
        stone: '#4A4540',
        ivory: '#FAF7F2',
        cream: '#F2EDE4',
        linen: '#E8E0D4',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        muted: '#7A7068',
        whisper: '#B0A898',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        'ultra-wide': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(26,23,20,0.06)',
        'card-hover': '0 8px 40px rgba(26,23,20,0.12)',
        'drawer': '-4px 0 40px rgba(26,23,20,0.15)',
      },
    },
  },
  plugins: [],
}

