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
        parchment: '#F5F0E8',
        cream: '#FAF7F2',
        linen: '#EDE8DF',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        'ink-muted': '#6B6560',
        'ink-faint': '#9C9590',
        ivory: '#F5F0E8',
        'ivory-muted': '#C8C0B5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26,23,20,0.06)',
        'card-hover': '0 8px 40px rgba(26,23,20,0.12)',
        'drawer': '-4px 0 40px rgba(26,23,20,0.15)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
