/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso:    '#1A1208',
        ivory:       '#FAF7F2',
        'warm-white':'#FFFDF9',
        gold:        '#C9A96E',
        'gold-light':'#E8D5A3',
        'gold-dark': '#A07840',
        charcoal:    '#2C2416',
        'warm-gray': '#8B7D6B',
        mist:        '#E8E2D9',
        blush:       '#F5EDE4',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn:       'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        slideInLeft:  'slideInLeft 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
