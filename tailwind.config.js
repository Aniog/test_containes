/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        parchment: '#F0EAE0',
        charcoal: '#1C1917',
        stone: '#6B6560',
        gold: '#B8935A',
        'gold-light': '#D4AF7A',
        'gold-pale': '#F0E4CC',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      boxShadow: {
        'warm-sm': '0 2px 12px rgba(184,147,90,0.08)',
        'warm-md': '0 4px 24px rgba(184,147,90,0.12)',
        'warm-lg': '0 8px 40px rgba(184,147,90,0.16)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
