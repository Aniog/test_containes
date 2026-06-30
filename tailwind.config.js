/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm charcoal base
        obsidian: '#1a1714',
        'obsidian-light': '#2a2520',
        // Warm off-white / cream
        ivory: '#f7f3ee',
        'ivory-dark': '#ede8e0',
        // Warm gold accent
        gold: '#c9a96e',
        'gold-light': '#dfc08a',
        'gold-dark': '#a8854a',
        // Muted warm taupe for secondary text
        taupe: '#8c7b6b',
        'taupe-light': '#b5a898',
        // Hairline divider
        divider: '#e2dbd2',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
