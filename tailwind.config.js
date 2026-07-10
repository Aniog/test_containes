/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1714',
        'velmora-charcoal': '#2C2825',
        'velmora-stone': '#4A4540',
        'velmora-linen': '#F5F0E8',
        'velmora-cream': '#FAF7F2',
        'velmora-ivory': '#FFFDF9',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E2C98A',
        'velmora-gold-dark': '#A8854A',
        'velmora-text-dark': '#1A1714',
        'velmora-text-mid': '#5C5550',
        'velmora-text-muted': '#9C9490',
        'velmora-text-light': '#F5F0E8',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-lg': '0.15em',
        'widest-md': '0.12em',
        'widest-sm': '0.08em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(26,23,20,0.08)',
        'card-hover': '0 8px 40px rgba(26,23,20,0.14)',
        'nav': '0 2px 20px rgba(26,23,20,0.12)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #E2C98A 50%, #A8854A 100%)',
      },
    },
  },
  plugins: [],
}
