/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#C4501A',
        'burnt-orange-light': '#D96B35',
        'burnt-orange-dark': '#9E3D10',
        'deep-ochre': '#B8860B',
        'ochre-light': '#D4A017',
        'ochre-pale': '#E8C96A',
        'acacia-green': '#4A5E2F',
        'acacia-light': '#6B7F45',
        'acacia-dark': '#2E3B1A',
        'savanna-cream': '#F5EDD6',
        'savanna-warm': '#EDD9A3',
        'earth-brown': '#6B4226',
        'earth-dark': '#3D2010',
        'dusk-purple': '#4A3728',
        'sky-amber': '#E8A020',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        'serif-display': ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'parallax-slow': 'parallaxDrift 20s ease-in-out infinite alternate',
        'heat-haze': 'heatHaze 3s ease-in-out infinite',
        'fade-dissolve': 'fadeDissolve 1.2s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        parallaxDrift: {
          '0%': { transform: 'scale(1.08) translateX(0px) translateY(0px)' },
          '100%': { transform: 'scale(1.08) translateX(-20px) translateY(-10px)' },
        },
        heatHaze: {
          '0%, 100%': { filter: 'blur(0px)', opacity: '1' },
          '50%': { filter: 'blur(1px)', opacity: '0.92' },
        },
        fadeDissolve: {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-savanna': 'linear-gradient(135deg, #C4501A 0%, #B8860B 50%, #4A5E2F 100%)',
        'gradient-dusk': 'linear-gradient(180deg, #E8A020 0%, #C4501A 40%, #3D2010 100%)',
        'gradient-earth': 'linear-gradient(180deg, rgba(61,32,16,0) 0%, rgba(61,32,16,0.7) 100%)',
      },
    },
  },
  plugins: [],
}
