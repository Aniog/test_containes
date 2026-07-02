/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-charcoal', 'text-charcoal', 'border-charcoal',
    'bg-cream', 'text-cream',
    'bg-ink', 'text-ink',
    'bg-gold', 'text-gold', 'border-gold',
    'bg-gold-dark', 'text-gold-dark',
    'bg-gold-light', 'text-gold-light',
    'bg-sand', 'text-sand', 'border-sand',
    'bg-linen', 'text-linen',
    'text-stone', 'border-stone',
    'hover:bg-charcoal', 'hover:text-charcoal',
    'hover:bg-ink', 'hover:text-ink',
    'hover:bg-gold', 'hover:text-gold',
    'hover:bg-gold-dark', 'hover:text-gold-dark',
    'hover:bg-cream', 'hover:text-cream',
    'hover:bg-linen', 'hover:text-linen',
    'hover:border-gold',
    'focus:border-gold',
    'bg-cream/95', 'bg-charcoal/10',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        ink: '#2C2420',
        stone: '#7A6F66',
        gold: '#B8860B',
        'gold-dark': '#96690A',
        'gold-light': '#D4A843',
        sand: '#E8E0D6',
        linen: '#F5F0EA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.15em',
        button: '0.1em',
      },
    },
  },
  plugins: [],
}
