/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FBF8F3',
          sand: '#F3EDE4',
          gold: '#C9A96E',
          'gold-dark': '#A6843C',
          'gold-light': '#E8D5B0',
          charcoal: '#2C2C2C',
          ink: '#1A1A1A',
          muted: '#8C8C8C',
          border: '#E5E0D8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
        card: '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
