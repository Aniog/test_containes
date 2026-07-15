/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:      '#F7F3EE',
        cream:      '#EDE7DC',
        espresso:   '#1A1208',
        'warm-brown': '#3D2B1F',
        taupe:      '#8C7B6B',
        gold:       '#C9A96E',
        'gold-light': '#E2C99A',
        'gold-dark':  '#A07840',
        divider:    '#DDD5C8',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.20em',
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
        slideOutRight: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeIn:        'fadeIn 0.6s ease-out forwards',
        slideInRight:  'slideInRight 0.35s ease-out forwards',
        slideOutRight: 'slideOutRight 0.35s ease-in forwards',
        marquee:       'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
