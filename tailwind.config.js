/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          espresso: '#1B1410',
          ink: '#2D231E',
          cocoa: '#4F3D33',
          ivory: '#F8F1E8',
          pearl: '#FFFDF8',
          linen: '#E8D9C7',
          champagne: '#C9A35F',
          gold: '#A9792B',
          rose: '#B88678',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.22em',
        nav: '0.16em',
      },
      aspectRatio: {
        product: '4 / 5',
        reel: '9 / 16',
        editorial: '5 / 6',
      },
      boxShadow: {
        velmora: '0 24px 60px rgba(27, 20, 16, 0.12)',
        glow: '0 18px 50px rgba(201, 163, 95, 0.18)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
