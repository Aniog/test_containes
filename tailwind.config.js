/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#f8f2e8',
          cream: '#fffaf1',
          stone: '#e7dac8',
          line: '#d8c8b2',
          taupe: '#7d6f60',
          espresso: '#241713',
          ember: '#4a2e25',
          gold: '#c89b45',
          antique: '#8a6428',
          blush: '#ead3c8',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        refined: '0.14em',
        velmora: '0.22em',
      },
      boxShadow: {
        velmora: '0 24px 80px rgba(36, 23, 19, 0.12)',
        soft: '0 16px 45px rgba(74, 46, 37, 0.10)',
      },
      aspectRatio: {
        product: '4 / 5',
        portrait: '9 / 16',
        editorial: '5 / 6',
        wide: '16 / 9',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawerIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
        drawerIn: 'drawerIn 260ms ease-out both',
      },
    },
  },
  plugins: [],
}
